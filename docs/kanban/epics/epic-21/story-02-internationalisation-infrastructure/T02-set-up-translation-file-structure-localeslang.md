---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 2, Task 2: Set up translation file structure (`locales/{lang}/`)

**Task ID:** E21:S02:T02  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.2.2+1 — manifest v2 + keys scaffold released)  
**Version:** v0.21.2.2+1  
**Code:** E21S02T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S02:T02`

---

## Scope

Evolve package locale trees to **manifest v2** per [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md): add `keys/` catalogs under **en-GB** and **en-US** in kanban and workflow-mgt; register FR-006 locale codes in `supported_locales` (metadata only until S03+). Document naming conventions. **No** `resolve_locale_key()` in this task (T06).

---

## Input

- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) T02 handoff
- [IPP-E21S02T02](../../../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md)
- [locale-file-structure-conventions.md](../../../../governance/standards/locale-file-structure-conventions.md)
- Phase 1 manifests: [`kanban/locales/manifest.yaml`](../../../../../packages/frameworks/kanban/locales/manifest.yaml), [`workflow-mgt/locales/manifest.yaml`](../../../../../packages/frameworks/workflow-mgt/locales/manifest.yaml)

---

## Deliverable

- Manifest v2 in both packages (`version: 2`, `supported_locales`, `keys` category)
- `en-GB`/`en-US` `keys/cli.yaml` and `keys/errors.yaml` seeds
- [locale-file-structure-conventions.md](../../../../governance/standards/locale-file-structure-conventions.md)

---

## Acceptance Criteria

- [x] Translation file structure created — ✅ COMPLETE (v0.21.2.2+1)
- [x] Directory structure organised — ✅ COMPLETE (v0.21.2.2+1)
- [x] Naming conventions documented — ✅ COMPLETE (v0.21.2.2+1)

---

## Verification (V1–V10)

| ID | Check | Result |
| -- | ----- | ------ |
| V1 | Manifest v2 + `supported_locales` | Pass (IPW) |
| V2 | Key files exist both packages | Pass (IPW) |
| V3 | Manifest keys paths resolve | Pass (IPW) |
| V4 | Phase 1 paths unchanged | Pass (IPW) |
| V5 | `pytest -m fr006` | Pass |
| V6 | Key schema validation | Pass |
| V7 | Greenfield sync `--check` | Pass |
| V8 | Conventions doc | Pass |
| V9 | T02 ↔ IPP links | Pass |
| V10 | Story S02 row | Pass |

---

## Downstream handoff

| Task | Consumes T02 |
| ---- | ------------- |
| **E21:S02:T03** | `supported_locales` registry |
| **E21:S02:T06** | `keys` category + key file schema |
| **E21:S02:T07** | Locale list for fallback chain |
| **E21:S03+** | Convention for adding `{lang}/` trees |

---

## Kanban-init intake

**Released:** `v0.21.2.2+0` — RW -k --art --dpz (2026-06-07)

**Target functional release:** `v0.21.2.2+1` via `RW E21:S02:T02 --art`

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## References

- [IPP-E21S02T02](../../../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [locale-file-structure-conventions.md](../../../../governance/standards/locale-file-structure-conventions.md)
- [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [story-02-internationalisation-infrastructure.md](../story-02-internationalisation-infrastructure.md)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`
