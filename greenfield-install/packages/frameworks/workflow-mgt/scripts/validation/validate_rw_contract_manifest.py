#!/usr/bin/env python3
"""
Validate rw-contract.yaml machine manifest (FR-122 Wave 4 / C-NF1).

Checks structure, gate script paths, and parity with canonical-rw-steps preflight_gates.

Usage:
  python validate_rw_contract_manifest.py [--strict]
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Any, Dict, List, Tuple

try:
    import yaml
except ImportError:
    yaml = None  # type: ignore

_PKG_ROOT = Path(__file__).resolve().parents[2]


def _load_yaml(path: Path) -> Dict[str, Any]:
    if yaml is None:
        raise RuntimeError("PyYAML required for validate_rw_contract_manifest")
    with open(path, encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return data if isinstance(data, dict) else {}


def validate_rw_contract_manifest(
    *,
    pkg_root: Path = _PKG_ROOT,
    strict: bool = False,
) -> Tuple[bool, List[str]]:
    lines: List[str] = []
    errors: List[str] = []

    manifest_path = pkg_root / "rw-contract.yaml"
    steps_path = pkg_root / "canonical-rw-steps.yaml"

    if not manifest_path.exists():
        errors.append(f"rw_contract_manifest: missing {manifest_path}")
        return False, errors

    manifest = _load_yaml(manifest_path)
    contract = manifest.get("contract") or {}
    if not contract.get("id"):
        errors.append("rw_contract_manifest: contract.id required")
    if not contract.get("steps_ref"):
        errors.append("rw_contract_manifest: contract.steps_ref required")

    gates = manifest.get("gates")
    if not isinstance(gates, list) or not gates:
        errors.append("rw_contract_manifest: gates[] required and non-empty")
    else:
        for gate in gates:
            gid = gate.get("id", "?")
            script = gate.get("script")
            if script:
                rel = script.lstrip("/")
                full = pkg_root / rel
                if not full.exists():
                    errors.append(f"rw_contract_manifest: gate {gid} script missing: {rel}")

    if steps_path.exists():
        steps_doc = _load_yaml(steps_path)
        preflight = steps_doc.get("preflight_gates") or {}
        manifest_preflight = {
            g.get("id")
            for g in (gates or [])
            if isinstance(g, dict) and str(g.get("step", "")).startswith("1")
        }
        for key in ("step_1b", "step_1c", "step_1d", "step_1e", "step_1f"):
            if key not in preflight:
                errors.append(f"rw_contract_manifest: canonical-rw-steps missing {key}")
            step_id = key.replace("step_", "")
            if step_id not in manifest_preflight and key not in manifest_preflight:
                # manifest uses step_1e style ids
                if key not in {g.get("id") for g in (gates or []) if isinstance(g, dict)}:
                    errors.append(f"rw_contract_manifest: gates missing {key}")

    clauses = manifest.get("clauses") or {}
    if "C-NF1" not in clauses:
        errors.append("rw_contract_manifest: clauses.C-NF1 required")

    if errors:
        return False, errors

    lines.append("rw_contract_manifest: OK")
    lines.append(f"  contract={contract.get('id')} v{contract.get('version')}")
    lines.append(f"  gates={len(gates or [])} clauses={len(clauses)}")
    return True, lines


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args()

    ok, lines = validate_rw_contract_manifest(strict=args.strict)
    stream = sys.stdout if ok else sys.stderr
    for line in lines:
        print(line, file=stream)
    if not ok:
        print("FAIL: rw contract manifest validation (FR-122 Wave 4)", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
