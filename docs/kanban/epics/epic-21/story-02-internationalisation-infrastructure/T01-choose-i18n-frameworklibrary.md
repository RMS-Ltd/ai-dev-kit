---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 2, Task 1: Choose i18n framework/library

**Task ID:** E21:S02:T01  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.2.1+1 — ADR-024 C1 hybrid released)  
**Version:** v0.21.2.1+1  
**Code:** E21S02T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S02:T01`

---

## Scope

Evaluate i18n framework/library options for ai-dev-kit Phase 2 (FR-006 international localisation). **Deliver decision artifacts only** — evaluation matrix, ADR-024, integration plan for S02:T02–T07. **No** `localisation_config.py` changes or new locale directories in this task.

**Selected strategy (ADR-024):** **C1 Hybrid extension** — retain manifest + whole-file markdown; add YAML key catalogs; Babel for formatting only (S02:T05).

---

## Input

- [FR-006 Phase 2](../../../fbu/FR-006-localization-language-selection-uk-us-english.md) translation infrastructure requirements
- Phase 1 incumbent: [`localisation_config.py`](../../../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py), kanban/workflow `locales/` trees
- [IPP-E21S02T01](../../../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [i18n-framework-evaluation-matrix](../../../../architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md)

---

## Deliverable

- **Selected framework:** C1 Hybrid (ADR-024)
- **Evaluation document:** [i18n-framework-evaluation-matrix.md](../../../../architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md)
- **Integration plan:** ADR-024 Consequences + [IPP §4.2](../../../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md#42-dependency-order-integration-handoffs)

---

## Acceptance Criteria

- [x] i18n framework selected — ✅ COMPLETE (v0.21.2.1+1)
- [x] Framework evaluation documented — ✅ COMPLETE (v0.21.2.1+1)
- [x] Integration plan created — ✅ COMPLETE (v0.21.2.1+1)

---

## Verification (V1–V8)

| ID | Check | Result |
| -- | ----- | ------ |
| V1 | Evaluation matrix covers C1–C4 with criteria | Pass (IPW) |
| V2 | ADR-024 Context/Decision/Consequences/S01 compat | Pass (IPW) |
| V3 | Integration handoffs S02:T02–T07 | Pass (IPW) |
| V4 | FR-006 Phase 2 traceability in matrix | Pass (IPW) |
| V5 | No breaking S01 API without migration note | Pass (IPW) |
| V6 | T01 ↔ IPP ↔ ADR bidirectional links | Pass |
| V7 | Story S02 T01 references decision | Pass |
| V8 | `test_i18n_framework_decision_artifacts.py` | Pass |

---

## Downstream handoff

| Task | Consumes T01 decision |
| ---- | --------------------- |
| **E21:S02:T02** | Locale directory layout + manifest v2 |
| **E21:S02:T03** | Locale detection precedence |
| **E21:S02:T04** | Language switching surfaces |
| **E21:S02:T05** | Babel formatting boundary |
| **E21:S02:T06** | Key catalogs + `resolve_locale_key()` |
| **E21:S02:T07** | Extended fallback chain |

---

## Kanban-init intake

**Released:** `v0.21.2.1+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Target functional release:** `v0.21.2.1+1` via `RW E21:S02:T01 --art`

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## References

- [IPP-E21S02T01](../../../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [i18n-framework-evaluation-matrix](../../../../architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md)
- [FR-006](../../../fbu/FR-006-localization-language-selection-uk-us-english.md)
- [story-02-internationalisation-infrastructure.md](../story-02-internationalisation-infrastructure.md)
- [localisation_config.py](../../../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`
