---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S05:T01 — Planning: Spanish (es) translation files (FR-006)

**Host Task:** [`T01-spanish-es-translation-files.md`](../kanban/epics/epic-21/story-05-european-languages-localization/T01-spanish-es-translation-files.md) **(E21:S05:T01)**  
**Planning for:** [FR-006 Phase 3+](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [E21:S05](../kanban/epics/epic-21/story-05-european-languages-localization.md)  
**Status:** Complete — shipped @ v0.21.5.1+1

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094. Scaffold trees exist from [E21:S03:T02](IPP-E21S03T02-create-translation-files-major-languages.md) (en-GB interim copy @ v0.21.3.2+1). Cultural guidance: [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) § Spanish (es).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Linguistically translate **`es`** runtime keys under both framework locale roots | Task deliverable; [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md) |
| RF2 | Translate **P0** (`cli.prompt.*`, `cli.status.*`) and **P1** (`installer.wizard.*`, `installer.deps.*`, `installer.run.*`) before lower tiers | Rollout matrix P0–P1 |
| RF3 | Translate **P2 whole-file** assets: kanban `templates/*`, `docs/setup-locale-index.md`; workflow-mgt `scaffolds/*` | Task AC "setup, README, core guides" → maps to manifest whole-file paths (not repo root `README.md`) |
| RF4 | Translate **`errors.*`** keys in both packages | P1/P3 boundary; required for installer/CLI UX |
| RF5 | Preserve key parity, placeholders (`{{path}}`, etc.), and `_meta.domain` blocks | [locale-key-conventions.md](../governance/standards/locale-key-conventions.md) |
| RF6 | Run **`report_locale_completeness.py`**; update registry `linguistic_status` for `es` | Task AC; E21:S03:T06 |
| RF7 | Document review outcome (maintainer + native/pro gap notes per Spanish matrix) | Task AC; [translation-workflow-and-review.md](../governance/standards/translation-workflow-and-review.md) |
| RF8 | Bidirectional IPP ↔ task wiring | FR-042 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Fallback chain unchanged: `es` → `default_locale` → `en-GB` → `en-US` | E21:S02:T07 |
| RNF2 | **`validate_locale_translations.py --strict --locale es`** green on both packages | S03:T04 workflow |
| RNF3 | **Greenfield sync** for `packages/frameworks/**/locales/es/**` per P-GREENFIELD-SYNC | FR-110 |
| RNF4 | Tone: neutral imperative; **usted** register for installer; consistent **tú/usted** choice documented | [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) § es |
| RNF5 | Post-ship: **`RW E21:S05:T01 --art`** only (BUILD +1 on same E:S:T after kanban-init `+0`) | BR-097; kanban-init @ v0.21.5.1+0 |
| RNF6 | Branch: **`epic/21-internationalisation-localisation`** (Epic 21 delivery) | Task kanban-init |

### 1.3 Invariants and boundaries

- **Invariants:** No key renames/deletes; no manifest structure changes; `en-GB` remains canonical source; Spanish does not become default locale.
- **In scope:** Linguistic translation of existing `packages/frameworks/kanban/locales/es/**` and `packages/frameworks/workflow-mgt/locales/es/**`; registry completeness update; pytest contract; review notes in task doc or IPP execution log.
- **Out of scope:** Multi-language picker key redesign (Phase 1 UK/US-only prompt strings may read oddly in es until S04 UI work); root `README.md` translation (excluded per [translatable-content-inventory.md](../governance/standards/translatable-content-inventory.md)); Docusaurus adopter-public locale pages; RTL; `locale_formatting.py` changes; other European locales (S05:T02–T04).

---

## 2. Specification

### 2.1 Goal

Replace en-GB **interim copy** in the Spanish locale tree with reviewed Spanish prose so adopters selecting `es` receive localized installer/CLI prompts, error messages, kanban templates, and setup index content — meeting FR-006 Phase 3+ linguistic delivery for the first European locale.

### 2.2 Specification mapping from ascertained requirements

| Package | Path | Asset count (approx.) | Tier order |
| ------- | ---- | --------------------- | ---------- |
| **workflow-mgt** | `locales/es/keys/cli.yaml` | 25 keys | P0 |
| **workflow-mgt** | `locales/es/keys/errors.yaml` | 6 keys | P1 |
| **workflow-mgt** | `locales/es/keys/installer.yaml` | 99 keys | P1 → P3 |
| **workflow-mgt** | `locales/es/scaffolds/*` | 3 files | P2 |
| **kanban** | `locales/es/keys/cli.yaml` | 7 keys | P0 |
| **kanban** | `locales/es/keys/errors.yaml` | 3 keys | P1 |
| **kanban** | `locales/es/templates/*` | 8 markdown files | P2 |
| **kanban** | `locales/es/docs/setup-locale-index.md` | 1 file | P2 ("core guides") |

**Minimum ship bar (task AC):** P0 + P1 + P2 complete; P3 installer remainder strongly recommended in same release if effort allows (single RW).

### 2.3 Constraints

- Apply Spanish desk-research notes from [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) § Spanish (es): neutral imperative, **usted** in installer, avoid US idioms, keep **Kanban** as loanword where branded.
- Preserve emoji/status prefixes where present in en-GB source (`✅`, `❌`, `🔍`) — translate surrounding prose only.
- After translation, **`report_locale_completeness.py --locale es`** must show **`linguistic_status` ≠ pending** for registry update.
- **Review:** Maintainer review required; native/pro review **recommended** for P0/P1 — document as "attempted translation pending native review" in changelog language until operator confirms.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO (kanban-init filed @ `v0.21.5.1+0`)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (IPP Step 1).
- **Transition trigger to COMPLETE:** All acceptance criteria evidenced + `RW E21:S05:T01 --art`.
- **Atomic propagation requirement:** Task doc, story checklist, `kboard.md` prune to `kanban-completed.md` in same RW Step 7 change set.
- **Owner:** IDW implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1–T7 | — | N | Executes ADR-024 C1 hybrid locale model; no new surface |

**Outcome:** `ALREADY_COVERED` — [ADR-024 i18n framework strategy](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md). No new ADR.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1–E5 | — | Y | Translation delivery per existing i18n ADR |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Structural validation | `validate_locale_translations.py --package all --locale es --strict` exit 0 | RNF2 |
| T2 | Key parity | es key sets match en-GB per domain in both packages | RF5 |
| T3 | Linguistic progress | `report_locale_completeness.py --locale es` shows keys_linguistic_pct > 0; whole-file linguistic not 100% pending-only | RF6 |
| T4 | P0/P1 sample | Selected `cli.prompt.*` and `installer.wizard.*` values **≠** en-GB (not interim copy) | RF2 |
| T5 | Placeholders | Translated strings retain `{{path}}`, `{{count}}`, etc. | RF5 |
| T6 | Fallback | Existing FR-006 fallback tests still pass (`pytest -m fr006`) | RNF1 |
| T7 | Registry | `translatable-content-registry.yaml` `es.linguistic_status` updated (e.g. `complete` or `in_progress` with documented threshold) | RF6 |
| T8 | Greenfield | `python scripts/sync_greenfield_install.py --check` exit 0 after locale edits | RNF3 |

**Module:** extend `tests/test_translation_completeness_tracking.py` with es post-translation assertions **or** add `tests/test_spanish_locale_e21s05t01.py` (preferred — focused contract for this task).

**Structural / doc-only:** Translation content is substantive — **do not** use `--skip-tests`.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E21:S05:T01` `TODO → IN PROGRESS`** | Task doc |
| 2 | Translate **workflow-mgt** P0 `keys/cli.yaml` + P1 `keys/errors.yaml` | `packages/frameworks/workflow-mgt/locales/es/keys/` |
| 3 | Translate **workflow-mgt** P1 `keys/installer.yaml` (wizard + deps + run namespaces first) | installer.yaml |
| 4 | Translate **kanban** P0/P1 `keys/cli.yaml`, `keys/errors.yaml` | `packages/frameworks/kanban/locales/es/keys/` |
| 5 | Translate **P2 whole files** — kanban templates + setup index; workflow scaffolds | templates/, docs/, scaffolds/ |
| 6 | Complete **P3** installer key remainder (if not done in step 3) | installer.yaml |
| 7 | Run validators + completeness report; update **`translatable-content-registry.yaml`** | registry + stdout evidence |
| 8 | Add **pytest** module; run `pytest -m fr006` subset | tests green |
| 9 | **`sync_greenfield_install.py`** + commit mirror | greenfield-install/ |
| 10 | Record **review notes** in task doc (maintainer + native gap) | Task doc |
| 11 | **`RW E21:S05:T01 --art`** on `epic/21-internationalisation-localisation` | Release |
| **N** | **[MANDATORY] Reconcile task status** to `COMPLETE` + Version Anchor if ACs satisfied | Task + story + kboard |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E21:S05:T01 --art`** only (not `--dpz` — prior doc-init used BUILD +0).

### 4.1 Files to create or modify

**Create:**

- `docs/implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md` (this IPP)
- `tests/test_spanish_locale_e21s05t01.py` (or extend completeness tests)

**Modify:**

- `packages/frameworks/workflow-mgt/locales/es/**` (all scaffolded assets)
- `packages/frameworks/kanban/locales/es/**` (all scaffolded assets)
- `docs/governance/standards/translatable-content-registry.yaml` (`es.linguistic_status`)
- Task T01 doc (IPP links, status, review notes, AC checkboxes)
- Story S05 checklist row (RW Step 7)
- `greenfield-install/packages/frameworks/{workflow-mgt,kanban}/locales/es/**` (sync)

**Do not modify in T01:**

- `packages/frameworks/**/locales/manifest.yaml` structure (unless validator discovers drift — fix only if blocking)
- Root `README.md`, Docusaurus portal, `locale_formatting.py`
- Other locale trees (`fr`, `de`, `pt`, …)

### 4.2 Dependency order

1. Keys P0 → P1 (both packages)
2. Whole-file P2
3. Installer P3 remainder
4. Validators + registry + tests
5. Greenfield sync
6. RW + kanban reconciliation

### 4.3 Translation workflow (execution guide)

1. Diff each `es` file against `en-GB` counterpart.
2. Translate value strings only; preserve YAML structure and placeholders.
3. Run `validate_locale_translations.py --locale es --strict` after each package batch.
4. Run `report_locale_completeness.py --locale es --format markdown` for ship evidence.
5. Follow [translation-workflow-and-review.md](../governance/standards/translation-workflow-and-review.md) PR self-review checklist even for agent delivery.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `translatable-content-registry.yaml` | `es.linguistic_status` | RF6 |
| D-U2 | Task T01 doc | IPP links; AC checkboxes; review notes | RF7, RF8 |
| D-U3 | Story S05 checklist | T01 row @ release version | Step N |
| D-U4 | `locale-rollout-matrix.md` | Optional: note es linguistic delivery @ version (if matrix tracks beyond scaffold) | RF1 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md` | This IPP | RF8 |
| D-C2 | `tests/test_spanish_locale_e21s05t01.py` | Task regression contract | §3 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Root `README.md` Spanish | NONE — out of registry scope; task "README" = setup index + templates |
| Native speaker sign-off | Document gap per cultural matrix; changelog uses "Attempted translation" until verified |
| Spanish in language picker UI | NONE in T01 — translate existing keys; multi-locale picker strings = future S04/E21 UI task if needed |
| Portal publish | NONE — FR-114 excludes maintainer/governance trees |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E21S05T01-spanish-es-translation-files.md` | NOT_APPLICABLE | evergreen | T01 Input/References |
| D-U1 | `docs/governance/standards/translatable-content-registry.yaml` | NOT_APPLICABLE | evergreen | T06 tooling |
| Locale assets | `packages/frameworks/*/locales/es/**` | NOT_APPLICABLE | evergreen | manifest.yaml |

No `docs/guides/**` adopter-public prose edits → no portal pytest AC for new user-facing pages.

**Greenfield sync:** Required for all `packages/frameworks/**/locales/es/**` edits.

---

## 7. Success / verification criteria

- [x] Spanish keys and whole files linguistically translated (not identical en-GB interim copy) for P0–P2 minimum
- [x] `validate_locale_translations.py --locale es --strict` green (both packages)
- [x] `report_locale_completeness.py --locale es` documents completeness; registry updated
- [x] Fallback chain tests pass (`pytest -m fr006`)
- [x] New/extended pytest for es linguistic contract green
- [x] `sync_greenfield_install.py --check` green
- [x] Review notes recorded (maintainer + native gap)
- [x] IPP ↔ task bidirectional links
- [x] `RW E21:S05:T01 --art` complete

---

## References

- [FR-006](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [T01 task doc](../kanban/epics/epic-21/story-05-european-languages-localization/T01-spanish-es-translation-files.md)
- [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md)
- [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) § Spanish (es)
- [translation-workflow-and-review.md](../governance/standards/translation-workflow-and-review.md)
- [translation-management-tools.md](../documentation/user-docs/translation-management-tools.md)
- [IPP-E21S03T02](IPP-E21S03T02-create-translation-files-major-languages.md) (scaffold)
- [ADR-024 i18n](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
