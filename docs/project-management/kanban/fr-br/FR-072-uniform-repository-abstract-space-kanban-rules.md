---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Uniform Repository vs Abstract-Space Kanban Rules (Cross-Epic)

**Type:** Feature Request (FR)  
**ID:** FR-072  
**Submitted:** 2026-03-31  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IN PROGRESS  

**Implementing Task:** [E5:S01:T72](../epics/Epic-5/Story-001-fr-repo/T72-uniform-repository-abstract-space-kanban-rules.md)

---

## Summary

**Epic 5** and **Epic 7** today use **Story 0** differently: **E5:S00** is **epic-level abstract space only (no tasks)** while **FR** repository work lives in **E5:S01**. **Epic 7** uses **E7:S00** as the **perpetual UXR repository story** with **concrete tasks** (e.g. **E7:S00:T01**, **E7:S00:T05**). That clashes with the stricter E5 model and with the **intent** described in [FR-021](FR-021-fr-br-uxr-repository-stories.md) (UXR anchors under **E7:S01:T01**), which **does not match** the current **E7:S01** (“Codebase Maintenance Tasks”) allocation.

This FR requests a **single, documented rule model** for:

- What **S00** means (abstract-only vs repository container).
- Where **FR / BR / UXR** repository anchors live per epic.
- How **adopters** and **validators** (`validate_branch_context`, `validate_version_bump`, intake, UKW) interpret coordinates.

**Outcomes:** evaluate approaches → **decide** the uniform model → **update all policy and documentation** (including templates, `.cursorrules`, framework Kanban governance, versioning policy cross-links, and affected epic/story/task docs).

**ID note:** **FR-072** is used here because **FR-064** is already **[retire `shields` branch / private repo badges](FR-064-shields-branch-private-repo-badges.md)** (**E5:S01:T69**).

---

## Problem Statement

1. **Semantic collision:** The phrase **“Story 0”** implies “abstract space” in Epic 5 but “repository with tasks” in Epic 7.
2. **Traceability drift:** New intake and **Implementing Task** wiring follow *existing* files; without a **canonical rule**, agents and humans re-derive conflicting interpretations.
3. **FR-021 gap:** FR-021 already points UXR registry at **E7:S01**; the live tree uses **E7:S00** for UXR registry rows. **Reconcile** via an explicit decision, not ad hoc edits.

---

## Evaluation — Candidate Approaches

### Approach A — **Epic 7 conforms to Epic 5 (strict S00 abstract, repo in S01)**

- **Idea:** **E7:S00** becomes **abstract-only** (like **E5:S00**). **UXR** repository tasks move to **E7:S01**, **replacing or displacing** current **E7:S01** (“Codebase Maintenance Tasks”).
- **Pros:** Maximum **symbolic** uniformity with E5/E6 BR pattern; matches FR-021 text.
- **Cons:** **Epic 7 S01** already hosts a large, versioned story with **T01–T09+**. **Renumbering** the rest of Epic 7 (current S01→S02, S02→S3, …) is **high churn** (coordinates, changelogs, historical versions, tooling).
- **fit:** Best only if the program accepts a **one-time Epic 7 story renumbering migration**.

### Approach B — **Epic 7 keeps UXR repo at S00; redefine global rule**

- **Idea:** Globally document: **“S00 may be either epic abstract-only *or* repository story depending on epic history; Epic 7 UXR repo is intentionally S00.”** Epic 5 remains **S00 abstract / S01 repo**.
- **Pros:** **No** mass Kanban coordinate migration for Epic 7.
- **Cons:** **Not** one visual rule for “S00”; adopters must read **per-epic** appendix.
- **fit:** Pragmatic **short term**; weak **uniformity**.

### Approach C — **Introduce dedicated high-number repository story (e.g. E7:S10+ UXR repo); hollow out E7:S00**

- **Idea:** Create **new** story **E7:Snn** “UXR Repo (PERPETUAL)”, migrate **E7:S00:Txx** tasks and `Story-000-uxr-repo` → new folder/story; leave **E7:S00** as **abstract-only** `v0.7.0.0+0`.
- **Pros:** Aligns **semantics** with E5 (**S00** abstract) **without** stealing existing **S01** codebase-maintenance identity.
- **Cons:** New story number; **version coordinate migration** for UXR registry (`0.7.0.n` → `0.7.N.n`); board and doc churn, but **bounded** compared to renumbering all Epic 7.

### Approach D — **Global policy: repository story is always S01; Epic 7 enters multi-phase migration**

- **Idea:** Treat **Approach A** as **north star**; phase: (1) freeze new E7:S00 tasks, (2) open **new** UXR repo story **E7:S01b** or renumber per master plan, (3) deprecate old IDs with redirect tables in docs.
- **Pros:** Clear **end state**; phased risk reduction.
- **Cons:** **Long** transition; requires **migration runbook** and RW attribution rules during overlap.

**Deliverable for "evaluation" phase:** A short **decision memo** (in task doc or `docs/architecture/standards-and-adrs/`) comparing A–D against **cost**, **adopter impact**, **tooling impact**, and **alignment with FR-021**.

---

## Decision Required

Select **one** primary model (or **D** phased to **A** / **C**) and record:

- Canonical definition of **S00** across epics.
- **FR / BR / UXR** repository story numbers per epic (table).
- Whether **FR-021** is **amended** or **superseded** by a new **ADR** or **kanban governance** section.

---

## Decision Memo (Approach D Selected)

