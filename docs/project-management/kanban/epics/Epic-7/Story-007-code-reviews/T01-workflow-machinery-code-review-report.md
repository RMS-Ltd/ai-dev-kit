---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T21:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Machinery Code Review Report — E07:S07:T01

**Task:** [E07:S07:T01](./T01-comprehensive-workflow-machinery-code-review.md)  
**FR:** [FR-107](../../../fr-br/FR-107-comprehensive-workflow-machinery-code-review.md)  
**Review date:** 2026-06-03  
**Package:** `packages/frameworks/workflow mgt/`  
**Inputs:** [E02:S13:T01](../../Epic-2/Story-013-workflow-management-package-implementation-review/T01-expectations-baseline.md), [E02:S13:T08 sync report](../../Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md), [IPP-E07S07T01](../../../../implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review.md)

---

## Executive summary

The Workflow Management package is **functionally rich** (~107 production Python modules, 24 workflow YAML artefacts, extensive vwmp/KB docs) and **doc-aligned after E02:S13:T08**, but the **code and script surface shows organic fragmentation** from incremental delivery. No Critical runtime defects were found in static review; the primary risks are **maintainer cost**, **adopter confusion**, and **RC sign-off blind spots** from duplicated paths, parallel kanban update machinery, inconsistent config-loading helpers, stale documentation references, and **weak CI test coverage** for the script corpus.

**Top improvement themes:**

1. Consolidate **kanban update** and **config loading** shared utilities.
2. Complete **workflows directory reorganization** (FR-050) — flat + nested YAML duplication persists for 7 workflows.
3. Fix **documentation drift** (wrong script paths, legacy `confidentia` examples in KB).
4. Add **CI pytest gate** for workflow script suites (isolated validation + co-located tests).
5. Retire or quarantine **packaging/build/upload** scripts with unclear adopter value.

---

## 1. Component inventory

### 1.1 Scripts by area

| Area | Prod `.py` | Tests | Owner tag | Notes |
| ---- | ---------- | ----- | --------- | ----- |
| `scripts/validation/` | 27 | 9 | RW/shared | Step 9 gates, IPW wiring, board stamps, semver |
| `scripts/kanban/` | 15 | 4 | UKW/RW | MoSCOW, stamps, archive, EST format, UKW parser |
| `scripts/` (root) | 35 | 17 | RW/Intake/shared | `update_kanban_docs.py`, installers, triggers, intake chain |
| `scripts/changelog/` | 8 | 0 | CMW | `cmw.py`, size check, archive, dedupe |
| `scripts/journal/` | 8 | 0 | RW/shared | FR-059 forensic logging |
| `scripts/documentation/` | 6 | 0 | shared | Doc sync/validate helpers |
| `scripts/version/` | 3 | 4 | RW/PVW | semver, registry, migration |
| `scripts/icw/` | 2 | 3 | ICW/IPW | handler + task id validate |
| `scripts/task_split/` | 3 | 0 | Intake/shared | FR-011 split engine |
| `scripts/validation/package/` | 4 | 0 | PVW | package version validators |

**Additional root scripts (selected):**

| Script | Owner | Documented in T01 baseline |
| ------ | ----- | -------------------------- |
| `update_kanban_docs.py` | RW/UKW | Partial (Step 7 implied) |
| `validate_release_readiness.py` | RW | No (post-T08 addition) |
| `validate_rw_step7_completeness.py` | RW | No |
| `validate_rw_step7_post_commit.py` | RW | No |
| `validate_canonical_steps.py` | RW/shared | No |
| `validate-workflow-docs.py` | shared | No |
| `install_release_workflow.py` | RW | Yes |
| `intake_*.py` (6 modules) | Intake | Partial |
| `trigger_registry.py`, `workflow_executor.py` | RW/E2:S07 | Partial |
| `build_*`, `upload_*` (6 modules) | packaging | No |

### 1.2 Workflows (YAML)

