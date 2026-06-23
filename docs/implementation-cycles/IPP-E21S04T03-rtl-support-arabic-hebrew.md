---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S04:T03 — Planning: RTL support (Arabic/Hebrew) (IPW)

**Host Task:** [`T03-implement-rtl-support-right-to-left-for-arabichebrew.md`](../kanban/epics/epic-21/story-04-cultural-adaptation/T03-implement-rtl-support-right-to-left-for-arabichebrew.md) **(E21:S04:T03)**  
**Planning for:** [FR-006 Phase 2](../kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [E21:S04](../kanban/epics/epic-21/story-04-cultural-adaptation.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) · [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md)  
**Status:** Complete — released `v0.21.4.3+1` (`RW E21:S04:T03 --art`)  
**Branch:** `dev`

**Scope:** Framework runtime + CLI/installer RTL conventions only. Portal Docusaurus RTL deferred (ADR-024). Hebrew (`he`) API extension only — no `locales/he/` scaffold.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Canonical RTL locale registry including `ar` and extension `he` | T01 Arabic row; task scope |
| RF2 | Public API: `is_rtl_locale(tag)` and `text_direction_for_locale(tag)` → `"ltr"` \| `"rtl"` | T01 P0; ADR-024 C1 |
| RF3 | APIs integrate with `parse_locale_tag` without breaking Phase 1 adopters | ADR-024 backward-compat |
| RF4 | CLI/installer avoid hard-coded LTR layout for status prefixes and numbered choices when locale is RTL | T01 P0; locale-cultural-requirements |
| RF5 | RTL conventions documented for contributors and downstream tasks (T04, T06, S07) | Task AC; T01 § guideline item 5 |
| RF6 | Structural + behavioral pytest; `pytest -m fr006` regression green | Epic 21 pattern |
| RF7 | Bidirectional IPP ↔ task doc wiring | IPW Phase 8 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Stdlib-only in core resolver | ADR-024 |
| RNF2 | Deterministic pure functions | S02 precedent |
| RNF3 | `greenfield-install/` mirror when `packages/frameworks/**` changes | FR-110 |
| RNF4 | Release via `RW E21:S04:T03 --art` | Epic branch |
| RNF5 | Maintainer governance — not adopter-public Docusaurus | FR-114 |

### 1.3 Invariants and boundaries

- **Invariants:** `resolve_locale_key` / fallback chain unchanged; `RTL_LOCALES` code registry is SoT over manifest metadata.
- **In scope:** RTL APIs, CLI formatting helpers, installer audit (3 call sites), governance standard, tests, ADR-024 update.
- **Out of scope:** Portal RTL, S07 Arabic linguistic delivery, T04 content, T05 digits, T06 E2E suite, `he` locale trees.

---

## 2. Specification

### 2.1 Goal

Enable framework runtime and CLI surfaces to detect RTL locales and apply direction-aware layout conventions so Arabic (`ar`) scaffold content and future S07 linguistic delivery render without LTR-only assumptions; `he` is pre-registered for the same machinery when a locale tree is added later.

### 2.2 Specification mapping from ascertained requirements

Implements FR-006 Phase 2 cultural adaptation P0 from [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) (mirror RTL layout shell). Canonical API spec: [locale-rtl-conventions.md](../governance/standards/locale-rtl-conventions.md).

### 2.3 Constraints

- Terminal RTL: best-effort; full layout QA in T06.
- Do not edit Arabic YAML for linguistic quality (S07).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (§4 Step 1).
- **Transition trigger to COMPLETE:** All AC satisfied; tests green; `RW E21:S04:T03 --art`.
- **Atomic propagation requirement:** Task doc + `kboard.md` in same change set as RW Step 7.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Metadata-only vs CLI helpers vs portal — user chose framework-only |
| T2 | Reversibility | N | Additive APIs |
| T3 | Blast radius | Y | Framework package + installer + adopters |
| T4 | Precedent | Y | Future portal/CSS will cite RTL registry |
| T5 | Constraint trade-off | N | — |
| T6 | Governance contract | N | — |
| T7 | Supersedes | N | Extends ADR-024 |

**Outcome:** `REQUIRED` → **UPDATE** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) (E21:S04:T03 row).

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1–E5 | — | — | Not applicable (REQUIRED) |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | `is_rtl_locale` | `ar`, `he`, `ar-SA` → True; `en-GB`, `es`, `None` → False |
| T2 | `text_direction_for_locale` | mirrors T1; default `ltr` |
| T3 | CLI helpers | RTL produces documented prefix/choice formatting |
| T4 | Regression | `pytest -m fr006` green |
| T5 | Doc contract | `locale-rtl-conventions.md` exists; links T03; lists `ar`/`he`; cites ADR-024 |
| T6 | Manifest | `locale_metadata.ar.text_direction == rtl` in both package manifests |

