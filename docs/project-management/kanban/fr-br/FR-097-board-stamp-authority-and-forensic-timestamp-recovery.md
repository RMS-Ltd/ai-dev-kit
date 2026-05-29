---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-097: Board stamp authority, blocking validation, and forensic timestamp recovery

**Type:** Feature Request (FR)  
**ID:** FR-097  
**Submitted:** 2026-05-20  
**Submitted By:** User — homogenized `Last modified` stamps on `kboard.md` / `fbuboard.md` undermine workload and staleness triage  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Status:** RESOLVED — v0.2.15.8+2 (`RW E2:S15:T08 --art`)

**Implementing Task:** [E2:S15:T08](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md)

**IPP:** [IPP-E2S15T08](../../../implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery.md)

**Reopens / gates closure of:**

- [BR-069](BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) — structural fixes shipped under FR-092; **forensic stamp truth** and agentic paths remain broken
- [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md) — Wave 6 evidence modes exist in scripts; **UKW agent guidance still mandates row timestamp homogenization**

**Predecessor (absorbs residual scope):**

- [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) — Waves 4/6/8 delivered idempotent corpus sweep and `non_substantive` defaults; did **not** backfill homogenized history (~61 fbuboard rows at `2026-04-20 15:52 UTC`)

---

## Summary

Establish **Board Stamp Authority**: row `| Last modified: … UTC` may change only when linked FR/BR/UXR/task evidence supports a substantive delta. **STRUCTURE** passes (prune, sort, dedupe, MoSCOW reorder) must not rewrite row stamps. **CONTENT** passes require provenance.

Deliver, in order:

1. **Validator-first steward** — `validate_board_stamp_diff.py` (proposed path under `packages/frameworks/workflow mgt/scripts/validation/`) compares before/after board content; **blocks** RW/UKW when any row stamp changes without evidence.
2. **Script-path hardening** — wire `_cleanup_fbuboard_active_rows` and all UKW/RW board paths through evidence modes; remove agent instructions to “unify active row `Last modified` timestamps.”
3. **Automatic backfill** — recover homogenized stamps from linked doc `**Last updated:**` and git history (no manual curation required for the bulk corpus).
4. **Optional phase-2** — Cursor/agent **skill** only if the validator proves insufficient for agentic manual edits.

**User decisions (locked):**

| Decision | Choice |
| -------- | ------ |
| Backfill | **Automatic** (linked doc + git) |
| Un evidenced stamp mutation | **Abort** UKW/RW (blocking) |
| Steward shape | **Validator script first**; agent skill optional later |

---

## Problem Statement

### User-visible failure

Active `fbuboard.md` (and `kboard.md`) rows still share a single synthetic timestamp (e.g. `2026-04-20 15:52 UTC` on ~61 lines). That pattern implies a board-hygiene run touched every row without substantive work on most linked FBUs — making stamps **misleading** for staleness, workload, and drift analysis.

### Why FR-092 closure was insufficient

| Layer | FR-092 outcome | Residual gap |
| ----- | -------------- | ------------ |
| Script (`enforce_moscow_row_timestamps_with_stats`) | `non_substantive` preserves existing stamps; corpus sweep idempotent | `_cleanup_fbuboard_active_rows` still appends `timestamp_value` without evidence gate |
| Agentic UKW/RW | Not fully governed | `.cursorrules` / `ukw.md` still require **temporal-drift normalization** (unify row stamps) — contradicts UXR-009 policy |
| Corpus | `stamps_preserved_existing=109` | Preserved **wrong** homogenized history; no backfill |
| Enforcement | Gate 6 counters on hygiene mode | No **blocking** gate on “stamp delta without evidence” at write boundary |

### Edit-class contract (normative)

| Class | Examples | Row `Last modified` |
| ----- | -------- | ------------------- |
| **STRUCTURE** | Prune terminal rows, sort MoSCOW, dedupe footers, alias migration, board `Last Updated` metadata | **Must not change** (preserve or derive from source, never `now()`) |
| **CONTENT** | Linked FR/BR/UXR/task status or body change; version anchor; new task/IPP link on row | **May change** only with positive evidence |

---

## Proposed Solution

### Wave 1 — Policy alignment (blocking semantics in docs)

