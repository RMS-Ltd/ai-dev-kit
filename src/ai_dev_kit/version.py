"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 5      # Epic 5 — FR Repo / Docusaurus portal
VERSION_STORY = 9     # Story 9 — Docusaurus Documentation Portal
VERSION_TASK = 13     # Task 13 — BR-090 Wave 2 build closure (RW --art)
VERSION_BUILD = 2     # Build 2: MDX link remediation + green npm run build

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
