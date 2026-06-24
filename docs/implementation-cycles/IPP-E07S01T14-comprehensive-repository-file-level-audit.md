---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S01:T14 — Planning: Comprehensive repository file-level audit (IPW / UXR-034)

**Host Task:** [`T14-comprehensive-repository-file-level-audit-uxr034.md`](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) **(E07:S01:T14)**  
**Planning for:** [UXR-034](../kanban/fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)  
**Status:** Approved (planning complete — investigation execution authorized)

> **IPW:** Consolidated IPP per [FR-042](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md). Bidirectional wiring to host task **Input** and **References** is mandatory before investigation execution.

---

## §1 — Requirements (Ascertained Baseline)

### §1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Import **scope + exclusions** from T13 audit ([`REPOSITORY-DIRECTORY-AUDIT.md`](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) §0, §5); no file valuation outside scope without maintainer exception | UXR-034 Methodology step 1, T14 AC1 |
| RF2 | Produce **per-file inventory** within each in-scope directory (deterministic capture + human normalization) | UXR-034 R1, T14 Deliverable phase 2 |
| RF3 | Apply **nine-column per-file rubric**: Path, Parent directory, Purpose class, Purpose statement, Location verdict, Evidence, Reference touch, Parent-directory alignment, Wave | UXR-034 R2, T14 Deliverable table |
| RF4 | Document **duplicate/mirror file pairs** (`packages/frameworks/` ↔ `greenfield-install/packages/frameworks/`) with SoT pointer per pair | UXR-034 R4, T14 AC3 |
| RF5 | Group files into **wave recommendations**: keep · relocate · merge · archive · remove — cross-ref T10, T13, UXR-032, FR-039, FR-140 | UXR-034 R3/R5, T14 AC4 |
| RF6 | Obtain **maintainer sign-off** on file audit report before structural IDW on mover tasks | UXR-034, T14 AC5 |
| RF7 | **Rollup feedback** to T13 / UXR-033 (orphan counts, hotspot paths) per AC7 while T13 sign-off may remain open | UXR-034 §Contextual relationship, T14 AC7 |
| RF8 | **No structural moves** (`git mv`, deletes, renames) in this task — investigation and planning only | UXR-034 Research Objective, T14 Scope |
| RF9 | Reconcile **UXR-034** status and four-surface RW Step 7 on completion release | T14 AC6 |
| RF10 | IPP linked from host task before investigation execution | T14 AC0 |

### §1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Capture must be **deterministic and reproducible** (documented `find`/`rg` commands + UTC timestamp in report §1) | UXR-034 Methodology, FR-140 L1 cartography |
| RNF2 | Audit report is **maintainer-facing** git KB per [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) — not adopter-public portal content | ADR-026, FR-114 |
| RNF3 | **Inherit T13 exclusion patterns**; deprioritize file rows under T13 `remove`/`archive` directory waves unless mover prep requires detail | REPOSITORY-DIRECTORY-AUDIT §3 |
| RNF4 | Valuation rows may use `NEEDS_REVIEW` when evidence is insufficient — must not leave columns blank without explicit marker | T14 AC2 |
| RNF5 | Completion release via **`RW E07:S01:T14 --art`** only (BUILD +1); **never** `--dpz` after kanban-init `v0.7.1.14+0` | BR-097, `.cursorrules` RW prescription |
| RNF6 | **Phased subtree completion** authorized for large `docs/` corpus — full file granularity required for high-risk subtrees (`packages/frameworks/`, `docs/kanban/`, root configs); summary-class rows permitted for low-risk generated-adjacent archives with explicit class rationale | IPW scale note |

### §1.3 Invariants and boundaries

- **Invariants:**
  - File-level scope only within T13-bounded directories; directory valuation remains T13.
  - File valuation must not contradict T13 directory `Archive/remove candidate` without maintainer override note.
  - Excluded path patterns inherited from T13 §0 — excluded files are not row-valued individually.
  - Wave plan references execution tasks; it does not authorize moves in this task.
