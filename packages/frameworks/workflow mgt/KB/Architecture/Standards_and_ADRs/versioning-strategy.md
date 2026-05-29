---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Versioning Strategy and Forensic Traceability

**Status:** Active
**Owner:** Engineering
**Last Updated:** 2025-01-27
**Related Work:** Epic 20, Story 11
**References:**
- [Versioning Policy (Schema)](versioning-policy.md) - Schema definition
- [Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md) - Work item structure and task-level versioning
- [Release Workflow Reference](../../Documentation/Developer_Docs/vwmp/release-workflow-reference.md) - Implementation of versioning strategy
- [Cursor Rules](../../../../.cursorrules) - Fundamental system rules

---

## Purpose

This document defines the **complete versioning strategy** for Confidentia, including:

- **Canonical ordering principles** (version numbers, not timestamps)
- **Two-layer timestamp system** (short dates vs. full timestamps)
- **Forensic traceability grid** (version ↔ epic/story/task ↔ changelogs ↔ kanban markers)
- **Immutability rules** for historical metadata
- **Handling of legacy/pre-policy releases**

This strategy ensures **complete accountability** and **efficient traceability** across all development work, regardless of when commits actually occurred or which epic branch they originated from.

---

## Core Principle: Version Numbers Are Canonical

### The Fundamental Rule

**Version numbers (`RC.EPIC.STORY.TASK+BUILD`) are the canonical ordering metric for all releases and changelog entries.**

This means:

- **Version ordering is independent of wall-clock time**
  - If `0.20.11.3+2` was committed on 2025-01-27 at 15:30:00 UTC
  - And `0.19.11.5+1` was committed on 2025-01-28 at 10:00:00 UTC
  - The changelog still orders them as: `0.19.11.5+1` first, then `0.20.11.3+2`
  - **The version number determines order, not the actual commit timestamp**

- **Parallel epic development is fully supported**
  - Epic 12 work (`0.12.x.x+X`) can be committed after Epic 20 work (`0.20.x.x+X`)
  - Epic 20 work can be committed before Epic 19 work
  - **The changelog orders by version number, not by Git commit time**

- **This enables true parallel development**
  - Multiple epics can work simultaneously
  - Each epic maintains its own version stream
  - When merged, versions are ordered correctly by their semantic structure

### Why This Matters

Without this principle, you cannot:
- Merge parallel epic branches cleanly
- Maintain accurate historical ordering when work happens out of sequence
- Provide reliable traceability when commits span multiple days/weeks
- Support the `RC.EPIC.STORY.TASK+BUILD` schema effectively

**The version number encodes the work hierarchy (Epic → Story → Task → Build), and that hierarchy is what matters for ordering, not when the code was actually committed.**

---

## Two-Layer Timestamp System

The strategy uses **two distinct timestamp layers** with **different purposes**:

### Layer 1: Main Summary Changelog (`CHANGELOG.md`)

**Format:** Short date in `DD-MM-YY` format
**Example:** `### [0.20.11.14+3] - 26-11-25`

**Purpose:**
- Shows **when this version was merged into `main`**
- Provides a quick reference for "when did this hit production"
- Uses short format for readability in the summary view

**Key Characteristics:**
- **Not used for ordering** (version number is canonical)
- **Reflects merge-to-main date**, not commit date
- **Can be updated** if a version is merged on a different day than initially recorded
- **Format:** `DD-MM-YY` (e.g., `26-11-25` for November 26, 2025)

**Example Entry:**
```markdown
### [0.20.11.14+3] - 26-11-25
🧰 Tooling: E20:S11:T14: Mark task complete with version number
- See [CHANGELOG_v0.20.11.14+3.md](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.20.11.14+3.md)
```

### Layer 2: Detailed Changelog Archive (`CHANGELOG_vX.Y.Z.md`)

**Format:** Full timestamp in `YYYY-MM-DD HH:MM:SS UTC` format
**Example:** `**Release Date:** 2025-11-26 15:42:58 UTC`

**Purpose:**
- Captures **when this detailed changelog entry was authored/recorded**
- Provides forensic-level precision for accountability
- Enables exact traceability to the moment of release documentation

**Key Characteristics:**
- **IMMUTABLE once written** - **NEVER edit this timestamp retroactively**
- **Reflects the actual time the changelog was created**, not when code was committed
- **Full precision** (date + time + timezone) for complete accountability
- **Format:** `YYYY-MM-DD HH:MM:SS UTC` (e.g., `2025-11-26 15:42:58 UTC`)

**Example Entry:**
```markdown
# Changelog v0.20.11.14+3

**Release Date:** 2025-11-26 15:42:58 UTC
**Epic:** Epic 20 - Maintenance
**Story:** Story 11 - Versioning and Release Automation
**Type:** 🧰 Tooling

## Summary
🧰 Tooling: E20:S11:T14: Mark task complete with version number

## Changes
...
```

### Why Two Layers?

1. **Different purposes:**
   - Main changelog: Quick reference for "when did this merge to main"
   - Detailed changelog: Forensic record of "when was this release documented"

