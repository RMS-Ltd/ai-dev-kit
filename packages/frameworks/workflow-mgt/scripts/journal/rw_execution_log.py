"""
Human-readable RW execution log + dual-write facade (FR-044 / E05:S01:T44).
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any, Dict, List, Mapping, Optional, Sequence

import yaml

from journal.agent_run_log import AgentRunLog, StepSpec

SECRET_KEY_RE = re.compile(
    r"(token|secret|password|api[_-]?key|credential)",
    re.IGNORECASE,
)

DEFAULT_RW_EXECUTION_LOG_PATH = ".rw-execution.log"
DEFAULT_AGENT_RUN_LOG_DIR = "docs/journals/agent-runs"
DEFAULT_TRUNCATE_ON_START = True


def load_execution_log_config(
    project_root: Optional[Path] = None,
    config: Optional[Mapping[str, Any]] = None,
) -> Dict[str, Any]:
    root = project_root or Path.cwd()
    merged: Dict[str, Any] = {
        "rw_execution_log_path": DEFAULT_RW_EXECUTION_LOG_PATH,
        "agent_run_log_dir": DEFAULT_AGENT_RUN_LOG_DIR,
        "rw_execution_log_truncate_on_start": DEFAULT_TRUNCATE_ON_START,
    }
    if config is None:
        config_path = root / "rw-config.yaml"
        if config_path.exists():
            try:
                with open(config_path, encoding="utf-8") as f:
                    loaded = yaml.safe_load(f)
                if isinstance(loaded, dict):
                    config = loaded
            except (OSError, yaml.YAMLError) as _suppressed_exc:
                del _suppressed_exc
    if config:
        for key in merged:
            if key in config and config[key] is not None:
                merged[key] = config[key]
    return merged


def redact_text(value: str) -> str:
    if SECRET_KEY_RE.search(value):
        return "[REDACTED]"
    if "GITHUB_TOKEN" in value or ".env.local" in value:
        return "[REDACTED]"
    return value


def format_kv_pairs(pairs: Sequence[str]) -> str:
    return " | ".join(redact_text(p) for p in pairs)


class RWExecutionTextLog:
    def __init__(
        self,
        path: Path,
        *,
        truncate_on_start: bool = True,
        run_id: str = "",
        route: str = "",
    ) -> None:
        self.path = Path(path)
        self.truncate_on_start = truncate_on_start
        self.run_id = run_id
        self.route = route
        if truncate_on_start and self.path.exists():
            self.path.unlink()
        self.path.parent.mkdir(parents=True, exist_ok=True)
        if not self.path.exists() or self.path.stat().st_size == 0:
            self._append("RUN_START", "", f"run_id={run_id} route={redact_text(route)}")

    def _append(self, event: str, step_id: str, detail: str = "") -> None:
        from journal.agent_run_log import _now_iso

        ts = _now_iso()
        parts = [ts, event]
        if step_id:
            parts.append(step_id)
        if detail:
            parts.append(detail)
        with open(self.path, "a", encoding="utf-8") as f:
            f.write(" | ".join(parts) + "\n")

    def step_start(self, step_id: str, label: str = "") -> None:
        self._append("STEP_START", step_id, label)

    def step_ok(
        self,
        step_id: str,
        *,
        outputs: Optional[Sequence[str]] = None,
        touched_paths: Optional[Sequence[str]] = None,
    ) -> None:
        extras: List[str] = []
        if outputs:
            extras.extend(outputs)
        if touched_paths:
            extras.append(f"files={','.join(touched_paths)}")
        self._append("STEP_OK", step_id, format_kv_pairs(extras) if extras else "")

    def step_fail(self, step_id: str, reason: str = "") -> None:
        self._append("STEP_FAIL", step_id, redact_text(reason))

    def run_end(self, status: str) -> None:
        self._append("RUN_END", "", f"status={status}")


class RWExecutionLogger:
    def __init__(self, agent_log: AgentRunLog, text_log: RWExecutionTextLog) -> None:
        self.agent_log = agent_log
        self.text_log = text_log

    @property
    def run_id(self) -> str:
        return self.agent_log.run_id

    @property
    def json_path(self) -> Path:
        return self.agent_log.path

    @property
    def text_path(self) -> Path:
        return self.text_log.path

    @classmethod
    def from_config(
        cls,
        *,
        workflow: str,
        route: str,
        task_id: str,
        steps: Sequence[StepSpec],
        project_root: Optional[Path] = None,
        config: Optional[Mapping[str, Any]] = None,
    ) -> "RWExecutionLogger":
        root = project_root or Path.cwd()
        cfg = load_execution_log_config(root, config)
        text_path = root / str(cfg["rw_execution_log_path"])
        log_dir = root / str(cfg["agent_run_log_dir"])
        truncate = bool(cfg.get("rw_execution_log_truncate_on_start", True))
        agent = AgentRunLog(
            workflow=workflow,
            route=route,
            task_id=task_id,
            log_dir=log_dir,
            steps=steps,
        )
        text = RWExecutionTextLog(
            text_path,
            truncate_on_start=truncate,
            run_id=agent.run_id,
            route=route,
        )
        return cls(agent, text)

    def step_start(self, step_id: str, label: str = "") -> None:
        self.agent_log.step_start(step_id)
        self.text_log.step_start(step_id, label)

    def step_complete(
        self,
        step_id: str,
        *,
        label: str = "",
        outputs: Optional[Sequence[str]] = None,
        touched_paths: Optional[Sequence[str]] = None,
    ) -> None:
        self.agent_log.step_complete(
            step_id, outputs=outputs, touched_paths=touched_paths
        )
        self.text_log.step_ok(step_id, outputs=outputs, touched_paths=touched_paths)

    def step_fail(
        self,
        step_id: str,
        *,
        reason: str = "",
        outputs: Optional[Sequence[str]] = None,
        touched_paths: Optional[Sequence[str]] = None,
    ) -> None:
        self.agent_log.step_fail(
            step_id, reason=reason, outputs=outputs, touched_paths=touched_paths
        )
        self.text_log.step_fail(step_id, reason)

    def abort(self, blocking_reason: str) -> None:
        self.agent_log.abort(blocking_reason)
        self.text_log.run_end("aborted")

    def finalize(self, status: str = "completed") -> None:
        self.agent_log.finalize(status)
        self.text_log.run_end(status)
