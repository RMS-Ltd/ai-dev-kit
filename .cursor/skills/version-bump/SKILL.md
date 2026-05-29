---
name: version-bump
description: Updates version files following RC.EPIC.STORY.TASK+BUILD schema
---

> **Use with agent reasoning; do not treat as deterministic script.** Apply schema and integration points via intelligent analysis; adapt to context.

## Version Bump Procedure

### Step 1: Update Version File
1. Locate `src/fynd_deals/version.py` file
2. Update version constants to match new version schema
3. Update version string comment with task context

### Step 2: Validate Version Format
1. Verify version follows RC.EPIC.STORY.TASK+BUILD pattern
2. Validate each component:
   - RC: 0 for development, 1+ for release candidates
   - EPIC: Current active epic number
   - STORY: Story within epic
   - TASK: Task within story
   - BUILD: 0 for doc-init, 1+ for functional changes

### Step 3: Update Version Comments
1. Update comment for current version string
2. Include task context and purpose
3. Ensure consistency with changelog entries

## Schema Rules

**Format:** `RC.EPIC.STORY.TASK+BUILD`
**Example:** `0.6.6.41+0` (E6:S06:T41+0)

**Build Types:**
- `+0`: Task creation (documentation only)
- `+1+`: Functional changes and implementations

## Integration Points

- Works with RW Agent during release workflows
- Supports changelog generation for version updates
- Integrates with git commit operations
