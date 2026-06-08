---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Structure

**Last Updated:** 2026-04-02 (**E2:S01** reopened — **E02:S01:T09** **BR-060**; E4:S19 abstract governance)
**Version:** v0.4.18.1+2 *(prior RW; align with `version.py` when releasing)*

> **For MoSCOW prioritized tasks, see:** [`kboard.md`](kboard.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)

---

## Epics

### Epic 1: AI Dev Kit Core

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)

**Stories:**
- [x] **E1:S01 – Dev Kit Versioning & RW Behaviour** - COMPLETE ✅ (v0.1.1.1+1, E02:S01:T02, E02:S01:T03)
  - Story: [`epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning.md`](epics/epic-01/story-01-vibe-dev-kit-kanban-and-versioning.md)


- [x] **E1:S02 – Package & Repo Architecture** - COMPLETE ✅ (v0.1.2.5+1)
  - Story: [`epics/epic-01/story-02-package-and-repo-architecture.md`](epics/epic-01/story-02-package-and-repo-architecture.md)


- [x] **E1:S03 – Core KB Structure for Dev Kit** - COMPLETE ✅ (v0.1.3.6+1)
  - Story: [`epics/epic-01/story-03-core-kb-structure-for-dev-kit.md`](epics/epic-01/story-03-core-kb-structure-for-dev-kit.md)

**Epic Doc:** [`epics/epic-01/epic-01.md`](epics/epic-01/epic-01.md)

---

### Epic 2: Workflow Management Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)

**Stories:**
- [ ] **E2:S01 – RW Agent Execution & Docs** - IN PROGRESS (reopened 2026-04-02 — **E02:S01:T09** **BR-060**; T01–T08 complete v0.2.1.6+4 … v0.2.1.8+1)
  - Story: [`epics/epic-02/story-01-rw-agent-execution-and-docs.md`](epics/epic-02/story-01-rw-agent-execution-and-docs.md)
  - Tasks: **T09** IN PROGRESS — [BR-060](epics/epic-02/story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md)


- [x] **E2:S02 – PDCA Integration into Release Workflow** - COMPLETE ✅ (v0.2.2.8+1)
  - Story: [`epics/epic-02/story-02-pdca-integration-into-release-workflow.md`](epics/epic-02/story-02-pdca-integration-into-release-workflow.md)


- [x] **E2:S03 – Additional Workflows & Examples** - COMPLETE ✅ (v0.2.3.6+1)
  - Story: [`epics/epic-02/story-03-additional-workflows-and-examples.md`](epics/epic-02/story-03-additional-workflows-and-examples.md)


- [x] **E2:S04 – RW Installer & Plug-and-Play Adoption** - COMPLETE ✅ (v0.2.4.9+3)
  - Story: [`epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption.md`](epics/epic-02/story-04-rw-installer-and-plug-and-play-adoption.md)


- [x] **E2:S05 – Post-Implementation Review (PIR) Workflow** - COMPLETE ✅ (v0.2.5.15+1)
  - Story: [`epics/epic-02/story-05-post-implementation-review-workflow.md`](epics/epic-02/story-05-post-implementation-review-workflow.md)


- [x] **E2:S06 – Package Uninstall and Recovery** - COMPLETE ✅ (v0.2.6.3+1)
  - Story: [`epics/epic-02/story-06-package-uninstall-and-recovery.md`](epics/epic-02/story-06-package-uninstall-and-recovery.md)


- [x] **E2:S07 – Trigger-Aware Release Workflow** - COMPLETE ✅ (v0.2.7.8+1)
  - Story: [`epics/epic-02/story-07-trigger-aware-release-workflow.md`](epics/epic-02/story-07-trigger-aware-release-workflow.md)


- [x] **E2:S08 – Harden Release Workflow Reliability** - COMPLETE ✅ (v0.2.8.7+1)
  - Story: [`epics/epic-02/story-08-harden-release-workflow-reliability.md`](epics/epic-02/story-08-harden-release-workflow-reliability.md)


- [x] **E2:S09 – Kanban Granularity & Discrete Task Docs (RW Integration)** - COMPLETE ✅ (v0.2.9.6+1)
  - Story: [`epics/epic-02/story-09-kanban-granularity-discrete-task-docs.md`](epics/epic-02/story-09-kanban-granularity-discrete-task-docs.md)


