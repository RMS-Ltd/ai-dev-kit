---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 4, Task 3: Spin off book epic to private repository (FR-099)

**Task ID:** E1:S04:T03  
**Status:** IN PROGRESS (Phase 2 genesis shipped **v0.1.4.3+1**; Phases 3–4 pending)  
**Priority:** HIGH  
**Estimated Effort:** Medium–Large (multi-phase migration)  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (**v0.1.4.3+1** — FR-099 Phase 2 book extraction genesis; `--art`)  
**Version:** v0.1.4.3+1  
**Code:** E1S04T03

**Upstream:** [FR-099 - Spin off book epic to a private repository](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)

**Migration ADR:** [ADR-006 — Book project private repository spin-off](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) (Proposed outline)

**Supersedes:** [E1:S04:T02](../Story-004-repository-branding-and-renaming.md) (public `head-first-ai-dev-kit` rename — cancelled)

---

## Task ID

**Full Task ID:** `E1:S04:T03`

---

## Summary

Execute the **preferred Option C migration** ([ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)):

1. Privatize and rename current repo → **`hf-ai-dev-kit`** (full history, book + frameworks).
2. Land **book extraction genesis commit** on the private repo.
3. Rebirth **public `earlution/ai-dev-kit`** from genesis with framework-only history and **no Head First branding**.

Phase 0: validated inventory + maintainer approval of ADR-006. Phases 1–4 require IPW before execution.

---

## Input

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) — preferred migration outline
- Book assets (inventory — executor validates):
  - `docs/book-proj/`
  - `docs/project-management/kanban/epics/Epic-24/`
  - `kboard.md` E24:* rows; structure / `_index.md` entries
  - Branch `epic/24-book-related-work`
  - Head First sections in vision, README, kanban-board-guide
- Prior art: [FR-064](../../../fr-br/FR-064-shields-branch-private-repo-badges.md), [E6:S01:T37](../../../epics/Epic-6/Story-001-br-repo/T37-kanban-install-consumer-board-contamination.md)

---

## Problem statement

Public ai-dev-kit exposes unpublished book IP and couples the neutral framework product to Head First / book branding. **E1:S04:T02** (rename public ADK to `head-first-ai-dev-kit`) is **superseded**: separation means public ADK stays `ai-dev-kit`; book context lives only in private **`hf-ai-dev-kit`**.

---

## Deliverables

### Phase 0

1. **Validated book asset inventory** — paths, sensitivity, private-retain vs public-genesis vs redact.
2. **Maintainer approval** of [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) (including open questions: orphan vs genesis-SHA bootstrap, cutover window, changelog archive policy).
3. **E1:S04:T02 superseded** — documented in Story 004 checklist and ADR-006 (no separate impact memo required).

### Phase 2 — ✅ Shipped (**v0.1.4.3+1**, 2026-05-26)

Book extraction genesis commit:

- Deleted `docs/book-proj/` (8 manuscript files)
- Deleted `docs/project-management/kanban/epics/Epic-24/` (full epic tree)
- Removed E24 rows from `kboard.md`; Epic 24 from `_index.md`, `kanban-structure.md`
- Replaced Head First book section in `ai-dev-kit-vision-and-purpose.md` with public/private scope stub
- Updated `kanban-board-guide.md`, `repo-structure-for-adopters.md`
- Archived E24 entries from `kanban-completed.md` (pointer to private repo)
- Trimmed `KB-INDEX.md` Epic-24 entries

**Not in this pass:** changelog archive book excerpts (Phase 3/4 policy); bulk `earlution/` URL rewire (Phase 4).

### Phases 2–4 (post-IPW / next execution)

| Phase | Action | Status |
|-------|--------|--------|
| **1** | Privatize; rename → `RMS-Ltd/hf-ai-dev-kit` | ✅ 2026-05-26 |
| **2** | Book extraction genesis commit on private repo (Option B rule) | ✅ **v0.1.4.3+1** |
| **3** | Create new public `ai-dev-kit` from genesis commit | Pending |
| **4** | Rewire remotes, badges, install docs, CI; install smoke test | Pending |

---

## Scope

### In scope

- ADR-006 execution per approved outline
- Supersede E1:S04:T02 in kanban docs
- Inventory, cutover, public rebirth, rewire, verification

### Out of scope

- Executing superseded E1:S04:T02 (public Head First rename)
- O'Reilly submission workflow (private book repo)
- Copying framework packages into book repo as long-term SoT

---

## Acceptance criteria

- [ ] **AC1:** Validated inventory covers all book-related paths plus stragglers from repo-wide search.
- [ ] **AC2:** [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) approved; **E1:S04:T02** marked SUPERSEDED in Story 004.
- [ ] **AC3:** Private `hf-ai-dev-kit` retains full pre-cutover history.
- [ ] **AC4:** New public `ai-dev-kit` genesis tree: no `docs/book-proj/`, no `Epic-24/`, no Head First obligation in vision/README.
- [ ] **AC5:** No active E24 rows on public `kboard.md`.
- [ ] **AC6:** Install smoke test: no Epic-24 contamination.
- [ ] **AC7:** Remotes, badges, install URLs point at new public repo.

---

## Dependencies / coordination

- **Supersedes:** E1:S04:T02 (do not execute)
- **Coordinates with:** FR-039, FR-080/FR-082
- **IPW gate:** Phases 1–4 blocked until IPP + explicit execution authorization

---

## Approach (Phase 0)

1. Repo-wide search: `book-proj`, `Epic-24`, `E24:`, `Head First`, manuscript filenames.
2. Classify hits: **private-retain** | **public-genesis exclude** | **redact stub**.
3. Walk maintainer through [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) open questions.
4. Mark E1:S04:T02 SUPERSEDED in Story 004 and Epic 1 checklist.
5. Do not privatize or cut over until ADR approved and IPW complete for Phases 1–4.

---

## Version Anchor

**Release marker (IN PROGRESS):** `v0.1.4.3+1` — FR-099 Phase 2 book extraction genesis (`--art`).

**Forensic marker on task COMPLETE:** `✅ COMPLETE (vRC.E.S.T+B)` when Phases 3–4 finish.

---

## References

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- [Story 004](../Story-004-repository-branding-and-renaming.md)
- [Epic-1.md](../Epic-1.md)
