---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S03:T04 — Planning: Translation workflow and review process (IPW)

**Host Task:** [`T04-create-translation-workflow-and-review-process.md`](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T04-create-translation-workflow-and-review-process.md) **(E21:S03:T04)**  
**Planning for:** [FR-006 Phase 3+](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S03T01](IPP-E21S03T01-identify-extract-translatable-content.md) · [IPP-E21S03T02](IPP-E21S03T02-create-translation-files-major-languages.md) · [IPP-E21S03T03](IPP-E21S03T03-translation-lookup-rendering.md)  
**Status:** Complete — released `v0.21.3.4+1` (`RW E21:S03:T04 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Scope:** Docs-only — contributor workflow, lightweight review process, translation guidelines. No new scripts (T05).

**User decisions:** Lightweight maintainer review (native review recommended P0/P1); governance standard + user-docs guide + CONTRIBUTING link.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Document end-to-end contributor workflow for YAML keys and whole-file markdown | FR-006; ADR-024 |
| RF2 | Define PR-based submission path; en-GB source of truth; greenfield sync | ADR-024; T03 |
| RF3 | Establish review process: maintainer required; native recommended P0/P1 | User decision; S05 AC |
| RF4 | Publish translation guidelines (placeholders, key parity, do-not-translate) | FR-006; locale-key-conventions |
| RF5 | Document RW separation; `pytest -m fr006` gate; greenfield sync | T03 IPP |
| RF6 | Define completeness states (structural vs linguistic; registry fields) | registry.yaml |
| RF7 | Wire cross-links for S05–S07 locale tasks | Story 3 AC |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Docs-only — no new runtime dependencies (T05 owns tooling) | T04/T05 boundary |
| RNF2 | Discoverable via governance index, CONTRIBUTING, package READMEs | User decision |
| RNF3 | Reference locale-key-conventions — do not duplicate | DRY |
| RNF4 | `pytest -m fr006` remains green | FR-006 NFR |

### 1.3 Invariants and boundaries

- **Invariants:** ADR-024 C1 hybrid; PR-based workflow; two artifact types.
- **In scope:** Process docs, guidelines, cross-links, doc-contract tests.
- **Out of scope:** T05 tools, T06 completeness automation, S05–S07 linguistic work, validator extraction, portal i18n.

---

## 2. Specification

### 2.1 Goal

Turn FR-006 Phase 3 infrastructure (inventory, scaffold trees, lookup/rendering) into an operable human process so contributors submit locale improvements via PR, maintainers review with clear criteria, and S05–S07 tasks cite a single canonical workflow.

### 2.2 Specification mapping from ascertained requirements

Implements FR-006 “Translation workflow and management” process portion; defers management **tools** to T05 and **metrics** to T06.

### 2.3 Constraints

- Lightweight review model per user decision.
- No CAT/gettext tooling; no new i18n strategy ADR.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** IN PROGRESS (first implementation step)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands.
- **Transition trigger to COMPLETE:** Acceptance evidence recorded; `RW E21:S03:T04 --art`
- **Atomic propagation requirement:** Task doc status and kboard row update in same change set as RW Step 7.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | PR-based workflow chosen in ADR-024 |
| T2 | Reversibility | N | Policy docs revert in one PR |
| T3 | Blast radius | N | Bounded to docs + cross-links |
| T4 | Precedent | Y | S05–S07 cite workflow policy |
| T5 | Constraint trade-off | N | Policy choice, not architecture |
| T6 | Governance contract | N | No RW/IPW gate changes |
| T7 | Supersedes | N | Extends ADR-024 integration plan |

**Outcome:** `REQUIRED` (T4=Y) → **UPDATE** [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| W1 | Canonical workflow doc exists | `translation-workflow-and-review.md` present |
| W2 | Required sections present | Workflow, Review, Guidelines, Integration, Out of scope |
| W3 | User-docs guide links to standard | `contributing-translations.md` |
| W4 | Inventory handoff | T04 row in Handoffs table |
| W5 | CONTRIBUTING link | Root CONTRIBUTING.md links to guide |
| W6 | Locale README pointers | Contributing section in both package READMEs |
| W7 | Regression | `pytest -m fr006` green |

**Module:** `tests/test_translation_workflow_docs.py`

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E21:S03:T04` status `TODO → IN PROGRESS`** | Task doc |
| 2 | Create `translation-workflow-and-review.md` | D-C1 |
| 3 | Create `contributing-translations.md` | D-C2 |
| 4 | Update CONTRIBUTING.md | D-U1 |
| 5 | Update inventory, registry, rollout matrix, governance README | D-U2–D-U5 |
| 6 | Update locale READMEs (+ greenfield mirrors) | D-U7 |
| 7 | UPDATE ADR-024 integration plan | D-U6 |
| 8 | Add doc-contract tests; run `pytest -m fr006` | W1–W7 |
| 9 | `RW E21:S03:T04 --art` | Release |
| **N** | **[MANDATORY] Reconcile task status** to actual state | Task doc + kboard |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E21:S03:T04 --art`** only.

### 4.1 Files to create or modify

- `docs/governance/standards/translation-workflow-and-review.md` (CREATE)
- `docs/documentation/user-docs/contributing-translations.md` (CREATE)
- `docs/implementation-cycles/IPP-E21S03T04-translation-workflow-review.md` (CREATE)
- `tests/test_translation_workflow_docs.py` (CREATE)
- Cross-link updates per §5

### 4.2 Dependency order

1. Governance policy → 2. User-docs guide → 3. Cross-links → 4. Tests → 5. RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | CONTRIBUTING.md | Translation section | Step 4 |
| D-U2 | translatable-content-inventory.md | T04 handoff row | Step 5 |
| D-U3 | translatable-content-registry.yaml | Header workflow link | Step 5 |
| D-U4 | locale-rollout-matrix.md | Review cross-ref | Step 5 |
| D-U5 | docs/governance/README.md | Index locale standards | Step 5 |
| D-U6 | ADR-024-i18n-framework-strategy.md | S03+ workflow link | Step 7 |
| D-U7 | packages/frameworks/*/locales/README.md | Contributing § | Step 6 |
| D-U8 | T04 task doc | IPP links | Phase 8 |
| D-U9 | FR-006 | T04 anchor on release | Step 9 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | translation-workflow-and-review.md | Canonical policy | RF1–RF6 |
| D-C2 | contributing-translations.md | Contributor quick-start | RF7 |
| D-C3 | IPP-E21S03T04-translation-workflow-review.md | This plan | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| locale-key-conventions.md | NONE — reference only |
| Validator messages | NONE — Option B deferred |
| Translation management tools | Deferred to T05 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | docs/governance/standards/translation-workflow-and-review.md | NOT_APPLICABLE | evergreen | inventory, registry, ADR-024 |
| D-C2 | docs/documentation/user-docs/contributing-translations.md | NOT_APPLICABLE | evergreen | CONTRIBUTING.md |
| D-C3 | docs/implementation-cycles/IPP-E21S03T04-translation-workflow-review.md | NOT_APPLICABLE | evergreen | T04 task doc |

---

## 7. Success / verification criteria

- [x] Translation workflow documented (D-C1 + D-C2)
- [x] Review process established (maintainer required; native recommended P0/P1)
- [x] Translation guidelines created
- [x] Doc-contract tests W1–W6 pass
- [x] `pytest -m fr006` green
- [x] IPP ↔ task doc bidirectional links
- [x] ADR-024 updated
- [x] `RW E21:S03:T04 --art`
- [x] All §5 UPDATE/CREATE items implemented

---

## References

- [translation-workflow-and-review.md](../governance/standards/translation-workflow-and-review.md)
- [contributing-translations.md](../documentation/user-docs/contributing-translations.md)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [translatable-content-inventory.md](../governance/standards/translatable-content-inventory.md)
- [FR-006](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md)
- [IPP-E21S03T03](IPP-E21S03T03-translation-lookup-rendering.md)
