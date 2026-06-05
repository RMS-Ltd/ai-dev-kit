"""Orchestrate embedded → discrete task migration (FR-016 Wave 2)."""

from __future__ import annotations

import argparse
import sys
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Dict, List, Optional, Sequence, Set

_SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(_SCRIPT_DIR))

from extract_embedded_tasks import extract_embedded_tasks  # noqa: E402
from generate_task_doc import generate_task_doc  # noqa: E402
from update_story_refs import remove_embedded_sections, wire_checklist_links  # noqa: E402


@dataclass
class MigrationResult:
    story_path: str
    tasks_migrated: List[int] = field(default_factory=list)
    tasks_skipped_existing: List[int] = field(default_factory=list)
    rel_paths: Dict[int, str] = field(default_factory=dict)
    generated_files: List[str] = field(default_factory=list)
    dry_run: bool = False

    def to_dict(self):
        return asdict(self)


def _parse_task_filter(raw: Optional[str]) -> Optional[Set[int]]:
    if not raw:
        return None
    return {int(p.strip().upper().lstrip("T")) for p in raw.split(",") if p.strip()}


def migrate_story(
    story_path: Path,
    output_dir: Path,
    *,
    task_subdir: str,
    task_filter: Optional[Set[int]] = None,
    dry_run: bool = False,
) -> MigrationResult:
    text = story_path.read_text(encoding="utf-8")
    tasks = [
        t for t in extract_embedded_tasks(text, source_path=story_path)
        if task_filter is None or t.task in task_filter
    ]
    result = MigrationResult(story_path=str(story_path), dry_run=dry_run)
    if not tasks:
        return result

    sub = task_subdir.rstrip("/")
    rel_paths: Dict[int, str] = {}
    for t in sorted(tasks, key=lambda x: x.task):
        existing = sorted(output_dir.glob(f"T{t.task:02d}-*.md"))
        if existing:
            rel_paths[t.task] = f"{sub}/{existing[0].name}"
            result.tasks_skipped_existing.append(t.task)
        else:
            out = generate_task_doc(
                t, output_dir, version=t.version_anchor or "v0.0.0.0+0", dry_run=dry_run,
            )
            rel_paths[t.task] = f"{sub}/{out.name}"
            result.generated_files.append(str(out))
            result.tasks_migrated.append(t.task)

    updated = wire_checklist_links(remove_embedded_sections(text, tasks), rel_paths)
    result.rel_paths = rel_paths
    if not dry_run:
        story_path.write_text(updated, encoding="utf-8")
    return result


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("story", type=Path)
    parser.add_argument("-o", "--output-dir", type=Path, required=True)
    parser.add_argument("--task-subdir", required=True)
    parser.add_argument("--tasks", default="")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args(argv)
    result = migrate_story(
        args.story,
        args.output_dir,
        task_subdir=args.task_subdir,
        task_filter=_parse_task_filter(args.tasks or None),
        dry_run=args.dry_run,
    )
    print(f"Generated: {result.tasks_migrated} Reused: {result.tasks_skipped_existing}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
