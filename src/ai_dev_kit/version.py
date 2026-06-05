"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 19    # Story 19 — FR/BR/UXR abstract governance and intake
VERSION_TASK = 12     # Task 12 — Single-board consolidation (UXR-020 R3)
VERSION_BUILD = 2     # Build 2: ADR-018 Wave 2 — tooling skips deprecated fbuboard

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.4.19.12+2 (E04:S19:T12)
