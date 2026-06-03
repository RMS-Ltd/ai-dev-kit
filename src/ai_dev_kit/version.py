"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 6      # Epic 6 — Framework Management
VERSION_STORY = 9     # Story 9 — AI Dev Kit installation and adopter integration
VERSION_TASK = 7      # Task 7 — BR-078 structure template missing (kanban init)
VERSION_BUILD = 1     # Build 1: GitHub #10 intake + board wiring (RW -k --art)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.9.7+1
