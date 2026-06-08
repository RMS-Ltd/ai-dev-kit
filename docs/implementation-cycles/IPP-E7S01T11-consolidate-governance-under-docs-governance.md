---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E7:S01:T11 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T11-consolidate-governance-under-docs-governance-fr101.md`](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md) **(E7:S01:T11)**  
**Planning for:** [FR-101](../kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md)  
**Status:** Approved (planning complete — implementation blocked on AC0 maintainer sign-off)

> **IPW (Implementation Planning Workflow):** Consolidated IPP per [FR-042](../kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md). Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Phase 0 inventory complete and **maintainer-approved** before any `git mv` | FR-101-F1, AC0, T11 AC0 |
| RF2 | MOVE book-active policies to `docs/governance/kanban/` and `docs/governance/standards/` with stubs at legacy paths | FR-101-F3, inventory §1 |
| RF3 | INDEX rows remain under `docs/architecture/standards-and-adrs/`; hub cross-links only | FR-101-F4 |
| RF4 | **Bidirectional wiring principle** relocated to `docs/governance/principles/bidirectional-wiring-principle.md` with stub at `fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md` | FR-101-F5, maintainer decision (IPW) |
| RF5 | Active surfaces updated: `.cursorrules`, `.claude/commands/*`, `kanban-board-guide.md`, portable RW excerpt, `AGENTS.md`, `src/ai_dev_kit/version.py` comment if applicable | FR-101-F6, AC4, inventory §2 |
| RF6 | Create or update `docs/maintenance/book-repo-docs-scope.md` listing `docs/governance/` as **KEEP** | AC3; coordinate [E7:S01:T10](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) |
| RF7 | IPP linked from task Input/References | AC2 |
| RF8 | Populate inventory §4 execution log during Phase 2 execution | FR-101 deliverable table |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Stubs at old paths retain “moved to” banners for ≥ one release cycle | FR-101-NF1 |
| RNF2 | Book kanban policy stub cites `packages/frameworks/kanban/policies/kanban-governance-policy.md` as adopter SoT | FR-101-NF2 |
| RNF3 | Link sweep limited to active surfaces + direct backlinks; do not rewrite changelog archives or `docs/knowledge/kb-migration-mcp-args/` | IPW blast-radius control |

### 1.3 Invariants and boundaries

- **Invariants:**
  - No `git mv` until [GOVERNANCE-REHOUSING-INVENTORY.md](../governance/GOVERNANCE-REHOUSING-INVENTORY.md) sign-off row is checked (AC0).
  - Framework package policies under `packages/frameworks/` remain adopter SoT; book tree holds maintainer copies and stubs.
  - Git history preserved via `git mv` (not copy-delete).
- **In scope:**
  - Five MOVE policies (four standards + one kanban), rituals README merge, bidirectional-wiring principle MOVE, ADR-007, hub/inventory updates, active link sweep, docs scope file.
- **Out of scope:**
  - Kanban boards (`kboard.md`), epic/story/task trees, `fr-br/` intake queue (except wiring stub), `vendor/`, bulk historical archive edits.

---

## 2. Specification

### 2.1 Goal

Establish `docs/governance/` as the canonical navigation and housing for **book-active** governance policies (Kanban, versioning, changelog, IPW/IPP packaging, promoted principles), with ADR-documented topology, legacy stubs, and updated agent/workflow entry points—so maintainers and agents discover one hub instead of scattered `rituals/policy/` and `architecture/standards-and-adrs/` paths.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Specification |
|-------------|---------------|
| RF1 | Wave 0: maintainer signs inventory; implementation waves B–G refuse to start until sign-off |
| RF2 | Wave B/C: `git mv` per inventory; stub banners at `docs/architecture/standards-and-adrs/*` and `docs/project-management/rituals/policy/*` |
| RF3 | `docs/governance/README.md` INDEX section links ADR-006, workflow-flaws, versioning-error guides in place |
| RF4 | Wave D: principle file at `docs/governance/principles/bidirectional-wiring-principle.md`; stub at `fr-br/`; update templates and active refs |
| RF5 | Wave E: sweep inventory §2 surfaces |
| RF6 | Wave F: `book-repo-docs-scope.md` CREATE (file does not exist at IPW time) |
| RF7 | Task doc links this IPP; `Publication Status: NOT_APPLICABLE` (consolidated IPP) |
| RF8 | Inventory §4 table filled per moved item |

### 2.3 Constraints

- Implementation commits land via **RW E7:S01:T11** (project git policy)—not ad-hoc commits during waves.
- Coordinate `book-repo-docs-scope.md` with E7:S01:T10 to avoid conflicting edits (T11 owns AC3 row for `docs/governance/`).
- Update `.cursorrules` and `packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md` in the same wave (dual-source parity).
- Changelog language: use “Change implemented” / “Attempted” until user verifies (RW changelog rules).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `IN PROGRESS` (intake RW `v0.7.1.11+1`).
- **Step 1 (implementation):** Confirm task remains `IN PROGRESS`; refresh `Last updated` (not `TODO → IN PROGRESS`).
- **Transition trigger to COMPLETE:** AC0–AC4 satisfied with verification evidence (T1–T7), user verification, forensic marker `✅ COMPLETE (v{version})`, kboard row aligned per FR-077.
- **Atomic propagation requirement:** Task doc, FR-101 status, kboard, and fbuboard (if applicable) update in same RW Step 7 session.
- **Owner:** Implementation execution (Waves 0–H), not IPW authoring.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Phase 0 inventory already selected single topology (`docs/governance/`) |
| T2 | Reversibility | Y | Mass link revert across `.cursorrules`, templates, framework portable excerpt |
| T3 | Blast radius | Y | Beyond §4.1: agent instructions, `TASK_TEMPLATE.md`, version file comments |
| T4 | Precedent | Y | Post FR-099/ADR-006 book workspace needs canonical governance home |
| T5 | Constraint trade-off | N | Documentation relocation only |
| T6 | Governance contract | Y | Moves policies referenced by RW/IPW/UKW and global implementation gate |
| T7 | Supersedes | N | Complements ADR-006; does not narrow or contradict |

**Outcome:** `REQUIRED` — **CREATE** [`ADR-007-book-governance-document-topology.md`](../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md) in Wave A before first `git mv`.

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | **Fail** | T3 Y — not confined to §4.1 |
| E2 | No new options | — | Not evaluated (triggers present) |
| E3 | Reversible in one task | — | Not evaluated |
| E4 | Spec elsewhere | — | Not evaluated |
| E5 | Documented NONE | — | Not evaluated |

---

## 3. Test design

Doc-only relocation: structural verification (no new pytest module). Do **not** use `--skip-tests`.

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | RF2 — kanban policy stub hygiene | `rg 'rituals/policy/kanban-governance-policy' docs .cursorrules .claude 'packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md'` → stub-only banners or zero non-stub hits |
| T2 | RF2 — versioning policy stub hygiene | `rg 'standards-and-adrs/dev-kit-versioning-policy' docs .cursorrules .claude` → stub-only or zero non-stub hits |
| T3 | RF4 — wiring principle path | `rg 'fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE' docs packages/frameworks/kanban/templates` → stub-only or paths updated to `governance/principles/` |
| T4 | RF5 — IPW/IPP policy links | Spot-check `.cursorrules`, `.claude/commands/ipw.md`, `AGENTS.md` point to `docs/governance/standards/specification-and-planning-artifacts-policy.md` (or stubs that resolve) |
| T5 | AC3 — docs scope | `docs/maintenance/book-repo-docs-scope.md` exists and contains `docs/governance/` with **KEEP** |
| T6 | Hub navigation | `docs/governance/README.md` lists `kanban/`, `standards/`, `principles/`, and INDEX links |
| T7 | Portal (conditional) | If `portal/` links touched versioning policy, run `pytest tests/test_portal_fr068_navigation.py` |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Confirm task `E7:S01:T11` status `IN PROGRESS`** in task doc; update `Last updated`. | Task doc reflects IN PROGRESS |
| **0** | Maintainer signs [GOVERNANCE-REHOUSING-INVENTORY.md](../governance/GOVERNANCE-REHOUSING-INVENTORY.md) sign-off table | AC0 gate cleared |
| **A** | **CREATE** ADR-007 (topology: book `docs/governance/` vs `architecture/` vs `packages/frameworks/`; stub policy; INDEX vs MOVE) | `ADR-007-book-governance-document-topology.md` |
| **B** | `git mv` four standards policies → `docs/governance/standards/`; stubs in `docs/architecture/standards-and-adrs/` | Moved files + stubs |
| **C** | `git mv` kanban policy; merge `rituals/policy/README.md` → `docs/governance/kanban/README.md`; stub under rituals | Kanban tree + stub |
| **D** | `git mv` `BIDIRECTIONAL_WIRING_PRINCIPLE.md` → `docs/governance/principles/bidirectional-wiring-principle.md`; stub at `fr-br/`; update active refs | Principle + stub + link sweep subset |
| **E** | Active surface sweep (inventory §2) | Updated agent/workflow docs |
| **F** | CREATE `docs/maintenance/book-repo-docs-scope.md` (or merge with T10) | AC3 |
| **G** | Run tests T1–T7; populate inventory §4 | Verification log |
| **H** | **RW E7:S01:T11** after user verification | Version, changelog, kanban closure |
| **N** | **[MANDATORY] Reconcile task status** to `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; else `IN PROGRESS` or `BLOCKED` with reason. Sync kboard. | Forensic closure |

### 4.1 Files to create or modify

**CREATE (Wave A/F):**

- `docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md`
- `docs/maintenance/book-repo-docs-scope.md` (if T10 has not created it)
- `docs/governance/kanban/README.md` (merge from rituals README)
- `docs/governance/kanban/kanban-governance-policy.md` (from rituals)
- `docs/governance/standards/dev-kit-versioning-policy.md`
- `docs/governance/standards/changelog-archival-policy.md`
- `docs/governance/standards/specification-and-planning-artifacts-policy.md`
- `docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md`
- `docs/governance/principles/bidirectional-wiring-principle.md`

**MOVE + stub (legacy paths retain stub files):**

- `docs/project-management/rituals/policy/kanban-governance-policy.md` → stub
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` → stub
- `docs/architecture/standards-and-adrs/changelog-archival-policy.md` → stub
- `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md` → stub
- `docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md` → stub
- `docs/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md` → stub

**UPDATE (Wave E — active surfaces):**

- `.cursorrules`
- `.claude/commands/ipw.md`, `rw.md`, `ukw.md`
- `AGENTS.md`
- `docs/kanban/kanban-board-guide.md`
- `packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md`
- `docs/architecture/README.md`
- `docs/governance/README.md`
- `docs/governance/GOVERNANCE-REHOUSING-INVENTORY.md`
- `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- `docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md`
- `docs/kanban/intake-open-taskless-queue.md`
- Inbound links from moved policy bodies (grep each moved filename)

### 4.2 Dependency order

1. Wave 0 (sign-off) → Wave A (ADR-007) → Wave B (standards) → Wave C (kanban) → Wave D (principles) → Wave E (sweep) → Wave F (docs scope) → Wave G (verify) → Wave H (RW).
2. Do not start B–G without AC0.
3. Wave E must include dual-source RW excerpt + `.cursorrules` in same commit set.

### 4.3 Documentation implementation steps

1. Publish ADR-007 before first `git mv`.
2. Update `docs/governance/README.md` after each MOVE wave.
3. Mark inventory §4 rows as moves complete.
4. Wire FR-101 and task doc on RW closure.

**Stub template (each legacy path):**

```markdown
---
lifecycle: evergreen
housekeeping_policy: keep
---

> **MOVED:** Canonical location: `docs/governance/...`
> Framework adopter SoT (if applicable): `packages/frameworks/kanban/policies/kanban-governance-policy.md`
```

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/step) |
| ------ | ---- | --------------- | ----------------- |
| D-U1 | `docs/governance/GOVERNANCE-REHOUSING-INVENTORY.md` | FIX→MOVE for principles; §4 log | RF4, G |
| D-U2 | `docs/governance/README.md` | Post-move navigation; remove bootstrap-only wording | RF2–RF4, C–D |
| D-U3 | `.cursorrules` | Governance policy paths | RF5, E |
| D-U4 | `packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md` | Parity with D-U3 | RF5, E |
| D-U5 | `.claude/commands/ipw.md`, `rw.md`, `ukw.md` | Policy path refs | RF5, E |
| D-U6 | `AGENTS.md` | IPW gate policy paths | RF5, E |
| D-U7 | `docs/kanban/kanban-board-guide.md` | Kanban governance path | RF5, E |
| D-U8 | `docs/architecture/README.md` | Point to governance hub for moved policies | RF3, E |
| D-U9 | `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` | Bidirectional wiring link | RF4, D |
| D-U10 | `docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md` | Wiring principle path | RF4, D |
| D-U11 | `docs/kanban/intake-open-taskless-queue.md` | Governance link | RF4, D |
| D-U12 | Host task + FR-101 | Status, IPP link, closure | RF7, H |
| D-U13 | `src/ai_dev_kit/version.py` | Comment pointer if references versioning policy path | RF5, E |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/step) |
| ------ | ------------- | ------- | ----------------- |
| D-C1 | `docs/implementation-cycles/IPP-E7S1T11-consolidate-governance-under-docs-governance.md` | This IPP | RF7 |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md` | Topology ADR | §2.5, A |
| D-C3 | `docs/maintenance/book-repo-docs-scope.md` | AC3 docs scope | RF6, F |
| D-C4 | `docs/governance/principles/bidirectional-wiring-principle.md` | Canonical principle | RF4, D |
| D-C5–D-C8 | `docs/governance/standards/*` (four files) | Moved policies | RF2, B |
| D-C9 | `docs/governance/kanban/kanban-governance-policy.md` | Moved kanban policy | RF2, C |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Changelog archives (`docs/changelog-and-release-notes/changelog-archive/`) | **NONE** — historical paths retained (RNF3) |
| `docs/knowledge/kb-migration-mcp-args/` | **NONE** — migration snapshots not rewritten |
| `packages/frameworks/kanban/policies/kanban-governance-policy.md` | **NONE** — framework SoT unchanged |
| Epic/story/task kanban trees | **NONE** — out of scope |
| ADR-007 governing doc for EXEMPT | N/A — outcome REQUIRED |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E7S1T11-consolidate-governance-under-docs-governance.md` | NOT_APPLICABLE | Internal planning artifact (BR-066); linked from task doc | evergreen | T11 Input, References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md` | NOT_APPLICABLE | ADR index via architecture README | evergreen | governance README, FR-101 |
| D-C3 | `docs/maintenance/book-repo-docs-scope.md` | NOT_APPLICABLE | Maintainer scope doc | evergreen | governance README, T10/T11 |
| D-C4 | `docs/governance/principles/bidirectional-wiring-principle.md` | NOT_APPLICABLE | Book workspace governance | evergreen | TASK_TEMPLATE, intake-open-taskless-queue, fr-br stub |
| D-C5–D-C8 | `docs/governance/standards/*.md` | NOT_APPLICABLE | Book workspace governance | evergreen | governance README, stubs, .cursorrules |
| D-C9 | `docs/governance/kanban/kanban-governance-policy.md` | NOT_APPLICABLE | Book workspace governance | evergreen | governance README, kanban-board-guide |
| D-U2 | `docs/governance/README.md` | NOT_APPLICABLE | Hub; portal inclusion optional in Wave E | evergreen | FR-101, inventory |

---

## 7. Success / verification criteria

- [ ] AC0: Inventory sign-off completed before any `git mv`
- [ ] ADR-007 created and accepted before moves
- [ ] All MOVE rows executed with stubs (T1, T2 pass)
- [ ] Bidirectional wiring principle at `docs/governance/principles/` (T3 pass)
- [ ] Active surfaces updated (T4 pass)
- [ ] `book-repo-docs-scope.md` lists `docs/governance/` **KEEP** (T5 pass)
- [ ] `docs/governance/README.md` complete (T6 pass)
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] Task doc links this IPP; `validate_ipw_publication_wiring.py --requested E7:S01:T11` passes
- [ ] User verification recorded; **RW E7:S01:T11** closes FR-101 and task

---

## References

- [FR-101](../kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md)
- [E7:S01:T11 task](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)
- [GOVERNANCE-REHOUSING-INVENTORY.md](../governance/GOVERNANCE-REHOUSING-INVENTORY.md)
- [docs/governance/README.md](../governance/README.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- [FR-042](../kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-094](../kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [FR-077](../kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [rw-trigger-dual-source-parity.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md)
- [.claude/commands/ipw.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ipw.md)
