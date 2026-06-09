---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T20:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S04:T01 — Planning: Research cultural requirements for target locales (IPW)

**Host Task:** [`T01-research-cultural-requirements-for-target-locales.md`](../kanban/epics/epic-21/story-04-cultural-adaptation/T01-research-cultural-requirements-for-target-locales.md) **(E21:S04:T01)**  
**Planning for:** [FR-006 Phase 2](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [E21:S04](../kanban/epics/epic-21/story-04-cultural-adaptation.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)  
**Status:** Complete — released `v0.21.4.1+1` (`RW E21:S04:T01 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Scope:** Docs-only — desk-research-backed cultural requirements matrix for nine FR-006 locales; structural pytest contract. No runtime code, translation YAML edits, RTL, or formatting implementation.

**Research depth:** Structured desk research with per-locale matrix, evidence notes, and explicit gaps for native/professional review (user decision, IPW 2026-06-09).

**T01 vs T07 boundary:** T01 owns research findings, recommendations mapped to T02–T06, and a **draft guideline framework**. T07 publishes polished contributor-facing cultural guidelines consuming T01.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Per-locale cultural requirements matrix covering all nine target locales (`es`, `fr`, `de`, `pt`, `zh-CN`, `zh-TW`, `ja`, `ru`, `ar`) | Task AC; [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md) |
| RF2 | Cultural considerations documented (tone, formality, examples, sensitivities, imagery) | Task deliverable |
| RF3 | Adaptation recommendations with explicit downstream task mapping (E21:S04:T02–T06) | Task AC |
| RF4 | Draft cultural guideline framework (section outline for T07 — not final contributor prose) | Task AC "Cultural guidelines established" |
| RF5 | Cross-links to existing i18n standards (inventory, rollout matrix, translation workflow, formatting conventions) | FR-006 Phase 2 |
| RF6 | Documented gaps where native/professional review is required before ship | [translation-workflow-and-review.md](../governance/standards/translation-workflow-and-review.md) |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Maintainer governance surface only — **not** Docusaurus adopter-public (FR-114) | ADR-024; FR-114 |
| RNF2 | Desk research depth: structured matrix with evidence notes; no claim of native-speaker verification | User decision (IPW) |
| RNF3 | Follow Epic 21 doc patterns (frontmatter, `policy_salience`, evergreen lifecycle) | S03 precedent |
| RNF4 | Structural pytest contract (pattern: `tests/test_translation_workflow_docs.py`) | FR-006 NFR |
| RNF5 | No `packages/frameworks/**` runtime changes — doc + test only | T01 scope |

### 1.3 Invariants and boundaries

- **Invariants:** Nine-locale set matches [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md); recommendations must cite owner task IDs; desk research labelled as such.
- **In scope:** Governance standard `locale-cultural-requirements.md`, doc-contract tests, cross-link updates, kanban status on implementation.
- **Out of scope:** RTL implementation (T03), `locale_formatting.py` changes (T05), YAML translation edits (S05–S07), portal locale UI, Hebrew (`he`) locale tree (note as T03 extension only), contributor polish guide (T07).

---

## 2. Specification

### 2.1 Goal

Establish the authoritative desk-research baseline for cultural adaptation across FR-006 target locales so E21:S04:T02–T06 can implement UI, RTL, content, and formatting changes without re-researching locale norms, and E21:S04:T07 can publish contributor guidelines from a stable source.

### 2.2 Specification mapping from ascertained requirements

Implements FR-006 Phase 2 "Cultural adaptations" research prerequisite ([FR-006](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) Phase 2 AC). Formalizes the nine-locale scaffold from S03:T02 into a cultural dimension matrix with prioritized recommendations — parallel to how S03:T01 inventory enabled translation workflow (S03:T04).

### 2.3 Constraints

- **English baseline:** `en-GB` / `en-US` comparison documents cultural delta only (S01 already ships variants).
- **Formatting:** Cite [locale-formatting-conventions.md](../governance/standards/locale-formatting-conventions.md); defer code to T05.
- **Review:** Align P0–P3 tiers from rollout matrix; flag native/pro gaps per translation workflow policy.
- **Branch:** Implementation and release on `epic/21-internationalisation-localisation`.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO` (kanban-init filed @ `v0.21.4.1+0`)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** All task AC satisfied; `tests/test_locale_cultural_requirements.py` green; `pytest -m fr006` green; `RW E21:S04:T01 --art`.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same change set as RW Step 7.
- **Owner:** IDW / implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Executes FR-006 Phase 2 research; no architectural fork |
| T2 | Reversibility | N | Markdown-only deliverables |
| T3 | Blast radius | N | Governance docs under `docs/governance/standards/` |
| T4 | Precedent | N | Mirrors S03 doc + pytest pattern; extends existing standards |
| T5 | Constraint trade-off | N | No new runtime constraint |
| T6 | Governance contract | N | No RW/IPW gate changes |
| T7 | Supersedes | N | Extends ADR-024 / locale standards |

**Outcome:** `ALREADY_COVERED` — [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md). No new ADR.

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | One governance standard owns cultural research |
| E2 | No new options | Y | Desk research matrix is prescribed |
| E3 | Reversible in one task | Y | Doc revert in one PR |
| E4 | Spec elsewhere | Y | FR-006 Phase 2 + locale-rollout-matrix |
| E5 | Documented NONE | Y | ADR exemption recorded in §2.5 |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| C1 | Canonical cultural requirements doc exists | `docs/governance/standards/locale-cultural-requirements.md` present |
| C2 | Nine locale subsections | Dedicated `###` headings or table rows for `es`, `fr`, `de`, `pt`, `zh-CN`, `zh-TW`, `ja`, `ru`, `ar` |
| C3 | Required top-level sections | Research method, dimension catalog, per-locale matrix, adaptation recommendations, guideline framework (draft), handoffs |
| C4 | Recommendations map to downstream tasks | Table references at least one of `E21:S04:T02`–`T06` |
| C5 | Cross-links outbound | Doc links to `locale-rollout-matrix.md` and `translation-workflow-and-review.md` |
| C6 | Cross-links inbound | `locale-rollout-matrix.md` links to `locale-cultural-requirements.md` |
| C7 | Regression | `pytest -m fr006` green |

**Module:** `tests/test_locale_cultural_requirements.py`  
**Marker:** `pytest.mark.fr006`

No `--skip-tests` — verification is structural doc contract, not native-language QA.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E21:S04:T01` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create `tests/test_locale_cultural_requirements.py` with failing assertions (Red) | C1–C6 tests |
| 3 | Create `locale-cultural-requirements.md` skeleton + frontmatter + `policy_salience` | D-C1 |
| 4 | Desk research: dimension catalog + per-locale matrix (structured depth) | RF1–RF2 |
| 5 | Adaptation recommendations table with T02–T06 ownership | RF3 |
| 6 | Draft guideline framework section (T07 handoff) | RF4 |
| 7 | Update `locale-rollout-matrix.md` and `translatable-content-inventory.md` cross-links | D-U1, D-U2 |
| 8 | Run `pytest tests/test_locale_cultural_requirements.py -q` then `pytest -m fr006 -q` (Green) | C7 |
| 9 | `RW E21:S04:T01 --art` on `epic/21-internationalisation-localisation` | Release |
| **N** | **[MANDATORY] Reconcile task status** to actual state: `COMPLETE` + `✅ COMPLETE (v0.21.4.1+{N})` if all AC satisfied; else `IN PROGRESS`. Update kboard row. | Task doc + kboard |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E21:S04:T01 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

### 4.1 Files to create or modify

| Path | Action |
| ---- | ------ |
| `docs/governance/standards/locale-cultural-requirements.md` | CREATE |
| `tests/test_locale_cultural_requirements.py` | CREATE |
| `docs/governance/standards/locale-rollout-matrix.md` | UPDATE |
| `docs/governance/standards/translatable-content-inventory.md` | UPDATE |
| `docs/kanban/epics/epic-21/story-04-cultural-adaptation/T01-research-cultural-requirements-for-target-locales.md` | UPDATE (status, version anchor) |
| `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md` | UPDATE (checklist on complete) |
| `docs/kanban/kboard.md` | UPDATE (RW Step 7) |

**No greenfield sync** — no `packages/frameworks/**` edits.

### 4.2 Dependency order

1. Tests (Red) → 2. Cultural requirements doc → 3. Cross-link updates → 4. Tests (Green) → 5. RW

### 4.3 Documentation implementation steps

1. Create `locale-cultural-requirements.md` with sections 1–9 per §2 spec (see primary artifact structure below).
2. Populate per-locale tables using shared dimension catalog.
3. Add recommendations backlog before handoffs section.
4. Update rollout matrix "Completeness expectations" with cultural requirements row.
5. Add inventory Handoffs row for E21:S04:T01.

#### Primary artifact section outline (`locale-cultural-requirements.md`)

1. Purpose / authority — FR-006 Phase 2, E21:S04:T01
2. Research method — desk research; native/pro review gaps
3. Dimension catalog — date/time/number/currency; RTL; tone/formality; examples/metaphors; imagery; naming/inclusivity; translation review tier
4. Per-locale matrix — one subsection per locale with table rows per dimension
5. English baseline — `en-GB` vs `en-US` cultural delta (not spelling — S01 owns spelling)
6. Adaptation recommendations — prioritized table: Priority | Recommendation | Owner task | Evidence gap?
7. Guideline framework (draft) — bullet outline for T07
8. Handoffs — links to E21:S04:T02–T07 task docs
9. References — ADR-024, FR-006, locale standards

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/governance/standards/locale-rollout-matrix.md` | Completeness expectations: cultural requirements link | Step 7; RF5 |
| D-U2 | `docs/governance/standards/translatable-content-inventory.md` | Handoffs table: E21:S04:T01 row | Step 7; RF5 |
| D-U3 | `docs/kanban/epics/epic-21/story-04-cultural-adaptation/T01-*.md` | Status, version anchor, IPP links | Steps 1, N |
| D-U4 | `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md` | Checklist status on T01 complete | Step N |
| D-U5 | `docs/kanban/kboard.md` | Row version/status on RW Step 7 | Step 9 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/governance/standards/locale-cultural-requirements.md` | Canonical cultural research + recommendations | RF1–RF4 |
| D-C2 | `tests/test_locale_cultural_requirements.py` | Doc-contract tests | C1–C7 |
| D-C3 | `docs/implementation-cycles/IPP-E21S04T01-research-cultural-requirements-target-locales.md` | This plan | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Contributor cultural guidelines (polished) | Deferred to **E21:S04:T07** — T01 supplies draft framework only |
| `locale-formatting-conventions.md` | NONE — reference only; implementation in T05 |
| `translation-workflow-and-review.md` | NONE — reference only; cultural review tiers cited |
| Adopter-public Docusaurus page | NONE — maintainer governance per FR-114 |
| Hebrew (`he`) locale | NONE in matrix — note in RTL dimension as T03 extension |
| `docs/governance/README.md` index | OPTIONAL — add locale-cultural-requirements link if index lists locale standards (follow S03 pattern if present) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------ | --------- | -------------------- |
| D-C1 | `docs/governance/standards/locale-cultural-requirements.md` | NOT_APPLICABLE | Maintainer governance; excluded from Docusaurus allowlist (FR-114) | evergreen | rollout matrix, inventory, T01 task doc |
| D-C2 | `tests/test_locale_cultural_requirements.py` | NOT_APPLICABLE | Test module | evergreen | IPP §7 |
| D-C3 | `docs/implementation-cycles/IPP-E21S04T01-research-cultural-requirements-target-locales.md` | NOT_APPLICABLE | Planning artifact | evergreen | T01 Input, References |
| D-U1 | `docs/governance/standards/locale-rollout-matrix.md` | NOT_APPLICABLE | Maintainer governance | evergreen | existing inventory links |
| D-U2 | `docs/governance/standards/translatable-content-inventory.md` | NOT_APPLICABLE | Maintainer governance | evergreen | existing handoffs |

**Housing rules:** One authoritative doc per topic (`locale-cultural-requirements.md` owns research; T07 owns contributor guidelines). No portal paths — no BR-068 blob URL requirement for this task.

---

## 7. Success / verification criteria

- [ ] All four task AC bullets satisfied with evidence in `locale-cultural-requirements.md`
- [ ] Nine locales present in per-locale matrix (C2)
- [ ] Recommendations table maps to E21:S04:T02–T06 (C4)
- [ ] `pytest tests/test_locale_cultural_requirements.py -q` green
- [ ] `pytest -m fr006 -q` green
- [ ] Bidirectional links: task doc ↔ IPP ↔ cultural requirements doc
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] Release: `RW E21:S04:T01 --art` on `epic/21-internationalisation-localisation`
- [ ] **Portal:** N/A — no §6 path under `docs/guides/` or `docs/documentation/`
- [ ] **Greenfield:** N/A — no §6 path under `packages/frameworks/`

---

## References

- [T01 task doc](../kanban/epics/epic-21/story-04-cultural-adaptation/T01-research-cultural-requirements-for-target-locales.md)
- [E21:S04 story](../kanban/epics/epic-21/story-04-cultural-adaptation.md)
- [FR-006](../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md)
- [translation-workflow-and-review.md](../governance/standards/translation-workflow-and-review.md)
- [locale-formatting-conventions.md](../governance/standards/locale-formatting-conventions.md)
- [translatable-content-inventory.md](../governance/standards/translatable-content-inventory.md)
- [IPP-E21S03T04](IPP-E21S03T04-translation-workflow-review.md) — precedent doc + pytest pattern
- [specification-and-planning-artifacts-policy.md](../governance/standards/specification-and-planning-artifacts-policy.md)
- [dev-kit-ipw-ipp-vs-icw-artifacts.md](../governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md)
