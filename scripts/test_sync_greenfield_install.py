"""Tests for greenfield-install sync (FR-110 / E06:S09:T21)."""

from __future__ import annotations

import hashlib
import subprocess
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[1]
SYNC_SCRIPT = REPO_ROOT / "scripts" / "sync_greenfield_install.py"
GREENFIELD_ROOT = REPO_ROOT / "greenfield-install"
ORCHESTRATOR = (
    GREENFIELD_ROOT
    / "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py"
)


@pytest.fixture(scope="module")
def synced_tree() -> Path:
    result = subprocess.run(
        [sys.executable, str(SYNC_SCRIPT)],
        cwd=REPO_ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr
    return GREENFIELD_ROOT


def test_sync_check_passes(synced_tree: Path) -> None:
    result = subprocess.run(
        [sys.executable, str(SYNC_SCRIPT), "--check"],
        cwd=REPO_ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout


def test_greenfield_layout(synced_tree: Path) -> None:
    assert (synced_tree / "README.md").is_file()
    assert (synced_tree / "FOOTPRINT.md").is_file()
    assert (synced_tree / "packages/frameworks/workflow-mgt").is_dir()
    assert (synced_tree / "packages/frameworks/kanban").is_dir()
    assert ORCHESTRATOR.is_file()


def test_installer_scripts_present(synced_tree: Path) -> None:
    rw = synced_tree / "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
    kanban = synced_tree / "packages/frameworks/kanban/scripts/install_kanban_framework.py"
    assert rw.is_file()
    assert kanban.is_file()


def test_install_greenfield_dry_run(synced_tree: Path) -> None:
    result = subprocess.run(
        [
            sys.executable,
            str(ORCHESTRATOR),
            "--dry-run",
            "--non-interactive",
            "--project-root",
            str(synced_tree),
        ],
        cwd=synced_tree,
        check=False,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout
    assert "dry-run" in result.stdout.lower()


def test_footprint_under_budget(synced_tree: Path) -> None:
    total = sum(
        p.stat().st_size for p in synced_tree.rglob("*") if p.is_file()
    )
    # AC1: ≤50% of ~27 MiB full repo → ≤14 MiB
    assert total < 14 * 1024 * 1024, f"greenfield-install too large: {total} bytes"


def _sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            digest.update(chunk)
    return digest.hexdigest()


def _run_sync(*args: str) -> subprocess.CompletedProcess[str]:
    # Use module sys.executable to keep python env consistent in CI.
    return subprocess.run(
        [sys.executable, str(SYNC_SCRIPT), *args],
        cwd=REPO_ROOT,
        check=False,
        capture_output=True,
        text=True,
    )


def test_autofix_reconcile_mode_a_source_only_stale_then_idempotent(synced_tree: Path) -> None:
    src_file = REPO_ROOT / "packages/frameworks/workflow-mgt/README.md"
    mirror_file = synced_tree / "packages/frameworks/workflow-mgt/README.md"
    assert src_file.is_file()
    assert mirror_file.is_file()

    original_src = src_file.read_text(encoding="utf-8", errors="replace")
    try:
        # Create drift: modify sources only (mirror remains stale until reconcile fixes it).
        src_file.write_text(original_src + "\n\n# temp-autofix-mode-a\n", encoding="utf-8")
        assert _run_sync("--check").returncode != 0, "drift check must fail before reconcile"

        # Mode A classification: touches packages/frameworks/** but not greenfield-install/packages/frameworks/**.
        changed = "packages/frameworks/workflow-mgt/README.md"
        result = _run_sync(
            "--autofix-reconcile",
            "--changed-files",
            changed,
        )
        assert result.returncode == 0, result.stderr or result.stdout

        assert _run_sync("--check").returncode == 0, _run_sync("--check").stderr

        after_first = _sha256(mirror_file)
        result2 = _run_sync("--autofix-reconcile", "--changed-files", changed)
        assert result2.returncode == 0, result2.stderr or result2.stdout
        assert _sha256(mirror_file) == after_first, "second reconcile should not change resolved parity"
    finally:
        # Restore original source and re-sync mirror for isolation across tests.
        src_file.write_text(original_src, encoding="utf-8")
        assert _run_sync("--sync").returncode == 0
        assert _run_sync("--check").returncode == 0


def test_autofix_reconcile_mode_b_mirror_only_stale_then_idempotent(synced_tree: Path) -> None:
    src_file = REPO_ROOT / "packages/frameworks/workflow-mgt/README.md"
    mirror_file = synced_tree / "packages/frameworks/workflow-mgt/README.md"
    assert src_file.is_file()
    assert mirror_file.is_file()

    original_src = src_file.read_text(encoding="utf-8", errors="replace")
    original_mirror = mirror_file.read_text(encoding="utf-8", errors="replace")
    try:
        # Create drift: modify mirror only (sources remain authoritative until reconcile corrects it).
        mirror_file.write_text(original_mirror + "\n\n# temp-autofix-mode-b\n", encoding="utf-8")
        assert _run_sync("--check").returncode != 0, "drift check must fail before reconcile"

        # Mode B classification: touches greenfield-install/packages/frameworks/** but not packages/frameworks/**.
        changed = "greenfield-install/packages/frameworks/workflow-mgt/README.md"
        result = _run_sync(
            "--autofix-reconcile",
            "--changed-files",
            changed,
        )
        assert result.returncode == 0, result.stderr or result.stdout
        assert _run_sync("--check").returncode == 0, _run_sync("--check").stderr

        # After Mode B, sources should reflect mirror changes (then sync regenerates the mirror).
        updated_src = src_file.read_text(encoding="utf-8", errors="replace")
        assert "# temp-autofix-mode-b" in updated_src

        after_first = _sha256(mirror_file)
        result2 = _run_sync("--autofix-reconcile", "--changed-files", changed)
        assert result2.returncode == 0, result2.stderr or result2.stdout
        assert _sha256(mirror_file) == after_first, "second reconcile should not change resolved parity"
    finally:
        src_file.write_text(original_src, encoding="utf-8")
        assert _run_sync("--sync").returncode == 0
        assert _run_sync("--check").returncode == 0


def test_autofix_reconcile_guidance_message_on_ambiguous_dual_tree_touch(synced_tree: Path) -> None:
    # If both trees appear touched in the diff, reconciliation should refuse to guess and
    # emit explicit dual-tree guidance (no ambiguous "drift-only" failures).
    changed = ",".join(
        [
            "packages/frameworks/workflow-mgt/README.md",
            "greenfield-install/packages/frameworks/workflow-mgt/README.md",
        ]
    )
    result = _run_sync("--autofix-reconcile", "--changed-files", changed)
    assert result.returncode != 0
    combined = (result.stderr or "") + (result.stdout or "")
    assert "greenfield-autofix-reconcile" in combined.lower(), combined
    assert "mode a" in combined.lower() or "mode b" in combined.lower(), combined


def test_greenfield_autofix_reconcile_workflow_trigger_markers_exist() -> None:
    # Minimal “structure” test: ensure the remediation workflow exists and declares
    # autofix-class gating markers so it won’t run on unrelated PRs.
    p = REPO_ROOT / ".github/workflows/greenfield-autofix-reconcile.yml"
    assert p.is_file(), "missing remediation workflow: greenfield-autofix-reconcile.yml"
    content = p.read_text(encoding="utf-8", errors="replace").lower()
    assert "finding-autofix" in content or "copilot" in content, content
