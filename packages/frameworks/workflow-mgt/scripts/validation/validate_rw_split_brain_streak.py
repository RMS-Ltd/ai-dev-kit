#!/usr/bin/env python3
"""
RW split-brain streak auditor (FR-122 Wave 8 / E02:S01:T30 T10).

Walks recent internal release tags on the current branch and verifies each
release commit would pass release-coherence checks (version.py, README, SAA DB).

Usage:
  python validate_rw_split_brain_streak.py [--min-streak 10] [--limit 15] [--strict]
"""

from __future__ import annotations

import argparse
import json
import re
import sqlite3
import subprocess
import sys
import tempfile
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

_validation_dir = Path(__file__).resolve().parent
_version_dir = _validation_dir.parent / "version"
_scripts_dir = _validation_dir.parent
for _p in (_validation_dir, _version_dir, _scripts_dir):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from rw_config_loader import load_rw_config_or_empty  # noqa: E402
from validate_release_coherence import (  # noqa: E402
    _CHANGELOG_ENTRY_RE,
    _CHANGELOG_SEMVER_RE,
    _README_INTERNAL_RE,
    _README_SEMVER_RE,
    _normalize_semver,
    _parse_version_file,
    _project_root,
)

_INTERNAL_TAG_RE = re.compile(r"^v(\d+\.\d+\.\d+\.\d+\+\d+)$")


@dataclass
class ReleaseAudit:
    tag: str
    internal: str
    commit: str
    ok: bool
    errors: List[str]
    semver: Optional[str] = None


def _streak_config(config: Dict[str, Any]) -> Dict[str, Any]:
    raw = config.get("split_brain_streak")
    return raw if isinstance(raw, dict) else {}


