#!/usr/bin/env python3
"""Generate v4 epic/story template markdown from kanban_v4_catalog.py."""

from __future__ import annotations

import argparse
import sys
from datetime import datetime, timezone
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from kanban_v4_catalog import (  # noqa: E402
    EpicRecord,
    StoryRecord,
    V4_EPICS,
    V4_TEMPLATE_ROOT,
    epic_template_dir,
)

CREATED_AT = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

EPIC_REQUIRED_SECTIONS = (
    "## Purpose",
    "## Scope",
    "## Excludes / wrong homes",
    "## Overview",
    "## Stories",
    "## Dependencies",
    "## References",
)

STORY_REQUIRED_SECTIONS = (
    "## Overview",
    "## Goals",
    "## Acceptance criteria",
    "## Out of scope",
    "## Dependencies",
    "## References",
)

GOLD_EPIC = 7
GOLD_STORY = (15, 2)


def _yaml_list(items: tuple) -> str:
    if not items:
        return "[]"
    return "\n".join(f"  - {x}" for x in items)


def _narrative_purpose(epic: EpicRecord) -> str:
    if epic.reserved:
        return (
            f"Reserved **core/ancillary expansion slot** for **{{PROJECT_NAME}}**. "
            f"Do not file delivery work here until ADK catalogue assigns a concern to **E{epic.epic_num:02d}**."
        )
    if epic.epic_num == GOLD_EPIC:
        return (
            "For **{PROJECT_NAME}**, **E07 SEC** owns the **repository security baseline** — "
            "policies and automated hooks on **{REPO_ROOT}** — not product login (**E14 AUTH**) "
            "or regulatory compliance (**E15 COMPLY**)."
        )
    if epic.epic_num == 15:
        return (
            "For **{PROJECT_NAME}**, **E15 COMPLY** owns **product and process compliance** "
            "under **{REGULATORY_REGIME}** — not repo security (**E07 SEC**)."
        )
    return (
        f"For **{{PROJECT_NAME}}**, **E{epic.epic_num:02d} {epic.short_tag}** ({epic.display_title}) "
        f"provides the **{epic.tier}**-tier home for {', '.join(epic.concerns[:2])}. "
        f"Agents must not duplicate this concern in another tier."
    )


def _narrative_overview_epic(epic: EpicRecord) -> str:
    if epic.reserved:
        return "Placeholder epic — no active work until catalogue expansion."
    return (
        f"This epic structures **{{PROJECT_NAME}}** work for **{epic.display_title}** "
        f"(`{epic.short_tag}`). Use the story checklist and linked story files for finite delivery; "
        f"perpetual hygiene stays on **E01:S01** when applicable."
    )


def _story_summary(epic: EpicRecord, story: StoryRecord) -> str:
    if (epic.epic_num, story.story_num) == GOLD_STORY:
        return (
            "When **{PROJECT_NAME}** processes personal data under **{REGULATORY_REGIME}**, "
            "this story implements **product-facing privacy controls**: consent capture, subject "
            "export/delete paths, and privacy-by-design review gates before release. Repo secret "
            "scanning remains **E07 SEC**; processor contracts live in **E15:S03**."
        )
    tokens = " ".join(story.placeholder_tokens)
    return (
        f"For **{{PROJECT_NAME}}**, **E{epic.epic_num:02d}:S{story.story_num:02d}** delivers "
        f"**{story.title}** as part of **E{epic.epic_num:02d} {epic.short_tag}**. "
        f"Scope placeholders: {tokens}."
    )


def _story_overview(epic: EpicRecord, story: StoryRecord) -> str:
    if (epic.epic_num, story.story_num) == GOLD_STORY:
        return _story_summary(epic, story)
    if story.story_class == "reserved":
        return "Reserved story slot — do not populate tasks until epic is assigned."
    return (
        f"**{{PROJECT_NAME}}** completes **{story.title}** under **E{epic.epic_num:02d}:S{story.story_num:02d}**. "
        f"This story is abstract in the packaged catalogue; concrete tasks come from CATL or KMA "
        f"when **{story.story_class}** rules apply."
    )


