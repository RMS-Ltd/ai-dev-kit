#!/usr/bin/env python3
"""
ADK package update command v1 (FR-129 / E06:S09:T33).

Check and apply in-place vendor package updates for brownfield adopters.
Does not overwrite host scaffold files (rw-config, kanban, .cursorrules).
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import sys
from pathlib import Path
from typing import List, Optional, Sequence, Tuple

_SCRIPTS_DIR = Path(__file__).resolve().parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from adk_manifest import (  # noqa: E402
    ADOPTER_MARKER,
    ensure_manifest,
    find_adopter_project_root,
    load_manifest,
    package_names,
    resolve_vendor_root,
    save_manifest,
    update_vendor_pins,
    utc_now_iso,
)
from install_receipt import emit_install_receipt, find_adopter_project_root as receipt_root  # noqa: E402

try:
    from verify_vendor_tree import run_verify
except ImportError:
    def run_verify(vendor_root, *, tarball=None, sha256=None, emit=True):  # type: ignore[misc]
        return 0, None

SCAFFOLD_REVIEW_PATHS: Sequence[str] = (
    ".cursorrules",
    "rw-config.yaml",
    "CLAUDE.md",
    "AGENTS.md",
    ".claude/commands/ipw.md",
    ".claude/commands/idw.md",
    ".claude/commands/mwf.md",
)


def normalize_tag(tag: str) -> str:
    value = tag.strip()
    if value.startswith("refs/tags/"):
        value = value.removeprefix("refs/tags/")
    if not value.startswith("v"):
        value = f"v{value}"
    return value


def semver_core_tag(tag: str) -> str:
    """Task-touch SemVer git tag is core only (v0.4.1145), not v0.4.1145+1."""
    normalized = normalize_tag(tag)
    return normalized.split("+", 1)[0]


def tags_match_target(current: Optional[str], target: str) -> bool:
    if not current:
        return False
    cur = normalize_tag(current)
    tgt = normalize_tag(target)
    if cur == tgt:
        return True
    return semver_core_tag(cur) == semver_core_tag(tgt)


def git_checkout_candidates(target_tag: str) -> List[str]:
    """Refs to try for task-touch (core + internal) and legacy exact tags."""
    normalized = normalize_tag(target_tag)
    raw: List[str] = [
        normalized,
        f"tags/{normalized}",
        semver_core_tag(normalized),
        f"tags/{semver_core_tag(normalized)}",
    ]
    seen: set[str] = set()
    out: List[str] = []
    for ref in raw:
        if ref not in seen:
            seen.add(ref)
            out.append(ref)
    return out


def git_vendor_root(vendor_root: Path) -> bool:
    return (vendor_root / ".git").is_dir()


def current_git_tag(vendor_root: Path) -> Optional[str]:
    if not git_vendor_root(vendor_root):
        return None
    for args in (
        ["describe", "--tags", "--exact-match", "HEAD"],
        ["describe", "--tags", "HEAD"],
    ):
        proc = subprocess.run(
            ["git", "-C", str(vendor_root), *args],
            capture_output=True,
            text=True,
            check=False,
        )
        if proc.returncode == 0:
            return normalize_tag(proc.stdout.strip())
    return None


def resolve_project_root(explicit: Optional[Path]) -> Path:
    if explicit is not None:
        return explicit.resolve()
    found = find_adopter_project_root()
    if found is None:
        raise SystemExit(
            f"ERROR: could not locate {ADOPTER_MARKER}; pass --project-root"
        )
    return found


def sync_packages_from_source(
    source_vendor: Path,
    vendor_root: Path,
    packages: Sequence[str],
    *,
    dry_run: bool,
) -> None:
    frameworks_src = source_vendor / "packages" / "frameworks"
    if not frameworks_src.is_dir():
        raise SystemExit(f"ERROR: source missing {frameworks_src}")
    vendor_root.mkdir(parents=True, exist_ok=True)
    for pkg in packages:
        src = frameworks_src / pkg
        dst = vendor_root / "packages" / "frameworks" / pkg
        if not src.is_dir():
            raise SystemExit(f"ERROR: package not found in source: {src}")
        if dry_run:
            print(f"[dry-run] would sync {src} -> {dst}")
            continue
        dst.parent.mkdir(parents=True, exist_ok=True)
        if dst.exists():
            shutil.rmtree(dst)
        shutil.copytree(src, dst)
        print(f"synced {pkg} -> {dst}")


def update_git_vendor(
    vendor_root: Path,
    target_tag: str,
    *,
    dry_run: bool,
) -> Tuple[bool, Optional[str]]:
    """Return (changed, previous_tag)."""
    if not git_vendor_root(vendor_root):
        raise SystemExit(f"ERROR: vendor root is not a git repo: {vendor_root}")
    previous = current_git_tag(vendor_root)
    if tags_match_target(previous, target_tag):
        resolved = previous or semver_core_tag(target_tag)
        print(f"vendor already at {resolved} (target {target_tag})")
        return False, previous
    checkout_ref = git_checkout_candidates(target_tag)[0]
    if dry_run:
        print(
            f"[dry-run] would git checkout {checkout_ref} "
            f"(from {previous or 'unknown'}; target {target_tag})"
        )
        return True, previous
    subprocess.run(
        ["git", "-C", str(vendor_root), "fetch", "--tags"],
        check=True,
    )
    last_stderr = ""
    for ref in git_checkout_candidates(target_tag):
        proc = subprocess.run(
            ["git", "-C", str(vendor_root), "checkout", ref],
            capture_output=True,
            text=True,
            check=False,
        )
        if proc.returncode == 0:
            print(f"checked out {ref} in {vendor_root} (target {target_tag})")
            return True, previous
        last_stderr = proc.stderr.strip()
    raise SystemExit(
        f"ERROR: could not checkout {target_tag} in {vendor_root}\n"
        f"Tried: {', '.join(git_checkout_candidates(target_tag))}\n"
        f"{last_stderr}"
    )


def emit_scaffold_report(
    project_root: Path,
    source_vendor: Optional[Path] = None,
) -> List[str]:
    lines: List[str] = []
    lines.append("Host scaffold review (manual merge recommended):")
    for rel in SCAFFOLD_REVIEW_PATHS:
        host_path = project_root / rel
        if not host_path.is_file():
            continue
        note = "present — review against upstream release"
        if source_vendor is not None:
            upstream = source_vendor / rel
            if upstream.is_file():
                if host_path.read_bytes() != upstream.read_bytes():
                    note = "present — differs from source vendor copy"
                else:
                    note = "present — matches source vendor copy"
        lines.append(f"  - {rel}: {note}")
    if len(lines) == 1:
        lines.append("  (no tracked scaffold files found in project root)")
    for line in lines:
        print(line)
    return lines


def run_check(
    project_root: Path,
    vendor_root: Path,
    target_tag: str,
    manifest: dict,
) -> int:
    vendor_meta = manifest.get("vendor") if isinstance(manifest.get("vendor"), dict) else {}
    pinned = str(vendor_meta.get("pinned_semver") or "")
    channel = str(vendor_meta.get("channel") or "git")
    current = pinned
    if channel == "git" and git_vendor_root(vendor_root):
        current = current_git_tag(vendor_root) or current or "unknown"
    target_core = semver_core_tag(target_tag)
    current_core = semver_core_tag(current) if current and current != "unknown" else current
    print(f"channel:     {channel}")
    print(f"vendor root: {vendor_root}")
    print(f"current:     {current or 'unknown'}")
    print(f"target:      {target_tag}")
    if tags_match_target(current if current != "unknown" else None, target_tag):
        print("status:      up to date")
        return 0
    if current_core == target_core:
        print("status:      up to date")
        return 0
    print("status:      update available")
    return 0


def run_update(
    project_root: Path,
    vendor_root: Path,
    target_tag: str,
    *,
    dry_run: bool,
    source_vendor: Optional[Path],
    packages: Sequence[str],
) -> int:
    manifest = load_manifest(project_root)
    vendor_meta = manifest.get("vendor") if isinstance(manifest.get("vendor"), dict) else {}
    channel = str(vendor_meta.get("channel") or "git")

    if source_vendor is not None:
        channel = "copy-sync"
        sync_packages_from_source(
            source_vendor.resolve(),
            vendor_root,
            packages,
            dry_run=dry_run,
        )
        changed = True
    elif channel == "copy-sync":
        raise SystemExit(
            "ERROR: copy-sync channel requires --source-vendor pointing at fresh vendor tree"
        )
    else:
        changed, _ = update_git_vendor(vendor_root, target_tag, dry_run=dry_run)

    if dry_run:
        emit_scaffold_report(project_root, source_vendor)
        return 0

    if not changed and channel == "git":
        emit_scaffold_report(project_root, source_vendor)
        return 0

    code, _ = run_verify(vendor_root, emit=True)
    if code != 0:
        return code

    updated = update_vendor_pins(
        manifest,
        pinned_semver=semver_core_tag(target_tag),
        pinned_internal=target_tag,
        channel=channel,
    )
    save_manifest(project_root, updated)

    if receipt_root(project_root) == project_root:
        emit_install_receipt(
            project_root=project_root,
            framework_name="ai-dev-kit-vendor",
            version=target_tag,
            source_url=str(vendor_root),
            hash_value=target_tag,
            status="updated",
        )

    emit_scaffold_report(project_root, source_vendor)
    print(f"update complete at {utc_now_iso()}")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Check or apply ADK vendor package updates (FR-129 v1)."
    )
    shared = argparse.ArgumentParser(add_help=False)
    shared.add_argument(
        "--project-root",
        type=Path,
        default=None,
        help=f"Adopter project root (default: walk up for {ADOPTER_MARKER}).",
    )
    shared.add_argument(
        "--vendor-root",
        type=Path,
        default=None,
        help="Override vendor tree path (default: from manifest or vendor/ai-dev-kit).",
    )
    shared.add_argument(
        "--target-tag",
        required=False,
        help="Target SemVer release tag (e.g. v0.4.1144 or v0.4.1144+1).",
    )
    sub = parser.add_subparsers(dest="command", required=True)

    sub.add_parser("check", parents=[shared], help="Report current vs target version.")
    update_p = sub.add_parser(
        "update", parents=[shared], help="Apply vendor package sync."
    )
    update_p.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview actions without writing.",
    )
    update_p.add_argument(
        "--source-vendor",
        type=Path,
        default=None,
        help="Fresh vendor tree for copy-sync (CI/fixture path).",
    )

    init_p = sub.add_parser(
        "init-manifest",
        parents=[shared],
        help="Bootstrap .ai-dev-kit.yaml vendor block.",
    )
    init_p.add_argument(
        "--channel",
        default="git",
        choices=("git", "copy-sync"),
        help="Acquisition channel recorded in manifest.",
    )
    return parser


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    project_root = resolve_project_root(args.project_root)
    if args.command == "init-manifest":
        vendor_rel = args.vendor_root or Path("vendor/ai-dev-kit")
        if args.vendor_root and args.vendor_root.is_absolute():
            vendor_rel = args.vendor_root.relative_to(project_root)
        pinned = ""
        if args.target_tag:
            pinned = normalize_tag(args.target_tag)
        elif args.vendor_root and Path(args.vendor_root).is_dir():
            pinned = current_git_tag(Path(args.vendor_root).resolve()) or ""
        ensure_manifest(
            project_root,
            vendor_root=str(vendor_rel),
            channel=args.channel,
            pinned_semver=pinned,
        )
        print(f"manifest initialized at {project_root / ADOPTER_MARKER}")
        return 0

    if not args.target_tag:
        parser.error("--target-tag is required for check/update")

    target_tag = normalize_tag(args.target_tag)
    manifest_path = project_root / ADOPTER_MARKER
    if not manifest_path.is_file():
        ensure_manifest(project_root, pinned_semver=target_tag, channel="git")

    manifest = load_manifest(project_root)
    vendor_root = (
        args.vendor_root.resolve()
        if args.vendor_root is not None
        else resolve_vendor_root(project_root, manifest)
    )
    packages = package_names(manifest)

    if args.command == "check":
        return run_check(project_root, vendor_root, target_tag, manifest)

    if args.command == "update":
        return run_update(
            project_root,
            vendor_root,
            target_tag,
            dry_run=getattr(args, "dry_run", False),
            source_vendor=getattr(args, "source_vendor", None),
            packages=packages,
        )

    parser.error(f"unknown command: {args.command}")
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
