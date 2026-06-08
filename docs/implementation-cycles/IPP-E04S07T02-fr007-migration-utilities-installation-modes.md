---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S07:T02 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T02-fr007-migration-utilities-installation-modes.md`](../kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T02-fr007-migration-utilities-installation-modes.md) **(E04:S07:T02)**  
**Planning for:** [FR-007](../kanban/fr-br/FR-007-migration-utilities-and-installation-modes.md)  
**Status:** Approved (verification / FBU closure wave)

> **IPW revision:** Wave 1 closes kanban drift — story checklist and `kanban-completed.md` show T02 COMPLETE at **v0.4.7.2+1** while `kboard.md` still lists TODO. This IPP prescribes evidence re-verification and **`RW E04:S07:T02 --art`** four-surface reconciliation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | `migrate_structure.py` creates timestamp backups and migrates epics/stories/tasks to canonical E/S/T | FR-007 AC-3, AC-5; T02 |
| RF2 | `install_kanban_framework.py` provides interactive mode selection (Fresh, Migration, Update, Hybrid) | FR-007 AC-4; T02 |
| RF3 | Installation integrates detection (`detect_existing_structure.py`) and analysis (`analyze_structure.py`) from T01 | FR-007 FR-1..FR-2; T01 |
| RF4 | All four installation modes implemented with documented CLI flags | FR-007 FR-4; scripts README |
| RF5 | Forensic markers and work history preserved during migration | FR-007 AC-5, NFR-5 |
| RF6 | **Verification gate:** Re-run pytest contract; confirm script surfaces exist and modes are wired | Wave 1 |
| RF7 | **FBU closure:** FR-007 status → IMPLEMENTED; kboard C-band row pruned; task doc discrete file created | Wave 1 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Detection completes in &lt; 5 s for typical structures (T01) | FR-007 NFR-1 |
| RNF2 | Timestamp-based backup directories enable rollback | FR-007 FR-5 |
| RNF3 | Executable pytest contract — not manual-only verification | `tests/kanban/test_install_*` |
| RNF4 | Four-surface kanban consistency (task doc, FR-007, kboard, story) | FR-092 |

### 1.3 Invariants and boundaries

- **Invariants:** Functional implementation shipped at **v0.4.7.2+1**; no behavioral rewrite in this wave unless verification fails.
- **In scope:** IPP + discrete task doc; evidence re-run; RW Step 7 reconciliation; FR-007 closure banner.
- **Out of scope:** New migration scenarios (Sprint/Issues ETL); CLI packaging (E06:S08); changing detection/analysis algorithms (T01).

---

## 2. Specification

### 2.1 Goal

Close FR-007 verification debt by confirming the shipped migration utilities and installation modes satisfy all acceptance criteria, then reconcile kanban surfaces so the discrete task doc, story checklist, FR-007, and active board reflect the same COMPLETE state under an attributed **`RW E04:S07:T02 --art`** release.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Delivery |
| ----------- | -------- |
| RF1–RF5 | Already implemented in `packages/frameworks/kanban/scripts/` (v0.4.7.2+1) |
| RF6 | `pytest tests/kanban/ -k "install or migrate"` — 20 passed (2026-06-05) |
| RF7 | RW Step 7: task doc COMPLETE, FR-007 IMPLEMENTED, kboard prune, story anchor |
| RNF4 | Atomic four-surface update in single RW session |

### 2.3 Constraints

- Prescribe **`RW E04:S07:T02 --art`** only (BR-097) — BUILD +1 on adopted E:S:T.
- Do not prescribe `--doc-policy-zero` for this follow-on verification wave.
- Prune terminal C-band row; ledger already has `kanban-completed.md` entry — do not duplicate prose.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO on `kboard.md`; COMPLETE on story checklist (drift)
- **Transition trigger to IN PROGRESS:** IPP creation + discrete task doc filed (Step 1)
- **Transition trigger to COMPLETE:** Pytest green + RW Step 7 four-surface reconciliation; forensic marker `✅ COMPLETE (v{version})`
- **Atomic propagation requirement:** Task doc status and kboard row update in same RW Step 7 change set
- **Owner:** RW execution (this session)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Verification wave — no new architectural choice |
| T2 | Reversibility | N | Kanban/doc reconciliation only; rollback is git revert |
| T3 | Blast radius | N | Confined to kanban surfaces + IPP/task doc |
| T4 | Precedent | N | Does not establish new canonical pattern |
| T5 | Constraint trade-off | N | No security/performance trade-off |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW validators |
| T7 | Supersedes | N | No ADR/policy contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files limited to §4.1 kanban + IPP paths |
| E2 | No new options | Y | Verifies existing FR-007 implementation |
| E3 | Reversible in one task | Y | Doc-only reconciliation |
| E4 | Spec elsewhere | Y | FR-007 + scripts README govern behavior |
| E5 | Documented NONE | Y | §5.3 cites FR-007 and framework README |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Migration script surface | `migrate_structure.py` exists; argparse exposes `--mode`, `--backup-dir`, `--dry-run` | AC-3 |
| T2 | Install modes | `install_kanban_framework.py` exposes fresh/migration/update/hybrid/auto modes | AC-4 |
| T3 | Pytest contract | `pytest tests/kanban/ -k "install or migrate"` passes | AC-8; RNF3 |
| T4 | Backup preservation | `migrate_structure.py` uses `_backup-{timestamp}` pattern | AC-5 |
| T5 | Documentation | `scripts/README.md` documents integrated workflow | AC-6 |
| T6 | Framework README | `packages/frameworks/kanban/README.md` migration section present (T03) | AC-7 |

**Verification command (Wave 1):**

```bash
pytest tests/kanban/ -q -k "install or migrate"
```

**Result:** 20 passed, 1 deselected (2026-06-05).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E04:S07:T02` status `TODO → IN PROGRESS`** in discrete task doc. Update `Last updated`. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create discrete task doc at canonical `T02-*.md` path; wire IPP bidirectional links | Task doc + IPP |
| 3 | Re-run pytest contract (T1–T6); record pass count in task doc AC-8 | Evidence in task doc |
| 4 | Update FR-007: check AC boxes; add IMPLEMENTED closure banner when verified | FR-007 doc |
| 5 | Release via **`RW E04:S07:T02 --art`** — version bump, changelog, Step 7 four-surface kanban | `v0.4.7.2+1` (adopted anchor) |
| **N** | **[MANDATORY] Reconcile task `E04:S07:T02` status** to `COMPLETE` + `✅ COMPLETE (v{version})` when ACs satisfied. Prune kboard C-band row. Update `Last updated`. | Task doc + kboard |

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E04S07T02-fr007-migration-utilities-installation-modes.md`
- CREATE: `docs/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T02-fr007-migration-utilities-installation-modes.md`
- UPDATE (RW Step 7): `docs/kanban/fr-br/FR-007-migration-utilities-and-installation-modes.md`
- UPDATE (RW Step 7): `docs/kanban/kboard.md` — prune E04:S07:T02 C-band row
- UPDATE (RW Step 7): story checklist version anchor if needed
- NONE: `packages/frameworks/kanban/scripts/*.py` — functional ship complete

### 4.2 Dependency order

1. IPP + task doc (planning artifacts)
2. Pytest verification
3. `RW E04:S07:T02 --art` (release + Step 7)

### 4.3 Documentation implementation steps

1. IPP and task doc before RW (IPW gate).
2. FR-007 closure banner during RW Step 7.
3. kboard prune last (after task doc COMPLETE marker).

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/kanban/fr-br/FR-007-*.md` | AC checkboxes; IMPLEMENTED status; version anchor | RF7; Step 4 |
| D-U2 | `docs/kanban/kboard.md` | Prune E04:S07:T02 C-band TODO row | RF7; Step N |
| D-U3 | Story 7 checklist | Confirm T02 version anchor matches RW | Step 5 |
| D-U4 | Host task T02 | Status COMPLETE; forensic marker; IPP links | Steps 1, N |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E04S07T02-fr007-migration-utilities-installation-modes.md` | This IPP | IPW |
| D-C2 | `docs/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T02-fr007-migration-utilities-installation-modes.md` | Discrete task doc | Step 2 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Discrete task doc | CREATE D-C2 — story had inline checklist only |
| ADR for migration topology | NONE — §2.5 EXEMPT; FR-007 is governing spec |
| New pytest modules | NONE — existing `tests/kanban/test_install_*` sufficient (20 passed) |
| Docusaurus user doc | NONE — framework README + scripts README cover adopters (T03) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S07T02-fr007-migration-utilities-installation-modes.md` | NOT_APPLICABLE | Planning artifact | evergreen | T02 Input/References |
| D-C2 | `docs/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T02-fr007-migration-utilities-installation-modes.md` | NOT_APPLICABLE | Kanban task doc | evergreen | FR-007 implementing task link |
| D-U1 | `docs/kanban/fr-br/FR-007-migration-utilities-and-installation-modes.md` | NOT_APPLICABLE | Intake doc | evergreen | T02 References |

---

## 7. Success / verification criteria

- [x] IPP written with all §1–§7 sections; bidirectional task ↔ IPP links
- [x] §2.5 ADR matrix scored; outcome EXEMPT with E1–E5 evidence
- [x] `pytest tests/kanban/ -k "install or migrate"` — 20 passed (2026-06-05)
- [x] RW `E04:S07:T02 --art` completes four-surface Step 7 reconciliation
- [x] FR-007 IMPLEMENTED; kboard E04:S07:T02 row pruned
- [x] Task doc `✅ COMPLETE (v0.4.7.2+2)` forensic marker

---

## References

- [FR-007](../kanban/fr-br/FR-007-migration-utilities-and-installation-modes.md)
- [BR-006](../kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban.md)
- [UXR-001](../kanban/fr-br/UXR-001-migration-user-experience-research.md)
- [Story 7](../kanban/epics/epic-04/story-07-migration-support-and-installation-modes.md)
- [FR-092](../kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- `packages/frameworks/kanban/scripts/README.md`
