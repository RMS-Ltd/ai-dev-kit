# Changelog v0.2.16.3+6

**Release Date:** 2026-05-20 18:30:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 3  
**Task:** E2:S16:T03 — Workflow maintenance (Perpetual)

---

## Summary

Documentation-only RW with **`--art`**: align **Global Implementation Gate** and planning-artifact policy with **consolidated IPP** (single `IPP-E…S…T…-*.md`) vs **ICW three-file** packages; add canonical packaging reference doc; reconcile **FR-042** §8; update **IPP-E2S16T03** references; add **E2:S16:T03** perpetual row on **kboard**.

---

## Changes

### Added

- `docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md` — IPP vs ICW trio matrix, examples, adopter note.

### Updated

- `AGENTS.md` — IPW precondition accepts linked **IPP** or **ICW** trio.
- `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md` — ladder §3, durable IPP class, handoff and discovery.
- `docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md` — §8 artifact packaging; references.
- `.cursorrules` — gate precondition 2; durable artifacts; ICW integrate step.
- `packages/frameworks/workflow mgt/agents/ipw/AGENTS.md` — ai-dev-kit canonical IPP vs optional folder layout.
- `docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md` — reference to packaging doc.
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md` — reference to packaging doc.
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md` — version / last updated.
- `docs/project-management/kanban/kboard.md` — header; **E2:S16:T03** perpetual row; version.
- `README.md` — SemVer and internal version display.
- `semver-registry.yaml` — `task_touch_counter` 791→792 (task_touch SemVer alignment).

---

## Validation

- `validate_branch_context.py --strict` — PASS  
- `validate_rw_task_complete.py --requested E2:S16:T03` — PASS (perpetual)  
- `validate_rw_task_intent.py --requested E2:S16:T03 --art` — PASS  

---

## References

- Host task: `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`
- IPP: `docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md`
