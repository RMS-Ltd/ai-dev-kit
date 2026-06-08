---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S01:T05 — Planning: Config read and locale resolution (IPW)

**Host Task:** [`T05-implement-configuration-persistence-ai-dev-kit-configyaml.md`](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T05-implement-configuration-persistence-ai-dev-kit-configyaml.md) **(E21:S01:T05)**  
**Planning for:** [FR-006 Phase 1](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S01T04](IPP-E21S01T04-ukus-content-variants-mvp.md)  
**Status:** Complete — released `v0.21.1.5+1` (`RW E21:S01:T05 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## Scope decision

**Read + resolve only.** Write path shipped T01–T03; locale corpus T04. T05 adds `read_localisation_config`, `resolve_language`, `load_locale_manifest`, `resolve_locale_asset`, and framework root helpers. Installer wiring → **T06**.

---

## 1. Requirements (summary)

| ID | Requirement |
| -- | ----------- |
| RF1 | `read_localisation_config(project_root)` |
| RF2 | Default en-GB when config missing/invalid |
| RF3 | `load_locale_manifest(manifest_path)` |
| RF4 | `resolve_locale_asset(...)` with language fallback chain |
| RF5 | Optional `fallback_path` to canonical templates |
| RF6 | `kanban_locales_root()` / `workflow_locales_root()` |

---

## 2. Specification

API in [`localisation_config.py`](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py). **ADR:** EXEMPT.

---

## 3. Test design

| ID | Check |
| -- | ----- |
| T1–T3 | Read + default + invalid language |
| T4 | Manifest load |
| T5–T8 | Asset resolution kanban + workflow |
| T7 | Canonical fallback |
| T9 | Framework root discovery |
| T10 | Write-path regression |

File: [`tests/test_localisation_config_read_resolve.py`](../../tests/test_localisation_config_read_resolve.py)

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T05 `IN PROGRESS` |
| 2 | Extend `localisation_config.py` |
| 3 | Re-export `cli/localisation.py` |
| 4 | Tests T1–T10 |
| 5 | Locale README update |
| 6 | `RW E21:S01:T05 --art` → `v0.21.1.5+1` |
| **N** | T05 `COMPLETE` |

---

## 5–7. Deliverables / success

- IPP (this file), T05 task doc, kanban locales README
- T06 handoff: import resolver in `install_release_workflow.py`

---

## References

- [localisation_config.py](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- [kanban/locales/manifest.yaml](../../packages/frameworks/kanban/locales/manifest.yaml)
