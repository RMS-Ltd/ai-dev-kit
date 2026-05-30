---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 13: BR-059 UKW MoSCOW — full open-task coverage per story

**Task ID:** E02:S16:T13  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-05-29  
**Last updated:** 2026-05-29 (re-housed from `E06:S07:T109` per FR-087 Wave 4 / `E04:S19:T03` investigation report)  
**Code:** E02S16T13

**Historical Anchor:** `E06:S07:T109` (legacy housing under ADK analysis story; forensic marker **RW -k** v0.6.7.109+1)

**Upstream:** [BR-059 – UKW MoSCOW incomplete story task coverage](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)

**Coordinates:** [E02:S16:T03](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md); related [BR-042](../../../fr-br/BR-042-ukw-agent-board-cleanup-failure.md), [BR-034](../../../fr-br/BR-034-ukw-moscow-prioritization-missing.md)

Publication Status: NOT_APPLICABLE
Publication N/A Reason: Re-housed UKW governance task; no separate three-file ICW publication set.

---

## Input

- [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md); [Story-009](../../Epic-5/Story-009-docusaurus-documentation-portal.md) checklist vs **kboard** MoSCOW history.
- [E04:S19:T03 investigation report](../../../../implementation-cycles/E04S19T03-e6s07-default-housing-investigation-report.md) §5.2 (Wave 4 migration).

## Deliverable

- Updated UKW / agent guidance and (optional) automation so **all** open story tasks appear on MoSCOW or are explicitly deferred; **BR-059** resolution text.

## Problem

Comprehensive **UKW** can promote **one** task from an in-progress story while the **story checklist** still lists multiple open tasks. The MoSCOW board then diverges from the story SoT until manually corrected.

## Scope

1. **Documentation:** `.cursorrules` / UKW execution guide — for stories **IN PROGRESS**, Step 6 must either enumerate **all** non-complete tasks from the story checklist into MoSCOW (or **Won’t** with rationale), or surface an explicit **gap** in the UKW summary (fail loud).
2. **Procedure:** Diff story task checklist ↔ board rows for in-scope epics/stories during UKW Step 6; add missing rows in stable order.
3. **Optional follow-up:** Lightweight check (script or validator hook) — open task count vs board rows for a story (± documented deferrals).

## Acceptance Criteria

- [ ] **AC1:** Written UKW / agent guidance states the “all open tasks or explicit deferral” rule; linked from **BR-059** Resolution when done.
- [ ] **AC2:** Regression narrative: UKW on a story with **N>1** open tasks yields **N** corresponding MoSCOW rows (or **Won’t** entries with reason), verified on at least one dry run (e.g. **E5:S09** pattern).
- [ ] **AC3:** UKW perpetual doc (or changelog in task progress) references this fix so future UKW runs inherit the rule.

## References

- [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)
- [Superseded source: `E06:S07:T109`](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md)
- [FR-087 / E04:S19:T03](../../../../implementation-cycles/E04S19T03-e6s07-default-housing-investigation-report.md)
