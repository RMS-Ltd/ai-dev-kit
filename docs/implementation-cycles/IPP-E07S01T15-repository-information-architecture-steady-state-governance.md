---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S01:T15 — Planning: Repository information architecture steady-state governance (IPW / FR-140)

**Host Task:** [`T15-repository-information-architecture-steady-state-governance-fr140.md`](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T15-repository-information-architecture-steady-state-governance-fr140.md) **(E07:S01:T15)**  
**Planning for:** [FR-140](../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md)  
**Status:** Approved (planning complete — implementation authorized via `IDW E07:S01:T15`)

> **IPW:** Consolidated IPP per [FR-042](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md). Bidirectional wiring to host task **Input** and **References** is mandatory before implementation execution.

---

## §1 — Requirements (Ascertained Baseline)

### §1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Publish **repository IA policy** under `docs/governance/standards/` defining purpose classes (T13/T14 rubrics), SoT vs dev-kit specialisation vs install mirror vs generated/vendor, documentation surface placement (FR-114/FR-139), and tiered README expectations | FR-140-F1, T15 AC1 |
| RF2 | Define **cartography program** section wiring **T13** + **T14** as mandatory evidence legs before structural cleanup waves; encode wave deconfliction rule FR-140-F12 | FR-140-F2, T15 AC2 |
| RF3 | Specify **machine-generated path manifest** — JSON schema, generator script location, refresh procedure (git tree + policy exclusions → committed manifest for agents/validators) | FR-140-F3, T15 AC4 |
| RF4 | Define **creation gates** — minimum: new top-level directory requires policy class + README tier; blocking validator (successor to UXR-033 R6) | FR-140-F4, FR-140 AC3 |
| RF5 | Define **drift detection** — manifest diff validator; advisory mode first, blocking after stabilization (see §2.3 enforcement phasing) | FR-140-F5, FR-140 AC3 |
| RF6 | Update **`AGENTS.md`** with one-line pointer to IA policy + manifest (no cold-start bloat) | FR-140-F6 |
| RF7 | Maintain **program aggregation table** (seed from FR-140 § map) in policy with update procedure when new IA-touching FBUs file | FR-140-F7, T15 AC3 |
| RF8 | Publish **mover-wave checklist** template linking cartography sign-off + scoped IPW/IDW to FR-039 execution | FR-140-F8 |
| RF9 | Reconcile policy with [`REPOSITORY-DIRECTORY-AUDIT.md`](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) §2.1 SoT map — contradictions require maintainer override record | FR-140-F9 |
| RF10 | Document **perpetual hygiene** ownership — default [E02:S16:T04](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md) for manifest regen cycles; RW Step 7 for board-visible program status | FR-140-F10 |
| RF11 | IPP linked from host task before implementation | T15 AC0 |
| RF12 | All FR-140 F1–F10 addressed or explicitly deferred with rationale in this IPP | T15 AC1 |

### §1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Policy doc index-style where possible; substantive rules link to ADR-033, FR-139, ADR-026 siblings | FR-140-NF1 |
| RNF2 | Generator + validators live under `packages/frameworks/workflow-mgt/scripts/` per framework-code conventions (mirror `validate_fbu_directory.py` pattern) | FR-140-NF2 |
| RNF3 | `greenfield-install/**` manifest rows tagged `mirror: true` per FR-110 / P-GREENFIELD-SYNC | FR-140-NF3 |
| RNF4 | Completion releases via **`RW E07:S01:T15 --art`** only (BUILD +1); **never** `--dpz` after kanban-init `v0.7.1.15+0` | BR-097, `.cursorrules` |
| RNF5 | Multi-RW delivery — three implementation waves (A: policy/ADR; B: generator/manifest; C: gates/CI) to keep reviewable diffs | T15 Scope (Large) |

### §1.3 Invariants and boundaries

- **Invariants:**
  - Cartography reports ([`REPOSITORY-DIRECTORY-AUDIT.md`](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md), [`REPOSITORY-FILE-AUDIT.md`](../maintenance/REPOSITORY-FILE-AUDIT.md)) remain investigation-only; **no structural moves** in T15.
  - Exclusion list is a **single shared module** (`repository_ia_exclusions.py`) — sourced from T13 §0; generator and validators import it (no ad hoc duplication).
  - Manifest path entries are **generated**, not hand-edited per row.
  - Structural movers require cartography sign-off **and** scoped IPW/IDW on an execution task (FR-140-F12) — encoded in mover checklist.
  - Depth scope for manifest entries: directories through **depth 2** (match T13); deeper leaves roll up to parent rows unless cartography flags them.
