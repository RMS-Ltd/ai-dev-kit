# Changelog — v0.2.16.5+12

**Release Date:** 2026-06-17 16:30:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 5 (perpetual)  
**SemVer:** v0.4.1200+12  
**Task:** E02:S16:T05 — Docusaurus CI parity: adk-feedback mirror links + MDX placeholder (BR-068)

---

## Summary

**Change implemented:** Fixed strict Docusaurus production build failures surfaced by `validate_actions_ci_parity` after push — broken relative links in `docs/adk-feedback/attempt-{09,10,11}/README.md` (cross-corpus / repo-root targets) and MDX JSX parse error from bare `<path>` in install-profile remediation text.

---

## Changed

- `docs/adk-feedback/attempt-09/README.md` — GitHub blob/tree URLs for knowledge + `adk-install-into-sbl` artifacts (BR-068)
- `docs/adk-feedback/attempt-10/README.md` — GitHub blob/tree URLs for attempt-10 package paths
- `docs/adk-feedback/attempt-11/README.md` — GitHub blob/tree URLs for attempt-11 + kanban-reference pack
- `docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md` — ADK-I01.S06 remediation: `{path}` placeholder (MDX-safe)

## Verification

- `portal/npm run build` — SUCCESS
- `validate_actions_ci_parity.py --strict` — portal-publish-scope PASS (9/9)

## Related

- [BR-068](docs/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md) · [FR-112](docs/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) · [E02:S16:T05](docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md)
