---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T02:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7: Codebase Maintenance and Review

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Completed:** [Reopened – TBD]  
**Last updated:** 2026-06-10 (E07:S01:T10 FR-059 supersession reconciliation — UKW bookkeeping)
**Branch:** `epic/7-documentation-maintenance`  
**Version Schema:** `0.7.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [x] **E7:S00 – Abstract Space** - ABSTRACT SPACE ONLY (**v0.7.0.0+0** — detasked BR-076 / **E04:S19:T10**; historical anchors T01–T06 link-only)
  - Story: [`story-00-uxr-repo.md`](story-00-uxr-repo.md)
  - **Note:** S00 omitted from board displays (UX optimization)

- [ ] **E7:S01 – Codebase Maintenance Tasks** - IN PROGRESS (E07:S01:T14 @ v0.7.1.14+0 RW -k; E07:S01:T13 @ v0.7.1.13+0; T10 hygiene TODO)
- [x] **E7:S02 – Code Review Standards and Processes** - ✅ COMPLETE (v0.7.2.4+1 – All tasks complete)
- [x] **E7:S03 – Code Quality Metrics and Monitoring** - ✅ COMPLETE (v0.7.3.4+1 – All tasks complete)
- [x] **E7:S04 – Maintenance Automation and Tooling** - ✅ COMPLETE (v0.7.4.4+1 – All tasks complete)
- [x] **E7:S05 – Migration UXR – Pre-Existing Kanban Structures** - ✅ COMPLETE (v0.7.5.4+1 – All tasks complete)
- [x] **E7:S06 – Post-Windsurf Project Review** - ✅ COMPLETE (v0.7.6.18+1 – T18 complete: installer prompt clarity hardening)

- [x] **E7:S07 – Code Reviews** - ✅ COMPLETE (v0.7.7.3+1 — T01–T03 complete; BR-091 FIXED)
  - Story: [`story-07-code-reviews.md`](story-07-code-reviews.md)

> **CRITICAL:** This Story Checklist is the **SINGLE SOURCE OF TRUTH** for story status and version markers.  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.7.1.3+1)`)  
> **Release Workflow Requirement:** When Release Workflow (RW) Step 4 updates this Epic document, it MUST update **ALL sections**:
>
> - Epic header `Last updated` field
> - Story Checklist (status and version markers)
> - Detailed story sections (Status, Last updated, task checkboxes)
> - Any other references to the story/task being released
>
> **Consistency Check:** After each RW, verify that Epic header, Story Checklist, and detailed sections all match.

---

## Overview

Epic 7 provides the organizational structure for all codebase maintenance and review work. This epic encompasses addressing IDE-flagged issues (errors, warnings, info), code quality standards, maintenance workflows, and continuous codebase health monitoring. It ensures that the codebase remains healthy, maintainable, and free of technical debt through systematic maintenance practices.

This epic works in conjunction with Epic 4 (Kanban Framework) to provide a complete maintenance task tracking system, ensuring that maintenance work is properly organized, prioritized, and tracked.

---

## Goals

1. **Maintain Codebase Health:** Establish systematic processes for addressing IDE-flagged issues and maintaining code quality
2. **Standardize Maintenance Workflows:** Define consistent patterns and processes for codebase maintenance tasks
3. **Enable Quality Monitoring:** Provide frameworks and tools for monitoring codebase health and quality metrics
4. **Automate Maintenance Tasks:** Develop automation and tooling to streamline maintenance work and reduce manual effort

---

## Stories

### Story 1: Codebase Maintenance Tasks

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-06-10 (E07:S01:T10 FR-059 supersession reconciliation — UKW bookkeeping)

**Goal:** Establish systematic processes for addressing IDE-flagged issues and organizing codebase maintenance work.

**Tasks:**

- **E07:S01:T01** – PERPETUAL: Address IDE-Flagged Error, Warning, and Info level problems
- **E07:S01:T02** – COMPLETE: Create maintenance task prioritization framework
- **E07:S01:T05** – PERPETUAL: Markdown Maintenance (first maintenance cycle completed v0.7.1.5+2)
- [x] **E07:S01:T06** – Implement Update Changelog Workflow (UCW) – ✅ COMPLETE (v0.7.1.7+4 – FR-057 / CMW)

**Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E07:S01:T01`, not `T01` alone).

**Forensic Marker Format:** `COMPLETE (vRC.E.S.T+B)` (e.g., `COMPLETE (v0.7.1.3+1)`). Perpetual tasks are ongoing and should be tracked with version markers for each maintenance cycle or batch of work. Task checkboxes in this detailed section must match the Story file's Task Checklist.

**Acceptance Criteria:**

- Perpetual task established for IDE-flagged issues
- Maintenance task prioritization framework documented
- Maintenance workflow processes documented
- Integration with Epic 4 (Kanban Framework) established

**Parallel Development Dependencies:**

- Epic 4 (Kanban Framework) - Uses Kanban for tracking maintenance tasks
- Epic 2 (Workflow Management) - May use workflows for maintenance automation
- *Parallel Development Candidacy:* Safe (can develop independently)

> Full story: [`story-01-codebase-maintenance-tasks.md`](story-01-codebase-maintenance-tasks.md)

---

### Story 2: Code Review Standards and Processes

**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-06-08 (v0.7.1.12+2 – Kanban documentation setup)

**Goal:** Define code review standards and processes to ensure consistent code quality and maintainability.

**Tasks:**

- [x] E07:S02:T01 – Document code review standards and guidelines - COMPLETE (v0.7.2.1+1)

- [x] E07:S02:T02 – Create code review checklist templates - COMPLETE (v0.7.2.2+1)

- [x] E07:S02:T03 – Establish code review workflow processes - COMPLETE (v0.7.2.3+1)

- [x] E07:S02:T04 – Integrate code review with Kanban framework - COMPLETE (v0.7.2.4+1)

**Acceptance Criteria:**

- Code review standards and guidelines documented
- Review checklist templates created
- Code review workflow processes established
- Integration with Kanban framework completed

**Parallel Development Dependencies:**

- Epic 4 (Kanban Framework) - Uses Kanban for tracking review tasks
- *Parallel Development Candidacy:* Safe (can develop independently)

> Full story: `docs/kanban/epics/epic-07/story-02-code-review-standards-and-processes.md`

---

### Story 3: Code Quality Metrics and Monitoring

**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-06-08 (v0.7.1.12+2 – Kanban documentation setup)

**Goal:** Enable comprehensive monitoring of codebase health and quality metrics, providing visibility into code quality trends.

**Tasks:**

- [x] E07:S03:T01 – Design code quality metrics framework - COMPLETE (v0.7.3.1+0)

- [x] E07:S03:T02 – Create code quality monitoring dashboards - COMPLETE (v0.7.3.2+0)

- [x] E07:S03:T03 – Integrate metrics with Kanban framework - COMPLETE (v0.7.3.3+0)

- [x] E07:S03:T04 – Document metrics and monitoring processes - COMPLETE (v0.7.3.4+0)

**Acceptance Criteria:**

- Code quality metrics framework designed and implemented
- Monitoring dashboards created
- Integration with Kanban framework established
- Metrics and monitoring processes documented

**Parallel Development Dependencies:**

- Epic 4 (Kanban Framework) - Uses Kanban for tracking quality work
- Epic 2 (Workflow Management) - May use workflows for metrics automation
- *Parallel Development Candidacy:* Safe (can develop independently)

> Full story: `docs/kanban/epics/epic-07/story-03-code-quality-metrics-and-monitoring.md`

---

### Story 4: Maintenance Automation and Tooling

**Status:** COMPLETE  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-06-08 (v0.7.1.12+2 – Kanban documentation setup)

**Goal:** Develop automation and tooling to streamline maintenance work and reduce manual effort.

**Tasks:**

- [x] E07:S04:T01 – Design maintenance automation requirements - COMPLETE (v0.7.4.1+0)

- [x] E07:S04:T02 – Develop maintenance automation scripts and tools - COMPLETE (v0.7.4.2+0)

- [x] E07:S04:T03 – Integrate automation with existing workflows - COMPLETE (v0.7.4.3+0)

- [x] E07:S04:T04 – Document automation and tooling usage - COMPLETE (v0.7.4.4+0)

**Acceptance Criteria:**

- Maintenance automation requirements documented
- Automation scripts and tools developed
- Integration with existing workflows established
- Automation usage documented

**Parallel Development Dependencies:**

- Epic 2 (Workflow Management) - Uses workflows for automation
- Epic 4 (Kanban Framework) - Integrates with Kanban processes
- *Parallel Development Candidacy:* Safe (can develop independently)

> Full story: `docs/kanban/epics/epic-07/story-04-maintenance-automation-and-tooling.md`

---

### Story 5: Migration UXR – Pre-Existing Kanban Structures

**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-06-08 (v0.7.1.12+2 – Kanban documentation setup)

**Goal:** Capture and operationalize user experience research for migrating pre-existing Kanban/Sprint/Issue structures to the ai-dev-kit Kanban framework.

**Tasks:**

- [ ] **E07:S05:T01 – UXR-001 intake and synthesis**  
  - Intake UXR-001 findings, extract user pain points, and summarize migration UX requirements.  
  - **Linked UXR:** `docs/kanban/fr-br/UXR-001-migration-user-experience-research.md` (GitHub issue #4).  
  - **Acceptance:** Findings synthesized; UX requirements fed into Epic 4 Story 7 tasks; recap documented in this story.

> Full story: `docs/kanban/epics/epic-07/story-05-migration-uxr-research.md`

---

### Story 6: Post-Windsurf Project Review

**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-06-08 (v0.7.1.12+2 – Kanban documentation setup)

**Goal:** Assess and remediate project state left by Windsurf's AI models. Decomposed by dimension: artifacts, versioning, kanban, commits, scripts, FR/BR/UXR docs, general docs, dependencies/tooling, config/git state.

**Tasks:**

- [x] **E07:S06:T01** – Windsurf artifact cleanup ✅ COMPLETE (v0.7.6.1+1)
- [x] **E07:S06:T10** – Review RW workflow (Windsurf impact) ✅ COMPLETE (v0.7.6.10+4)
- [x] **E07:S06:T11** – Review UKW workflow (Windsurf impact) ✅ COMPLETE (v0.7.6.11+3)
- [x] **E07:S06:T12** – Review CMW workflow (Windsurf impact) ✅ COMPLETE (v0.7.6.12+3)
- [x] **E07:S06:T13** – Review PVW workflow (Windsurf impact) ✅ COMPLETE (v0.7.6.13+3)
- [x] **E07:S06:T14** – Review ICW workflow (Windsurf impact) ✅ COMPLETE (v0.7.6.14+3)
- [x] **E07:S06:T15** – Review Intake workflow (Windsurf impact) ✅ COMPLETE (v0.7.6.15+3)
- [x] **E07:S06:T16** – Review PIR workflow (Windsurf impact) ✅ COMPLETE (v0.7.6.16+3)
- [x] **E07:S06:T17** – Retrospective BR-057 / fr-br-intake.yml YAML fix ✅ COMPLETE (v0.7.6.17+1)
- [x] **E07:S06:T02** – Version and changelog alignment ✅ COMPLETE (v0.7.6.2+2)
- [x] **E07:S06:T03** – Kanban documentation consistency ✅ COMPLETE (v0.7.6.3+1 – live SoT; E9/E18 template narrative disambiguation)
- [x] **E07:S06:T04** – Recent commit review ✅ COMPLETE (v0.7.6.4+1)
- [x] **E07:S06:T05** – Workflow script integrity ✅ COMPLETE (v0.7.6.5+1)
- [x] **E07:S06:T06** – FR/BR/UXR intake documentation quality ✅ COMPLETE (v0.7.6.6+1)
- [x] **E07:S06:T07** – General documentation and cross-reference integrity ✅ COMPLETE (v0.7.6.7+1)
- [x] **E07:S06:T08** – Dependency and tooling audit ✅ COMPLETE (v0.7.6.8+1)
- [x] **E07:S06:T09** – Config and git state validation ✅ COMPLETE (v0.7.6.9+1)
- [x] **E07:S06:T18** – Interactive installer Kanban pattern prompt clarity (UXR-007) ✅ COMPLETE (0.7.6.18+3 — RW full traceability)

**Acceptance Criteria:**

- All review tasks completed with findings documented
- Critical issues (artifacts, version drift) remediated
- Non-critical findings filed as BR/FR where appropriate

**Parallel Development Dependencies:**

- Epic 4 (Kanban Framework) – Uses kanban structure
- Epic 2 (Workflow Management) – Workflow scripts under review
- *Parallel Development Candidacy:* Safe (review is independent)

> Full story: [`story-06-post-windsurf-project-review.md`](story-06-post-windsurf-project-review.md)

---

## Dependencies

**Blocks:**

- None

**Blocked By:**

- None

**Coordinates With:**

- **Epic 4 (Kanban Framework):** Uses Kanban for tracking maintenance tasks
- **Epic 2 (Workflow Management):** May use workflows for maintenance automation
- **Epic 3 (Versioning):** Tracks maintenance work with version markers
- **Epic 6 (BR Implementation):** May convert IDE-flagged issues to Bug Reports when appropriate

---

## Risks & Mitigations

- **Risk:** Maintenance tasks may be deprioritized if not systematically tracked  
  **Mitigation:** Establish perpetual task for IDE-flagged issues and integrate with Kanban framework

- **Risk:** Lack of code review standards may lead to inconsistent code quality  
  **Mitigation:** Establish code review standards early (Story 2) and integrate with development workflow

- **Risk:** Code quality metrics may not be actionable without proper tooling  
  **Mitigation:** Develop automation and tooling (Story 4) to make metrics actionable

---

## References

- `packages/frameworks/kanban/templates/CANONICAL_EPICS.md` - Canonical epic definitions
- `packages/frameworks/kanban/examples/epic-07-Codebase-Maintenance-Example.md` - Example Epic 7 document
- `docs/kanban/epics/epic-04/epic-04.md` - Kanban Framework epic

---

Last updated: 2025-12-09 (v0.7.1.1+1 – Story 1, Task 1 created: PERPETUAL task for IDE-flagged issues)
