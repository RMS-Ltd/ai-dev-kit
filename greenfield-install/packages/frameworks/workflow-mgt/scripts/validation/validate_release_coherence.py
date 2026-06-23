#!/usr/bin/env python3
"""
RW Step 9 — Release coherence gate (FR-122 F10 / ADR-027).

Verifies version.py, SAA allocator mapping, and README SemVer/internal lines agree
before commit (split-brain detection).

Usage:
  python validate_release_coherence.py [--strict] [--internal-version VER] [--no-check-staged]
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

_validation_dir = Path(__file__).resolve().parent
_version_dir = _validation_dir.parent / "version"
_scripts_dir = _validation_dir.parent
for _p in (_validation_dir, _version_dir, _scripts_dir):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

import semver_converter  # noqa: E402
from rw_config_loader import load_rw_config_or_empty  # noqa: E402

_README_SEMVER_RE = re.compile(
    r"\*\*Version \(SemVer\):\*\*\s*`v?([^`]+)`",
    re.IGNORECASE,
)
_README_INTERNAL_RE = re.compile(
    r"\*\*Internal:\*\*\s*`v?([^`]+)`",
    re.IGNORECASE,
)
_CHANGELOG_ENTRY_RE = re.compile(
    r"^##\s*\[([^\]]+)\]",
    re.MULTILINE,
)
_CHANGELOG_SEMVER_RE = re.compile(r"SemVer\s+\*\*v?([^*\s]+)\*\*", re.IGNORECASE)


def _project_root(start: Path) -> Path:
    current = start.resolve()
    for parent in [current, *current.parents]:
        if (parent / "rw-config.yaml").exists():
            return parent
    return current


def _coherence_config(config: Dict[str, Any]) -> Dict[str, Any]:
    raw = config.get("release_coherence")
    return raw if isinstance(raw, dict) else {}


def _parse_version_file(content: str) -> Optional[str]:
    m = re.search(
        r"VERSION_RC\s*=\s*(\d+).*?VERSION_EPIC\s*=\s*(\d+).*?"
        r"VERSION_STORY\s*=\s*(\d+).*?VERSION_TASK\s*=\s*(\d+).*?"
        r"VERSION_BUILD\s*=\s*(\d+)",
        content,
        re.DOTALL,
    )
    if m:
        return f"{m.group(1)}.{m.group(2)}.{m.group(3)}.{m.group(4)}+{m.group(5)}"
    m2 = re.search(r'VERSION_STRING\s*=\s*["\']([^"\']+)["\']', content)
    return m2.group(1).lstrip("v") if m2 else None


def _read_file_or_staged(root: Path, rel_path: str, *, use_staged: bool) -> Optional[str]:
    if use_staged:
        result = subprocess.run(
            ["git", "show", f":{rel_path}"],
            capture_output=True,
            text=True,
            cwd=root,
        )
        if result.returncode == 0:
            return result.stdout
    path = root / rel_path
    if path.exists():
        return path.read_text(encoding="utf-8")
    return None


def _normalize_semver(text: str) -> str:
    return text.strip().lstrip("v")


def _allocator_semver(root: Path, internal: str) -> Optional[str]:
    """Return core-only SemVer for external-surface coherence checks (ADR-031 Option A)."""
    if semver_converter.get_release_state_backend() != "sqlite":
        return None
    from release_state.allocate import lookup

    db_path = semver_converter.get_release_state_db_path()
    if not db_path.is_absolute():
        db_path = root / db_path
    row = lookup(db_path, internal)
    if not row:
        return None
    return row.semver_core


def validate_release_coherence(
    *,
    project_root: Optional[Path] = None,
    internal_version: Optional[str] = None,
    strict: bool = True,
    check_staged: bool = True,
) -> Tuple[bool, List[str]]:
    root = project_root or _project_root(Path.cwd())
    config = load_rw_config_or_empty(root)
    coherence_cfg = _coherence_config(config)

    if coherence_cfg.get("enabled") is False:
        return True, ["release_coherence: disabled in rw-config.yaml — skip"]

    if semver_converter.get_semver_mapping_strategy() != "task_touch":
        return True, ["release_coherence: skip (not task_touch mode)"]

    version_rel = str(config.get("version_file", "src/fynd_deals/version.py"))
    readme_rel = str(config.get("readme_file", "README.md"))
    changelog_rel = str(config.get("main_changelog", "CHANGELOG.md"))

    version_text = _read_file_or_staged(root, version_rel, use_staged=check_staged)
    if not version_text:
        return False, [f"release_coherence: cannot read version file ({version_rel})"]

    internal = (internal_version or _parse_version_file(version_text) or "").lstrip("v")
    if not internal:
        return False, ["release_coherence: could not parse internal version from version file"]

    errors: List[str] = []
    db_semver = _allocator_semver(root, internal)
    if not db_semver:
        errors.append(
            f"release_coherence: no SAA mapping for internal {internal} "
            "(run finalize_rw_semver_registry.py after version.py write)"
        )
    else:
        version_from_file = _parse_version_file(version_text)
        if version_from_file and version_from_file != internal:
            errors.append(
                f"release_coherence: version file internal mismatch "
                f"{version_from_file!r} vs requested {internal!r}"
            )

    readme_text = _read_file_or_staged(root, readme_rel, use_staged=check_staged)
    if readme_text:
        sm = _README_SEMVER_RE.search(readme_text)
        im = _README_INTERNAL_RE.search(readme_text)
        if not sm:
            errors.append("release_coherence: README missing **Version (SemVer):** line")
        elif db_semver and _normalize_semver(sm.group(1)) != _normalize_semver(db_semver):
            errors.append(
                f"release_coherence: README SemVer v{sm.group(1)} != allocator {db_semver}"
            )
        if not im:
            errors.append("release_coherence: README missing **Internal:** line")
        elif _normalize_semver(im.group(1)) != internal:
            errors.append(
                f"release_coherence: README internal v{im.group(1)} != version.py {internal}"
            )
    elif strict:
        errors.append(f"release_coherence: cannot read README ({readme_rel})")

    changelog_text = _read_file_or_staged(root, changelog_rel, use_staged=check_staged)
    if changelog_text and db_semver:
        entry = _CHANGELOG_ENTRY_RE.search(changelog_text)
        if entry and entry.group(1).lstrip("v") != internal:
            errors.append(
                f"release_coherence: CHANGELOG top entry [{entry.group(1)}] != internal {internal}"
            )
        csm = _CHANGELOG_SEMVER_RE.search(changelog_text)
        if csm and _normalize_semver(csm.group(1)) != _normalize_semver(db_semver):
            errors.append(
                f"release_coherence: CHANGELOG SemVer {csm.group(1)} != allocator {db_semver}"
            )

    if errors and not strict:
        return True, [f"release_coherence: advisory — {e}" for e in errors]

    if errors:
        return False, errors

    lines = [
        "release_coherence: OK",
        f"  internal={internal} semver={db_semver}",
    ]
    return True, lines


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--internal-version", help="Override internal version (no v prefix)")
    parser.add_argument("--strict", action="store_true", default=True)
    parser.add_argument(
        "--no-check-staged",
        action="store_true",
        help="Read working tree files only (not git index)",
    )
    args = parser.parse_args()
    ok, lines = validate_release_coherence(
        internal_version=args.internal_version,
        strict=args.strict,
        check_staged=not args.no_check_staged,
    )
    stream = sys.stdout if ok else sys.stderr
    for line in lines:
        print(line, file=stream)
    if not ok:
        print("FAIL: release coherence gate (FR-122 Step 9)", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
