---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-120: SemVer Allocation Authority — Transactional 1:1 Mapping Black Box

**Type:** Feature Request (FR)  
**ID:** FR-120  
**Submitted:** 2026-06-09  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IMPLEMENTED (**v0.3.2.14+1** — E03:S02:T14 RW `--art`)  
**Implementing Task:** **E03:S02:T14** — [`T14-semver-allocation-authority-transactional-mapping-fr120.md`](../epics/epic-03/story-02-versioning-cookbook-and-examples/T14-semver-allocation-authority-transactional-mapping-fr120.md)

**Operator decision (2026-06-09):** Adopt **SemVer Allocation Authority (SAA)** as the target architecture. SQLite is not only the injectivity enforcement layer — it is the **generation engine** (sequence counters, policy inputs, and `allocate` transaction). Python/RW become thin callers; `semver_converter.py` logic migrates into the allocator.

**Related:** [FR-045](FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](FR-046-rw-semver-tag-task-touch-mode.md) · [FR-116](FR-116-semver-registry-structured-store-shared-release-metadata.md) · [BR-061](BR-061-semver-task-touch-counter-increments-too-often.md) · [BR-073](BR-073-semver-task-touch-collision-retrospective-fix.md) · [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) · [ADR-002](../../architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md)

---

## Summary

Replace the fragile, multi-entry-point SemVer mapping stack with a **single transactional allocation authority** (black-box interface): given internal `RC.EPIC.STORY.TASK+BUILD`, return unique SemVer `MAJOR.MINOR.PATCH+BUILD` with **SQLite-native generation and persistence in one atomic transaction** — UNIQUE indexes enforce 1:1 injectivity independent of whether internal coordinates go up or down across epic/branch switches.

**Operator preference (2026-06-09):** Since mapping lives in SQL, **SemVer generation must live in SQL too** — not Python-compute-then-INSERT. The database owns counters, sequence bump, component assembly, and collision rejection.

---

## Problem Statement

Repeated collision remediation waves ([FR-045](FR-045-adr-002-task-touch-derived-mapping.md), [E03:S02:T12](../epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md), [BR-061](BR-061-semver-task-touch-counter-increments-too-often.md), [BR-073](BR-073-semver-task-touch-collision-retrospective-fix.md), [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)) have hardened validators and repaired history, yet collisions and registry drift **keep recurring**. That pattern implies a **structural flaw**, not isolated bugs.

### Fundamental flaw (diagnosis)

| Assumption (wrong) | Reality |
| ------------------ | ------- |
| SemVer can be **derived** from internal `E.S.T` algebra | Internal version is **forensic Kanban coordinates**; it is **not globally monotonic** across branch/epic time (`0.6.7.103+5` → `0.2.1.18+1` is normal). |
| A YAML file + counter is a safe allocator | `semver-registry.yaml` is a **merge-conflict-prone, append-only log** acting as a database ([FR-116](FR-116-semver-registry-structured-store-shared-release-metadata.md) smell). |
| Preview (`finalize=False`) and commit (`finalize=True`) can share one code path | [BR-073](BR-073-semver-task-touch-collision-retrospective-fix.md): preview paths computed the **same PATCH** for different internals when finalize was skipped. |
| Many writers can stay consistent | Manual tags, agent shortcuts, partial RW runs, and retrospective YAML surgery create **multiple allocation entry points**. |

**Task-touch (ADR-002) had the right *semantics*** — global monotonic PATCH allocation decoupled from `E.S.T` — but the **architecture** (YAML SoT, dual finalize modes, distributed writers) cannot guarantee injectivity in practice.

### Operator requirement

> Feed internal version in → get SemVer out → **guaranteed 1:1**, even when the next internal commit has a “lower” `E.S.T` than the previous release.

That requirement is **allocation**, not derivation. Internal monotonicity is irrelevant; **SemVer monotonicity** is what package managers and Git tags need.

---

## Proposed Direction

Introduce a **SemVer Allocation Authority (SAA)** — a black-box module (CLI and/or library) that is the **only** component allowed to **generate and assign** new SemVer values.

### SQL-backed generation (operator-preferred)

The allocator does **not** compute PATCH in Python and then persist to SQL for uniqueness checking. **Generation and persistence are one atomic SQL transaction:**

1. Parse internal `RC.E.S.T+BUILD` (caller input only).
2. **Lookup** — if `internal_version` exists, return stored row (idempotent).
3. **Generate** (new release, single transaction):
   - Read policy state from SQL (`rc`, `epic_count`, `patch_sequence` cursor).
   - `INSERT` mapping row with `patch_sequence = next` (monotonic; task-touch semantics).
   - Compose `MAJOR.MINOR.PATCH+BUILD` from SQL-held counters + internal `BUILD`.
   - UNIQUE constraint violation → rollback, fail closed (no partial PATCH leak).
4. Return composed SemVer to RW.

