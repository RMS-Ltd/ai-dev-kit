"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 11    # Story 11 — Kanban Granularity & Discrete Task Docs
VERSION_TASK = 7      # Task 7 — Migrate Embedded Tasks to Discrete Task Documents (FR-016)
VERSION_BUILD = 5     # Build 5: Wave 0 catalog — embedded/discrete task census

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
