#!/usr/bin/env python3
"""Update markdown links after kanban naming cleanup.

Scans docs/project-management/kanban/**/*.md and updates:
1. Markdown link URLs pointing to renamed T0xx files -> Txx
2. Markdown link URLs pointing to deleted duplicate stories/tasks
3. Inline code / bare filename references to renamed files

Uses only Python stdlib. Run from project root.
"""

import json
import re
from pathlib import Path

KANBAN_ROOT = Path("docs/project-management/kanban")
INVENTORY_PATH = Path("kanban_naming_inventory.json")

# Regex for markdown links: [text](url) or [text](url "title")
LINK_RE = re.compile(r"\[([^\]]*)\]\(([^)\"\s]*)(?:\\s+\"[^\"]*\")?\)")


def load_inventory() -> dict:
    with open(INVENTORY_PATH) as f:
        return json.load(f)


def build_rename_map(inventory: dict) -> dict:
    """Map old basename -> new basename for renamed T0xx files."""
    rename_map = {}
    for issue in inventory["issues"]:
        if issue["type"] != "deprecated_t0xx":
            continue
        if issue["action"] != "git_mv":
            continue
        old_base = Path(issue["path"]).name
        new_base = Path(issue["suggested_new_path"]).name
        rename_map[old_base] = new_base
    return rename_map


def build_deleted_basenames(inventory: dict) -> set:
    """Set of basenames that were deleted."""
    deleted = set()
    for issue in inventory["issues"]:
        if issue["type"] == "duplicate_task":
            for dup in issue.get("duplicate_files", []):
                deleted.add(Path(dup).name)
        elif issue["type"] == "duplicate_story":
            for dup in issue.get("duplicate_files", []):
                deleted.add(Path(dup).name)
    # Also include T0xx files marked for delete
    for issue in inventory["issues"]:
        if issue["type"] == "deprecated_t0xx" and issue["action"] == "delete":
            deleted.add(Path(issue["path"]).name)
    return deleted


def build_redirect_map(inventory: dict) -> dict:
    """Map deleted duplicate basename -> canonical basename for redirects."""
    redirects = {}
    for issue in inventory["issues"]:
        if issue["type"] != "duplicate_task":
            continue
        canon_base = Path(issue["canonical_file"]).name
        for dup in issue.get("duplicate_files", []):
            dup_base = Path(dup).name
            redirects[dup_base] = canon_base
    # Also redirect deleted T0xx to their canonical Txx (if canonical exists)
    for issue in inventory["issues"]:
        if issue["type"] == "deprecated_t0xx" and issue["action"] == "delete":
            old_base = Path(issue["path"]).name
            new_base = Path(issue["suggested_new_path"]).name
            redirects[old_base] = new_base
    return redirects


def update_file(path: Path, rename_map: dict, redirect_map: dict) -> tuple:
    """Update a single markdown file. Returns (was_modified, report_lines)."""
    content = path.read_text()
    original = content
    report = []

    # Helper to replace basenames in a path string
    def replace_in_path(match_or_str):
        if hasattr(match_or_str, 'group'):
            s = match_or_str.group(0)
        else:
            s = match_or_str
        changed = False
        for old_base, new_base in rename_map.items():
            # Match old basename as whole word / path component
            # Allow / before basename, but not another word char
            pattern = r'(?<![\w])' + re.escape(old_base) + r'(?![\w])'
            if re.search(pattern, s):
                s = re.sub(pattern, new_base, s)
                changed = True
                if old_base not in [r[0] for r in report]:
                    report.append((old_base, new_base, "renamed"))
        for old_base, new_base in redirect_map.items():
            pattern = r'(?<![\w])' + re.escape(old_base) + r'(?![\w])'
            if re.search(pattern, s):
                s = re.sub(pattern, new_base, s)
                changed = True
                if old_base not in [r[0] for r in report]:
                    report.append((old_base, new_base, "redirected"))
        return s if changed else None

    # Update markdown link URLs
    def link_repl(m):
        text = m.group(1)
        url = m.group(2)
        new_url = replace_in_path(url)
        new_text = replace_in_path(text)
        if new_url is not None:
            url = new_url
        if new_text is not None:
            text = new_text
        if new_url is not None or new_text is not None:
            return f"[{text}]({url})"
        return m.group(0)

    content = LINK_RE.sub(link_repl, content)

    # Update inline code spans that look like filenames
    all_basenames = set(rename_map.keys()) | set(redirect_map.keys())
    for basename in sorted(all_basenames, key=len, reverse=True):
        new_base = rename_map.get(basename) or redirect_map.get(basename)
        if new_base:
            pattern = r'`' + re.escape(basename) + r'`'
            replacement = f'`{new_base}`'
            content, count = re.subn(pattern, replacement, content)
            if count > 0 and (basename, new_base, "inline_code") not in report:
                report.append((basename, new_base, "inline_code"))

    # Update plain text filename references
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        for old_base, new_base in rename_map.items():
            pattern = r'(?<![\w])' + re.escape(old_base) + r'(?![\w])'
            line = re.sub(pattern, new_base, line)
        for old_base, new_base in redirect_map.items():
            pattern = r'(?<![\w])' + re.escape(old_base) + r'(?![\w])'
            line = re.sub(pattern, new_base, line)
        new_lines.append(line)
    content = '\n'.join(new_lines)

    modified = content != original
    if modified:
        path.write_text(content)
    return modified, report


def main():
    if not INVENTORY_PATH.exists():
        print(f"Inventory not found: {INVENTORY_PATH}")
        print("Run generate_kanban_naming_inventory.py first.")
        return

    inventory = load_inventory()
    rename_map = build_rename_map(inventory)
    redirect_map = build_redirect_map(inventory)

    print(f"Rename mappings: {len(rename_map)}")
    print(f"Redirect mappings: {len(redirect_map)}")

    modified_count = 0
    total_reports = []

    for md_file in KANBAN_ROOT.rglob("*.md"):
        modified, report = update_file(md_file, rename_map, redirect_map)
        if modified:
            modified_count += 1
            if report:
                total_reports.append((str(md_file), report))

    print(f"\nModified {modified_count} markdown files")

    # Summary of renames applied
    rename_counts = {}
    redirect_counts = {}
    for path, reports in total_reports:
        for old, new, kind in reports:
            if kind == "renamed":
                rename_counts[old] = rename_counts.get(old, 0) + 1
            elif kind == "redirected":
                redirect_counts[old] = redirect_counts.get(old, 0) + 1

    if rename_counts:
        print("\n--- Rename substitutions applied ---")
        for old, count in sorted(rename_counts.items()):
            print(f"  {old} -> {rename_map[old]} ({count} occurrences)")

    if redirect_counts:
        print("\n--- Redirect substitutions applied ---")
        for old, count in sorted(redirect_counts.items()):
            print(f"  {old} -> {redirect_map[old]} ({count} occurrences)")


if __name__ == "__main__":
    main()
