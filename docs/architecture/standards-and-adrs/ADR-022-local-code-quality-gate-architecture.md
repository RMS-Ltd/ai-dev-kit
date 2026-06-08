---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-022: Local Code Quality Gate (CQG) architecture

### Version 0.0.2

| Version | Change |
| ------- | ------ |
| 0.0.2 | **CQG gate moves from RW Step 9 to IDW Phase 6b** — strict by default (`idw_advisory: false`); RW owns release surfaces only |
| 0.0.1 | Initial decision — ADK-native CQG layering, hybrid triggers, RW Step 9 advisory gate |

**Status:** Accepted  
**Date:** 2026-06-06 (v0.0.2 revised 2026-06-08)  
**Deciders:** User (Ruari Mears)  
**Implementing tasks:** [E08:S03:T17](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md) (engine) · [E02:S16:T23](../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T23-cqg-gate-relocation-to-idw-phase-6b-adr022.md) (v0.0.2 gate relocation)  
**Planning package:** [IPP-E08S03T17](../../implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md)  
**Related:** [FR-113](../../project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg.md), [FR-112](../../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md), IDW (`.claude/commands/idw.md`)

---

## Context

GitHub Code Quality **Standard findings** use CodeQL `security-and-quality` queries with published severity/category/rating rules. Operators want **local** reproduction to reduce Actions minutes and catch issues **before release**, while **T16** remains the cloud dashboard owner until parity is accepted.

Requirements (FR-113): hybrid triggers (6 h monitor + **IDW Phase 6b** + CLI), Python v1, `.cqg/` artifacts gitignored.

**v0.0.2 rationale:** Release Workflow (RW) should own release forensics only (version, changelog, kanban, commit, tag, push-readiness). Implementation quality — including local CodeQL — belongs in **Implementation Delivery Workflow (IDW)** at verify time, after tests and before `IDW COMPLETE` / optional `RW` chain.

---

## Decision

Adopt a **two-package split** with `rw-config.yaml` as configuration SoT:

| Layer | Path | Role |
| ----- | ---- | ---- |
| Engine | `packages/frameworks/tooling-automation/validators/code_quality/` | CodeQL orchestration, SARIF ingest, ratings, thresholds, last-run |
| CLI | `packages/frameworks/tooling-automation/scripts/run_cqg.py` | Operator ad-hoc runs |
| IDW adapter | `packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py` | **IDW Phase 6b**; `--strict` default; `--skip` for docs-only |
| Monitor | `packages/frameworks/workflow-mgt/scripts/cqg_monitor.py` | Cron `0 */6 * * *`; HEAD skip / 12 h staleness |
| Config | `rw-config.yaml` → `code_quality_gate:` | `idw_threshold`, `idw_advisory` (deprecated: `rw_*` keys read for compat) |
| Artifacts | `.cqg/reports/`, `.cqg/cache/`, `.cqg/last-run.json` | Gitignored |

### Trigger matrix

| Trigger | Entry | Default |
| ------- | ------- | ------- |
| Monitor | `cqg_monitor.py` | Skip if HEAD unchanged and last run &lt; 12 h; force if ≥ 12 h |
| **IDW Phase 6b** | `validate_code_quality_gate.py --strict` | **Blocking** when Python in scope (`idw_advisory: false`) |
| Manual | `run_cqg.py` | Operator thresholds via CLI |
| **RW** | — | **Does not run CQG** — use IDW before RW; Step 9.7 Actions CI parity is separate (FR-112) |

### Boundaries

- **FHM** — workflow framework health only; no CQG merge in v1
- **T16** — GitHub cloud SoT; CQG is local complement
- **RW Step 9.7** — Actions CI parity (Tests, Docusaurus, greenfield drift); **CQG ≠ CI**
- **Out of scope v1:** AI findings, JS/portal CodeQL, pre-commit hook

### CodeQL spike (Wave 0)

CodeQL CLI is an **external prerequisite** (not vendored). Engine supports `--sarif` replay for tests; operators install CodeQL bundle per operator guide.

---

## Consequences

**Positive:** Clear IDW/RW separation; CodeQL runs at implementation acceptance; RW stays lean; fail-fast before release packaging.

**Negative:** Standalone `RW` without prior `IDW` (UKW, CMW, docs-only) does not re-run CQG — rely on monitor + prior IDW evidence.

**FR-106:** Mirror packaged paths under `greenfield-install/packages/frameworks/…` when engine/validator paths change.

---

## References

- [GitHub Code Quality metrics](https://docs.github.com/en/code-security/code-quality/reference/metrics-and-ratings)
- [Operator guide](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md)
- [IDW command](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/idw.md)