**Modules:** `tests/test_locale_rtl_support.py`, `tests/test_locale_rtl_conventions.py`  
**Marker:** `pytest.mark.fr006`

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] `TODO → IN PROGRESS`** on T03 task doc | Task doc |
| 2 | Failing tests T1–T6 (Red) | test modules |
| 3 | `RTL_LOCALES`, `is_rtl_locale`, `text_direction_for_locale`, formatting helpers in `localisation_config.py` | Green T1–T3 |
| 4 | `_print_msg` + 3 installer status call sites; `prompt_language_choice` uses `format_numbered_choice` | Installer RTL |
| 5 | Export via `cli/localisation.py` | CLI parity |
| 6 | `locale_metadata` in kanban + workflow-mgt manifests | T6 |
| 7 | Create `locale-rtl-conventions.md` | RF5 |
| 8 | UPDATE ADR-024 + cross-links | Doc consistency |
| 9 | `python scripts/sync_greenfield_install.py` | Greenfield |
| 10 | `pytest` RTL + `fr006` | Green |
| 11 | `RW E21:S04:T03 --art` | `v0.21.4.3+1` |
| **N** | **[MANDATORY] Status reconciliation** to `COMPLETE` + forensic marker if AC met | Task + story + kboard |

**RW verification / FBU wave rule (BR-097):** Prescribe **`RW E21:S04:T03 --art`** only.

### 4.1 Files to create or modify

See Phase 5 deliverables table.

### 4.2 Dependency order

Tests (Red) → APIs → installer → docs → greenfield → tests (Green) → RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md` | E21:S04:T03 RTL row | Step 8 |
| D-U2 | `docs/governance/standards/locale-file-structure-conventions.md` | `locale_metadata` | Step 8 |
| D-U3 | `docs/governance/standards/translation-workflow-and-review.md` | Fix RTL owner → T03 | Step 8 |
| D-U4 | `docs/governance/standards/locale-cultural-requirements.md` | T03 implementation link | Step 8 |
| D-U5 | T03 task doc + story + kboard | Status, IPP links | Steps 1, N |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md` | This plan | IPW |
| D-C2 | `docs/governance/standards/locale-rtl-conventions.md` | RTL API + checklist | RF5 |
| D-C3 | `tests/test_locale_rtl_support.py` | Behavioral tests | T1–T3 |
| D-C4 | `tests/test_locale_rtl_conventions.py` | Doc contract | T5 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Contributor polished RTL guide | Deferred to **E21:S04:T07** |
| `contributing-translations.md` | NONE — T07 |
| Portal / `docs/guides/**` | NONE — ADR-024 deferred |
| `locales/he/` scaffold | NONE — API extension only |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md` | NOT_APPLICABLE | evergreen | T03 Input, References |
| D-C2 | `docs/governance/standards/locale-rtl-conventions.md` | NOT_APPLICABLE (FR-114) | evergreen | T03, cultural-requirements handoffs |
| D-U1 | `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md` | NOT_APPLICABLE | evergreen | locale-rtl-conventions |

**Greenfield:** `python scripts/sync_greenfield_install.py --check` after framework edits.  
**Portal:** N/A.

---

## 7. Success / verification criteria

- [ ] `is_rtl_locale` / `text_direction_for_locale` implemented and tested
- [ ] Installer direction-aware status printing at audited call sites
- [ ] `locale-rtl-conventions.md` + ADR-024 update
- [ ] `pytest tests/test_locale_rtl_support.py tests/test_locale_rtl_conventions.py -q` green
- [ ] `pytest -m fr006 -q` green
- [ ] `python scripts/sync_greenfield_install.py --check` green
- [ ] Bidirectional task doc ↔ IPP links
- [ ] Release: `RW E21:S04:T03 --art`
- [ ] **Portal:** N/A
- [ ] **Greenfield:** mirror committed

---

## References

- [T03 task doc](../kanban/epics/epic-21/story-04-cultural-adaptation/T03-implement-rtl-support-right-to-left-for-arabichebrew.md)
- [IPP-E21S04T01](IPP-E21S04T01-research-cultural-requirements-target-locales.md)
- [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [localisation_config.py](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
