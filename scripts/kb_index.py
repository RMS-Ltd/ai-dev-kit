#!/usr/bin/env python3
"""
KB Index Generator

Walks docs/ (project Knowledge Base), collects paths, sizes, word counts,
and frontmatter (lifecycle, created_at, ttl_days, etc.), and emits:
- docs/knowledge/KB-INDEX.md (human-readable)
- docs/knowledge/KB-INDEX.json (machine-readable, optional)

Use to inventory the project KB before optimizing or migrating to Notion.

Part of: Index project KB for Notion migration
"""

import argparse
import json
import re
import sys
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None

# Default paths (repo root relative to script)
SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent
DEFAULT_DOCS_DIR = REPO_ROOT / "docs"
DEFAULT_OUTPUT_DIR = REPO_ROOT / "docs" / "knowledge"
CHANGELOG_ARCHIVE_SUBPATH = "changelog-and-release-notes/changelog-archive"

# Frontmatter fields we care about
FRONTMATTER_FIELDS = (
    "lifecycle",
    "created_at",
    "ttl_days",
    "expires_at",
    "housekeeping_policy",
)


def parse_frontmatter(content: str) -> Tuple[Optional[Dict[str, Any]], str]:
    """Extract YAML frontmatter from markdown content. Returns (frontmatter_dict, body)."""
    if not content.strip().startswith("---"):
        return None, content
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n?(.*)$", content, re.DOTALL)
    if not match:
        return None, content
    yaml_block, body = match.group(1).strip(), match.group(2)
    if not yaml:
        return None, content
    try:
        fm = yaml.safe_load(yaml_block)
        return (fm if isinstance(fm, dict) else None), body
    except Exception:
        return None, content


def word_count(text: str) -> int:
    """Approximate word count (split on whitespace)."""
    return len(text.split())


def collect_file(
    path: Path, docs_root: Path, expand_archive: bool
) -> Optional[Dict[str, Any]]:
    """Read one .md file and return inventory entry (path, size, words, frontmatter)."""
    rel = path.relative_to(docs_root)
    rel_str = str(rel).replace("\\", "/")
    size = path.stat().st_size
    try:
        raw = path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return {
            "path": rel_str,
            "size": size,
            "words": 0,
            "lifecycle": None,
            "created_at": None,
            "ttl_days": None,
            "expires_at": None,
            "housekeeping_policy": None,
            "error": "read_error",
        }
    fm, body = parse_frontmatter(raw)
    words = word_count(body)
    entry = {
        "path": rel_str,
        "size": size,
        "words": words,
        "lifecycle": None,
        "created_at": None,
        "ttl_days": None,
        "expires_at": None,
        "housekeeping_policy": None,
    }
    if fm:
        for key in FRONTMATTER_FIELDS:
            if key in fm and fm[key] is not None:
                entry[key] = fm[key]
    return entry


def is_in_changelog_archive(rel_path: str) -> bool:
    return rel_path.startswith(CHANGELOG_ARCHIVE_SUBPATH + "/") or rel_path == CHANGELOG_ARCHIVE_SUBPATH


