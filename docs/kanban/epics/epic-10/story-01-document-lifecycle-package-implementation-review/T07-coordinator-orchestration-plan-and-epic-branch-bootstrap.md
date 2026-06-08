---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T07 – Coordinator orchestration plan and epic branch bootstrap

**Task ID:** E10:S01:T07  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Epic:** E10 – Document Lifecycle Framework  
**Story:** E10:S01 – Document Lifecycle Package Implementation Review  
**Last updated:** 2026-06-06 (v0.10.1.7+2 — Wave 1 IPP planning complete)  
**Version:** v0.10.1.7+2  
**Code:** E10S01T07

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E10:S01:T07`

---

## Purpose

Establish the **coordinator layer** for E10:S01 so any new agent (including in a standalone clone) can execute the full implementation-review story without prior session context. This task owns Wave 0 bootstrap, the orchestration SoT, and sub-agent coordination instructions for T01–T06.

**Blocks:** T01–T06 IPW/implementation agents should read deliverables from this task before starting.

---

## Scope

**In scope:**

- Create and maintain [`E10S01-orchestration-plan.md`](../../../../implementation-cycles/E10S01-orchestration-plan.md) (coordinator SoT)
- Create git branch `epic/10-doc-lifecycle-framework`
- Seed `src/ai_dev_kit/version.py` to story anchor `0.10.1.0+0`
- Wire orchestration links from story doc and Epic 10 doc
- Document triage snapshot (package, precedent, dependencies, risks)
- Document standalone-repo bootstrap procedure
- Document IPW/implementation/RW wave matrix and sub-agent prompts
- File this task (T07) with full kanban wiring

**Out of scope:**

- Executing T01–T06 review deliverables (separate tasks)
- IPP authoring for T01–T06 (Wave 1 sub-agents)
- Remediation implementation (Wave 3, post-T06)
- Pushing branch to remote (operator / standalone repo setup)

---

## Triage snapshot

### Story context

| Field | Value |
| ----- | ----- |
| Story | E10:S01 — Document Lifecycle Package Implementation Review |
| Story status | IN PROGRESS |
| Goal | RC-readiness implementation review of `packages/frameworks/doc-lifecycle/` |
| Structural precedent | [E02:S13 — Workflow Management Package Implementation Review](../../epic-02/story-13-workflow-management-package-implementation-review.md) (T01–T06 complete) |
| Next story | [E10:S02 — Installation Evaluation](../story-02-document-lifecycle-package-installation-evaluation.md) (after S01) |

### Package under review

| Field | Value |
| ----- | ----- |
| Canonical root | `packages/frameworks/doc-lifecycle/` |
| Adopter mirror | `greenfield-install/packages/frameworks/doc-lifecycle/` (FR-110 parity) |
| Type | Documentation/policy only — independence 10/10 |
| Package version (README) | 1.0.0 |
| On-disk files | 13 files (README, guides, policies, integration, templates, policy-salience docs) |
| Documented but missing | `scripts/validate_lifecycle_metadata.py`, `scripts/housekeeping_scanner.py`, `workflows/doc-housekeeping-workflow.yaml` (marked **future** in PACKAGE_OVERVIEW) |

### Repo-level SoT (cross-check in T04)

- `docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md`
- `docs/architecture/standards-and-adrs/doc-lifecycle-policy.md`
- `docs/architecture/standards-and-adrs/policy-salience-schema.md`

### Branch and version bootstrap

| Item | Value | Status |
| ---- | ----- | ------ |
| Git branch | `epic/10-doc-lifecycle-framework` | ✅ Created 2026-06-06 |
| Version seed | `0.10.1.0+0` (`VERSION_EPIC=10`, `STORY=1`, `TASK=0`, `BUILD=0`) | ✅ Seeded in `src/ai_dev_kit/version.py` |
| Branch safety | `validate_branch_context.py --strict` | ✅ Passes on epic branch |
| RW on `dev` | Blocked | `dev_branch_epic: 2` in `rw-config.yaml` |
| Forensic release | `RW E10:S01:T07 --art` → expected `v0.10.1.7+1` | ☐ Pending |

### Task dependency model (T01–T06)

```
T07 (this task) ──► Wave 0 bootstrap + orchestration SoT
       │
       ├──► T01 expectations baseline ──► T02 ∥ T03 ∥ T04 ──► T05 gap log ──► T06 RC sign-off
       │
       └──► Wave 3 remediation (contingent, filed by T06)
