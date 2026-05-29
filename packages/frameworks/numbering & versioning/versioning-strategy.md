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
**Last Updated:** 2025-12-01  
**Related Work:** Epic 9, Story 21

**References:**
- [Versioning Policy (Schema)](versioning-policy.md) - Schema definition
- [Kanban Governance Policy](../../../knowledge/fynd_deals/Kanban/Kanban Board.md) - Work item structure

---

## Purpose

This document defines the **complete versioning strategy** for fynd.deals, including:

- **Dual-version model** (internal Kanban version vs external SemVer release version)
- **Canonical ordering principles** (release version numbers, not timestamps)
- **Two-layer timestamp system** (short dates vs. full timestamps)
- **Forensic traceability grid** (version ↔ epic/story/task ↔ changelogs ↔ kanban markers)
- **Immutability rules** for historical metadata
- **Handling of legacy/pre-policy releases**

This strategy ensures **complete accountability** and **efficient traceability** across all development work, regardless of when commits actually occurred or which epic branch they originated from.

---

## Dual-Version Model (Internal vs Release SemVer)

This strategy is built around a **dual-version model**:

- **Internal version (Kanban version)**  
  - **Format:** `RC.EPIC.STORY.TASK+BUILD`  
  - **Purpose:** Planning, traceability, and Kanban alignment.  
  - **Where used:** Kanban docs, detailed changelogs, validators, internal tooling.

- **Release version (SemVer)**  
  - **Format:** `MAJOR.MINOR.PATCH+metadata`  
  - **Purpose:** External-facing version for users, GitHub releases, and package managers.  
  - **Where used:** README badges, release pages, package manifests.

High-level rules:

- **Externally:** When talking to users or package registries, we speak in **SemVer terms**.
- **Internally:** When reasoning about work, Kanban coordinates, or forensic questions, we speak in **`RC.EPIC.STORY.TASK+BUILD` terms**.
- The release version is always **derived from the internal version** via a mapping strategy defined in `versioning-policy.md`.

### Mapping Modes (Conceptual)

The mapping from internal version to SemVer can follow one of two conceptual modes (see policy document for full details):

- **Mode A (default / registry-based):**
  - `MAJOR = RC`
  - `MINOR` and `PATCH` are assigned via a registry that remaps epics and stories into a monotonic SemVer space.
  - Best suited for frameworks and larger products.

- **Mode B (simple / global PATCH):**
  - `MAJOR = RC`, `MINOR = EPIC`, `PATCH` = global build counter per RC.
  - Very simple external story; epic/story identity recovered via internal version and/or metadata.

### Optional SemVer Metadata

To retain full forensic traceability at the SemVer level, this strategy defines an **optional metadata suffix**:

- **Pattern:** `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>`
- **Example:** internal `0.17.2.4+3` → release `0.17.1423+rc.0.e17.s2.t4.b3`

This metadata:

- Is **optional** and does **not** affect SemVer precedence.
- Allows tools (and engineers) to recover the internal Kanban coordinates directly from the release version string when present.

---

## Core Principle: Release Version Numbers Are Canonical

### The Fundamental Rule

**Release version numbers (`MAJOR.MINOR.PATCH`) are the canonical ordering metric for all releases and changelog entries.**

This means:

This means:

- **Release ordering is independent of wall-clock time**
  - If release `0.9.32.1+98` was committed on 2025-12-01 at 15:30:00 UTC
  - And release `0.9.31.1+5` was committed on 2025-12-02 at 10:00:00 UTC
  - The changelog still orders them as: `0.9.31.1+5` first, then `0.9.32.1+98`
  - **The release version number determines order, not the actual commit timestamp**

- **Parallel epic development is fully supported**
  - Epic 8 work can be released after Epic 9 work (or vice versa)
  - The changelog orders releases by **SemVer**, not by Git commit time

- **This enables true parallel development**
  - Multiple epics can work simultaneously
  - Each epic maintains its own internal version stream
  - When merged, releases are ordered correctly by their SemVer structure

### Why This Matters

Without this principle, you cannot:
- Merge parallel epic branches cleanly
- Maintain accurate historical ordering when work happens out of sequence
- Provide reliable traceability when commits span multiple days/weeks
- Support the `RC.EPIC.STORY.TASK+BUILD` schema effectively

**The release version number encodes the ordering of releases. The internal version continues to encode the work hierarchy (Epic → Story → Task → Build), which is used for traceability and Kanban alignment rather than external ordering.**

### Epic Renumbering Strategy

**Problem:** Epic 9 has both old format (100 versions) and new format (1 version), creating confusion and potential collisions.

**Solution:** Complete Epic 9 with old format, then start Epic 10+ with new format exclusively.

**Epic Ranges:**
- **Epic 1-9:** Legacy format (`RC.EPIC.STORY.PATCH`) - Grandfathered, immutable, no new versions
- **Epic 10+:** New format (`RC.EPIC.STORY.TASK+BUILD`) - Fresh start, clean version space