- [x] **E2:S10 – Versioning Policy Hardening — Doc-Init Build (+0)** - COMPLETE ✅ (v0.2.10.7+1)
  - Story: [`epics/epic-02/story-10-doc-init-build-zero-for-new-est.md`](epics/epic-02/story-10-doc-init-build-zero-for-new-est.md)


- [x] **E2:S11 – Intake Workflow Automation** - COMPLETE ✅ (v0.2.11.11+1)
  - Story: [`epics/epic-02/story-11-intake-workflow-automation.md`](epics/epic-02/story-11-intake-workflow-automation.md)


- [ ] **E2:S13 – Workflow Management Package Implementation Review** - IN PROGRESS (v0.2.13.1+2 – T01: Fixed .env.local loading)
  - Story: [`epics/epic-02/story-13-workflow-management-package-implementation-review.md`](epics/epic-02/story-13-workflow-management-package-implementation-review.md)


- [ ] **E2:S14 – Workflow Management Package Installation Evaluation** - TODO (v0.2.14.0+0)
  - Story: [`epics/epic-02/story-14-workflow-management-package-installation-evaluation.md`](epics/epic-02/story-14-workflow-management-package-installation-evaluation.md)

**Epic Doc:** [`epics/epic-02/epic-02.md`](epics/epic-02/epic-02.md)

---

### Epic 3: Numbering & Versioning Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)

**Stories:**
- [x] **E3:S01 – Dev Kit Alignment with Versioning Framework** - COMPLETE ✅ (v0.3.1.6+1)
  - Story: [`epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework.md`](epics/epic-03/story-01-dev-kit-alignment-with-versioning-framework.md)


- [x] **E3:S02 – Versioning Cookbook & Examples** - COMPLETE ✅ (v0.3.2.5+3)
  - Story: [`epics/epic-03/story-02-versioning-cookbook-and-examples.md`](epics/epic-03/story-02-versioning-cookbook-and-examples.md)


- [x] **E3:S03 – Versioning Integration with Kanban & RW** - COMPLETE ✅ (v0.3.3.6+1)
  - Story: [`epics/epic-03/story-03-versioning-integration-with-kanban-and-rw.md`](epics/epic-03/story-03-versioning-integration-with-kanban-and-rw.md)


- [ ] **E3:S04 – Numbering & Versioning Package Implementation Review** - IN PROGRESS (v0.3.4.6+1 – T06: RC sign-off criteria and remediation tasks complete)
  - Story: [`epics/epic-03/story-04-numbering-versioning-package-implementation-review.md`](epics/epic-03/story-04-numbering-versioning-package-implementation-review.md)
  - Tasks: T01 ✅ COMPLETE (v0.3.4.1+1), T02 ✅ COMPLETE (v0.3.4.2+1), T03 ✅ COMPLETE (v0.3.4.3+1), T04 ✅ COMPLETE (v0.3.4.4+1), T05 ✅ COMPLETE (v0.3.4.5+1), T06 ✅ COMPLETE (v0.3.4.6+1)


- [ ] **E3:S05 – Numbering & Versioning Package Installation Evaluation** - TODO (v0.3.5.0+0)
  - Story: [`epics/epic-03/story-05-numbering-versioning-package-installation-evaluation.md`](epics/epic-03/story-05-numbering-versioning-package-installation-evaluation.md)

**Epic Doc:** [`epics/epic-03/epic-03.md`](epics/epic-03/epic-03.md)

---

### Epic 4: Kanban Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)

**Note:** Epic 4 has incomplete stories (S12, S14, S15, S16, S17), so Epic status is IN PROGRESS.

**Stories:**
- [x] **E4:S01 – Dev Kit Kanban Implementation** - COMPLETE ✅ (v0.4.1.1+6)
  - Story: [`epics/epic-04/story-01-dev-kit-kanban-implementation.md`](epics/epic-04/story-01-dev-kit-kanban-implementation.md)


- [x] **E4:S02 – FR/BR Intake to Tasks** - COMPLETE ✅ (v0.4.2.6+3)
  - Story: [`epics/epic-04/story-02-fr-br-intake-to-tasks.md`](epics/epic-04/story-02-fr-br-intake-to-tasks.md)


- [x] **E4:S03 – Kanban + Versioning + RW Integration** - COMPLETE ✅ (v0.4.3.7+1)
  - Story: [`epics/epic-04/story-03-kanban-versioning-rw-integration.md`](epics/epic-04/story-03-kanban-versioning-rw-integration.md)


