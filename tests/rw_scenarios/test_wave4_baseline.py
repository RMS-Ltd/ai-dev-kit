#!/usr/bin/env python3
"""
Wave 4 baseline scenarios (E02:S17:T02).

IPW gate + volume/perf: IPW-P01–P04, RW-V03, RW-V04
"""

from __future__ import annotations

import subprocess
import sys
import time
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VALIDATION_DIR = SCRIPTS / "validation"
CHANGELOG_SCRIPT = SCRIPTS / "changelog" / "check_changelog_size.py"
RW_CONFIG = REPO_ROOT / "rw-config.yaml"
IPP_DIR = REPO_ROOT / "docs" / "implementation-cycles"
T03_DOC = (
    REPO_ROOT
    / "docs/project-management/kanban/epics/epic-02"
    / "story-17-rw-semver-characterization-and-release-state-sqlite"
    / "T03-sqlite-release-state-schema-and-migration-design.md"
)
T04_DOC = (
    REPO_ROOT
    / "docs/project-management/kanban/epics/epic-02"
    / "story-17-rw-semver-characterization-and-release-state-sqlite"
    / "T04-implement-sqlite-changelog-semver-registry-backend.md"
)
PLAN_TEMPLATE = REPO_ROOT / "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
REGISTRY = REPO_ROOT / "semver-registry.yaml"
MAIN_CHANGELOG = REPO_ROOT / "CHANGELOG.md"


def _run_validator(script: str, args: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(VALIDATION_DIR / script)] + args,
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )


SCENARIO_WAVE4 = ["IPW-P01", "IPW-P02", "IPW-P03", "IPW-P04", "RW-V03", "RW-V04"]


class TestWave4IPW:
    def test_IPW_P01_t03_has_ipp_linked(self):
        """IPW-P01: T03 IPP exists under implementation-cycles/ (post-IPW)."""
        assert T03_DOC.exists()
        matches = list(IPP_DIR.glob("IPP-E02S17T03*.md"))
        assert len(matches) == 1
        assert "IPP-E02S17T03" in T03_DOC.read_text(encoding="utf-8")

    def test_IPW_P02_t04_implementation_blocked_no_ipp(self):
        """IPW-P02: T04 COMPLETE; uses T03 IPP — no dedicated IPP-E02S17T04."""
        assert T04_DOC.exists()
        text = T04_DOC.read_text(encoding="utf-8")
        assert "✅ COMPLETE" in text or "**Status:** ✅ COMPLETE" in text
        assert "IPP-E02S17T04" not in text
        assert list(IPP_DIR.glob("IPP-E02S17T04*.md")) == []
        assert "IPP-E02S17T03" in text

    def test_IPW_P03_plan_template_mandatory_transitions(self):
        """IPW-P03: IPP template prescribes TODO→IN PROGRESS and final reconciliation."""
        template = PLAN_TEMPLATE.read_text(encoding="utf-8")
        assert "TODO → IN PROGRESS" in template or "TODO → IN PROGRESS" in template.replace("➔", "→")
        assert "Reconcile task" in template or "Reconcile" in template
        assert "MANDATORY" in template

    def test_IPW_P04_rw_releasable_on_t04_complete(self):
        """IPW-P04: RW Step 1c allows T04 when COMPLETE (forensic release)."""
        r = _run_validator("validate_rw_task_complete.py", ["--requested", "E02:S17:T04"])
        assert r.returncode == 0
        assert "COMPLETE" in r.stdout or "COMPLETE" in r.stderr


class TestWave4Volume:
    @pytest.mark.parametrize(
        ("threshold", "expected_returncode"),
        [
            (100_000, 0),
            (1, 1),
        ],
    )
    def test_RW_V03_changelog_exceeds_threshold(self, tmp_path, threshold, expected_returncode):
        """RW-V03: main CHANGELOG over size threshold → CMW advisory (exit 1).

        Deterministic coverage via ``check_changelog_size.py --config`` and
        ``size_threshold_lines`` (mode does not affect exit code).
        """
        assert MAIN_CHANGELOG.exists()
        config_path = tmp_path / "rw-config.yaml"
        config_path.write_text(
            yaml.safe_dump({"changelog_archival": {"size_threshold_lines": threshold}}),
            encoding="utf-8",
        )
        r = subprocess.run(
            [sys.executable, str(CHANGELOG_SCRIPT), "--config", str(config_path)],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
        )
        assert r.returncode == expected_returncode, r.stdout + r.stderr
        if expected_returncode == 1:
            assert "EXCEEDS THRESHOLD" in r.stdout

    def test_RW_V04_registry_yaml_load_benchmark(self):
        """RW-V04: baseline YAML parse time for production semver-registry.yaml."""
        assert REGISTRY.exists()
        data = REGISTRY.read_bytes()
        start = time.perf_counter()
        for _ in range(5):
            yaml.safe_load(data)
        elapsed_ms = (time.perf_counter() - start) / 5 * 1000
        # Informational baseline — fail only if absurdly slow (>2s per load)
        assert elapsed_ms < 2000, f"registry load too slow: {elapsed_ms:.1f}ms"
        # Record in test output for run log capture
        print(f"registry_yaml_load_ms={elapsed_ms:.2f}")

    def test_RW_V04_sqlite_lookup_benchmark(self, tmp_path):
        """RW-V04 extension: SQLite indexed lookup vs YAML load."""
        if not REGISTRY.exists():
            pytest.skip("production registry missing")
        from release_state.import_legacy import import_registry_yaml
        from release_state.store import lookup_semver_by_internal

        db = tmp_path / "bench.db"
        import_registry_yaml(REGISTRY, db, changelog_dir=None)
        sample = "0.2.17.2+5"
        start = time.perf_counter()
        for _ in range(50):
            lookup_semver_by_internal(db, sample)
        sqlite_ms = (time.perf_counter() - start) / 50 * 1000
        print(f"registry_sqlite_lookup_ms={sqlite_ms:.3f}")
        assert sqlite_ms < 50, f"sqlite lookup too slow: {sqlite_ms:.2f}ms"
