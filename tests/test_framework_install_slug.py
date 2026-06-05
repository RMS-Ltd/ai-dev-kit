"""Tests for canonical framework install directory slugs (BR-087)."""

from __future__ import annotations

import sys
import tarfile
from pathlib import Path

import pytest

_SCRIPTS = (
    Path(__file__).resolve().parents[1]
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "scripts"
)
sys.path.insert(0, str(_SCRIPTS))

from build_package import create_tar_gz_archive  # noqa: E402
from framework_install_slug import (  # noqa: E402
    WORKFLOW_MGT_INSTALL_SLUG,
    WORKFLOW_MGT_LEGACY_DIR_NAME,
    archive_root_install_slug,
    detect_legacy_framework_dir_names,
    ensure_frameworks_slug_layout,
    framework_install_slug,
    relocate_legacy_framework_dir,
    workflow_mgt_package_dir,
    workflow_mgt_package_dir_missing_hint,
)
from install_package_from_release import extract_package  # noqa: E402


@pytest.mark.parametrize(
    "source,expected",
    [
        ("workflow mgt", "workflow-mgt"),
        ("numbering & versioning", "numbering-versioning"),
        ("tooling & automation", "tooling-automation"),
        ("kanban", "kanban"),
        ("workflow-mgt", "workflow-mgt"),
    ],
)
def test_framework_install_slug(source: str, expected: str) -> None:
    assert framework_install_slug(source) == expected
    assert archive_root_install_slug(source) == expected


def test_workflow_mgt_package_dir_prefers_canonical_slug(tmp_path: Path) -> None:
    fw = tmp_path / "packages" / "frameworks"
    fw.mkdir(parents=True)
    canonical = fw / WORKFLOW_MGT_INSTALL_SLUG
    legacy = fw / WORKFLOW_MGT_LEGACY_DIR_NAME
    canonical.mkdir()
    legacy.mkdir()
    resolved = workflow_mgt_package_dir(tmp_path)
    assert resolved == canonical


def test_workflow_mgt_package_dir_falls_back_to_legacy(tmp_path: Path) -> None:
    fw = tmp_path / "packages" / "frameworks"
    fw.mkdir(parents=True)
    legacy = fw / WORKFLOW_MGT_LEGACY_DIR_NAME
    legacy.mkdir()
    resolved = workflow_mgt_package_dir(tmp_path)
    assert resolved == legacy


def test_workflow_mgt_package_dir_returns_canonical_when_missing(tmp_path: Path) -> None:
    fw = tmp_path / "packages" / "frameworks"
    fw.mkdir(parents=True)
    resolved = workflow_mgt_package_dir(tmp_path)
    assert resolved == fw / WORKFLOW_MGT_INSTALL_SLUG
    assert not resolved.is_dir()
    hint = workflow_mgt_package_dir_missing_hint(tmp_path)
    assert WORKFLOW_MGT_INSTALL_SLUG in hint
    assert WORKFLOW_MGT_LEGACY_DIR_NAME in hint


def test_workflow_mgt_package_dir_on_monorepo() -> None:
    repo = Path(__file__).resolve().parents[1]
    resolved = workflow_mgt_package_dir(repo)
    assert resolved.is_dir()
    assert resolved.name == WORKFLOW_MGT_INSTALL_SLUG


def test_create_tar_gz_uses_install_slug_not_source_dir_name(tmp_path: Path) -> None:
    framework_dir = tmp_path / "workflow mgt"
    framework_dir.mkdir()
    readme = framework_dir / "README.md"
    readme.write_text("# test\n", encoding="utf-8")

    package_path = create_tar_gz_archive(
        framework_dir=framework_dir,
        framework_name="workflow mgt",
        version="9.9.9",
        output_dir=tmp_path,
        files=[readme],
        install_slug="workflow-mgt",
    )

    with tarfile.open(package_path, "r:gz") as tar:
        names = {m.name.split("/")[0] for m in tar.getmembers() if m.name}
    assert "workflow-mgt" in names
    assert "workflow mgt" not in names


def test_extract_package_renames_legacy_archive_root(tmp_path: Path) -> None:
    install_dir = tmp_path / "frameworks"
    install_dir.mkdir()
    legacy_root = "workflow mgt"
    package_path = tmp_path / "workflow-mgt-v1.0.0.tar.gz"

    with tarfile.open(package_path, "w:gz") as tar:
        data = b"readme"
        import io

        info = tarfile.TarInfo(name=f"{legacy_root}/README.md")
        info.size = len(data)
        tar.addfile(info, io.BytesIO(data))

    assert extract_package(package_path, install_dir, "workflow-mgt", verbose=False)
    assert (install_dir / "workflow-mgt" / "README.md").is_file()
    assert not (install_dir / legacy_root).exists()


def test_relocate_legacy_framework_dir(tmp_path: Path) -> None:
    legacy = tmp_path / "numbering & versioning"
    legacy.mkdir()
    (legacy / "versioning-policy.md").write_text("policy", encoding="utf-8")

    target = relocate_legacy_framework_dir(
        tmp_path, "numbering & versioning", "numbering-versioning"
    )
    assert target == tmp_path / "numbering-versioning"
    assert target.is_dir()
    assert not legacy.exists()


def test_detect_legacy_framework_dir_names() -> None:
    root = Path(__file__).resolve().parents[1] / "packages" / "frameworks"
    legacy = detect_legacy_framework_dir_names(root)
    assert legacy == []


def test_ensure_frameworks_slug_layout_idempotent(tmp_path: Path) -> None:
    legacy = tmp_path / "workflow mgt"
    legacy.mkdir()
    (legacy / "x.txt").write_text("1", encoding="utf-8")
    assert ensure_frameworks_slug_layout(tmp_path) == 1
    assert (tmp_path / "workflow-mgt" / "x.txt").is_file()
    assert ensure_frameworks_slug_layout(tmp_path) == 0


def test_print_session_banner_warns_on_legacy_layout(
    tmp_path: Path, capsys: pytest.CaptureFixture[str]
) -> None:
    fw = tmp_path / "packages" / "frameworks"
    fw.mkdir(parents=True)
    (fw / "workflow mgt").mkdir()

    sys.path.insert(0, str(_SCRIPTS))
    import install_ux_version  # noqa: E402

    install_ux_version.print_session_banner(tmp_path)
    err = capsys.readouterr().err
    assert "Legacy framework directory names" in err
    assert "relocate_legacy_framework_dirs.py" in err
