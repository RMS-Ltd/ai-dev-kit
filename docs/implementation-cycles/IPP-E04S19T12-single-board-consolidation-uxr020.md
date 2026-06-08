---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S19:T12 — Planning: Single-board consolidation — retire `fbuboard` (UXR-020 R3)

**Host Task:** [`T12-fbuboard-necessity-investigation-uxr020.md`](../kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T12-fbuboard-necessity-investigation-uxr020.md) **(E04:S19:T12)**  
**Planning for:** [UXR-020 — `fbuboard` necessity after task–FBU wiring](../kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md)  
**Status:** COMPLETE (Waves 1–4 shipped; **v0.4.19.12+4** closure 2026-06-05)

> **IPW:** Produced for E04:S19:T12 after user selected **R3 (full single-board)**. Implementation gated on explicit execution authorization per FR-083.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | **Single active MoSCOW surface:** `kboard.md` is the only active prioritization board | UXR-020 R3, user decision |
| RF2 | **Dual-status row contract** when task and FBU lifecycles diverge (`Task: COMPLETE \| FBU: OPEN (verification)`) | UXR-020 F2, R3 |
| RF3 | **Verification band (V):** New MoSCOW subsection for task-complete / FBU-open rows (replaces fbuboard M/S-only lane) | UXR-020 R3 |
| RF4 | **Migrate** all active `kboard.md` rows into `kboard.md` without losing verification-pending visibility | UXR-020 F2 |
| RF5 | **Deprecate `kboard.md`:** Replace with redirect stub; no active MoSCOW on deprecated file | UXR-020 R3 |
| RF6 | **Preserve** `intake-completed.md`, `intake-structure.md`, and `fr-br/*.md` as FBU SoT surfaces | KG-R2, FR-051 legacy |
| RF7 | **Task-only rows** (no FBU) remain valid on `kboard` unchanged | UXR-020 F3 |
| RF8 | **Taskless open FBUs** appear on `kboard` with FBU-primary key + `—No Task—` until intake wires `E:S:T` | FR-073, intake-open-taskless-queue |
| RF9 | **FR-092 contract:** RW Step 7 becomes **three-surface** (task doc, FBU doc, `kboard`) + completed ledgers; drop active `fbuboard` as fourth surface | FR-092 amendment |
| RF10 | **UKW scope:** Single-board sync; remove fbuboard MoSCOW maintenance from comprehensive matrix | FR-076 successor |
| RF11 | **Validators** accept single active board; `kboard.md` stub exempt from active-board strict checks | RF9 |
| RF12 | **Framework/adopter path:** Install templates emit single board; migration note for brownfield dual-board | ADR-003 pattern |
| RF13 | **Row link order** preserved per UXR-010: FBU segment → Task segment → IPP segment → stamp | UXR-010 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **No stamp churn:** FR-097 evidence-gated stamps during migration | UXR-009, FR-097 |
| RNF2 | **Lean active board (FR-109):** No archive footnotes or journal bullets on `kboard` | FR-109 |
| RNF3 | **Idempotent migration:** Re-running migration script leaves `kboard` stable | FR-092 Wave discipline |
| RNF4 | **Read-tolerance:** Validators/scripts accept deprecated `kboard.md` redirect for one release cycle | Adopter safety |
| RNF5 | **Phased RW:** Wave 1 policy+board+ADR; Wave 2 tooling; Wave 3 framework pack | UXR-017 precedent |

### 1.3 Invariants and boundaries

- **Invariants:** Bidirectional FBU ↔ task wiring (KG-R2); `kanban-completed.md` / `intake-completed.md` terminal ledgers unchanged in role.
- **In scope:** ai-dev-kit corpus, kanban governance policy, workflow-mgt validators/scripts, UKW/RW agent guides, framework kanban templates.
- **Out of scope:** Deleting `fr-br/` corpus; merging `intake-structure.md` into `kanban-structure.md`; changing FBU doc templates.

---

## 2. Specification

### 2.1 Goal

Consolidate all active MoSCOW prioritization into **`kboard.md`** using an enriched **dual-status row model**, then **retire `kboard.md`** as an active board — eliminating duplicate sync admin while preserving verification-pending visibility and FBU traceability.

### 2.2 Single-board row contracts

**A. Standard in-flight (task not terminal)**

```markdown
- **E05:S09:T14** – BR-093: Docusaurus CI dedup - 📋 TODO (MEDIUM, …) | [Task](…) | [BR-093](…) | [—IPP—](…) | Last modified: YYYY-MM-DD HH:MM UTC
```

