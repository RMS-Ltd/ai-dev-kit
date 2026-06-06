"""Load `code_quality_gate` block from rw-config.yaml."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any

import yaml


@dataclass
class CodeQualityGateConfig:
    enabled: bool = True
    target_branch: str = "dev"
    query_suite: str = "security-and-quality"
    language: str = "python"
    source_roots: tuple[str, ...] = (
        "packages/frameworks",
        "scripts",
        "cli",
        "src",
    )
    monitor_cron: str = "0 */6 * * *"
    staleness_hours: float = 12.0
    reports_dir: str = ".cqg/reports"
    cache_dir: str = ".cqg/cache"
    last_run_file: str = ".cqg/last-run.json"
    rw_threshold: str = "warnings"
    rw_advisory: bool = True
    retention_count: int = 10
    codeql_command: str = "codeql"

    @classmethod
    def from_mapping(cls, raw: dict[str, Any] | None) -> CodeQualityGateConfig:
        if not raw:
            raise ValueError(
                "Missing 'code_quality_gate' block in rw-config.yaml. "
                "See packages/frameworks/workflow-mgt/config/rw-config-schema.md."
            )
        roots = raw.get("source_roots") or cls.source_roots
        if isinstance(roots, list):
            roots = tuple(str(r) for r in roots)
        return cls(
            enabled=bool(raw.get("enabled", True)),
            target_branch=str(raw.get("target_branch", cls.target_branch)),
            query_suite=str(raw.get("query_suite", cls.query_suite)),
            language=str(raw.get("language", cls.language)),
            source_roots=roots,
            monitor_cron=str(raw.get("monitor_cron", cls.monitor_cron)),
            staleness_hours=float(raw.get("staleness_hours", cls.staleness_hours)),
            reports_dir=str(raw.get("reports_dir", cls.reports_dir)),
            cache_dir=str(raw.get("cache_dir", cls.cache_dir)),
            last_run_file=str(raw.get("last_run_file", cls.last_run_file)),
            rw_threshold=str(raw.get("rw_threshold", cls.rw_threshold)),
            rw_advisory=bool(raw.get("rw_advisory", cls.rw_advisory)),
            retention_count=int(raw.get("retention_count", cls.retention_count)),
            codeql_command=str(raw.get("codeql_command", cls.codeql_command)),
        )


def resolve_query_pack_spec(language: str, query_suite: str) -> str:
    """Map GitHub Code Quality suite names to CodeQL CLI pack specs."""
    if ":" in query_suite or query_suite.startswith("/"):
        return query_suite
    pack = f"codeql/{language}-queries"
    if query_suite.endswith(".qls"):
        return f"{pack}:codeql-suites/{query_suite}"
    if query_suite == "security-and-quality":
        qls = f"{language}-security-and-quality.qls"
    else:
        qls = f"{language}-{query_suite}.qls"
    return f"{pack}:codeql-suites/{qls}"


def load_config(config_path: Path | None = None) -> CodeQualityGateConfig:
    root = Path.cwd()
    path = config_path or root / "rw-config.yaml"
    if not path.is_file():
        raise FileNotFoundError(f"rw-config.yaml not found at {path}")
    with open(path, encoding="utf-8") as fh:
        data = yaml.safe_load(fh) or {}
    block = data.get("code_quality_gate")
    return CodeQualityGateConfig.from_mapping(block)


def default_config_dict() -> dict[str, Any]:
    """Defaults for schema documentation and tests."""
    return {
        "enabled": True,
        "target_branch": "dev",
        "query_suite": "security-and-quality",
        "language": "python",
        "source_roots": list(CodeQualityGateConfig.source_roots),
        "monitor_cron": "0 */6 * * *",
        "staleness_hours": 12,
        "reports_dir": ".cqg/reports",
        "cache_dir": ".cqg/cache",
        "last_run_file": ".cqg/last-run.json",
        "rw_threshold": "warnings",
        "rw_advisory": True,
        "retention_count": 10,
        "codeql_command": "codeql",
    }
