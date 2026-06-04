"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 5      # Epic 5 — Documentation Management
VERSION_STORY = 9     # Story 9 — Docusaurus Documentation Portal
VERSION_TASK = 13     # Task 13 — BR-090 Docusaurus faster + package alignment
VERSION_BUILD = 0     # Build 0: Kanban documentation setup (RW -k --art --doc-policy-zero)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.5.9.13+0 (E05:S09:T13)