**Why SQL generates, not just stores:** Counter drift ([BR-061](BR-061-semver-task-touch-counter-increments-too-often.md)), `finalize=False` preview races ([BR-073](BR-073-semver-task-touch-collision-retrospective-fix.md)), and YAML/history desync all came from **splitting generation (Python) from authority (file)**. One transaction owns both.

**Illustrative schema (IPW to finalize DDL):**

| Table / object | Role |
| -------------- | ---- |
| `semver_policy` | Per-RC `epic_count`, strategy (`task_touch`), schema version |
| `semver_sequence` | Monotonic `patch_sequence` cursor (or SQLite sequence / `MAX+1` in txn) |
| `semver_mapping` | Authoritative rows: internal, semver_full, semver_core, patch_sequence, E/S/T/BUILD, `allocated_at` |
| UNIQUE indexes | `internal_version`, `semver_core`, `semver_full`, `patch_sequence` |

`semver_converter.py` becomes a **deprecated facade** (delegate to SAA) or read-only `lookup` for adopters; no production PATCH assignment in Python.

### Black-box contract (v1)

```
allocate(internal: "RC.E.S.T+BUILD") → {
  semver: "MAJOR.MINOR.PATCH+BUILD",
  semver_core: "MAJOR.MINOR.PATCH",
  allocated: bool,          # false if idempotent replay of existing mapping
  patch_sequence: int       # global monotonic sequence (task-touch PATCH)
}
```

**Invariants (enforced at write time, not post-hoc YAML scan):**

1. `UNIQUE(internal_version)` — one SemVer per internal
2. `UNIQUE(semver_core)` — primary Git tag `vX.Y.Z` cannot collide
3. `UNIQUE(semver_full)` — full `X.Y.Z+BUILD` cannot collide
4. `UNIQUE(patch_sequence)` — global allocator sequence is injective
5. **Idempotent replay** — same internal always returns the same SemVer (no re-allocation)

**Non-goals for “preview”:** Dry-run must **not** return a speculative next PATCH that another process could claim. Acceptable behaviours: (a) return existing mapping only; (b) explicit `reserve` with lock/transaction; (c) refuse dry-run for unknown internals.

### Mapping semantics (default: task-touch preserved)

Unless IPW selects an alternative, retain ADR-002 task-touch **meaning**:

- **MAJOR** = RC
- **MINOR** = epic sign-off count (per RC)
- **PATCH** = next value from global allocation sequence (not derived from `E.S.T`)
- **BUILD** = copied from internal `+BUILD`

This already handles “internal went down” — PATCH only ever increases across **releases**, not across internal coordinate magnitude.

### Storage architecture (operator-preferred)

| Layer | Role |
| ----- | ---- |
| **SQLite allocator DB** (authoritative **generation + write** model) | Single `allocate` transaction: read policy → next sequence → insert mapping → return SemVer |
| **`semver-registry.yaml`** (optional export) | Git-auditable mirror **generated from DB** after allocate — not hand-edited |
| **FR-116 ingest read model** | Collapses into allocator DB in v2 (same file, `semver_*` tables); no duplicate ingest of mapping history |

Evolution from [FR-116](FR-116-semver-registry-structured-store-shared-release-metadata.md): FR-116 v1 kept YAML as SoT and added async ingest. **FR-120 supersedes that split** — the DB is live SoT for generation; YAML is export-only; FR-116 ingest becomes unnecessary for mapping rows once SAA ships.

### RW integration (single choke point)

RW Step 2 (or dedicated Step 2.1) calls **only** `allocate()` once per release, **before** tag creation:

1. Resolve internal version from `version.py` + BUILD resolver
2. `allocate(internal)` → SemVer (atomic)
3. Write README/changelog using returned SemVer
4. Create tags from returned values
5. Export YAML mirror (if retained) from DB state

Remove or hard-disable any production path that calls `convert_internal_to_semver_task_touch(..., finalize=False)` for tag-bound operations.

### “Separate app” vs module

IPW may choose packaging:

| Option | Description |
| ------ | ----------- |
| **A. Embedded module** (preferred v1) | `packages/frameworks/workflow-mgt/scripts/version/semver_allocator.py` + `semver-allocate` CLI; RW imports library |
| **B. Sidecar CLI black box** | Standalone executable invoked by RW (`semver-allocate allocate …`); same SQLite file path in `rw-config.yaml` |
| **C. Remote service** | Deferred — only if multi-repo shared allocator needed |

Operator intent (“black box”) is satisfied by **A or B**: RW does not implement mapping logic; it calls the authority.

---

## Alternatives (IPW must evaluate)

| Alternative | 1:1 guarantee | Monotonic SemVer | Traceability | Notes |
| ----------- | ------------- | ---------------- | ------------ | ----- |
| **Task-touch in YAML (status quo)** | Fragile | Yes | Good | Proven insufficient |
| **FR-116 ingest-only** | Audit-only | N/A | Good | Does not fix write path |
| **Full internal encoded in SemVer** (e.g. `0.{E}.{S}.{T}+BUILD`) | Strong | **No** — drops when switching epic | Excellent | Breaks package-manager “no regression” perception |
| **Opaque global release counter** (`0.{MINOR}.{SEQ}+BUILD`) | Strong | Yes | Internal-only forensic | Simplest allocator; loses SemVer “epic sign-off” signal in MINOR |
| **Content hash / deterministic hash(internal)** | Risky | No | Good | Collisions, ugly numbers, not monotonic |
| **SAA + task-touch (this FR)** | **DB-enforced** | Yes | Good | **Operator-selected (2026-06-09)** |