- **In scope:**
  - L0 constitutional policy + ADR-033
  - L2 machine manifest generator + committed JSON artifact
  - L4 creation/drift validators + pre-commit / Actions CI parity wiring
  - Program wiring (T13, T14, FR-039, FR-140, `AGENTS.md`, governance index)
  - Mover-wave checklist template
- **Out of scope:**
  - Executing `git mv`, deletes, archives (FR-039 scoped IDW tasks)
  - Re-running full T13/T14 inventories
  - Replacing FR-039 as cleanup program owner
  - Adopter-public Docusaurus publication of manifest or policy (maintainer/governance surfaces)

**Deferred requirements (explicit):**

| FR | Deferral | Rationale |
| -- | -------- | --------- |
| — | Blocking manifest drift (Phase 3 enforcement) | May defer to E02:S16:T04 perpetual wave if FR-039 cleanup churn causes excessive CI noise after one advisory cycle; top-level gate still ships blocking in Wave C |

---

## §2 — Specification

### §2.1 Goal

Establish a **durable steady-state repository information-architecture (IA) governance program** for ai-dev-kit: constitutional policy, machine-generated path manifest, tiered README contract, and automated creation/drift gates — so operators and agents always know what each directory is for and new top-level structure cannot re-bloat the tree, while T13/T14 cartography remains the evidence layer for cleanup waves.

### §2.2 Specification mapping from ascertained requirements

Implementation follows the host task deliverable phases: (0) IPW complete → (1) policy + ADR-033 → (2) manifest generator + committed JSON → (3) validators + CI/pre-commit → (4) program wiring → (5) mover checklist + perpetual hygiene hand-off. RF1–RF12 map to policy sections, scripts, and wiring updates; RNF1–RNF5 constrain housing, framework placement, and release mechanics.

**Layered model (target architecture):**

| Layer | Role | Primary artifact | Update cadence |
| ----- | ---- | ---------------- | -------------- |
| **L0 — Constitutional policy** | What may exist where; tier rules; SoT vs mirror vs generated | `docs/governance/standards/repository-information-architecture-policy.md` + [ADR-033](../architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md) | Rare — ADR-level changes |
| **L1 — Cartography (investigation)** | Evidence-backed valuation matrices | `REPOSITORY-DIRECTORY-AUDIT.md` (T13), `REPOSITORY-FILE-AUDIT.md` (T14) | Per audit wave; sign-off gated |
| **L2 — Machine manifest** | Generated inventory for agents/CI | `docs/maintenance/repository-path-manifest.json` + generator | On demand + CI drift check |
| **L3 — Tiered READMEs** | Human orientation at boundary dirs only | README / AGENTS.md pointers per tier table in policy | When boundary purpose changes |
| **L4 — Creation gates** | Block unclassified new top-level dirs / policy violations | Validators in pre-commit / Actions CI parity | Per PR |

### §2.3 Constraints

- Implementation commits **only via RW** on `E07:S01:T15 --art` (BUILD +1 per wave).
- **Forbidden:** `--doc-policy-zero` / `--dpz` for completion or follow-on releases after kanban-init `v0.7.1.15+0`.
- **Manifest format:** JSON (chosen over YAML — machine diff friendly, no anchor/alias ambiguity; aligns with existing `.adk` semver export patterns).
- **Manifest commit policy:** Committed to git (not CI-only) so `AGENTS.md` and validators have a stable agent SoT without running generator on cold start.
- **Enforcement phasing:**

| Phase | Gate | Mode | When |
| ----- | ---- | ---- | ---- |
| 1 | Manifest drift (`validate_repository_path_manifest.py`) | **Advisory** (exit 0, warnings on stderr) | Wave B first RW |
| 2 | New top-level directory (`validate_repository_top_level_directories.py`) | **Blocking** (`--strict`) | Wave C |
| 3 | Manifest drift | **Blocking** (`--strict`) | After one advisory cycle on `dev`, or defer to E02:S16:T04 |

