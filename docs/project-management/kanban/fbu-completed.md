---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:20:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – FBU Completed Items

**Last Updated:** 2026-06-04 (UKW — **FR-108** archived from active fbuboard)
**Version:** v0.6.9.20+2 (**SemVer** v0.4.882+2)

> **For open FBU items, see:** [`fbuboard.md`](fbuboard.md)  
> **For MoSCOW prioritized tasks, see:** [`kboard.md`](kboard.md)  
> **For completed Kanban tasks (E/S/T), see:** [`kanban-completed.md`](kanban-completed.md)  
> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For rules and explanations, see:** [`kanban-board-guide.md`](kanban-board-guide.md)

---

## Overview

This document tracks all **completed FRs (Feature Requests), BRs (Bug Reports), and UXRs (User Experience Research)** across the AI Dev Kit project. Items are organized by type with completion dates, version markers, and references to implementing tasks for forensic tracking.

**Completion Criteria:** An FR/BR/UXR is marked COMPLETE only when:
- **Implementation is fully done** (code or docs delivered, released in a version)
- **Sign-off is obtained** (validated, accepted by the responsible party)
- **Associated tasks are completed** (if converted to Kanban tasks)

---

## 20 Most Recently Completed FR/BR/UXR Items

| ID | Type | Description | Completed | Version | Agent |
|----|------|-------------|-----------|---------|-------|
| FR-108 | FR | Install/setup error code registry and emission (**E06:S09:T20**) | 2026-06-04T17:32:25Z | v0.6.9.20+2 | RW |
| UXR-018 | UXR | Changelog directory consolidation — single pillar `docs/changelog-and-release-notes/` (**E05:S09:T12**) | 2026-06-04T14:35:00Z | v0.5.9.12+3 | RW |
| UXR-016 | UXR | Install/setup interactive feedback shows external SemVer (**E06:S09:T15**; reclassified from FR-108) | 2026-06-04T12:00:00Z | v0.6.9.15+2 | RW |
| BR-085 | BR | RW Mode C story pattern prompt infinite loop after fresh kanban (**E06:S09:T14**) | 2026-06-03T23:17:03Z | v0.6.9.14+2 | RW |
| BR-083 | BR | RW install default epic/story patterns mismatch fresh kanban (**E06:S09:T12**) | 2026-06-03T23:17:03Z | v0.6.9.14+2 | RW |
| BR-084 | BR | RW Mode C missing task_doc_pattern / wrong patterns persisted (**E06:S09:T13**) | 2026-06-03T23:17:03Z | v0.6.9.14+2 | RW |
| FR-107 | FR | Comprehensive workflow machinery code review (**E07:S07:T01**) | 2026-06-03T20:28:00Z | v0.7.7.1+1 | RW |
| BR-066 | BR | IPW Docusaurus filing for planning artifacts — Phase 3 closure (**E02:S15:T01**) | 2026-06-03T14:30:00Z | v0.2.15.1+3 | RW |
| FR-105 | FR | Dependabot and dependency security automation (**E08:S03:T06**) | 2026-06-03T16:00:00Z | v0.8.3.6+2 | RW |
| BR-077 | BR | Python 3.8+ doc contradicts repo requirement — resolved via FR-104 (**E08:S03:T05**) | 2026-06-03T15:00:00Z | v0.8.3.5+2 | RW |
| FR-104 | FR | Python minimum version policy alignment (**E08:S03:T05**) | 2026-06-03T15:00:00Z | v0.8.3.5+2 | RW |
| BR-059 | BR | UKW MoSCOW incomplete story task coverage — Part B.1 + validator (**E02:S16:T13**) | 2026-06-03T16:00:00Z | v0.2.16.3+6 | UKW |
| BR-067 | BR | RW doc-only releases default to BUILD+1 — `--doc-policy-zero` Tranche 3 (**E02:S16:T03**) | 2026-06-03T12:00:00Z | v0.2.16.3+2 | RW |
| UXR-005 | UXR | Kanban MoSCOW spacing rule + validator (**E07:S01:T09**) | 2026-06-01T18:00:00Z | v0.7.1.9+5 | IPW/RW pending |
| FR-072 | FR | Uniform repository abstract-space kanban rules — ADR-014 D2–D4 (**E04:S19:T08**, merged T07) | 2026-06-01T18:40:00Z | v0.4.19.8+2 | RW |
| FR-021 | FR | FR/BR/UXR repository stories pattern — **SUPERSEDED** by FR-072 / **E04:S19:T08** (T07 merged) | 2026-06-01T18:40:00Z | v0.4.19.8+2 | UKW Agent |
| FR-103 | FR | Agent bootstrap and task routing — single-step `AGENTS.md` (**E02:S16:T17**) | 2026-05-30T22:30:00Z | v0.2.16.17+2 | UKW Agent |
| FR-102 | FR | UKW archive completed (`UKW -c`) — ledger-before-prune (**E02:S16:T16**) | 2026-05-30T16:30:00Z | v0.2.16.16+2 | UKW Agent |
| BR-076 | BR | E7:S00 must not host concrete tasks — abstract-only detasking (**E04:S19:T10**) | 2026-05-30T13:28:56Z | v0.4.19.10+2 (fix); RW -d v0.4.19.10+3 | RW |
| FR-085 | FR | UKW optional `--rp` deep reprioritization — ADR-009, agent SoT, cheatsheet (**E02:S16:T06**) | 2026-05-30T12:54:46Z | v0.2.16.6+1 | RW |
| FR-046 | FR | RW SemVer tag when task_touch enabled — dual-mode closure (**E05:S01:T46**) | 2026-05-30T08:55:34Z | v0.5.1.46+7 | RW |

