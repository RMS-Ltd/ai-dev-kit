---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-125: Consolidate E02:S16:T03 and E02:S16:T07 documentation maintenance lanes

**Type:** Feature Request (FR)  
**Submitted:** 2026-06-10  
**Submitted By:** Operator (intake)  
**Priority:** MEDIUM  
**Status:** IMPLEMENTED
**Version:** v0.2.16.3+7
**Last updated:** 2026-06-10 (RW E02:S16:T03 --art)

**Implementing Task:** [E02:S16:T03](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md)

---

## Summary

Merge the split perpetual documentation lanes **E02:S16:T03** (markdown lint/format) and **E02:S16:T07** (ad-hoc content) into a **single** perpetual task at **T03**, using the **T07 display name** and **unrestricted documentation scope** (not limited to `.md` files).

---

## Description

Story 016 currently carries two overlapping perpetual lanes for documentation hygiene:

| Task | Name | Scope (prior) |
| ---- | ---- | ------------- |
| **E02:S16:T03** | Markdown Documentation Maintenance | Markdown-only: lint, link depth, frontmatter, structure |
| **E02:S16:T07** | Ad-hoc Documentation Maintenance | Broader git doc surfaces: README, INSTALL, pins, integrity tables, ADRs, guides |

Operators must choose between lanes for work that often spans both (e.g. README content + link fixes). The split adds attribution friction without a clear boundary in practice.

**Desired outcome:** One perpetual lane — **E02:S16:T03 — Ad-hoc Documentation Maintenance (Perpetual)** — absorbing T07 scope and historical BUILD attribution from both lanes. **E02:S16:T07** becomes a redirect stub (ID reclaimed for consolidation, distinct from the earlier finite UKW extension → E04:S14:T06).

---

## Requirements

### Functional Requirements

- [x] **FR1:** Canonical perpetual task remains **E02:S16:T03** with title **Ad-hoc Documentation Maintenance (Perpetual)**.
- [x] **FR2:** Merged in-scope covers **all** git documentation maintenance (format, links, content, pins, integrity copy, cross-surface consistency) except surfaces owned elsewhere (RW Step 5 version banner, kanban sync, workflow/script behavior, repo infrastructure).
- [x] **FR3:** **E02:S16:T07** perpetual doc file becomes a **SUPERSEDED** redirect to T03; story checklist and `kboard.md` reflect consolidation.
- [x] **FR4:** Redirect stub retained at prior T03 filename for link stability.

### Non-Functional Requirements

- [x] Bidirectional links: this FR ↔ consolidated T03 task doc.
- [x] Story 016 tactical overview lists one doc-maintenance lane (T03), not T03 + T07.

---

## Scope Analysis

**Problem Domain:** Kanban perpetual-task governance (Story 016)  
**Affected Areas:**

- [x] Documentation (task docs, story, board, FR registry)
- [ ] Backend/API
- [ ] Frontend/UI

**Estimated Complexity:** Simple (single-session intake + doc updates)

---

## Acceptance Criteria

- [x] **AC1:** `T03-ad-hoc-documentation-maintenance-perpetual.md` is the canonical task; scope is not restricted to markdown-only.
- [x] **AC2:** `T07-ad-hoc-documentation-maintenance-perpetual.md` redirects to T03 with SUPERSEDED banner.
- [x] **AC3:** Story 016 checklist has one doc-maintenance row (T03); T07 perpetual row removed.
- [x] **AC4:** `kboard.md` Ongoing band shows consolidated T03; T07 moved to Won't Have (SUPERSEDED) or removed from Ongoing.

---

## Dependencies

**Related Work:**

- [FR-058](FR-058-markdown-maintenance-workflow.md) — historical MMW / markdown lane (scope subsumed by T03)
- [FR-062](FR-062-github-release-installation-experience.md) — integrity doc examples previously attributed to T07
- [FR-088](FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) — Story 016 perpetual model
- [IPP-E02S16T24](../../implementation-cycles/IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md) — prior S16 consolidation

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-10  
**Intake By:** Intake Agent

**Decision Flow Results:**

- [x] Story Match Found: Epic 2, Story 16 → Task **E02:S16:T03** (consolidated perpetual lane)

**Assigned To:**

- Epic: E02 — Workflow Management Framework
- Story: E02:S16 — Perpetual Ongoing Operations
- Task: E02:S16:T03 — Ad-hoc Documentation Maintenance (Perpetual)

**Kanban Links:**

- Story: [`story-16-perpetual-ongoing-workflow-operations.md`](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md)
- Task: [`T03-ad-hoc-documentation-maintenance-perpetual.md`](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md)

---

## References

- Prior T03: markdown-only lane ([redirect stub](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-markdown-documentation-maintenance-perpetual.md))
- Prior T07: ad-hoc content lane ([redirect stub](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T07-ad-hoc-documentation-maintenance-perpetual.md))
