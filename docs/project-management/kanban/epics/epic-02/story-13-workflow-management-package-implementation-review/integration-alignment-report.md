---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Management Package — Integration and Dependency Alignment Report

**Task:** [E02:S13:T04](T04-review-integrations-and-dependency-alignment.md)  
**Expectations baseline:** [T01-expectations-baseline.md](T01-expectations-baseline.md) — §Integration Expectations  
**Component inventory:** [component-inventory-map.md](component-inventory-map.md)  
**Behavior validation input:** [workflow-behavior-validation-report.md](workflow-behavior-validation-report.md) — D9, D11  
**Code review input:** [E07:S07:T01 report §Integration](../../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)  
**Live reference config:** `rw-config.yaml` (project root)  
**Package root:** `packages/frameworks/workflow-mgt/`  
**Review date:** 2026-06-05

**Status legend:** `ALIGNED` | `PARTIAL` | `GAP`

---

## Executive Summary

Integration alignment confirms **documented soft-dependency contracts are sound** — hard deps, `rw-config.yaml` hub, Kanban/Versioning integration keys, three-way forensic traceability, and cross-workflow surfaces are **ALIGNED** at the contract level. **Cohesion gaps** from E07 (H3 kanban update fragmentation, M1 config loader duplication, registry `common_components` drift, README Step 4 vs Step 7 Kanban wording) remain **PARTIAL** and do not block RC integration posture but increase adopter drift risk.

- **0 Critical** integration defects
- **1 High** (H3 — kanban update path fragmentation affects integration maintainability)
- **4 Medium** (M1 config loaders; README Kanban step drift; registry `common_components`; README vwmp path alias)
- **2 Low** (T01 perpetual-task ID examples; optional `notion_hub_url` not in schema doc)

Overall RC integration posture: **conditional pass** — contracts align; cohesion remediation deferred to T05/T06.

---

## Summary — Discrepancy Table (feeds T05)

| ID | Domain | Status | Severity | Evidence / notes |
| -- | ------ | ------ | -------- | ---------------- |
| I1 | Hard dependencies | **ALIGNED** | — | README + `INSTALL_IN_YOUR_PROJECT.md` document Git, Python 3, PyYAML; `--check-deps` path |
| I2 | Versioning soft dependency | **ALIGNED** | — | `versioning-policy.md` in package KB; validators + task-touch in live `rw-config.yaml` |
| I3 | Kanban soft dependency (contract) | **ALIGNED** | — | `use_kanban: true`; path patterns; FR-092 Step 7 in live spec |
| I4 | Kanban README step drift | **PARTIAL** | Medium | README cites Kanban at RW **Step 4**; live agent spec: **Step 7** |
| I5 | Three-way stack traceability | **ALIGNED** | — | T03 release chain: `version.py` → changelog → task doc → kboard (see §4) |
| I6 | rw-config integration hub | **ALIGNED** | — | Live config satisfies schema required + Mode C keys |
| I7 | Cross-workflow registry | **PARTIAL** | Low | 11 workflows registered; no explicit `dependencies` block in registry YAML |
| I8 | Intake→Kanban | **ALIGNED** | — | `kanban_integration: true` in intake README + config examples |
| I9 | PIR cross-integration docs | **ALIGNED** | — | `pir-kanban-integration-guide.md`, `pir-versioning-integration-guide.md` present |
| I10 | Config loader fragmentation | **PARTIAL** | Medium (M1) | **22** independent `load_rw_config` definitions |
| I11 | Kanban path fragmentation | **PARTIAL** | High (H3) | RW Step 7 agent + `update_kanban_docs.py` + UKW + `validate_rw_step7_*` |
| I12 | Registry `common_components` | **GAP** | Medium | Registry cites `common/templates/`, `schemas/`, `utilities/` — dirs absent |
| I13 | Adopter packaging | **ALIGNED** | — | README scenarios + `framework-dependency-architecture.md` + install modes A/B/C |
| I14 | ECC optional harness (FR-098) | **ALIGNED** | — | Spec linked; `ecc-adk-bridge.yaml.template` + skills pack present |
| I15 | GitHub external integration | **ALIGNED** | — | `create_github_release.py`; `templates/github-actions/` BYOB workflow |
| I16 | `scripts_path` adopter layout | **ALIGNED** | — | Live: `packages/frameworks/workflow-mgt/scripts`; schema documents brownfield mapping |

