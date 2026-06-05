"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 1     # Story 1 — RW Agent Execution & Docs
VERSION_TASK = 24     # Task 24 — BR-097 BUILD increment + tag immutability (kanban init)
VERSION_BUILD = 0     # Build 0: kanban-init intake (RW -k --art --doc-policy-zero)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