| Workflow | Nested SoT | Flat legacy copy | Registry |
| -------- | ---------- | ---------------- | -------- |
| RW | `release-workflow/` | Deprecated stub | Yes |
| UKW | `update-kanban-workflow/` | `update-kanban-workflow.yaml` at root | Yes |
| CMW | `changelog-management-workflow/` | `changelog-management-workflow.yaml` | Yes |
| Intake | `intake-workflow/` | `intake-workflow.yaml` | Yes |
| PVW | `package-version-workflow/` | `package-version-workflow.yaml` | Yes |
| PIR | `post-implementation-review/` | `pir-workflow.yaml` | Yes |
| ICW | `implementation-cycle-workflow/` | — | Yes |
| Migration | `migration-workflow/` | `migration-workflow.yaml` | Yes |
| Testing | `testing-workflow/` | `testing-workflow.yaml` | Yes |
| Refactor | `refactor-workflow/` | `refactor-workflow.yaml` | Yes |
| FHM | `framework-health-monitoring-workflow/` | — | Yes |

**Count:** 8 flat root YAML + 16 nested YAML; RW flat copy deprecated (T08); **7 flat copies remain** without deprecation headers.

### 1.3 Cross-cutting artefacts

| Artefact | Owner | Role |
| -------- | ----- | ---- |
| `canonical-rw-steps.yaml` | RW | Step list SoT (refreshed T08) |
| `workflow-registry.yaml` | shared | Workflow metadata |
| `cursorrules-*-trigger-section.md` | RW/UKW | Portable adopter excerpts |
| `config/examples/*.yaml` | RW | Installer templates |
| `agents/*.md` | per workflow | Agent bootstrap (12 files) |

---

## 2. Expectations gap table (E02:S13:T01)

| T01 expectation | Inventory status | Gap |
| --------------- | ---------------- | --- |
| RW 13-step process | Live spec + YAML + validators | **Met** (T08 sync); machinery adds Step 9.5/9.6/12.5 validators beyond original T01 Step 9 list |
| UKW 8-step (T01) → live 9 + 2.5 | UKW scripts + YAML | **Doc lag:** T01 says 8 steps; live UKW is 9 + optional 2.5/flags |
| CMW deterministic scripts | `scripts/changelog/` | **Met** |
| Intake 7-step | 6 `intake_*.py` + YAML | **Met** |
| Validation scripts (4 listed in T01) | 27 in `validation/` + root gates | **Expansion:** many validators added since T01; README still lists wrong path for `check_changelog_size` |
| `scripts/validation/check_changelog_size.py` | **Only** `scripts/changelog/check_changelog_size.py` | **Orphan doc path** in README + T01 |
| PVW, PIR, migration, testing, refactor YAML | Present | **Met** (T01 listed subset) |
| `version_registry.py` (T01) | Not found; `build_semver_registry.py`, `migrate_to_task_touch.py` exist | **Renamed/superseded** — update T01/baseline on T02 |
| GitHub release script | `create_github_release.py` | **Met** |
| Installers | `install_release_workflow.py` + greenfield/package helpers | **Met**; additional install scripts not in T01 |
| Agent execution guides | vwmp/KB | **Met**; some KB paths still use `confidentia` examples |

**Orphan / undertdocumented components (not in T01 baseline):**

- `validate_release_readiness.py`, `validate_rw_step7_*`, `validate_ipw_*`, `validate_plan_wiring.py`
- `scripts/journal/*` (FR-059)
- `scripts/task_split/*` (FR-011)
- `scripts/documentation/*`
- Packaging scripts: `build_all_packages.py`, `upload_to_github_release.py`, etc.

---

## 3. Fragmentation and duplication matrix

