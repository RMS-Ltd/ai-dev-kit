"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 6      # Epic 6 — ADK Installation and Adopter Integration
VERSION_STORY = 9     # Story 9 — Installation and adopter integration
VERSION_TASK = 14     # Task 14 — RW install story pattern prompt loop (BR-085)
VERSION_BUILD = 2     # Build 2: BR-085/083/084 ExpensesTracker T03 replay verification closure (RW -d E06:S09:T14)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.9.14+2
