---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Versioning Quick Reference

**Status:** Active  
**Owner:** AI Dev Kit / Book Project Lead  
**Last Updated:** 2025-12-04  
**Related Work:** Epic 3, Story 2, Task 5 (E3:S02:T05)

**For:** Developers, AI agents, and project maintainers  
**Purpose:** Quick lookup for common versioning scenarios and rules

---

## Version Schema

**Format:** `RC.EPIC.STORY.TASK+BUILD`

| Component | When It Changes | When It Resets | Example |
|-----------|----------------|----------------|---------|
| **RC** | Entering RC phase | Never | `0` → `1` |
| **EPIC** | Starting new epic | Never | `2` → `3` |
| **STORY** | Starting new story | When EPIC changes | `1` → `2` |
| **TASK** | Starting new task | When STORY changes | `1` → `2` |
| **BUILD** | Every release | When TASK changes | `1` → `2` → `3` |

---

## Quick Decision Flow

```
Starting new work?
├─ New Epic? → Set EPIC, STORY=1, TASK=1, BUILD=1
├─ New Story? → Keep EPIC, Set STORY, TASK=1, BUILD=1
├─ New Task? → Keep EPIC/STORY, Set TASK, BUILD=1
└─ Same Task? → Keep EPIC/STORY/TASK, Increment BUILD
```

---

## Common Scenarios

### Scenario 1: New Epic
**If:** Starting work on a completely new epic  
**Then:** `0.{NEW_EPIC}.1.1+1`

**Example:**
- Current: `0.2.4.9+3`
- New Epic 3: `0.3.1.1+1`

---

### Scenario 2: New Story
**If:** Starting a new story within current epic  
**Then:** `0.\{EPIC\}.{NEW_STORY}.1+1`

**Example:**
- Current: `0.3.1.6+1`
- New Story 2: `0.3.2.1+1`

---

### Scenario 3: New Task
**If:** Starting a new task within current story  
**Then:** `0.\{EPIC\}.\{STORY\}.{NEW_TASK}+1`

**Example:**
- Current: `0.3.2.4+1`
- New Task 5: `0.3.2.5+1`

---

### Scenario 4: Same Task (Bugfix/Hotfix)
**If:** Releasing another build of the same task  
**Then:** `0.\{EPIC\}.\{STORY\}.\{TASK\}+{BUILD+1}`

**Example:**
- Current: `0.3.2.4+1`
- Next build: `0.3.2.4+2`

---

## Critical Rules

### ✅ DO
- **Always use full format:** `E3:S02:T05` (never standalone `T05`)
- **Order by version number:** Changelog entries ordered by `RC.EPIC.STORY.TASK+BUILD`, not timestamp
- **Reset BUILD to 1:** When moving to a new TASK
- **Read Story file:** Before bumping version to identify completed task
- **Compare task numbers:** Completed task vs. current `VERSION_TASK` to detect transitions

### ❌ DON'T
- **Never increment BUILD for new task:** Always increment TASK and reset BUILD
- **Never use chronological ordering:** Use canonical ordering (by version number)
- **Never skip task numbers:** Tasks must be sequential within a story
- **Never assume same task:** Always verify by reading Story file

---

## Version Comparison (Canonical Ordering)

**Ordering:** RC → EPIC → STORY → TASK → BUILD

**Examples:**
- `0.2.4.9+3` < `0.3.2.4+1` (Epic 2 < Epic 3)
- `0.3.2.1+1` < `0.3.2.2+1` (Task 1 < Task 2)
- `0.3.2.4+1` < `0.3.2.4+2` (Build 1 < Build 2)

**Rule:** Lower version numbers appear first in changelog, regardless of commit time.

---

## RW Step 2: Version Bump Logic

**MANDATORY 6-Step Procedure:**

1. **READ** current version from `version.py`
2. **IDENTIFY** completed task from Story file (find `✅ COMPLETE` marker)
3. **COMPARE** completed task number vs. current `VERSION_TASK`:
   - If `completed > current`: **NEW TASK** → Set `VERSION_TASK = completed`, `VERSION_BUILD = 1`
   - If `completed == current`: **SAME TASK** → Keep `VERSION_TASK`, increment `VERSION_BUILD`
   - If `completed < current`: **ERROR** → Stop and report
4. **VALIDATE** before updating
5. **UPDATE** version file
6. **VALIDATE** after updating

---

## Changelog Ordering

**CRITICAL:** Changelog entries must be ordered by version number, NOT by insertion time.

**RW Step 4 Requirements:**
1. Read ALL existing changelog entries
2. Extract version numbers from each entry
3. Compare new version with existing versions using canonical ordering
4. Find correct insertion point (not necessarily at top)
5. Insert at correct position
6. Validate ordering after insertion

**Validator:** `validate_changelog_format.py` checks canonical ordering automatically.

---

## Common Anti-Patterns

| Anti-Pattern | Symptom | Fix |
|--------------|---------|-----|
| **BUILD incremented for new task** | `0.3.2.4+2` when Task 5 completed | Should be `0.3.2.5+1` |
| **Changelog chronological order** | Newer versions at top | Order by version number |
| **Standalone task reference** | Using `T05` instead of `E3:S02:T05` | Always use full format |
| **Missing task transition detection** | BUILD incremented instead of TASK | Read Story file to identify completed task |

---

## Version File Format

```python
VERSION_RC = 0
VERSION_EPIC = 3
VERSION_STORY = 2
VERSION_TASK = 6
VERSION_BUILD = 1
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
# Result: "0.3.2.6+1"
```

---

## Related Documentation

- **Full Cookbook:** `docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Versioning Strategy:** `packages/frameworks/numbering & versioning/versioning-strategy.md`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Error Reference:** `docs/architecture/standards-and-adrs/versioning-error-reference-guide.md`

---

**Last Updated:** 2025-12-04  
**Version:** v0.3.2.6+1