- [x] **E4:S04 – Kanban Structure Refactoring** - COMPLETE ✅ (v0.4.4.1+1)
  - Story: [`epics/epic-04/story-04-kanban-structure-refactoring.md`](epics/epic-04/story-04-kanban-structure-refactoring.md)


- [x] **E4:S05 – Canonical Epics for Kanban Framework** - COMPLETE ✅ (v0.4.5.1+1)
  - Story: [`epics/epic-04/story-05-canonical-epics-for-kanban-framework.md`](epics/epic-04/story-05-canonical-epics-for-kanban-framework.md)


- [x] **E4:S06 – Comprehensive Canonical Epics/Stories/Tasks Template System** - ✅ COMPLETE (v0.4.6.8+1 – All tasks complete)
  - Story: [`epics/epic-04/story-06-comprehensive-canonical-est-template-system.md`](epics/epic-04/story-06-comprehensive-canonical-est-template-system.md)
  - Tasks: T00 COMPLETE, T01-T02 COMPLETE, T03 COMPLETE, T04 COMPLETE, T05 COMPLETE, T06 COMPLETE, T07 COMPLETE, T08 COMPLETE, T09 COMPLETE, T10 COMPLETE


- [x] **E4:S07 – Migration Support and Installation Modes** - COMPLETE (v0.4.7.3+1)
  - Story: [`epics/epic-04/story-07-migration-support-and-installation-modes.md`](epics/epic-04/story-07-migration-support-and-installation-modes.md)


- [x] **E4:S08 – Intelligent Epic Matching and Canonical Structure Adoption** - COMPLETE (v0.4.8.6+1)
  - Story: [`epics/epic-04/story-08-intelligent-epic-matching-canonical-adoption.md`](epics/epic-04/story-08-intelligent-epic-matching-canonical-adoption.md)


- [x] **E4:S09 – Bug Fixes and Agentic Intelligence Implementation** - COMPLETE (v0.4.9.1+1)
  - Story: [`epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md`](epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md)


- [x] **E4:S10 – Agentic Kanban Task Creation from FR/BR** - COMPLETE (v0.4.10.7+0)
  - Story: [`epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br.md`](epics/epic-04/story-10-agentic-kanban-task-creation-from-fr-br.md)
  - Tasks: T00 COMPLETE, T01-T07 COMPLETE (FR-012: Agentic workflow for automatic task creation from FRs/BRs)


- [x] **E4:S11 – Kanban Granularity & Discrete Task Docs** - COMPLETE (v0.4.11.0+0)
  - Story: [`epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md`](epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md)
  - Tasks: T00 COMPLETE, T01 COMPLETE (v0.4.11.1+1), T02 COMPLETE (v0.4.11.2+2), T03 COMPLETE (v0.4.11.3+1), T04 COMPLETE (v0.4.11.4+1), T05 COMPLETE (v0.4.11.5+0), T06 COMPLETE (v0.4.11.6+2)


- [ ] **E4:S12 – FR/BR/UXR Repository Stories (S01 Pattern)** - TODO (v0.4.12.0+0)
  - Story: [`epics/epic-04/story-12-fr-br-uxr-repository-stories.md`](epics/epic-04/story-12-fr-br-uxr-repository-stories.md)
  - Tasks: T00 COMPLETE, T01-T10 TODO (FR-021: Repository pattern for FR/BR/UXR with S01 stories - S00 is Epic-level abstract space only)


- [x] **E4:S13 – Kanban Board Enhancement - MoSCOW Prioritized Task View** - COMPLETE (v0.4.13.6+2)
  - Story: [`epics/epic-04/story-13-kanban-board-moscow-prioritized-task-view.md`](epics/epic-04/story-13-kanban-board-moscow-prioritized-task-view.md)
  - Tasks: T01 COMPLETE (v0.4.13.1+1), T02 COMPLETE (v0.4.13.2+1), T03 COMPLETE (v0.4.13.3+1), T04 COMPLETE (v0.4.13.4+3), T05 COMPLETE (v0.4.13.5+1), T06 COMPLETE (v0.4.13.6+1)


