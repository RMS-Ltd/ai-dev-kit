# FR-092 Wave 4 corpus-canonical sweep evidence

**Date:** 2026-04-27
**Trigger:** FR-092 / E2:S15:T07 Wave 4 implementation
**Operator:** Implementation execution under FR-092 plan
**Contract:** FR-092 Wave 4 corpus-canonical sweep (full-board normalization, idempotent)

## Pre-sweep symptoms (B1 drift reproduced on live boards)

Per `IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md` §6 (B1):

> Live `fbuboard.md` rows still have duplicated tail tokens after T05 sign-off. `apply_canonical_row_transform_pipeline` not invoked over corpus during RW Step 7.

Concrete pattern observed on every release-scope row in `fbuboard.md`:

```text
- **FR-092** – ... - [FR-092](url) | [FR-092](url) | [E2:S15:T07](url) | [—IPP—](url) | | Last modified: ...
```

The first `[FR-092](url)` was placed inline in the description body (preceded by ` - `), and a second copy appeared in canonical-tail position (preceded by ` | `). The previous dedup regex required a leading ` | ` separator, so the inline duplicate was preserved.

## Root cause (locked in regression test 4.20)

`packages/frameworks/workflow mgt/scripts/update_kanban_docs.py::_normalize_traceability_segments_for_row`

Line `re.sub(rf"\s*\|\s*{re.escape(fbu_token)}", "", line_core)` matched only ` | <token>` occurrences. Body-inline ` - <token>` duplicates passed through and the canonical-tail re-emission then produced a row containing both copies. Fix: broaden the separator class to `[-|]`, removing duplicates regardless of whether the operator placed them inline or in tail position. Same fix applied to `task_token` dedup.

## Sweep outcome

Two-pass execution against live boards:

| Board | Pass 1 rows_changed | Pass 1 byte_size_before | Pass 1 byte_size_after | Pass 2 rows_changed |
| ---- | ----: | ----: | ----: | ----: |
| `docs/project-management/kanban/kboard.md` | 13 | 12,183 | 12,293 | 0 (idempotent) |
| `docs/project-management/kanban/fbuboard.md` | 42 | 33,578 | 30,261 | 0 (idempotent) |
| `docs/project-management/kanban/kanban-board.md` | 0 | 315 | 315 | 0 |
| `docs/project-management/kanban/fr-br-uxr-board.md` | 0 | 334 | 334 | 0 |

`fbuboard.md` shrank by 3,317 bytes once duplicate inline FBU/task links were removed. `kboard.md` grew slightly because `[—IPP—]` segments were re-attached to rows that had stale canonical tails.

## Idempotency proof

A second `run_corpus_canonical_sweep(...)` invocation on the post-sweep boards reported `clean (idempotent)` for all four boards, demonstrating that the canonical pipeline is now a fixed point on live state.

## Forensic stamp safety

`timestamps_appended_missing == 0` for all boards in the sweep report — no synthetic stamps were appended. Existing terminal `Last modified` chunks were preserved verbatim through the parse → normalize → render pipeline, consistent with UXR-009 forensic semantics (Wave 6 will add the work-evidence write-boundary gate; this sweep is non-destructive at the stamp level).

## Locked-in regression coverage

- `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py::test_4_20_fr092_wave4_b1_drift_eliminates_duplicate_inline_fbu_link` — uses fixture `packages/frameworks/workflow mgt/scripts/fixtures/fr092_wave4/fbuboard_pre_corpus_sweep.md` to reproduce the live drift, runs the canonical sweep, asserts:
  - exactly one canonical link per FBU after the sweep,
  - empty `| |` separators normalized away,
  - second sweep reports `rows_changed == 0` (idempotent fixed point).

## Bucket B sign-off matrix

| Drift ID | Pre-sweep symptom | Resolution path | Status |
| ---- | ---- | ---- | ---- |
| B1 | Duplicated `[FBU](url)` in `fbuboard.md` rows after T05 | `_normalize_traceability_segments_for_row` separator broadened; corpus-mode entrypoint added | RESOLVED |
| B2 | FR-089 multiplication hardening did not eliminate observed multiplication | Same root cause as B1; resolved by Wave 4 dedup broadening | RESOLVED |
| B3 | BR-069 narrowed but residual tail repetition persists | Resolved by Wave 4 sweep on live boards | RESOLVED (closure of BR-069 still gated on Wave 8 sign-off per FR-092 supersede chain) |
| B4 | RW Step 7 only metadata-touched rows normalized | `run_corpus_canonical_sweep` provides explicit corpus-mode entrypoint; `--corpus-canonical` CLI flag wires it into RW | RESOLVED |

## Cross-references

- [`FR-092`](../../../project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [`IPP-E2S15T07`](../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)
- [`update_kanban_docs.py`](../../../../packages/frameworks/workflow%20mgt/scripts/update_kanban_docs.py)
- [`test_update_kanban_docs.py::test_4_20`](../../../../packages/frameworks/workflow%20mgt/scripts/test_update_kanban_docs.py)
