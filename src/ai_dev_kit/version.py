"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 5      # Epic 5 — Documentation & Portal
VERSION_STORY = 9     # Story 9 — Docusaurus documentation portal
VERSION_TASK = 14     # Task 14 — Docusaurus CI dedup (BR-093 Wave 2 + BUILD remediation)
VERSION_BUILD = 3     # Build 3: Wave 2 FBU closure + tagged-BUILD collision guard

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
