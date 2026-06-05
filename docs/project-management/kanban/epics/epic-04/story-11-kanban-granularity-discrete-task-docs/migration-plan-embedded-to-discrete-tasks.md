---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Migration Plan: Embedded Tasks to Discrete Task Documents

**Purpose:** Comprehensive migration plan to convert all embedded tasks (delimited sections in Story documents) to discrete Task documents (separate files)  
**Status:** APPROVED (Wave 0 catalog complete 2026-06-05)  
**Version:** 1.0.0  
**Part of:** E04:S11:T07 – Migrate Embedded Tasks to Discrete Task Documents  
**Related:** FR-016: Kanban Granularity & Discrete Task Docs (3-Tier Structure)

---

## Executive Summary

This document provides a comprehensive migration plan to convert **784 embedded task references** in Story documents to **discrete Task documents** (separate files), fully implementing the 3-tier Kanban structure as mandated by FR-016.

**Current State (catalog scan 2026-06-05, Wave 0):**
- **417** embedded task sections (`##`/`###` headers with `E:S:T` tokens) across **69** Story files
- **301** discrete Task documents (`T{nn}-*.md`) already on disk
- Legacy estimate **784** (pre-scan) — superseded; recount used header-boundary detection only
- Policy mandates discrete Task documents (recommended format)

**Target State:**
- All tasks have discrete Task documents
- Story documents reference discrete Task documents
- Full FR-016 compliance
- RW Step 1 can reliably locate all Task documents

**Migration Approach:**
- **Hybrid:** Automated extraction with manual review and refinement
- **Phased:** Rollout by Epic priority
- **Validated:** Comprehensive validation at each phase

---

## 1. Current State Analysis

### 1.1 Task Distribution

**Embedded task sections by Epic (2026-06-05 scan):**

| Epic | Embedded sections | Discrete `T*.md` files | Notes |
|------|-------------------|------------------------|-------|
| E01 | 21 | 17 | Core framework |
| E02 | 93 | 61 | Largest embedded count |
| E03 | 34 | 12 | Versioning framework |
| E04 | 86 | 54 | Host epic (FR-016) |
| E05 | 47 | 47 | Parity embedded/discrete |
| E06 | 38 | 63 | More discrete than embedded |
| E07 | 30 | 33 | Maintenance / reviews |
| E08 | 21 | 7 | Tooling & automation |
| E09 | 0 | 7 | Discrete-only stories |
| E10 | 12 | 0 | Embedded-only (doc-lifecycle RC) |
| E11 | 12 | 0 | Embedded-only (debug-path RC) |
| E21 | 28 | 0 | Project-specific |

**Total:** **417** embedded sections · **301** discrete files · **69** stories with ≥1 embedded section

**Highest-density stories (pilot candidates):** E05:S06 (25), E02:S05 (15), E06:S08 (14), E03:S02 (11), E04:S12 (11), E07:S06 (11)

**Discrete Task Documents:**
- 301 files under `epics/epic-*/story-*/T*.md`
- Mix of fully migrated stories (E05:S06, E06:S09) and partial migration (E04:S19)
- Follow canonical template structure where created via intake/RW

### 1.2 Task Patterns

**Naming Patterns:**
- Full context: `E\{epic\}:S\{story\}:T\{task\}` (e.g., `E04:S11:T01`)
- Abbreviated: `T\{task\}` (e.g., `T01`)
- Variants: `Task \{task\}`, `T\{task\}-\{description\}`

**Structure Patterns:**
- Well-structured: Full task details (Input, Deliverable, Acceptance Criteria, etc.)
- Minimal: Task ID and brief description only
- Incomplete: Missing required fields

**Location Patterns:**
- Embedded in Story document as delimited sections
- Format: `### E\{epic\}:S\{story\}:T\{task\} – Task Name` followed by task content
- Some tasks have associated files in Story directory

### 1.3 Completeness Analysis

**Tasks with Full Details:**
- Include: Task ID, Scope, Input, Deliverable, Acceptance Criteria, Approach, Dependencies
- Estimated: [TBD - to be analyzed]

**Tasks with Minimal Details:**
- Include: Task ID, brief description, status
- Estimated: [TBD - to be analyzed]

**Tasks with Missing Required Fields:**
- Missing: Required fields per FR-016 (Task ID, Scope, Acceptance Criteria, Status, Version Anchor)
- Estimated: [TBD - to be analyzed]

