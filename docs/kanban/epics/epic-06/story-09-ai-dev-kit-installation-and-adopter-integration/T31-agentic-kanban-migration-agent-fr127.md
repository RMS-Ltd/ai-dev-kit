---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T31 — Agentic kanban migration agent (FR-127 / F22)

**Task ID:** E06:S09:T31  
**Status:** ✅ COMPLETE (v0.6.9.31+1)  
**Priority:** HIGH  
**Created:** 2026-06-11  
**Last updated:** 2026-06-12 (RW E06:S09:T31 — KMA delivery)  
**Code:** E06S09T31

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md)  
**Upstream:** [FR-127](../../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · triage **F22**

---

## Input

- [FR-127](../../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- **[IPP-E06S09T31](../../../../implementation-cycles/IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md)** — consolidated implementation plan (IPW 2026-06-12)
- SBL attempt 06: `adk-install-into-sbl/attempt-06/feedback-package/kanban-migration-experiment-report.md`
- Reference artifacts: `…/kboard-template-v3dot2.md`, `…/kboard-populated-example.md`

## References

- [IPP-E06S09T31](../../../../implementation-cycles/IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md) — spec, tests, implementation plan (§1–§7)
- [FR-127](../../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) — parent program (attempt 06 evidence)
- [FR-081](../../../fbu/FR-081-brownfield-modular-adopter-integration.md) · [ADR-003](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [adk-install-into-sbl/attempt-06/README.md](../../../../../../adk-install-into-sbl/attempt-06/README.md)

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

- [x] **AC1:** Agent workflow documented with operator review gate (`kanban-migration-agent-execution.md`, `kma.md`).
- [x] **AC2:** SBL-style corpus — `tests/fixtures/sbl-legacy-kanban-minimal/` + replay tests.
- [x] **AC3:** Migration modes gated; deprecation guide + INSTALL KMA section.
- [x] **AC4:** SBL kboard template → packaged `KANBAN_BOARD_TEMPLATE.md` v2.2.0 via [UXR-028](../../../fbu/UXR-028-kboard-v3dot2-packaged-template-alignment.md) / [E04:S19:T13](../../epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T13-kboard-v3dot2-packaged-template-uxr028.md). Populated example (R6) remains optional stretch on T13.
