---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# UKW trigger: dual-source parity (ai-dev-kit)

**Purpose:** Keep the **canonical** repo [`.cursorrules`](../../../../.cursorrules) UKW section, the **Claude slash command** [`.claude/commands/ukw.md`](../../../../.claude/commands/ukw.md), and the **VWMP guide** [`update-kanban-workflow-agent-execution.md`](../KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md) aligned on **lean active boards** (FR-109), **FR-097** stamps, **UXR-012** icons, and **BR-059** coverage scope.

**Related:** [rw-trigger-dual-source-parity.md](rw-trigger-dual-source-parity.md) (RW guardrails); [E02:S16:T18](../../../../docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T18-ukw-lean-active-board-contract-fr109.md).

---

## Source-of-truth order (maintainers)

1. Edit **kanban governance policy** when the contract itself changes.
2. Port the same semantics into **`.cursorrules` UKW** and **`update-kanban-workflow-agent-execution.md`**.
3. Mirror operator-facing steps in **`.claude/commands/ukw.md`** and **`.cursor/skills/ukw-sync/SKILL.md`**.
4. Update **this checklist** and append a **Delta log** line when you complete a parity pass.

---

## Parity checklist

- [ ] **Active board contract** — `kboard.md` / `fbuboard.md` MoSCOW = live work only; terminal history in `kanban-completed.md` / `fbu-completed.md`; header contract on both boards.
- [ ] **BR-059 (narrowed)** — Coverage applies to **IN PROGRESS** stories with open checklist tasks; do **not** bulk-mirror every story TODO onto the active board; use **Won't Have** + ledger for deferred/shipped items.
- [ ] **UKW `-c`** — Documented; ledger-before-removal; forbidden with `-u`/`-p`/`-a`/`--rp`.
- [ ] **Step 6.5 fbuboard** — Terminal FBU prune; FR-097 no stamp rewrite on hygiene; UXR-012 no icon rewrite on hygiene-only passes.
- [ ] **Validators** — `validate_board_stamp_diff.py` abort UKW on failure; optional `validate_kanban_state_icons.py --strict` after MoSCOW edits; **`validate_active_kanban_board.py --strict`** after prune/archive (FR-109).
- [ ] **RW Step 9** — Gate 11 active-board lean blocking; Gates 1–11 default in `validate_release_readiness.py`.
- [ ] **Pre-commit** — `validate_board_stamps_precommit.py` + `validate_active_kanban_board.py --strict` on `kboard.md` / `fbuboard.md`.
- [ ] **Cheatsheet** — `docs/guides/workflow-initiation-cheatsheet.md` mentions lean boards + `-c` where UKW is documented.

---

## Delta log

### 2026-06-04 — E02:S16:T18 parity pass (FR-109)

| Area | Before | After |
|------|--------|--------|
| Active boards | ~185 / ~273 lines; terminal rows + journals inline | Lean MoSCOW; contract headers; ledgers hold history |
| BR-059 UKW | Bulk add all open checklist TODOs to kboard | Narrowed: in-flight story coverage only; no TODO mirror bloat |
| Enforcement | Manual hygiene only | `validate_active_kanban_board.py`; pre-commit; RW Gate 11 |
| `.claude/commands/ukw.md` | No lean contract in Step 6 | Step 6 lean rules + validator in Step 6.5 |

**Substantive policy mismatch remaining:** None identified after this pass (pending maintainer verification on next UKW run).
