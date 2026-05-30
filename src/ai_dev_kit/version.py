"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 16    # Story 16 — Perpetual ongoing workflow operations
VERSION_TASK = 16     # Task 16 — UKW archive completed rows (FR-102)
VERSION_BUILD = 2     # Build 2: UKW -c contract (ADR-010, agents, helpers, prune gating)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.16+2
