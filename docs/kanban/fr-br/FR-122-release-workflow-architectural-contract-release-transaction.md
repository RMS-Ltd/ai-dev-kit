---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-09T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-122: Release Workflow — Architectural Contract & Release Transaction (meta)

**Type:** Feature Request (FR) — META  
**ID:** FR-122  
**Submitted:** 2026-06-09  
**Submitted By:** User (RW architecture experiment after `0.6.9.26+2` split-brain SemVer release)  
**Priority:** CRITICAL  
**Severity:** CRITICAL  
**Status:** IN PROGRESS (Wave 5 orchestrator implemented — sign-off / 10-run streak next)

**Implementing Task:** [E02:S01:T30](../epics/epic-02/story-01-rw-agent-execution-and-docs/T30-rw-architectural-contract-release-transaction-fr122.md)  
**IPP:** [IPP-E02S01T30](../../implementation-cycles/IPP-E02S01T30-rw-architectural-contract-release-transaction.md)

**Related:** [FR-049](FR-049-canonical-rw-step-list-single-source-of-truth.md) · [FR-060](FR-060-rw-task-argument-requirement.md) · [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) · [FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md) · [FR-120](FR-120-semver-allocation-authority-transactional-mapping-black-box.md) · [FR-046](FR-046-rw-semver-tag-task-touch-mode.md) · [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) · [UXR-024](UXR-024-rw-local-release-default-no-push-batch-operator-push.md) · [ADR-011](../../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md) · [ADR-002](../../architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md)

---

## Summary

Define a **single architectural contract** for the Release Workflow (RW): what a release *is*, what must be true before and after commit/tag, and how versioning, kanban, validators, and git publish form one **atomic release transaction**. RW grew from an 11-step fynd.deals extract into a 13-step agent workflow with 30+ blocking gates added reactively ([FR-060](FR-060-rw-task-argument-requirement.md), [BR-056](BR-056-rw-ambiguous-task-identifier-typo-risk.md), [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md), [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md), [FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md), [FR-120](FR-120-semver-allocation-authority-transactional-mapping-black-box.md), …) without an initial IPW. This meta-FR owns **release outcome guarantees** and absorbs semver/tag/collision-class failures (including allocator DB truncation and git-tag namespace drift).

**Precedent:** Same program shape as [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) — contract + gap matrix + incremental waves. **Not** a greenfield RW v2 or deterministic script replacement.

---

## Problem Statement

### 1. Accretion without architecture

RW is specified in four competing layers:

- Agent prose (`.cursorrules`, `release-workflow-agent-execution.md` with legacy step numbers)
- Canonical step list (`canonical-rw-steps.yaml`)
- Per-concern FRs (versioning, kanban, stamps, CI parity, task token, …)
- Ad-hoc validator scripts (each added after an incident)

No document answers: *"What are the invariants of a valid release?"*

### 2. Split-brain releases (incident: `0.6.9.26+2`)

A release can end with:

| Surface | State |
| ------- | ----- |
| `version.py` | Updated |
| README / CHANGELOG | Wrong SemVer (`v0.4.11+2`) |
| `.adk/release-state.db` | Truncated (counter ~10) or correct (1095+) |
| Git tags | Internal `v0.6.9.26+2` ✅, SemVer `v0.4.11` ❌ blocked |
| Kanban | Partially reconciled |

Validators passed **in-SQLite injectivity**, not **git-tag occupancy** or **allocator health**.

### 3. No release transaction boundary

RW has no formal **PREFLIGHT → PLAN → MUTATE → VALIDATE → PUBLISH** contract with rollback. An agent can skip `create_rw_tags()`, use raw `git tag`, or commit a truncated allocator DB.

### 4. Intelligent agent vs deterministic core

RW correctly uses agent intelligence for kanban synthesis and recovery — but **release integrity surfaces** (version, semver, tags, staged set, allocator) must be **deterministic and single-entry-point**.

---

## Requirements

### Functional — Release outcome

| ID | Requirement |
| -- | ----------- |
| **F1** | **Release identity:** Every RW is anchored to exactly one `E:S:T` ([FR-060](FR-060-rw-task-argument-requirement.md)) with resolvable task doc and releasable status |
| **F2** | **Version coherence:** `version.py`, changelogs, README SemVer, allocator mapping, and git tags are **mutually consistent** on success |
| **F3** | **Release transaction:** RW succeeds only if all **blocking gates** pass in order; partial publish is **ABORTED**, not "local-complete with wrong SemVer" |
| **F4** | **Kanban atomicity ([FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)):** Release-scope four-surface reconciliation is self-sufficient; no UKW dependency |
| **F5** | **Forensic traceability:** Immutable changelog timestamp, version↔task↔kanban grid, four-surface report |
| **F6** | **Publish policy ([UXR-024](UXR-024-rw-local-release-default-no-push-batch-operator-push.md)):** Local-complete default; push opt-in; batch-push readiness ([FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md)) |

### Functional — SemVer & tags (absorbs [FR-120](FR-120-semver-allocation-authority-transactional-mapping-black-box.md) / [FR-046](FR-046-rw-semver-tag-task-touch-mode.md) / [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) gaps)

