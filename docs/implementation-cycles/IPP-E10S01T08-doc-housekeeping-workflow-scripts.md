---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T08 — Planning: Doc Housekeeping Workflow and Scripts (IPW)

**Host Task:** [`T08-implement-doc-housekeeping-workflow-and-scripts.md`](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md) **(E10:S01:T08)**  
**Planning for:** [T05 gap log GAP-DOCLIFE-STRUCT-001/002/003](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md) · [T06 remediation R1](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md) · [FR-110](../kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)  
**Status:** Implementation complete — released v0.10.1.8+1 (RW `--art`)  
**Branch:** `epic/10-doc-lifecycle-framework`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Create `workflows/doc-housekeeping-workflow.yaml` implementing policy Scan→Filter→Analyze→Determine→Execute→Log | T08 AC1; T05 GAP-DOCLIFE-STRUCT-001; `doc-lifecycle-policy.md` §Housekeeping Process; `workflow-mgt-integration.md` §Step 4 |
| RF2 | Create `scripts/validate_lifecycle_metadata.py` enforcing all five required metadata fields and cross-field invariants | T08 AC2; T05 GAP-DOCLIFE-STRUCT-002; `doc-lifecycle-metadata-spec.md` §Metadata Schema |
| RF3 | Create `scripts/housekeeping_scanner.py` with expired-document detection and reference-aware cleanup (protect evergreen/changelog links; auto-upgrade to `archive`) | T08 AC3; T05 GAP-DOCLIFE-STRUCT-003; T03 D8; GAP-DOCLIFE-BEHV-001 |
| RF4 | Workflow YAML step handlers invoke package scripts with configurable `docs_root`, `archive_dir`, dry-run default | T02 §6; E02 workflow-mgt YAML patterns (`changelog-management-workflow.yaml`, `update-kanban-workflow.yaml`) |
| RF5 | Update README and PACKAGE_OVERVIEW package trees — remove `(future)` labels for workflows/scripts; reflect on-disk reality | T08 Deliverable; GAP-DOCLIFE-DOC-001 partial overlap |
| RF6 | FR-110 greenfield-install mirror parity after canonical package changes via `sync_greenfield_install.py` | T08 AC4; FR-110-F2; `scripts/greenfield-install-manifest.yaml` |
| RF7 | Verification evidence for reference-aware cleanup observability (scanner report / test output) | T08 Deliverable; closes GAP-DOCLIFE-BEHV-001 dependency |
| RF8 | IPP bidirectionally linked from T08 before code implementation | T08 AC5; FR-083 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Scripts are **stdlib + PyYAML only** (match existing workflow-mgt validator conventions); no new pip dependencies beyond PyYAML already used in repo | T03 D11/D12 context; workflow-mgt script patterns |
| RNF2 | **Dry-run by default** for destructive actions (delete/move); `--execute` required for mutations | Policy §Protection Rules; safe adopter defaults |
| RNF3 | Exit codes: `0` = pass/clean scan; `1` = validation failures or scan errors; `2` = usage/arg errors | workflow-mgt validation script conventions |
| RNF4 | Workflow YAML follows workflow-mgt schema: `name`, `version`, `type`, `description`, `config`, `steps[]` with `id`, `handler`, `dependencies` | E02:S13 workflow patterns |
| RNF5 | FR-110 sync: `python scripts/sync_greenfield_install.py` + `diff -rq` canonical ↔ mirror must exit 0 | FR-110-F2; CI greenfield-install guard |
| RNF6 | RW prescription: **`RW E10:S01:T08 --art`** only (BR-097) | `.cursorrules`; BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Five-field metadata schema is package SoT (`doc-lifecycle-metadata-spec.md`); scripts MUST NOT relax to `.cursorrules` 2+3 model.
  - Reference-aware cleanup MUST NOT delete docs referenced from `lifecycle: evergreen` sources or released changelogs.
  - Canonical artefact root: `packages/frameworks/doc-lifecycle/` (not `workflow-mgt/workflows/` — metadata-spec cross-ref path is stale; implementation uses package-local `workflows/`).
  - greenfield-install mirror is generated — never hand-edit `greenfield-install/packages/frameworks/doc-lifecycle/` directly.
