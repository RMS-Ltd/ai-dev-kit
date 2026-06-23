---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-027: RW Release Transaction Contract

**Status:** Accepted  
**Date:** 2026-06-09  
**Implementing task:** [E02:S01:T30](../../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T30-rw-architectural-contract-release-transaction-fr122.md)  
**Planning:** [IPP-E02S01T30](../../implementation-cycles/IPP-E02S01T30-rw-architectural-contract-release-transaction.md) · [FR-122](../../kanban/fbu/FR-122-release-workflow-architectural-contract-release-transaction.md)

---

## Context

The Release Workflow (RW) evolved from an 11-step fynd.deals extract into a 13-step intelligent agent workflow with 30+ reactive gates ([FR-060](../../kanban/fbu/FR-060-rw-task-argument-requirement.md), [BR-097](../../kanban/fbu/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md), [FR-092](../../kanban/fbu/FR-092-canonical-rw-ukw-kanban-consistency-program.md), [FR-112](../../kanban/fbu/FR-112-perpetual-github-ci-and-security-health-lanes.md), [FR-120](../../kanban/fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md)) without an initial architectural IPW. Requirements live in `.cursorrules`, a 3k-line execution guide, `canonical-rw-steps.yaml`, and per-incident validators.

Incident `0.6.9.26+2` demonstrated **split-brain release**: internal tag and `version.py` updated while README/CHANGELOG SemVer, allocator DB health, and SemVer git tags diverged. Validators passed SQLite injectivity but not git-tag occupancy or cross-surface coherence.

---

## Decision

Adopt a **Release Transaction Contract** with five phases and a strict **agent/script boundary**:

| Phase | Owner | Responsibility |
| ----- | ----- | -------------- |
| **PREFLIGHT** | Deterministic scripts | Branch, task token, releasability, intent, allocator health, tag-namespace preview |
| **PLAN** | Scripts + agent | `resolve_rw_build`, semver preview, four-surface plan |
| **MUTATE** | Intelligent agent | Version, changelogs, README, kanban Step 7, FR/BR updates (config-driven paths) |
| **VALIDATE** | Deterministic scripts | Stage set, stamp diff, release readiness, CI parity, semver injectivity, **release coherence** |
| **PUBLISH** | Deterministic scripts | Commit, `create_rw_tags` only, optional scoped push |

**Invariants:**

1. **I1 — Release tuple:** Success requires `(internal_version, semver_full, commit_sha, tags[], four_surface_report)`; any missing field → RW ABORTED.
2. **I2 — Allocator boundary:** Preflight is read-only; SAA writes only at finalize boundary.
3. **I3 — Namespace floor:** `max(git_semver_cores, db_max_patch)` is the allocation floor.
4. **I4 — Stage parity:** Staged set ⊇ four-surface touched paths ([BR-070](../../kanban/fbu/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)).
5. **I5 — Improvisation boundary:** Agent may synthesize kanban narrative; agent must not improvise semver, tags, or BUILD.

**Canonical contract doc:** [`packages/frameworks/workflow-mgt/docs/rw-architectural-contract.md`](../../../packages/frameworks/workflow-mgt/docs/rw-architectural-contract.md)

---

## Alternatives considered

| Option | Rejected because |
| ------ | ---------------- |
| **A — Full deterministic `release_workflow.py`** | Loses agent intelligence for kanban synthesis and adaptive recovery; high migration cost |
| **B — Status quo (reactive gate FRs only)** | Proven outcome drift; split-brain class recurs |
| **C — Hybrid (chosen)** | Agent owns MUTATE; scripts own integrity surfaces; incremental waves per [FR-122](../../kanban/fbu/FR-122-release-workflow-architectural-contract-release-transaction.md) |

---

## Consequences

**Positive:**

- Single citation point for RW invariants (ADR-027 + contract doc + gap matrix)
- Wave 1–3 gates close split-brain class without RW rewrite
- Adopters inherit contract via `rw-config.yaml` paths

**Negative / follow-on:**

- `.cursorrules`, `rw.md`, execution guide, and `canonical-rw-steps.yaml` must stay in parity (FR-038)
- Wave 1–3 implementation still required; ADR alone does not enforce gates

---

## Related

- [ADR-002](ADR-002-task-touch-derived-mapping.md) — SemVer allocation semantics
- [ADR-011](ADR-011-workflow-step-tracker-and-agent-run-log.md) — Observability layer
- [FR-092](../../kanban/fbu/FR-092-canonical-rw-ukw-kanban-consistency-program.md) — Kanban four-surface atomicity (MUTATE/VALIDATE slice)
- [workflow-flaws-reference-guide.md](workflow-flaws-reference-guide.md) — WF-005 split-brain class
