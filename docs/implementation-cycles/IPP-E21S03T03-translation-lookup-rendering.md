---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S03:T03 — Planning: Translation lookup and rendering (IPW)

**Host Task:** [`T03-implement-translation-lookup-and-rendering.md`](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T03-implement-translation-lookup-and-rendering.md) **(E21:S03:T03)**  
**Planning for:** [FR-006 Phase 3+](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S03T01](IPP-E21S03T01-identify-extract-translatable-content.md) · [IPP-E21S03T02](IPP-E21S03T02-create-translation-files-major-languages.md)  
**Status:** Complete — released `v0.21.3.3+1` (`RW E21:S03:T03 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Scope:** Workflow-mgt installer + CLI call-site wiring (registry-aligned). Kanban install deferred.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | All registry-listed `runtime_user` keys resolve at documented call sites via `resolve_locale_key()` | translatable-content-inventory §Handoffs |
| RF2 | RW installer user-facing output uses `installer.*` / `errors.installer.*` keys | Registry `installer` domain |
| RF3 | CLI init + status surfaces use `cli.*` / `errors.cli.*` keys | Registry `cli`/`errors` |
| RF4 | Whole-file content renders for scaffold locales (`es`, …) via `render_locale_text` / `resolve_kanban_intake_template` | T02 scaffolds; ADR-024 C1 |
| RF5 | Missing per-locale key falls back per locale-fallback-conventions | S02:T07 |
| RF6 | `greenfield-install/` mirrors stay in sync | S02 convention |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | No new runtime dependencies | ADR-024 |
| RNF2 | Lookup uses in-process cache; no installer/CLI regression | FR-006 NFR |
| RNF3 | `pytest -m fr006` remains green | S02 regression |
| RNF4 | Test assertion strings remain English where testing behavior | Inventory §Out of scope |

### 1.3 Invariants and boundaries

- **Invariants:** ADR-024 C1 hybrid; key naming per locale-key-conventions; fallback chain unchanged.
- **In scope:** `install_release_workflow.py`, `localisation_config.py` (helper), `cli/commands/init.py`, `cli/utils.py`, greenfield mirrors, governance docs.
- **Out of scope:** Validator extraction; linguistic translation (S05–S07); kanban install script; T04–T06 tooling.

---

## 2. Specification

### 2.1 Goal

Connect Phase 3 translation artifacts (keys + locale trees) to runtime behavior so adopters with any FR-006 supported locale see installer/CLI messages and whole-file scaffolds resolved through ADR-024 lookup/render APIs with canonical fallback.

### 2.2 Specification mapping from ascertained requirements

Implements translatable-content-inventory T03 handoff: T01 extracted keys; T02 scaffolded trees; T03 wires call sites and proves end-to-end lookup, rendering, and fallback.

### 2.3 Constraints

- Call-site helper `locale_message()` wraps `resolve_locale_key()` with pre-config bootstrap default (`en-GB`).
- Placeholders via `substitutions` dict only — no inline English at call sites.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** IN PROGRESS
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands.
- **Transition trigger to COMPLETE:** Acceptance evidence recorded; `RW E21:S03:T03 --art`
- **Atomic propagation requirement:** Task doc status and kboard row update in same change set as RW Step 7.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | ADR-024 C1 already selected |
| T2 | Reversibility | N | Call-site revert is one PR |
| T3 | Blast radius | N | Bounded to registry source_surfaces |
| T4 | Precedent | N | Executes existing contracts |
| T5 | Constraint trade-off | N | No new trade-offs |
| T6 | Governance contract | N | No RW/IPW contract changes |
| T7 | Supersedes | N | Aligns with ADR-024 |

**Outcome:** `ALREADY_COVERED` — [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| L1 | `locale_message` deps title | Returns `installer.deps.missing_title` for en-GB |
| L2 | Scaffold whole-file | `render_locale_text` with `language="es"` returns non-empty changelog stub |
| L3 | Kanban template path | `resolve_kanban_intake_template` with es config under `kanban/locales/es/` |
| L4 | Key fallback | Missing es key resolves via chain to en-GB |
| L5 | Installer integration | `format_dependency_help` uses keys not hardcoded sentinels |
| L6 | CLI init wiring | Init success path uses `cli.init.*` keys |
| L7 | Registry parity | Key counts match on-disk YAML |
| L8 | Regression | `pytest -m fr006` green |

**Module:** `tests/test_translation_lookup_rendering.py`

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E21:S03:T03` status `TODO → IN PROGRESS`** | Task doc |
| 2 | Add `locale_message()` + CLI re-export | Helper API |
| 3 | Wire `install_release_workflow.py` to installer keys | Installer localized |
| 4 | Wire `cli/commands/init.py` + `cli/utils.py` | CLI localized |
| 5 | Update locale-switching-conventions §4 | Policy |
| 6 | Add tests; run `pytest -m fr006` | Tests |
| 7 | Sync greenfield-install; governance + README updates | Docs |
| 8 | `RW E21:S03:T03 --art` | Release `v0.21.3.3+1` |
| **N** | **[MANDATORY] Reconcile task status** to actual state | Task doc + kboard |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E21:S03:T03 --art`** only.

### 4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/localisation_config.py`
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`
- `cli/commands/init.py`, `cli/utils.py`, `cli/localisation.py`
- `tests/test_translation_lookup_rendering.py`
- `greenfield-install/` mirrors
- Governance standards + locale READMEs

### 4.2 Dependency order

1. Helper API → 2. Installer wiring → 3. CLI wiring → 4. Docs → 5. Tests → 6. RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D2 | T03 task doc | Input/References → IPP | Phase 8 |
| D3 | translatable-content-inventory.md | T03 handoff wired | Step 7 |
| D4 | translatable-content-registry.yaml | `wiring_status: complete` | Step 7 |
| D5 | locale-key-conventions.md | `locale_message` call-site § | Step 2 |
| D6 | locale-switching-conventions.md | §4 scaffold resolution | Step 5 |
| D7 | workflow-mgt/locales/README.md | T03 row + tests | Step 7 |
| D8 | kanban/locales/README.md | Phase 3 T03 row | Step 7 |
| D9 | FR-006 | T03 anchor on COMPLETE | RW |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D1 | IPP-E21S03T03-translation-lookup-rendering.md | This plan | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Kanban install strings | NONE — deferred; no T01 keys |
| Validator messages | NONE — T01 Option B deferred |
| New ADR | NONE — ADR-024 covers strategy |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D1 | docs/implementation-cycles/IPP-E21S03T03-translation-lookup-rendering.md | NOT_APPLICABLE | evergreen | T03 task doc |
| D3–D8 | docs/governance + packages/frameworks | NOT_APPLICABLE | evergreen | Inventory, READMEs |
| D2 | T03 task doc | PUBLISHED (in-repo kanban) | evergreen | IPP §References |

---

## 7. Success / verification criteria

- [x] Registry `runtime_user` keys wired at call sites (installer + CLI)
- [x] `render_locale_text` / `resolve_kanban_intake_template` work for scaffold locale `es`
- [x] Fallback chain proven when scaffold key missing
- [x] `pytest -m fr006` green including `test_translation_lookup_rendering.py`
- [x] IPP ↔ task doc bidirectional links
- [x] `RW E21:S03:T03 --art` on epic branch
- [x] All §5 UPDATE/CREATE items implemented

---

## References

- [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [translatable-content-inventory.md](../governance/standards/translatable-content-inventory.md)
- [translatable-content-registry.yaml](../governance/standards/translatable-content-registry.yaml)
- [locale-key-conventions.md](../governance/standards/locale-key-conventions.md)
- [locale-fallback-conventions.md](../governance/standards/locale-fallback-conventions.md)
- [IPP-E21S03T01](IPP-E21S03T01-identify-extract-translatable-content.md)
- [IPP-E21S03T02](IPP-E21S03T02-create-translation-files-major-languages.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
