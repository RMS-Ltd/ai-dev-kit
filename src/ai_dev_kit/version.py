"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 6     # Story 6 — Comprehensive Canonical E/S/T Template System
VERSION_TASK = 6      # Task 6 — BR-005 CANONICAL_EPICS.md gap verification closure
VERSION_BUILD = 4     # Build 4: BR-005 Fix 1 verification + semver tag collision recovery

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
