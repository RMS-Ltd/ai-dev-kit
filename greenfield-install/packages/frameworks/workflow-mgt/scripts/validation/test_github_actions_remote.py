"""Unit tests for validate_github_actions_remote (E02:S16:T05 / BR-104)."""

from __future__ import annotations

from validate_github_actions_remote import (
    evaluate_remote_status,
    latest_conclusions_for_head,
)


def test_latest_conclusions_picks_newest_per_workflow_on_head():
    runs = [
        {"name": "Tests", "headSha": "abc", "conclusion": "failure"},
        {"name": "Tests", "headSha": "abc", "conclusion": "success"},
        {"name": "Docusaurus site build", "headSha": "abc", "conclusion": "success"},
        {"name": "Tests", "headSha": "def", "conclusion": "failure"},
    ]
    got = latest_conclusions_for_head(
        runs,
        head_sha="abc",
        workflow_names=["Tests", "Docusaurus site build", "Greenfield install"],
    )
    assert got["Tests"] == "failure"
    assert got["Docusaurus site build"] == "success"
    assert got["Greenfield install"] is None


def test_evaluate_remote_status_flags_failures():
    failures, missing = evaluate_remote_status(
        {"Tests": "failure", "Greenfield install": None, "Workflow scripts pytest": "success"}
    )
    assert any("Tests" in f for f in failures)
    assert "Greenfield install" in missing


def test_evaluate_remote_status_ok_when_all_success():
    failures, missing = evaluate_remote_status(
        {"Tests": "success", "Docusaurus site build": "success"}
    )
    assert failures == []
    assert missing == []