---

## 1. Hard Dependencies

| Expectation (T01/README) | Observed | Status |
| ------------------------ | -------- | ------ |
| Git required | README dependency matrix: Hard \| Git \| Yes | **ALIGNED** |
| Python 3 required | README + installer docs | **ALIGNED** |
| PyYAML `>=6.0` for installer | README §Hard dependencies; `INSTALL_IN_YOUR_PROJECT.md` `--check-deps` | **ALIGNED** |
| Installer venv guidance | `INSTALL_IN_YOUR_PROJECT.md` §Installer venv dependencies | **ALIGNED** |
| Independence score 9/10 | README claim; soft deps optional | **ALIGNED** |

**Evidence (V1):** README lines 164–206; `install_release_workflow.py --check-deps` documented in `INSTALL_IN_YOUR_PROJECT.md`.

---

## 2. Versioning Soft Dependency

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| RW uses `RC.EPIC.STORY.TASK+BUILD` | `rw-config.yaml`: `versioning_schema`; packaged `KB/Architecture/Standards_and_ADRs/versioning-policy.md` | **ALIGNED** |
| SemVer external display | `semver_converter.py`; `semver_mapping_strategy: task_touch` in live config | **ALIGNED** |
| `validate_version_bump.py` contract | Smoke test exit 0 with `--requested E02:S13:T04 --art` | **ALIGNED** |
| Optional swap own policy | README §With Numbering & Versioning — soft dependency | **ALIGNED** |
| Packaged vs project governance path | Package ships KB copy; ai-dev-kit also has `docs/governance/standards/dev-kit-versioning-policy.md` | **ALIGNED** (dual SoT by design for adopters) |

**Evidence (V3):**

```
$ python .../validate_version_bump.py --strict --requested E02:S13:T04 --art
✅ Version bump logic validated!
```

---

## 3. Kanban Soft Dependency

| Expectation (T01) | Observed | Status |
| ----------------- | -------- | ------ |
| `use_kanban` toggle | Live `rw-config.yaml`: `use_kanban: true` | **ALIGNED** |
| Path patterns (`kanban_root`, epic/story/task patterns) | Live config matches `rw-config-schema.md` Mode C | **ALIGNED** |
| RW Step 7 four-surface contract | FR-092 in live `.cursorrules` + portable excerpt; release-workflow README Step 7 | **ALIGNED** |
| UKW bottom-up sync | UKW guide + `cursorrules-ukw-trigger-section.md` | **ALIGNED** |
| Single active board (ADR-018) | `kanban_board: kboard.md`; `fbu_board` deprecated in schema | **ALIGNED** |
| `fr_br_root` for intake | Live: `docs/project-management/kanban/fr-br` | **ALIGNED** |
| README Kanban at RW Step 4 | README §With Kanban Package: "Step 4" / "skip Step 4" | **PARTIAL** (I4) — live spec is Step 7 |

**Evidence (V4):** `rw-config.yaml` lines 18–27 vs `config/rw-config-schema.md` Mode C example.

---

## 4. Three-Way Integration (Kanban ↔ Versioning ↔ RW)

**Trace example — T03 release (v0.2.13.3+1):**

| Surface | Evidence | Linked? |
| ------- | -------- | ------- |
| Version file | `src/ai_dev_kit/version.py` → `0.2.13.3+1` at T03 ship | Y |
| Changelog archive | `CHANGELOG_v0.2.13.3+1.md` | Y |
| Task doc | T03 forensic marker `✅ COMPLETE (v0.2.13.3+1)` | Y |
| Story checklist | Story 13 T03 row with version | Y |
| kboard | `kboard.md` Last Updated cites RW E02:S13:T03 v0.2.13.3+1 | Y |

**Installer Mode C:** `config/examples/rw-config-full-stack.yaml` (if present) + live ai-dev-kit config demonstrates full stack.

| Expectation (T01 §Complete Integration) | Observed | Status |
| --------------------------------------- | -------- | ------ |
| Automated kanban updates with version markers | T03 RW Step 7 updated four surfaces | **ALIGNED** |
| Version-aware kanban sync | UKW reads version from task/story docs | **ALIGNED** |
| Full forensic traceability | T03 chain above | **ALIGNED** |

**Evidence (V5):** Doc inspection of T03 artefacts; kboard metadata line.

