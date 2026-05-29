---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 11: IPW documentation phases — update/create + housing (FR-096)

**Task ID:** E2:S16:T11  
**Status:** COMPLETE ✅ COMPLETE (v0.2.16.11+1)  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-05-20  
**Last updated:** 2026-05-20 (v0.2.16.11+1 — RW `--art`: IPW Phases 5–6; IPP §5–§7; FR-096)  
**Version Anchor:** v0.2.16.11+1  
**Code:** E2S16T11

**Upstream:** [FR-096 — IPW mandatory documentation phases (update/create + housing)](../../../fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Workflow and template governance only; no new Docusaurus publication package beyond existing IPW KB paths.

---

## Scope

Operationalize FR-042 documentation planning intent by adding IPW **Phase 5** (documentation update/create inventory) and **Phase 6** (documentation housing) after implementation planning, before the IPP is written. Align all canonical IPW surfaces and the consolidated IPP template (§1–§7).

---

## Input

- [FR-096](../../../fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md) — formal steps 5–6 (previously not enforced in `/ipw`)
- [FR-094](../../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md) — phase-gate pattern
- `.claude/commands/ipw.md`, `PLAN_DOC_TEMPLATE.md`, `implementation-planning-workflow-agent-execution.md`

---

## Deliverable

- `.claude/commands/ipw.md` — Phases 5–6 added; phases 7–9 renumbered (create IPP, wire, validate).
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` — §5 Documentation deliverables, §6 Documentation housing, §7 Success criteria.
- `implementation-planning-workflow-agent-execution.md` — ten-phase table + documentation phases section.
- `FR-042-implementation-planning-workflow-ipw.md` — steps 5–9 aligned with operational IPW.
- `dev-kit-ipw-ipp-vs-icw-artifacts.md`, `specification-and-planning-artifacts-policy.md` — §1–§7 / Phase 5–6 references.
- `AGENTS.md`, `.cursorrules`, `packages/frameworks/workflow mgt/agents/ipw/AGENTS.md` — gate and agent stub updates.
- `docs/implementation-cycles/README.md` — IPP naming note.

---

## Acceptance Criteria

- [x] **AC1:** `/ipw` defines Phases 5–6 with gates after Phase 4.
- [x] **AC2:** `PLAN_DOC_TEMPLATE.md` includes §5–§7 as specified.
- [x] **AC3:** Agent execution guide lists phases 0–9 and housing ladder.
- [x] **AC4:** FR-042 step table matches operational phases.
- [x] **AC5:** `AGENTS.md` and `.cursorrules` reference IPP Sections 1–7.
- [x] **AC6:** FR-096 ↔ E2:S16:T11 bidirectionally linked.
- [x] **AC7:** Released via RW with forensic version on this task.

---

## Dependencies

**Depends On:** FR-042 (IPW product), FR-094 (`/ipw` command and phase gates)  
**Blocks:** None  
**Related:** BR-066 (publication housing contract)

---

## References

- [FR-096](../../../fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [Story 016](../Story-016-perpetual-ongoing-workflow-operations.md)
