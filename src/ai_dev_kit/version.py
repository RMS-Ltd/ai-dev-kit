"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 6      # Epic 6 — Framework Management
VERSION_STORY = 9     # Story 9 — AI Dev Kit installation and adopter integration
VERSION_TASK = 19     # Task 19 — BR-088 version_file scaffold (mode C)
VERSION_BUILD = 1     # Build 1: ensure_version_file_scaffold + sign-off contract

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.9.19+1 (E06:S09:T19)
