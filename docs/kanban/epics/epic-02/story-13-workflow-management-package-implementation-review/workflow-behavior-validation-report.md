---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Management Package — Behavior Validation Report

**Task:** [E02:S13:T03](T03-validate-workflow-behavior-against-documented-guidance.md)  
**Expectations baseline:** [T01-expectations-baseline.md](T01-expectations-baseline.md)  
**Component inventory:** [component-inventory-map.md](component-inventory-map.md)  
**Code review input:** [E07:S07:T01 report §1–7](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)  
**Doc sync baseline:** [T08 sync task](T08-sync-packaged-workflows-with-live-repo-implementation.md)  
**Package root:** `packages/frameworks/workflow-mgt/`  
**Validation date:** 2026-06-05

**Status legend:** `PASS` | `PARTIAL` | `FAIL`

---

## Executive Summary

Behavioral validation confirms **RW doc/live parity is PASS** post-T08 and **core validators execute correctly** in the ai-dev-kit reference repo. Remaining gaps are **cohesion and documentation drift**, not broken Step 1/9 gates:

- **0 Critical** behavioral defects
- **2 High** (flat YAML adopter hazard H2; kanban update fragmentation H3 — confirmed)
- **4 Medium** (README path M2; config loader M1; intake step model M-new; T01 perpetual-task ID staleness)
- **2 Low** (T01 UKW 8-step lag; E07 H1 partially superseded by new CI workflow)

Overall RC posture: **conditional pass** — package behaves as documented for RW gates and validator execution; remediation backlog (T05) should prioritize flat YAML deprecation and kanban transform consolidation.

---

## Summary — Discrepancy Table (feeds T05)

**Consolidated in:** [E02:S13:T05 gap log](T05-create-gap-log-and-risk-assessment.md) (16 gaps; 0 Critical, 2 High, 10 Medium, 4 Low).

| ID | Domain | Status | Severity | Evidence / notes |
| -- | ------ | ------ | -------- | ---------------- |
| D1 | RW doc/live parity | **PASS** | — | `validate_canonical_steps.py` exit 0; 1b/1c/1d in portable excerpt + `.cursorrules` |
| D2 | RW validator runtime | **PASS** | — | Branch context, version bump, resolve_rw_build smoke tests pass |
| D3 | UKW live step model | **PASS** | — | Registry + UKW guide: 9 steps + Step 2.5; flags documented |
| D4 | UKW vs T01 baseline | **PARTIAL** | Low | T01 lists 8 steps; live is 9+2.5 (doc lag only) |
| D5 | CMW deterministic execution | **PASS** | — | `check_changelog_size.py` runs from `scripts/changelog/` |
| D6 | CMW README path | **PARTIAL** | Medium (M2) | README lists non-existent `scripts/validation/check_changelog_size.py` **and** correct `changelog/` path |
| D7 | Intake script chain | **PASS** | — | 6 `intake_*.py` modules present |
| D8 | Intake step model vs T01 | **PARTIAL** | Medium | T01: 7 steps; nested YAML: 8 steps (adds repository assignment step-2) |
| D9 | Config `load_rw_config` | **PARTIAL** | Medium (M1) | 20+ independent implementations; no shared module |
| D10 | Flat workflow YAML | **PARTIAL** | High (H2) | 6 non-deprecated flat copies at `workflows/*.yaml` (RW stub deprecated) |
| D11 | Kanban update paths | **PARTIAL** | High (H3) | RW Step 7, UKW, `update_kanban_docs.py` — overlapping transform logic |
| D12 | CI pytest gate | **PASS** | — | `.github/workflows/workflow-scripts-pytest.yml` + 113 local pytest passes (H1 partially remediated) |
| D13 | T01 perpetual task IDs | **PARTIAL** | Low | T01 cites E02:S16:T03 for UKW+CMW; live wiring uses dynamic discovery (E6:S06:T101 pattern in `.cursorrules`) |
| D14 | Versioning validators | **PASS** | — | `validate_version_bump.py --art`, `semver_converter.py` behave as documented |

---

## 1. RW Behavioral Validation

### 1.1 Step model and gates

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| 13-step RW with mandatory Step 1 blocking | `canonical-rw-steps.yaml` v2.0.0; gates 1b/1c/1d before Step 2 | **PASS** |
| `validate_branch_context.py --strict` blocks on failure | Ran exit 0 on `dev` branch | **PASS** |
| FR-060 task token + doc + intent guards | Present in `.cursorrules` 6b–6d and portable excerpt 5b–5d | **PASS** |
| BR-097 `resolve_rw_build.py` before version write | Script exists; `--requested E02:S13:T03` returns JSON `next_build` | **PASS** |
| UKW/CMW context attribution | Portable excerpt + `.cursorrules` document perpetual-task discovery | **PASS** |
| Atomicity / RW BLOCKED contract | Documented in portable excerpt and vwmp guide | **PASS** (doc-level; agent enforcement not unit-tested) |

