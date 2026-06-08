---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S01:T06 — Planning: Content generation locale wiring (IPW)

**Host Task:** [`T06-update-content-generation-to-use-language-preference-rw-temp.md`](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T06-update-content-generation-to-use-language-preference-rw-temp.md) **(E21:S01:T06)**  
**Planning for:** [FR-006 Phase 1](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S01T05](IPP-E21S01T05-config-read-locale-resolution.md) · [IPP-E21S01T04](IPP-E21S01T04-ukus-content-variants-mvp.md)  
**Status:** Complete — released `v0.21.1.6+1` (`RW E21:S01:T06 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## Scope decision

**Wire consumption** of T05 read/resolve API at RW installer scaffolds and kanban intake template resolution. Board-install templates and E2E flows → **T07**.

---

## 1. Requirements (summary)

| ID | Requirement |
| -- | ----------- |
| RF1 | RW installer reads language via `resolve_language(project_root)` |
| RF2 | `render_changelog_stub` loads locale `changelog_stub` fragment |
| RF3 | Decline-help strings load locale fragments with placeholder substitution |
| RF4 | `resolve_kanban_intake_template` for 8 intake template keys |
| RF5 | Default en-GB when config missing |
| RF6 | Canonical `templates/` as `fallback_path` |

---

## 2. Specification

- `render_locale_text()` and `resolve_kanban_intake_template()` in [`localisation_config.py`](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- Wire [`install_release_workflow.py`](../../packages/frameworks/workflow-mgt/scripts/install_release_workflow.py) scaffold functions
- Intake guide + skill note for locale-resolved template paths

**ADR:** EXEMPT.

---

## 3. Test design

| ID | Check |
| -- | ----- |
| T1 | `render_locale_text` placeholder substitution |
| T2–T4 | Changelog stub en-GB / en-US / default |
| T5–T6 | Decline-help locale prose + placeholders |
| T7–T8 | Kanban intake template resolve + canonical fallback |
| T9 | `ensure_main_changelog_scaffold` integration |
| T10 | T05 regression green |

File: [`tests/test_content_generation_locale_wiring.py`](../../tests/test_content_generation_locale_wiring.py)

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T06 `IN PROGRESS` |
| 2 | IPP + task doc link (this file) |
| 3 | `render_locale_text` + `resolve_kanban_intake_template` |
| 4 | Re-export `cli/localisation.py` |
| 5 | Wire `install_release_workflow.py` + greenfield-install mirror |
| 6 | Locale READMEs + intake guide + skill |
| 7 | Tests T1–T10 |
| 8 | `RW E21:S01:T06 --art` → `v0.21.1.6+1` |
| **N** | T06 `COMPLETE` |

---

## 5–7. Deliverables / success / T07 handoff

- RW scaffolds and decline messages vary by configured language
- Kanban intake templates resolvable programmatically
- T07: full installer E2E + intake agent path + FR-006 Phase 1 story AC closure

---

## References

- [localisation_config.py](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- [workflow-mgt/locales/manifest.yaml](../../packages/frameworks/workflow-mgt/locales/manifest.yaml)
- [kanban/locales/manifest.yaml](../../packages/frameworks/kanban/locales/manifest.yaml)
