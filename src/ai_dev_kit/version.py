"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 2      # Epic 2 — Workflow Management Framework
VERSION_STORY = 8     # Story 8 — Harden Release Workflow Reliability
VERSION_TASK = 8      # Task 8 — FR-059 closure (tests, AC evidence, COMPLETE)
VERSION_BUILD = 3     # Build 3: schema/perf tests, FR-097 stamp manifest, kanban closure

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Current: 0.2.8.8+3
