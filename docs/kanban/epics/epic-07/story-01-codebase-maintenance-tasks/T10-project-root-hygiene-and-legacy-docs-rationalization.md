---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T10:51:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 1, Task 10: Project Root Hygiene and Legacy Docs Rationalization

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2026-05-29 (intake created from UXR-013)  
**Started:** 2026-05-29  
**Completed:** [TBD]  
**Version:** v0.7.1.10+1  
**Code:** E07S01T10

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`  
**Full Task ID:** `E07:S01:T10`

---

## Scope

Audit and rationalize repository root artifacts to reduce clutter, improve first-contact navigation, and align root content with canonical project governance.

---

## Input

- UXR intake: [UXR-013](../../../fr-br/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)
- Existing cleanup context: [FR-039](../../../fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- Root-level file inventory from current repository state

**IPW planning artifact (when used):** [TBD - run `IPW E07:S01:T10`]

---

## Deliverable

- Root-level inventory table with keep/move/archive/remove decision and rationale for each candidate file.
- Canonical root policy snippet (what belongs at root vs where to relocate non-root artifacts).
- Executable cleanup checklist with ordering, validation commands, and rollback notes.
- Updated references map to ensure no broken links after implementation.

---

## Acceptance Criteria

- [ ] Root-level artifacts are inventoried and classified with clear rationale.
- [ ] Canonical root policy is documented and linked from implementation output.
- [ ] Cleanup checklist is sequenced and implementation-ready (no ambiguous ownership).
- [ ] Planned moves/removals include link impact analysis and validation approach.
- [ ] IPW/IPP artifact exists and is linked before implementation begins.

---

## Approach

1. Generate a root-only inventory and classify each item by function and ownership.
2. Cross-check each candidate against governance and workflow documentation.
3. Produce a staged cleanup plan with explicit validation and rollback steps.
4. Submit for implementation after IPW and explicit execution authorization.

---

## Dependencies

**Depends On:**

- UXR intake completion in `UXR-013`
- IPW package for `E07:S01:T10` before implementation

**Blocks:**

- Root directory UX improvement and discoverability outcomes for adopters

**Blocked By:**

- Explicit implementation authorization after planning artifacts

**Parallel Development Candidacy:** Safe because this task is documentation/planning-first and can be prepared independently before execution.

---

## Cross-Wiring

**Related BR/FR Documents:**

- **[UXR-013: Project root hygiene and legacy docs rationalization](../../../fr-br/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)** - **Relationship Type:** Informs - **Context:** Captures user-reported pain and defines UX acceptance direction for root cleanup.
- **[FR-039: AI Dev Kit project review and legacy clean-up](../../../fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** - **Relationship Type:** Coordinates With - **Context:** Broader repository cleanup context that this task narrows to root-level hygiene.
- **[FR-101: Consolidate governance under docs/governance/](../../../fr-br/FR-101-consolidate-governance-under-docs-governance.md)** — **Coordinates With** — [E07:S01:T11](T11-consolidate-governance-under-docs-governance-fr101.md) rehouses policies under `docs/governance/`; avoid conflicting root moves.

**Cross-Wiring Notes:**

Task focuses root-level curation specifically, while FR-039 covers wider repository review and cleanup. Coordinate with T11 so root policy files are not moved twice.

---

## Related Work

**Related BR/FR Links:**

- [UXR-013: Project root hygiene and legacy docs rationalization](../../../fr-br/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)
- [FR-039: AI Dev Kit project review and legacy clean-up](../../../fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)

**Related Tasks:**

- [E07:S01:T11](T11-consolidate-governance-under-docs-governance-fr101.md) — governance rehousing under `docs/governance/` ([FR-101](../../../fr-br/FR-101-consolidate-governance-under-docs-governance.md))

**Related Stories:**

- [E7:S01: Codebase Maintenance Tasks](../story-01-codebase-maintenance-tasks.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Notes

This task is currently intake-scoped and planning-gated. No cleanup implementation should begin until IPW artifacts exist and explicit user authorization is provided.

---

## Completion Summary

Pending.

---

## References

- `rw-config.yaml`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md`

---

## Next Actions

- [ ] Run `IPW E07:S01:T10` in plan mode.
- [ ] Produce `IPP-E7S1T10-*.md` under `docs/implementation-cycles/`.
- [ ] Start implementation only after explicit authorization.
