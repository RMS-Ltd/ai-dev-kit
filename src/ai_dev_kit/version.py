"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2
VERSION_STORY = 16    # Story 16
VERSION_TASK = 4      # Task 4 (perpetual UKW)
VERSION_BUILD = 14    # Build 14: kanban hygiene — close T31/T08/T06 off boards (--art RW)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.4+14
