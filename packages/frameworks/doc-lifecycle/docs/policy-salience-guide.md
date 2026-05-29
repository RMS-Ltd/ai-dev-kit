---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Policy Salience Guide for Authors

**Version:** 1.0.0  
**Last Updated:** 2025-12-12  
**Status:** Active  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 6 - Policy Documentation Structure

---

## Overview

This guide helps policy document authors create and maintain Policy Salience sections that enable AI agents to quickly understand and enforce policies.

---

## What is Policy Salience?

**Policy Salience** is a structured YAML section in policy document front-matter that captures:
- **Key rules** that agents need to enforce
- **Decision criteria** for policy-driven choices
- **Scope** of what the policy applies to
- **Integration points** with workflows and tools
- **Validation hints** for automated checking

**Purpose:** Enable agents to understand policies without reading entire documents.

---

## When to Add Policy Salience

Add Policy Salience to:
- ✅ **New policy documents** - Include salience from the start
- ✅ **Existing policy documents** - Add salience when updating
- ✅ **Policy updates** - Keep salience in sync with policy changes

**Not required for:**
- Non-policy documents (guides, tutorials, ADRs)
- Temporary or experimental policies (unless they'll be used by agents)

---

## How to Create Policy Salience

### Step 1: Read the Full Policy

Before creating salience, read the entire policy document to understand:
- What the policy governs
- Key rules and principles
- Who it applies to
- How it's enforced
- Related policies

### Step 2: Identify Key Rules

Extract the 3-7 most critical rules that:
- Agents need to enforce
- Are frequently referenced
- Have clear validation criteria
- Impact workflow decisions

**Example:** From Documentation Maintenance Policy:
- "Documentation must accurately reflect current implementation" ✅
- "Documentation owners must review quarterly" ❌ (too specific, not agent-enforceable)

### Step 3: Define Scope

Identify:
- **Documents:** What files/patterns are covered? (e.g., `docs/**`, `packages/frameworks/**`)
- **Activities:** What workflows/processes? (e.g., `release-workflow`, `story-completion`)
- **Components:** What system parts? (e.g., `kanban-board`, `version-file`)

### Step 4: Document Decision Criteria

If the policy involves decision trees, document:
- **Questions** agents might ask
- **Yes/No actions** based on answers

**Example:**
```yaml
decision_criteria:
  - id: DM-DC1
    question: "Does this change affect user-visible behavior?"
    yes_action: "Require documentation update."
    no_action: "Record 'no-doc-change-required' note."
```

### Step 5: Identify Integration Points

Document how the policy integrates with:
- **Workflows** (e.g., release-workflow, fr-br-intake)
- **Tools** (e.g., validators, parsers)
- **Systems** (e.g., kanban-board, version-file)

### Step 6: Add Validation Hints

Provide actionable checks agents can perform:
- ✅ "Check version numbers match current code"
- ✅ "Verify task document exists for work"
- ❌ "Review documentation quality" (too vague)

### Step 7: Link Related Policies

List policies that:
- Are referenced by this policy
- Depend on this policy
- Are related in scope

---

## Maintenance Guidelines

### Keep Salience in Sync

**When to update salience:**
- Policy rules change
- Enforcement mechanisms change
- Integration points change
- Scope changes

**How to verify sync:**
- Review salience against policy content quarterly
- Update salience when updating policy
- Validate salience during policy reviews

### Versioning

**Schema version:** Tracked in `policy-salience-schema.md`
**Policy version:** Tracked in policy document header

**Breaking changes:** If schema changes, update all policies with salience sections.

---

## Common Patterns

### Pattern 1: Governance Policy

```yaml
policy_salience:
  policy_id: <policy-name>
  type: governance
  domain:
    primary: <domain>
  audience: ["agents", "developers", "maintainers"]
  applies_to:
    activities: [<workflow-1>, <workflow-2>]
  key_rules:
    - id: <PREFIX>-R1
      summary: "<Critical rule>"
      must_level: MUST
      enforcement:
        owner: [<owner-roles>]
        mechanisms: [<enforcement-tools>]
```

### Pattern 2: Technical Policy

```yaml
policy_salience:
  policy_id: <policy-name>
  type: technical
  domain:
    primary: <technical-domain>
  audience: ["agents", "developers"]
  applies_to:
    documents: [<code-patterns>]
    components: [<system-components>]
  key_rules:
    - id: <PREFIX>-R1
      summary: "<Technical requirement>"
      must_level: MUST
      validation_hints: [<technical-checks>]
```

### Pattern 3: Process Policy

```yaml
policy_salience:
  policy_id: <policy-name>
  type: process
  domain:
    primary: <process-domain>
  audience: ["agents", <process-participants>]
  applies_to:
    activities: [<process-steps>]
  decision_criteria:
    - id: <PREFIX>-DC1
      question: "<Process decision>"
      yes_action: "<Action>"
      no_action: "<Alternative>"
```

---

## Troubleshooting

### Problem: Salience section is too long

**Solution:** Focus on 3-7 key rules. Move detailed rules to the main policy document.

### Problem: Not sure what to include

**Solution:** Ask: "What would an agent need to know to enforce this policy?" Include only that.

### Problem: Policy is too complex for salience

**Solution:** Focus on the most critical, agent-enforceable rules. Use `related_policies` to link to detailed policy.

### Problem: Validation hints are too vague

**Solution:** Make hints actionable and specific. Use format: "Check X", "Verify Y", "Ensure Z".

---

## Examples

See complete examples in:
- `docs/architecture/standards-and-adrs/documentation-maintenance-policy.md`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

## References

- **Schema Specification:** `docs/architecture/standards-and-adrs/policy-salience-schema.md`
- **Template:** `packages/frameworks/doc-lifecycle/templates/POLICY_SALIENCE_TEMPLATE.md`
- **FR-022:** Policy Documents Machine-Readable Salience Section

---

## Support

For questions or help:
- **Epic:** Epic 5 - Documentation Management and Maintenance
- **Story:** Story 6 - Policy Documentation Structure
- **Task:** E5:S06:T01 - Implement Policy Documents Machine-Readable Salience Section
