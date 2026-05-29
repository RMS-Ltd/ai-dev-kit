---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1: FR Repo (HISTORICAL REGISTRY - DEPRECATED FOR NEW INTAKE)

**Status:** IN PROGRESS (HISTORICAL REGISTRY)
**Priority:** HIGH  
**Last updated:** 2026-05-15 (E5:S01:T35 COMPLETE — FR-035 task template cross-wiring; E5:S01:T56 COMPLETE — FR-056 workflow docs standardization)
**Estimated Effort:** N/A (Perpetual repository)  
**Started:** 2026-01-16  
**Completed:** N/A (Perpetual - never completes)  
**Version:** v0.5.1.75+1
**Code:** E5S01

**Story Type:** Repository (HISTORICAL REGISTRY)  
**Build Warning Suppression:** true  
**Explanation:** This story now serves as a historical FR anchor registry. Under FR-072 Approach D, new intake should not create net-new primary tasks here; use semantic host-story placement and keep this story for legacy traceability.

**Note:** This story was migrated from S00 to S01 as part of the repository story abstract space resolution (E9:S01:T08). S00 is now Epic-level abstract space only.

---

## Task Checklist

> **Migration state:** Historical registry only. Do not add new primary intake tasks here.
> **Traceability:** FR-001 = E5:S01:T01, FR-002 = E5:S01:T02, etc.
> **Abstract Space:** v0.5.1.0+0 (repository story), v0.5.1.1+0 (first FR), v0.5.1.2+0 (second FR), etc.