---

## 2. Migration Strategy

### 2.1 Approach Selection

**Option 1: Fully Automated**
- **Pros:** Fast, consistent, scalable
- **Cons:** Requires robust parsing, may miss edge cases, less control
- **Risk:** High (parsing errors, information loss)

**Option 2: Fully Manual**
- **Pros:** Complete control, high quality, handles edge cases
- **Cons:** Time-consuming (784 tasks), inconsistent, error-prone
- **Risk:** Medium (human error, inconsistency)

**Option 3: Hybrid (Recommended)**
- **Pros:** Balance of speed and quality, automated extraction with manual review
- **Cons:** Requires both script development and manual work
- **Risk:** Low (validation at each step)

**Decision: Hybrid Approach**
- Automated script for extraction and initial generation
- Manual review and refinement for complex tasks
- Automated validation and verification

### 2.2 Phased Rollout Strategy

**Phase 1: Pilot (1-2 Stories)**
- Select representative Stories (different complexities)
- Execute migration
- Validate results
- Refine approach

**Phase 2: High-Priority Epics**
- Epic 1 (Project Foundation)
- Epic 2 (Workflow Management)
- Epic 4 (Kanban Framework)
- Validate after each Epic

**Phase 3: Remaining Core Epics**
- Epic 3 (FR/BR/UXR Management)
- Epic 5 (Data Management)
- Epic 6 (Testing)
- Epic 7 (Implementation)
- Epic 8 (Documentation)
- Epic 9 (CI/CD)
- Epic 10 (Security)

**Phase 4: Ancillary Epics**
- Epic 11+ (Project-specific epics)
- Final validation

### 2.3 Task Document Naming Convention

**Canonical Format:**
- `T\{task\}-\{description\}.md` (e.g., `T01-update-kanban-policy.md`)
- Location: `docs/project-management/kanban/epics/Epic-\{N\}/Story-{NNN}-\{description\}/T\{task\}-\{description\}.md`

**Naming Rules:**
- Use 2-digit padding for task number (`T01`, `T02`, not `T1`, `T2`)
- Use kebab-case for description
- Keep description concise but descriptive
- Match Story document naming pattern

**Examples:**
- `T01-update-kanban-policy.md`
- `T02-create-task-template.md`
- `T06-cross-project-meta-analysis.md`

### 2.4 Story Document Update Pattern

**Before (Embedded):**
```markdown
## Tasks

### E4:S11:T01 – Update Kanban Governance Policy

**Input:** Current Kanban governance policy
**Deliverable:** Updated policy
...
```

**After (Reference):**
```markdown
## Task Checklist

- [x] **E4:S11:T01 – Update Kanban Governance Policy** ✅ COMPLETE (v0.4.11.1+0)
  - Task: [`T01-update-kanban-policy.md`](T01-update-kanban-policy.md)

```

**Update Rules:**
- Replace embedded task section with checklist item
- Add link to discrete Task document
- Preserve status and version marker
- Maintain Story document structure

---

## 3. Migration Script Design

### 3.1 Task Extraction

**Input:** Story document with embedded tasks  
**Output:** Extracted task data structure

**Extraction Logic:**
1. Find task section markers: `### E\{epic\}:S\{story\}:T\{task\}`
2. Extract task header (Task ID, name)
3. Extract task content (until next task or section)
4. Parse task fields (Input, Deliverable, Acceptance Criteria, etc.)
5. Handle edge cases (nested sections, incomplete tasks)

**Edge Cases:**
- Tasks without clear boundaries
- Tasks with nested markdown
- Tasks with incomplete information
- Tasks spanning multiple sections

### 3.2 Task Document Generation

**Input:** Extracted task data  
**Output:** Task document following canonical template

**Generation Logic:**
1. Apply Task document template
2. Populate required fields from extracted data
3. Generate file name following naming convention
4. Handle missing fields (mark as TODO or infer from context)
5. Preserve original formatting where possible

**Required Fields:**
- Task ID (`E\{epic\}:S\{story\}:T\{task\}`)
- Scope
- Input
- Deliverable
- Acceptance Criteria
- Status
- Version Anchor (if task is complete)
- Related BR/FR Links

### 3.3 Story Document Update

**Input:** Story document, generated Task documents  
**Output:** Updated Story document with references

**Update Logic:**
1. Replace embedded task sections with checklist items
2. Add links to discrete Task documents
3. Preserve task status and version markers
4. Maintain Story document structure
5. Update task checklist format

