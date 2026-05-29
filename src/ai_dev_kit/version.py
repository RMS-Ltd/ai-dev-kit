"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 6     # Story 6 — Comprehensive canonical EST template system
VERSION_TASK = 1      # Task 1 — FR-005 closure and kanban reconciliation
VERSION_BUILD = 1     # Build 1: FR-005 audit, board/FR sync, discrete task doc

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.4.6.1+1
