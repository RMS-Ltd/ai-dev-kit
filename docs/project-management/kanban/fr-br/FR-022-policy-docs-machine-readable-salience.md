---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Policy Documents Machine-Readable Salience Section

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-12  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** ACCEPTED  
**Intake Date:** 2025-12-12  
**Assigned To:** Epic 5, Story 6, Task 1  
**Version:** v0.5.6.1+0 (doc-init)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-12  
**Intake Decision:** Assigned to Epic 5 (Documentation Management), Story 6 (Policy Documentation Structure), Task 1  
**Version:** v0.5.6.1+0 (doc-init)

**Decision Rationale:**
- FR-022 addresses policy document structure and agentic workflow support
- Fits within Epic 5's scope of documentation management
- Story 6 created specifically for policy documentation structure work
- Task 1 will implement the policy salience section feature

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-5/Epic-5.md`](../epics/Epic-5/Epic-5.md)
- Story: [`docs/project-management/kanban/epics/Epic-5/Story-006-policy-documentation-structure.md`](../epics/Epic-5/Story-006-policy-documentation-structure.md)
- Task: See Story 6 Task Checklist (E5:S06:T01)

---

## Summary

Add a standardized, machine-readable "Policy Salience" section to all policy documents that captures key rules, enforcement points, decision criteria, and scope in a structured format. This section enables AI agents to quickly parse and understand policy requirements without reading the entire document, while maintaining full human readability.

---

## Description

### What is the Feature?

A structured metadata section (ideally at the top of policy documents) that provides:

1. **Policy Salience Summary:** Key rules, principles, and enforcement points in machine-readable format
2. **Decision Criteria:** When/how the policy applies, triggers, and conditions
3. **Scope Definition:** What the policy governs, what's in/out of scope
4. **Validation Rules:** What agents should check when enforcing the policy
5. **Related Policies:** Links to dependent or related policies

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- Policy documents include a standardized "Policy Salience" section (YAML or structured format)
- Agents can quickly extract key policy information without parsing full document
- Policy salience section is human-readable (YAML format)
- Full policy document remains human-readable below the salience section
- Agents can validate actions against policy salience rules programmatically
- Policy salience section follows a standardized schema/template

**Current Behavior:**
- Policy documents are human-readable but lack structured machine-readable summaries
- Agents must parse entire documents to understand policy requirements
- No standardized format for policy metadata beyond lifecycle front-matter
- Policy rules are embedded in prose, making automated extraction difficult
- Agents rely on pattern matching and semantic search to find policy information

### When Does It Occur?

This feature is needed:
- **Every time an agent needs to understand a policy** - Quick lookup of key rules
- **When agents need to validate actions** - Check against policy rules programmatically
- **When creating new policy documents** - Standardized format ensures consistency
- **When updating policies** - Salience section must be kept in sync with policy content
- **When agents need to make policy-driven decisions** - Clear decision criteria

### Who is Affected?

**Primary Affected:**
- AI agents/assistants that need to understand and enforce policies
- Policy document authors (must include salience section)
- Framework maintainers (must define and maintain salience schema)

**Secondary Affected:**
- Developers reading policies (salience section provides quick reference)
- Policy enforcement tools (can parse structured format)
- Documentation tooling (can generate policy summaries from salience)

---

## Problem / Anti-Pattern

- Agents must read entire policy documents to understand key rules
- No standardized way to extract policy requirements programmatically
- Policy rules are embedded in prose, making automated validation difficult
- Inconsistent policy structure makes agent parsing unreliable
- Agents may miss critical policy requirements when parsing long documents
- Manual policy lookup is slow and error-prone for agents

---

## Requirements

### Functional Requirements

- [ ] **FR-022:R01** - Define standardized "Policy Salience" schema/template
- [ ] **FR-022:R02** - Policy salience section must be machine-readable (YAML/JSON)
- [ ] **FR-022:R03** - Policy salience section must be human-readable
- [ ] **FR-022:R04** - Policy salience section captures key rules/principles
- [ ] **FR-022:R05** - Policy salience section includes decision criteria
- [ ] **FR-022:R06** - Policy salience section defines scope (in/out)
- [ ] **FR-022:R07** - Policy salience section includes validation rules
- [ ] **FR-022:R08** - Policy salience section links to related policies
- [ ] **FR-022:R09** - Agents can parse policy salience section programmatically
- [ ] **FR-022:R10** - Policy salience section is placed at top of document (after front-matter)
- [ ] **FR-022:R11** - Create policy salience template for new policy documents
- [ ] **FR-022:R12** - Update existing policy documents with salience sections

### Non-Functional Requirements

- [ ] **FR-022:NF01** - **Usability:** Policy salience section must be easy for humans to read
- [ ] **FR-022:NF02** - **Parsability:** Policy salience section must be easy for agents to parse
- [ ] **FR-022:NF03** - **Consistency:** All policy documents follow same salience format
- [ ] **FR-022:NF04** - **Maintainability:** Salience section can be kept in sync with policy content
- [ ] **FR-022:NF05** - **Extensibility:** Salience schema can be extended for new policy types

---

## Scope Analysis

**Problem Domain:** Policy Documentation, Agentic Workflows, Structured Data  
**Affected Areas:**
- [x] Documentation (policy documents)
- [x] Framework (policy templates, schemas)
- [x] Agent Tooling (policy parsers, validators)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Testing (policy salience validation)

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
1. Agent needs to understand Kanban Governance Policy
2. Agent reads policy document
3. Agent extracts Policy Salience section (YAML)
4. Agent quickly understands:
   - Key rules (e.g., "All work MUST be task-driven")
   - Decision criteria (e.g., "FR/BR → Task → Story → Epic flow")
   - Scope (e.g., "Applies to all work streams")
   - Validation rules (e.g., "Check for Task document before proceeding")
5. Agent makes policy-compliant decision without reading full document ✅

**Additional Use Cases:**
- Agent validates action against policy salience rules
- Agent generates policy summary from salience section
- Agent checks policy dependencies (related policies)
- Human reader uses salience section as quick reference

---

## Acceptance Criteria

- [ ] **AC1:** Policy Salience schema/template defined and documented
- [ ] **AC2:** Policy salience section is machine-readable (YAML format)
- [ ] **AC3:** Policy salience section is human-readable
- [ ] **AC4:** Policy salience section includes key rules/principles
- [ ] **AC5:** Policy salience section includes decision criteria
- [ ] **AC6:** Policy salience section defines scope
- [ ] **AC7:** Policy salience section includes validation rules
- [ ] **AC8:** Policy salience section links to related policies
- [ ] **AC9:** Agent parser can extract policy salience programmatically
- [ ] **AC10:** All existing policy documents updated with salience sections
- [ ] **AC11:** Policy salience template available for new documents
- [ ] **AC12:** Documentation explains how to create/maintain salience sections

---

## Dependencies

**Blocks:**
- Agentic policy understanding and enforcement
- Automated policy validation
- Policy-driven decision making

**Blocked By:**
- None (can be implemented independently)

**Depends On:**
- Existing YAML front-matter pattern (can extend)
- Policy document structure (must be compatible)

**Enables:**
- Faster agent policy lookup
- Automated policy validation
- Policy-driven agent workflows
- Policy compliance checking

---

## Implementation Notes

### Proposed Format

**Option 1: Extended YAML Front-Matter (Recommended)**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  type: governance
  scope:
    applies_to: ["all work streams", "kanban system"]
    excludes: []
  key_rules:
    - rule: "All substantive work MUST be task-driven"
      enforcement: required
      validation: "Check for Task document before proceeding"
    - rule: "FR/BR MUST result in at least one Kanban Task"
      enforcement: required
      validation: "Verify Task document exists for FR/BR"
  decision_criteria:
    - criterion: "FR/BR arrives"
      action: "Check for existing Story"
      next: "If found → create Task, else create Story → Task"
    - criterion: "Work doesn't map to task"
      action: "Update Kanban"
  validation_rules:
    - check: "Task document exists"
      when: "Before starting work"
      error: "Work cannot proceed without Task document"
  related_policies:
    - "versioning-policy.md"
    - "release-workflow-policy.md"
---
```

