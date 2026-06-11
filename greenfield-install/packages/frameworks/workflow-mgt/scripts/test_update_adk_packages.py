#!/usr/bin/env python3
"""Tests for FR-129 update_adk_packages v1."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest
import yaml

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from adk_manifest import (  # noqa: E402
    ADOPTER_MARKER,
    load_manifest,
    save_manifest,
    update_vendor_pins,
)
from update_adk_packages import (  # noqa: E402
    emit_scaffold_report,
    git_checkout_candidates,
    normalize_tag,
    semver_core_tag,
    sync_packages_from_source,
    tags_match_target,
)
from verify_vendor_tree import run_verify  # noqa: E402


def _write_min_vendor(vendor_root: Path) -> None:
    base = vendor_root / "packages" / "frameworks" / "workflow-mgt" / "scripts"
    base.mkdir(parents=True, exist_ok=True)
    for name in (
        "install_greenfield_path.py",
        "install_release_workflow.py",
        "adk_install_errors.py",
    ):
        (base / name).write_text(f"# stub {name}\n", encoding="utf-8")
    kanban = vendor_root / "packages" / "frameworks" / "kanban" / "scripts"
    kanban.mkdir(parents=True, exist_ok=True)
    (kanban / "install_kanban_framework.py").write_text("# stub\n", encoding="utf-8")
    cfg = (
        vendor_root
        / "packages"
        / "frameworks"
        / "workflow-mgt"
        / "config"
        / "install-error-codes.yaml"
    )
    cfg.parent.mkdir(parents=True, exist_ok=True)
    cfg.write_text("codes: []\n", encoding="utf-8")


def _write_manifest(project_root: Path, vendor_rel: str = "vendor/ai-dev-kit") -> None:
    payload = {
        "version": "1.1.0",
        "default_backend": "git-submodule",
        "frameworks": {},
        "vendor": {
            "root": vendor_rel,
            "channel": "copy-sync",
            "pinned_semver": "v0.4.1140",
            "installed_at": "2026-06-01T00:00:00Z",
        },
        "packages": {
            "workflow-mgt": {"path": "packages/frameworks/workflow-mgt"},
            "kanban": {"path": "packages/frameworks/kanban"},
        },
    }
    with (project_root / ADOPTER_MARKER).open("w", encoding="utf-8") as handle:
        yaml.dump(payload, handle)


def test_normalize_tag():
    assert normalize_tag("0.4.1144") == "v0.4.1144"
    assert normalize_tag("v0.4.1144+1") == "v0.4.1144+1"
    assert normalize_tag("refs/tags/v0.4.1144") == "v0.4.1144"


def test_semver_core_tag_strips_build():
    assert semver_core_tag("v0.4.1145+1") == "v0.4.1145"
    assert semver_core_tag("v0.6.9.33+1") == "v0.6.9.33"


def test_tags_match_target_semver_core():
    assert tags_match_target("v0.4.1145", "v0.4.1145+1")
    assert tags_match_target("v0.4.1145+1", "v0.4.1145")


def test_git_checkout_candidates_includes_core():
    refs = git_checkout_candidates("v0.4.1145+1")
    assert "v0.4.1145+1" in refs
    assert "v0.4.1145" in refs


def test_manifest_round_trip(tmp_path: Path):
    root = tmp_path / "proj"
    root.mkdir()
    _write_manifest(root)
    data = load_manifest(root)
    updated = update_vendor_pins(data, pinned_semver="v0.4.1144+1")
    save_manifest(root, updated)
    reloaded = load_manifest(root)
    assert reloaded["vendor"]["pinned_semver"] == "v0.4.1144+1"


def test_copy_sync_updates_vendor(tmp_path: Path):
    project = tmp_path / "adopter"
    project.mkdir()
    vendor = project / "vendor" / "ai-dev-kit"
    source_old = tmp_path / "old"
    source_new = tmp_path / "new"
    _write_min_vendor(source_old)
    _write_min_vendor(source_new)
    marker = (
        source_new
        / "packages"
        / "frameworks"
        / "workflow-mgt"
        / "scripts"
        / "install_greenfield_path.py"
    )
    marker.write_text("# new version\n", encoding="utf-8")
    _write_manifest(project)
    vendor.mkdir(parents=True)
    sync_packages_from_source(source_old, vendor, ["workflow-mgt", "kanban"], dry_run=False)
    old_text = (
        vendor / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_greenfield_path.py"
    ).read_text(encoding="utf-8")
    assert "stub" in old_text
    sync_packages_from_source(source_new, vendor, ["workflow-mgt", "kanban"], dry_run=False)
    new_text = (
        vendor / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_greenfield_path.py"
    ).read_text(encoding="utf-8")
    assert "new version" in new_text
    code, _ = run_verify(vendor, emit=False)
    assert code == 0


def test_dry_run_does_not_mutate(tmp_path: Path):
    project = tmp_path / "adopter"
    project.mkdir()
    vendor = project / "vendor" / "ai-dev-kit"
    source = tmp_path / "src"
    _write_min_vendor(source)
    _write_manifest(project)
    vendor.mkdir(parents=True)
    before = list(vendor.rglob("*"))
    sync_packages_from_source(source, vendor, ["workflow-mgt"], dry_run=True)
    after = list(vendor.rglob("*"))
    assert before == after


def test_scaffold_report_lists_host_files(tmp_path: Path, capsys):
    project = tmp_path / "proj"
    project.mkdir()
    (project / "rw-config.yaml").write_text("version_file: x\n", encoding="utf-8")
    emit_scaffold_report(project)
    out = capsys.readouterr().out
    assert "rw-config.yaml" in out
    assert "manual merge" in out.lower() or "review" in out.lower()


def test_cli_check_reports_update_available(tmp_path: Path):
    project = tmp_path / "adopter"
    project.mkdir()
    _write_manifest(project)
    vendor = project / "vendor" / "ai-dev-kit"
    vendor.mkdir(parents=True)
    script = _SCRIPTS / "update_adk_packages.py"
    proc = subprocess.run(
        [
            sys.executable,
            str(script),
            "check",
            "--project-root",
            str(project),
            "--target-tag",
            "v0.4.1144+1",
        ],
        capture_output=True,
        text=True,
        check=False,
    )
    assert proc.returncode == 0
    assert "update available" in proc.stdout.lower() or "v0.4.1144+1" in proc.stdout


def test_cli_update_copy_sync(tmp_path: Path):
    project = tmp_path / "adopter"
    project.mkdir()
    vendor = project / "vendor" / "ai-dev-kit"
    source = tmp_path / "release"
    _write_min_vendor(source)
    _write_manifest(project)
    vendor.mkdir(parents=True)
    script = _SCRIPTS / "update_adk_packages.py"
    proc = subprocess.run(
        [
            sys.executable,
            str(script),
            "update",
            "--project-root",
            str(project),
            "--target-tag",
            "v0.4.1144+1",
            "--source-vendor",
            str(source),
        ],
        capture_output=True,
        text=True,
        check=False,
    )
    assert proc.returncode == 0, proc.stderr
    manifest = load_manifest(project)
    assert manifest["vendor"]["pinned_semver"] == "v0.4.1144"
    assert manifest["vendor"]["pinned_internal"] == "v0.4.1144+1"
    code, _ = run_verify(vendor, emit=False)
    assert code == 0
