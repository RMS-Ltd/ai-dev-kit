"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 16    # Story 16 — Perpetual Ongoing Workflow Operations
VERSION_TASK = 4      # Task 4 — Ad-hoc Kanban synchronization and hygiene (perpetual)
VERSION_BUILD = 28    # Build 28: kboard/fbuboard C-band dependency-ordered queue (RW -k)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.4+28 (E02:S16:T04)
