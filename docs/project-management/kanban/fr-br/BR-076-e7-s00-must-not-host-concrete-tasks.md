---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T13:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-076: E7:S00 must not host concrete tasks (S00 abstract-only)

**Type:** Bug Report (BR)  
**ID:** BR-076  
**Submitted:** 2026-05-30  
**Submitted By:** User (maintainer governance)  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** OPEN (kanban init **v0.4.19.10+1** — implementing task wired)

**Implementing Task:** [E04:S19:T10](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076.md) (**v0.4.19.10+1**)

**Related:** [FR-072](./FR-072-uniform-repository-abstract-space-kanban-rules.md) (Approach A / D), [dev-kit-versioning-policy.md](../../governance/standards/dev-kit-versioning-policy.md) (S00 Abstract Space), [E5:S00 abstract model](../epics/Epic-5/Story-000-fr-repo.md)

---

## Summary

**Story 0 (`S00`) is abstract space** across epics: forensic anchor only (`0.{epic}.0.0+0`), **no concrete tasks**, and **no temporary “registry” housing** that must later be re-homed to a delivery story.

**Epic 7 `E07:S00`** still contains **concrete task documents** (`T01`–`T06` under `Story-000-uxr-repo/`) and drives **split traceability** (e.g. **E07:S00:T05** registry + **E07:S01:T09** implementation for **UXR-005**). That pattern creates **admin overhead**, violates the **E5:S00** precedent, and conflicts with **FR-072 Approach D** (“do not file new intake under repository stories”).

---

## Problem Statement

1. **Semantic violation:** `S00` reads as “abstract space” but **E7:S00** behaves as a **perpetual UXR repository** with a full task checklist and RW version coordinates on `0.7.0.{task}+build`.
2. **Double housing:** New UXRs are filed as **S00:Txx “anchors”** plus a separate **S01** (or other) **implementing** task — two E:S:T identities, two board rows, and later migration cost.
3. **Policy drift:** [dev-kit-versioning-policy.md](../../governance/standards/dev-kit-versioning-policy.md) already states new intake should use **semantic delivery** placement; **E7:S00** task files contradict that for agents and humans.
4. **Precedent ignored:** [E5:S00](../epics/Epic-5/Story-000-fr-repo.md) was **detasked** (repository work moved to **S01**); **E7** was not brought to the same end state.

---

## Expected Behavior

- **`E07:S00`** is **abstract-only** (`v0.7.0.0+0`): story doc describes abstract space; **no active task checklist rows** for new work.
- **UXR/FR/BR intake** for Epic 7 lands on **semantic delivery stories** only (e.g. **E07:S01**, **E07:S05**, host epic story) — **one** implementing task per report.
- **Historical `E07:S00:Txx`** coordinates remain **linkable** (redirect tables in UXR/FR headers); **no new `T07+`** under S00.
- **Intake / UKW / RW** docs and validators **reject or warn** on new primary tasks filed under any epic’s **`S00`**.

---

## Observed Behavior

- `Story-000-uxr-repo.md` lists **E07:S00:T01–T06** as active/historical registry tasks.
- **UXR-005:** [E07:S00:T05](../epics/Epic-7/Story-000-uxr-repo/T05-uxr-005-repository-anchor.md) + [E07:S01:T09](../epics/Epic-7/Story-001-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md).
- **kboard** / **fbuboard** rows reference **both** registry and implementation tasks for the same UXR.
- **FR-072** migration (**E04:S19:T08**) is in progress but **E7 S00 detasking** is not explicitly tracked as a closure criterion.

---

## Impact

- Repeated **re-housing** and checklist churn when registry tasks are “temporary.”
- **Wrong RW anchors** (`v0.7.0.x` vs `v0.7.1.x`) for the same body of work.
- Agents following **“file UXR under S00”** legacy patterns recreate debt after **FR-072** doc updates.
- Blocks clean **uniform S00 rule** (same model as **E5:S00**) for adopters.

---

## Scope

### In scope (this BR)

- **E7:S00 detasking:** Hollow **E07:S00** to abstract-only; migrate or supersede **T01–T06** registry roles into semantic hosts with redirect notes.
- **UXR-005 exemplar:** Collapse to **E07:S01:T09** only (or chosen semantic task); update **UXR-005**, boards, and story checklists.
- **Governance:** Intake guide, kanban governance, `.cursorrules` / agent intake skill — **explicit “never S00 for tasks.”**
- **Coordination with [FR-072](./FR-072-uniform-repository-abstract-space-kanban-rules.md)** — this BR is the **E7-specific enforcement slice** (may complete before or as part of T08 D2–D4).

### Out of scope (follow-on)

- **E6:S00** BR-repo detasking (separate pass; same rule).
- **Epic 21+** `S00` folders (audit only noted in acceptance criteria doc).
- Automated validator **blocking** all S00 task creation (optional follow-up FR).

---

## Acceptance Criteria

- [ ] **AC1:** `Story-000-uxr-repo.md` marked **abstract-only**; no **TODO/IN PROGRESS** tasks remain on S00 checklist (historical rows redirected).
- [ ] **AC2:** Each legacy **E07:S00:T01–T06** has a documented **semantic host** or **historical-only** banner + UXR/FR header redirect (no dual primary implementing tasks).
- [ ] **AC3:** **UXR-005** (and boards) reference **one** implementing task; **E07:S00:T05** is not an active work row.
- [ ] **AC4:** Active intake policy docs state **S00 never hosts new tasks** (all epics); aligns with **FR-072 Approach D**.
- [ ] **AC5:** **FR-072** / **E04:S19:T08** checklist notes **BR-076** closure or explicit merge criteria.

---

## References

- [FR-072 — Uniform repository vs abstract-space kanban rules](./FR-072-uniform-repository-abstract-space-kanban-rules.md)
- [E04:S19:T08 — FR-072 Approach D migration](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md)
- [E04:S19:T10 — E7 S00 detasking](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T10-e7-s00-detasking-abstract-space-enforcement-br076.md)
- [UXR-005](./UXR-005-kanban-board-formatting-and-governance.md) (exemplar split)