- [x] **E4:S18 – Kanban Board Info-Only Split** - COMPLETE ✅ (v0.4.18.1+2 – Four-way split complete: added kanban-completed.md for historical task tracking, updated all cross-references, system ready for production)
  - Story: [`epics/epic-04/story-18-kanban-board-info-only-split.md`](epics/epic-04/story-18-kanban-board-info-only-split.md)
  - Tasks: T01 ✅ COMPLETE (v0.4.18.1+1), T02 ✅ COMPLETE (v0.4.18.2+1)

- [ ] **E4:S19 – FR/BR/UXR abstract governance and intake** - IN PROGRESS (v0.4.19.0+0 — abstract-first; **BR-060** canonical **[E02:S01:T09](epics/epic-02/story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md)**)
  - Story: [`epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md`](epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md)
  - Tasks: T01 TODO (charter); E4:S19 T01 `br060` filename = stub → E02:S01:T09


- [ ] **E4:S14 – Kanban Framework Maintenance** - IN PROGRESS (v0.4.14.2+1 – T02 complete: RC review artifacts restored)
  - Story: [`epics/epic-04/story-14-kanban-framework-maintenance.md`](epics/epic-04/story-14-kanban-framework-maintenance.md)


- [ ] **E4:S16 – Kanban Package Implementation Review** - IN PROGRESS (v0.4.16.2+1 – T02 complete: Component inventory mapped)
  - Story: [`epics/epic-04/story-16-kanban-package-implementation-review.md`](epics/epic-04/story-16-kanban-package-implementation-review.md)


- [x] **E4:S17 – Kanban Package Installation Evaluation** - COMPLETE (v0.4.17.6+1 – All 6 tasks complete: Installation evaluation complete, RC-ready confirmed)
  - Story: [`epics/epic-04/story-17-kanban-package-installation-evaluation.md`](epics/epic-04/story-17-kanban-package-installation-evaluation.md)

**Epic Doc:** [`epics/epic-04/epic-04.md`](epics/epic-04/epic-04.md)

---

### Epic 5: Documentation Management and Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-20 (RW: E05:S08:T02)

**Note:** E5:S01 (FR Repo) is omitted from this board display (**CLOSED** historical registry — see Epic 5 document for internal tracking).

**Stories:**

- [x] **E5:S02 – Documentation Maintenance Framework** - IN PROGRESS (T02-T04 complete)
  - Story: [`epics/epic-05/story-02-documentation-maintenance-framework.md`](epics/epic-05/story-02-documentation-maintenance-framework.md)


- [x] **E5:S03 – Documentation Quality Assurance** - COMPLETE (v0.5.3.3+1)
  - Tasks: T01, T02, T03
  - Story: [`epics/epic-05/story-03-documentation-quality-assurance.md`](epics/epic-05/story-03-documentation-quality-assurance.md)


- [ ] **E5:S04 – Documentation Automation** - IN PROGRESS (T01 complete)
  - Story: [`epics/epic-05/story-04-documentation-automation.md`](epics/epic-05/story-04-documentation-automation.md)


- [ ] **E5:S08 – Knowledge Base** - IN PROGRESS (v0.5.8.2+5 – T02  KB migration log, stub sweep MCP args)
  - Story: [`epics/epic-05/story-08-knowledge-base.md`](epics/epic-05/story-08-knowledge-base.md)

**Epic Doc:** [`epics/epic-05/epic-05.md`](epics/epic-05/epic-05.md)

---

### Epic 6: Framework Management and Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)
**Version:** v0.5.1.37+1

**Note:** E6:S01 (BR Repo) is omitted from this board display (PERPETUAL repository story - see Epic 6 document for internal tracking).

**Stories:**

- [x] **E6:S01 – Framework Version Management** - COMPLETE (v0.6.1.5+1 – All tasks complete: Framework versioning strategy, release processes, compatibility tracking, dependency architecture, and version tagging strategy)
  - Story: [`epics/epic-06/story-02-versioning-cookbook-and-examples.md`](epics/epic-03/story-02-versioning-cookbook-and-examples.md)
  - Tasks: T01 COMPLETE (v0.6.1.1+1), T02 COMPLETE (v0.6.1.2+1), T03 COMPLETE (v0.6.1.3+1), T04 COMPLETE (v0.6.1.1+2), T05 COMPLETE (v0.6.1.5+1)