- Deprecate **row-level** “temporal-drift normalization” / “unify active row `Last modified`” in `.cursorrules`, `.claude/commands/ukw.md`, `update-kanban-workflow-agent-execution.md`, and narrow [FR-076](FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md) to **board-header** drift only.
- Extend `kanban-governance-policy.md` with **Board Stamp Authority** section referencing validator + abort rule.

### Wave 2 — Validator script (Board Steward v1)

New **`validate_board_stamp_diff.py`**:

- Inputs: `--before` / `--after` file paths (or stdin patch), optional `--evidence-manifest` JSON from pipeline.
- Detect per-row stamp deltas on `kboard.md` / `fbuboard.md`.
- For each delta, require evidence: linked source doc field change, git log touch on linked path since last stamp, or explicit release-scope manifest from RW Step 7.
- Exit **non-zero** (blocking) if any row stamp changed without evidence — message lists row id + denial reason.
- Integrate into RW Step 9 and UKW Step 7 validation (same severity as `validate_release_readiness.py` stamp gate).

### Wave 3 — Mutation pipeline hardening

- Refactor `_cleanup_fbuboard_active_rows` to use `enforce_moscow_row_timestamps_with_stats(..., evidence_mode=non_substantive)` or `gated` with provider; never blind `timestamp_value` append.
- Ensure `enforce_terminal_timestamps_on_boards` fbuboard path passes evidence mode consistently.
- Add regression tests: hygiene pass → 0 stamp deltas on fixture with homogenized stamps.

### Wave 4 — Automatic forensic backfill

New **`backfill_board_row_stamps.py`** (or subcommand):

- For each active MoSCOW row with stamp in a homogeneity cluster (configurable: same timestamp ≥ N rows), compute candidate stamp from:
  1. Linked FR/BR/UXR `**Last updated:**` (preferred)
  2. Git last-commit date touching linked `fr-br/*.md` or task doc path
  3. Preserve row if evidence ambiguous (do not invent `now()`)
- Emit diff report + idempotency check; run once under controlled RW.

### Wave 5 — Optional agent skill (deferred)

- Document extension point: `.cursor/skills/board-stamp-authority/SKILL.md` invoked when validator flags agentic edit paths — **only if** Wave 2–4 leave residual manual-edit bypasses.

### Wave 6 — Closure

- Re-close [BR-069](BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) and [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md) with live proof: homogeneity cluster eliminated or below threshold; blocking validator green on UKW dry-run + RW dry-run.

---

## Acceptance Criteria

- [x] **AC1:** Row-level “unify `Last modified`” removed from UKW/RW agent guides; governance policy documents STRUCTURE vs CONTENT.
- [x] **AC2:** `validate_board_stamp_diff.py` exits non-zero when ≥1 row stamp changes without evidence; integrated as **blocking** in RW Step 9 and UKW validation.
- [x] **AC3:** `_cleanup_fbuboard_active_rows` and fbuboard terminal pipeline cannot append synthetic stamps on hygiene (`non_substantive` / `gated` only).
- [x] **AC4:** Automatic backfill reduces homogenized-cluster rows (e.g. `2026-04-20 15:52 UTC`) using linked-doc/git derivation; report lists per-row provenance.
- [x] **AC5:** Post-backfill Gate 8 homogeneity PASS; stamp-diff validator green with evidence manifest.
- [x] **AC6:** BR-069 and UXR-009 marked CLOSED with release evidence (**v0.2.15.8+1**).
- [x] **AC7 (optional):** Agent skill NONE — validator + snapshot sufficient (IPP §4.2).

---

## References

- [kanban-governance-policy.md](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md) — Timestamp governance / evidence modes
- [update_kanban_docs.py](../../../packages/frameworks/workflow%20mgt/scripts/update_kanban_docs.py) — `_cleanup_fbuboard_active_rows`, `EVIDENCE_MODE_*`
- [test_stamp_evidence_gate.py](../../../packages/frameworks/workflow%20mgt/scripts/test_stamp_evidence_gate.py)
- [validate_release_readiness.py](../../../packages/frameworks/workflow%20mgt/scripts/validate_release_readiness.py) — Gate 6 (extend, do not replace row-diff gate)
