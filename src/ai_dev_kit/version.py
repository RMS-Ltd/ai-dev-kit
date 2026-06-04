"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 5      # Epic 5 — Documentation Management
VERSION_STORY = 9     # Story 9 — Docusaurus Documentation Portal
VERSION_TASK = 12     # Task 12 — Changelog directory consolidation (UXR-018)
VERSION_BUILD = 3     # Build 3: UXR-018 coordinate remediation; E05:S01 CLOSED; T76 removed

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.5.9.12+3 (E05:S09:T12)
