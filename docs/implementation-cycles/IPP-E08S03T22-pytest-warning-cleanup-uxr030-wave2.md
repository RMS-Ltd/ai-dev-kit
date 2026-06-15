# IPP — E08:S03:T22 — UXR-030 Wave 2 pytest warning cleanup

**Host task:** E08:S03:T22  
**Status:** APPROVED FOR IMPLEMENTATION  
**Created:** 2026-06-15

---

## 1. Goal

Remove dominant pytest warning noise from green full-suite runs: ~43× `datetime.utcnow()` DeprecationWarnings from `cli/logging.py`, 3× `PytestReturnNotNoneWarning` from `tests/test_rw_performance.py`, and 1× `utcnow` DeprecationWarning from `update_kanban_docs.py` (four-surface report stamps).

---

## 2. Specification

### Functional

1. `cli/logging.py` uses timezone-aware UTC at all three call sites (L129, L175, L208).
2. Timestamp formats unchanged: filename `YYYYMMDD-HHMMSS`; log lines ISO8601 with `Z` suffix.
3. `tests/test_rw_performance.py` — all `test_*` functions use `assert`; no non-None returns.
4. `main()` preserved for manual harness runs.
5. `update_kanban_docs.py` — `_board_stamp_utc()` helper; replace both `utcnow()` call sites (L1737, L2473); greenfield sync per FR-110.

### Non-functional

- Python 3.11+ (`datetime.now(timezone.utc)` per BR-081).
- No behaviour change to install log content beyond timezone API.

### Out of scope

- Root `pytest.ini filterwarnings` hardening (optional follow-on).
- Other warning sources in the 46-warning total.

---

## 3. Test design

| ID | Test | Red → Green |
| -- | ---- | ----------- |
| T1 | Existing `tests/cli/test_install_logging.py` | Pass; zero utcnow warnings |
| T2 | Existing `tests/test_rw_performance.py` collected by pytest | Pass; zero ReturnNotNone warnings |
| T3 | `python3 -m pytest tests/ -q` | No warnings from these modules |
| T4 | Full suite after `update_kanban_docs.py` fix | Zero remaining utcnow warnings |

---

## 4. Implementation plan

1. **TODO → IN PROGRESS** on T22; link this IPP.
2. Add `_utc_filename_stamp()` / `_utc_iso_z()` helpers in `cli/logging.py`; replace `utcnow()`.
3. Refactor `tests/test_rw_performance.py`: extract helpers; `test_*` uses `assert`.
4. Add `_board_stamp_utc()` in `update_kanban_docs.py`; sync greenfield install mirror.
5. Run targeted pytest + full suite warning check.
6. Mark AC1–AC5; reconcile T22 **COMPLETE**; update UXR-030 Wave 2.
7. **RW E08:S03:T22 --art**.

---

## 5. Documentation

- UXR-030 Wave 2 section; T22 task doc.

---

## 6. Housing

- Code: `cli/logging.py`, `tests/test_rw_performance.py`, `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`, `greenfield-install/`
- Kanban: T22, story-03, kboard, UXR-030

---

## 7. Verification

- [x] `python3 -m pytest tests/cli/test_install_logging.py -W error::DeprecationWarning -q`
- [x] `python3 -m pytest tests/test_rw_performance.py -W error::pytest.PytestReturnNotNoneWarning -q`
- [x] Full suite: no warnings attributed to these modules (including `update_kanban_docs.py`)
