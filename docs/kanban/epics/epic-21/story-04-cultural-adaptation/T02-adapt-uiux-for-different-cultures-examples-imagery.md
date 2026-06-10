---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# SUPERSEDED — E21:S04:T02

# Epic 21, Story 4, Task 2: Adapt UI/UX for different cultures (examples, imagery)

**Task ID:** E21:S04:T02  
**Status:** COMPLETE (superseded — merged into E21:S04:T04)  
**Priority:** MEDIUM  
**Last updated:** 2026-06-10 (scope merged into E21:S04:T04 @ **v0.21.4.2+1**)  
**Version:** v0.21.4.2+1  
**Code:** E21S04T02

SUPERSEDED (v0.21.4.2+1)

**Superseded by:** [E21:S04:T04](T04-adapt-content-and-examples-for-cultural-context.md)  
**Planning:** [IPP-E21S04T02-supersede-merge-into-t04.md](../../../../implementation-cycles/IPP-E21S04T02-supersede-merge-into-t04.md)  
**Upstream research:** [T01](T01-research-cultural-requirements-for-target-locales.md) · [locale-cultural-requirements.md](../../../../governance/standards/locale-cultural-requirements.md)

---

## Supersede rationale

ai-dev-kit has no separate graphical UI layer for cultural adaptation. Presentation concerns (installer/CLI strings, locale YAML emoji, kanban state icons) are **content** adaptations, not a distinct UI/UX delivery surface. Scope from [T01 cultural matrix](../../../../governance/standards/locale-cultural-requirements.md) formerly assigned to T02 (imagery policy, string-length guidance, directional-icon audit checklist) is absorbed by **E21:S04:T04**. RTL layout **implementation** remains **E21:S04:T03**.

Do not file new work here. Use T04 for merged cultural content work; T03 for RTL implementation.

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S04:T02`

---

## Scope (historical)

Adapt UI/UX examples and imagery for different cultures.

---

## Input

- Cultural requirements research ([T01](T01-research-cultural-requirements-for-target-locales.md))
- UI/UX content

---

## Deliverable (historical — not executed)

- Culturally adapted UI/UX
- Adapted examples and imagery
- Cultural adaptations documented

**Merged into T04:** imagery/iconography policy, installer string-length guidance (`de`/`fr`/`ja`), directional-icon audit checklist.

---

## Acceptance Criteria (cancelled — merged into T04)

- [x] ~~UI/UX adapted for different cultures~~ — scope consolidated; no standalone surface
- [x] ~~Examples culturally appropriate~~ — owned by T04
- [x] ~~Imagery culturally appropriate~~ — owned by T04 (policy); RTL mirroring impl → T03
- [x] ~~Cultural adaptations tested~~ — owned by T06

---

## Kanban-init intake

**Released:** `v0.21.4.2+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S04:T02 --art --dpz
```

**Target version anchor:** `v0.21.4.2+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` — superseded; scope merged into T04 @ `v0.21.4.2+1`

✅ COMPLETE (v0.21.4.2+1) — SUPERSEDED; canonical work continues in E21:S04:T04

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md`

**Supersede release:** `v0.21.4.2+1` — `RW E21:S04:T02 --art` on `dev` (2026-06-09).