**Evidence (V1):**

```
$ python packages/frameworks/workflow-mgt/scripts/validate_canonical_steps.py
✅ All validations passed! No issues found.
```

**Evidence (V3):**

```
$ python .../validate_branch_context.py --strict
✅ Branch context validation passed!

$ python .../validate_version_bump.py --strict --requested E02:S13:T03 --art
✅ Version bump logic validated!

$ python .../version/resolve_rw_build.py --requested E02:S13:T03
{"next_build": 2, "reason": "same_task_build_plus_one", ...}
```

### 1.2 Doc/live parity (V2)

| Checklist item (`rw-trigger-dual-source-parity.md`) | Root `.cursorrules` | Portable excerpt | Result |
| --------------------------------------------------- | ------------------- | ---------------- | ------ |
| Step 1 branch safety | Y | Y | PASS |
| Step 1b task token (FR-060) | Y (6b) | Y (5b) | PASS |
| Step 1c task doc releasable | Y (6c) | Y (5c) | PASS |
| Step 1d task intent guard | Y (6d) | Y (5d) | PASS |
| Step 9 validator set (FR-097/092) | Y | Y | PASS |
| Step 7 scoped kanban (FR-092) | Y | Y | PASS |
| BR-097 build resolver | Y | Y | PASS |
| Cosmetic gate numbering (6b vs 5b) | Documented as acceptable | — | PASS |

---

## 2. UKW Behavioral Validation

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| 8-step UKW (T01) | Live: 9 steps + Step 2.5 + flags in UKW guide and registry | **PARTIAL** (T01 lag) |
| Bottom-up Tasks→Stories→Epics→Board | Documented in UKW guide Step 3–6 order | **PASS** |
| MoSCOW updated last | UKW guide Step 6 explicit | **PASS** |
| Perpetual task wiring (Step 1) | Dynamic `perpetual_task: true` discovery; not hard-coded ID | **PASS** |
| FR-097 stamp rules | UKW guide + `.cursorrules` UKW block | **PASS** |
| Flags `-u/-p/-a/--rp/-c` | Present in UKW guide and portable UKW excerpt | **PASS** |

**Registry evidence (V5):** `workflow-registry.yaml` UKW entry: `steps: 9`, description includes Step 2.5 and flags.

---

## 3. CMW Behavioral Validation

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| Deterministic rule-based scripts | `scripts/changelog/cmw.py` + 7 supporting modules | **PASS** |
| Non-blocking Step 9.5 | Documented in RW spec; failures don't abort RW | **PASS** (doc-level) |
| `check_changelog_size` triggers CMW | Script at `scripts/changelog/check_changelog_size.py` runs | **PASS** |
| README path for size check | Lists **both** `validation/` (missing) and `changelog/` (correct) | **PARTIAL** (M2) |

**Evidence (V4):**

```
$ test -f packages/frameworks/workflow-mgt/scripts/validation/check_changelog_size.py
MISSING

$ python packages/frameworks/workflow-mgt/scripts/changelog/check_changelog_size.py
Status: ✅ OK (554 lines, threshold 1000)
```

---

## 4. Intake Behavioral Validation

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| 7-step intake flow | Nested `intake-workflow/intake-workflow.yaml` defines **8** steps (step-1…step-8) | **PARTIAL** |
| 6 intake Python modules | `intake_decision_flow.py`, `intake_task_creation.py`, etc. — 6 files | **PASS** |
| FR/BR/UXR → Kanban automation | Handlers referenced in nested YAML (`intake.document_load`, etc.) | **PASS** |
| Flat vs nested YAML drift | Flat `workflows/intake-workflow.yaml` differs from nested SoT (description, step-2 naming) | **PARTIAL** (H2 related) |

**T01 documented steps vs nested YAML:**

| T01 step | Nested YAML step |
| -------- | ---------------- |
| 1. Load & Parse | step-1 |
| 2. Decision Flow | step-3 (step-2 is Repository Assignment — not in T01) |
| 3. Create Tasks | step-4 |
| 4. Update FR/BR/UXR | step-5 |
| 5. Wire Dependencies | step-6 |
| 6. Assign Version | step-7 |
| 7. Validate & Report | step-8 |

---

## 5. Config and Versioning Behavior

### 5.1 Config loading (V7)

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| `rw-config.yaml` as SoT | `rw-config.yaml` at repo root; validators read it | **PASS** |
| Consistent config loader | **20+** independent `load_rw_config` definitions across scripts | **PARTIAL** (M1) |

**Sample implementations:** `changelog_utils.py`, `stamp_authority.py`, `validate_branch_context.py`, `validate_version_bump.py`, `resolve_rw_build.py`, `semver_converter.py`, `update_kanban_docs.py`, and 13+ others.

