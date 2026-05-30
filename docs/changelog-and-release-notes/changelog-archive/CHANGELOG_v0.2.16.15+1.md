# Changelog v0.2.16.15+1

**Release Date:** 2026-05-30 20:30:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 15  
**SemVer:** v0.4.835+1

---

## Summary

E02:S16:T15 (UXR-015) — Change implemented: workflow initiation cheatsheet under `docs/guides/`, IPP-E02S16T15, and discoverability links from guides README, CLAUDE.md, and AGENTS.md.

---

## Added

- `docs/guides/workflow-initiation-cheatsheet.md` — human quick-reference for RW, UKW, IPW/ICW, CMW, PVW triggers, flags, sequences, and blocked-session recovery
- `docs/implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md` — IPW planning package

---

## Changed

- `docs/guides/README.md` — Key Documents link to cheatsheet
- `CLAUDE.md`, `AGENTS.md` — maintainer pointer to cheatsheet
- Task T15, UXR-015 — implementation wiring and acceptance criteria satisfied

---

## Notes

- `UKW -ad` (Address Drift) documented as **planned** only; not implemented in this release
- Agent behavior SoT remains `.cursorrules` and `.claude/commands/*.md`
