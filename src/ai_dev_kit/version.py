"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 7      # Epic 7
VERSION_STORY = 1     # Story 1
VERSION_TASK = 11     # Task 11
VERSION_BUILD = 1     # Build 1: FR-101 governance intake + Phase 0 inventory (--art RW)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.7.1.11+1
