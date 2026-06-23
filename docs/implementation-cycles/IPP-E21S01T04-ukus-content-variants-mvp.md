---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S01:T04 — Planning: UK/US content variants MVP (IPW)

**Host Task:** [`T04-create-ukus-english-content-variants-documentation-templates.md`](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T04-create-ukus-english-content-variants-documentation-templates.md) **(E21:S01:T04)**  
**Planning for:** [FR-006 Phase 1](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · IPP-T01/T02/T03  
**Status:** Complete — released `v0.21.1.4+1` (`RW E21:S01:T04 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## Scope decision (operator-confirmed)

**Phase 1 MVP:** locale tree + manifest + 8 kanban core templates + RW scaffold fragments. Wiring to installers → **T06**; read API → **T05**.

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement |
| -- | ----------- |
| RF1 | `packages/frameworks/kanban/locales/` with en-GB/en-US |
| RF2 | `locale-manifest.yaml` with stable keys |
| RF3 | 8 core template pairs variantized |
| RF4 | `workflow-mgt/locales/` scaffold fragments |
| RF5 | Canonical `templates/` unchanged (fallback) |
| RF6 | greenfield-install sync |

**Out of scope:** Installer load behaviour (T06), read resolver (T05), epic-NN template trees.

---

## 2. Specification

**ADR:** EXEMPT (FR-006 §Content Structure).

Manifest-driven corpus; default locale `en-GB`. UK/US differences in instructional prose markers.

---

## 3. Test design

| ID | Check |
| -- | ----- |
| T1 | Manifest keys in both locales |
| T2 | Referenced paths exist |
| T3 | en-GB FR contains colour/organise |
| T4 | en-US FR contains color/organize |
| T5 | Section heading parity en-GB/en-US |
| T6 | Workflow scaffolds both locales |
| T7 | Canonical FR_TEMPLATE unchanged |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T04 `TODO → IN PROGRESS` |
| 2 | Create locale trees + manifests |
| 3 | Seed 8 template pairs |
| 4 | Workflow scaffold fragments |
| 5 | README + setup-locale-index |
| 6 | `tests/test_locale_content_manifest.py` |
| 7 | `sync_greenfield_install.py` |
| 8 | `RW E21:S01:T04 --art` |
| **N** | T04 `COMPLETE` + forensic marker |

---

## 5. Documentation deliverables

| Path | Action |
| ---- | ------ |
| This IPP | CREATE |
| `kanban/locales/README.md` | CREATE |
| T04 task doc | UPDATE |

---

## 6. Documentation housing

All under `packages/frameworks/` (vendored) + `docs/implementation-cycles/`. Publication: PUBLISHED.

---

## 7. Success criteria

- [x] Locale corpus + manifest complete
- [x] Tests T1–T7
- [x] T05/T06 handoff in README
- [x] RW `v0.21.1.4+1`

---

## Handoffs

- **T05:** `read_localisation_config()`, `resolve_locale_asset()`
- **T06:** Wire RW/kanban generators
- **T07:** E2E tests

---

## References

- [kanban/locales/README.md](../../packages/frameworks/kanban/locales/README.md)
- [workflow-mgt/locales/README.md](../../packages/frameworks/workflow-mgt/locales/README.md)
