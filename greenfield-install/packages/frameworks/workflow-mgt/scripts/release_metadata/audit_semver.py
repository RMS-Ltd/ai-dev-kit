"""Offline semver injectivity audit using DB indexes."""

from __future__ import annotations

import argparse
import sqlite3
import sys
from collections import defaultdict
from pathlib import Path
from typing import Dict, List, Optional

from .config import get_store_config
from .ingest_semver import db_mapping_count, yaml_mapping_count
from .store import open_store


def audit_collisions(conn: sqlite3.Connection) -> Dict[str, Dict]:
    patch_dupes: Dict[int, List[str]] = defaultdict(list)
    core_dupes: Dict[str, List[str]] = defaultdict(list)

    rows = conn.execute(
        "SELECT internal_version, patch, semver_core FROM semver_mapping"
    ).fetchall()
    by_patch: Dict[int, List[str]] = defaultdict(list)
    by_core: Dict[str, List[str]] = defaultdict(list)
    for r in rows:
        by_patch[int(r["patch"])].append(r["internal_version"])
        by_core[r["semver_core"]].append(r["internal_version"])

    for patch, ivs in by_patch.items():
        if len(set(ivs)) > 1:
            patch_dupes[patch] = sorted(set(ivs))
    for core, ivs in by_core.items():
        if len(set(ivs)) > 1:
            core_dupes[core] = sorted(set(ivs))

    return {"patch_collisions": dict(patch_dupes), "core_collisions": dict(core_dupes)}


def check_drift(conn: sqlite3.Connection, registry_path: Path) -> Optional[str]:
    yaml_count = yaml_mapping_count(registry_path)
    db_count = db_mapping_count(conn)
    if yaml_count != db_count:
        return f"drift: yaml mapping_history={yaml_count} db semver_mapping={db_count}"
    return None


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Audit semver read model injectivity")
    parser.add_argument("--strict", action="store_true", help="Exit 1 on collisions or drift")
    args = parser.parse_args(argv)

    cfg = get_store_config()
    if not cfg["store_path"].exists():
        print(f"ERROR: store not found: {cfg['store_path']}", file=sys.stderr)
        return 1 if args.strict else 0

    exit_code = 0
    with open_store(cfg["store_path"], init=False) as conn:
        report = audit_collisions(conn)
        if report["patch_collisions"] or report["core_collisions"]:
            print("PATCH collisions:", report["patch_collisions"])
            print("CORE collisions:", report["core_collisions"])
            exit_code = 1
        else:
            print("OK: no semver injectivity violations in read model")

        drift = check_drift(conn, cfg["semver_registry_path"])
        if drift:
            print(f"WARN: {drift}")
            if args.strict:
                exit_code = 1
        else:
            print("OK: yaml and db mapping counts match")

    return exit_code if args.strict else 0


if __name__ == "__main__":
    raise SystemExit(main())