> **Reopened 2026-06-04:** **FR-046** (with **FR-045**) — registry SemVer PATCH/core collisions; active on [`fbuboard.md`](fbuboard.md) Must Have; delivery **E03:S02:T12**. Closure row retained for forensic history only.
| FR-074 | FR | Kanban intake atomic KG-R2 & semantic KG-R6 (**E05:S01:T74**) | 2026-05-29T00:00:00Z | v0.5.1.74+3 | RW |
| FR-049 | FR | Enhanced kanban-completed timestamps + recent tasks dashboard (**E05:S01:T49**) | 2026-03-11T16:20:00Z | v0.5.1.49+2 | RW |
| FR-011 | FR | Task splitting across multiple canonical epics (**E04:S08:T07**) | 2026-05-29T15:30:00Z | v0.4.8.7+1 | RW |
| BR-072 | BR | UKW completed tasks not removed from kboard — **RESOLVED** (**E06:S01:T38**) | 2026-05-12 | v0.6.6.38+1 | UKW |
| BR-065 | BR | RW Step 12.5 GitHub release parser `v0` prefix — **FIXED** (**E06:S07:T113**) | 2026-04-13 | v0.6.7.113+1 | RW |
| UXR-012 | UXR | MoSCOW state icons Set A + fallback — **COMPLETE** (**E04:S13:T07**) | 2026-05-20 | v0.4.13.7+2 | RW |
| FR-086 | FR | Canonical FBU/kanban naming — **COMPLETE** (**E04:S19:T06**) | 2026-04-26 | v0.4.19.6+5 | RW |
| UXR-008 | UXR | `kboard.md` / `fbuboard.md` naming — **COMPLETE** (**E04:S19:T06**) | 2026-04-26 | v0.4.19.6+5 | RW |
| FR-092 | FR | RW/UKW kanban consistency program — **COMPLETE** (**E02:S15:T07**) | 2026-05-19 | v0.2.15.7+9 | RW |
| FR-090 | FR | UKW row transform engine — **SUPERSEDED** by FR-092 | 2026-04-27 | v0.2.15.7+9 | FR-092 |
| FR-091 | FR | RW Step 7 self-sufficient kanban — **SUPERSEDED** by FR-092 | 2026-04-27 | v0.2.15.7+9 | FR-092 |
| FR-084 | FR | IPP post-run governance — **SUPERSEDED** by FR-092 | 2026-04-27 | v0.2.15.7+9 | FR-092 |
| FR-040 | FR | ICW workflow — **SUPERSEDED** by **FR-042** IPW | 2026-05-20 | v0.2.16.3+6 | IPW |
| FR-005 | FR | Systematic canonical E/S/T template system — story-006 corpus; closure audit (E04:S06:T01); R5 deferred | 2026-05-29 | v0.4.6.1+1 | RW |
| FR-101 | FR | Consolidate governance under `docs/governance/` — ADR-007; Waves 0–F (E07:S01:T11) | 2026-05-29 | v0.7.1.11+8 | RW |
| FR-031 | FR | Multi-agent coordination feasibility — **WON'T HAVE** (deferred; E05:S01:T31) | 2026-05-29 | v0.5.1.31+0 | Maintainer |
| FR-024 | FR | IDE/linter check before RW commit — Step 9.6 (E02:S01:T08) | 2026-05-29 | v0.2.1.8+1 | RW |
| FR-057 | FR | Update Changelog Workflow (UCW/CMW) — E07:S01:T06 | 2026-03-16 | v0.7.1.7+4 | RW |
| FR-081 | FR | Brownfield modular adopter integration — INSTALL chapter, matrices, installer messaging (E06:S09:T02) | 2026-05-29 | v0.6.9.2+2 | RW |
| FR-082 | FR | Installation canonical repo — public `RMS-Ltd/ai-dev-kit` bootstrap + rewire (E06:S09:T03) | 2026-05-28 | v0.6.9.3+2 | RW |
| FR-099 | FR | Book/epic-24 spin-off — private `hf-ai-dev-kit` + public `earlution/ai-dev-kit` (ADR-006; T03–T07) | 2026-05-26 | v0.1.4.7+2 | RW |
| FR-098 | FR | Optional ECC harness layer integration (phases 0–5; T04–T06) | 2026-05-26 | v0.6.9.6+3 | RW |
| FR-100 | FR | IPW ADR necessity checklist — Phase 5.0 gate; T1–T7 / E1–E5; policy SoT; IPP §2.5 (**E02:S16:T12**) | 2026-05-26 | v0.2.16.12+2 | RW |
| FR-096 | FR | IPW mandatory documentation phases — update/create (Phase 5) + housing (Phase 6); IPP §5–§7; ten-phase `/ipw` (**E02:S16:T11**) | 2026-05-20 | v0.2.16.11+1 | RW |
| UXR-011 | UXR | Kanban naming hygiene and directory systematic cleanup — 51 Txxx files renamed, 21 duplicate stories reconciled, duplicate tasks removed, zero-padding fixed, governance policy updated, regression validator green (**E09:S05:T04**) | 2026-05-18 | v0.9.5.4+2 | IPW |
| BR-069 | BR | kboard/fbuboard earliest `Last modified` timestamps overwritten — CLOSED via FR-092 Wave 4–8 (**E02:S15:T04**) | 2026-05-19 | v0.2.15.7+9 | UKW |
| BR-038 | BR | RW micromanagement and tool discovery — recovery journal scope shipped (**E06:S06:T63**) | 2026-05-17 | v0.6.6.63+1 | RW |
| UXR-009 | UXR | Last-modified stamp forensic integrity — CLOSED via FR-092 stamp-evidence gate (**E06:S07:T115**) | 2026-05-19 | v0.2.15.7+9 | UKW |
| BR-042 | BR | UKW agent board cleanup failure — CLOSED as duplicate of FR-090 (active-row hygiene fixed by BR-062 v0.2.1.11+2; consolidated under FR-092 meta-program) | 2026-04-27 | v0.2.15.4+5 | FR-092 Wave 1 |
| FR-089 | FR | IPW board-row traceability-churn hardening — duplicate-footer dual-agreement + divergence guardrails; task-ID tail invariants (**E02:S15:T03**) | 2026-04-21 | v0.2.15.3+2 | UKW / Maintainer |
| BR-068 | BR | Docusaurus strict MDX cannot resolve monorepo markdown links — **`portal`** strict build restored (**Strategy A**) (**E05:S09:T11**) | 2026-04-19 | v0.5.9.11+5 | RW Agent |
| FR-080 | FR | End-to-end greenfield installation process — INSTALL + orchestrator + user-docs + validators / evidence (**E06:S09:T01**) | 2026-04-19 | v0.6.9.1+8 | RW Agent |
| UXR-007 | UXR | Interactive installer Kanban pattern prompt clarity — installer UX + ICW publication alignment (**E07:S06:T18**) | 2026-04-18 | v0.7.6.18+3 | UKW Agent |
| BR-063 | BR | RW `-k` task attribution drift vs `version.py` anchor — forensic-strict guard, `--art`, version validation, tests, docs | 2026-04-07 | v0.2.1.13+2 | RW Agent |
| FR-075 | FR | ICW durable planning artifacts — repo SoT under `docs/implementation-cycles/`, policy, ICW docs, `.cursorrules` | 2026-04-01 | v0.5.1.75+1 | RW Agent |
| FR-064 | FR | Retire `shields` branch — static README badges; removed `update-badges.yml` BYOB; deleted `origin/shields` | 2026-03-30 | v0.5.1.69+1 | RW Agent |
| BR-056 | BR | RW ambiguous task identifier typo risk | 2026-03-25T12:55:31Z | v0.6.6.56+4 | RW Agent |
| BR-055 | BR | Missing Implementation Cycle Workflow (ICW) | 2026-03-12T15:35:00Z | v0.4.14.3+2 | ICW Agent |
| BR-054 | BR | Kanban Package Migration/Installation Completely Broken | 2026-03-12T13:20:00Z | v0.24.2.1+1 | Documentation Agent |
| BR-009 | BR | Installer Discoverability and Documentation | 2026-03-09T16:00:00Z | v0.6.7.104+2 | RW Agent |
| FR-051 | FR | FR/BR/UXR Prioritization Board | 2026-03-09T15:20:00Z | v0.6.7.107+1 | Documentation Agent |

