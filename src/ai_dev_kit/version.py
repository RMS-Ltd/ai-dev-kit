"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 1     # Story 1 — RW agent execution and docs
VERSION_TASK = 23     # Task 23 — Tool-agnostic workflow step tracking + run logs
VERSION_BUILD = 1     # Build 1: ADR-011, tracker contract, agent run log v1 schema, governance sweep

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.1.23+1