```

### Kanban / board triage

| Issue | Severity | Action |
| ----- | -------- | ------ |
| E10:S01:T01–T06 task docs are FR-016 stubs (empty Scope/AC) | MEDIUM | T01 IPW/impl fleshes; orchestration plan defines intended AC |
| kboard E10 rows link to story doc, not task docs | LOW | Fix when T07 RW Step 7 runs |
| kboard header says Epic 10 COMPLETE; epic doc says IN PROGRESS | LOW | Reconcile on first E10 RW Step 7 |
| E10:S01 rows in Could Have (C) band | LOW | Promote to Should Have (S) on T07 RW Step 7 |
| No IPPs for T01–T06 | EXPECTED | Wave 1 IPW sub-agents |

### Gap ID convention (for T05)

Prefix: `GAP-DOCLIFE-{TYPE}-NNN` per [`gap-log-schema.md`](../../../../architecture/standards-and-adrs/gap-log-schema.md)

---

## Input

- [Story E10:S01](../story-01-document-lifecycle-package-implementation-review.md)
- [Epic 10](../Epic-10.md)
- [E02:S13 precedent](../../epic-02/story-13-workflow-management-package-implementation-review.md)
- `packages/frameworks/doc-lifecycle/` (full tree)
- [`rw-config.yaml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/rw-config.yaml)
- [Workflow initiation cheatsheet](../../../../guides/workflow-initiation-cheatsheet.md)

---

## Deliverable

1. **[`E10S01-orchestration-plan.md`](../../../../implementation-cycles/E10S01-orchestration-plan.md)** — self-contained coordinator SoT (Wave 0–3, agent prompts, artefact map, RW commands)
2. **Git branch** `epic/10-doc-lifecycle-framework` with version seed
3. **This task doc** — triage, bootstrap status, wiring
4. **Kanban wiring** — story checklist, kboard row, epic story entry

---

## Bootstrap checklist

| Step | Action | Status |
| ---- | ------ | ------ |
| B1 | Branch `epic/10-doc-lifecycle-framework` created | ✅ |
| B2 | Version `0.10.1.0+0` seeded | ✅ |
| B3 | Orchestration plan written | ✅ |
| B4 | Story doc links orchestration plan | ✅ |
| B5 | Epic 10 doc links orchestration plan | ✅ |
| B6 | T07 task doc filed (this file) | ✅ |
| B7 | Story checklist includes T07 | ✅ |
| B8 | kboard row for T07 | ✅ |
| B9 | Orchestration plan references T07 as host | ✅ |
| B10 | `RW E10:S01:T07 --art` forensic release | ✅ v0.10.1.7+1 |
| B10b | Wave 1 IPP planning (T01–T06 IPPs) | ✅ v0.10.1.7+2 |
| B11 | Operator push branch to standalone repo remote | ☐ |

---

## Standalone repo bootstrap (operator)

```bash
# After T07 RW on epic branch — push for isolated clone
git push -u origin epic/10-doc-lifecycle-framework

# New workspace
git clone -b epic/10-doc-lifecycle-framework <remote-url> ai-dev-kit-e10
cd ai-dev-kit-e10
python packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py --strict
```

**Cold-start message for coordinator agent:**

```
Track: implementation-planning — loading: docs/implementation-cycles/E10S01-orchestration-plan.md

You are the E10:S01 coordinator. Read the orchestration plan and T07 task doc.
Execute Wave 1: launch six IPW sub-agents in plan mode (T01–T06).
Stop after IPPs are written; wait for implementation authorization.
```

Full wave matrix, agent prompts, and RW commands: orchestration plan §6–§8.

---

## Acceptance Criteria

- [x] Orchestration plan exists at `docs/implementation-cycles/E10S01-orchestration-plan.md` and is self-contained for cold-start agents
- [x] Branch `epic/10-doc-lifecycle-framework` created and branch safety passes
- [x] Version seeded to `0.10.1.0+0` on epic branch
- [x] Triage snapshot documents package state, precedent, dependencies, and board hygiene issues
- [x] T07 task doc filed with Scope, Input, Deliverable, AC, bootstrap checklist
- [x] Story checklist and Epic 10 story entry include T07
- [x] kboard row wired for T07 with correct task doc link
- [x] Forensic release via `RW E10:S01:T07 --art` (version anchor `v0.10.1.7+1`)

---

## Coordinator waves (summary)

| Wave | Content | Parallelism |
| ---- | ------- | ----------- |
| 0 | Bootstrap (this task) | Sequential |
| 1 | IPW for T01–T06 | 6 sub-agents in plan mode |
| 2A | Implement T01 + RW | Gate for 2B |
| 2B | Implement T02–T04 + RW each | 3 parallel agents |
| 2C | Implement T05 + RW | Sequential |
| 2D | Implement T06 + RW | Sequential |
| 3 | Remediation per T06 backlog | Per-task |

Detail: [`E10S01-orchestration-plan.md`](../../../../implementation-cycles/E10S01-orchestration-plan.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**Expected on RW:** `v0.10.1.7+1`

---

## References

- [E10S01 orchestration plan](../../../../implementation-cycles/E10S01-orchestration-plan.md)
- [Story E10:S01](../story-01-document-lifecycle-package-implementation-review.md)
- [E02:S13 — workflow-mgt implementation review (precedent)](../../epic-02/story-13-workflow-management-package-implementation-review.md)
- [Package README](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/README.md)
- [IPW command](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ipw.md)
- [RW command](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/rw.md)
