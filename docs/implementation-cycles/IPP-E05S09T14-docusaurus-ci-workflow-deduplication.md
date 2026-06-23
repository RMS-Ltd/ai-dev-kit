---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S09:T14 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T14-docusaurus-ci-workflow-deduplication-br093.md`](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md) **(E05:S09:T14)**  
**Planning for:** [BR-093](../kanban/fbu/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)  
**Status:** COMPLETE (Wave 1 **v0.5.9.14+2**; Wave 2 verification closure — 2026-06-05)

> **IPW revision:** Wave 2 closes BR-093 on structural + Actions evidence without requiring green Docusaurus corpus build (MDX failures are out of scope).

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-083. Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | At most **one** production `npm run build` per commit on `main` when `portal/**`, `docs/**`, or workflow paths change | T14 AC1; BR-093 |
| RF2 | Deploy to GitHub Pages **must not run** when the build job fails | T14 AC2; BR-093 |
| RF3 | PR **`Docusaurus site build`** gate unchanged — path-filtered `pull_request` on `portal/**`, `docs/**` | T14 AC3; FR-069 |
| RF4 | Workflow topology documented in YAML comments and/or `portal/README.md` | T14 AC4 |
| RF5 | Manual redeploy via `workflow_dispatch` preserved (FR-070 rollback / ops path) | FR-070 NF02; portal README |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Preserve Node 20, npm cache, `defaults.run.working-directory: portal` | FR-069 S4–S6 |
| RNF2 | No PAT in source; deploy uses `GITHUB_TOKEN`; `contents: write` scoped to deploy job only | FR-070 NF01 |
| RNF3 | Executable pytest contract updated — not manual-only verification | Project IC pattern; `test_portal_fr069_ci.py`, `test_portal_fr070_deployment.py` |
| RNF4 | Preserve workflow display name **Docusaurus site build** (branch protection / Dependabot references) | FR-069 S3; portal README |
| RF8 | **Verification gate:** Prove single-workflow topology on `main` with deploy skipped when build fails | Wave 2 |
| RF9 | **Evidence pack:** Record pytest output, Actions run IDs, job conclusions | Wave 2 |
| RF10 | **FBU closure:** BR-093 → FIXED; V-band prune; ledger `intake-completed.md` | Wave 2 |

### 1.3 Invariants and boundaries

- **Invariants:** GitHub Pages provider, `peaceiris/actions-gh-pages`, `publish_dir: ./portal/build`, path filters unchanged; FR-069 PR merge gate behavior preserved.
- **In scope:** Merge deploy into [`docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml); retire duplicate `main` push on [`docusaurus-deploy.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml); pytest + README + ADR.
- **Out of scope:** Fixing underlying build breakage ([BR-090](../kanban/fbu/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) / E05:S09:T13); portal MDX / broken markdown links (blocks green build, not BR-093 structural ACs); changing path filters; hosting provider change; Docusaurus version upgrades.

**Soft dependency:** E05:S09:T13 fixes chronic build failures; T14 is structurally independent but post-merge green-run verification is easier after T13.

---

## 2. Specification

### 2.1 Goal

Eliminate duplicate CI build work on every qualifying `main` push by consolidating build and deploy into a **single workflow** with two jobs connected by `needs:` and artifact handoff. PRs continue to run only the build job; deploy consumes the build artifact from the same workflow run so FR-070’s stale-publish guard is preserved without a second `npm ci` + `npm run build`.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Delivery |
| ----------- | -------- |
| RF1 | Single `build` job performs `npm ci` + `npm run build`; `deploy` job downloads artifact — no `npm run build` in deploy |
| RF2 | `deploy` job `needs: build` — GitHub skips deploy when build fails |
| RF3 | `deploy` job `if:` excludes `pull_request` events; `on.pull_request.paths` unchanged |
| RF4 | YAML comment block + `portal/README.md` CI / Production hosting sections |
| RF5 | `workflow_dispatch` on merged workflow runs build then deploy |
| RNF1–RNF4 | Preserved in build job; permissions moved to deploy job only |

### 2.3 Constraints

- Keep primary workflow file path `.github/workflows/docusaurus-build.yml` (minimize branch-protection churn).
- Build job uploads `portal/build` via `actions/upload-artifact@v4`.
- Deploy job downloads artifact via `actions/download-artifact@v4` before `peaceiris/actions-gh-pages@v4`.
- Deploy job `if:` guard: `(github.event_name == 'push' && github.ref == 'refs/heads/main') || github.event_name == 'workflow_dispatch'`.
- Delete or fully deprecate `docusaurus-deploy.yml` push trigger to prevent double workflow invocation on `main`.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** All T14 acceptance criteria satisfied with pytest green + post-merge Actions smoke evidence; forensic marker `✅ COMPLETE (v{version})` on RW release.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same RW Step 7 change set.
- **Owner:** Implementation execution (not this IPW planning session).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | BR-093 lists three viable topologies; task selects Option 2 (single workflow, two jobs) |
| T2 | Reversibility | N | Revert restores two-file layout in one PR |
| T3 | Blast radius | N | Confined to `.github/workflows/`, tests, `portal/README.md` |
| T4 | Precedent | **Y** | Canonical Docusaurus CI topology for this repo going forward |
| T5 | Constraint trade-off | **Y** | Replaces FR-070 S7 same-job build with cross-job artifact handoff while preserving freshness |
| T6 | Governance contract | N | Does not alter RW, IPW, UKW, or validator gates |
| T7 | Supersedes | N | Narrows FR-070 deploy implementation detail; hosting choice unchanged |

**Outcome:** `REQUIRED`

§5 includes ADR `CREATE` at [`ADR-017-docusaurus-ci-build-deploy-topology.md`](../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md).

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Single build topology | Parsed YAML: `deploy` job has `needs: build`; deploy steps omit `npm run build` | RF1 |
| T2 | Fail-fast gate | `deploy` job declares `needs: build` (GitHub skips on upstream failure) | RF2 |
| T3 | PR gate preserved | `on.pull_request.paths` includes `portal/**`, `docs/**`; deploy `if` excludes PR-only runs | RF3 |
| T4 | Artifact handoff | Build job uploads `portal/build`; deploy downloads before `peaceiris` | RF1; FR-070 freshness |
| T5 | FR-069 regression | Existing `test_portal_fr069_ci.py` passes; extend for upload-artifact step if added to build job | RF3; RNF1 |
| T6 | FR-070 deploy contract | Update `test_portal_fr070_deployment.py` S3/S7 for cross-job artifact topology | RF2; RF5 |
| T7 | README topology | `portal/README.md` references merged workflow; documents one-build / deploy-skipped-on-failure | RF4 |
| T8 | Manual smoke (post-merge) | Push to `main` → Actions: one npm build; deploy runs only on green | RF1–RF2 |

**Implementation:** [`tests/test_portal_br093_ci_deduplication.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br093_ci_deduplication.py) (new) + updates to [`tests/test_portal_fr070_deployment.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_fr070_deployment.py).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E05:S09:T14` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Write [ADR-017](../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md) — Option 2 choice, artifact contract, PR vs main job matrix, FR-070 S7 supersession note | ADR file |
| 3 | Extend [`docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml): `upload-artifact` on `build`; add `deploy` job with `needs`, `if`, `download-artifact`, `peaceiris`; add `workflow_dispatch`; `permissions: contents: write` on deploy job only | Merged workflow |
| 4 | Remove duplicate push trigger — delete [`docusaurus-deploy.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml) | No double-trigger on `main` |
| 5 | Update [`portal/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md) CI + Production hosting sections | RF4 |
| 6 | Add/update pytest modules (T1–T7) | Green `pytest tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py tests/test_portal_br093_ci_deduplication.py` |
| 7 | Update [BR-093](../kanban/fbu/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md) status when verified | BR closure prep |
| 8 | Release via **`RW E05:S09:T14`** (version bump, changelog, Step 7 four-surface kanban) | `v0.5.9.14+1` |
| **N** | **[MANDATORY] Reconcile task `E05:S09:T14` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc + kboard row |

### 4.1 Files to create or modify

- UPDATE: [`.github/workflows/docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml)
- DELETE: [`.github/workflows/docusaurus-deploy.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml)
- CREATE: [`docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md`](../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md)
- UPDATE: [`portal/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md)
- CREATE: [`tests/test_portal_br093_ci_deduplication.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br093_ci_deduplication.py)
- UPDATE: [`tests/test_portal_fr070_deployment.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_fr070_deployment.py)
- UPDATE (minimal): [`tests/test_portal_fr069_ci.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_fr069_ci.py) if artifact step added to build job
- UPDATE (RW Step 7): task doc, story checklist, `kboard.md`, BR-093

### 4.2 Dependency order

1. ADR-017 (records decision before YAML change)
2. Workflow YAML merge (build + deploy jobs)
3. Delete `docusaurus-deploy.yml`
4. Pytest updates (contract follows YAML)
5. `portal/README.md`
6. RW E05:S09:T14 (release + kanban Step 7)

### 4.3 Documentation implementation steps

1. ADR-017 before workflow edit (establishes canonical topology).
2. YAML comments in `docusaurus-build.yml` cross-link ADR-017.
3. `portal/README.md` after workflow lands (accurate topology description).

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `.github/workflows/docusaurus-build.yml` | Merge deploy job + artifact upload/download; add `workflow_dispatch` | RF1–RF2; Step 3 |
| D-U2 | `.github/workflows/docusaurus-deploy.yml` | DELETE file — remove duplicate push trigger | RF1; Step 4 |
| D-U3 | `portal/README.md` | CI + Production hosting topology; single workflow; manual dispatch | RF4; Step 5 |
| D-U4 | `tests/test_portal_fr070_deployment.py` | Cross-job deploy assertions (S3/S7) | T6; Step 6 |
| D-U5 | Host task T14 | Status transitions; IPP links; completion marker on RW | Steps 1, N |
| D-U6 | `docs/kanban/fbu/BR-093-*.md` | Status update on verification | Step 7 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E5S9T14-docusaurus-ci-workflow-deduplication.md` | This IPP | IPW |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md` | Topology decision (§2.5 REQUIRED) | Step 2 |
| D-C3 | `tests/test_portal_br093_ci_deduplication.py` | Executable BR-093 contract | T1–T4; Step 6 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| CI topology ADR | CREATE D-C2 (ADR-017) — §2.5 outcome REQUIRED |
| FR-069 / FR-070 doc updates | NONE — behavior preserved; ADR-017 supersedes FR-070 S7 same-job build detail only |
| Workflow KB developer guide | NONE — portal README + ADR-017 sufficient for this task scope |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E5S9T14-docusaurus-ci-workflow-deduplication.md` | NOT_APPLICABLE | Planning artifact; not Docusaurus user doc | evergreen | T14 Input/References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md` | PUBLISHED | — | evergreen | T14 References; IPP §2.5; FR-069/FR-070 cross-links |
| D-C3 | `tests/test_portal_br093_ci_deduplication.py` | NOT_APPLICABLE | Executable spec, not published doc | evergreen | IPP §3; BR-093 |
| D-U3 | `portal/README.md` | NOT_APPLICABLE | Repo-local maintainer doc | evergreen | Already linked from docs pillar |

**Housing rules:** One authoritative doc per topic; ADR-017 is the topology SoT; IPP lives under `docs/implementation-cycles/`.

---

## 7. Success / verification criteria

### 7.1 Wave 1 (shipped — v0.5.9.14+2)

- [x] IPP written with all §1–§7 sections; bidirectional task ↔ IPP links
- [x] ADR-017 created with Option 2 decision and FR-070 S7 supersession note
- [x] `pytest tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py tests/test_portal_br093_ci_deduplication.py` green locally
- [x] `portal/README.md` documents merged workflow topology
- [x] RW E05:S09:T14 Wave 1 completes four-surface Step 7 reconciliation
- [x] All §5 Wave 1 UPDATE/CREATE items implemented

### 7.2 Wave 2 (verification closure)

- [x] V1–V5 verification completed — [evidence](../maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md)
- [x] Actions run `26989204716` on `main`: single workflow; `deploy` job **skipped** when `build` fails
- [x] BR-093 **FIXED**; V-band row pruned; `intake-completed.md` ledger entry
- [x] V6 (green deploy smoke) **deferred** — portal MDX follow-on (E05:S09:T13 / separate intake)

---

## 8. Rolling backlog / wave ledger

### 8.1 Shipped waves

| Build | Summary |
| ----- | ------- |
| `v0.5.9.14+1` | IPW recovery (docs-only) |
| `v0.5.9.14+2` | ADR-017; merged `docusaurus-build.yml`; deleted `docusaurus-deploy.yml`; pytest T1–T7 (`0ebf2cf`) |
| `v0.5.9.14+3` | Wave 2 FBU closure + BUILD collision remediation; tagged-BUILD validator guard |

### 8.2 Wave 2 verification checklist

```bash
pytest tests/test_portal_br093_ci_deduplication.py tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py -q
gh run view 26989204716 --json jobs,conclusion,workflowName
test ! -f .github/workflows/docusaurus-deploy.yml
```

Record outputs in [docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md](../maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md).

### 8.3 Wave 2 ADR decision (verification-only)

**Outcome: EXEMPT** — ADR-017 already records topology; Wave 2 is evidence + FBU closure only. T1–T7 all **N** per [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md).

### 8.4 Deferred follow-on

| Topic | Resolution |
| ----- | ---------- |
| Green `npm run build` on `main` | V6 deferred; track under BR-090 / residual MDX (not BR-093) |
| Duplicate workflow regression | `test_br093_no_duplicate_deploy_workflow` guards retired `docusaurus-deploy.yml` |

### 8.5 Wave 2 implementation steps (executor)

| Step | Action |
| ---- | ------ |
| 1 | Task already **COMPLETE** — verification wave only (no `TODO → IN PROGRESS`) |
| 2 | Create evidence doc; run V1–V5 |
| 3 | BR-093 → FIXED; T14 task doc link evidence |
| 4 | Kanban: prune V-band row; `intake-completed.md`; structure-prune manifest |
| 5 | **`RW E05:S09:T14 --art`** (BUILD **+3** remediation — **not** `--doc-policy-zero` when `v0.5.9.14+2` tag exists) |
| N | Confirm task remains **COMPLETE**; BR/kboard terminal |

---

## References

- [T14 — Docusaurus CI workflow deduplication (BR-093)](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md)
- [BR-093 — Docusaurus CI duplicate build + deploy job waste](../kanban/fbu/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)
- [FR-069 — Docusaurus CI build gate](../kanban/fbu/FR-069-docusaurus-ci-build-gate.md)
- [FR-070 — Docusaurus deployment and hosting](../kanban/fbu/FR-070-docusaurus-deployment-and-hosting.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100)
- [`.github/workflows/docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml)
- [Wave 2 evidence](../maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md)
- ~~`.github/workflows/docusaurus-deploy.yml`~~ — deleted Wave 1

---

## Appendix A — ADR-017 draft (implementation deliverable)

The following content is the prescribed body for **ADR-017** to be written at implementation Step 2.

**Title:** ADR-017: Docusaurus CI build/deploy topology (single workflow, artifact handoff)

**Status:** Accepted (on implementation)

**Context:** BR-093 — two independent workflows each run `npm ci` + `npm run build` on every qualifying `main` push, doubling CI minutes and failure noise.

**Decision:** Adopt **Option 2** from BR-093 — extend `.github/workflows/docusaurus-build.yml` with:

1. **`build` job** — unchanged FR-069 contract; adds `actions/upload-artifact` for `portal/build`.
2. **`deploy` job** — `needs: build`; `if:` for `main` push or `workflow_dispatch`; downloads artifact; `peaceiris/actions-gh-pages` to `gh-pages`; **no** `npm ci` or `npm run build`.
3. **Delete** `.github/workflows/docusaurus-deploy.yml` to remove duplicate `push` trigger.

**Supersedes:** FR-070 executable spec **S7** (“publish step after build in the same job”) — freshness is preserved because deploy consumes the artifact from the **same workflow run**, not a prior commit.

**Consequences:**

- One production build per `main` commit (portal/docs paths).
- Deploy automatically skipped when build fails (`needs:`).
- PR gate unchanged (deploy job `if` excludes pull requests).
- Existing `test_portal_fr070_deployment.py` S3/S7 assertions must be updated for cross-job topology.

**Alternatives rejected:**

- **Option 1 (reusable workflow + workflow_run):** Extra workflow file and `workflow_run` latency; more moving parts.
- **Option 3 (workflow_run gate only):** Keeps two workflow files; harder to reason about dispatch and permissions.
