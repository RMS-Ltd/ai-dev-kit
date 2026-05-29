---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:47Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1: AI Dev Kit Core

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-02  
**Last updated:** 2026-05-26 (v0.1.4.3+1 – Story 4 Task 3 complete)
**Branch:** `epic/1-ai-dev-kit-core`  
**Version Schema:** `0.1.S.T+B` (dev-kit RC.EPIC.STORY.TASK+BUILD)  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [x] **E1:S01 – Dev Kit Versioning & RW Behaviour** - COMPLETE ✅ (v0.1.1.1+1, E2:S01:T02, E2:S01:T03)  
- [x] **E1:S02 – Package & Repo Architecture** - COMPLETE ✅ (v0.1.2.5+1)
  - Tasks: T001 ✅ (v0.1.2.1+1), T002 ✅ (v0.1.2.2+1), T003 ✅ (v0.1.2.3+1), T004 ✅ (v0.1.2.4+1), T005 ✅ (v0.1.2.5+1)
  - Story: [`Story-002-package-and-repo-architecture.md`](Story-002-package-and-repo-architecture.md)  

- [x] **E1:S03 – Core KB Structure for Dev Kit** - COMPLETE ✅ (v0.1.3.6+1 – All tasks complete)
  - Tasks: T001 ✅ (v0.1.3.1+1), T002 ✅ (v0.1.3.2+1), T003 ✅ (v0.1.3.3+1), T004 ✅ (v0.1.3.4+1), T005 ✅ (v0.1.3.5+1), T006 ✅ (v0.1.3.6+1)
  - Story: [`Story-003-core-kb-structure-for-dev-kit.md`](Story-003-core-kb-structure-for-dev-kit.md)  

- [ ] **E1:S04 – Repository Branding and Renaming** - IN PROGRESS
  - Story: [`Story-004-repository-branding-and-renaming.md`](Story-004-repository-branding-and-renaming.md)
  - Tasks: T01 ✅ COMPLETE; T02 ⏭️ SUPERSEDED (FR-099/ADR-006); **T03 IN PROGRESS (v0.1.4.3+1)**

- [ ] **E1:S05 – Comprehensive Project Analysis for Canonical Patterns** - TODO (v0.1.5.0+0 – Story created)
  - Story: [`Story-005-comprehensive-project-analysis-for-canonical-patterns.md`](Story-005-comprehensive-project-analysis-for-canonical-patterns.md)
  - Tasks: T00 ✅ COMPLETE, T01-T06 TODO (Comprehensive analysis of ~21 projects across 10 dimensions)

- [ ] **E1:S06 – Repository CI/CD Setup** - IN PROGRESS (v0.1.6.1+1 – T01 IN PROGRESS: BYOB badge setup with test, coverage, and code quality badges)
  - Story: [`Story-006-repository-ci-cd-setup.md`](Story-006-repository-ci-cd-setup.md)
  - Tasks: T01 IN PROGRESS (v0.1.6.1+1)


---

## Overview

Epic 1 establishes the **core infrastructure and conventions** for the AI Dev Kit repository.  
It defines how the repo is structured, how versioning works for the dev kit itself, and how Release Workflow (RW) should behave when run *inside this repo* rather than inside an application project.

**Note:** Epic 1 status changed to IN PROGRESS due to new Story 4 (Repository Branding and Renaming).

---

## Goals

1. **Define dev-kit versioning policy**  
   - Document how `RC.EPIC.STORY.TASK+BUILD` applies to dev-kit Epics, Stories, and Tasks.  
   - Ensure `version.py`, CHANGELOG, and RW docs all reflect this policy.

2. **Clarify modular architecture**  
   - Make it easy for users to consume **individual frameworks** (workflow mgt, versioning, kanban) without pulling in the whole repo.  

3. **Provide a solid KB foundation**  
   - Establish core KB locations for architecture, PM & portfolio, and dev-kit governance.

---

## Stories

### Story 1: Dev Kit Versioning & RW Behaviour

**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-05-26 (v0.1.4.3+1 – Story 4 Task 3 complete)

**Goal:**  
Define and implement how the dev kit uses `RC.EPIC.STORY.TASK+BUILD`, and how RW interprets versions and tasks when run in this repo.

