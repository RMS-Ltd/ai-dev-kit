"""Shared workflow runtime environment detection (FR-128 / E02:S03:T12)."""

from __future__ import annotations

import os
import sys
from typing import Optional


class WorkflowEnvironment:
    """Detect agent runtime and plan/implementation session semantics."""

    CURSOR = "cursor"
    CLAUDE_CODE = "claude-code"
    OPENCODE = "opencode"
    UNKNOWN = "unknown"

    _VALID = frozenset({CURSOR, CLAUDE_CODE, OPENCODE, UNKNOWN})

    @classmethod
    def detect(cls) -> str:
        override = os.environ.get("WORKFLOW_ENV", "").strip().lower()
        if override:
            if override in cls._VALID:
                return override
            return cls.UNKNOWN

        if cls._probe_cursor():
            return cls.CURSOR
        if cls._probe_claude_code():
            return cls.CLAUDE_CODE
        if cls._probe_opencode():
            return cls.OPENCODE
        return cls.UNKNOWN

    @classmethod
    def _probe_cursor(cls) -> bool:
        if os.environ.get("CURSOR_MODE"):
            return True
        return os.environ.get("TERM_PROGRAM", "").lower() == "cursor"

    @classmethod
    def _probe_claude_code(cls) -> bool:
        if os.environ.get("CLAUDE_CODE"):
            return True
        argv0 = (sys.argv[0] if sys.argv else "").lower()
        return "claude" in argv0

    @classmethod
    def _probe_opencode(cls) -> bool:
        return bool(os.environ.get("OPENCODE"))

    @classmethod
    def has_plan_mode(cls, env: Optional[str] = None) -> bool:
        env = env or cls.detect()
        return env in (cls.CURSOR, cls.CLAUDE_CODE)

    @classmethod
    def is_plan_session(cls, env: Optional[str] = None) -> bool:
        env = env or cls.detect()
        if env == cls.CURSOR:
            return os.environ.get("CURSOR_MODE", "").lower() == "plan"
        if env == cls.CLAUDE_CODE:
            return os.environ.get("PLANNING_MODE", "").lower() == "true"
        return False

    @classmethod
    def is_implementation_session(cls, env: Optional[str] = None) -> bool:
        env = env or cls.detect()
        if env == cls.OPENCODE:
            return True
        if env == cls.UNKNOWN:
            return os.environ.get("IMPLEMENTATION_MODE", "").lower() == "true"
        if env == cls.CURSOR:
            mode = os.environ.get("CURSOR_MODE", "").lower()
            return mode in ("agent", "implementation", "")
        if env == cls.CLAUDE_CODE:
            return not cls.is_plan_session(cls.CLAUDE_CODE)
        return False

    @classmethod
    def can_spawn_subagent(cls, env: Optional[str] = None) -> bool:
        env = env or cls.detect()
        return env in (cls.CURSOR, cls.CLAUDE_CODE, cls.OPENCODE)

    @classmethod
    def execution_mode(cls) -> str:
        """Return planning, implementation, or unknown for icw_handler compatibility."""
        if os.environ.get("PLANNING_MODE", "").lower() == "true":
            return "planning"
        if os.environ.get("IMPLEMENTATION_MODE", "").lower() == "true":
            return "implementation"
        if cls.is_plan_session():
            return "planning"
        if cls.is_implementation_session():
            return "implementation"
        return "unknown"
