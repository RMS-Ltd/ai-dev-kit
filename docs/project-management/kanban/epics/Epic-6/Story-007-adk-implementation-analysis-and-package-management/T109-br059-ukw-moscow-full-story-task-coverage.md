---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T13:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 109: BR-059 UKW MoSCOW — full open-task coverage per story

**Task ID:** E6:S07:T109  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-03-31  
**Last updated:** 2026-03-31 — **RW -k** v0.6.7.109+1 (kanban task release on **epic/6**)  
**Code:** E6S07T109

**Upstream:** [BR-059 – UKW MoSCOW incomplete story task coverage](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)

**Coordinates:** Perpetual UKW task [E2:S16:T03](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md); related [BR-042](../../../fr-br/BR-042-ukw-agent-board-cleanup-failure.md), [BR-034](../../../fr-br/BR-034-ukw-moscow-prioritization-missing.md)

---

## Input

- [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md); [Story-009](../../Epic-5/Story-009-docusaurus-documentation-portal.md) checklist vs **kanban-board** MoSCOW history.

## Deliverable

- Updated UKW / agent guidance and (optional) automation so **all** open story tasks appear on MoSCOW or are explicitly deferred; **BR-059** resolution text. **RW -k** v0.6.7.109+1: kanban task/traceability only (implementation still TODO).

## Version Anchor

**Forensic marker:** **RW -k** v0.6.7.109+1 — task doc + boards (**work remains TODO** per **AC1–AC3**).

---

## Problem

Comprehensive **UKW** can promote **one** task from an in-progress story (e.g. **E5:S09:T01** only) while the **story checklist** still lists **T01–T07** open. The MoSCOW board then diverges from the story SoT until manually corrected.

---

## Scope

1. **Documentation:** `.cursorrules` / UKW execution guide — for stories **IN PROGRESS**, Step 6 must either enumerate **all** non-complete tasks from the story checklist into MoSCOW (or **Won’t** with rationale), or surface an explicit **gap** in the UKW summary (fail loud).
2. **Procedure:** Diff story task checklist ↔ board rows for in-scope epics/stories during UKW Step 6; add missing rows in stable order (e.g. **T01…Tn**).
3. **Optional follow-up:** Lightweight check (script or validator hook) — open task count vs board rows for a story (± documented deferrals).

---

## Acceptance Criteria

- [ ] **AC1:** Written UKW / agent guidance states the “all open tasks or explicit deferral” rule; linked from **BR-059** Resolution when done.
- [ ] **AC2:** Regression narrative: UKW on a story with **N>1** open tasks yields **N** corresponding MoSCOW rows (or **Won’t** entries with reason), verified on at least one dry run (e.g. **E5:S09** pattern).
- [ ] **AC3:** **T101** UKW perpetual doc (or changelog in task progress) references this fix so future UKW runs inherit the rule.

---

## Evidence

*(Links to PR/commit, UKW run notes, before/after board excerpt.)*

---

## References

- [BR-059](../../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)
- [Story-009-docusaurus-documentation-portal.md](../../Epic-5/Story-009-docusaurus-documentation-portal.md)
