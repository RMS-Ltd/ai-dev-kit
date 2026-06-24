#!/usr/bin/env python3
"""
validate_mwf_delivery_preflight.py — FR-137 / E02:S03:T13

MWF Phase 0 preflight for the v1 `delivery` recipe. Wraps validate_rw_task_intent.py
with MWF-specific abort messaging when the trigger has no --art.

Usage:
  python validate_mwf_delivery_preflight.py --requested E02:S03:T13
  python validate_mwf_delivery_preflight.py --requested E02S03T13 --art

Exit codes:
  0 — preflight pass; proceed to MWF legs
  1 — intent mismatch without --art (MWF ABORTED preflight: RW intent)
  2 — invalid args / validator internal error
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from est_format import format_est_reference  # noqa: E402
from ukw_syntax_parser import parse_single_task_id  # noqa: E402

_INTENT_SCRIPT = _SCRIPT_DIR / "validate_rw_task_intent.py"


def _run_intent_check(requested: str, art: bool) -> tuple[int, str]:
    cmd = [
        sys.executable,
        str(_INTENT_SCRIPT),
        "--requested",
        requested,
    ]
    if art:
        cmd.append("--art")
    proc = subprocess.run(cmd, capture_output=True, text=True)
    output = (proc.stdout or "") + (proc.stderr or "")
    return proc.returncode, output.strip()


def main() -> int:
    parser = argparse.ArgumentParser(
        description="MWF delivery Phase 0 RW intent preflight (FR-137)."
    )
    parser.add_argument(
        "--requested",
        required=True,
        help="Host task id from MWF trigger, e.g. E02:S03:T13",
    )
    parser.add_argument(
        "--art",
        action="store_true",
        help="Present when MWF trigger included --art (explicit adoption).",
    )
    args = parser.parse_args()

    requested = args.requested.strip()
    parsed = parse_single_task_id(requested)
    if parsed is None:
        print(f"validate_mwf_delivery_preflight: could not parse task id: {requested!r}")
        return 2

    epic, story, task = parsed
    hint = f"MWF {format_est_reference(epic, story, task)} delivery --art"

    code, output = _run_intent_check(requested, args.art)
    if output:
        print(output)

    if code == 0:
        print("validate_mwf_delivery_preflight: OK — proceed to MWF legs.")
        return 0

    if code != 1:
        return code

    if args.art:
        print("validate_mwf_delivery_preflight: failed despite --art; resolve before MWF.")
        return 1

    print()
    print("MWF ABORTED (preflight: RW intent)")
    print("Re-invoke with explicit adoption:")
    print(f"  {hint}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
