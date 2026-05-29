---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Structure

**Last Updated:** 2026-04-02 (**E2:S01** reopened — **E2:S01:T09** **BR-060**; E4:S19 abstract governance)
**Version:** v0.4.18.1+2 *(prior RW; align with `version.py` when releasing)*

> **For MoSCOW prioritized tasks, see:** [`kboard.md`](kboard.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)

---

## Epics

### Epic 1: AI Dev Kit Core

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)

**Stories:**
- [x] **E1:S01 – Dev Kit Versioning & RW Behaviour** - COMPLETE ✅ (v0.1.1.1+1, E2:S01:T02, E2:S01:T03)
  - Story: [`epics/Epic-1/Story-001-vibe-dev-kit-kanban-and-versioning.md`](epics/Epic-1/Story-001-vibe-dev-kit-kanban-and-versioning.md)


- [x] **E1:S02 – Package & Repo Architecture** - COMPLETE ✅ (v0.1.2.5+1)
  - Story: [`epics/Epic-1/Story-002-package-and-repo-architecture.md`](epics/Epic-1/Story-002-package-and-repo-architecture.md)


- [x] **E1:S03 – Core KB Structure for Dev Kit** - COMPLETE ✅ (v0.1.3.6+1)
  - Story: [`epics/Epic-1/Story-003-core-kb-structure-for-dev-kit.md`](epics/Epic-1/Story-003-core-kb-structure-for-dev-kit.md)

**Epic Doc:** [`epics/Epic-1/Epic-1.md`](epics/Epic-1/Epic-1.md)

---

### Epic 2: Workflow Management Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)

**Stories:**
- [ ] **E2:S01 – RW Agent Execution & Docs** - IN PROGRESS (reopened 2026-04-02 — **E2:S01:T09** **BR-060**; T01–T08 complete v0.2.1.6+4 … v0.2.1.8+1)
  - Story: [`epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`](epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)
  - Tasks: **T09** IN PROGRESS — [BR-060](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md)


- [x] **E2:S02 – PDCA Integration into Release Workflow** - COMPLETE ✅ (v0.2.2.8+1)
  - Story: [`epics/Epic-2/Story-002-pdca-integration-into-release-workflow.md`](epics/Epic-2/Story-002-pdca-integration-into-release-workflow.md)


- [x] **E2:S03 – Additional Workflows & Examples** - COMPLETE ✅ (v0.2.3.6+1)
  - Story: [`epics/Epic-2/Story-003-additional-workflows-and-examples.md`](epics/Epic-2/Story-003-additional-workflows-and-examples.md)


- [x] **E2:S04 – RW Installer & Plug-and-Play Adoption** - COMPLETE ✅ (v0.2.4.9+3)
  - Story: [`epics/Epic-2/Story-004-rw-installer-and-plug-and-play-adoption.md`](epics/Epic-2/Story-004-rw-installer-and-plug-and-play-adoption.md)


- [x] **E2:S05 – Post-Implementation Review (PIR) Workflow** - COMPLETE ✅ (v0.2.5.15+1)
  - Story: [`epics/Epic-2/Story-005-post-implementation-review-workflow.md`](epics/Epic-2/Story-005-post-implementation-review-workflow.md)


- [x] **E2:S06 – Package Uninstall and Recovery** - COMPLETE ✅ (v0.2.6.3+1)
  - Story: [`epics/Epic-2/Story-006-package-uninstall-and-recovery.md`](epics/Epic-2/Story-006-package-uninstall-and-recovery.md)


- [x] **E2:S07 – Trigger-Aware Release Workflow** - COMPLETE ✅ (v0.2.7.8+1)
  - Story: [`epics/Epic-2/Story-007-trigger-aware-release-workflow.md`](epics/Epic-2/Story-007-trigger-aware-release-workflow.md)


- [x] **E2:S08 – Harden Release Workflow Reliability** - COMPLETE ✅ (v0.2.8.7+1)
  - Story: [`epics/Epic-2/Story-008-harden-release-workflow-reliability.md`](epics/Epic-2/Story-008-harden-release-workflow-reliability.md)


- [x] **E2:S09 – Kanban Granularity & Discrete Task Docs (RW Integration)** - COMPLETE ✅ (v0.2.9.6+1)
  - Story: [`epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md`](epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md)


- [x] **E2:S10 – Versioning Policy Hardening — Doc-Init Build (+0)** - COMPLETE ✅ (v0.2.10.7+1)
  - Story: [`epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md`](epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md)


