---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Open ∧ taskless FBU — intake queue

**Purpose:** Working queue for filings under the **open taskless FBU** intake plan (agentic task creation, one `RW -k` per epic-aligned filing). **Do not** batch-generate task bodies; each row is processed with deliberate reasoning.

**MoSCOW source:** [`fbuboard.md`](fbuboard.md)  
**Governance:** KG-R2 (FR/BR), UXR pattern Epic 7 Story-000; [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md)

---

## Phase A — Inventory rules (read-only tooling allowed)

An item appears here when **open** (not COMPLETE/CLOSED/RESOLVED/REJECTED/VERIFIED_FIXED, etc.) **and** one of:

1. No **`**Implementing Task:**`** with a working relative link to a task file under `epics/`, or  
2. Only a **Story** link on the board without `E#:S##:T##`, or  
3. Claimed **`E#:S##:T##`** but the task file is missing, or  
4. Task lives under a **non-standard** task id (e.g. BR-059 → **E6:S07:T109**, not `T59`) — treat as **filed** once BR doc links to that task; do not add a duplicate `T59`.

Reconcile board vs doc: **source markdown + on-disk task file** wins.

---

## Per-item agentic checklist (Phase B)

Before `RW -k`:

1. Read the full FBU item doc (FR/BR/UXR); note dependencies and collisions (duplicate FR numbers, legacy `T` use).  
2. **Epic/Story (KG-R4):** default homes — FR → Epic 5 `Story-001-fr-repo`; BR → Epic 6 `Story-001-br-repo`; UXR registry → Epic 7 `Story-000-uxr-repo`; exceptions when board or content already assigns another story/task.  
3. **Task id:** Prefer repository pattern `FR-NNN`→`E5:S01:TNNN`, `BR-NNN`→`E6:S01:TNNN`, `UXR-NNN`→`E7:S00:TNNN` (story 0 uses `T03`-style slugs) unless a collision forces another `T` (document rationale in the task doc).  
4. Author **task doc:** scope, deliverables, acceptance criteria tailored to the source — not a generic stub.  
5. **Story checklist** row + **`**Implementing Task:**`** on the FBU item doc + task doc links back.  
6. **fbuboard** / **fbu-structure** line for that id shows `E#:S##:T##`.  
7. `git checkout epic/{N}-…` matching epic; run `validate_branch_context.py --strict`; then **`RW -k E{N}:S{SS}:T{TT}`** (Step 1b: `--mode rw-k`).

---

## Multi-epic and stale status (edge cases)

- **Multi-epic FR (FR-011):** One FR may need **multiple tasks** on different epics — separate filings, separate branches, separate `RW -k` runs.  
- **Duplicate FR ids** (two `FR-010` / `FR-050` files): one canonical task per *file*; second task gets a **non-matching** `T` only with explicit rationale in the task doc.  
- **Stale board:** FR body may say IMPLEMENTED while board says TODO — fix board when wiring.  
- **Non-standard Status headers** (some BRs): infer open vs done from body if header is missing.

---

## Queue table (snapshot 2026-04-26, scoped pass under E4:S19:T06)

**Epic branches (examples):** Epic 5 → `epic/5-*`; Epic 6 → `epic/6-framework-management`; Epic 7 → `epic/7-documentation-maintenance`.

| MoSCOW | Item | Needs task file | Needs Implementing Task | Suggested epic branch (default) | `RW -k` (after filing) |
| -------- | ------ | ----------------- | ------------------------- | -------------------------------- | ------------------------ |
| M | BR-038 | No (task exists) | No (linked to E6:S06:T63) | `epic/6-framework-management` | n/a — already wired |
| M | BR-039 | Yes | Yes | `epic/6-framework-management` | `RW -k E6:S01:T39` |
| M | BR-059 | No (E6:S07:T109 exists) | Yes (doc header missing link) | `epic/6-framework-management` | n/a — add doc wiring first |

*Remaining open items: process in MoSCOW order; this table was reconciled in Wave 4 for FR-073 AC3 closure evidence under E4:S19:T06. Continue one item per `RW -k` pass where filing is required.*

### Should / Could / unbanded (abbreviated)

- **WIRE only (task exists, add `**Implementing Task:**`):** FR-031, FR-035, FR-036, FR-037, FR-038, FR-039, FR-040, FR-043, FR-044, FR-046, FR-047, FR-048, FR-049, FR-056, FR-062, UXR-005 (verify T05 link), etc.  
- **CREATE + WIRE:** Legacy BR-001–008 backlog, many FR-002+ without `TNN` under `Story-001-fr-repo`, UXR-003 registry, FR-050 pair, FR-057–061, BR-040/042/051–053/055/057, etc.

*Agents: for each item, re-verify on disk before duplicating a task.*

---

## Completion criteria (from plan)

- [ ] Every open item in scope has **Implementing Task** + task file (or explicit non-standard id like T109).  
- [ ] Board/structure lines match.  
- [ ] Each **new** filing has a **git** trace via `RW -k` on the matching `epic/{N}-…` branch.