**Decision:** Adopt **Approach D** as canonical:

1. **End state (north star):** `S00` is abstract-space only across FR/BR/UXR repository epics.
2. **Migration path:** phased transition from dedicated repository stories to semantic host-story placement.
3. **Intake rule at cutover:** no new FR/BR/UXR intake may create net-new tasks in dedicated repository stories; new intake tasks must be placed in the most appropriate delivery story.
4. **Historical preservation:** existing repository-story task IDs remain valid historical anchors and MUST remain linkable.
5. **FR-021 reconciliation:** treat FR-021 as historically implemented but superseded for new intake behavior by this FR and associated governance updates.

### Why Approach D

- Avoids high-risk all-at-once renumbering while still converging on a uniform model.
- Preserves forensic history and existing links.
- Aligns with KG-R6 semantic placement and practical intake operations.
- Keeps validator/workflow behavior predictable during transition.

### Migration phases

| Phase | Policy/Process state | Repository story behavior |
| ------ | -------------------- | ------------------------- |
| D1 | Publish canonical model + transition guardrails | Read/write for historical completion only |
| D2 | Semantic intake cutover (new FR/BR/UXR -> delivery story) | Frozen for new intake |
| D3 | Closure/deprecation labeling in story docs/boards | Historical registry only |
| D4 | Validator/workflow docs aligned to mixed historical+new model | Redirect table maintained |

---

## Documentation & Policy Update Scope (after decision)

**Must touch (non-exhaustive; refine during implementation):**

| Area | Examples |
| ---- | -------- |
| **Architecture / ADRs** | `dev-kit-versioning-policy.md`, new or updated ADR for repository vs abstract space |
| **Kanban governance** | `kanban-governance-policy.md`, templates (`TASK_TEMPLATE`, story templates), `Epic-*` headers |
| **Epic 5–7 story docs** | `Story-000-*`, `Story-001-*`, Epic 7 UXR repo vs S01 maintenance — align to chosen model |
| **FR-021** | Update to match **live IDs** or mark **superseded** with pointer to ADR |
| **Workflow agent docs** | RW / UKW / intake docs referencing `E7:S00` vs `E7:S01` |
| **Cursor rules** | `.cursorrules` fragments that assume repository story numbering |
| **Validators** | `validate_version_bump.py` story discovery for **S00** (e.g. explicit `--story-file` guidance or smarter Epic 7 routing) |

---

## Requirements

### Functional

- [ ] **FR-072:R01** — Published **single rule model** for abstract space vs repository stories (diagram + table by epic).
- [ ] **FR-072:R02** — **Decision memo** archived with **chosen approach** and **rejected** options + rationale.
- [ ] **FR-072:R03** — **All** affected policy and Kanban docs updated; **no** contradictory “S00” definitions remain in **evergreen** docs.
- [ ] **FR-072:R04** — **FR-021** reconciled (updated or explicitly superseded).
- [ ] **FR-072:R05** — If coordinates change: **migration notes** (old E/S/T → new) for **RW** and **version history** traceability.

### Non-functional

- [ ] **FR-072:NF01** — **Adopter guidance:** how **consumer epics** should allocate S00/S01 when adopting FR/BR/UXR repos.
- [ ] **FR-072:NF02** — **Tooling:** validators / intake scripts **documented** against the chosen model (code changes optional in this FR but gaps must be listed).

---

## Acceptance Criteria

- [ ] **AC1:** A reader can answer “**What is S00?**” in **one** place without Epic 5 vs Epic 7 contradiction.
- [ ] **AC2:** **UXR** traceability IDs in the Kanban tree match the **published** rule (either migrated coordinates or **explicit** exception with **no** silent drift).
- [ ] **AC3:** **UKW / RW / intake** references updated so agents do not file **E7:S00:Txx** against a rule that forbids tasks on S00 (unless **B** is chosen and **explicitly** named).

---

## Dependencies

- [FR-021 – FR/BR/UXR Repository Stories](FR-021-fr-br-uxr-repository-stories.md) — **must reconcile**.
- [FR-018 – Abstract space / zero-numbered EST](FR-018-abstract-space-zero-numbered-est-docs.md) — align terminology.
- [FR-020 – Version validator abstract space awareness](FR-020-version-validator-abstract-space-awareness.md) — validator behavior vs S00.
- Epic 7: [`Story-000-uxr-repo.md`](../epics/Epic-7/Story-000-uxr-repo.md), [`Epic-7.md`](../epics/Epic-7/Epic-7.md).

---

## Intake Decision

**Intake Status:** FILED — released **v0.5.1.72+0** (SemVer **v0.4.683+0**); implementation of FR requirements remains open.

**Assigned To:**

- **Epic / Story:** Epic 5, Story 1 (FR Repo)  
- **Task:** E5:S01:T72  
- **Version (abstract):** `0.5.1.72+0` (doc-init released; further work uses `+1`…)  

**Kanban Links:**

- Epic: [`Epic-5.md`](../epics/Epic-5/Epic-5.md)  
- Story: [`Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md)  
- Task: [`T72`](../epics/Epic-5/Story-001-fr-repo/T72-uniform-repository-abstract-space-kanban-rules.md)

---

## Notes

- **GitHub Issue:** *TBD* (optional follow-up).
- This FR is **meta-governance**: implementation may span **multiple epics**; **E5:S01:T72** remains the **FR anchor**; **implementation tasks** may be filed under Epic 4 / 7 / 9 per the chosen approach.