- [x] **E2:S11 – Intake Workflow Automation** - COMPLETE ✅ (v0.2.11.11+1)
  - Story: [`epics/Epic-2/Story-011-intake-workflow-automation.md`](epics/Epic-2/Story-011-intake-workflow-automation.md)


- [ ] **E2:S13 – Workflow Management Package Implementation Review** - IN PROGRESS (v0.2.13.1+2 – T01: Fixed .env.local loading)
  - Story: [`epics/Epic-2/Story-013-workflow-management-package-implementation-review.md`](epics/Epic-2/Story-013-workflow-management-package-implementation-review.md)


- [ ] **E2:S14 – Workflow Management Package Installation Evaluation** - TODO (v0.2.14.0+0)
  - Story: [`epics/Epic-2/Story-014-workflow-management-package-installation-evaluation.md`](epics/Epic-2/Story-014-workflow-management-package-installation-evaluation.md)

**Epic Doc:** [`epics/Epic-2/Epic-2.md`](epics/Epic-2/Epic-2.md)

---

### Epic 3: Numbering & Versioning Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)

**Stories:**
- [x] **E3:S01 – Dev Kit Alignment with Versioning Framework** - COMPLETE ✅ (v0.3.1.6+1)
  - Story: [`epics/Epic-3/Story-001-dev-kit-alignment-with-versioning-framework.md`](epics/Epic-3/Story-001-dev-kit-alignment-with-versioning-framework.md)


- [x] **E3:S02 – Versioning Cookbook & Examples** - COMPLETE ✅ (v0.3.2.5+3)
  - Story: [`epics/Epic-3/Story-002-versioning-cookbook-and-examples.md`](epics/Epic-3/Story-002-versioning-cookbook-and-examples.md)


- [x] **E3:S03 – Versioning Integration with Kanban & RW** - COMPLETE ✅ (v0.3.3.6+1)
  - Story: [`epics/Epic-3/Story-003-versioning-integration-with-kanban-and-rw.md`](epics/Epic-3/Story-003-versioning-integration-with-kanban-and-rw.md)


- [ ] **E3:S04 – Numbering & Versioning Package Implementation Review** - IN PROGRESS (v0.3.4.6+1 – T06: RC sign-off criteria and remediation tasks complete)
  - Story: [`epics/Epic-3/Story-004-numbering-versioning-package-implementation-review.md`](epics/Epic-3/Story-004-numbering-versioning-package-implementation-review.md)
  - Tasks: T01 ✅ COMPLETE (v0.3.4.1+1), T02 ✅ COMPLETE (v0.3.4.2+1), T03 ✅ COMPLETE (v0.3.4.3+1), T04 ✅ COMPLETE (v0.3.4.4+1), T05 ✅ COMPLETE (v0.3.4.5+1), T06 ✅ COMPLETE (v0.3.4.6+1)


- [ ] **E3:S05 – Numbering & Versioning Package Installation Evaluation** - TODO (v0.3.5.0+0)
  - Story: [`epics/Epic-3/Story-005-numbering-versioning-package-installation-evaluation.md`](epics/Epic-3/Story-005-numbering-versioning-package-installation-evaluation.md)

**Epic Doc:** [`epics/Epic-3/Epic-3.md`](epics/Epic-3/Epic-3.md)

---

### Epic 4: Kanban Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)

**Note:** Epic 4 has incomplete stories (S12, S14, S15, S16, S17), so Epic status is IN PROGRESS.

**Stories:**
- [x] **E4:S01 – Dev Kit Kanban Implementation** - COMPLETE ✅ (v0.4.1.1+6)
  - Story: [`epics/Epic-4/Story-001-dev-kit-kanban-implementation.md`](epics/Epic-4/Story-001-dev-kit-kanban-implementation.md)


- [x] **E4:S02 – FR/BR Intake to Tasks** - COMPLETE ✅ (v0.4.2.6+3)
  - Story: [`epics/Epic-4/Story-002-fr-br-intake-to-tasks.md`](epics/Epic-4/Story-002-fr-br-intake-to-tasks.md)


- [x] **E4:S03 – Kanban + Versioning + RW Integration** - COMPLETE ✅ (v0.4.3.7+1)
  - Story: [`epics/Epic-4/Story-003-kanban-versioning-rw-integration.md`](epics/Epic-4/Story-003-kanban-versioning-rw-integration.md)


