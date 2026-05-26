# Changelog v0.2.16.12+2

**Release Date:** 2026-05-26 14:15:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 12  
**Task:** E2:S16:T12 — IPW ADR necessity checklist and decision gate (FR-100)

---

## Summary

Change implemented: **FR-100** hybrid ADR decision gate for IPW — canonical policy (`ipw-adr-necessity-checklist.md`), **Phase 5.0** in `ipw.md`, IPP template **§2.5**, Phase 9 validation, FR-042 step 4.5 alignment, and cross-links. SemVer **v0.4.799+2**.

---

## Changes

### Added

- `docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md` — T1–T7 triggers, E1–E5 exemptions, artifact ladder
- `docs/implementation-cycles/IPP-E2S16T12-ipw-adr-necessity-checklist-fr100.md`

### Updated

- `.claude/commands/ipw.md` — Phase 5.0 + Phase 9 ADR checks
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` — §2.5 ADR decision
- `implementation-planning-workflow-agent-execution.md` — Phase 5.0 row
- `FR-042-implementation-planning-workflow-ipw.md` — step 4.5 / Phase 5.0
- `specification-and-planning-artifacts-policy.md`, `dev-kit-ipw-ipp-vs-icw-artifacts.md`
- `code-review-checklist-templates.md`, `agents/ipw/AGENTS.md`
- Kanban: task T12, story 016, FR-100, kboard, fbuboard

---

## References

- [FR-100](../../project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md)
- [E2:S16:T12](../../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T12-ipw-adr-necessity-checklist-fr100.md)
- [IPP](../../implementation-cycles/IPP-E2S16T12-ipw-adr-necessity-checklist-fr100.md)
