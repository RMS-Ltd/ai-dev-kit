---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 13: BR-059 UKW MoSCOW — full open-task coverage per story

**Task ID:** E02:S16:T13  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-05-29  
**Last updated:** 2026-06-03 (RW **v0.2.16.13+1** — BR-059 UKW Part B.1 + validator)  
**Version Anchor:** v0.2.16.13+1  
**Code:** E02S16T13

**Historical Anchor:** `E06:S07:T109` (legacy housing under ADK analysis story; forensic marker **RW -k** v0.6.7.109+1)

**Upstream:** [BR-059 – UKW MoSCOW incomplete story task coverage](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)

**Coordinates:** [E02:S16:T03](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md); related [BR-042](../../../fr-br/BR-042-ukw-agent-board-cleanup-failure.md), [BR-034](../../../fr-br/BR-034-ukw-moscow-prioritization-missing.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Re-housed UKW governance task; consolidated IPP satisfies FR-042 gate.

**Implementation package:** [IPP-E2S16T13-br059-ukw-moscow-full-story-coverage.md](../../../../../implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md)

---

## Input

- [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md); [story-009](../../epic-05/story-09-docusaurus-documentation-portal.md) checklist vs **kboard** MoSCOW history.
- [E04:S19:T03 investigation report](../../../../../implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report.md) §5.2 (Wave 4 migration).

## Deliverable

- Updated UKW / agent guidance and advisory automation so **all** open story tasks appear on MoSCOW or are explicitly deferred; **BR-059** resolution text.

## Problem

Comprehensive **UKW** can promote **one** task from an in-progress story while the **story checklist** still lists multiple open tasks. The MoSCOW board then diverges from the story SoT until manually corrected.

## Scope

1. **Documentation:** `.cursorrules` / UKW execution guide — for stories **IN PROGRESS**, Step 6 Part B.1 must either enumerate **all** non-complete tasks from the story checklist into MoSCOW (or **Won’t** with rationale), or surface an explicit **gap** in the UKW summary (fail loud).
2. **Procedure:** Diff story task checklist ↔ board rows for in-scope epics/stories during UKW Step 6; add missing rows in stable order.
3. **Advisory validator:** `validate_story_moscow_coverage.py` — open task count vs board rows for a story (± documented deferrals).

## Acceptance Criteria

- [x] **AC1:** Written UKW / agent guidance states the “all open tasks or explicit deferral” rule; linked from **BR-059** Resolution when done.
- [x] **AC2:** Regression narrative: dry run on **E10:S01** (6 open checklist tasks, 0 on `kboard.md`) — validator exit 1 with full missing-id list (2026-06-02). Historical **E05:S09** pattern documented in BR-059.
- [x] **AC3:** [E02:S16:T04](T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) perpetual doc references BR-059 / Step 6 Part B.1.

## SitRep (2026-06-03)

IPP reconciliation only (host remains **COMPLETE**). Post-ship posture and BR-059 closure options **A–D** are documented in [IPP-E2S16T13 §7.1–§7.2](../../../../../implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md#71-sitrep--post-ship-posture-2026-06-03).

**Follow-up (2026-06-03):** Option **B (partial)** executed under **E02:S16:T03** — **E10:S01** MoSCOW rows added on `kboard.md`; validator re-check recorded on T03/BR-059.

---

## Verification (2026-06-02)

```text
$ python "packages/frameworks/workflow-mgt/scripts/kanban/validate_story_moscow_coverage.py" --story E10:S01
Story: E10:S1
  Open checklist tasks: 6
  On kboard (M/S/C/O/W): 0
FAIL: 6 open task(s) missing from kboard
```

```text
$ cd packages/frameworks/workflow-mgt/scripts/kanban && python -m pytest test_validate_story_moscow_coverage.py -q
5 passed
```

## References

- [IPP-E2S16T13-br059-ukw-moscow-full-story-coverage.md](../../../../../implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md)
- [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)
- [Superseded source: `E06:S07:T109`](../../epic-06/story-07-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md)
- [FR-087 / E04:S19:T03](../../../../../implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report.md)
- `packages/frameworks/workflow-mgt/scripts/kanban/validate_story_moscow_coverage.py`
