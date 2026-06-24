#!/usr/bin/env python3
"""Generate repository path manifest JSON (FR-140 / E07:S01:T15)."""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
WF_SCRIPTS = SCRIPT_DIR.parent
if str(WF_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(WF_SCRIPTS))
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from repository_ia_exclusions import (  # noqa: E402
    exclusions_as_dicts,
    path_is_excluded,
    repo_relative_posix,
    should_prune_dir,
)

GENERATOR_VERSION = "1.0.0"
DEFAULT_MANIFEST = "docs/maintenance/repository-path-manifest.json"
DEFAULT_AUDIT = "docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md"
MAX_DEPTH = 2
EVIDENCE_REF = "docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md"

_AUDIT_ROW_RE = re.compile(
    r"^\|\s*`?([^`|]+)`?\s*\|\s*([^|]+)\s*\|\s*[^|]+\s*\|\s*([^|]+)\s*\|",
)


def _find_project_root(start: Path) -> Path:
    for parent in [start, *start.parents]:
        if (parent / "rw-config.yaml").is_file():
            return parent
    return start


def load_audit_metadata(audit_path: Path) -> dict[str, dict[str, str]]:
    """Parse T13 directory audit table for purpose_class and location_verdict."""
    if not audit_path.is_file():
        return {}
    text = audit_path.read_text(encoding="utf-8", errors="replace")
    meta: dict[str, dict[str, str]] = {}
    for line in text.splitlines():
        if not line.startswith("|") or "Path" in line and "Purpose class" in line:
            continue
        if line.startswith("| ---"):
            continue
        m = _AUDIT_ROW_RE.match(line.strip())
        if not m:
            continue
        raw_path = m.group(1).strip().strip("`")
        purpose = m.group(2).strip()
        verdict = m.group(3).strip()
        key = "." if raw_path in {".", "./"} else raw_path.strip("/")
        meta[key] = {
            "purpose_class": purpose,
            "location_verdict": verdict,
        }
    return meta


def _depth(rel_posix: str) -> int:
    if rel_posix == ".":
        return 0
    return len(rel_posix.split("/"))


def collect_directories(root: Path) -> list[str]:
    """Collect non-excluded directories through MAX_DEPTH."""
    found: set[str] = {"."}
    for dirpath, dirnames, _ in os.walk(root, topdown=True):
        dirnames[:] = [d for d in dirnames if not should_prune_dir(d)]
        rel = repo_relative_posix(Path(dirpath), root)
        if rel != "." and path_is_excluded(rel):
            dirnames.clear()
            continue
        if _depth(rel) > MAX_DEPTH:
            dirnames.clear()
            continue
        if rel != ".":
            found.add(rel)
        if _depth(rel) >= MAX_DEPTH:
            dirnames.clear()
    return sorted(found, key=lambda p: (p.count("/"), p))


def build_manifest(root: Path, audit_path: Path) -> dict:
    audit_meta = load_audit_metadata(audit_path)
    entries: list[dict] = []
    top_level: list[dict] = []

    for rel in collect_directories(root):
        depth = _depth(rel)
        meta = audit_meta.get(rel, {})
        purpose = meta.get("purpose_class", "Unknown/orphan")
        verdict = meta.get("location_verdict", "NEEDS_REVIEW")
        mirror = rel == "greenfield-install" or rel.startswith("greenfield-install/")
        if rel == "greenfield-install" or rel.startswith("greenfield-install/packages"):
            purpose = "Framework SoT (mirror)" if "mirror" not in purpose.lower() else purpose

        entry = {
            "path": rel,
            "depth": depth,
            "purpose_class": purpose,
            "location_verdict": verdict,
            "mirror": mirror,
            "evidence_ref": EVIDENCE_REF,
        }
        entries.append(entry)

        if depth == 1:
            top_level.append(
                {
                    "path": rel,
                    "purpose_class": purpose,
                    "readme_tier": 1,
                }
            )

    return {
        "schema_version": "1",
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "generator": {
            "script": "packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py",
            "version": GENERATOR_VERSION,
        },
        "exclusions": exclusions_as_dicts(),
        "top_level_allowlist": top_level,
        "entries": entries,
    }


def manifest_for_compare(manifest: dict) -> dict:
    """Strip volatile fields for determinism checks."""
    clone = json.loads(json.dumps(manifest))
    clone.pop("generated_at", None)
    return clone


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate repository path manifest JSON")
    parser.add_argument("--project-root", type=Path, default=None)
    parser.add_argument("--audit", type=Path, default=None)
    parser.add_argument("--output", type=Path, default=None)
    parser.add_argument("--write", action="store_true", help="Write manifest to output path")
    parser.add_argument("--stdout", action="store_true", help="Print JSON to stdout")
    args = parser.parse_args()

    root = (args.project_root or _find_project_root(Path.cwd())).resolve()
    audit = (args.audit or root / DEFAULT_AUDIT).resolve()
    output = (args.output or root / DEFAULT_MANIFEST).resolve()

    manifest = build_manifest(root, audit)
    payload = json.dumps(manifest, indent=2, sort_keys=False) + "\n"

    if args.write:
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(payload, encoding="utf-8")
        print(f"Wrote {output.relative_to(root)} ({len(manifest['entries'])} entries)")
    if args.stdout or not args.write:
        if args.stdout:
            sys.stdout.write(payload)
        elif not args.write:
            print(payload)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
