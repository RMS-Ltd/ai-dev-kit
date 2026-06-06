"""SARIF 2.1.0 ingest for CodeQL Code Quality findings."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from .report_model import Category, Finding, Severity

_LEVEL_MAP = {
    "error": Severity.ERROR,
    "warning": Severity.WARNING,
    "note": Severity.NOTE,
    "none": Severity.NOTE,
    "recommendation": Severity.NOTE,
}


def _rule_category(rule_id: str, rule_meta: dict[str, Any]) -> Category:
    props = rule_meta.get("properties") or {}
    tags = [str(t).lower() for t in props.get("tags") or []]
    joined = " ".join(tags) + " " + rule_id.lower()
    if "maintainability" in joined:
        return Category.MAINTAINABILITY
    if "reliability" in joined or "security" in joined:
        return Category.RELIABILITY
    return Category.UNKNOWN


def _build_rule_index(run: dict[str, Any]) -> dict[str, dict[str, Any]]:
    driver = (run.get("tool") or {}).get("driver") or {}
    rules = driver.get("rules") or []
    return {str(r.get("id", "")): r for r in rules if r.get("id")}


def _location_path_and_line(location: dict[str, Any]) -> tuple[str, int]:
    phys = location.get("physicalLocation") or {}
    artifact = phys.get("artifactLocation") or {}
    region = phys.get("region") or {}
    path = str(artifact.get("uri") or artifact.get("uriBaseId") or "unknown")
    line = int(region.get("startLine") or 0)
    return path, line


def parse_sarif(path: Path | str) -> list[Finding]:
    data = json.loads(Path(path).read_text(encoding="utf-8"))
    findings: list[Finding] = []
    for run in data.get("runs") or []:
        rules = _build_rule_index(run)
        for result in run.get("results") or []:
            rule_id = str(result.get("ruleId") or "unknown")
            level = str(result.get("level") or "warning").lower()
            severity = _LEVEL_MAP.get(level, Severity.WARNING)
            rule_meta = rules.get(rule_id, {})
            category = _rule_category(rule_id, rule_meta)
            message = (result.get("message") or {}).get("text") or ""
            locations = result.get("locations") or [{}]
            file_path, start_line = _location_path_and_line(locations[0])
            findings.append(
                Finding(
                    rule_id=rule_id,
                    severity=severity,
                    category=category,
                    file_path=file_path,
                    start_line=start_line,
                    message=message,
                )
            )
    return findings