- **In scope:** Workflow YAML + two scripts + package doc tree updates + pytest + FR-110 sync + IPP/T08 wiring + RW release.
- **Out of scope:**
  - ADR dual SoT merge ([E10:S01:T09](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T09-sync-architecture-adr-dual-sot.md))
  - Cross-package `DocumentLifecycleValidator` fix ([E10:S01:T10](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md))
  - Mass repo frontmatter migration (GAP-DOCLIFE-BEHV-002)
  - `.cursorrules` five-field alignment (T06 R4 — separate wave)
  - RW agent guide lifecycle mapping (T06 R4 — separate wave)
  - workflow-mgt `workflow-registry.yaml` registration (optional follow-on; not blocking T08 AC)

---

## 2. Specification

### 2.1 Goal

Materialize the three **documented-future** automation artefacts for the Document Lifecycle package (`packages/frameworks/doc-lifecycle/`) so adopters receive an on-disk housekeeping workflow and executable validation/scan scripts aligned with package policy prose. This closes GAP-DOCLIFE-STRUCT-001/002/003, makes reference-aware cleanup **observable** (GAP-DOCLIFE-BEHV-001), and restores FR-110 mirror parity for the expanded package tree.

### 2.2 Specification mapping from ascertained requirements

#### 2.2.1 `workflows/doc-housekeeping-workflow.yaml` (RF1, RF4)

**Path:** `packages/frameworks/doc-lifecycle/workflows/doc-housekeeping-workflow.yaml`

**Type:** `doc_housekeeping` — hybrid workflow: deterministic script phases + optional agent execution for Step 6 logging (mirrors CMW deterministic model with agent-capable final step per policy).

**Invocation:** `DHKW` or `Doc Housekeeping Workflow` (manual/periodic); document trigger in workflow `description` and integration guide.

**Config block (prescribed):**

```yaml
config:
  docs_root: docs
  archive_dir: docs/Archive
  graveyard_dir: docs/_graveyard
  main_changelog: CHANGELOG.md
  validate_script: scripts/validate_lifecycle_metadata.py
  scanner_script: scripts/housekeeping_scanner.py
  dry_run_default: true
  use_rw_config: false  # doc-lifecycle is standalone; paths overridable via CLI flags
```

**Steps (map 1:1 to policy §Automated Housekeeping Workflow):**

| Step ID | Name | Handler | Script / action | Policy phase |
| ------- | ---- | ------- | --------------- | -------------- |
| step-1 | Validate Lifecycle Metadata | `doc_lifecycle.validate_metadata` | `validate_lifecycle_metadata.py --path ${docs_root} --strict` | Pre-scan gate |
| step-2 | Scan Documents | `doc_lifecycle.scan` | `housekeeping_scanner.py --scan --root ${docs_root}` | Scan |
| step-3 | Filter Expired | `doc_lifecycle.filter_expired` | `housekeeping_scanner.py --filter-expired --root ${docs_root}` | Filter |
| step-4 | Analyze References | `doc_lifecycle.analyze_references` | `housekeeping_scanner.py --analyze-references --root ${docs_root} --changelog ${main_changelog}` | Analyze References |
| step-5 | Determine Actions | `doc_lifecycle.plan_actions` | `housekeeping_scanner.py --plan --root ${docs_root}` (dry-run report JSON/MD) | Determine Action |
| step-6 | Execute Housekeeping | `doc_lifecycle.execute` | `housekeeping_scanner.py --execute --root ${docs_root}` (requires explicit `--execute`; blocked when `dry_run_default: true` unless override flag) | Execute |
| step-7 | Log Actions | `doc_lifecycle.log` | Agent or script emits housekeeping summary for changelog / task notes | Log |

**Dependencies:** step-2→step-1; step-3→step-2; step-4→step-3; step-5→step-4; step-6→step-5 (blocking when references unresolved); step-7→step-6.

#### 2.2.2 `scripts/validate_lifecycle_metadata.py` (RF2)

**Path:** `packages/frameworks/doc-lifecycle/scripts/validate_lifecycle_metadata.py`

**CLI (prescribed):**

```
python scripts/validate_lifecycle_metadata.py --path <docs_root> [--strict] [--file <single.md>]
```

**Validation rules (five required fields + cross-field):**

