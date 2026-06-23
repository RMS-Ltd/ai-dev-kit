#!/usr/bin/env python3
"""
Validate FBU intake directory convention (UXR-032 / ADR-032).

Fails in --strict mode when legacy fr-br/ exists or active docs reference it.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
WF_SCRIPTS = SCRIPT_DIR.parent
if str(WF_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(WF_SCRIPTS))

KANBAN_SCRIPTS = SCRIPT_DIR.parent.parent.parent / "kanban" / "scripts"
if str(KANBAN_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(KANBAN_SCRIPTS))

import kanban_paths as kp  # noqa: E402

try:
    from rw_config_loader import load_rw_config
except ImportError:
    load_rw_config = None  # type: ignore

LEGACY_INTAKE_LINK_RE = re.compile(
    r"\]\([^)]*(?:^|/)fr-br/(?:FR|BR|UXR)-|docs/kanban/fr-br/(?:FR|BR|UXR)-"
)
LEGACY_CONFIG_KEY_RE = re.compile(r"^fr_br_root:\s", re.MULTILINE)
SKIP_PARTS = frozenset(
    {
        "changelog-and-release-notes",
        ".rw-step7-snapshots",
        "greenfield-install",
        ".adk",
        ".rw-snapshots",
        ".kanban-snapshots",
    }
)
SKIP_FILES = frozenset(
    {
        "validate_fbu_directory.py",
        "install_release_workflow.py",
        "kanban_paths.py",
        "rename_fbu_directory.py",
        "CHANGELOG.md",
    }
)


def _is_migration_context(line: str) -> bool:
    if "→" in line and ("fr-br" in line or "fr_br_root" in line):
        return True
    if "fr-br/` absent" in line or "not `fr-br/`" in line:
        return True
    if "guard against" in line and "fr-br" in line:
        return True
    return False


def _scan_active_legacy_refs(project_root: Path) -> list[str]:
    violations: list[str] = []
    for path in project_root.rglob("*"):
        if not path.is_file():
            continue
        if path.name in SKIP_FILES:
            continue
        if path.suffix not in {".md", ".yaml", ".py", ".mdc"}:
            continue
        if any(part in path.parts for part in SKIP_PARTS):
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        if path.suffix == ".yaml" and LEGACY_CONFIG_KEY_RE.search(text):
            violations.append(str(path.relative_to(project_root)))
            continue
        for line in text.splitlines():
            if _is_migration_context(line):
                continue
            if LEGACY_INTAKE_LINK_RE.search(line):
                violations.append(str(path.relative_to(project_root)))
                break
    return sorted(set(violations))


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate fbu/ intake directory convention")
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument("--kanban-root", default="docs/kanban")
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args()

    root = args.project_root.resolve()
    kn = args.kanban_root.strip("/")
    legacy_dir = root / kn / kp.LEGACY_FR_BR_SUBDIR
    fbu_dir = root / kn / kp.DEFAULT_FBU_SUBDIR
    errors: list[str] = []

    if legacy_dir.is_dir():
        errors.append(f"Legacy intake directory still present: {legacy_dir.relative_to(root)}")
    if not fbu_dir.is_dir():
        errors.append(f"Canonical intake directory missing: {fbu_dir.relative_to(root)}")

    if args.strict:
        refs = _scan_active_legacy_refs(root)
        if refs:
            preview = refs[:20]
            more = len(refs) - len(preview)
            errors.append(
                f"Active files still reference fr-br/ or fr_br_root ({len(refs)}): "
                + ", ".join(preview)
                + (f" … +{more} more" if more else "")
            )

    if load_rw_config:
        config = load_rw_config(project_root=root)
        if config.get("fr_br_root") and not config.get("fbu_root"):
            errors.append("rw-config.yaml uses deprecated fr_br_root without fbu_root")

    if errors:
        for err in errors:
            print(f"ERROR: {err}", file=sys.stderr)
        return 1

    print("OK: FBU directory convention satisfied")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
