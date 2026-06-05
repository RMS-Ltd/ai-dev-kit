#!/usr/bin/env python3
"""
RW Step 12: push branch + release-scoped tags only.

NEVER use ``git push origin {branch} --tags`` — that pushes *every* local tag.
Stale or divergent local SemVer tags (task-touch mode) then fail against remote
even when the new release tag and branch are valid (BR-097 / RW hygiene).

Usage:
  python push_rw_release.py --branch epic/2-foo --internal-version 0.2.1.6+2
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path
from typing import List, Optional, Sequence, Tuple

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from semver_converter import get_rw_tag_info  # noqa: E402
from tag_collision_recovery import format_tag_collision_recovery  # noqa: E402


def release_tag_names(internal_version: str) -> List[str]:
    """Tag names (no refs/tags/ prefix) for this RW release."""
    info = get_rw_tag_info(internal_version, finalize=False)
    names: List[str] = [info["primary_tag"]]
    internal = info.get("internal_tag")
    if internal and internal not in names:
        names.append(internal)
    return names


def _run_git(args: Sequence[str], *, cwd: Optional[Path] = None) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", *args],
        capture_output=True,
        text=True,
        check=False,
        cwd=cwd,
    )


def remote_tag_sha(remote: str, tag: str) -> Optional[str]:
    result = _run_git(["ls-remote", remote, f"refs/tags/{tag}"])
    if result.returncode != 0 or not result.stdout.strip():
        return None
    line = result.stdout.strip().splitlines()[0]
    sha = line.split()[0]
    if sha.endswith("^{}"):
        sha = sha[:-3]
    # Peel annotated tag to commit when possible
    peel = _run_git(["ls-remote", remote, f"refs/tags/{tag}^{{}}"])
    if peel.returncode == 0 and peel.stdout.strip():
        return peel.stdout.strip().split()[0]
    return sha


def local_tag_commit(tag: str) -> Optional[str]:
    result = _run_git(["rev-parse", f"refs/tags/{tag}^{{}}"])
    if result.returncode == 0:
        return result.stdout.strip()
    result = _run_git(["rev-parse", f"refs/tags/{tag}"])
    if result.returncode == 0:
        return result.stdout.strip()
    return None


def push_branch(remote: str, branch: str, *, dry_run: bool) -> Tuple[bool, str]:
    ref = f"refs/heads/{branch}"
    cmd = ["push", remote, branch]
    if dry_run:
        return True, f"dry-run: git push {remote} {branch}"
    result = _run_git(cmd)
    if result.returncode == 0:
        return True, result.stdout.strip() or f"pushed {ref}"
    return False, (result.stderr or result.stdout or "branch push failed").strip()


def push_tag(
    remote: str,
    tag: str,
    *,
    dry_run: bool,
    strategy: str = "registry",
    internal_version: str = "",
    is_primary: bool = True,
) -> Tuple[bool, str]:
    local_sha = local_tag_commit(tag)
    if not local_sha:
        return False, f"local tag missing: {tag}"

    remote_sha = remote_tag_sha(remote, tag)
    if remote_sha:
        if remote_sha == local_sha:
            return True, f"skipped {tag} (already on remote at {local_sha[:8]})"
        recovery = format_tag_collision_recovery(
            tag,
            strategy=strategy,
            is_primary=is_primary,
            internal_version=internal_version,
        )
        return (
            False,
            f"BR-097: remote tag {tag} exists at {remote_sha[:8]} but local points to "
            f"{local_sha[:8]} — {recovery}",
        )

    if dry_run:
        return True, f"dry-run: git push {remote} refs/tags/{tag}"

    result = _run_git(["push", remote, f"refs/tags/{tag}"])
    if result.returncode == 0:
        return True, f"pushed refs/tags/{tag}"
    msg = (result.stderr or result.stdout or "").strip()
    if "already exists" in msg.lower():
        remote_sha = remote_tag_sha(remote, tag)
        if remote_sha == local_sha:
            return True, f"skipped {tag} (already on remote)"
        return False, f"BR-097: tag push rejected for {tag}: {msg}"
    return False, msg or f"failed to push refs/tags/{tag}"


def push_rw_release(
    branch: str,
    internal_version: str,
    *,
    remote: str = "origin",
    dry_run: bool = False,
) -> int:
    tag_info = get_rw_tag_info(internal_version, finalize=False)
    strategy = tag_info.get("strategy", "registry")
    primary_tag = tag_info.get("primary_tag")
    tags = release_tag_names(internal_version)
    print(f"RW push: branch={branch!r} internal={internal_version!r} tags={tags}")

    ok, msg = push_branch(remote, branch, dry_run=dry_run)
    print(f"  branch: {'OK' if ok else 'FAIL'} — {msg}")
    if not ok:
        return 1

    errors = 0
    for tag in tags:
        tok, tmsg = push_tag(
            remote,
            tag,
            dry_run=dry_run,
            strategy=strategy,
            internal_version=internal_version,
            is_primary=(tag == primary_tag),
        )
        print(f"  tag {tag}: {'OK' if tok else 'FAIL'} — {tmsg}")
        if not tok:
            errors += 1

    if errors:
        if strategy == "task_touch":
            print(
                "\nHint (task_touch): SemVer primary tags omit BUILD — "
                "re-RW with BUILD+1 allocates a new PATCH / new vX.Y.Z tag. "
                "Never `git push --force` release tags.",
                file=sys.stderr,
            )
        else:
            print(
                "\nHint: divergent release tags — run resolve_rw_build.py and re-RW (BUILD+1). "
                "Never force-push release tags.",
                file=sys.stderr,
            )
        return 1

    print("RW push complete (release-scoped tags only; did not use --tags).")
    return 0


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = argparse.ArgumentParser(
        description="Push RW branch and release-scoped tags only (never git push --tags)."
    )
    parser.add_argument("--branch", required=True, help="Branch to push (e.g. epic/2-foo)")
    parser.add_argument(
        "--internal-version",
        required=True,
        help="Internal version without v prefix (e.g. 0.2.11.13+3)",
    )
    parser.add_argument("--remote", default="origin", help="Git remote (default: origin)")
    parser.add_argument("--dry-run", action="store_true", help="Print actions only")
    args = parser.parse_args(argv)

    version = args.internal_version.lstrip("v")
    return push_rw_release(
        args.branch,
        version,
        remote=args.remote,
        dry_run=args.dry_run,
    )


if __name__ == "__main__":
    raise SystemExit(main())