**Migration Timeline:**
1. Complete Epic 9 work using old format (`0.9.x.x`)
2. Mark Epic 9 as complete
3. Start Epic 10 with new format (`0.10.1.1+1`)
4. All Epic 10+ work uses new format exclusively

**Benefits:**
- Clean separation between legacy and new formats
- No version collisions
- Fresh start for Epic 10+
- Clear branch strategy (`epic/10-*`, `epic/11-*`, etc.)

See [Version Renumbering Strategy](VERSION-RENUMBERING-STRATEGY.md) for complete details.

---

## Two-Layer Timestamp System

The strategy uses **two distinct timestamp layers** with **different purposes**:

### Layer 1: Main Summary Changelog (`CHANGELOG.md`)

**Format:** Short date in `DD-MM-YY` format  
**Example:** `### [0.9.21.3+1] - 01-12-25`

**Purpose:**
- Shows **when this version was merged into `main`**
- Provides a quick reference for "when did this hit production"
- Uses short format for readability in the summary view

**Key Characteristics:**
- **Not used for ordering** (version number is canonical)
- **Reflects merge-to-main date**, not commit date
- **Can be updated** if a version is merged on a different day than initially recorded
- **Format:** `DD-MM-YY` (e.g., `01-12-25` for December 1, 2025)

**Example Entry:**
```markdown
### [0.9.21.3+1] - 01-12-25
🚀 Feature: E9:S21:T03: Brief description
- See [CHANGELOG_v0.9.21.3+1.md](CHANGELOG_ARCHIVE/CHANGELOG_v0.9.21.3+1.md)
```

### Layer 2: Detailed Changelog Archive (`CHANGELOG_vX.Y.Z.md`)

**Format:** Full timestamp in `YYYY-MM-DD HH:MM:SS UTC` format  
**Example:** `**Release Date:** 2025-12-01 16:51:30 UTC`

**Purpose:**
- Captures **when this detailed changelog entry was authored/recorded**
- Provides forensic-level precision for accountability
- Enables exact traceability to the moment of release documentation

**Key Characteristics:**
- **IMMUTABLE once written** - **NEVER edit this timestamp retroactively**
- **Reflects the actual time the changelog was created**, not when code was committed
- **Full precision** (date + time + timezone) for complete accountability
- **Format:** `YYYY-MM-DD HH:MM:SS UTC` (e.g., `2025-12-01 16:51:30 UTC`)

**Example Entry:**
```markdown
# Changelog v0.9.21.3+1

**Release Date:** 2025-12-01 16:51:30 UTC
**Epic:** Epic 9 - Debug Test Failures & System Issues
**Story:** Story 21 - Versioning and Release Automation
**Task:** Task 3 - Task-level versioning validation
**Type:** 🚀 Feature

## Summary
🚀 Feature: E9:S21:T03: Brief description of changes

## Changes
- Detailed change 1
- Detailed change 2
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
- `0.9.21.3+1` → Epic 9, Story 21, Task 3, Build 1
- Direct mapping from version to work hierarchy
- No lookup required - the version number IS the identifier

**Example:**
```
Version: 0.9.21.3+1
├── RC: 0 (development)
├── EPIC: 9 (Debug Test Failures & System Issues)
├── STORY: 21 (Versioning and Release Automation)
├── TASK: 3 (Task-level versioning validation)
└── BUILD: 1 (First release within this task)
```

### Dimension 2: Version ↔ Detailed Changelog

**Mapping:** One detailed changelog file per version

**File Location:** `CHANGELOG_ARCHIVE/CHANGELOG_v{version}.md`

**Traceability Path:**
- Version number → File path (deterministic)
- File contains: Full timestamp, epic/story/task info, detailed changes
- **Full timestamp provides forensic-level accountability**

**Example:**
```
Version: 0.9.21.3+1
  ↓
File: CHANGELOG_ARCHIVE/CHANGELOG_v0.9.21.3+1.md
  ↓
Contains: **Release Date:** 2025-12-01 16:51:30 UTC
```

### Dimension 3: Version ↔ Main Summary Changelog

**Mapping:** One summary entry per version in `CHANGELOG.md`

**Traceability Path:**
- Version number → Summary entry (ordered by version, not time)
- Entry contains: Short date (merge-to-main), summary, link to detailed changelog
- **Short date shows when version merged to main**

**Example:**
```markdown
### [0.9.21.3+1] - 01-12-25
🚀 Feature: E9:S21:T03: Brief description
- See [CHANGELOG_v0.9.21.3+1.md](CHANGELOG_ARCHIVE/CHANGELOG_v0.9.21.3+1.md)
```

### Dimension 4: Version ↔ Kanban Forensic Markers

**Mapping:** Epic/Story documents and Kanban rituals include explicit version references

**Traceability Path:**
- Version number → Epic/Story/Task documents
- Documents contain: Version references, commit hashes, workflow run IDs
- **Kanban markers provide work context and decision history**

**Example:**
```
Version: 0.9.21.3+1
  ↓
Epic 9 document: knowledge/fynd_deals/Kanban/Epic-9/Epic-9.md
  ↓
