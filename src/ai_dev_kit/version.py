"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 1      # Epic 1
VERSION_STORY = 4     # Story 4
VERSION_TASK = 7      # Task 7
VERSION_BUILD = 2     # Build 2: FR-099 Phase 4 rewire + verify (RW --art)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.1.4.7+2
