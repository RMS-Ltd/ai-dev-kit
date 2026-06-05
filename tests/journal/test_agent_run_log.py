"""Unit tests for agent_run_log module (FR-044 / E05:S01:T44)."""

import json
import tempfile
from pathlib import Path

import pytest

from journal.agent_run_log import SCHEMA_VERSION, AgentRunLog, StepSpec


def _sample_steps():
    return [
        StepSpec(id="rw-step-1", label="Step 1: Branch Safety Check"),
        StepSpec(id="rw-step-2", label="Step 2: Bump Version"),
    ]


class TestAgentRunLog:
    def test_lifecycle_finalize(self):
        with tempfile.TemporaryDirectory() as tmp:
            log = AgentRunLog(
                workflow="RW",
                route="RW E05:S01:T44 --art",
                task_id="E05:S01:T44",
                log_dir=Path(tmp),
                steps=_sample_steps(),
            )
            log.step_start("rw-step-1")
            log.step_complete("rw-step-1")
            log.step_start("rw-step-2")
            log.step_complete(
                "rw-step-2",
                outputs=["version=0.5.1.44+1"],
                touched_paths=["src/ai_dev_kit/version.py"],
            )
            path = log.finalize("completed")
            data = json.loads(path.read_text(encoding="utf-8"))
            assert data["schema_version"] == SCHEMA_VERSION
            assert data["status"] == "completed"

    def test_incremental_persistence_without_finalize(self):
        with tempfile.TemporaryDirectory() as tmp:
            log = AgentRunLog(
                workflow="RW",
                route="RW E05:S01:T44",
                task_id="E05:S01:T44",
                log_dir=Path(tmp),
                steps=_sample_steps(),
            )
            log.step_start("rw-step-1")
            log.step_complete("rw-step-1")
            data = json.loads(log.path.read_text(encoding="utf-8"))
            assert data["status"] == "running"
            assert data["steps"][0]["status"] == "completed"

    def test_abort(self):
        with tempfile.TemporaryDirectory() as tmp:
            log = AgentRunLog(
                workflow="RW",
                route="RW",
                task_id="E05:S01:T44",
                log_dir=Path(tmp),
                steps=_sample_steps(),
            )
            log.abort("blocked")
            data = json.loads(log.path.read_text(encoding="utf-8"))
            assert data["status"] == "aborted"

    def test_unknown_step_raises(self):
        with tempfile.TemporaryDirectory() as tmp:
            log = AgentRunLog(
                workflow="RW",
                route="RW",
                task_id="E05:S01:T44",
                log_dir=Path(tmp),
                steps=_sample_steps(),
            )
            with pytest.raises(KeyError):
                log.step_start("rw-step-99")