**Tiered README contract (policy §):**

| Tier | Where | Required content |
| ---- | ----- | ---------------- |
| T0 | Repo root | `README.md` + `AGENTS.md` (existing) |
| T1 | Top-level dirs (`docs/`, `packages/`, …) | Purpose class + SoT/mirror + pointer to IA policy |
| T2 | Framework package roots | Package README per FR-110 |
| T3 | Boundary dirs only | On-demand; not universal per-file READMEs |

**Manifest JSON schema (v1):**

```json
{
  "schema_version": "1",
  "generated_at": "2026-06-24T12:00:00Z",
  "generator": {
    "script": "packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py",
    "version": "1.0.0"
  },
  "exclusions": [
    { "pattern": ".git/**", "rationale": "VCS metadata" }
  ],
  "top_level_allowlist": [
    {
      "path": "docs",
      "purpose_class": "Dev-kit specialisation",
      "readme_tier": 1
    }
  ],
  "entries": [
    {
      "path": "docs/kanban",
      "depth": 2,
      "purpose_class": "Dev-kit specialisation",
      "location_verdict": "Optimal",
      "mirror": false,
      "evidence_ref": "docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md"
    }
  ]
}
```

- **Purpose classes (closed enum):** `Dev-kit specialisation`, `Framework SoT`, `Framework SoT (mirror)`, `Operational`, `Generated/vendor`, `Legacy/transitional`, `Unknown/orphan` — aligned with T13 matrix.
- **Regeneration command:** `python packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py --write`

**T14 release gate (FR-140-F13) — policy must document:**

1. T13 published directory matrix — **satisfied** @ v0.7.1.13+1 with sign-off 2026-06-24.
2. T14 investigation may proceed with linked IPP — **satisfied** (T14 COMPLETE @ v0.7.1.14+1).
3. T15 policy publication and machine manifest **gate execution waves**, not cartography investigation.

### §2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (§4 Step 1 — status field update when IDW Wave A begins).
- **Transition trigger to COMPLETE:** All T15 AC0–AC5 satisfied with evidence; FR-140 functional requirements implemented; three RW waves complete; four-surface RW Step 7 on final release.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row status must update in the same change set/session on RW Step 7.
- **Owner:** Implementation execution (IDW), not this IPW session.

### §2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | JSON vs YAML manifest; advisory vs blocking drift; pre-commit vs CI-only enforcement |
| T2 | Reversibility | **N** | Revert policy + validators in one PR without migration |
| T3 | Blast radius | **Y** | Agent routing (`AGENTS.md`), CI parity, pre-commit, governance standards |
| T4 | Precedent | **Y** | Canonical “how repo IA works” for future tasks and adopters |
| T5 | Constraint trade-off | **Y** | Agent ergonomics vs enforcement strictness vs CI noise during FR-039 cleanup |
| T6 | Governance contract | **Y** | New validators in pre-commit / `validate_actions_ci_parity.py` path map |
| T7 | Supersedes | **N** | Complements ADR-026/ADR-012/FR-139; does not narrow them |

**Outcome:** **REQUIRED** — create [ADR-033](../architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md).

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | — | N/A (outcome REQUIRED) |
| E2 | No new options | — | N/A |
| E3 | Reversible in one task | — | N/A |
| E4 | Spec elsewhere | — | N/A |
| E5 | Documented NONE | — | N/A |

**ADR-033 scope (implementation Wave A):** Document L0–L4 layered model; manifest format decision (JSON, committed); enforcement phasing table; alternatives considered (YAML manifest, CI-only artifact, immediate blocking drift); relationship to T13/T14 cartography and FR-039 execution.

---

## §3 — Test design

**`--skip-tests` not used** — executable generator + validators required.

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Generator determinism | Two runs on clean tree produce identical JSON (ignore `generated_at`) |
| T2 | Exclusions | No entries under `.git/`, `node_modules/`, caches per T13 §0 |
| T3 | Top-level allowlist | `validate_repository_top_level_directories.py --strict` fails on synthetic unlisted root |
| T4 | Drift (blocking mode) | `validate_repository_path_manifest.py --strict` fails when manifest stale vs tree |
| T5 | Drift (advisory mode) | Advisory mode exits 0 with stderr warning when stale |
| T6 | Mirror tags | All `greenfield-install/**` directory entries have `mirror: true` |
| T7 | Depth scope | No manifest entries deeper than depth 2 unless cartography-flagged |
| T8 | CI parity | Validators invoked when `packages/frameworks/workflow-mgt/**` touched (`workflow-scripts-pytest` check) |
| T9 | Pre-commit | Top-level validator wired in `scripts/git-hooks/` when hooks updated |