def _task_checklist_story(story: StoryRecord) -> str:
    if story.has_packaged_tasks:
        return (
            "- [ ] **E{:02d}:S{:02d}:T01** – *(Packaged task — see templates/v4/tasks/core/)*\n"
            "- [ ] **E{:02d}:S{:02d}:T02** – *(Additional tasks per CATL manifest)*"
        ).format(story.epic_num, story.story_num, story.epic_num, story.story_num)
    if story.story_class in ("generic", "domain", "intake", "reserved"):
        return (
            "- [ ] *(No packaged tasks — adopter/KMA creates concrete tasks from "
            "CATL DELIVERY_FEATURE or intake patterns)*"
        )
    return "- [ ] *(See CATL manifest for bootstrap/perpetual task rows)*"


def render_epic(epic: EpicRecord) -> str:
    nn = epic.epic_num
    lines = [
        "---",
        "lifecycle: evergreen",
        "ttl_days: null",
        f"created_at: {CREATED_AT}",
        "expires_at: null",
        "housekeeping_policy: keep",
        f"tier: {epic.tier}",
        f"display_title: {epic.display_title}",
        f"catalog_slug: {epic.catalog_slug}",
        f"short_tag: {epic.short_tag}",
        "concerns:",
        _yaml_list(epic.concerns),
        "excludes:",
        _yaml_list(epic.excludes) if epic.excludes else "  []",
    ]
    if epic.adoption_order is not None:
        lines.append(f"adoption_order: {epic.adoption_order}")
    lines.extend(
        [
            "catalog_version: v4",
            "---",
            "",
            f"# Epic {nn:02d}: {epic.display_title}",
            "",
            "**Status:** TODO",
            "**Priority:** HIGH" if epic.tier == "core" else "MEDIUM",
            "**Created:** [YYYY-MM-DD]",
            "**Last updated:** [YYYY-MM-DD] (Kanban v4 template)",
            f"**Version Schema:** `0.{nn}.S.T+B`",
            f"**Short tag:** `{epic.short_tag}`",
            "",
            "---",
            "",
            "## Story Checklist",
            "",
        ]
    )
    for s in epic.stories:
        lines.append(f"- [ ] **E{nn:02d}:S{s.story_num:02d} – {s.title}** - TODO")
    lines.extend(
        [
            "",
            "## Purpose",
            "",
            _narrative_purpose(epic),
            "",
            "## Scope",
            "",
        ]
    )
    for c in epic.concerns:
        lines.append(f"- {c.replace('_', ' ')}")
    lines.extend(["", "## Excludes / wrong homes", ""])
    if epic.excludes:
        for x in epic.excludes:
            lines.append(f"- {x.replace('_', ' ')}")
    else:
        lines.append("- *(none — reserved slot)*")
    if epic.epic_num == GOLD_EPIC:
        lines.append("- Product authentication → **E14 AUTH**")
        lines.append("- UK GDPR / DPIA pack → **E15 COMPLY**")
        lines.append("- Prod WAF → **E18 PRODOPS**")
    lines.extend(["", "## Overview", "", _narrative_overview_epic(epic), "", "## Stories", ""])
    for s in epic.stories:
        rel = f"stories/story-{s.story_num:02d}-{s.story_slug}.md"
        lines.extend(
            [
                f"### E{nn:02d}:S{s.story_num:02d} – {s.title}",
                "",
                f"**Brief Summary:** {_story_summary(epic, s)}",
                "",
                f"**Story document:** [`{rel}`]({rel})",
                "",
            ]
        )
    lines.extend(
        [
            "## Dependencies",
            "",
            "**Blocks:**",
            "- *(Epic-level dependencies for {PROJECT_NAME})*",
            "",
            "**Blocked By:**",
            "- **E02:S02** Repository Bootstrap (for domain delivery on E24+)",
            "",
            "**Coordinates With:**",
            f"- Other **{epic.tier}** epics per DUPLICATE_EPIC_POLICY.md",
            "",
            "## References",
            "",
            "- [DUPLICATE_EPIC_POLICY.md](../../guides/DUPLICATE_EPIC_POLICY.md)",
            "- [TEMPLATE_CONTENT_CONTRACT.md](../../guides/TEMPLATE_CONTENT_CONTRACT.md)",
            "- [13-v4-three-tier-catalogue.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/dev/docs/knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md)",
            "",
        ]
    )
    return "\n".join(lines)