**Tasks:**
- [x] E1:S01:T01 – Create `dev-kit-versioning-policy.md` ✅ COMPLETE (v0.1.1.1+1)  
- [x] E1:S01:T02 – Align `version.py` and CHANGELOG with dev-kit policy ✅ COMPLETE (v0.1.1.1+1)  
- [x] E1:S01:T03 – Update RW docs to distinguish dev-kit vs external examples ✅ COMPLETE (completed in E2:S01:T02 and E2:S01:T03)  

**Acceptance Criteria:**
- [x] Dev-kit versioning policy exists and is referenced by other docs ✅  
- [x] `version.py` encodes a real dev-kit Epic/Story/Task, not legacy external IDs ✅  
- [x] RW docs clarify dev-kit vs Confidentia/fynd.deals examples ✅

> Full story: `docs/project-management/kanban/epics/Epic-1/Story-001-vibe-dev-kit-kanban-and-versioning.md`

---

### Story 2: Package & Repo Architecture

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-05-26 (v0.1.4.3+1 – Story 4 Task 3 complete)

**Goal:**  
Clarify the modular architecture of the `ai-dev-kit` repository, ensuring that users can easily consume individual frameworks (workflow mgt, versioning, kanban) without pulling in the entire repository.

**Tasks:**
- [x] E1:S02:T01 – Analyze current package structure and dependencies ✅ COMPLETE (v0.1.2.1+1)
- [x] E1:S02:T02 – Document modularity principles and boundaries ✅ COMPLETE (v0.1.2.2+1)
- [x] E1:S02:T03 – Create package dependency matrix ✅ COMPLETE (v0.1.2.3+1)
- [x] E1:S02:T04 – Document consumption patterns for each framework ✅ COMPLETE (v0.1.2.4+1)
- [x] E1:S02:T05 – Update package READMEs with modularity information ✅ COMPLETE (v0.1.2.5+1)

> Full story: [`Story-002-package-and-repo-architecture.md`](Story-002-package-and-repo-architecture.md)

---

### Story 3: Core KB Structure for Dev Kit

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-05-26 (v0.1.4.3+1 – Story 4 Task 3 complete)

**Goal:**  
Establish core KB locations for architecture, PM & portfolio, and dev-kit governance. Provide a clear, maintainable documentation structure that supports the dev-kit's modular architecture and makes it easy for users to navigate and understand the repository.

**Tasks:**
- [x] E1:S03:T01 – Analyze current docs/core structure and define target structure ✅ COMPLETE (v0.1.3.1+1)
- [x] E1:S03:T02 – Document KB structure principles and conventions ✅ COMPLETE (v0.1.3.2+1)
- [x] E1:S03:T03 – Create KB structure migration guide ✅ COMPLETE (v0.1.3.3+1 – Phase 1 implemented, updated with canonical pattern references)
- [x] E1:S03:T04 – Implement target KB structure ✅ COMPLETE (v0.1.3.4+1 – Phase 2 Guides Structure implemented)
- [x] E1:S03:T05 – Create KB structure documentation ✅ COMPLETE (v0.1.3.5+1)
- [x] E1:S03:T06 – Document scalable KB pattern for large codebases ✅ COMPLETE (v0.1.3.6+1)

> Full story: [`Story-003-core-kb-structure-for-dev-kit.md`](Story-003-core-kb-structure-for-dev-kit.md)

---

## Dependencies

**Blocks:**
- Clear versioning for future epics (2–4 and beyond)  
- Accurate forensic markers in dev-kit-specific examples  

**Blocked By:**
- None at initial creation.

**Coordinates With:**
- Epic 2: Workflow Management Framework  
- Epic 3: Numbering & Versioning Framework  
- Epic 4: Kanban Framework  

---

## Risks & Mitigations

- Risk: Confusion between dev-kit versions and external-project versions.  
  - Mitigation: Always label external examples as such; centralise dev-kit policy.


- Risk: Over-complexity for early adopters of the dev kit.  
  - Mitigation: Provide clear, minimal “start here” examples and keep advanced details in separate docs.


---

## References

- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`  
- `packages/frameworks/workflow mgt/README.md`  
- `packages/frameworks/numbering & versioning/README.md`  
- `packages/frameworks/kanban/README.md`  
- `docs/project-management/kanban/README.md` (Kanban structure)  

---

## Maintenance Cadence

- **Quarterly:** Review dev-kit versioning policy and RW behaviour.  
- **As Needed:** Update epic stories and tasks as new core capabilities are added.


