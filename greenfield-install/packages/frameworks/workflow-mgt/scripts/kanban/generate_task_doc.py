"""Generate discrete Task documents from embedded task data (FR-016 / E04:S11:T07)."""

from __future__ import annotations

import argparse
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional, Sequence

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from est_format import format_est_reference  # noqa: E402
from extract_embedded_tasks import (  # noqa: E402
    EmbeddedTask,
    extract_embedded_tasks_from_file,
    task_doc_filename,
)

_TEMPLATE_PATH = (
    Path(__file__).resolve().parents[3]
    / "kanban"
    / "templates"
    / "TASK_TEMPLATE.md"
)


def _default_template_path() -> Path:
    if _TEMPLATE_PATH.is_file():
        return _TEMPLATE_PATH
    return Path(__file__).resolve().parents[3] / "kanban" / "templates" / "TASK_TEMPLATE.md"


def _code_token(epic: int, story: int, task: int) -> str:
    return f"E{epic:02d}S{story:02d}T{task:02d}"


def render_task_document(
    task: EmbeddedTask,
    *,
    version: str = "v0.0.0.0+0",
    last_updated: Optional[str] = None,
) -> str:
    """Render discrete Task markdown with required sections (RF3)."""
    est = format_est_reference(task.epic, task.story, task.task)
    today = last_updated or datetime.now(timezone.utc).strftime("%Y-%m-%d")
    status = task.status if task.status else "TODO"
    title = task.title or "Untitled task"

    lines = [
        "---",
        "lifecycle: evergreen",
        "ttl_days: null",
        f"created_at: {datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')}",
        "expires_at: null",
        "housekeeping_policy: keep",
        "---",
        "",
        f"# Epic {task.epic}, Story {task.story}, Task {task.task}: {title}",
        "",
        f"**Task ID:** {est}  ",
        f"**Status:** {status}  ",
        "**Priority:** MEDIUM  ",
        f"**Last updated:** {today} ({version} – migrated from embedded Story section)  ",
        f"**Version:** {version}  ",
        f"**Code:** {_code_token(task.epic, task.story, task.task)}",
        "",
        "---",
        "",
        "## Task ID",
        "",
        f"**Format:** `E{{epic}}:S{{story}}:T{{task}}`",
        "",
        f"**Full Task ID:** `{est}`",
        "",
        "---",
        "",
        "## Scope",
        "",
        task.scope,
        "",
        "---",
        "",
        "## Input",
        "",
        task.input_text,
        "",
        "---",
        "",
        "## Deliverable",
        "",
        task.deliverable,
        "",
        "---",
        "",
        "## Acceptance Criteria",
        "",
        task.acceptance_criteria,
        "",
        "---",
        "",
        "## Version Anchor",
        "",
        "**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`",
        "",
        "---",
        "",
        "## Migration Notes",
        "",
        "Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).",
        "",
    ]

    if task.source_path:
        lines.extend(
            [
                f"**Source Story:** `{task.source_path}`",
                "",
            ]
        )

    return "\n".join(lines) + "\n"


def generate_task_doc(
    task: EmbeddedTask,
    output_dir: Path,
    *,
    version: str = "v0.0.0.0+0",
    dry_run: bool = False,
) -> Path:
    """Write discrete task file; return output path."""
    output_dir.mkdir(parents=True, exist_ok=True)
    filename = task_doc_filename(task.task, task.title)
    out_path = output_dir / filename
    content = render_task_document(task, version=version)
    if not dry_run:
        out_path.write_text(content, encoding="utf-8")
    return out_path


def generate_task_docs_from_story(
    story_path: Path,
    output_dir: Path,
    *,
    version: str = "v0.0.0.0+0",
    dry_run: bool = False,
) -> list[Path]:
    """Extract embedded tasks from *story_path* and write discrete docs."""
    tasks = extract_embedded_tasks_from_file(story_path)
    return [
        generate_task_doc(t, output_dir, version=t.version_anchor or version, dry_run=dry_run) for t in tasks
    ]


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Generate discrete Task docs from a Story file.")
    parser.add_argument("story", type=Path, help="Story markdown path")
    parser.add_argument(
        "-o",
        "--output-dir",
        type=Path,
        required=True,
        help="Directory for generated T{nn}-{slug}.md files",
    )
    parser.add_argument("--version", default="v0.0.0.0+0", help="Version string for headers")
    parser.add_argument("--dry-run", action="store_true", help="Parse only; do not write files")
    args = parser.parse_args(argv)

    if not args.story.is_file():
        print(f"ERROR: not a file: {args.story}", file=sys.stderr)
        return 1

    paths = generate_task_docs_from_story(
        args.story,
        args.output_dir,
        version=args.version,
        dry_run=args.dry_run,
    )
    for p in paths:
        print(p)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
