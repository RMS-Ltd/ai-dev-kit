#!/usr/bin/env python3
"""
Merge CHANGELOG.md from two branches (main and epic/6) into a single ordered changelog.
Preserves all version entries, sorted by RC.EPIC.STORY.TASK+BUILD (newest first).
"""
import re
import sys
from pathlib import Path
from typing import Optional, Tuple


def parse_version(version_str: str) -> Optional[Tuple[int, int, int, int, int]]:
    """Parse version string. Returns (RC, EPIC, STORY, TASK, BUILD) or None."""
    # New format: [0.6.6.56+1] or [0.7.1.6+2]
    m = re.match(r'\[(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)\]', version_str)
    if m:
        return tuple(int(x) for x in m.groups())
    # Unreleased, CMW, or other - return None (sort last or by date)
    return None


def compare_versions(v1: tuple, v2: tuple) -> int:
    """Return -1 if v1>v2 (v1 newer), 1 if v1<v2, 0 if equal. Newest first = descending."""
    if v1 is None and v2 is None:
        return 0
    if v1 is None:
        return 1   # v2 comes first
    if v2 is None:
        return -1  # v1 comes first
    for a, b in zip(v1, v2):
        if a > b:
            return -1  # v1 newer
        if a < b:
            return 1   # v2 newer
    return 0


def extract_entries(content: str) -> list:
    """Extract (version_str, parsed_version, block_content) from changelog."""
    entries = []
    # Match ## [X.Y.Z.W+V] - DD-MM-YY or ## [Unreleased] etc.
    pattern = re.compile(r'^## (\[[^\]]+\](?: - [^\n]+)?)\s*$', re.MULTILINE)
    matches = list(pattern.finditer(content))
    
    for i, m in enumerate(matches):
        header = m.group(1)
        # Extract version string (between brackets)
        vmatch = re.search(r'\[([^\]]+)\]', header)
        version_str = vmatch.group(1) if vmatch else header
        parsed = parse_version(version_str)
        
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(content)
        block = content[start:end].strip()
        entries.append((version_str, parsed, f"## {header}\n\n{block}" if block else f"## {header}\n"))
    
    return entries


def merge_entries(main_entries: list, epic6_entries: list) -> list:
    """Merge and deduplicate, return [(version_key, block)] sorted newest first."""
    seen = {}  # version_key -> block (keep first/ best)
    
    for version_str, parsed, block in main_entries:
        key = version_str
        if key not in seen:
            seen[key] = (parsed, block)
    
    for version_str, parsed, block in epic6_entries:
        key = version_str
        if key not in seen:
            seen[key] = (parsed, block)
    
    # Sort by version descending
    items = [(k, v) for k, v in seen.items()]
    items.sort(key=lambda x: (x[1][0] or (0, 0, 0, 0, 0)), reverse=False)  # None sorts as (0,0,0,0,0)
    # Actually we need custom sort: None/lower versions go to end
    def sort_key(item):
        p = item[1][0]
        if p is None:
            return (0, 0, 0, 0, -1)  # Unreleased etc at end
        return (-p[0], -p[1], -p[2], -p[3], -p[4])  # negate for desc
    
    items.sort(key=sort_key)
    
    return [(k, v[1]) for k, v in items]


def main():
    repo = Path(__file__).resolve().parent.parent
    
    main_changelog = repo / "main_CHANGELOG.txt"
    epic6_changelog = repo / "epic6_CHANGELOG.txt"
    
    if not main_changelog.exists() or not epic6_changelog.exists():
        print("Run: git show main:CHANGELOG.md > main_CHANGELOG.txt")
        print("     git show epic/6-framework-management:CHANGELOG.md > epic6_CHANGELOG.txt")
        sys.exit(1)
    
    main_content = main_changelog.read_text(encoding="utf-8")
    epic6_content = epic6_changelog.read_text(encoding="utf-8")
    
    # Skip header (lines until first ##)
    def skip_header(s: str) -> str:
        idx = s.find("\n## ")
        return s[idx+1:] if idx >= 0 else s
    
    main_entries = extract_entries(skip_header(main_content))
    epic6_entries = extract_entries(skip_header(epic6_content))
    
    merged = merge_entries(main_entries, epic6_entries)
    
    # Build output - use epic/6 header format (RC.EPIC.STORY.TASK+BUILD)
    header = """# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog** ([`https://github.com/olivierlacan/keep-a-changelog`](https://github.com/olivierlacan/keep-a-changelog))  
and this project adheres to the **`RC.EPIC.STORY.TASK+BUILD`** versioning scheme described in the dev-kit versioning policy.

---

"""
    
    out = header + "\n\n---\n\n".join(block for _, block in merged)
    
    out_path = repo / "CHANGELOG_merged.md"
    out_path.write_text(out, encoding="utf-8")
    print(f"Wrote {out_path} with {len(merged)} entries")


if __name__ == "__main__":
    main()
