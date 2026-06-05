#!/usr/bin/env python3
"""
Active kanban board lean contract (FR-109 / E02:S16:T18).

Blocks terminal-status MoSCOW rows, journal lines, archive footnotes, and
legacy fbuboard boilerplate on active boards (kboard.md, fbuboard.md).
Completed history belongs in kanban-completed.md / fbu-completed.md.
"""

from __future__ import annotations

import argparse
import re
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

from stamp_authority import MOSCOW_HEADER_RE, is_fbuboard_deprecated  # noqa: E402
from state_icons import match_canonical_at_start, parse_row_status_segment  # noqa: E402

_TERMINAL_CANONICAL = frozenset(
    {"COMPLETE", "CLOSED", "RESOLVED", "IMPLEMENTED", "FIXED"}
)

_JOURNAL_LINE_RE = re.compile(
    r"^\s*(\*\*\d{4}-\d{2}-\d{2}|\-\s+\*\*\d{4}-\d{2}-\d{2})"
)

_ARCHIVE_FOOTNOTE_RE = re.compile(
    r"(kanban-completed\.md\)|fbu-completed\.md\)|\(archived\b|\*\*Archived\*\*)",
    re.IGNORECASE,
)

_FBU_FORBIDDEN_SECTIONS = (
    "## Board Statistics",
    "## Usage Instructions",
)

_PLACEHOLDER_LINE_RE = re.compile(r"^\s*\*\(")


def load_rw_config(project_root: Path):
    p = project_root / "rw-config.yaml"
    if not p.exists() or yaml is None:
        return None
    try:
        with open(p, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)
    except OSError:
        return None


def active_board_paths(project_root: Path) -> List[Path]:
    cfg = load_rw_config(project_root)
    if cfg and cfg.get("kanban_root"):
        root = project_root / cfg["kanban_root"]
    else:
        root = project_root / "docs/project-management/kanban"
    return [root / "kboard.md", root / "fbuboard.md"]


def _validate_fbu_sections(path: Path) -> List[str]:
    findings: List[str] = []
    if path.name != "fbuboard.md" or not path.exists():
        return findings
    text = path.read_text(encoding="utf-8", errors="replace")
    for heading in _FBU_FORBIDDEN_SECTIONS:
        if heading in text:
            findings.append(
                f"{path.name}: forbidden legacy section '{heading}' "
                "(remove; use fbu-structure.md / kanban-board-guide.md)"
            )
    return findings


def validate_board_file(path: Path) -> Tuple[bool, List[str]]:
    findings: List[str] = []
    if not path.exists():
        return True, []

    text = path.read_text(encoding="utf-8", errors="replace")
    if path.name == "fbuboard.md" and is_fbuboard_deprecated(text):
        findings.extend(_validate_fbu_sections(path))
        return not findings, findings

    findings.extend(_validate_fbu_sections(path))

    lines = text.splitlines()
    in_moscow = False
    for i, line in enumerate(lines, start=1):
        st = line.strip()
        if st.startswith("## MoSCOW"):
            in_moscow = True
            continue
        if in_moscow and st.startswith("## ") and not MOSCOW_HEADER_RE.match(st):
            in_moscow = False
            continue
        if not in_moscow:
            continue

        if _JOURNAL_LINE_RE.match(line):
            findings.append(
                f"{path.name}:{i}: journal line on active board (move to ledger or task doc)"
            )
            continue

        parsed = parse_row_status_segment(line)
        if parsed is not None:
            _prefix, stat_rest = parsed
            canon = match_canonical_at_start(stat_rest)
            if canon in _TERMINAL_CANONICAL:
                findings.append(
                    f"{path.name}:{i}: terminal status '{canon}' on active MoSCOW row "
                    "(archive to kanban-completed.md / fbu-completed.md)"
                )
            continue

        if not st or st.startswith("###"):
            continue
        if _PLACEHOLDER_LINE_RE.match(line):
            continue

        if st.startswith(">"):
            findings.append(
                f"{path.name}:{i}: blockquote archive footnote in MoSCOW section"
            )
            continue

        if _ARCHIVE_FOOTNOTE_RE.search(line):
            findings.append(
                f"{path.name}:{i}: archive narrative in MoSCOW section "
                "(use completed ledger, not inline footnotes)"
            )
            continue

        if st.startswith("- ") and not st.startswith("- **"):
            findings.append(
                f"{path.name}:{i}: non-canonical MoSCOW bullet (expected '- **E…' / '- **FR-…')"
            )

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
    parser = argparse.ArgumentParser(
        description="Validate active kanban boards follow lean contract (FR-109)."
    )
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit 1 when any anti-pattern is found.",
    )
    args = parser.parse_args(argv)
    root = args.project_root.resolve()
    ok, findings = validate_project(root)
    if findings:
        print("validate_active_kanban_board: FAIL")
        for line in findings:
            print(line)
    else:
        print("validate_active_kanban_board: PASS (active boards lean)")
    if args.strict and not ok:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
