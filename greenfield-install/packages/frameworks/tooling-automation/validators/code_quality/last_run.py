"""Persist and evaluate monitor skip/force decisions."""

from __future__ import annotations

import json
from dataclasses import dataclass
from datetime import datetime, timezone
from enum import Enum
from pathlib import Path
from typing import Any


@dataclass
class LastRunRecord:
    head_sha: str
    completed_at: str

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> LastRunRecord:
        return cls(
            head_sha=str(data["head_sha"]),
            completed_at=str(data["completed_at"]),
        )

    def to_dict(self) -> dict[str, str]:
        return {"head_sha": self.head_sha, "completed_at": self.completed_at}


class MonitorDecision(str, Enum):
    RUN = "run"
    SKIP = "skip"
    FORCE = "force"


def read_last_run(path: Path) -> LastRunRecord | None:
    if not path.is_file():
        return None
    data = json.loads(path.read_text(encoding="utf-8"))
    return LastRunRecord.from_dict(data)


def write_last_run(path: Path, head_sha: str, completed_at: str | None = None) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    ts = completed_at or datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    path.write_text(
        json.dumps({"head_sha": head_sha, "completed_at": ts}, indent=2) + "\n",
        encoding="utf-8",
    )


def evaluate_monitor(
    current_head: str,
    last_run: LastRunRecord | None,
    staleness_hours: float,
    now: datetime | None = None,
) -> MonitorDecision:
    """Skip if HEAD unchanged and age < staleness; force if age >= staleness."""
    if last_run is None:
        return MonitorDecision.RUN
    now = now or datetime.now(timezone.utc)
    completed = datetime.strptime(
        last_run.completed_at.replace(" UTC", ""),
        "%Y-%m-%d %H:%M:%S",
    ).replace(tzinfo=timezone.utc)
    age_hours = (now - completed).total_seconds() / 3600.0
    if age_hours >= staleness_hours:
        return MonitorDecision.FORCE
    if last_run.head_sha == current_head:
        return MonitorDecision.SKIP
    return MonitorDecision.RUN
