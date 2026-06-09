#!/usr/bin/env python3
"""
FR-121 reverse Notion migration (E05:S08:T05).

Restore full markdown at manifest source_path values from a pre-stub git commit,
emit fr121-reverse-migration-manifest.json, and reconcile fr114 manifest metadata.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS = REPO_ROOT / "docs"
FR114_MANIFEST = DOCS / "knowledge" / "fr114-notion-migration-manifest.json"
FR121_MANIFEST = DOCS / "knowledge" / "fr121-reverse-migration-manifest.json"
DEFAULT_SOURCE_COMMIT = "6b563cdf^"

LINK_PATTERNS = (
    (re.compile(r"docs/project-management/kanban/"), "docs/kanban/"),
    (re.compile(r"\.\./\.\./project-management/kanban/"), "../../kanban/"),
)

STUB_MARKERS = ("notion_sot: true", "Full content lives in Notion.")


def git_show(commit: str, rel_path: str) -> tuple[str | None, str | None]:
    """Return (content, error) from git show commit:docs/rel_path."""
    spec = f"{commit}:docs/{rel_path}"
    result = subprocess.run(
        ["git", "show", spec],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        return None, (result.stderr or result.stdout or "git show failed").strip()
    return result.stdout, None


def is_stub_content(text: str) -> bool:
    return all(marker in text for marker in STUB_MARKERS)


def apply_link_hygiene(text: str) -> tuple[str, list[str]]:
    notes: list[str] = []
    updated = text
    for pattern, replacement in LINK_PATTERNS:
        if pattern.search(updated):
            updated = pattern.sub(replacement, updated)
            notes.append(f"replaced {pattern.pattern} -> {replacement}")
    return updated, notes


def restore_entry(
    entry: dict[str, Any],
    *,
    source_commit: str,
    dry_run: bool,
) -> dict[str, Any]:
    rel = entry["source_path"]
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    record: dict[str, Any] = {
        "source_path": rel,
        "restore_source": "git",
        "source_commit": source_commit,
        "export_timestamp": now,
        "restore_status": "pending",
        "link_repair_notes": [],
        "exclusion_reason": None,
    }

    content, err = git_show(source_commit, rel)
    if content is None:
        record["restore_status"] = "excluded"
        record["exclusion_reason"] = f"git missing at {source_commit}: {err}"
        return record

    if is_stub_content(content):
        record["restore_status"] = "excluded"
        record["exclusion_reason"] = f"git content at {source_commit} is still a stub"
        return record

    content, link_notes = apply_link_hygiene(content)
    record["link_repair_notes"] = link_notes

    dest = DOCS / rel
    if dry_run:
        record["restore_status"] = "would_restore"
        return record

    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(content, encoding="utf-8")
    record["restore_status"] = "restored"
    return record


def main() -> int:
    parser = argparse.ArgumentParser(description="FR-121 reverse Notion migration restore")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--source-commit", default=DEFAULT_SOURCE_COMMIT)
    parser.add_argument("--fr114-manifest", type=Path, default=FR114_MANIFEST)
    parser.add_argument("--fr121-manifest", type=Path, default=FR121_MANIFEST)
    args = parser.parse_args()

    fr114 = json.loads(args.fr114_manifest.read_text(encoding="utf-8"))
    entries = fr114.get("entries", [])
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    reverse_entries: list[dict[str, Any]] = []
    restored = 0
    excluded = 0

    for entry in entries:
        if not entry.get("stub_applied"):
            continue
        record = restore_entry(
            entry,
            source_commit=args.source_commit,
            dry_run=args.dry_run,
        )
        reverse_entries.append(record)
        if record["restore_status"] == "restored":
            restored += 1
            if not args.dry_run:
                entry["stub_applied"] = False
                entry["restored_at"] = now
        elif record["restore_status"] == "would_restore":
            restored += 1
        elif record["restore_status"] == "excluded":
            excluded += 1

    reverse_manifest = {
        "schema": "fr121-reverse-migration-v1",
        "generated_at": now,
        "source_commit": args.source_commit,
        "fr114_manifest": str(args.fr114_manifest.relative_to(REPO_ROOT)),
        "entry_count": len(reverse_entries),
        "restored_count": restored,
        "excluded_count": excluded,
        "entries": reverse_entries,
    }

    if args.dry_run:
        print(f"dry-run: would process {len(reverse_entries)} entries")
        print(f"  restored/would_restore: {restored}")
        print(f"  excluded: {excluded}")
        return 0

    args.fr121_manifest.write_text(
        json.dumps(reverse_manifest, indent=2) + "\n",
        encoding="utf-8",
    )

    fr114["reverse_migration_complete"] = True
    fr114["reverse_migrated_at"] = now
    fr114["updated_at"] = now
    args.fr114_manifest.write_text(json.dumps(fr114, indent=2) + "\n", encoding="utf-8")

    print(f"restored: {restored}, excluded: {excluded}")
    print(f"wrote {args.fr121_manifest.relative_to(REPO_ROOT)}")
    return 0 if excluded == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
