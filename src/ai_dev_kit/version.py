"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 16    # Story 16 — Perpetual ongoing workflow operations
VERSION_TASK = 3      # Task 3 — Workflow maintenance (Perpetual); Tranche 3B ACTIVE_FIX
VERSION_BUILD = 5     # Build 5: T13 SitRep IPP + BR-059 E10:S01 MoSCOW remediation

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.3+5