- **In scope (authoritative — T13 §5 handoff):**
  - `docs/` (except T13 §0 excluded caches under that tree)
  - `packages/frameworks/`
  - `scripts/`
  - `src/ai_dev_kit/`
  - Root-level config files (coordinate with T10 — valuation here, execution deferred to T10 where root-only)
  - Mirror paths under `greenfield-install/packages/frameworks/` for RF4 pair audit
- **Deprioritize / summary-only:**
  - Files under directories T13 marked `remove` or `archive` — optional summary rows unless mover prep needed
  - Changelog archive entries may use **class summary rows** per RNF6 if each entry is homogeneous generated/historical content
- **Out of scope:**
  - `git mv`, file deletes, or structural IDW in this task
  - Whole-repo directory valuation (T13/UXR-033)
  - Root-only hygiene **execution** (T10/UXR-013) — coordinate, do not duplicate mover waves
  - Steady-state IA policy, manifest generator, creation gates (T15/FR-140) — T14 feeds evidence only
  - Adopter-public Docusaurus publication of the file matrix

**Inherited exclusion list (from T13 §0 — no per-file valuation rows under these patterns):**

| Path pattern | Rationale |
| ------------ | --------- |
| `.git/` | VCS metadata |
| `node_modules/` | NPM vendor tree |
| `**/__pycache__/`, `.pytest_cache/`, `.ruff_cache/`, `.mypy_cache/` | Tool caches |
| `.venv/`, `venv/`, `env/` | Local Python virtualenvs |
| `portal/build/`, `portal/.docusaurus/` | Docusaurus build/cache |
| `htmlcov/`, `.cqg/` | Coverage / CodeQL local cache |
| `**/*.egg-info/` | Python package metadata build artifact |

---

## §2 — Specification

### §2.1 Goal

Enable maintainers and agents to answer “what is this **file** for, and does it belong here?” within T13-validated directories — producing a signed-off per-file valuation matrix that feeds FR-039 and FR-140 execution waves without performing structural changes in E07:S01:T14.

### §2.2 Specification mapping from ascertained requirements

The investigation executes in five phases aligned with the host task deliverable table: (0) IPW complete → (1) scope import from T13 → (2) per-directory file capture → (3) per-file valuation matrix + mirror pairs → (4) wave plan with cross-task wiring → (5) maintainer sign-off + T13 rollup. RF1–RF10 map directly to audit report sections; RNF1–RNF6 constrain capture tooling, scale handling, housing, and release mechanics.

### §2.3 Constraints

- Investigation commits **only via RW** on `E07:S01:T14 --art` (BUILD +1 per release wave).
- **Forbidden:** `--doc-policy-zero` / `--dpz` for completion or follow-on releases after kanban-init `v0.7.1.14+0`.
- Primary report path: **`docs/maintenance/REPOSITORY-FILE-AUDIT.md`** (maintainer KB — paired with [`REPOSITORY-DIRECTORY-AUDIT.md`](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md)).
- Reuse nine-column rubric from host task; do not invent parallel schemas.
- **Reference-touch bands** (for Evidence / Reference touch columns):
  - **Low:** 0–2 repo references (`rg` count excluding self-path)
  - **Medium:** 3–10 references or single README/policy cite as primary evidence
  - **High:** CI / `rw-config` / `AGENTS.md` / install critical path or 11+ references

**Capture command (document in report §1):**

```bash
find <scoped-dir> -type f \
  \( -path '*/.git/*' -o -path '*/node_modules/*' -o -path '*/__pycache__/*' \
     -o -path '*/.pytest_cache/*' -o -path '*/portal/build/*' \) -prune -o \
  -type f -print | sort
```

### §2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4 — status field update when investigation execution begins).
- **Transition trigger to COMPLETE:** All T14 AC0–AC7 satisfied with evidence in audit report + maintainer sign-off row + `RW E07:S01:T14 --art` release.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row status must update in the same change set/session on RW Step 7.
- **Owner:** Implementation execution (IDW), not this IPW session.

