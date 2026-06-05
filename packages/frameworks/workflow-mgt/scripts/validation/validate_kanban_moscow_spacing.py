#!/usr/bin/env python3
"""
Validate MoSCOW multi-line bullet spacing (UXR-005 / E07:S01:T09).
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import List, Optional

_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from kanban_moscow_spacing import (  # noqa: E402
    check_spacing_file,
    fix_spacing_file,
)

try:
    import yaml
except ImportError:
    yaml = None

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import load_rw_config  # noqa: E402



def default_board_paths(project_root: Path) -> List[Path]:
    cfg = load_rw_config(project_root)
    if cfg and cfg.get("kanban_root"):
        root = project_root / cfg["kanban_root"]
    else:
        root = project_root / "docs/project-management/kanban"
    return [
        root / "kboard.md",
        root / "kboard.md",
        root / "kanban-board-guide.md",
        root / "kanban-structure.md",
        root / "_index.md",
    ]


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="MoSCOW multi-line spacing (UXR-005).")
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument("--strict", action="store_true", help="Exit 1 on violations.")
    parser.add_argument("--fix", action="store_true", help="Insert missing blank lines.")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("paths", nargs="*", type=Path)
    args = parser.parse_args(argv)

    paths = args.paths or default_board_paths(args.project_root)
    violations = []
    for p in paths:
        if not p.exists():
            continue
        if args.fix:
            n = fix_spacing_file(p, dry_run=args.dry_run)
            if n:
                print(f"  {p}: inserted {n} blank line(s)")
            continue
        violations.extend(check_spacing_file(p))

    if args.fix:
        return 0

    if not violations:
        print("validate_kanban_moscow_spacing: PASS")
        return 0

    for v in violations:
        print(f"  {v.path}:{v.line_after}: {v.message} ({v.bullet_token})")
    print(f"validate_kanban_moscow_spacing: FAIL ({len(violations)} violation(s))")
    return 1 if args.strict else 0


if __name__ == "__main__":
    raise SystemExit(main())
