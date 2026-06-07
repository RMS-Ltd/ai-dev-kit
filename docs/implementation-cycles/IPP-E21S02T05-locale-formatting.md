---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S02:T05 — Planning: Date/time/number formatting per locale (IPW)

**Host Task:** [`T05-configure-datetimenumber-formatting-per-locale.md`](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T05-configure-datetimenumber-formatting-per-locale.md) **(E21:S02:T05)**  
**Planning for:** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) · [IPP-E21S02T04](IPP-E21S02T04-locale-switching.md)  
**Status:** In progress — target `v0.21.2.5+1` (`RW E21:S02:T05 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Wrappers around `babel.dates` / `babel.numbers` for date, time, datetime, decimal, and currency formatting | ADR-024 T05 |
| RF2 | Map FR-006 BCP 47 tags to Babel locale identifiers | locale-file-structure-conventions §2.2 |
| RF3 | Per-locale formatting configuration (default date/time styles, default currency) for all `FR006_SUPPORTED_LOCALES` | Task deliverable + FR-006 Phase 2 |
| RF4 | `format_for_project(project_root, …)` resolves locale via `resolve_language()` | ADR integration plan |
| RF5 | Documented stdlib fallback when Babel is not installed | ADR-024 §3 |
| RF6 | Re-export public API from `cli/localisation.py` | T03/T04 pattern |
| RF7 | Greenfield mirror sync | ADR-024 backward-compat |
| RF8 | IPP ↔ task doc wiring | IPW Phase 8 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Babel in dev-kit `install_requires` / `requirements.txt`; **not** in `INSTALLER_DEPENDENCIES` |
| RNF2 | `pytest -m fr006` green |
| RNF3 | Tests cover `en-GB`, `en-US`, `de`, `fr`, `zh-CN` |
| RNF4 | No migration of existing ISO-UTC timestamps in RW/journal scripts |

### 1.3 Out of scope

- `resolve_locale_key()` (T06), asset fallback chain (T07), CLI formatting subcommand, portal formatting, bulk `strftime` migration

---

## 2. Specification

**Canonical spec:** [locale-formatting-conventions.md](../governance/standards/locale-formatting-conventions.md)

### 2.1 Module

`packages/frameworks/workflow-mgt/scripts/locale_formatting.py` — optional Babel import; `LOCALE_FORMAT_PROFILES`; `format_*` and `format_for_project` APIs.

### 2.4 Status transition intent

- **Current:** `TODO` @ `v0.21.2.5+0`
- **→ IN PROGRESS:** §4 Step 1
- **→ COMPLETE:** AC + tests + `RW E21:S02:T05 --art` @ `v0.21.2.5+1`

### 2.5 ADR necessity

**Outcome:** EXEMPT — implements ADR-024 T05; UPDATE integration table row with policy link.

---

## 3. Test design

| ID | Covers | Module |
| -- | ------ | ------ |
| T1–T2 | RF2, RF3 | `to_babel_locale`, `get_locale_format_profile` |
| T3–T5 | RF1 | `format_date`, `format_number`, `format_currency` |
| T6 | RF4 | `format_for_project` |
| T7 | RF5 | Babel-absent fallback (mock) |
| T8 | RNF2 | `pytest -m fr006` |

**File:** `tests/test_locale_formatting.py`

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T05 `TODO → IN PROGRESS`; link IPP |
| 2 | Create `locale_formatting.py` |
| 3 | Add `Babel>=2.12` to `requirements.txt` + `setup.py` |
| 4 | Re-export in `cli/localisation.py`; greenfield mirror |
| 5 | Create `locale-formatting-conventions.md`; update ADR-024 + locales READMEs |
| 6 | Add `tests/test_locale_formatting.py`; run gates |
| 10 | `RW E21:S02:T05 --art` @ `v0.21.2.5+1` |
| **N** | T05 → COMPLETE + forensic marker |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `IPP-E21S02T05-locale-formatting.md` | CREATE |
| D2 | `locale-formatting-conventions.md` | CREATE |
| D3 | ADR-024 T05 row | UPDATE |
| D4 | `workflow-mgt/locales/README.md` (×2) | UPDATE |
| D5 | T05 task doc | UPDATE |

---

## 6. Housing

| Deliverable | Path |
| ----------- | ---- |
| IPP | `docs/implementation-cycles/IPP-E21S02T05-locale-formatting.md` |
| Policy | `docs/governance/standards/locale-formatting-conventions.md` |
| Code | `packages/frameworks/workflow-mgt/scripts/locale_formatting.py` |
| Tests | `tests/test_locale_formatting.py` |

---

## 7. Success criteria

- [ ] Date, time, and number formatting per locale (task AC)
- [ ] Tests across multiple locales (task AC)
- [ ] Stdlib fallback documented and tested
- [ ] `fr006` green
- [ ] RW `v0.21.2.5+1`

---

## References

- [locale-formatting-conventions.md](../governance/standards/locale-formatting-conventions.md)
- [locale-switching-conventions.md](../governance/standards/locale-switching-conventions.md)
- [locale-detection-conventions.md](../governance/standards/locale-detection-conventions.md)
- [IPP-E21S02T04](IPP-E21S02T04-locale-switching.md)
