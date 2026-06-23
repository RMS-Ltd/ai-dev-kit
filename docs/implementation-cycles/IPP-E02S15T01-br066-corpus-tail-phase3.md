---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S15:T01 — BR-066 corpus tail Phase 3 (IPP)

**Host Task:** [`T01-ipw-docusaurus-filing-contract-and-backfill-br066.md`](../kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md) **(E02:S15:T01)**  
**Planning for:** [BR-066 — IPW missing Docusaurus filing for planning artifacts](../kanban/fbu/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)  
**Status:** COMPLETE (released **v0.2.15.1+3**)

---

## 1. Specification

### 1.1 Goal

Close **BR-066** by wiring every remaining task-addressed planning artifact under `docs/implementation-cycles/` so `validate_ipw_publication_wiring.py --audit-inventory` reports **0 unwired**, with fbuboard UXR-010 compliance and bidirectional T01 ↔ IPP links.

### 1.2 Scope (frozen)

| In scope | Out of scope |
| -------- | ------------ |
| Wire all unwired `ICW-*` / `IPW-*` / `IPP-*` from kanban host task docs or story anchors | New blocking RW gate |
| Update inventory + BR-066 **RESOLVED** | Rewriting artifact bodies |
| Fix T01 broken `ICW-E2S15T1-*` links (never filed; IPP-only host) | Batch board `Last modified` stamps (FR-097) |
| fbuboard BR-066: single IPP segment → this IPP | Editing Cursor plan file |

### 1.3 Functional requirements

- **F1:** Baseline `--audit-inventory` recorded in §7 (35 unwired at Phase 3 start).
- **F2:** Each unwired basename linked from a kanban host with `## Planning artifacts (publication)` (or equivalent link graph satisfying validator).
- **F3:** Hosts without discrete task docs use story-level anchors with `**Task ID:**` (e.g. E02:S06:T01 story doc).
- **F4:** Legacy `IPW-E6S7T103-*` wired from **E02:S16:T03** (re-house target).
- **F5:** `IPW-PUBLICATION-BACKFILL-INVENTORY.md` post–Phase 3 row: **0** unwired.
- **F6:** **BR-066** → **RESOLVED**; fbuboard one IPP link only.

### 1.4 Non-functional requirements

- Deterministic, idempotent wiring (skip if basename already referenced).
- Relative paths computed from host doc depth.

### 1.5 Publication contract

Discoverability = kanban task doc markdown link to artifact basename under `docs/implementation-cycles/`; Docusaurus autogen unchanged (FR-066).

---

## 2. Test design

| ID | Check | Covers |
| ---- | ------- | ------ |
| T1 | `--audit-inventory` exit **0**, count **0** | F2, F5 |
| T2 | `pytest …/test_validate_ipw_publication_wiring.py` green | Regression |
| T3 | Spot `--requested` on E02:S01:T17, E08:S03:T05, E08:S03:T06 | F2 |
| T4 | `--requested E02:S15:T01` PASS | Host |
| T5 | fbuboard BR-066: no `—No IPP—` with IPP link | F6 |

---

## 3. Implementation plan

### Step 1 — Status transition (executor)

1. T01 **COMPLETE** → **IN PROGRESS** for Phase 3.

### Step 2 — Baseline audit

1. Run `--audit-inventory`; capture list in §7.

### Step 3 — Bulk wiring

1. Resolve host per EST via `find_task_markdown` (story anchor fallback for E02:S06:T01, E02:S16:T03 for legacy T103).
2. Add relative links per basename; fix T62 padded/unpadded IPP basename mismatch.

### Step 4 — Closure docs

1. Update inventory, T01 (remove rot ICW links; add Phase 3 IPP), BR-066, fbuboard.

### Step 5 — Verification

1. T1–T5; pytest.

### Step 8 — Release

1. **`RW E02:S15:T01 --art`** → **v0.2.15.1+3**.

### Step N — Status reconciliation (executor)

1. T01 **COMPLETE** + version marker; BR-066 **RESOLVED**.

---

## 4. Documentation deliverables

| Action | Path |
| ------ | ---- |
| **CREATE** | `docs/implementation-cycles/IPP-E2S15T1-br066-corpus-tail-phase3.md` (this file) |
| **UPDATE** | `docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md` |
| **UPDATE** | Host task docs (~35 wiring targets) |
| **UPDATE** | `T01-ipw-docusaurus-filing-contract-and-backfill-br066.md` |
| **UPDATE** | `BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md` |
| **UPDATE** | `kboard.md` |

---

## 5. Housing

| Artifact | Location |
| -------- | -------- |
| IPP | `docs/implementation-cycles/` |
| Validator | `packages/frameworks/workflow-mgt/scripts/validation/` |
| Kanban host | Epic 2 → Story 015 → T01 |

---

## 6. ADR necessity matrix

| Trigger | Decision |
| ------- | -------- |
| T1–T7 advisory patterns | **EXEMPT** — bulk doc links only |

---

## 7. Verification evidence

| Check | Result |
| ----- | ------ |
| Baseline `--audit-inventory` (2026-06-03) | Scanned **113**, unwired **35** |
| Post-wiring `--audit-inventory` (2026-06-03) | Scanned **114**, unwired **0** — **PASS** |
| `pytest test_validate_ipw_publication_wiring.py` | **9 passed** |
| `--requested E02:S15:T01` | **PASS** |
| Link-depth repair | Fixed `../../../../implementation-cycles/` → correct relative depth where links did not resolve (34 kanban files) |

### Baseline unwired list (Phase 3 start)

- ICW-E2S1T17-implementation-plan.md, ICW-E2S1T17-specification.md, ICW-E2S1T17-test-design.md
- ICW-E7S1T6-implementation-plan.md, ICW-E7S1T6-specification.md, ICW-E7S1T6-test-design.md
- IPP-E2S16T6 through IPP-E2S16T17 (Story 016 batch)
- IPP-E4S19T8, IPP-E7S1T9, IPP-E8S3T5, IPP-E8S3T6
- IPP-E2S1T22, IPP-E2S6T1, IPP-E2S16T2/T03/T07/T12, IPP-E4S6T1, IPP-E5S1T56, IPP-E5S1T62, IPP-E7S1T11
- IPW-E3S2T12, IPW-E4S19T2, IPW-E5S9T11, IPW-E6S6T57/T62, IPW-E6S7T103/T112/T113, IPW-E6S9T1, IPW-E7S6T18

---

## References

- [BR-066](../kanban/fbu/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- [Phase 2 IPP](IPP-E02S15T01-br066-corpus-tail-phase3.md)
- [Inventory](IPW-PUBLICATION-BACKFILL-INVENTORY.md)