- [x] **E6:S02 – Framework Update and Migration** - COMPLETE (v0.6.2.3+1 – All active tasks complete: Framework update procedures, migration guide, backward compatibility policy, and auto-update mechanisms)
  - Story: [`epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md`](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md)
  - Tasks: T01 COMPLETE (v0.6.2.1+1 - Framework update procedures), T02 COMPLETE (v0.6.2.2+1 - Framework migration guide), T03 COMPLETE (v0.6.2.3+1 - Framework backward compatibility policy), T05 COMPLETE (v0.6.2.5+1 - Framework auto-update mechanisms), T04 SUPERSEDED (by E6:S07)


- [x] **E6:S03 – Framework Health Monitoring** - COMPLETE (v0.6.3.3+1 – All tasks complete: Framework health metrics defined, monitoring tools implemented, dashboard built)
  - Story: [`epics/epic-06/story-07-adk-implementation-analysis-and-package-management.md`](epics/epic-06/story-07-adk-implementation-analysis-and-package-management.md)
  - Tasks: T01 COMPLETE (v0.6.3.1+1 - Framework health metrics), T02 COMPLETE (v0.6.3.2+1 - Framework health monitoring tools), T03 COMPLETE (v0.6.3.3+1 - Framework health dashboard)


- [ ] **E6:S05 – Bug Reports** - IN PROGRESS
  - Story: [`epics/epic-06/story-05-bug-reports.md`](epics/epic-06/story-05-bug-reports.md)


- [ ] **E6:S06 – Feature Requests** - TODO
  - Story: [`epics/epic-06/story-06-feature-requests.md`](epics/epic-06/story-06-feature-requests.md)


- [ ] **E6:S07 – ADK Implementation Analysis and Package Management** - IN PROGRESS (v0.6.7.101+22)
  - Story: [`epics/epic-06/story-07-adk-implementation-analysis-and-package-management.md`](epics/epic-06/story-07-adk-implementation-analysis-and-package-management.md)


- [x] **E6:S08 – ai-dev-kit CLI Tool** - COMPLETE (v0.6.8.13+1 – All 14 tasks T00-T13 complete: Architecture, commands, backend abstraction, all four backends, configuration management, error handling, migration utilities, remove command, documentation, testing, validation, PyPI packaging)
  - Story: [`epics/epic-06/story-08-ai-dev-kit-cli-tool.md`](epics/epic-06/story-08-ai-dev-kit-cli-tool.md)
  - Tasks: T00 COMPLETE, T01-T13 COMPLETE (CLI tool implementation: architecture, commands, backends, config, migration, testing, packaging - ALL COMPLETE)
  - **Feature Request:** [FR-030](fr-br/FR-030-ai-dev-kit-cli-tool.md)


- [x] **E6:S09 – AI Dev Kit installation and adopter integration** - COMPLETE ✅ (v0.6.9.2+2 — FR-080/081/082/098; T01–T06)
  - Story: [`epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md`](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md)

**Epic Doc:** [`epics/epic-06/epic-06.md`](epics/epic-06/epic-06.md)

---

### Epic 7: Codebase Maintenance and Review

**Status:** COMPLETE  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)
**Version:** v0.5.1.37+1

**Note:** E7:S01 (UXR Repo) is omitted from this board display (PERPETUAL repository story - see Epic 7 document for internal tracking).

**Stories:**

- [x] **E7:S01 – Codebase Maintenance Tasks** - COMPLETE (v0.7.1.4+1 – All non-perpetual tasks complete: Prioritization framework, workflow processes, and Kanban integration established)
  - Story: [`epics/epic-07/story-01-codebase-maintenance-tasks.md`](epics/epic-07/story-01-codebase-maintenance-tasks.md)
  - Tasks: T01 PERPETUAL, T02 COMPLETE (v0.7.1.2+1 - Maintenance task prioritization framework), T03 COMPLETE (v0.7.1.3+1 - Maintenance workflow processes), T04 COMPLETE (v0.7.1.4+1 - Maintenance tasks integrated with Kanban framework) - **Story COMPLETE**


- [x] **E7:S02 – Code Review Standards and Processes** - COMPLETE (v0.7.2.4+1 – All tasks complete: Code review standards, checklists, workflows, and Kanban integration established)
  - Story: [`epics/epic-07/story-02-code-review-standards-and-processes.md`](epics/epic-07/story-02-code-review-standards-and-processes.md)
  - Tasks: T01 COMPLETE (v0.7.2.1+1 - Code review standards and guidelines), T02 COMPLETE (v0.7.2.2+1 - Code review checklist templates), T03 COMPLETE (v0.7.2.3+1 - Code review workflow processes), T04 COMPLETE (v0.7.2.4+1 - Code review Kanban integration) - **Story COMPLETE**


