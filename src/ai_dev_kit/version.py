"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 4      # Epic 4 — Kanban Framework
VERSION_STORY = 19    # Story 19 — FR/BR/UXR abstract governance and intake
VERSION_TASK = 9      # Task 9 — UXR-014 two-digit E/S/T identifier default formatting
VERSION_BUILD = 1     # Build 1: kanban init — UXR-014 atomic intake + board wiring

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.4.19.9+1
