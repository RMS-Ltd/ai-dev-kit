#!/usr/bin/env python3
"""One-off batch RW -k releases for E1:S04:T04-T07 (FR-099 phase tasks)."""
from __future__ import annotations

import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VERSION_PY = ROOT / "src/ai_dev_kit/version.py"
CHANGELOG = ROOT / "CHANGELOG.md"
ARCHIVE = ROOT / "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md"
README = ROOT / "README.md"
STORY = ROOT / "docs/project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming.md"
TASK_DIR = ROOT / "docs/project-management/kanban/epics/Epic-1/Story-004-repository-branding-and-renaming"

RELEASES = [
    (4, 1, "T04", "FR-099 Phase 1 — Privatize & rename hf-ai-dev-kit", "T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md"),
    (5, 1, "T05", "FR-099 Phase 2 — Book extraction genesis", "T05-fr099-phase2-book-extraction-genesis.md"),
    (6, 1, "T06", "FR-099 Phase 3 — Public ai-dev-kit rebirth", "T06-fr099-phase3-public-ai-dev-kit-rebirth.md"),
    (7, 1, "T07", "FR-099 Phase 4 — Rewire & verify", "T07-fr099-phase4-rewire-and-verify.md"),
]


def run(cmd: list[str], check: bool = True) -> subprocess.CompletedProcess:
    print("+", " ".join(cmd))
    return subprocess.run(cmd, cwd=ROOT, check=check, text=True, capture_output=not check)


def semver(internal: str) -> str:
    out = subprocess.run(
        [
            "python",
            str(ROOT / "packages/frameworks/workflow mgt/scripts/version/semver_converter.py"),
            internal,
        ],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    )
    return out.stdout.strip()


def write_version(epic: int, story: int, task: int, build: int, comment: str) -> str:
    ver = f"0.{epic}.{story}.{task}+{build}"
    content = f'''"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = {epic}      # Epic {epic}
VERSION_STORY = {story}     # Story {story}
VERSION_TASK = {task}      # Task {task}
VERSION_BUILD = {build}     # Build {build}: {comment}

VERSION_STRING = f"{{VERSION_RC}}.{{VERSION_EPIC}}.{{VERSION_STORY}}.{{VERSION_TASK}}+{{VERSION_BUILD}}"
# Current: {ver}
'''
    VERSION_PY.write_text(content, encoding="utf-8")
    return ver


def archive_current_main():
    m = re.search(
        r"## \[([^\]]+)\] - (\d{2}-\d{2}-\d{2})\n\n(.+?)\n\n\[Detailed",
        CHANGELOG.read_text(encoding="utf-8"),
        re.DOTALL,
    )
    if not m:
        return
    ver, date, body = m.group(1), m.group(2), m.group(3).strip()
    entry = f"## [{ver}] - {date}\n\n{body}\n\n[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{ver}.md)\n---\n"
    arch = ARCHIVE.read_text(encoding="utf-8")
    if f"## [{ver}]" not in arch:
        ARCHIVE.write_text(arch.replace("# Changelog Archive\n", f"# Changelog Archive\n{entry}", 1), encoding="utf-8")


def main() -> None:
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    for task_num, build, task_code, summary, task_file in RELEASES:
        ver = write_version(1, 4, task_num, build, f"kanban init {task_code} (RW -k --art)")
        sem = semver(ver)
        archive_current_main()
        detail = ROOT / f"docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{ver}.md"
        detail.write_text(
            f"# Changelog v{ver}\n\n**Release Date:** {ts}  \n"
            f"**Epic | Story | Task:** E1:S04:{task_code} (`RW -k`, `--art`)  \n"
            f"**SemVer:** v{sem}  \n\n## Summary\n\nKanban documentation setup for **{summary}**.\n",
            encoding="utf-8",
        )
        CHANGELOG.write_text(
            CHANGELOG.read_text(encoding="utf-8").split("---\n", 1)[0]
            + f"---\n\n## [{ver}] - 26-05-26\n\n"
            f"E1:S04:{task_code} (`RW -k`, `--art`) — Kanban init: {summary}. SemVer **v{sem}**.\n\n"
            f"[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{ver}.md)\n\n---\n",
            encoding="utf-8",
        )
        README.read_text(encoding="utf-8")
        readme = README.read_text(encoding="utf-8")
        README.write_text(
            re.sub(
                r"\*\*Version \(SemVer\):\*\* `[^`]+` \| \*\*Internal:\*\* `[^`]+`",
                f"**Version (SemVer):** `v{sem}` | **Internal:** `v{ver}`",
                readme,
                count=1,
            ),
            encoding="utf-8",
        )
        tp = TASK_DIR / task_file
        text = tp.read_text(encoding="utf-8")
        text = re.sub(r"\*\*Version:\*\* v[^\n]+", f"**Version:** v{ver}", text)
        text = re.sub(
            r"\*\*Last updated:\*\* [^\n]+",
            f"**Last updated:** 2026-05-26 (v{ver} – Kanban documentation setup)",
            text,
            count=1,
        )
        if "Forensic marker:" in text:
            text = re.sub(
                r"\*\*Forensic marker:\*\* `[^`]+`",
                f"**Forensic marker:** `✅ COMPLETE (v{ver})`",
                text,
                count=1,
            )
        elif "**Release marker (TODO):**" in text:
            text = re.sub(
                r"\*\*Release marker \(TODO\):\*\* `[^`]+`",
                f"**Release marker (TODO):** `v{ver}`",
                text,
                count=1,
            )
        tp.write_text(text, encoding="utf-8")

        run(["python", "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py", "--mode", "kanban_init"])
        run(
            [
                "python",
                "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py",
                "--strict",
                "--requested",
                f"E1:S04:{task_code}",
                "--art",
            ]
        )
        msg = f"Release v{ver}: kanban init {task_code} (FR-099)\n\nEpic: 1 | Story: 4 | Task: {task_num}\n\nRW -k --art. SemVer v{sem}."
        run(["git", "add", "-A"])
        run(["git", "commit", "-m", msg])
        run(["git", "tag", "-a", f"v{ver}", "-m", f"Release {sem.split('+')[0]} (Internal: {ver})"])
        run(["git", "push", "origin", "dev"])
        run(["git", "push", "origin", f"v{ver}"])
        print(f"✅ {ver} ({task_code})\n")


if __name__ == "__main__":
    main()
