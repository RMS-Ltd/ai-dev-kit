"""Tests for WorkflowExecutor forensic integration (FR-059)."""

from pathlib import Path

from workflow_executor import WorkflowDefinition, WorkflowExecutor, WorkflowStatus


class TestWorkflowExecutorForensic:
    def test_checkpoint_create_and_rollback(self, tmp_path: Path):
        executor = WorkflowExecutor(project_root=tmp_path)
        executor.journal_root = tmp_path / "journals"
        executor._create_checkpoint("test-cp-1")
        assert (executor.journal_root / "checkpoints" / "test-cp-1" / "manifest.json").exists()
        assert executor.rollback_to_checkpoint("test-cp-1")

    def test_execute_python_script_logs_commands(self, tmp_path: Path):
        script = tmp_path / "echo_ok.py"
        script.write_text('import json\nprint(json.dumps({"ok": True}))', encoding="utf-8")
        executor = WorkflowExecutor(project_root=tmp_path)
        wf = WorkflowDefinition(
            id="echo",
            name="Echo",
            description="test",
            entry_point="echo_ok.py",
            parameters={},
        )
        executor.register_workflow(wf)
        result = executor.execute_workflow("echo", checkpoint="cp-echo")
        assert result.status == WorkflowStatus.COMPLETED
        records = executor.get_command_records()
        assert len(records) >= 1
        assert records[0]["exit_code"] == 0
