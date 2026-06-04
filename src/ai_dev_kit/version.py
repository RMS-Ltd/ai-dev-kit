"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 9      # Epic 9 — Release Candidate Readiness
VERSION_STORY = 1     # Story 1 — RC Readiness Gap Analysis
VERSION_TASK = 3      # Task 3 — FR-032.3 gap comparison (sequential)
VERSION_BUILD = 1     # Build 1: T01/T02 prerequisites + gap report + IPP

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.9.1.3+1 (E09:S01:T03)
