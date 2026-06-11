#!/usr/bin/env python3
"""Tests for workflow_env.py (FR-128 / E02:S03:T12)."""

import os
import sys
from pathlib import Path

script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir))

from workflow_env import WorkflowEnvironment  # noqa: E402


def _clear_env(*keys: str) -> None:
    for key in keys:
        os.environ.pop(key, None)


def test_workflow_env_override():
    _clear_env("WORKFLOW_ENV", "CURSOR_MODE", "CLAUDE_CODE", "OPENCODE", "TERM_PROGRAM")
    os.environ["WORKFLOW_ENV"] = "opencode"
    assert WorkflowEnvironment.detect() == WorkflowEnvironment.OPENCODE
    _clear_env("WORKFLOW_ENV")


def test_cursor_detection_and_plan_session():
    _clear_env("WORKFLOW_ENV", "CURSOR_MODE", "CLAUDE_CODE", "OPENCODE", "TERM_PROGRAM", "PLANNING_MODE")
    os.environ["CURSOR_MODE"] = "plan"
    assert WorkflowEnvironment.detect() == WorkflowEnvironment.CURSOR
    assert WorkflowEnvironment.is_plan_session() is True
    os.environ["CURSOR_MODE"] = "agent"
    assert WorkflowEnvironment.is_plan_session() is False
    _clear_env("CURSOR_MODE")


def test_claude_code_planning_mode():
    _clear_env("WORKFLOW_ENV", "CURSOR_MODE", "CLAUDE_CODE", "OPENCODE", "PLANNING_MODE")
    os.environ["CLAUDE_CODE"] = "1"
    os.environ["PLANNING_MODE"] = "true"
    assert WorkflowEnvironment.detect() == WorkflowEnvironment.CLAUDE_CODE
    assert WorkflowEnvironment.is_plan_session() is True
    os.environ["PLANNING_MODE"] = "false"
    assert WorkflowEnvironment.is_plan_session() is False
    _clear_env("CLAUDE_CODE", "PLANNING_MODE")


def test_opencode_always_implementation():
    _clear_env("WORKFLOW_ENV", "CURSOR_MODE", "CLAUDE_CODE", "OPENCODE", "PLANNING_MODE")
    os.environ["WORKFLOW_ENV"] = "opencode"
    assert WorkflowEnvironment.has_plan_mode() is False
    assert WorkflowEnvironment.is_plan_session() is False
    assert WorkflowEnvironment.is_implementation_session() is True
    assert WorkflowEnvironment.can_spawn_subagent() is True
    _clear_env("WORKFLOW_ENV")


def test_execution_mode_via_planning_mode_env():
    _clear_env("WORKFLOW_ENV", "PLANNING_MODE", "IMPLEMENTATION_MODE", "CURSOR_MODE")
    os.environ["PLANNING_MODE"] = "true"
    assert WorkflowEnvironment.execution_mode() == "planning"
    _clear_env("PLANNING_MODE")
    os.environ["IMPLEMENTATION_MODE"] = "true"
    assert WorkflowEnvironment.execution_mode() == "implementation"
    _clear_env("IMPLEMENTATION_MODE")


if __name__ == "__main__":
    test_workflow_env_override()
    test_cursor_detection_and_plan_session()
    test_claude_code_planning_mode()
    test_opencode_always_implementation()
    test_execution_mode_via_planning_mode_env()
    print("All workflow_env tests passed")