---

## Backfilled Completed Intake Records

The following items are marked `Status: COMPLETE` in intake docs and are explicitly tracked here to keep canonical completion coverage comprehensive:

- **[BR-060](fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)** — RW incorrectly blocks `IN PROGRESS` tasks. Completed (v0.6.6.60+1).
- **[BR-061](fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md)** — RW explicit `E:S:T` fails pre-alignment on epic mismatch. Completed (v0.2.1.12+3).
- **[BR-062](fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md)** — Step 7 board hygiene leaves completed rows on active kboard. Completed (v0.2.1.11+2).
- **[BR-064](fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md)** — `dev` branch epic-lock enforcement blocks intended flows. Completed (v0.2.1.16+1).
- **[FR-047](fr-br/FR-047-install-logging-for-framework-dependencies.md)** — Install logging for framework dependencies. Completed (historical release lineage).
- **[FR-076](fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)** — UKW fbuboard parity and drift controls. Completed (v0.6.7.110+1).
- **[FR-079](fr-br/FR-079-install-feedback-submission-path-and-governance.md)** — Install feedback submission path and governance. Completed (v0.6.7.112+2).

---

### 2026-04-19

**BR-068 – Docusaurus strict MDX cannot resolve monorepo markdown links — production build fails**  
**Completed:** 2026-04-19 (`v0.5.9.11+5`)  
**Implementing Task:** [E05:S09:T11](epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md)  
**Completing Agent:** RW Agent  
**Resolution:** **[IPW-E05S09T11](../../implementation-cycles/IPW-E05S09T11-docusaurus-monorepo-markdown-links-br068.md)** Waves **1–4** — Strategy **A** corpus normalization; **`npm run build`** strict green; **BR-068** §Acceptance Criteria satisfied (CI gate: **`docusaurus-build.yml`**). Row removed from [`fbuboard.md`](fbuboard.md).