| Class | Locations | Impact | Post-T08 |
| ----- | --------- | ------ | -------- |
| **Kanban update paths** | `update_kanban_docs.py`; RW Step 7 agent manual edits; UKW agent flow; `validate_rw_step7_*`; kanban/* stamp scripts | High — same four-surface contract enforced in multiple places; drift risk | Partially mitigated by FR-092/097 validators |
| **Config loading** | `changelog_utils.load_rw_config`; `stamp_authority.load_rw_config`; `validate_kanban_moscow_spacing.load_rw_config`; per-script inline YAML reads | Medium — inconsistent defaults and path resolution | None |
| **EST parsing/format** | `kanban/est_format.py`, `ukw_syntax_parser.py`, validators, inline regex | Medium — duplication of E:S:T token rules | UXR-014 padding partially centralized |
| **Flat vs nested workflow YAML** | 7 flat `workflows/*.yaml` + nested dirs | Medium — adopters may edit wrong file | RW flat stub deprecated; others not |
| **Changelog size check path** | Docs say `validation/`; code in `changelog/` | Low — doc-only confusion | Open |
| **Dual-source agent spec** | Root `.cursorrules` vs portable excerpts vs vwmp guides | Medium — T08 closed RW/UKW parity; ongoing maintenance burden | Mitigated by parity checklist |
| **Step 7 vs Step 9 kanban validators** | `validate_board_stamp_diff`, `validate_kanban_state_icons`, `validate_release_readiness` | Low — intentional layering; complex for adopters | By design (FR-097/092) |

---

## 4. Efficiency recommendations

| ID | Recommendation | Evidence | Effort | Impact |
| -- | -------------- | -------- | ------ | ------ |
| E1 | **Shared `rw_config_loader` module** used by changelog, kanban, validation scripts | 3+ independent `load_rw_config` implementations | Medium | High — fewer path bugs |
| E2 | **FR-050 workflows directory cleanup** — deprecate or remove 7 flat YAML copies; single nested SoT per workflow | `workflows/*.yaml` vs `workflows/*/` | Medium | High — adopter clarity |
| E3 | **Fix README/T01 script paths** for `check_changelog_size.py` | Only exists under `scripts/changelog/` | Low | Medium |
| E4 | **CI job: workflow script pytest** — run `validation/run_isolated_pytest.sh` + targeted `scripts/**/test_*.py` | CI only runs `build_all_packages.sh` | Medium | High — regression safety |
| E5 | **Kanban module boundary doc** — when to use `update_kanban_docs.py` vs agent-only Step 7 vs UKW | Multiple IPPs reference overlapping behavior | Low | Medium |
| E6 | **KB confidentia example sweep** — replace with `{project}` / rw-config placeholders in vwmp guides | 15+ `confidentia` references in KB | Low | Medium (adopter UX) |
| E7 | **Audit packaging scripts** (`build_*`, `upload_*`) — document adopter-facing vs maintainer-only or move to dev-only | 6 root scripts, unclear in README | Low | Low |
| E8 | **Consolidate RW Step 7 validators** — document relationship between `validate_rw_step7_completeness`, `validate_rw_step7_post_commit`, and `validate_release_readiness` Gate 5 | Three overlapping completeness checks | Medium | Medium |

---

## 5. Findings by severity

### Critical

*None identified in static review.* (No evidence of broken Step 9 validator paths post-T08; live `.cursorrules` matches packaged excerpt.)

### High

| ID | Finding | Evidence | Remediation |
| -- | ------- | -------- | ----------- |
| H1 | **No CI pytest gate** for workflow script corpus | `.github/workflows/framework-release.yml` only runs `build_all_packages.sh` | E07:S07:T02 or E2:S13 task: add CI workflow running isolated validation pytest + key co-located tests |
| H2 | **Seven non-deprecated flat workflow YAML** duplicate nested SoT | `workflows/intake-workflow.yaml`, etc. | Execute FR-050; add deprecation stubs like RW (T08 pattern) |
| H3 | **Kanban update fragmentation** — RW Step 7, UKW, and `update_kanban_docs.py` share row-transform logic with risk of divergent behavior | Multiple IPPs (E2:S15, E4:S19); `apply_canonical_row_transform_pipeline` in update script | E02:S13:T05 gap item: shared kanban transform module + single entrypoint doc |

### Medium

| ID | Finding | Evidence | Remediation |
| -- | ------- | -------- | ----------- |
| M1 | **Duplicate `load_rw_config` implementations** | `changelog_utils.py`, `stamp_authority.py`, `validate_kanban_moscow_spacing.py` | E1 shared module |
| M2 | **README lists non-existent** `scripts/validation/check_changelog_size.py` | README lines ~126–131; glob shows only `scripts/changelog/` | E3 doc fix |
| M3 | **T01 baseline stale** — validator count, UKW step count, `version_registry.py` path | T01 vs live package | Refresh during E02:S13:T02 inventory |
| M4 | **Legacy `confidentia` examples** in vwmp/KB (not runtime code) | `release-workflow-agent-execution.md`, portable guide, versioning-policy | E6 KB sweep |
| M5 | **36 co-located tests** not in root `pytest.ini` testpaths | `tests/` vs `scripts/**/test_*.py` | Document runner script; include in E4 CI |
| M6 | **`validate_release_readiness.py` at scripts root** while peers in `validation/` | Inconsistent layout | Move or document as intentional orchestrator |

### Low

| ID | Finding | Evidence | Remediation |
| -- | ------- | -------- | ----------- |
| L1 | Empty `scripts/install/` directory | 0 files | Remove or populate |
| L2 | Multiple packaging/upload scripts with overlapping names | `build_package.py`, `build_packages_direct.py`, etc. | E7 audit |
| L3 | `changelog/` subdir has 0 tests; CMW is deterministic | No `test_*.py` in changelog/ | Optional test_add in remediation |
| L4 | Journal module untested in isolated pytest config | 8 prod files, 0 co-located tests | Optional coverage task |

---

## 6. Remediation backlog (proposed)

| Priority | Proposed work | Host | Notes |
| -------- | ------------- | ---- | ----- |
| 1 | CI pytest gate for workflow scripts | E07:S07:T02 or E02:S13 | Implements H1 |
| 2 | FR-050 workflow directory reorg + flat YAML deprecation | E02:S13 or FR-050 task | Implements H2 |
| 3 | Shared `rw_config` + kanban transform consolidation | E02:S13:T05/T06 | H3, M1, E1 |
| 4 | Documentation path/KB sweep (check_changelog_size, confidentia) | E05 or E07:S07:T03 | M2, M4, E3, E6 |
| 5 | Refresh E02:S13:T01 baseline from this inventory | E02:S13:T02 | M3 |
| 6 | Packaging script audit | E07:S07:T04 optional | L2, E7 |

*All remediation implementation requires separate IPP per FR-083.*

---

## 7. E02:S13 RC gate summary (feeds T05/T06)

| RC theme (T05/T06) | Review outcome |
| ------------------ | -------------- |
| Component inventory mapped to expectations | **Partially ready** — this report provides inventory; T02 should formalize in gap log |
| Behavioral validation | **Doc behavior aligned (T08)**; **code cohesion gaps** (H2, H3, M1) remain |
| Integration alignment | **Soft deps OK**; config loading fragmentation (M1) affects adopter integration |
| Gap log severity | **0 Critical, 3 High, 6 Medium, 4 Low** |
| RC sign-off recommendation | **Conditional** — RC may proceed for doc-aligned adopters **after** H2 (flat YAML) and H1 (CI) are scheduled; **not blocking** on full consolidation if remediation backlog is accepted |

**Cross-links:**

- [Story-013](../../Epic-2/Story-013-workflow-management-package-implementation-review.md) — code review gate satisfied by this report
- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md) — primary structural remediation
- [FR-106](../../../fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md) — doc parity (complete); machinery review complements

---

## 8. Verification checklist (IPP §3)

| ID | Check | Result |
| -- | ----- | ------ |
| V1 | Inventory covers all `scripts/` subdirs + workflow packages | PASS |
| V2 | T01 expectations mapped; orphans flagged | PASS |
| V3 | ≥3 duplication classes with evidence | PASS (kanban paths, config load, flat YAML) |
| V4 | Efficiency items cite file paths | PASS |
| V5 | Critical/High findings have remediation rows | PASS (no Critical; H1–H3 remediated) |
| V6 | E02:S13 RC linkage section present | PASS (§7) |
| V7 | Test coverage gap noted | PASS (H1, M5) |

---

## References

- [IPP-E07S07T01](../../../../implementation-cycles/IPP-E07S07T01-workflow-machinery-code-review.md)
- [code-review-standards-and-guidelines.md](../../../../architecture/standards-and-adrs/code-review-standards-and-guidelines.md)
- [rw-trigger-dual-source-parity.md](../../../../../packages/frameworks/workflow%20mgt/docs/rw-trigger-dual-source-parity.md)
