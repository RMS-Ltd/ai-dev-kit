---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)

**Bug ID:** BR-059  
**Task ID:** [E02:S16:T13](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md)  
**Historical implementing task:** `E06:S07:T109` (superseded 2026-05-29, FR-087 Wave 4)  
**Priority:** HIGH  
**Severity:** MEDIUM (board SoT diverges from story checklist; planners lose visibility)  
**Status:** OPEN  
**Created:** 2026-03-30  
**Last updated:** 2026-06-02 — Process fix shipped under **E02:S16:T13** (BR remains OPEN for historical corpus)  
**Classification:** UKW + Kanban board accuracy

---

## Bug Summary

A **comprehensive UKW** run promoted **E05:S09:T01** to the MoSCOW **Should** section but **did not add E05:S09:T02–T07**, even though **Story 009** lists all seven tasks as **TODO / IN PROGRESS** in its task checklist. Treating “one representative task per story” as sufficient is a **workflow failure**: the kanban board is expected to reflect **all active tasks** for an in-progress story unless explicitly deferred.

---

## Problem Description

### Observed behavior

- Story: [`Story-009-docusaurus-documentation-portal.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal.md) — checklist shows **E05:S09:T01–T07** (FR-065–FR-071), all still open.
- After UKW (2026-03-30), [`kboard.md`](../kboard.md) **Should** listed **only T01**.
- Stakeholder expectation: **every** E5:S09 task that is not complete should appear on the board (or be explicitly moved to **Won’t** / documented deferral with rationale).

### Expected behavior

- UKW Step 6 (MoSCOW) should either:
  1. **Enumerate all non-complete tasks** from the story’s task checklist for stories marked IN PROGRESS, **or**
  2. **Fail loudly** (agent summary + optional validator) when a story has N>1 open tasks but the board lists fewer than N without a documented exception.

### Concrete example

| Task    | FR     | On board after UKW (before fix) |
|---------|--------|----------------------------------|
| E05:S09:T01 | FR-065 | Yes |
| E05:S09:T02 | FR-066 | No |
| E05:S09:T03 | FR-067 | No |
| E05:S09:T04 | FR-068 | No |
| E05:S09:T05 | FR-069 | No |
| E05:S09:T06 | FR-070 | No |
| E05:S09:T07 | FR-071 | No |

---

## Impact

- **Planning:** Teams assume the MoSCOW board is complete; missing rows hide parallelizable work (e.g. docs path, CI, deploy).
- **UKW trust:** Partial updates read as “success” while coverage is incomplete (related pattern: [BR-042](BR-042-ukw-agent-board-cleanup-failure.md)).
- **Forensics:** Harder to correlate FR chain **FR-065–071** with visible board work.

---

## Proposed direction (investigation)

1. **Cursor rules / UKW guide:** State explicitly that for IN PROGRESS stories, **all open tasks** from the story checklist must appear in MoSCOW (or **Won’t** with reason), not a single “lead” task.
2. **Agent procedure:** UKW Step 6: diff story task checklist ↔ board rows for current epic/story scope; add missing rows in order **T01…T07**.
3. **Optional:** Lightweight script or checklist item: “Story S09 open task count == board Should rows for E5:S09 (± deferrals).”
4. **Regression:** Re-run UKW after fix on a story with multiple open tasks and confirm full enumeration.

---

## Related work

- **Implementing task:** [E02:S16:T13](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md) (historical: `E06:S07:T109`)
- **Story:** [E5:S09 – Docusaurus Documentation Portal](../epics/Epic-5/Story-009-docusaurus-documentation-portal.md)  
- **Related BR:** [BR-042](BR-042-ukw-agent-board-cleanup-failure.md) (completed tasks left on board — opposite failure mode)  
- **Related BR:** [BR-034](BR-034-ukw-moscow-prioritization-missing.md)  
- **Perpetual UKW task:** [E02:S16:T03](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)  

---

## Resolution / current status

- **OPEN** (process fixed; historical gap corpus not re-audited) — **E05:S09** board rows were manually corrected 2026-03-30. **2026-06-02:** [E02:S16:T13](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md) shipped **UKW Step 6 Part B.1** (story checklist enumeration) in `.cursorrules`, [cursorrules-ukw-trigger-section.md](../../../packages/frameworks/workflow%20mgt/cursorrules-ukw-trigger-section.md), [update-kanban-workflow-agent-execution.md](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md), [ukw/AGENTS.md](../../../packages/frameworks/workflow%20mgt/agents/ukw/AGENTS.md), plus advisory [`validate_story_moscow_coverage.py`](../../../packages/frameworks/workflow%20mgt/scripts/kanban/validate_story_moscow_coverage.py). **IPP:** [IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md](../../implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md). **Dry-run:** `--story E10:S01` → 6 open checklist tasks, 0 on `kboard` (exit 1).
- **SitRep (2026-06-03):** [IPP-E02S16T13 §7.1–§7.2](../../implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md#71-sitrep--post-ship-posture-2026-06-03) — post-ship posture and BR-059 closure options (A–D); default **Option A** (keep OPEN).
- **Board remediation (2026-06-03, Option B partial):** **E10:S01:T01–T06** added to `kboard.md` Could Have per story checklist (BR-059 regression target). Re-run `validate_story_moscow_coverage.py --story E10:S01` after release to confirm PASS.
