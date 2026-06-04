"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 5      # Epic 5 — Documentation Management
VERSION_STORY = 1     # Story 1 — FR Repo (historical registry)
VERSION_TASK = 76     # Task 76 — Changelog directory consolidation (UXR-018)
VERSION_BUILD = 1     # Build 1: Kanban init — UXR-018 atomic intake

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.5.1.76+1
