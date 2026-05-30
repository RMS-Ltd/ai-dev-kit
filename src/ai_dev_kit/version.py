"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 5      # Epic 5 — Feature Request Repository
VERSION_STORY = 1     # Story 1 — FR Repo
VERSION_TASK = 46     # Task 46 — FR-046 closure wave (RW SemVer task-touch)
VERSION_BUILD = 7     # Build 7: closure audit, IPP, T07 supersession, kanban sync

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.5.1.46+7
