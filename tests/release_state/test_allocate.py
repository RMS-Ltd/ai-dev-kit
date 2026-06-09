"""SAA allocate / lookup / audit tests (E03:S02:T14)."""

from __future__ import annotations

import concurrent.futures
import sys
import time
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
sys.path.insert(0, str(SCRIPTS))

from release_state.allocate import (  # noqa: E402
    PreviewNotAllowed,
    SemVerCollisionError,
    allocate,
    audit,
    lookup,
    lookup_or_raise,
    parse_internal_version,
)
from release_state.import_legacy import import_registry_yaml  # noqa: E402

FIXTURE_YAML = REPO_ROOT / "tests/fixtures/semver-registry-mini.yaml"


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
    def test_parallel_distinct_internals_no_duplicate_patch(self, tmp_path):
        db_path = tmp_path / "state.db"
        internals = [f"0.2.1.{i}+1" for i in range(1, 8)]

        def _alloc(iv: str):
            return allocate(db_path, iv)

        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            results = list(pool.map(_alloc, internals))

        patches = [r.patch_sequence for r in results]
        assert len(patches) == len(set(patches))
        assert audit(db_path)["ok"] is True


class TestPerformance:
    def test_allocate_p95_under_50ms(self, saa_db):
        timings = []
        for i in range(20):
            start = time.perf_counter()
            allocate(saa_db, f"0.3.2.{100 + i}+1")
            timings.append(time.perf_counter() - start)
        timings.sort()
        p95 = timings[int(len(timings) * 0.95) - 1]
        assert p95 < 0.05