### §2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **N** | Single prescribed approach: file-level inventory-first audit doc extending T13 precedent |
| T2 | Reversibility | **N** | No structural changes; audit doc revert is a normal PR |
| T3 | Blast radius | **N** | Confined to maintainer doc + task/UXR status updates listed in §4.1 |
| T4 | Precedent | **N** | Extends T13/FR-101/FR-118 inventory pattern; does not establish new architectural option ladder |
| T5 | Constraint trade-off | **N** | No security/performance/versioning trade-off decision |
| T6 | Governance contract | **N** | Does not alter RW, IPW, UKW, or validator gates |
| T7 | Supersedes | **N** | Complements ADR-026/FR-140; does not narrow existing ADRs |

**Outcome:** **EXEMPT**

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | **Y** | Deliverables confined to §4.1 file list |
| E2 | No new options | **Y** | Implements UXR-034 + T14 AC via established inventory-first pattern |
| E3 | Reversible in one task | **Y** | Rollback = revert audit doc and task links |
| E4 | Spec elsewhere | **Y** | UXR-034 methodology + T14 rubric + T13 audit + FR-140 cartography leg govern content |
| E5 | Documented NONE | **Y** | §5.3 cites governing docs; no ADR row required |

**Governing documents:** [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md), [FR-140](../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md) (program umbrella), [REPOSITORY-DIRECTORY-AUDIT.md](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) (scope authority), [IPP-E07S01T13](IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md) (paired directory IPP).

---

## §3 — Test design

**`--skip-tests` justification:** Investigation-only task — **no executable code**, validators, or framework package changes. Verification is **structural and documentary**: scope import fidelity, rubric column population, mirror-pair completeness, cross-reference integrity, T13 rollup, and maintainer sign-off gate. Pytest and CI parity gates apply only if implementation accidentally touches `packages/frameworks/**` (out of scope).

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Scope import | Report §0 matches T13 §5 handoff + §0 exclusions; no out-of-scope file rows |
| T2 | Inventory completeness | Every in-scope file has a row, class summary row, or explicit `NEEDS_REVIEW` with reason (RNF6) |
| T3 | Rubric columns | All nine minimum columns populated or `NEEDS_REVIEW` per T14 AC2 |
| T4 | Mirror pairs | §2.1 documents `packages/` ↔ `greenfield-install/` SoT pointers per AC3 |
| T5 | Wave cross-refs | Wave plan links T10, T13, UXR-032, FR-039, FR-140 — no duplicate mover authorization per AC4 |
| T6 | Sign-off gate | Sign-off table present with Approved checkbox before COMPLETE per AC5 |
| T7 | Link integrity | `rg` spot-check: audit report links resolve; task ↔ UXR ↔ IPP ↔ T13 report bidirectional |
| T8 | T13 rollup | §5 rollup or T13 addendum updated with orphan counts / hotspots per AC7 |
| T9 | Release readiness | RW Step 9 validators pass on **`RW E07:S01:T14 --art`** (BUILD +1) |

---