2. **Different audiences:**
   - Main changelog: Developers scanning recent releases
   - Detailed changelog: Forensic analysis, audit trails, accountability

3. **Different update rules:**
   - Main changelog: Can be updated if merge date changes
   - Detailed changelog: **IMMUTABLE** - historical record must be preserved

4. **Enables parallel development:**
   - Versions are ordered by number, not by timestamp
   - Timestamps provide context, not ordering

---

## Forensic Traceability Grid

The versioning strategy provides **complete traceability** through a multi-dimensional grid:

### Dimension 1: Version ↔ Epic/Story/Task

**Encoding:** The version number itself (`RC.EPIC.STORY.TASK+BUILD`)

**Traceability Path:**
- `0.20.11.14+3` → Epic 20, Story 11, Task 14, Build 3
- Direct mapping from version to work hierarchy
- No lookup required - the version number IS the identifier

**Example:**
```
Version: 0.20.11.14+3
├── RC: 0 (development)
├── EPIC: 20 (Maintenance)
├── STORY: 11 (Versioning and Release Automation)
├── TASK: 14 (Task-level versioning validation)
└── BUILD: 3 (Third release within this task)
```

### Dimension 2: Version ↔ Detailed Changelog

**Mapping:** One detailed changelog file per version

**File Location:** `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`

**Traceability Path:**
- Version number → File path (deterministic)
- File contains: Full timestamp, epic/story/task info, detailed changes
- **Full timestamp provides forensic-level accountability**

**Example:**
```
Version: 0.20.11.14+3
  ↓
File: docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.20.11.14+3.md
  ↓
Contains: **Release Date:** 2025-11-26 15:42:58 UTC
```

### Dimension 3: Version ↔ Main Summary Changelog

**Mapping:** One summary entry per version in `CHANGELOG.md`

**Traceability Path:**
- Version number → Summary entry (ordered by version, not time)
- Entry contains: Short date (merge-to-main), summary, link to detailed changelog
- **Short date shows when version merged to main**

**Example:**
```markdown
### [0.20.11.14+3] - 26-11-25
🧰 Tooling: E20:S11:T14: Mark task complete with version number
- See [CHANGELOG_v0.20.11.14+3.md](...)
```

### Dimension 4: Version ↔ Kanban Forensic Markers

**Mapping:** Epic/Story documents and Kanban rituals include explicit version references

**Traceability Path:**
- Version number → Epic/Story/Task documents
- Documents contain: Version references, commit hashes, workflow run IDs
- **Kanban markers provide work context and decision history**

**Example:**
```
Version: 0.20.11.14+3
  ↓
Epic 20 document: docs/project-management/epics/overview/Epic 20/Epic-20.md
  ↓
Story 11 document: docs/project-management/stories/overview/Epic 20/Story-11-*.md
  ↓
Task 14 markers: Version references, commit hashes, workflow runs
```

### Dimension 5: Version ↔ Git History

**Mapping:** Version number in commit messages and tags

**Traceability Path:**
- Version number → Git commits (via commit messages)
- Git commits → Commit hashes, author, timestamp
- **Git history provides code-level traceability**

**Example:**
```
Version: 0.20.11.14+3
  ↓
Commit message: "Release v0.20.11.14+3: E20:S11:T14: Mark task complete"
  ↓
Git commit: abc123def456...
  ↓
Contains: Code changes, author, commit timestamp
```

### Complete Traceability Example

For version `0.20.11.14+3`, you can trace:

1. **Work Hierarchy:**
   - Epic 20 → Story 11 → Task 14 → Build 3

2. **Documentation:**
   - Detailed changelog: `CHANGELOG_v0.20.11.14+3.md` (full timestamp: 2025-11-26 15:42:58 UTC)
   - Summary changelog: Entry in `CHANGELOG.md` (short date: 26-11-25)

3. **Kanban Context:**
   - Epic 20 document → Story 11 document → Task 14 markers
   - Version references, commit hashes, workflow runs

4. **Code History:**
   - Git commits with version in message
   - Commit hashes, author, code changes

5. **Ordering:**
   - Positioned in changelog by version number (not commit time)
   - Appears after `0.20.11.14+2`, before `0.20.11.14+4`
   - Regardless of when commits actually occurred

**This grid provides complete accountability and efficient traceability.**

---

## Immutability Rules

### Rule 1: Detailed Changelog Timestamps Are Immutable

**Once a detailed changelog file is created with a `**Release Date:**` timestamp, that timestamp MUST NEVER be edited.**

**Rationale:**
- The timestamp captures **when the changelog entry was authored**
- Editing it would corrupt the forensic record
- Historical accuracy requires preserving original timestamps

**What This Means:**
- ❌ **NEVER** edit `**Release Date:**` in existing changelog files
- ❌ **NEVER** "fix" old timestamps to satisfy new validation rules
- ❌ **NEVER** update timestamps for cosmetic reasons
- ✅ **ONLY** create new changelog files with correct timestamps going forward

