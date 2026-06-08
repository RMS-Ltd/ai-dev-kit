---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 4: Create UK/US English content variants (documentation, templates)

**Task ID:** E21:S01:T04  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.4+1 — RW E21:S01:T04 --art)
**Version:** v0.21.1.4+1
**Code:** E21S01T04

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T04`

---

## Scope

Phase 1 MVP locale corpus: `packages/frameworks/kanban/locales/` (manifest + 8 core template pairs for en-GB/en-US) and `packages/frameworks/workflow-mgt/locales/` (RW scaffold fragments). Canonical `templates/` unchanged as fallback. Wiring installers to manifest → **E21:S01:T06**; read API → **E21:S01:T05**.

---

## Input

- Existing US English content (canonical kanban templates)
- Language selection requirements ([FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) Phase 1)
- Planning: [IPP-E21S01T04](../../../../implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md)
- Upstream: T01–T03 (`ai-dev-kit-config.yaml` write path)

---

## Deliverable

- UK English variants of all documentation
- UK English variants of all templates
- Content structure: `locales/en-GB/` and `locales/en-US/`

---

## Acceptance Criteria

- [x] UK English variants created for Phase 1 seed set (8 kanban core templates) — ✅ COMPLETE (v0.21.1.4+1)
- [x] US English variants created for Phase 1 seed set (mirrored keys in manifest) — ✅ COMPLETE (v0.21.1.4+1)
- [x] Content organised in locale directories (`locales/en-GB/`, `locales/en-US/`) — ✅ COMPLETE (v0.21.1.4+1)
- [x] `locale-manifest.yaml` lists all seeded assets with stable keys — ✅ COMPLETE (v0.21.1.4+1)
- [x] RW scaffold fragments externalised under workflow-mgt/locales/ — ✅ COMPLETE (v0.21.1.4+1)
- [x] Canonical templates unchanged (compatibility fallback until T06) — ✅ COMPLETE (v0.21.1.4+1)
- [ ] Content generation uses selected variant — **deferred to E21:S01:T06**

**Key Differences (UK vs US English):**
- Spelling: colour/color, organise/organize, realise/realize, centre/center
- Terminology: programme/program, licence/license (noun), practise/practice (verb)
- Date format: DD/MM/YYYY vs MM/DD/YYYY (if applicable)

---

---

## Kanban-init intake

**Released:** `v0.21.1.4+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T04 --art --dpz
```

**Target version anchor:** `v0.21.1.4+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## References

- [IPP-E21S01T04 — UK/US content variants MVP](../../../../implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md)
- [kanban/locales/README.md](../../../../../packages/frameworks/kanban/locales/README.md)
- [workflow-mgt/locales/README.md](../../../../../packages/frameworks/workflow-mgt/locales/README.md)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-01-language-selection-at-setup.md`

