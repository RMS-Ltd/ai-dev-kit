# Changelog — v0.2.16.13+1

**Release Date:** 2026-06-03 12:00:58 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 13  
**SemVer:** v0.4.845+1  
**Summary:** BR-059 — UKW Step 6 Part B.1 story checklist MoSCOW enumeration + advisory validator

---

## Summary

Change implemented: **E02:S16:T13** for **BR-059** — UKW agents must enumerate all open story-checklist tasks onto `kboard.md` MoSCOW (or **Won't Have** with deferral) before classification; Step 9 fail-loud gap summary; advisory `validate_story_moscow_coverage.py` with pytest (5 tests); dry-run evidence on **E10:S01**.

---

## Added

- [`IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md`](../../implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md)
- `validate_story_moscow_coverage.py` and `test_validate_story_moscow_coverage.py`

---

## Changed

- `.cursorrules`, `cursorrules-ukw-trigger-section.md`, `update-kanban-workflow-agent-execution.md`, `ukw/AGENTS.md` — Step 6 Part B.1 (BR-059)
- **BR-059** Resolution; **T13**, **Story-016**, **T109** traceability, **T04** perpetual cross-reference
- `workflow-initiation-cheatsheet.md` — UKW comprehensive note for Part B.1

---

## Notes

- **BR-059** remains **OPEN** (process fixed; historical board corpus not re-audited).
- Supersedes implementing anchor **E06:S07:T109** (forensic only).