### Rule 2: Version Ordering Is Immutable

**Once a version is assigned and documented, its position in the changelog ordering is fixed by the version number.**

**Rationale:**
- Version numbers encode the work hierarchy
- Ordering by version number ensures consistent, logical progression
- Changing order would break traceability

**What This Means:**
- Versions are ordered by `RC.EPIC.STORY.TASK+BUILD` structure
- `0.19.11.5+1` always comes before `0.20.11.3+2` in changelogs
- Even if `0.20.11.3+2` was committed first

### Rule 3: Historical Files Are Preserved As-Is

**Changelog files created before the full-timestamp policy are preserved exactly as they were created.**

**Rationale:**
- Historical files are artifacts of their time
- They reflect the practices and tools available when they were created
- Preserving them maintains the complete historical record

**What This Means:**
- Files like `CHANGELOG_v0.19.11.0.md` may have date-only timestamps
- These are **grandfathered** and not subject to new validation rules
- They remain as historical artifacts

---

## Handling Legacy/Pre-Policy Releases

### Grandfathering Strategy

**Releases created before the full-timestamp policy (introduced in Epic 20) are grandfathered.**

**Cutoff Criteria:**
- **Epic number < 20:** Automatically grandfathered
- **Version format:** Old schema (e.g., `0.4.x.x`) automatically grandfathered
- **Date-based cutoff:** Any release before 2025-11-26 (policy introduction date)

**Validation Behavior:**
- **Grandfathered files:** Pass validation (warnings only, if any)
- **New files (Epic 20+):** Must have full timestamp (`YYYY-MM-DD HH:MM:SS UTC`)
- **Strict enforcement:** Only applies to new releases after policy introduction

### Example Grandfathered Files

These files are **preserved as historical artifacts** and not subject to new validation:

- `CHANGELOG_v0.19.11.0.md` (Epic 19, date-only timestamp)
- `CHANGELOG_v0.19.11.1.md` (Epic 19, date-only timestamp)
- `CHANGELOG_v0.4.0.0.md` (Old schema, date-only timestamp)
- Any file with version `< 0.20.x.x`

### New Release Requirements

**All new releases (Epic 20+) must include:**

1. **Full timestamp in detailed changelog:**
   ```markdown
   **Release Date:** 2025-11-26 15:42:58 UTC
   ```

2. **Short date in main changelog:**
   ```markdown
   ### [0.20.11.14+3] - 26-11-25
   ```

3. **Version number in commit message:**
   ```
   Release v0.20.11.14+3: E20:S11:T14: Description
   ```

4. **Kanban markers updated:**
   - Epic/Story documents reference version
   - Task markers include version number

---

## Versioning Schema Reference

For the complete versioning schema (`RC.EPIC.STORY.TASK+BUILD`), see:

**[Versioning Policy (Schema)](versioning-policy.md)**

That document defines:
- Schema structure and components
- Version progression rules
- Parallel development strategy
- Version file format
- CHANGELOG format requirements

**This strategy document** (versioning-strategy.md) defines:
- Canonical ordering principles
- Timestamp system
- Traceability grid
- Immutability rules
- Legacy handling

**Together, these documents provide complete versioning guidance.**

---

## Validation and Enforcement

### Automated Validation

**Script:** `scripts/validation/validate_changelog_format.py`

**Behavior:**
- **Grandfathered files (Epic < 20):** Pass validation (preserved as-is)
- **New files (Epic 20+):** Must have full timestamp, strict enforcement
- **Pre-commit hooks:** Enforce format before commit
- **CI/CD:** Validate in continuous integration

### Manual Review

**Before committing:**
1. Verify version number matches branch/epic
2. Verify detailed changelog has full timestamp (Epic 20+)
3. Verify main changelog has short date
4. Verify version in commit message
5. Verify Kanban markers updated

**After merging:**
1. Verify changelog ordering (by version, not time)
2. Verify traceability grid is complete
3. Verify historical files preserved

---

## Related Documentation

**Core Policy Documents:**
- **[Versioning Policy (Schema)](versioning-policy.md)** - Schema definition (RC.EPIC.STORY.TASK+BUILD)
- **[Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md)** - Work item structure, task-level versioning requirements, and release workflow integration
- **[Release Workflow Reference](../../Documentation/Developer_Docs/vwmp/release-workflow-reference.md)** - Automated implementation of versioning strategy
- **[Cursor Rules](../../../../.cursorrules)** - Fundamental system rules that underpin all policies ⭐

**Implementation:**
- **CHANGELOG.md** - Main summary changelog (short date format)
- **Changelog Archive** - `docs/changelog-and-release-notes/changelog-archive/` (full timestamp format)
- **Branch Context Validator** - `scripts/validation/validate_branch_context.py`
- **Changelog Format Validator** - `scripts/validation/validate_changelog_format.py`

---

## Revision History

| Date | Version | Changes |
| --- | --- | --- |
| 2025-01-27 | 1.0 | Initial versioning strategy document with complete forensic traceability system |

---

_Last updated: 2025-01-27_
