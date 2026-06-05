"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 8     # Story 8 — Intelligent Epic Matching and Canonical Adoption
VERSION_TASK = 5      # Task 5 — Migration plan presentation (FR-009 AC-10)
VERSION_BUILD = 2     # Build 2: RW Step 7 kboard structure-prune (E04:S08:T05)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
