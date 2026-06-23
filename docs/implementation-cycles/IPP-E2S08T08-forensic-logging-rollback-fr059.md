---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S08:T08 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T08-enhanced-workflow-forensic-logging-and-rollback-hardening-fr-059.md`](../kanban/epics/epic-02/story-08-harden-release-workflow-reliability/T08-enhanced-workflow-forensic-logging-and-rollback-hardening-fr-059.md) **(E02:S08:T08)**  
**Planning for:** [FR-059](../kanban/fbu/FR-059-enhanced-workflow-logging-system.md)  
**Status:** Closed — planning complete; implementation `v0.2.8.8+2`, closure RW `v0.2.8.8+3` (2026-05-30)

> **IPW (Implementation Planning Workflow):** Consolidated IPP per [FR-042](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md). Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Atomic command logging: argv, exit code, duration, stdout/stderr (truncated), redacted secrets | FR-059, task deliverable |
| RF2 | Structured JSON records with `lifecycle`, `ttl_days`, `housekeeping_policy` metadata | FR-059 |
| RF3 | Multi-level logs: run (RWJournal), step, atomic command records embedded in steps | FR-059, RF3 |
| RF4 | Real checkpoint create/load under `docs/journals/checkpoints/`; conservative rollback (no auto destructive git) | FR-059, ADR-008 |
| RF5 | Failure classification retained on `WorkflowExecutor`; recovery report surfaces command timeline | FR-059 |
| RF6 | TTL housekeeping: 7-day default; 30-day retention for failed runs; config via `rw-config.yaml` | FR-059 open questions (IPP defaults) |
| RF7 | Operator forensic/recovery documentation in framework KB | Task AC |
| RF8 | Log schema validated in CI (fixture tests) | FR-059 integration AC |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Logging overhead &lt;5% on representative subprocess (smoke test, documented) | FR-059 performance |
| RNF2 | Logs under configurable `journal_dir` (default `docs/journals/`) | FR-059, rw-config |
| RNF3 | Redact `*TOKEN*`, `*SECRET*`, `*PASSWORD*` env keys; never log `.env.local` paths as content | FR-059 security |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Rollback contract `FORBIDDEN_COMMANDS` remain non-auto-executable.
  - Journal JSON backward compatible via `schema_version` on run records.
  - Mis-attributed release `v0.2.8.8+1` is kanban traceability only — not FR-059 implementation evidence.
- **In scope:** `packages/frameworks/workflow-mgt/scripts/journal/`, `workflow_executor.py`, `tests/journal/`, `tests/workflow/`, KB operator guide, ADR-008, rw-config journal keys.
- **Out of scope:**
  - [FR-044 / E05:S01:T44](../kanban/fbu/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md) — RW temporary execution log product slice.
  - [E02:S01:T23](../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md) — tool-agnostic step-tracker governance (docs-first).
  - 100+ concurrent workflow scale (document as future load test).

**IPP policy defaults (FR-059 open questions):**

| Topic | Decision |
| ----- | -------- |
| TTL | 7 days default (`journal_ttl_days`); failed runs 30 days |
| Security | Env key redaction; stderr/stdout cap 32 KiB each |
| Non-executor workflows | RW journal path mandatory v1; agent pattern documented in KB |

---

## 2. Specification

### 2.1 Goal

Operators and agents can reconstruct workflow/sub-workflow failures from durable, TTL-governed forensic logs and use evidenced checkpoints plus rollback contracts to recover without ad-hoc git surgery.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Specification |
|-------------|---------------|
| RF1–RF2 | `forensic_log.py`: `AtomicCommandRecord`, `run_subprocess_logged()` |
| RF3 | `StepEntry.command_records`; `RunEntry.schema_version` |
| RF4 | `checkpoint_store.py`; `WorkflowExecutor` wired to manifest-based checkpoints |
| RF5 | `RecoveryReport` command timeline section; `RollbackContract` reads `command_records` |
| RF6 | `journal_housekeeping.py` + `rw-config.yaml` keys |
| RF7 | `workflow-forensic-recovery-guide.md` |
| RF8 | `test_forensic_log_schema.py`, executor/journal tests |

### 2.3 Constraints

- Implementation commits via **RW E02:S08:T08** (project git policy).
- Changelog language: “Change implemented” until user verifies fixes.
- Dual-source: update RW agent guide; portable excerpt only if RW recovery steps change materially.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** COMPLETE (`v0.2.8.8+3` — closure RW 2026-05-30).
- **Transition to IN PROGRESS:** IPW Phase 8 wiring (2026-05-30) — done.
- **Transition to COMPLETE:** Closure RW `v0.2.8.8+3` — done (deferred scope documented in FR-059 §1.3).
- **Atomic propagation requirement:** Task doc, story checklist, and `fbuboard` IPP column updated together.
- **Owner:** Implementation execution (Step 1 and final reconciliation in §4).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Journal-only vs executor-only vs layered hybrid |
| T2 | Reversibility | Y | Checkpoints capture git porcelain + manifest |
| T3 | Blast radius | Y | Framework package + RW recovery + adopters |
| T4 | Precedent | Y | Canonical workflow forensic logging |
| T5 | Constraint trade-off | Y | Performance vs completeness vs redaction |
| T6 | Governance contract | Y | RW recovery and rollback policy |
| T7 | Supersedes | N | No conflicting ADR |

**Outcome:** `REQUIRED` — [ADR-008](../architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md)

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | — | Not evaluated (REQUIRED) |
| E2 | No new options | — | Not evaluated |
| E3 | Reversible in one task | — | Not evaluated |
| E4 | Spec elsewhere | — | Not evaluated |
| E5 | Documented NONE | — | Not evaluated |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Unit `forensic_log` | argv, exit code, stderr truncation |
| T2 | Unit redaction | secret env keys redacted in records |
| T3 | Unit checkpoint | manifest create/load round-trip in tmp_path |
| T4 | Integration journal | `command_records` persist in run JSON |
| T5 | Integration rollback | contract analyzes `command_records` argv |
| T6 | Integration recovery | markdown includes command timeline |
| T7 | Perf smoke | logged vs unlogged subprocess within 5% (loose) |
| T8 | Schema fixture | required fields on `AtomicCommandRecord.to_dict()` |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E02:S08:T08 to IN PROGRESS** in task doc; sync story checklist; update `Last updated`. | ✅ Done (2026-05-30) |
| 2 | Land ADR-008 | ADR accepted |
| 3 | Implement `forensic_log.py`, `checkpoint_store.py`, `journal_housekeeping.py` | Core modules |
| 4 | Extend `RWJournal` / `StepEntry` / `RunEntry` schema | Journal v1 |
| 5 | Wire `WorkflowExecutor` subprocess paths + checkpoints | Executor hardened |
| 6 | Extend `recovery_report.py`, `rollback_contract.py` | Operator surfaces |
| 7 | Add tests under `tests/journal/` and `tests/workflow/` | CI coverage |
| 8 | KB operator guide + rw-config keys + AGENTS.md note | Docs |
| 9 | Update FR-059 / task AC evidence when tests pass | Linked evidence |
| **N** | **[MANDATORY] Reconcile status** to COMPLETE only if all ACs satisfied; else IN PROGRESS/BLOCKED. | ✅ Done — `v0.2.8.8+3` |

### 4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/journal/forensic_log.py` (CREATE)
- `packages/frameworks/workflow-mgt/scripts/journal/checkpoint_store.py` (CREATE)
- `packages/frameworks/workflow-mgt/scripts/journal/journal_housekeeping.py` (CREATE)
- `packages/frameworks/workflow-mgt/scripts/journal/rw_journal.py` (UPDATE)
- `packages/frameworks/workflow-mgt/scripts/journal/rollback_contract.py` (UPDATE)
- `packages/frameworks/workflow-mgt/scripts/journal/recovery_report.py` (UPDATE)
- `packages/frameworks/workflow-mgt/scripts/workflow_executor.py` (UPDATE)
- `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-forensic-recovery-guide.md` (CREATE)
- `rw-config.yaml` (UPDATE)
- `docs/kanban/AGENTS.md` (UPDATE)
- `tests/journal/test_forensic_log.py`, `test_forensic_log_schema.py` (CREATE)
- `tests/workflow/test_workflow_executor_forensic.py` (CREATE)
- `tests/workflow/conftest.py` (CREATE)

