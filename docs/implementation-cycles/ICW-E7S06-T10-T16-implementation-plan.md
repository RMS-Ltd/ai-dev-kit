# ICW Implementation Plan: E7:S06:T10-T16 – Workflow Windsurf Impact Reviews

**ICW Instance:** ICW-E7S06-T10-T16
**Host Tasks:** E7:S06:T10 through E7:S06:T16
**Phase:** Implementation Planning
**Created:** 2026-03-18
**Specification Reference:** [ICW-E7S06-T10-T16 Specification](ICW-E7S06-T10-T16-specification.md)
**Test Design Reference:** [ICW-E7S06-T10-T16 Test Design](ICW-E7S06-T10-T16-test-design.md)
**Status:** Complete

---

## Executive Summary

Step-by-step procedure for executing each T10-T16 review. Tasks can run in parallel; steps are identical per task. Each review produces a document that informs T01 (Windsurf artifact cleanup).

---

## Procedure (Per Task)

### Step 1: Gather Inputs

- Read .cursorrules section for the workflow
- List .windsurf/skills/ entries from the spec mapping table
- Read workflow YAML and config in `packages/frameworks/workflow mgt/workflows/{workflow}/`

### Step 2: Assess Windsurf Impact

- Compare .cursorrules intent vs .windsurf skill behavior
- Note divergences, risks, Cursor compatibility
- Document extent of Windsurf-specific logic

### Step 3: Map Skills

- For each relevant .windsurf skill, document:
  - Purpose
  - .cursorrules equivalent
  - Target path (.cursor/skills/ or embedded in .cursorrules)
- If no relevant skills, explicitly state "no relevant skills"

### Step 4: Anti-Pattern Check

- Scan skills/docs for deterministic bias:
  - Rigid scripts
  - Hardcoded paths
  - "Run X then Y" sequences without reasoning
- Document findings or "none observed"

### Step 5: Draft Migration Plan

- Ordered steps for T01:
  - Copy skill X to path Y
  - Update .cursorrules section Z
  - Remove .windsurf references

### Step 6: Produce Deliverable

- Write review document with required sections
- Run REV checklist (test design)
- Fix gaps until all checks pass

### Step 7: Store Deliverable

Save to one of:
- **Option A (recommended):** `docs/project-management/kanban/epics/Epic-7/Story-006-post-windsurf-project-review/E7S06-T{10-16}-{workflow}-windsurf-impact-review.md`
- **Option B:** `docs/implementation-cycles/reviews/E7S06-T{10-16}-{workflow}-windsurf-impact-review.md`

### Step 8: Run RW

- Execute Release Workflow to version, changelog, commit
- Attribute to the task (T10-T16)
- Use RW -d for docs-only or full RW for tag/push

---

## Parallelism

- All 7 reviews can execute concurrently
- No shared state beyond .cursorrules and .windsurf (read-only)
- RW runs are sequential per task (one RW per completed review)

---

## Explicit RW Runs

| Point | Trigger | RW Mode | Attribution |
|-------|---------|---------|-------------|
| RW-1 | After planning package + task doc wiring | RW -d | T10 |
| RW-2 | T10 review complete, REV pass | RW or RW -d | T10 |
| RW-3 | T11 review complete, REV pass | RW or RW -d | T11 |
| RW-4 | T12 review complete, REV pass | RW or RW -d | T12 |
| RW-5 | T13 review complete, REV pass | RW or RW -d | T13 |
| RW-6 | T14 review complete, REV pass | RW or RW -d | T14 |
| RW-7 | T15 review complete, REV pass | RW or RW -d | T15 |
| RW-8 | T16 review complete, REV pass | RW or RW -d | T16 |

---

## Workflow Mapping Reference

| Task | Workflow | .windsurf skills | Workflow path |
|------|----------|------------------|---------------|
| T10 | RW | version-bump, rw-execute, readme-update | release-workflow/ |
| T11 | UKW | ukw-sync, kanban_completed_update | update-kanban-workflow/ |
| T12 | CMW | cmw-maintain | changelog-management-workflow/ |
| T13 | PVW | (check rw-execute, version-bump) | package-version-workflow/ |
| T14 | ICW | (none direct) | implementation-cycle-workflow/ |
| T15 | Intake | intake-process, fr_br_uxr_completed_update | intake-workflow/ |
| T16 | PIR | (check project-manager-coordination) | post-implementation-review/ |

---

## Success Criteria

- [ ] All 7 review documents produced
- [ ] All REV checks pass per document
- [ ] RW executed for each task upon completion
- [ ] Outputs fed to T01 for cleanup execution

---

## Related Documentation

- [Specification](ICW-E7S06-T10-T16-specification.md)
- [Test Design](ICW-E7S06-T10-T16-test-design.md)
- Task docs: T10-T16 in `Story-006-post-windsurf-project-review/`