**Option 2: Separate Policy Salience Section (After Front-Matter)**
```markdown
---
lifecycle: evergreen
...
---

# Policy Salience

```yaml
policy_salience:
  type: governance
  scope: ...
  key_rules: ...
  decision_criteria: ...
  validation_rules: ...
  related_policies: ...
```

---

# [Policy Document Title]
...
```

### Schema Definition

**Policy Salience Schema:**
- `type`: Policy type (governance, technical, process, etc.)
- `scope`: What the policy applies to
- `key_rules`: Array of key rules with enforcement level and validation
- `decision_criteria`: Decision tree or criteria for policy application
- `validation_rules`: What agents should check
- `related_policies`: Links to dependent/related policies

### Implementation Approach

1. **Define Schema:** Create policy salience schema specification
2. **Create Template:** Policy salience template for new documents
3. **Update Existing Policies:** Add salience sections to existing policy documents
4. **Create Parser:** Agent tooling to parse policy salience sections
5. **Documentation:** Guide for creating/maintaining salience sections
6. **Validation:** Ensure salience sections stay in sync with policy content

---

## Rationale

**Why This Matters:**
- **Agent Efficiency:** Agents can quickly understand policies without reading full documents
- **Consistency:** Standardized format ensures consistent policy interpretation
- **Automation:** Enables automated policy validation and enforcement
- **Maintainability:** Salience section provides quick reference for humans too

**Why This Should Be Implemented:**
- Current policy documents are optimized for humans, not agents
- Agents must parse entire documents to find key information
- No standardized way to extract policy requirements programmatically
- Policy-driven agent workflows require structured policy data

---

## Assigned To

**Assigned To:**
- Epic: Epic 5 (Documentation Management and Maintenance)
- Story: Story 6 (Policy Documentation Structure)
- Task: Task 1 (Implement Policy Documents Machine-Readable Salience Section)
- Version: v0.5.6.1+0 (doc-init)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-5/Epic-5.md`](../epics/Epic-5/Epic-5.md)
- Story: [`docs/project-management/kanban/epics/Epic-5/Story-006-policy-documentation-structure.md`](../epics/Epic-5/Story-006-policy-documentation-structure.md)
- Task: See Story 6 Task Checklist (T01)

---

## References

- **Policy as Code:** Open Policy Agent (OPA), Rego language
- **Structured Data:** Schema.org, JSON-LD
- **Existing Pattern:** YAML front-matter for lifecycle metadata
- **Related Work:** FR/BR analyzer (structured content extraction)

---

## Questions for Discussion

1. **Format Preference:** YAML front-matter extension vs. separate section?
2. **Schema Complexity:** How detailed should the salience section be?
3. **Backward Compatibility:** How to handle existing policies without salience?
4. **Validation:** How to ensure salience stays in sync with policy content?
5. **Tooling:** Should we create a policy salience validator/parser?
