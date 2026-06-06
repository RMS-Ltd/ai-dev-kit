"""CQG engine — CodeQL subprocess orchestration and report emission."""

from __future__ import annotations

import shutil
import subprocess
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

from .config import CodeQualityGateConfig, load_config
from .last_run import (
    LastRunRecord,
    MonitorDecision,
    evaluate_monitor,
    read_last_run,
    write_last_run,
)
from .ratings import compute_ratings
from .report_model import CategoryRatings, CodeQualityReport
from .sarif_parser import parse_sarif
from .thresholds import ThresholdMode, parse_threshold, threshold_breached


@dataclass
class RunResult:
    report: CodeQualityReport
    summary_json: Path
    summary_md: Path
    sarif_path: Path | None
    threshold_breached: bool
    skipped: bool = False


class CQGEngine:
    def __init__(self, config: CodeQualityGateConfig, repo_root: Path | None = None):
        self.config = config
        self.repo_root = repo_root or Path.cwd()

    @classmethod
    def from_rw_config(cls, config_path: Path | None = None) -> CQGEngine:
        return cls(load_config(config_path))

    def resolve_head_sha(self) -> str:
        proc = subprocess.run(
            ["git", "rev-parse", "HEAD"],
            cwd=self.repo_root,
            capture_output=True,
            text=True,
            check=True,
        )
        return proc.stdout.strip()

    def codeql_available(self) -> bool:
        return shutil.which(self.config.codeql_command) is not None

    def run_codeql(self, sarif_out: Path) -> None:
        if not self.codeql_available():
            raise RuntimeError(
                f"{self.config.codeql_command!r} not found on PATH. "
                "Install CodeQL CLI or pass --sarif to analyze an existing SARIF file. "
                "See packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md."
            )
        cache = self.repo_root / self.config.cache_dir
        db_path = cache / "db"
        cache.mkdir(parents=True, exist_ok=True)
        sarif_out.parent.mkdir(parents=True, exist_ok=True)

        create_cmd = [
            self.config.codeql_command,
            "database",
            "create",
            str(db_path),
            f"--language={self.config.language}",
            "--source-root",
            str(self.repo_root),
            "--overwrite",
        ]

        subprocess.run(create_cmd, cwd=self.repo_root, check=True)

        suite = self.config.query_suite
        analyze_cmd = [
            self.config.codeql_command,
            "database",
            "analyze",
            str(db_path),
            "--format=sarif-latest",
            f"--output={sarif_out}",
            "--download",
            f"codeql/{self.config.language}-queries:{suite}",
        ]
        subprocess.run(analyze_cmd, cwd=self.repo_root, check=True)

    def build_report(
        self,
        findings,
        head_sha: str,
        completed_at: str | None = None,
    ) -> CodeQualityReport:
        ts = completed_at or datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
        rel, maint = compute_ratings(findings)
        return CodeQualityReport(
            head_sha=head_sha,
            completed_at=ts,
            findings=list(findings),
            ratings=CategoryRatings(reliability=rel, maintainability=maint),
            query_suite=self.config.query_suite,
            language=self.config.language,
        )

    def write_artifacts(self, report: CodeQualityReport) -> tuple[Path, Path]:
        reports_dir = self.repo_root / self.config.reports_dir
        reports_dir.mkdir(parents=True, exist_ok=True)
        stamp = report.completed_at.replace(":", "").replace(" ", "_")
        json_path = reports_dir / f"summary-{stamp}.json"
        md_path = reports_dir / f"summary-{stamp}.md"
        json_path.write_text(report.to_json(), encoding="utf-8")
        md_path.write_text(report.to_markdown(), encoding="utf-8")
        latest_json = reports_dir / "summary-latest.json"
        latest_md = reports_dir / "summary-latest.md"
        latest_json.write_text(report.to_json(), encoding="utf-8")
        latest_md.write_text(report.to_markdown(), encoding="utf-8")
        return json_path, md_path

    def run(
        self,
        *,
        sarif_path: Path | None = None,
        threshold: str | None = None,
        force: bool = False,
    ) -> RunResult:
        head_sha = self.resolve_head_sha()
        threshold_mode = parse_threshold(threshold or self.config.rw_threshold)

        sarif_out: Path | None = None
        if sarif_path:
            findings = parse_sarif(sarif_path)
            sarif_out = Path(sarif_path)
        else:
            sarif_out = self.repo_root / self.config.reports_dir / "latest.sarif"
            self.run_codeql(sarif_out)
            findings = parse_sarif(sarif_out)

        report = self.build_report(findings, head_sha)
        json_path, md_path = self.write_artifacts(report)
        write_last_run(
            self.repo_root / self.config.last_run_file,
            head_sha,
            report.completed_at,
        )
        breached = threshold_breached(report, threshold_mode)
        return RunResult(
            report=report,
            summary_json=json_path,
            summary_md=md_path,
            sarif_path=sarif_out,
            threshold_breached=breached,
        )

    def monitor(self, *, force: bool = False) -> RunResult:
        head_sha = self.resolve_head_sha()
        last_path = self.repo_root / self.config.last_run_file
        last = read_last_run(last_path)
        decision = MonitorDecision.FORCE if force else evaluate_monitor(
            head_sha, last, self.config.staleness_hours
        )
        if decision == MonitorDecision.SKIP:
            empty = self.build_report([], head_sha)
            return RunResult(
                report=empty,
                summary_json=last_path,
                summary_md=last_path,
                sarif_path=None,
                threshold_breached=False,
                skipped=True,
            )
        return self.run(force=force)


def main(argv: list[str] | None = None) -> int:
    """CLI entry when invoked as module."""
    import argparse

    parser = argparse.ArgumentParser(description="Run local Code Quality Gate")
    parser.add_argument("--config", type=Path, default=None)
    parser.add_argument("--sarif", type=Path, default=None, help="Analyze existing SARIF")
    parser.add_argument("--threshold", default=None)
    parser.add_argument("--strict", action="store_true")
    parser.add_argument("--force", action="store_true", help="Monitor: bypass skip")
    parser.add_argument("--monitor", action="store_true", help="Apply skip/staleness guards")
    args = parser.parse_args(argv)

    engine = CQGEngine.from_rw_config(args.config)
    if args.monitor:
        result = engine.monitor(force=args.force)
    else:
        result = engine.run(sarif_path=args.sarif, threshold=args.threshold)

    if result.skipped:
        print(f"CQG monitor: skipped (HEAD {result.report.head_sha} unchanged, < staleness)")
        return 0

    print(result.report.to_markdown())
    print(f"JSON: {result.summary_json}")
    print(f"Markdown: {result.summary_md}")

    strict = args.strict or not engine.config.rw_advisory
    if strict and result.threshold_breached:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
