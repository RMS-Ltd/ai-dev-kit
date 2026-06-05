---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T09 — Planning: FR-050 Workflows Directory Reorganization (IPW)

**Host Task:** [`T09-fr050-workflows-directory-reorganization.md`](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization.md) **(E02:S13:T09)**  
**Planning for:** [FR-050](../project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization.md) · GAP-WFMGT-STRUCT-001  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Address all seven flat `workflows/*.yaml` files (RW stubbed T08; six remain) | T09 AC |
| RF2 | Nested subdirectory YAML is single authoritative SoT per workflow | FR-050 |
| RF3 | Flat copies become deprecated redirect stubs (T08 pattern) | T08 · E07 H2 |
| RF4 | Reconcile flat→nested content drift before stubbing | T03 §6 |
| RF5 | `workflow-registry.yaml` matches directory tree; deprecation notes per workflow | T09 AC |
| RF6 | No adopter-facing doc treats flat copies as authoritative | T09 AC |
| RF7 | Installer/discovery paths resolve nested SoT | T04 |
| RF8 | IPP linked from task doc before implementation | FR-083 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Backward compatibility via redirect stubs |
| RNF2 | No change to RW/UKW/IPW agent execution semantics |
| RNF3 | Verification via `validate-workflow-docs.py` + structural grep |

### 1.3 Invariants and boundaries

- **In scope:** Flat stubs, nested SoT, registry, README/KB/MIGRATION_GUIDE, installer messages
- **Out of scope:** T10 kanban transform consolidation; validator behavior changes; `common/` template dirs

---

## 2. Specification

### 2.1 Goal

Complete FR-050: nested directories are the only editable SoT; flat files become redirect stubs; registry and docs point adopters at nested paths.

### 2.2 Specification mapping

Applies T08 RW stub pattern to six remaining flat duplicates. Intake flat YAML merged into nested before stubbing (richer description, updated step model).

### 2.3 Constraints

- T08 stub schema: `redirect.authoritative_file`, `readme`, `steps: []`
- Post-ship verification: `RW E02:S13:T09 --art` only (BR-097)

### 2.4 Status transition intent

- **Current:** TODO → IN PROGRESS on first implementation edit → COMPLETE when ACs + validators pass
- **Owner:** Implementation executor

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | FR-050 + T08 pattern predetermined |
| T2 | Reversibility | N | Single-task revert |
| T3 | Blast radius | Y | Many KB/README references |
| T4 | Precedent | N | Applying existing pattern |
| T5 | Constraint trade-off | N | Resolved in T08 |
| T6 | Governance contract | N | No gate semantic change |
| T7 | Supersedes | Y | `ultimate-canonical-workflow-structure.md` flat layout |

**Outcome:** `ALREADY_COVERED` — FR-050, MIGRATION_GUIDE, T08 stub. Update `ultimate-canonical-workflow-structure.md` (T7).

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| TD1 | Registry ↔ filesystem | All registry `directory` + `main_file` exist |
| TD2 | Flat stub contract | Each flat YAML has DEPRECATED, redirect, `steps: []` |
| TD3 | No authoritative flat refs | KB/README cite nested paths as SoT |
| TD4 | Nested content preserved | Intake merged before stubbing |
| TD5 | Workflow doc validator | `validate-workflow-docs.py` exit 0 |
| TD6 | Installer nested path | `install_release_workflow.py` targets nested RW |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Transition E02:S13:T09 TODO → IN PROGRESS | Task doc |
| 2 | Drift matrix (intake drift; others identical) | Evidence |
| 3 | Merge intake flat → nested SoT | Updated nested YAML |
| 4 | Six flat files → deprecation stubs | Stub files |
| 5 | SoT callouts in six nested READMEs | README updates |
| 6 | Update workflow-registry.yaml v1.2.0 | Registry |
| 7 | KB/README/MIGRATION_GUIDE/installer sweep | Doc updates |
| 8 | Run TD1–TD6 | Verification notes |
| 9 | FR-050 status reconciliation | FR doc |
| 10 | `RW E02:S13:T09 --art` | Release |
| **N** | Reconcile task COMPLETE + forensic marker | Task doc + kboard |

**RW rule:** Post-ship verification prescribes `RW E02:S13:T09 --art` only.

### 4.1 Drift matrix (appendix)

| Workflow | Drift | Action |
| -------- | ----- | ------ |
| intake | Flat newer (description, step model) | Copy flat → nested |
| package-version, pir, migration, testing, refactor | Identical | Stub only |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T09-*.md` | CREATE |
| D-U1 | T09 task doc | UPDATE |
| D-U2 | `workflow-registry.yaml` | UPDATE |
| D-U3 | Six stubs + intake nested merge | UPDATE |
| D-U4 | Six nested READMEs | UPDATE |
| D-U5 | Package README | UPDATE |
| D-U6 | MIGRATION_GUIDE.md | UPDATE |
| D-U7 | KB vwmp guides (~10 files) | UPDATE |
| D-U8 | rw-config-schema, installer docs | UPDATE |
| D-U9 | ultimate-canonical-workflow-structure.md | UPDATE |
| D-U10 | FR-050 | UPDATE on RW |

---

## 6. Documentation housing

| Doc ID | Path | Publication | Lifecycle |
| ------ | ---- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/` | NOT_APPLICABLE | evergreen |
| D-U2–D-U8 | `packages/frameworks/workflow-mgt/` | NOT_APPLICABLE | evergreen |
| D-U9 | `docs/architecture/standards-and-adrs/` | PUBLISHED | evergreen |

---

## 7. Success / verification criteria

- [ ] Seven flat YAML files addressed (RW + six stubs)
- [ ] Nested SoT documented in README + per-workflow READMEs
- [ ] Registry matches tree
- [ ] No adopter doc cites flat as authoritative
- [ ] `validate-workflow-docs.py` exit 0
- [ ] IPP bidirectionally linked
- [ ] FR-050 satisfied; released via `RW E02:S13:T09 --art`

---

## References

- [T08 IPP](IPP-E02S13T08-sync-packaged-workflows-live-spec.md)
- [T05 gap log](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [FR-050](../project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization.md)
