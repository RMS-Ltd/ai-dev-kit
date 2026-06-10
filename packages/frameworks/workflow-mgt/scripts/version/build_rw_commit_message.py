#!/usr/bin/env python3
"""
Build RW Step 10 release commit message with external SemVer subject and internal body traceability.

Subject (GitHub Actions run title on push):
  Release v{semver}: {summary}

Body:
  Internal: v{internal}

  Epic: {epic} | Story: {story} | Task: {task}
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from version.semver_converter import convert_version_string  # noqa: E402


def build_rw_commit_message(
    internal_version: str,
    summary: str,
    epic: int,
    story: int,
    task: int,
) -> dict[str, str]:
    """Return subject, body, and full message for RW Step 10."""
    internal = internal_version.strip()
    if internal.startswith("v"):
        internal = internal[1:]

    semver = convert_version_string(internal, finalize=False)
    subject = f"Release v{semver}: {summary.strip()}"
    body = (
        f"Internal: v{internal}\n\n"
        f"Epic: {epic} | Story: {story} | Task: {task}"
    )
    return {
        "subject": subject,
        "body": body,
        "message": f"{subject}\n\n{body}",
        "semver": semver,
        "internal": internal,
    }


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Build RW release commit message (SemVer subject, internal body)."
    )
    parser.add_argument(
        "--internal-version",
        required=True,
        help="Internal version, e.g. 0.2.1.31+1 or v0.2.1.31+1",
    )
    parser.add_argument("--summary", required=True, help="Release summary line")
    parser.add_argument("--epic", type=int, required=True)
    parser.add_argument("--story", type=int, required=True)
    parser.add_argument("--task", type=int, required=True)
    parser.add_argument(
        "--json",
        action="store_true",
        help="Emit JSON with subject, body, message, semver, internal",
    )
    args = parser.parse_args()

    try:
        result = build_rw_commit_message(
            args.internal_version,
            args.summary,
            args.epic,
            args.story,
            args.task,
        )
    except Exception as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1

    if args.json:
        print(json.dumps(result, indent=2))
    else:
        print(result["message"])
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
