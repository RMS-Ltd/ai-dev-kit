---
name: version-bump
description: Updates version files following RC.EPIC.STORY.TASK+BUILD schema
---

> **Use with agent reasoning; do not treat as deterministic script.** Load paths from `rw-config.yaml` at project root.

## Version Bump Procedure

### Step 1: Update Version File
1. Read `version_file` from `rw-config.yaml` (ai-dev-kit: `src/ai_dev_kit/version.py`)
2. Update `VERSION_RC`, `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`
3. Update trailing `# Current:` comment with task context

### Step 2: Perpetual tasks (BR-075)
- For `RW` / `RW -k` on perpetual maintenance tasks: **same E/S/T**, increment **`VERSION_BUILD` only** before any kanban edits.
- Step 9 `validate_version_bump.py` fails if staged BUILD ≤ HEAD BUILD for perpetual same-task releases.

### Step 3: Validate Version Format
- Pattern: `RC.EPIC.STORY.TASK+BUILD`
- `+0`: doc-init only; `+1+`: functional / perpetual run increments

## Integration Points

- RW Agent Step 2 (before Step 7)
- `validate_version_bump.py --strict --requested E:S:T --art`
