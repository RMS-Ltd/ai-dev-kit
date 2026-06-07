#!/usr/bin/env python3
"""Export SQLite release-state semver registry to legacy YAML."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import yaml

_SCRIPT_DIR = Path(__file__).resolve().parent
_SCRIPTS = _SCRIPT_DIR.parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from release_state.store import load_registry_from_sqlite  # noqa: E402
from rw_config_loader import find_project_root  # noqa: E402


def export_registry_yaml(db_path: Path, yaml_out: Path) -> None:
    registry = load_registry_from_sqlite(db_path)
    yaml_out.parent.mkdir(parents=True, exist_ok=True)
    with open(yaml_out, "w", encoding="utf-8") as f:
        yaml.dump(registry, f, default_flow_style=False, sort_keys=False, allow_unicode=True)


def main(argv: list[str] | None = None) -> int:
    root = find_project_root(Path.cwd())
    parser = argparse.ArgumentParser(description="Export SQLite registry to semver-registry.yaml format.")
    parser.add_argument("--db", type=Path, default=root / ".adk" / "release-state.db")
    parser.add_argument("--yaml-out", type=Path, required=True)
    args = parser.parse_args(argv)

    if not args.db.exists():
        print(f"export_legacy: ERROR — DB not found: {args.db}", file=sys.stderr)
        return 1

    export_registry_yaml(args.db, args.yaml_out)
    print(f"export_legacy: wrote {args.yaml_out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
