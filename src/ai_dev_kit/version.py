"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 5      # Epic 5 — Documentation Management
VERSION_STORY = 9     # Story 9 — Docusaurus Documentation Portal
VERSION_TASK = 14     # Task 14 — BR-093 CI workflow deduplication
VERSION_BUILD = 2     # Build 2: merged build+deploy workflow (ADR-017)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.5.9.14+2 (E05:S09:T14)