---

## Requirements

### Functional

- [ ] **FR-120-F1:** Define SAA black-box API (`allocate`, `lookup`, `audit`) with documented invariants.
- [ ] **FR-120-F2:** SQLite schema with UNIQUE constraints on internal, semver_core, semver_full, patch_sequence; **generation logic runs inside allocate transaction** (not Python-then-insert).
- [ ] **FR-120-F2b:** Policy + sequence state (`semver_policy`, `semver_sequence` or equivalent) lives in SQL; no authoritative counters in YAML or Python globals.
- [ ] **FR-120-F3:** RW uses SAA as **sole** allocation entry point for new releases.
- [ ] **FR-120-F4:** Idempotent `allocate` for same internal (replay safe).
- [ ] **FR-120-F5:** Migration tool: import existing `semver-registry.yaml` `mapping_history` into allocator DB without collision loss.
- [ ] **FR-120-F6:** Replace or gate `finalize=False` tag-bound usage; document safe preview behaviour.
- [ ] **FR-120-F7:** `validate_semver_registry_injective.py` (or successor) validates **allocator DB** at RW Step 9 (blocking).
- [ ] **FR-120-F8:** Optional YAML export from DB for git audit trail (generated file; no manual edits).

### Non-Functional

- [ ] **FR-120-NF1:** Allocation completes in &lt; 50 ms on ai-dev-kit corpus (local SQLite).
- [ ] **FR-120-NF2:** `greenfield-install/` parity ([FR-106](FR-106-packaged-workflows-sync-with-live-repo-implementation.md)).
- [ ] **FR-120-NF3:** Single-writer semantics documented (RW only); manual tag creation flagged as policy violation.
- [ ] **FR-120-NF4:** Allocator failure = RW abort before tag/changelog SemVer write (fail closed).

---

## Acceptance Criteria

- [ ] **AC1:** IPP approved; storage + RW choke-point design documented (supersedes/extends ADR-002 implementation notes).
- [ ] **AC2:** Two consecutive releases where internal `E.S.T` **decreases** receive **strictly increasing** SemVer cores.
- [ ] **AC3:** Deliberate parallel allocate attempts cannot produce duplicate PATCH/core (integration test with transactional contention).
- [ ] **AC4:** Full historical import from current `semver-registry.yaml` passes injectivity audit in allocator DB.
- [ ] **AC5:** RW path has **zero** production calls that assign PATCH without going through SAA.
- [ ] **AC6:** Operator verification: maintainer sign-off closing collision FBUs ([BR-073](BR-073-semver-task-touch-collision-retrospective-fix.md) class) after soak period.

---

## Scope Analysis

**Problem Domain:** Versioning / dual-version RW / SemVer tag finalization  
**Affected Areas:**

- [x] `semver_converter.py` / allocation boundary (refactor to delegate to SAA)
- [x] `finalize_rw_semver_registry.py` (likely superseded or becomes export)
- [x] `semver-registry.yaml` (demote to export or slim stub)
- [x] RW agent execution guide + `.cursorrules` Step 2 / Step 9
- [x] Validators (`validate_semver_registry_injective.py`, `validate_task_touch_release_contract.py`)
- [x] FR-116 ingest (coordinate — DB may unify read/write stores in v2)
- [x] Versioning policy + ADR amendment

**Complexity:** Complex (2+ weeks) — migration + RW boundary + policy  
**Dependencies:** [FR-116](FR-116-semver-registry-structured-store-shared-release-metadata.md) shared store module (reuse SQLite infrastructure where possible)

---

## Open Questions (for IPW)

1. **YAML fate:** Git-auditable export on every RW vs periodic export vs DB-only (operator leans export-on-RW for audit trail).
2. **DB location:** `adk-release-metadata.sqlite` (shared with FR-115) vs dedicated `semver-allocator.sqlite` — **recommend unified file** with namespaced tables.
3. **Adopter bootstrap:** Empty DB + migration seed vs packaged snapshot for greenfield-install.
4. **Supersede ADR-002?** Amend in place (task-touch semantics unchanged; implementation → SAA) vs new ADR “Allocation Authority”.
5. **Remote/multi-repo:** Deferred unless operator requests org-wide allocator.
6. **Sequence implementation:** SQLite `AUTOINCREMENT` / dedicated sequence table vs `SELECT MAX(patch_sequence)+1` inside `BEGIN IMMEDIATE` — IPW must pick for concurrency safety.

---

## References

- [dev-kit-versioning-policy.md](../../governance/standards/dev-kit-versioning-policy.md) §2.1
- [IPP-E03S02T12](../../implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md)
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`
- `semver-registry.yaml`
