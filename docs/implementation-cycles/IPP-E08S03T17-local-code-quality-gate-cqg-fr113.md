---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T17 — Planning: Local Code Quality Gate (CQG) (IPW)

**Host Task:** [`T17-local-code-quality-gate-cqg-fr113.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md) **(E08:S03:T17)**  
**Planning for:** [FR-113](../project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg-fr113.md)  
**Status:** Approved (implementation authorized)

> **IPW:** Produced for E08:S03:T17. Hybrid triggers: **6 h** monitor + RW Step 9 advisory gate + manual CLI. ADK-native layering per [ADR-022](../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Run CodeQL `security-and-quality` on **Python** corpus (or ingest equivalent SARIF) | FR-113:F1, T17 AC1 |
| RF2 | Map findings to Error / Warning / Note + Reliability / Maintainability | FR-113:F2 |
| RF3 | Compute aggregate reliability and maintainability ratings per GitHub published criteria | FR-113:F3 |
| RF4 | Threshold modes (Error / Warnings+ / Notes+ / All) with process exit codes | FR-113:F4 |
| RF5 | Three entrypoints: CLI, RW Step 9, **6 h** monitor with HEAD skip / **12 h** staleness | FR-113:F6, T17 AC4 |
| RF6 | Persist `.cqg/last-run.json` (`head_sha`, `completed_at`) | FR-113:F7 |
| RF7 | ADK-native packaging — `tooling-automation` engine + `workflow-mgt` validators; `rw-config` SoT | FR-113:F8, AC6 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | ≥95% parity vs GitHub Standard findings @ pinned SHA (document deltas) | FR-113:NF1, AC2 |
| RNF2 | Deterministic report ordering for diff-friendly snapshots | FR-113:NF2 |
| RNF3 | `.cqg/` gitignored; no secrets in committed artifacts | FR-113:NF4 |
| RNF4 | RW gate **advisory** by default; `--strict` opt-in after parity | FR-113, T17 |
| RNF5 | FR-106 vendor sync when packaged paths change | FR-113:NF5 |

### 1.3 Invariants and boundaries

- **In scope:** Python `security-and-quality`, hybrid triggers, parity doc template, operator guide
- **Out of scope v1:** AI findings, portal/JS CodeQL, auto-disable GH workflow, pre-commit hook, FHM merge
- **T16** owns GitHub cloud dashboard SoT until operator accepts local parity

---

## 2. Specification

### 2.1 Goal

Deliver a **local Code Quality Gate** that reproduces GitHub Code Quality **Standard findings** (CodeQL `security-and-quality`) with structured reporting, configurable thresholds, and hybrid scheduling — reducing GitHub Actions minutes while keeping code-health practice in the inner dev loop.

### 2.2 Specification mapping

RF1–RF7 → layered modules under `packages/frameworks/tooling-automation/validators/code_quality/` and `workflow-mgt/scripts/validation/`. Config via `rw-config.yaml` → `code_quality_gate:`.

### 2.3 Constraints

- CodeQL CLI is an **external prerequisite** (not bundled); `--sarif` path supports tests and offline replay
- Monitor: cron `0 */6 * * *`; skip if HEAD unchanged and snapshot **< 12 h**; force if **≥ 12 h**
- RW Step 9: advisory unless `--strict`

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** at implementation Step 1
- **COMPLETE:** AC1–AC6 evidenced + `RW E08:S03:T17 --art`
- **Owner:** Implementation execution

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | CodeQL CLI vs GH API; engine package placement |
| T2 | Reversibility | **Y** | Adopters install CodeQL + config; RW Step 9 extension |
| T3 | Blast radius | **Y** | `tooling-automation`, `workflow-mgt`, `rw-config`, `greenfield-install` |
| T4 | Precedent | **Y** | Canonical local quality gate pattern |
| T5 | Trade-off | **Y** | Local CPU vs GH Actions; advisory vs blocking RW |
| T6 | Governance | **Y** | Extends RW Step 9 validator set + `rw-config` schema |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `REQUIRED` — [ADR-022](../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Ratings | Fixture severities → Excellent/Good/Fair/Needs Improvement | RF3 |
| T2 | SARIF parse | Fixture SARIF → normalized findings | RF2 |
| T3 | Thresholds | Error-only fails on Warning | RF4 |
| T4 | Skip logic | Unchanged HEAD + age <12h → skip | RF5, RF6 |
| T5 | Force logic | age ≥12h → run | RF5 |
| T6 | Config | Missing block → clear error | RF7 |
| T7 | Advisory RW | No `--strict` → exit 0 on breach | RNF4 |
| T8 | Strict RW | `--strict` → non-zero on breach | RF4 |
| T9 | Parity golden | Summary counts match golden JSON | RNF1 |
| T10 | Ordering | Identical input → byte-identical JSON | RNF2 |

**Test location:** `packages/frameworks/tooling-automation/validators/tests/test_code_quality_*.py`  
**Fixtures:** `packages/frameworks/tooling-automation/validators/tests/fixtures/cqg/`

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** T17 `TODO → IN PROGRESS` | Task doc |
| 2 | CodeQL spike (document if CLI absent) | Spike note in ADR / operator guide |
| 3 | ADR-022 CREATE | Architecture doc |
| 4 | `rw-config` + schema extension | Config SoT |
| 5 | `.gitignore` `.cqg/` | RNF3 |
| 6–10 | Engine + CLI + tests | RF1–RF4 |
| 11–12 | RW validator + monitor | RF5 |
| 13–16 | Docs + parity template + FR-106 sync | AC3–AC6 |
| 17 | `RW E08:S03:T17 --art` | Release |
| **18** | **[MANDATORY]** Status reconciliation | COMPLETE if ACs met |

**RW rule (BR-097):** Post-ship waves use `RW E08:S03:T17 --art` only — no `--dpz` on follow-on BUILD.

### 4.1 Files to create or modify

See [ADR-022](../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md) component table.

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Tied to |
| ------ | ---- | ------ | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T17-*.md` | CREATE | IPW |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-022-*.md` | CREATE | §2.5 |
| D-U1 | `rw-config-schema.md` | UPDATE | RF7 |
| D-U2 | `release-workflow-agent-execution.md` | UPDATE | AC3 |
| D-U3 | `rw-validators-consumer-layout.md` | UPDATE | AC6 |
| D-U4 | `validators/README.md` | UPDATE | CQG index |
| D-C3 | `tooling-automation/docs/code-quality-gate-operator-guide.md` | CREATE | AC4, AC5 |
| D-C4 | `tooling-automation/docs/cqg-parity-template.md` | CREATE | AC2 |
| D-N1 | Docusaurus / portal | NONE | Developer KB only |

### 5.3 Documentation gaps

| Gap | Resolution |
| --- | ---------- |
| Local vs GitHub SoT | Operator guide §Trust model |
| CodeQL install | Operator guide §Prerequisites |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md` | NOT_APPLICABLE | evergreen |
| D-C3 | `packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md` | NOT_APPLICABLE | evergreen |

---

## 7. Success / verification criteria

- [x] AC1: CLI emits JSON + markdown @ known SHA
- [x] AC2: Parity template + procedure documented
- [x] AC3: RW Step 9 doc lists validator; advisory default (T7)
- [x] AC4: Monitor doc: 6h cron, HEAD skip, 12h staleness
- [x] AC5: Operator guide: local CQG vs T16 GitHub SoT
- [x] AC6: ADR-022 + schema extension complete
- [x] `pytest` green for code quality tests

---

## References

- [FR-113](../project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg-fr113.md)
- [T17](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)
- [ADR-022](../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)
- [GitHub Code Quality metrics](https://docs.github.com/en/code-security/code-quality/reference/metrics-and-ratings)
