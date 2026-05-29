---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E5:S01:T72 – Uniform Repository vs Abstract-Space Kanban Rules

**Task ID:** E5:S01:T72  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Version Anchor:** v0.5.1.72+0 (RW -k doc-init — **Released** 2026-03-31)  
**Feature Request:** [FR-072 – Uniform Repository vs Abstract-Space Kanban Rules](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)

---

## Summary

Consolidate **cross-epic** rules so **Story 0** (abstract space vs repository), **FR/BR/UXR repository** placement, and **version/intake** semantics are **one coherent model**. Evaluate approaches **A–D** in FR-072, **decide**, then **update policy and all affected documentation** (including **FR-021** reconciliation, Kanban governance, ADR/architecture, Epic 7 UXR story numbering, and validator/intake guidance).

**Traceability:** **FR-072** (not **FR-064**, which is [`FR-064-shields-branch-private-repo-badges.md`](../../../fr-br/FR-064-shields-branch-private-repo-badges.md) / **E5:S01:T69**).

---

## Scope

1. **Analysis:** Produce a short **decision memo** (reject/accept approaches from FR-072 with rationale and adopter impact).
2. **Decision:** Record **canonical rule** for **S00** and repository story numbering (per epic table).
3. **Documentation sweep:** Update evergreen docs listed in FR-072 **R03**; remove contradictory **S00** definitions.
4. **Migration (if required):** If coordinates change (e.g. **E7:S00:Txx** → new story), add **migration runbook** and ID redirect table; execute under separate implementation tasks as needed.
5. **Tooling alignment:** List or implement **validate_version_bump** / intake / RW doc fixes for **Epic 7 S00** discovery.

---

## Input

- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)  
- [FR-021](../../../fr-br/FR-021-fr-br-uxr-repository-stories.md)  
- [Epic 5 Story-000](../Story-000-fr-repo.md) (abstract-only)  
- [Epic 7 Story-000](../../Epic-7/Story-000-uxr-repo.md) (UXR repository today)

---

## Deliverable

1. **Decision memo** + **canonical rule** (diagram/table).  
2. **Updated** policy / governance / epic / story / template / `.cursorrules` / framework docs per scope.  
3. **FR-021** updated or **superseded** with pointer.  
4. **Migration notes** if E/S/T coordinates change.

---

## Approach D Execution Notes

- **Selected model:** Approach D (phased migration toward uniform semantics).
- **North star:** Dedicated FR/BR/UXR repository stories are closed to new intake; new intake uses semantic host-story placement.
- **Historical guarantee:** Existing repository-story IDs remain valid and discoverable; no destructive renumbering of historical artifacts.
- **FR-021 handling:** retain as historical baseline; supersede for new intake behavior via FR-072 policy updates.

### Phase checklist (this task)

- [x] D1 - Canonical model published in FR-072/T72.
- [ ] D2 - Intake/governance docs updated for semantic-only new intake.
- [ ] D3 - Repository stories labeled historical/deprecated for new intake.
- [ ] D4 - Migration matrix + workflow/validator docs aligned.
- [ ] D5 - Consistency pass across board and policy docs.

---

## Migration Matrix (Historical Anchor -> New Intake Pattern)

| Historical anchor model | New intake model | Redirect guidance |
| --- | --- | --- |
| FR-xxx -> `E5:S01:Txx` | FR-xxx -> `E{delivery_epic}:S{delivery_story}:T{delivery_task}` | Keep FR links to old `E5:S01:Txx` when it exists; for new FRs, set `Implementing Task` to delivery task directly. |
| BR-xxx -> `E6:S01:Txx` | BR-xxx -> `E{delivery_epic}:S{delivery_story}:T{delivery_task}` | Preserve old BR links to `E6:S01:Txx`; do not create new BR anchors under `E6:S01` after cutover. |
| UXR-xxx -> `E7:S00:Txx` | UXR-xxx -> `E{delivery_epic}:S{delivery_story}:T{delivery_task}` | Keep legacy UXR S00 anchors valid; new UXR intake uses semantic host story and direct task wiring. |

### Redirect policy

1. Never rewrite historical IDs in-place solely for cosmetic uniformity.
2. New intake must use semantic host-story placement.
3. Historical repository stories may include pointer rows to newer delivery tasks when useful.
4. Validators/workflow docs must treat repository-story IDs as historical-valid, not intake-default.

---

## Acceptance Criteria

- [ ] **AC1:** FR-072 **R01–R05** and **AC1–AC3** satisfied.  
- [ ] **AC2:** No evergreen doc **contradicts** the published **S00** / repository model without an **explicit** labeled exception.  
- [ ] **AC3:** Task checklist + FR **Implementing Task** remain **bidirectional`.

---

## Wiring

- **Epic / Story:** E5:S01 (FR Repo)  
- **Traceability:** FR-072 = E5:S01:T72  

---

## References

- Versioning policy: `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`  
- Kanban governance: `packages/frameworks/kanban/policies/kanban-governance-policy.md`
