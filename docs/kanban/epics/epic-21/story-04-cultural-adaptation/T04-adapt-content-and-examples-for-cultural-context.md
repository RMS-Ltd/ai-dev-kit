---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 4, Task 4: Adapt content and examples for cultural context

**Task ID:** E21:S04:T04  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-10 (RW **v0.21.4.4+1** — cultural content adaptation)  
**Version:** v0.21.4.4+1

✅ COMPLETE (v0.21.4.4+1)
**Code:** E21S04T04

**Planning:** [IPP-E21S04T04-cultural-content-adaptation.md](../../../../implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md) · [IPP-E21S04T02-supersede-merge-into-t04.md](../../../../implementation-cycles/IPP-E21S04T02-supersede-merge-into-t04.md) (T02 scope merge)  
**Supersedes scope from:** [E21:S04:T02](T02-adapt-uiux-for-different-cultures-examples-imagery.md) (SUPERSEDED)

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S04:T04`

---

## Scope

Adapt content and examples for cultural context across FR-006 target locales.

**Absorbed from superseded E21:S04:T02 (docs-only merge @ v0.21.4.2+1):**

- Imagery and iconography policy for CLI/installer locale keys (documented constraints; not per-locale emoji rewrites in this planning wave)
- String-length / layout expansion guidance for `de`, `fr`, `ja` installer strings (translator-facing notes)
- Directional-icon audit checklist (mirroring **implementation** remains E21:S04:T03)

**Out of scope:** RTL layout shell implementation (T03), `locale_formatting.py` (T05), E2E cultural tests (T06), contributor polish guide (T07), Docusaurus portal UI (E21:S08:T04), installer terminal-width runtime code.

---

## Input

- [Cultural requirements research](T01-research-cultural-requirements-for-target-locales.md) · [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md)
- [IPP-E21S04T04-cultural-content-adaptation.md](../../../../implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md)
- [locale-cultural-content-policy.md](../../../../governance/standards/locale-cultural-content-policy.md)
- [locale-loanword-glossary.md](../../../../governance/standards/locale-loanword-glossary.md)
- [locale-directional-icon-audit.md](../../../../governance/standards/locale-directional-icon-audit.md)
- [Superseded T02](T02-adapt-uiux-for-different-cultures-examples-imagery.md) — merged scope reference
- Framework content (locale YAML, templates, installer strings)

---

## Deliverable

- Culturally adapted content and documented presentation policy
- Culturally appropriate examples and neutral metaphors
- Imagery/iconography policy and directional-icon audit checklist (from T02 merge)
- String-length guidance for long-locale installer copy (`de`, `fr`, `ja`)
- Glossary table for loanwords per locale
- `pt-BR` / `pt-PT` scaffold variant resolution (generic `pt` retired)
- Content adaptations documented

---

## Acceptance Criteria

- [x] Content adapted for cultural context
- [x] Examples culturally appropriate (neutral RW/git/kanban metaphors)
- [x] Imagery/iconography policy documented for CLI/installer locale keys
- [x] String-length expansion guidance documented for `de`, `fr`, `ja`
- [x] Directional-icon audit checklist completed (RTL mirroring impl verified under T03)
- [x] Glossary table for loanwords per locale
- [x] `pt` variant resolved before S05 translation ship (`pt-BR` + `pt-PT`)
- [x] Cultural sensitivity ensured
- [x] Content adaptations tested (structural; E2E handoff to T06)

---

---

## Kanban-init intake

**Released:** `v0.21.4.4+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S04:T04 --art --dpz
```

**Target version anchor:** `v0.21.4.4+0` (doc-init BUILD +0 per [BR-067](../../../fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## References

- [IPP-E21S04T04-cultural-content-adaptation.md](../../../../implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md)
- [locale-cultural-content-policy.md](../../../../governance/standards/locale-cultural-content-policy.md)
- [locale-loanword-glossary.md](../../../../governance/standards/locale-loanword-glossary.md)
- [locale-directional-icon-audit.md](../../../../governance/standards/locale-directional-icon-audit.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md`

**Scope merge:** E21:S04:T02 superseded @ `v0.21.4.2+1`; imagery/layout/icon audit checklist absorbed here per [IPP-E21S04T02](../../../../implementation-cycles/IPP-E21S04T02-supersede-merge-into-t04.md).