- [x] **E7:S03 – Code Quality Metrics and Monitoring** - COMPLETE (v0.7.3.4+1 – All tasks complete: Code quality metrics framework, dashboards, Kanban integration, and monitoring processes established)
  - Story: [`epics/epic-07/story-03-code-quality-metrics-and-monitoring.md`](epics/epic-07/story-03-code-quality-metrics-and-monitoring.md)
  - Tasks: T01 COMPLETE (v0.7.3.1+0 - Code quality metrics framework), T02 COMPLETE (v0.7.3.2+0 - Code quality monitoring dashboards), T03 COMPLETE (v0.7.3.3+0 - Code quality Kanban integration), T04 COMPLETE (v0.7.3.4+0 - Code quality monitoring processes) - **Story COMPLETE**


- [x] **E7:S04 – Maintenance Automation and Tooling** - COMPLETE (v0.7.4.4+1 – All tasks complete: Maintenance automation requirements, scripts, workflow integration, and usage documentation established)
  - Story: [`epics/epic-07/story-04-maintenance-automation-and-tooling.md`](epics/epic-07/story-04-maintenance-automation-and-tooling.md)
  - Tasks: T01 COMPLETE (v0.7.4.1+0 - Maintenance automation requirements), T02 COMPLETE (v0.7.4.2+0 - Maintenance automation scripts and tools), T03 COMPLETE (v0.7.4.3+0 - Maintenance automation workflow integration), T04 COMPLETE (v0.7.4.4+0 - Maintenance automation usage guide) - **Story COMPLETE**


- [x] **E7:S05 – Migration UXR – Pre-Existing Kanban Structures** - COMPLETE (v0.7.5.4+1 – All tasks complete: All 4 UXR documents synthesized, user pain points extracted, migration UX requirements and recommendations documented, findings fed into Epic 4 Stories 7, 8, and 9)
  - Story: [`epics/epic-07/story-05-migration-uxr-research.md`](epics/epic-07/story-05-migration-uxr-research.md)
  - Tasks: T01 COMPLETE (v0.7.5.1+0 - UXR-001 intake and synthesis), T02 COMPLETE (v0.7.5.2+0 - UXR-002 intake and synthesis), T03 COMPLETE (v0.7.5.3+0 - UXR-003 intake and synthesis), T04 COMPLETE (v0.7.5.4+0 - UXR-004 intake and synthesis) - **Story COMPLETE**


- [ ] **E7:S07 – Code Reviews** - IN PROGRESS (E07:S07:T01 — workflow machinery review, [FR-107](fr-br/FR-107-comprehensive-workflow-machinery-code-review.md))
  - Story: [`epics/epic-07/story-07-code-reviews.md`](epics/epic-07/story-07-code-reviews.md)
  - Tasks: T01 TODO — comprehensive workflow machinery code review

**Epic Doc:** [`epics/epic-07/epic-07.md`](epics/epic-07/epic-07.md)

---

### Epic 8: Tooling & Automation

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)
**Version:** v0.5.1.37+1

**Stories:**

- [x] **E8:S01 – Code Generators** - COMPLETE (v0.8.1.3+1, Last updated: 2026-01-05)
  - Story: [`epics/epic-08/story-01-code-generators.md`](epics/epic-08/story-01-code-generators.md)
  - Tasks: T01 COMPLETE (v0.8.1.1+1), T02 COMPLETE (v0.8.1.2+1), T03 COMPLETE (v0.8.1.3+1)


- [x] **E8:S02 – Additional Validators** - COMPLETE (v0.8.2.3+1, Last updated: 2026-01-06)
  - Story: [`epics/epic-08/story-02-additional-validators.md`](epics/epic-08/story-02-additional-validators.md)
  - Tasks: T01 COMPLETE (v0.8.2.1+1), T02 TODO, T03 TODO


- [ ] **E8:S03 – Automation Scripts** - TODO
  - Story: [`epics/epic-08/story-03-automation-scripts.md`](epics/epic-08/story-03-automation-scripts.md)


- [ ] **E8:S04 – Tooling & Automation Package Implementation Review** - TODO (v0.8.4.0+0)
  - Story: [`epics/epic-08/story-04-tooling-automation-package-implementation-review.md`](epics/epic-08/story-04-tooling-automation-package-implementation-review.md)


