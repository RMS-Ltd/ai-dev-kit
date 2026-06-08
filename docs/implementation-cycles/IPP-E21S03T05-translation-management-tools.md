---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S03:T05 — Planning: Translation management tools (IPW)

**Host Task:** [`T05-add-translation-management-tools.md`](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T05-add-translation-management-tools.md) **(E21:S03:T05)**  
**Planning for:** [FR-006 Phase 3+](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S03T04](IPP-E21S03T04-translation-workflow-review.md) · [IPP-E21S03T03](IPP-E21S03T03-translation-lookup-rendering.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)  
**Status:** Complete — released `v0.21.3.5+1` (`RW E21:S03:T05 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Scope:** Maintainer-facing Python CLI scripts for structural locale validation and key sync; documentation; `fr006` tests. No completeness dashboards (T06), no linguistic translation (S05–S07), no validator message extraction.

**Approved scope decisions (2026-06-08):**

- Script-first (no `adk locale` subcommands in T05)
- Validate: default lenient; `--strict` for parity/placeholder enforcement
- Pre-commit hook deferred; validate documented in contributor workflow
- CI enforcement deferred (recommended locally in T05)

**Design decisions (ascertained):**

- **Script-first** (not new `adk locale` subcommands in T05) — matches `scaffold_locale_trees.py` and `validate_*` patterns; `switch_locale` already covers project config switching (S02:T04).
- **Three-tool suite:** retain `scaffold_locale_trees.py` (T02); add `validate_locale_translations.py` + `sync_locale_keys.py`.
- **Contributor gate:** document `validate_locale_translations.py` in contributor workflow alongside `pytest -m fr006`; optional `--strict` for CI later (non-blocking in T05 unless user requests pre-commit hook).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Provide maintainer CLI to **structurally validate** locale trees (YAML parse, key parity, placeholders, manifest paths) | Task AC; T04 out-of-scope handoff |
| RF2 | Provide maintainer CLI to **sync missing keys** from en-GB into target locale key catalogs (update tool) | Task AC “tools for updating translations” |
| RF3 | Reuse existing **scaffold** tool (`scaffold_locale_trees.py`) as part of documented management suite | T02; inventory §Tool |
| RF4 | Validate both framework packages (`kanban`, `workflow-mgt`) with `--package` filter | locale-file-structure-conventions |
| RF5 | Preserve `{{placeholder}}` tokens and `_meta` blocks during validation checks | translation-workflow-and-review §Guidelines |
| RF6 | Document all management tools for maintainers and cross-link from contributor workflow | Task AC “tools documented” |
| RF7 | Wire inventory / workflow policy handoff rows for T05 | translatable-content-inventory |
| RF8 | Greenfield-install mirrors when script paths documented in package READMEs | S02 convention |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | No new runtime dependencies (PyYAML already used) | ADR-024 |
| RNF2 | Scripts runnable from repo root; stdlib + existing deps only | framework-code convention |
| RNF3 | `pytest -m fr006` remains green | FR-006 regression |
| RNF4 | Validation completes in &lt;5s on full corpus (structural only) | FR-006 NFR spirit |
| RNF5 | T05/T06 boundary: no registry `linguistic_status` automation, no completeness % reports | T06 scope |

### 1.3 Invariants and boundaries

- **Invariants:** ADR-024 C1 hybrid; en-GB canonical key source; manifest v2 schema; PR-based workflow unchanged.
- **In scope:** `validate_locale_translations.py`, `sync_locale_keys.py`, tests, maintainer + workflow doc updates, ADR-024 integration row, inventory handoff.
- **Out of scope:** T06 completeness metrics/alerts; linguistic translation (S05–S07); validator `operator_validator` extraction; portal i18n; pre-commit hook wiring (optional follow-on); CAT/gettext tooling.

---

## 2. Specification

### 2.1 Goal

Give maintainers and contributors deterministic CLI tools to validate locale structural integrity and keep target-locale key catalogs in sync with en-GB — closing the FR-006 “translation workflow and management” **tools** gap deferred from T04 — without duplicating T06 completeness reporting.

### 2.2 Specification mapping from ascertained requirements

Implements FR-006 Phase 3 management tooling slice: T01 inventory → T02 scaffolds → T03 runtime wiring → T04 human process → **T05 maintainer automation** → T06 metrics.

### 2.3 Constraints

- Validation is **structural**, not linguistic (no MT, no glossary enforcement).
- `sync_locale_keys.py` adds missing keys with **en-GB source values** (interim copy policy per T02); translators edit values in PRs per T04.
- `scaffold_locale_trees.py` remains authoritative for **full tree** bootstrap; sync script is incremental only.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** All ACs satisfied with test evidence; `RW E21:S03:T05 --art`.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same change set as RW Step 7.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Script-first vs `adk locale` subcommands vs single monolithic CLI |
| T2 | Reversibility | N | Scripts revert in one PR |
| T3 | Blast radius | N | Bounded to `workflow-mgt/scripts/` + docs + tests |
| T4 | Precedent | Y | S05–S07 maintainers and contributors will cite canonical validate/sync commands |
| T5 | Constraint trade-off | N | Follows ADR-024 C1; no new strategy trade-off |
| T6 | Governance contract | N | No RW/IPW gate changes |
| T7 | Supersedes | N | Extends ADR-024 integration plan |

**Outcome:** `REQUIRED` (T1=Y, T4=Y) → **UPDATE** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) integration plan (T05 tool row; cite script-first decision)

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
| V1 | Validator discovers en-GB corpus | Exit 0 on clean repo for `--package all` |
| V2 | Key parity failure | Synthetic missing key in fixture locale → validator reports + exit 1 with `--strict` |
| V3 | Placeholder preservation | Value missing `{{x}}` vs en-GB → reported |
| V4 | Manifest path existence | Broken manifest path → reported |
| V5 | YAML parse / UTF-8 | Invalid YAML → reported |
| V6 | Sync adds missing keys | `sync_locale_keys.py --dry-run` lists keys; apply adds keys with en-GB values |
| V7 | Sync preserves existing translations | Existing target values not overwritten |
| V8 | Package filter | `--package kanban` scopes checks |
| V9 | Doc contract | Maintainer guide lists all three tools with example invocations |
| V10 | Regression | `pytest -m fr006` green |

**Module:** `tests/test_translation_management_tools.py` (marker `fr006`)

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E21:S03:T05` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Implement `validate_locale_translations.py` (structural checks, `--package`, `--locale`, `--strict`, human-readable report) | D-C1 |
| 3 | Implement `sync_locale_keys.py` (`--source en-GB`, `--target`, `--package`, `--dry-run`) | D-C2 |
| 4 | Add `tests/test_translation_management_tools.py` (V1–V10) | D-C3 |
| 5 | Create maintainer guide `translation-management-tools.md` | D-C4 |
| 6 | UPDATE `translation-workflow-and-review.md` — tools section; remove T05 from Out of scope | D-U1 |
| 7 | UPDATE `contributing-translations.md` — verify step references validate script | D-U2 |
| 8 | UPDATE `translatable-content-inventory.md` + registry header — T05 handoff row | D-U3–D-U4 |
| 9 | UPDATE package `locales/README.md` (kanban + workflow-mgt + greenfield mirrors) | D-U5 |
| 10 | UPDATE ADR-024 integration plan (T05 tools + script-first note) | D-U6 |
| 11 | Run `pytest -m fr006`; fix regressions | V10 |
| 12 | `RW E21:S03:T05 --art` | Release |
| **N** | **[MANDATORY] Reconcile task `E21:S03:T05` status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; else `IN PROGRESS` / `BLOCKED`. Update `Last updated`. | Task doc + story checklist + kboard |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E21:S03:T05 --art`** only.

### 4.1 Files to create or modify

**Create:**

- `packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py`
- `packages/frameworks/workflow-mgt/scripts/sync_locale_keys.py`
- `tests/test_translation_management_tools.py`
- `docs/documentation/user-docs/translation-management-tools.md`
- `docs/implementation-cycles/IPP-E21S03T05-translation-management-tools.md` (this plan)

**Modify:**

- `docs/governance/standards/translation-workflow-and-review.md`
- `docs/documentation/user-docs/contributing-translations.md`
- `docs/governance/standards/translatable-content-inventory.md`
- `docs/governance/standards/translatable-content-registry.yaml`
- `packages/frameworks/kanban/locales/README.md`
- `packages/frameworks/workflow-mgt/locales/README.md`
- `greenfield-install/packages/frameworks/{kanban,workflow-mgt}/locales/README.md`
- `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md`
- `docs/project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T05-add-translation-management-tools.md`
- `docs/project-management/kanban/kboard.md` (RW Step 7)

### 4.2 Dependency order

1. Core validation logic (shared helpers if needed, colocated or thin module) → 2. Sync script (may import parity helpers) → 3. Tests → 4. Documentation → 5. Cross-links → 6. RW

### 4.3 Script interface sketch

**`validate_locale_translations.py`**

```text
python packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py \
  [--package kanban|workflow-mgt|all] [--locale CODE] [--strict]
```

Checks per locale:

- All `manifest.yaml` registered paths exist on disk
- Each `keys/*.yaml`: parses; keys match en-GB set; every `{{token}}` in en-GB value appears in target value
- Optional: warn on identical-to-en-GB values for non-English locales (advisory, not failing)

**`sync_locale_keys.py`**

```text
python packages/frameworks/workflow-mgt/scripts/sync_locale_keys.py \
  --target es [--package all] [--dry-run]
```

- For each keys file: add keys present in en-GB but absent in target; copy en-GB string values; update `_meta.locale`

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/governance/standards/translation-workflow-and-review.md` | Add §Management tools; workflow integration table; remove T05 from Out of scope | RF6 |
| D-U2 | `docs/documentation/user-docs/contributing-translations.md` | Step 3: run validate script before PR | RF6 |
| D-U3 | `docs/governance/standards/translatable-content-inventory.md` | T05 handoff row | RF7 |
| D-U4 | `docs/governance/standards/translatable-content-registry.yaml` | Header link to maintainer tools | RF7 |
| D-U5 | `packages/frameworks/*/locales/README.md` (+ greenfield) | Management tools § with three commands | RF3, RF6 |
| D-U6 | `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md` | Integration plan T05 row | §2.5 REQUIRED |
| D-U7 | T05 task doc | IPP links; AC checkboxes on completion | Phase 8 |
| D-U8 | `docs/project-management/kanban/fr-br/FR-006-*.md` | T05 anchor when released | Step 12 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py` | Structural validation CLI | RF1 |
| D-C2 | `packages/frameworks/workflow-mgt/scripts/sync_locale_keys.py` | Key sync CLI | RF2 |
| D-C3 | `tests/test_translation_management_tools.py` | Automated verification | §3 |
| D-C4 | `docs/documentation/user-docs/translation-management-tools.md` | Maintainer guide | RF6 |
| D-C5 | `docs/implementation-cycles/IPP-E21S03T05-translation-management-tools.md` | This IPP | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| `locale-key-conventions.md` | NONE — reference only |
| `scaffold_locale_trees.py` | NONE — document in D-C4/D-U5 (already exists) |
| Completeness dashboards | NONE — deferred to T06 |
| Pre-commit hook for validate | NONE — optional follow-on; not required for T05 AC |
| `adk locale validate` subcommand | NONE — script-first decision; revisit if UX feedback |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | ---------------------- | --------- | ------------- |
| D-C4 | `docs/documentation/user-docs/translation-management-tools.md` | NOT_APPLICABLE | Internal maintainer KB | evergreen | contributing-translations, translation-workflow-and-review, package READMEs |
| D-C5 | `docs/implementation-cycles/IPP-E21S03T05-translation-management-tools.md` | NOT_APPLICABLE | Planning artifact | evergreen | T05 task doc |
| D-C1–D-C3 | Under `packages/` and `tests/` | NOT_APPLICABLE | Code/tests | evergreen | D-C4, package READMEs |
| D-U1 | `docs/governance/standards/translation-workflow-and-review.md` | NOT_APPLICABLE | Governance | evergreen | inventory, ADR-024 |
| D-U6 | ADR-024 | NOT_APPLICABLE | Architecture | evergreen | FR-006, IPP §2.5 |

---

## 7. Success / verification criteria

- [ ] `validate_locale_translations.py` available; clean repo passes; `--strict` fails on injected parity break (tests)
- [ ] `sync_locale_keys.py` adds missing keys without clobbering existing values (tests)
- [ ] `scaffold_locale_trees.py` documented as third tool in maintainer guide
- [ ] Maintainer guide published (D-C4) with copy-paste examples
- [ ] Contributor workflow references validate step (D-U2)
- [ ] Inventory/registry handoff rows updated (D-U3–D-U4)
- [ ] ADR-024 integration plan updated (D-U6)
- [ ] `pytest -m fr006` green (V10)
- [ ] IPP ↔ task doc bidirectional links
- [ ] `RW E21:S03:T05 --art` after implementation
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason

---

## References

- [T05 task doc](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T05-add-translation-management-tools.md)
- [translation-workflow-and-review.md](../governance/standards/translation-workflow-and-review.md)
- [IPP-E21S03T04](IPP-E21S03T04-translation-workflow-review.md)
- [scaffold_locale_trees.py](../../packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [locale-file-structure-conventions.md](../governance/standards/locale-file-structure-conventions.md)
- [locale-key-conventions.md](../governance/standards/locale-key-conventions.md)
