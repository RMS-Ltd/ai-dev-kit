---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:06:04Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 1, Task 5: Implement configuration persistence (`ai-dev-kit-config.yaml`)

**Task ID:** E21:S01:T05  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-07 (v0.21.1.5+1 — RW E21:S01:T05 --art)
**Version:** v0.21.1.5+1
**Code:** E21S01T05

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E21:S01:T05`

---

## Scope

**Read + resolve slice (T05):** Extend [`localisation_config.py`](../../../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py) with `read_localisation_config`, `resolve_language`, `load_locale_manifest`, and `resolve_locale_asset`. Config **write** shipped in T01–T03; locale corpus in T04. Installer consumption → **E21:S01:T06**.

---

## Input

- Language selection from setup processes (T01–T03 write path)
- Configuration file structure ([IPP-E21S01T01](../../../../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md))
- Locale manifests ([IPP-E21S01T04](../../../../implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md))
- Planning: [IPP-E21S01T05](../../../../implementation-cycles/IPP-E21S01T05-config-read-locale-resolution.md)

---

## Deliverable

- `ai-dev-kit-config.yaml` with language preference
- Configuration reading/writing utilities
- Default to UK English if not specified (en-GB primary; en-US supported)

---

## Acceptance Criteria

- [x] Configuration file structure defined — ✅ T01 (v0.21.1.1+2)
- [x] Language preference stored in config — ✅ T02/T03 (v0.21.1.2+1 / v0.21.1.3+1)
- [x] Read utilities: `read_localisation_config`, `resolve_language` — ✅ COMPLETE (v0.21.1.5+1)
- [x] Manifest utilities: `load_locale_manifest`, `resolve_locale_asset` — ✅ COMPLETE (v0.21.1.5+1)
- [x] Default to UK English if not specified (en-GB primary; en-US supported) — ✅ COMPLETE (v0.21.1.5+1)
- [ ] Installer wiring uses resolver — **deferred to E21:S01:T06**

**Configuration Structure:**
```yaml
localisation:
  language: "en-GB"  # or "en-US"
  variant: "UK"      # or "US"
```

---

---

## Kanban-init intake

**Released:** `v0.21.1.5+0` — RW -k --art --dpz (2026-06-07)

**Branch:** `epic/21-internationalisation-localisation`

**Trigger:**

```text
RW -k E21:S01:T05 --art --dpz
```

**Target version anchor:** `v0.21.1.5+0` (doc-init BUILD +0 per [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## References

- [IPP-E21S01T05 — Config read and locale resolution](../../../../implementation-cycles/IPP-E21S01T05-config-read-locale-resolution.md)
- [localisation_config.py](../../../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-21/story-01-language-selection-at-setup.md`

