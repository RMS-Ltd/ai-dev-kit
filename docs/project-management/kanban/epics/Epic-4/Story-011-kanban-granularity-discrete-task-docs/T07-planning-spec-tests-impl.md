# E4:S11:T07 – Planning: Spec, Tests, Implementation Plan

**Task:** Migrate Embedded Tasks to Discrete Task Documents  
**Host Task:** [T07-planning-spec-tests-impl.md](T07-planning-spec-tests-impl.md) (E4:S11:T07)  
**Status:** TODO  
**Planning doc created:** 2026-02-22

---

## 1. Specification

### 1.1 Goal

Convert all 784 embedded task references in Story documents into discrete Task documents (separate files), achieving full FR-016 compliance and enabling RW Step 1 to reliably locate all Task documents.

### 1.2 Functional Requirements

| ID | Requirement | Source |
|----|-------------|--------|
| FR-1 | All embedded tasks extracted and converted to discrete Task documents | Task doc, FR-016 |
| FR-2 | All Story documents updated to reference discrete Task documents (no embedded content) | Task doc |
| FR-3 | All Task documents follow canonical template structure | TASK_TEMPLATE.md |
| FR-4 | All Task documents include required fields: Task ID, Scope, Input, Deliverable, Acceptance Criteria, Status, Version Anchor | FR-016:R02, Task doc |
| FR-5 | Zero embedded tasks remaining (or clearly documented exceptions) | Task doc |
| FR-6 | RW Step 1 can locate all Task documents | FR-016:R03 |
| FR-7 | Validators pass for all migrated tasks | Task doc |
| FR-8 | Migration preserves information (no loss) | Migration plan |
| FR-9 | Task document naming: `T\{task\}-\{slug\}.md` (e.g., `T01-task-name.md`) | Migration plan |
| FR-10 | Story checklist format: `- [x] **E\{epic\}:S\{story\}:T\{task\}** – Name - [Link](path)` | Existing pattern |

### 1.3 Embedded Task Detection Spec

**Task boundary patterns:**
- Header: `### E\{epic\}:S\{story\}:T\{task\} – Task Name` or `## E\{epic\}:S\{story\}:T\{task\}`
- Variants: `**E\{epic\}:S\{story\}:T\{task\}**`, `T\{task\} – Name`
- Content: From header until next task header or `## ` section
- Edge cases: Nested sections, incomplete tasks, tasks spanning multiple blocks

**Task ID extraction:**
- Canonical: `E\{epic\}:S\{story\}:T\{task\}` (e.g., E4:S11:T07)
- Abbreviated in context: `T\{task\}` when Epic/Story known from Story doc path

### 1.4 Task Document Structure (Canonical)

Per `TASK_TEMPLATE.md` and FR-016:
- Frontmatter (lifecycle, created_at, etc.)
- Task ID (Format, Full Task ID)
- Scope
- Input
- Deliverable
- Acceptance Criteria
- Approach
- Dependencies
- References
- Version Anchor (when complete)

### 1.5 Out of Scope

- Creating new tasks (only migrating existing embedded)
- Changing task content semantics (preserve or infer)
- UKW/RW workflow changes beyond alignment with existing validators

---

## 2. Test Design

### 2.1 Test Categories

| Category | Purpose |
|----------|---------|
| **Unit – Extraction** | Parse embedded task sections from Story docs |
| **Unit – Generation** | Produce valid Task documents from extracted data |
| **Unit – Story update** | Replace embedded with references correctly |
| **Integration – Validation** | Post-migration validators pass |
| **Integration – RW Step 1** | Task location logic finds all Task docs |
| **End-to-end** | Full migration of pilot Story produces valid result |

### 2.2 Test Cases

| TC | Name | Behavior under test |
|----|------|---------------------|
| T1 | `test_extract_embedded_task_simple` | Story with `### E4:S11:T01 – Name` yields one task with correct E/S/T |
| T2 | `test_extract_embedded_task_multiple` | Story with 3 tasks yields 3 extracted tasks, correct boundaries |
| T3 | `test_extract_handles_nested_sections` | Task with `####` subsections: content captured until next task |
| T4 | `test_extract_handles_missing_fields` | Task with minimal content: extract with placeholder/TODO for missing fields |
| T5 | `test_generate_task_doc_required_fields` | Generated Task doc has all required sections populated |
| T6 | `test_generate_task_doc_naming` | File name follows `T\{task\}-\{slug\}.md` convention |
| T7 | `test_story_update_replaces_embedded` | Story after update has checklist items with links, no embedded body |
| T8 | `test_story_update_preserves_non_task` | Overview, other sections unchanged |
| T9 | `test_validation_no_embedded_remaining` | Post-migration scan finds zero embedded tasks in migrated Story |
| T10 | `test_validation_all_refs_valid` | All Task doc links resolve |
| T11 | `test_rw_step1_locates_task` | validate_version_bump / RW Step 1 finds Task doc for migrated Story |
| T12 | `test_migration_idempotent` | Re-running migration on migrated Story is safe (no duplication) |

