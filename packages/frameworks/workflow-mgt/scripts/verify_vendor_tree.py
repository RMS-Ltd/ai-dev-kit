#!/usr/bin/env python3
"""
Lean vendor tree acquisition preflight (FR-111 / E06:S09:T24).

Validates vendor/ai-dev-kit layout before greenfield installers run.
Emits registered ADK-I05.* codes on failure.
"""

from __future__ import annotations

import argparse
import hashlib
import sys
from pathlib import Path
from typing import List, Optional, Sequence, Tuple

_SCRIPTS_DIR = Path(__file__).resolve().parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

try:
    from adk_install_errors import emit_install_error
except ImportError:
    def emit_install_error(code, *, detail=None, file=None):  # type: ignore[misc]
        print(f"ERROR [{code}]", file=file or sys.stderr)

# Relative to vendor root (FR-110 lean tree contract)
REQUIRED_PATHS: Sequence[str] = (
    "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py",
    "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
    "packages/frameworks/kanban/scripts/install_kanban_framework.py",
)

REGISTRY_PATH = "packages/frameworks/workflow-mgt/config/install-error-codes.yaml"
EMITTER_PATH = "packages/frameworks/workflow-mgt/scripts/adk_install_errors.py"


def _missing_paths(vendor_root: Path, rel_paths: Sequence[str]) -> List[str]:
    missing: List[str] = []
    for rel in rel_paths:
        if not (vendor_root / rel).is_file():
            missing.append(rel)
    return missing


def verify_tarball_checksum(tarball: Path, expected_sha256: str) -> Tuple[bool, Optional[str]]:
    if not tarball.is_file():
        return False, "tarball path does not exist"
    digest = hashlib.sha256()
    with tarball.open("rb") as fh:
        for chunk in iter(lambda: fh.read(1024 * 1024), b""):
            digest.update(chunk)
    actual = digest.hexdigest().lower()
    expected = expected_sha256.strip().lower()
    if actual != expected:
        return False, "checksum mismatch"
    return True, None


def run_verify(
    vendor_root: Path,
    *,
    tarball: Optional[Path] = None,
    sha256: Optional[str] = None,
    emit: bool = True,
) -> Tuple[int, Optional[str]]:
    """
    Return (exit_code, adk_code_emitted).
    exit 0 = OK; non-zero = failure with optional code.
    """
    if tarball is not None and sha256:
        ok, reason = verify_tarball_checksum(tarball, sha256)
        if not ok:
            if emit:
                emit_install_error("ADK-I05.E03", detail=reason)
            return 1, "ADK-I05.E03"

    if not vendor_root.is_dir():
        if emit:
            emit_install_error("ADK-I05.E04", detail="vendor root not found")
        return 1, "ADK-I05.E04"

    missing_entry = _missing_paths(vendor_root, REQUIRED_PATHS)
    if missing_entry:
        if emit:
            emit_install_error(
                "ADK-I05.E04",
                detail=f"missing {len(missing_entry)} required file(s)",
            )
        return 1, "ADK-I05.E04"

    missing_registry = _missing_paths(vendor_root, (REGISTRY_PATH, EMITTER_PATH))
    if missing_registry:
        if emit:
            emit_install_error(
                "ADK-I05.E05",
                detail="install error registry or emitter missing",
            )
        return 1, "ADK-I05.E05"

    return 0, None


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Verify lean vendor tree before greenfield install (FR-111)."
    )
    parser.add_argument(
        "--vendor-root",
        required=True,
        help="Path to vendor/ai-dev-kit (lean tree root).",
    )
    parser.add_argument(
        "--tarball",
        type=Path,
        default=None,
        help="Optional release tarball to verify before layout checks.",
    )
    parser.add_argument(
        "--sha256",
        default=None,
        help="Expected SHA256 hex digest for --tarball.",
    )
    parser.add_argument(
        "--quiet",
        action="store_true",
        help="Suppress success message.",
    )
    args = parser.parse_args()

    if (args.tarball is None) ^ (args.sha256 is None):
        print("Both --tarball and --sha256 are required together.", file=sys.stderr)
        return 2

    vendor_root = Path(args.vendor_root).resolve()
    code, _ = run_verify(
        vendor_root,
        tarball=args.tarball,
        sha256=args.sha256,
        emit=True,
    )
    if code == 0 and not args.quiet:
        print(f"Vendor tree OK: {vendor_root}")
    return code


if __name__ == "__main__":
    raise SystemExit(main())
