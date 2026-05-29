"""
End-to-end style tests for contamination remediation.
"""

import subprocess
import sys
from pathlib import Path

from packages.frameworks.kanban.scripts.contamination_detector import scan_kanban_tree


def test_remediation_is_idempotent(tmp_path: Path) -> None:
    # Arrange: create a minimal contaminated kanban tree
    kanban_root = tmp_path / "docs" / "project-management" / "kanban"
    epic6 = kanban_root / "epics" / "Epic-6" / "Epic-6.md"
    epic6.parent.mkdir(parents=True, exist_ok=True)
    epic6.write_text("# Epic 6: Framework Management\n", encoding="utf-8")

    # Sanity: detector flags contamination
    findings = scan_kanban_tree(kanban_root)
    assert any(f.classification == "contaminated" for f in findings)

    script = (
        Path(__file__).resolve().parent.parent.parent
        / "packages"
        / "frameworks"
        / "kanban"
        / "scripts"
        / "remediate_contamination.py"
    )

    # Act: run remediation twice (archive mode, non-dry-run)
    for _ in range(2):
        result = subprocess.run(
            [sys.executable, str(script), "--kanban-root", str(kanban_root), "--no-dry-run"],
            cwd=str(tmp_path),
            capture_output=True,
            text=True,
            timeout=60,
        )
        assert result.returncode == 0, f"stderr: {result.stderr}"

    # Assert: original file gone, archived once, second run is effectively no-op
    assert not epic6.exists()
    archived = kanban_root / ".contaminated" / "epics" / "Epic-6" / "Epic-6.md"
    assert archived.exists()

