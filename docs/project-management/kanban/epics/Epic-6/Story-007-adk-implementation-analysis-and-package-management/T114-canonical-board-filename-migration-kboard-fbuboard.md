---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 114: Canonical board filename migration (`kboard.md` / `fbuboard.md`)

**Task ID:** E6:S07:T114  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Code:** E6S07T114

**Upstream:** [UXR-008 – Default board naming adoption](../../../fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)

**Coordinates:** [E2:S16:T03](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (UKW perpetual), [E6:S07:T110](T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md)

---

## Input

- User request to set canonical board names to `kboard.md` and `fbuboard.md`.
- Existing implementation diff that migrated references and defaults without prior planning artifacts.
- Need to backfill governance-complete artifacts (task + ICW suite + verification notes).

## Deliverable

- Canonical board filename migration anchored to a dedicated task with:
  - task doc traceability,
  - ICW specification/test-design/implementation-plan artifacts,
  - board and UXR linkage,
  - validation evidence including test run and Docusaurus build.

## Version Anchor

Forensic marker: RW `v0.6.7.114+1` — canonical board naming migration released with `--art`.

---

## Scope

1. Anchor migration to task E6:S07:T114 and re-wire UXR-008.
2. Produce ICW artifact triad for the migration.
3. Ensure script defaults and package install paths use `kboard.md`/`fbuboard.md` while maintaining alias fallback support.
4. Verify with existing workflow tests and Docusaurus production build.

---

## Acceptance Criteria

- [x] AC1: UXR-008 links to a dedicated implementing task (E6:S07:T114).
- [x] AC2: Task doc exists with clear scope, deliverable, and references.
- [x] AC3: ICW specification, test design, and implementation plan docs exist and are cross-linked.
- [x] AC4: Workflow edge tests for board-update behavior pass.
- [x] AC5: Docusaurus build verification evidence is recorded.

---

## Evidence

- Test run:
  - `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4`
  - Result: all tests passed.
- Docusaurus production build:
  - `npm run build` (run from `portal/`)
  - Result: build succeeded (`Generated static files in "build"`).

---

## References

- [UXR-008](../../../fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [ICW-E6S07T114-specification](../../../../../implementation-cycles/ICW-E6S07T114-specification.md)
- [ICW-E6S07T114-test-design](../../../../../implementation-cycles/ICW-E6S07T114-test-design.md)
- [ICW-E6S07T114-implementation-plan](../../../../../implementation-cycles/ICW-E6S07T114-implementation-plan.md)
