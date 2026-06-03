"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 6      # Epic 6 — ADK Installation and Adopter Integration
VERSION_STORY = 9     # Story 9 — Installation and adopter integration
VERSION_TASK = 15     # Task 15 — Install/setup interactive feedback external SemVer (FR-108)
VERSION_BUILD = 1     # Build 1: FR-108 install UX SemVer banners + telemetry alignment

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.6.9.15+1
