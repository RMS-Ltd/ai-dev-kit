# Changelog v0.5.9.13+2

**Release Date:** 2026-06-05 23:30:00 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 13  
**SemVer:** v0.4.909+2  
**Summary:** BR-090 Wave 2 — Docusaurus production build closure via BR-068 Strategy A link remediation

---

## Summary

Wave 2 of **E05:S09:T13** closes the residual **BR-090** build failure class after Wave 1 (`v0.5.9.13+1`) shipped `@docusaurus/faster@3.10.1`. Full build triage identified out-of-`docs/` relative links, stale anchors, and path-depth errors. Corpus repairs use **BR-068 Strategy A** (GitHub `blob/main/` URLs) while preserving strict `onBrokenLinks` / `onBrokenMarkdownLinks` / `onBrokenAnchors: 'throw'`.

---

## Attempted Fixes

### BR-090 — Docusaurus build (MDX / link class)

- **Wave 1:** `@docusaurus/faster@3.10.1` + aligned pins (resolved `ERR_MODULE_NOT_FOUND`).
- **Wave 2:** Full publish-corpus link triage; Strategy A repairs for `.claude/`, `.cursor/`, `packages/`, `scripts/`, `src/`, `tests/` targets; in-corpus path fixes; anchor hygiene for workflow-flaws and kanban task headings.
- **Local verification:** `cd portal && npm run build` exit **0**; `PORTAL_BUILD_STRICT=1 pytest tests/test_portal_br090_faster_alignment.py` — T1–T11 green.
- **Post-merge CI:** Pending maintainer confirmation on `main` (Docusaurus site build + deploy).

---

## Changed

- `docs/guides/workflow-initiation-cheatsheet.md` — primary Strategy A repairs
- `docs/**/*.md` — broad corpus link remediation (publish scope)
- `docs/maintenance/docusaurus-corpus-triage-fr-067.md` — Wave 2 failure-class row
- `docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md` — §8 Wave 2
- `tests/test_portal_br090_faster_alignment.py` — T8–T11 contract tests
- Kanban: T13 task doc, story checklist, BR-090, `kboard.md` V-band

---

## Unchanged

- `portal/docusaurus.config.js` — `future.v4: true`; strict throw modes preserved
- `portal/package.json` — `@docusaurus/faster@3.10.1` pins from Wave 1

---

## References

- [IPP-E05S09T13 §8](../../implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md)
- [BR-090](../../project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)
- [docusaurus-corpus-triage-fr-067.md](../../maintenance/docusaurus-corpus-triage-fr-067.md)
