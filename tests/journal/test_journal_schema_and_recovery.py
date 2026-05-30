"""Integration tests for journal schema v1 and recovery command timeline."""

import json
from pathlib import Path

from journal.rw_journal import RWJournal, JOURNAL_SCHEMA_VERSION
from journal.recovery_report import RecoveryReport
from journal.forensic_log import AtomicCommandRecord


class TestJournalSchemaV1:
    def test_run_json_includes_schema_and_command_records(self, tmp_path: Path):
        journal = RWJournal(task_id="E02:S08:T08", journal_dir=tmp_path)
        journal.start_run()
        record = AtomicCommandRecord(
            timestamp="2026-05-30T00:00:00Z",
            argv=["python3", "validate.py"],
            exit_code=1,
            duration_ms=12.5,
        )
        journal.log_step(
            name="Step 9 — Validators",
            status="failed",
            exit_code=1,
            commands=["python3 validate.py"],
            command_records=[record.to_dict()],
        )
        journal.finish_run(status="failed")
        files = RWJournal.list_runs(tmp_path)
        data = json.loads(files[0].read_text(encoding="utf-8"))
        assert data["schema_version"] == JOURNAL_SCHEMA_VERSION
        assert data["steps"][0]["command_records"][0]["argv"] == ["python3", "validate.py"]

    def test_recovery_report_includes_command_timeline(self, tmp_path: Path):
        journal = RWJournal(task_id="E02:S08:T08", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step(
            name="Step 1",
            status="success",
            commands=["true"],
        )
        journal.log_step(
            name="Step 2",
            status="failed",
            exit_code=1,
            commands=["false"],
            command_records=[
                {
                    "timestamp": "2026-05-30T00:00:00Z",
                    "argv": ["false"],
                    "exit_code": 1,
                    "duration_ms": 1.0,
                    "stdout": "",
                    "stderr": "fail",
                    "lifecycle": "ephemeral",
                    "ttl_days": 7,
                    "housekeeping_policy": "auto-delete",
                    "schema_version": "1.0.0",
                }
            ],
        )
        report = RecoveryReport.from_journal(journal)
        md = report.to_markdown()
        assert "Command Timeline (forensic)" in md
        assert "false" in md
