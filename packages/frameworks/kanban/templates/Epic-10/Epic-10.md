---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10: Data Management and Database

**Status:** [TODO/IN PROGRESS/COMPLETE]
**Priority:** [HIGH/MEDIUM/LOW]
**Estimated Effort:** [X-Y hours]
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (vX.Y.Z.T+B – [summary])
**Branch:** `epic/X-slug`
**Version Schema:** `0.X.S.T+B`
**Production URL:** [Optional]

---

## Story Checklist

- [ ] **E10:S01 – [Story Title]** - [Status]
- [ ] **E10:S02 – [Story Title]** - [Status]
- [ ] **E10:S03 – [Story Title]** - [Status]

> **CRITICAL:** This Story Checklist is the **SINGLE SOURCE OF TRUTH** for story status and version markers.  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Release Workflow Requirement:** When Release Workflow (RW) Step 4 updates this Epic document, it MUST update **ALL sections**:
> - Epic header `Last updated` field
> - Story Checklist (status and version markers)
> - Detailed story sections (Status, Last updated, task checkboxes)
> - Any other references to the story/task being released
> 
> **Consistency Check:** After each RW, verify that Epic header, Story Checklist, and detailed sections all match.

---

## Overview

This epic encompasses data management and database for the {PROJECT_NAME} project. It provides the foundational structure and capabilities needed to support the project's core objectives and enables other epics to build upon this foundation.

---

## Goals

1. Establish data management and database infrastructure and foundational components
2. Define and implement core data management and database patterns and standards
3. Create reusable data management and database components and utilities
4. Document data management and database architecture and best practices
5. Enable integration with other project epics and systems

---

## Stories

> **CRITICAL: Tier Delegation Principle**
> 
> **Epic documents MUST delegate Story detail to Story documents.** This Epic template should NOT duplicate Story-level information (Status, Priority, Goals, Tasks, Acceptance Criteria, etc.). Instead, Epic documents should:
> - Reference stories via Story Checklist (above)
> - Provide brief story summaries or links to Story documents
> - Delegate all detailed Story information to Story documents
> 
> **What belongs in Epic:**
> - ✅ Story Checklist (references only, with status/version markers)
> - ✅ Brief story summaries (1-2 sentences per story)
> - ✅ Links to Story documents
> - ✅ Epic-level dependencies and coordination
> 
> **What does NOT belong in Epic:**
> - ❌ Detailed story descriptions
> - ❌ Story-level goals, tasks, acceptance criteria
> - ❌ Task-level details
> - ❌ Story implementation details

### Story 1: Database Schema Design

**Brief Summary:** database schema design for the {PROJECT_NAME} project, establishing the necessary components and processes to support the epic's objectives.

**Story Document:** [`Story-001-database-schema-design.md`](Story-001-database-schema-design.md)

### Story 2: Data Access Layer

**Brief Summary:** data access layer for the {PROJECT_NAME} project, establishing the necessary components and processes to support the epic's objectives.

**Story Document:** [`Story-002-data-access-layer.md`](Story-002-data-access-layer.md)

### Story 3: Data Migration and Seeding

**Brief Summary:** data migration and seeding for the {PROJECT_NAME} project, establishing the necessary components and processes to support the epic's objectives.

**Story Document:** [`Story-003-data-migration-and-seeding.md`](Story-003-data-migration-and-seeding.md)

---


## Dependencies

**Blocks:**
- [What this epic blocks]

**Blocked By:**
- [What blocks this epic]

**Coordinates With:**
- [Epic/Story coordination points]

---

## Risks & Mitigations

- Risk description — mitigation
- Risk description — mitigation

---

## References

- [Related docs, specs, diagrams]

---

## Maintenance Cadence

_For maintenance epics only._

- **Weekly:** [schedule items]
- **Monthly:** [schedule items]
- **Quarterly:** [schedule items]
- **As Needed:** [schedule items]
