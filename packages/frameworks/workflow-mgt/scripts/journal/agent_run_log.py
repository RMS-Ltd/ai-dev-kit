"""
Reference writer for Workflow Agent Run Log v1.1 (ADR-011 / FR-044 / E05:S01:T44).

Distinct from ADR-008 forensic RW journals — incremental flush for crash recovery.
"""

from __future__ import annotations

import json
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence


SCHEMA_VERSION = 1.1


@dataclass
class StepSpec:
    id: str
    label: str


@dataclass
class StepState:
    id: str
    label: str
    status: str = "pending"
    started_at: Optional[str] = None
    completed_at: Optional[str] = None
    outputs: List[str] = field(default_factory=list)
    touched_paths: List[str] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        out: Dict[str, Any] = {
            "id": self.id,
            "label": self.label,
            "status": self.status,
            "started_at": self.started_at,
            "completed_at": self.completed_at,
        }
        if self.outputs:
            out["outputs"] = list(self.outputs)
        if self.touched_paths:
            out["touched_paths"] = list(self.touched_paths)
        return out


def _now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _atomic_write_json(path: Path, payload: Dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    tmp.replace(path)


class AgentRunLog:
    """Incremental agent run log writer with atomic flush after each mutation."""

    def __init__(
        self,
        *,
        workflow: str,
        route: str,
        task_id: str,
        log_dir: Path,
        steps: Sequence[StepSpec],
        run_id: Optional[str] = None,
    ) -> None:
        self.workflow = workflow
        self.route = route
        self.task_id = task_id
        self.log_dir = Path(log_dir)
        self._run_id = run_id or str(uuid.uuid4())
        self._started_at = _now_iso()
        self._status = "running"
        self._blocking_reason: Optional[str] = None
        self._ended_at: Optional[str] = None
        self._notes = ""
        self._current_step: Optional[str] = None
        self._steps: Dict[str, StepState] = {
            s.id: StepState(id=s.id, label=s.label) for s in steps
        }
        self._path = self.log_dir / f"{workflow.lower()}-{self._run_id}.json"
        self._flush()

    @property
    def path(self) -> Path:
        return self._path

    @property
    def run_id(self) -> str:
        return self._run_id

    def _payload(self) -> Dict[str, Any]:
        ordered = sorted(self._steps.values(), key=lambda s: s.id)
        return {
            "schema_version": SCHEMA_VERSION,
            "workflow": self.workflow,
            "route": self.route,
            "task_id": self.task_id,
            "run_id": self._run_id,
            "current_step": self._current_step,
            "blocking_reason": self._blocking_reason,
            "started_at": self._started_at,
            "updated_at": _now_iso(),
            "ended_at": self._ended_at,
            "status": self._status,
            "notes": self._notes,
            "steps": [s.to_dict() for s in ordered],
        }

    def _flush(self) -> Path:
        _atomic_write_json(self._path, self._payload())
        return self._path

    def step_start(self, step_id: str) -> Path:
        if step_id not in self._steps:
            raise KeyError(f"Unknown step_id: {step_id}")
        self._current_step = step_id
        step = self._steps[step_id]
        step.status = "in_progress"
        step.started_at = _now_iso()
        return self._flush()

    def step_complete(
        self,
        step_id: str,
        *,
        outputs: Optional[Sequence[str]] = None,
        touched_paths: Optional[Sequence[str]] = None,
    ) -> Path:
        if step_id not in self._steps:
            raise KeyError(f"Unknown step_id: {step_id}")
        step = self._steps[step_id]
        step.status = "completed"
        step.completed_at = _now_iso()
        if outputs:
            step.outputs = list(outputs)
        if touched_paths:
            step.touched_paths = list(touched_paths)
        return self._flush()

    def step_fail(
        self,
        step_id: str,
        *,
        reason: str = "",
        outputs: Optional[Sequence[str]] = None,
        touched_paths: Optional[Sequence[str]] = None,
    ) -> Path:
        if step_id not in self._steps:
            raise KeyError(f"Unknown step_id: {step_id}")
        step = self._steps[step_id]
        step.status = "cancelled"
        step.completed_at = _now_iso()
        if outputs:
            step.outputs = list(outputs)
        if touched_paths:
            step.touched_paths = list(touched_paths)
        self._status = "blocked"
        self._blocking_reason = reason or f"Step {step_id} failed"
        return self._flush()

    def abort(self, blocking_reason: str) -> Path:
        self._status = "aborted"
        self._blocking_reason = blocking_reason
        self._ended_at = _now_iso()
        self._current_step = None
        for step in self._steps.values():
            if step.status in ("pending", "in_progress"):
                step.status = "cancelled"
                if step.started_at and not step.completed_at:
                    step.completed_at = _now_iso()
        return self._flush()

    def finalize(self, status: str = "completed") -> Path:
        if status not in ("completed", "aborted", "blocked"):
            raise ValueError(f"Invalid finalize status: {status}")
        self._status = status
        self._ended_at = _now_iso()
        self._current_step = None
        return self._flush()

    @classmethod
    def load(cls, path: Path) -> Dict[str, Any]:
        return json.loads(path.read_text(encoding="utf-8"))
