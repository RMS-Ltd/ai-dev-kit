#!/usr/bin/env python3
"""Validate bidirectional wiring between planning docs and host tasks.

Checks (AC7 / FR-042):
1. Plan doc includes a Host Task markdown link.
2. Host task file exists.
3. Host task ## Input section references the plan doc.
4. Host task ## References section references the plan doc.

Exit code 0 when all docs pass; 1 otherwise.
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path


HOST_TASK_RE = re.compile(r"Host Task:\*{0,2}\s*\[[^\]]+\]\(([^)]+)\)", re.IGNORECASE)
SECTION_RE = re.compile(r"^##\s+(.+?)\s*$", re.MULTILINE)


def section_body(content: str, name: str) -> str:
    matches = list(SECTION_RE.finditer(content))
    for i, m in enumerate(matches):
        if m.group(1).strip().lower() == name.lower():
            start = m.end()
            end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
            return content[start:end]
    return ""


def discover_plan_docs(kanban_root: Path) -> list[Path]:
    epics_root = kanban_root / "epics"
    plans = set(epics_root.glob("**/*planning*.md"))
    plans.update(epics_root.glob("**/IPW-*.md"))

    filtered: list[Path] = []
    for p in sorted(plans):
        n = p.name.lower()
        if n.startswith("story-") or n.startswith("epic-"):
            continue
        if n.startswith("fr-") or n.startswith("br-") or n.startswith("uxr-"):
            continue
        # Task docs can contain the word 'planning' but are not planning artifacts.
        if re.match(r"^t\d+-implementation-planning-workflow-ipw\.md$", n):
            continue
        filtered.append(p)
    return filtered


def validate_plan(plan_path: Path) -> list[str]:
    errors: list[str] = []
    content = plan_path.read_text(encoding="utf-8", errors="replace")

    m = HOST_TASK_RE.search(content)
    if not m:
        return [f"{plan_path}: missing Host Task link"]

    host_rel = m.group(1).strip()
    host_path = (plan_path.parent / host_rel).resolve()
    if not host_path.exists():
        return [f"{plan_path}: host task not found -> {host_rel}"]

    host_content = host_path.read_text(encoding="utf-8", errors="replace")
    plan_name = plan_path.name

    input_body = section_body(host_content, "Input")
    refs_body = section_body(host_content, "References")

    if plan_name not in input_body:
        errors.append(f"{plan_path}: host task missing plan link in ## Input ({host_path})")
    if plan_name not in refs_body:
        errors.append(f"{plan_path}: host task missing plan link in ## References ({host_path})")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate planning doc <-> task bidirectional wiring")
    parser.add_argument(
        "--kanban-root",
        default="docs/project-management/kanban",
        help="Kanban root directory (default: docs/project-management/kanban)",
    )
    args = parser.parse_args()

    project_root = Path(__file__).resolve().parents[5]
    kanban_root = (project_root / args.kanban_root).resolve()

    if not kanban_root.exists():
        print(f"ERROR: kanban root not found: {kanban_root}")
        return 1

    plans = discover_plan_docs(kanban_root)
    if not plans:
        print("No planning docs discovered.")
        return 0

    all_errors: list[str] = []
    for plan in plans:
        all_errors.extend(validate_plan(plan))

    print(f"Discovered planning docs: {len(plans)}")
    if all_errors:
        print("FAIL: wiring issues detected")
        for err in all_errors:
            print(f" - {err}")
        return 1

    print("PASS: all planning docs are bidirectionally wired")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
