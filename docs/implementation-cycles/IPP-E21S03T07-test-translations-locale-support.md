---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S03:T07 — Planning: Test translations and locale support (IPW)

**Host Task:** [`T07-test-translations-and-locale-support.md`](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T07-test-translations-and-locale-support.md) **(E21:S03:T07)**  
**Planning for:** [FR-006 Phase 3+](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S03T06](IPP-E21S03T06-translation-completeness-tracking.md) · [IPP-E21S01T07](IPP-E21S01T07-fr006-phase1-e2e-tests.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)  
**Status:** Complete — released `v0.21.3.7+1` (`RW E21:S03:T07 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Scope:** Test-only Phase 3 E2E verification — parametrized translation/locale/fallback tests across all nine scaffold locales, consolidated `fr006` regression bundle documentation, and E21:S03 story closure. No new production wiring.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Per-locale translation smoke: each scaffold locale resolves P0 keys (`cli.prompt.*`) and P2 scaffolds (`changelog_stub`) | Task AC; locale-rollout-matrix P0/P2 |
| RF2 | Locale support across setup paths: CLI init (`--locale`) and RW installer persist and honour configured locale | Task scope; FR-006 Phase 2 |
| RF3 | Fallback behaviour: missing keys and missing whole-file assets fall back per locale-fallback-conventions | Task AC; S02:T07 |
| RF4 | Structural corpus health: `validate_locale_translations.py --package all` passes on repo corpus | T05 handoff |
| RF5 | Completeness tooling smoke: `report_locale_completeness.py` runs for all scaffold locales | T06 handoff |
| RF6 | Test documentation: Phase 3 test matrix + regression command in locale READMEs | Task deliverable |
| RF7 | Story closure: E21:S03 checklist + AC “Translations tested” when T07 COMPLETE | Story 03 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Test-only — no new runtime APIs or installer behaviour | S01:T07 precedent |
| RNF2 | `pytest -m fr006` remains canonical regression gate | translation-workflow-and-review |
| RNF3 | Parametrized tests stay fast (temp dirs, no network) | FR-006 NFR |
| RNF4 | Assertions test behaviour (resolution, fallback), not linguistic quality | T02 interim-copy policy |
| RNF5 | No CI/GitHub Action wiring in T07 | T06 out-of-scope precedent |

### 1.3 Invariants and boundaries

- **Invariants:** ADR-024 C1 hybrid; en-GB interim copy expected until S05–S07; fallback chain unchanged.
- **In scope:** consolidated E2E test module, README test matrices, `pytest.ini` marker, ADR-024 T07 row, task/story/kboard reconciliation.
- **Out of scope:** linguistic delivery (S05–S07); CI job creation; portal i18n; rewriting T01–T06 unit tests.

---

## 2. Specification

### 2.1 Goal

Close FR-006 Phase 3 translation pipeline verification by proving all nine scaffold locales work end-to-end through ADR-024 lookup, rendering, setup-path persistence, and fallback — with a documented `fr006` regression bundle maintainers run before translation PRs.

### 2.2 Specification mapping from ascertained requirements

Implements T06 handoff (E2E reserved for T07) and FR-006 “Translations tested” story AC. Builds on T01–T06 corpus and tooling; mirrors IPP-E21S01T07 consolidated E2E pattern for Phase 3.

### 2.3 Constraints

- `SCAFFOLD_LOCALES` tuple aligned with `test_locale_scaffold_major_languages.py`.
- Representative P0 key: `cli.prompt.language_choice`.
- Interim-copy locales: assert equality with en-GB fallback, not translated prose.
- RTL (`ar`): smoke only (path resolution + key lookup).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Step 1 of §4).
- **Transition trigger to COMPLETE:** All ACs green; `RW E21:S03:T07 --art`.
- **Story:** E21:S03 → COMPLETE in same RW Step 7 reconciliation.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same change set as RW Step 7.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Consolidated E2E module established (IPP-E21S01T07) |
| T2 | Reversibility | N | Test/doc revert in one PR |
| T3 | Blast radius | N | `tests/` + docs only |
| T4 | Precedent | N | Test matrix is operational verification |
| T5 | Constraint trade-off | N | Executes ADR-024; no new strategy |
| T6 | Governance contract | N | No RW/IPW gate changes |
| T7 | Supersedes | N | Fills ADR-024 T07 slot |

**Outcome:** `EXEMPT` — implements [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) + [locale-fallback-conventions.md](../governance/standards/locale-fallback-conventions.md).

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | Confined to §4.1 file list |
| E2 | No new options | Y | S01:T07 consolidated E2E pattern |
| E3 | Reversible in one task | Y | Normal revert |
| E4 | Spec elsewhere | Y | ADR-024 + task AC |
| E5 | Documented NONE | Y | §5.3 cites governing docs |

---

## 3. Test design

**Primary module:** `tests/test_fr006_phase3_translation_locale_e2e.py`  
**Marker:** `pytest.mark.fr006`

| ID | Layer | Behaviour | Requirement |
| -- | ----- | --------- | ----------- |
| P3E1 | Config | Parametrize `SCAFFOLD_LOCALES`: `resolve_language` after config write returns mapped tag | RF2 |
| P3E2 | Keys | Parametrize: `locale_message(..., "cli.prompt.language_choice")` non-empty | RF1 |
| P3E3 | Keys/fallback | Parametrize: scaffold locale message equals en-GB (interim copy) | RF1, RF3 |
| P3E4 | Scaffolds | Parametrize: `render_locale_text(..., changelog_stub)` substituted, no `{{` | RF1 |
| P3E5 | Kanban templates | Parametrize: `resolve_kanban_intake_template` path contains `locales/{locale}` | RF1 |
| P3E6 | CLI setup | Sample locales (`es`, `fr`, `zh-CN`, `ar`): `InitCommand` `--locale` persists config | RF2 |
| P3E7 | RW setup | Sample locales: installer changelog scaffold + config persisted | RF2 |
| P3E8 | Fallback inject | Remove one key from target locale → resolves via en-GB chain | RF3 |
| P3E9 | Fallback asset | Remove scaffold file → `resolve_locale_asset` reaches en-US or canonical | RF3 |
| P3E10 | Tools | `validate_locale_translations.py --package all` exit 0 | RF4 |
| P3E11 | Tools | `report_locale_completeness.py --package all --format json` exit 0 | RF5 |
| P3E12 | Regression | Full `pytest -m fr006` green | RNF2 |

**Regression command:**

```bash
pytest -m fr006
```

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E21:S03:T07` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create IPP + wire bidirectional links in task doc | D-C3 |
| 3 | Implement `tests/test_fr006_phase3_translation_locale_e2e.py` (P3E1–P3E11) | D-C2 |
| 4 | Run `pytest -m fr006`; fix regressions | P3E12 |
| 5 | UPDATE locale README test matrices (kanban + workflow-mgt + greenfield mirrors) | D-U3, D-U4 |
| 6 | UPDATE `locale-rollout-matrix.md` — T07 E2E row | D-U6 |
| 7 | UPDATE `translation-workflow-and-review.md` — Phase 3 E2E reference | D-U7 |
| 8 | UPDATE ADR-024 integration plan T07 row | D-U8 |
| 9 | UPDATE FR-006 implementing-tasks line | D-U9 |
| 10 | UPDATE `pytest.ini` fr006 marker description | D-U10 |
| 11 | `RW E21:S03:T07 --art` → `v0.21.3.7+1` | Release |
| **N** | **[MANDATORY] Reconcile task `E21:S03:T07` → `COMPLETE`**; reconcile **E21:S03 story → COMPLETE**; RW Step 7 four-surface sync | Task + story + kboard + FR-006 |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E21:S03:T07 --art`** only.

### 4.1 Files to create or modify

**Create:**

- `docs/implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md`
- `tests/test_fr006_phase3_translation_locale_e2e.py`

**Modify:**

- `docs/project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T07-test-translations-and-locale-support.md`
- `docs/project-management/kanban/epics/epic-21/story-03-translation-and-localisation.md`
- `packages/frameworks/kanban/locales/README.md`
- `packages/frameworks/workflow-mgt/locales/README.md`
- `greenfield-install/packages/frameworks/kanban/locales/README.md`
- `greenfield-install/packages/frameworks/workflow-mgt/locales/README.md`
- `docs/governance/standards/locale-rollout-matrix.md`
- `docs/governance/standards/translation-workflow-and-review.md`
- `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md`
- `docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md`
- `pytest.ini`
- `docs/project-management/kanban/kboard.md` (RW Step 7)

### 4.2 Dependency order

1. IPP + task wiring → 2. E2E tests → 3. pytest green → 4. Documentation cross-links → 5. ADR-024 row → 6. RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U3 | `packages/frameworks/kanban/locales/README.md` | Phase 3 test matrix rows | RF6 |
| D-U4 | `packages/frameworks/workflow-mgt/locales/README.md` | Phase 3 E2E module + regression command | RF6 |
| D-U5 | `greenfield-install/.../locales/README.md` (×2) | Mirror D-U3/D-U4 | RF6 |
| D-U6 | `docs/governance/standards/locale-rollout-matrix.md` | T07 E2E verification under Completeness expectations | RF6 |
| D-U7 | `docs/governance/standards/translation-workflow-and-review.md` | Phase 3 E2E module in verification section | RNF2 |
| D-U8 | `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md` | T07 integration row | §2.5 EXEMPT update |
| D-U9 | `docs/project-management/kanban/fr-br/FR-006-*.md` | T07 anchor when released | Step 11 |
| D-U10 | `pytest.ini` | Expand fr006 marker description | RNF2 |
| D-U11 | T07 task doc + story + kboard | Status, AC, IPP links | Phase 8 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C2 | `tests/test_fr006_phase3_translation_locale_e2e.py` | Phase 3 E2E verification | §3 |
| D-C3 | `docs/implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md` | This IPP | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| CI GitHub Action for `pytest -m fr006` | NONE — document command; optional follow-on |
| `contributing-translations.md` | NONE — already links `pytest -m fr006` |
| Production API changes | NONE — T03 already wired; T07 verifies only |
| Linguistic translation (S05–S07) | NONE — story-owned delivery |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C3 | `docs/implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md` | NOT_APPLICABLE | evergreen | T07 task doc |
| D-C2 | `tests/test_fr006_phase3_translation_locale_e2e.py` | NOT_APPLICABLE | evergreen | locale READMEs |
| D-U3–D-U5 | Package `locales/README.md` | PUBLISHED | evergreen | translation-workflow |
| D-U6–D-U8 | Governance + ADR paths | PUBLISHED | evergreen | FR-006, IPP |
| D-U10 | `pytest.ini` | NOT_APPLICABLE | evergreen | translation-workflow |

---

## 7. Success / verification criteria

- [ ] P3E1–P3E11 pass locally
- [ ] `pytest -m fr006` exits 0
- [ ] Task AC: each language, locale support, fallback, test documentation
- [ ] IPP ↔ task doc bidirectional links
- [ ] ADR-024 integration plan lists T07 with module path
- [ ] E21:S03 story closed (T01–T07 COMPLETE)
- [ ] `RW E21:S03:T07 --art` completes locally
- [ ] All §5 UPDATE/CREATE items implemented

---

## References

- [T07 task doc](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T07-test-translations-and-locale-support.md)
- [IPP-E21S03T06](IPP-E21S03T06-translation-completeness-tracking.md)
- [IPP-E21S01T07](IPP-E21S01T07-fr006-phase1-e2e-tests.md)
- [localisation_config.py](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- [locale-fallback-conventions.md](../governance/standards/locale-fallback-conventions.md)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
