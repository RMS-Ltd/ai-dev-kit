"""
RW Rollback / Compensation Contract

Defines automatic vs manual rollback surfaces and safety guardrails.
This module is intentionally conservative: it documents *what* can be reverted,
but automatic execution of destructive git operations is out of scope.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import List, Optional, Tuple

from .rw_journal import RunEntry, StepEntry


# ------------------------------------------------------------------------------
# Safety guardrails
# ------------------------------------------------------------------------------

FORBIDDEN_COMMANDS = {
    "git push --force",
    "git push -f",
    "git reset --hard",
    "git clean -f",
    "git branch -D",
    "rm -rf",
}

SAFE_TO_REVERT_PATTERNS = {
    "*.tmp",
    "*.bak",
    ".rw-journal/*",
}

# ------------------------------------------------------------------------------
# Data model
# ------------------------------------------------------------------------------

@dataclass
class CompensationSurface:
    """A single compensatable action from a run."""
    step_name: str
    action_type: str  # e.g. "git_commit", "file_write", "git_tag", "git_push"
    description: str
    artifacts: List[str] = field(default_factory=list)
    auto_revertible: bool = False
    manual_reconcile: bool = False
    safety_notes: str = ""


@dataclass
class RollbackContract:
    """Complete rollback/compensation contract for a run.

    Attributes:
        run_id: UUID of the run being analyzed.
        auto_revertible: Surfaces that can be undone automatically (no remote impact).
        manual_reconcile: Surfaces that require operator review.
        forbidden_actions: Actions that must never be suggested or executed automatically.
    """

    run_id: str
    auto_revertible: List[CompensationSurface] = field(default_factory=list)
    manual_reconcile: List[CompensationSurface] = field(default_factory=list)
    forbidden_actions: List[str] = field(default_factory=list)

    # ------------------------------------------------------------------
    # Factory
    # ------------------------------------------------------------------

    @classmethod
    def from_run(cls, run: RunEntry) -> "RollbackContract":
        """Analyze a run entry and produce a rollback contract."""
        contract = cls(run_id=run.run_id)
        for step in run.steps:
            contract._analyze_step(step)
        return contract

    # ------------------------------------------------------------------
    # Analysis
    # ------------------------------------------------------------------

    def _analyze_step(self, step: StepEntry) -> None:
        """Inspect a step and populate compensation surfaces."""
        for cmd in step.commands:
            self._analyze_command(step, cmd)
        for artifact in step.touched_files:
            self._analyze_artifact(step, artifact)

    def _analyze_command(self, step: StepEntry, command: str) -> None:
        cmd_lower = command.lower()

        # Detect forbidden commands
        for forbidden in FORBIDDEN_COMMANDS:
            if forbidden in cmd_lower:
                self.forbidden_actions.append(
                    f"Step '{step.name}' contains forbidden command: `{command}`"
                )
                return

        # Categorize known command types
        if "git commit" in cmd_lower:
            self.manual_reconcile.append(
                CompensationSurface(
                    step_name=step.name,
                    action_type="git_commit",
                    description=f"Git commit executed: {command}",
                    artifacts=step.touched_files,
                    manual_reconcile=True,
                    safety_notes="Committed changes may already be on remote. Review before revert.",
                )
            )
        elif "git tag" in cmd_lower:
            self.manual_reconcile.append(
                CompensationSurface(
                    step_name=step.name,
                    action_type="git_tag",
                    description=f"Git tag created: {command}",
                    artifacts=[],
                    manual_reconcile=True,
                    safety_notes="Tags are often pushed to remote. Deleting remote tags is destructive.",
                )
            )
        elif "git push" in cmd_lower:
            self.manual_reconcile.append(
                CompensationSurface(
                    step_name=step.name,
                    action_type="git_push",
                    description=f"Git push executed: {command}",
                    artifacts=[],
                    manual_reconcile=True,
                    safety_notes="Pushed changes are now on remote. Use revert commits, not force-push.",
                )
            )
        elif "git add" in cmd_lower:
            self.auto_revertible.append(
                CompensationSurface(
                    step_name=step.name,
                    action_type="git_stage",
                    description=f"Files staged: {command}",
                    artifacts=step.touched_files,
                    auto_revertible=True,
                    safety_notes="`git reset HEAD <file>` will unstage safely.",
                )
            )

    def _analyze_artifact(self, step: StepEntry, artifact: str) -> None:
        # If artifact is a file not yet committed, mark auto-revertible
        path = Path(artifact)
        if path.exists() and not self._is_committed(str(path)):
            # Check if already in auto_revertible for this step
            existing = [s for s in self.auto_revertible if s.step_name == step.name and artifact in s.artifacts]
            if not existing:
                self.auto_revertible.append(
                    CompensationSurface(
                        step_name=step.name,
                        action_type="file_write",
                        description=f"Uncommitted file modified: {artifact}",
                        artifacts=[artifact],
                        auto_revertible=True,
                        safety_notes="`git checkout -- <file>` or manual edit to undo.",
                    )
                )

    @staticmethod
    def _is_committed(path: str) -> bool:
        """Best-effort check whether a file has committed changes.

        Returns True if we cannot determine (conservative default).
        """
        import subprocess
        try:
            result = subprocess.run(
                ["git", "diff", "--quiet", "HEAD", "--", path],
                capture_output=True,
                text=True,
                cwd=Path.cwd(),
            )
            # exit 0 means no diff → fully committed
            return result.returncode == 0
        except Exception:
            # If git is unavailable or error, be conservative
            return True

    # ------------------------------------------------------------------
    # Summary helpers
    # ------------------------------------------------------------------

    def summary_markdown(self) -> str:
        """Return a Markdown summary of the rollback contract."""
        lines = [
            "## Rollback / Compensation Contract",
            "",
            f"**Run ID:** `{self.run_id}`",
            "",
            "### Automatic Revertible",
            "",
        ]
        if self.auto_revertible:
            for surf in self.auto_revertible:
                lines.append(f"- **{surf.step_name}** — `{surf.action_type}` — {surf.description}")
                lines.append(f"  - Safety: {surf.safety_notes}")
        else:
            lines.append("_No automatically revertible surfaces identified._")
        lines.extend([
            "",
            "### Manual Reconciliation Required",
            "",
        ])
        if self.manual_reconcile:
            for surf in self.manual_reconcile:
                lines.append(f"- **{surf.step_name}** — `{surf.action_type}` — {surf.description}")
                lines.append(f"  - Safety: {surf.safety_notes}")
        else:
            lines.append("_No manual reconciliation surfaces identified._")
        if self.forbidden_actions:
            lines.extend([
                "",
                "### ⚠️ Forbidden Actions Detected",
                "",
                "The following commands were observed and must **never** be auto-executed:",
                "",
            ])
            for action in self.forbidden_actions:
                lines.append(f"- {action}")
        return "\n".join(lines)
