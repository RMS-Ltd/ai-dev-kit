---
lifecycle: timeboxed
ttl_days: 90
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: archive
---

# E07:S07:T03 — Planning: Workflow validator slug path resolution (BR-091) (IPW)

**Host Task:** [`T03-workflow-validator-slug-path-resolution-br091.md`](../project-management/kanban/epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091.md) **(E07:S07:T03)**  
**Planning for:** [BR-091](../project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md)  
**Status:** Implemented (2026-06-05 — release via RW E07:S07:T03 v0.7.7.3+1)

> **IPW (Implementation Planning Workflow):** Bidirectional wiring to the host task **Input** and **References** is mandatory (FR-042).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | `workflow_mgt_dir()` resolves `packages/frameworks/workflow-mgt` in ai-dev-kit monorepo | BR-091 AC, T03 AC |
| RF2 | Legacy `packages/frameworks/workflow mgt` still supported when present | BR-091, BR-087 |
| RF3 | `run_workflow_scripts_ci_pytest.sh` exits 0 (full suite, 0 failures) | T03 AC, BR-091 |
| RF4 | **Workflow scripts pytest** GitHub Action green on `dev`/`main` | T03 AC |
| RF5 | Canonical path string `packages/frameworks/workflow-mgt/skills/` unchanged in bridge/skill checks | BR-091 AC |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Single shared resolution helper (DRY) | BR-091 proposed fix |
| RNF2 | Minimal diff — validators + helper + focused tests only | T03 scope, FR-083 |
| RNF3 | Error messages name both slug and legacy when directory missing | BR-091 UX |

### 1.3 Invariants and boundaries

- **Invariants:** FR-098 canonical path strings in YAML/docs remain `workflow-mgt`; slug-first matches BR-087 install layout.
- **In scope:** Two validators, `framework_install_slug.py` resolver, unit tests, kanban/BR updates via RW.
- **Out of scope:** Repo-wide doc path sweep, `build_package.py`, other scripts with legacy names in comments only.

---

## 2. Specification

### 2.1 Goal

FR-098 validators locate the Workflow Management package using canonical install slug `workflow-mgt` first, with legacy `workflow mgt` fallback, so monorepo CI and local runs pass without breaking unmigrated adopter trees.

### 2.2 Specification mapping

| RF | Element |
| -- | ------- |
| RF1–RF2 | `workflow_mgt_package_dir(project_root)` in `framework_install_slug.py`; validators call it |
| RF3–RF4 | Existing co-located pytest + CI workflow unchanged except green results |
| RF5 | `canonical_adk_skill_pack_path_relative()` and `CANONICAL_SKILL_PACK` unchanged |

**Resolution algorithm:**

1. `frameworks_root = project_root / "packages" / "frameworks"`
2. If `workflow-mgt` is a directory → return it
3. Else if `workflow mgt` is a directory → return legacy path
4. Else return canonical path for stable error reporting

### 2.3 Constraints

- Reuse `LEGACY_SOURCE_DIR_TO_SLUG` keys for `"workflow mgt"` → `"workflow-mgt"`.
- Validators import helper via `sys.path` to `packages/frameworks/workflow-mgt/scripts`.

### 2.4 Status transition intent

- **Current task status:** TODO → IN PROGRESS on first implementation step
- **Transition to COMPLETE:** All ACs satisfied + pytest/CI evidence; forensic marker via RW
- **Owner:** Implementation execution (not IPW authoring)

### 2.5 ADR necessity decision (IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-091 mandates slug-first + legacy fallback |
| T2 | Reversibility | N | Small revert PR |
| T3 | Blast radius | N | 2 validators + 1 helper + tests |
| T4 | Precedent | N | Implements BR-087 / existing slug map |
| T5 | Constraint trade-off | N | No trade-off |
| T6 | Governance contract | N | Validator bugfix only |
| T7 | Supersedes | N | Aligns with package-management design |

**Outcome:** `EXEMPT`

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | §4.1 file list |
| E2 | No new options | Y | BR-087 / `framework_install_slug.py` |
| E3 | Reversible in one task | Y | Normal revert |
| E4 | Spec elsewhere | Y | IPP §2 + BR-091 |
| E5 | Documented NONE | Y | §5.3 cites package-management-design.md |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Monorepo root | Both validators exit 0 against repo root |
| T2 | Legacy-only tree | tmp_path with only `workflow mgt/` minimal layout → exit 0 |
| T3 | Canonical fixtures | Existing co-located tests pass |
| T4 | Resolver unit tests | `test_framework_install_slug.py` — canonical, legacy-only, missing |
| T5 | CI gate | `run_workflow_scripts_ci_pytest.sh` exit 0 |
| T6 | Path string invariant | Bridge/skill canonical path assertions unchanged |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Transition E07:S07:T03 `TODO → IN PROGRESS` | Task doc |
| 2 | Add `workflow_mgt_package_dir()` to `framework_install_slug.py` | Shared resolver |
| 3 | Update `validate_adk_ecc_skill_pack.py` | Import resolver |
| 4 | Update `validate_ecc_adk_bridge.py` | Import resolver + error text |
| 5 | Extend `tests/test_framework_install_slug.py` | Resolver tests |
| 6 | Run `run_workflow_scripts_ci_pytest.sh` | Exit 0 |
| 7 | **RW E07:S07:T03** | Release + kanban Step 7 |
| **N** | **[MANDATORY]** Reconcile task status to COMPLETE with evidence | Task doc + BR-091 |

### 4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/framework_install_slug.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_adk_ecc_skill_pack.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py`
- `tests/test_framework_install_slug.py`
- `docs/implementation-cycles/IPP-E7S7T3-workflow-validator-slug-path-resolution-br091.md` (this file)
- `docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091.md`

### 4.2 Dependency order

1. Resolver helper → validators → tests → RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | T03 task doc | IPP link, status, AC checkboxes | Step 1, N |
| D-U2 | BR-091 | Attempted fix note on RW | Step 7 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | This IPP | Planning package |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Validation README slug note | NONE — CI entrypoint already documented |
| Docusaurus | NONE — NOT_APPLICABLE |
| ADR | NONE — §2.5 EXEMPT; governing: [package-management-design.md](../architecture/standards-and-adrs/package-management-design.md) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E7S7T3-*.md` | NOT_APPLICABLE | timeboxed | T03 Input/References |
| D-U1 | T03 task doc | NOT_APPLICABLE | evergreen | Story checklist |
| D-U2 | BR-091 | NOT_APPLICABLE | evergreen | fbuboard |

---

## 7. Success / verification criteria

- [ ] RF1–RF5 verified locally
- [ ] `run_workflow_scripts_ci_pytest.sh` → exit 0
- [ ] Bidirectional task ↔ IPP links
- [ ] RW E07:S07:T03 complete
- [ ] BR-091 uses attempted-fix wording until user verifies

---

## References

- [BR-091](../project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md)
- [BR-087](../project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch.md)
- [IPP-E7S7T2](IPP-E07S07T02-ci-pytest-gate-for-workflow-scripts.md)
- [package-management-design.md](../architecture/standards-and-adrs/package-management-design.md)
