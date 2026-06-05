"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 1     # Story 1 — RW Agent Execution and Docs
VERSION_TASK = 24     # Task 24 — RW BUILD increment and tag immutability (BR-097)
VERSION_BUILD = 2     # Build 2: push_rw_release.py — scoped Step 12 push (no --tags)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
