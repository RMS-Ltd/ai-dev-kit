---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Kanban Intake — Atomic Filing (KG-R2) & Semantic Task Placement (KG-R6)

**Type:** Feature Request (FR)  
**ID:** FR-074  
**Submitted:** 2026-03-31  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** PENDING  

**Implementing Task:** [E5:S01:T74](../epics/Epic-5/Story-001-fr-repo/T74-kanban-intake-atomic-kg-r2-kg-r6-governance.md)

---

## Summary

Codify **atomic FR/BR/UXR intake**: every new report ships **in the same session** as its **task document** and **bidirectional links** (**KG-R2**). Codify **semantic story placement** and **optional** FR/BR/UXR-id ↔ task-number symmetry (**KG-R6**). Updates land in framework **kanban governance**, **FR_BR_INTAKE_GUIDE**, **intake-process** skill, **intake-workflow.yaml**, workflow **README**, **rituals** policy §1.2, **kanban README**, **fr-br-uxr-board** / **T73** alignment.

---

## Problem

Orphan `fr-br/*.md` files and inconsistent intake order produced board drift and validator pain. Strict 1:1 id symmetry forced tasks into repository semantics instead of delivery stories.

---

## Requirements

- **FR-074:R01** — Framework **`kanban-governance-policy.md`**: **KG-R2** (UXR + atomic intake), **KG-R6** (SHOULD: semantic placement).  
- **FR-074:R02** — **`FR_BR_INTAKE_GUIDE.md`**: UXR, atomic flow, anti-pattern note.  
- **FR-074:R03** — **`.cursor/skills/intake-process`**: ordered steps + atomic rule.  
- **FR-074:R04** — **`intake-workflow.yaml`** + workflow mgt **README** governance blurb.  
- **FR-074:R05** — **`docs/.../rituals/policy/kanban-governance-policy.md` §1.2** + **`kanban/README.md`** workflow.  
- **FR-074:R06** — **`fbuboard.md`** + **T73** story-choice / hygiene pointers.

---

## Acceptance Criteria

- [x] **AC1:** Adopters can read **KG-R2** / **KG-R6** in framework policy **key_rules** and body.  
- [x] **AC2:** Intake guide and skill forbid closing intake without task + links.  
- [x] **AC3:** **RW** releases **`0.5.1.74+1`** attributing this FR/T.

### Release / verification

- **2026-03-31:** Change set merged under **E5:S01:T74** / internal **`0.5.1.74+1`**. Treat FR requirements as **satisfied pending adopter verification** (see changelog neutral wording).

---

## Dependencies

- [FR-073](FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md) (intake plan / T73 context).  
- [FR-072](FR-072-uniform-repository-abstract-space-kanban-rules.md) (future alignment of S00/S01; out of scope for this FR’s deliverable).

**Post-release alignment note (2026-04):** FR-072 Approach D now defines migration/closure behavior for dedicated repository stories. FR-074's KG-R6 semantic placement remains the operative intake rule for new work.

---

## Intake Decision

**Intake Status:** FILED — released **v0.5.1.74+1** (verify in downstream projects before closing FR)

**Assigned To:**

- **Epic / Story:** Epic 5, Story 1 (FR Repo)  
- **Task:** E5:S01:T74  
- **Version:** `0.5.1.74+1` (SemVer `0.4.685+1`)  

**Kanban Links:**

- Epic: [`Epic-5.md`](../epics/Epic-5/Epic-5.md)  
- Story: [`Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md)  
- Task: [`T74`](../epics/Epic-5/Story-001-fr-repo/T74-kanban-intake-atomic-kg-r2-kg-r6-governance.md)
