---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S05:T02 — Planning: French (fr) translation files (FR-006)

**Host Task:** [`T02-french-fr-translation-files.md`](../kanban/epics/epic-21/story-05-european-languages-localization/T02-french-fr-translation-files.md) **(E21:S05:T02)**  
**Planning for:** [FR-006 Phase 3+](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [E21:S05](../kanban/epics/epic-21/story-05-european-languages-localization.md)  
**Status:** Complete — shipped @ v0.21.5.2+1

> **IPW:** Consolidated IPP per FR-042 / FR-094. Scaffold trees from E21:S03:T02. Cultural guidance: [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) § French (fr). Precedent: [IPP-E21S05T01](IPP-E21S05T01-spanish-es-translation-files.md).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Linguistically translate **`fr`** runtime keys under both framework locale roots | Task deliverable |
| RF2 | Translate P0/P1 before P2/P3 | Rollout matrix |
| RF3 | Translate P2 whole-file assets (kanban templates, setup index; workflow scaffolds) | Task AC |
| RF4 | Translate **`errors.*`** keys in both packages | Installer/CLI UX |
| RF5 | Preserve key parity, placeholders, `_meta.domain` | locale-key-conventions |
| RF6 | Run completeness report; update registry `linguistic_status` for `fr` | E21:S03:T06 |
| RF7 | Document review outcome (maintainer + native/pro gap) | translation-workflow-and-review |
| RF8 | Bidirectional IPP ↔ task wiring | FR-042 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Fallback chain unchanged (`fr` → default → en-GB → en-US) |
| RNF2 | `validate_locale_translations.py --strict --locale fr` green |
| RNF3 | Greenfield sync for `packages/frameworks/**/locales/fr/**` |
| RNF4 | **Vouvoiement** in installer; epicene phrasing for inclusivity; **Kanban** loanword |
| RNF5 | **`RW E21:S05:T02 --art`** (kanban-init @ v0.21.5.2+0) |

### 1.3 Out of scope

Root `README.md`, Docusaurus portal, RTL, other European locales, multi-language picker redesign.

---

## 2. Specification

Replace en-GB interim copy in `locales/fr/**` with French prose for P0–P2 minimum (same bar as Spanish T01).

**ADR:** `ALREADY_COVERED` — ADR-024. No new ADR.

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| T1 | `validate_locale_translations.py --package all --locale fr --strict` | RNF2 |
| T2 | Key parity with en-GB | RF5 |
| T3 | `report_locale_completeness.py --locale fr` linguistic progress | RF6 |
| T4 | P0/P1 samples ≠ en-GB; French markers in cli/installer | RF2 |
| T5 | Placeholders preserved | RF5 |
| T6 | `pytest -m fr006` fallback tests | RNF1 |
| T7 | Registry `fr.linguistic_status` updated | RF6 |
| T8 | `sync_greenfield_install.py --check` | RNF3 |

**Module:** `tests/test_french_locale_e21s05t02.py`

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **[MANDATORY] Transition E21:S05:T02 TODO → IN PROGRESS** |
| 2–6 | Translate workflow-mgt + kanban P0/P1 keys, P2 whole files, P3 installer remainder |
| 7 | Validators + registry |
| 8 | Pytest module |
| 9 | Greenfield sync |
| 10 | Review notes in task doc |
| 11 | **`RW E21:S05:T02 --art`** |
| **N** | **[MANDATORY] Reconcile status to COMPLETE** |

---

## 5–7. Documentation / housing / success criteria

Same surfaces as [IPP-E21S05T01](IPP-E21S05T01-spanish-es-translation-files.md) §5–7 with `es` → `fr`.

---

## References

- [FR-006](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [T02 task doc](../kanban/epics/epic-21/story-05-european-languages-localization/T02-french-fr-translation-files.md)
- [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) § French (fr)
- [IPP-E21S05T01](IPP-E21S05T01-spanish-es-translation-files.md)
