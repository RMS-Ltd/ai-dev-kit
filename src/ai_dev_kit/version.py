"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 15    # Story 15 — Procedural Task Template Generation and Hybrid Strategy
VERSION_TASK = 5      # Task 5 — Hybrid strategy maintainer/client docs (FR-029)
VERSION_BUILD = 1     # Build 1: generator path fix, hybrid guide, installer flag

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