def list_internal_release_tags(
    root: Path,
    *,
    limit: int,
) -> List[str]:
    result = subprocess.run(
        ["git", "tag", "-l", "v*+*", "--sort=-creatordate"],
        cwd=root,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return []
    tags: List[str] = []
    for line in result.stdout.splitlines():
        tag = line.strip()
        if _INTERNAL_TAG_RE.match(tag):
            tags.append(tag)
        if len(tags) >= limit:
            break
    return tags


def _git_show(root: Path, ref: str, rel_path: str) -> Optional[str]:
    result = subprocess.run(
        ["git", "show", f"{ref}:{rel_path}"],
        cwd=root,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None
    return result.stdout


def _git_rev_parse(root: Path, ref: str) -> Optional[str]:
    result = subprocess.run(
        ["git", "rev-parse", ref],
        cwd=root,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None
    return result.stdout.strip()


def _lookup_semver_at_commit(
    root: Path,
    commit: str,
    db_rel: str,
    internal: str,
) -> Optional[str]:
    blob = subprocess.run(
        ["git", "show", f"{commit}:{db_rel}"],
        cwd=root,
        capture_output=True,
        check=False,
    )
    if blob.returncode != 0 or not blob.stdout:
        return None
    with tempfile.NamedTemporaryFile(suffix=".db", delete=False) as tmp:
        tmp.write(blob.stdout)
        tmp_path = Path(tmp.name)
    try:
        conn = sqlite3.connect(tmp_path)
        conn.row_factory = sqlite3.Row
        row = conn.execute(
            """
            SELECT semver_full FROM task_touch_mapping
            WHERE internal_version = ?
            """,
            (internal,),
        ).fetchone()
        conn.close()
        return str(row["semver_full"]) if row else None
    finally:
        tmp_path.unlink(missing_ok=True)


def audit_release_at_tag(
    root: Path,
    tag: str,
    *,
    version_rel: str,
    readme_rel: str,
    changelog_rel: str,
    db_rel: str,
) -> ReleaseAudit:
    internal = tag.lstrip("v")
    commit = _git_rev_parse(root, tag) or ""
    errors: List[str] = []

    version_text = _git_show(root, tag, version_rel)
    if not version_text:
        errors.append(f"missing {version_rel} at tag")
    else:
        parsed = _parse_version_file(version_text)
        if not parsed:
            errors.append("could not parse version.py")
        elif parsed != internal:
            errors.append(f"version.py {parsed!r} != tag {internal!r}")

    db_semver = _lookup_semver_at_commit(root, tag, db_rel, internal) if commit else None
    if not db_semver:
        errors.append(f"no SAA mapping for {internal} at tag commit")

    readme_text = _git_show(root, tag, readme_rel)
    if not readme_text:
        errors.append(f"missing {readme_rel} at tag")
    else:
        sm = _README_SEMVER_RE.search(readme_text)
        im = _README_INTERNAL_RE.search(readme_text)
        if not sm:
            errors.append("README missing SemVer line")
        elif db_semver and _normalize_semver(sm.group(1)) != _normalize_semver(db_semver):
            errors.append(f"README SemVer {sm.group(1)} != DB {db_semver}")
        if not im:
            errors.append("README missing Internal line")
        elif _normalize_semver(im.group(1)) != internal:
            errors.append(f"README internal {im.group(1)} != {internal}")

    changelog_text = _git_show(root, tag, changelog_rel)
    if changelog_text and db_semver:
        entry = _CHANGELOG_ENTRY_RE.search(changelog_text)
        if entry and entry.group(1).lstrip("v") != internal:
            errors.append(f"CHANGELOG top [{entry.group(1)}] != {internal}")
        csm = _CHANGELOG_SEMVER_RE.search(changelog_text)
        if csm and _normalize_semver(csm.group(1)) != _normalize_semver(db_semver):
            errors.append(f"CHANGELOG SemVer {csm.group(1)} != DB {db_semver}")

    return ReleaseAudit(
        tag=tag,
        internal=internal,
        commit=commit[:8],
        ok=not errors,
        errors=errors,
        semver=db_semver,
    )


def compute_streak(audits: List[ReleaseAudit]) -> int:
    streak = 0
    for audit in audits:
        if audit.ok:
            streak += 1
        else:
            break
    return streak


def validate_rw_split_brain_streak(
    *,
    project_root: Optional[Path] = None,
    min_streak: int = 10,
    limit: int = 15,
    strict: bool = False,
) -> Tuple[bool, Dict[str, Any]]:
    root = project_root or _project_root(Path.cwd())
    config = load_rw_config_or_empty(root)
    cfg = _streak_config(config)
    if cfg.get("enabled") is False:
        return True, {"skipped": True, "reason": "disabled in rw-config"}

    min_streak = int(cfg.get("min_streak", min_streak))
    limit = int(cfg.get("limit", limit))

    version_rel = str(config.get("version_file", "src/fynd_deals/version.py"))
    readme_rel = str(config.get("readme_file", "README.md"))
    changelog_rel = str(config.get("main_changelog", "CHANGELOG.md"))
    db_rel = str(config.get("release_state_db", ".adk/release-state.db"))

    tags = list_internal_release_tags(root, limit=limit)
    audits = [
        audit_release_at_tag(
            root,
            tag,
            version_rel=version_rel,
            readme_rel=readme_rel,
            changelog_rel=changelog_rel,
            db_rel=db_rel,
        )
        for tag in tags
    ]
    streak = compute_streak(audits)
    payload = {
        "min_streak": min_streak,
        "audited_tags": len(audits),
        "current_streak": streak,
        "target_met": streak >= min_streak,
        "audits": [asdict(a) for a in audits],
    }
    if strict and streak < min_streak:
        return False, payload
    return True, payload


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--min-streak", type=int, default=10)
    parser.add_argument("--limit", type=int, default=15)
    parser.add_argument("--strict", action="store_true")
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    ok, payload = validate_rw_split_brain_streak(
        min_streak=args.min_streak,
        limit=args.limit,
        strict=args.strict,
    )
    if args.json:
        print(json.dumps(payload, indent=2))
    else:
        print(f"split_brain_streak: {payload['current_streak']}/{payload['min_streak']} "
              f"(audited {payload['audited_tags']} tags)")
        for audit in payload.get("audits", []):
            mark = "OK" if audit["ok"] else "FAIL"
            print(f"  [{mark}] {audit['tag']} @{audit['commit']} semver={audit.get('semver')}")
            for err in audit.get("errors", []):
                print(f"       - {err}")
        if not payload.get("target_met"):
            print(f"NOTE: target {payload['min_streak']} consecutive coherent releases not yet met")

    if not ok:
        print("FAIL: split-brain streak below minimum (FR-122 AC4)", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
