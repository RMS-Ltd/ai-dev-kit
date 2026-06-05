"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release Candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 9     # Story 9 — Bug Fixes and Agentic Intelligence
VERSION_TASK = 1      # Task 1 — BR-007 verification and closure
VERSION_BUILD = 1     # Build 1: BR-007 verification wave; RF9 gap fix in analyze_structure.py

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
