"""Unit tests for recovery_report module."""

from pathlib import Path

import pytest

from journal.rw_journal import RWJournal
from journal.recovery_report import RecoveryReport, RECOVERY_SCHEMA_VERSION


class TestRecoveryReport:
    def test_from_journal_no_run_raises(self):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=Path("/tmp/fake"))
        with pytest.raises(ValueError, match="no active run"):
            RecoveryReport.from_journal(journal)

    def test_from_journal_no_failed_step_raises(self):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=Path("/tmp/fake"))
        journal.start_run()
        journal.log_step("Step 1", status="success")
        with pytest.raises(ValueError, match="no failed step"):
            RecoveryReport.from_journal(journal)

    def test_from_journal_success(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step(
            name="Step 1d",
            status="success",
            exit_code=0,
            touched_files=[],
        )
        journal.log_step(
            name="Step 2",
            status="success",
            exit_code=0,
            touched_files=["src/version.py"],
        )
        journal.log_step(
            name="Step 3",
            status="failed",
            exit_code=1,
            touched_files=["CHANGELOG.md"],
            notes="Template missing",
        )

        report = RecoveryReport.from_journal(journal)
        assert report.run_id == journal.run_id
        assert report.task_id == "E6:S06:T63"
        assert report.failed_step_name == "Step 3"
        assert report.exit_code == 1
        assert "CHANGELOG.md" in report.touched_files
        assert report.next_steps
        assert report.rerun_guidance

    def test_to_markdown_contains_sections(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step("Step 1", status="success")
        journal.log_step("Step 2", status="failed", exit_code=1)
        report = RecoveryReport.from_journal(journal)
        md = report.to_markdown()
        assert "# RW Recovery Report" in md
        assert "## Touched Artifacts" in md
        assert "## Next Steps" in md
        assert "## Rerun Guidance" in md
        assert report.run_id in md

    def test_to_json_schema(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step("Step 1", status="success")
        journal.log_step("Step 2", status="failed", exit_code=1)
        report = RecoveryReport.from_journal(journal)
        json_text = report.to_json()
        import json
        data = json.loads(json_text)
        assert data["schema_version"] == RECOVERY_SCHEMA_VERSION
        assert data["run_id"] == report.run_id
        assert data["failed_step"]["name"] == "Step 2"
        assert "next_steps" in data
        assert "rerun_guidance" in data

    def test_write_creates_files(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step("Step 1", status="success")
        journal.log_step("Step 2", status="failed", exit_code=1)
        report = RecoveryReport.from_journal(journal)
        md_path, json_path = report.write(tmp_path)
        assert md_path.exists()
        assert json_path.exists()
        assert md_path.suffix == ".md"
        assert json_path.suffix == ".json"
        assert report.run_id in md_path.name

    def test_from_run_entry(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step("Step 1", status="success")
        journal.log_step("Step 2", status="failed", exit_code=1)
        report = RecoveryReport.from_run_entry(journal.run)
        assert report.failed_step_name == "Step 2"
