"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 5      # Epic 5 — Documentation Management
VERSION_STORY = 9     # Story 9 — Docusaurus Documentation Portal
VERSION_TASK = 14     # Task 14 — BR-093 CI workflow deduplication (IPW recovery)
VERSION_BUILD = 1     # Build 1: IPP persistence (RW -d --art)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.5.9.14+1 (E05:S09:T14)
