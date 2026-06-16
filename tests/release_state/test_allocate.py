"""SAA allocate / lookup / audit tests (E03:S02:T14)."""

from __future__ import annotations

import concurrent.futures
import math
import os
import time
from pathlib import Path

import pytest

from release_state.allocate import (
    PreviewNotAllowed,
    allocate,
    audit,
    lookup,
    lookup_or_raise,
    parse_internal_version,
)
from release_state.import_legacy import import_registry_yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
FIXTURE_YAML = REPO_ROOT / "tests/fixtures/semver-registry-mini.yaml"
GITHUB_ACTIONS_THRESHOLD_S = 0.25
LOCAL_THRESHOLD_S = 0.05


@pytest.fixture
def saa_db(tmp_path):
    db_path = tmp_path / ".adk" / "release-state.db"
    yaml_path = tmp_path / "semver-registry.yaml"
    yaml_path.write_bytes(FIXTURE_YAML.read_bytes())
    import_registry_yaml(yaml_path, db_path, changelog_dir=None)
    return db_path


class TestAllocateBasics:
    def test_parse_internal(self):
        p = parse_internal_version("0.2.17.4+2")
        assert p.rc == 0 and p.epic == 2 and p.task == 4 and p.build == 2

    def test_idempotent_allocate(self, saa_db):
        first = allocate(saa_db, "0.2.17.4+2")
        assert first.allocated is True
        second = allocate(saa_db, "0.2.17.4+2")
        assert second.allocated is False
        assert first.semver_full == second.semver_full

    def test_new_allocation_increments_patch(self, saa_db):
        r1 = allocate(saa_db, "0.2.17.5+1")
        r2 = allocate(saa_db, "0.2.17.6+1")
        assert r2.patch_sequence > r1.patch_sequence

    def test_internal_est_down_semver_core_up(self, saa_db):
        high = allocate(saa_db, "0.6.7.103+1")
        low = allocate(saa_db, "0.2.1.18+1")
        assert low.patch_sequence > high.patch_sequence

    def test_lookup_existing(self, saa_db):
        allocate(saa_db, "0.2.17.7+1")
        found = lookup(saa_db, "0.2.17.7+1")
        assert found is not None
        assert found.semver_full

    def test_lookup_or_raise_unknown(self, saa_db):
        with pytest.raises(PreviewNotAllowed):
            lookup_or_raise(saa_db, "9.9.9.9+9")

    def test_audit_ok(self, saa_db):
        allocate(saa_db, "0.2.17.8+1")
        report = audit(saa_db)
        assert report["ok"] is True
        assert report["row_count"] >= 1


class TestParallelAllocate:
    def test_parallel_distinct_internals_no_duplicate_patch(self, saa_db):
        internals = [f"0.2.1.{i}+1" for i in range(1, 8)]

        def _alloc(iv: str):
            return allocate(saa_db, iv)

        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            results = list(pool.map(_alloc, internals))

        patches = [r.patch_sequence for r in results]
        assert len(patches) == len(set(patches))
        assert audit(saa_db)["ok"] is True


class TestPerformance:
    def test_allocate_p95_performance(self, saa_db):
        # Warm-up: discard cold-start / import overhead (flaky on shared CI runners).
        for i in range(5):
            allocate(saa_db, f"0.3.2.{90 + i}+1")

        timings = []
        for i in range(30):
            start = time.perf_counter()
            allocate(saa_db, f"0.3.2.{100 + i}+1")
            timings.append(time.perf_counter() - start)
        timings.sort()
        p95_index = max(0, int(0.95 * len(timings)))
        p95 = timings[p95_index]
        # Local development target: 50ms p95.
        # In GitHub Actions, shared-runner contention can cause higher variance during
        # full-suite execution, so CI uses a relaxed threshold. BR-104 tracks this
        # known CI timing-variance behavior.
        threshold_s = (
            GITHUB_ACTIONS_THRESHOLD_S
            if os.environ.get("GITHUB_ACTIONS") == "true"
            else LOCAL_THRESHOLD_S
        )
        assert p95 < threshold_s, f"p95 allocate {p95 * 1000:.1f}ms exceeds {threshold_s * 1000:.0f}ms"
