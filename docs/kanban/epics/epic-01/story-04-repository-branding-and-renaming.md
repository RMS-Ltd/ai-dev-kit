---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 004 – Repository Branding and Renaming

**Status:** ✅ COMPLETE
**Completed:** 2026-05-26
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-07  
**Last updated:** 2026-05-26 (v0.1.4.7+2 – Kanban documentation setup)
**Version:** v0.1.4.7+2
**Code:** E1S04

---

## Task Checklist

- [x] **E01:S04:T01 – Execute repository rename from vibe-dev-kit to ai-dev-kit** - COMPLETE ✅ (Executed immediately - remote repo was deleted, no migration needed)
  - Task: [`T01-execute-repository-rename-from-vibe-dev-kit-to-ai-dev-kit-co`](story-04-repository-branding-and-renaming/T01-execute-repository-rename-from-vibe-dev-kit-to-ai-dev-kit-co.md)
- [x] **E01:S04:T02 – Plan repository rename from ai-dev-kit to head-first-ai-dev-kit (conditional on O'Reilly acceptance)** - ⏭️ SUPERSEDED → **FR-099 / ADR-006** (2026-05-26: public ADK stays `ai-dev-kit`; Head First context private `hf-ai-dev-kit` only — do not execute)
  - Task: [`T02-plan-repository-rename-from-ai-dev-kit-to-head-first-ai-dev`](story-04-repository-branding-and-renaming/T02-plan-repository-rename-from-ai-dev-kit-to-head-first-ai-dev.md)
- [x] **E01:S04:T03 – FR-099 Phase 0 — Inventory & ADR approval** - ✅ COMPLETE — [T03](story-04-repository-branding-and-renaming/T03-fr099-phase0-inventory-adr-approval.md) | [FR-099](../../fbu/FR-099-spin-off-book-epic-to-private-repository.md)
- [x] **E01:S04:T04 – FR-099 Phase 1 — Privatize & rename `hf-ai-dev-kit`** - ✅ COMPLETE — [T04](story-04-repository-branding-and-renaming/T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md)
- [x] **E01:S04:T05 – FR-099 Phase 2 — Book extraction genesis** - ✅ COMPLETE (**v0.1.4.3+1**) — [T05](story-04-repository-branding-and-renaming/T05-fr099-phase2-book-extraction-genesis.md)
- [x] **E01:S04:T06 – FR-099 Phase 3 — Public `ai-dev-kit` rebirth** - ✅ COMPLETE (2026-05-26) (v0.1.4.6+2) — [T06](story-04-repository-branding-and-renaming/T06-fr099-phase3-public-ai-dev-kit-rebirth.md)
- [x] **E01:S04:T07 – FR-099 Phase 4 — Rewire & verify** - ✅ COMPLETE (2026-05-26) (v0.1.4.7+2) — [T07](story-04-repository-branding-and-renaming/T07-fr099-phase4-rewire-and-verify.md)
  - **IPP:** [IPP-E1S04-fr099-book-private-public-migration.md](../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md) (all phases)
  - Umbrella redirect (historical RW): [`T03-spin-off-book-epic-private-repo-fr099.md`](story-04-repository-branding-and-renaming/T03-spin-off-book-epic-private-repo-fr099.md) | [ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

---

## Overview

This story plans and executes **repository naming and separation** between the public AI Dev Kit product and the private book project.

1. **Phase 1:** `vibe-dev-kit` → `ai-dev-kit` ✅ **COMPLETE**
2. **Phase 2 (superseded):** `ai-dev-kit` → `head-first-ai-dev-kit` on O'Reilly acceptance — **cancelled 2026-05-26** ([FR-099](../../fbu/FR-099-spin-off-book-epic-to-private-repository.md), [ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md))
3. **FR-099:** Option C migration **complete** (Phases 0–4 ✅); public [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit)

**Phase 1 Status:** ✅ **COMPLETE** — all references updated from `vibe-dev-kit` to `ai-dev-kit`.

---

## Goal

Establish clear repository boundaries: **public `ai-dev-kit`** (neutral frameworks) and **private `hf-ai-dev-kit`** (book IP, Epic 24, Head First context), with minimal disruption during cutover.

---

## Dependencies

**Blocks:**
- None (planning task)

**Blocked By:**
- None

**Coordinates With:**
- Epic 6 (Framework Management) - Framework dependency references
- Epic 5 (Documentation Management) - Documentation updates
- Epic 9 (Book Related Work) - Book branding and O'Reilly acceptance

---

## References

- `docs/kanban/epics/epic-01/epic-01.md`
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- `docs/project-management/rituals/policy/kanban-governance-policy.md`

---

