"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

Schema: RC.EPIC.STORY.TASK+BUILD
- RC: Release Candidate (0 = development, 1+ = release candidate)
- EPIC: Dev-kit Epic number (1-4+)
- STORY: Story number within epic
- TASK: Task number within story
- BUILD: Build number (increments per release within task)

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2: Workflow Management Framework
VERSION_STORY = 16    # Story 16: Perpetual ongoing workflow operations
VERSION_TASK = 12     # Task 12: IPW ADR necessity checklist (FR-100 intake — RW -k)
VERSION_BUILD = 1     # Build 1: FR-100 + E2:S16:T12 kanban wiring (--art)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.12+1
