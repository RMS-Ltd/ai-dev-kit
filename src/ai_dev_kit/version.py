"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 19    # Story 19 — FR/BR/UXR abstract governance and intake
VERSION_TASK = 3      # Task 3 — E6:S07 default-housing investigation (FR-087)
VERSION_BUILD = 0     # Build 0: Wave 4 doc-only — S07 re-housing + charter narrow (BR-067 doc-policy-zero)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.4.19.3+0
