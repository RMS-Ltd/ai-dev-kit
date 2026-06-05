"""Unit tests for rw_execution_log module (FR-044 / E05:S01:T44)."""

import json
import tempfile
from pathlib import Path

import yaml

from journal.agent_run_log import StepSpec
from journal.rw_execution_log import (
    RWExecutionLogger,
    RWExecutionTextLog,
    load_execution_log_config,
    redact_text,
)


def _sample_steps():
    return [
        StepSpec(id="rw-step-1", label="Step 1: Branch Safety Check"),
        StepSpec(id="rw-step-2", label="Step 2: Bump Version"),
    ]


class TestRedaction:
    def test_redacts_secrets(self):
        assert redact_text("GITHUB_TOKEN=abc") == "[REDACTED]"
        assert redact_text("version=0.5.1.44+1") == "version=0.5.1.44+1"


class TestRWExecutionTextLog:
    def test_truncate_on_start(self):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "exec.log"
            path.write_text("old\n", encoding="utf-8")
            RWExecutionTextLog(path, truncate_on_start=True, run_id="r1", route="RW")
            assert "old" not in path.read_text(encoding="utf-8")
            assert "RUN_START" in path.read_text(encoding="utf-8")


class TestRWExecutionLogger:
    def test_dual_write(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            logger = RWExecutionLogger.from_config(
                workflow="RW",
                route="RW E05:S01:T44",
                task_id="E05:S01:T44",
                steps=_sample_steps(),
                project_root=root,
                config={
                    "rw_execution_log_path": "exec.log",
                    "agent_run_log_dir": "runs",
                    "rw_execution_log_truncate_on_start": True,
                },
            )
            logger.step_start("rw-step-1")
            logger.step_complete("rw-step-1", touched_paths=["a.py"])
            assert json.loads(logger.json_path.read_text())["steps"][0]["status"] == "completed"
            assert "STEP_OK" in logger.text_path.read_text()

    def test_config_loading(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "rw-config.yaml").write_text(
                yaml.dump({"agent_run_log_dir": "custom/runs"}), encoding="utf-8"
            )
            cfg = load_execution_log_config(root)
            assert cfg["agent_run_log_dir"] == "custom/runs"


class TestGovernanceReferences:
    ROOT = Path(__file__).resolve().parents[2]

    def test_rw_guide_references_execution_log(self):
        guide = self.ROOT / (
            "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/"
            "release-workflow-agent-execution.md"
        )
        text = guide.read_text(encoding="utf-8")
        assert "RWExecutionLogger" in text or "rw_execution_log" in text or "agent_run_log" in text
