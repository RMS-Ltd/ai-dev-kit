---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S04:T05 — Planning: Cultural formatting validation (IPW)

**Host Task:** [`T05-configure-locale-specific-formatting-dates-times-numbers-cur.md`](../kanban/epics/epic-21/story-04-cultural-adaptation/T05-configure-locale-specific-formatting-dates-times-numbers-cur.md) **(E21:S04:T05)**  
**Planning for:** [FR-006 Phase 2](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [E21:S04](../kanban/epics/epic-21/story-04-cultural-adaptation.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)  
**Status:** Complete — released `v0.21.4.5+1` (`RW E21:S04:T05 --art`)  
**Branch:** `dev`

**Scope:** Cultural validation layer only — smoke examples, matrix cross-check, tests. Infra SoT: **E21:S02:T05** (`locale_formatting.py`).

---

## 1. Requirements

| ID | Requirement |
| -- | ----------- |
| RF1 | Per-locale smoke output for date/time/number/currency × nine FR-006 locales |
| RF2 | Cross-reference T01 formatting matrix to S02 profiles |
| RF3 | Parametrized cultural smoke tests (`pytest -m fr006`) |
| RF4 | Structural assertions (not brittle golden strings) |
| RF5 | IPP ↔ task bidirectional links; RW Step 7 four-surface sync |

**Out of scope:** Re-implementing `locale_formatting.py`; portal Docusaurus; T06 E2E suite.

---

## 2. Specification

Bridge [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) formatting rows with [locale-formatting-conventions.md](../governance/standards/locale-formatting-conventions.md) §7 smoke table and `tests/fixtures/locale_formatting_smoke.yaml`.

---

## 3. Test design

| ID | Check |
| -- | ----- |
| C1 | Fixture file exists |
| C2 | Non-empty `format_*` per locale |
| C3 | Structural checks (`de` comma, `en-US` currency, `fr` year) |
| C4 | `ar` smoke runs |
| C5 | Policy §7 table present |
| C8 | T05 handoff links smoke section |

---

## 4. Implementation plan

1. **[MANDATORY]** `TODO → IN PROGRESS` on task doc  
2. Create IPP; narrow T05 scope to validation  
3. Add §7 smoke examples; formatting validation section  
4. Create fixture + `test_locale_cultural_formatting.py`  
5. Update ADR-024; story + kboard  
6. `RW E21:S04:T05 --art` @ `v0.21.4.5+1`  
7. **[MANDATORY]** Reconcile `COMPLETE` + forensic marker

---

## 5. Documentation deliverables

| Path | Action |
| ---- | ------ |
| `locale-formatting-conventions.md` | §7 smoke table |
| `locale-cultural-requirements.md` | Validation section |
| `ADR-024` | Integration row |
| T05 task doc | Scope + AC |

---

## 6. ADR necessity

**EXEMPT** — docs + tests only; implements existing ADR-024 + S02 policy.

---

## 7. Success criteria

- [x] Smoke examples × nine locales  
- [x] Matrix cross-check documented  
- [x] Tests green under `fr006`  
- [x] RW `v0.21.4.5+1` local-complete
