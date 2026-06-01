"""Tests for validate_whitelist_patterns.py.

Run (avoids global pytest-django from other projects on your machine):

    python -m pytest -c "packages/frameworks/workflow mgt/scripts/validation/pytest.ini" \\
      "packages/frameworks/workflow mgt/scripts/validation/test_validate_whitelist_patterns.py"

Or:

    python "packages/frameworks/workflow mgt/scripts/validation/test_validate_whitelist_patterns.py"
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent / "validate_whitelist_patterns.py"
REPO_ROOT = Path(__file__).resolve().parents[5]


def _run(args: list[str] | None = None, cwd: Path | None = None) -> subprocess.CompletedProcess:
    cmd = [sys.executable, str(SCRIPT)] + (args or [])
    return subprocess.run(cmd, cwd=cwd or REPO_ROOT, capture_output=True, text=True)


def test_pass_on_repo_catalog():
    result = _run(["--project-root", str(REPO_ROOT)])
    assert result.returncode == 0, result.stdout + result.stderr


def test_fail_on_broken_example(tmp_path: Path):
    catalog_dir = tmp_path / ".cursor"
    catalog_dir.mkdir()
    (catalog_dir / "whitelist-patterns.yaml").write_text(
        """
patterns:
  bad:
    pattern: '^git status$'
    description: test
    examples:
      - 'git add -A'
""",
        encoding="utf-8",
    )
    result = _run(["--project-root", str(tmp_path)])
    assert result.returncode == 1
    assert "does not match pattern" in result.stderr


def test_fail_on_home_path(tmp_path: Path):
    catalog_dir = tmp_path / ".cursor"
    catalog_dir.mkdir()
    (catalog_dir / "whitelist-patterns.yaml").write_text(
        """
patterns:
  ok:
    pattern: '^echo hi$'
    description: test
    examples:
      - 'echo hi'
""",
        encoding="utf-8",
    )
    raw = (catalog_dir / "whitelist-patterns.yaml").read_text(encoding="utf-8")
    (catalog_dir / "whitelist-patterns.yaml").write_text(
        raw + "\n# /Users/foo\n",
        encoding="utf-8",
    )
    result = _run(["--project-root", str(tmp_path)])
    assert result.returncode == 1
    assert "Portability" in result.stderr


RW_FIXTURE_COMMANDS = [
    'python "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict',
    'python "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --strict',
    'python "packages/frameworks/workflow mgt/scripts/version/semver_converter.py" "0.6.7.107+1"',
    "git status",
    "git add -A",
]


def test_rw_fixtures_match_validation_pattern():
    import re
    import yaml

    catalog_path = REPO_ROOT / ".cursor" / "whitelist-patterns.yaml"
    data = yaml.safe_load(catalog_path.read_text(encoding="utf-8"))
    pattern = data["patterns"]["python_validation_scripts"]["pattern"]
    compiled = re.compile(pattern)
    for cmd in RW_FIXTURE_COMMANDS[:2]:
        assert compiled.search(cmd), cmd
    git_pat = re.compile(data["patterns"]["git_rw_operations"]["pattern"])
    for cmd in RW_FIXTURE_COMMANDS[3:]:
        assert git_pat.search(cmd), cmd


def _run_isolated_pytest() -> int:
    """Subprocess pytest with plugin autoload disabled (avoids global pytest-django)."""
    import os

    env = os.environ.copy()
    env.pop("DJANGO_SETTINGS_MODULE", None)
    env["PYTEST_DISABLE_PLUGIN_AUTOLOAD"] = "1"
    ini = Path(__file__).resolve().parent / "pytest.ini"
    test_file = Path(__file__).resolve()
    cmd = [
        sys.executable,
        "-m",
        "pytest",
        "-p",
        "pytest",
        "-p",
        "no:pytest_django",
        "-q",
        "-c",
        str(ini),
        str(test_file),
    ]
    return subprocess.run(cmd, cwd=REPO_ROOT, env=env).returncode


if __name__ == "__main__":
    raise SystemExit(_run_isolated_pytest())