- [ ] **E8:S05 – Tooling & Automation Package Installation Evaluation** - TODO (v0.8.5.0+0)
  - Story: [`epics/epic-08/story-05-tooling-automation-package-installation-evaluation.md`](epics/epic-08/story-05-tooling-automation-package-installation-evaluation.md)

**Epic Doc:** [`epics/epic-08/epic-08.md`](epics/epic-08/epic-08.md)

---

### Epic 9: Release Candidate Readiness

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)

**Stories:**

- [ ] **E9:S01 – RC Readiness Gap Analysis** - IN PROGRESS (v0.9.1.8+6)
  - Story: [`epics/epic-09/story-01-rc-readiness-gap-analysis.md`](epics/epic-09/story-01-rc-readiness-gap-analysis.md)
  - **Feature Request:** [FR-032](fr-br/FR-032-release-candidate-readiness-gap-analysis.md)


- [ ] **E9:S02 – Kanban Framework RC Readiness Review** - TODO
  - Story: [`epics/epic-09/story-02-kanban-framework-rc-readiness-review.md`](epics/epic-09/story-02-kanban-framework-rc-readiness-review.md)


- [ ] **E9:S03 – Workflow Management Framework RC Readiness Review** - TODO
  - Story: [`epics/epic-09/story-03-workflow-management-framework-rc-readiness-review.md`](epics/epic-09/story-03-workflow-management-framework-rc-readiness-review.md)


- [ ] **E9:S04 – Numbering & Versioning Framework RC Readiness Review** - TODO
  - Story: [`epics/epic-09/story-04-numbering-versioning-framework-rc-readiness-review.md`](epics/epic-09/story-04-numbering-versioning-framework-rc-readiness-review.md)


- [ ] **E9:S05 – Canonical E/S/T Review and Refinement** - TODO
  - Story: [`epics/epic-09/story-05-canonical-est-review-and-refinement.md`](epics/epic-09/story-05-canonical-est-review-and-refinement.md)

**Epic Doc:** [`epics/epic-09/epic-09.md`](epics/epic-09/epic-09.md)

---

### Epic 10: Document Lifecycle Framework

**Status:** TODO  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)
**Version:** v0.5.1.37+1

**Stories:**
- [ ] **E10:S01 – Document Lifecycle Package Implementation Review** - TODO (v0.10.1.0+0)
  - Story: [`epics/epic-10/story-01-document-lifecycle-package-implementation-review.md`](epics/epic-10/story-01-document-lifecycle-package-implementation-review.md)


- [ ] **E10:S02 – Document Lifecycle Package Installation Evaluation** - TODO (v0.10.2.0+0)
  - Story: [`epics/epic-10/story-02-document-lifecycle-package-installation-evaluation.md`](epics/epic-10/story-02-document-lifecycle-package-installation-evaluation.md)

**Epic Doc:** [`epics/epic-10/Epic-10.md`](epics/epic-10/Epic-10.md)

---

### Epic 11: Debug Path Framework

**Status:** TODO  
**Priority:** HIGH  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)
**Version:** v0.5.1.37+1

**Stories:**
- [ ] **E11:S01 – Debug Path Package Implementation Review** - TODO (v0.11.1.0+0)
  - Story: [`epics/epic-11/story-01-debug-path-package-implementation-review.md`](epics/epic-11/story-01-debug-path-package-implementation-review.md)


- [ ] **E11:S02 – Debug Path Package Installation Evaluation** - TODO (v0.11.2.0+0)
  - Story: [`epics/epic-11/story-02-debug-path-package-installation-evaluation.md`](epics/epic-11/story-02-debug-path-package-installation-evaluation.md)

**Epic Doc:** [`epics/epic-11/Epic-11.md`](epics/epic-11/Epic-11.md)

---

### Epic 21: Internationalisation and Localisation

**Status:** TODO  
**Priority:** MEDIUM  
**Last Updated:** 2026-02-08 (RW: E05:S01:T37)

**Stories:** See canonical checklist in [`epics/epic-21/Epic-21.md`](epics/epic-21/Epic-21.md) (S01–S09). Legacy S00/mis-numbered paths redirect per [E21:S09:T02](epics/epic-21/story-09-epic-housekeeping/T02-legacy-story-folder-rationalization.md).

**Epic Doc:** [`epics/epic-21/Epic-21.md`](epics/epic-21/Epic-21.md)

---
