---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Policy Salience Schema Specification

**Version:** 1.0.0  
**Last Updated:** 2025-12-12  
**Status:** Active  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 6 - Policy Documentation Structure  
**Task:** E5:S06:T01 - Implement Policy Documents Machine-Readable Salience Section

---

## Overview

This specification defines the **Policy Salience** schema, a standardized YAML structure embedded in policy document front-matter that enables AI agents to quickly parse and understand policy requirements without reading entire documents.

**Purpose:**
- Enable fast agent policy lookup and decision-making
- Support automated policy validation and enforcement
- Maintain human readability alongside machine-readability
- Standardize policy document structure across the codebase

---

## Schema Structure

The `policy_salience` section is added to the YAML front-matter of policy documents, immediately after the lifecycle metadata fields.

### Complete Schema

```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: <unique-policy-identifier>
  type: <policy-type>
  domain:
    primary: <primary-domain>
    secondary: [<secondary-domains>]
  audience: [<audience-roles>]
  applies_to:
    documents: [<document-patterns>]
    activities: [<activity-types>]
    components: [<component-names>]
  excludes:
    documents: [<excluded-patterns>]
    activities: [<excluded-activities>]
  key_rules:
    - id: <rule-id>
      summary: <rule-summary>
      must_level: <MUST|SHOULD|MAY>
      when_applies: [<triggers>]
      enforcement:
        owner: [<owner-roles>]
        mechanisms: [<enforcement-mechanisms>]
      validation_hints: [<validation-checks>]
  decision_criteria:
    - id: <criteria-id>
      question: <decision-question>
      yes_action: <action-if-yes>
      no_action: <action-if-no>
  triggers:
    - id: <trigger-id>
      event: <event-type>
      required_checks: [<validation-checks>]
  integration_points:
    - id: <integration-id>
      component: <component-name>
      step: <workflow-step>
      behavior: <expected-behavior>
  related_policies: [<policy-file-paths>]
---
```

---

## Field Definitions

### Top-Level Fields

#### `policy_id` (required, string)
**Purpose:** Unique identifier for the policy document.

**Format:** Lowercase, hyphenated (e.g., `doc-maintenance-policy`, `kanban-governance-policy`)

**Example:**
```yaml
policy_id: doc-maintenance-policy
```

#### `type` (required, enum)
**Purpose:** Categorizes the policy by its primary concern.

**Values:**
- `governance` - Project management, workflows, processes
- `technical` - Technical standards, architecture, code quality
- `process` - Development processes, workflows, procedures
- `security` - Security policies, access control, data protection
- `data` - Data management, privacy, retention policies

**Example:**
```yaml
type: governance
```

#### `domain` (required, object)
**Purpose:** Identifies the problem domain(s) this policy addresses.

**Fields:**
- `primary` (required, string) - Primary domain (e.g., `documentation`, `versioning`, `kanban`)
- `secondary` (optional, array of strings) - Related domains

**Example:**
```yaml
domain:
  primary: documentation
  secondary: ["maintenance", "quality"]
```

#### `audience` (required, array of strings)
**Purpose:** Identifies who this policy applies to or who needs to understand it.

**Common Values:**
- `agents` - AI agents/assistants
- `developers` - All developers
- `maintainers` - Framework/maintenance team
- `epic-owners` - Epic owners
- `story-owners` - Story owners
- `framework-owners` - Framework package owners

**Example:**
```yaml
audience: ["agents", "epic-owners", "framework-owners", "developers"]
```

#### `applies_to` (required, object)
**Purpose:** Defines what this policy governs.

**Fields:**
- `documents` (optional, array of strings) - File patterns or document types
- `activities` (optional, array of strings) - Activities/workflows (e.g., `release-workflow`, `story-completion`)
- `components` (optional, array of strings) - System components (e.g., `kanban-board`, `version-file`)

**Example:**
```yaml
applies_to:
  documents:
    - "docs/**"
    - "packages/frameworks/**"
    - "root:README.md"
  activities:
    - "release-workflow"
    - "story-completion"
  components:
    - "kanban-board"
```

#### `excludes` (optional, object)
**Purpose:** Explicitly defines what is NOT covered by this policy.

**Fields:**
- `documents` (optional, array of strings) - Excluded file patterns
- `activities` (optional, array of strings) - Excluded activities

**Example:**
```yaml
excludes:
  documents:
    - "third-party-docs/**"
    - "external-links-only.md"
  activities:
    - "experimental-workflows"
```

### Key Rules

#### `key_rules` (required, array of objects)
**Purpose:** Captures the most important rules/principles that agents need to understand quickly.

**Rule Object Fields:**
- `id` (required, string) - Unique rule identifier (e.g., `DM-R1`, `KG-R2`)
- `summary` (required, string) - One-sentence summary of the rule
- `must_level` (required, enum) - `MUST`, `SHOULD`, or `MAY`
- `when_applies` (optional, array of strings) - Triggers or conditions when rule applies
- `enforcement` (optional, object) - How rule is enforced
  - `owner` (array of strings) - Who is responsible for enforcement
  - `mechanisms` (array of strings) - Enforcement mechanisms (e.g., `release-workflow-step`, `validator-script`)
