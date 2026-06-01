"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 19    # Story 19 — FR/BR/UXR abstract governance and intake
VERSION_TASK = 8      # Task 8 — FR-072 Approach D D2–D4 (merged T07)
VERSION_BUILD = 3     # Build 3: Step 9 release-readiness artifacts (RW -d)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.4.19.8+3
