---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 12: Code Quality maintainability backlog (**BR-099**)

**Task ID:** E08:S03:T12  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.12+0 — kanban init RW -k)  
**Version Anchor:** v0.8.3.12+0  
**Version:** v0.8.3.12+0  
**Code:** E08S03T12

**Scope:** Phased burn-down of **560** open GitHub Code Quality **maintainability** findings on `main`; wave 1 = unused imports/variables, import hygiene, unnecessary pass/lambda.

**Upstream:** [BR-099 — Code Quality maintainability backlog](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [BR-100 — Reliability backlog](T13-code-quality-reliability-backlog-br100.md) (coordinate sequencing: reliability first if overlapping hotspots)
- [E08:S03:T11 — Code scanning permissions (BR-098)](T11-codeql-missing-workflow-permissions-br098.md)

---

## Deliverable

1. Baseline manifest: open maintainability counts by CodeQL rule @ `main` SHA.
2. Wave 1 remediation PR(s): autofix-safe hygiene (see BR-099 wave table).
3. Post-wave dashboard snapshot: Maintainability score + open count delta.

---

## Acceptance Criteria

- [ ] Baseline manifest captured in this task doc (rule → count).
- [ ] Wave-1 rule groups remediated or waived with documented rationale.
- [ ] Open maintainability count reduced ≥50% vs baseline.
- [ ] Maintainability score **Good** or better (or lag documented).
- [ ] CI (`pytest`, workflow-scripts-pytest, tests) green.
- [ ] **BR-099** released via **RW E08:S03:T12** when complete.

---

## References

- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