### 4.2 Dependency order

1. ADR-008 → forensic_log + checkpoint_store  
2. Journal schema → executor wiring  
3. Tests → docs → FR/task AC updates  
4. RW release  

### 4.3 Documentation implementation steps

1. ADR-008 before code merge narrative in changelog.  
2. KB operator guide before RW Step 7 kanban note.  
3. RW agent execution guide — brief journal hook pointer (optional minimal UPDATE).

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | Host task T08 | Input/References → IPP; COMPLETE | Phase 8 / closure |
| D-U2 | FR-059 | Status COMPLETE (`v0.2.8.8+3`) | Closure RW |
| D-U3 | story-008 checklist | T08 → COMPLETE | Closure RW |
| D-U4 | `kboard.md` | IPP link replaces —No IPP— | Step 1 |
| D-U5 | `rw-config.yaml` | `journal_dir`, `journal_ttl_days`, `journal_failed_ttl_days` | RF6 |
| D-U6 | `AGENTS.md` | Documentation Agent jurisdiction for journals | RF7 |
| D-U7 | `release-workflow-agent-execution.md` | Pointer to forensic recovery guide | RF7 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | This IPP | Planning package | IPW |
| D-C2 | ADR-008 | Architecture decision | §2.5 |
| D-C3 | `workflow-forensic-recovery-guide.md` | Operator playbook | RF7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| FR-044 / T23 | NONE — cross-reference in §1.3 only |
| CHANGELOG | NONE at IPW — RW only |
| Portal publish | NOT_APPLICABLE for IPP/ADR/KB framework docs |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E2S8T8-forensic-logging-rollback-fr059.md` | NOT_APPLICABLE | evergreen | T08 Input/References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md` | NOT_APPLICABLE | evergreen | IPP §2.5, FR-059 |
| D-C3 | `packages/frameworks/workflow-mgt/KB/.../workflow-forensic-recovery-guide.md` | NOT_APPLICABLE | evergreen | RW guide, T08 |
| Runtime logs | `docs/journals/` | transient per record | ephemeral | ADR-008 |

---

## 7. Success / verification criteria

- [x] `pytest tests/journal tests/workflow` passes (re-run at closure; includes T7/T8 tests)
- [x] ADR-008 and IPP bidirectionally linked from T08
- [x] `forensic_log`, checkpoints, housekeeping modules importable from journal package
- [x] FR-059 functional ACs checked with evidence links (closure tranche; deferred items documented in FR-059)
- [x] All §5 UPDATE/CREATE items implemented or deferred with reason
- [x] RW E02:S08:T08 `v0.2.8.8+2` release traceability (closure `+3` at final reconciliation)

---

## References

- [FR-059](../kanban/fbu/FR-059-enhanced-workflow-logging-system.md)
- [ADR-008](../architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md)
- [FR-042 IPW](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [workflow_executor.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/workflow_executor.py)
- [CHANGELOG v0.2.8.8+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.8.8%2B1.md) (mis-attributed kanban release)
