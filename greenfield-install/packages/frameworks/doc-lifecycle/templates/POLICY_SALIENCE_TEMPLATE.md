---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Policy Salience Template

**Version:** 1.0.0  
**Last Updated:** 2025-12-12  
**Status:** Active  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 6 - Policy Documentation Structure

---

## Purpose

This template provides a standardized structure for adding Policy Salience sections to policy documents. Copy this template and customize it for your specific policy.

---

## Template

Add the following `policy_salience` section to your policy document's YAML front-matter (after lifecycle metadata):

```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: <ISO-8601-datetime>
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: <unique-policy-identifier>
  type: <governance|technical|process|security|data>
  domain:
    primary: <primary-domain>
    secondary: [<secondary-domain-1>, <secondary-domain-2>]
  audience: [<audience-role-1>, <audience-role-2>]
  applies_to:
    documents: [<document-pattern-1>, <document-pattern-2>]
    activities: [<activity-1>, <activity-2>]
    components: [<component-1>, <component-2>]
  excludes:
    documents: [<excluded-pattern-1>]
    activities: [<excluded-activity-1>]
  key_rules:
    - id: <POLICY-R1>
      summary: "<One-sentence summary of the most critical rule>"
      must_level: <MUST|SHOULD|MAY>
      when_applies: [<trigger-1>, <trigger-2>]
      enforcement:
        owner: [<owner-role-1>, <owner-role-2>]
        mechanisms: [<mechanism-1>, <mechanism-2>]
      validation_hints: [<hint-1>, <hint-2>]
    - id: <POLICY-R2>
      summary: "<Second critical rule>"
      must_level: MUST
      when_applies: [<trigger>]
      enforcement:
        owner: [<owner>]
        mechanisms: [<mechanism>]
      validation_hints: [<hint>]
  decision_criteria:
    - id: <POLICY-DC1>
      question: "<Decision question>"
      yes_action: "<Action if yes>"
      no_action: "<Action if no>"
  triggers:
    - id: <POLICY-T1>
      event: <event-type>
      required_checks: [<check-1>, <check-2>]
  integration_points:
    - id: <POLICY-IP1>
      component: <component-name>
      step: <workflow-step>
      behavior: "<Expected behavior>"
  related_policies:
    - "<relative-path-to-policy-1>"
    - "<relative-path-to-policy-2>"
---
```

---

## Field Guidelines

### Required Fields

#### `policy_id`
- **Format:** Lowercase, hyphenated (e.g., `doc-maintenance-policy`, `kanban-governance-policy`)
- **Uniqueness:** Must be unique across all policies
- **Example:** `my-policy-name`

#### `type`
- **Values:** `governance`, `technical`, `process`, `security`, `data`
- **Choose based on:** Primary concern of the policy

#### `domain.primary`
- **Examples:** `documentation`, `versioning`, `kanban`, `security`, `testing`
- **Choose:** The main problem domain this policy addresses

#### `audience`
- **Common values:** `agents`, `developers`, `maintainers`, `epic-owners`, `story-owners`, `framework-owners`
- **Include:** All roles that need to understand or enforce this policy

#### `applies_to`
- **At least one sub-field required:** `documents`, `activities`, or `components`
- **Documents:** Use glob patterns (e.g., `docs/**`, `packages/frameworks/**`)
- **Activities:** Use workflow/process names (e.g., `release-workflow`, `story-completion`)
- **Components:** Use system component names (e.g., `kanban-board`, `version-file`)

#### `key_rules`
- **Minimum:** At least one rule required
- **Recommended:** 3-7 rules covering the most critical requirements
- **Rule ID format:** `<POLICY-PREFIX>-R<number>` (e.g., `DM-R1`, `KG-R2`)
- **Summary:** One clear sentence
- **Must level:** Use `MUST` for critical rules, `SHOULD` for important but flexible rules, `MAY` for optional guidance

### Optional Fields

#### `excludes`
- **Use when:** Policy explicitly excludes certain documents or activities
- **Helps:** Agents understand boundaries