---

**FR-080 – End-to-end greenfield installation process**  
**Completed:** 2026-04-19 (`v0.6.9.1+8`)  
**Implementing Task:** [E06:S09:T01](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md)  
**Completing Agent:** RW Agent  
**Resolution:** Functional + non-functional requirements satisfied per **Implementation evidence** on [FR-080](fr-br/FR-080-greenfield-installation-process.md); deferrals explicit (FR-078/079 product telemetry, FR-082/T03 canonical coordinates). Row removed from [`fbuboard.md`](fbuboard.md).

---

### 2026-04-18

**UXR-007 – Interactive Installer Kanban Pattern Prompt Clarity**  
**Completed:** 2026-04-18 (`v0.7.6.18+3`)  
**Implementing Task:** [E07:S06:T18](epics/epic-07/story-06-post-windsurf-project-review/T18-interactive-installer-kanban-pattern-prompt-clarity.md)  
**Completing Agent:** UKW Agent  
**Resolution:** Implementing task **COMPLETE**; intake doc [`UXR-007`](fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md) set to **`Status: COMPLETE`**; Must Have row removed from [`fbuboard.md`](fbuboard.md) per active-board hygiene.

---

## Completed Bug Reports

### 2026-03-25

**BR-056 – RW Accepts Ambiguous Task Identifier Without Validation (Typo Risk)**  
**Completed:** 2026-03-25T12:55:31Z (v0.6.6.56+4)  
**Implementing Task:** [E06:S06:T56](epics/epic-06/story-06-feature-requests/T56-rw-ambiguous-task-identifier-typo-risk.md)  
**Completing Agent:** RW Agent  
**Resolution:** `validate_rw_task_intent.py` + RW Step 1b guard; live verification confirmed story-mismatch and epic-mismatch abort before Step 2 edits.