**Test file:** `tests/workflow_mgt/test_repository_ia_manifest.py`

---

## §4 — Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E07:S01:T15` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| **2** | Create **ADR-033** — layered L0–L4 model, JSON manifest decision, enforcement phasing, alternatives | `docs/architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md` |
| **3** | Create **IA policy** — purpose classes, cartography program (T13/T14), SoT map, tiered README table, aggregation table, T14 release gate, perpetual hygiene pointer | `docs/governance/standards/repository-information-architecture-policy.md` |
| **4** | Create **mover-wave checklist** template (FR-140-F12 sign-off + scoped IPW/IDW gates) | `docs/maintenance/repository-ia-mover-wave-checklist.md` |
| **5** | **Wave A wiring** — update `docs/governance/README.md`, `AGENTS.md`, FR-140, FR-039, T13/T14 task docs, `docs/maintenance/README.md` | Cross-links live |
| **6** | **`RW E07:S01:T15 --art`** — Wave A release (BUILD +1) | Local release `v0.7.1.15+{N}` |
| **7** | Implement **`repository_ia_exclusions.py`** — T13 §0 patterns as shared module | Shared exclusions SoT |
| **8** | Implement **`generate_repository_path_manifest.py`** + initial committed manifest | `docs/maintenance/repository-path-manifest.json` |
| **9** | Add **`tests/workflow_mgt/test_repository_ia_manifest.py`** (T1–T7) | Pytest green |
| **10** | Document regen procedure in policy § + `docs/maintenance/README.md` | Maintainer runbook row |
| **11** | **`python scripts/sync_greenfield_install.py`** — framework scripts changed | Greenfield mirror in sync |
| **12** | **`RW E07:S01:T15 --art`** — Wave B release | Manifest + generator shipped |
| **13** | Implement **`validate_repository_top_level_directories.py`** (blocking `--strict`) | Top-level creation gate |
| **14** | Implement **`validate_repository_path_manifest.py`** (advisory default; `--strict` for Phase 3) | Drift gate |
| **15** | Wire **pre-commit** + extend **`validate_actions_ci_parity.py`** + optional **`rw-config.yaml`** `repository_ia:` block | CI/pre-commit enforcement |
| **16** | Final aggregation table sync; FR-140 AC checkboxes; E02:S16:T04 scope note for manifest hygiene | Program operational |
| **17** | **`RW E07:S01:T15 --art`** — Wave C release | Gates + wiring shipped |
| **N** | **[MANDATORY] Reconcile task `E07:S01:T15` status** to actual implementation state: if all ACs satisfied → `COMPLETE` + `✅ COMPLETE (v{version})`; if ongoing → `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. | Task doc status reflects actual state |

**RW verification rule (BR-097):** Steps 6, 12, 17 prescribe **`RW E07:S01:T15 --art`** only (BUILD +1). Never prescribe `--doc-policy-zero` for follow-on releases.

### §4.1 Files to create or modify

| Path | Action |
| ---- | ------ |
| `docs/implementation-cycles/IPP-E07S01T15-repository-information-architecture-steady-state-governance.md` | CREATE (this IPP) |
| `docs/architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md` | CREATE |
| `docs/governance/standards/repository-information-architecture-policy.md` | CREATE |
| `docs/maintenance/repository-path-manifest.json` | CREATE (generated, committed) |
| `docs/maintenance/repository-ia-mover-wave-checklist.md` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/maintenance/generate_repository_path_manifest.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/maintenance/repository_ia_exclusions.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/validation/validate_repository_top_level_directories.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/validation/validate_repository_path_manifest.py` | CREATE |
| `tests/workflow_mgt/test_repository_ia_manifest.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py` | UPDATE |
| `rw-config.yaml` | UPDATE (`repository_ia:` config block) |
| `AGENTS.md` | UPDATE (IA pointer in binding rules) |
| `docs/governance/README.md` | UPDATE |
| `docs/maintenance/README.md` | UPDATE |
| `docs/kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md` | UPDATE |
| `docs/kanban/fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md` | UPDATE |
| `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T15-*.md` | UPDATE |
| `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-*.md` | UPDATE (program wiring) |
| `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-*.md` | UPDATE (program wiring) |
| `docs/kanban/kboard.md` | UPDATE (RW Step 7) |

