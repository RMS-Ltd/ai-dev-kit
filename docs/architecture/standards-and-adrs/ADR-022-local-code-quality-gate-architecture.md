---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-022: Local Code Quality Gate (CQG) architecture

### Version 0.0.1

| Version | Change |
| ------- | ------ |
| 0.0.1 | Initial decision — ADK-native CQG layering, hybrid triggers, RW Step 9 advisory gate |

**Status:** Accepted  
**Date:** 2026-06-06  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E08:S03:T17](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)  
**Planning package:** [IPP-E08S03T17](../../implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md)  
**Related:** [FR-113](../../project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg.md), [FR-112](../../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

---

## Context

GitHub Code Quality **Standard findings** use CodeQL `security-and-quality` queries with published severity/category/rating rules. Operators want **local** reproduction to reduce Actions minutes and catch issues pre-RW, while **T16** remains the cloud dashboard owner until parity is accepted.

Requirements (FR-113): hybrid triggers (6 h monitor + RW Step 9 + CLI), Python v1, advisory RW default, `.cqg/` artifacts gitignored.

---

## Decision

Adopt a **two-package split** with `rw-config.yaml` as configuration SoT:

| Layer | Path | Role |
| ----- | ---- | ---- |
| Engine | `packages/frameworks/tooling-automation/validators/code_quality/` | CodeQL orchestration, SARIF ingest, ratings, thresholds, last-run |
| CLI | `packages/frameworks/tooling-automation/scripts/run_cqg.py` | Operator ad-hoc runs |
| RW adapter | `packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py` | Step 9; `--strict` opt-in |
| Monitor | `packages/frameworks/workflow-mgt/scripts/cqg_monitor.py` | Cron `0 */6 * * *`; HEAD skip / 12 h staleness |
| Config | `rw-config.yaml` → `code_quality_gate:` | Documented in `rw-config-schema.md` |
| Artifacts | `.cqg/reports/`, `.cqg/cache/`, `.cqg/last-run.json` | Gitignored |

### Trigger matrix

| Trigger | Entry | Default |
| ------- | ------- | ------- |
| Monitor | `cqg_monitor.py` | Skip if HEAD unchanged and last run &lt; 12 h; force if ≥ 12 h |
| RW Step 9 | `validate_code_quality_gate.py` | Advisory (`exit 0` with report); `--strict` blocks |
| Manual | `run_cqg.py` | Operator thresholds via CLI |

### Boundaries

- **FHM** — workflow framework health only; no CQG merge in v1
- **T16** — GitHub cloud SoT; CQG is local complement
- **No new `CQG` workflow trigger** — use existing RW/CLI/cron only
- **Out of scope v1:** AI findings, JS/portal CodeQL, pre-commit hook

### CodeQL spike (Wave 0)

CodeQL CLI is an **external prerequisite** (not vendored). Initial spike on ai-dev-kit dev environment: **CLI not on PATH** in CI/agent sandboxes — engine supports `--sarif` replay for tests; operators install CodeQL bundle per operator guide. Pin bundle version when first full local run completes.

---

## Consequences

**Positive:** Portable ADK layout; shared engine; advisory RW avoids blocking before parity wave.

**Negative:** CodeQL install burden on adopters; first full DB build may be slow (document in operator guide).

**FR-106:** Mirror packaged paths under `greenfield-install/packages/frameworks/…` when engine/validator paths change.

---

## References

- [GitHub Code Quality metrics](https://docs.github.com/en/code-security/code-quality/reference/metrics-and-ratings)
- [Operator guide](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md)
