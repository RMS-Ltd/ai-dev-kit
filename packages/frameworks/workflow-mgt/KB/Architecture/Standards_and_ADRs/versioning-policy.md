---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Versioning Policy

**Status:** Active
**Owner:** Engineering
**Last Updated:** 2025-11-26
**Related Work:** Epic 20, Story 11

---

## Purpose

Defines semantic versioning for Confidentia.

Enables parallel epic development.
Maintains clear version tracking.
Provides task-level granularity.

---

## Schema

**Format:** `RC.EPIC.STORY.TASK+BUILD`

**Structure:**
- **RC:** Release Candidate (0 = development, 1+ = release candidate)
- **EPIC:** Epic number (e.g., 20)
- **STORY:** Story number within epic (e.g., 11)
- **TASK:** Task number within story (e.g., 15)
- **BUILD:** Build number (increments per release within task)

**Examples:**
- `0.20.11.3+1` - Development, Epic 20, Story 11, Task 3, Build 1
- `0.20.11.3+2` - Development, Epic 20, Story 11, Task 3, Build 2
- `0.20.11.4+1` - Development, Epic 20, Story 11, Task 4, Build 1
- `1.20.11.3+1` - Release Candidate 1, Epic 20, Story 11, Task 3, Build 1

---

## Rules

### RC (Release Candidate)
- **0:** Development phase (default)
- **1+:** Release candidate phase
- Increment when entering release candidate phase

### EPIC
- Epic number
- Set when starting new epic
- Constant for all work within that epic

### STORY
- Story number within epic
- Set when starting new story
- Constant for all work within that story

### TASK
- Task number within story
- Set when starting new task
- Constant for all releases within that task

### BUILD
- Build number (increments per release within task)
- Starts at 1 for first release of task
- Increments with each subsequent release
- Resets to 1 when moving to new task

---

## Progression

**Working on Epic 20, Story 11, Task 3:**
- `0.20.11.3+1` - First release
- `0.20.11.3+2` - Second release
- `0.20.11.3+3` - Third release

**Moving to Task 4:**
- `0.20.11.4+1` - First release
- `0.20.11.4+2` - Second release

---

## Parallel Development

**Branch Strategy:**

Each epic works in parallel on its own version stream:
- Epic 3: `0.3.S.T+B`
- Epic 12: `0.12.S.T+B`
- Epic 18: `0.18.S.T+B`
- Epic 19: `0.19.S.T+B`
- Epic 20: `0.20.S.T+B`

Where:
- S = Story number
- T = Task number
- B = Build number

**Merging Strategy:**

When merging epics:
1. Maintain epic numbers in merged code
2. Document epic mapping in CHANGELOG
3. Each epic maintains its own version stream

---

## Version File

**Location:** `src/confidentia/version.py`

**Format:**
```python
__version__ = "0.20.11.4+1"
```

**Note:** The `+` character is part of the version string and must be preserved.

---

## CHANGELOG Format

Each version entry in `CHANGELOG.md`:

```markdown
### [0.20.11.4+1] - 2025-11-25
🔧 Category: Brief description
- Detailed change description
- Additional changes
- See [CHANGELOG_v0.20.11.4+1.md](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.20.11.4+1.md)
```

**Note:** Version numbers with `+` must be properly escaped or quoted in markdown links.

---

## Related Documentation

**Core Policy Documents:**
- **[Versioning Strategy](versioning-strategy.md)** - Complete versioning strategy with forensic traceability system, canonical ordering, and immutability rules
- **[Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md)** - Work item structure (Epic → Story → Task) and how they map to version schema
- **[Release Workflow Reference](../../Documentation/Developer_Docs/vwmp/release-workflow-reference.md)** - Automated implementation of versioning schema
- **[Cursor Rules](../../../../.cursorrules)** - Fundamental system rules that enforce versioning requirements ⭐

**Implementation:**
- **CHANGELOG:** `CHANGELOG.md` - Main summary changelog
- **Changelog Archive:** `docs/changelog-and-release-notes/changelog-archive/` - Detailed changelog files
- **Branch Context Validator:** `scripts/validation/validate_branch_context.py`
- **Changelog Format Validator:** `scripts/validation/validate_changelog_format.py`

---

## Revision History

| Date | Version | Changes |
| --- | --- | --- |
| 2025-11-26 | 2.1 | Refined to poetic elegance |
| 2025-11-25 | 2.0 | Migrated to RC.EPIC.STORY.TASK+BUILD schema |
| 2025-11-18 | 1.0 | Initial versioning policy with x.X.x.x schema |

---

_Last updated: 2025-11-26_
