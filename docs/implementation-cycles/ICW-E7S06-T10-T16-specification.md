# ICW Specification: E7:S06:T10-T16 – Workflow Windsurf Impact Reviews

**ICW Instance:** ICW-E7S06-T10-T16
**Host Tasks:** E7:S06:T10 through E7:S06:T16
**Phase:** Specification
**Created:** 2026-03-18
**Status:** Complete

---

## Executive Summary

Unified review specification for T10-T16 workflow Windsurf impact assessments. All seven tasks share the same abstract structure: each reviews one workflow (RW, UKW, CMW, PVW, ICW, Intake, PIR) for Windsurf impact, documents .windsurf skill mappings, and produces a migration plan for T01 (Windsurf artifact cleanup).

---

## Requirements

### FR-1: Windsurf Impact Assessment

Review document MUST contain a Windsurf impact assessment section covering:
- Extent of Windsurf-specific logic in skills and workflows
- Divergence from .cursorrules intent
- Risk to Cursor-native execution

### FR-2: Skill Mappings

Review document MUST list all .windsurf skills relevant to the workflow, with mapping to:
- .cursorrules equivalent, or
- .cursor/skills/ target path

Tasks with no direct .windsurf skills MUST explicitly state "no relevant skills."

### FR-3: Migration Plan

Review document MUST include migration steps for T01:
- Which skills to migrate
- Target paths (.cursor/skills/ or .cursorrules)
- Any .cursorrules section updates

### FR-4: Anti-Pattern Vigilance

Review document MUST document findings (or "none observed") for the deterministic-vs-agentic anti-pattern:
- Over-reliance on rigid scripts
- Hardcoded paths
- "Run X then Y" sequences without reasoning, synthesis, or adaptive fallbacks
- Lack of agentic reasoning where the workflow requires it

---

## Inputs (Per Task)

- .cursorrules workflow section
- .windsurf/skills/ relevant entries (from mapping table)
- `packages/frameworks/workflow mgt/workflows/{workflow}/` YAML and config

---

## Deliverable Format

Single markdown document per task with sections:
1. Windsurf Impact
2. Skill Mappings
3. Migration Plan
4. Anti-Pattern Findings

---

## Workflow-Specific Mapping

| Task | Workflow | .windsurf skills | Workflow path |
|------|----------|------------------|---------------|
| T10 | RW | version-bump, rw-execute, readme-update | release-workflow/ |
| T11 | UKW | ukw-sync, kanban_completed_update | update-kanban-workflow/ |
| T12 | CMW | cmw-maintain | changelog-management-workflow/ |
| T13 | PVW | (none direct; check rw-execute, version-bump) | package-version-workflow/ |
| T14 | ICW | (none direct) | implementation-cycle-workflow/ |
| T15 | Intake | intake-process, fr_br_uxr_completed_update | intake-workflow/ |
| T16 | PIR | (none direct; check project-manager-coordination) | post-implementation-review/ |

---

## Quality Gates

- [ ] All requirements clearly defined
- [ ] Inputs and deliverable format specified
- [ ] Workflow mapping table complete
- [ ] Ready for Test Design phase

---

## Related Documentation

- [Test Design](ICW-E7S06-T10-T16-test-design.md)
- [Implementation Plan](ICW-E7S06-T10-T16-implementation-plan.md)
- Task docs: T10, T11, T12, T13, T14, T15, T16 in `Story-006-post-windsurf-project-review/`
