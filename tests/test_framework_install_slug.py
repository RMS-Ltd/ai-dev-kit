"""Tests for canonical framework install directory slugs (BR-087)."""

from __future__ import annotations

import sys
import tarfile
import tempfile
from pathlib import Path

import pytest

_SCRIPTS = (
    Path(__file__).resolve().parents[1]
    / "packages"
    / "frameworks"
    / "workflow mgt"
    / "scripts"
)
sys.path.insert(0, str(_SCRIPTS))

from framework_install_slug import (  # noqa: E402
    archive_root_install_slug,
    framework_install_slug,
    relocate_legacy_framework_dir,
)
from build_package import create_tar_gz_archive  # noqa: E402
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
