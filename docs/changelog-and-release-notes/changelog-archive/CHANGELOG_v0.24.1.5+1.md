# Changelog — v0.24.1.5+1

**Internal version:** 0.24.1.5+1
**SemVer:** 0.4.778+1
**Released:** 2026-05-14 00:00:00 UTC
**Branch:** dev
**Epic:** E24 — Book Project
**Story:** S01 — Book Content Development
**Task:** T05 — Draft Chapter 1: This Isn't Working
**RW variant:** RW -k (kanban-init)
**Flags:** --art

---

## Summary

Kanban-init release anchoring E24:S01:T05. Raises the content development task for *Head First AI Dev Kit: The Vibe-Coder's Complete Guide*, establishes the task document for Chapter 1 drafting, and updates the S01 story file to reflect the revised book title, format, and scope.

---

## Changes

### Book Project (E24)

- **New:** `docs/project-management/kanban/epics/Epic-24/Story-001-book-content-development/T05-draft-chapter-1-this-isnt-working.md` — standalone task document for E24:S01:T05 with full input/deliverable/AC/approach spec
- **New:** `docs/project-management/kanban/epics/Epic-24/Story-001-book-content-development/` — task directory created for S01 following E24:S05 pattern
- **Updated:** `docs/project-management/kanban/epics/Epic-24/Story-001-book-content-development.md` — story file updated: title, overview, goal, task checklist, and references reframed for *Head First AI Dev Kit: The Vibe-Coder's Complete Guide*; T05 added to checklist

### Chapter Structure & Drafts (produced in planning session, released here)

- **Updated:** `docs/book-proj/chapter-structure-proposal.md` — fully revised from "Vibe Coding For Dummies" to Head First AI Dev Kit format; new 15-chapter + Ch 0 arc; ExpenseTracker replaces VibeDex; parallel track convention documented; Part of Tens replaced by three appendices; per-chapter Head First exercise types assigned
- **New:** `docs/book-proj/chapter-0-draft.md` — full Chapter 0 draft ("Before We Start — Your Project") in Head First style; includes visual opener, Sharpen Your Pencil project worksheet, five Q&A sidebars, Meet ExpenseTracker, parallel track convention, Brain Power exercise, pre-flight checklist, Bullet Points summary

### Memory

- **New:** `memory/project_e24_book_decisions.md` — key E24 book decisions recorded: title, format, tutorial project, audience, parallel track, Chapter 0
- **Updated:** `memory/MEMORY.md` — index entry added for E24 book decisions

---

## Key Decisions Captured

- **Title:** Head First AI Dev Kit: The Vibe-Coder's Complete Guide
- **Format:** Head First (O'Reilly) — For Dummies conventions retired
- **Tutorial project:** ExpenseTracker (UK HMRC-compatible freelancer expense tracker)
- **Primary audience:** BYOP vibe coders; project-less readers onboarded via Chapter 0
- **Structure:** Chapter 0 + 15 chapters + 3 appendices

---

## Version Bump

| Field | Before | After |
|---|---|---|
| Internal | 0.4.19.4+5 | 0.24.1.5+1 |
| SemVer | — | 0.4.778+1 |
| Anchor | E4:S19:T04 | E24:S01:T05 (--art) |
