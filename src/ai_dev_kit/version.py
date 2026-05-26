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
VERSION_EPIC = 6      # Epic 6: Framework Management
VERSION_STORY = 9     # Story 9: AI Dev Kit installation and adopter integration
VERSION_TASK = 5      # Task 5: ADK workflow skill pack for ECC (FR-098 Phase 1 — intermediate doc release)
VERSION_BUILD = 1     # Build 1: FR-098 SemVer strategy encoded (--art)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.9.5+1
