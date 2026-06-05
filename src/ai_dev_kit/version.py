"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 8      # Epic 8 — Tooling & Automation
VERSION_STORY = 3     # Story 3 — Automation Scripts
VERSION_TASK = 9      # Task 9 — BR-095 CodeQL insecure temporary file (mktemp)
VERSION_BUILD = 1     # Build 1: replace mktemp with NamedTemporaryFile

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.8.3.9+1 (E08:S03:T09)
