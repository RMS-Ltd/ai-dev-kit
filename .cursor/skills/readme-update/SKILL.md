---
name: readme-update
description: Update README with new version info
---

> **Use with agent reasoning; do not treat as deterministic script.** Apply procedure via intelligent analysis; adapt to context and agent-driven execution.

## README Update Procedure

### Step 1: Version Information Update
1. Locate README.md file in project root
2. Update version information to reflect new version
3. Ensure version format matches current version schema
4. Update date information if present

### Step 2: Cross-Reference Validation
1. Verify all version references are consistent
2. Check for hardcoded version numbers
3. Update links to changelog or documentation
4. Ensure all references point to correct version

### Step 3: Content Consistency
1. Validate README content matches current project state
2. Update feature descriptions if needed
3. Ensure installation instructions are current
4. Verify all links and references are functional

### Step 4: Format Validation
1. Ensure proper markdown formatting
2. Validate heading structure
3. Check for consistent styling
4. Verify table of contents if present

## Integration Points

- Works with RW Agent during release workflows
- Supports Documentation Agent for consistency
- Provides version update services to all workflows

## Version Schema

**Format:** `v{RC.EPIC.STORY.TASK+BUILD}`
**Example:** `v0.6.6.41+0`
**Location:** README.md root section

## Validation Rules

- Version information matches current version
- All cross-references are accurate
- Links are functional and current
- Formatting follows project standards
