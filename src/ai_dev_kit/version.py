"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 5      # Epic 5
VERSION_STORY = 1     # Story 1
VERSION_TASK = 62     # Task 62
VERSION_BUILD = 1     # Build 1: FR-062 install receipt + release CI (dev integration)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.5.1.62+1
