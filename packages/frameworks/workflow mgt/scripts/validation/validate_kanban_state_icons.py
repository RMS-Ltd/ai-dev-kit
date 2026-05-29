#!/usr/bin/env python3
"""
MoSCOW state icon validator (UXR-012 / E4:S13:T07).

Ensures each parseable MoSCOW row has the canonical Set A icon before its status token.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import List, Optional, Tuple

_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

try:
    import yaml
except ImportError:
    yaml = None

from stamp_authority import MOSCOW_HEADER_RE  # noqa: E402
from state_icons import parse_row_status_segment, row_has_primary_icon  # noqa: E402


def load_rw_config(project_root: Path):
    p = project_root / "rw-config.yaml"
    if not p.exists() or yaml is None:
        return None
    try:
        with open(p, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)
    except OSError:
        return None


def active_board_paths(project_root: Path):
    cfg = load_rw_config(project_root)
    if cfg and cfg.get("kanban_root"):
        root = project_root / cfg["kanban_root"]
    else:
        root = project_root / "docs/project-management/kanban"
    return [root / "kboard.md", root / "fbuboard.md"]


def validate_board_file(path: Path) -> Tuple[bool, List[str]]:
    findings: List[str] = []
    if not path.exists():
        return True, []
    lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
    in_moscow = False
    for i, line in enumerate(lines, start=1):
        st = line.strip()
        if st.startswith("## MoSCOW"):
            in_moscow = True
        elif in_moscow and st.startswith("## ") and not MOSCOW_HEADER_RE.match(st):
            in_moscow = False
        if not in_moscow or not st.startswith("- **"):
            continue
        parsed = parse_row_status_segment(line)
        if parsed is None:
            continue
        if not row_has_primary_icon(line):
            findings.append(f"{path.name}:{i}: missing or wrong state icon: {line[:120]}…")
    return not findings, findings


def validate_project(project_root: Path) -> Tuple[bool, List[str]]:
    all_ok = True
    all_findings: List[str] = []
    for p in active_board_paths(project_root):
        ok, f = validate_board_file(p)
        if not ok:
            all_ok = False
            all_findings.extend(f)
    return all_ok, all_findings


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Validate MoSCOW state icons (UXR-012).")
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path.cwd(),
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit 1 when any MoSCOW row is missing a primary icon.",
    )
    args = parser.parse_args(argv)
    root = args.project_root.resolve()
    ok, findings = validate_project(root)
    if findings:
        print("validate_kanban_state_icons: FAIL")
        for line in findings:
            print(line)
    else:
        print("validate_kanban_state_icons: PASS (all parseable MoSCOW rows iconized)")
    if args.strict and not ok:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