### §4.2 Dependency order

1. Step 1 before any other implementation (status transition).
2. Steps 2–4 before Step 5 (policy artifacts before wiring).
3. Step 5 before Step 6 (Wave A wiring before RW).
4. Step 7 before Step 8 (exclusions module before generator).
5. Step 8 before Steps 13–14 (manifest before validators).
6. Steps 13–14 before Step 15 (validators before CI/pre-commit wiring).
7. Steps 6, 12, 17 are RW boundaries between waves.
8. Step N after Step 17 RW evidence recorded.

### §4.3 Documentation implementation steps

1. Author ADR-033 first — policy cross-links ADR for “why” decisions.
2. Seed aggregation table from FR-140 § map; add maintenance procedure (“update when new IA-touching FBU files”).
3. Copy T13 §0 exclusions into `repository_ia_exclusions.py` — single module for generator + validators.
4. Initial manifest generated from T13 matrix rows (depth ≤ 2) — do not hand-author 90+ rows.
5. Mover checklist references FR-140-F12, T13/T14 sign-off §4, and scoped IPW requirement.
6. `AGENTS.md` — add binding rule pointer only (e.g. `P-REPO-IA`); do not duplicate policy prose.
7. Update E02:S16:T04 “Examples” with manifest regen cycle — coordination note, not scope transfer.

---

## §5 — Documentation deliverables

### §5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T15-repository-information-architecture-steady-state-governance-fr140.md` | IPP link, AC checkboxes, status, version anchor on RW | RF11, Step 1, Step N |
| D-U2 | `docs/kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md` | Status toward IMPLEMENTED; AC progress; link policy | RF7, Step 16 |
| D-U3 | `docs/kanban/fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md` | List FR-140 as coordination surface | RF2, Step 5 |
| D-U4 | `docs/governance/README.md` | Index row for IA policy standard | RF1, Step 5 |
| D-U5 | `docs/maintenance/README.md` | Manifest, mover checklist, regen command | RF3, RF8, Step 10 |
| D-U6 | `AGENTS.md` | One-line IA policy + manifest pointer (`P-REPO-IA`) | RF6, Step 5 |
| D-U7 | T13 + T14 task docs | Confirm FR-140 program umbrella wiring | RF2, Step 5 |
| D-U8 | `docs/kanban/kboard.md` | RW Step 7 row for E07:S01:T15 | Steps 6, 12, 17 |
| D-U9 | `packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py` | Add repository IA validator paths | RF4, RF5, Step 15 |
| D-U10 | `rw-config.yaml` | Optional `repository_ia:` block (manifest path, enforcement modes) | Step 15 |
| D-U11 | `docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-*.md` | Manifest hygiene example in perpetual scope | RF10, Step 16 |

### §5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/impl step) |
| ------ | ------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E07S01T15-repository-information-architecture-steady-state-governance.md` | This IPP (planning package) | RF11, IPW |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md` | Layered IA architecture decision | §2.5 REQUIRED, Step 2 |
| D-C3 | `docs/governance/standards/repository-information-architecture-policy.md` | Constitutional L0 policy | RF1–RF2, RF7, RF9, Step 3 |
| D-C4 | `docs/maintenance/repository-ia-mover-wave-checklist.md` | Mover wave hand-off template | RF8, Step 4 |
| D-C5 | `docs/maintenance/repository-path-manifest.json` | Machine-generated path manifest (committed) | RF3, Step 8 |

### §5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Adopter-public IA guide | **NONE** — maintainer policy + `AGENTS.md` pointer; adopters use framework READMEs (FR-114) |
| Per-file manifest register | **NONE** — explicit non-goal per FR-140; file cartography stays in T14 report |
| Re-run T13/T14 audits | **NONE** — out of scope; policy references existing signed reports |
| Portal pytest | **NONE** — no deliverables under `docs/guides/` or `docs/documentation/` |
| Blocking drift on day one | **DEFERRED** — Phase 3 enforcement may move to E02:S16:T04; documented in §2.3 |

