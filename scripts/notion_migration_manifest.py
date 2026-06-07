#!/usr/bin/env python3
"""
FR-114 Notion migration manifest generator (E05:S08:T03).

Walks maintainer corpora, applies inclusion/exclusion rules, detects binding ADRs,
and emits docs/knowledge/fr114-notion-migration-manifest.json.
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
MANIFEST_PATH = DOCS / "knowledge" / "fr114-notion-migration-manifest.json"

# Trees to scan (relative to docs/)
MIGRATE_PREFIXES = (
    "knowledge/",
    "analysis/",
    "maintenance/",
    "journals/",
    "architecture/",
    "implementation-cycles/",
)

KNOWLEDGE_EXCLUDE = {
    "knowledge/KB-INDEX.md",
    "knowledge/KB-INDEX.json",
    "knowledge/kb-migration-map.json",
    "knowledge/fr114-notion-migration-manifest.json",
    "knowledge/README.md",
}

ADOPTER_PREFIXES = (
    "guides/",
    "documentation/",
    "project-management/",
    "governance/",
    "changelog-and-release-notes/",
)

NOTION_AREAS = {
    "analysis/": "investigations",
    "maintenance/": "records",
    "journals/": "records",
    "knowledge/": "reference",
    "implementation-cycles/": "investigations",
    "architecture/": "decisions",
}

AREA_PAGE_IDS = {
    "decisions": "378b6f89-62c1-8199-a222-da811cb938b2",
    "reference": "378b6f89-62c1-810b-bac6-cfe89a530f2a",
    "investigations": "378b6f89-62c1-8190-8aa8-e8855d05dff3",
    "records": "378b6f89-62c1-819c-91f3-e980c4329562",
}


def discover_binding_adrs() -> set[str]:
    """ADRs referenced from workflow-critical repo paths stay in git."""
    patterns = [
        r"architecture/standards-and-adrs/(ADR-\d+[^)\s\"']*)",
    ]
    roots = [
        REPO_ROOT / ".cursorrules",
        REPO_ROOT / "AGENTS.md",
        REPO_ROOT / "CLAUDE.md",
        REPO_ROOT / "packages" / "frameworks",
        REPO_ROOT / "scripts",
    ]
    found: set[str] = set()
    for root in roots:
        if root.is_file():
            text = root.read_text(encoding="utf-8", errors="replace")
            for pat in patterns:
                for m in re.finditer(pat, text):
                    adr = m.group(1).split(".md")[0] + ".md"
                    found.add(f"architecture/standards-and-adrs/{adr.split('/')[-1]}")
        elif root.is_dir():
            try:
                out = subprocess.run(
                    ["rg", "-l", r"architecture/standards-and-adrs/ADR-", str(root)],
                    capture_output=True,
                    text=True,
                    check=False,
                )
                for line in out.stdout.splitlines():
                    p = Path(line)
                    if p.suffix == ".md" or p.suffix in (".py", ".yaml"):
                        content = p.read_text(encoding="utf-8", errors="replace")
                        for pat in patterns:
                            for m in re.finditer(pat, content):
                                adr = m.group(1).split(".md")[0] + ".md"
                                found.add(
                                    f"architecture/standards-and-adrs/{adr.split('/')[-1]}"
                                )
            except FileNotFoundError:
                pass
    # Always keep numbered ADR files under standards-and-adrs that exist
    adr_dir = DOCS / "architecture" / "standards-and-adrs"
    if adr_dir.is_dir():
        for p in adr_dir.glob("ADR-*.md"):
            rel = str(p.relative_to(DOCS)).replace("\\", "/")
            if rel in found:
                continue
            # Heuristic: binding if referenced anywhere in repo
            name = p.name
            try:
                out = subprocess.run(
                    ["rg", "-l", re.escape(name), str(REPO_ROOT)],
                    capture_output=True,
                    text=True,
                    check=False,
                    timeout=30,
                )
                hits = [
                    ln
                    for ln in out.stdout.splitlines()
                    if "changelog-archive" not in ln
                    and "fr114-notion-migration" not in ln
                ]
                if len(hits) >= 2:
                    found.add(rel)
            except (FileNotFoundError, subprocess.TimeoutExpired):
                found.add(rel)
    return found


def should_migrate(rel: str, binding_adrs: set[str]) -> tuple[bool, str]:
    rel = rel.replace("\\", "/")
    for prefix in ADOPTER_PREFIXES:
        if rel.startswith(prefix):
            return False, f"adopter_or_git_sot:{prefix}"
    if rel in KNOWLEDGE_EXCLUDE:
        return False, "knowledge_excluded_artifact"
    base = Path(rel).name
    if base.startswith("IPP-") or base.startswith("ICW-"):
        return False, "ipp_icw_retained"
    if rel in binding_adrs:
        return False, "binding_adr"
    for prefix in MIGRATE_PREFIXES:
        if rel.startswith(prefix):
            return True, f"migrate:{prefix}"
    return False, "outside_migration_corpus"


def area_for(rel: str) -> str:
    for prefix, area in NOTION_AREAS.items():
        if rel.startswith(prefix):
            return area
    return "reference"


def collect_candidates(binding_adrs: set[str]) -> list[dict[str, Any]]:
    entries: list[dict[str, Any]] = []
    for prefix in MIGRATE_PREFIXES:
        root = DOCS / prefix.rstrip("/")
        if not root.is_dir():
            continue
        for path in sorted(root.rglob("*.md")):
            rel = str(path.relative_to(DOCS)).replace("\\", "/")
            ok, reason = should_migrate(rel, binding_adrs)
            if not ok:
                continue
            entries.append(
                {
                    "source_path": rel,
                    "stub_path": rel,
                    "notion_area": area_for(rel),
                    "notion_parent_page_id": AREA_PAGE_IDS[area_for(rel)],
                    "notion_url": None,
                    "notion_page_id": None,
                    "stub_applied": False,
                    "migrated_at": None,
                    "exclusion_reason": None,
                }
            )
    return entries


def load_existing() -> dict[str, Any]:
    if MANIFEST_PATH.exists():
        return json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    return {}


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate FR-114 migration manifest")
    parser.add_argument("--write", action="store_true", help="Write manifest JSON")
    parser.add_argument("--summary", action="store_true", help="Print summary only")
    args = parser.parse_args()

    binding = discover_binding_adrs()
    entries = collect_candidates(binding)
    existing = load_existing()
    by_path = {e["source_path"]: e for e in existing.get("entries", [])}

    for e in entries:
        if e["source_path"] in by_path:
            prev = by_path[e["source_path"]]
            for key in ("notion_url", "notion_page_id", "stub_applied", "migrated_at"):
                if prev.get(key):
                    e[key] = prev[key]

    manifest = {
        "schema": "fr114-notion-migration-v1",
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "notion_hub_url": "https://www.notion.so/378b6f8962c181dda420fb0236d9e060",
        "notion_kb_url": "https://www.notion.so/378b6f8962c18189aacbe8629677403d",
        "binding_adrs_retained": sorted(binding),
        "binding_adr_count": len(binding),
        "entry_count": len(entries),
        "entries": entries,
    }

    if args.summary or not args.write:
        print(json.dumps({
            "entry_count": len(entries),
            "binding_adrs": len(binding),
            "by_area": {
                a: sum(1 for e in entries if e["notion_area"] == a)
                for a in AREA_PAGE_IDS
            },
        }, indent=2))
    if args.write:
        MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
        MANIFEST_PATH.write_text(
            json.dumps(manifest, indent=2) + "\n", encoding="utf-8"
        )
        print(f"Wrote {MANIFEST_PATH} ({len(entries)} entries)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
