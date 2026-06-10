#!/usr/bin/env python3
"""
T06 high-stress scenarios (E02:S17:T06).

Executes deferred T02 skips + load/operator stress paths.
Matrix: scenario-matrix-v2.md
"""

from __future__ import annotations

import os
import subprocess
import sys
import tempfile
import time
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
RW_SCENARIOS = Path(__file__).resolve().parent
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VERSION_DIR = SCRIPTS / "version"
VALIDATION_DIR = SCRIPTS / "validation"
REGISTRY = REPO_ROOT / "semver-registry.yaml"

sys.path.insert(0, str(RW_SCENARIOS))
sys.path.insert(0, str(SCRIPTS))
sys.path.insert(0, str(VERSION_DIR))

import resolve_rw_build as rrb  # noqa: E402
from parity_harness import finalize_once, init_sqlite_backend  # noqa: E402
from validate_release_tag_immutability import (
    validate_release_tag_immutability,  # noqa: E402
)
from validate_version_bump import (  # noqa: E402
    is_perpetual_task,
    validate_perpetual_build_increment,
)


def _git_init(tmp: Path, version_rel: str, *, story=17, task=2, build=0) -> Path:
    subprocess.run(["git", "init"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.email", "hs@test"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "config", "user.name", "hs"], cwd=tmp, check=True, capture_output=True)
    vf = tmp / version_rel
    vf.parent.mkdir(parents=True, exist_ok=True)
    vf.write_text(
        f"VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = {story}\n"
        f"VERSION_TASK = {task}\nVERSION_BUILD = {build}\n"
    )
    subprocess.run(["git", "add", "-A"], cwd=tmp, check=True, capture_output=True)
    subprocess.run(["git", "commit", "-m", "init"], cwd=tmp, check=True, capture_output=True)
    return vf


SCENARIO_HS = [
    "RW-HS01",
    "RW-HS02",
    "RW-HS03",
    "RW-HS04",
    "RW-HS05",
    "RW-HS06",
    "RW-HS07",
]


class TestT06HighStress:
    def test_RW_HS01_twenty_finalize_burst_sqlite(self, tmp_path, monkeypatch):
        """RW-HS01: 20× finalize on sqlite — counter monotonic, injective PATCHes."""
        init_sqlite_backend(tmp_path, monkeypatch, counter=900)
        patches = []
        for b in range(1, 21):
            p = finalize_once(f"0.2.17.6+{b}")
            assert p["created"] is True
            patches.append(int(p["semver_full"].split(".")[2].split("+")[0]))
        assert patches == list(range(901, 921))
        assert len(set(patches)) == 20

    def test_RW_HS02_dpz_untagged_build_zero(self, monkeypatch):
        """RW-HS02 (deferred B04): --dpz on untagged BUILD 0 → BUILD +0."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, task=6, build=0)
                monkeypatch.setattr(rrb, "git_ref_exists", lambda _ref: False)
                monkeypatch.setattr(rrb, "head_est_from_git", lambda _p: (0, 2, 17, 6, 0))
                ok, payload, errors = rrb.resolve_rw_build(
                    vf, "E02:S17:T06", art=True, doc_policy_zero=True
                )
                assert ok, errors
                assert payload["next_build"] == 0
                assert payload["reason"] == "doc_policy_zero_untagged"
            finally:
                os.chdir(orig)

    def test_RW_HS03_dpz_rejected_when_build_ge_one(self, monkeypatch):
        """RW-HS03 (deferred B05): --dpz rejected when VERSION_BUILD >= 1."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, task=6, build=2)
                ok, _payload, errors = rrb.resolve_rw_build(
                    vf, "E02:S17:T06", art=True, doc_policy_zero=True
                )
                assert not ok
                assert any("doc-policy-zero" in e.lower() or "BUILD=0" in e for e in errors)
            finally:
                os.chdir(orig)

    def test_RW_HS04_dpz_blocked_when_head_tagged(self, monkeypatch):
        """RW-HS04: --dpz blocked when git tag exists for HEAD BUILD."""
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            version_rel = "src/ai_dev_kit/version.py"
            orig = os.getcwd()
            try:
                os.chdir(tmp)
                vf = _git_init(tmp, version_rel, task=6, build=0)
                subprocess.run(["git", "tag", "v0.2.17.6+0"], cwd=tmp, check=True, capture_output=True)
                monkeypatch.setattr(rrb, "git_ref_exists", lambda ref: ref == "v0.2.17.6+0")
                monkeypatch.setattr(rrb, "head_est_from_git", lambda _p: (0, 2, 17, 6, 0))
                ok, _payload, errors = rrb.resolve_rw_build(
                    vf, "E02:S17:T06", art=True, doc_policy_zero=True
                )
                assert not ok
                assert any("Tagged BUILD reuse blocked" in e for e in errors)
            finally:
                os.chdir(orig)

    def test_RW_HS05_perpetual_high_build_suppression(self, monkeypatch):
        """RW-HS05 (deferred P03): perpetual BUILD 51 after HEAD 50 passes BR-075."""
        content = "Task Type: Perpetual Maintenance\nperpetual_task: true"
        assert is_perpetual_task(4, content) is True
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp = Path(tmpdir)
            vf = _git_init(tmp, "version.py", story=16, task=4, build=50)
            vf.write_text(
                "VERSION_RC = 0\nVERSION_EPIC = 2\nVERSION_STORY = 16\n"
                "VERSION_TASK = 4\nVERSION_BUILD = 51\n"
            )
            subprocess.run(["git", "add", vf], cwd=tmp, check=True, capture_output=True)
            subprocess.run(["git", "commit", "-m", "bump"], cwd=tmp, check=True, capture_output=True)
            monkeypatch.setattr(
                "validate_version_bump.get_version_build_from_git_ref",
                lambda _vf, _ref: 50,
            )
            monkeypatch.setattr(
                "validate_version_bump.get_version_task_from_git_ref",
                lambda _vf, _ref: 4,
            )
            ok, errors = validate_perpetual_build_increment(vf, 2, 16, 4, 51, content, False)
            assert ok, errors

    def test_RW_HS06_production_registry_import_burst(self, tmp_path):
        """RW-HS06: import production registry + lookup burst under 5ms avg."""
        if not REGISTRY.exists():
            pytest.skip("production registry missing")
        from release_state.import_legacy import import_registry_yaml
        from release_state.store import lookup_semver_by_internal

        db = tmp_path / "prod.db"
        t0 = time.perf_counter()
        import_registry_yaml(REGISTRY, db, changelog_dir=None)
        import_ms = (time.perf_counter() - t0) * 1000
        sample = "0.2.17.5+1"
        start = time.perf_counter()
        for _ in range(100):
            lookup_semver_by_internal(db, sample)
        lookup_ms = (time.perf_counter() - start) / 100 * 1000
        print(f"import_ms={import_ms:.1f} lookup_ms={lookup_ms:.3f}")
        assert lookup_ms < 5.0
        assert import_ms < 5000

    def test_RW_HS07_push_tags_not_blocked_by_immutability(self):
        """RW-HS07: git push --tags passes immutability (documents Pattern 6 gap)."""
        ok, errors = validate_release_tag_immutability(
            extra_commands=["git push origin spike/rw-semver-friction --tags"]
        )
        assert ok, errors  # gap: bulk --tags not forbidden today


@pytest.mark.parametrize("scenario_id", SCENARIO_HS)
def test_hs_scenarios_registered(scenario_id: str):
    assert scenario_id in SCENARIO_HS