def render_story(epic: EpicRecord, story: StoryRecord) -> str:
    nn, ss = epic.epic_num, story.story_num
    lines = [
        "---",
        "lifecycle: evergreen",
        "ttl_days: null",
        f"created_at: {CREATED_AT}",
        "expires_at: null",
        "housekeeping_policy: keep",
        f"epic_ref: E{nn:02d}",
        f"story_code: E{nn:02d}S{ss:02d}",
        f"story_slug: {story.story_slug}",
        "catalog_version: v4",
        "---",
        "",
        f"# Epic {nn:02d}, Story {ss:02d}: {story.title}",
        "",
        "**Status:** TODO",
        "**Priority:** HIGH" if epic.tier == "core" else "MEDIUM",
        "**Last updated:** [YYYY-MM-DD] (Kanban v4 template)",
        f"**Code:** E{nn:02d}S{ss:02d}",
        "",
        "---",
        "",
        "## Task Checklist",
        "",
        _task_checklist_story(story),
        "",
        "## Overview",
        "",
        _story_overview(epic, story),
        "",
        "## Goals",
        "",
        f"- [ ] **{{PROJECT_NAME}}** story outcomes for **{story.title}** are defined and agreed",
        "- [ ] Scope boundaries vs neighbouring epics are documented",
        "- [ ] Acceptance criteria below are testable at story completion",
        "- [ ] Links to epic **E{:02d} {}** are consistent on the board".format(nn, epic.short_tag),
        "",
        "## Acceptance criteria",
        "",
        f"- Story **E{nn:02d}:S{ss:02d}** documentation and board row exist for **{{PROJECT_NAME}}**",
        "- No duplicate epic owns the same concern (see Out of scope)",
        "- Task checklist reflects CATL/bootstrap rules for this story class",
        "",
        "## Out of scope",
        "",
    ]
    for x in epic.excludes[:3]:
        lines.append(f"- {x.replace('_', ' ')}")
    if not epic.excludes:
        lines.append("- *(See epic Excludes section)*")
    lines.extend(
        [
            "",
            "## Dependencies",
            "",
            f"- Epic **E{nn:02d}** — {epic.display_title}",
            "- **E02:S02** when creating first **E24+** delivery tasks",
            "",
            "## References",
            "",
            f"- [`epic-{nn:02d}.md`](../epic-{nn:02d}.md)",
            "- [TEMPLATE_CONTENT_CONTRACT.md](../../../guides/TEMPLATE_CONTENT_CONTRACT.md)",
            "",
        ]
    )
    return "\n".join(lines)


def generate(*, dry_run: bool = False, overwrite: bool = False) -> int:
    created = 0
    for epic in V4_EPICS:
        epic_dir = epic_template_dir(epic)
        epic_path = epic_dir / f"epic-{epic.epic_num:02d}.md"
        stories_dir = epic_dir / "stories"
        if dry_run:
            print(f"Would write {epic_path}")
            for s in epic.stories:
                print(f"  Would write {stories_dir / f'story-{s.story_num:02d}-{s.story_slug}.md'}")
            continue
        epic_dir.mkdir(parents=True, exist_ok=True)
        stories_dir.mkdir(parents=True, exist_ok=True)
        if overwrite or not epic_path.exists():
            epic_path.write_text(render_epic(epic), encoding="utf-8")
            created += 1
        for s in epic.stories:
            sp = stories_dir / f"story-{s.story_num:02d}-{s.story_slug}.md"
            if overwrite or not sp.exists():
                sp.write_text(render_story(epic, s), encoding="utf-8")
                created += 1
    if not dry_run:
        print(f"Generated/updated {created} v4 template file(s) under {V4_TEMPLATE_ROOT}")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate Kanban v4 E/S templates")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--overwrite", action="store_true")
    args = parser.parse_args()
    return generate(dry_run=args.dry_run, overwrite=args.overwrite)


if __name__ == "__main__":
    sys.exit(main())
