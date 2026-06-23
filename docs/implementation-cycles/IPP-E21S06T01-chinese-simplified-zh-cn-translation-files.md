---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T08:15:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S06:T01 — Planning: Chinese Simplified (zh-CN) translation files (FR-006)

**Host Task:** [`T01-chinese-simplified-zh-cn-translation-files.md`](../kanban/epics/epic-21/story-06-cjk-languages-localization/T01-chinese-simplified-zh-cn-translation-files.md) **(E21:S06:T01)**  
**Planning for:** [FR-006 Phase 3+](../kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [E21:S06](../kanban/epics/epic-21/story-06-cjk-languages-localization.md)  
**Status:** Active — implementation authorized

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094. Scaffold trees from [E21:S03:T02](IPP-E21S03T02-create-translation-files-major-languages.md). Cultural guidance: [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) § Chinese Simplified (zh-CN). **Glossary:** 工作流 (workflow), 看板 (Kanban brand).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Linguistically translate **`zh-CN`** runtime keys under both framework locale roots | Task; [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md) |
| RF2 | Translate **P0** (`cli.prompt.*`, `cli.status.*`) and **P1** (`installer.*`, `errors.*`) before lower tiers | Rollout matrix |
| RF3 | Translate **P2 whole-file** assets: kanban `templates/*`, `docs/setup-locale-index.md`; workflow-mgt `scaffolds/*` | Task AC |
| RF4 | Preserve key parity, placeholders, `_meta` blocks | [locale-key-conventions.md](../governance/standards/locale-key-conventions.md) |
| RF5 | Run **`report_locale_completeness.py`**; update registry `linguistic_status` for `zh-CN` | E21:S03:T06 |
| RF6 | Document review outcome (maintainer + **professional zh-CN** gap notes) | Cultural matrix |
| RF7 | Bidirectional IPP ↔ task wiring | FR-042 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Fallback chain unchanged: `zh-CN` → `default_locale` → `en-GB` → `en-US` | E21:S02:T07 |
| RNF2 | `validate_locale_translations.py --strict --locale zh-CN` green | S03:T04 |
| RNF3 | Greenfield sync per P-GREENFIELD-SYNC | FR-110 |
| RNF4 | Simplified Chinese only; concise imperative CLI; stable glossary documented | Cultural matrix § zh-CN |
| RNF5 | Post-ship: **`RW E21:S06:T01 --art`** only (BUILD +1 after kanban-init `+0`) | BR-097 |
| RNF6 | `--art` on `dev` acceptable (same as es delivery) | Project practice |

### 1.3 Invariants and boundaries

- **In scope:** 17 files under `packages/frameworks/*/locales/zh-CN/**`; registry; pytest; greenfield mirror.
- **Out of scope:** `zh-TW`, `ja`; root `README.md`; portal; RTL/fonts; multi-locale picker redesign.

---

## 2. Specification

### 2.1 Goal

Replace en-GB interim copy in `zh-CN` with Simplified Chinese prose — first CJK locale under FR-006 Phase 3+.

### 2.2 Asset inventory

Same 17-file layout as [IPP-E21S05T01](IPP-E21S05T01-spanish-es-translation-files.md) (workflow-mgt keys/cli, errors, installer, scaffolds; kanban keys, templates, setup index).

### 2.3 Constraints

- Professional zh-CN review **required** for P0/P1 per cultural matrix; changelog uses "Attempted translation" until confirmed.
- Preserve emoji prefixes and technical tokens (`RW`, `pip install`, file paths).

### 2.4 Status transition intent

- **Current:** TODO @ v0.21.6.1+0
- **IN PROGRESS:** IPP Step 1 / IDW start
- **COMPLETE:** ACs evidenced + `RW E21:S06:T01 --art` @ v0.21.6.1+1

### 2.5 ADR necessity decision

**Outcome:** `ALREADY_COVERED` — [ADR-024 i18n framework strategy](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md).

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| T1 | `validate_locale_translations.py --package all --locale zh-CN --strict` | RNF2 |
| T2 | Key parity with en-GB | RF4 |
| T3 | P0 `cli.prompt.language_choice` contains CJK, ≠ en-GB | RF2 |
| T4 | Installer wizard sample in Simplified Chinese | RF2 |
| T5 | Completeness report + registry | RF5 |
| T6 | `pytest -m fr006`; interim-copy tests exclude `zh-CN` | RNF1 |
| T7 | `sync_greenfield_install.py --check` | RNF3 |

**Module:** `tests/test_zh_cn_locale_e21s06t01.py`

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **[MANDATORY] Transition E21:S06:T01 `TODO → IN PROGRESS`** |
| 2–6 | Translate all zh-CN locale assets P0–P3 |
| 7 | Validators + registry |
| 8 | Pytest + interim-copy test updates |
| 9 | Greenfield sync |
| 10 | Review notes in task doc |
| 11 | **`RW E21:S06:T01 --art`** |
| **N** | **[MANDATORY] Reconcile → COMPLETE** |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | This IPP | CREATE |
| D-C2 | `tests/test_zh_cn_locale_e21s06t01.py` | CREATE |
| D-U1 | `translatable-content-registry.yaml` | UPDATE |
| D-U2 | Task T01 doc | UPDATE |
| D-U3 | Story S06 checklist | UPDATE @ RW |
| D-U4 | `locale-rollout-matrix.md` | UPDATE linguistic note |

---

## 6. Documentation housing

IPP and locale assets: NOT_APPLICABLE, evergreen. Greenfield sync required.

---

## 7. Success / verification criteria

- [ ] 17 zh-CN assets translated (not interim en-GB)
- [ ] Validators + pytest green
- [ ] Greenfield sync green
- [ ] Registry updated
- [ ] IPP ↔ task wired
- [ ] `RW E21:S06:T01 --art` @ v0.21.6.1+1

---

## References

- [FR-006](../kanban/fbu/FR-006-localization-language-selection-uk-us-english.md)
- [T01 task doc](../kanban/epics/epic-21/story-06-cjk-languages-localization/T01-chinese-simplified-zh-cn-translation-files.md)
- [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) § zh-CN
- [IPP-E21S05T01](IPP-E21S05T01-spanish-es-translation-files.md) (delivery pattern)