### 2026-03-12

**BR-055 – Missing Implementation Cycle Workflow (ICW)**  
**Completed:** 2026-03-12T15:35:00Z (v0.4.14.3+2)  
**GitHub Issue:** [#22](https://github.com/earlution/ai-dev-kit/issues/22)  
**Implementing Task:** [E04:S14:T03](epics/epic-04/story-14-kanban-framework-maintenance/T03-add-missing-implementation-cycle-workflow-icw.md)  
**Completing Agent:** ICW Agent  
**Resolution:** Complete ICW implementation with workflow generator integration, comprehensive documentation, and testing suite. ICW now available as standard workflow type following agent-driven execution pattern. Framework completeness restored with all standard workflow types available.

**BR-054 – Kanban Package Migration/Installation Completely Broken**  
**Completed:** 2026-03-12T13:20:00Z (v0.24.2.1+1)  
**GitHub Issue:** [#17](https://github.com/earlution/ai-dev-kit/issues/17)  
**Implementing Story:** [E4:S17](epics/epic-04/story-17-kanban-package-installation-evaluation.md)  
**Completing Agent:** Documentation Agent  
**Description:** Comprehensive evaluation and resolution of kanban package installation issues including migration path failures, path inflexibility, missing validation, and poor error handling  
**Impact:** Package upgraded from beta to production-ready with comprehensive testing and validation  
**Files Created:**
- [BR-054](fr-br/BR-054-kanban-package-migration-installation-completely-broken.md) - Bug report documentation

### 2026-03-09

**BR-009 – Installer Discoverability and Documentation**  
**Completed:** 2026-03-09T16:00:00Z (v0.6.7.104+2)  
**GitHub Issue:** [#14](https://github.com/earlution/ai-dev-kit/issues/14)  
**Implementing Task:** [E04:S06:T07](epics/epic-04/story-06-comprehensive-canonical-est-template-system/E04S06T07-integration-validation-report.md)  
**Completing Agent:** RW Agent  
**Description:** Fixed installer prominence and template distinction issues in kanban framework installation  
**Impact:** Users now properly guided to use interactive installer with clear template vs. actual kanban distinction  
**Files Referenced:**
- [BR-009](fr-br/BR-009-installer-discoverability-and-documentation.md) - Bug report documentation

---

## Completed Feature Requests

### 2026-03-09

**FR-051 – FR/BR/UXR Prioritization Board**  
**Completed:** 2026-03-09T15:20:00Z (v0.6.7.107+1)  
**Implementing Task:** [E06:S06:T01](epics/epic-06/story-06-feature-requests/T01-fr-br-uxr-prioritization-board.md)  
**Completing Agent:** Documentation Agent  
**Description:** Created prioritization board for FRs, BRs, and UXRs with identical structure to Kanban board  
**Impact:** Provides systematic FR/BR/UXR management with centralized visibility and prioritization  
**Files Created:**
- `fbuboard.md` - Main prioritization board
- `fbu-completed.md` - Completed items tracking (canonical path)
- Updated Kanban board and documentation integration

---

## Completed User Experience Research

*No historical UXR entries recorded outside recent dashboard yet.*

---

## Completion Process

### When an FR/BR/UXR is Completed:
1. **Implementation Complete** - All code/docs delivered and released
2. **Validation Done** - Implementation tested and accepted
3. **Task Completion** - Associated Kanban tasks marked complete
4. **Board Update** - Move from `fbuboard.md` to this completed board
5. **Documentation** - Record completion details and impact

### For FRs Converted to Tasks:
- Track both FR completion and implementing task completion
- Reference the specific task(s) that implemented the FR
- Note the version where the implementation was released

### For BRs:
- Record the fix implementation and testing results
- Note the version where the bug was resolved
- Reference any associated tasks that addressed the bug

### For UXRs:
- Document research findings and recommendations
- Note any implementation changes based on research
- Reference follow-up tasks or actions taken

---

## Historical Reference

### Completed Items by Implementation:
- **FR-051** → **E06:S06:T01** → **v0.6.7.107+1** - FR/BR/UXR Prioritization Board

### Completion Patterns:
- **FR → Task Flow:** Feature Requests typically convert to Kanban tasks before implementation
- **Direct Implementation:** Some FRs/BRs may be implemented directly without task conversion
- **Research Integration:** UXR items often inform multiple subsequent FRs and tasks

---

## Integration with Kanban System

### Cross-Reference System:
- **FR/BR/UXR Documents** → **Kanban Tasks** → **Implementation** → **Completion**
- Each completed item references its implementing task(s)
- Kanban tasks reference their originating FR/BR/UXR documents

### Workflow Integration:
- **Intake Workflow** creates FR/BR/UXR documents
- **Task Creation** converts FR/BR/UXRs to Kanban tasks (when appropriate)
- **Implementation** completes the task and delivers the feature/fix
- **Completion Tracking** records the final completion in this document

---

## Usage Guidelines

### For Adding Completed Items:
1. **Verify Completion** - Ensure implementation is fully complete and released
2. **Gather Details** - Collect completion date, version, and implementing task info
3. **Document Impact** - Describe what was implemented and its impact
4. **Update Board** - Remove from `fbuboard.md` and add to this completed board
5. **Cross-Reference** - Ensure bidirectional references between FR/BR/UXR and tasks

### For Reference:
1. **Look Up Completed Items** - Use this document to find completed FR/BR/UXRs
2. **Track Implementation History** - See which tasks implemented which FR/BR/UXRs
3. **Analyze Patterns** - Review completion patterns for process improvement
4. **Avoid Duplication** - Check completed items before creating similar FR/BR/UXRs

---

*This document provides historical tracking and reference for completed FR/BR/UXR items, ensuring complete lifecycle visibility from intake through completion.*
