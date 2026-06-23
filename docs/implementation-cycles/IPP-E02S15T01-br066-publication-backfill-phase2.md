---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-02T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S15:T01 — BR-066 publication backfill Phase 2 (IPP)

**Host Task:** [`T01-ipw-docusaurus-filing-contract-and-backfill-br066.md`](../kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md) **(E02:S15:T01)**  
**Planning for:** [BR-066 — IPW missing Docusaurus filing for planning artifacts](../kanban/fbu/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)  
**Status:** Implementation complete (Phase 2 hardening)

---

## 1. Specification

### 1.1 Goal

Close the BR-066 backlog slice left after Phase 1 (contract + single-task validator): bulk inventory audit, richer diagnostics, executable tests, and targeted task-doc wiring for historical `docs/implementation-cycles/` artifacts so publication is discoverable via kanban task docs and the Docusaurus `implementation-cycles/` autogen sidebar.

### 1.2 Scope (frozen)

| In scope | Out of scope |
| -------- | ------------ |
| Extend `validate_ipw_publication_wiring.py` with `--audit-inventory` and disk-aware required kinds | New blocking RW release gate (ADR **EXEMPT**) |
| Expand pytest coverage (inventory, IPP-as-plan, partial on-disk packages, false-positive guards) | Rewriting all 45+ historical artifacts |
| Wire the 16 inventory “missing wiring” hosts (or story anchors where no discrete task doc exists) | Manual per-file Docusaurus sidebar entries (FR-066 autogen covers `docs/implementation-cycles/`) |
| Update `IPW-PUBLICATION-BACKFILL-INVENTORY.md` with post-backfill counts | Full UKW MoSCOW reprioritisation |

### 1.3 Functional requirements

- **F1:** `--audit-inventory` scans `ICW-*`, `IPW-*`, `IPP-*` under `docs/implementation-cycles/` and lists basenames not linked from any kanban task doc.
- **F2:** `--requested E:S:T` validates only artifact **kinds that exist on disk** for that EST (partial packages allowed).
- **F3:** `IPP-E*S*T*-*.md` may satisfy the **implementation-plan** link when no `ICW-*-implementation-plan.md` exists.
- **F4:** Diagnostics name the missing **kind** and list on-disk candidate basenames when present.
- **F5:** Inventory report reflects reduced unwired count after backfill.

### 1.4 Non-functional requirements

- Validator remains deterministic, read-only, and suitable for RW Step 9 advisory use (non-blocking unless adopted later).
- Tests run via existing pytest layout under `packages/frameworks/workflow-mgt/scripts/validation/`.

### 1.5 Docusaurus / publication contract

- **Repo SoT:** durable artifacts live under `docs/implementation-cycles/`.
- **Discoverability:** host task doc must link each on-disk planning artifact (or declare `Publication Status: NOT_APPLICABLE` with reason).
- **Portal:** `portal/sidebars.js` autogenerates `implementation-cycles/` from `docs/` (FR-066); no per-file sidebar edits required for wiring closure.

---

## 2. Test design

| ID | Area | Verification |
| ---- | ------ | ------------- |
| T1 | Full ICW trio wiring | Temp repo: three links → exit 0 |
| T2 | Missing kind | Omit test-design link → exit 1, message names kind |
| T3 | NOT_APPLICABLE | Status + reason → exit 0; missing reason → exit 1 |
| T4 | IPP as plan | Spec + test + IPP link, no ICW plan file → exit 0 |
| T5 | Partial on disk | Only spec file exists → only spec link required |
| T6 | Inventory audit | Unwired basename listed; wired basenames omitted |
| T7 | False positive | Wrong EST link does not satisfy host EST |
| T8 | Production smoke | `validate_ipw_publication_wiring.py --requested E02:S15:T01` PASS on ai-dev-kit |
| T9 | Inventory delta | `--audit-inventory` unwired count decreases vs Phase 1 baseline (16) |

---

## 3. Implementation plan

### Step 1 — Status transition (executor)

1. Set host task **E02:S15:T01** from `COMPLETE` → `IN PROGRESS`; update `Last updated`.

### Step 2 — Validator hardening

1. Add `--audit-inventory`, artifact filename parsing (`.md` suffix), disk-aware required kinds.
2. Accept `IPP-*` as implementation-plan when linked from task doc.

### Step 3 — Tests

1. Extend `test_validate_ipw_publication_wiring.py` per §2.

### Step 4 — Targeted backfill

1. For each host in `IPW-PUBLICATION-BACKFILL-INVENTORY.md`, add `## Planning artifacts (publication)` links (relative paths to `docs/implementation-cycles/`).
2. Add `**Task ID:**` headers where missing for validator discovery.

### Step 5 — Documentation

1. Update inventory counts and Phase 2 notes.
2. Wire this IPP bidirectionally in T01 (`Input`, `References`, verification).
3. Optional: note Phase 2 completion in BR-066 (bulk slice delivered; gate adoption still open).

### Step N — Status reconciliation (executor)

1. Reconcile T01 to `COMPLETE` (or `IN PROGRESS` / `BLOCKED` with evidence) after verification.

---

## 4. Documentation deliverables

| Action | Path |
| ------ | ---- |
| **CREATE** | `docs/implementation-cycles/IPP-E2S15T1-br066-publication-backfill-phase2.md` (this file) |
| **UPDATE** | `docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md` |
| **UPDATE** | `docs/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md` |
| **UPDATE** | Host task docs / story anchors for inventory items (see inventory Phase 2 table) |
| **UPDATE** | `packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py` |
| **UPDATE** | `packages/frameworks/workflow-mgt/scripts/validation/test_validate_ipw_publication_wiring.py` |
| **NONE** | New ADR (EXEMPT — no new blocking gate) |

---

## 5. Housing

| Artifact | Location |
| -------- | -------- |
| IPP (consolidated) | `docs/implementation-cycles/` |
| Validator | `packages/frameworks/workflow-mgt/scripts/validation/` |
| Tests | co-located under `validation/` |
| Kanban host | Epic 2 → Story 015 → T01 |

---

## 6. ADR necessity matrix

| Candidate ADR | Trigger | Decision |
| ------------- | ------- | -------- |
| Blocking RW gate for publication wiring | Would change release semantics | **EXEMPT** — advisory validator only in Phase 2 |
| Docusaurus sidebar per artifact | FR-066 autogen | **EXEMPT** |

---

## 7. Verification evidence

| Check | Result |
| ----- | ------ |
| `pytest test_validate_ipw_publication_wiring.py` | Pass (9 tests) |
| `validate_ipw_publication_wiring.py --requested E02:S15:T01` | PASS (host T01) |
| `validate_ipw_publication_wiring.py --audit-inventory` | Record exit code + unwired count in T01 after backfill |
| Inventory delta | Update `IPW-PUBLICATION-BACKFILL-INVENTORY.md` |

---

## References

- [BR-066](../kanban/fbu/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- [T01 host task](../kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md)
- [Phase 1 inventory](IPW-PUBLICATION-BACKFILL-INVENTORY.md)
- [ICW E02:S15:T01 package](ICW-E2S15T01-test-design.md)
- [Portal FR-066 scope](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md)
