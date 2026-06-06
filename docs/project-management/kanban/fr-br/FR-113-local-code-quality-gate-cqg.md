---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-06T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-113: Local Code Quality Gate (CQG)

**Type:** Feature Request (FR)  
**ID:** FR-113  
**Submitted:** 2026-06-06  
**Submitted By:** User (via agent — local parity with GitHub Code Quality)  
**Priority:** MEDIUM  
**Status:** ACCEPTED (hybrid trigger + architectural harmonization adopted 2026-06-06)  
**Version Anchor:** v0.8.3.17+1 (kanban init — RW -k)  
**Implementing Task:** **E08:S03:T17** — [`T17-local-code-quality-gate-cqg-fr113.md`](../epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)

---

## Summary

Implement a **local Code Quality Gate (CQG)** that mirrors [GitHub Code Quality](https://docs.github.com/en/code-security/code-quality) **Standard findings** (CodeQL `security-and-quality` suite) so operators can run maintainability/reliability analysis locally, reduce redundant GitHub Actions compute, and practice the same hygiene GitHub teaches — without waiting on cloud scans.

---

## Motivation

1. **Respect for GitHub's product.** GitHub Code Quality (Standard findings, severity bands, reliability/maintainability scores) is a strong reference implementation. The operator intends to subscribe to premium tiers when a project is revenue-positive; until then, running equivalent checks locally **offsets free-tier Actions minutes** and reduces duplicate cloud processing when local results are sufficient for pre-merge hygiene.
2. **Good engineering practice.** A local gate makes code-quality feedback available in the inner dev loop (IDE, pre-commit, RW validators) rather than only after push/merge. It aligns with ADK's existing validator-first culture under `packages/frameworks/workflow-mgt/scripts/validation/`.

---

## Problem Statement

- **T12–T14** burn down GitHub dashboard findings reactively; **T16** (perpetual) maintains cloud dashboard hygiene — but there is **no first-class local analyzer** that reproduces GitHub's published CodeQL rule set, severity mapping, and summary ratings.
- Operators currently rely on GitHub's **Code Quality** workflow for authoritative counts/scores, which consumes Actions minutes and introduces latency between local fix and dashboard confirmation.
- Ruff and other linters partially overlap but **do not** implement the full published [CodeQL queries for Code Quality](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/) catalog (reliability + maintainability rules GitHub documents per language).

---

## Proposed solution (high level)

Deliver a **CQG** subsystem under Epic 8 tooling that:

1. Runs CodeQL locally (CLI) against a checked-out ref (default: current branch HEAD or `main` merge-base — configurable).
2. Uses the **`security-and-quality`** query suite (same as GitHub Code Quality Standard findings).
3. Emits a **structured report** (JSON + human summary) with:
   - Findings grouped by rule, file, severity (Error / Warning / Note)
   - Reliability vs Maintainability category (per GitHub query metadata)
   - Derived repo ratings (Excellent / Good / Fair / Needs Improvement) using [GitHub's published criteria](https://docs.github.com/en/code-security/code-quality/reference/metrics-and-ratings)
4. Supports configurable **thresholds** (mirror GitHub ruleset severities: Errors only, Warnings+, Notes+, All).
5. Integrates with ADK config (`rw-config.yaml` or dedicated `cqg-config.yaml`).

**Explicit non-goals (v1):**

- Replicating **AI findings** (LLM post-merge analysis) — criteria are not rule-published; out of scope unless a separate FR.
- Replacing GitHub Code Scanning **security** alerts workflow — CQG focuses on **quality** (maintainability/reliability); security overlap is acceptable side-effect of `security-and-quality` suite but not the primary deliverable.

---

## Architectural harmonization (mandatory)

CQG must be implemented as a **first-class ADK subsystem**, not a standalone script dropped in repo root. IPP must document placement decisions against the checklist below; deviations require explicit rationale in the IPP ADR-necessity section.

### Placement and packaging

| Concern | ADK convention | CQG requirement |
| ------- | ---------------- | --------------- |
| **Validator surface** | RW Step 9 scripts under `packages/frameworks/workflow-mgt/scripts/validation/`; paths from `rw-config.yaml` → `scripts_path` | `validate_code_quality_gate.py` follows existing validator CLI conventions (`--strict`, exit codes, config load from project root) |
| **Core logic / reuse** | Shared validators in `packages/frameworks/tooling-automation/validators/` (`BaseValidator`, registry, `PATTERNS.md`) | CQG engine SHOULD extend or compose `BaseValidator` where practical; avoid duplicating config-load / result-reporting patterns |
| **Adopter portability** | FR-110 lean vendor tree; FR-081 brownfield matrices; [rw-validators-consumer-layout.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md) | CQG installable via vendored `workflow-mgt` + `tooling-automation`; no hard-coded ai-dev-kit-only paths |
| **Packaged sync** | FR-106 — live repo ↔ `greenfield-install/` parity for framework packages | CQG changes mirrored in vendor bundle when touching packaged frameworks |

### Configuration SoT

- **Primary:** extend `rw-config.yaml` schema (document in `rw-config-schema.md`) with a `code_quality_gate:` block — monitor interval, target branch, staleness cap, report dirs, default threshold, advisory vs strict for RW.
- **Optional:** dedicated `cqg-config.yaml` only if schema section becomes unwieldy; must still be referenced from `rw-config.yaml` (same pattern as other subsystems).
- **No** orphan env-only configuration without documented keys in schema.

### Workflow and operational integration

| ADK workflow | CQG relationship |
| ------------ | ---------------- |
| **RW** | Step 9 validator (advisory default); optional Step 9 output in release readiness reporting |
| **FHM** | **Complementary, not duplicate** — FHM monitors *workflow framework* health (execution counts, journals); CQG monitors *codebase* CodeQL quality. IPP must state boundary; no merge into FHM v1 without separate FR |
| **T16 perpetual lane** | Cloud dashboard remains GitHub SoT until parity proven; local CQG feeds operator triage, not kanban row stamps |
| **Pre-commit** | Optional later hook; not required v1 — do not bypass RW-only commit policy |

### Observability and forensic traceability

- Monitor snapshots: `.cqg/reports/` + `.cqg/last-run.json` (gitignored by default); align with FR-059 journal patterns where RW-attributed runs should log to `docs/journals/` or agent run log when invoked from RW.
- Reports use deterministic ordering (FR-113:NF2) for diff-friendly regression compares across 6 h ticks.

### Documentation and governance

- Operator guide under `packages/frameworks/tooling-automation/` or `workflow-mgt/docs/` (match sibling validators).
- RW agent execution doc updated (Step 9 list + advisory/strict semantics).
- Epic 8 Story 3 delivery semantics preserved; no scope bleed into E02:S16 workflow perpetual lanes.
- IPW produces IPP with **architecture section** mapping each deliverable to the table above.

### Anti-patterns (forbidden)

- Repo-root one-off script with no `rw-config` wiring
- Duplicate CodeQL wrapper in both `scripts/` and `packages/` without shared module
- CQG that only runs on ai-dev-kit paths (breaks FR-110/081 adopters)
- New top-level workflow trigger (`CQG` as fourth class alongside RW/UKW/IPW) without FR amendment — v1 uses cron + RW validator + CLI only

---

## Trigger model analysis

Two primary trigger patterns were evaluated. **Adopted: hybrid (both), with different roles** — see §Monitor schedule (adopted) and §Recommended architecture.

### Option A — Cron job (e.g. hourly)

| Dimension | Assessment |
| --------- | ---------- |
| **Purpose** | Background **drift detection** on integration branch (`dev` / `main`) — "what is the repo health right now?" |
| **Pros** | Runs independent of release cadence; catches regressions merged while operator is away; can persist trend artifacts (hourly JSON snapshots); reduces need to open GitHub Security tab for routine monitoring; scheduled local run avoids GitHub Actions minutes for **monitoring-only** passes. |
| **Cons** | Requires host always-on or CI runner with cron; CodeQL DB creation is **CPU/RAM heavy** (tens of minutes on large repos); hourly full scans may be wasteful without incremental caching; dirty working tree risk if cron runs in dev checkout; results not automatically tied to RW forensic grid unless archived deliberately. |
| **Best fit** | Nightly or **hourly lightweight delta** (if incremental tooling exists) on clean checkout of `dev`; store reports under `docs/quality/cqg-snapshots/` or `.cqg/reports/` (gitignored) with retention policy. |
| **ADK pattern** | Similar to optional scheduled hygiene — complements **T16** cloud dashboard, does not replace it until operator trusts parity. |

### Option B — RW trigger (Release Workflow Step 9 validator)

| Dimension | Assessment |
| --------- | ---------- |
| **Purpose** | **Release-bound gate** — "is this release scope clean enough to ship?" |
| **Pros** | Fits existing RW Step 9 validator pattern (`validate_*` scripts); forensic linkage (version ↔ CQG report in changelog or Step 9 output); runs only when operator releases (predictable cost); can scope to **changed files** or diff since last tag for faster feedback; blocking/non-blocking policy matches other gates (e.g. `check_changelog_size.py` advisory vs `validate_branch_context.py` blocking). |
| **Cons** | **No coverage between releases** — issues can accumulate silently; lengthens RW when full CodeQL DB build runs; blocking CQG on slow machines may frustrate release flow; requires CodeQL toolchain on operator machine (same as local dev setup). |
| **Best fit** | RW Step 9 **advisory first** (exit 0 with warnings), then optional `--strict` after parity proven; prefer **incremental/diff-scoped** analysis for PR/RW speed. |
| **ADK pattern** | `validate_code_quality_gate.py` alongside existing validators; config in `rw-config.yaml`. |

### Comparison summary

| Criterion | Cron (hourly) | RW Step 9 | Hybrid (recommended) |
| --------- | ------------- | --------- | -------------------- |
| Feedback latency | Low (scheduled) | High (only on RW) | Low monitoring + release gate |
| Actions minute savings | High if GH workflow throttled | Medium (pre-push catch) | Highest |
| Forensic traceability | Needs snapshot discipline | Native to RW | Both |
| Operator friction | Background (low) | Adds RW time | Tunable |
| False confidence risk | Scans wrong ref if misconfigured | Misses inter-release drift | Mitigated by split roles |

### Recommended architecture (adopted)

| Layer | Trigger | Role | Default severity |
| ----- | ------- | ---- | ---------------- |
| **Monitor** | Cron every **6 hours** + HEAD/staleness guards (see below) | Full-branch snapshot on clean `dev` checkout; trend + alert on score regression | Non-blocking; notify/log only |
| **Gate** | RW Step 9 (optional `--strict`) | Diff-scoped or full scan at release boundary | Configurable; start **advisory** |
| **Manual** | CLI `python -m cqg` or `scripts/run_cqg.py` | Ad-hoc pre-push developer check | Operator-defined |

### Monitor schedule (adopted — operator decision 2026-06-06)

**Cron expression:** `0 */6 * * *` (00:00, 06:00, 12:00, 18:00 UTC — operator may shift to local active hours in `cqg-config.yaml`).

**Target ref:** clean checkout of integration branch **`dev`** (configurable).

**Skip / force logic (mandatory for monitor entrypoint):**

| Condition | Action |
| --------- | ------ |
| `HEAD` == last successful CQG snapshot HEAD **and** snapshot age **< 12 h** | **Skip** full scan; log `unchanged` |
| `HEAD` changed since last snapshot | **Run** full CQG |
| Snapshot age **≥ 12 h** (staleness cap) | **Force** full CQG even if HEAD unchanged (toolchain/query drift) |

**Artifacts:** JSON summary + optional SARIF under `.cqg/reports/` (gitignored by default); retain last **N** snapshots per retention policy in IPP.

**Phase tuning (document in IPP, not blocking v1):**

| Phase | Monitor interval | Notes |
| ----- | ---------------- | ----- |
| **T12 active (now)** | **6 h** + guards above | Responsive during burn-down without hourly waste |
| **T16 steady hygiene** | Revisit **8–12 h** after parity proven | Operator decision |
| **Post-parity trust** | **12 h** or event-only | Optional reduction of GitHub Code Quality frequency |

**IPW still resolves:** CodeQL DB cache strategy, incremental analysis, RW gate blocking policy, and committed vs gitignored summary artifacts — after perf spike on ai-dev-kit Python corpus.

---

## Requirements

### Functional

- [ ] **FR-113:F1** — CQG runner executes CodeQL `security-and-quality` for **Python** (ai-dev-kit primary language); document extension path for JS/TS (`portal/`) as follow-up wave.
- [ ] **FR-113:F2** — Report maps findings to GitHub-equivalent severity (Error/Warning/Note) and category (Reliability/Maintainability).
- [ ] **FR-113:F3** — Report computes aggregate **reliability** and **maintainability** ratings per GitHub published criteria.
- [ ] **FR-113:F4** — Threshold configuration (Errors / Warnings+ / Notes+ / All) with exit codes suitable for CI/cron/RW.
- [ ] **FR-113:F5** — Documented install/setup (CodeQL CLI/bundle, cache dirs, env vars).
- [ ] **FR-113:F6** — Trigger adapters: (a) cron entrypoint (**6 h** + HEAD skip + **12 h** staleness cap), (b) RW validator hook, (c) manual CLI.
- [ ] **FR-113:F7** — Monitor entrypoint persists last-run metadata (`head_sha`, `completed_at`) for skip/force decisions.
- [ ] **FR-113:F8** — CQG conforms to ADK architectural harmonization (§Architectural harmonization): `rw-config` schema extension, validator layout, tooling-automation integration, adopter portability, documented FHM/RW/T16 boundaries.

### Non-functional

- [ ] **FR-113:NF1** — Parity goal: ≥95% match vs GitHub Standard findings on same SHA (document known deltas).
- [ ] **FR-113:NF2** — Idempotent reports; deterministic ordering for diff-friendly snapshots.
- [ ] **FR-113:NF3** — Clear scope boundary vs **T16** (cloud dashboard owner) and **T12** (finite burn-down).
- [ ] **FR-113:NF4** — Does not commit secrets; reports may gitignore large SARIF with optional committed summary JSON.
- [ ] **FR-113:NF5** — **Architectural fit:** implementation review checklist in IPP passes (packaging, config SoT, no anti-patterns); FR-106 vendor sync when packaged paths change.

---

## Acceptance criteria

- [ ] **AC1:** CQG CLI produces JSON + markdown summary on `dev` @ known SHA with rule-level counts.
- [ ] **AC2:** Parity report documents delta vs GitHub dashboard for same SHA (maintainability + reliability open counts).
- [ ] **AC3:** RW validator registered in Step 9 docs; default **advisory** (non-blocking).
- [ ] **AC4:** Cron/monitor script documented with **6 h** schedule, HEAD skip / **12 h** staleness cap, and clean-checkout procedure.
- [ ] **AC5:** Operator guide explains when to trust local CQG vs when to verify on GitHub (T16 handoff).
- [ ] **AC6:** IPP architecture section maps CQG to ADK layers (`rw-config`, workflow-mgt validators, tooling-automation, adopter layout); `rw-config-schema.md` updated with `code_quality_gate` keys.

---

## Scope analysis

**Problem domain:** Code quality automation, local developer tooling  
**Affected areas:**

- [x] Backend/scripts (`packages/frameworks/tooling-automation/` or `packages/frameworks/workflow-mgt/scripts/validation/`)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation
- [x] Testing (parity fixtures)
- [x] CI/cron integration

**Estimated complexity:** Complex (2+ weeks) — CodeQL setup, parity validation, dual trigger wiring.

---

## Dependencies

**Blocked by:**

- None for intake; implementation should not block **T12** completion.

**Related work:**

- [FR-112 — Perpetual GitHub CI and security health lanes](FR-112-perpetual-github-ci-and-security-health-lanes.md) — **T16** cloud hygiene (complementary)
- [E08:S03:T12–T14](../epics/epic-08/story-03-automation-scripts.md) — finite Code Quality burn-down
- [FR-024 — IDE linter check before commit in RW](FR-024-ide-linter-check-before-commit-in-release-workflow.md) — analogous RW Step 9.6 pattern
- [FR-106 — Packaged workflows sync with live repo](FR-106-packaged-workflows-sync-with-live-repo-implementation.md) — vendor tree parity
- [FR-110 — Lean adopter distribution](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — consumer layout
- [Framework dependency architecture](../../../architecture/standards-and-adrs/framework-dependency-architecture.md)
- [RW validators consumer layout](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md)
- [Tooling-automation validators README](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/tooling-automation/validators/README.md) — `BaseValidator` framework
- GitHub docs: [Metrics and ratings](https://docs.github.com/en/code-security/code-quality/reference/metrics-and-ratings), [CodeQL detection](https://docs.github.com/en/code-security/code-quality/reference/codeql-detection), [Python CodeQL queries for Code Quality](https://docs.github.com/en/code-security/reference/code-quality/codeql-queries/python-queries)

---

## Out of scope

- GitHub Code Quality **AI findings** replication.
- Disabling GitHub Code Quality workflow automatically (operator decision after parity proven).
- Premium GitHub tier features.

---

## Intake decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-06-06  
**Intake by:** Agent (intake-process skill)

**Decision flow:**

- [x] Story match: Epic 8, Story 3 (Automation Scripts) → Task **T17**
- [ ] New story — not required
- [ ] New epic — not required

**Assigned to:**

- Epic: 8 — Tooling & Automation
- Story: 003 — Automation Scripts
- Task: **E08:S03:T17** — Local Code Quality Gate (CQG)
- Version: `0.8.3.17+1` (kanban init)

**Kanban links:**

- Epic: [`epic-08.md`](../epics/epic-08/epic-08.md)
- Story: [`story-03-automation-scripts.md`](../epics/epic-08/story-03-automation-scripts.md)
- Task: [`T17-local-code-quality-gate-cqg-fr113.md`](../epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)

---

## Notes

- User preference: respect GitHub's model; local CQG is **cost-conscious** and **practice-oriented**, not a rejection of GitHub's product.
- **Monitor interval decided:** **6 hours** with HEAD-change skip and **12 h** staleness cap (not daily, not hourly full scans).
- **Architecture:** CQG must harmonize with ADK validator framework, `rw-config` SoT, RW Step 9, tooling-automation packaging, and adopter portability (§Architectural harmonization) — not a repo-root one-off.
- IPW spike: measure CodeQL DB build duration on Apple Silicon; tighten to **4 h** only if cached runs are consistently **< 5 min**.
- Consider sharing CQG runner as packaged framework artifact under `packages/frameworks/tooling-automation/` for adopters.
