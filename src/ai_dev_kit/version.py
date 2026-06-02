"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 7      # Epic 7 — Codebase maintenance
VERSION_STORY = 1     # Story 1 — Codebase maintenance tasks
VERSION_TASK = 9      # Task 9 — Kanban template governance (UXR-005)
VERSION_BUILD = 5     # Build 5: MoSCOW spacing validator + corpus (RW --art)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.7.1.9+5