---

## 4. Validation Strategy

### 4.1 Pre-Migration Validation

- Verify Story document structure
- Verify task extraction accuracy
- Verify task completeness
- Identify high-risk tasks

### 4.2 Post-Migration Validation

**Task Document Validation:**
- Required fields present
- Task ID format correct
- File naming convention followed
- Template structure followed
- Content completeness

**Story Document Validation:**
- References to Task documents correct
- Checklist format correct
- No broken links
- Structure maintained

**Integration Validation:**
- RW Step 1 can locate Task documents
- Validators pass
- Cross-references updated
- No information loss

### 4.3 Validation Script

**Checks:**
1. All embedded tasks extracted
2. All Task documents created
3. All Story documents updated
4. All required fields present
5. All references valid
6. Naming conventions followed
7. RW Step 1 compatibility
8. Validator compatibility

---

## 5. Risk Assessment and Mitigation

### 5.1 Risks

**Risk 1: Information Loss**
- **Probability:** Medium
- **Impact:** High
- **Mitigation:** Comprehensive extraction, manual review, validation

**Risk 2: Parsing Errors**
- **Probability:** Medium
- **Impact:** Medium
- **Mitigation:** Robust parsing logic, edge case handling, manual review

**Risk 3: Incomplete Migration**
- **Probability:** Low
- **Impact:** High
- **Mitigation:** Comprehensive validation, phased rollout, checkpoints

**Risk 4: Broken References**
- **Probability:** Low
- **Impact:** Medium
- **Mitigation:** Automated reference validation, link checking

**Risk 5: Inconsistent Structure**
- **Probability:** Medium
- **Impact:** Low
- **Mitigation:** Template enforcement, validation, review

### 5.2 Rollback Strategy

**If Migration Fails:**
1. Preserve original Story documents (backup)
2. Document migration state
3. Rollback to original state
4. Analyze failures
5. Refine approach
6. Retry migration

**Partial Rollback:**
- If specific Epic/Story migration fails
- Rollback that Epic/Story only
- Continue with other Epics/Stories
- Fix and retry failed Epic/Story

---

## 6. Implementation Plan

### 6.1 Phase 1: Preparation (Week 1)

**Tasks:**
- [ ] Complete current state analysis (catalog all embedded tasks)
- [ ] Design migration script
- [ ] Create task extraction logic
- [ ] Create task document generator
- [ ] Create story document updater
- [ ] Create validation script
- [ ] Test scripts on sample Story documents

**Deliverables:**
- Current state analysis report
- Migration scripts (extraction, generation, update, validation)
- Test results

### 6.2 Phase 2: Pilot Migration (Week 2)

**Tasks:**
- [ ] Select 1-2 representative Stories
- [ ] Execute migration on pilot Stories
- [ ] Manual review and refinement
- [ ] Validate results
- [ ] Document learnings
- [ ] Refine scripts based on learnings

**Deliverables:**
- Migrated pilot Stories
- Migration learnings document
- Refined scripts

### 6.3 Phase 3: Phased Rollout (Weeks 3-6)