- [x] **E4:S04 – Kanban Structure Refactoring** - COMPLETE ✅ (v0.4.4.1+1)
  - Story: [`epics/Epic-4/Story-004-kanban-structure-refactoring.md`](epics/Epic-4/Story-004-kanban-structure-refactoring.md)


- [x] **E4:S05 – Canonical Epics for Kanban Framework** - COMPLETE ✅ (v0.4.5.1+1)
  - Story: [`epics/Epic-4/Story-005-canonical-epics-for-kanban-framework.md`](epics/Epic-4/Story-005-canonical-epics-for-kanban-framework.md)


- [x] **E4:S06 – Comprehensive Canonical Epics/Stories/Tasks Template System** - ✅ COMPLETE (v0.4.6.8+1 – All tasks complete)
  - Story: [`epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md`](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md)
  - Tasks: T00 COMPLETE, T01-T02 COMPLETE, T03 COMPLETE, T04 COMPLETE, T05 COMPLETE, T06 COMPLETE, T07 COMPLETE, T08 COMPLETE, T09 COMPLETE, T10 COMPLETE


- [x] **E4:S07 – Migration Support and Installation Modes** - COMPLETE (v0.4.7.3+1)
  - Story: [`epics/Epic-4/Story-007-migration-support-and-installation-modes.md`](epics/Epic-4/Story-007-migration-support-and-installation-modes.md)


- [x] **E4:S08 – Intelligent Epic Matching and Canonical Structure Adoption** - COMPLETE (v0.4.8.6+1)
  - Story: [`epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md`](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md)


- [x] **E4:S09 – Bug Fixes and Agentic Intelligence Implementation** - COMPLETE (v0.4.9.1+1)
  - Story: [`epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md`](epics/Epic-4/Story-009-bug-fixes-and-agentic-intelligence.md)


- [x] **E4:S10 – Agentic Kanban Task Creation from FR/BR** - COMPLETE (v0.4.10.7+0)
  - Story: [`epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md`](epics/Epic-4/Story-010-agentic-kanban-task-creation-from-fr-br.md)
  - Tasks: T00 COMPLETE, T01-T07 COMPLETE (FR-012: Agentic workflow for automatic task creation from FRs/BRs)


- [x] **E4:S11 – Kanban Granularity & Discrete Task Docs** - COMPLETE (v0.4.11.0+0)
  - Story: [`epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md`](epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs.md)
  - Tasks: T00 COMPLETE, T01 COMPLETE (v0.4.11.1+1), T02 COMPLETE (v0.4.11.2+2), T03 COMPLETE (v0.4.11.3+1), T04 COMPLETE (v0.4.11.4+1), T05 COMPLETE (v0.4.11.5+0), T06 COMPLETE (v0.4.11.6+2)


- [ ] **E4:S12 – FR/BR/UXR Repository Stories (S01 Pattern)** - TODO (v0.4.12.0+0)
  - Story: [`epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md`](epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md)
  - Tasks: T00 COMPLETE, T01-T10 TODO (FR-021: Repository pattern for FR/BR/UXR with S01 stories - S00 is Epic-level abstract space only)


- [x] **E4:S13 – Kanban Board Enhancement - MoSCOW Prioritized Task View** - COMPLETE (v0.4.13.6+2)
  - Story: [`epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view.md`](epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view.md)
  - Tasks: T01 COMPLETE (v0.4.13.1+1), T02 COMPLETE (v0.4.13.2+1), T03 COMPLETE (v0.4.13.3+1), T04 COMPLETE (v0.4.13.4+3), T05 COMPLETE (v0.4.13.5+1), T06 COMPLETE (v0.4.13.6+1)


- [x] **E4:S18 – Kanban Board Info-Only Split** - COMPLETE ✅ (v0.4.18.1+2 – Four-way split complete: added kanban-completed.md for historical task tracking, updated all cross-references, system ready for production)
  - Story: [`epics/Epic-4/Story-018-kanban-board-info-only-split.md`](epics/Epic-4/Story-018-kanban-board-info-only-split.md)
  - Tasks: T01 ✅ COMPLETE (v0.4.18.1+1), T02 ✅ COMPLETE (v0.4.18.2+1)

