---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T10 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T10-kanban-install-datetime-utcnow-br081.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T10-kanban-install-datetime-utcnow-br081.md) **(E06:S09:T10)**  
**Planning for:** [BR-081](../kanban/fbu/BR-081-kanban-install-datetime-utcnow-deprecated.md) · [GitHub #13](https://github.com/RMS-Ltd/ai-dev-kit/issues/13)  
**Status:** Approved (implementation complete — released via RW E06:S09:T10)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Remove all `datetime.utcnow()` from `install_kanban_framework.py` | BR-081 AC, task scope |
| RF2 | Use timezone-aware UTC (`datetime.now(timezone.utc)`) | BR-081 Expected, `install_receipt.py` precedent |
| RF3 | Fresh/dry-run on Python 3.12+ emits no `DeprecationWarning` for datetime | GitHub #13, task AC |
| RF4 | Log timestamps and template `today` substitution remain UTC-correct | RF2 parity |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Python floor 3.11+ — use `timezone.utc` (workflow-mgt convention) |
| RNF2 | Minimal diff: installer only; no drive-by refactors |

### 1.3 Invariants and boundaries

- **Invariants:** Install modes and log line shape unchanged except timezone-aware timestamps.
- **In scope:** `install_kanban_framework.py` lines ~106 (`_log`), ~224 (`create_consumer_board_skeleton`); tests in `tests/kanban/test_install_kanban_logging.py`.
- **Out of scope:** `agentic_template_generator.py`, UXR-004 stale GitHub #13 link, repo-wide `utcnow` sweep.

---

## 2. Specification

### 2.1 Goal

Eliminate deprecation noise during book/adopter dry-runs of `install_kanban_framework.py` without changing install semantics.

### 2.2 Specification mapping

- RF1–RF2: `from datetime import datetime, timezone`; replace both `utcnow()` call sites with `datetime.now(timezone.utc)`.
- L106: `datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")` for env-log fallback (matches `install_receipt.utc_now_iso()` shape).
- L224: `datetime.now(timezone.utc).strftime("%Y-%m-%d")` for template substitution.

### 2.3 Constraints

- Grep installer for `utcnow` before merge; do not rely on BR line numbers (~93/~185).

### 2.4 Status transition intent

- **Current task status:** TODO → IN PROGRESS on first implementation change → COMPLETE after AC + RW.
- **Atomic propagation:** Task doc and `kboard.md` row updated in same RW Step 7 pass.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single fix pattern |
| T2 | Reversibility | N | One-file revert |
| T3 | Blast radius | N | §4.1 file list only |
| T4 | Precedent | N | Follows `install_receipt.py` |
| T5 | Constraint trade-off | N | None |
| T6 | Governance contract | N | No RW/IPW change |
| T7 | Supersedes | N | No ADR conflict |

**Outcome:** `EXEMPT`

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | Installer + tests only |
| E2 | No new options | Y | Implements BR-081 / IPP §2 |
| E3 | Reversible in one task | Y | Normal PR revert |
| E4 | Spec elsewhere | Y | IPP §2 + task AC |
| E5 | Documented NONE | Y | Governing: `packages/frameworks/workflow-mgt/scripts/install_receipt.py` |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | RF1 static | Installer source contains no `utcnow` |
| T2 | RF3 subprocess | `--mode fresh --dry-run --force` with `PYTHONWARNINGS=error::DeprecationWarning` → exit 0 |
| T3 | RF4 logging | Existing `test_log_lines_use_iso_timestamp_and_level` passes; optional ISO-Z regex on log lines |

**Test file:** `tests/kanban/test_install_kanban_logging.py` (`TestInstallNoUtcnowDeprecation`).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | T10 **TODO → IN PROGRESS**; update `Last updated` | Task doc |
| 2 | Patch `install_kanban_framework.py` imports + L106 + L224 | No `utcnow` in installer |
| 3 | Add T1–T2 tests | pytest green |
| 4 | `pytest tests/kanban/test_install_kanban_logging.py -q` | CI-local pass |
| 5 | Update `packages/frameworks/kanban/CHANGELOG.md` | Unreleased note |
| 6 | Close BR-081 (status, AC) | BR doc |
| **N** | Reconcile T10 **COMPLETE** + forensic marker; RW Step 7 four-surface | Task, BR, boards |

### 4.1 Files to create or modify

- `packages/frameworks/kanban/scripts/install_kanban_framework.py`
- `tests/kanban/test_install_kanban_logging.py`
- `docs/implementation-cycles/IPP-E6S9T10-br081-kanban-install-datetime-utcnow.md` (this file)
- `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T10-kanban-install-datetime-utcnow-br081.md`
- `docs/kanban/fbu/BR-081-kanban-install-datetime-utcnow-deprecated.md`
- `packages/frameworks/kanban/CHANGELOG.md`

### 4.2 Dependency order

1. Code fix → 2. Tests → 3. BR/task docs → 4. RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-TASK | T10 task doc | IPP links, status, AC | Step 1, N |
| D-BR | BR-081 | FIXED, AC checked | Step 6 |
| D-PKG | kanban `CHANGELOG.md` | Unreleased patch note | Step 5 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-IPP | This file | IPW package |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| User install guides | NONE — no CLI/API change |
| UXR-004 GitHub #13 | NONE — out of scope |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-IPP | `docs/implementation-cycles/IPP-E6S9T10-br081-kanban-install-datetime-utcnow.md` | PUBLISHED | evergreen | T10 Input/References |
| D-TASK | `.../T10-kanban-install-datetime-utcnow-br081.md` | PUBLISHED | evergreen | Story 9 checklist |
| D-BR | `.../BR-081-*.md` | PUBLISHED | evergreen | fbuboard, T10 |
| D-PKG | `packages/frameworks/kanban/CHANGELOG.md` | PUBLISHED | evergreen | — |

---

## 7. Success / verification criteria

- [x] No `utcnow` in `install_kanban_framework.py`
- [x] `pytest tests/kanban/test_install_kanban_logging.py` passes including deprecation guard (BR-081 tests; pre-existing integration test may fail in some envs)
- [x] BR-081 AC satisfied
- [x] Task doc links IPP; status COMPLETE after RW
- [x] All §5 UPDATE items done or deferred with reason

---

## References

- [BR-081](../kanban/fbu/BR-081-kanban-install-datetime-utcnow-deprecated.md)
- [GitHub #13](https://github.com/RMS-Ltd/ai-dev-kit/issues/13)
- [`install_receipt.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_receipt.py)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
