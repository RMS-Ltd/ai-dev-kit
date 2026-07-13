---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-13T16:01:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T46 — Planning: fynd.deals FB / BR-115 + lean PARTIAL→SUCCESS (IPW)

**Host Task:** [`T46-fynd-deals-greenfield-kma-l1-fb-intake.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T46-fynd-deals-greenfield-kma-l1-fb-intake.md) **(E06:S09:T46)**  
**Planning for:** [BR-115](../kanban/fbu/BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md) · [FB-ADK-FYND-GREENFIELD-KMA-L1](../kanban/fbu/FB-ADK-FYND-GREENFIELD-KMA-L1.md) · [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90)  
**Status:** Approved  
**Operator AC4 choice:** Code + docs — lean/vendor `scripts_path` intentional → **SUCCESS + advisory**, not PARTIAL

> **IPW (Implementation Planning Workflow):** Bidirectional wiring to host task **Input** / **References** is mandatory ([FR-042](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md)).

---

## §1 — Requirements (Ascertained Baseline)

### §1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Detect empty/placeholder-only `packages/frameworks/` as non-authoritative | BR-115 AC1 |
| RF2 | Warn and fall through to `vendor/ai-dev-kit` (or configured vendor root) when project tree unusable and vendor usable | BR-115 AC2 |
| RF3 | Prefer populated project `packages/frameworks` when installer entrypoints exist | existing precedence / BR-115 |
| RF4 | When RW install finds no project-root workflow YAML **and** lean/vendor `scripts_path` is intentional, finish **SUCCESS** with advisory (not PARTIAL); keep `ADK-I03.E90` as advisory/warning class only | T46 AC4 / F5 choice 2 |
| RF5 | Complete F2–F4 triage (BR-082 / BR-083 / BR-086 / bare `python`) with route or defer + follow-on tasks only if still open | T46 AC3 |
| RF6 | Operator docs + Install RC guidance for placeholder trap and lean SUCCESS semantics | BR-115 AC4, T46 AC4 |
| RF7 | Close #90 after AC evidence; `RW E06:S09:T46 --art` | T46 AC5–AC6 |

### §1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Edits under `packages/frameworks/**` must sync `greenfield-install/` in the same change set | FR-110 / P-GREENFIELD-SYNC |
| RNF2 | Functional release uses BUILD +1 via `RW E06:S09:T46 --art`; no `--dpz`; no `git tag -f` | BR-097 |
| RNF3 | Regression tests for empty-packages fallthrough and lean SUCCESS vs PARTIAL | BR-115 AC3, T46 AC2 |

### §1.3 Invariants and boundaries

- **Invariants:** Usable project `packages/frameworks` still wins over vendor; other non-lean warnings may still yield PARTIAL.
- **In scope:** BR-115 fallthrough; lean PARTIAL→SUCCESS; F2–F4 triage; ADR-003 UPDATE; install docs; greenfield sync; close #90; RW.
- **Out of scope:** fynd.deals adopter bootstrap (LICENSE/ADR/tests/security); UXR-029 Phase 4 / G1; fixing F2–F4 unless triage proves a one-line shared fix already in RF1/RF4 scope.

---

## §2 — Specification

### §2.1 Goal

First-pass greenfield orchestrator on prep repos with empty `packages/` succeeds against vendor without `rm -rf packages`, and lean FR-110 installs report SUCCESS (with clear advisory) when workflow YAML stays in vendor.

### §2.2 Specification mapping from ascertained requirements

**BR-115 — `resolve_frameworks_base`:**

```text
project packages/frameworks is_dir?
  ├─ no  → vendor usable? → vendor_root : project_root
  └─ yes → project tree has installer entrypoints?
        ├─ yes → project_root
        └─ no  → warn placeholder ignored → vendor usable? → vendor_root : project_root
```

- **Usable tree:** critical orchestrator entrypoints exist (at least `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` and `packages/frameworks/kanban/scripts/install_kanban_framework.py`), not merely `.gitkeep` / empty dir.
- Hook: [`resolve_frameworks_base`](../../packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py) (+ greenfield-install mirror).

**Lean PARTIAL→SUCCESS:**

- Locus: [`install_release_workflow.py`](../../packages/frameworks/workflow-mgt/scripts/install_release_workflow.py) (~1862–1900: `workflow_not_found` → `install_warnings` → PARTIAL + `ADK-I03.E90`).
- **Intentional lean:** emitted/existing `rw-config.yaml` `scripts_path` resolves under vendor (or frameworks base is vendor) **and** project-root `workflows/release-workflow/release-workflow.yaml` is absent.
- Then: do **not** add that condition to the PARTIAL-driving warning set; print advisory + optional `ADK-I03.E90:W01` (or keep E90 as non-status-changing advisory); overall installer status **SUCCESS**.
- Other warnings still may produce PARTIAL.

### §2.3 Constraints

- Must not break populated project `packages/frameworks` precedence.
- Must not treat PARTIAL→SUCCESS for missing workflow YAML when lean/vendor `scripts_path` is **not** intentional.
- Greenfield dual-tree sync required for framework script edits.

### §2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (IDW Step 1).
- **Transition trigger to COMPLETE:** Acceptance evidence recorded (TC1–TC6 green, triage written, #90 closable).
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session.
- **Owner:** Implementation execution (IDW), not planning-only IPW creation.

### §2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Fallthrough vs hard-fail with clear ADK code vs auto-`rm` packages |
| T2 | Reversibility | N | Single-task revert of resolver + installer status logic |
| T3 | Blast radius | Y | All greenfield/lean adopters via orchestrator + RW install |
| T4 | Precedent | Y | Defines what “authoritative packages tree” means going forward |
| T5 | Constraint trade-off | Y | Lean SUCCESS vs PARTIAL operability vs strictness (operator choice 2) |
| T6 | Governance contract | N | No RW/IPW/UKW gate change |
| T7 | Supersedes | N | Refines ADR-003 / FR-110; does not contradict without note |

**Outcome:** `REQUIRED` → **UPDATE** [ADR-003-greenfield-vs-brownfield-adoption.md](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) with short “authoritative packages tree” + lean SUCCESS clause (no new ADR number).

---

## §3 — Test design

| ID | Behavior / layer | Expected check | Maps to |
| -- | ---------------- | -------------- | ------- |
| TC1 | Empty `packages/frameworks/` + vendor with entrypoints | `resolve_frameworks_base` returns vendor | RF1–2 |
| TC2 | `.gitkeep`-only project frameworks + vendor | returns vendor | RF1–2 |
| TC3 | Project tree with real installer scripts | returns `project_root` | RF3 |
| TC4 | No project packages + vendor | returns vendor (existing) | RF3 |
| TC5 | RW install missing root workflow YAML + lean vendor `scripts_path` | SUCCESS + advisory, not PARTIAL | RF4 |
| TC6 | Missing workflow YAML **without** lean vendor scripts_path | still PARTIAL | RF4 negative |
| TC7 | pytest placement | `tests/workflow_mgt/test_install_greenfield_path.py` (+ RW install unit/fixture as needed) | RF1–4 |
| TC8 | Portal links (if guides edited) | `pytest tests/test_portal_br068_monorepo_links.py tests/test_portal_fr114_allowlist.py -q` | docs |

---

## §4 — Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E06:S09:T46` status `TODO → IN PROGRESS`** in task doc. Update `Last updated`. Sync kboard row status in same session. | Task doc `Status` = `IN PROGRESS` |
| 2 | Add `is_usable_frameworks_tree(root)` + revise `resolve_frameworks_base` with warn-on-fallthrough | BR-115 code path |
| 3 | Tests TC1–TC4 in `test_install_greenfield_path.py` | Red→Green for RF1–3 |
| 4 | Lean SUCCESS path in `install_release_workflow.py` (+ locale strings if needed); tests TC5–TC6 | RF4 |
| 5 | Update `install-error-codes.yaml` / emitter docs so E90 advisory vs PARTIAL semantics are clear | RF4 / RF6 |
| 6 | Docs: `INSTALL_IN_YOUR_PROJECT.md` precedence + lean SUCCESS; BR-115 / FB / T46 triage notes; ADR-003 UPDATE | RF5–RF6 |
| 7 | F2–F4 triage write-up on T46/FB (file follow-on tasks only if still open on greenfield path) | RF5 |
| 8 | `python scripts/sync_greenfield_install.py` + commit mirror with framework changes | RNF1 |
| 9 | Close #90 with summary links when AC green | RF7 |
| **10** | **[MANDATORY] Reconcile task `E06:S09:T46` status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. Then **`RW E06:S09:T46 --art`** (BUILD +1; no `--dpz`). | Task status + release |

**RW verification / FBU wave rule (BR-097):** Prescribe **`RW E06:S09:T46 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

### §4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py` (+ `greenfield-install/` mirror)
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` (+ mirror)
- `packages/frameworks/workflow-mgt/config/install-error-codes.yaml` (+ locales as needed)
- `tests/workflow_mgt/test_install_greenfield_path.py` (+ RW install tests as needed)
- `docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md`
- `INSTALL_IN_YOUR_PROJECT.md`
- `docs/kanban/fbu/BR-115-…`, `FB-ADK-FYND-…`, host task T46
- `greenfield-install/` via `sync_greenfield_install.py`

### §4.2 Dependency order

1. Status → IN PROGRESS  
2. BR-115 resolver + tests TC1–TC4  
3. Lean SUCCESS + tests TC5–TC6  
4. Error-code / locale / docs / ADR  
5. F2–F4 triage  
6. Greenfield sync  
7. Status reconcile → RW `--art` → close #90  

### §4.3 Documentation implementation steps

1. ADR-003 UPDATE (authoritative packages + lean SUCCESS)  
2. INSTALL_IN_YOUR_PROJECT.md precedence + lean advisory  
3. BR-115 / FB / T46 status and triage tables  
4. install-error-codes / installer locale strings  

---

## §5 — Documentation deliverables

### §5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md` | Authoritative packages tree + lean SUCCESS clause | RF1–4, §2.5 |
| D-U2 | `INSTALL_IN_YOUR_PROJECT.md` | Precedence wording + lean SUCCESS advisory | RF2, RF4, RF6 |
| D-U3 | `docs/kanban/fbu/BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md` | Fix attempt / AC checkboxes | RF1–3, RF6 |
| D-U4 | `docs/kanban/fbu/FB-ADK-FYND-GREENFIELD-KMA-L1.md` | Intake / triage status | RF5 |
| D-U5 | T46 host task | Status, triage, IPP link, AC evidence | all |
| D-U6 | `packages/frameworks/workflow-mgt/config/install-error-codes.yaml` (+ locales) | E90 advisory vs PARTIAL | RF4 |

### §5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E06S09T46-fynd-deals-fb-br115-lean-partial.md` | This IPP | IPW |

### §5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| New ADR number | NONE — UPDATE ADR-003 instead (§2.5) |
| FR-110 full rewrite | NONE unless a short cross-link is needed (optional pointer) |
| Portal/docs/guides path | NONE if only root `INSTALL_IN_YOUR_PROJECT.md` changes |

---

## §6 — Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E06S09T46-fynd-deals-fb-br115-lean-partial.md` | NOT_APPLICABLE | Maintainer planning package | evergreen | T46 Input/References; kboard IPP segment |
| D-U1 | `docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md` | NOT_APPLICABLE | Architecture ADR | evergreen | BR-115, IPP §2.5 |
| D-U2 | `INSTALL_IN_YOUR_PROJECT.md` | PUBLISHED | — (adopter-facing root) | evergreen | BR-115 AC4 |
| D-U3–D-U5 | kanban fbu + task | NOT_APPLICABLE | Kanban SoT | evergreen | bidirectional FBU↔task |
| D-U6 | workflow-mgt config/locales | NOT_APPLICABLE | Framework config | evergreen | installer runtime |

**Greenfield:** any §6 path under `packages/frameworks/` → §4/§7 include `python scripts/sync_greenfield_install.py` + mirror commit.

---

## §7 — Success / verification criteria

- [ ] TC1–TC6 green via pytest
- [ ] Orchestrator fixture: empty packages + vendor → no ADK-I01 hard-stop from missing scripts
- [ ] Lean RW install: SUCCESS + advisory when vendor `scripts_path` intentional; PARTIAL retained when not lean
- [ ] F2–F4 triage recorded; follow-on tasks filed only if still open
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 `PUBLISHED` paths exist and are linked from task doc
- [ ] **Greenfield:** `python scripts/sync_greenfield_install.py --check` green; mirror committed in same change set
- [ ] #90 closable with intake summary; **`RW E06:S09:T46 --art`** after COMPLETE

---

## References

- Host task: [E06:S09:T46](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T46-fynd-deals-greenfield-kma-l1-fb-intake.md)
- [BR-115](../kanban/fbu/BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md)
- [FB-ADK-FYND-GREENFIELD-KMA-L1](../kanban/fbu/FB-ADK-FYND-GREENFIELD-KMA-L1.md)
- [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90)
- [FR-110](../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [FR-135](../kanban/fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md)
- [ADR-003](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [UXR-029](../kanban/fbu/UXR-029-adk-install-path-experiment.md)
- Prior intake pattern: [E06:S09:T43](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T43-starborn-legacy-attempt-12-intake-programme-wind-down.md)
