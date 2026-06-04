"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 7      # Epic 7 — Project Review
VERSION_STORY = 7     # Story 7 — Code Reviews
VERSION_TASK = 3      # Task 3 — BR-091 workflow validator slug paths
VERSION_BUILD = 0     # Build 0: Kanban documentation setup (RW -k --art --doc-policy-zero)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.7.7.3+0 (E07:S07:T03)
