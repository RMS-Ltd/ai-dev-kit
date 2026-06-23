---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S08:T07 — Planning: Optional Obsidian editor profiles (greenfield install)

**Host Task:** [`T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md`](../kanban/epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md) **(E05:S08:T07)**  
**Planning for:** [FR-121](../kanban/fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) (F4 installer emission, F5, NF4)  
**Status:** Complete — shipped @ v0.5.8.7+1 (FR-121 wave 3)

> **IPW (Implementation Planning Workflow):** FR-121 wave 3. Depends on [IPP-E05S08T06](IPP-E05S08T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) (ADR-026 + `rw-config` schema @ v0.5.8.6+1).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Interactive installer prompt for `maintainer_editor_profile`: `none`, `obsidian-personal`, `obsidian-team` | FR-121-F5; T07 D1 |
| RF2 | `--non-interactive` and greenfield orchestrator default to `none` with no Obsidian files | T07 AC1 |
| RF3 | `generate_rw_config_yaml()` emits `documentation_surfaces` + chosen `maintainer_editor_profile` | FR-121-F4; T07 D4 |
| RF4 | `obsidian-personal`: quick-start doc only; `.obsidian/` gitignored | T07 AC2 |
| RF5 | `obsidian-team`: stable template copied; workspace/cache/plugins gitignored | T07 AC3; FR-121-NF4 |
| RF6 | Maintainer guide (`docs/maintainer/OBSIDIAN.md`) | T07 D3 |
| RF7 | Install docs describe all three options; git SoT invariant | T07 AC4; FR-121 program AC |
| RF8 | Greenfield mirror per P-GREENFIELD-SYNC | T07 D5 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Git remains maintainer KB SoT in all profiles | ADR-026 |
| RNF2 | Team profile commits only stable `.obsidian/` config | FR-121-NF4 |
| RNF3 | Locale keys via en-GB + `sync_locale_keys.py` | Installer i18n convention |
| RNF4 | Post-ship: `RW E05:S08:T07 --art` only | BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** Obsidian is editor UX only; never authoritative; git paths remain SoT.
- **In scope:** RW installer, greenfield flag passthrough, templates, gitignore merge, docs, tests, ADR-026 deferral cleanup.
- **Out of scope:** Plugin marketplace curation; Docusaurus maintainer publish; Notion decommission; agent bootstrap (T06).

---

## 2. Specification

### 2.1 Goal

Complete FR-121 wave 3: adopters may opt into Obsidian as a local editor on the git vault at install time; default greenfield path remains IDE-only with `maintainer_editor_profile: none`.

### 2.2 Specification mapping from ascertained requirements

| Profile | `rw-config.yaml` | Files | Git policy |
| ------- | ---------------- | ----- | ---------- |
| `none` | `none` | None | N/A |
| `obsidian-personal` | `obsidian-personal` | `docs/maintainer/OBSIDIAN-QUICKSTART.md` | `.obsidian/` gitignored |
| `obsidian-team` | `obsidian-team` | `.obsidian/` stable JSON from template | workspace/cache/plugins gitignored; stable config committed |

### 2.3 Constraints

- Installer emits ADR-026 `documentation_surfaces` block on every new `rw-config.yaml`.
- CLI: `--maintainer-editor-profile {none,obsidian-personal,obsidian-team}` for non-interactive/CI.
- Greenfield orchestrator forwards the same flag to RW installer.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** COMPLETE (v0.5.8.7+1)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (IPP Step 1). *(Executed.)*
- **Transition trigger to COMPLETE:** All acceptance criteria evidenced + `RW E05:S08:T07 --art`. *(Executed.)*
- **Atomic propagation requirement:** Task doc status and kboard row update in same RW Step 7 change set.
- **Owner:** IDW implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | ADR-026 already chose three profiles |
| T2 | Reversibility | N | Revert installer + optional files in one task |
| T3 | Blast radius | N | Confined to installer + optional scaffolds |
| T4 | Precedent | N | Implements ADR-026 policy |
| T5 | Constraint trade-off | N | No new trade-off beyond ADR-026 |
| T6 | Governance contract | N | Does not change RW/IPW/UKW gates |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT` — governed by [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md). §5: UPDATE ADR-026 only (remove T07 deferral; link OBSIDIAN.md).

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | Installer + templates + docs in §4.1 |
| E2 | No new options | Y | Implements ADR-026 + task AC |
| E3 | Reversible | Y | Normal git revert |
| E4 | Spec elsewhere | Y | ADR-026 + task doc |
| E5 | Documented NONE | Y | §5.3 cites ADR-026 |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | `generate_rw_config_yaml` | Emits `documentation_surfaces` + `maintainer_editor_profile: none` default | RF3 |
| T2 | `apply_maintainer_editor_profile` personal | Quick-start exists; `.gitignore` has `.obsidian/` | RF4 |
| T3 | `apply_maintainer_editor_profile` team | Stable `.obsidian/` JSON; workspace paths gitignored | RF5, RNF2 |
| T4 | `apply_maintainer_editor_profile` none | No files; no gitignore change | RF2 |
| T5 | `--non-interactive` | Profile `none` | RF2 |
| T6 | `--maintainer-editor-profile obsidian-team` | Config + scaffold | RF1, RF5 |
| T7 | `INSTALL_IN_YOUR_PROJECT.md` | All three profiles mentioned | RF7 |
| T8 | Locale sync | `validate_locale_translations.py` green | RNF3 |

**Module:** `tests/test_install_obsidian_editor_profile.py` + extend `tests/test_install_release_workflow_rw_config.py`.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E05:S08:T07` `TODO → IN PROGRESS`** | Task doc |
| 2 | Installer constants, prompt, `generate_rw_config_yaml` extension | `install_release_workflow.py` |
| 3 | `apply_maintainer_editor_profile` + `merge_gitignore_lines` | `install_release_workflow.py` |
| 4 | Obsidian templates under `packages/frameworks/workflow-mgt/templates/` | template dirs |
| 5 | `--maintainer-editor-profile` CLI + greenfield forward | installer scripts |
| 6 | Locale keys (en-GB + sync) | `locales/*/keys/installer.yaml` |
| 7 | `docs/maintainer/OBSIDIAN.md`, install doc, schema, ADR-026 | docs |
| 8 | Pytest + greenfield sync | tests, `greenfield-install/` |
| 9 | `RW E05:S08:T07 --art` | Release |
| **N** | **[MANDATORY] Reconcile task status** to `COMPLETE` + forensic marker if ACs satisfied | Task doc + kboard |