- [ ] **E4:S19 – FR/BR/UXR abstract governance and intake** - IN PROGRESS (v0.4.19.0+0 — abstract-first; **BR-060** canonical **[E2:S01:T09](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md)**)
  - Story: [`epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md`](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md)
  - Tasks: T01 TODO (charter); E4:S19 T01 `br060` filename = stub → E2:S01:T09


- [ ] **E4:S14 – Kanban Framework Maintenance** - IN PROGRESS (v0.4.14.2+1 – T02 complete: RC review artifacts restored)
  - Story: [`epics/Epic-4/Story-014-kanban-framework-maintenance.md`](epics/Epic-4/Story-014-kanban-framework-maintenance.md)


- [ ] **E4:S16 – Kanban Package Implementation Review** - IN PROGRESS (v0.4.16.2+1 – T02 complete: Component inventory mapped)
  - Story: [`epics/Epic-4/Story-016-kanban-package-implementation-review.md`](epics/Epic-4/Story-016-kanban-package-implementation-review.md)


- [x] **E4:S17 – Kanban Package Installation Evaluation** - COMPLETE (v0.4.17.6+1 – All 6 tasks complete: Installation evaluation complete, RC-ready confirmed)
  - Story: [`epics/Epic-4/Story-017-kanban-package-installation-evaluation.md`](epics/Epic-4/Story-017-kanban-package-installation-evaluation.md)

**Epic Doc:** [`epics/Epic-4/Epic-4.md`](epics/Epic-4/Epic-4.md)

---

### Epic 5: Documentation Management and Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-20 (RW: E5:S08:T02)

**Note:** E5:S01 (FR Repo) is omitted from this board display (PERPETUAL repository story - see Epic 5 document for internal tracking).

**Stories:**

- [x] **E5:S02 – Documentation Maintenance Framework** - IN PROGRESS (T02-T04 complete)
  - Story: [`epics/Epic-5/Story-002-documentation-maintenance-framework.md`](epics/Epic-5/Story-002-documentation-maintenance-framework.md)


- [x] **E5:S03 – Documentation Quality Assurance** - COMPLETE (v0.5.3.3+1)
  - Tasks: T01, T02, T03
  - Story: [`epics/Epic-5/Story-003-documentation-quality-assurance.md`](epics/Epic-5/Story-003-documentation-quality-assurance.md)


- [ ] **E5:S04 – Documentation Automation** - IN PROGRESS (T01 complete)
  - Story: [`epics/Epic-5/Story-004-documentation-automation.md`](epics/Epic-5/Story-004-documentation-automation.md)


- [ ] **E5:S08 – Knowledge Base** - IN PROGRESS (v0.5.8.2+5 – T02  KB migration log, stub sweep MCP args)
  - Story: [`epics/Epic-5/Story-008-knowledge-base.md`](epics/Epic-5/Story-008-knowledge-base.md)

**Epic Doc:** [`epics/Epic-5/Epic-5.md`](epics/Epic-5/Epic-5.md)

---

### Epic 6: Framework Management and Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)
**Version:** v0.5.1.37+1

**Note:** E6:S01 (BR Repo) is omitted from this board display (PERPETUAL repository story - see Epic 6 document for internal tracking).

**Stories:**

- [x] **E6:S01 – Framework Version Management** - COMPLETE (v0.6.1.5+1 – All tasks complete: Framework versioning strategy, release processes, compatibility tracking, dependency architecture, and version tagging strategy)
  - Story: [`epics/Epic-6/Story-001-framework-version-management.md`](epics/Epic-6/Story-001-framework-version-management.md)
  - Tasks: T01 COMPLETE (v0.6.1.1+1), T02 COMPLETE (v0.6.1.2+1), T03 COMPLETE (v0.6.1.3+1), T04 COMPLETE (v0.6.1.1+2), T05 COMPLETE (v0.6.1.5+1)


- [x] **E6:S02 – Framework Update and Migration** - COMPLETE (v0.6.2.3+1 – All active tasks complete: Framework update procedures, migration guide, backward compatibility policy, and auto-update mechanisms)
  - Story: [`epics/Epic-6/Story-002-framework-update-and-migration.md`](epics/Epic-6/Story-002-framework-update-and-migration.md)
  - Tasks: T01 COMPLETE (v0.6.2.1+1 - Framework update procedures), T02 COMPLETE (v0.6.2.2+1 - Framework migration guide), T03 COMPLETE (v0.6.2.3+1 - Framework backward compatibility policy), T05 COMPLETE (v0.6.2.5+1 - Framework auto-update mechanisms), T04 SUPERSEDED (by E6:S07)


