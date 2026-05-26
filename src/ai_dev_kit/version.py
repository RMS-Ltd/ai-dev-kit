"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 6      # Epic 6: Framework Management
VERSION_STORY = 9     # Story 9: AI Dev Kit installation and adopter integration
VERSION_TASK = 6      # Task 6: ECC harness phases 2–5 (FR-098)
VERSION_BUILD = 4     # Build 4: cheatsheet throwaway E2E playbook (RW -d --art; docs-only)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.9.6+4
