# E4:S14:T01 – Planning: Spec, Tests, Implementation Plan

**Task:** Update Packaged RW to Handle UKW Context and Perpetual Tasks  
**Host Task:** [T01-planning-spec-tests-impl.md](T01-planning-spec-tests-impl.md) (E4:S14:T01)  
**Status:** COMPLETE (v0.4.14.1+1)  
**Planning doc created:** 2026-02-22

---

## 1. Specification

### 1.1 Goal

Packaged RW framework must handle UKW context detection and perpetual task attribution so that UKW-triggered releases are attributed to perpetual tasks (e.g. E2:S16:T03) instead of arbitrary feature tasks, and build-number warnings are suppressed for perpetual tasks.

### 1.2 Functional Requirements

| ID | Requirement | Source |
|----|-------------|--------|
| FR-1 | RW Step 2 detects UKW context (user ran "UKW" then "RW") | Task doc |
| FR-2 | UKW releases auto-attributed to perpetual task (discover task via `perpetual_task: true` / `Task Type: Perpetual Maintenance`, use its E:S:T, increment BUILD) | Task doc |
| FR-3 | Perpetual task flag checked in RW Step 2 | Task doc |
| FR-4 | Build warning suppression for perpetual tasks (high BUILD allowed) | Task doc |
| FR-5 | Validator accepts version for perpetual tasks (T101+, or doc flag) | Task doc |
| FR-6 | Task ID extraction prefers canonical `**Value:**` section over other E:S:T mentions (e.g. Progress) | Derived |
| FR-7 | Perpetual task docs relaxed for Input/Deliverable (optional) | Derived |

### 1.3 Non-Functional Requirements

- Backward compatible: normal (non-UKW, non-perpetual) releases unchanged
- Framework users can implement perpetual tasks from documented pattern
- Validation scripts work with both packaged and adopter projects (via `rw-config.yaml`)

### 1.4 Out of Scope

- UKW workflow implementation
- New perpetual task creation
- Non-RW workflows

---

## 2. Test Design

### 2.1 Test Categories

| Category | Purpose |
|----------|---------|
| **Unit – Task ID extraction** | Canonical section wins over Progress/other text |
| **Unit – Perpetual task detection** | By task number (≥100) and by doc content |
| **Unit – Field validation** | Relaxed for perpetual tasks |
| **Integration – validate_version_bump** | End-to-end validation for perpetual tasks |

### 2.2 Test Cases

| TC | Name | Behavior under test |
|----|------|---------------------|
| T1 | `test_task_id_extraction_prefers_canonical_section` | `extract_task_id_canonical()` returns E2:S16:T03 from `**Value:**` when Progress mentions E4:S16:T05 |
| T2 | `test_perpetual_task_detection_by_task_number` | `is_perpetual_task(101|100|103)` → True; `is_perpetual_task(5|99)` → False |
| T3 | `test_perpetual_task_detection_by_doc_content` | Doc with `Task Type: Perpetual Maintenance` or `perpetual_task: true` → perpetual even for T05/T37 |
| T4 | `test_validate_version_bump_passes_for_perpetual_task` | Version 0.6.7.101+31 + T101 task doc + story → validation passes |
| T5 | `test_perpetual_task_relaxed_field_validation` | T101 doc without Input/Deliverable → no field errors when `relax_for_perpetual=True` |
| T6 | `test_validate_version_bump_build_increment_perpetual` | Same task, BUILD 32 (incremented) → pass |
| T7 | `test_validate_version_bump_passes_for_t103` | Version 0.6.7.103+1 + T103 (RW Maintenance) task doc → validation passes |

### 2.3 Test Data Strategy

- **Temp layout:** `tmpdir` with version file, `rw-config.yaml`, kanban layout (`Epic-N/Story-M-.../Txxx-...`)
- **Story/task docs:** Minimal content with required fields (Status, Task ID canonical section, optional flags)
- **Version file:** Realistic `VERSION_*` values for 0.6.7.101+31, 0.6.7.101+32, 0.6.7.103+1

---

## 3. Implementation Plan

### 3.1 Phase 1: Validator Core (validate_version_bump.py)

| Step | Action | Deliverable |
|------|--------|-------------|
| 1.1 | Add `is_perpetual_task(task_number, task_content?)` | T2, T3 |
| 1.2 | Add `extract_task_id_canonical(content)` | T1 |
| 1.3 | Update `validate_task_doc_fields()` with `relax_for_perpetual` | T5 |
| 1.4 | Integrate perpetual detection into `validate_version_bump()` | T4, T6, T7 |
| 1.5 | Ensure BUILD increment logic allows high BUILD for perpetual tasks | T6 |

### 3.2 Phase 2: Tests

| Step | Action | Deliverable |
|------|--------|-------------|
| 2.1 | Add `test_validate_version_bump.py` with T1–T7 | All tests passing |

### 3.3 Phase 3: Documentation

| Step | Action | Deliverable |
|------|--------|-------------|
| 3.1 | Update RW execution guide (UKW context, perpetual handling) | release-workflow-agent-execution.md |
| 3.2 | Update .cursorrules (if packaged) with UKW attribution rules | .cursorrules |
| 3.3 | Update task doc and changelog | T01 doc, CHANGELOG |

### 3.4 Dependency Order

```
1.1 is_perpetual_task
1.2 extract_task_id_canonical
    ↓
1.3 validate_task_doc_fields (relax)
1.4 validate_version_bump integration
1.5 BUILD increment behavior
    ↓
2.1 Tests
    ↓
3.1–3.3 Docs
```

---

## 4. Files Modified (As-Implemented)

- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py` – core logic
- `packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py` – tests
- RW execution guide, .cursorrules, T01 task doc (per task deliverables)

---

## 5. Verification Checklist

- [ ] All 7 tests pass
- [ ] `validate_version_bump.py` runs on ai-dev-kit with T101 (UKW) and T103 (RW) versions
- [ ] RW Step 2 (in .cursorrules) documents UKW context and perpetual attribution
- [ ] No regressions for normal (non-perpetual) releases
