# Changelog v0.2.16.6+18

**Release Date:** 2026-06-16 15:16:56 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1192+18

---

## Summary

E02:S16:T06 Wave 10 — AI autofix moratorium: document circular churn from PRs #58–#82; freeze hot files; reconcile canonical `portal/scripts/patch-gray-matter-js-yaml.cjs` on `dev`.

---

## Change implemented

### Governance / perpetual hygiene

- Added **Wave 10 — AI autofix moratorium** to [T06 task doc](../../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md): operator policy to stop merging `ai-findings-autofix/*` PRs to `main`; lag-accept stale AI panel rows per BR-101.
- **AC23** — moratorium documented; canonical hot-file policy recorded.

### Code

- [`portal/scripts/patch-gray-matter-js-yaml.cjs`](../../../portal/scripts/patch-gray-matter-js-yaml.cjs) — canonical Wave 8b + Wave 10: `replaceAll`, `FAILSAFE_SCHEMA`, try/catch on write (ends schema/style ping-pong from autofix PRs #59–#81).

### Verification (local)

| Check | Result |
| ----- | ------ |
| `pytest tests/release_state/test_allocate.py` | **9 passed** |
| `npm run build` (portal) | **SUCCESS** |

**Context:** [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) re-scan loop on recently merged autofix PRs produced non-converging suggestions on two files; Wave 10 freezes canonical implementations and routes future real fixes through `dev` + RW.

---

## References

- [FR-112 — Perpetual GitHub CI and security health lanes](../../../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [BR-101 — AI suggestions backlog](../../../kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
