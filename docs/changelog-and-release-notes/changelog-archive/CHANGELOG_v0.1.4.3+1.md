# Changelog v0.1.4.3+1

**Release Date:** 2026-05-26 12:17:16 UTC  
**Epic | Story | Task:** E1:S04:T03 (`--art`)  
**SemVer (task_touch):** v0.4.796+1  

## Summary

**FR-099 Phase 2 — book extraction genesis commit** on private `RMS-Ltd/hf-ai-dev-kit`: remove manuscript IP and Epic 24 from the public-bound tree; adopt **[ADR-006](../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)** Option C migration outline; mark **E1:S04:T02** superseded. Preserves full book history on `book/epic-24` branch and in git ancestry.

## Change implemented

### Removed (public genesis tree)

- **`docs/book-proj/`** — 8 manuscript / proposal files
- **`docs/project-management/kanban/epics/Epic-24/`** — full book epic, stories, and task docs

### Kanban / boards

- **`kboard.md`** — removed E24 task rows; Epic 24 note replaced with private-repo pointer
- **`_index.md`**, **`kanban-structure.md`** — Epic 24 section removed
- **`kanban-completed.md`** — E24 completion entries archived (pointer to private repo)
- **`KB-INDEX.md`** — Epic-24 index rows removed

### Public narrative (de-Head-First)

- **`ai-dev-kit-vision-and-purpose.md`** — book section replaced with public/private scope stub (v1.1.0)
- **`kanban-board-guide.md`** — tracks framework work only; ADR-006 cross-link
- **`repo-structure-for-adopters.md`** — book content not in public tree

### Governance (new / updated)

- **`ADR-006-book-project-private-repository-spin-off.md`** — preferred Option C migration (Phase 1 ✅ private rename)
- **`FR-099`**, **`E1:S04:T03`**, Story 004 — Phase progress; **E1:S04:T02** ⏭️ SUPERSEDED
- **`book/epic-24`** branch created at pre-extraction tip for ongoing private book work

## Out of scope (follow-on phases)

- Phase 3: new public `ai-dev-kit` repo from genesis
- Phase 4: bulk URL rewire (`earlution/` → `RMS-Ltd/`)
- Changelog archive historical book excerpts (policy TBD)

## Verification

- Tree has no `docs/book-proj/` or `Epic-24/` on default branch after commit
- `git branch book/epic-24` points at pre-extraction commit with full book tree
