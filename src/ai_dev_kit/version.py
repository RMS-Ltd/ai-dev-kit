"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 13    # Story 13 — Workflow Management Package Implementation Review
VERSION_TASK = 8      # Task 8 — Sync packaged workflows with live repo (FR-106)
VERSION_BUILD = 1     # Build 1: kanban init — FR-106 intake + four-surface wiring

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.13.8+1
