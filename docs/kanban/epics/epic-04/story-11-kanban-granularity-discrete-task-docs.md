---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 11: Kanban Granularity & Discrete Task Docs (Kanban Framework)

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Last updated:** 2026-06-05 (v0.4.11.7+16 — E04:S11:T07 COMPLETE)  
**Estimated Effort:** 1 week (T01-T06) + 6-8 weeks (T07 migration)  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.4.11.7+0  
**Code:** E4S11

---

## Task Checklist

- [x] **E04:S11:T00 – Story Creation and Task Decomposition** ✅ COMPLETE (v0.4.11.0+0)
  - Task: [`T00-story-creation-and-task-decomposition`](story-11-kanban-granularity-discrete-task-docs/T00-story-creation-and-task-decomposition.md)
- [x] **E04:S11:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure** ✅ COMPLETE (v0.4.11.1+0)
  - Task: [`T01-update-kanban-governance-policy-to-mandate-3-tier-structure`](story-11-kanban-granularity-discrete-task-docs/T01-update-kanban-governance-policy-to-mandate-3-tier-structure.md)
- [x] **E04:S11:T02 – Create Task Document Template and Update Story Template** ✅ COMPLETE (v0.4.11.2+2)
  - Task: [`T02-create-task-document-template-and-update-story-template`](story-11-kanban-granularity-discrete-task-docs/T02-create-task-document-template-and-update-story-template.md)
- [x] **E04:S11:T03 – Update Versioning Policy with Task Doc Requirements (Kanban-related sections)** ✅ COMPLETE (v0.4.11.3+1)
  - Task: [`T03-update-versioning-policy-with-task-doc-requirements-kanban-r`](story-11-kanban-granularity-discrete-task-docs/T03-update-versioning-policy-with-task-doc-requirements-kanban-r.md)
- [x] **E04:S11:T04 – Define Abstract Space for Zero-Numbered E/S/T Docs (FR-018)** ✅ COMPLETE (v0.4.11.4+1)
  - Task: [`T04-define-abstract-space-for-zero-numbered-est-docs-fr-018`](story-11-kanban-granularity-discrete-task-docs/T04-define-abstract-space-for-zero-numbered-est-docs-fr-018.md)
- [x] **E04:S11:T05 – Dependency Wiring Cross-References** ✅ COMPLETE (v0.4.11.5+0)
  - Task: [`T05-dependency-wiring-cross-references`](story-11-kanban-granularity-discrete-task-docs/T05-dependency-wiring-cross-references.md)
- [x] **E04:S11:T06 – Review and Optimize Template Structure for Tier Delegation** ✅ COMPLETE (v0.4.11.6+2 – All phases complete: templates optimized, guidelines created, compliance audit complete, migration guide created)
  - Task: [`T06-review-and-optimize-template-structure-for-tier-delegation`](story-11-kanban-granularity-discrete-task-docs/T06-review-and-optimize-template-structure-for-tier-delegation.md)
- [x] **E04:S11:T07 – Migrate Embedded Tasks to Discrete Task Documents** - ✅ COMPLETE (v0.4.11.7+16 — [migration guide](story-11-kanban-granularity-discrete-task-docs/migration-guide.md) · [completion report](story-11-kanban-granularity-discrete-task-docs/migration-completion-report.md))
  - Task: [`T07-planning-spec-tests-impl.md`](story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md)
  - IPP: [`IPP-E04S11T07-fr016-discrete-task-docs-migration.md`](../../../implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration.md)


> **Format:** `E4:S11:Txx` (Epic 4, Story 11, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.11.1+1)`)  
> **Coordination:** This story coordinates with E2:S09 (Workflow Management) for RW integration

---

## Overview

Implement Kanban-specific components of FR-016: Kanban Granularity & Discrete Task Docs. This story focuses on Kanban policy updates, template creation, and versioning policy updates related to Kanban governance. RW-specific work (Step 1 updates, validators, agent execution guide) is handled in E2:S09.

---

## Goals

- [ ] Update Kanban governance policy to mandate 3-tier structure and discrete Task docs
- [ ] Create Task document template and update Story template
- [ ] Update versioning policy with Task doc requirements (Kanban-related sections)
- [ ] Coordinate with E2:S09 for RW integration

---

## Acceptance Criteria

- [ ] **AC1:** Kanban policy updated to mandate 3-tier structure and discrete Task docs
- [ ] **AC2:** Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR
- [ ] **AC3:** Task document template created with examples
- [ ] **AC4:** Story template updated to clarify Task doc formats
- [ ] **AC5:** Versioning policy updated with Task doc requirements (Kanban sections)
- [ ] **AC6:** Abstract space concept defined in Kanban Policy and Numbering Policy (FR-018)
- [ ] **AC7:** Template structure optimized for proper tier delegation (Epic → Story → Task)

---

## Dependencies

**Blocks:**
- E2:S09 (RW Integration) - requires policy and templates
- E02:S09:T02 (RW Step 1 Task doc presence) - requires policy and templates
- E02:S09:T03 (Validators) - requires policy requirements
- E02:S10:T01 (RW Step 1 Doc-Init Path) - requires E2:S09 completion
- E02:S10:T02 (Doc-Init Validation) - requires T01 completion
- E02:S10:T06 (Version Validator Abstract Space Awareness) - requires T02 completion

**Blocked By:**
- None (can proceed independently)

**Related Work:**
- **E2:S09:** Kanban Granularity & Discrete Task Docs (Workflow Management coordination) (depends on this story)
- **E4:S06:** Comprehensive Canonical E/S/T Template System (creates Epic/Story/Task templates that T06 optimizes)
- **E04:S06:T03:** Create story template files (T06 reviews and optimizes)
- **E04:S06:T04:** Create task template files (T06 reviews and optimizes)
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (this story + E2:S09)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (depends on FR-016, enables E2:S10)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (T04)
- **FR-020:** Version Validator Abstract Space Awareness (depends on E02:S10:T02, which depends on E2:S09, which depends on this story)
- **E2:S10:** Doc-Init Build (+0) for New E/S/T (depends on E2:S09)
- **E02:S10:T06:** Update Version Validator for Abstract Space Awareness (depends on E02:S10:T02, which depends on E2:S09)

---

## Completion Summary

[To be filled upon completion]

---

## References

- **E2:S09:** `docs/kanban/epics/epic-02/story-09-kanban-granularity-discrete-task-docs.md`
- **FR-016:** `docs/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-017:** `docs/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **FR-018:** `docs/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **Kanban Governance Policy (Canonical):** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Kanban Governance Policy (Dev-Kit):** `docs/project-management/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy (Dev-Kit):** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

## Next Actions

- [ ] Begin T01: Update Kanban Governance Policy
- [ ] Create Task document template (T02)
- [ ] Update versioning policy (T03)
- [ ] After FR-016 completion: Define abstract space concept (T04 - FR-018)
- [ ] After E04:S06:T03-T04: Review and optimize template structure for tier delegation (T06)
- [ ] Coordinate with E2:S09 for RW integration