Story 21 markers: Version references, commit hashes, workflow runs
```

### Dimension 5: Version ↔ Git History

**Mapping:** Version number in commit messages and tags

**Traceability Path:**
- Version number → Git commits (via commit messages)
- Git commits → Commit hashes, author, timestamp
- **Git history provides code-level traceability**

**Example:**
```
Version: 0.9.21.3+1
  ↓
Commit message: "Release v0.9.21.3+1: E9:S21:T03: Description"
  ↓
Git commit: abc123def456...
  ↓
Contains: Code changes, author, commit timestamp
```

### Complete Traceability Example

For version `0.9.21.3+1`, you can trace:

1. **Work Hierarchy:**
   - Epic 9 → Story 21 → Task 3 → Build 1

2. **Documentation:**
   - Detailed changelog: `CHANGELOG_v0.9.21.3+1.md` (full timestamp: 2025-12-01 16:51:30 UTC)
   - Summary changelog: Entry in `CHANGELOG.md` (short date: 01-12-25)

3. **Kanban Context:**
   - Epic 9 document → Story 21 markers → Task 3 references
   - Version references, commit hashes, workflow runs

4. **Code History:**
   - Git commits with version in message
   - Commit hashes, author, code changes

5. **Ordering:**
   - Positioned in changelog by version number (not commit time)
   - Appears after `0.9.21.3+0`, before `0.9.21.3+2`
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
- `0.9.20.5+1` always comes before `0.9.21.3+2` in changelogs
- Even if `0.9.21.3+2` was committed first

### Rule 3: Historical Files Are Preserved As-Is

**Changelog files created before the full-timestamp policy are preserved exactly as they were created.**

**Rationale:**
- Historical files are artifacts of their time
- They reflect the practices and tools available when they were created
- Preserving them maintains the complete historical record

**What This Means:**
- Files like `CHANGELOG_v0.9.21.18.md` may have date-only timestamps
- These are **grandfathered** and not subject to new validation rules
- They remain as historical artifacts

---

## Handling Legacy/Pre-Policy Releases

### Grandfathering Strategy

**Releases created before the TASK+BUILD policy (introduced in Epic 9, Story 21) are grandfathered.**

**Cutoff Criteria:**
- **Version format:** Old schema (`RC.EPIC.STORY.PATCH`) automatically grandfathered
- **Date-based cutoff:** Any release before 2025-12-01 (policy introduction date)
- **Version number:** Versions before `0.9.21.20` are grandfathered

**Validation Behavior:**
- **Grandfathered files:** Pass validation (warnings only, if any)
- **New files (Epic 9, Story 21+):** Must have TASK+BUILD format and full timestamp
- **Strict enforcement:** Only applies to new releases after policy introduction

### Example Grandfathered Files

These files are **preserved as historical artifacts** and not subject to new validation:

- `CHANGELOG_v0.9.21.18.md` (Old format, date-only timestamp)
- `CHANGELOG_v0.9.21.19.md` (Old format, date-only timestamp)
- Any file with version `< 0.9.21.20` or old format

### New Release Requirements

**All new releases (Epic 9, Story 21+) must include:**

1. **TASK+BUILD format in version:**
   ```python
   VERSION_STRING = "0.9.21.3+1"  # TASK+BUILD format
   ```

2. **Full timestamp in detailed changelog:**
   ```markdown
   **Release Date:** 2025-12-01 16:51:30 UTC
   ```

3. **Short date in main changelog:**
   ```markdown
   ### [0.9.21.3+1] - 01-12-25
   ```

4. **Version number in commit message:**
   ```
   Release v0.9.21.3+1: E9:S21:T03: Description
   ```

5. **Kanban markers updated:**
   - Epic/Story documents reference version
   - Task markers include version number

---

## Validation and Enforcement

### Automated Validation

**Scripts:**
- `scripts/validation/validate_branch_context.py` - Validates version matches branch/epic
- `scripts/validation/validate_changelog_format.py` - Validates changelog format

**Behavior:**
- **Grandfathered files (old format):** Pass validation (preserved as-is)
- **New files (TASK+BUILD format):** Must have full timestamp, strict enforcement
- **Pre-commit hooks:** Enforce format before commit
- **CI/CD:** Validate in continuous integration

### Manual Review

**Before committing:**
1. Verify version number matches branch/epic/story/task
2. Verify detailed changelog has full timestamp (new format)
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
- **[Kanban Governance Policy](../../../knowledge/fynd_deals/Kanban/Kanban Board.md)** - Work item structure

**Implementation Components:**
- **CHANGELOG.md** - Main summary changelog (short date format)
- **Changelog Archive** - `CHANGELOG_ARCHIVE/` (full timestamp format)
- **Branch Context Validator** - `scripts/validation/validate_branch_context.py`
- **Changelog Format Validator** - `scripts/validation/validate_changelog_format.py`

---

## Revision History

| Date | Version | Changes |
| --- | --- | --- |
| 2025-12-01 | 1.0 | Initial versioning strategy document with complete forensic traceability system |

---

_Last updated: 2025-12-01_

