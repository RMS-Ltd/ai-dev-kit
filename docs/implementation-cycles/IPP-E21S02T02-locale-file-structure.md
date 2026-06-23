---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S02:T02 — Planning: Locale file structure (IPW)

**Host Task:** [`T02-set-up-translation-file-structure-localeslang.md`](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T02-set-up-translation-file-structure-localeslang.md) **(E21:S02:T02)**  
**Planning for:** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) · [FR-006 Phase 2](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S02T01](IPP-E21S02T01-choose-i18n-framework.md)  
**Status:** Complete — released `v0.21.2.2+1` (`RW E21:S02:T02 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Operator scope:** Physical dirs **en-GB + en-US** only; FR-006 codes in `supported_locales` metadata until S03+.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Evolve kanban + workflow-mgt manifests to schema v2 (additive) | ADR-024 T02; T02 AC |
| RF2 | Add `keys/` under en-GB and en-US in both packages | ADR-024 §2 |
| RF3 | Seed `keys/cli.yaml` and `keys/errors.yaml` with documented schema | Conventions §4 |
| RF4 | `supported_locales` lists FR-006 codes; no physical dirs for non-English yet | Operator scope |
| RF5 | Document organisation and naming conventions | T02 deliverable |
| RF6 | Phase 1 `fr006` tests remain green | ADR-024 backward compat |
| RF7 | Sync `greenfield-install/` after structure change | ADR-024; FR-110 |
| RF8 | Wire T02 task doc ↔ IPP bidirectionally | IPW Phase 8 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | No new runtime dependencies |
| RNF2 | `load_locale_manifest()` works without code change (additive categories) |
| RNF3 | Release via `RW E21:S02:T02 --art` → `v0.21.2.2+1` |
| RNF4 | BCP 47 locale tags per FR-006 |

### 1.3 Invariants and boundaries

- **Invariants:** Phase 1 `templates`/`docs`/`scaffolds` manifest paths unchanged; `resolve_locale_asset` unchanged until T06.
- **In scope:** Manifest v2, key seeds, conventions doc, v2 tests, README updates, greenfield sync.
- **Out of scope:** `resolve_locale_key()` (T06), detection/switching/formatting (T03–T05, T07), non-English locale dirs (S03+).

---

## 2. Specification

### 2.1 Goal

Establish canonical on-disk locale layout and manifest v2 so T06 can wire key lookup and S03+ can add locale trees without restructuring.

**Canonical spec:** [locale-file-structure-conventions.md](../governance/standards/locale-file-structure-conventions.md)

### 2.2 Specification mapping

| Requirement | Artifact |
| ----------- | -------- |
| RF1–RF4 | Both `manifest.yaml` v2 files |
| RF3 | `locales/{en-GB,en-US}/keys/*.yaml` (8 files per package pair) |
| RF5 | Conventions policy doc |
| RF6–RF7 | `test_locale_structure_v2.py` + `pytest -m fr006` |

### 2.3 Constraints

- No `localisation_config.py` changes in T02.
- Manifest `locales` block only for on-disk locale codes (en-GB, en-US).

### 2.4 Status transition intent

- **Current:** `TODO`
- **→ IN PROGRESS:** §4 Step 1
- **→ COMPLETE:** V1–V10 + `RW E21:S02:T02 --art` @ `v0.21.2.2+1`

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1–T7 | all | **N** | Implements ADR-024 T02 handoff only |

**Outcome:** **EXEMPT** — cite [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md).

| ID | Exemption | Pass? |
| -- | --------- | ----- |
| E1 | Single locus | Yes |
| E2 | No new options | Yes |
| E3 | Reversible | Yes |
| E4 | Spec in ADR-024 + conventions | Yes |
| E5 | §5.3 cites ADR-024 | Yes |

---

## 3. Test design

| ID | Check | Module |
| -- | ----- | ------ |
| V1 | Manifest v2 + `supported_locales` | `test_locale_structure_v2.py` |
| V2 | Key files on disk | same |
| V3 | Manifest keys paths resolve | same |
| V4 | Phase 1 template/scaffold paths unchanged | same |
| V5 | `pytest -m fr006` green | regression bundle |
| V6 | Key file `_meta` + dotted keys | same |
| V7 | `sync_greenfield_install.py --check` | shell |
| V8 | Conventions doc + ADR-024 link | same |
| V9 | T02 ↔ IPP links | task doc |
| V10 | Story S02 T02 row | story doc |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Transition **E21:S02:T02** `TODO → IN PROGRESS` | Task doc |
| 2 | Create conventions policy | `locale-file-structure-conventions.md` |
| 3 | Bump kanban manifest to v2 | `kanban/locales/manifest.yaml` |
| 4 | Create kanban key seeds (en-GB, en-US) | 4 YAML files |
| 5 | Bump workflow-mgt manifest to v2 | `workflow-mgt/locales/manifest.yaml` |
| 6 | Create workflow-mgt key seeds | 4 YAML files |
| 7 | Update package `locales/README.md` files | Docs |
| 8 | Add `tests/test_locale_structure_v2.py` | Tests |
| 9 | Run v2 tests + `pytest -m fr006` | V5–V6 |
| 10 | `sync_greenfield_install.py` + `--check` | V7 |
| 11 | Update T02, story S02, FR-006, IPP status | Kanban |
| 12 | **`RW E21:S02:T02 --art`** → `v0.21.2.2+1` | Release |
| **N** | Reconcile T02 → `COMPLETE` + forensic marker; RW Step 7 | Task + kboard |

**RW rule (BR-097):** `RW E21:S02:T02 --art` only.

### 4.1 Files (summary)

See plan §4.1 — CREATE: IPP, conventions, 8 key YAML per package (16 total), tests. UPDATE: manifests, READMEs, kanban docs.

### 4.2 Downstream handoffs

| Task | Consumes T02 |
| ---- | ------------- |
| S02:T03 | `supported_locales` for detection |
| S02:T06 | `keys` category + key schema |
| S02:T07 | Locale list for fallback |
| S03+ | Convention for new `{lang}/` trees |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `IPP-E21S02T02-locale-file-structure.md` | CREATE |
| D2 | `locale-file-structure-conventions.md` | CREATE |
| D3 | Package `locales/README.md` (×2) | UPDATE |
| D4 | Both `manifest.yaml` | UPDATE |
| D5 | T02 task doc | UPDATE |
| D6 | Story S02, FR-006 | UPDATE |
| D7 | `localisation_config.py` | NONE (T06) |
| D8 | ADR-024 | NONE |

### 5.3 Gaps

| Topic | Resolution |
| ----- | ---------- |
| Cross-package locale rules | D2 conventions policy |
| Key lookup API | NONE — T06 |

---

## 6. Documentation housing

| Doc ID | Path | Publication |
| ------ | ---- | ----------- |
| D1 | `docs/implementation-cycles/` | PUBLISHED |
| D2 | `docs/governance/standards/` | PUBLISHED |
| D3–D4 | `packages/frameworks/*/locales/` | PUBLISHED |

---

## 7. Success / verification criteria

- [x] Conventions doc published (V8)
- [x] Manifest v2 + key seeds on disk (V1–V3)
- [x] v2 test module passes (V6)
- [x] `fr006` regression green (V5)
- [x] Greenfield sync verified (V7)
- [x] T02 ↔ IPP ↔ story wiring (V9–V10)
- [x] RW `v0.21.2.2+1` forensic grid

---

## References

- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [locale-file-structure-conventions.md](../governance/standards/locale-file-structure-conventions.md)
- [IPP-E21S02T01](IPP-E21S02T01-choose-i18n-framework.md)
- [test_locale_content_manifest.py](../../tests/test_locale_content_manifest.py)
