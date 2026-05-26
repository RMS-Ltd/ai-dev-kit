#!/usr/bin/env python3
"""Validate ECC ↔ ADK bridge YAML (FR-098 Phase 2, E6:S09:T06).

Checks harness_layer structure in ecc-adk-bridge.yaml.template (default) or a
project-root ecc-adk-bridge.yaml (--bridge).

Cross-checks adk_skill_pack_path against validate_adk_ecc_skill_pack canonical path.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Any, List

try:
    import yaml
except ImportError:
    yaml = None

VALID_HOOK_PROFILES = frozenset({"minimal", "standard", "strict"})
VALID_INSTALL_TARGETS = frozenset({"cursor", "claude", "codex", "opencode"})
REQUIRED_CONFLICT_ECC = frozenset({"git-workflow", "plan", "project-flow-ops"})
CANONICAL_SKILL_PACK = "packages/frameworks/workflow mgt/skills/"


def workflow_mgt_dir(project_root: Path) -> Path:
    return project_root / "packages" / "frameworks" / "workflow mgt"


def default_bridge_path(project_root: Path) -> Path:
    return workflow_mgt_dir(project_root) / "config" / "ecc-adk-bridge.yaml.template"


def load_bridge(path: Path) -> tuple[dict | None, List[str]]:
    errs: List[str] = []
    if not path.is_file():
        return None, [f"Bridge file not found: {path}"]
    if yaml is None:
        return None, ["PyYAML required (pip install pyyaml)."]
    try:
        doc = yaml.safe_load(path.read_text(encoding="utf-8", errors="replace"))
    except Exception as exc:
        return None, [f"YAML parse error in {path}: {exc}"]
    if not isinstance(doc, dict):
        return None, [f"Bridge root must be a mapping: {path}"]
    return doc, errs


def _norm_path(p: str) -> str:
    n = p.strip().replace("\\", "/")
    if not n.endswith("/"):
        n += "/"
    return n


def validate_harness_layer(hl: Any, errs: List[str]) -> None:
    if not isinstance(hl, dict):
        errs.append("harness_layer must be a mapping.")
        return
    if hl.get("provider") != "ecc":
        errs.append("harness_layer.provider must be `ecc`.")
    if "enabled" not in hl:
        errs.append("harness_layer.enabled missing (bool).")
    elif not isinstance(hl["enabled"], bool):
        errs.append("harness_layer.enabled must be boolean.")

    pin = hl.get("ecc_version_pin")
    if not isinstance(pin, dict):
        errs.append("harness_layer.ecc_version_pin must be a mapping.")
    else:
        if not pin.get("npm_package") and not pin.get("github_repo"):
            errs.append("ecc_version_pin must include npm_package and/or github_repo.")

    install = hl.get("install")
    if not isinstance(install, dict):
        errs.append("harness_layer.install must be a mapping.")
    else:
        target = install.get("target")
        if not isinstance(target, str) or target.strip() not in VALID_INSTALL_TARGETS:
            errs.append(
                f"install.target must be one of {sorted(VALID_INSTALL_TARGETS)} (got {target!r})."
            )
        profile = install.get("profile")
        if not isinstance(profile, str) or not profile.strip():
            errs.append("install.profile must be a non-empty string (e.g. core or minimal).")
        if install.get("single_install_path") is not True:
            errs.append("install.single_install_path must be true (no stacked install paths).")

    hook_profile = hl.get("hook_profile")
    if not isinstance(hook_profile, str) or hook_profile.strip() not in VALID_HOOK_PROFILES:
        errs.append(
            f"hook_profile must be one of {sorted(VALID_HOOK_PROFILES)} (got {hook_profile!r})."
        )

    disabled = hl.get("disabled_hooks")
    if disabled is not None and not isinstance(disabled, list):
        errs.append("disabled_hooks must be a list when present.")
    elif isinstance(disabled, list):
        for item in disabled:
            if not isinstance(item, str) or not item.strip():
                errs.append("disabled_hooks entries must be non-empty strings.")

    raw_path = hl.get("adk_skill_pack_path")
    if not isinstance(raw_path, str) or not raw_path.strip():
        errs.append("harness_layer.adk_skill_pack_path missing or not a string.")
    elif _norm_path(raw_path) != _norm_path(CANONICAL_SKILL_PACK):
        errs.append(
            f"adk_skill_pack_path must be `{CANONICAL_SKILL_PACK}` (got {raw_path.strip()!r})."
        )

    rules = hl.get("conflict_rules")
    if not isinstance(rules, list) or len(rules) < 3:
        errs.append("conflict_rules must be a non-empty list (minimum ADK conflict set).")
        return
    seen_ecc: set[str] = set()
    for i, rule in enumerate(rules):
        if not isinstance(rule, dict):
            errs.append(f"conflict_rules[{i}] must be a mapping.")
            continue
        ecc = rule.get("ecc")
        if not isinstance(ecc, str) or not ecc.strip():
            errs.append(f"conflict_rules[{i}].ecc missing.")
            continue
        seen_ecc.add(ecc.strip())
        if rule.get("defer_to") and rule.get("disposition"):
            errs.append(f"conflict_rules[{i}]: use defer_to OR disposition, not both.")
        if not rule.get("defer_to") and not rule.get("disposition"):
            errs.append(f"conflict_rules[{i}]: require defer_to or disposition.")

    missing = REQUIRED_CONFLICT_ECC - seen_ecc
    if missing:
        errs.append(f"conflict_rules missing required ECC surfaces: {sorted(missing)}.")

    attr = hl.get("attribution")
    if not isinstance(attr, dict):
        errs.append("harness_layer.attribution must be a mapping.")
    else:
        for key in ("spec", "license", "upstream"):
            if key not in attr or not str(attr[key]).strip():
                errs.append(f"attribution.{key} missing or empty.")


def validate_bridge_file(path: Path) -> List[str]:
    doc, errs = load_bridge(path)
    if doc is None:
        return errs
    validate_harness_layer(doc.get("harness_layer"), errs)
    return errs


def main(argv: List[str]) -> int:
    p = argparse.ArgumentParser(description="Validate ecc-adk-bridge YAML.")
    p.add_argument("--project-root", type=Path, default=None)
    p.add_argument(
        "--bridge",
        type=Path,
        default=None,
        help="Bridge YAML path (default: framework template under project-root).",
    )
    args = p.parse_args(argv)
    root = (args.project_root or Path.cwd()).resolve()
    bridge = args.bridge or default_bridge_path(root)

    if not args.bridge and not workflow_mgt_dir(root).is_dir():
        print(f"ERROR: workflow mgt not found under {root}", file=sys.stderr)
        return 2

    errors = validate_bridge_file(bridge.resolve())
    if errors:
        print("validate_ecc_adk_bridge: FAIL", file=sys.stderr)
        for e in errors:
            print(f"  - {e}", file=sys.stderr)
        return 1
    print("validate_ecc_adk_bridge: PASS")
    print(f"  bridge={bridge.resolve()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
