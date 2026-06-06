"""Tests for housekeeping_scanner.py."""

from __future__ import annotations

import json
import shutil
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

import pytest

PACKAGE_ROOT = Path(__file__).resolve().parents[1]
SCRIPT = PACKAGE_ROOT / "scripts" / "housekeeping_scanner.py"
FIXTURES = Path(__file__).resolve().parent / "fixtures"


def run_scanner(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, str(SCRIPT), *args],
        capture_output=True,
        text=True,
        check=False,
    )


@pytest.fixture
def fixture_root(tmp_path: Path) -> Path:
    root = tmp_path / "docs"
    shutil.copytree(FIXTURES, root)
    return root


def test_filter_expired_includes_expired_transient(fixture_root: Path) -> None:
    result = run_scanner("--filter-expired", "--root", str(fixture_root))
    assert result.returncode == 0
    payload = json.loads(result.stdout)
    paths = {item["path"] for item in payload["expired"]}
    assert "expired_transient.md" in paths


def test_filter_expired_excludes_not_expired(fixture_root: Path) -> None:
    result = run_scanner("--filter-expired", "--root", str(fixture_root))
    payload = json.loads(result.stdout)
    paths = {item["path"] for item in payload["expired"]}
    assert "not_expired_transient.md" not in paths


def test_plan_upgrades_delete_to_archive_when_referenced_from_evergreen(
    fixture_root: Path,
) -> None:
    result = run_scanner(
        "--plan",
        "--root",
        str(fixture_root),
        "--changelog",
        str(fixture_root / "missing_changelog.md"),
    )
    assert result.returncode == 0
    payload = json.loads(result.stdout.split("\nHuman-readable plan:")[0])
    actions = {item["path"]: item for item in payload["actions"]}
    assert actions["expired_transient.md"]["action"] == "archive"
    assert "protected by references" in actions["expired_transient.md"]["reason"]


def test_plan_archives_when_referenced_in_changelog(tmp_path: Path) -> None:
    root = tmp_path / "scan_docs"
    shutil.copytree(FIXTURES, root)
    orphan = root / "orphan_expired.md"
    orphan.write_text(
        """---
lifecycle: transient
ttl_days: 1
created_at: 2020-01-01T00:00:00Z
expires_at: 2020-01-02T00:00:00Z
housekeeping_policy: delete
---
# Orphan
""",
        encoding="utf-8",
    )
    changelog = tmp_path / "CHANGELOG.md"
    changelog.write_text("# Changelog\n\n- archived orphan_expired.md\n", encoding="utf-8")

    result = run_scanner(
        "--plan",
        "--root",
        str(root),
        "--changelog",
        str(changelog),
    )
    payload = json.loads(result.stdout.split("\nHuman-readable plan:")[0])
    actions = {item["path"]: item for item in payload["actions"]}
    assert actions["orphan_expired.md"]["action"] == "archive"


def test_plan_without_execute_makes_no_filesystem_changes(fixture_root: Path) -> None:
    before = {path.name for path in fixture_root.glob("*.md")}
    result = run_scanner(
        "--plan",
        "--root",
        str(fixture_root),
        "--changelog",
        str(fixture_root / "missing_changelog.md"),
    )
    assert result.returncode == 0
    after = {path.name for path in fixture_root.glob("*.md")}
    assert before == after


def test_execute_archive_moves_file(fixture_root: Path, tmp_path: Path) -> None:
    archive_dir = tmp_path / "Archive"
    standalone = fixture_root / "standalone_expired.md"
    standalone.write_text(
        """---
lifecycle: transient
ttl_days: 1
created_at: 2020-01-01T00:00:00Z
expires_at: 2020-01-02T00:00:00Z
housekeeping_policy: archive
---
# Standalone expired
""",
        encoding="utf-8",
    )

    result = run_scanner(
        "--execute",
        "--root",
        str(fixture_root),
        "--archive-dir",
        str(archive_dir),
        "--changelog",
        str(fixture_root / "missing_changelog.md"),
        "--confirm",
    )
    assert result.returncode == 0
    assert not standalone.exists()
    assert (archive_dir / "standalone_expired.md").is_file()


def test_workflow_yaml_has_required_structure() -> None:
    workflow_path = PACKAGE_ROOT / "workflows" / "doc-housekeeping-workflow.yaml"
    text = workflow_path.read_text(encoding="utf-8")
    for key in ("name:", "version:", "type:", "description:", "config:", "steps:"):
        assert key in text
    for step_id in (
        "step-1",
        "step-2",
        "step-3",
        "step-4",
        "step-5",
        "step-6",
        "step-7",
    ):
        assert step_id in text