| Field | Rule |
| ----- | ---- |
| `lifecycle` | Required; enum `evergreen` \| `timeboxed` \| `transient` |
| `ttl_days` | Required key; integer 1–3650 or YAML `null`; MUST be `null` when `lifecycle: evergreen` |
| `created_at` | Required; ISO 8601 UTC (`YYYY-MM-DDTHH:MM:SSZ`) |
| `expires_at` | Required key; ISO 8601 UTC or `null`; MUST be `null` when `ttl_days` is `null`; otherwise ≈ `created_at + ttl_days` (±1 day tolerance per T03 V5) |
| `housekeeping_policy` | Required; enum `keep` \| `archive` \| `delete` |

**Cross-field invariants:**

- `evergreen` → `ttl_days: null`, `expires_at: null`, `housekeeping_policy: keep`
- `timeboxed` → default expectation `housekeeping_policy: archive` (warn if mismatch in `--strict`)
- `transient` → default expectation `housekeeping_policy: delete` (warn if mismatch in `--strict`)

**Output:** Per-file PASS/FAIL lines; summary count; exit `1` on any failure when `--strict`.

#### 2.2.3 `scripts/housekeeping_scanner.py` (RF3, RF7)

**Path:** `packages/frameworks/doc-lifecycle/scripts/housekeeping_scanner.py`

**CLI modes (prescribed subcommands or flags):**

| Mode | Flag | Behavior |
| ---- | ---- | -------- |
| Scan | `--scan` | Walk `docs_root` `**/*.md`; parse frontmatter; emit inventory |
| Filter expired | `--filter-expired` | Subset where `lifecycle in {timeboxed, transient}` AND `expires_at <= now()` |
| Analyze references | `--analyze-references` | For each expired doc: search markdown links / path mentions in evergreen docs + `CHANGELOG.md` |
| Plan | `--plan` | Dry-run action list: `delete` \| `archive` \| `skip` (protected) with reason |
| Execute | `--execute` | Apply actions: move to `${archive_dir}/{relative_path}` or delete; NEVER delete when references found — auto-upgrade to archive |

**Reference-aware rules (RF3, policy §Protection Rules):**

1. If referenced from any doc with `lifecycle: evergreen` → action = `archive` (override `housekeeping_policy: delete`)
2. If referenced in `CHANGELOG.md` or changelog archive → action = `archive`
3. Git history preservation is implicit (delete removes working tree only; document in report)
4. Emit structured report (JSON + human-readable) for observability — satisfies GAP-DOCLIFE-BEHV-001 evidence

**Safety:** Default dry-run; `--execute` required for filesystem mutations; `--execute` without `--confirm` prints plan and exits `1`.

#### 2.2.4 FR-110 mirror sync (RF6)

After all canonical files land:

```bash
python scripts/sync_greenfield_install.py
diff -rq packages/frameworks/doc-lifecycle greenfield-install/packages/frameworks/doc-lifecycle
```

CI guard (`scripts/test_sync_greenfield_install.py`) must pass. Manifest already copies full `packages/frameworks` tree — no manifest edit expected unless new ignore patterns needed.

### 2.3 Constraints

- Package scripts live under **doc-lifecycle** (self-contained adopter copy pattern); workflow-mgt integration guide cross-links to this path.
- Do not fix `DocumentLifecycleValidator` in T08 — T10 owns cross-package validator; T08 scripts are the **package-local** enforcement surface.
- No pre-commit wiring in T08 (optional follow-on).
- Implementation gate: FR-083 — explicit user authorization before Step 2 of §4.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (§4 Step 1).
- **Transition trigger to COMPLETE:** All T08 AC satisfied; pytest pass; FR-110 diff clean; reference-aware cleanup evidence captured; forensic marker via `RW E10:S01:T08 --art`.
- **Atomic propagation requirement:** Task doc status + `kboard.md` row update in same RW Step 7 session.
- **Owner:** Implementation execution step (not this planning-only IPW).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single prescribed approach: implement documented-future artefacts per T01/T05 |
| T2 | Reversibility | N | Package-local scripts; revertible in one PR |
| T3 | Blast radius | N | Confined to `doc-lifecycle` package + greenfield mirror; no cross-package contract change |
| T4 | Precedent | N | Fulfils existing policy/spec; does not establish new canonical pattern |
| T5 | Constraint trade-off | N | Implements existing five-field schema and housekeeping process verbatim |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW global gates |
| T7 | Supersedes | N | No ADR contradiction; closes structural gaps only |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files listed §4.1 |
| E2 | No new options | Y | `doc-lifecycle-policy.md` + metadata spec are authoritative |
| E3 | Reversible in one task | Y | Delete scripts/workflow + re-sync mirror |
| E4 | Spec elsewhere | Y | Policy §Housekeeping Process + T08 AC |
| E5 | Documented NONE | Y | §5.3 cites package policies |

