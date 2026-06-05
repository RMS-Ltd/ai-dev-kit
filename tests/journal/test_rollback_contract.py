"""Unit tests for rollback_contract module."""

from pathlib import Path

from journal.rollback_contract import (
    RollbackContract,
)
from journal.rw_journal import RWJournal


class TestRollbackContract:
    def test_empty_run(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.finish_run(status="aborted")
        contract = RollbackContract.from_run(journal.run)
        assert contract.run_id == journal.run_id
        assert contract.auto_revertible == []
        assert contract.manual_reconcile == []
        assert contract.forbidden_actions == []

    def test_git_commit_marked_manual(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step(
            name="Step 10 — Commit",
            status="success",
            commands=["git commit -m 'Release v1.0.0'"],
            touched_files=["CHANGELOG.md"],
        )
        contract = RollbackContract.from_run(journal.run)
        manual = [s for s in contract.manual_reconcile if s.action_type == "git_commit"]
        assert len(manual) == 1
        assert manual[0].manual_reconcile is True

    def test_git_tag_marked_manual(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step(
            name="Step 11 — Create Tag",
            status="success",
            commands=["git tag -a v1.0.0 -m 'Release'"],
            touched_files=[],
        )
        contract = RollbackContract.from_run(journal.run)
        manual = [s for s in contract.manual_reconcile if s.action_type == "git_tag"]
        assert len(manual) == 1

    def test_git_push_marked_manual(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step(
            name="Step 12 — Push",
            status="success",
            commands=["git push origin dev --tags"],
            touched_files=[],
        )
        contract = RollbackContract.from_run(journal.run)
        manual = [s for s in contract.manual_reconcile if s.action_type == "git_push"]
        assert len(manual) == 1

    def test_forbidden_command_detected(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step(
            name="Evil Step",
            status="success",
            commands=["git push --force origin dev"],
            touched_files=[],
        )
        contract = RollbackContract.from_run(journal.run)
        assert len(contract.forbidden_actions) == 1
        assert "git push --force" in contract.forbidden_actions[0]

    def test_command_records_analyzed_like_commands(self, tmp_path: Path):
        journal = RWJournal(task_id="E02:S08:T08", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step(
            name="Step 10 — Commit",
            status="success",
            commands=[],
            command_records=[
                {
                    "timestamp": "2026-05-30T00:00:00Z",
                    "argv": ["git", "commit", "-m", "Release"],
                    "exit_code": 0,
                    "duration_ms": 10.0,
                }
            ],
        )
        contract = RollbackContract.from_run(journal.run)
        manual = [s for s in contract.manual_reconcile if s.action_type == "git_commit"]
        assert len(manual) == 1

    def test_summary_markdown(self, tmp_path: Path):
        journal = RWJournal(task_id="E6:S06:T63", journal_dir=tmp_path)
        journal.start_run()
        journal.log_step(
            name="Step 10",
            status="success",
            commands=["git commit -m 'Release'"],
            touched_files=["CHANGELOG.md"],
        )
        contract = RollbackContract.from_run(journal.run)
        md = contract.summary_markdown()
        assert "## Rollback / Compensation Contract" in md
        assert "Step 10" in md
        assert "git_commit" in md