### 5.2 Versioning validators

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| `RC.EPIC.STORY.TASK+BUILD` schema | `validate_version_bump.py` validates against story/task docs | **PASS** |
| SemVer external display | `semver_converter.py "0.2.13.3+0"` → `0.4.935+0` (task-touch mode) | **PASS** |
| Doc-init BUILD+0 | Validator supports `--doc-policy-zero` path per BR-067 | **PASS** (doc + validator present) |

---

## 6. Flat YAML Adopter Hazard (V8)

| Workflow | Nested SoT | Flat `workflows/*.yaml` | Deprecated? |
| -------- | ---------- | ----------------------- | ----------- |
| RW | `release-workflow/` | `release-workflow.yaml` | **Yes** (T08 stub) |
| Intake | `intake-workflow/` | `intake-workflow.yaml` | **No** |
| PVW | `package-version-workflow/` | `package-version-workflow.yaml` | **No** |
| PIR | `post-implementation-review/` | `pir-workflow.yaml` | **No** |
| Migration | `migration-workflow/` | `migration-workflow.yaml` | **No** |
| Testing | `testing-workflow/` | `testing-workflow.yaml` | **No** |
| Refactor | `refactor-workflow/` | `refactor-workflow.yaml` | **No** |

**Count:** 6 active flat duplicates — **PARTIAL / High (H2)**. Adopters editing flat copies will not see nested SoT updates.

---

## 7. E07 Crosswalk

| E07 ID | T03 confirmation | Notes |
| ------ | ---------------- | ----- |
| H1 CI pytest gate | **Partially superseded** | `workflow-scripts-pytest.yml` now exists; local run: 113 passed |
| H2 Flat YAML duplication | **Confirmed** | 6 non-deprecated flat copies |
| H3 Kanban update fragmentation | **Confirmed** | Multiple paths documented; no behavioral regression found in validators |
| M1 Duplicate `load_rw_config` | **Confirmed** | 20+ implementations |
| M2 README `check_changelog_size` path | **Confirmed** | `validation/` path missing on disk |
| M3 T01 baseline stale | **Confirmed** | UKW steps, perpetual IDs, validator count |
| M4 Legacy `confidentia` KB examples | **Not re-tested** | Out of scope for runtime behavior; defer to T05 doc sweep |
| M5 Co-located tests not in root pytest.ini | **Mitigated** | `run_workflow_scripts_ci_pytest.sh` collects script tests |
| M6 `validate_release_readiness.py` layout | **Confirmed** | Root orchestrator vs `validation/` peers — intentional layering per FR-092 |

---

## 8. Automated Verification Evidence (V1–V10)

| ID | Check | Result | Evidence |
| -- | ----- | ------ | -------- |
| V1 | `validate_canonical_steps.py` | **PASS** | Exit 0, no issues |
| V2 | Dual-source parity checklist | **PASS** | 1b/1c/1d + Step 9 set aligned |
| V3 | Validator smoke tests | **PASS** | branch_context, version_bump, resolve_rw_build |
| V4 | CMW `check_changelog_size` path | **PARTIAL** | Runs from `changelog/`; README lists wrong `validation/` path |
| V5 | UKW step model | **PASS** (live) / **PARTIAL** (T01) | Registry: 9 steps + 2.5 |
| V6 | pytest + CI | **PASS** | 113 passed; `workflow-scripts-pytest.yml` present |
| V7 | Config loader fragmentation | **PARTIAL** | 20+ `load_rw_config` implementations |
| V8 | Flat YAML hazard | **PARTIAL** | 6 non-deprecated flat copies |
| V9 | Scope guard | **PASS** | No package functional edits |
| V10 | Wiring | **PASS** | Task ↔ IPP ↔ companion links |

---

## 9. Compliance Assessment

| Workflow / area | Compliance | Remediation owner |
| --------------- | ---------- | ----------------- |
| RW gates + validators | **Fully compliant** | — |
| RW doc/live parity | **Fully compliant** (post-T08) | Ongoing parity maintenance |
| UKW live behavior | **Fully compliant** | T01 doc refresh → T05 |
| CMW runtime | **Fully compliant** | README path fix → T05 |
| Intake runtime | **Mostly compliant** | Step model doc alignment → T05 |
| Adopter YAML hygiene | **Partially compliant** | FR-050 flat deprecation → T05/T06 |
| Config cohesion | **Partially compliant** | Shared loader → T05/T06 |
| CI regression safety | **Compliant** (improved since E07) | Monitor CI green |

---

## References

- [IPP-E02S13T03](../../../../implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md)
- [T03 task doc](T03-validate-workflow-behavior-against-documented-guidance.md)
- [T01 expectations baseline](T01-expectations-baseline.md)
- [T02 component inventory](component-inventory-map.md)
- [E07:S07:T01 report](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [rw-trigger-dual-source-parity.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md)
- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)