- [x] **E6:S03 – Framework Health Monitoring** - COMPLETE (v0.6.3.3+1 – All tasks complete: Framework health metrics defined, monitoring tools implemented, dashboard built)
  - Story: [`epics/Epic-6/Story-003-framework-health-monitoring.md`](epics/Epic-6/Story-003-framework-health-monitoring.md)
  - Tasks: T01 COMPLETE (v0.6.3.1+1 - Framework health metrics), T02 COMPLETE (v0.6.3.2+1 - Framework health monitoring tools), T03 COMPLETE (v0.6.3.3+1 - Framework health dashboard)


- [ ] **E6:S05 – Bug Reports** - IN PROGRESS
  - Story: [`epics/Epic-6/Story-005-bug-reports.md`](epics/Epic-6/Story-005-bug-reports.md)


- [ ] **E6:S06 – Feature Requests** - TODO
  - Story: [`epics/Epic-6/Story-006-feature-requests.md`](epics/Epic-6/Story-006-feature-requests.md)


- [ ] **E6:S07 – ADK Implementation Analysis and Package Management** - IN PROGRESS (v0.6.7.101+22)
  - Story: [`epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md`](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)


- [x] **E6:S08 – ai-dev-kit CLI Tool** - COMPLETE (v0.6.8.13+1 – All 14 tasks T00-T13 complete: Architecture, commands, backend abstraction, all four backends, configuration management, error handling, migration utilities, remove command, documentation, testing, validation, PyPI packaging)
  - Story: [`epics/Epic-6/Story-008-ai-dev-kit-cli-tool.md`](epics/Epic-6/Story-008-ai-dev-kit-cli-tool.md)
  - Tasks: T00 COMPLETE, T01-T13 COMPLETE (CLI tool implementation: architecture, commands, backends, config, migration, testing, packaging - ALL COMPLETE)
  - **Feature Request:** [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md)


- [ ] **E6:S09 – AI Dev Kit installation and adopter integration** - IN PROGRESS (FR-080–082; tasks T01–T03)
  - Story: [`epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md`](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md)

**Epic Doc:** [`epics/Epic-6/Epic-6.md`](epics/Epic-6/Epic-6.md)

---

### Epic 7: Codebase Maintenance and Review

**Status:** COMPLETE  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)
**Version:** v0.5.1.37+1

**Note:** E7:S01 (UXR Repo) is omitted from this board display (PERPETUAL repository story - see Epic 7 document for internal tracking).

**Stories:**

- [x] **E7:S01 – Codebase Maintenance Tasks** - COMPLETE (v0.7.1.4+1 – All non-perpetual tasks complete: Prioritization framework, workflow processes, and Kanban integration established)
  - Story: [`epics/Epic-7/Story-001-codebase-maintenance-tasks.md`](epics/Epic-7/Story-001-codebase-maintenance-tasks.md)
  - Tasks: T01 PERPETUAL, T02 COMPLETE (v0.7.1.2+1 - Maintenance task prioritization framework), T03 COMPLETE (v0.7.1.3+1 - Maintenance workflow processes), T04 COMPLETE (v0.7.1.4+1 - Maintenance tasks integrated with Kanban framework) - **Story COMPLETE**


- [x] **E7:S02 – Code Review Standards and Processes** - COMPLETE (v0.7.2.4+1 – All tasks complete: Code review standards, checklists, workflows, and Kanban integration established)
  - Story: [`epics/Epic-7/Story-002-code-review-standards-and-processes.md`](epics/Epic-7/Story-002-code-review-standards-and-processes.md)
  - Tasks: T01 COMPLETE (v0.7.2.1+1 - Code review standards and guidelines), T02 COMPLETE (v0.7.2.2+1 - Code review checklist templates), T03 COMPLETE (v0.7.2.3+1 - Code review workflow processes), T04 COMPLETE (v0.7.2.4+1 - Code review Kanban integration) - **Story COMPLETE**


- [x] **E7:S03 – Code Quality Metrics and Monitoring** - COMPLETE (v0.7.3.4+1 – All tasks complete: Code quality metrics framework, dashboards, Kanban integration, and monitoring processes established)
  - Story: [`epics/Epic-7/Story-003-code-quality-metrics-and-monitoring.md`](epics/Epic-7/Story-003-code-quality-metrics-and-monitoring.md)
  - Tasks: T01 COMPLETE (v0.7.3.1+0 - Code quality metrics framework), T02 COMPLETE (v0.7.3.2+0 - Code quality monitoring dashboards), T03 COMPLETE (v0.7.3.3+0 - Code quality Kanban integration), T04 COMPLETE (v0.7.3.4+0 - Code quality monitoring processes) - **Story COMPLETE**


