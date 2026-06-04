"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 3      # Epic 3 — Numbering & Versioning Framework
VERSION_STORY = 2     # Story 2 — Versioning cookbook & examples
VERSION_TASK = 12     # Task 12 — Task-touch SemVer collision remediation wave 2 (FR-045/046)
VERSION_BUILD = 4     # Build 4: PATCH/core injective finalize, registry repair, audit/validate

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.3.2.12+4 (E03:S02:T12)
