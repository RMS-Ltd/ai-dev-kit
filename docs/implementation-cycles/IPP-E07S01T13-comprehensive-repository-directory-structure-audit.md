---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S01:T13 — Planning: Comprehensive repository directory structure audit (IPW / UXR-033)

**Host Task:** [`T13-comprehensive-repository-directory-structure-audit-uxr033.md`](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) **(E07:S01:T13)**  
**Planning for:** [UXR-033](../kanban/fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)  
**Status:** Approved (planning complete — investigation execution authorized)

> **IPW:** Consolidated IPP per [FR-042](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md). Bidirectional wiring to host task **Input** and **References** is mandatory before investigation execution.

---

## §1 — Requirements (Ascertained Baseline)

### §1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Produce a **whole-repository directory inventory** (top-level and nested) with documented exclusion rules for generated/vendor trees | UXR-033 R1, T13 AC1 |
| RF2 | Apply a **per-directory valuation rubric** with minimum columns: Path, Purpose class, Purpose statement, Location verdict, Evidence, Ripple risk, Wave | UXR-033 R2, T13 Deliverable table |
| RF3 | Classify **Framework SoT vs dev-kit-local vs `greenfield-install/` mirror** for every relevant `packages/` and `greenfield-install/` subtree | UXR-033 R4, T13 AC3 |
| RF4 | Group directories into **wave recommendations**: keep · relocate · consolidate · archive · remove — with dependency notes | UXR-033 R3, T13 Deliverable phase 3 |
| RF5 | **Cross-reference existing tasks** (T10/UXR-013, T11/FR-101, T12/FR-118, UXR-032, FR-039, T14/UXR-034) to avoid duplicate mover scope | UXR-033 R5/R7, T13 AC4 |
| RF6 | Obtain **maintainer sign-off** on audit report before any structural IDW on mover tasks | UXR-033, T13 AC5 |
| RF7 | Reconcile **UXR-033** status and four-surface RW Step 7 on completion release | T13 AC6 |
| RF8 | **No structural moves** (`git mv`, deletes, renames) in this task — investigation and planning only | UXR-033 Research Objective, T13 Scope |
| RF9 | Hand off in-scope directories to **E07:S01:T14 / UXR-034** for file-level drill-down; incorporate T14 rollups before T13 sign-off where practical | UXR-033 §Contextual relationship, R7 |
| RF10 | IPP linked from host task before investigation execution | T13 AC0 |

### §1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Inventory must be **deterministic and reproducible** (script-assisted capture + human normalization of symlinks/empty dirs) | UXR-033 Methodology |
| RNF2 | Audit report is **maintainer-facing** git KB per [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) — not adopter-public portal content | ADR-026, FR-114 |
| RNF3 | Follow **inventory-first precedent** from FR-101 / FR-118 (sign-off before moves; this task stops at sign-off) | GOVERNANCE-REHOUSING-INVENTORY, KANBAN-REHOUSING-INVENTORY |
| RNF4 | Valuation rows may use `NEEDS_REVIEW` when evidence is insufficient — must not leave columns blank without explicit marker | T13 AC2 |
| RNF5 | Completion release via **`RW E07:S01:T13 --art`** only (BUILD +1); **never** `--dpz` for follow-on waves | BR-097, `.cursorrules` RW prescription |

### §1.3 Invariants and boundaries

- **Invariants:**
  - Directory-level scope only; file-level hygiene remains UXR-013/T10 and UXR-034/T14.
  - Excluded trees are listed once in the audit report and never valued row-by-row.
  - Wave plan references execution tasks; it does not authorize moves in this task.
- **In scope:**
  - All non-excluded directories under repo root.
  - Per-directory rubric, SoT boundary map, wave plan, maintainer sign-off section.
  - Cross-wiring updates to UXR-033, task doc, and maintainer index surfaces.
- **Out of scope:**
  - `git mv`, directory deletes, or structural IDW in this task.
  - File-level per-file valuation (T14/UXR-034).
  - Root-only file hygiene execution (T10/UXR-013).
  - Optional CI validator for new top-level dirs (UXR-033 R6 — follow-on only).
  - Adopter-public Docusaurus publication of the audit matrix.

**Documented exclusion list (generated/vendor — no per-directory valuation rows):**