#### `decision_criteria`
- **Use when:** Policy involves decision trees or yes/no questions
- **Format:** Question → Yes action → No action

#### `triggers`
- **Use when:** Policy has event-driven requirements
- **Common events:** `code-merged-to-main`, `story-completed`, `release-workflow-started`

#### `integration_points`
- **Use when:** Policy integrates with workflows, tools, or systems
- **Helps:** Agents understand where policy is enforced

#### `related_policies`
- **Use when:** Policy references or depends on other policies
- **Format:** Relative paths from repository root

---

## Best Practices

### Keep It Focused
- **Key Rules:** Focus on 3-7 most critical rules that agents need to know
- **Avoid:** Including every detail from the full policy document
- **Purpose:** Quick lookup, not comprehensive reference

### Be Specific
- **Validation Hints:** Provide actionable checks agents can perform
- **Enforcement Mechanisms:** Name specific tools, workflows, or processes
- **Triggers:** Use specific event names that agents can detect

### Maintain Consistency
- **Naming:** Use consistent terminology across policies
- **Structure:** Follow the same field order and format
- **IDs:** Use consistent ID prefixes (e.g., `DM-` for doc-maintenance, `KG-` for kanban-governance)

### Keep It Updated
- **Sync:** Keep salience section in sync with policy content
- **Review:** Update salience when policy changes
- **Version:** Consider versioning salience schema if breaking changes needed

---

## Examples

### Example 1: Documentation Maintenance Policy

```yaml
policy_salience:
  policy_id: doc-maintenance-policy
  type: governance
  domain:
    primary: documentation
    secondary: ["maintenance", "quality"]
  audience: ["agents", "epic-owners", "framework-owners"]
  applies_to:
    documents: ["docs/**", "packages/frameworks/**"]
    activities: ["release-workflow", "story-completion"]
  key_rules:
    - id: DM-R1
      summary: "Documentation must accurately reflect current implementation."
      must_level: MUST
      when_applies: ["code changes merged"]
      enforcement:
        owner: ["epic-owners"]
        mechanisms: ["release-workflow-step: docs-validation"]
      validation_hints: ["check version numbers", "compare docs vs code"]
```

### Example 2: Kanban Governance Policy

```yaml
policy_salience:
  policy_id: kanban-governance-policy
  type: governance
  domain:
    primary: kanban
    secondary: ["project-management", "versioning"]
  audience: ["agents", "developers", "epic-owners"]
  applies_to:
    activities: ["fr-br-intake", "task-creation", "release-workflow"]
    components: ["kanban-board", "epic-docs", "task-docs"]
  key_rules:
    - id: KG-R1
      summary: "All substantive work MUST be task-driven."
      must_level: MUST
      when_applies: ["any work being performed"]
      enforcement:
        owner: ["story-owners"]
        mechanisms: ["release-workflow-validation"]
      validation_hints: ["verify task document exists", "check task linked to story"]
```

---

## Validation Checklist

Before committing a policy with salience section, verify:

- [ ] `policy_id` is unique and follows naming convention
- [ ] `type` is one of the valid enum values
- [ ] `domain.primary` is set
- [ ] `audience` includes all relevant roles
- [ ] `applies_to` has at least one sub-field
- [ ] `key_rules` has at least one rule
- [ ] All rule IDs follow naming convention
- [ ] All `must_level` values are valid (`MUST`, `SHOULD`, `MAY`)
- [ ] `related_policies` file paths are valid (if provided)
- [ ] YAML syntax is valid
- [ ] Salience section accurately reflects policy content

---

## References

- **Schema Specification:** `docs/architecture/standards-and-adrs/policy-salience-schema.md`
- **Example Policies:**
  - `docs/architecture/standards-and-adrs/documentation-maintenance-policy.md`
  - `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **FR-022:** Policy Documents Machine-Readable Salience Section

---

## Support

For questions or issues with Policy Salience:
- **Epic:** Epic 5 - Documentation Management and Maintenance
- **Story:** Story 6 - Policy Documentation Structure
- **Task:** E5:S06:T01 - Implement Policy Documents Machine-Readable Salience Section
