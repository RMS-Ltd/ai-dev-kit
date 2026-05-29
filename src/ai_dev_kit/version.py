"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2
VERSION_STORY = 16    # Story 16
VERSION_TASK = 10     # Task 10
VERSION_BUILD = 3     # Build 3: retire hf-ai-dev-kit; canonical private ai-dev-kit-book + public RMS-Ltd/ai-dev-kit URLs

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.10+3
