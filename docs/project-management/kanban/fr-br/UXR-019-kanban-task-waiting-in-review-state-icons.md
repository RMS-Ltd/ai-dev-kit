---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Kanban task `IN REVIEW` and `WAITING` state icons (UXR-012 extension)

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-05  
**Submitted By:** Maintainer (MoSCOW scan / sign-off queue visibility)  
**Priority:** MEDIUM  
**Status:** IMPLEMENTED  
**Code:** UXR-019  
**Last updated:** 2026-06-05  
**Version:** v0.4.13.8+1 (E04:S13:T08)  

**Implementing Task:** [E04:S13:T08](../epics/epic-04/story-13-kanban-board-moscow-prioritized-task-view/T08-kanban-task-waiting-in-review-state-icons-uxr019.md)  
**Planning package:** [IPP-E04S13T08](../../../implementation-cycles/IPP-E04S13T08-kanban-task-waiting-in-review-state-icons.md)

**Related:** [UXR-012](UXR-012-kanban-fbu-state-icons-for-moscow-rows.md) (Set A primary + Set B fallback; **E04:S13:T07** ✅), [E04:S19:T11](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md) (sign-off / adopter replay queue), [kanban-board-guide.md](../kanban-board-guide.md), `packages/frameworks/workflow-mgt/scripts/kanban/state_icons.py`

---

## Summary

MoSCOW task rows today use **🔄 IN PROGRESS** for work that is **implementation-complete** but **queued on external review, sign-off, or adopter verification** — hiding queue time and conflating active work with waiting (see industry practice: separate *doing* vs *waiting* / *in review* stages).

This UXR extends **UXR-012** with two **task-board** canonical statuses and **Set A** icons, without replacing the status word (grep/validator-safe).

---

## Research objective

**Primary question:** Should `kboard.md` adopt distinct statuses **`IN REVIEW`** and **`WAITING`** with canonical Set A icons, distinct from **🔄 IN PROGRESS** and **🚫 BLOCKED**?

**Secondary questions:**

1. What alias phrases normalize to each status (`WAITING FOR SIGN-OFF`, `AWAITING APPROVAL`, …)?
2. How do UKW/RW Step 7 and `validate_kanban_state_icons.py` (Gate 9) extend the allowlist?
3. When should **E04:S19:T11**-class rows use **WAITING** vs stay **IN PROGRESS** with a parenthetical?

---

## Editorial decision (icon picks)

Extends UXR-012 **Set A (boards)** + **Set B (fallback only)**.

| Canonical state | Status token (board) | Set A (emoji) | Set B (fallback) | Candidate tier | Decision |
| --------------- | -------------------- | ------------- | ---------------- | -------------- | -------- |
| `IN_REVIEW` | `IN REVIEW` | **🔍** | **◎** | **A1** | **Locked** (maintainer, 2026-06-05) |
| `WAITING` | `WAITING` | **⏳** | **⌛** | **B1** | **Locked** (maintainer, 2026-06-05) |

**Rationale for A1 (🔍):** “Inspect / review” — distinct from 🔄 (active), 📋 (todo), 💡 (proposed), 🚫 (blocked); aligns with Jira/ADO “In review” scanning.

**Rationale for proposed B1 (⏳):** Universal queue/waiting metaphor for external gates (GH sign-off, adopter replay, PO acceptance); not a hard **BLOCKED**.

### Rejected alternates (retained for audit)

| State | Alternates | Why not primary |
| ----- | ---------- | ----------------- |
| `IN_REVIEW` | 👁️, 📑 | 👁️ informal; 📑 weak at small size |
| `WAITING` | ⏸️, ✍️ | ⏸️ reads as “paused task”; ✍️ too narrow (sign-off only) |

---

## Normative row examples

```markdown
- **E04:S19:T11** – UXR-017: Kanban epic/story path lowercase naming - ⏳ WAITING (MEDIUM, v0.4.19.11+1 — ET AC5 + GH sign-off; impl. complete in kit) | …
```

```markdown
- **E07:S07:T01** – Workflow machinery code review - 🔍 IN REVIEW (HIGH, v0.7.7.1+1 — maintainer review of IPP findings) | …
```

```markdown
- **E06:S09:T16** – BR-086: RW install lowercase fresh kanban - ⏳ WAITING (MEDIUM, v0.6.9.16+2 — adopter replay #17) | …
```

**Lifecycle sketch (tasks):**

```text
📋 TODO → 🔄 IN PROGRESS → 🔍 IN REVIEW → ⏳ WAITING → ✅ COMPLETE
                              (optional)      (external gates)
```

**Semantic rules (proposed):**

| Status | Use when | Do not use when |
| ------ | -------- | ----------------- |
| `IN REVIEW` | Deliverable done; peer/maintainer/doc/code review in flight | Still coding; external org sign-off only |
| `WAITING` | External gate: adopter replay, GH issue sign-off, PO acceptance, dependency response | Hard blocker with no queue expectation (**BLOCKED**) |
| `IN PROGRESS` | Active implementation or integration | Waiting on reviewer/sign-off only |

---

## Alias normalization (proposed)

Longest-first token match in `state_icons.py` (same pattern as UXR-012):

| Alias (normalize →) | Canonical key |
| ------------------- | ------------- |
| `WAITING FOR SIGN-OFF`, `AWAITING SIGN-OFF`, `WAITING FOR APPROVAL` | `WAITING` |
| `IN REVIEW`, `UNDER REVIEW`, `PEER REVIEW` | `IN_REVIEW` |

Icons inject from canonical key only (aliases map to one emoji each).

---

## Acceptance criteria (UXR)

- [x] **AC1:** Editorial table published (this doc); **IN REVIEW = 🔍 / ◎** locked; **WAITING = ⏳ / ⌛** locked (B1).
- [x] **AC2:** `state_icons.py`, `kanban-board-guide.md`, `kanban-governance-policy.md`, UXR-012 cross-link updated with new states + aliases.
- [x] **AC3:** `validate_kanban_state_icons.py` Gate 9 recognizes new tokens; `--strict` passes after backfill.
- [x] **AC4:** UKW/RW Step 7 guidance: when to use `IN REVIEW` vs `WAITING` vs parenthetical on `IN PROGRESS`.
- [x] **AC5:** Active rows corrected (**E04:S19:T11**, **E06:S09:T16** → `WAITING`) on **v0.4.13.8+1** RW.

---

## Out of scope

- New icons for FR/BR/UXR type prefixes (UXR-012 phase 2).
- Replacing `**Status:**` in task docs in this UXR (board-row convention first; task-doc enum may follow in same task).
- `kboard.md` unless alias overlap (`UNDER REVIEW` on FBU) — separate mapping table if needed.

---

## Next steps

1. Confirm **WAITING** icon (**B1 ⏳** recommended).
2. **IPW** on **E04:S13:T08** → link IPP.
3. Implement + backfill + **RW E04:S13:T08** for validator/governance release.
