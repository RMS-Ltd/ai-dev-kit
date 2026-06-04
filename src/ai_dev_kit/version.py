"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 6      # Epic 6 — Framework Management
VERSION_STORY = 9     # Story 9 — AI Dev Kit installation and adopter integration
VERSION_TASK = 20     # Task 20 — FR-108 install/setup error code registry
VERSION_BUILD = 2     # Build 2: IPP status sync post-RW (E06:S09:T20)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.9.20+2 (E06:S09:T20)
