"""Tests for validate_ipw_publication_wiring.py."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent / "validate_ipw_publication_wiring.py"


def _run(args: list[str], cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run([sys.executable, str(SCRIPT)] + args, cwd=cwd, capture_output=True, text=True)


def _write_task(path: Path, body: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        f"""---
---

# Task

**Task ID:** E2:S15:T01
**Status:** TODO

{body}
""",
        encoding="utf-8",
    )


def test_pass_with_full_wiring(tmp_path: Path):
    root = tmp_path
    task = root / "docs/project-management/kanban/epics/Epic-2/Story-015/T01-foo.md"
    ic = root / "docs/implementation-cycles"
    ic.mkdir(parents=True)
    for n in [
        "ICW-E2S15T01-specification.md",
        "ICW-E2S15T01-test-design.md",
        "ICW-E2S15T01-implementation-plan.md",
    ]:
        (ic / n).write_text("x", encoding="utf-8")
    _write_task(task, """## Input
- [Spec](../../../../../implementation-cycles/ICW-E2S15T01-specification.md)
- [Test](../../../../../implementation-cycles/ICW-E2S15T01-test-design.md)
- [Plan](../../../../../implementation-cycles/ICW-E2S15T01-implementation-plan.md)
""")
    r = _run(["--requested", "E2:S15:T01"], cwd=root)
    assert r.returncode == 0, r.stdout + r.stderr


def test_fail_when_missing_artifact_link(tmp_path: Path):
    root = tmp_path
    task = root / "docs/project-management/kanban/epics/Epic-2/Story-015/T01-foo.md"
    ic = root / "docs/implementation-cycles"
    ic.mkdir(parents=True)
    for n in [
        "ICW-E2S15T01-specification.md",
        "ICW-E2S15T01-test-design.md",
        "ICW-E2S15T01-implementation-plan.md",
    ]:
        (ic / n).write_text("x", encoding="utf-8")
    _write_task(task, """## Input
- [Spec](../../../../../implementation-cycles/ICW-E2S15T01-specification.md)
- [Plan](../../../../../implementation-cycles/ICW-E2S15T01-implementation-plan.md)
""")
    r = _run(["--requested", "E2S15T01"], cwd=root)
    assert r.returncode == 1
    assert "Missing task-doc link to test-design artifact" in r.stdout


def test_pass_not_applicable_with_reason(tmp_path: Path):
    root = tmp_path
    task = root / "docs/project-management/kanban/epics/Epic-2/Story-015/T01-foo.md"
    _write_task(task, """## Documentation Publication
Publication Status: NOT_APPLICABLE
Publication N/A Reason: Governance-only intake anchor; no new planning package yet.
""")
    r = _run(["--requested", "E2S15T01"], cwd=root)
    assert r.returncode == 0


def test_fail_not_applicable_missing_reason(tmp_path: Path):
    root = tmp_path
    task = root / "docs/project-management/kanban/epics/Epic-2/Story-015/T01-foo.md"
    _write_task(task, """Publication Status: NOT_APPLICABLE
""")
    r = _run(["--requested", "E2S15T01"], cwd=root)
    assert r.returncode == 1
    assert "Publication N/A Reason" in r.stdout
