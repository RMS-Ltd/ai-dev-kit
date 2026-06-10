---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T28 — v3.2 fresh install sign-off story padding (BR-105 / F18)

**Task ID:** E06:S09:T28  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10 (v0.6.9.28+1 – Kanban documentation setup)  
**Version:** v0.6.9.28+1  
**Version Anchor:** v0.6.9.28+1  
**Code:** E06S09T28  

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md)  
**Upstream:** [BR-105](../../../fr-br/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md) · triage **F18**

---

## Input

- [BR-105](../../../fr-br/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md)
- SBL attempt 05 FB: `starborn_legacy/logs/ai-dev-kit/install/attempt-05/feedback-package/SUBMISSION.md`
- Sign-off transcript: `…/attempt-05/transcripts/20260610T183541Z-phase4-signoff.txt`
- [BR-086](../../../fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) (prior fix — book replay)

---

## Scope

Resolve BR-086 sign-off **NOT READY** on v3.2 fresh installs when `rw-config.yaml` uses `{story:02d}` / `T{task:02d}` (UXR-014) vs contract expecting `{story:03d}` / `t{task`.

**Deliverable:** Contract and/or installer alignment + tests; INSTALL note if policy choice is documented-only.

---

## Acceptance criteria

- [ ] SBL-style v3.2 fresh install replay → BR-086 READY (or superseded rule documented).
- [ ] Book ExpensesTracker #17 regression path still passes.
- [ ] Triage matrix F18 marked resolved with evidence path.
