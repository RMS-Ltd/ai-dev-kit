# Changelog v0.2.16.17+2

**Release Date:** 2026-05-30 22:30:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 17  
**SemVer:** v0.4.843+2

---

## Summary

E02:S16:T17 (FR-103) — Change implemented: collapse cold start to **one step** — read `AGENTS.md` only; routing table, binding rules, and open-work snapshot inline; manifest reserved for validators/sync.

---

## Changed

- `AGENTS.md` — single-step bootstrap; embedded task routing + open work; explicit “do not open manifest on cold start”
- `CLAUDE.md`, `.cursorrules` — align cold-start preamble with one-step `AGENTS.md`
- `docs/project-agent-index.md`, `ADR-012` — document AGENTS.md as authoritative routing; manifest as machine mirror
- `docs/project-agent-manifest.json` — `coordinationContract` → `AGENTS.md`; `agent-bootstrap` loadFirst simplified; `openWork` refreshed
- `docs/guides/agent-cold-start-checklist.md` — simulations no longer require manifest at cold start

---

## Notes

- When editing routing in `AGENTS.md`, update manifest `taskRouting[]` in the same change set.
