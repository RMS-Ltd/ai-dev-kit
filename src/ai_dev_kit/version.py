"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 3      # Epic 3 — Numbering & Versioning Framework
VERSION_STORY = 2     # Story 2 — Versioning cookbook and examples
VERSION_TASK = 12     # Task 12 — Task-touch SemVer collision remediation (wave 3 FBU closure)
VERSION_BUILD = 5     # Build 5: wave 3 verification + FR-045/046/BR-061 closure

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.3.2.12+5 (E03:S02:T12)
