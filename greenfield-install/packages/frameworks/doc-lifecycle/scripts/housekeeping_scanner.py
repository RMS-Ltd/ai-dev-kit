#!/usr/bin/env python3
"""
Expired-document scanner with reference-aware housekeeping planning and execution.

Usage:
    python scripts/housekeeping_scanner.py --scan --root docs/
    python scripts/housekeeping_scanner.py --filter-expired --root docs/
    python scripts/housekeeping_scanner.py --analyze-references --root docs/ --changelog CHANGELOG.md
    python scripts/housekeeping_scanner.py --plan --root docs/ [--changelog CHANGELOG.md]
    python scripts/housekeeping_scanner.py --execute --root docs/ --confirm [--archive-dir docs/Archive]
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from dataclasses import asdict, dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Set

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from _frontmatter_utils import (  # noqa: E402
    ParsedDocument,
    iter_markdown_documents,
    load_document,
    parse_iso_datetime,
)

LINK_PATTERN = re.compile(r"\[[^\]]*\]\(([^)]+)\)")


@dataclass
class ActionPlan:
    path: str
    lifecycle: str
    housekeeping_policy: str
    action: str
    reason: str
    references: List[str] = field(default_factory=list)


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


def _json_value(value: Any) -> Any:
    parsed = parse_iso_datetime(value)
    if parsed is not None and value is not None:
        return parsed.isoformat().replace("+00:00", "Z")
    return value


def document_inventory(root: Path) -> List[Dict[str, Any]]:
    inventory: List[Dict[str, Any]] = []
    for path in iter_markdown_documents(root):
        doc = load_document(path, root)
        inventory.append(
            {
                "path": doc.relative_path,
                "lifecycle": doc.metadata.get("lifecycle"),
                "ttl_days": doc.metadata.get("ttl_days"),
                "expires_at": _json_value(doc.metadata.get("expires_at")),
                "housekeeping_policy": doc.metadata.get("housekeeping_policy"),
            }
        )
    return inventory


def is_expired(metadata: Dict[str, Any], now: Optional[datetime] = None) -> bool:
    lifecycle = metadata.get("lifecycle")
    if lifecycle not in {"timeboxed", "transient"}:
        return False
    expires_at = parse_iso_datetime(metadata.get("expires_at"))
    if expires_at is None:
        return False
    current = now or utc_now()
    return expires_at <= current


def filter_expired(root: Path, now: Optional[datetime] = None) -> List[ParsedDocument]:
    expired: List[ParsedDocument] = []
    for path in iter_markdown_documents(root):
        doc = load_document(path, root)
        if is_expired(doc.metadata, now=now):
            expired.append(doc)
    return expired


def _normalize_reference(token: str, source_dir: Path, root: Path) -> Optional[str]:
    token = token.strip()
    if not token or token.startswith(("http://", "https://", "mailto:", "#")):
        return None
    if token.startswith("/"):
        candidate = (root / token.lstrip("/")).resolve()
    else:
        candidate = (source_dir / token).resolve()
    try:
        rel = candidate.relative_to(root.resolve())
    except ValueError:
        return None
    return str(rel)


def collect_markdown_references(content: str, source_path: Path, root: Path) -> Set[str]:
    refs: Set[str] = set()
    source_dir = source_path.parent
    for match in LINK_PATTERN.finditer(content):
        normalized = _normalize_reference(match.group(1), source_dir, root)
        if normalized:
            refs.add(normalized)
    for token in re.findall(r"`([^`]+\.md)`", content):
        normalized = _normalize_reference(token, source_dir, root)
        if normalized:
            refs.add(normalized)
    return refs


def find_references(
    target: ParsedDocument,
    root: Path,
    changelog_path: Optional[Path] = None,
) -> List[str]:
    references: List[str] = []
    target_token = target.relative_path
    target_name = target.path.name

    for path in iter_markdown_documents(root):
        if path == target.path:
            continue
        doc = load_document(path, root)
        refs = collect_markdown_references(doc.body, path, root)
        if target_token in refs or target_name in doc.body:
            if doc.metadata.get("lifecycle") == "evergreen":
                references.append(f"evergreen:{doc.relative_path}")

    if changelog_path and changelog_path.is_file():
        changelog_text = changelog_path.read_text(encoding="utf-8")
        if target_token in changelog_text or target_name in changelog_text:
            references.append(f"changelog:{changelog_path}")

    return references


def determine_action(
    doc: ParsedDocument,
    references: List[str],
) -> ActionPlan:
    policy = str(doc.metadata.get("housekeeping_policy") or "archive")
    lifecycle = str(doc.metadata.get("lifecycle") or "unknown")
    if references:
        return ActionPlan(
            path=doc.relative_path,
            lifecycle=lifecycle,
            housekeeping_policy=policy,
            action="archive",
            reason="protected by references (auto-upgrade from delete)",
            references=references,
        )
    if policy == "delete":
        return ActionPlan(
            path=doc.relative_path,
            lifecycle=lifecycle,
            housekeeping_policy=policy,
            action="delete",
            reason="expired transient/timeboxed with delete policy and no references",
            references=[],
        )
    return ActionPlan(
        path=doc.relative_path,
        lifecycle=lifecycle,
        housekeeping_policy=policy,
        action="archive",
        reason="expired with archive policy",
        references=[],
    )


def build_plan(
    root: Path,
    changelog_path: Optional[Path] = None,
    now: Optional[datetime] = None,
) -> List[ActionPlan]:
    plans: List[ActionPlan] = []
    for doc in filter_expired(root, now=now):
        refs = find_references(doc, root, changelog_path)
        plans.append(determine_action(doc, refs))
    return plans


def execute_plan(
    root: Path,
    plans: List[ActionPlan],
    archive_dir: Path,
) -> List[Dict[str, Any]]:
    results: List[Dict[str, Any]] = []
    for plan in plans:
        source = root / plan.path
        if not source.is_file():
            results.append({"path": plan.path, "status": "missing", "action": plan.action})
            continue
        if plan.action == "skip":
            results.append({"path": plan.path, "status": "skipped", "action": plan.action})
            continue
        if plan.action == "delete":
            source.unlink()
            results.append({"path": plan.path, "status": "deleted", "action": plan.action})
            continue
        destination = archive_dir / plan.path
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(source), str(destination))
        results.append(
            {
                "path": plan.path,
                "status": "archived",
                "action": plan.action,
                "destination": str(destination.relative_to(archive_dir.parent)),
            }
        )
    return results


def print_plan_report(plans: List[ActionPlan]) -> None:
    payload = {
        "generated_at": utc_now().isoformat().replace("+00:00", "Z"),
        "count": len(plans),
        "actions": [asdict(plan) for plan in plans],
    }
    print(json.dumps(payload, indent=2))
    print("\nHuman-readable plan:")
    for plan in plans:
        print(f"- {plan.path}: {plan.action} ({plan.reason})")


def main(argv: List[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Document lifecycle housekeeping scanner")
    parser.add_argument("--root", required=True, help="Docs root directory")
    parser.add_argument("--changelog", default="CHANGELOG.md", help="Main changelog path")
    parser.add_argument("--archive-dir", default="docs/Archive", help="Archive destination root")
    parser.add_argument("--scan", action="store_true", help="Emit document inventory")
    parser.add_argument("--filter-expired", action="store_true", help="List expired documents")
    parser.add_argument(
        "--analyze-references", action="store_true", help="Analyze references for expired docs"
    )
    parser.add_argument("--plan", action="store_true", help="Dry-run housekeeping action plan")
    parser.add_argument("--execute", action="store_true", help="Execute planned actions")
    parser.add_argument(
        "--confirm",
        action="store_true",
        help="Required with --execute to apply filesystem mutations",
    )
    args = parser.parse_args(argv)

    root = Path(args.root)
    if not root.is_dir():
        print(f"ERROR: docs root not found: {root}", file=sys.stderr)
        return 2

    changelog_path = Path(args.changelog)
    mode_count = sum(
        1
        for flag in (
            args.scan,
            args.filter_expired,
            args.analyze_references,
            args.plan,
            args.execute,
        )
        if flag
    )
    if mode_count != 1:
        print(
            "ERROR: specify exactly one mode: --scan, --filter-expired, "
            "--analyze-references, --plan, or --execute",
            file=sys.stderr,
        )
        return 2

    if args.scan:
        print(json.dumps({"documents": document_inventory(root)}, indent=2))
        return 0

    if args.filter_expired:
        expired = filter_expired(root)
        print(
            json.dumps(
                {
                    "expired": [
                        {
                            "path": doc.relative_path,
                            "expires_at": _json_value(doc.metadata.get("expires_at")),
                            "housekeeping_policy": doc.metadata.get("housekeeping_policy"),
                        }
                        for doc in expired
                    ]
                },
                indent=2,
            )
        )
        return 0

    if args.analyze_references:
        analysis = []
        for doc in filter_expired(root):
            refs = find_references(doc, root, changelog_path)
            analysis.append({"path": doc.relative_path, "references": refs})
        print(json.dumps({"reference_analysis": analysis}, indent=2))
        return 0

    plans = build_plan(root, changelog_path)

    if args.plan:
        print_plan_report(plans)
        return 0

    if args.execute:
        print_plan_report(plans)
        if not args.confirm:
            print(
                "\nERROR: --execute requires --confirm (dry-run plan printed above)",
                file=sys.stderr,
            )
            return 1
        archive_dir = Path(args.archive_dir)
        results = execute_plan(root, plans, archive_dir)
        print(json.dumps({"execution_results": results}, indent=2))
        return 0

    return 2


if __name__ == "__main__":
    raise SystemExit(main())
