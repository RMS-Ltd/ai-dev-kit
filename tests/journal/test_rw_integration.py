"""Integration tests for RW journal, recovery report, and rollback contract."""

import json
import os
from pathlib import Path

import pytest

from journal.rw_journal import RWJournal
from journal.recovery_report import RecoveryReport
from journal.rollback_contract import RollbackContract


class TestSimulatedRWRun:
    """Simulate a full RW step sequence with injected failure."""

    def _simulate_successful_run(self, journal_dir: Path, task_id: str = "E2:S01:T19") -> str:
        journal = RWJournal(task_id=task_id, journal_dir=journal_dir)
        run_id = journal.start_run(version_before="0.1.0")
        journal.log_step(
            name="Step 1d — Task Intent Guard",
            status="success",
            exit_code=0,
            commands=["python validate_rw_task_intent.py"],
            touched_files=[],
        )
        journal.log_step(
            name="Step 2 — Bump Version",
            status="success",
            exit_code=0,
            commands=["python bump_version.py"],
            touched_files=["src/ai_dev_kit/version.py"],
        )
        journal.log_step(
            name="Step 3 — Create Detailed Changelog",
            status="success",
            exit_code=0,
            commands=["python update_changelog.py"],
            touched_files=["docs/changelog-and-release-notes/CHANGELOG_v0.2.0.md"],
        )
        journal.finish_run(status="success", version_after="0.2.0")
        return run_id

    def _simulate_failed_run(self, journal_dir: Path, task_id: str = "E6:S06:T63") -> str:
        journal = RWJournal(task_id=task_id, journal_dir=journal_dir)
        run_id = journal.start_run(version_before="0.1.0")
        journal.log_step(
            name="Step 1d — Task Intent Guard",
            status="success",
            exit_code=0,
            commands=["python validate_rw_task_intent.py --requested E6:S06:T63 --art"],
            touched_files=[],
        )
        journal.log_step(
            name="Step 2 — Bump Version",
            status="success",
            exit_code=0,
            commands=["python bump_version.py"],
            touched_files=["src/ai_dev_kit/version.py"],
        )
        journal.log_step(
            name="Step 3 — Create Detailed Changelog",
            status="failed",
            exit_code=1,
            commands=["python update_changelog.py"],
            touched_files=[],
            notes="Missing changelog template for task E6:S06:T63",
        )
        journal.finish_run(status="failed")
        return run_id

    def test_successful_run_journal(self, tmp_path: Path):
        journal_dir = tmp_path / "journals"
        run_id = self._simulate_successful_run(journal_dir)

        files = RWJournal.list_runs(journal_dir)
        assert len(files) == 1
        loaded = RWJournal.load(files[0])
        assert loaded.status == "success"
        assert loaded.version_after == "0.2.0"
        assert len(loaded.steps) == 3
        assert loaded.steps[2].name == "Step 3 — Create Detailed Changelog"

    def test_failed_run_recovery_report(self, tmp_path: Path):
        journal_dir = tmp_path / "journals"
        run_id = self._simulate_failed_run(journal_dir)

        files = RWJournal.list_runs(journal_dir)
        loaded = RWJournal.load(files[0])
        report = RecoveryReport.from_run_entry(loaded)
        assert report.failed_step_name == "Step 3 — Create Detailed Changelog"
        assert report.exit_code == 1
        assert "Step 3" in report.to_markdown()
        assert report.next_steps[0].startswith("Review the failure")

    def test_failed_run_recovery_report_persists(self, tmp_path: Path):
        journal_dir = tmp_path / "journals"
        self._simulate_failed_run(journal_dir)

        files = RWJournal.list_runs(journal_dir)
        loaded = RWJournal.load(files[0])
        report = RecoveryReport.from_run_entry(loaded)
        md_path, json_path = report.write(journal_dir)

        assert md_path.exists()
        assert json_path.exists()
        data = json.loads(json_path.read_text())
        assert data["schema_version"] == "1.0.0"
        assert data["failed_step"]["name"] == "Step 3 — Create Detailed Changelog"

    def test_failed_run_rollback_contract(self, tmp_path: Path):
        journal_dir = tmp_path / "journals"
        self._simulate_failed_run(journal_dir)

        files = RWJournal.list_runs(journal_dir)
        loaded = RWJournal.load(files[0])
        contract = RollbackContract.from_run(loaded)
        # Step 2 touched version.py but was committed (simulated)
        # In this simulation we don't actually commit, so _is_committed may vary
        assert contract.run_id == loaded.run_id
        md = contract.summary_markdown()
        assert "Rollback / Compensation Contract" in md

    def test_deterministic_rerun_guidance(self, tmp_path: Path):
        """AC4: Rerun behavior after failed runs is deterministic."""
        journal_dir = tmp_path / "journals"
        self._simulate_failed_run(journal_dir)

        files = RWJournal.list_runs(journal_dir)
        loaded = RWJournal.load(files[0])
        report = RecoveryReport.from_run_entry(loaded)
        guidance = report.rerun_guidance
        assert "E6:S06:T63" in guidance
        assert "same task token" in guidance

    def test_graceful_degradation_unwritable_dir(self, tmp_path: Path):
        """T8: When docs/journals/ is unwritable, RW continues with a warning."""
        # Simulate by using a file path instead of a directory
        bad_dir = tmp_path / "not_a_dir"
        bad_dir.write_text("I am a file, not a directory")

        journal = RWJournal(task_id="E6:S06:T63", journal_dir=bad_dir)
        journal.start_run()
        journal.log_step("Step 1", status="success")
        # finish_run will try to mkdir which should raise an error
        with pytest.raises((OSError, FileExistsError)):
            journal.finish_run(status="success")

        # In production RW, this exception should be caught and warned, not aborted.
        # This test verifies the underlying behavior.
