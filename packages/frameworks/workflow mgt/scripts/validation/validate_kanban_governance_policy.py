#!/usr/bin/env python3
"""
Kanban Governance Policy Validator (FR-037)

Validates that the Kanban governance policy contains the FR-037 required content:
- R01: Task prioritisation section (MoSCOW category, no task directly to COMPLETE)
- R02: MUST HAVE stack/queue ordering (stack for bug-based, queue for other)
- R03: Scripts/UKW/RW respect stack vs queue or document manual/agent-defined
- R04: (Optional) Universal COMPLETE definition (fully implemented + signed off)
- R05: Policy references board guide or prioritisation/queue/stack
- R06: Policy defines terminal row timestamp format

Also validates active board row compliance:
- `kboard.md` and `fbuboard.md` MoSCOW rows must end with:
  `| Last modified: YYYY-MM-DD HH:MM UTC`

Usage:
    python packages/frameworks/workflow mgt/scripts/validation/validate_kanban_governance_policy.py [--strict] [--policy-path PATH]

    --strict: Exit 1 on validation failure
    --policy-path: Path to governance policy (default: from rw-config or packages/frameworks/kanban/policies/kanban-governance-policy.md)
"""

import argparse
import re
import sys
from pathlib import Path
from typing import List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None


def load_rw_config(project_root: Optional[Path] = None) -> Optional[dict]:
    """Load rw-config.yaml if it exists."""
    if project_root is None:
        project_root = Path.cwd()
    config_path = project_root / "rw-config.yaml"
    if not config_path.exists() or yaml is None:
        return None
    try:
        with open(config_path, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def get_policy_path(config: Optional[dict] = None, project_root: Optional[Path] = None) -> Path:
    """Get governance policy path. Default: packages/frameworks/kanban/policies/kanban-governance-policy.md."""
    if project_root is None:
        project_root = Path.cwd()
    # Config does not typically specify governance policy path; use default
    return project_root / "packages/frameworks/kanban/policies/kanban-governance-policy.md"


def check_r01(content: str) -> Tuple[bool, List[str]]:
    """R01: Task prioritisation section; MoSCOW category; no task directly to COMPLETE."""
    errors = []
    # Section heading: task prioritisation or equivalent
    if not re.search(r"#+\s+.*[Tt]ask\s+[Pp]rioritis", content, re.IGNORECASE):
        errors.append("R01: Missing section heading containing 'Task prioritisation' (or equivalent)")
    if "MoSCOW category" not in content and "MoSCOW" not in content:
        errors.append("R01: Policy should mention MoSCOW category")
    if not re.search(r"no\s+task.*(?:directly\s+to\s+COMPLETE|added\s+directly\s+to\s+COMPLETE)", content, re.IGNORECASE | re.DOTALL):
        # Alternative: "directly to COMPLETE" or "placed in a MoSCOW category first"
        if "directly to COMPLETE" not in content and "directly to COMPLETE" not in content.upper():
            if not re.search(r"(?:all\s+)?tasks?\s+(?:must|are)\s+(?:initially\s+)?(?:placed|prioritised)", content, re.IGNORECASE):
                errors.append("R01: Policy should state that no task is added directly to COMPLETE (or all tasks go to MoSCOW first)")
    return len(errors) == 0, errors


def check_r02(content: str) -> Tuple[bool, List[str]]:
    """R02: Stack/queue for MUST HAVE; top/end or front; bug-based/breaking."""
    errors = []
    if "stack" not in content.lower():
        errors.append("R02: Policy should mention 'stack' for MUST HAVE ordering")
    if "queue" not in content.lower():
        errors.append("R02: Policy should mention 'queue' for MUST HAVE ordering")
    if "top" not in content.lower() and "top-first" not in content.lower():
        errors.append("R02: Policy should mention 'top' (stack: add to top)")
    if "end" not in content.lower() and "front" not in content.lower():
        errors.append("R02: Policy should mention 'end' or 'front' (queue: add to end, work front-first)")
    if "bug-based" not in content and "breaking" not in content.lower():
        errors.append("R02: Policy should mention 'bug-based' or 'breaking' (stack classification)")
    return len(errors) == 0, errors


def check_r03(content: str) -> Tuple[bool, List[str]]:
    """R03: Scripts/UKW/RW respect stack vs queue or document manual/agent-defined."""
    errors = []
    content_lower = content.lower()
    has_scripts_ref = any(
        x.lower() in content_lower for x in ["UKW", "release workflow", "scripts", "RW", "Release Workflow"]
    )
    has_stack_queue_or_manual = (
        ("stack" in content and "queue" in content)
        or "manual" in content.lower()
        or "agent-defined" in content
    )
    if not has_scripts_ref:
        errors.append("R03: Policy should mention UKW, RW, or scripts that update MoSCOW")
    if not has_stack_queue_or_manual:
        errors.append("R03: Policy should state scripts respect stack/queue or document manual/agent-defined ordering")
    return len(errors) == 0, errors


def check_r04(content: str) -> Tuple[bool, List[str]]:
    """R04 (optional): Universal COMPLETE definition - fully implemented + signed off."""
    # Optional: only warn if COMPLETE is mentioned but definition is missing
    if "COMPLETE" in content:
        if "fully implemented" not in content and "implemented" not in content.lower():
            return True, []  # Optional, skip
        if "signed off" not in content and "signed off" not in content.lower():
            return True, []  # Optional, skip
    return True, []


def check_r05(content: str) -> Tuple[bool, List[str]]:
    """R05: Policy references board guide or prioritisation/queue/stack."""
    errors = []
    has_guide_ref = (
        "board guide" in content.lower()
        or "kanban-board-guide" in content.lower()
        or "KANBAN_BOARD_GUIDE" in content
        or ("prioritis" in content.lower() and "queue" in content)
    )
    if not has_guide_ref and "prioritis" not in content.lower():
        errors.append("R05: Policy should reference board guide or prioritisation/queue/stack for discoverability")
    return len(errors) == 0, errors


def check_r06(content: str) -> Tuple[bool, List[str]]:
    """R06: Policy defines terminal row timestamp requirement."""
    errors = []
    has_last_modified = "Last modified:" in content
    has_utc_format = "YYYY-MM-DD HH:MM UTC" in content
    has_terminal_pipe = "pipe-delimited" in content.lower() or "| Last modified:" in content
    if not has_last_modified:
        errors.append("R06: Policy should define a 'Last modified:' row field")
    if not has_utc_format:
        errors.append("R06: Policy should define timestamp format 'YYYY-MM-DD HH:MM UTC'")
    if not has_terminal_pipe:
        errors.append("R06: Policy should define terminal pipe-delimited row timestamp field")
    return len(errors) == 0, errors


def validate_policy(content: str) -> Tuple[bool, List[str]]:
    """Run all FR-037 checks. Returns (passed, list of error messages)."""
    all_errors = []
    for check_fn in [check_r01, check_r02, check_r03, check_r04, check_r05, check_r06]:
        passed, errors = check_fn(content)
        if not passed:
            all_errors.extend(errors)
    return len(all_errors) == 0, all_errors


def _extract_moscow_rows(board_content: str) -> List[str]:
    rows: List[str] = []
    in_moscow = False
    for line in board_content.splitlines():
        stripped = line.strip()
        if stripped.startswith("## MoSCOW"):
            in_moscow = True
            continue
        if in_moscow and stripped.startswith("## ") and not stripped.startswith("## MoSCOW"):
            break
        if in_moscow and stripped.startswith("- **"):
            rows.append(stripped)
    return rows


def validate_board_timestamp_rows(project_root: Path) -> Tuple[bool, List[str]]:
    errors: List[str] = []
    boards = [
        project_root / "docs/project-management/kanban/kboard.md",
        project_root / "docs/project-management/kanban/fbuboard.md",
        project_root / "docs/project-management/kanban/kanban-board.md",
        project_root / "docs/project-management/kanban/fr-br-uxr-board.md",
    ]
    ts_pattern = re.compile(r"\|\sLast modified:\s\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC\s*$")
    for board in boards:
        if not board.exists():
            continue
        content = board.read_text(encoding="utf-8")
        rows = _extract_moscow_rows(content)
        for row in rows:
            if not ts_pattern.search(row):
                errors.append(f"Board row missing terminal timestamp ({board}): {row[:120]}")
    return len(errors) == 0, errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate Kanban governance policy (FR-037)")
    parser.add_argument("--strict", action="store_true", help="Exit 1 on validation failure")
    parser.add_argument(
        "--policy-path",
        type=Path,
        default=None,
        help="Path to governance policy file",
    )
    args = parser.parse_args()

    project_root = Path.cwd()
    config = load_rw_config(project_root)
    policy_path = args.policy_path or get_policy_path(config, project_root)

    if not policy_path.exists():
        print(f"Error: Governance policy not found at {policy_path}")
        return 1

    content = policy_path.read_text(encoding="utf-8")
    passed, errors = validate_policy(content)
    boards_ok, board_errors = validate_board_timestamp_rows(project_root)
    errors.extend(board_errors)
    passed = passed and boards_ok

    if passed:
        print("Kanban governance policy validation passed (FR-037 + timestamp row checks).")
        return 0

    print("Kanban governance policy validation FAILED (FR-037):")
    for e in errors:
        print(f"  - {e}")
    if args.strict:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
