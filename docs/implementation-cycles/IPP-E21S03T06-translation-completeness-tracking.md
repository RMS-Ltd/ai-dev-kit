---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T23:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S03:T06 — Planning: Translation completeness tracking (IPW)

**Host Task:** [`T06-implement-translation-completeness-tracking.md`](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T06-implement-translation-completeness-tracking.md) **(E21:S03:T06)**  
**Planning for:** [FR-006 Phase 3+](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S03T05](IPP-E21S03T05-translation-management-tools.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)  
**Status:** Complete — released `v0.21.3.6+1` (`RW E21:S03:T06 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Scope:** Maintainer-facing completeness **reporting** and **alerting** CLI derived from on-disk locale corpus + [translatable-content-registry.yaml](../governance/standards/translatable-content-registry.yaml). No linguistic translation delivery (S05–S07), no web dashboard, no CI wiring (optional follow-on).

**Approved scope decisions (ascertained from T01/T04/T05 handoffs and registry contract):**

- **Script-first** (extend T05 pattern; no `adk locale completeness` subcommand in T06)
- **Registry as config SoT** — read `scaffold_locales`, `packages.*.key_domains`, `tiers`; do not invent parallel locale lists
- **Two completeness dimensions** — **structural** (keys/assets present; T02/T05 territory) vs **linguistic** (content differs from en-GB interim copy; primary T06 metric)
- **Tier-aware metrics** — P0–P3 prefixes from [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md) for per-tier %
- **Alerts via exit codes** — `--fail-under PCT` and `--alert-on missing|interim|any` (not email/Slack integrations)
- **Registry write-back optional** — `--update-registry linguistic_status` only when computed tier aggregate meets threshold (maintainer opt-in; default report-only)
- **Reuse** `locale_translation_utils.py` interim-copy detection; do not fork parity logic

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Compute per-locale **completeness metrics** (structural + linguistic) for kanban and workflow-mgt packages | Task AC; ADR-024 T06 row |
| RF2 | Generate **human-readable completeness reports** (table + optional markdown) | Task deliverable “completeness reports” |
| RF3 | Emit **missing translation alerts** — missing keys/assets and interim-copy (linguistic-pending) items | Task AC “missing translation alerts” |
| RF4 | Load locale scope and tier definitions from **translatable-content-registry.yaml** | T01 RNF5; inventory handoff |
| RF5 | Report **per priority tier** (P0–P3) completion % for YAML keys | locale-rollout-matrix |
| RF6 | Report **whole-file** linguistic pending (byte-identical to en-GB) for manifest-registered templates/docs/scaffolds | translation-workflow §Completeness states |
| RF7 | Support machine-readable **JSON** output for automation | FR-006 maintainability NFR |
| RF8 | Integrate with documented maintainer tool suite (fourth tool after T05 trio) | translation-management-tools.md |
| RF9 | Optional **registry sync** — set `linguistic_status: complete` when maintainer confirms threshold (computed + flag) | translation-workflow-and-review §Completeness states |
| RF10 | Cross-link inventory, rollout matrix, and workflow policy handoff rows for T06 | translatable-content-inventory |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | No new runtime dependencies (PyYAML + stdlib) | ADR-024 |
| RNF2 | Report generation &lt;5s on full nine-locale corpus | T05 NFR4 spirit |
| RNF3 | `pytest -m fr006` remains green | FR-006 regression |
| RNF4 | Deterministic output (stable sort order) for diff-friendly CI logs | maintainability |
| RNF5 | T06/T07 boundary — tracking only; E2E locale rendering tests stay in T07 | story checklist |
| RNF6 | T06/S05 boundary — metrics enable S05–S07; does not perform translation | story ownership |

### 1.3 Invariants and boundaries

- **Invariants:** en-GB canonical source; ADR-024 C1 hybrid; `linguistic_status: pending` is expected for all scaffold locales until S05–S07; structural completeness already enforced by T05 validate.
- **In scope:** `report_locale_completeness.py`, completeness helpers (extend `locale_translation_utils.py` or thin sibling module), tests, maintainer doc updates, registry header `completeness_tool` field, ADR-024 integration row, inventory/workflow handoff.
- **Out of scope:** Web UI/dashboard; GitHub Action/CI gate wiring (document as follow-on); email/Slack notifications; validator `operator_validator` tier; portal i18n; automatic translation; pre-commit hook; rewriting S05–S07 linguistic delivery.

---

## 2. Specification

### 2.1 Goal

Give maintainers and story owners (S05–S07) a deterministic CLI that measures how much of each locale corpus is **structurally present** and **linguistically translated** (vs en-GB interim copy), broken down by priority tier — closing FR-006 “translation completeness tracked” and replacing manual registry guesswork with computed evidence.

### 2.2 Specification mapping from ascertained requirements

Implements ADR-024 S03 T06 handoff and FR-006 Phase 3 maintainability: T01 registry → T02 scaffolds → T03 wiring → T04 process → T05 validate/sync → **T06 metrics** → T07 E2E tests → S05–S07 linguistic delivery.

### 2.3 Constraints

- **Linguistic complete** for a key = value differs from en-GB (same rule as T05 `interim_copy` advisory, inverted for % numerator).
- **Linguistic complete** for a whole file = file bytes differ from en-GB counterpart (normalize line endings to `\n` before compare).
- **Tier assignment** for keys: longest-prefix match against P0→P1→P2→P3 patterns in locale-rollout-matrix (documented in script; not duplicated in registry v2).
- **English locales** (`en-GB`, `en-US`): report 100% linguistic for keys (parity maintenance); exclude from `--fail-under` default set or treat as N/A.
- Default report includes all `scaffold_locales` from registry; `--locale` filter repeatable.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** All ACs satisfied with test evidence; `RW E21:S03:T06 --art`.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same change set as RW Step 7.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Report CLI vs extend `validate_locale_translations.py` vs CI-only JSON artifact vs registry-only manual fields |
| T2 | Reversibility | N | Scripts + docs revert in one PR |
| T3 | Blast radius | N | Bounded to `workflow-mgt/scripts/`, registry header, docs, tests |
| T4 | Precedent | Y | S05–S07 story tasks will cite canonical completeness command in AC |
| T5 | Constraint trade-off | N | Executes ADR-024 T06 row; no new i18n strategy |
| T6 | Governance contract | N | No RW/IPW gate changes |
| T7 | Supersedes | N | Fills ADR-024 integration plan slot; does not contradict |

**Outcome:** `REQUIRED` (T1=Y, T4=Y) → **UPDATE** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) integration plan (T06 tool row + script-first + metric definitions)

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | — | Not used (REQUIRED) |
| E2 | No new options | — | Not used |
| E3 | Reversible in one task | — | Not used |
| E4 | Spec elsewhere | — | Not used |
| E5 | Documented NONE | — | Not used |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| C1 | Registry load | Missing/malformed registry → clear error exit 2 |
| C2 | Clean scaffold locale | `es` reports 0% linguistic (all interim copy) but 100% structural |
| C3 | Tier breakdown | P0/P1/P2/P3 sections present; sums consistent |
| C4 | Simulated translation | Fixture: one key changed in target → linguistic % increases |
| C5 | Whole-file pending | Identical markdown → counted linguistic-pending; edited file → translated |
| C6 | Missing key alert | Injected missing key → listed under alerts; `--alert-on missing` exit 1 |
| C7 | Interim alert | `--alert-on interim` exit 1 when any interim-copy keys |
| C8 | `--fail-under` | Exit 1 when linguistic % below threshold |
| C9 | JSON output | `--format json` valid schema; stable key ordering |
| C10 | `--update-registry` dry-run | Reports would-change rows without writing |
| C11 | Package filter | `--package kanban` scopes metrics |
| C12 | Doc contract | Maintainer guide documents fourth tool + example invocations |
| C13 | Regression | `pytest -m fr006` green |

**Module:** `tests/test_translation_completeness_tracking.py` (marker `fr006`)

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E21:S03:T06` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Add completeness helpers to `locale_translation_utils.py` (tier prefix map, whole-file compare, aggregate counters) | shared lib |
| 3 | Implement `report_locale_completeness.py` (registry load, metrics, `--format table\|json\|markdown`, `--locale`, `--package`, `--tier`, `--fail-under`, `--alert-on`, `--update-registry`, `--dry-run`) | D-C1 |
| 4 | Add `tests/test_translation_completeness_tracking.py` (C1–C13) | D-C2 |
| 5 | UPDATE `translatable-content-registry.yaml` — `completeness_tool` header key | D-U1 |
| 6 | UPDATE `translation-management-tools.md` — fourth tool section + recommended workflow | D-U2 |
| 7 | UPDATE `translation-workflow-and-review.md` — replace manual-only completeness note; remove T06 from Out of scope | D-U3 |
| 8 | UPDATE `translatable-content-inventory.md` — T06 handoff row (tool path) | D-U4 |
| 9 | UPDATE `locale-rollout-matrix.md` — link completeness command under Completeness expectations | D-U5 |
| 10 | UPDATE package `locales/README.md` (+ greenfield mirrors) — completeness report one-liner | D-U6 |
| 11 | UPDATE ADR-024 integration plan T06 row | D-U7 |
| 12 | Run `pytest -m fr006`; fix regressions | C13 |
| 13 | `RW E21:S03:T06 --art` | Release |
| **N** | **[MANDATORY] Reconcile task `E21:S03:T06` status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; else `IN PROGRESS` / `BLOCKED`. Update `Last updated`. | Task doc + story checklist + kboard |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E21:S03:T06 --art`** only.

### 4.1 Files to create or modify

**Create:**

- `packages/frameworks/workflow-mgt/scripts/report_locale_completeness.py`
- `tests/test_translation_completeness_tracking.py`
- `docs/implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md` (this plan)

**Modify:**

- `packages/frameworks/workflow-mgt/scripts/locale_translation_utils.py`
- `docs/governance/standards/translatable-content-registry.yaml`
- `docs/documentation/user-docs/translation-management-tools.md`
- `docs/governance/standards/translation-workflow-and-review.md`
- `docs/governance/standards/translatable-content-inventory.md`
- `docs/governance/standards/locale-rollout-matrix.md`
- `packages/frameworks/kanban/locales/README.md`
- `packages/frameworks/workflow-mgt/locales/README.md`
- `greenfield-install/packages/frameworks/{kanban,workflow-mgt}/locales/README.md`
- `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md`
- `docs/project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T06-implement-translation-completeness-tracking.md`
- `docs/project-management/kanban/kboard.md` (RW Step 7)

### 4.2 Dependency order

1. Registry/tier helper design → 2. Completeness utils → 3. Report CLI → 4. Tests → 5. Documentation cross-links → 6. ADR-024 row → 7. RW

### 4.3 Script interface sketch

**`report_locale_completeness.py`**

```text
python packages/frameworks/workflow-mgt/scripts/report_locale_completeness.py \
  [--package kanban|workflow-mgt|all] [--locale CODE] [--tier P0|P1|P2|P3] \
  [--format table|json|markdown] [--fail-under PCT] \
  [--alert-on missing|interim|any] [--update-registry] [--dry-run]
```

**Report sections (table format):**

1. Summary per locale: structural %, linguistic % (keys), linguistic % (whole files), combined %
2. Tier table: P0–P3 key counts (total / translated / pending / missing)
3. Alerts: missing keys/assets; top N interim-copy items (or full list with `--verbose`)

**Exit codes:**

- `0` — success; thresholds met
- `1` — alert threshold or `--fail-under` violated
- `2` — invalid invocation or registry/IO error

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/governance/standards/translatable-content-registry.yaml` | Add `completeness_tool:` header; optional schema comment for computed vs manual `linguistic_status` | RF4 |
| D-U2 | `docs/documentation/user-docs/translation-management-tools.md` | Fourth tool: `report_locale_completeness.py` + workflow step | RF8 |
| D-U3 | `docs/governance/standards/translation-workflow-and-review.md` | Automate completeness tracking; document alert flags; remove Out of scope T06 line | RF2, RF3 |
| D-U4 | `docs/governance/standards/translatable-content-inventory.md` | T06 handoff → tool path + metric definitions | RF10 |
| D-U5 | `docs/governance/standards/locale-rollout-matrix.md` | Completeness expectations → CLI reference | RF5 |
| D-U6 | `packages/frameworks/*/locales/README.md` (+ greenfield) | One-line completeness report invocation | RF8 |
| D-U7 | `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md` | T06 integration row (script name, metrics) | §2.5 REQUIRED |
| D-U8 | T06 task doc | IPP links; AC checkboxes on completion | Phase 8 |
| D-U9 | `docs/project-management/kanban/fbu/FR-006-*.md` | T06 anchor when released | Step 13 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `packages/frameworks/workflow-mgt/scripts/report_locale_completeness.py` | Completeness report + alert CLI | RF1–RF3 |
| D-C2 | `tests/test_translation_completeness_tracking.py` | Automated verification | §3 |
| D-C3 | `docs/implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md` | This IPP | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| CI GitHub Action for completeness | NONE — document as optional follow-on in D-U2; not required for T06 AC |
| Email/Slack notifications | NONE — exit-code alerts only |
| `operator_validator` tier metrics | NONE — deferred per registry `deferred_surfaces` |
| Portal/dashboard UI | NONE — ADR-024 portal deferred |
| Linguistic translation (S05–S07) | NONE — story-owned delivery; T06 measures only |
| `adk locale report` subcommand | NONE — script-first (T05 precedent) |
| `locale-key-conventions.md` | NONE — reference only |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | ---------------------- | --------- | ------------- |
| D-C3 | `docs/implementation-cycles/IPP-E21S03T06-translation-completeness-tracking.md` | NOT_APPLICABLE | Planning artifact | evergreen | T06 task doc |
| D-C1–D-C2 | Under `packages/` and `tests/` | NOT_APPLICABLE | Code/tests | evergreen | D-U2, package READMEs |
| D-U2 | `docs/documentation/user-docs/translation-management-tools.md` | NOT_APPLICABLE | Internal maintainer KB | evergreen | contributing-translations, translation-workflow-and-review |
| D-U3 | `docs/governance/standards/translation-workflow-and-review.md` | NOT_APPLICABLE | Governance | evergreen | inventory, ADR-024 |
| D-U7 | ADR-024 | NOT_APPLICABLE | Architecture | evergreen | FR-006, IPP §2.5 |

---

## 7. Success / verification criteria

- [ ] `report_locale_completeness.py` produces per-locale structural + linguistic metrics (tests C2–C5)
- [ ] Tier breakdown (P0–P3) present and arithmetically consistent (C3)
- [ ] Missing translation alerts work (`--alert-on missing|interim|any`; C6–C7)
- [ ] `--fail-under` enforces exit code 1 when below threshold (C8)
- [ ] JSON output valid and stable (C9)
- [ ] Registry header documents `completeness_tool` (D-U1)
- [ ] Maintainer guide lists fourth tool with examples (D-U2, C12)
- [ ] Workflow policy no longer defers T06 to Out of scope (D-U3)
- [ ] ADR-024 integration plan updated (D-U7)
- [ ] `pytest -m fr006` green (C13)
- [ ] IPP ↔ task doc bidirectional links
- [ ] `RW E21:S03:T06 --art` after implementation
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason

---

## References

- [T06 task doc](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T06-implement-translation-completeness-tracking.md)
- [IPP-E21S03T05](IPP-E21S03T05-translation-management-tools.md)
- [translatable-content-registry.yaml](../governance/standards/translatable-content-registry.yaml)
- [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md)
- [translation-workflow-and-review.md](../governance/standards/translation-workflow-and-review.md)
- [locale_translation_utils.py](../../packages/frameworks/workflow-mgt/scripts/locale_translation_utils.py)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [FR-006](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md)
