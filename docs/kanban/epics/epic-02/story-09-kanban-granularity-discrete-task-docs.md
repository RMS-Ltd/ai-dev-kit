---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 9: Kanban Granularity & Discrete Task Docs (3-Tier Structure)

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-06-05 (story closure — RW integration complete; structural migration via E04:S11:T07)  
**Estimated Effort:** 1 week  
**Started:** 2025-12-11  
**Completed:** 2026-06-05 (reconciled; T00–T06 shipped v0.2.9.6+1)  
**Version:** v0.2.9.6+1  
**Code:** E2S09

---

## Task Checklist

- [x] **E02:S09:T00 – Story Creation and FR-016 Intake** ✅ COMPLETE (v0.2.9.0+0)
  - Task: [`T00-story-creation-and-fr-016-intake`](story-09-kanban-granularity-discrete-task-docs/T00-story-creation-and-fr-016-intake.md)
- [x] **E02:S09:T01 – Coordination and Task Decomposition** ✅ COMPLETE (v0.2.9.1+0)
  - Task: [`T01-coordination-and-task-decomposition`](story-09-kanban-granularity-discrete-task-docs/T01-coordination-and-task-decomposition.md)
- [x] **E02:S09:T02 – Update RW Step 1 to Require Task Doc Presence** ✅ COMPLETE (v0.2.9.2+0)
  - Task: [`T02-update-rw-step-1-to-require-task-doc-presence`](story-09-kanban-granularity-discrete-task-docs/T02-update-rw-step-1-to-require-task-doc-presence.md)
- [x] **E02:S09:T03 – Enhance Validators for Task Doc Presence and Alignment** ✅ COMPLETE (v0.2.9.3+0)
  - Task: [`T03-enhance-validators-for-task-doc-presence-and-alignment`](story-09-kanban-granularity-discrete-task-docs/T03-enhance-validators-for-task-doc-presence-and-alignment.md)
- [x] **E02:S09:T04 – Update RW Agent Execution Guide** ✅ COMPLETE (v0.2.9.4+1)
  - Task: [`T04-update-rw-agent-execution-guide`](story-09-kanban-granularity-discrete-task-docs/T04-update-rw-agent-execution-guide.md)
- [x] **E02:S09:T05 – Documentation and Testing** ✅ COMPLETE (v0.2.9.5+1)
  - Task: [`T05-documentation-and-testing`](story-09-kanban-granularity-discrete-task-docs/T05-documentation-and-testing.md)
- [x] **E02:S09:T06 – Dependency Wiring Cross-References** ✅ COMPLETE (v0.2.9.6+1)
  - Task: [`T06-dependency-wiring-cross-references`](story-09-kanban-granularity-discrete-task-docs/T06-dependency-wiring-cross-references.md)

> **Coordination:** Kanban-specific work (policy, templates, migration) is handled in **E4:S11** (E04:S11:T07 **COMPLETE** v0.4.11.7+16). This story focuses on RW-specific integration.

> **Format:** `E2:S09:Txx` (Epic 2, Story 9, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.2.9.1+1)`)  

---

## Overview

Coordinate RW-specific integration for **3-tier granularity** (Epic → Story → Task) with **discrete Task documents**. This story focuses on RW Step 1 updates, validators, and agent execution guide changes. Kanban-specific work (policy updates, templates) is handled in **E4:S11**. This story is a prerequisite for FR-017 (doc-init build `+0` for new E/S/T).

---

## Goals

- [x] Coordinate work decomposition between Epic 2 (RW) and Epic 4 (Kanban)
- [x] Update RW Step 1 to locate and validate Task doc presence
- [x] Enhance validators to check Epic/Story/Task alignment and Task doc presence
- [x] Update RW agent execution guide with Task doc requirements
- [x] Ensure proper sequencing: Kanban policy/templates (E4:S11) → RW integration (E2:S09)

---

## Acceptance Criteria

- [x] **AC1:** Kanban policy updated to mandate 3-tier structure and discrete Task docs ✅ (E04:S11:T01)
- [x] **AC2:** Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR ✅ (E04:S11:T02)
- [x] **AC3:** RW Step 1 and validators enforce presence of Task doc and alignment of Epic/Story/Task with version ✅ (E02:S09:T02, T03)
- [x] **AC4:** Doc-init (`+0`) path is supported and required for new Task docs (see FR-017) ✅ (E2:S10 - dependent story)
- [x] **AC5:** No implicit/inline tasks allowed (must be explicit at task tier) ✅ (E04:S11:T01)
- [x] **AC6:** Task docs created before implementation (tied to doc-init) ✅ (E2:S10 - dependent story)
- [x] **AC7:** Clear, auditable mapping from task to version ✅ (E02:S09:T02, T03, T04)
- [x] **AC8:** Automated checks for Epic/Story/Task alignment enabled ✅ (E02:S09:T03)

---

## Dependencies

**Blocks:**
- FR-017: Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (requires discrete Task docs)
- FR-018: Abstract Space for Zero-Numbered E/S/T Docs (requires discrete Task docs and 3-tier structure)
- Proper task traceability and version alignment
- Prevention of scope drift and mis-versioning

**Blocked By:**
- None (can be implemented independently; FR-017 and FR-018 depend on this)

**Related Work:**
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework) - Kanban-specific work (prerequisite)
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (this story + E4:S11)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (depends on FR-016, enables E2:S10)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (depends on FR-016)
- **FR-020:** Version Validator Abstract Space Awareness (depends on E02:S10:T02, which depends on this story)
- **E2:S10:** Doc-Init Build (+0) for New E/S/T (depends on this story via T01)
- **E02:S10:T06:** Update Version Validator for Abstract Space Awareness (depends on E02:S10:T02, which depends on this story)
- **Epic 2:** Workflow Management Framework
- **Epic 3:** Numbering & Versioning Framework
- **Epic 4:** Kanban Framework

---

## Completion Summary

**Story Completed:** 2025-12-11 (v0.2.9.6+0)

All tasks complete:
- ✅ T00: Story Creation and FR-016 Intake (v0.2.9.0+0)
- ✅ T01: Coordination and Task Decomposition (v0.2.9.1+0)
- ✅ T02: Update RW Step 1 to Require Task Doc Presence (v0.2.9.2+0)
- ✅ T03: Enhance Validators for Task Doc Presence and Alignment (v0.2.9.3+0)
- ✅ T04: Update RW Agent Execution Guide (v0.2.9.4+1)
- ✅ T05: Documentation and Testing (v0.2.9.5+1)
- ✅ T06: Dependency Wiring Cross-References (v0.2.9.6+0)

**Key Deliverables:**
- RW Step 1 updated to require Task doc presence
- Validators enhanced for Task doc validation and Epic/Story/Task alignment
- RW Agent Execution Guide updated with Task document requirements
- Comprehensive documentation and migration guide created
- Cross-references wired to show E2:S09 blocks E02:S10:T06

**Story enables:**
- E2:S10 (Doc-Init Build +0) - blocked by this story
- FR-017 (Versioning Policy Hardening)
- FR-020 (Version Validator Abstract Space Awareness) - via E02:S10:T06

---

## References

- **E4:S11:** `docs/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md` (Kanban-specific work)
- **FR-016:** `docs/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-017:** `docs/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **RW Agent Execution Guide:** `packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Validation Scripts:** `packages/frameworks/workflow-mgt/scripts/validation/`

---

## Next Actions

- [ ] Complete T01: Coordination and Task Decomposition
- [ ] Wait for E04:S11:T01-T02 (Kanban policy and templates)
- [ ] Begin T02: Update RW Step 1 procedure
- [ ] Enhance validators (T03)

