---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T14:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 003 – Automation Scripts

**Status:** IN PROGRESS
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-05  
**Last updated:** 2026-06-24 (v0.8.3.24+4 – RW follow-on version re-anchor)
**Version:** v0.8.3.24+4
**Code:** E8S03

---

## Task Checklist
- [ ] **E08:S03:T01 – Create automation framework** - TODO
  - Task: [`T01-create-automation-framework`](story-03-automation-scripts/T01-create-automation-framework.md)


- [ ] **E08:S03:T02 – Build workflow automation scripts** - TODO
  - Task: [`T02-build-workflow-automation-scripts`](story-03-automation-scripts/T02-build-workflow-automation-scripts.md)


- [ ] **E08:S03:T03 – Establish automation patterns** - TODO
  - Task: [`T03-establish-automation-patterns`](story-03-automation-scripts/T03-establish-automation-patterns.md)



- [ ] **E08:S03:T04 – CI test workflow and pytest remediation (BR-058)** ✅ COMPLETE (v0.8.3.4+1) — [Task doc](story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) | [BR-058](../../fbu/BR-058-ci-test-workflow-missing-and-pytest-failures.md) | [IPP](../../../implementation-cycles/IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)



- [x] **E08:S03:T05 – Python minimum version policy alignment (FR-104 / BR-077)** ✅ COMPLETE (v0.8.3.5+2) — [Task doc](story-03-automation-scripts/T05-python-minimum-version-fr104-br077.md) | [FR-104](../../fbu/FR-104-python-minimum-version-policy-alignment.md) | [BR-077](../../fbu/BR-077-documented-python-38-contradicts-repo-310-requirement.md)



- [x] **E08:S03:T06 – Dependabot and dependency security automation (FR-105)** ✅ COMPLETE (v0.8.3.6+2) — [Task doc](story-03-automation-scripts/T06-dependabot-enablement-fr105.md) | [FR-105](../../fbu/FR-105-dependabot-dependency-security-automation.md)


- [x] **E08:S03:T07 – Tests CI `requests` dependency ([BR-092](../../fbu/BR-092-tests-ci-missing-requests-dev-dependency.md))** — ✅ COMPLETE (v0.8.3.7+1) — [Task doc](story-03-automation-scripts/T07-tests-ci-requests-dependency-br092.md) | [IPP](../../../implementation-cycles/IPP-E08S03T07-tests-ci-requests-dependency-br092.md)


- [x] **E08:S03:T08 – CodeQL `git_tag_handler.py` syntax fix (BR-094)** — ✅ COMPLETE (v0.8.3.8+1) — [Task doc](story-03-automation-scripts/T08-codeql-git-tag-handler-syntax-br094.md) | [BR-094](../../fbu/BR-094-codeql-git-tag-handler-syntax-error.md)


- [x] **E08:S03:T09 – CodeQL insecure temporary file — replace `mktemp` (BR-095)** — ✅ COMPLETE (v0.8.3.9+1) — [Task doc](story-03-automation-scripts/T09-codeql-insecure-temporary-file-mktemp-br095.md) | [BR-095](../../fbu/BR-095-codeql-insecure-temporary-file-mktemp.md)


- [x] **E08:S03:T10 – CodeQL incomplete URL substring sanitization (BR-096)** — ✅ COMPLETE (v0.8.3.10+1) — [Task doc](story-03-automation-scripts/T10-codeql-incomplete-url-substring-sanitization-br096.md) | [BR-096](../../fbu/BR-096-codeql-incomplete-url-substring-sanitization.md)


