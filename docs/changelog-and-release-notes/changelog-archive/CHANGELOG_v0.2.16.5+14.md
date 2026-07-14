# Changelog — v0.2.16.5+14

**Release Date:** 2026-07-14 13:36:42 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 5  
**SemVer:** v0.4.1255  
**Task:** E02:S16:T05 — GitHub Actions CI health (Perpetual) — Wave 14

---

## Summary

**Change implemented:** Re-pin BR-090 Docusaurus CI contract tests and portal README to **3.10.2** after Dependabot bump; extend T05 charter to own post-Dependabot CI contract pin updates (no separate perpetual testing lane).

---

## Changed

- `tests/test_portal_br090_faster_alignment.py` — `DOCUSAURUS_VERSION` **3.10.2**
- `portal/README.md` — documented pin **3.10.2**
- `docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md` — Wave 14 + scope bullet for Dependabot pin chase

## Related

- [E02:S16:T05](docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) · [BR-090](docs/kanban/fbu/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) · [FR-112](docs/kanban/fbu/FR-112-perpetual-github-ci-and-security-health-lanes.md)
