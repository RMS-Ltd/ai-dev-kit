"""
RW Recovery Report

Generates human-readable (Markdown) and machine-readable (JSON)
recovery reports from a failed RW run journal.
"""

from __future__ import annotations

import json
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

from .rw_journal import RWJournal, RunEntry, StepEntry


RECOVERY_SCHEMA_VERSION = "1.0.0"
JOURNAL_DIR = Path("docs/journals")


@dataclass
class RecoveryReport:
    """Structured recovery report derived from a failed run journal.

    Attributes:
        run_id: UUID of the failed run.
        task_id: The E:S:T token that triggered this run.
        failed_step_name: Name of the first step with status != success.
        failed_step_timestamp: ISO-8601 timestamp of the failed step.
        exit_code: Exit code if available.
        touched_files: All files touched up to and including the failed step.
        auto_revertible: Files safe to revert automatically (uncommitted working-tree changes).
        manual_reconcile: Files requiring manual reconciliation (committed changes, pushed tags).
        next_steps: Ordered list of actionable next steps for the operator.
        rerun_guidance: Deterministic guidance for re-triggering the run safely.
    """

    run_id: str
    task_id: str
    failed_step_name: str
    failed_step_timestamp: str
    exit_code: Optional[int]
    touched_files: List[str] = field(default_factory=list)
    auto_revertible: List[str] = field(default_factory=list)
    manual_reconcile: List[str] = field(default_factory=list)
    next_steps: List[str] = field(default_factory=list)
    rerun_guidance: str = ""

    # ------------------------------------------------------------------
    # Factories
    # ------------------------------------------------------------------

    @classmethod
    def from_journal(cls, journal: RWJournal) -> "RecoveryReport":
        """Build a RecoveryReport from an in-memory or finished RWJournal."""
        run = journal.run
        if run is None:
            raise ValueError("Journal has no active run")

        failed_step = cls._first_failed_step(run.steps)
        if failed_step is None:
            raise ValueError("Run has no failed step; recovery report not applicable")

        touched = cls._collect_touched_files(run.steps)
        auto, manual = cls._categorize_touched(touched)

        return cls(
            run_id=run.run_id,
            task_id=run.task_id,
            failed_step_name=failed_step.name,
            failed_step_timestamp=failed_step.timestamp,
            exit_code=failed_step.exit_code,
            touched_files=sorted(set(touched)),
            auto_revertible=sorted(set(auto)),
            manual_reconcile=sorted(set(manual)),
            next_steps=cls._build_next_steps(run, failed_step, auto, manual),
            rerun_guidance=cls._build_rerun_guidance(run, failed_step),
        )

    @classmethod
    def from_run_entry(cls, run: RunEntry) -> "RecoveryReport":
        """Build a RecoveryReport from a persisted RunEntry."""
        if run is None:
            raise ValueError("RunEntry is None")
        # Build a temporary journal wrapper to reuse from_journal logic
        journal = RWJournal(task_id=run.task_id)
        journal._run = run
        return cls.from_journal(journal)

    # ------------------------------------------------------------------
    # Serialization
    # ------------------------------------------------------------------

    def to_markdown(self) -> str:
        """Render as human-readable Markdown."""
        lines: List[str] = [
            "# RW Recovery Report",
            "",
            f"- **Run ID:** `{self.run_id}`",
            f"- **Task:** {self.task_id}",
            f"- **Failed Step:** {self.failed_step_name}",
            f"- **Failed At:** {self.failed_step_timestamp}",
            f"- **Exit Code:** {self.exit_code if self.exit_code is not None else 'N/A'}",
            "",
            "## Touched Artifacts",
            "",
        ]
        for path in self.touched_files:
            lines.append(f"- `{path}`")
        lines.extend([
            "",
            "## Automatic Revertible",
            "",
            "The following can typically be reverted safely:",
            "",
        ])
        for path in self.auto_revertible:
            lines.append(f"- `{path}`")
        if not self.auto_revertible:
            lines.append("_None identified._")
        lines.extend([
            "",
            "## Manual Reconciliation Required",
            "",
            "The following require operator review before retry:",
            "",
        ])
        for path in self.manual_reconcile:
            lines.append(f"- `{path}`")
        if not self.manual_reconcile:
            lines.append("_None identified._")
        lines.extend([
            "",
            "## Next Steps",
            "",
        ])
        for i, step in enumerate(self.next_steps, start=1):
            lines.append(f"{i}. {step}")
        lines.extend([
            "",
            "## Rerun Guidance",
            "",
            self.rerun_guidance,
            "",
            "---",
            f"_Report generated at {self._now_iso()}_",
        ])
        return "\n".join(lines)

    def to_json(self) -> str:
        """Render as machine-readable JSON."""
        payload = {
            "schema_version": RECOVERY_SCHEMA_VERSION,
            "run_id": self.run_id,
            "task_id": self.task_id,
            "failed_step": {
                "name": self.failed_step_name,
                "timestamp": self.failed_step_timestamp,
                "exit_code": self.exit_code,
            },
            "touched_files": self.touched_files,
            "auto_revertible": self.auto_revertible,
            "manual_reconcile": self.manual_reconcile,
            "next_steps": self.next_steps,
            "rerun_guidance": self.rerun_guidance,
            "generated_at": self._now_iso(),
        }
        return json.dumps(payload, indent=2, ensure_ascii=False) + "\n"

    # ------------------------------------------------------------------
    # Persistence helpers
    # ------------------------------------------------------------------

    def write(self, journal_dir: Optional[Path] = None) -> tuple[Path, Path]:
        """Persist Markdown and JSON recovery reports.

        Returns (md_path, json_path).
        """
        d = journal_dir or JOURNAL_DIR
        d.mkdir(parents=True, exist_ok=True)
        base = f"rw-{self.run_id}-recovery"
        md_path = d / f"{base}.md"
        json_path = d / f"{base}.json"
        md_path.write_text(self.to_markdown(), encoding="utf-8")
        json_path.write_text(self.to_json(), encoding="utf-8")
        return md_path, json_path

    # ------------------------------------------------------------------
    # Internal helpers
    # ------------------------------------------------------------------

    @staticmethod
    def _first_failed_step(steps: List[StepEntry]) -> Optional[StepEntry]:
        for step in steps:
            if step.status in ("failed", "aborted"):
                return step
        return None

    @staticmethod
    def _collect_touched_files(steps: List[StepEntry]) -> List[str]:
        touched: List[str] = []
        for step in steps:
            touched.extend(step.touched_files)
        return touched

    @staticmethod
    def _categorize_touched(touched: List[str]) -> tuple[List[str], List[str]]:
        """Split touched files into auto-revertible vs manual-reconcile.

        Heuristic:
        - Unstaged working-tree files (not in git index) → auto_revertible
        - Committed changes, version bumps, tags → manual_reconcile
        - Changelog / README updates → manual_reconcile (review required)
        """
        auto: List[str] = []
        manual: List[str] = []
        for path in set(touched):
            p = Path(path)
            if not p.exists():
                continue
            # Simple heuristic: if file is in .git and unstaged, auto-revertible
            # In practice we rely on the caller to mark touched_files correctly
            if "version.py" in path or "CHANGELOG" in path or "README" in path:
                manual.append(path)
            elif ".git" in str(p.parent):
                manual.append(path)
            else:
                auto.append(path)
        # Deduplicate by keeping manual if ambiguous
        auto = [a for a in auto if a not in manual]
        return auto, manual

    @staticmethod
    def _build_next_steps(run: RunEntry, failed: StepEntry, auto: List[str], manual: List[str]) -> List[str]:
        steps: List[str] = []
        steps.append(f"Review the failure in step: **{failed.name}**.")
        if auto:
            steps.append("Revert auto-revertible files (see report below).")
        if manual:
            steps.append("Manually reconcile committed/pushed changes before retry.")
        steps.append("Address the root cause of the failure.")
        steps.append(f"Re-invoke RW with the same task token: `{run.task_id}`.")
        steps.append("Verify the recovery report is clean on the next run.")
        return steps

    @staticmethod
    def _build_rerun_guidance(run: RunEntry, failed: StepEntry) -> str:
        return (
            f"Re-invoke the Release Workflow with the same task token `{run.task_id}`. "
            "The journal from this failed run will remain in `docs/journals/` for forensic review. "
            "If the failure occurred before Step 10 (commit), a clean working tree is usually sufficient. "
            "If Step 10+ failed, inspect git history and tags before retrying."
        )

    @staticmethod
    def _now_iso() -> str:
        return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
