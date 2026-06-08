# Changelog v0.2.16.24+1

**Release Date:** 2026-06-08 14:30:00 UTC
**Epic:** 2 | **Story:** 16 | **Task:** 24 | **Build:** 1
**SemVer:** v0.4.11+1

---

## Summary

E02:S16:T24 — **Change implemented:** S16 perpetual-only consolidation via semantic scatter (IPP-E02S16T24). Perpetual lanes renumbered T01–T06; finite tasks evacuated to E02:S01/S03/S15, E04:S14, E08:S03; stray perpetuals absorbed from E07/E08; kboard O-band unified under E02:S16.

---

## Changes

### Kanban / governance

- Story 016 checklist is perpetual-only (T01–T06) plus completed meta task T24.
- Redirect stubs with `Historical Anchor` at all superseded task paths.
- FR-112, FR-058, FR-043 implementing-task links updated.
- `AGENTS.md` / `project-agent-manifest.json` open-work → E02:S16:T06.

### Tooling

- Added `apply_s16_perpetual_consolidation.py` migration script (reproducible scatter).

### Documentation

- Created `IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md`.
- Destination story checklists updated (S01, S03, S14, S15, S08).

---

## References

- [IPP-E02S16T24](../../implementation-cycles/IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md)
- [T24 task doc](../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T24-s16-perpetual-only-consolidation-semantic-scatter.md)
