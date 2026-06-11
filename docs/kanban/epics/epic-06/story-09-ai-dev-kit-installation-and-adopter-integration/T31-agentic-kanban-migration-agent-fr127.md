---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T31 — Agentic kanban migration agent (FR-127 / F22)

**Task ID:** E06:S09:T31  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-11  
**Last updated:** 2026-06-11 (FR-079 attempt 06 intake)  
**Code:** E06S09T31

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md)  
**Upstream:** [FR-127](../../../fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · triage **F22**

---

## Input

- [FR-127](../../../fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- SBL attempt 06: `starborn_legacy/logs/ai-dev-kit/install/attempt-06/feedback-package/kanban-migration-experiment-report.md`
- Reference artifacts: `…/kboard-template-v3dot2.md`, `…/kboard-populated-example.md`

---

## Scope

Design and deliver an agentic kanban migration workflow replacing the `detect→analyze→migrate` tool pipeline for brownfield/domain adopters.

---

## Deliverable

1. Agent workflow spec (ingest → propose → review → execute → validate).
2. Deprecation plan for migration tool modes.
3. INSTALL / brownfield documentation update.

---

## Acceptance criteria

- [ ] **AC1:** Agent workflow documented with operator review gate.
- [ ] **AC2:** SBL-style corpus used as reference fixture or replay test.
- [ ] **AC3:** Migration tool pipeline modes deprecated or gated with clear INSTALL pointer.
- [x] **AC4:** SBL kboard template → packaged `KANBAN_BOARD_TEMPLATE.md` v2.2.0 via [UXR-028](../../../fr-br/UXR-028-kboard-v3dot2-packaged-template-alignment.md) / [E04:S19:T13](../../epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T13-kboard-v3dot2-packaged-template-uxr028.md). Populated example (R6) remains optional stretch on T13.
