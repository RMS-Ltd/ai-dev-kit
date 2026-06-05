"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 7      # Epic 7 — Codebase Maintenance
VERSION_STORY = 7     # Story 7 — Code Reviews
VERSION_TASK = 3      # Task 3 — BR-091 workflow validator slug path resolution
VERSION_BUILD = 1     # Build 1: workflow-mgt slug resolver + bridge template path

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.7.7.3+1 (E07:S07:T03)