---

## 5. rw-config Integration Hub

| Schema key | Required when | Live `rw-config.yaml` | Status |
| ---------- | ------------- | --------------------- | ------ |
| `version_file` | Always | `src/ai_dev_kit/version.py` | **ALIGNED** |
| `main_changelog` | Always | `CHANGELOG.md` | **ALIGNED** |
| `changelog_dir` | Always | `docs/changelog-and-release-notes/changelog-archive` | **ALIGNED** |
| `scripts_path` | Always | `packages/frameworks/workflow-mgt/scripts` | **ALIGNED** |
| `readme_file` | Always | `README.md` | **ALIGNED** |
| `use_kanban` + kanban paths | Mode C | All present | **ALIGNED** |
| `semver_mapping_strategy` | Optional | `task_touch` | **ALIGNED** |
| `versioning_mode` | Optional | `dual` | **ALIGNED** |
| `notion_hub_url` | Optional (project) | Present | **ALIGNED** (not in schema — Low doc gap) |
| `fbu_board` | Deprecated | Omitted (correct) | **ALIGNED** |

**Evidence (V2):** Structural comparison `rw-config-schema.md` ↔ live config.

---

## 6. Cross-Workflow Integration Surfaces

| Integration surface | Documented contract | Observed | Status |
| ------------------- | ------------------- | -------- | ------ |
| Intake → Kanban | `kanban_integration: true` | intake-workflow README + YAML config table | **ALIGNED** |
| PIR → RW/Kanban/Versioning | PIR integration guides | `pir-kanban-integration-guide.md`, `pir-versioning-integration-guide.md` | **ALIGNED** |
| UKW → RW attribution | Perpetual task discovery | `.cursorrules` UKW→RW wiring; dynamic `perpetual_task: true` | **ALIGNED** |
| CMW → RW Step 9.5 | Non-blocking trigger | RW spec + `scripts/changelog/check_changelog_size.py` | **ALIGNED** |
| PVW → RW Step 2.5 | Package version bump | `package-version-workflow-agent-execution.md` | **ALIGNED** |
| IPW/ICW → Kanban task wiring | Plan doc under `docs/implementation-cycles/` | IPW command + `validate_ipw_*` validators | **ALIGNED** |
| ECC harness (FR-098) | Optional coexistence | README link; `ecc-adk-bridge.yaml.template`; `skills/adk-*/` | **ALIGNED** |
| Workflow registry | 11 workflows + common_components | Registry v1.1.0; **no explicit inter-workflow dependency graph** | **PARTIAL** (I7) |

**Evidence (V6–V7):** `workflow-registry.yaml`; intake-workflow README §Configuration.

---

## 7. External Service Integration

| Service | Package artefact | Status |
| ------- | ---------------- | ------ |
| GitHub Releases | `scripts/create_github_release.py` | **ALIGNED** |
| GitHub Actions (optional) | `templates/github-actions/update-badges-byob.yml` + README | **ALIGNED** |
| Notion hub (project-specific) | `notion_hub_url` in live `rw-config.yaml` | **ALIGNED** (project extension) |

**Evidence (V15):** Component inventory §5; live config lines 68–72.

---

## 8. Adopter Packaging Integration

| Model | Documented | Status |
| ----- | ---------- | ------ |
| Copy-paste vendor | README §Copy, don't reference | **ALIGNED** |
| Git submodule | `framework-dependency-architecture.md` | **ALIGNED** |
| CLI installer | `install_release_workflow.py` modes A/B/C | **ALIGNED** |
| Brownfield path mapping | `INSTALL_IN_YOUR_PROJECT.md` + `scripts_path` key | **ALIGNED** |
| Portable RW/UKW excerpts | `cursorrules-rw-trigger-section.md`, `cursorrules-ukw-trigger-section.md` | **ALIGNED** |
| Scenario 1: RW-only | Mode A in schema | **ALIGNED** |
| Scenario 2: RW + Versioning | README Scenario 2 | **ALIGNED** |
| Scenario 3: Full stack | Mode C / Scenario 3 | **ALIGNED** |

**Evidence (V10):** README §Modularity & Dependencies; `framework-dependency-architecture.md`.

---

## 9. Cohesion Crosswalk (E07 / T03)