def build_tree_and_sections(
    docs_root: Path,
    expand_archive: bool,
) -> Tuple[List[Dict], Dict[str, Dict], List[str], List[str], List[Dict], bool]:
    """
    Walk docs_root, collect all .md files, build inventory and section stats.
    Returns:
        inventory (list of entries; archive summarized as one row if not expand_archive),
        sections (name -> {file_count, size_bytes, with_frontmatter, without, lifecycle_counts}),
        missing_frontmatter_paths,
        expired_paths,
        readme_paths,
        has_docs_readme
    """
    inventory: List[Dict] = []
    sections: Dict[str, Dict] = defaultdict(
        lambda: {
            "file_count": 0,
            "size_bytes": 0,
            "with_frontmatter": 0,
            "without_frontmatter": 0,
            "lifecycle_counts": defaultdict(int),
            "expired_count": 0,
        }
    )
    missing_frontmatter_paths: List[str] = []
    expired_paths: List[str] = []
    readme_paths: List[Dict] = []  # [{path, ...}]
    has_docs_readme = (docs_root / "README.md").is_file()

    archive_entries: List[Dict] = []
    archive_size = 0
    archive_count = 0

    for path in sorted(docs_root.rglob("*.md")):
        if not path.is_file():
            continue
        rel = path.relative_to(docs_root)
        rel_str = str(rel).replace("\\", "/")
        entry = collect_file(path, docs_root, expand_archive)
        if not entry:
            continue

        # Section = top-level directory under docs
        parts = rel_str.split("/")
        section = parts[0] if len(parts) >= 1 else "."
        sec = sections[section]
        sec["file_count"] += 1
        sec["size_bytes"] += entry["size"]
        if entry.get("lifecycle") is not None or entry.get("created_at") is not None:
            sec["with_frontmatter"] += 1
        else:
            sec["without_frontmatter"] += 1
            missing_frontmatter_paths.append(rel_str)
        if entry.get("lifecycle"):
            sec["lifecycle_counts"][str(entry["lifecycle"])] += 1

        # Expired (timeboxed/transient with expires_at in the past)
        expires_at = entry.get("expires_at")
        if expires_at:
            try:
                if isinstance(expires_at, str):
                    # Assume ISO format; parse loosely
                    dt = datetime.fromisoformat(expires_at.replace("Z", "+00:00"))
                else:
                    dt = expires_at
                if dt.tzinfo is None:
                    dt = dt.replace(tzinfo=timezone.utc)
                if dt < datetime.now(timezone.utc):
                    expired_paths.append(rel_str)
                    sec["expired_count"] += 1
            except Exception:
                pass

        if rel_str.lower().endswith("readme.md"):
            readme_paths.append({"path": rel_str})

        if is_in_changelog_archive(rel_str):
            archive_count += 1
            archive_size += entry["size"]
            if expand_archive:
                inventory.append(entry)
            else:
                archive_entries.append(entry)
        else:
            inventory.append(entry)

    if not expand_archive and archive_entries:
        inventory.append(
            {
                "path": CHANGELOG_ARCHIVE_SUBPATH + "/ (summary)",
                "size": archive_size,
                "words": sum(e.get("words", 0) for e in archive_entries),
                "lifecycle": None,
                "created_at": None,
                "ttl_days": None,
                "expires_at": None,
                "housekeeping_policy": None,
                "_file_count": archive_count,
            }
        )

    # Convert lifecycle_counts to plain dict for JSON
    for sec in sections.values():
        sec["lifecycle_counts"] = dict(sec["lifecycle_counts"])

    return (
        inventory,
        dict(sections),
        missing_frontmatter_paths,
        expired_paths,
        readme_paths,
        has_docs_readme,
    )


def format_size(n: int) -> str:
    if n < 1024:
        return f"{n} B"
    if n < 1024 * 1024:
        return f"{n / 1024:.1f} KB"
    return f"{n / (1024 * 1024):.2f} MB"


def write_markdown(
    out_path: Path,
    generated_at: str,
    scope: str,
    total_files: int,
    total_size: int,
    inventory: List[Dict],
    sections: Dict[str, Dict],
    missing_frontmatter: List[str],
    expired: List[str],
    readmes: List[Dict],
    has_docs_readme: bool,
    expand_archive: bool,
) -> None:
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("# KB Index\n\n")
        f.write(f"**Generated:** {generated_at}  \n")
        f.write(f"**Scope:** {scope}  \n")
        f.write(f"**Total files:** {total_files}  \n")
        f.write(f"**Total size:** {format_size(total_size)}\n\n")
        f.write("---\n\n")

        # Section summary table
        f.write("## Section summary\n\n")
        f.write("| Section | Files | Size | With frontmatter | Without | evergreen | timeboxed | transient | Expired |\n")
        f.write("|---------|-------|------|------------------|---------|-----------|-----------|-----------|--------|\n")
        for name in sorted(sections.keys()):
            s = sections[name]
            lc = s.get("lifecycle_counts") or {}
            f.write(
                f"| {name} | {s['file_count']} | {format_size(s['size_bytes'])} | "
                f"{s['with_frontmatter']} | {s['without_frontmatter']} | "
                f"{lc.get('evergreen', 0)} | {lc.get('timeboxed', 0)} | {lc.get('transient', 0)} | "
                f"{s.get('expired_count', 0)} |\n"
            )
        f.write("\n")

        # Optimization signals
        f.write("## Optimization signals\n\n")
        f.write(f"- **docs/README.md exists:** {has_docs_readme}\n")
        f.write(f"- **Files missing lifecycle frontmatter:** {len(missing_frontmatter)}\n")
        f.write(f"- **Timeboxed/transient with expires_at in the past:** {len(expired)}\n")
        f.write(f"- **READMEs (under docs/):** {len(readmes)}\n\n")
        if missing_frontmatter:
            f.write("### Missing frontmatter (sample)\n\n")
            for p in missing_frontmatter[:50]:
                f.write(f"- `{p}`\n")
            if len(missing_frontmatter) > 50:
                f.write(f"- ... and {len(missing_frontmatter) - 50} more\n")
            f.write("\n")
        if expired:
            f.write("### Expired (candidates for archive/delete)\n\n")
            for p in expired[:30]:
                f.write(f"- `{p}`\n")
            if len(expired) > 30:
                f.write(f"- ... and {len(expired) - 30} more\n")
            f.write("\n")
        f.write("### README locations\n\n")
        for r in readmes:
            f.write(f"- `{r['path']}`\n")
        f.write("\n")

        # Full inventory (path | size | words | lifecycle | created_at | ttl_days)
        f.write("## Full inventory\n\n")
        f.write("| Path | Size | Words | lifecycle | created_at | ttl_days |\n")
        f.write("|------|------|-------|----------|------------|----------|\n")
        for e in inventory:
            path = e.get("path", "")
            size = e.get("size", 0)
            words = e.get("words", 0)
            life = e.get("lifecycle") or ""
            ca = e.get("created_at")
            if ca is None:
                created = ""
            elif isinstance(ca, datetime):
                created = ca.strftime("%Y-%m-%dT%H:%M:%S")[:19]
            else:
                created = str(ca)[:19]
            ttl = e.get("ttl_days")
            ttl_str = str(ttl) if ttl is not None else ""
            if e.get("_file_count"):
                path = path + f" ({e['_file_count']} files)"
            f.write(f"| {path} | {format_size(size)} | {words} | {life} | {created} | {ttl_str} |\n")
        f.write("\n")


