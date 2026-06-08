#!/usr/bin/env python3
"""
Translation completeness report and alerts (E21:S03:T06).

Usage:
    python report_locale_completeness.py [--package kanban|workflow-mgt|all] [--locale CODE]
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

from locale_translation_utils import (
    ENGLISH_LOCALES,
    PACKAGES,
    LocaleCompleteness,
    LocaleIssue,
    compute_locale_completeness,
    dump_yaml,
    load_translatable_registry,
    load_yaml,
    registry_locale_codes,
    repo_root_from_script,
)


def _aggregate_reports(reports: Sequence[LocaleCompleteness]) -> Dict[str, Any]:
    rows = []
    for report in reports:
        rows.append(
            {
                "package": report.package,
                "locale": report.locale,
                "keys_structural_pct": report.keys_structural_pct(),
                "keys_linguistic_pct": report.keys_linguistic_pct(),
                "files_structural_pct": report.files_structural_pct(),
                "files_linguistic_pct": report.files_linguistic_pct(),
                "combined_linguistic_pct": report.combined_linguistic_pct(),
                "tiers": {
                    tier: {
                        "total": counts.total,
                        "translated": counts.translated,
                        "pending": counts.pending,
                        "missing": counts.missing,
                        "linguistic_pct": counts.linguistic_pct(),
                    }
                    for tier, counts in sorted(report.key_tiers.items())
                }
                | {
                    "P2_files": {
                        "total": report.file_tier.total,
                        "translated": report.file_tier.translated,
                        "pending": report.file_tier.pending,
                        "missing": report.file_tier.missing,
                        "linguistic_pct": report.file_tier.linguistic_pct(),
                    }
                },
                "alerts": [
                    {
                        "severity": a.severity.value,
                        "code": a.code,
                        "message": a.message,
                        "path": a.path,
                    }
                    for a in report.alerts
                ],
            }
        )
    return {"reports": rows}


def _format_table(reports: Sequence[LocaleCompleteness], *, verbose: bool) -> str:
    lines = ["# Locale completeness report (E21:S03:T06)", ""]
    lines.append(
        "| Package | Locale | Keys struct % | Keys ling % | Files ling % | Combined ling % |"
    )
    lines.append("| ------- | ------ | ------------- | ----------- | ------------ | --------------- |")
    for report in reports:
        lines.append(
            f"| {report.package} | {report.locale} | "
            f"{report.keys_structural_pct():.1f} | {report.keys_linguistic_pct():.1f} | "
            f"{report.files_linguistic_pct():.1f} | {report.combined_linguistic_pct():.1f} |"
        )

    for report in reports:
        lines.extend(["", f"## {report.package}/{report.locale} — tier breakdown", ""])
        lines.append("| Tier | Total | Translated | Pending | Missing | Ling % |")
        lines.append("| ---- | ----- | ---------- | ------- | ------- | ------ |")
        for tier in ("P0", "P1", "P3"):
            counts = report.key_tiers[tier]
            if counts.total:
                lines.append(
                    f"| {tier} | {counts.total} | {counts.translated} | {counts.pending} | "
                    f"{counts.missing} | {counts.linguistic_pct():.1f} |"
                )
        if report.file_tier.total:
            ft = report.file_tier
            lines.append(
                f"| P2 (files) | {ft.total} | {ft.translated} | {ft.pending} | "
                f"{ft.missing} | {ft.linguistic_pct():.1f} |"
            )

        alert_rows = report.alerts
        if not verbose:
            alert_rows = [a for a in alert_rows if a.code in {"missing_key", "missing_manifest_asset", "missing_key_file"}]
        if alert_rows:
            lines.extend(["", "### Alerts", ""])
            for alert in alert_rows[:50 if not verbose else None]:
                lines.append(f"- {alert.format_line()}")
            if not verbose and len(report.alerts) > len(alert_rows):
                lines.append(
                    f"- … {len(report.alerts) - len(alert_rows)} interim-copy advisory(ies); use --verbose"
                )

    return "\n".join(lines) + "\n"


def _should_alert(issues: Sequence[LocaleIssue], mode: str) -> bool:
    if mode == "any":
        return bool(issues)
    if mode == "missing":
        return any(i.code in {"missing_key", "missing_manifest_asset", "missing_key_file"} for i in issues)
    if mode == "interim":
        return any(i.code == "interim_copy" for i in issues)
    return False


def _update_registry_linguistic_status(
    project_root: Path,
    reports: Sequence[LocaleCompleteness],
    *,
    dry_run: bool,
    threshold: float,
) -> List[str]:
    registry_path = project_root / "docs/governance/standards/translatable-content-registry.yaml"
    registry = load_yaml(registry_path)
    scaffold = registry.setdefault("scaffold_locales", {})
    changes: List[str] = []

    by_locale: Dict[str, List[LocaleCompleteness]] = {}
    for report in reports:
        by_locale.setdefault(report.locale, []).append(report)

    for locale, locale_reports in sorted(by_locale.items()):
        if locale in ENGLISH_LOCALES:
            continue
        combined = sum(r.combined_linguistic_pct() for r in locale_reports) / len(locale_reports)
        entry = scaffold.get(locale)
        if not isinstance(entry, dict):
            continue
        new_status = "complete" if combined >= threshold else "pending"
        old_status = entry.get("linguistic_status")
        if old_status != new_status:
            changes.append(f"{locale}: linguistic_status {old_status!r} -> {new_status!r} (combined {combined:.1f}%)")
            if not dry_run:
                entry["linguistic_status"] = new_status

    if changes and not dry_run:
        dump_yaml(registry_path, registry)
    return changes


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Report locale translation completeness (E21:S03:T06)")
    parser.add_argument("--project-root", type=Path, default=repo_root_from_script(Path(__file__)))
    parser.add_argument("--package", choices=["kanban", "workflow-mgt", "all"], default="all")
    parser.add_argument("--locale", action="append", dest="locales", help="Locale code (repeatable)")
    parser.add_argument("--tier", choices=["P0", "P1", "P2", "P3"], help="Filter tier section output only")
    parser.add_argument("--format", choices=["table", "json", "markdown"], default="table")
    parser.add_argument("--fail-under", type=float, metavar="PCT", help="Exit 1 if combined linguistic %% below PCT")
    parser.add_argument("--alert-on", choices=["missing", "interim", "any"], help="Exit 1 when alerts match")
    parser.add_argument("--update-registry", action="store_true", help="Update linguistic_status in registry YAML")
    parser.add_argument("--registry-threshold", type=float, default=100.0, help="%% for linguistic_status complete")
    parser.add_argument("--dry-run", action="store_true", help="With --update-registry, report changes only")
    parser.add_argument("--verbose", action="store_true", help="List all interim-copy advisories")
    args = parser.parse_args(argv)

    try:
        registry = load_translatable_registry(args.project_root)
    except (FileNotFoundError, ValueError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2

    packages = list(PACKAGES) if args.package == "all" else [args.package]
    locale_filter = args.locales or registry_locale_codes(registry)

    reports: List[LocaleCompleteness] = []
    for package in packages:
        for locale in locale_filter:
            if locale == "en-GB":
                continue
            reports.append(compute_locale_completeness(args.project_root, package, locale))

    if args.format == "json":
        print(json.dumps(_aggregate_reports(reports), indent=2, sort_keys=True))
    elif args.format == "markdown":
        print(_format_table(reports, verbose=args.verbose))
    else:
        print(_format_table(reports, verbose=args.verbose))

    if args.update_registry:
        changes = _update_registry_linguistic_status(
            args.project_root,
            reports,
            dry_run=args.dry_run,
            threshold=args.registry_threshold,
        )
        for line in changes:
            prefix = "would update" if args.dry_run else "updated"
            print(f"{prefix}: {line}")

    exit_code = 0
    all_alerts = [a for r in reports for a in r.alerts]

    if args.alert_on and _should_alert(all_alerts, args.alert_on):
        exit_code = 1

    if args.fail_under is not None:
        for report in reports:
            if report.locale in ENGLISH_LOCALES:
                continue
            if report.combined_linguistic_pct() < args.fail_under:
                exit_code = 1
                break

    return exit_code


if __name__ == "__main__":
    sys.exit(main())