- [x] **E7:S04 – Maintenance Automation and Tooling** - COMPLETE (v0.7.4.4+1 – All tasks complete: Maintenance automation requirements, scripts, workflow integration, and usage documentation established)
  - Story: [`epics/Epic-7/Story-004-maintenance-automation-and-tooling.md`](epics/Epic-7/Story-004-maintenance-automation-and-tooling.md)
  - Tasks: T01 COMPLETE (v0.7.4.1+0 - Maintenance automation requirements), T02 COMPLETE (v0.7.4.2+0 - Maintenance automation scripts and tools), T03 COMPLETE (v0.7.4.3+0 - Maintenance automation workflow integration), T04 COMPLETE (v0.7.4.4+0 - Maintenance automation usage guide) - **Story COMPLETE**


- [x] **E7:S05 – Migration UXR – Pre-Existing Kanban Structures** - COMPLETE (v0.7.5.4+1 – All tasks complete: All 4 UXR documents synthesized, user pain points extracted, migration UX requirements and recommendations documented, findings fed into Epic 4 Stories 7, 8, and 9)
  - Story: [`epics/Epic-7/Story-005-migration-uxr-research.md`](epics/Epic-7/Story-005-migration-uxr-research.md)
  - Tasks: T01 COMPLETE (v0.7.5.1+0 - UXR-001 intake and synthesis), T02 COMPLETE (v0.7.5.2+0 - UXR-002 intake and synthesis), T03 COMPLETE (v0.7.5.3+0 - UXR-003 intake and synthesis), T04 COMPLETE (v0.7.5.4+0 - UXR-004 intake and synthesis) - **Story COMPLETE**

**Epic Doc:** [`epics/Epic-7/Epic-7.md`](epics/Epic-7/Epic-7.md)

---

### Epic 8: Tooling & Automation

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)
**Version:** v0.5.1.37+1

**Stories:**

- [x] **E8:S01 – Code Generators** - COMPLETE (v0.8.1.3+1, Last updated: 2026-01-05)
  - Story: [`epics/Epic-8/Story-001-code-generators.md`](epics/Epic-8/Story-001-code-generators.md)
  - Tasks: T01 COMPLETE (v0.8.1.1+1), T02 COMPLETE (v0.8.1.2+1), T03 COMPLETE (v0.8.1.3+1)


- [x] **E8:S02 – Additional Validators** - COMPLETE (v0.8.2.3+1, Last updated: 2026-01-06)
  - Story: [`epics/Epic-8/Story-002-additional-validators.md`](epics/Epic-8/Story-002-additional-validators.md)
  - Tasks: T01 COMPLETE (v0.8.2.1+1), T02 TODO, T03 TODO


- [ ] **E8:S03 – Automation Scripts** - TODO
  - Story: [`epics/Epic-8/Story-003-automation-scripts.md`](epics/Epic-8/Story-003-automation-scripts.md)


- [ ] **E8:S04 – Tooling & Automation Package Implementation Review** - TODO (v0.8.4.0+0)
  - Story: [`epics/Epic-8/Story-004-tooling-automation-package-implementation-review.md`](epics/Epic-8/Story-004-tooling-automation-package-implementation-review.md)


- [ ] **E8:S05 – Tooling & Automation Package Installation Evaluation** - TODO (v0.8.5.0+0)
  - Story: [`epics/Epic-8/Story-005-tooling-automation-package-installation-evaluation.md`](epics/Epic-8/Story-005-tooling-automation-package-installation-evaluation.md)

**Epic Doc:** [`epics/Epic-8/Epic-8.md`](epics/Epic-8/Epic-8.md)

---

### Epic 9: Release Candidate Readiness

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)

**Stories:**

- [ ] **E9:S01 – RC Readiness Gap Analysis** - IN PROGRESS (v0.9.1.8+6)
  - Story: [`epics/Epic-9/Story-001-rc-readiness-gap-analysis.md`](epics/Epic-9/Story-001-rc-readiness-gap-analysis.md)
  - **Feature Request:** [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md)