| Path pattern | Rationale |
| ------------ | --------- |
| `.git/` | VCS metadata |
| `node_modules/` | NPM vendor tree |
| `**/__pycache__/` | Python bytecode cache |
| `.venv/`, `venv/`, `env/` | Local Python virtualenvs |
| `portal/build/` | Docusaurus production build output |
| `portal/.docusaurus/` | Docusaurus cache |
| `htmlcov/` | Coverage HTML output |
| `.cqg/` | CodeQL local cache |
| `**/*.egg-info/` | Python package metadata build artifact |
| `.pytest_cache/`, `.mypy_cache/`, `.ruff_cache/` | Tool caches (extend list in report §0 if discovered during capture) |

---

## §2 — Specification

### §2.1 Goal

Enable maintainers and agents to answer “what is this directory for, and should it live here?” with an evidence-backed, repo-wide valuation matrix — producing a signed-off maintainer audit report that prioritizes reorganization waves without performing structural changes in E07:S01:T13.

### §2.2 Specification mapping from ascertained requirements

The investigation executes in four phases aligned with the host task deliverable table: (0) IPW complete → (1) tree capture with exclusions → (2) per-directory valuation matrix → (3) wave plan with cross-task wiring → (4) maintainer sign-off. RF1–RF10 map directly to audit report sections; RNF1–RNF5 constrain capture tooling, housing, and release mechanics.

### §2.3 Constraints

- Investigation commits **only via RW** on `E07:S01:T13 --art` (BUILD +1 per release wave).
- **Forbidden:** `--doc-policy-zero` / `--dpz` for completion or follow-on releases after kanban-init `v0.7.1.13+0`.
- Primary report path: **`docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md`** (maintainer KB — matches FR-101/118 inventory housing under operational docs, not governance policy hub).
- Reuse rubric column definitions from host task; do not invent parallel schemas.

### §2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4 — status field update when investigation execution begins).
- **Transition trigger to COMPLETE:** All T13 AC0–AC6 satisfied with evidence in audit report + maintainer sign-off row + `RW E07:S01:T13 --art` release.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row status must update in the same change set/session on RW Step 7.
- **Owner:** Implementation execution (IDW), not this IPW session.

### §2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **N** | Single prescribed approach: inventory-first audit doc per FR-101/FR-118 precedent |
| T2 | Reversibility | **N** | No structural changes; audit doc revert is a normal PR |
| T3 | Blast radius | **N** | Confined to maintainer doc + task/UXR status updates listed in §4.1 |
| T4 | Precedent | **N** | Extends existing inventory pattern; does not establish a new architectural option ladder |
| T5 | Constraint trade-off | **N** | No security/performance/versioning trade-off decision |
| T6 | Governance contract | **N** | Does not alter RW, IPW, UKW, or validator gates |
| T7 | Supersedes | **N** | Complements ADR-026/FR-114 surfaces; does not narrow existing ADRs |

**Outcome:** **EXEMPT**

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | **Y** | Deliverables confined to §4.1 file list |
| E2 | No new options | **Y** | Implements UXR-033 + T13 AC via established inventory-first pattern |
| E3 | Reversible in one task | **Y** | Rollback = revert audit doc and task links |
| E4 | Spec elsewhere | **Y** | UXR-033 methodology + T13 rubric + FR-101/FR-118 inventories govern content |
| E5 | Documented NONE | **Y** | §5.3 cites governing docs; no ADR row required |

**Governing documents:** [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) (maintainer KB housing), [GOVERNANCE-REHOUSING-INVENTORY.md](../governance/GOVERNANCE-REHOUSING-INVENTORY.md) and [KANBAN-REHOUSING-INVENTORY.md](../governance/KANBAN-REHOUSING-INVENTORY.md) (inventory-first methodology).

---

## §3 — Test design

**`--skip-tests` justification:** Investigation-only task — **no executable code**, validators, or framework package changes. Verification is **structural and documentary**: completeness of inventory, rubric column population, cross-reference integrity, and maintainer sign-off gate. Pytest and CI parity gates apply only if implementation accidentally touches `packages/frameworks/**` (out of scope).

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Exclusion rules | Audit report §0 lists all excluded patterns; no valuation rows for excluded paths |
| T2 | Inventory completeness | Every non-excluded directory appears exactly once in matrix (or explicit `NEEDS_REVIEW` with reason) |
| T3 | Rubric columns | All seven minimum columns populated or `NEEDS_REVIEW` per T13 AC2 |
| T4 | SoT classification | `packages/` vs `greenfield-install/` mirror rows cite source README or sync script per AC3 |
| T5 | Wave cross-refs | Wave plan links T10, T11, T12, UXR-032, FR-039, T14 — no duplicate mover authorization per AC4 |
| T6 | Sign-off gate | Sign-off table present with Approved checkbox before COMPLETE status per AC5 |
| T7 | Link integrity | `rg` spot-check: audit report links resolve; task ↔ UXR ↔ IPP bidirectional links valid |
| T8 | Release readiness | `validate_release_readiness.py` passes on **`RW E07:S01:T13 --art`** (BUILD +1) |

