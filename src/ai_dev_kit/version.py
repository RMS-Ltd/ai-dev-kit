"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 15    # Story 15 — IPW governance and publication contract
VERSION_TASK = 8      # Task 8 — FR-097 board stamp authority (forensic report backfill)
VERSION_BUILD = 4     # Build 4: Step 9 readiness report PASS correction (docs-only)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.15.8+4