**B. Verification (task terminal, FBU open)** — lives in **### Verification (V)** section

```markdown
- **E03:S02:T12** – FR-045 / FR-046 / BR-061: Task-touch SemVer — ✅ Task COMPLETE · 🟢 FBU OPEN (verification) (HIGH, fix attempted **v0.3.2.12+4**) | [Task](…) | [FR-045](…) · [FR-046](…) · [BR-061](…) | [—IPP—](…) | Last modified: YYYY-MM-DD HH:MM UTC
```

**C. Task-only (no FBU)** — unchanged; any MoSCOW band except V

**D. Taskless FBU (intake queue)** — FBU-primary; **Could Have** or dedicated intake pointer until task filed

```markdown
- **FR-XXX** – Title — 🟢 OPEN (LOW, awaiting task) | [FR-XXX](…) | —No Task— | —No IPP— | Last modified: …
```

**MoSCOW order on `kboard.md`:** M → S → **V** → C → O → W

### 2.3 `kboard.md` deprecation

- Active MoSCOW sections **removed**.
- File becomes **redirect stub** (~15 lines): points to `kboard.md` Verification + C bands; links `intake-completed.md`, `intake-structure.md`.
- `Last Updated` notes deprecation version.

### 2.4 RW Step 7 (revised three-surface)

Release-scope reconciliation outputs:

1. Task doc  
2. Source FR/BR/UXR doc(s)  
3. **`kboard.md`** canonical row(s) — including Verification band when task COMPLETE + FBU OPEN  

`kboard.md` **not** updated on RW/UKW (stub only).

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | R2 partial consolidate vs R3 single board vs status quo |
| T2 | Reversibility | Y | Multi-package validators, adopters, FR-092 |
| T3 | Blast radius | Y | Kanban framework + workflow-mgt + all RW/UKW runs |
| T4 | Precedent | Y | Canonical board model for ADK adopters |
| T5 | Constraint trade-off | Y | Agent ergonomics vs stakeholder FBU-first view |
| T6 | Governance contract | Y | RW Step 7, UKW, validators, `.cursorrules` |
| T7 | Supersedes | Y | FR-051 fbuboard creation; FR-092 four-surface |

**Outcome:** `REQUIRED` — **ADR-018** (draft path: `docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md`)

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | `validate_active_kanban_board.py` | `kboard` strict passes; `fbuboard` stub exempt or advisory-only | RF11 |
| T2 | `validate_kanban_state_icons.py` | Dual-status tokens parse; V-band rows valid | RF2 |
| T3 | `validate_board_stamp_diff.py` | Migration produces evidenced stamp manifest | RNF1 |
| T4 | `test_validate_rw_step7_completeness.py` | Three-surface contract; no fbuboard requirement | RF9 |
| T5 | `update_kanban_docs.py` | RW Step 7 writes kboard only; Verification band logic | RF4 |
| T6 | Corpus grep | No duplicate `E:S:T` across deprecated fbuboard MoSCOW | RF5 |
| T7 | Manual | Operator opens `kboard` only for full backlog + verification queue | RF1 |

---

## 4. Implementation plan

| Step | Action | Deliverable | Wave |
| ---- | ------ | ----------- | ---- |
| **1** | **[MANDATORY]** Confirm task `IN PROGRESS`; link IPP on task doc | Task doc | 1 |
| 2 | Author **ADR-018** (single board, V-band, three-surface RW) | ADR | 1 |
| 3 | Update **kanban-governance-policy.md** — active surface table, V-band, row contracts | Policy | 1 |
| 4 | Update **kanban-board-guide.md** — remove fbuboard as active board; document V-band | Guide | 1 |
| 5 | Migrate **live `kboard.md`:** add V-band; import 9 verification rows from fbuboard M/S; dedupe C-band | Board | 1 |
| 6 | Replace **`kboard.md`** with redirect stub | Board | 1 |
| 7 | Update **UXR-020** AC5 + decision record; amend **FR-092** narrative (three-surface) | Governance docs | 1 |
| 8 | **RW Wave 1** `RW E04:S19:T12` on `epic/4-*` branch | Release | 1 |
| 9 | **`validate_active_kanban_board.py`:** single-board mode; fbuboard stub handling | Validator | 2 |
| 10 | **`update_kanban_docs.py`:** drop fbuboard writes; Verification band helper | Script | 2 |
| 11 | **UKW/RW agent guides** + `.cursorrules` / `.claude/commands/ukw.md` / `rw.md` excerpts | Workflow docs | 2 |
| 12 | **pytest** updates: step7 completeness, stamp diff, release readiness | Tests | 2 |
| 13 | **RW Wave 2** tooling release | Release | 2 |
| 14 | **Framework templates** + install KB: single `kboard.md` default | Framework pack | 3 |
| 15 | **`rw-config.yaml` schema:** deprecate `fbuboard` key if present; document | Config | 3 |
| 16 | **RW Wave 3** framework sync | Release | 3 |
| 17 | **Remove** kanban-root legacy `fr-br-uxr-*` alias files; update `kanban/README.md`; drop alias paths from corpus-board validators/scripts | Root hygiene | 4 |
| 18 | **RW Wave 4** closure — ledger, active-row prune, alias cleanup release | Release | 4 |
| **N** | **[MANDATORY]** Reconcile task status to COMPLETE with forensic marker after Wave 4 + user verification | Task doc | 4 |