- [x] **E08:S03:T11 – CodeQL missing workflow permissions (BR-098)** — ✅ COMPLETE (**v0.8.3.11+0** doc release; alerts #1–#3 fixed on `main`) — [Task doc](story-03-automation-scripts/T11-codeql-missing-workflow-permissions-br098.md) | [BR-098](../../fbu/BR-098-codeql-missing-workflow-permissions.md)


- [x] **E08:S03:T12 – Code Quality maintainability backlog (BR-099)** — ✅ COMPLETE (**v0.8.3.12+13** re-close — dashboard **Good** @ +11; local CQG @ +12; handoff **T16**) — [Task doc](story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md) | [BR-099](../../fbu/BR-099-code-quality-maintainability-backlog.md) | [IPP](../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)


- [x] **E08:S03:T13 – Code Quality reliability backlog (BR-100)** — ✅ COMPLETE (**v0.8.3.13+4** wave-3 **12** exit/quit fixed; **16** print → T12) — [Task doc](story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md) | [BR-100](../../fbu/BR-100-code-quality-reliability-backlog.md) | [IPP](../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)


- [x] **E08:S03:T14 – Code Quality AI suggestions backlog (BR-101)** — ✅ COMPLETE (**v0.8.3.14+5** wave-2b/c; lag-accepted GH panel) — [Task doc](story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md) | [BR-101](../../fbu/BR-101-code-quality-ai-suggestions-backlog.md) | [IPP](../../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)


- [~] **E08:S03:T15 – GitHub Actions CI health (Perpetual)** — SUPERSEDED → **E02:S16:T05** — [Stub](story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)

- [~] **E08:S03:T16 – GitHub Security & Code Quality health (Perpetual)** — SUPERSEDED → **E02:S16:T06** — [Stub](story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md)

- [x] **E08:S03:T17 – Local Code Quality Gate (CQG) (FR-113)** — ✅ COMPLETE (**v0.8.3.17+2**) — [Task doc](story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md) | [FR-113](../../fbu/FR-113-local-code-quality-gate-cqg.md) | [IPP](../../../implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md)

- [x] **E08:S03:T18 – CQG gate relocation to IDW Phase 6b (ADR-022)** — ✅ COMPLETE (re-housed from E02:S16:T23) — [Task doc](story-03-automation-scripts/T18-cqg-gate-relocation-to-idw-phase-6b-adr022.md) | [ADR-022](../../../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)

- [x] **E08:S03:T19 – Workflow-scripts pytest tuple-return false-green (BR-103)** — ✅ COMPLETE (**v0.8.3.19+1**) — [Task doc](story-03-automation-scripts/T19-workflow-scripts-pytest-tuple-return-false-green-br103.md) | [BR-103](../../fbu/BR-103-workflow-scripts-pytest-tuple-return-false-green.md) | [IPP](../../../implementation-cycles/IPP-E08S03T19-workflow-scripts-pytest-tuple-return-br103.md)


- [x] **E08:S03:T20 – README Python prerequisites alignment (UXR-026)** — ✅ COMPLETE (v0.8.3.20+1) — [Task doc](story-03-automation-scripts/T20-readme-python-prerequisites-uxr026.md) | [UXR-026](../../fbu/UXR-026-readme-python-prerequisites-contradicts-311-policy.md) | [IPP](../../../implementation-cycles/IPP-E08S03T20-readme-python-prerequisites-uxr026.md)


- [x] **E08:S03:T21 – CLI pytest coverage dedicated target (UXR-030)** — ✅ COMPLETE (v0.8.3.21+1) — [Task doc](story-03-automation-scripts/T21-cli-pytest-coverage-dedicated-target-uxr030.md) | [UXR-030](../../fbu/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)


- [x] **E08:S03:T22 – Pytest warning cleanup (UXR-030 Wave 2)** — ✅ COMPLETE (v0.8.3.22+2) — [Task doc](story-03-automation-scripts/T22-pytest-warning-cleanup-uxr030-wave2.md) | [UXR-030](../../fbu/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) | [IPP](../../../implementation-cycles/IPP-E08S03T22-pytest-warning-cleanup-uxr030-wave2.md)


- [x] **E08:S03:T23 – Greenfield sync autofix CI hardening (BR-109; BR-110 forensic closure @ v0.8.3.23+3)** ✅ COMPLETE — [Task doc](story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md) | [BR-109](../../fbu/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md) | [BR-110](../../fbu/BR-110-rw-k-dpz-rejection-doc-init-build-zero-guard-mismatch.md) | [IPP](../../../implementation-cycles/IPP-E08S03T23-greenfield-sync-autofix-ci-hardening-br109.md)


- [x] **E08:S03:T24 – CLI package test coverage gap closure (FR-138)** — ✅ COMPLETE @ **v0.8.3.24+4** (Phase 1 **74.73%** + Phase 2 **82%**) — [Task doc](story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md) | [FR-138](../../fbu/FR-138-cli-package-test-coverage-gap-closure.md) | [—IPP—](../../../implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md)

---

## Overview

Story 3 delivers repository automation and Code Quality burn-down. **T12–T14** finite burn-down **COMPLETE**. **T17** (CQG) **COMPLETE** @ **v0.8.3.17+2**. **T18** CQG→IDW relocation **COMPLETE**. Perpetual CI/security lanes moved to **E02:S16:T05/T06** (IPP-E02S16T24).

---

## Goal

Implement comprehensive automation for common tasks.

---

## Dependencies

**Blocks:**
- None

**Blocked By:**
- None

**Coordinates With:**
- Epic 5 (Documentation Management)
- Epic 6 (Framework Management)

---

## References

- `docs/kanban/epics/epic-08/epic-08.md`
- `docs/kanban/epics/epic-08/story-01-code-generators.md`
- `docs/kanban/epics/epic-08/story-02-additional-validators.md`

