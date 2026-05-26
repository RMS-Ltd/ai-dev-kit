"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2: Workflow Management Framework
VERSION_STORY = 1     # Story 1: RW agent execution and docs
VERSION_TASK = 22     # Task 22: Perpetual-task VERSION_BUILD in version.py (BR-075)
VERSION_BUILD = 1     # Build 1: BR-075 intake + task wiring (RW -k --art)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.1.22+1
