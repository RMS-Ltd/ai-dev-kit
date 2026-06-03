---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 15: Workflow initiation cheatsheet (UXR-015)

**Task ID:** E02:S16:T15  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-05-30  
**Last updated:** 2026-05-30 (IPP implementation verified; cheatsheet alignment pass)  
**Version Anchor:** v0.2.16.15+1  
**Code:** E02S16T15  

✅ COMPLETE (v0.2.16.15+1)

Publication Status: PUBLISHED  
**Planning package:** [`IPP-E02S16T15-workflow-initiation-cheatsheet.md`](../../../../../implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md)

**Upstream:** [UXR-015 — Workflow initiation cheatsheet](../../../fr-br/UXR-015-workflow-initiation-cheatsheet.md)

---

## Input

- [UXR-015](../../../fr-br/UXR-015-workflow-initiation-cheatsheet.md) findings, recommendations, and proposed cheatsheet outline (sections A–E).
- [IPP-E02S16T15](../../../../../implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md) — IPW planning package.
- Trigger routing: `CLAUDE.md`, `.cursorrules`, `.claude/commands/rw.md`, `ukw.md`, `ipw.md`.
- Guides section: [`docs/guides/README.md`](../../../../../guides/README.md).

---

## Problem statement

Maintainers and agents cannot reliably recall the growing matrix of workflow triggers, flags, prerequisites, and common sequences (RW, UKW, IPW, CMW, PVW, ICW). Canonical specs are agent-oriented and fragmented; a scannable human quick-reference under `docs/guides/` is missing.

---

## Deliverable

- `docs/guides/workflow-initiation-cheatsheet.md` — decision tree, per-workflow flag matrices, common sequences, blocked-session hints, links to canonical deep docs.
- `docs/guides/README.md` — link under Key Documents.
- One-line pointer from `CLAUDE.md` and `AGENTS.md`.
- Cheatsheet marks planned **`UKW -ad`** (Address Drift) until FR ships; disambiguates `RW -d` vs `UKW -a` vs `UKW -ad`.

---

## Scope

1. Author cheatsheet from UXR-015 outline (sections A–E or equivalent).
2. Use two-digit padded E/S/T examples per [UXR-014](../../../fr-br/UXR-014-two-digit-est-identifier-default-formatting.md).
3. Include “last verified against” note; `.cursorrules` remains agent SoT when content diverges.
4. Wire discoverability from `docs/guides/README.md`.
5. Do **not** implement `UKW -ad` behavior in this task — document as planned only.

---

## Acceptance criteria

- [x] **AC1:** `docs/guides/workflow-initiation-cheatsheet.md` exists covering RW, UKW, IPW/ICW, CMW, PVW.
- [x] **AC2:** Each workflow lists prerequisites (plan mode, tool access) and post-run handoff (`RW` where applicable).
- [x] **AC3:** Flag expansions disambiguate `RW -d` vs planned `UKW -ad` vs `UKW -a`.
- [x] **AC4:** `docs/guides/README.md` links the cheatsheet under Key Documents.
- [x] **AC5:** UXR-015 ↔ E02:S16:T15 bidirectional links and story checklist entry present.

---

## References

- [UXR-015](../../../fr-br/UXR-015-workflow-initiation-cheatsheet.md)
- [IPP-E02S16T15](../../../../../implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md)
- [Workflow initiation cheatsheet](../../../../../guides/workflow-initiation-cheatsheet.md)
- [Story 016](../Story-016-perpetual-ongoing-workflow-operations.md)
- [Release Workflow agent execution guide](../../../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
- [Update Kanban Workflow agent execution guide](../../../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)
