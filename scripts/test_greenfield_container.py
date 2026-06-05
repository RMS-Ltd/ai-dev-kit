"""Container layout smoke for greenfield-install/ (ADR-021 / E06:S09:T23)."""

from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[1]
GREENFIELD_ROOT = REPO_ROOT / "greenfield-install"
DOCKERFILE = GREENFIELD_ROOT / "Dockerfile"
ORCHESTRATOR = (
    GREENFIELD_ROOT
    / "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py"
)


def _docker_available() -> bool:
    if shutil.which("docker") is None:
        return False
    probe = subprocess.run(
        ["docker", "info"],
        check=False,
        capture_output=True,
        text=True,
    )
    return probe.returncode == 0


@pytest.fixture(scope="module")
def built_image() -> str:
    if not _docker_available():
        pytest.skip("docker not available")
    assert DOCKERFILE.is_file(), "greenfield-install/Dockerfile missing"
    tag = "adk-greenfield:test"
    result = subprocess.run(
        [
            "docker",
            "build",
            "-f",
            str(DOCKERFILE),
            "-t",
            tag,
            str(GREENFIELD_ROOT),
        ],
        cwd=REPO_ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout
    return tag


def test_dockerfile_exists() -> None:
    assert DOCKERFILE.is_file()


def test_greenfield_layout_for_image_context() -> None:
    assert (GREENFIELD_ROOT / "README.md").is_file()
    assert (GREENFIELD_ROOT / "FOOTPRINT.md").is_file()
    assert ORCHESTRATOR.is_file()


@pytest.mark.skipif(not _docker_available(), reason="docker not available")
def test_container_extract_and_dry_run(built_image: str) -> None:
    extract_dir = REPO_ROOT / ".pytest-greenfield-extract"
    if extract_dir.exists():
        shutil.rmtree(extract_dir)
    extract_dir.mkdir(parents=True)

    create = subprocess.run(
        ["docker", "create", built_image],
        check=False,
        capture_output=True,
        text=True,
    )
    assert create.returncode == 0, create.stderr
    cid = create.stdout.strip()

    try:
        cp = subprocess.run(
            ["docker", "cp", f"{cid}:/opt/adk/.", str(extract_dir)],
            check=False,
            capture_output=True,
            text=True,
        )
        assert cp.returncode == 0, cp.stderr or cp.stdout
        assert (extract_dir / "README.md").is_file()
        assert (extract_dir / "packages/frameworks/workflow-mgt").is_dir()

        orchestrator = (
            extract_dir
            / "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py"
        )
        dry_run = subprocess.run(
            [
                sys.executable,
                str(orchestrator),
                "--dry-run",
                "--non-interactive",
                "--project-root",
                str(extract_dir),
            ],
            cwd=extract_dir,
            check=False,
            capture_output=True,
            text=True,
        )
        assert dry_run.returncode == 0, dry_run.stderr or dry_run.stdout
        assert "dry-run" in dry_run.stdout.lower()
    finally:
        subprocess.run(
            ["docker", "rm", "-f", cid],
            check=False,
            capture_output=True,
            text=True,
        )
        if extract_dir.exists():
            shutil.rmtree(extract_dir)
