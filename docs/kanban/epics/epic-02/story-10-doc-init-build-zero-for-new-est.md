---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 10: Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T

**Status:** ✅ COMPLETE (v0.2.10.7+1)  
**Priority:** HIGH  
**Last updated:** 2025-12-12 (v0.2.10.7+1 – Story complete: Doc-init policy, RW, validators, docs, and migration guide)  
**Estimated Effort:** 1 week  
**Started:** [TBD]  
**Completed:** 2025-12-12  
**Version:** v0.2.10.7+1  
**Code:** E2S10

---

## Task Checklist

- [x] **E02:S10:T00 – Story Creation and FR-017 Intake** ✅ COMPLETE (v0.2.10.0+0)
  - Task: [`T00-story-creation-and-fr-017-intake`](story-10-doc-init-build-zero-for-new-est/T00-story-creation-and-fr-017-intake.md)
- [x] **E02:S10:T01 – Update RW Step 2 to Support Doc-Init Path** ✅ COMPLETE (v0.2.10.1+0)
  - Task: [`T01-update-rw-step-2-to-support-doc-init-path`](story-10-doc-init-build-zero-for-new-est/T01-update-rw-step-2-to-support-doc-init-path.md)
- [x] **E02:S10:T02 – Implement Doc-Init Validation (Docs-Only Check)** ✅ COMPLETE (v0.2.10.2+1)
  - Task: [`T02-implement-doc-init-validation-docs-only-check`](story-10-doc-init-build-zero-for-new-est/T02-implement-doc-init-validation-docs-only-check.md)
- [x] **E02:S10:T03 – Update CHANGELOG Format for Doc Init Entries** ✅ COMPLETE (v0.2.10.3+1)
  - Task: [`T03-update-changelog-format-for-doc-init-entries`](story-10-doc-init-build-zero-for-new-est/T03-update-changelog-format-for-doc-init-entries.md)
- [x] **E02:S10:T04 – Update Versioning Policy with Doc-Init Logic** ✅ COMPLETE (v0.2.10.4+1)
  - Task: [`T04-update-versioning-policy-with-doc-init-logic`](story-10-doc-init-build-zero-for-new-est/T04-update-versioning-policy-with-doc-init-logic.md)
- [x] **E02:S10:T05 – Update RW Step 1 Procedure Documentation** ✅ COMPLETE (v0.2.10.5+1)
  - Task: [`T05-update-rw-step-1-procedure-documentation`](story-10-doc-init-build-zero-for-new-est/T05-update-rw-step-1-procedure-documentation.md)
- [x] **E02:S10:T06 – Update Version Validator for Abstract Space Awareness (FR-020)** ✅ COMPLETE (v0.2.10.6+1)
  - Task: [`T06-update-version-validator-for-abstract-space-awareness-fr-020`](story-10-doc-init-build-zero-for-new-est/T06-update-version-validator-for-abstract-space-awareness-fr-020.md)
- [x] **E02:S10:T07 – Documentation and Testing** ✅ COMPLETE (v0.2.10.7+1)
  - Task: [`T07-documentation-and-testing`](story-10-doc-init-build-zero-for-new-est/T07-documentation-and-testing.md)

> **Format:** `E2:S10:Txx` (Epic 2, Story 10, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.2.10.1+1)`)  
> **Dependency:** This story is blocked by FR-016 (requires discrete Task docs first)

---

## Overview

Introduce a formal **doc-init build `+0`** for newly created Epic/Story/Task (E/S/T) documentation to harden the numbering policy and prevent the anti-pattern of "first real change shipped under a prior task version." The doc-init build establishes the canonical version anchor for the E/S/T before any functional changes land.

---

## Goals

- [ ] RW supports a doc-init path that emits `RC.EPIC.STORY.TASK+0` for new E/S/T docs only
- [ ] Functional changes for that task require `+1` or higher
- [ ] RW validators fail if non-doc changes are present in a `+0` run
- [ ] CHANGELOG format documents "Doc Init" entries
- [ ] Versioning Policy and RW-STEP1 procedure updated to include doc-init logic

---

## Story-Level Acceptance Criteria

**Note:** These acceptance criteria apply to the entire story (E2:S10), not individual tasks.

- [x] ✅ **AC1:** RW supports a doc-init path that emits `RC.EPIC.STORY.TASK+0` for new E/S/T docs only
- [x] ✅ **AC2:** Functional changes for that task require `+1` or higher
- [x] ✅ **AC3:** RW validators fail if non-doc changes are present in a `+0` run
- [x] ✅ **AC4:** CHANGELOG format documents "Doc Init" entries
- [x] ✅ **AC5:** Versioning Policy and RW-STEP1 procedure updated to include doc-init logic
- [x] ✅ **AC6:** Doc-init validation is deterministic (100% confidence)
- [x] ✅ **AC7:** Clear separation between task introduction (docs) and implementation (code)
- [x] ✅ **AC8:** Version validator recognizes `+0` as valid BUILD for abstract spaces (FR-020)
- [x] ✅ **AC9:** Version validator validates abstract space conditions (first-time E/S/T doc, docs-only)

---

## Dependencies

**Blocks:**
- Proper version anchor establishment for new tasks
- Prevention of "first real change shipped under prior task" anti-pattern
- Clear forensic traceability

**Blocked By:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) - Requires discrete Task docs to anchor doc-init builds
- **E4:S11:** Kanban-specific work (policy, templates) must be complete before E2:S09
- **E2:S09:** RW integration work (Task doc presence) must be complete before E02:S10:T01
- **E02:S10:T01:** RW Step 1 doc-init detection must be complete before E02:S10:T02
- **E02:S10:T02:** Doc-init validation must be complete before E02:S10:T06

**Related Work:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (prerequisite - blocks this story)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (this story)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (defines abstract space concept)
- **FR-020:** Version Validator Abstract Space Awareness (validator enhancement - T06)
- **E2:S09:** Kanban Granularity & Discrete Task Docs (RW Integration) (prerequisite for T01)
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework) (prerequisite for E2:S09)
- **E02:S10:T01:** RW Step 1 Doc-Init Path (prerequisite for T02)
- **E02:S10:T02:** Doc-Init Validation (prerequisite for T06)

---

## Completion Summary

- ✅ RW Step 2 updated to support doc-init path and emit `+0` builds for new E/S/T docs (T01)
- ✅ Validators updated to enforce docs-only `+0` builds and fail when code changes are present (T02)
- ✅ Changelog format updated to document Doc Init entries in main and detailed changelogs (T03)
- ✅ Versioning policies updated to include doc-init logic and `+0`/`+1` relationship (T04)
- ✅ RW Agent Execution Guide updated with doc-init scenarios and examples (T05)
- ✅ Version validator enhanced with abstract space awareness and first-time E/S/T detection (T06)
- ✅ Doc-Init Migration Guide and testing checklist created for existing projects (T07)

---

## References

- **FR-017:** `docs/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **FR-016:** `docs/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-018:** `docs/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **FR-020:** `docs/kanban/fr-br/FR-020-version-validator-abstract-space-awareness.md`
- **RW Agent Execution Guide:** `packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Versioning Policy (Dev-Kit):** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Versioning Policy (Framework):** `packages/frameworks/numbering-versioning/versioning-policy.md`

---

## Next Actions

- [ ] Wait for FR-016 completion (E4:S11 and E2:S09)
- [ ] Begin T01: Update RW Step 1 to Support Doc-Init Path
- [ ] Implement doc-init validation (T02)
- [ ] Update changelog format (T03)

