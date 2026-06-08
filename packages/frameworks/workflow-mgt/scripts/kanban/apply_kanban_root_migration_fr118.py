#!/usr/bin/env python3
"""Apply FR-118 active-surface path migrations (promote Kanban to docs/kanban/).

Rewrites text references on active surfaces only. Does not run ``git mv``;
the operator or parent agent moves the tree separately.

Precedent: apply_e6s07_path_migration_3b.py
Task: E07:S01:T12 / FR-118
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, Iterator, Tuple

OLD_DOCS_KANBAN = "docs/project-management/kanban"
NEW_DOCS_KANBAN = "docs/kanban"

NEW_GOVERNANCE_POLICY = "docs/governance/kanban/kanban-governance-policy.md"

CHANGELOG_ARCHIVE_MARKER = "docs/changelog-and-release-notes/changelog-archive"

ACTIVE_ROOT_DIRS = ("docs", "packages", "scripts", ".github", "portal")

ACTIVE_ROOT_FILES = (
    "AGENTS.md",
    "CLAUDE.md",
    ".cursorrules",
    "rw-config.yaml",
    "INSTALL_IN_YOUR_PROJECT.md",
    ".pre-commit-config.yaml",
)

GOVERNANCE_POLICY_ROOTS = (
    "packages/frameworks/workflow-mgt/KB",
    "packages/frameworks/kanban",
)

TEXT_SUFFIXES = {
    ".bash",
    ".cfg",
    ".css",
    ".html",
    ".ini",
    ".js",
    ".json",
    ".jsx",
    ".md",
    ".mdc",
    ".py",
    ".rst",
    ".scss",
    ".sh",
    ".toml",
    ".ts",
    ".tsx",
    ".txt",
    ".xml",
    ".yaml",
    ".yml",
    ".zsh",
}

# Longest-first literal rituals-policy variants (governance KB scope only).
RITUALS_POLICY_LITERALS: Tuple[str, ...] = (
    "../../../../docs/project-management/rituals/policy/kanban-governance-policy.md",
    "../../../docs/project-management/rituals/policy/kanban-governance-policy.md",
    "../../docs/project-management/rituals/policy/kanban-governance-policy.md",
    "../docs/project-management/rituals/policy/kanban-governance-policy.md",
    "docs/project-management/rituals/policy/kanban-governance-policy.md",
    "../../../../project-management/rituals/policy/kanban-governance-policy.md",
    "../../../project-management/rituals/policy/kanban-governance-policy.md",
    "../../project-management/rituals/policy/kanban-governance-policy.md",
    "../project-management/rituals/policy/kanban-governance-policy.md",
    "project-management/rituals/policy/kanban-governance-policy.md",
    "rituals/policy/kanban-governance-policy.md",
)

RELATIVE_PM_KANBAN_RE = re.compile(r"((?:\.\./)+)project-management/kanban")


def _rel_posix(path: Path, project_root: Path) -> str:
    return path.resolve().relative_to(project_root.resolve()).as_posix()


def _in_governance_policy_scope(rel_posix: str) -> bool:
    return any(
        rel_posix == root or rel_posix.startswith(f"{root}/")
        for root in GOVERNANCE_POLICY_ROOTS
    )


def should_skip(path: Path, project_root: Path, script_path: Path) -> bool:
    rel = _rel_posix(path, project_root)
    if rel == _rel_posix(script_path, project_root):
        return True
    if CHANGELOG_ARCHIVE_MARKER in rel:
        return True
    return False


def is_probably_binary(path: Path) -> bool:
    if path.suffix and path.suffix.lower() not in TEXT_SUFFIXES:
        if path.name not in ACTIVE_ROOT_FILES:
            return True
    try:
        chunk = path.read_bytes()[:8192]
    except OSError:
        return True
    return b"\0" in chunk


def is_text_candidate(path: Path) -> bool:
    if path.name in ACTIVE_ROOT_FILES:
        return True
    suffix = path.suffix.lower()
    return bool(suffix and suffix in TEXT_SUFFIXES)


def iter_active_files(project_root: Path, script_path: Path) -> Iterator[Path]:
    seen: set[Path] = set()

    def emit(path: Path) -> Iterator[Path]:
        resolved = path.resolve()
        if resolved in seen or not path.is_file():
            return
        if should_skip(path, project_root, script_path):
            return
        if not is_text_candidate(path):
            return
        if is_probably_binary(path):
            return
        seen.add(resolved)
        yield path

    for rel_dir in ACTIVE_ROOT_DIRS:
        base = project_root / rel_dir
        if not base.is_dir():
            continue
        for candidate in base.rglob("*"):
            yield from emit(candidate)

    for rel_file in ACTIVE_ROOT_FILES:
        yield from emit(project_root / rel_file)


def apply_governance_policy_replacements(text: str) -> Tuple[str, int]:
    changed = 0
    for old in RITUALS_POLICY_LITERALS:
        if old not in text:
            continue
        count = text.count(old)
        text = text.replace(old, NEW_GOVERNANCE_POLICY)
        changed += count
    return text, changed


def apply_docs_kanban_replacement(text: str) -> Tuple[str, int]:
    count = text.count(OLD_DOCS_KANBAN)
    if count:
        text = text.replace(OLD_DOCS_KANBAN, NEW_DOCS_KANBAN)
    return text, count


def apply_relative_kanban_replacements(text: str, rel_posix: str) -> Tuple[str, int]:
    changed = 0

    def _relative_repl(match: re.Match[str]) -> str:
        nonlocal changed
        changed += 1
        return f"{match.group(1)}kanban"

    text = RELATIVE_PM_KANBAN_RE.sub(_relative_repl, text)

    under_docs = rel_posix.startswith("docs/") and CHANGELOG_ARCHIVE_MARKER not in rel_posix
    if under_docs and "project-management/kanban" in text:
        count = text.count("project-management/kanban")
        text = text.replace("project-management/kanban", "kanban")
        changed += count

    return text, changed


def migrate_text(text: str, rel_posix: str) -> Tuple[str, Dict[str, int]]:
    stats: Dict[str, int] = {
        "governance_policy": 0,
        "docs_kanban": 0,
        "relative_kanban": 0,
    }

    if _in_governance_policy_scope(rel_posix):
        text, n = apply_governance_policy_replacements(text)
        stats["governance_policy"] += n

    text, n = apply_docs_kanban_replacement(text)
    stats["docs_kanban"] += n

    text, n = apply_relative_kanban_replacements(text, rel_posix)
    stats["relative_kanban"] += n

    return text, stats


def migrate_file(path: Path, project_root: Path, dry_run: bool) -> Dict[str, int]:
    rel_posix = _rel_posix(path, project_root)
    try:
        original = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return {}

    updated, stats = migrate_text(original, rel_posix)
    if updated == original:
        return {}

    if not dry_run:
        path.write_text(updated, encoding="utf-8")

    return stats


def count_legacy_hits(project_root: Path, script_path: Path) -> Tuple[int, int]:
    """Count remaining legacy substrings across active surfaces (audit helper)."""
    needles = (OLD_DOCS_KANBAN, "project-management/kanban")
    total = 0
    files = 0
    for path in iter_active_files(project_root, script_path):
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        file_hits = sum(text.count(needle) for needle in needles)
        if file_hits:
            total += file_hits
            files += 1
    return total, files


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "FR-118: rewrite docs/project-management/kanban paths to docs/kanban "
            "on active surfaces (no git mv)."
        ),
    )
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument(
        "--dry-run",
        action="store_true",
        help="Report planned edits without writing files",
    )
    mode.add_argument(
        "--apply",
        action="store_true",
        help="Write migrated content to files",
    )
    args = parser.parse_args()

    project_root = args.project_root.resolve()
    script_path = Path(__file__).resolve()
    dry_run = args.dry_run

    before_total, before_files = count_legacy_hits(project_root, script_path)

    files_touched = 0
    aggregate: Dict[str, int] = {
        "governance_policy": 0,
        "docs_kanban": 0,
        "relative_kanban": 0,
    }

    for path in iter_active_files(project_root, script_path):
        stats = migrate_file(path, project_root, dry_run=dry_run)
        if not stats:
            continue
        files_touched += 1
        for key, value in stats.items():
            aggregate[key] += value

    after_total, after_files = count_legacy_hits(project_root, script_path)

    mode_label = "DRY-RUN" if dry_run else "APPLIED"
    replacement_total = sum(aggregate.values())
    print(f"{mode_label}: {files_touched} files, {replacement_total} substring replacements")
    print(
        "  governance_policy="
        f"{aggregate['governance_policy']} docs_kanban={aggregate['docs_kanban']} "
        f"relative_kanban={aggregate['relative_kanban']}"
    )
    print(
        "legacy hits (docs/project-management/kanban + project-management/kanban): "
        f"before={before_total}/{before_files} after={after_total}/{after_files}"
    )

    if dry_run and files_touched:
        print("Re-run with --apply to write changes.", file=sys.stderr)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
