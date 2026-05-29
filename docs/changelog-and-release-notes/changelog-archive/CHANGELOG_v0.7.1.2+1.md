# Changelog - v0.7.1.2+1

**Release Date:** 2026-01-03 18:03:49 UTC  
**Epic:** Epic 7 - Codebase Maintenance and Review  
**Story:** Story 1 - Codebase Maintenance Tasks  
**Task:** E7:S01:T02 - Create maintenance task prioritization framework

---

## Summary

Maintenance task prioritization framework created. Comprehensive framework for systematically prioritizing maintenance work based on severity, impact, and effort dimensions with weighted scoring and Kanban integration.

---

## Added

### Maintenance Task Prioritization Framework

- **Prioritization framework document** (`docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework.md`)
  - Defines 4 maintenance task categories (IDE-Flagged Issues, Code Quality, Technical Debt, Framework/Infrastructure)
  - Establishes 3 prioritization dimensions with 5-level scales:
    - Severity (Critical to Informational, 1-5)
    - Impact (Critical to Minimal, 1-5)
    - Effort (Minimal to Very High, 1-5)
  - Provides priority score calculation formula: `(Severity × 0.4) + (Impact × 0.4) + ((6 - Effort) × 0.2)`
  - Defines priority score ranges (Critical/High/Medium/Low/Minimal)
  - Includes contextual adjustments (strategic importance, dependencies, risk factors)
  - Documents 5-step prioritization process
  - Integrates with Kanban framework (MoSCOW classification, Epic/Story assignment)
  - Includes 4 comprehensive examples demonstrating framework usage

---

## Technical Details

### Framework Components

**Task Categories:**
- IDE-Flagged Issues (errors, warnings, info)
- Code Quality Issues (code smells, complexity, style, security)
- Technical Debt (architectural, documentation, test, dependency debt)
- Framework and Infrastructure Maintenance (updates, improvements, optimization, compatibility)

**Prioritization Dimensions:**
- **Severity (40% weight):** Criticality of the issue (1-5 scale)
- **Impact (40% weight):** Scope and effect of the issue (1-5 scale)
- **Effort (20% weight):** Time and complexity required (1-5 scale, inverted in calculation)

**Priority Score Ranges:**
- Critical Priority (4.0-5.0): Must address immediately
- High Priority (3.0-3.9): Address within 1-2 development cycles
- Medium Priority (2.0-2.9): Address within 2-4 development cycles
- Low Priority (1.0-1.9): Address as time permits
- Minimal Priority (0.0-0.9): Optional, address when convenient

**Kanban Integration:**
- MoSCOW classification mapping (Must Have/Should Have/Could Have/Won't Have)
- Epic/Story assignment guidance
- Priority tracking and metadata

### Prioritization Process

1. **Task Identification:** Identify maintenance tasks from various sources
2. **Initial Assessment:** Assess severity, impact, and effort
3. **Calculate Base Priority Score:** Apply weighted formula
4. **Apply Contextual Adjustments:** Consider strategic importance, dependencies, risks
5. **Kanban Integration:** Assign to appropriate Epic/Story with MoSCOW classification

---

## Files Changed

- `docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework.md` (new)
- `docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks.md` (updated - T02 marked COMPLETE)
- `docs/project-management/kanban/epics/Epic-7/Epic-7.md` (updated - T02 marked COMPLETE)
- `docs/project-management/kanban/kanban-board.md` (updated - T02 marked COMPLETE, task descriptions corrected)

---

## Related

- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Framework Health Metrics:** `docs/architecture/standards-and-adrs/framework-health-metrics.md`
- **Epic 7:** `docs/project-management/kanban/epics/Epic-7/Epic-7.md`
- **Story 1:** `docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks.md`

---

## Next Steps

- E7:S01:T03 - Document maintenance workflow processes
- E7:S01:T04 - Integrate maintenance tasks with Kanban framework
- Begin using prioritization framework for maintenance task prioritization

