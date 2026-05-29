---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 007 – Policy Documentation Structure

**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Estimated Effort:** 1 week  
**Created:** 2025-12-12  
**Last updated:** 2026-01-16 (v0.5.7.1+1, migrated from v0.5.7.1+1 – Story renumbered from S06 to S07 as part of repository story migration)  
**Version:** v0.5.7.1+1  
**Code:** E5S07

**Note:** This story was renumbered from S06 to S07 as part of the repository story abstract space resolution (E9:S01:T08).

---

## Task Checklist

- [x] **E5:S07:T01 – Implement Policy Documents Machine-Readable Salience Section (FR-022)** ✅ COMPLETE (v0.5.7.1+1)

---

## Overview

This story establishes a standardized structure for policy documents that enables both human readability and machine-readable parsing by AI agents. It introduces a "Policy Salience" section that captures key rules, enforcement points, decision criteria, and scope in a structured format.

---

## Goal

Enable AI agents to quickly parse and understand policy requirements without reading entire documents, while maintaining full human readability. Standardize policy document structure to support agentic workflows and automated policy validation.

---

## Tasks

### E5:S07:T01 – Implement Policy Documents Machine-Readable Salience Section (FR-022)

**Scope:** Define and implement a standardized "Policy Salience" section for policy documents that captures key rules, enforcement points, decision criteria, and scope in machine-readable format (YAML). Create schema, template, and update existing policy documents.

**Input:** FR-022 requirements, existing policy documents  
**Deliverable:** Policy salience schema, template, updated policy documents, parser tooling  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Independent (can proceed in parallel)

**Approach:**
1. Define Policy Salience schema/template
2. Create policy salience template for new documents
3. Update existing policy documents with salience sections
4. Create agent parser/validator for policy salience
5. Document policy salience creation/maintenance process

**Acceptance Criteria:**
- [x] ✅ Policy Salience schema/template defined and documented
- [x] ✅ Policy salience section is machine-readable (YAML format)
- [x] ✅ Policy salience section is human-readable
- [x] ✅ Policy salience section includes key rules/principles
- [x] ✅ Policy salience section includes decision criteria
- [x] ✅ Policy salience section defines scope
- [x] ✅ Policy salience section includes validation rules
- [x] ✅ Policy salience section links to related policies
- [x] ✅ Agent parser can extract policy salience programmatically
- [x] ✅ Key policy documents updated with salience sections (Documentation Maintenance, Kanban Governance)
- [x] ✅ Policy salience template available for new documents
- [x] ✅ Documentation explains how to create/maintain salience sections

**Status:** ✅ COMPLETE (v0.5.7.1+1)

**Completion Summary:**
- ✅ Created Policy Salience schema specification (`docs/architecture/standards-and-adrs/policy-salience-schema.md`)
- ✅ Created Policy Salience template (`packages/frameworks/doc-lifecycle/templates/POLICY_SALIENCE_TEMPLATE.md`)
- ✅ Created author guide (`packages/frameworks/doc-lifecycle/docs/policy-salience-guide.md`)
- ✅ Created agent parser guide (`packages/frameworks/doc-lifecycle/docs/policy-salience-agent-parser.md`)
- ✅ Updated Documentation Maintenance Policy with salience section
- ✅ Updated Kanban Governance Policy with salience section
- ✅ Schema includes: policy_id, type, domain, audience, applies_to, key_rules, decision_criteria, triggers, integration_points, related_policies
- ✅ All documentation provides examples, best practices, and usage patterns

**Version Anchor:** v0.5.7.1+0 (doc-init) → v0.5.7.1+1 (implementation complete)

---

## Related Work

- **Feature Request:** FR-022 - Policy Documents Machine-Readable Salience Section
- **Epic:** Epic 5 - Documentation Management and Maintenance
- **Related Stories:** E5:S01 (Documentation Maintenance Framework), E5:S03 (Documentation Automation)

---

## References

- **Policy as Code:** Open Policy Agent (OPA), Rego language
- **Structured Data:** Schema.org, JSON-LD
- **Existing Pattern:** YAML front-matter for lifecycle metadata
- **Related Work:** FR/BR analyzer (structured content extraction)
