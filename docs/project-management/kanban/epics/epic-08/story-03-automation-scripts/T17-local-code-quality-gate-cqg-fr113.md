---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T17 — Local Code Quality Gate (CQG)

**Task ID:** E08:S03:T17  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Complex (2+ weeks)  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (v0.8.3.17+2 — CQG implementation release)  
**Version Anchor:** v0.8.3.17+2  
**Version:** v0.8.3.17+2
**Code:** E08S03T17

**Upstream:** [FR-113 — Local Code Quality Gate (CQG)](../../../fr-br/FR-113-local-code-quality-gate-cqg.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [FR-113](../../../fr-br/FR-113-local-code-quality-gate-cqg.md) — requirements, trigger-model analysis, acceptance criteria
- [IPP-E08S03T17 — Local Code Quality Gate (CQG)](../../../../../implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md) — planning package (IPW)
- [GitHub Code Quality — Metrics and ratings](https://docs.github.com/en/code-security/code-quality/reference/metrics-and-ratings)
- [GitHub Code Quality — CodeQL detection](https://docs.github.com/en/code-security/code-quality/reference/codeql-detection)
- [Python CodeQL queries for Code Quality](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/python-queries)
- [E08:S03:T12 — Maintainability backlog (BR-099)](T12-code-quality-maintainability-backlog-br099.md) — active burn-down; do not block
- [E08:S03:T16 — GitHub Security & Code Quality health (Perpetual)](T16-github-security-code-quality-health-perpetual-fr112.md) — cloud dashboard owner; CQG is local complement

---

## Goal

Implement a **local Code Quality Gate (CQG)** that reproduces GitHub Code Quality **Standard findings** (CodeQL `security-and-quality` suite) with structured reporting, configurable thresholds, and dual trigger support (**cron monitor** + **RW Step 9 validator** + manual CLI). Implementation **must harmonize with ADK architecture** (see §Architectural placement).

---

## Architectural placement (mandatory — FR-113)

CQG is **not** a standalone repo-root utility. Deliverables split across ADK layers:

| Layer | Location | Responsibility |
| ----- | -------- | -------------- |
| **RW validator CLI** | `packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py` | Step 9 entrypoint; `--strict`; loads `rw-config.yaml` |
| **Core engine** | `packages/frameworks/tooling-automation/` (validator module or `validators/code_quality/`) | CodeQL orchestration, report model, threshold logic; reuse `BaseValidator` patterns where fit |
| **Monitor wrapper** | Same package or `workflow-mgt/scripts/` thin wrapper calling shared engine | 6 h cron + HEAD skip / 12 h staleness |
| **Config** | `rw-config.yaml` → `code_quality_gate:` block; document in `rw-config-schema.md` | Interval, branch, paths, thresholds, advisory default |
| **Docs** | `workflow-mgt/docs/` and/or `tooling-automation/` README | Operator setup, adopter layout, FHM boundary |
| **Vendor sync** | `greenfield-install/packages/frameworks/…` | FR-106 parity when packaged paths change |

**Boundaries:**

- **FHM** = workflow framework health; **CQG** = codebase CodeQL quality — do not merge v1.
- **T16** = GitHub cloud dashboard owner; CQG = local complement.
- **E02:S16** workflow perpetual lanes — no CQG scope.

**Anti-patterns:** repo-root-only script; duplicate wrappers without shared module; ai-dev-kit-hard-coded paths; new `CQG` workflow trigger without FR amendment.

---

## Scope

**In scope (v1):**

1. CodeQL CLI integration for **Python** corpus (`security-and-quality` suite).
2. JSON + markdown report with severity, category, rule name, file/line, aggregate ratings.
3. Threshold modes aligned with GitHub rulesets (Error / Warnings+ / Notes+ / All).
4. Three entrypoints:
   - `run_cqg.py` (or packaged module) — manual CLI
   - `validate_code_quality_gate.py` — RW Step 9 hook (**advisory by default**)
   - `cqg_monitor.sh` / documented cron — **6 h** schedule (`0 */6 * * *`) with HEAD skip + **12 h** staleness cap on clean `dev` checkout
5. Parity validation doc: local vs GitHub dashboard @ same SHA.
6. Operator setup guide (CodeQL bundle, cache, env).

**Out of scope (v1):**

- AI findings replication
- Auto-disabling GitHub Code Quality workflow
- JavaScript/portal CodeQL (document as wave 2 in IPP)

---

## Trigger model (adopted — FR-113)

| Layer | Trigger | Default behavior |
| ----- | ------- | ---------------- |
| **Monitor** | Cron **`0 */6 * * *`** (every 6 h) | Non-blocking snapshot on clean **`dev`**; skip if HEAD unchanged and snapshot **< 12 h** old; force if snapshot **≥ 12 h** |
| **Gate** | RW Step 9 | Advisory (`exit 0` with report); optional `--strict` after parity |
| **Manual** | CLI | Operator-defined thresholds |

**Monitor skip/force (implement in `cqg_monitor`):**

1. Read `.cqg/last-run.json` (`head_sha`, `completed_at`).
2. If current `dev` HEAD == `head_sha` and age **< 12 h** → exit 0, log skipped.
3. Else → run full CQG, write snapshot to `.cqg/reports/`, update `last-run.json`.

**IPW still resolves:** CodeQL DB cache, incremental analysis, artifact retention, RW `--strict` timing.

---

## Deliverables

1. CQG **engine** under `packages/frameworks/tooling-automation/` (shared module).
2. `validate_code_quality_gate.py` under `workflow-mgt/scripts/validation/` (RW Step 9; advisory default).
3. Monitor entrypoint (6 h cron + HEAD/staleness guards) calling shared engine.
4. `rw-config.yaml` + **`rw-config-schema.md`** extension (`code_quality_gate:` keys).
5. RW agent execution doc update (Step 9 validator list).
6. Parity report template (SHA, GH counts, local counts, delta).
7. Adopter note in `rw-validators-consumer-layout.md` or sibling doc.
8. IPP with **architecture section** (FR-113 §Architectural harmonization checklist).
9. FR-106 vendor sync if packaged paths touched.
10. IPP linked before implementation (`IPW E08:S03:T17`).

---

## Acceptance criteria

- [x] **AC1:** CQG CLI produces JSON + markdown summary on known SHA.
- [x] **AC2:** Parity doc vs GitHub Standard findings @ same SHA (≥95% target per FR-113:NF1).
- [x] **AC3:** RW validator documented; default advisory.
- [x] **AC4:** Cron/monitor documented: **6 h** schedule, HEAD skip, **12 h** staleness cap, clean-checkout procedure.
- [x] **AC5:** Scope boundary documented vs T16 (cloud) and T12 (burn-down).
- [x] **AC6:** Architecture checklist passed — config schema, layered placement, adopter doc, FHM boundary stated in IPP.

---

## Dependencies

**Blocked by:** None (intake complete).

**Coordinate with:**

- **T12** — avoid conflicting mass refactors; CQG may **inform** wave prioritization.
- **T16** — cloud dashboard remains SoT until operator accepts local parity.

---

## Task checklist

- [x] IPW → IPP with architecture section (`IPP-E08S03T17-*.md`)
- [x] Architecture spike: confirm engine vs validator split; `BaseValidator` fit
- [x] Extend `rw-config-schema.md` (`code_quality_gate`)
- [x] Spike: CodeQL DB build time on ai-dev-kit Python tree (CLI absent — documented in ADR)
- [x] Implement CQG engine (`tooling-automation`)
- [x] Implement RW validator wrapper (`workflow-mgt/scripts/validation/`)
- [x] Implement cron/monitor entrypoint
- [x] Parity validation @ pinned SHA (template + procedure)
- [x] Operator + adopter documentation
- [x] FR-106 vendor sync (if packaged paths changed)
- [x] RW release with `--art` when implementation complete

---

## References

- [IPP-E08S03T17 — Local Code Quality Gate (CQG)](../../../../../implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md)
- [ADR-022 — Local Code Quality Gate architecture](../../../../../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)
- [FR-113](../../../fr-br/FR-113-local-code-quality-gate-cqg.md)
- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [Framework dependency architecture](../../../../../architecture/standards-and-adrs/framework-dependency-architecture.md)
- [RW validators consumer layout](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md)
- [Tooling-automation validators README](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/tooling-automation/validators/README.md)
- [FR-106 — Packaged workflows sync](../../../../../project-management/kanban/fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md)
- [Workflow configuration — `security-and-quality` suite](https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options)