---

## §4 — Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E07:S01:T13` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create audit report skeleton at `docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md`: frontmatter, §0 exclusions, §1 capture methodology, §2 valuation matrix template, §3 wave plan, §4 sign-off, §5 cross-task index | Report scaffold with rubric headers |
| 3 | **Tree capture** — Run deterministic directory listing (`find` / script); normalize symlinks and empty dirs; append full path list to report §1; document capture command and timestamp | Machine-readable inventory + human notes |
| 4 | **Valuation pass** — For each non-excluded directory, fill rubric row: purpose class, statement, location verdict, evidence (README, policy, `rw-config`, or gap), ripple risk | Complete §2 matrix (or `NEEDS_REVIEW` markers) |
| 5 | **SoT boundary map** — Dedicated subsection for `packages/frameworks/*` vs `greenfield-install/*` derivatives; cite `sync_greenfield_install.py` and package READMEs | §2.1 or §3.1 SoT table |
| 6 | **Wave plan** — Group rows into keep / relocate / consolidate / archive / remove buckets; link overlapping execution to T10, T11 (complete), T12 (complete), UXR-032, FR-039, T14 | §3 wave table with dependency column |
| 7 | **T14 handoff section** — Export in-scope directory list for UXR-034; note bidirectional rollup expectation before sign-off | §5 pointer to T14 task doc |
| 8 | **Maintainer review** — Present report for sign-off; record approver row in §4 (blocks COMPLETE until checked) | Sign-off table completed |
| 9 | Update **UXR-033** Key Findings + Recommendations checkboxes; update `docs/maintenance/README.md` index row; optional cross-link from `docs/governance/README.md` “See also” | Linked maintainer surfaces |
| 10 | **`RW E07:S01:T13 --art`** — version bump BUILD +1, changelog, RW Step 7 four-surface reconciliation (task, UXR-033, kboard, FR-039 coordination note if needed). **Do not use `--dpz`.** | Local release `v0.7.1.13+{N}` |
| **N** | **[MANDATORY] Reconcile task `E07:S01:T13` status** to actual implementation state: if all ACs satisfied with sign-off evidence → `COMPLETE` + `✅ COMPLETE (v{version})`; if sign-off pending → `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. | Task doc status reflects actual state |

**RW verification rule (BR-097):** Step 10 prescribes **`RW E07:S01:T13 --art`** only (BUILD +1). Never prescribe `--doc-policy-zero` for this completion release.

### §4.1 Files to create or modify

| Path | Action |
| ---- | ------ |
| `docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md` | **CREATE** (primary deliverable) |
| `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md` | **UPDATE** (status, AC checkboxes, sign-off pointer) |
| `docs/kanban/fbu/UXR-033-comprehensive-repository-directory-structure-audit.md` | **UPDATE** (findings, recommendation checkboxes, status) |
| `docs/maintenance/README.md` | **UPDATE** (index row for audit report) |
| `docs/governance/README.md` | **UPDATE** (optional “Repository audit” see-also link) |
| `docs/kanban/kboard.md` | **UPDATE** (RW Step 7 — task/UXR row stamps) |

### §4.2 Dependency order

1. Steps 1–2 before capture (status + scaffold).
2. Step 3 before Steps 4–5 (inventory before valuation).
3. Steps 4–5 before Step 6 (matrix before waves).
4. Step 7 after Step 6 (T14 handoff needs wave scope).
5. Step 8 before Step 10 (sign-off before COMPLETE release).
6. Step 9–10 after sign-off.
7. Step N after Step 10 RW evidence recorded.

### §4.3 Documentation implementation steps

1. Scaffold report with rubric template copied from host task (avoid schema drift).
2. Populate matrix bottom-up: leaf directories first, then parent rollup purpose statements where helpful.
3. Cross-check FR-101 and FR-118 inventory paths — mark completed rehousing as `Acceptable`/`Optimal` with inventory citation.
4. Flag UXR-032 `fbu/` rename ripple in wave plan (coordinate path references, not execute rename).
5. Index from `docs/maintenance/README.md`; keep audit out of portal allowlist.

---

## §5 — Documentation deliverables

### §5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md` | AC checkboxes, status, sign-off link, version anchor on RW | RF10, Step 1, Step N |
| D-U2 | `docs/kanban/fbu/UXR-033-comprehensive-repository-directory-structure-audit.md` | Key Findings, Recommendations `[x]`, status toward IMPLEMENTED | RF7, Step 9 |
| D-U3 | `docs/maintenance/README.md` | Add audit report to guides table | Step 9 |
| D-U4 | `docs/governance/README.md` | Optional see-also link to audit (inventory precedent) | Step 9 |
| D-U5 | `docs/kanban/kboard.md` | RW Step 7 row for E07:S01:T13 / UXR-033 | Step 10 |