---

## 3. Test design

| ID | Behavior / layer | Expected check | RF |
| -- | ---------------- | -------------- | -- |
| T1 | Validator — valid evergreen frontmatter | Exit 0 on fixture with all five fields | RF2 |
| T2 | Validator — missing `ttl_days` | Exit 1 under `--strict` | RF2 |
| T3 | Validator — invalid `lifecycle` enum | Exit 1 | RF2 |
| T4 | Validator — `expires_at` arithmetic | PASS within ±1 day; FAIL when off by >1 day | RF2 |
| T5 | Validator — evergreen cross-field | FAIL if `ttl_days` non-null or `housekeeping_policy` not `keep` | RF2 |
| T6 | Scanner — expired transient doc | Appears in `--filter-expired` output | RF3 |
| T7 | Scanner — non-expired doc | Excluded from filter | RF3 |
| T8 | Scanner — reference from evergreen doc | `--plan` action = `archive` not `delete` | RF3, RF7 |
| T9 | Scanner — changelog reference | `--plan` action = `archive` | RF3 |
| T10 | Scanner — dry-run default | `--plan` without `--execute` makes no filesystem changes | RNF2 |
| T11 | Scanner — execute archive | File moved to `docs/Archive/...` preserving relative path | RF3 |
| T12 | Workflow YAML structure | Required keys present; step dependency chain matches §2.2.1 | RF1 |
| T13 | FR-110 mirror parity | `diff -rq` canonical ↔ greenfield-install exit 0 post-sync | RF6 |
| T14 | Package tree docs | README/PACKAGE_OVERVIEW list `workflows/` + `scripts/` without `(future)` | RF5 |

**Test location (prescribed):** `packages/frameworks/doc-lifecycle/tests/` with fixtures under `tests/fixtures/` (minimal markdown samples).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E10:S01:T08` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create `scripts/validate_lifecycle_metadata.py` per §2.2.2 | Validator script |
| 3 | Add validator pytest (`tests/test_validate_lifecycle_metadata.py` + fixtures) | T1–T5 green |
| 4 | Create `scripts/housekeeping_scanner.py` per §2.2.3 | Scanner script |
| 5 | Add scanner pytest (`tests/test_housekeeping_scanner.py` + fixtures) | T6–T11 green |
| 6 | Create `workflows/doc-housekeeping-workflow.yaml` per §2.2.1 | Workflow YAML |
| 7 | Update `README.md`, `PACKAGE_OVERVIEW.md` — package tree, remove `(future)` labels | RF5 |
| 8 | Update `integration/workflow-mgt-integration.md` §Step 4 — mark workflow **implemented**; fix workflow path to package-local | RF1 |
| 9 | Run `python scripts/sync_greenfield_install.py`; verify `diff -rq` (T13) | FR-110 parity |
| 10 | Capture reference-aware cleanup evidence (scanner `--plan` output snippet in T08 task doc or test log) | RF7 / GAP-DOCLIFE-BEHV-001 |
| 11 | Run full pytest for doc-lifecycle tests | All tests green |
| 12 | **`RW E10:S01:T08 --art`** — version, changelog, kanban Step 7, commit, tag (local) | Forensic release |
| **N** | **[MANDATORY] Reconcile task `E10:S01:T08` status** to actual state: if all AC satisfied → `COMPLETE` + `✅ COMPLETE (v{version})`; else remain `IN PROGRESS`. Update `Last updated`. Sync `kboard.md` row. | Task doc reflects actual state |

**RW verification / FBU wave rule (BR-097):** Step 12 prescribes **`RW E10:S01:T08 --art`** only (BUILD +1). No `--doc-policy-zero`.

### 4.1 Files to create or modify

| Action | Path |
| ------ | ---- |
| CREATE | `packages/frameworks/doc-lifecycle/workflows/doc-housekeeping-workflow.yaml` |
| CREATE | `packages/frameworks/doc-lifecycle/scripts/validate_lifecycle_metadata.py` |
| CREATE | `packages/frameworks/doc-lifecycle/scripts/housekeeping_scanner.py` |
| CREATE | `packages/frameworks/doc-lifecycle/tests/test_validate_lifecycle_metadata.py` |
| CREATE | `packages/frameworks/doc-lifecycle/tests/test_housekeeping_scanner.py` |
| CREATE | `packages/frameworks/doc-lifecycle/tests/fixtures/` (sample markdown) |
| UPDATE | `packages/frameworks/doc-lifecycle/README.md` |
| UPDATE | `packages/frameworks/doc-lifecycle/PACKAGE_OVERVIEW.md` |
| UPDATE | `packages/frameworks/doc-lifecycle/integration/workflow-mgt-integration.md` |
| UPDATE | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md` |
| CREATE | `docs/implementation-cycles/IPP-E10S01T08-doc-housekeeping-workflow-scripts.md` (this doc) |
| GENERATED | `greenfield-install/packages/frameworks/doc-lifecycle/**` (via sync script) |

