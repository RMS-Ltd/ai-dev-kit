"""Replace embedded task bodies in Story docs with checklist links (FR-016 / E04:S11:T07)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Dict, List, Optional, Sequence

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from est_format import format_est_reference  # noqa: E402
from extract_embedded_tasks import (  # noqa: E402
    EmbeddedTask,
    extract_embedded_tasks,
    task_doc_filename,
)


def _checklist_mark(status: str) -> str:
    s = (status or "").upper()
    if "COMPLETE" in s or "DONE" in s:
        return "x"
    return " "


def _checklist_line(task: EmbeddedTask, rel_path: str) -> str:
    est = format_est_reference(task.epic, task.story, task.task)
    mark = _checklist_mark(task.status)
    link_label = Path(rel_path).stem
    return f"- [{mark}] **{est}** – {task.title} - [{link_label}]({rel_path})"


def build_task_link_map(
    tasks: List[EmbeddedTask],
    *,
    story_dir: Optional[Path] = None,
    task_subdir: Optional[str] = None,
) -> Dict[int, str]:
    """Map task number → relative path from Story file to Task doc."""
    rel_map: Dict[int, str] = {}
    sub = task_subdir or ""
    for t in tasks:
        fname = task_doc_filename(t.task, t.title)
        if sub:
            rel = f"{sub.rstrip('/')}/{fname}"
        else:
            rel = fname
        rel_map[t.task] = rel
    return rel_map


def update_story_refs(
    story_text: str,
    tasks: List[EmbeddedTask],
    rel_paths: Dict[int, str],
    *,
    checklist_heading: str = "## Task Checklist",
) -> str:
    """
    Remove embedded task sections and insert checklist links (RF2, RF6).

    Non-task content before the first embedded task and after the last task block
    is preserved unchanged.
    """
    if not tasks:
        return story_text

    lines = story_text.splitlines(keepends=True)
    sorted_tasks = sorted(tasks, key=lambda t: t.header_line)

    # Remove embedded sections bottom-up so indices stay valid
    for t in sorted(sorted_tasks, key=lambda x: x.header_line, reverse=True):
        del lines[t.header_line : t.end_line]

    checklist_block: List[str] = [
        "\n",
        f"{checklist_heading}\n",
        "\n",
    ]
    for t in sorted(sorted_tasks, key=lambda x: x.task):
        rel = rel_paths.get(t.task, task_doc_filename(t.task, t.title))
        checklist_block.append(_checklist_line(t, rel) + "\n")
    checklist_block.append("\n")

    insert_at = sorted_tasks[0].header_line
    lines[insert_at:insert_at] = checklist_block

    return "".join(lines)


def update_story_file(
    story_path: Path,
    rel_paths: Optional[Dict[int, str]] = None,
    *,
    task_subdir: Optional[str] = None,
    dry_run: bool = False,
) -> str:
    """Read Story, replace embedded tasks, optionally write back."""
    text = story_path.read_text(encoding="utf-8")
    tasks = extract_embedded_tasks(text, source_path=story_path)
    if rel_paths is None:
        rel_paths = build_task_link_map(tasks, story_dir=story_path.parent, task_subdir=task_subdir)
    updated = update_story_refs(text, tasks, rel_paths)
    if not dry_run:
        story_path.write_text(updated, encoding="utf-8")
    return updated


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Replace embedded tasks with checklist links in a Story file.")
    parser.add_argument("story", type=Path, help="Story markdown path")
    parser.add_argument(
        "--task-subdir",
        default="",
        help="Subdirectory relative to Story containing T{nn}-*.md files",
    )
    parser.add_argument("--dry-run", action="store_true", help="Print result without writing")
    args = parser.parse_args(argv)

    if not args.story.is_file():
        print(f"ERROR: not a file: {args.story}", file=sys.stderr)
        return 1

    result = update_story_file(
        args.story,
        task_subdir=args.task_subdir or None,
        dry_run=args.dry_run,
    )
    if args.dry_run:
        sys.stdout.write(result)
    else:
        print(f"Updated: {args.story}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
