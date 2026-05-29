---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T19:10:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S19:T02 - Planning: Spec, Tests, Implementation Plan (IPP)

> **Successor planning artifact:** [`IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md`](IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md) — T02 scope is consolidated into the [`E4:S19:T06`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) meta-task with historical content preserved below for traceability.

**Host Task:** [`T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md) **(E4:S19:T02 — SUPERSEDED by E4:S19:T06)**  
**Planning for:** [FR-086 - Canonical supporting Kanban/FBU doc naming and `FBU` collective terminology](../project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)  
**Status:** Superseded (historical content preserved below)

---

## 1. Specification

### 1.1 Goal

Define and implement a canonical naming + terminology contract for supporting Kanban/FBU documents that extends `kboard`/`fbuboard` conventions, standardizes collective references to `FBU`, and preserves individual issue identity (`FR-*`, `BR-*`, `UXR-*`).

### 1.2 Functional requirements

- **F1:** Produce a canonical naming map for supporting Kanban/FBU docs beyond primary boards.
- **F2:** Define where collective `FBU` wording is required, optional, or disallowed.
- **F3:** Apply terminology updates only to collective references; do not rename individual issue docs or prefixes.
- **F4:** Provide compatibility alias strategy for renamed or canonicalized supporting docs.
- **F5:** Update cross-doc links/navigation to canonical targets while preserving link-safe transitions.
- **F6:** Ensure FR/task/story/board traceability remains deterministic after migration.

### 1.3 Non-functional requirements

- **N1:** Migration is deterministic and idempotent for targeted docs.
- **N2:** Historical traceability is preserved (legacy context remains understandable).
- **N3:** Changes are human-readable and do not create naming ambiguity.
- **N4:** Validation catches broken links and terminology drift before release.

### 1.4 Out of scope

- Runtime workflow logic changes.
- Renaming existing individual issue documents (`FR-*`, `BR-*`, `UXR-*`).
- Re-scoping unrelated Epic/Story ownership beyond FR-086/T02.

### 1.5 Constraints and caveats

- User caveat is mandatory: `FBU` is collective shorthand only; individual issue identities remain unchanged.
- Existing board canonical names (`kboard.md`, `fbuboard.md`) are baseline and must not regress.

---

## 2. Test design

| ID | Area | What to verify |
| ---- | ------ | ---------------- |
| T1 | Naming map completeness | Supporting Kanban/FBU docs in scope have canonical target names + explicit alias policy. |
| T2 | Terminology boundaries | Collective references use `FBU` where intended; non-collective contexts do not get incorrect substitutions. |
| T3 | Identity guardrail | Individual issue files still use `FR-*`, `BR-*`, `UXR-*` naming and linking. |
| T4 | Link integrity | Updated links resolve across touched docs (task/story/FR/boards/supporting docs). |
| T5 | Traceability | FR-086, E4:S19:T02, Story 019, boards, and this IPW remain bidirectionally coherent. |
| T6 | Compatibility behavior | Alias/legacy references remain valid during migration window (or redirect cleanly if alias strategy is used). |

---

## 3. Implementation plan

### Phase A - Define canonical contract

1. Inventory supporting Kanban/FBU docs in scope.
2. Draft canonical naming map + alias/back-compat strategy.
3. Define terminology application rules (`FBU` allowed/required/disallowed contexts).

### Phase B - Apply controlled migration

1. Apply canonical naming/terminology updates in scoped documents.
2. Preserve individual issue identity and references (`FR-*`, `BR-*`, `UXR-*`).
3. Update navigation/cross-links to canonical targets.

### Phase C - Reconcile and harden

1. Reconcile task/story/FR/board traceability surfaces.
2. Validate links and terminology consistency.
3. Produce migration notes for maintainers (what changed, what remains aliased).

### Phase D - Verify and release readiness

1. Run markdown lint for touched files.
2. Run targeted link validation for touched documentation.
3. Confirm diff scope remains governance/documentation only.

---

## 4. Success criteria

- [ ] IPW file exists with complete specification, test design, and implementation phases.
- [ ] Canonical naming map + alias strategy is documented and actionable.
- [ ] `FBU` collective terminology rules are explicit and applied in scoped docs.
- [ ] Individual issue naming identity remains unchanged (`FR-*`/`BR-*`/`UXR-*`).
- [ ] Task/FR/story/board/IPW links remain valid and bidirectional.
- [ ] Touched docs pass lint/link validation checks.

---

## References

- [Host task E4:S19:T02](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md)
- [FR-086](../project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [Story 019](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [Canonical board baseline T114](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md)