### 4.1 Files to create or modify (primary)

| Path | Change |
| ---- | ------ |
| `docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md` | CREATE |
| `docs/kanban/kboard.md` | V-band + migrated rows |
| `docs/kanban/kboard.md` | Redirect stub |
| `packages/frameworks/kanban/policies/kanban-governance-policy.md` | Policy |
| `docs/kanban/kanban-board-guide.md` | Guide |
| `docs/kanban/README.md` | Five-way → four-way active surfaces |
| `docs/kanban/fr-br/FR-092-*.md` | Three-surface note |
| `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py` | Logic |
| `packages/frameworks/workflow-mgt/scripts/validation/validate_active_kanban_board.py` | Logic |
| `.cursorrules`, `.claude/commands/ukw.md`, `.claude/commands/rw.md` | Scope |
| `packages/frameworks/workflow-mgt/KB/.../release-workflow-agent-execution.md` | Step 7 |
| `packages/frameworks/workflow-mgt/KB/.../update-kanban-workflow-agent-execution.md` | UKW scope |

### 4.2 Dependency order

1. ADR + policy (normative contract)  
2. Live board migration (visible outcome)  
3. RW Wave 1 (version the contract)  
4. Tooling + tests (enforce contract)  
5. Framework pack (adopter emission)  

### 4.3 Documentation implementation steps

1. ADR-018 before board migration (cite in board headers).  
2. Policy + guide before validator changes.  
3. Workflow KB after `update_kanban_docs.py` behavior is fixed.  

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope |
| ------ | ---- | ----- |
| D-U1 | `kanban-governance-policy.md` | V-band, single active board, RW three-surface |
| D-U2 | `kanban-board-guide.md` | Retire fbuboard section as active board |
| D-U3 | `kboard.md` | V-band + migrated content |
| D-U4 | `kboard.md` | Stub only |
| D-U5 | `FR-092-*.md` | Amend four-surface → three-surface |
| D-U6 | `UXR-020-*.md` | Decision + closure AC |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `ADR-018-single-kanban-board-consolidation.md` | Canonical architecture decision |

### 5.3 Documentation gaps and explicit non-changes

| Topic | Resolution |
| ----- | ---------- |
| `intake-structure.md` | **NONE** — remains full inventory (non-MoSCOW) |
| `intake-completed.md` | **NONE** — terminal FBU ledger retained |
| `intake-open-taskless-queue.md` | **UPDATE** pointer: MoSCOW source → `kboard` |
| `fr-br-uxr-board.md`, `fr-br-uxr-structure.md`, `fr-br-uxr-open-taskless-queue.md` | **DELETE** from kanban root (Wave 4); historical changelog references retained |

---

## 6. Documentation housing

| Artifact | Canonical path |
| -------- | -------------- |
| IPP | `docs/implementation-cycles/IPP-E4S19T12-single-board-consolidation-uxr020.md` |
| ADR | `docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md` |
| Task link | Task doc **References** + **IPP** segment |

**Publication:** Task doc + UXR-020 bidirectional links mandatory before Wave 1 RW.

---

## 7. Risks and mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Verification rows clutter M/S again | Dedicated **V** band, not mixed into C |
| Validator blast radius | Phased waves; fbuboard stub tolerance one cycle |
| Adopter dual-board installs | Framework Wave 3 + migration note in ADR-018 |
| FR-092 meta-program drift | Explicit FR-092 doc amendment in Wave 1 |

---

## 8. User decision record

| Date | Decision | Authority |
| ---- | -------- | --------- |
| 2026-06-05 | **R3 — full single-board** (retire active `fbuboard`) | User message |

**Next gate:** Explicit implementation authorization (`implement`, `proceed`, or `RW E04:S19:T12`) per FR-083.