| ID | Requirement |
| -- | ----------- |
| **F7** | **Allocator preflight:** Before version bump, verify SAA DB health (`max_patch` ≥ git-tag floor OR legacy import OK) — **abort if truncated** |
| **F8** | **Git-tag occupancy:** Proposed SemVer core tag `v0.4.{patch}` must not exist unless idempotent replay of same internal |
| **F9** | **Single tag authority:** Step 11 **only** via `create_rw_tags()` / `semver_converter.get_rw_tag_info(finalize=True)` — never raw `git tag` |
| **F10** | **Split-brain detection:** Post-RW validator: README SemVer == allocator mapping == staged export |

### Non-functional

| ID | Requirement |
| -- | ----------- |
| **NF1** | **Spec single source:** One RW contract doc + machine-readable step/gate manifest |
| **NF2** | **Agent + script split:** Agent orchestrates; deterministic scripts own gates for allocator/tags/stage-set |
| **NF3** | **Idempotency:** Re-running RW on same BUILD fails loudly, not silently |
| **NF4** | **Adopter portability:** Contract applies via `rw-config.yaml`; no ai-dev-kit-only hardcoding in gate logic |
| **NF5** | **Observability:** Every RW emits execution log ([FR-044](FR-044-rw-temporary-execution-log-for-recovery-and-forensics.md)) + release-readiness report ([FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)) + semver finalize JSON |

---

## Target architecture (contract sketch)

```
┌─────────────────────────────────────────────────────────────┐
│                    RW RELEASE TRANSACTION                    │
├──────────┬──────────┬──────────────┬────────────────────────┤
│  PREFLIGHT (deterministic)                                   │
│  1 branch  1b task  1c releasable  1d intent               │
│  1e allocator_health  1f git_tag_namespace_preview          │
├──────────┬──────────┬──────────────┬────────────────────────┤
│  PLAN (agent + scripts)                                      │
│  resolve_build  finalize_semver_preview  four_surface_plan   │
├──────────┬──────────┬──────────────┬────────────────────────┤
│  MUTATE (agent-driven, config-driven paths)                  │
│  version  changelogs  readme  kanban_step7  br/fr            │
├──────────┬──────────┬──────────────┬────────────────────────┤
│  VALIDATE (deterministic, blocking)                          │
│  stage_set  stamp_diff  release_readiness  ci_parity         │
│  semver_injective  task_touch_contract  split_brain_check  │
├──────────┬──────────┬──────────────┬────────────────────────┤
│  PUBLISH (deterministic)                                     │
│  commit  create_rw_tags  [optional push]                     │
├──────────┬──────────┬──────────────┬────────────────────────┤
│  ABORT: no commit if any blocking gate fails                 │
└─────────────────────────────────────────────────────────────┘
```

**Proposed ADR:** ADR-027 — RW Release Transaction Contract (agent/script boundary).

---

## Gap estimate (at filing)

| Status | Share | Examples |
| ------ | ----- | -------- |
| Met | ~40% | Task token gates, branch safety, FR-092 Step 7, CI parity, UXR-024 |
| Partial | ~35% | SAA transactional path, release readiness scope, execution log |
| Missing / violated | ~25% | Allocator preflight, git-tag occupancy, single tag authority, split-brain detection, spec single doc |

---

## Acceptance Criteria

- [x] Published **RW Architectural Contract** (invariants + phase diagram + gate table) — Wave 0 @ 2026-06-09
- [x] **Gap matrix** (contract clause → implementation → test → status) — Wave 0 @ 2026-06-09
- [x] **Wave 1 shipped:** Allocator preflight + git-tag occupancy gate (Step 1e/1f) — **v0.2.1.30+2**
- [x] **Wave 2 shipped:** `validate_release_coherence.py` Step 9 cross-surface gate — **v0.2.1.30+3**
- [x] **Wave 3 shipped:** Step 11 tag authority (`validate_rw_tag_authority` + `create_rw_tags` only) — **v0.2.1.30+4**
- [x] **Wave 4 shipped:** `rw-contract.yaml` machine manifest + manifest validator — **v0.2.1.30+5** (Wave 4 slice; tag shared with Wave 5)
- [x] **Wave 5 shipped:** `rw_orchestrator.py` thin shell + `test_rw_orchestrator.py` — **v0.2.1.30+5**
- [ ] **No split-brain release** in 10 consecutive RW runs on ai-dev-kit `dev`
- [ ] IPP linked from task doc; ADR-027 if contract changes agent/script boundary

---

## Out of Scope

- Replacing intelligent agent RW with deterministic `release_workflow.py` as sole executor
- UKW redesign
- Greenfield installer changes

---

## Implementation waves (guidance for IPW)

| Wave | Deliverable |
| ---- | ----------- |
| **0** | RW Contract doc + gap matrix + ADR-027 |
| **1** | `validate_allocator_health.py` + `validate_git_tag_occupancy.py` + wire Step 1e/1f |
| **2** | `validate_release_coherence.py` (README↔DB↔version.py) |
| **3** | Step 11 hard gate: only `create_rw_tags`; `.cursorrules` enforcement |
| **4** | `rw-contract.yaml` machine manifest; collapse step-number drift |
| **5** | Optional: thin `rw_orchestrator.py` for PREFLIGHT+VALIDATE+PUBLISH while agent owns MUTATE |

---

## Notes

- SemVer collision on `0.6.9.26+2` is a **missing Wave 1 gate** symptom, not an allocator math bug ([FR-120](FR-120-semver-allocation-authority-transactional-mapping-black-box.md) fixes generation; RW must enforce health and coherence).
- Complementary to manual re-import + doc fix for the incident release; does not replace corrective hygiene.
