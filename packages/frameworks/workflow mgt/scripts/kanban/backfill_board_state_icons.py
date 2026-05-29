#!/usr/bin/env python3
"""
One-shot / idempotent MoSCOW state icon backfill (UXR-012 / E4:S13:T07).

Does not modify | Last modified stamps — icon injection only (FR-097 safe).
"""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

try:
    import yaml
except ImportError:
    yaml = None

from state_icons import apply_icons_to_moscow_board_content  # noqa: E402


def load_rw_config(project_root: Path) -> Optional[Dict[str, Any]]:
    p = project_root / "rw-config.yaml"
    if not p.exists() or yaml is None:
        return None
    try:
        with open(p, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)
    except OSError:
        return None


def kanban_root(project_root: Path, config: Optional[Dict[str, Any]]) -> Path:
    if config and config.get("kanban_root"):
        return project_root / config["kanban_root"]
    return project_root / "docs/project-management/kanban"


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(
        description="Backfill Set A state icons on kboard.md / fbuboard.md MoSCOW rows."
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path.cwd(),
        help="Repository root (default: cwd).",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Do not write files; emit JSON report to stdout.",
    )
    parser.add_argument(
        "--report-json",
        type=Path,
        default=None,
        help="Optional path to write report JSON (four-surface-reports/).",
    )
    args = parser.parse_args(argv)
    root = args.project_root.resolve()
    cfg = load_rw_config(root)
    kb = kanban_root(root, cfg)
    boards = [kb / "kboard.md", kb / "fbuboard.md"]
    report: Dict[str, Any] = {
        "generated_at_utc": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
        "dry_run": args.dry_run,
        "boards": {},
    }
    for path in boards:
        if not path.exists():
            report["boards"][str(path)] = {"skipped": True, "reason": "missing"}
            continue
        raw = path.read_text(encoding="utf-8", errors="replace")
        new_content, n = apply_icons_to_moscow_board_content(raw)
        report["boards"][str(path.relative_to(root))] = {"rows_changed": n}
        if not args.dry_run and n:
            path.write_text(new_content, encoding="utf-8")
    out = json.dumps(report, indent=2)
    print(out)
    if args.report_json:
        args.report_json.parent.mkdir(parents=True, exist_ok=True)
        args.report_json.write_text(out + "\n", encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