**Tasks:**
- [x] Migrate Epic 1 (Project Foundation) — Wave 3 **2026-06-05**: 6 stories processed, ~15 new task docs, 0 embedded remaining
- [x] Validate Epic 1 migration — **2026-06-05**: 14/14 pytest; 0 broken links
- [x] Migrate Epic 2 (Workflow Management) — Wave 3 **2026-06-05**: 13 stories, ~90 new task docs, 0 embedded remaining per `validate_migration.py --story`
- [x] Validate Epic 2 migration — **2026-06-05**: 14/14 `test_migrate_embedded_tasks.py`; 0 broken links; idempotent re-run
- [x] Migrate Epic 4 (Kanban Framework) — Wave 3 **2026-06-05**: 19 stories processed, ~40 new task docs, 0 embedded remaining per `validate_migration.py`
- [x] Validate Epic 4 migration — **2026-06-05**: 14/14 `test_migrate_embedded_tasks.py`; 0 broken links; idempotent re-run
- [x] Migrate Epic 3 (Numbering & Versioning) — Wave 3 **2026-06-05**: 5 stories processed, ~20 new task docs, 0 embedded remaining
- [x] Validate Epic 3 migration — **2026-06-05**: 14/14 pytest; 0 broken links
- [x] Migrate Epic 5 (Documentation) — Wave 3 **2026-06-05**: 9 stories processed, ~47 new task docs, 0 embedded remaining
- [x] Validate Epic 5 migration — **2026-06-05**: 14/14 pytest; 0 broken links
- [x] Migrate Epic 6 (Framework Management) — Wave 3 **2026-06-05**: 9 stories processed, ~34 new task docs, 0 embedded remaining
- [x] Validate Epic 6 migration — **2026-06-05**: 14/14 pytest; 0 broken links
- [x] Migrate Epic 7 (Codebase Maintenance) — Wave 3 **2026-06-05**: 5 stories with embedded tasks (S01–S04, S06); 17 new task docs, 13 reused; 0 embedded remaining
- [x] Validate Epic 7 migration — **2026-06-05**: 14/14 pytest; 0 broken links; idempotent re-run
- [x] Migrate Epic 8 (Tooling & Automation) — Wave 3 **2026-06-05**: 5 stories processed; 21 new task docs; 0 embedded remaining
- [x] Validate Epic 8 migration — **2026-06-05**: 14/14 pytest; 0 broken links
- [x] Migrate Epic 10 (Document Lifecycle RC) — Wave 3 **2026-06-05**: 2 stories processed; 12 new task docs; 0 embedded remaining
- [x] Validate Epic 10 migration — **2026-06-05**: 14/14 pytest; 0 broken links
- [x] Migrate Epic 11 (Debug Path RC) — Wave 3 **2026-06-05**: 2 stories processed; 12 new task docs; 0 embedded remaining
- [x] Validate Epic 11 migration — **2026-06-05**: 14/14 pytest; 0 broken links
- [ ] Continue with remaining Epic (21…)
- [ ] Validate after each Epic

**Deliverables:**
- Migrated Epics
- Validation reports
- Progress tracking

### 6.4 Phase 4: Final Validation and Cleanup (Week 7)

**Tasks:**
- [ ] Comprehensive validation
- [ ] Fix any issues
- [ ] Update documentation
- [ ] Update examples
- [ ] Archive migration artifacts
- [ ] Final report

**Deliverables:**
- Migration completion report
- Updated documentation
- Validation report

---

## 7. Success Criteria

### 7.1 Migration Completeness

- ✅ All embedded tasks extracted
- ✅ All Task documents created
- ✅ All Story documents updated
- ✅ Zero embedded tasks remaining (or clearly documented exceptions)

### 7.2 Quality Criteria

- ✅ All Task documents follow canonical template
- ✅ All required fields present
- ✅ All references valid
- ✅ No information loss
- ✅ Consistent structure

### 7.3 Integration Criteria

- ✅ RW Step 1 can locate all Task documents
- ✅ Validators pass for all tasks
- ✅ Cross-references updated
- ✅ Documentation updated

---

## 8. Timeline Estimate

**Total Duration:** 6-8 weeks

- **Week 1:** Preparation and script development
- **Week 2:** Pilot migration and refinement
- **Weeks 3-6:** Phased rollout (1-2 Epics per week)
- **Week 7:** Final validation and cleanup
- **Week 8:** Buffer for issues and refinements

**Effort Estimate:**
- Script development: 1-2 weeks
- Pilot migration: 1 week
- Phased rollout: 3-4 weeks (depending on automation level)
- Validation and cleanup: 1 week

---

## 9. Next Steps

1. **Approve Migration Plan**
   - Review and approve this migration plan
   - Allocate resources
   - Set timeline

2. **Start Phase 1: Preparation**
   - Complete current state analysis
   - Develop migration scripts
   - Test on sample documents

3. **Execute Pilot Migration**
   - Select pilot Stories
   - Execute migration
   - Validate and refine

4. **Execute Phased Rollout**
   - Migrate Epics in priority order
   - Validate after each phase
   - Document progress

5. **Final Validation**
   - Comprehensive validation
   - Fix issues
   - Complete migration

---

## 10. References

- `docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md` - FR-016 requirements
- `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` - Task document template
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - Kanban governance policy
- `docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md` - Parent story
- `docs/project-management/kanban/epics/epic-06/story-06-adk-implementation-analysis-and-package-management/T06-cross-project-meta-analysis-and-canonical-framework-design.md` - Example discrete Task document

---

**Last Updated:** 2025-12-18  
**Version:** 1.0.0  
**Status:** DRAFT