### 4.2 Dependency order

1. Validator script + tests (Steps 2–3) — no dependency on scanner.
2. Scanner script + tests (Steps 4–5) — may reuse validator frontmatter parser internally (shared helper module optional: `scripts/_frontmatter_utils.py`).
3. Workflow YAML (Step 6) — references both scripts.
4. Package docs (Step 7–8) — after artefacts exist.
5. FR-110 sync (Step 9) — after all canonical files committed/staged.
6. RW (Step 12) — after verification.

### 4.3 Documentation implementation steps

1. Update PACKAGE_OVERVIEW §Package Structure first (canonical tree SoT).
2. Mirror README §Package Structure to match.
3. Activate workflow-mgt-integration §Step 4 (remove "Future" wording).
4. Record verification evidence in T08 task doc §Verification.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Action | Scope of change | Tied to |
| ------ | ---- | ------ | --------------- | ------- |
| D-U1 | `packages/frameworks/doc-lifecycle/README.md` | UPDATE | Package tree; quick start for running validator/scanner; remove `(future)` | RF5; Step 7 |
| D-U2 | `packages/frameworks/doc-lifecycle/PACKAGE_OVERVIEW.md` | UPDATE | §Package Structure + §Package Contents — workflows/scripts active | RF5; Step 7 |
| D-U3 | `packages/frameworks/doc-lifecycle/integration/workflow-mgt-integration.md` | UPDATE | §Step 4 implemented; correct workflow path | RF1; Step 8 |
| D-U4 | `docs/kanban/.../T08-implement-doc-housekeeping-workflow-and-scripts.md` | UPDATE | IPP links; verification evidence; status/version on RW | RF8; Step 10, N |
| D-U5 | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md` | UPDATE | Optional: mark GAP-DOCLIFE-STRUCT-001/002/003 remediation IN PROGRESS/COMPLETE on RW | Step 12 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `packages/frameworks/doc-lifecycle/workflows/doc-housekeeping-workflow.yaml` | Automated housekeeping workflow | RF1 |
| D-C2 | `packages/frameworks/doc-lifecycle/scripts/validate_lifecycle_metadata.py` | Five-field metadata validator | RF2 |
| D-C3 | `packages/frameworks/doc-lifecycle/scripts/housekeeping_scanner.py` | Expired-doc scanner + reference-aware cleanup | RF3 |
| D-C4 | `packages/frameworks/doc-lifecycle/tests/test_*.py` + fixtures | pytest coverage | §3 |
| D-C5 | `docs/implementation-cycles/IPP-E10S01T08-doc-housekeeping-workflow-scripts.md` | This IPP | FR-083 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Agent execution guide for DHKW (like RW/UKW KB docs) | **NONE** — workflow YAML + integration guide sufficient for v1; optional E02 follow-on |
| workflow-mgt `workflow-registry.yaml` entry | **NONE** — doc-lifecycle is standalone package; registry update optional |
| KB developer doc under `workflow-mgt/KB/` | **NONE** — scope confined to doc-lifecycle package docs per T08 |
| ADR for housekeeping automation | **NONE** — §2.5 EXEMPT; policy is governing doc |
| `.cursorrules` five-field alignment | **NONE** — T06 R4 separate wave |
| `DocumentLifecycleValidator` fix | **NONE** — T10 scope |
| `doc-lifecycle-metadata-spec.md` stale workflow path (`workflow-mgt/workflows/...`) | **NONE in T08** — T09 ADR sync may fix cross-links |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------ | --------- | -------------------- |
| D-C5 | `docs/implementation-cycles/IPP-E10S01T08-doc-housekeeping-workflow-scripts.md` | NOT_APPLICABLE | Maintainer planning artefact (repo SoT) | evergreen | T08 Input + References |
| D-C1 | `packages/frameworks/doc-lifecycle/workflows/doc-housekeeping-workflow.yaml` | NOT_APPLICABLE | Framework package (adopter copy) | evergreen | README, PACKAGE_OVERVIEW, workflow-mgt-integration |
| D-C2 | `packages/frameworks/doc-lifecycle/scripts/validate_lifecycle_metadata.py` | NOT_APPLICABLE | Framework package | evergreen | README, PACKAGE_OVERVIEW |
| D-C3 | `packages/frameworks/doc-lifecycle/scripts/housekeeping_scanner.py` | NOT_APPLICABLE | Framework package | evergreen | README, PACKAGE_OVERVIEW |
| D-C4 | `packages/frameworks/doc-lifecycle/tests/` | NOT_APPLICABLE | Framework package tests | evergreen | — |
| D-U1 | `packages/frameworks/doc-lifecycle/README.md` | NOT_APPLICABLE | Framework package | evergreen | — |
| D-U2 | `packages/frameworks/doc-lifecycle/PACKAGE_OVERVIEW.md` | NOT_APPLICABLE | Framework package | evergreen | — |
| D-U3 | `packages/frameworks/doc-lifecycle/integration/workflow-mgt-integration.md` | NOT_APPLICABLE | Framework package | evergreen | — |
| D-U4 | T08 task doc | NOT_APPLICABLE | Kanban task doc | evergreen | Story E10:S01 checklist |
| MIRROR | `greenfield-install/packages/frameworks/doc-lifecycle/**` | NOT_APPLICABLE | FR-110 generated mirror | evergreen | FR-110 sync only |

---

## 7. Success / verification criteria

- [ ] `workflows/doc-housekeeping-workflow.yaml` exists with seven steps matching policy Scan→Filter→Analyze→Determine→Execute→Log (T08 AC1)
- [ ] `validate_lifecycle_metadata.py` validates all five required fields + cross-field invariants; pytest T1–T5 pass (T08 AC2)
- [ ] `housekeeping_scanner.py` implements reference-aware cleanup; pytest T8–T9 pass; plan report captured as evidence (T08 AC3, RF7)
- [ ] `python scripts/sync_greenfield_install.py` succeeds; `diff -rq` canonical ↔ mirror exit 0 (T08 AC4, T13)
- [ ] IPP ↔ T08 bidirectional links present (T08 AC5)
- [ ] README/PACKAGE_OVERVIEW trees accurate (no `(future)` on implemented paths)
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason in T08
- [ ] **`RW E10:S01:T08 --art`** complete with forensic marker on T08 task doc
- [ ] GAP-DOCLIFE-STRUCT-001/002/003 closable; GAP-DOCLIFE-BEHV-001 observability unblocked

---

## References

- [T08 task doc](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md)
- [T05 gap log](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [T06 RC sign-off and remediation R1](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T02 component inventory §6](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/component-inventory-map.md)
- [T03 behavior validation D8/D9](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/lifecycle-behavior-validation-report.md)
- [doc-lifecycle-metadata-spec.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md)
- [doc-lifecycle-policy.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md)
- [workflow-mgt-integration.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/integration/workflow-mgt-integration.md)
- [FR-110](../kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [FR-083](../kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md)
- [E02:S13:T08 IPP precedent](./IPP-E02S13T08-sync-packaged-workflows-live-spec.md)
- [changelog-management-workflow.yaml](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/changelog-management-workflow/changelog-management-workflow.yaml) — deterministic workflow YAML pattern
- [sync_greenfield_install.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/scripts/sync_greenfield_install.py)
