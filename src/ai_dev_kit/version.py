"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 7      # Epic 7 — Codebase Maintenance
VERSION_STORY = 7     # Story 7 — Code Reviews
VERSION_TASK = 2      # Task 2 — CI pytest gate for workflow scripts (H1)
VERSION_BUILD = 1     # Build 1: workflow-scripts-pytest CI gate (RW --art E07:S07:T02)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.7.7.2+1
