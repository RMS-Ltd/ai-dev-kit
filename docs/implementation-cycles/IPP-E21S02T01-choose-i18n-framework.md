---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S02:T01 — Planning: Choose i18n framework/library (IPW)

**Host Task:** [`T01-choose-i18n-frameworklibrary.md`](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md) **(E21:S02:T01)**  
**Planning for:** [FR-006 Phase 2](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [E21:S02](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md)  
**Status:** Complete — released `v0.21.2.1+1` (`RW E21:S02:T01 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Evaluate viable i18n approaches for ai-dev-kit (Python CLI/installers + markdown-heavy content + future portal) | T01 scope; FR-006 Phase 2 |
| RF2 | Select one canonical strategy with documented rationale | T01 AC |
| RF3 | Produce framework evaluation document (candidate matrix + scoring) | T01 deliverable |
| RF4 | Produce integration plan mapping decision → S02:T02–T07 and S03+ | T01 deliverable; S02 story |
| RF5 | Preserve backward compatibility with Phase 1 (`ai-dev-kit-config.yaml`, manifests, `resolve_locale_asset`, `fr006` tests) | S01 COMPLETE; ADR-024 §Backward compat |
| RF6 | Address FR-006 Phase 2: multi-language locales, translation keys, fallback, translator workflow | FR-006 §Phase 2 |
| RF7 | Flesh T01 task doc and wire IPP/ADR bidirectionally | FR-016; IPW Phase 8 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Minimize new runtime dependencies; framework vendored to adopters | FR-006 maintainability; evaluation matrix |
| RNF2 | Markdown templates remain diff-friendly for agents and translators | FR-006; C1 rationale |
| RNF3 | Translation lookup &lt;100ms with documented caching path | FR-006 performance |
| RNF4 | Release via `RW E21:S02:T01 --art` only (BUILD +1; no `--dpz` for functional release) | BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** Phase 1 `localisation_config.py` public read/resolve APIs remain callable without breaking changes; `en-GB` default preserved.
- **In scope:** Evaluation matrix, ADR-024, integration handoffs, structural verification (V1–V8), kanban/doc wiring.
- **Out of scope:** Locale directory implementation (T02), detection/switching/formatting/key APIs (T03–T07), non-English content translation (S03–S07), portal i18n implementation.

### Phase 1 asset inventory (evidence)

| Asset | Path | Role |
| ----- | ---- | ---- |
| Config example | `packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml` | `localisation.language` / `variant` |
| Resolver | `packages/frameworks/workflow-mgt/scripts/localisation_config.py` | Read, manifest, asset resolution |
| Kanban locales | `packages/frameworks/kanban/locales/` | 8 intake templates × en-GB/en-US |
| Workflow locales | `packages/frameworks/workflow-mgt/locales/` | RW scaffolds × en-GB/en-US |
| Tests | `pytest -m fr006` (6 modules) | Phase 1 regression bundle |

---

## 2. Specification

### 2.1 Goal

Establish a **single authoritative i18n strategy** (ADR-024) so E21:S02:T02+ can implement structure, keys, detection, and formatting without re-litigating framework choice.

**Selected strategy:** **C1 Hybrid extension** — retain manifest + whole-file markdown; add YAML key catalogs; adopt Babel for formatting only (S02:T05).

### 2.2 Specification mapping

| Requirement | Specification artifact |
| ----------- | ---------------------- |
| RF1–RF3 | [i18n-framework-evaluation-matrix.md](../architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md) |
| RF2, RF4, RF5, RF6 | [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) |
| RF7 | This IPP + updated T01 task doc |

### 2.3 Constraints

- No `localisation_config.py` behavior changes in T01 implementation slice (decision docs only).
- gettext and i18next are not primary stores; portal i18next deferred.
- Manifest v1 paths remain valid until T02 introduces v2 additively.

### 2.4 Status transition intent

- **Current task status:** `TODO`
- **Transition to IN PROGRESS:** First implementation executor step (§4 Step 1) — not IPW artifact creation alone.
- **Transition to COMPLETE:** V1–V8 pass + `RW E21:S02:T01 --art` → forensic marker `✅ COMPLETE (v0.21.2.1+1)`.
- **Atomic propagation:** Task doc + story checklist + `kboard.md` in RW Step 7.
- **Owner:** Implementation execution (FR-077).

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | C1–C4 evaluated; C1 selected |
| T2 | Reversibility | **Y** | Affects packages, adopters, S02–S07 |
| T3 | Blast radius | **Y** | workflow-mgt, kanban, greenfield-install, portal |
| T4 | Precedent | **Y** | Future locale work cites ADR-024 |
| T5 | Constraint trade-off | **Y** | Dependency vs markdown ergonomics vs CAT tools |
| T6 | Governance contract | N | No RW/IPW/UKW gate changes |
| T7 | Supersedes | N | No prior i18n ADR |

**Outcome:** **REQUIRED** — [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) created.

---

## 3. Test design

T01 is documentation/decision-only. Verification is **structural + traceability** (no `--skip-tests`).

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Evaluation matrix | C1–C4 with all criteria rows — [matrix doc](../architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md) |
| V2 | ADR | ADR-024 has Context, Decision, Consequences, backward-compat, integration handoffs |
| V3 | Integration plan | Per-task contracts for S02:T02–T07 in ADR-024 + §4.2 below |
| V4 | FR-006 traceability | Matrix §FR-006 Phase 2 traceability table |
| V5 | Backward compat | ADR-024 §Backward compatibility — no breaking S01 API |
| V6 | Bidirectional links | T01 ↔ IPP ↔ ADR ↔ matrix |
| V7 | Story S02 | T01 row references ADR-024 decision |
| V8 | Artifact guard | `tests/test_i18n_framework_decision_artifacts.py` — headings present |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E21:S02:T01` status `TODO → IN PROGRESS`** in task doc. Update `Last updated`. | Task doc `Status` = `IN PROGRESS` |
| 2 | Confirm evaluation matrix and ADR-024 on disk (IPW may pre-create; executor verifies V1–V2) | Matrix + ADR |
| 3 | Update T01 task doc: Scope, Input, Deliverable, Verification V1–V8, IPP/ADR links | Task doc |
| 4 | Update story S02 T01 row with decision one-liner | Story doc |
| 5 | Update FR-006 Phase 2 implementing-task anchor | FR-006 |
| 6 | Update `packages/frameworks/kanban/locales/README.md` Phase 2 pointer | Locales README |
| 7 | Run `tests/test_i18n_framework_decision_artifacts.py` | V8 pass |
| 8 | Run V1–V7 manual checklist | IPP §7 |
| 9 | **`RW E21:S02:T01 --art`** → target `v0.21.2.1+1` (BUILD +1 from kanban-init `v0.21.2.1+0`) | Release |
| **N** | **[MANDATORY] Reconcile status** to `COMPLETE` + `✅ COMPLETE (v0.21.2.1+1)` if V1–V8 pass; else `IN PROGRESS` / `BLOCKED`. RW Step 7 updates story/epic/kboard. | Task doc |

**RW rule (BR-097):** Post-ship verification waves use `RW E21:S02:T01 --art` only — no `--dpz`.

### 4.1 Files to create or modify

**CREATE (IPW — done):**

- `docs/implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md`
- `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md`
- `docs/architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md`
- `tests/test_i18n_framework_decision_artifacts.py`

**UPDATE (executor):**

- `docs/project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md`
- `docs/project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md`
- `docs/project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md`
- `packages/frameworks/kanban/locales/README.md`

**NONE:**

- `localisation_config.py` — T02/T06
- `greenfield-install/` — sync from T02

### 4.2 Dependency order (integration handoffs)

1. **S02:T02** — `{package}/locales/{lang}/` + manifest v2 (`templates`, `keys`, `docs` categories)
2. **S02:T03** — Detection: override → config → env → system → default
3. **S02:T04** — Switching surfaces (CLI, config rewrite, installer `--force`)
4. **S02:T05** — Babel formatting boundary (adjunct dependency)
5. **S02:T06** — `resolve_locale_key()` + `domain.section.key` convention
6. **S02:T07** — Fallback: selected → default_locale → en-GB → en-US → canonical template

### 4.3 Documentation implementation steps

1. ADR-024 + matrix (architecture SoT)
2. IPP (planning SoT)
3. T01 task doc wiring
4. Story + FR-006 anchors
5. Locales README forward pointer

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | T01 task doc | Scope, Input, Deliverable, V1–V8, links | RF7 |
| D-U2 | story-02 doc | T01 decision summary | RF4 |
| D-U3 | FR-006 | Phase 2 T01 anchor + ADR link | RF6 |
| D-U4 | kanban/locales/README.md | Phase 2 / ADR-024 pointer | RF4 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `IPP-E21S02T01-choose-i18n-framework.md` | Planning package | RF7 |
| D-C2 | `ADR-024-i18n-framework-strategy.md` | Canonical decision | RF2 |
| D-C3 | `i18n-framework-evaluation-matrix.md` | Scored candidates | RF3 |
| D-C4 | `tests/test_i18n_framework_decision_artifacts.py` | V8 guard | V8 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| No i18n architecture ADR before T01 | **CREATE** ADR-024 + matrix |
| `localisation_config.py` key API | **NONE** — specified in ADR; implemented T06 |
| Kanban EST story-01 T01 naming confusion | **NONE** — separate hygiene task |
| Portal/Docusaurus i18n | **NONE** — deferred; ADR-024 portal adjunct note |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle | Inbound links |
| ------ | -------------- | ----------- | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md` | PUBLISHED | evergreen | T01 Input/References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md` | PUBLISHED | evergreen | T01, S02, FR-006, locales README |
| D-C3 | `docs/architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md` | PUBLISHED | evergreen | ADR-024, IPP |
| D-U1–D-U4 | Kanban / package README paths | PUBLISHED | evergreen | From task + story |

---

## 7. Success / verification criteria

- [x] C1 selected with scored evaluation matrix (V1)
- [x] ADR-024 accepted with integration handoffs (V2–V3)
- [x] FR-006 Phase 2 traceability in matrix (V4)
- [x] Backward-compat section in ADR-024 (V5)
- [x] T01 ↔ IPP ↔ ADR bidirectional links (V6 — on task doc update)
- [x] Story S02 T01 references decision (V7)
- [x] `test_i18n_framework_decision_artifacts.py` passes (V8)
- [x] All §5 UPDATE items complete (IPW wiring)
- [ ] RW `v0.21.2.1+1` forensic grid after implementation release

---

## References

- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [i18n-framework-evaluation-matrix.md](../architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md)
- [FR-006](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md)
- [story-02-internationalisation-infrastructure.md](../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure.md)
- [localisation_config.py](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- [IPP-E21S01T05](IPP-E21S01T05-config-read-locale-resolution.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