**RW verification / FBU wave rule (BR-097):** `RW E05:S08:T07 --art` only.

### 4.1 Files to create or modify

**Create:** IPP (this file), `docs/maintainer/OBSIDIAN.md`, `templates/obsidian-*`, `tests/test_install_obsidian_editor_profile.py`, greenfield mirrors.

**Modify:** `install_release_workflow.py`, `install_greenfield_path.py`, locale keys, `INSTALL_IN_YOUR_PROJECT.md`, `rw-config-schema.md`, ADR-026, task T07, FR-121 at RW.

### 4.2 Dependency order

1. Templates + installer core (yaml generation, scaffold)
2. CLI + greenfield passthrough
3. Docs + locales
4. Tests + greenfield sync
5. RW + status reconciliation

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | Maintainer editor profile subsection | RF7 |
| D-U2 | `rw-config-schema.md` | `documentation_surfaces`, `maintainer_editor_profile` | RF3 |
| D-U3 | `ADR-026-git-internal-maintainer-kb-fr121.md` | Remove T07 deferral; link OBSIDIAN.md | §2.5 |
| D-U4 | Task T07 + FR-121 | IPP links; F5 checkbox at RW | Phase 8 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S08T07-*.md` | This IPP | RF10 |
| D-C2 | `docs/maintainer/OBSIDIAN.md` | Maintainer guide | RF6 |
| D-C3 | `packages/frameworks/workflow-mgt/templates/obsidian-*` | Installer scaffolds | RF4, RF5 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Adopter-public Obsidian guide | NONE — optional maintainer UX; summary in INSTALL_IN_YOUR_PROJECT only |
| `AGENTS.md` | NONE — T06 complete |
| Portal / Docusaurus | NONE — maintainer tree excluded (FR-114) |

**ADR decision:** EXEMPT per ADR-026; no new ADR row.

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S08T07-*.md` | NOT_APPLICABLE | evergreen | T07 Input/References |
| D-C2 | `docs/maintainer/OBSIDIAN.md` | NOT_APPLICABLE | evergreen | ADR-026 §5, INSTALL_IN_YOUR_PROJECT |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | NOT_APPLICABLE | evergreen | FR-080 |
| D-U2 | `packages/frameworks/workflow-mgt/config/rw-config-schema.md` | NOT_APPLICABLE | evergreen | ADR-026 |

No portal pytest AC. Greenfield sync required for `packages/frameworks/**`.

---

## 7. Success / verification criteria

- [x] Default / `--non-interactive`: no Obsidian files; `maintainer_editor_profile: none`
- [x] Personal + team profiles per task AC
- [x] `documentation_surfaces.maintainer_kb.sot: git` in generated configs
- [x] `pytest tests/test_install_obsidian_editor_profile.py tests/test_install_release_workflow_rw_config.py -q` green
- [x] `python scripts/sync_greenfield_install.py --check` green
- [x] Install docs + maintainer guide complete
- [x] IPP ↔ task bidirectional links
- [x] `RW E05:S08:T07 --art` complete

---

## References

- [FR-121](../kanban/fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [T07 task doc](../kanban/epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)
- [IPP-E05S08T06](IPP-E05S08T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)
- [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- [FR-080](../kanban/fbu/FR-080-greenfield-installation-process.md)
