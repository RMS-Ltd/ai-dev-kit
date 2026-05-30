# Changelog v0.2.16.17+1

**Release Date:** 2026-05-30 21:45:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 17  
**SemVer:** v0.4.842+1

---

## Summary

E02:S16:T17 (FR-103) — Change implemented: three-layer agent bootstrap (slim `AGENTS.md`, `project-agent-manifest.json`, human index, ADR-012) with cold-start checklist and IDE pointers.

---

## Added

- [ADR-012](../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) — agent bootstrap and task routing (Accepted)
- `docs/project-agent-manifest.json`, `docs/project-agent-manifest.schema.json`, `docs/project-agent-index.md`
- `docs/guides/agent-cold-start-checklist.md` — three simulations (≤5 files each)
- `docs/implementation-cycles/IPP-E02S16T17-agent-bootstrap-and-task-routing-fr103.md` — IPW package
- `scripts/validate-project-agent-manifest-paths.py` — manifest path existence check

---

## Changed

- `AGENTS.md` — Layer 1 bootstrap intro (≤150 lines); IPW gate summary retained
- `docs/project-management/kanban/AGENTS.md` — RW agent role detail + bootstrap back-link
- `CLAUDE.md`, `.cursorrules` — cold-start preamble (ADR-012)
- `docs/governance/README.md` — ADR-012 index entry
- Root `ADR-agent-bootstrap-and-task-routing.md` — stub redirect to ADR-012
- Task T17, FR-103 — COMPLETE wiring and acceptance criteria

---

## Notes

- `.cursorrules` remains workflow execution SoT; v1 uses behavioral lazy-load contract, not file split
- Manifest `openWork[]` / `canon[]` manually curated; generator deferred
