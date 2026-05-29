"""Unit tests for rw_journal module."""

import json
import tempfile
from pathlib import Path

import pytest

from journal.rw_journal import RWJournal, RunEntry, StepEntry


class TestStepEntry:
    def test_roundtrip(self):
        step = StepEntry(
            name="Step 1",
            status="success",
            timestamp="2026-05-17T15:00:00Z",
            exit_code=0,
            commands=["echo hello"],
            touched_files=["a.py"],
            notes="note",
        )
        d = step.to_dict()
        restored = StepEntry.from_dict(d)
        assert restored.name == "Step 1"
        assert restored.status == "success"
        assert restored.exit_code == 0
        assert restored.commands == ["echo hello"]
        assert restored.touched_files == ["a.py"]
        assert restored.notes == "note"


class TestRunEntry:
    def test_roundtrip(self):
        run = RunEntry(
            run_id="abc-123",
            task_id="E6:S06:T63",
            started_at="2026-05-17T15:00:00Z",
            ended_at="2026-05-17T15:01:00Z",
            status="failed",
            steps=[
                StepEntry(name="Step 1", status="success", timestamp="2026-05-17T15:00:00Z"),
                StepEntry(name="Step 2", status="failed", timestamp="2026-05-17T15:01:00Z", exit_code=1),
            ],
            version_before="0.1.0",
            version_after=None,
        )
        d = run.to_dict()
        restored = RunEntry.from_dict(d)
        assert restored.run_id == "abc-123"
        assert restored.task_id == "E6:S06:T63"
        assert restored.status == "failed"
        assert len(restored.steps) == 2
        assert restored.steps[1].exit_code == 1


class TestRWJournal:
    def test_start_run_returns_uuid(self):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=Path("/tmp/fake"))
        run_id = journal.start_run()
        assert len(run_id) == 36
        assert journal.run_id == run_id
        assert journal.run is not None
        assert journal.run.status == "started"

    def test_log_step_before_start_raises(self):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=Path("/tmp/fake"))
        with pytest.raises(RuntimeError, match="log_step called before start_run"):
            journal.log_step("Step 1", status="success")

    def test_finish_run_before_start_raises(self):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=Path("/tmp/fake"))
        with pytest.raises(RuntimeError, match="finish_run called before start_run"):
            journal.finish_run(status="success")

    def test_full_run_persists(self, tmp_path: Path):
        journal_dir = tmp_path / "journals"
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=journal_dir)
        run_id = journal.start_run(version_before="0.1.0")
        journal.log_step(
            name="Step 1d — Task Intent Guard",
            status="success",
            exit_code=0,
            commands=["python validate.py"],
            touched_files=[],
        )
        journal.log_step(
            name="Step 2 — Bump Version",
            status="success",
            exit_code=0,
            commands=["python bump.py"],
            touched_files=["src/version.py"],
        )
        path = journal.finish_run(status="success", version_after="0.2.0")

        assert path.exists()
        data = json.loads(path.read_text())
        assert data["run_id"] == run_id
        assert data["task_id"] == "E6:S06:T63"
        assert data["status"] == "success"
        assert data["version_before"] == "0.1.0"
        assert data["version_after"] == "0.2.0"
        assert len(data["steps"]) == 2
        assert data["steps"][1]["name"] == "Step 2 — Bump Version"

    def test_load_existing_journal(self, tmp_path: Path):
        journal_dir = tmp_path / "journals"
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=journal_dir)
        journal.start_run()
        journal.log_step("Step 1", status="success")
        journal.finish_run(status="success")

        files = RWJournal.list_runs(journal_dir)
        assert len(files) == 1
        loaded = RWJournal.load(files[0])
        assert loaded.task_id == "E6:S06:T63"
        assert loaded.steps[0].name == "Step 1"

    def test_list_runs_empty_dir(self, tmp_path: Path):
        journal_dir = tmp_path / "empty"
        journal_dir.mkdir()
        assert RWJournal.list_runs(journal_dir) == []

    def test_list_runs_nonexistent_dir(self, tmp_path: Path):
        journal_dir = tmp_path / "does_not_exist"
        assert RWJournal.list_runs(journal_dir) == []