### §5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/impl step) |
| ------ | ------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md` | This IPP (planning package) | RF10, IPW |
| D-C2 | `docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md` | Whole-repo directory valuation matrix + wave plan + sign-off | RF1–RF6, Steps 2–8 |

### §5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| ADR for audit methodology | **NONE** — EXEMPT per §2.5; governed by ADR-026 + FR-101/118 inventory precedent |
| Adopter-public repo map | **NONE** — maintainer KB only; adopters use framework READMEs and INSTALL guides (FR-114) |
| File-level audit report | **NONE in T13** — owned by T14/UXR-034; T13 exports directory scope list only |
| CI validator for new top-level dirs | **NONE** — UXR-033 R6 optional follow-on; defer until rubric stable |
| `greenfield-install/` sync | **NONE** — no package changes; cite existing sync script in evidence column only |
| Portal pytest | **NONE** — no paths under `docs/guides/` or `docs/documentation/` |

---

## §6 — Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md` | NOT_APPLICABLE | Planning artifact; not adopter-public | evergreen | T13 Input + References (wired) |
| D-C2 | `docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md` | NOT_APPLICABLE | Maintainer KB per ADR-026; excluded from Docusaurus allowlist | evergreen | T13 Deliverable, UXR-033 R1, `docs/maintenance/README.md` |
| D-U1 | `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-*.md` | NOT_APPLICABLE | Kanban task doc | evergreen | kboard row |
| D-U2 | `docs/kanban/fbu/UXR-033-*.md` | NOT_APPLICABLE | FBU intake doc | evergreen | T13 Cross-Wiring |
| D-U3 | `docs/maintenance/README.md` | NOT_APPLICABLE | Maintainer index | evergreen | — |
| D-U4 | `docs/governance/README.md` | NOT_APPLICABLE | Governance hub | evergreen | Optional see-also only |

**Housing rationale:** `docs/maintenance/` matches operational maintainer runbooks and evidence reports (e.g. `book-repo-docs-scope.md`, semver verification scans). Governance inventories (FR-101/FR-118) live under `docs/governance/` because they were move-authorization artifacts for policy rehousing; this audit is broader repo IA and fits the maintenance corpus.

---

## §7 — Success / verification criteria

- [ ] **AC0:** IPP linked from T13 Input and References (bidirectional with this file)
- [ ] **AC1:** Directory inventory captured; §0 exclusion rules documented and applied
- [ ] **AC2:** Every non-excluded directory has a valuation row with all rubric columns or `NEEDS_REVIEW`
- [ ] **AC3:** Framework SoT vs dev-kit-local vs greenfield mirror classification documented
- [ ] **AC4:** Wave plan cross-references T10, T11, T12, UXR-032, FR-039, T14 without duplicate movers
- [ ] **AC5:** Maintainer sign-off row completed in audit report §4
- [ ] **AC6:** UXR-033 reconciled; RW Step 7 four-surface pass on **`RW E07:S01:T13 --art`**
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 paths exist and are linked from task doc
- [ ] §3 structural checks T1–T8 executed (no pytest required — `--skip-tests` justified)
- [ ] **Portal:** N/A — no §6 path under `docs/guides/` or `docs/documentation/`
- [ ] **Greenfield:** N/A — no §6 path under `packages/frameworks/`

---

## References

- [UXR-033](../kanban/fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)
- [E07:S01:T13 host task](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md)
- [UXR-034 / E07:S01:T14](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) — paired file layer
- [FR-039](../kanban/fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [UXR-013](../kanban/fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md) — root-only (T10)
- [UXR-032](../kanban/fbu/UXR-032-fr-br-directory-rename-to-fbu.md) — fbu path rename coordination
- [FR-101](../kanban/fbu/FR-101-consolidate-governance-under-docs-governance.md) / [GOVERNANCE-REHOUSING-INVENTORY.md](../governance/GOVERNANCE-REHOUSING-INVENTORY.md)
- [FR-118](../kanban/fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md) / [KANBAN-REHOUSING-INVENTORY.md](../governance/KANBAN-REHOUSING-INVENTORY.md)
- [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [specification-and-planning-artifacts-policy.md](../governance/standards/specification-and-planning-artifacts-policy.md)
