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
**Last updated:** 2026-06-06 (v0.8.3.17+1 – Kanban documentation setup)
**Version:** v0.8.3.17+1
**Code:** E8S03

---

## Task Checklist
- [ ] **E08:S03:T01 – Create automation framework** - TODO
  - Task: [`T01-create-automation-framework`](story-03-automation-scripts/T01-create-automation-framework.md)

- [ ] **E08:S03:T02 – Build workflow automation scripts** - TODO
  - Task: [`T02-build-workflow-automation-scripts`](story-03-automation-scripts/T02-build-workflow-automation-scripts.md)

- [ ] **E08:S03:T03 – Establish automation patterns** - TODO
  - Task: [`T03-establish-automation-patterns`](story-03-automation-scripts/T03-establish-automation-patterns.md)


- [ ] **E08:S03:T04 – CI test workflow and pytest remediation (BR-058)** ✅ COMPLETE (v0.8.3.4+1) — [Task doc](story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) | [BR-058](../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md) | [IPP](../../../../implementation-cycles/IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)


- [x] **E08:S03:T05 – Python minimum version policy alignment (FR-104 / BR-077)** ✅ COMPLETE (v0.8.3.5+2) — [Task doc](story-03-automation-scripts/T05-python-minimum-version-fr104-br077.md) | [FR-104](../../fr-br/FR-104-python-minimum-version-policy-alignment.md) | [BR-077](../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)


- [x] **E08:S03:T06 – Dependabot and dependency security automation (FR-105)** ✅ COMPLETE (v0.8.3.6+2) — [Task doc](story-03-automation-scripts/T06-dependabot-enablement-fr105.md) | [FR-105](../../fr-br/FR-105-dependabot-dependency-security-automation.md)

- [x] **E08:S03:T07 – Tests CI `requests` dependency ([BR-092](../../fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md))** — ✅ COMPLETE (v0.8.3.7+1) — [Task doc](story-03-automation-scripts/T07-tests-ci-requests-dependency-br092.md) | [IPP](../../../../implementation-cycles/IPP-E08S03T07-tests-ci-requests-dependency-br092.md)

- [x] **E08:S03:T08 – CodeQL `git_tag_handler.py` syntax fix (BR-094)** — ✅ COMPLETE (v0.8.3.8+1) — [Task doc](story-03-automation-scripts/T08-codeql-git-tag-handler-syntax-br094.md) | [BR-094](../../fr-br/BR-094-codeql-git-tag-handler-syntax-error.md)

- [x] **E08:S03:T09 – CodeQL insecure temporary file — replace `mktemp` (BR-095)** — ✅ COMPLETE (v0.8.3.9+1) — [Task doc](story-03-automation-scripts/T09-codeql-insecure-temporary-file-mktemp-br095.md) | [BR-095](../../fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md)

- [x] **E08:S03:T10 – CodeQL incomplete URL substring sanitization (BR-096)** — ✅ COMPLETE (v0.8.3.10+1) — [Task doc](story-03-automation-scripts/T10-codeql-incomplete-url-substring-sanitization-br096.md) | [BR-096](../../fr-br/BR-096-codeql-incomplete-url-substring-sanitization.md)

- [x] **E08:S03:T11 – CodeQL missing workflow permissions (BR-098)** — ✅ COMPLETE (**v0.8.3.11+0** doc release; alerts #1–#3 fixed on `main`) — [Task doc](story-03-automation-scripts/T11-codeql-missing-workflow-permissions-br098.md) | [BR-098](../../fr-br/BR-098-codeql-missing-workflow-permissions.md)

- [ ] **E08:S03:T12 – Code Quality maintainability backlog (BR-099)** — 🔄 IN PROGRESS (**v0.8.3.12+7** wave-5 **~88** files; dashboard **Good+** pending) — [Task doc](story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md) | [BR-099](../../fr-br/BR-099-code-quality-maintainability-backlog.md) | [IPP](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)

- [x] **E08:S03:T13 – Code Quality reliability backlog (BR-100)** — ✅ COMPLETE (**v0.8.3.13+4** wave-3 **12** exit/quit fixed; **16** print → T12) — [Task doc](story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md) | [BR-100](../../fr-br/BR-100-code-quality-reliability-backlog.md) | [IPP](../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)

- [x] **E08:S03:T14 – Code Quality AI suggestions backlog (BR-101)** — ✅ COMPLETE (**v0.8.3.14+5** wave-2b/c; lag-accepted GH panel) — [Task doc](story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md) | [BR-101](../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md) | [IPP](../../../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)

- [ ] **E08:S03:T15 – GitHub Actions CI health (Perpetual)** — 🔄 PERPETUAL (**v0.8.3.15+3** — Wave 2: MDX-safe ADK markers; local Docusaurus green; pending Actions verify) — [Task doc](story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md) | [FR-112](../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [IPP](../../../../implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md)

- [ ] **E08:S03:T16 – GitHub Security & Code Quality health (Perpetual)** — 🔄 PERPETUAL **DEFERRED** (T13/T14 **COMPLETE**; resume after **T12** sign-off; baseline v0.8.3.16+1) — [Task doc](story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) | [FR-112](../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) | [IPP](../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)

- [x] **E08:S03:T17 – Local Code Quality Gate (CQG) (FR-113)** — ✅ COMPLETE (**v0.8.3.17+2**) — [Task doc](story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md) | [FR-113](../../fr-br/FR-113-local-code-quality-gate-cqg.md) | [IPP](../../../../implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md)

---

## Overview

Story 3 delivers repository automation and Code Quality burn-down. **T04–T11** closed discrete CodeQL/security items. **T12–T14** (BR-099/100/101) dashboard burn-down. **T17** (FR-113 local CQG) intake @ **v0.8.3.17+1**. **T12** wave-5 @ **v0.8.3.12+7** (active). **T15–T16** (FR-112) perpetual lanes; **T16** **DEFERRED** until **T12** operator sign-off.

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

- `docs/project-management/kanban/epics/epic-08/epic-08.md`
- `docs/project-management/kanban/epics/epic-08/story-01-code-generators.md`
- `docs/project-management/kanban/epics/epic-08/story-02-additional-validators.md`

