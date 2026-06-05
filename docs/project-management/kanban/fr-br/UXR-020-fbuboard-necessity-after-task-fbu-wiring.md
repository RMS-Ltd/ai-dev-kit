---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Is `fbuboard.md` Still Necessary After Task–FBU Wiring?

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-05  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** ACCEPTED  
**Code:** UXR-020  
**Last updated:** 2026-06-05  

**Implementing Task:** [E04:S19:T12](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T12-fbuboard-necessity-investigation-uxr020.md)

---

## Summary

With bidirectional **task ↔ FBU** wiring now standard, **`kboard.md` and `fbuboard.md` largely mirror each other** in the Could Have backlog and create **duplicate UKW/RW maintenance**. However, **`fbuboard.md` still serves a non-redundant role** for **verification-pending** FBUs (task COMPLETE, FBU still OPEN) and for **FBU-first prioritisation** in Must/Should bands. **Full retirement is premature**; a **scoped consolidation** (drop C-band duplication, keep verification + taskless lanes) is the lowest-friction path.

---

## Research Objective

**Question:** Now that every filed FBU has an implementing task and boards cross-link, do we still need a separate `fbuboard.md`, or does it only create unnecessary sync admin?

**Success criteria for this research:**

1. Quantify overlap vs divergence between active boards (2026-06-05 snapshot).
2. Identify any behaviour **only** `fbuboard.md` supports today.
3. Map workflow/validator/policy dependencies that assume two boards.
4. Recommend retain / consolidate / retire with trade-offs.

---

## Methodology

**Research method:** Corpus audit of live boards, completion ledgers, governance policy (FR-092 four-surface contract, FR-109 lean board), and changelog evidence of recent mirror/revert cycles.

**Sources (2026-06-05):**

- [`kboard.md`](../kboard.md), [`fbuboard.md`](../fbuboard.md)
- [`kanban-completed.md`](../kanban-completed.md), [`fbu-completed.md`](../fbu-completed.md)
- [`kanban-governance-policy.md`](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md) (active vs completed surfaces, RW Step 7)
- [FR-051](FR-051-fr-br-uxr-prioritization-board.md) (original rationale for fbuboard)
- [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) (four-surface RW contract)
- UKW/RW changelog entries for consolidation passes and **2026-06-05 lean-board revert** on `kboard.md`

---

## Key Findings

### F1 — C-band is near-duplicate (admin burden confirmed)

Roughly **28 Could Have rows** appear on **both** boards with the same underlying work: same `E:S:T`, same FBU link, same priority band. Row primary key differs only by surface (`E04:S09:T01` vs `BR-007`). Maintaining MoSCOW order, stamps, and IPP segments on **two files** for the same backlog is the main **unnecessary admin** the user reported.

### F2 — M/S bands are **not** mirrors (fbuboard-only rows exist)

**`fbuboard.md` Must/Should (9 rows, 2026-06-05)** includes items **absent from `kboard.md` M/S**:

| FBU | Task | Why kboard omits it |
| --- | ---- | ------------------- |
| FR-045, FR-046, BR-061 | E03:S02:T12 | Task **COMPLETE** (`kanban-completed.md`); FBUs **OPEN** (verification pending) |
| BR-093, BR-090, BR-091 | E05:S09:T14, E05:S09:T13, E07:S07:T03 | Tasks **COMPLETE**; FBUs **OPEN** (CI/adopter verification pending) |
| FR-106, BR-088, BR-082 | E02:S13:T08, E06:S09:T19, E06:S09:T11 | Same pattern |

This is **by design** per both board headers:

> Rows whose **task is COMPLETE** but FBU remains **OPEN** are **fbuboard-only** — sync must **not** re-add them to `kboard.md`.

So the boards are **not** simple reflections; they encode **different lifecycle semantics** (task execution vs FBU closure/verification).

### F3 — kboard-only rows also exist (task-without-active-FBU-band)

**Six Epic 10 review tasks** (`E10:S01:T01`–`T06`) sit on `kboard.md` Could Have with **no FBU** — legitimate task-only work. Perpetual lanes differ too: `kboard` lists perpetual **tasks**; `fbuboard` lists linked **FR-023 / FR-043 / FR-058** in Ongoing.

### F4 — Infrastructure cost of dual boards is real

Dual surfaces are embedded in:

- **RW Step 7** four-surface contract (task doc, FBU doc, `kboard`, `fbuboard`) — [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- **UKW** comprehensive scope (both boards, stamp diff, icon/spacing validators)
- **Validators:** `validate_active_kanban_board.py`, `validate_board_stamp_diff.py`, `validate_kanban_state_icons.py`, `validate_kanban_moscow_spacing.py`, pre-commit stamp homogeneity — all run on **both** files
- **`update_kanban_docs.py`** and extensive test fixtures (~100+ `fbuboard` references in workflow-mgt scripts/tests)

Retiring `fbuboard` is a **framework migration**, not a doc delete.

### F5 — Original fbuboard intent (FR-051) is partially obsolete, partially still valid

[FR-051](FR-051-fr-br-uxr-prioritization-board.md) sought centralized FBU prioritisation **before** tasks existed. **KG-R2 atomic intake** and bidirectional wiring now mean **every substantive FBU has a task**. The **stakeholder-facing FBU queue** role is largely satisfied by:

- FBU docs in `fr-br/`
- [`fbu-structure.md`](../fbu-structure.md) inventory
- [`fbu-completed.md`](../fbu-completed.md) terminal ledger

What FR-051 did **not** anticipate: the **verification-pending** split (task shipped, FBU not closed) — that gap is what today's `fbuboard` M/S bands actually hold.

### F6 — Recent history: blind mirroring was reverted

`kboard.md` header (2026-06-05): *"reverted erroneous fbuboard→kboard mirror; lean board restored"*. Prior consolidation passes that mirrored fbuboard onto kboard **violated** the lean active-board contract ([FR-109](FR-109-ukw-lean-active-board-contract.md)) by re-adding verification-pending tasks to the task board.

---

## User Pain Points

1. **Double edits** — UKW/RW must touch two MoSCOW files for the same C-band backlog.
2. **Drift anxiety** — Stamps, IPP segments, and band placement can diverge between mirrors.
3. **Cognitive load** — Operators must remember which board is authoritative for which lifecycle state.
4. **Validator noise** — Twice the stamp/icon/spacing enforcement surface area.

---

## Recommendations

### R1 — Do **not** fully retire `fbuboard` yet (HIGH)

The verification-pending lane has **no equivalent** on `kboard` without a **row-model change**. Removing `fbuboard` without a replacement would hide **9+ active verification items** from MoSCOW visibility.

### R2 — **Scoped consolidation** (preferred, HIGH)

- **Drop C-band duplication:** Maintain backlog **only on `kboard.md`** for wired task+FBU items in TODO state.
- **Keep `fbuboard` M/S (and taskless queue)** for: (a) FBU OPEN + task COMPLETE, (b) open ∧ taskless intake ([`fbu-open-taskless-queue.md`](../fbu-open-taskless-queue.md)).
- **Single pointer** from `fbuboard` header: *"C-band backlog → see kboard."*

**Estimated admin reduction:** ~70% of duplicate row maintenance without losing verification visibility.

### R3 — If full single-board is desired later (MEDIUM, needs IPW)

Enrich **`kboard` row contract** with explicit **dual status** tokens, e.g. `Task: COMPLETE | FBU: OPEN (verification)` and a dedicated **Verification** MoSCOW subsection — then deprecate `fbuboard` with FR-092 Wave migration, validator updates, and adopters install path.

### R4 — Policy/workflow follow-ups (tracked on implementing task)

- Amend **FR-092 four-surface** contract if consolidation proceeds (surface 4 may become optional or ledger-only).
- Update **UKW step matrix** to conditional fbuboard scope.
- Extend **`validate_active_kanban_board.py`** with anti-duplication rule (same `E:S:T` in both C-bands → warn/fail).

---

## Affected Areas

- Kanban boards: `kboard.md`, `fbuboard.md`, `fbu-completed.md`
- UKW / RW Step 7 agent execution guides
- `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py` and validation suite
- Kanban governance policy (active board contract)
- Adopter install templates (if fbuboard retired)

---

## Acceptance Criteria (research closure)

- [x] **AC1:** Overlap and divergence quantified with live-board evidence.
- [x] **AC2:** Non-redundant fbuboard behaviours documented (verification-pending, taskless intake).
- [x] **AC3:** Workflow/validator dependency inventory captured at high level.
- [x] **AC4:** Actionable recommendation set (retain / partial consolidate / full retire) with trade-offs.
- [ ] **AC5:** User/stakeholder sign-off on chosen direction → triggers IPW for implementation task (if consolidation/retire).

---

## Next Steps

1. **User decision:** Accept **R2 (scoped consolidation)** vs **R3 (full single-board)** vs **status quo**.
2. If implementing: run **IPW** on **E04:S19:T12** (or successor task) before board/policy/script changes.
3. **RW -k** after intake artifacts land on epic branch.

---

## Related

- [FR-051](FR-051-fr-br-uxr-prioritization-board.md) — created fbuboard
- [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) — four-surface contract
- [FR-109](FR-109-ukw-lean-active-board-contract.md) — lean active board
- [UXR-008](UXR-008-kboard-fbuboard-default-naming-adoption.md) — naming normalization
- [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) — row link contract
