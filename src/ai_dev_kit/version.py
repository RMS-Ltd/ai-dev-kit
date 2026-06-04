"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 1      # Epic 1 — AI Dev Kit Core
VERSION_STORY = 2     # Story 2 — Package & Repo Architecture
VERSION_TASK = 14     # Task 14 — Adopter external dependency tracking (FR-003)
VERSION_BUILD = 1     # Build 1: adopter guide + copy-paste upstream tracking templates

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.1.2.14+1 (E01:S02:T14)
