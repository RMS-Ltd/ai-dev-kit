"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 1      # Epic 1: AI Dev Kit Core
VERSION_STORY = 4     # Story 4: Repository branding and renaming
VERSION_TASK = 3      # Task 3: Spin off book epic to private repository (FR-099)
VERSION_BUILD = 2     # Build 2: FR-099 Phase 3–4 board re-anchor (--art)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.1.4.3+2
