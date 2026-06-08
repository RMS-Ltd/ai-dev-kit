---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S03:T01 — Planning: Identify and extract translatable content (IPW)

**Host Task:** [`T01-identify-and-extract-all-translatable-content.md`](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T01-identify-and-extract-all-translatable-content.md) **(E21:S03:T01)**  
**Planning for:** [FR-006 Phase 3+](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)  
**Status:** Complete — released `v0.21.3.1+1` (`RW E21:S03:T01 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Validator scope decision:** Option B — validators inventoried only; extraction deferred.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Canonical translatable content inventory (whole-file + keys + deferred surfaces) | Task AC, FR-006 |
| RF2 | Extract runtime short strings to YAML key catalogs (en-GB + en-US) | Task deliverable |
| RF3 | Assign stable `domain.section.name` keys; register domains in manifest | ADR-024, S02:T02 |
| RF4 | Document whole-file corpus without key-splitting markdown | ADR-024 C1 |
| RF5 | en-GB/en-US key parity | S01 pattern |
| RF6 | Greenfield mirror sync | S02 convention |
| RF7 | Orphan keys (`cli.config.*`) populated with values | Explore gap |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | ADR-024 C1 hybrid — files for prose, keys for short strings | ADR-024 |
| RNF2 | One domain per YAML file | locale-key-conventions |
| RNF3 | No new runtime dependency | ADR-024 |
| RNF4 | `pytest -m fr006` green | S02 regression |
| RNF5 | Registry usable by T06 without rework | T06 handoff |

### 1.3 Invariants and boundaries

- **In scope:** Inventory doc, registry YAML, `installer` domain (93 keys), extended `cli`/`errors`, manifest registration.
- **Out of scope:** Non-English dirs (T02), call-site wiring (T03), validator extraction (Option B deferred), completeness tooling (T06).

---

## 2. Specification

### 2.1 Goal

Establish the authoritative catalog of translatable framework content and populate en-GB/en-US YAML key catalogs for installer and CLI surfaces so T02/T03 can proceed without re-auditing the codebase.

### 2.2 Specification mapping

Implements ADR-024 S03+ handoff: translation workflow prerequisites — content identification and key assignment before major-language file trees.

### 2.3 Constraints

- Call sites (`install_release_workflow.py`, `cli/*.py`) unchanged in T01; keys populated for T03 consumption.
- Validator tier documented as `deferred` in registry.

### 2.4 Status transition intent

- **Current:** `IN PROGRESS`
- **→ COMPLETE:** All AC satisfied + `RW E21:S03:T01 --art`

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | ADR-024 C1 already selected |
| T2 | Reversibility | N | YAML additions reversible in one PR |
| T3 | Blast radius | N | Locale trees + inventory doc only |
| T4 | Precedent | N | Executes existing precedent |
| T5 | Constraint trade-off | N | No new trade-offs |
| T6 | Governance contract | N | No RW/IPW contract changes |
| T7 | Supersedes | N | Aligns with ADR-024 |

**Outcome:** `ALREADY_COVERED` — [ADR-024](../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md). No new ADR.

---

## 3. Test design

| ID | Layer | Expected check |
| -- | ----- | -------------- |
| T1 | Manifest | `installer` domain registered workflow-mgt en-GB/en-US |
| T2 | Key parity | Identical key sets per domain file across locales |
| T3 | Key naming | `domain.section.name`; `_meta.domain` matches prefix |
| T4 | Resolution | Sample keys resolve via `resolve_locale_key()` |
| T5 | Inventory | Registry lists all domains and whole-file categories |
| T6 | Registry | YAML parses; key counts match on-disk files |
| T7 | Regression | `pytest -m fr006` green |
| T8 | Structure | `test_locale_structure_v2.py` includes `installer.yaml` |

**Module:** `tests/test_translatable_content_inventory.py`

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** T01 `TODO → IN PROGRESS` | Task doc |
| 2 | Audit installer, CLI, localisation_config strings | Inventory |
| 3 | Create `installer.yaml` (93 keys) en-GB/en-US | Key files |
| 4 | Extend `cli.yaml` (+18), `errors.yaml` (+3) | Key files |
| 5 | Register `installer` in manifest | manifest.yaml |
| 6 | Create inventory + registry docs | Governance |
| 7 | Update locale READMEs, file-structure conventions | Docs |
| 8 | Sync greenfield-install | Mirror |
| 9 | Add inventory tests; run fr006 | Tests |
| 10 | `RW E21:S03:T01 --art` | Release |
| **N** | **[MANDATORY]** Reconcile status to actual state | Task doc + kboard |

### 4.1 Files created or modified

See inventory doc §Handoffs. Call sites deferred to T03.

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/implementation-cycles/IPP-E21S03T01-*.md` | CREATE |
| D-C2 | `docs/governance/standards/translatable-content-inventory.md` | CREATE |
| D-C3 | `docs/governance/standards/translatable-content-registry.yaml` | CREATE |
| D-U1 | `locale-file-structure-conventions.md` | UPDATE (inventory link) |
| D-U2 | `packages/frameworks/*/locales/README.md` | UPDATE |
| D-U4 | T01 task doc | UPDATE |

---

## 6. Documentation housing

| Doc ID | Path | Publication | Lifecycle |
| ------ | ---- | ----------- | --------- |
| D-C2 | `docs/governance/standards/translatable-content-inventory.md` | PUBLISHED | evergreen |
| D-C3 | `translatable-content-registry.yaml` | NOT_APPLICABLE | evergreen |

---

## 7. Success / verification criteria

- [x] All translatable content identified (inventory + validator deferred tier)
- [x] Runtime strings extracted to YAML keys
- [x] Keys assigned per conventions
- [x] Content documented
- [x] Tests pass; `fr006` green
- [x] `RW E21:S03:T01 --art`

---

## References

- [translatable-content-inventory.md](../governance/standards/translatable-content-inventory.md)
- [IPP-E21S02T06](IPP-E21S02T06-locale-key-system.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
