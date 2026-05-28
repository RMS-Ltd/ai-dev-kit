"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 6      # Epic 6
VERSION_STORY = 9     # Story 9
VERSION_TASK = 3      # Task 3
VERSION_BUILD = 2     # Build 2: FR-082 canonical RMS-Ltd/ai-dev-kit bootstrap + rewire

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.9.3+2
