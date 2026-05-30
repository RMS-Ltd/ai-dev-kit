"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 16    # Story 16 — Perpetual Ongoing Workflow Operations
VERSION_TASK = 6      # Task 6 — UKW optional --rp deep reprioritization (FR-085)
VERSION_BUILD = 1     # Build 1: ADR-009, agent SoT, cheatsheet, IPP

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.6+1
