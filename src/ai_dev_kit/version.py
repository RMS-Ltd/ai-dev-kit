"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management
VERSION_STORY = 15    # Story 15 — IPW governance and publication contract
VERSION_TASK = 1      # Task 1 — BR-066 corpus tail Phase 3
VERSION_BUILD = 3     # Build 3: audit-inventory 0 unwired, BR-066 RESOLVED

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.15.1+3
