"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 16    # Story 16 — Perpetual ongoing workflow operations
VERSION_TASK = 4      # Task 4 — Ad-hoc Kanban synchronization and hygiene (Perpetual)
VERSION_BUILD = 18    # Build 18: UKW + value-audit deferrals; FR-097 STRUCTURE-only stamps

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.4+18