- [ ] **E5:S01:T21 – FR/BR/UXR Repository Stories (S01 pattern)** - TODO (MEDIUM — **v0.5.1.21+0** intake; reconcile **FR-021** with **E7:S00** via **T72**) - [Task Document](Story-001-fr-repo/T21-fr-br-uxr-repository-stories.md) | [FR-021](../../fr-br/FR-021-fr-br-uxr-repository-stories.md)
- [ ] **E5:S01:T31 – Multi-Agent Coordination Feasibility Investigation** - TODO (C priority) - [Task Document](Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | [FR-031](../../fr-br/FR-031-multi-agent-coordination-feasibility-investigation.md)
- [ ] **E5:S01:T32 – Release Candidate Readiness Gap Analysis** - TODO (MEDIUM — **v0.5.1.32+0** **`RW -k`**) - [Task Document](Story-001-fr-repo/T32-release-candidate-readiness-gap-analysis.md) | [FR-032](../../fr-br/FR-032-release-candidate-readiness-gap-analysis.md)
- [x] **E5:S01:T34 – UKW Granular Control and Use Case Flags** - ✅ COMPLETE (v0.5.1.34+1 – Implementation complete: UKW granular control via flags and syntax parser) - [Task Document](Story-001-fr-repo/T34-ukw-granular-control-and-use-case-flags.md) | [FR-034](../../fr-br/FR-034-ukw-granular-control-and-use-case-flags.md)
- [x] **E5:S01:T35 – Task Template Cross-Wiring Section** - ✅ COMPLETE (v0.5.1.35+1 — TASK_TEMPLATE.md enhanced with bidirectional wiring guidance, relationship types, examples) - [Task Document](Story-001-fr-repo/T35-task-template-cross-wiring-section.md) | [FR-035](../../fr-br/FR-035-task-template-cross-wiring-section.md)
- [x] **E5:S01:T56 – Standardize Packaged Workflow Documentation and Instructions** - ✅ COMPLETE (v0.5.1.56+1 — validator fixed, release-workflow README created, 9 README link repairs, ICW compliance) - [Task Document](Story-001-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions.md) | [FR-056](../../fr-br/FR-056-standardize-packaged-workflow-documentation-and-instructions.md)
- [x] **E5:S01:T36 – RW Update Kanban Board on Task Completion** - ✅ COMPLETE (v0.5.1.36+1 – Implementation complete: Kanban board updates added to RW Step 7) - [Task Document](Story-001-fr-repo/T36-rw-update-kanban-board-on-task-completion.md) | [FR-040](../../fr-br/FR-040-rw-update-kanban-board-on-task-completion.md)
- [x] **E5:S01:T37 – Kanban Policy Task Prioritisation and Queue/Stack** ✅ COMPLETE (v0.5.1.37+3 – Policy alignment: implementation cycle, changelog/IDE/git reminders) - [Task Document](Story-001-fr-repo/T37-kanban-policy-task-prioritisation-queue-stack.md) | [FR-037](../../fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md)
- [x] **E5:S01:T38 – RW Step 7 Scoped Kanban Sync (UKW Mode)** - ✅ COMPLETE (v0.5.1.38+1 – FR-038 documentation: scoped UKW Step 7, invocation_context, governance; FR-061 → T64 collision fix) - [Task Document](Story-001-fr-repo/T38-rw-step-7-scoped-kanban-sync-ukw-mode.md) | [FR-038](../../fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- [ ] **E5:S01:T39 – AI Dev Kit Project Review and Legacy Clean-Up** - IN PROGRESS (v0.5.1.39+3 – Legacy clean-up: SoT refs, scripts, adopter docs) - [Task Document](Story-001-fr-repo/T39-ai-dev-kit-project-review-and-legacy-cleanup.md) | [FR-039](../../fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [ ] **E5:S01:T43 – UKW Gap Discovery (TODO Tasks and Unfiled FR/BR)** - TODO (HIGH priority, v0.5.1.43+1 – Task created) - [Task Document](Story-001-fr-repo/T43-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | [FR-043](../../fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)
- [ ] **E5:S01:T44 – RW Temporary Execution Log for Recovery and Forensics** - TODO (MEDIUM priority, v0.5.1.44+1 – Task created) - [Task Document](Story-001-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md) | [FR-044](../../fr-br/FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md)
- [ ] **E5:S01:T45 – ADR-002 Task-Touch Derived Mapping (Kanban → SemVer)** - TODO (HIGH priority) - [Task Document](Story-001-fr-repo/T45-adr-002-task-touch-derived-mapping.md) | [FR-045](../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md)
- [ ] **E5:S01:T46 – Release Workflow Uses SemVer Tag When `task_touch` Enabled** - TODO (HIGH priority) - [Task Document](Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md) | [FR-046](../../fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
- [x] **E5:S01:T47 – Install Logging for Framework Dependencies** - ARCHIVED (historical FR anchor; superseded by Epic 6 execution in T111/T112) - [Task Document](Story-001-fr-repo/T47-install-logging-for-framework-dependencies.md) | [FR-047](../../fr-br/FR-047-install-logging-for-framework-dependencies.md)
- [x] **E5:S01:T48 – ICW Task Identifier Argument** - ✅ COMPLETE (v0.5.1.48+1 – Implementation complete: ICW requires task identifier argument with clear E/S/T numbering when called in planning mode) - [Task Document](Story-001-fr-repo/T48-icw-task-identifier-argument.md) | [FR-048](../../fr-br/FR-048-icw-task-identifier-argument.md)
- [ ] **E5:S01:T49 – Enhanced kanban-completed.md with Timestamps and Recent Tasks Tracking** - TODO (HIGH priority) - [Task Document](Story-001-fr-repo/T49-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md) | [FR-049](../../fr-br/FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md)
- [ ] **E5:S01:T62 – GitHub Release Installation Experience** - TODO (HIGH priority) - [Task Document](Story-001-fr-repo/T62-github-release-installation-experience.md) | [FR-062](../../fr-br/FR-062-github-release-installation-experience.md)
- [x] **E5:S01:T63 – RW Task Argument Requirement** - ✅ COMPLETE (v0.5.1.63+1 – FR-060: strict mandatory task token, validate_rw_task_complete.py, .cursorrules + docs) - [Task Document](Story-001-fr-repo/T63-rw-task-argument-requirement.md) | [FR-060](../../fr-br/FR-060-rw-task-argument-requirement.md)
- [x] **E5:S01:T64 – Add Workflow Section to Project README** - ✅ COMPLETE (v0.5.1.64+1 – FR-061: README Workflows section, 11 registry workflows, Cursor triggers, vwmp links; README body restored) - [Task Document](Story-001-fr-repo/T64-readme-workflow-section.md) | [FR-061](../../fr-br/FR-061-readme-workflow-section.md)
- [x] **E5:S01:T65 – Align Workflow Mgt README With Registry Workflow Count** - ✅ COMPLETE (v0.5.1.65+2 — workflow mgt README **11** + `workflow-registry.yaml` SoT; removes phantom Documentation Workflow) - [Task Document](Story-001-fr-repo/T65-align-workflow-mgt-readme-with-workflow-registry-count.md)
- [x] **E5:S01:T66 – Cursorrules vs Packaged RW Trigger Section Parity** - ✅ COMPLETE (v0.5.1.66+2 — parity doc, excerpt 1b/1c/1d todos + FR citations, root `.cursorrules` link; +1 was RW-k) - [Task Document](Story-001-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity.md)
- [x] **E5:S01:T67 – Adopter Install Docs — RW Task Token (FR-060)** - ✅ COMPLETE (v0.5.1.67+2 — INSTALL + installation/usage/FAQ/troubleshooting; workflow mgt README; PACKAGE_INSTALLATION_GUIDE; +1 was RW-k) - [Task Document](Story-001-fr-repo/T67-adopter-install-docs-rw-task-token.md)
- [x] **E5:S01:T68 – Packaged Frameworks — Consumer Paths and Versioning Hygiene** - ✅ COMPLETE (v0.5.1.68+2 — `rw-validators-consumer-layout.md`; workflow mgt + packages README; numbering + kanban README; +1 was RW-k) - [Task Document](Story-001-fr-repo/T68-packaged-frameworks-consumer-paths-and-versioning.md)
- [x] **E5:S01:T69 – Retire `shields` branch (private repo badges, FR-064)** - ✅ COMPLETE (v0.5.1.69+1 — removed `update-badges.yml` BYOB; README static badges; deleted `origin/shields`) - [Task Document](Story-001-fr-repo/T69-shields-branch-private-repo-fr-064.md) | [FR-064](../../fr-br/FR-064-shields-branch-private-repo-badges.md)
- [ ] **E5:S01:T72 – Uniform Repository vs Abstract-Space Kanban Rules** - TODO (HIGH priority — **v0.5.1.72+0** intake; governance: evaluate approaches, decide **S00**/repository model, reconcile **FR-021** vs **E7:S00** UXR) - [Task Document](Story-001-fr-repo/T72-uniform-repository-abstract-space-kanban-rules.md) | [FR-072](../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)
- [x] **E5:S01:T73 – FR/BR/UXR Board: Open ∧ Taskless Intake Execution Plan** ✅ COMPLETE (v0.5.1.74+2 narrative closure; historical anchor, successor governance on **E4:S19:T06**) — **FR-073**; Phase B/C filed (**T43**, **T109**, **E7:S00** anchors, board MoSCOW) - [Task Document](Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md) | [FR-073](../../fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md) | [E4:S19:T06](../Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md)
- [x] **E5:S01:T74 – Kanban Intake: Atomic KG-R2 & Semantic KG-R6** ✅ COMPLETE (v0.5.1.74+1 … **+3** reconciliation) — **FR-074**; governance + guides + skill + workflow + board + **epic/6** canonical **T57**/**T109** alignment - [Task Document](Story-001-fr-repo/T74-kanban-intake-atomic-kg-r2-kg-r6-governance.md) | [FR-074](../../fr-br/FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance.md)
- [x] **E5:S01:T75 – ICW durable planning artifacts in the documentation system** - ✅ COMPLETE (**v0.5.1.75+1** — **RW E5:S01:T75**; **FR-075**) — policy + ICW docs + `.cursorrules` + `implementation-cycles` README - [Task Document](Story-001-fr-repo/T75-icw-durable-planning-artifacts-documentation-system.md) | [FR-075](../../fr-br/FR-075-icw-durable-planning-artifacts-documentation-system.md)

---

## Overview

This is the **Feature Request Repository** (FR Repo) for Epic 5. All Feature Requests (FRs) are tracked as tasks in this repository story, establishing perfect 1:1 traceability between FR numbers and task numbers.

**Repository Pattern:**
- FR-001 → E5:S01:T01 (abstract space: v0.5.1.1+0)
- FR-002 → E5:S01:T02 (abstract space: v0.5.1.2+0)
- FR-003 → E5:S01:T03 (abstract space: v0.5.1.3+0)
- And so on...

**Bidirectional Traceability:**
- FR-001 → E5:S01:T01 → v0.5.1.1+0
- E5:S01:T01 → FR-001
- v0.5.1.1+0 → E5:S01:T01 → FR-001

**Migration Note:**
- This story was migrated from S00 to S01 as part of the repository story abstract space resolution (E9:S01:T08).
- Previous versions used S00 (e.g., FR-031 = E5:S00:T31 = v0.5.0.31+0).
- New versions use S01 (e.g., FR-031 = E5:S01:T31 = v0.5.1.31+0).

---

## Goals

- [x] Repository story created (PERPETUAL)
- [x] Abstract space established (v0.5.1.0+0)
- [x] Traceability pattern documented (FR-001 = E5:S01:T01)
- [x] Migrated from S00 to S01 (E9:S01:T08)
- [ ] Intake workflow assigns FRs to S01:Txx
- [ ] Board display logic omits S01 from epic checklists (UX optimization)

---

## Repository Pattern

### Traceability Mapping

**Feature Request → Task Mapping:**
- Each FR gets assigned to the next available task number in this repository story
- FR-001 = E5:S01:T01
- FR-002 = E5:S01:T02
- FR-003 = E5:S01:T03
- Pattern continues indefinitely

**Version Mapping:**
- Repository story: v0.5.1.0+0 (story-level abstract space)
- First FR: v0.5.1.1+0 (E5:S01:T01)
- Second FR: v0.5.1.2+0 (E5:S01:T02)
- Third FR: v0.5.1.3+0 (E5:S01:T03)

**Intake Workflow Integration:**
- When FR-001 is filed, intake workflow assigns it to E5:S01:T01
- Intake workflow then analyzes FR-001 content and assigns implementation work to appropriate epic/story
- Traceability bridge: E5:S01:T01 → Implementation work (e.g., E12:S03:T05)

---

## PERPETUAL State

**Status:** IN PROGRESS

**Characteristics:**
- Repository stories never complete
- Excluded from completion analytics
- Omitted from epic checklist displays in board views (UX optimization)
- Still tracked internally in Epic 5 document

**Rationale:**
- Repository stories are containers, not work units
- They grow indefinitely (FR-001 through FR-999+)
- Completion is not meaningful for repositories
- Board display omission reduces clutter (100+ tasks in S01)

---

## Board Display

**Note:** This story (E5:S01) is **omitted from epic checklist displays** in board views to reduce clutter. It is still tracked internally in the Epic 5 document.

**Display Rules:**
- Epic 5 Story Checklist: S01 omitted from board views
- Epic 5 document: S01 included in internal Story Checklist
- Kanban board: S01 not shown in Epic 5 section
- Quick view board: S01 not shown in Epic 5 section

---

## Meta-Grouping Support

**Meta-Grouping Pattern:**
- Implementation stories can reference repository tasks for grouping
- Example: E5:S02 "Authentication Features" → References: E5:S01:T05, T12, T23
- Task numbers only (no FR numbers in meta-grouping)
- FR traceability via task if needed

---

## Dependencies

**Related Work:**
- **E4:S12:** FR/BR/UXR Repository Stories (S00 Pattern) - Story that created this repository pattern
- **FR-021:** FR/BR/UXR Repository Stories (S00 Pattern) - Feature request
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs - Abstract space concept
- **E2:S11:** Intake Workflow Automation - Intake workflow integration
- **E4:S02:** FR/BR Intake to Tasks - Intake foundation
- **E9:S01:T08:** Repository Story Abstract Space Contradiction - Migration that moved this from S00 to S01

---

## References

- **Epic 5:** `docs/project-management/kanban/epics/Epic-5/Epic-5.md`
- **E4:S12:** `docs/project-management/kanban/epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md`
- **FR-021:** `docs/project-management/kanban/fr-br/FR-021-fr-br-uxr-repository-stories.md`
- **FR-018:** `docs/project-management/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **E9:S01:T08:** `docs/project-management/kanban/epics/Epic-9/Story-001-rc-readiness-gap-analysis/T08-repository-story-abstract-space-contradiction.md`

---

## Notes

- This repository story is PERPETUAL and will never be marked as COMPLETE
- Tasks in this repository are created automatically by the intake workflow
- Each FR gets a unique task number (T01, T02, T03, etc.)
- Version numbers follow story-level abstract space pattern (v0.5.1.1+0, v0.5.1.2+0, etc.)
- Board display omission is intentional (UX optimization)
- **Migration:** This story was migrated from S00 to S01 as part of repository story abstract space resolution (E9:S01:T08). S00 is now Epic-level abstract space only.

---