def write_json(
    out_path: Path,
    generated_at: str,
    scope: str,
    root: str,
    inventory: List[Dict],
    sections: Dict[str, Dict],
    missing_frontmatter: List[str],
    expired: List[str],
    readme_paths: List[str],
    has_docs_readme: bool,
) -> None:
    def _json_serial(obj: Any) -> Any:
        if isinstance(obj, datetime):
            return obj.strftime("%Y-%m-%dT%H:%M:%SZ") if obj.tzinfo else obj.isoformat() + "Z"
        if isinstance(obj, defaultdict):
            return dict(obj)
        return obj

    # Strip _file_count from inventory for JSON; convert datetimes to strings
    inv_export = []
    for e in inventory:
        ex = {}
        for k, v in e.items():
            if k == "_file_count":
                continue
            ex[k] = _json_serial(v) if isinstance(v, (datetime, defaultdict)) else v
        inv_export.append(ex)
    data = {
        "generated_at": generated_at,
        "scope": scope,
        "root": root,
        "inventory": inv_export,
        "sections": sections,
        "optimization": {
            "missing_frontmatter_paths": missing_frontmatter,
            "expired_paths": expired,
            "readme_paths": readme_paths,
            "has_docs_readme": has_docs_readme,
        },
    }
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Generate KB index (Markdown + optional JSON) for docs/."
    )
    ap.add_argument(
        "--docs-dir",
        type=Path,
        default=DEFAULT_DOCS_DIR,
        help="Path to docs root (default: repo/docs)",
    )
    ap.add_argument(
        "--output-dir",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help="Output directory for KB-INDEX.md and KB-INDEX.json (default: docs/knowledge)",
    )
    ap.add_argument(
        "--expand-archive",
        action="store_true",
        help="Include per-file rows for changelog-archive (default: summary only)",
    )
    ap.add_argument(
        "--json",
        action="store_true",
        help="Also emit KB-INDEX.json",
    )
    args = ap.parse_args()

    docs_root = args.docs_dir.resolve()
    if not docs_root.is_dir():
        print(f"Error: docs directory not found: {docs_root}", file=sys.stderr)
        return 1

    args.output_dir.mkdir(parents=True, exist_ok=True)
    generated_at = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

    (
        inventory,
        sections,
        missing_frontmatter,
        expired,
        readmes,
        has_docs_readme,
    ) = build_tree_and_sections(docs_root, args.expand_archive)

    total_files = sum(s["file_count"] for s in sections.values())
    total_size = sum(s["size_bytes"] for s in sections.values())
    readme_paths_list = [r["path"] for r in readmes]

    md_path = args.output_dir / "KB-INDEX.md"
    write_markdown(
        md_path,
        generated_at,
        str(docs_root),
        total_files,
        total_size,
        inventory,
        sections,
        missing_frontmatter,
        expired,
        readmes,
        has_docs_readme,
        args.expand_archive,
    )
    print(f"Wrote {md_path}")

    if args.json:
        json_path = args.output_dir / "KB-INDEX.json"
        write_json(
            json_path,
            generated_at,
            str(docs_root),
            "docs",
            inventory,
            sections,
            missing_frontmatter,
            expired,
            readme_paths_list,
            has_docs_readme,
        )
        print(f"Wrote {json_path}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
