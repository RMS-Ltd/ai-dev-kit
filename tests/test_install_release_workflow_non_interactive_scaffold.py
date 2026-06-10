"""Non-interactive RW installer scaffold paths (BR-106 / F19)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT_PATH = (
    REPO_ROOT
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "scripts"
    / "install_release_workflow.py"
)


def _run_non_interactive_mode_c(project_root: Path) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [
            sys.executable,
            str(SCRIPT_PATH),
            "--project-root",
            str(project_root),
            "--non-interactive",
            "--mode",
            "c",
            "--skip-github-signoff",
        ],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        stdin=subprocess.DEVNULL,
        check=False,
    )


def test_non_interactive_mode_c_scaffolds_without_stdin(tmp_path: Path):
    """BR-106: no EOF on CHANGELOG or version_file prompts when stdin is closed."""
    result = _run_non_interactive_mode_c(tmp_path)
    assert result.returncode == 0, (
        f"expected exit 0; stderr={result.stderr!r}; stdout={result.stdout!r}"
    )
    assert "EOFError" not in result.stderr
    assert (tmp_path / "CHANGELOG.md").is_file()
    version_files = list(tmp_path.glob("**/version.py"))
    assert version_files, "expected version_file scaffold under project root"
    assert (tmp_path / "rw-config.yaml").is_file()


def test_non_interactive_skips_existing_changelog(tmp_path: Path):
    changelog = tmp_path / "CHANGELOG.md"
    changelog.write_text("# Existing\n", encoding="utf-8")
    result = _run_non_interactive_mode_c(tmp_path)
    assert result.returncode == 0, result.stderr
    assert changelog.read_text(encoding="utf-8") == "# Existing\n"