- [ ] **E9:S02 – Kanban Framework RC Readiness Review** - TODO
  - Story: [`epics/Epic-9/Story-002-kanban-framework-rc-readiness-review.md`](epics/Epic-9/Story-002-kanban-framework-rc-readiness-review.md)


- [ ] **E9:S03 – Workflow Management Framework RC Readiness Review** - TODO
  - Story: [`epics/Epic-9/Story-003-workflow-management-framework-rc-readiness-review.md`](epics/Epic-9/Story-003-workflow-management-framework-rc-readiness-review.md)


- [ ] **E9:S04 – Numbering & Versioning Framework RC Readiness Review** - TODO
  - Story: [`epics/Epic-9/Story-004-numbering-versioning-framework-rc-readiness-review.md`](epics/Epic-9/Story-004-numbering-versioning-framework-rc-readiness-review.md)


- [ ] **E9:S05 – Canonical E/S/T Review and Refinement** - TODO
  - Story: [`epics/Epic-9/Story-005-canonical-est-review-and-refinement.md`](epics/Epic-9/Story-005-canonical-est-review-and-refinement.md)

**Epic Doc:** [`epics/Epic-9/Epic-9.md`](epics/Epic-9/Epic-9.md)

---

### Epic 10: Document Lifecycle Framework

**Status:** TODO  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)
**Version:** v0.5.1.37+1

**Stories:**
- [ ] **E10:S01 – Document Lifecycle Package Implementation Review** - TODO (v0.10.1.0+0)
  - Story: [`epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md`](epics/Epic-10/Story-001-document-lifecycle-package-implementation-review.md)


- [ ] **E10:S02 – Document Lifecycle Package Installation Evaluation** - TODO (v0.10.2.0+0)
  - Story: [`epics/Epic-10/Story-002-document-lifecycle-package-installation-evaluation.md`](epics/Epic-10/Story-002-document-lifecycle-package-installation-evaluation.md)

**Epic Doc:** [`epics/Epic-10/Epic-10.md`](epics/Epic-10/Epic-10.md)

---

### Epic 11: Debug Path Framework

**Status:** TODO  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)
**Version:** v0.5.1.37+1

**Stories:**
- [ ] **E11:S01 – Debug Path Package Implementation Review** - TODO (v0.11.1.0+0)
  - Story: [`epics/Epic-11/Story-001-debug-path-package-implementation-review.md`](epics/Epic-11/Story-001-debug-path-package-implementation-review.md)


- [ ] **E11:S02 – Debug Path Package Installation Evaluation** - TODO (v0.11.2.0+0)
  - Story: [`epics/Epic-11/Story-002-debug-path-package-installation-evaluation.md`](epics/Epic-11/Story-002-debug-path-package-installation-evaluation.md)

**Epic Doc:** [`epics/Epic-11/Epic-11.md`](epics/Epic-11/Epic-11.md)

---

### Epic 21: Internationalization and Localization

**Status:** TODO  
**Priority:** MEDIUM  
**Last Updated:** 2026-02-08 (RW: E5:S01:T37)

**Stories:**
- [ ] **E21:S00 – Language Selection at Setup (UK/US English)** - TODO (v0.21.0.0+0)
  - Story: [`epics/Epic-21/Story-000-language-selection-at-setup.md`](epics/Epic-21/Story-000-language-selection-at-setup.md)
  - Tasks: T01-T07 TODO


- [ ] **E21:S01 – Internationalization Infrastructure** - TODO (v0.21.0.0+0)
  - Story: [`epics/Epic-21/Story-001-internationalization-infrastructure.md`](epics/Epic-21/Story-001-internationalization-infrastructure.md)
  - Tasks: T01-T07 TODO


- [ ] **E21:S02 – Translation and Localization** - TODO (v0.21.0.0+0)
  - Story: [`epics/Epic-21/Story-002-translation-and-localization.md`](epics/Epic-21/Story-002-translation-and-localization.md)
  - Tasks: T01-T07 TODO


- [ ] **E21:S03 – Cultural Adaptation** - TODO (v0.21.0.0+0)
  - Story: [`epics/Epic-21/Story-003-cultural-adaptation.md`](epics/Epic-21/Story-003-cultural-adaptation.md)
  - Tasks: T01-T07 TODO

**Epic Doc:** [`epics/Epic-21/Epic-21.md`](epics/Epic-21/Epic-21.md)

---
