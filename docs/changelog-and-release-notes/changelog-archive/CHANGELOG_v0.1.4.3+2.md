# Changelog v0.1.4.3+2

**Release Date:** 2026-05-26 15:28:31 UTC  
**Epic | Story | Task:** E1:S04:T03 (`--art`)  
**SemVer (task_touch):** v0.4.810+2  

## Summary

**FR-099 kanban re-anchor** (`--art`): adopt **E1:S04:T03** as version anchor; restore active **FR-099** / **E1:S04:T03** visibility on `fbuboard.md` and `kboard.md` for **Phases 3–4** (public `ai-dev-kit` rebirth + rewire). Phase 2 genesis remains at **v0.1.4.3+1**; links **IPP Wave E** (E6:S09:T06) as ECC validation gate after Phase 3.

## Change implemented

### Kanban / governance

- **`kboard.md`** — **E1:S04:T03** restored (Should Have, HIGH; Phases 3–4 pending)
- **`fbuboard.md`** — **FR-099** restored (IN PROGRESS; Phase 1–2 ✅; Phases 3–4 pending)
- **Story 004** — T03 checklist aligned to **IN PROGRESS** (not COMPLETE until Phases 3–4 finish)
- **T03**, **FR-099**, **Epic-1** — version markers and Phase 3–4 status sync
- **Cross-link:** [IPP-E6S09T06 §8 Wave E](../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md) — public-repo ECC test after FR-099 Phase 3

### Version

- **`version.py`** — `0.1.4.3+2` (`--art` from `0.6.9.6+5`)

## Out of scope

- Phase 3 public repo creation (requires IPW + explicit execution)
- Phase 4 bulk URL rewire

## Verification

- `docs/book-proj/` and `Epic-24/` remain absent on `dev` (Phase 2 genesis unchanged)
- FR-099 active on FBU board; E1:S04:T03 active on task board
