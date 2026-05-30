"""Unit tests for checkpoint_store (FR-059)."""

from pathlib import Path

from journal.checkpoint_store import (
    create_checkpoint,
    load_checkpoint,
    rollback_to_checkpoint,
)


class TestCheckpointStore:
    def test_create_load_round_trip(self, tmp_path: Path):
        journal_root = tmp_path / "journals"
        manifest_path = create_checkpoint(
            journal_root,
            "cp-test-1",
            project_root=tmp_path,
            workflow_id="wf-1",
        )
        assert manifest_path.exists()
        loaded = load_checkpoint(journal_root, "cp-test-1")
        assert loaded is not None
        assert loaded["checkpoint_id"] == "cp-test-1"
        assert loaded["workflow_id"] == "wf-1"

    def test_rollback_writes_hint(self, tmp_path: Path):
        journal_root = tmp_path / "journals"
        create_checkpoint(journal_root, "cp-rb-1", project_root=tmp_path)
        assert rollback_to_checkpoint(journal_root, "cp-rb-1", project_root=tmp_path)
        hint = journal_root / "checkpoints" / "cp-rb-1" / "rollback_hint.json"
        assert hint.exists()

    def test_missing_checkpoint_returns_false(self, tmp_path: Path):
        assert not rollback_to_checkpoint(
            tmp_path / "journals",
            "missing",
            project_root=tmp_path,
        )
