"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 6      # Epic 6 — Framework Management
VERSION_STORY = 7     # Story 7 — ADK implementation analysis and package management
VERSION_TASK = 107    # Task 107 — IDE command whitelist optimization
VERSION_BUILD = 3     # Build 3: ADR-013 whitelist catalog + validator + isolated pytest (RW)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.7.107+3
