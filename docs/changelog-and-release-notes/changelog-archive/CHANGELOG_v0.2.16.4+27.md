# Changelog — v0.2.16.4+27

**Release Date:** 2026-06-04 23:30:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 4  
**SemVer:** v0.4.881+27  
**Summary:** UKW — restore Could Have backlog; FR-109 lean policy correction

---

## Summary

Change implemented: **E02:S16:T04** (perpetual UKW) — corrected over-aggressive lean-board prune by restoring **39** `kboard.md` and **31** `fbuboard.md` Could Have rows (live `TODO`/`OPEN` only) from `9b4765f`, while keeping journal lines, archive footnotes, and terminal rows removed. Clarified FR-109 / BR-059: prune bloat and terminal status, not filed C-band queue.

---

## Changed

- **kboard.md** / **fbuboard.md** — C-band backlog restored (~127 / ~124 lines); contract headers updated
- **FR-109**, kanban governance, `.cursorrules`, `ukw.md`, `ukw-sync` — C-band vs BR-059 distinction
- Corpus-canonical sweep idempotent after restore

---

## RW Step 7 — four-surface reconciliation

| Surface | Action |
| ------- | ------ |
| Task **E02:S16:T04** | Version **v0.2.16.4+27**; perpetual IN PROGRESS |
| **FR-109** | Problem statement notes C-band restoration |
| `kboard.md` / `fbuboard.md` | MoSCOW metadata **v0.2.16.4+27**; C-band live backlog |