**Governing documents (for ADR EXEMPT N/A — outcome REQUIRED):** ADR-033 (CREATE), [FR-139](../kanban/fbu/FR-139-unified-documentation-governance-strategy.md), [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md), [FR-140](../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md).

---

## §6 — Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E07S01T15-repository-information-architecture-steady-state-governance.md` | NOT_APPLICABLE | Planning artifact; not adopter-public | evergreen | T15 Input + References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md` | NOT_APPLICABLE | Architecture decision record | evergreen | Policy § refs, `docs/governance/README.md` index-only link |
| D-C3 | `docs/governance/standards/repository-information-architecture-policy.md` | NOT_APPLICABLE | Maintainer governance standard | evergreen | `docs/governance/README.md`, FR-140, AGENTS.md |
| D-C4 | `docs/maintenance/repository-ia-mover-wave-checklist.md` | NOT_APPLICABLE | Maintainer runbook | evergreen | Policy § hand-off, `docs/maintenance/README.md` |
| D-C5 | `docs/maintenance/repository-path-manifest.json` | NOT_APPLICABLE | Generated maintainer artifact | evergreen | Policy § L2, AGENTS.md pointer |
| D-U1–D-U11 | (see §5.1) | NOT_APPLICABLE | Kanban / config / framework surfaces | evergreen | Per §4.1 |

**Housing rationale:** Policy under `docs/governance/standards/` matches FR-101/FR-139 taxonomy (constitutional rules). Manifest and checklist under `docs/maintenance/` match operational maintainer corpus (ADR-026). Scripts under `packages/frameworks/workflow-mgt/scripts/` match RNF2 and `validate_fbu_directory.py` precedent.

---

## §7 — Success / verification criteria

- [ ] **AC0:** IPP linked from T15 Input and References (bidirectional with this file)
- [ ] **AC1:** FR-140 F1–F10 each addressed in §1 (RF1–RF10) or §5.3 deferral table
- [ ] **AC2:** T14 release gate (FR-140-F13) documented in policy § cartography
- [ ] **AC3:** Aggregation table in policy matches FR-140 program map at ship time
- [ ] **AC4:** Generator deterministic; exclusions align with T13 §0
- [ ] **AC5:** RW Step 7 four-surface reconciliation on final **`RW E07:S01:T15 --art`**
- [ ] ADR-033 created and linked from policy
- [ ] At least one **blocking** gate path live (top-level directories)
- [ ] `pytest tests/workflow_mgt/test_repository_ia_manifest.py -q` green (Wave B+)
- [ ] `validate_actions_ci_parity.py --strict` green before each RW commit (Wave C+)
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 paths exist and are linked from task doc
- [ ] **Portal:** N/A — no §6 path under `docs/guides/` or `docs/documentation/`
- [ ] **Greenfield:** `python scripts/sync_greenfield_install.py --check` green when `packages/frameworks/**` changed (Waves B, C)

---

## References

- [FR-140](../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md)
- [E07:S01:T15 host task](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T15-repository-information-architecture-steady-state-governance-fr140.md)
- [REPOSITORY-DIRECTORY-AUDIT.md](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) — T13 cartography @ v0.7.1.13+1
- [REPOSITORY-FILE-AUDIT.md](../maintenance/REPOSITORY-FILE-AUDIT.md) — T14 cartography @ v0.7.1.14+1
- [IPP-E07S01T13](IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md) · [IPP-E07S01T14](IPP-E07S01T14-comprehensive-repository-file-level-audit.md)
- [FR-039](../kanban/fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [FR-139](../kanban/fbu/FR-139-unified-documentation-governance-strategy.md) / [documentation-governance-strategy.md](../governance/standards/documentation-governance-strategy.md)
- [FR-110](../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — greenfield mirror
- [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- [ADR-012](../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)
- [E02:S16:T04](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md) — perpetual manifest hygiene
- [validate_fbu_directory.py](../../packages/frameworks/workflow-mgt/scripts/validation/validate_fbu_directory.py) — validator precedent
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [specification-and-planning-artifacts-policy.md](../governance/standards/specification-and-planning-artifacts-policy.md)
