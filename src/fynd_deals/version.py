"""
AI Dev Kit Version File

This file defines the version for the ai-dev-kit repository using the RC.EPIC.STORY.TASK+BUILD schema.

Schema: RC.EPIC.STORY.TASK+BUILD
- RC: Release Candidate (0 = development, 1+ = release candidate)
- EPIC: Dev-kit Epic number (1-4+)
- STORY: Story number within epic
- TASK: Task number within story
- BUILD: Build number (increments per release within task)

Version ordering is canonical (by version number, not timestamp).
This enables parallel epic development and accurate changelog ordering.

See: docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md
Framework: packages/frameworks/numbering & versioning/versioning-policy.md
"""

VERSION_RC = 0        # Release candidate (0 = development, 1+ = release candidate)
VERSION_EPIC = 2      # Epic number (Epic 2: Workflow Management Framework)
VERSION_STORY = 16    # Story number within epic (Story 16: Perpetual Ongoing Workflow Operations)
VERSION_TASK = 4      # Task number (E2:S16:T04 — Ad-hoc Kanban synchronization and hygiene)
VERSION_BUILD = 7     # Build number (UKW stale-task purge: 7 completed tasks archived from kboard)

# Composite version string using RC.EPIC.STORY.TASK+BUILD schema
# Format: RC.EPIC.STORY.TASK+BUILD
# Example: 0.3.1.3+1 = Development, Epic 3, Story 1, Task 3, Build 1
# Current: 0.2.16.4+7 = Development, Epic 2, Story 16, Task 4, Build 7
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"

# Validation Notes:
# - VERSION_RC must be >= 0
# - VERSION_EPIC must match active dev-kit epic (1-4+)
# - VERSION_STORY must match active story within epic
# - VERSION_TASK must match active task within story
# - VERSION_BUILD must be >= 0 (0 = doc-init/abstract space, 1+ = normal builds)
# - BUILD = 0 is valid for first-time E/S/T document creation (docs-only), or existing anchors when policy requires +0 (validate_version_bump.py --doc-policy-zero with --requested/--art; see BR-067)
# - BUILD >= 1 is required for functional changes
# - For existing E/S/T anchors (e.g. prior v0.6.9.1+1), increment BUILD to avoid version/tag collisions
# - Version must match branch context (validated by validate_branch_context.py)
# - Version format validated by validate_changelog_format.py
# - Abstract space awareness: FR-020 (validator recognizes +0 as valid)
