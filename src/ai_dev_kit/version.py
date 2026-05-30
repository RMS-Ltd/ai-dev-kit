"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 16    # Story 16 — Perpetual Ongoing Workflow Operations
VERSION_TASK = 15     # Task 15 — Workflow initiation cheatsheet (UXR-015)
VERSION_BUILD = 1     # Build 1: docs/guides workflow-initiation-cheatsheet + IPP + discoverability links

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.16.15+1
