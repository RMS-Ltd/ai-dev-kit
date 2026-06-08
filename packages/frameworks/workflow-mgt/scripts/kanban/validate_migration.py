"""Post-migration validation for embedded → discrete task migration (FR-016 / E04:S11:T07)."""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import List, Optional, Sequence

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from extract_embedded_tasks import extract_embedded_tasks_from_file  # noqa: E402

_STORY_GLOB_PATTERNS = (
    "epics/epic-*/story-*.md",
    "epics/Epic-*/Story-*.md",
)

_TASK_LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+\.md)\)")


@dataclass
class ValidationIssue:
    path: str
    message: str


@dataclass
class ValidationReport:
    stories_scanned: int = 0
    embedded_task_count: int = 0
    broken_links: List[ValidationIssue] = field(default_factory=list)
    stories_with_embedded: List[ValidationIssue] = field(default_factory=list)

    @property
    def ok(self) -> bool:
        return not self.broken_links and not self.stories_with_embedded

    def to_text(self) -> str:
        lines = [
            f"Stories scanned: {self.stories_scanned}",
            f"Embedded task sections: {self.embedded_task_count}",
            f"Stories with embedded tasks: {len(self.stories_with_embedded)}",
            f"Broken task links: {len(self.broken_links)}",
        ]
        for issue in self.stories_with_embedded:
            lines.append(f"  EMBEDDED  {issue.path}: {issue.message}")
        for issue in self.broken_links:
            lines.append(f"  LINK      {issue.path}: {issue.message}")
        return "\n".join(lines)


def _discover_story_files(kanban_root: Path) -> List[Path]:
    stories: List[Path] = []
    for pattern in _STORY_GLOB_PATTERNS:
        stories.extend(kanban_root.glob(pattern))
    return sorted(set(stories))


def _resolve_link(story_path: Path, target: str) -> Path:
    return (story_path.parent / target).resolve()


def validate_story_file(story_path: Path) -> ValidationReport:
    """Validate a single Story: embedded count and markdown task links."""
    report = ValidationReport(stories_scanned=1)
    tasks = extract_embedded_tasks_from_file(story_path)
    report.embedded_task_count = len(tasks)
    if tasks:
        report.stories_with_embedded.append(
            ValidationIssue(
                str(story_path),
                f"{len(tasks)} embedded task section(s) remain",
            )
        )

    text = story_path.read_text(encoding="utf-8")
    for m in _TASK_LINK_RE.finditer(text):
        target = m.group(1)
        if target.startswith("http"):
            continue
        resolved = _resolve_link(story_path, target)
        if not resolved.is_file():
            report.broken_links.append(
                ValidationIssue(str(story_path), f"broken link: {target}")
            )

    return report


def validate_kanban_root(
    kanban_root: Path,
    *,
    story_paths: Optional[Sequence[Path]] = None,
) -> ValidationReport:
    """Scan kanban tree (or explicit story list) for migration issues."""
    stories = list(story_paths) if story_paths else _discover_story_files(kanban_root)
    combined = ValidationReport(stories_scanned=len(stories))

    for story in stories:
        if not story.is_file():
            continue
        one = validate_story_file(story)
        combined.embedded_task_count += one.embedded_task_count
        combined.stories_with_embedded.extend(one.stories_with_embedded)
        combined.broken_links.extend(one.broken_links)

    return combined


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Validate FR-016 migration state under kanban root.")
    parser.add_argument(
        "kanban_root",
        type=Path,
        nargs="?",
        default=Path("docs/kanban"),
        help="Kanban documentation root",
    )
    parser.add_argument("--story", type=Path, action="append", help="Validate specific Story file(s) only")
    args = parser.parse_args(argv)

    root = args.kanban_root
    if args.story:
        report = validate_kanban_root(root, story_paths=args.story)
    else:
        if not root.is_dir():
            print(f"ERROR: not a directory: {root}", file=sys.stderr)
            return 1
        report = validate_kanban_root(root)

    print(report.to_text())
    return 0 if report.ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
