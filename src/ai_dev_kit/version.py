"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 19    # Story 19 — FR/BR/UXR abstract governance and intake
VERSION_TASK = 10     # Task 10 — E7:S00 detasking (BR-076)
VERSION_BUILD = 2     # Build 2: E7:S00 detasked, historical anchors, intake S00 ban, BR-076 resolved

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.4.19.10+2
