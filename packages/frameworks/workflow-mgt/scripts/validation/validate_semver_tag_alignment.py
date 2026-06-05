#!/usr/bin/env python3
"""
Validate SemVer Tag Alignment (1:1 mapping)

Checks that the SemVer tag for the current release points to the same commit on the
remote as the current release commit. If the SemVer tag already exists on the remote
but points to a different commit, validation fails (BR-097 — never force-push; re-RW).

Intended for use before or during RW Step 12 (Push). Can be run after Step 11 (Create
tags) to detect violations before push.

Usage:
    python validate_semver_tag_alignment.py [--remote origin] [--release-commit REF]

    --remote: Remote name (default: origin)
    --release-commit: Git ref for the release commit (default: HEAD)
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path

# Add version scripts to path
scripts_dir = Path(__file__).parent.parent
version_dir = scripts_dir / "version"
if str(version_dir) not in sys.path:
    sys.path.insert(0, str(version_dir))

try:
    from semver_converter import get_rw_tag_info, get_semver_mapping_strategy
except ImportError:
    get_rw_tag_info = None
    get_semver_mapping_strategy = None

try:
    import yaml
except ImportError:
    yaml = None

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import load_rw_config  # noqa: E402


def load_internal_version(project_root: Path) -> str:
    """Read internal version from version file (VERSION_STRING). Uses rw-config if present."""
    config = load_rw_config(project_root)
    version_file = project_root / (config.get("version_file") if config else "src/fynd_deals/version.py")
    if not isinstance(version_file, Path):
        version_file = project_root / version_file
    if not version_file.exists():
        return None
    try:
        import importlib.util
        spec = importlib.util.spec_from_file_location("version", version_file)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)
        return getattr(mod, "VERSION_STRING", None)
    except Exception:
        pass
    content = version_file.read_text(encoding="utf-8")
    m = re.search(r"VERSION_RC\s*=\s*(\d+).*?VERSION_EPIC\s*=\s*(\d+).*?VERSION_STORY\s*=\s*(\d+).*?VERSION_TASK\s*=\s*(\d+).*?VERSION_BUILD\s*=\s*(\d+)", content, re.DOTALL)
    if m:
        return f"{m.group(1)}.{m.group(2)}.{m.group(3)}.{m.group(4)}+{m.group(5)}"
    return None


def get_commit_for_ref(ref: str, project_root: Path) -> str:
    """Resolve a ref (e.g. HEAD, v0.5.1.39+2) to a commit hash."""
    result = subprocess.run(
        ["git", "rev-parse", ref + "^{commit}"],
        capture_output=True,
        text=True,
        cwd=project_root,
    )
    if result.returncode != 0:
        return None
    return result.stdout.strip()


def get_remote_tag_commit(remote: str, tag: str, project_root: Path) -> str:
    """Get the commit the remote tag points to (peel annotated tags). Requires network to fetch."""
    result = subprocess.run(
        ["git", "ls-remote", remote, f"refs/tags/{tag}"],
        capture_output=True,
        text=True,
        cwd=project_root,
    )
    if result.returncode != 0 or not result.stdout.strip():
        return None
    temp_ref = f"refs/tags/_align_check_{tag.replace('+', '_')}"
    subprocess.run(
        ["git", "fetch", remote, f"refs/tags/{tag}:{temp_ref}", "--depth=1"],
        capture_output=True,
        cwd=project_root,
    )
    peel = subprocess.run(
        ["git", "rev-parse", temp_ref + "^{commit}"],
        capture_output=True,
        text=True,
        cwd=project_root,
    )
    subprocess.run(["git", "update-ref", "-d", temp_ref], capture_output=True, cwd=project_root)
    if peel.returncode == 0:
        return peel.stdout.strip()
    return None


def validate_semver_tag_alignment(
    remote: str = "origin",
    release_commit_ref: str = "HEAD",
    project_root: Path = None,
) -> bool:
    """
    Validate that the SemVer tag on the remote points to the same commit as the release.

    Returns True if OK (tag missing on remote, or tag points to release_commit).
    Returns False if tag exists on remote and points to a different commit.
    """
    if project_root is None:
        project_root = Path.cwd()
    if get_rw_tag_info is None:
        print("⚠️  Cannot import semver_converter; skipping SemVer tag alignment check.", file=sys.stderr)
        return True
    internal = load_internal_version(project_root)
    if not internal:
        print("⚠️  No internal version found; skipping SemVer tag alignment check.", file=sys.stderr)
        return True
    try:
        tag_info = get_rw_tag_info(internal, finalize=False)
        semver_tag = tag_info["primary_tag"]
    except Exception as e:
        print(f"⚠️  SemVer tag resolution failed: {e}; skipping alignment check.", file=sys.stderr)
        return True
    release_commit = get_commit_for_ref(release_commit_ref, project_root)
    if not release_commit:
        print(f"⚠️  Could not resolve release commit ref: {release_commit_ref}", file=sys.stderr)
        return True
    remote_commit = get_remote_tag_commit(remote, semver_tag, project_root)
    if remote_commit is None:
        return True
    if remote_commit == release_commit:
        return True
    strategy = get_semver_mapping_strategy() if get_semver_mapping_strategy else "registry"
    print(
        f"❌ SemVer tag {semver_tag} already exists on {remote} and points to commit {remote_commit}; "
        f"current release is at {release_commit}.",
        file=sys.stderr,
    )
    if strategy == "task_touch":
        print(
            "   Recovery (task_touch): finalize semver-registry if missing; "
            "otherwise re-RW with BUILD+1 (new SemVer PATCH / primary tag). "
            "Never force-push release tags (BR-097).",
            file=sys.stderr,
        )
    else:
        print(
            "   Recovery: run resolve_rw_build.py and re-RW (BUILD+1). "
            "Never force-push release tags (BR-097).",
            file=sys.stderr,
        )
    return False


def main():
    parser = argparse.ArgumentParser(description="Validate SemVer tag alignment (1:1 with release commit)")
    parser.add_argument("--remote", default="origin", help="Remote name")
    parser.add_argument("--release-commit", default="HEAD", help="Git ref for the release commit")
    args = parser.parse_args()
    project_root = Path.cwd()
    ok = validate_semver_tag_alignment(
        remote=args.remote,
        release_commit_ref=args.release_commit,
        project_root=project_root,
    )
    if ok:
        print("✅ SemVer tag alignment OK")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