### 2.3 Test Data Strategy

- **Fixtures:** Minimal Story docs with 1–3 embedded tasks (simple, nested, incomplete)
- **Expected outputs:** Canonical Task docs + updated Story
- **Pilot Stories:** Use 1–2 real Stories for integration tests (Epic 4 or 6)

---

## 3. Implementation Plan

### 3.1 Phase 1: Analysis and Tooling (Weeks 1–2)

| Step | Action | Deliverable |
|------|--------|-------------|
| 1.1 | Current state analysis | Catalog of all 784 embedded tasks by Epic/Story |
| 1.2 | Extraction script | `extract_embedded_tasks.py` – parse Story, yield task dicts |
| 1.3 | Generation script | `generate_task_doc.py` – task dict → Task doc file |
| 1.4 | Story update script | `update_story_refs.py` – replace embedded with checklist refs |
| 1.5 | Validation script | `validate_migration.py` – no embedded, refs valid, fields present |
| 1.6 | Unit tests T1–T8 | Tests for extraction, generation, story update |

### 3.2 Phase 2: Pilot Migration (Week 3)

| Step | Action | Deliverable |
|------|--------|-------------|
| 2.1 | Select 1–2 pilot Stories | E.g., Epic 4 Story 11, Epic 6 Story 7 (subset) |
| 2.2 | Run migration on pilot | Migrated Task docs + updated Story |
| 2.3 | Manual review | Refinements, edge-case fixes |
| 2.4 | Integration tests T9–T12 | Validation, RW Step 1, idempotency |
| 2.5 | Refine scripts | Based on pilot learnings |

### 3.3 Phase 3: Phased Rollout (Weeks 4–7)

| Step | Action | Deliverable |
|------|--------|-------------|
| 3.1 | Migrate by Epic | Epic 1 → Epic 2 → Epic 4 → Epic 5 → Epic 6 → … |
| 3.2 | Validate after each Epic | Validation report |
| 3.3 | Fix issues before proceeding | Iterate as needed |

### 3.4 Phase 4: Final Validation and Docs (Week 8)

| Step | Action | Deliverable |
|------|--------|-------------|
| 4.1 | Full validation | Zero embedded, all refs valid, validators pass |
| 4.2 | Documentation | Migration guide, exceptions (if any) |
| 4.3 | Migration completion report | Checklist, metrics |

### 3.5 Dependency Order

```
1.1 Current state analysis (informs extraction patterns)
    ↓
1.2 Extraction script
1.3 Generation script
1.4 Story update script
    ↓
1.5 Validation script
1.6 Unit tests
    ↓
2.1–2.5 Pilot + integration tests
    ↓
3.1–3.3 Phased rollout
    ↓
4.1–4.3 Final validation + docs
```

---

## 4. Script Interfaces (Proposed)

### 4.1 extract_embedded_tasks.py

```
Input:  Story file path
Output: List[{epic, story, task, name, content, start_line, end_line}]
```

### 4.2 generate_task_doc.py

```
Input:  Task dict, output dir, template path
Output: Task doc file path
```

### 4.3 update_story_refs.py

```
Input:  Story file path, list of (task_id, task_doc_path)
Output: Updated Story content (or write to file)
```

### 4.4 validate_migration.py

```
Input:  Kanban root path
Output: Report {embedded_count, broken_refs, missing_fields, ...}
Exit:   0 if valid, 1 if issues
```

---

## 5. Files to Create/Modify

| File | Action |
|------|--------|
| `packages/frameworks/workflow mgt/scripts/kanban/extract_embedded_tasks.py` | Create |
| `packages/frameworks/workflow mgt/scripts/kanban/generate_task_doc.py` | Create |
| `packages/frameworks/workflow mgt/scripts/kanban/update_story_refs.py` | Create |
| `packages/frameworks/workflow mgt/scripts/kanban/validate_migration.py` | Create |
| `packages/frameworks/workflow mgt/scripts/kanban/test_migrate_embedded_tasks.py` | Create |
| `docs/.../migration-plan-embedded-to-discrete-tasks.md` | Update (fill TBDs, link to scripts) |

---

## 6. Success Criteria

- [ ] Migration plan document complete (current state filled)
- [ ] All 12 test cases pass
- [ ] Zero embedded tasks in migrated Epics (or documented exceptions)
- [ ] RW Step 1 locates all Task documents
- [ ] validate_version_bump passes for migrated tasks
- [ ] No information loss (manual spot-check)
- [ ] Migration guide and completion report produced
