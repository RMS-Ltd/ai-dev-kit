---
version: 0.24.1.6+1
semver: 0.4.778+1
date: 2026-05-15
epic: 24
story: 1
task: 6
build: 1
type: docs-only
art: true
---

# CHANGELOG v0.24.1.6+1 — Ad-hoc Book Content Development (Perpetual)

**Release Date:** 2026-05-15  
**Epic:** E24 (Book Project)  
**Story:** S01 (Book Content Development)  
**Task:** T06 (Ad-hoc Book Content Development — Perpetual)  
**Build:** 1  
**Type:** Docs-only (`RW -d`)  
**Adopt Requested Task:** `--art` (adopted E24:S01:T06 as canonical anchor)

---

## Summary

Ad-hoc book content development: created perpetual catch-all task for committing book content when no dedicated task exists. Revised Chapter 0 draft (ExpensesTracker naming, commercial framing). Added book proposal and literary agent research documents.

---

## Changes

### Book Content

- **docs/book-proj/chapter-0-draft.md**
  - Renamed all instances of `ExpenseTracker` → `ExpensesTracker` (throughout)
  - Added commercial framing paragraph in "Why ExpensesTracker for this book?" section: emphasises that readers likely have a project idea they want to build commercially, and a working expenses-tracking app is directly useful / shippable / sellable

- **docs/book-proj/book-proposal.md** (NEW)
  - Complete submission-ready book proposal for *Head First AI Dev Kit: The Vibe-Coder's Complete Guide*
  - 13 sections: Big Idea, Market Timing, Audience, Competition, Head First Angle, TOC, Author Platform, Marketing, Production, Sample Chapter, Reader Outcomes, Series Potential, Pitch Section
  - Includes one-sentence pitch: "This is the first complete methodology book for developers who build with AI assistance — not about the tools, but about the discipline that makes those tools useful at project scale."

- **docs/book-proj/literary-agent-info.md** (NEW)
  - Research compilation on literary agents for technical books
  - Agencies: Stuart Agency, DeFiore and Company, JABberwocky, Fletcher & Company
  - Methods for finding agents (acknowledgments, QueryTracker, Publishers Marketplace)
  - Questions to ask before signing
  - Direct submission fallback route for O'Reilly
  - 14-week timeline recommendation

### Kanban / Task Infrastructure

- **docs/project-management/kanban/epics/Epic-24/Story-001-book-content-development/T06-ad-hoc-book-content-development-perpetual.md** (NEW)
  - Perpetual catch-all task for ad-hoc book content commits
  - Scoped to `docs/book-proj/` and publishing materials
  - Added to Story 001 checklist and `kboard.md` Ongoing section

- **docs/project-management/kanban/epics/Epic-24/Story-001-book-content-development.md**
  - Added T06 to task checklist

- **docs/project-management/kanban/kboard.md**
  - Added E24:S01:T06 to "Ongoing (O) — Perpetual Tasks" section

### Version

- **src/fynd_deals/version.py**
  - Bumped: `0.24.1.5+1` → `0.24.1.6+1`
  - Adopted T06 as canonical anchor via `--art`

---

## Acceptance Criteria

- [x] Chapter 0 draft updated with ExpensesTracker naming and commercial framing
- [x] Book proposal document created and complete
- [x] Literary agent research document created and complete
- [x] Perpetual task T06 created, validated, and added to kanban
- [x] Version bumped to 0.24.1.6+1

---

## Notes

- This is a docs-only release (`RW -d`). No functional code changes.
- `--art` flag used to adopt T06 as the release anchor (version.py was previously on T05).
