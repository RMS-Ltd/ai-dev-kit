"""Tests for validate_install_rc.py (UXR-029 / E06:S09:T36)."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

import pytest

_REPO = Path(__file__).resolve().parents[2]
_VALIDATE_RC = (
    _REPO
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "scripts"
    / "validation"
    / "validate_install_rc.py"
)
_CONTRACT = (
    _REPO
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "config"
    / "install-rc-checklist.yaml"
)


@pytest.fixture(scope="module")
def rc_mod():
    spec = importlib.util.spec_from_file_location("validate_install_rc", _VALIDATE_RC)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules["validate_install_rc"] = mod
    spec.loader.exec_module(mod)
    return mod


def _minimal_rw_config(root: Path, *, sqlite: bool = False) -> None:
    lines = [
        "version_file: src/app/version.py",
        "main_changelog: CHANGELOG.md",
        "changelog_dir: docs/changelog-archive",
        "scripts_path: packages/frameworks/workflow-mgt/scripts",
        "readme_file: README.md",
        "use_kanban: true",
        "kanban_root: docs/kanban",
        "kanban_board: kboard.md",
        "documentation_surfaces:",
        "  maintainer_kb:",
        "    sot: git",
    ]
    if sqlite:
        lines.append("release_state_backend: sqlite")
        lines.append("documentation_surfaces:")
        lines.append("  maintainer_kb:")
        lines.append("    sot: git")
    (root / "rw-config.yaml").write_text("\n".join(lines) + "\n", encoding="utf-8")
    (root / "src" / "app").mkdir(parents=True, exist_ok=True)
    (root / "src" / "app" / "version.py").write_text('VERSION = "0.1.0"\n', encoding="utf-8")
    (root / "CHANGELOG.md").write_text("# Changelog\n", encoding="utf-8")
    kanban = root / "docs" / "kanban"
    kanban.mkdir(parents=True, exist_ok=True)
    (kanban / "kboard.md").write_text("# board\n", encoding="utf-8")


def test_evaluate_greenfield_minimal_passes_without_sqlite(tmp_path, rc_mod):
    _minimal_rw_config(tmp_path)
    contract = rc_mod._load_contract(_CONTRACT)
    report = rc_mod.evaluate_profile(tmp_path, contract, "greenfield", strict=True)
    blocking_fail = [r for r in report.rows if r.blocking and not r.skipped and not r.passed]
    assert not blocking_fail
    assert report.strict_passed


def test_sqlite_row_fails_without_db(tmp_path, rc_mod):
    _minimal_rw_config(tmp_path, sqlite=True)
    contract = rc_mod._load_contract(_CONTRACT)
    report = rc_mod.evaluate_profile(tmp_path, contract, "greenfield", strict=True)
    sqlite_rows = [r for r in report.rows if r.id == "rc-sqlite-before-rw"]
    assert len(sqlite_rows) == 1
    assert not sqlite_rows[0].passed


def test_sqlite_row_passes_with_db(tmp_path, rc_mod):
    _minimal_rw_config(tmp_path, sqlite=True)
    db_dir = tmp_path / ".adk"
    db_dir.mkdir()
    (db_dir / "release-state.db").write_bytes(b"sqlite")
    contract = rc_mod._load_contract(_CONTRACT)
    report = rc_mod.evaluate_profile(tmp_path, contract, "greenfield", strict=True)
    sqlite_rows = [r for r in report.rows if r.id == "rc-sqlite-before-rw"]
    assert sqlite_rows[0].passed


def test_arm_b_legacy_archive_row(tmp_path, rc_mod):
    _minimal_rw_config(tmp_path)
    contract = rc_mod._load_contract(_CONTRACT)
    report_fail = rc_mod.evaluate_profile(tmp_path, contract, "arm-b", strict=True)
    archive_rows = [r for r in report_fail.rows if r.id == "rc-legacy-archived"]
    assert archive_rows and not archive_rows[0].passed

    (tmp_path / "docs-pre-ai-dev-kit").mkdir()
    report_pass = rc_mod.evaluate_profile(tmp_path, contract, "arm-b", strict=False)
    archive_rows2 = [r for r in report_pass.rows if r.id == "rc-legacy-archived"]
    assert archive_rows2[0].passed
