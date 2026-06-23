---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S02:T03 — Planning: Locale detection (IPW)

**Host Task:** [`T03-implement-locale-detection-browsersystem-locale.md`](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T03-implement-locale-detection-browsersystem-locale.md) **(E21:S02:T03)**  
**Planning for:** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) · [FR-006 Phase 2](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S02T02](IPP-E21S02T02-locale-file-structure.md)  
**Status:** Complete — released `v0.21.2.3+1` (`RW E21:S02:T03 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Implement ADR-024 detection precedence in `resolve_language()` | ADR-024 T03 row |
| RF2 | `detect_system_locale()` reads OS signals (`LANG`, `LC_ALL`, `locale.getlocale()`) | Task AC |
| RF3 | `detect_browser_locale(accept_language)` parses `Accept-Language` quality-sorted list | Task AC |
| RF4 | `detect_env_locale()` reads `ADK_LOCALE` | ADR-024 |
| RF5 | `map_to_supported_locale(tag)` maps BCP 47 input to nearest `supported_locales` entry | manifest v2 |
| RF6 | Detection may return FR-006 registry tags beyond en-GB/en-US; asset resolution unchanged | ADR-024 Phase 2 |
| RF7 | Export new APIs via `cli/localisation.py` | Delegation pattern |
| RF8 | Sync `greenfield-install/` copy of `localisation_config.py` | ADR-024 |
| RF9 | Wire T03 task doc ↔ IPP bidirectionally | IPW Phase 8 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Stdlib only — no new dependencies |
| RNF2 | Deterministic parsing; testable via injected `environ` / explicit headers |
| RNF3 | `pytest -m fr006` + `test_localisation_config_read_resolve.py` remain green |
| RNF4 | Release via `RW E21:S02:T03 --art` → `v0.21.2.3+1` |

### 1.3 Invariants and boundaries

- **Invariants:** `read_localisation_config()` config-only semantics unchanged; `resolve_locale_asset` fallback chain unchanged.
- **In scope:** Detection APIs, extended `resolve_language`, tests, conventions doc, ADR-024 row update.
- **Out of scope:** CLI `--locale` (T04), `resolve_locale_key()` (T06), asset fallback (T07), portal wiring.

---

## 2. Specification

### 2.1 Goal

Deliver locale detection for framework runtime: system and browser (`Accept-Language`) signals, env override (`ADK_LOCALE`), and ADR-024 precedence in `resolve_language()` when no persisted config exists.

**Canonical spec:** [locale-detection-conventions.md](../governance/standards/locale-detection-conventions.md)

### 2.2 Precedence (`resolve_language`)

```text
override → ai-dev-kit-config.yaml (valid file) → ADK_LOCALE → system locale → accept_language → default_locale (en-GB)
```

### 2.3 Status transition intent

- **Current:** `TODO`
- **→ IN PROGRESS:** §4 Step 1
- **→ COMPLETE:** V1–V12 + `RW E21:S02:T03 --art` @ `v0.21.2.3+1`

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1–T7 | all | **N** | Implements ADR-024 T03 contract |

**Outcome:** **EXEMPT** — UPDATE [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) T03 row (browser = Accept-Language API).

| ID | Exemption | Pass? |
| -- | --------- | ----- |
| E1 | Single locus | Yes |
| E2 | No new options | Yes |
| E3 | Reversible | Yes |
| E4 | Spec in ADR-024 + conventions | Yes |
| E5 | §5.3 cites governing docs | Yes |

---

## 3. Test design

| ID | Covers | Module |
| -- | ------ | ------ |
| T1 | RF4 | `ADK_LOCALE=en-US` |
| T2–T3 | RF2 | `LANG` / `LC_ALL` |
| T4–T5 | RF3 | Accept-Language parsing |
| T6–T7 | RF5 | Tag mapping / fallback |
| T8–T11 | RF1 | Precedence chain |
| T12 | RNF3 | `read_localisation_config` vs `resolve_language` split |
| V1–V12 | All | `tests/test_locale_detection.py` |

Run gates: `pytest tests/test_locale_detection.py`, `pytest tests/test_localisation_config_read_resolve.py`, `pytest -m fr006`.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Transition **E21:S02:T03** `TODO → IN PROGRESS` | Task doc |
| 2 | Add detection + mapping functions | `localisation_config.py` |
| 3 | Extend `resolve_language()` precedence | same |
| 4 | Re-export in `cli/localisation.py` | CLI bridge |
| 5 | Sync greenfield-install mirror | greenfield copy |
| 6 | Create `locale-detection-conventions.md` | Policy |
| 7 | Update ADR-024 T03 row + locales READMEs | Docs |
| 8 | Add `tests/test_locale_detection.py` | Tests |
| 9 | Run test gates + `pytest -m fr006` | Verification |
| 10 | **`RW E21:S02:T03 --art`** → `v0.21.2.3+1` | Release |
| **N** | Reconcile T03 → `COMPLETE` + forensic marker; RW Step 7 | Kanban |

**RW rule (BR-097):** `RW E21:S02:T03 --art` only.

### 4.1 Files

| Action | Path |
| ------ | ---- |
| UPDATE | `packages/frameworks/workflow-mgt/scripts/localisation_config.py` |
| UPDATE | `greenfield-install/packages/frameworks/workflow-mgt/scripts/localisation_config.py` |
| UPDATE | `cli/localisation.py` |
| CREATE | `tests/test_locale_detection.py` |
| CREATE | `docs/governance/standards/locale-detection-conventions.md` |
| UPDATE | `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md` |
| UPDATE | Package `locales/README.md` (×2) |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `IPP-E21S02T03-locale-detection.md` | CREATE |
| D2 | `locale-detection-conventions.md` | CREATE |
| D3 | ADR-024 T03 row | UPDATE |
| D4 | Package `locales/README.md` (×2) | UPDATE |
| D5 | T03 task doc | UPDATE |
| D6 | Story S02, FR-006 | UPDATE on RW |

### 5.3 Gaps

| Topic | Resolution |
| ----- | ---------- |
| Detection precedence rules | D2 conventions policy |
| Browser vs CLI | ADR-024 row — Accept-Language API only |

---

## 6. Documentation housing

| Doc ID | Path | Publication |
| ------ | ---- | ----------- |
| D1 | `docs/implementation-cycles/` | PUBLISHED |
| D2 | `docs/governance/standards/` | PUBLISHED |
| D3–D4 | `docs/architecture/` + `packages/frameworks/*/locales/` | PUBLISHED |

---

## 7. Success / verification criteria

- [x] Browser, system, fallback AC satisfied with tests
- [x] ADR-024 precedence in `resolve_language`
- [x] `pytest -m fr006` green
- [x] IPP ↔ task doc wired
- [x] Greenfield mirror synced
- [x] RW `v0.21.2.3+1` forensic grid

---

## References

- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [locale-detection-conventions.md](../governance/standards/locale-detection-conventions.md)
- [locale-file-structure-conventions.md](../governance/standards/locale-file-structure-conventions.md)
- [IPP-E21S02T02](IPP-E21S02T02-locale-file-structure.md)
- [localisation_config.py](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
