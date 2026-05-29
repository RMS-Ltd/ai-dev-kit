---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 66: Cursorrules vs Packaged RW Trigger Section Parity

**Task ID:** E5:S01:T66  
**Status:** COMPLETE (2026-03-30 — dual-source parity doc + excerpt fix + root `.cursorrules` link)  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-03-25  
**Last updated:** 2026-03-30 — released v0.5.1.66+2 (RW-k used +1)  
**Version:** v0.5.1.66+2  
**Version Anchor:** v0.5.1.66+2  
**Code:** E5S01T66

**Repository Pattern:** Internal scaffold (no FR yet).

---

## Scope

**ai-dev-kit** ships **two** RW rule surfaces: repo root [`.cursorrules` (source)](https://github.com/earlution/ai-dev-kit/blob/main/.cursorrules) and the installable excerpt [`cursorrules-rw-trigger-section.md` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/cursorrules-rw-trigger-section.md). After **FR-060** (mandatory task token), **FR-038** (Step 7 scoped UKW), and Step/TODO renumbering, adopters copying only the package can **drift** from canonical repo behavior.

Define and implement a **parity discipline**: checklist doc, merge procedure, or light “diff targets” (Step 1.x token gate, Step 1.5 intent, Step 1.x `validate_rw_task_complete`, Step 7 scoped UKW naming) so maintainers keep both aligned when RW rules change.

---

## Input

- Current `.cursorrules` RW block.
- `cursorrules-rw-trigger-section.md` full trigger + step list.
- [E2:S16:T03](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (RW maintenance perpetual) for ownership overlap.

---

## Deliverable

- **Documentation** (preferred minimum): short **“RW rules dual-source”** note in workflow mgt README or `docs/` pointing to fields that must stay in sync.
- **Optional:** Script or CI grep that fails on known drift patterns (higher effort — out of scope unless expanded).

---

## Acceptance Criteria

- [x] Written **parity checklist** or maintenance note listing sections that must match (or intentional deltas documented).
- [x] Post-change **procedure** for contributors (e.g. “edit `.cursorrules` first, then port to `cursorrules-rw-trigger-section.md`”).
- [x] One **explicit pass** after this task: document current known deltas (if any) or confirm none.

---

## Related Work

- **E5:S01:T63** / **FR-060** — mandatory RW task id + validators.
- **E5:S01:T38** / **FR-038** — Step 7 scoped UKW naming.

---

_Story:_ [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
