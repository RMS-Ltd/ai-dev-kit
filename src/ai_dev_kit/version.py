"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 8      # Epic 8 — Tooling & Automation
VERSION_STORY = 3     # Story 3 — Automation Scripts
VERSION_TASK = 10     # Task 10 — BR-096 CodeQL incomplete URL substring sanitization
VERSION_BUILD = 1     # Build 1: urlparse hostname check in portal identity test

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.8.3.10+1 (E08:S03:T10)
