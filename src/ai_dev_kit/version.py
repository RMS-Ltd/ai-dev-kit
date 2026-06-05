"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 7     # Story 7 — Migration Support and Installation Modes
VERSION_TASK = 2      # Task 2 — FR-007 migration utilities and installation modes
VERSION_BUILD = 2     # Build 2: BUILD collision remediation (v0.4.911 tag exists)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
