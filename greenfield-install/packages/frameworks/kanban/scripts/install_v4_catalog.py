"""Install Kanban v4 templates into consumer kanban_path."""

from __future__ import annotations

from pathlib import Path
from typing import Dict, List, Optional

import kanban_paths as kp


def _templates_root() -> Path:
    return Path(__file__).resolve().parent.parent / "templates" / "v4"


def _contextualize(content: str, project_name: str) -> str:
    slug = project_name.lower().replace(" ", "-").replace("_", "-")
    return (
        content.replace("{PROJECT_NAME}", project_name)
        .replace("{project-slug}", slug)
        .replace("{REPO_ROOT}", ".")
        .replace("{KANBAN_ROOT}", "docs/kanban")
    )


def resolve_v4_epic_template(epic_num: int):
    from kanban_v4_catalog import V4_EPIC_BY_NUM, epic_template_dir

    epic = V4_EPIC_BY_NUM.get(epic_num)
    if not epic:
        return None
    epic_dir = epic_template_dir(epic)
    path = epic_dir / f"epic-{epic_num:02d}.md"
    return path if path.is_file() else None


def install_v4_epics_and_stories(
    kanban_path: Path,
    *,
    epic_numbers: Optional[List[int]] = None,
    dry_run: bool = False,
    force: bool = False,
    project_name: str = "Project",
) -> Dict:
    from kanban_v4_catalog import V4_EPIC_BY_NUM, V4_FRESH_EPICS, epic_template_dir

    if epic_numbers is None:
        epic_numbers = list(V4_FRESH_EPICS)

    log: List[Dict] = []
    kanban_path = Path(kanban_path)

    for epic_num in epic_numbers:
        epic = V4_EPIC_BY_NUM.get(epic_num)
        if not epic or epic.tier not in ("core",):
            continue
        epic_dir = epic_template_dir(epic)
        src_epic = epic_dir / f"epic-{epic_num:02d}.md"
        if not src_epic.is_file():
            continue
        dest_epic_dir = kanban_path / "epics" / kp.epic_dir_name(epic_num)
        dest_epic = dest_epic_dir / kp.epic_doc_basename(epic_num)

        if dry_run:
            log.append({"type": "epic", "action": "dry_run", "epic_number": epic_num})
            continue

        dest_epic_dir.mkdir(parents=True, exist_ok=True)
        if force or not dest_epic.exists():
            dest_epic.write_text(
                _contextualize(src_epic.read_text(encoding="utf-8"), project_name),
                encoding="utf-8",
            )
            log.append({"type": "epic", "action": "installed", "epic_number": epic_num})

        stories_src = epic_dir / "stories"
        if stories_src.is_dir():
            for story_file in sorted(stories_src.glob("story-*.md")):
                dest_story = dest_epic_dir / story_file.name
                if force or not dest_story.exists():
                    dest_story.write_text(
                        _contextualize(story_file.read_text(encoding="utf-8"), project_name),
                        encoding="utf-8",
                    )
                    log.append(
                        {
                            "type": "story",
                            "action": "installed",
                            "epic_number": epic_num,
                            "path": str(dest_story.relative_to(kanban_path)),
                        }
                    )

    return {
        "status": "completed",
        "epics_installed": len([e for e in log if e.get("type") == "epic"]),
        "files_created": len(log),
        "kanban_path": str(kanban_path),
        "catalog": "v4",
        "log": log,
    }


def install_v4_core_tasks(
    kanban_path: Path,
    *,
    dry_run: bool = False,
    force: bool = False,
    project_name: str = "Project",
) -> int:
    """Install packaged task docs for v4 bootstrap/perpetual stories."""
    from kanban_v4_catalog import V4_FRESH_TASK_STORIES, V4_STORY_FILES

    kanban_path = Path(kanban_path)
    scripts_dir = Path(__file__).resolve().parent
    tasks_roots = [
        scripts_dir.parent / "templates" / "v4" / "tasks" / "core",
        scripts_dir.parent / "templates" / "tasks",
    ]
    installed = 0
    for epic_num, story_num in V4_FRESH_TASK_STORIES:
        story_file = V4_STORY_FILES.get((epic_num, story_num))
        if not story_file:
            continue
        story_stem = Path(story_file).stem
        sn = kp.segment_number(story_num)
        en = kp.segment_number(epic_num)
        task_src_dir = None
        for root in tasks_roots:
            for candidate in (
                root / kp.epic_dir_name(epic_num) / f"story-{sn}",
                root / f"epic-{en}" / f"story-{sn}",
            ):
                if candidate.is_dir() and list(candidate.glob("T*.md")):
                    task_src_dir = candidate
                    break
            if task_src_dir:
                break
        if not task_src_dir:
            continue
        epic_dir = kanban_path / "epics" / kp.epic_dir_name(epic_num)
        task_dest_dir = epic_dir / story_stem
        if dry_run:
            continue
        epic_dir.mkdir(parents=True, exist_ok=True)
        task_dest_dir.mkdir(parents=True, exist_ok=True)
        for src in sorted(task_src_dir.glob("T*.md")):
            dest = task_dest_dir / src.name
            if dest.exists() and not force:
                continue
            dest.write_text(_contextualize(src.read_text(encoding="utf-8"), project_name), encoding="utf-8")
            installed += 1
    return installed
