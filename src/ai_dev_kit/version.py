"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 7      # Epic 7 — Codebase Maintenance and Review
VERSION_STORY = 7     # Story 7 — Code Reviews
VERSION_TASK = 1      # Task 1 — Comprehensive workflow machinery code review (FR-107)
VERSION_BUILD = 1     # Build 1: kanban init + machinery code review report (RW -k --art E07:S07:T01)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.7.7.1+1