## §4 — Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E07:S01:T14` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create audit report skeleton at `docs/maintenance/REPOSITORY-FILE-AUDIT.md`: frontmatter, §0 scope import, §1 capture methodology, §2 valuation matrix template, §2.1 mirror pairs, §3 wave plan, §4 sign-off, §5 T13 rollup | Report scaffold with rubric headers |
| 3 | **Scope import** — Copy T13 §0 exclusions + §5 directory list; link FR-140 program; note root-file overlap with T10 (coordinate, don't duplicate execution) | §0 complete |
| 4 | **Capture wave 1** — `packages/frameworks/` + mirror under `greenfield-install/packages/frameworks/` | §2.1 + framework file rows |
| 5 | **Capture wave 2** — `scripts/`, `src/ai_dev_kit/` | Matrix sections |
| 6 | **Capture wave 3** — `docs/` phased: `kanban/`, `governance/`, `maintenance/`, `implementation-cycles/`, then remainder (class summaries where RNF6 applies) | Largest matrix block |
| 7 | **Capture wave 4** — Root config files (README, rw-config, AGENTS, CLAUDE, .cursorrules, pyproject, etc.) — cross-link T10 scope | Root file rows |
| 8 | **Valuation pass** — Apply rubric; `rg`/import scan for reference-touch bands; flag **Tension** where file purpose conflicts with T13 directory class | Populated matrix |
| 9 | **Mirror pair audit** — SoT = `packages/frameworks/` unless documented exception | §2.1 table complete |
| 10 | **Wave plan** — Group file rows; link execution owners (FR-039, T10, T13 directory waves, UXR-032 link sweep, FR-140 aggregation) | §3 wave table |
| 11 | **T13 rollup** — Orphan counts, suboptimal hotspots → T14 §5 and/or T13 report §5 addendum | AC7 evidence |
| 12 | **Maintainer review** — Present report for sign-off; record approver row in §4 | Sign-off table completed |
| 13 | Update **UXR-034** Key Findings + Recommendations; update `docs/maintenance/README.md` index row | Linked maintainer surfaces |
| 14 | **`RW E07:S01:T14 --art`** — version bump BUILD +1, changelog, RW Step 7 four-surface reconciliation (task, UXR-034, kboard IPP segment, T13 rollup note). **Do not use `--dpz`.** | Local release `v0.7.1.14+{N}` |
| **N** | **[MANDATORY] Reconcile task `E07:S01:T14` status** to actual implementation state: if all ACs satisfied with sign-off evidence → `COMPLETE` + `✅ COMPLETE (v{version})`; if sign-off pending → `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. | Task doc status reflects actual state |

**RW verification rule (BR-097):** Step 14 prescribes **`RW E07:S01:T14 --art`** only (BUILD +1). Never prescribe `--doc-policy-zero` for this completion release.

### §4.1 Files to create or modify

| Path | Action |
| ---- | ------ |
| `docs/maintenance/REPOSITORY-FILE-AUDIT.md` | **CREATE** (primary deliverable) |
| `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md` | **UPDATE** (status, AC checkboxes, sign-off pointer, IPP link) |
| `docs/kanban/fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md` | **UPDATE** (findings, recommendation checkboxes, status) |
| `docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md` | **UPDATE** (§5 rollup addendum — AC7) |
| `docs/maintenance/README.md` | **UPDATE** (index row for file audit report) |
| `docs/kanban/kboard.md` | **UPDATE** (RW Step 7 — E07:S01:T14 row + IPP segment) |

### §4.2 Dependency order

1. Steps 1–3 before capture (status + scaffold + scope import).
2. Steps 4–7 before Step 8 (inventory before valuation).
3. Step 8 before Steps 9–10 (matrix before mirror audit and waves).
4. Step 11 after Step 10 (rollup needs wave hotspots).
5. Step 12 before Step 14 (sign-off before COMPLETE release).
6. Steps 13–14 after sign-off.
7. Step N after Step 14 RW evidence recorded.

### §4.3 Documentation implementation steps

1. Scaffold report with nine-column rubric copied from host task (avoid schema drift).
2. Populate matrix by capture wave — high-risk subtrees at full file granularity first.
3. Cross-check T13 directory purpose classes for parent-directory alignment column.
4. Flag UXR-032 `fbu/` path references in wave plan (link sweep coordination, not rename execution).
5. Index from `docs/maintenance/README.md`; cross-link from T13 report §5 ↔ T14 report §0.
6. Keep audit out of portal allowlist (maintainer KB only).

---

## §5 — Documentation deliverables

### §5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md` | AC checkboxes, status, sign-off link, version anchor on RW, IPP wired | RF10, Step 1, Step N |
| D-U2 | `docs/kanban/fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md` | Key Findings, Recommendations `[x]`, status toward IMPLEMENTED | RF9, Step 13 |
| D-U3 | `docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md` | §5 rollup addendum from T14 §5 | RF7, Step 11 |
| D-U4 | `docs/maintenance/README.md` | Add file audit report to guides table | Step 13 |
| D-U5 | `docs/kanban/kboard.md` | RW Step 7 row for E07:S01:T14 / UXR-034; IPP segment | Step 14 |

### §5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/impl step) |
| ------ | ------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md` | This IPP (planning package) | RF10, IPW |
| D-C2 | `docs/maintenance/REPOSITORY-FILE-AUDIT.md` | Per-file valuation matrix + mirror pairs + wave plan + sign-off + T13 rollup | RF1–RF7, Steps 2–12 |

### §5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| ADR for file audit methodology | **NONE** — EXEMPT per §2.5; governed by ADR-026 + T13 IPP + FR-140 cartography leg |
| Adopter-public file map | **NONE** — maintainer KB only (FR-114) |
| Directory-level audit | **NONE in T14** — owned by T13/UXR-033; T14 imports scope only |
| Steady-state IA policy / manifest | **NONE in T14** — owned by T15/FR-140; T14 feeds evidence |
| CI validator for new files | **NONE** — defer to T15/FR-140 gates |
| `greenfield-install/` sync | **NONE** — no package changes; cite sync script in mirror evidence only |
| Portal pytest | **NONE** — no paths under `docs/guides/` or `docs/documentation/` |

---

## §6 — Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md` | NOT_APPLICABLE | Planning artifact; not adopter-public | evergreen | T14 Input + References (wired) |
| D-C2 | `docs/maintenance/REPOSITORY-FILE-AUDIT.md` | NOT_APPLICABLE | Maintainer KB per ADR-026; excluded from Docusaurus allowlist | evergreen | T14 Deliverable, UXR-034 R1, T13 §5 cross-link, `docs/maintenance/README.md` |
| D-U1 | `docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-*.md` | NOT_APPLICABLE | Kanban task doc | evergreen | kboard row |
| D-U2 | `docs/kanban/fbu/UXR-034-*.md` | NOT_APPLICABLE | FBU intake doc | evergreen | T14 Cross-Wiring |
| D-U3 | `docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md` | NOT_APPLICABLE | Paired directory audit | evergreen | T14 §0 scope authority |
| D-U4 | `docs/maintenance/README.md` | NOT_APPLICABLE | Maintainer index | evergreen | — |

**Housing rationale:** `docs/maintenance/` hosts paired cartography reports (`REPOSITORY-DIRECTORY-AUDIT.md` + `REPOSITORY-FILE-AUDIT.md`) under FR-140 L1 cartography leg — operational maintainer evidence, not governance policy hub.

---

## §7 — Success / verification criteria

- [ ] **AC0:** IPP linked from T14 Input and References (bidirectional with this file)
- [ ] **AC1:** Scope imported from T13 with documented exclusions applied
- [ ] **AC2:** Every non-excluded in-scope file has a valuation row with all rubric columns or `NEEDS_REVIEW` / class summary per RNF6
- [ ] **AC3:** Mirror file pairs documented with SoT pointers
- [ ] **AC4:** Wave plan cross-references T10, T13, UXR-032, FR-039, FR-140 without duplicate movers
- [ ] **AC5:** Maintainer sign-off row completed in audit report §4
- [ ] **AC6:** UXR-034 reconciled; RW Step 7 four-surface pass on **`RW E07:S01:T14 --art`**
- [ ] **AC7:** T13 rollup updated (orphan counts, hotspot paths)
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 paths exist and are linked from task doc
- [ ] §3 structural checks T1–T9 executed (no pytest required — `--skip-tests` justified)
- [ ] **Portal:** N/A — no §6 path under `docs/guides/` or `docs/documentation/`
- [ ] **Greenfield:** N/A — no §6 path under `packages/frameworks/`

---

## References

- [UXR-034](../kanban/fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)
- [E07:S01:T14 host task](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md)
- [UXR-033 / E07:S01:T13](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) — paired directory layer
- [REPOSITORY-DIRECTORY-AUDIT.md](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) — scope authority
- [IPP-E07S01T13](IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md) — paired directory IPP
- [FR-140](../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md) — program umbrella
- [FR-039](../kanban/fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [UXR-013](../kanban/fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md) — root-only (T10)
- [UXR-032](../kanban/fbu/UXR-032-fr-br-directory-rename-to-fbu.md) — fbu path rename coordination
- [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [specification-and-planning-artifacts-policy.md](../governance/standards/specification-and-planning-artifacts-policy.md)
