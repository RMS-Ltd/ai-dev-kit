# Changelog: v0.5.6.1+1

**Release Date:** 2025-12-12  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 6 - Policy Documentation Structure  
**Task:** Task 1 - Implement Policy Documents Machine-Readable Salience Section (FR-022)

---

## Summary

Implemented Policy Documents Machine-Readable Salience Section feature (FR-022). Created comprehensive schema specification, templates, guides, and updated key policy documents with structured salience sections that enable AI agents to quickly parse and understand policy requirements.

---

## Changes

### New Features

**Policy Salience Schema Specification:**
- ✅ Created `docs/architecture/standards-and-adrs/policy-salience-schema.md`
- ✅ Complete schema definition with field specifications
- ✅ Validation rules and constraints
- ✅ Agent parsing guidelines
- ✅ Examples and best practices

**Policy Salience Template:**
- ✅ Created `packages/frameworks/doc-lifecycle/templates/POLICY_SALIENCE_TEMPLATE.md`
- ✅ Standardized template for new policy documents
- ✅ Field guidelines and examples
- ✅ Validation checklist

**Author Guide:**
- ✅ Created `packages/frameworks/doc-lifecycle/docs/policy-salience-guide.md`
- ✅ Step-by-step guide for creating salience sections
- ✅ Best practices and common patterns
- ✅ Troubleshooting guide

**Agent Parser Guide:**
- ✅ Created `packages/frameworks/doc-lifecycle/docs/policy-salience-agent-parser.md`
- ✅ Python parsing examples
- ✅ Usage patterns and best practices
- ✅ Complete parser implementation example

### Policy Document Updates

**Documentation Maintenance Policy:**
- ✅ Added `policy_salience` section to front-matter
- ✅ 4 key rules with enforcement and validation hints
- ✅ Decision criteria for documentation updates
- ✅ Triggers and integration points
- ✅ Related policies linked

**Kanban Governance Policy:**
- ✅ Added `policy_salience` section to front-matter
- ✅ 5 key rules covering task-driven work, FR/BR flow, hierarchy, versioning
- ✅ Decision criteria for FR/BR intake
- ✅ Triggers for workflow validation
- ✅ Integration points with release workflow

### Schema Features

**Core Fields:**
- `policy_id` - Unique policy identifier
- `type` - Policy type (governance, technical, process, security, data)
- `domain` - Primary and secondary problem domains
- `audience` - Target roles (agents, developers, maintainers, etc.)
- `applies_to` - Documents, activities, components covered
- `excludes` - Explicit exclusions

**Key Rules:**
- Rule ID, summary, must_level (MUST/SHOULD/MAY)
- When rules apply (triggers)
- Enforcement (owner, mechanisms)
- Validation hints for agents

**Decision Support:**
- Decision criteria (question → yes/no actions)
- Triggers (event-driven validation)
- Integration points (workflow/tool integration)
- Related policies (cross-policy linking)

---

## Related Work

- **Story:** E5:S06 - Policy Documentation Structure
- **Epic:** Epic 5 - Documentation Management and Maintenance
- **Feature Request:** FR-022 - Policy Documents Machine-Readable Salience Section
- **Depends On:** None (independent implementation)
- **Enables:** Agentic policy parsing, automated policy validation, policy-driven decision making

---

## Notes

This implementation establishes the foundation for machine-readable policy documents. The schema is designed to be:
- **Human-readable:** YAML format is easy for humans to read and edit
- **Machine-parseable:** Structured format enables programmatic extraction
- **Extensible:** Schema can be extended for new policy types
- **Maintainable:** Clear guidelines ensure consistency

The initial implementation focuses on two key policies (Documentation Maintenance and Kanban Governance) as proof-of-concept. Additional policies can be updated following the same pattern using the provided template and guides.

Agents can now:
- Quickly lookup policy requirements without reading full documents
- Validate actions against policy rules programmatically
- Make policy-driven decisions using decision criteria
- Understand policy integration points with workflows

---

## Files Changed

**New Files:**
- `docs/architecture/standards-and-adrs/policy-salience-schema.md`
- `packages/frameworks/doc-lifecycle/templates/POLICY_SALIENCE_TEMPLATE.md`
- `packages/frameworks/doc-lifecycle/docs/policy-salience-guide.md`
- `packages/frameworks/doc-lifecycle/docs/policy-salience-agent-parser.md`

**Modified Files:**
- `docs/architecture/standards-and-adrs/documentation-maintenance-policy.md`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- `docs/project-management/kanban/epics/Epic-5/Story-006-policy-documentation-structure.md`
