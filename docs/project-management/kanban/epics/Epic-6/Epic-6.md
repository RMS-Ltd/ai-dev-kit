---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T14:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6: Framework Management and Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-05  
**Last updated:** 2026-05-26 (v0.6.9.5+1 – Story 9 Task 5 complete)
**Branch:** `epic/6-framework-management`  
**Version Schema:** `0.6.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist
- [x] **E6:S00 – Abstract Space (Epic-Level)** - ABSTRACT SPACE (v0.6.0.0+0 – Epic-level abstract space only, no tasks)
  - Story: [`Story-000-br-repo.md`](Story-000-br-repo.md)
  - **Note:** S00 is Epic-level abstract space only. Repository tasks migrated to S01 (E9:S01:T08).






- [x] **E6:S01 – BR Repo (PERPETUAL)** - IN PROGRESS (PERPETUAL - v0.5.1.34+2 – T36: Bug fix: Fixed RW Step 7 board update path resolution and MoSCOW section updates)
  - Story: [`Story-001-br-repo.md`](Story-001-br-repo.md)
  - **Note:** S01 is the repository story (migrated from S00). S01 omitted from board displays (UX optimization).






- [x] **E6:S02 – Framework Version Management** - ✅ COMPLETE (v0.6.2.5+1, migrated from v0.6.1.5+1 – All tasks complete: Framework versioning strategy, release processes, compatibility tracking, dependency architecture, and version tagging strategy)
  - Story: [`Story-002-framework-version-management.md`](Story-002-framework-version-management.md)
  - Tasks: T01 ✅ COMPLETE (v0.6.2.1+1 - Framework versioning strategy), T02 ✅ COMPLETE (v0.6.2.2+1 - Framework release processes), T03 ✅ COMPLETE (v0.6.2.3+1 - Framework compatibility tracking), T04 ✅ COMPLETE (v0.6.2.1+2 - Framework dependency architecture), T05 ✅ COMPLETE (v0.6.2.5+1 - Framework version tagging strategy)
  - **Note:** Renumbered from S01 to S02 as part of repository story migration (E9:S01:T08).






- [x] **E6:S03 – Framework Update and Migration** - ✅ COMPLETE (v0.6.3.3+1, migrated from v0.6.2.3+1 – All active tasks complete: Framework update procedures, migration guide, backward compatibility policy, and auto-update mechanisms created)
  - Story: [`Story-003-framework-update-and-migration.md`](Story-003-framework-update-and-migration.md)
  - Tasks: T01 ✅ COMPLETE (v0.6.3.1+1 - Framework update procedures), T02 ✅ COMPLETE (v0.6.3.2+1 - Framework migration guide), T03 ✅ COMPLETE (v0.6.3.3+1 - Framework backward compatibility policy), T05 ✅ COMPLETE (v0.6.3.5+1 - Framework auto-update mechanisms), T04 SUPERSEDED (by E6:S08 - ai-dev-kit CLI Tool)
  - **Note:** Renumbered from S02 to S03 as part of repository story migration (E9:S01:T08).






- [x] **E6:S04 – Framework Health Monitoring** - ✅ COMPLETE (v0.6.4.3+1, migrated from v0.6.3.3+1 – All tasks complete: Framework health metrics defined, monitoring tools implemented, dashboard built)
  - Story: [`Story-004-framework-health-monitoring.md`](Story-004-framework-health-monitoring.md)
  - Tasks: T01 ✅ COMPLETE (v0.6.4.1+1 - Framework health metrics), T02 ✅ COMPLETE (v0.6.4.2+1 - Framework health monitoring tools), T03 ✅ COMPLETE (v0.6.4.3+1 - Framework health dashboard)
  - **Note:** Renumbered from S03 to S04 as part of repository story migration (E9:S01:T08).






- [ ] **E6:S05 – Bug Reports** - IN PROGRESS (Perpetual - v0.6.5.2+1, migrated from v0.6.4.2+1 – Perpetual story: Bug tracking, never completes)
  - Story: [`Story-005-bug-reports.md`](Story-005-bug-reports.md)
  - Tasks: T01 ✅ COMPLETE, T02 ✅ COMPLETE
  - **Note:** This is a perpetual maintenance story. New bug reports will create new tasks. Story remains IN PROGRESS even when all current tasks are complete. Renumbered from S04 to S05 as part of repository story migration (E9:S01:T08).






- [ ] **E6:S06 – Feature Requests** - IN PROGRESS (Perpetual - v0.6.6.63+2; T57 complete repo-side BR-039; T58 all-mode `--art` support; T63 RW Recovery Journal and Rollback Contract shipped)
  - Story: [`Story-006-feature-requests.md`](Story-006-feature-requests.md)
  - Tasks: T03 ✅ COMPLETE (v0.6.6.3+2 - Apple SDK License Blocking Issue Investigation), T48 ✅ COMPLETE (v0.6.6.3+2 - ICW Task Identifier Argument), T56 ✅ COMPLETE (BR-056 – validate_rw_task_intent + Step 1b; verified 2026-03-25; v0.6.6.56+4), T57 ✅ COMPLETE (`RW -k` v0.6.6.57+5 / v0.4.704+5 — BR-039 repo), T58 ✅ COMPLETE (v0.6.6.58+2 - all-mode RW --art support + follow-up cleanup), T63 ✅ COMPLETE (v0.6.6.63+2 - RW recovery journal and rollback contract)
  - **Note:** This is a perpetual maintenance story. New feature requests will create new tasks. Story remains IN PROGRESS even when all current tasks are complete. Renumbered from S05 to S06 as part of repository story migration (E9:S01:T08).






- [ ] **E6:S07 – ADK Implementation Analysis and Package Management** - IN PROGRESS (v0.6.7.111+1)
  - Story: [`Story-007-adk-implementation-analysis-and-package-management.md`](Story-007-adk-implementation-analysis-and-package-management.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE (v0.6.7.1+1), T02 ✅ COMPLETE (v0.6.7.2+1), T03 ✅ COMPLETE (v0.6.7.3+1 - Feedback mechanism design, user guide, and template created), T06 ✅ COMPLETE (v0.6.7.6+20), T07 ✅ COMPLETE (v0.6.7.7+6), T09 ✅ COMPLETE (v0.6.7.9+1), T04 ✅ COMPLETE (v0.6.7.10+17 - FR-024 IDE/Linter check), T11 ✅ COMPLETE (v0.6.7.11+4 - Phase 6 complete: Initial archival, ALL PHASES COMPLETE), T13 ✅ COMPLETE (v0.6.7.13+2 - All phases complete: CMW perpetual task pattern canonicalized), T14 ✅ COMPLETE (v0.6.7.14+1 - CMW documentation added to package README), T15 ✅ COMPLETE (v0.6.7.15+1 - Implementation complete: Awareness documentation created and framework guidance updated), T16 ✅ COMPLETE (v0.6.7.16+1 - All phases complete: Step 3.5 added to CMW, ordering fixed before archival), T05 ✅ COMPLETE (v0.6.7.5+1 - Feedback mechanism implementation complete), T111 IN PROGRESS (v0.6.7.111+1 – FR-078 install event contract + validate-install-log; AC verification pending), T101 IN PROGRESS (Perpetual - v0.6.7.101+43 – RW -k: BR-061 board disambiguation + cross-wire normalization), T102 IN PROGRESS (Perpetual - v0.6.7.102+6 – Perpetual docs update: runbooks, policy), T103 IN PROGRESS (Perpetual - v0.6.7.103+4 – UKW comprehensive-by-default, workflow docs)
  - **Note:** Renumbered from S06 to S07 as part of repository story migration (E9:S01:T08).






- [x] **E6:S08 – ai-dev-kit CLI Tool** - COMPLETE ✅ (v0.6.8.13+1, migrated from v0.6.7.13+1 – T01-T13 complete: Architecture, commands, backend abstraction, all four backends, configuration management, error handling, migration utilities, remove command, documentation, testing, validation, PyPI packaging)
  - Story: [`Story-008-ai-dev-kit-cli-tool.md`](Story-008-ai-dev-kit-cli-tool.md)
  - Tasks: T00 ✅ COMPLETE, T01-T13 ✅ COMPLETE (CLI tool implementation: architecture, commands, backends, config, migration, testing, packaging - ALL COMPLETE)
  - **Feature Request:** [FR-030](../../fr-br/FR-030-ai-dev-kit-cli-tool.md)
  - **Note:** Renumbered from S07 to S08 as part of repository story migration (E9:S01:T08).



- [ ] **E6:S09 – AI Dev Kit installation and adopter integration** - IN PROGRESS (v0.6.9.0+0 — FR-080 greenfield, FR-081 brownfield, FR-082 canonical repo alignment)
  - Story: [`Story-009-ai-dev-kit-installation-and-adopter-integration.md`](Story-009-ai-dev-kit-installation-and-adopter-integration.md)
  - Tasks: **T01** TODO ([FR-080](../../fr-br/FR-080-greenfield-installation-process.md)), **T02** TODO ([FR-081](../../fr-br/FR-081-brownfield-modular-adopter-integration.md)), **T03** TODO ([FR-082](../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md))

---

## Overview

Epic 6 owns the **Framework Management and Maintenance** processes for the ai-dev-kit repository. This epic ensures that all framework packages remain current, well-maintained, and properly versioned.

**Vision:** Transform frameworks from copy-paste packages to **reusable, auto-updating dependencies** that can be installed and updated automatically across projects. Frameworks will support multiple dependency management strategies (Git submodules, package managers, CLI tool) enabling seamless updates when frameworks are improved.

---

## Goals

1. **Establish Framework Version Management**
   - Define framework versioning strategy
   - Create framework release processes
   - Establish framework compatibility tracking

2. **Implement Framework Update and Migration**
   - Create framework update procedures
   - Build migration guides and tools
   - Establish backward compatibility policies

3. **Build Framework Health Monitoring**
   - Create framework health metrics
   - Implement health monitoring tools
   - Build framework health dashboards

---

## Stories (Initial)

### Story 1: Framework Version Management

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-05-26 (v0.6.9.5+1 – Story 9 Task 5 complete)

**Goal:**  
Establish version management processes for framework packages.

**Tasks:**
- [x] E6:S01:T01 – Define framework versioning strategy ✅ COMPLETE (v0.6.1.1+1)
- [x] E6:S01:T02 – Create framework release processes ✅ COMPLETE (v0.6.1.2+1)
- [x] E6:S01:T03 – Establish framework compatibility tracking ✅ COMPLETE (v0.6.1.3+1)
- [x] E6:S01:T04 – Design framework dependency architecture ✅ COMPLETE (v0.6.1.1+2)
- [x] E6:S01:T05 – Create framework version tagging strategy ✅ COMPLETE (v0.6.1.5+1)

**Story:** [`Story-001-framework-version-management.md`](Story-001-framework-version-management.md)

---

### Story 2: Framework Update and Migration

**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-05-26 (v0.6.9.5+1 – Story 9 Task 5 complete)

**Goal:**  
Implement processes for updating and migrating framework packages.

**Tasks:**
- [x] E6:S02:T01 – Create framework update procedures ✅ COMPLETE (v0.6.2.1+1)
- [x] E6:S02:T02 – Build migration guides and tools ✅ COMPLETE (v0.6.2.2+1)
- [x] E6:S02:T03 – Establish backward compatibility policies ✅ COMPLETE (v0.6.2.3+1)
- [ ] E6:S02:T04 – Build framework update CLI tool (SUPERSEDED by E6:S07)
- [x] E6:S02:T05 – Create auto-update mechanisms ✅ COMPLETE (v0.6.2.5+1)

**Story:** [`Story-002-framework-update-and-migration.md`](Story-002-framework-update-and-migration.md)

---

### Story 3: Framework Health Monitoring

**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-05-26 (v0.6.9.5+1 – Story 9 Task 5 complete)

**Goal:**  
Build monitoring and health tracking for framework packages.

**Tasks:**
- [x] E6:S03:T01 – Create framework health metrics ✅ COMPLETE (v0.6.3.1+1)
- [x] E6:S03:T02 – Implement health monitoring tools ✅ COMPLETE (v0.6.3.2+1)
- [x] E6:S03:T03 – Build framework health dashboards ✅ COMPLETE (v0.6.3.3+1)

**Story:** [`Story-003-framework-health-monitoring.md`](Story-003-framework-health-monitoring.md)

---

## Dependencies

**Blocks:**
- Future framework-dependent work

**Blocked By:**
- None

**Coordinates With:**
- Epic 5 (Documentation Management) - Framework documentation
- Epic 7 (Examples & Adoption) - Framework usage examples

---

## References

- `docs/project-management/kanban/README.md`
- `packages/frameworks/`