- `validation_hints` (optional, array of strings) - What agents should check when validating

**Example:**
```yaml
key_rules:
  - id: DM-R1
    summary: "Documentation must accurately reflect current implementation, processes, and policies."
    must_level: MUST
    when_applies:
      - "code changes merged to main"
      - "process/policy changes approved"
    enforcement:
      owner: ["epic-owners", "framework-owners"]
      mechanisms:
        - "story-completion-checklist"
        - "release-workflow-step: docs-validation"
    validation_hints:
      - "check version numbers and last-updated fields"
      - "compare documented behavior vs code for changed modules"
```

### Decision Criteria

#### `decision_criteria` (optional, array of objects)
**Purpose:** Provides decision trees or criteria for when/how the policy applies.

**Criteria Object Fields:**
- `id` (required, string) - Unique criteria identifier
- `question` (required, string) - Decision question
- `yes_action` (required, string) - Action if answer is yes
- `no_action` (optional, string) - Action if answer is no

**Example:**
```yaml
decision_criteria:
  - id: DM-DC1
    question: "Does this change affect user-visible behavior, APIs, or processes?"
    yes_action: "Require documentation update under the relevant Epic/Story."
    no_action: "Record explicit 'no-doc-change-required' note in Story."
```

### Triggers

#### `triggers` (optional, array of objects)
**Purpose:** Defines events that activate policy checks or requirements.

**Trigger Object Fields:**
- `id` (required, string) - Unique trigger identifier
- `event` (required, string) - Event type (e.g., `code-merged-to-main`, `story-completed`)
- `required_checks` (optional, array of strings) - Validation checks to perform

**Example:**
```yaml
triggers:
  - id: DM-T1
    event: "code-merged-to-main"
    required_checks:
      - "ensure_related_story_has_doc-update-or-exemption"
```

### Integration Points

#### `integration_points` (optional, array of objects)
**Purpose:** Documents how this policy integrates with workflows, tools, or systems.

**Integration Object Fields:**
- `id` (required, string) - Unique integration identifier
- `component` (required, string) - Component name (e.g., `release-workflow`, `doc-lifecycle-validator`)
- `step` (optional, string) - Specific workflow step
- `behavior` (required, string) - Expected behavior or action

**Example:**
```yaml
integration_points:
  - id: DM-IP1
    component: "release-workflow"
    step: "docs-validation"
    behavior: "fail release if required docs not updated"
```

### Related Policies

#### `related_policies` (optional, array of strings)
**Purpose:** Links to other policies that are related, dependent, or referenced.

**Format:** Relative file paths from repository root

**Example:**
```yaml
related_policies:
  - "docs/architecture/standards-and-adrs/doc-lifecycle-policy.md"
  - "packages/frameworks/kanban/policies/kanban-governance-policy.md"
```

---

## Schema Validation Rules

### Required Fields
- `policy_id`
- `type`
- `domain.primary`
- `audience`
- `applies_to` (at least one sub-field must be present)
- `key_rules` (at least one rule must be present)

### Field Constraints
- `policy_id`: Must be unique across all policies
- `type`: Must be one of the defined enum values
- `must_level`: Must be `MUST`, `SHOULD`, or `MAY`
- `related_policies`: File paths must exist and be valid

### Best Practices
- Keep `key_rules` focused on the 3-7 most critical rules
- Use clear, concise language in summaries
- Provide actionable `validation_hints` for agents
- Link to related policies for context
- Update `related_policies` when policies change

---

## Agent Parsing Guidelines

### Quick Policy Lookup
Agents should:
1. Extract `policy_salience` section from front-matter
2. Check `applies_to` to determine if policy is relevant
3. Review `key_rules` for critical requirements
4. Use `decision_criteria` for policy-driven decisions
5. Check `triggers` for event-driven validation

### Policy Validation
Agents should:
1. Use `validation_hints` to guide checks
2. Verify `enforcement.mechanisms` are in place
3. Check `integration_points` for workflow integration
4. Validate against `key_rules` requirements

### Policy Decision Making
Agents should:
1. Use `decision_criteria` for yes/no decisions
2. Check `applies_to` scope before applying policy
3. Respect `excludes` boundaries
4. Reference `related_policies` for full context

---

## Examples

See the following policy documents for complete examples:
- `docs/architecture/standards-and-adrs/documentation-maintenance-policy.md`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md`

---

## References

- **FR-022:** Policy Documents Machine-Readable Salience Section
- **Epic 5:** Documentation Management and Maintenance
- **Story 6:** Policy Documentation Structure
- **Related:** YAML front-matter pattern (lifecycle metadata)

---

## Version History

- **v1.0.0** (2025-12-12): Initial schema specification