| E07/T03 ID | Integration impact | T04 confirmation | Remediation |
| ---------- | ------------------ | ---------------- | ----------- |
| H3 Kanban update fragmentation | Multiple integration entrypoints for same four-surface contract | **Confirmed** (I11) | T05: shared transform module + boundary doc (E5) |
| M1 Duplicate `load_rw_config` | Adopter `scripts_path` resolution inconsistent risk | **Confirmed** — **22** defs (I10) | T05/T06: E1 shared module |
| Registry `common_components` | Registry integration surface broken for shared templates | **Confirmed** (I12) | T05: create dirs or update registry |
| T03 D11 | Same as H3 | **Confirmed** | T05 |
| T03 D9 | Same as M1 | **Confirmed** | T05/T06 |
| README Step 4 Kanban | Adopter integration doc wrong step | **Confirmed** (I4) | T05 README fix |
| README vwmp path | `docs/documentation/...` vs `KB/Documentation/...` | **PARTIAL** (inventory §7) | T05 |

### Kanban integration entrypoints (V9)

| Entrypoint | Role | Owner |
| ---------- | ---- | ----- |
| RW Step 7 agent manual reconciliation | Four-surface scoped kanban (FR-092) | RW agent |
| `scripts/update_kanban_docs.py` | Deterministic kanban doc updates | RW/UKW |
| UKW agent flow (Steps 3–6) | Bottom-up task→story→epic→board | UKW agent |
| `scripts/kanban/*` (20 modules) | Stamps, MoSCOW, EST format, archive | UKW/RW |
| `validate_rw_step7_*`, `validate_board_stamp_diff.py` | Release-scope validation gates | RW Step 9 |

### Config loader implementations (V8)

**Count:** 22 files with `def load_rw_config` under `packages/frameworks/workflow-mgt/scripts/` (changelog, kanban, validation, version, documentation, git_tag_handler, update_kanban_docs).

---

## 10. Automated Verification Evidence (V1–V12)

| ID | Check | Result | Evidence |
| -- | ----- | ------ | -------- |
| V1 | Hard deps documented | **PASS** | README + INSTALL guide |
| V2 | rw-config schema vs live | **PASS** | All required + Mode C keys |
| V3 | Versioning integration smoke | **PASS** | `validate_version_bump.py` exit 0 |
| V4 | Kanban integration keys | **PASS** | Live config patterns |
| V5 | Three-way narrative trace | **PASS** | T03 release chain |
| V6 | Cross-workflow registry | **PARTIAL** | 11 workflows; no dependency graph |
| V7 | Intake→Kanban | **PASS** | `kanban_integration: true` |
| V8 | Config loader fragmentation | **PARTIAL** | 22 `load_rw_config` defs |
| V9 | Kanban path fragmentation | **PARTIAL** | 5 entrypoint classes (H3) |
| V10 | Adopter packaging | **PASS** | Scenarios + framework-dependency-architecture |
| V11 | ECC optional integration | **PASS** | FR-098 spec + bridge template |
| V12 | Wiring | **PASS** | Task ↔ IPP ↔ companion links |

---

## 11. Compliance Assessment

| Integration domain | Contract alignment | Cohesion | Remediation owner |
| ------------------ | ------------------ | -------- | ----------------- |
| Hard dependencies | **Fully aligned** | — | — |
| Versioning soft dep | **Fully aligned** | M1 loaders | T05/T06 |
| Kanban soft dep | **Fully aligned** (live spec) | H3 paths; README Step 4 drift | T05 |
| Three-way stack | **Fully aligned** | — | — |
| rw-config hub | **Fully aligned** | Schema doc gaps (notion key) | Low priority |
| Cross-workflow | **Mostly aligned** | Registry dependency graph absent | T05 |
| Adopter packaging | **Fully aligned** | — | — |
| External services | **Fully aligned** | — | — |

---

## References

- [IPP-E02S13T04](../../../../implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md)
- [T04 task doc](T04-review-integrations-and-dependency-alignment.md)
- [T03 behavior validation](workflow-behavior-validation-report.md)
- [T02 component inventory](component-inventory-map.md)
- [rw-config-schema.md](../../../../../packages/frameworks/workflow-mgt/config/rw-config-schema.md)
- [framework-dependency-architecture.md](../../../../architecture/standards-and-adrs/framework-dependency-architecture.md)
- [FR-092](../../../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [FR-098](../../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
