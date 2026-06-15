---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T05 — Planning: CQG/CodeQL vs Actions CI ship gap (IPW)

**Host Task:** [`T05-github-actions-ci-health-perpetual.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) **(E02:S16:T05)**  
**Planning for:** [FR-112](../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md) · [BR-104](../kanban/fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md)  
**Status:** Approved — Wave 4 (CQG≠CI boundary + Step 9.7 hardening + migration race fix)  
**Predecessor:** [IPP-E08S03T15](IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md) (historical anchor E08:S03:T15)

> **IPW:** Perpetual lane for [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) workflow health. **Does not** own [code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) / [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (→ **E02:S16:T06**).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Standing perpetual lane owns Actions red-build triage on `main` / `dev` | T05, FR-112 F1 |
| RF2 | Wave 4a: Restore green **Tests** on `main`/`dev` @ integration SHA | Incident `main` @ `1bce576` |
| RF3 | Wave 4b: `migrate_to_v2` safe under concurrent `open_db` | BR-104, TC1 |
| RF4 | Wave 4c: `--strict` must not silently skip all parity checks; `--allow-path-skip` for `RW -d` only | BR-104, UXR-024 AC6 |
| RF5 | Wave 4d: `validate_github_actions_remote.py` — no-red-ship before push/batch push | OR-T15-2, RF8 |
| RF6 | Wave 4e: CQG validator emits **CQG ≠ CI ship gate** banner | OR-T15-3 |
| RF7 | Post-fix Actions baseline in T05 task doc | T05 AC4 pattern |
| RF8 | Close UXR-024 AC6 and FR-112 F1 with SHA evidence | FR-112 |
| RF9 | Code scanning / Code Quality → **E02:S16:T06** only | FR-112 NF1 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Changelog: **Change implemented** until operator verifies Actions green |
| RNF2 | Post-ship: **`RW E02:S16:T05 --art`** only (BR-097) |
| RNF3 | `sync_greenfield_install.py` when touching `packages/frameworks/**` |
| RNF4 | Perpetual BUILD on `RW E02:S16:T05` |

### 1.3 Invariants and boundaries

- CQG runs at **IDW Phase 6b** only (ADR-022); RW Step **9.7** is the release ship gate for workflow checks.
- Out of scope: T06 dashboard burn-down; Dependabot (E08:S03:T06); GitHub branch-protection UI.

---

## 2. Specification

### 2.1 Goal

Close the operator gap where **CodeQL/Code Quality workflows pass on GitHub while Tests fail**, by fixing the flaky migration race, hardening Step 9.7 local parity, and adding a remote no-red-ship check before push.

### 2.2 ADR necessity decision (§2.5)

**Outcome: EXEMPT** — extends FR-112 / UXR-024 / Step 9.7; no new architectural fork.

| T1–T7 | All N | Single-locus validator hardening |
| E1–E5 | All pass | Documented in BR-104 + operator guide |

### 2.3 Status transition intent

- **Current:** IN PROGRESS (perpetual)
- **After Wave 4:** Remains IN PROGRESS; version anchor on `RW E02:S16:T05 --art`

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| TC1 | Parallel `open_db` × 50 threads — no duplicate `semver_core` | RF3 |
| TC2 | `validate_actions_ci_parity --strict` empty diff → exit 1 | RF4 |
| TC3 | `--strict --allow-path-skip` → exit 0 | RF4 |
| TC4 | `--strict --all` runs 5 default checks | RF4 |
| TC5 | `run_tests_ci_parity.sh` green | RF2 |
| TC6 | `validate_github_actions_remote` unit tests (mock `gh`) | RF5 |
| TC7 | Operator Actions baseline all required **success** | RF7 |
| TC8 | Portal pytest if cheatsheet touched | P-PORTAL-LINKS |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Confirm T05 **IN PROGRESS**; update `Last updated` |
| 2 | Create this IPP + BR-104 |
| 3 | Fix `migrate.py` concurrency + TC1 |
| 4 | Harden `validate_actions_ci_parity.py` + tests |
| 5 | Add `validate_github_actions_remote.py` + wire rw-config / cheatsheet / RW Step 12 |
| 6 | CQG banner in `validate_code_quality_gate.py` |
| 7 | Local verify TC5 + `validate_actions_ci_parity.py --strict --all` |
| 8 | `RW E02:S16:T05 --art` |
| 9 | Operator TC7; close UXR-024 AC6 + FR-112 F1 |
| **10** | Reconcile T05 — remain IN PROGRESS (perpetual) |

**RW rule:** Post-ship → `RW E02:S16:T05 --art` only.

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | This IPP | CREATE |
| D-C2 | `docs/kanban/fr-br/BR-104-*.md` | CREATE |
| D-U1 | T05 task doc | UPDATE |
| D-U2 | FR-112 | UPDATE |
| D-U3 | UXR-024 | UPDATE |
| D-U4 | cheatsheet §2 | UPDATE |
| D-U5 | code-quality-gate-operator-guide.md | UPDATE |

---

## 6. Documentation housing

| Doc ID | Path | Lifecycle |
| ------ | ---- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md` | evergreen |
| D-C2 | `docs/kanban/fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md` | evergreen |

---

## 7. Success / verification criteria

- [x] Tests workflow **success** on `main` and `dev` (TC7 — verified **v0.2.16.5+11**; `dev` @ `1c48ba58`, Wave 8 @ `d20a91ab`)
- [x] `--strict` cannot silently skip all parity checks (TC2)
- [x] Remote GH check in batch-push runbook (TC6)
- [x] IPP bidirectionally linked from T05 + kboard
- [x] UXR-024 AC6 and FR-112 F1 closed with evidence
- [x] T05 remains IN PROGRESS (perpetual)

---

## References

- [FR-112](../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [BR-104](../kanban/fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md)
- [IPP-E08S03T15](IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md)
- [UXR-024](../kanban/fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
