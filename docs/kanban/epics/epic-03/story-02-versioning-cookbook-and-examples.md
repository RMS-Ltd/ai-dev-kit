---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Story 002 – Versioning Cookbook & Examples

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-03  
**Last updated:** 2026-06-09 (v0.3.2.14+2 — **T14** allocator repair)
**Version:** v0.3.2.14+2
**Code:** E3S02

---

## Task Checklist

- [x] **E03:S02:T01 – Define core versioning scenarios for the cookbook** ✅ COMPLETE (v0.3.2.1+1)
  - Task: [`T01-core-versioning-scenarios`](story-02-versioning-cookbook-and-examples/T01-core-versioning-scenarios.md)
- [x] **E03:S02:T02 – Create versioning cookbook document with worked examples** ✅ COMPLETE (v0.3.2.2+1)
  - Task: [`T02-create-versioning-cookbook-document-with-worked-examples`](story-02-versioning-cookbook-and-examples/T02-create-versioning-cookbook-document-with-worked-examples.md)
- [x] **E03:S02:T03 – Add cross-framework examples (Kanban + Versioning + RW)** ✅ COMPLETE (v0.3.2.3+1)
  - Task: [`T03-add-cross-framework-examples-kanban-versioning-rw`](story-02-versioning-cookbook-and-examples/T03-add-cross-framework-examples-kanban-versioning-rw.md)
- [x] **E03:S02:T04 – Document edge cases and anti-patterns** ✅ COMPLETE (v0.3.2.4+1)
  - Task: [`T04-document-edge-cases-and-anti-patterns-complete`](story-02-versioning-cookbook-and-examples/T04-document-edge-cases-and-anti-patterns-complete.md)
- [x] **E03:S02:T05 – Create quick reference summary for users and agents** ✅ COMPLETE (v0.3.2.5+1)
  - Task: [`T05-create-quick-reference-summary-for-users-and-agents`](story-02-versioning-cookbook-and-examples/T05-create-quick-reference-summary-for-users-and-agents.md)
- [x] **E03:S02:T06 – Investigate and harden changelog ordering process** 🔄 PERPETUAL (v0.3.2.6+1)
  - Task: [`T06-investigate-and-harden-changelog-ordering-process`](story-02-versioning-cookbook-and-examples/T06-investigate-and-harden-changelog-ordering-process.md)
- [x] **E03:S02:T07 – Create dual-versioning guide for package manager compatibility** ✅ COMPLETE (v0.3.2.7+1)
  - Task: [`T07-create-dual-versioning-guide-for-package-manager-compatibili`](story-02-versioning-cookbook-and-examples/T07-create-dual-versioning-guide-for-package-manager-compatibili.md)
- [x] **E03:S02:T08 – Audit dual-versioning application across packages and propose strategy** ✅ COMPLETE (v0.3.2.8+1)
  - Task: [`T08-package-versioning-agentic-approach`](story-02-versioning-cookbook-and-examples/T08-package-versioning-agentic-approach.md)
- [x] **E03:S02:T09 – Implement Package Version Workflow (PVW) with agentic execution** ✅ COMPLETE (v0.3.2.9+1)
  - Task: [`T09-implement-package-version-workflow-pvw-with-agentic-executio`](story-02-versioning-cookbook-and-examples/T09-implement-package-version-workflow-pvw-with-agentic-executio.md)
- [ ] **E03:S02:T10 – Integrate PVW into Release Workflow agent execution guide** - TODO
  - Task: [`T10-integrate-pvw-into-release-workflow-agent-execution-guide`](story-02-versioning-cookbook-and-examples/T10-integrate-pvw-into-release-workflow-agent-execution-guide.md)
- [x] **E03:S02:T11 – Implement SemVer Mapping for Release Workflow** ✅ COMPLETE (v0.3.2.11+4 – GitHub release creation with SemVer)
  - Task: [`T11-implement-semver-mapping-for-rw`](story-02-versioning-cookbook-and-examples/T11-implement-semver-mapping-for-rw.md)
- [x] **E03:S02:T12 – Implement ADR-002 Task-Touch SemVer Mapping Mode** - ✅ COMPLETE (**v0.3.2.12+5** — wave 3 verification + FR-045/046/BR-061 closure) - [Task Doc](story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md)

- [x] **E03:S02:T13 – SemVer registry structured store — shared release metadata (FR-116)** - ✅ COMPLETE (**v0.2.1.25+1** — async ingest read model; umbrella with T25) — [Task doc](story-02-versioning-cookbook-and-examples/T13-semver-registry-structured-store-shared-release-metadata-fr116.md) | [FR-116](../../fr-br/FR-116-semver-registry-structured-store-shared-release-metadata.md) | [IPP](../../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md)

- [x] **E03:S02:T14 – SemVer Allocation Authority (FR-120)** - ✅ COMPLETE (**v0.3.2.14+2** — SAA + allocator repair) — [Task doc](story-02-versioning-cookbook-and-examples/T14-semver-allocation-authority-transactional-mapping-fr120.md) | [FR-120](../../fr-br/FR-120-semver-allocation-authority-transactional-mapping-black-box.md) | [IPP](../../../implementation-cycles/IPP-E03S02T14-semver-allocation-authority.md)

- [ ] **E03:S02:T15 — SemVer external `+BUILD` redundancy evaluation & policy decision (UXR-031)** - INTAKE
  - Task: [`T15-semver-external-build-metadata-redundancy-uxr031`](story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md)

---

## Overview

This story produces a **practical versioning cookbook** for the RC.EPIC.STORY.TASK+BUILD schema, turning the dev-kit versioning policy and framework docs into **concrete, copyable examples** for other projects.

It focuses on:

- Realistic scenarios (new epic, new story, new task, bugfix, hotfix, parallel work)
- Clear mapping between **Kanban → Versioning → RW**
- Guidance that is **safe to copy** into external projects

---

## Goal

Provide a **versioning cookbook** with worked examples that shows:

- How to select the right version components for common scenarios
- How to handle parallel epics/stories safely
- How to represent bugfixes and hotfixes
- How to keep Kanban, versioning, and RW aligned

---

## Acceptance Criteria (Story)

- [ ] Versioning cookbook document created with worked examples
- [ ] Core scenarios documented and validated
- [ ] Cross-framework examples (Kanban + Versioning + RW) included
- [ ] Edge cases and anti-patterns documented
- [ ] Quick reference summary created
- [ ] Links added from dev-kit versioning policy and framework READMEs to the cookbook

---

## References

- `packages/frameworks/numbering-versioning/versioning-policy.md`  
- `packages/frameworks/numbering-versioning/versioning-strategy.md`  
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`  
- `docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md`  
- `docs/kanban/story-03-kanban-versioning-rw-integration.md`  

---

_Last updated: 2025-12-03 (initial story definition)_  


