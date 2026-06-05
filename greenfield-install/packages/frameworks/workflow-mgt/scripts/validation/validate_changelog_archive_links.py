#!/usr/bin/env python3
"""
CHANGELOG Archive Link Integrity Validator

Parses CHANGELOG_ARCHIVE.md for relative markdown links and verifies each
link resolves to an existing file. Reports dangling links with line numbers.

Usage:
    python validate_changelog_archive_links.py
    python validate_changelog_archive_links.py --strict

Exit codes:
    0 — All links resolve successfully.
    1 — One or more dangling links found.

Intended invocation:
    Non-blocking from RW Step 9 (warn if links broken).
    Blocking if --strict is passed.
"""

import argparse
import re
import sys
from pathlib import Path


def find_changelog_archive(project_root: Path = None) -> Path:
    """Locate CHANGELOG_ARCHIVE.md from rw-config or default path."""
    if project_root is None:
        project_root = Path.cwd()

    config_path = project_root / "rw-config.yaml"
    if config_path.exists():
        try:
            import yaml
            with open(config_path, 'r', encoding='utf-8') as f:
                config = yaml.safe_load(f)
            archive = config.get('changelog_archive', {}).get('archive_file')
            if archive:
                return project_root / archive
        except Exception:
            pass

    # Default fallback
    return (
        project_root
        / "docs"
        / "changelog-and-release-notes"
        / "changelog-archive"
        / "CHANGELOG_ARCHIVE.md"
    )


def validate_links(archive_path: Path, project_root: Path) -> list:
    """
    Parse CHANGELOG_ARCHIVE.md and validate all relative markdown links.

    Returns a list of tuples: (line_number, link_text, link_path, reason)
    for each dangling link found.
    """
    dangling = []
    if not archive_path.exists():
        return [(0, "CHANGELOG_ARCHIVE.md", str(archive_path), "File not found")]

    # Regex for markdown links: [text](path)
    link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')

    # Track line numbers
    with open(archive_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for line_no, line in enumerate(lines, start=1):
        for match in link_pattern.finditer(line):
            link_text = match.group(1)
            link_path = match.group(2)

            # Skip absolute URLs and anchors-only paths
            if link_path.startswith(('http://', 'https://', '#', 'mailto:')):
                continue

            # Resolve relative to the archive file's directory first,
            # then fall back to project root (repo-root-relative links).
            resolved = (archive_path.parent / link_path).resolve()
            if not resolved.exists():
                resolved = (project_root / link_path).resolve()

            if not resolved.exists():
                try:
                    display_path = resolved.relative_to(project_root)
                except ValueError:
                    display_path = resolved
                dangling.append((
                    line_no,
                    link_text,
                    link_path,
                    f"File not found: {display_path}"
                ))

    return dangling


def main():
    parser = argparse.ArgumentParser(
        description="Validate CHANGELOG_ARCHIVE.md link integrity."
    )
    parser.add_argument(
        '--strict',
        action='store_true',
        help='Exit with error code 1 if dangling links are found.'
    )
    parser.add_argument(
        '--archive',
        type=Path,
        default=None,
        help='Path to CHANGELOG_ARCHIVE.md (auto-detected if omitted).'
    )
    args = parser.parse_args()

    project_root = Path.cwd()
    archive_path = args.archive or find_changelog_archive(project_root)
    dangling = validate_links(archive_path, project_root)

    if not dangling:
        print(f"✅ All links in {archive_path.name} resolve successfully.")
        sys.exit(0)

    print(f"❌ {len(dangling)} dangling link(s) found in {archive_path.name}:")
    for line_no, link_text, link_path, reason in dangling:
        print(f"  Line {line_no}: [{link_text}]({link_path}) — {reason}")

    if args.strict:
        sys.exit(1)
    else:
        print("\n⚠️  Warning: dangling links detected (non-blocking).")
        sys.exit(0)


if __name__ == '__main__':
    main()
