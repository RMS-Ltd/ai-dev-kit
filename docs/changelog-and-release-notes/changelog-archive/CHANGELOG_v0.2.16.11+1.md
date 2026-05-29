# Changelog v0.2.16.11+1

**Release Date:** 2026-05-20 08:43:35 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 11  
**Task:** E2:S16:T11 — IPW documentation phases: update/create + housing (FR-096)

---

## Summary

Operationalized **IPW Phases 5–6** after implementation planning: documentation update/create inventory and documentation housing before the IPP is written. Added **FR-096**, **IPP template §5–§7**, ten-phase `/ipw` command, and aligned **FR-042**, gates, and policy docs. Adopted via **`--art`** from E2:S16:T03.

---

## Changes

### Added

- `docs/project-management/kanban/fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md`
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T11-ipw-documentation-phases-update-create-and-housing-fr096.md`

### Updated

- `.claude/commands/ipw.md` — Phases 5–6 (doc inventory + housing); phases 7–9 renumbered; validation checks for §5–§6.
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` — §5 Documentation deliverables, §6 Documentation housing, §7 Success criteria.
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md` — ten-phase table; documentation phases section.
- `docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md` — steps 5–9 aligned with operational IPW.
- `docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md` — §1–§7 / Phase 5–6.
- `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md` — IPP sections and Phase 5–6.
- `AGENTS.md`, `.cursorrules` — Global gate references IPP Sections 1–7.
- `packages/frameworks/workflow mgt/agents/ipw/AGENTS.md` — ten-phase note for ai-dev-kit.
- `docs/implementation-cycles/README.md` — IPP naming.
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md` — T11 checklist row.
- `README.md`, `semver-registry.yaml` — version and SemVer mapping.

---

## References

- [FR-096](../../project-management/kanban/fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md)
- [E2:S16:T11](../../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T11-ipw-documentation-phases-update-create-and-housing-fr096.md)
