---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S07:T106 – Windsurf Migration: .cursorrules to Workflow Equivalents

**Task ID:** E6:S07:T106
**Status:** SUPERSEDED  
**Priority:** MEDIUM  
**Superseded by:** E7:S06:T01 (Windsurf artifact cleanup). Project moved to Cursor; `.windsurf/` removed; skills migrated to `.cursor/skills/`. T106's Windsurf workflow direction no longer applies.
**Estimated Effort:** Medium
**Created:** 2026-03-07
**Last updated:** 2026-03-07

---

## Scope

Interpret existing .cursorrules content and map key policies/workflows to Windsurf/Cascade equivalents, including system instructions, developer workflows, and runbooks for the new environment.

---

## Inputs

- Current .cursorrules file content and structure
- Windsurf/Cascade capabilities and limitations
- Workflow definitions from cursorrules-rw-trigger-section.md
- Developer instructions and policies
- Existing workflow documentation and runbooks

---

## Deliverable

### Migration Analysis Report
**Location**: `docs/migration/windsurf-migration-analysis.md`

#### Analysis Sections
1. **Current .cursorrules Inventory**
   - RW trigger section analysis
   - Developer instructions mapping
   - Workflow definitions catalog
   - Policy and procedure documentation

2. **Windsurf/Cascade Capability Assessment**
   - Feature comparison table
   - Limitations and workarounds
   - Integration possibilities
   - Migration feasibility analysis

3. **Mapping Strategy**
   - Direct mappings (what translates 1:1)
   - Partial mappings (what needs adaptation)
   - Missing features (what needs alternative solutions)
   - New opportunities (Windsurf-specific enhancements)

### Migrated Workflow Definitions
**Location**: `.windsurf/workflows/`

#### Workflow Files
1. **release-workflow.md** - RW trigger equivalent
2. **ukw-workflow.md** - Update Kanban Workflow
3. **cmw-workflow.md** - Changelog Maintenance Workflow
4. **pvw-workflow.md** - Package Version Workflow
5. **developer-instructions.md** - General development guidelines

### Implementation Guide
**Location**: `docs/migration/windsurf-implementation-guide.md`

#### Guide Sections
1. **Setup Instructions**
   - Windsurf configuration
   - Workflow installation
   - Integration steps

2. **Usage Examples**
   - Trigger examples
   - Common workflows
   - Best practices

3. **Troubleshooting**
   - Migration issues
   - Feature limitations
   - Workaround solutions

---

## Acceptance Criteria

- [ ] Complete inventory of current .cursorrules content
- [ ] Comprehensive Windsurf/Cascade capability assessment
- [ ] Detailed mapping strategy for all workflows
- [ ] Migrated workflow definitions for Windsurf
- [ ] Implementation guide with setup instructions
- [ ] Usage examples and troubleshooting guide
- [ ] Test migrated workflows in Windsurf environment

---

## Dependencies

- Current .cursorrules analysis
- Windsurf/Cascade environment access
- Workflow documentation from previous tasks
- Understanding of both environments' capabilities

---

## Related Work

- E2:S16:T03: RW Maintenance (perpetual task)
- FR-046: RW Uses SemVer Tag When Task-Touch Enabled
- Workflow documentation updates
- Release automation improvements

---

## Notes

This migration is important because:

1. **Environment Transition**: Moving from Cursor to Windsurf/Cascade
2. **Capability Preservation**: Ensure no workflow functionality is lost
3. **Process Improvement**: Opportunity to enhance workflows with new features
4. **Future-Proofing**: Prepare for continued Windsurf/Cascade development

Key considerations:
- **Feature Parity**: Maintain all current workflow capabilities
- **User Experience**: Ensure smooth transition for developers
- **Maintainability**: Create workflows that are easy to update and maintain
- **Integration**: Ensure workflows work with existing tools and processes

The migration should be incremental and reversible, allowing for gradual adoption and rollback if needed.

Priority is MEDIUM because while important, the current .cursorrules still work and this can be done incrementally alongside other work.
