"""
RW Recovery Journal

Deterministic per-step journaling for the Release Workflow (RW).
"""

from __future__ import annotations

import json
import os
import uuid
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional


JOURNAL_DIR = Path("docs/journals")


@dataclass
class StepEntry:
    """A single step record within a run journal."""
    name: str
    status: str  # "started", "success", "failed", "aborted"
    timestamp: str
    exit_code: Optional[int] = None
    commands: List[str] = field(default_factory=list)
    touched_files: List[str] = field(default_factory=list)
    notes: str = ""

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "StepEntry":
        return cls(**data)


@dataclass
class RunEntry:
    """A complete run journal record."""
    run_id: str
    task_id: str
    started_at: str
    ended_at: Optional[str] = None
    status: str = "started"  # "started", "success", "failed", "aborted"
    steps: List[StepEntry] = field(default_factory=list)
    version_before: Optional[str] = None
    version_after: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "run_id": self.run_id,
            "task_id": self.task_id,
            "started_at": self.started_at,
            "ended_at": self.ended_at,
            "status": self.status,
            "version_before": self.version_before,
            "version_after": self.version_after,
            "steps": [s.to_dict() for s in self.steps],
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RunEntry":
        steps = [StepEntry.from_dict(s) for s in data.get("steps", [])]
        return cls(
            run_id=data["run_id"],
            task_id=data["task_id"],
            started_at=data["started_at"],
            ended_at=data.get("ended_at"),
            status=data.get("status", "started"),
            steps=steps,
            version_before=data.get("version_before"),
            version_after=data.get("version_after"),
        )


class RWJournal:
    """Deterministic journal for RW runs.

    Usage:
        journal = RWJournal(task_id="E6:S06:T63")
        journal.start_run()
        journal.log_step("Step 2 — Bump Version", status="success",
                         commands=["python bump_version.py"],
                         touched_files=["src/ai_dev_kit/version.py"])
        journal.finish_run(status="success")
    """

    def __init__(
        self,
        task_id: str,
        journal_dir: Optional[Path] = None,
    ) -> None:
        self.task_id = task_id
        self.journal_dir = journal_dir or JOURNAL_DIR
        self._run: Optional[RunEntry] = None

    # ------------------------------------------------------------------
    # Core lifecycle
    # ------------------------------------------------------------------

    def start_run(self, version_before: Optional[str] = None) -> str:
        """Begin a new run. Returns the run_id."""
        run_id = str(uuid.uuid4())
        self._run = RunEntry(
            run_id=run_id,
            task_id=self.task_id,
            started_at=_now_iso(),
            version_before=version_before,
        )
        return run_id

    def log_step(
        self,
        name: str,
        status: str = "started",
        exit_code: Optional[int] = None,
        commands: Optional[List[str]] = None,
        touched_files: Optional[List[str]] = None,
        notes: str = "",
    ) -> None:
        """Append a step record to the current run."""
        if self._run is None:
            raise RuntimeError("log_step called before start_run()")
        self._run.steps.append(
            StepEntry(
                name=name,
                status=status,
                timestamp=_now_iso(),
                exit_code=exit_code,
                commands=commands or [],
                touched_files=touched_files or [],
                notes=notes,
            )
        )

    def finish_run(
        self,
        status: str,
        version_after: Optional[str] = None,
    ) -> Path:
        """Finalize the run and persist to disk.

        Returns the path to the written journal file.
        """
        if self._run is None:
            raise RuntimeError("finish_run called before start_run()")
        self._run.status = status
        self._run.ended_at = _now_iso()
        self._run.version_after = version_after
        return self._write()

    # ------------------------------------------------------------------
    # Properties
    # ------------------------------------------------------------------

    @property
    def run(self) -> Optional[RunEntry]:
        return self._run

    @property
    def run_id(self) -> Optional[str]:
        return self._run.run_id if self._run else None

    # ------------------------------------------------------------------
    # Persistence
    # ------------------------------------------------------------------

    def _write(self) -> Path:
        if self._run is None:
            raise RuntimeError("_write called with no active run")

        self.journal_dir.mkdir(parents=True, exist_ok=True)
        safe_ts = self._run.started_at.replace(":", "-")
        filename = f"rw-{self._run.run_id}-{safe_ts}.json"
        path = self.journal_dir / filename
        path.write_text(
            json.dumps(self._run.to_dict(), indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        return path

    # ------------------------------------------------------------------
    # Class-level helpers
    # ------------------------------------------------------------------

    @classmethod
    def load(cls, path: Path) -> "RunEntry":
        """Load a RunEntry from a persisted journal file."""
        data = json.loads(path.read_text(encoding="utf-8"))
        return RunEntry.from_dict(data)

    @classmethod
    def list_runs(cls, journal_dir: Optional[Path] = None) -> List[Path]:
        """Return all journal files in the directory, newest first."""
        d = journal_dir or JOURNAL_DIR
        if not d.exists():
            return []
        files = sorted(d.glob("rw-*.json"), key=lambda p: p.stat().st_mtime, reverse=True)
        return files


def _now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
