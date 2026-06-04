#!/usr/bin/env python3
"""Apply IPP-E2S16T02 §2.6 ACTIVE_FIX path migrations (Tranche 3B)."""

from __future__ import annotations

import argparse
import re
from pathlib import Path
from typing import Dict, List, Tuple

S07 = "epic-06/story-07-adk-implementation-analysis-and-package-management"

# legacy task file stem -> canonical path (under docs/project-management/kanban/epics/)
REPLACEMENTS: Dict[str, str] = {
    f"{S07}/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md": (
        "epic-02/story-16-perpetual-ongoing-workflow-operations/"
        "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
    ),
    f"{S07}/T109-br059-ukw-moscow-full-story-task-coverage.md": (
        "epic-02/story-16-perpetual-ongoing-workflow-operations/"
        "T13-br059-ukw-moscow-full-story-task-coverage.md"
    ),
    f"{S07}/T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md": (
        "epic-02/story-16-perpetual-ongoing-workflow-operations/"
        "T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md"
    ),
    f"{S07}/T18-tool-agnostic-workflow-step-tracking-and-runlogs.md": (
        "epic-02/story-01-rw-agent-execution-and-docs/"
        "T23-tool-agnostic-workflow-step-tracking-and-runlogs.md"
    ),
    f"{S07}/T106-windsurf-migration-cursorrules-to-workflows.md": (
        "epic-02/story-16-perpetual-ongoing-workflow-operations/"
        "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
    ),
    f"{S07}/T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md": (
        "epic-02/story-16-perpetual-ongoing-workflow-operations/"
        "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
    ),
    f"{S07}/T113-rw-step-12-5-github-release-parser-hardening-br065.md": (
        "epic-02/story-16-perpetual-ongoing-workflow-operations/"
        "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
    ),
    f"{S07}/T114-canonical-board-filename-migration-kboard-fbuboard.md": (
        "epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/"
        "T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md"
    ),
    f"{S07}/T115-last-modified-stamp-forensic-integrity-guardrails.md": (
        "epic-02/story-15-ipw-governance-and-publication-contract/"
        "T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md"
    ),
}

HISTORICAL_LINE_RE = re.compile(
    r"superseded|historical anchor|historical context",
    re.IGNORECASE,
)

ACTIVE_ROOTS = [
    "docs/project-management/kanban",
    "docs/guides",
    "docs/architecture",
    "packages/frameworks/workflow mgt/docs",
]

SKIP_GLOBS = ("test_validate_rw_task_intent.py", "test_validate_version_bump.py")


def count_occurrences(root: Path) -> Tuple[int, int]:
    total, files = 0, 0
    for p in root.rglob("*"):
        if not p.is_file():
            continue
        try:
            text = p.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        n = text.count(S07)
        if n:
            total += n
            files += 1
    return total, files


def migrate_file(path: Path, dry_run: bool) -> int:
    if path.name in SKIP_GLOBS:
        return 0
    try:
        lines = path.read_text(encoding="utf-8", errors="replace").splitlines(keepends=True)
    except OSError:
        return 0
    changed = 0
    new_lines: List[str] = []
    for line in lines:
        original = line
        if S07 in line and not HISTORICAL_LINE_RE.search(line):
            for old, new in REPLACEMENTS.items():
                if old in line:
                    line = line.replace(old, new)
        if line != original:
            changed += 1
        new_lines.append(line)
    if changed and not dry_run:
        path.write_text("".join(new_lines), encoding="utf-8")
    return changed


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    root = args.project_root.resolve()
    docs = root / "docs"
    before_t, before_f = count_occurrences(docs)
    files_touched = 0
    lines_changed = 0
    for rel in ACTIVE_ROOTS:
        base = root / rel
        if not base.exists():
            continue
        for p in base.rglob("*"):
            if not p.is_file() or p.suffix not in (".md", ".yaml", ".yml"):
                continue
            n = migrate_file(p, args.dry_run)
            if n:
                files_touched += 1
                lines_changed += n
    after_t, after_f = count_occurrences(docs)
    mode = "DRY-RUN" if args.dry_run else "APPLIED"
    print(f"{mode}: {files_touched} files, {lines_changed} lines with replacements")
    print(f"docs/ epic-06/Story-007: before={before_t}/{before_f} after={after_t}/{after_f}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
