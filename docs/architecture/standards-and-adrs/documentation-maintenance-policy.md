---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T20:30:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: doc-maintenance-policy
  type: governance
  domain:
    primary: documentation
    secondary: ["maintenance", "quality", "consistency"]
  audience: ["agents", "epic-owners", "framework-owners", "story-owners", "developers"]
  applies_to:
    documents:
      - "docs/**"
      - "packages/frameworks/**"
      - "root:README.md"
      - "root:CHANGELOG.md"
      - "docs/**"
    activities:
      - "release-workflow"
      - "story-completion"
      - "framework-release"
      - "policy-updates"
    components:
      - "kanban-docs"
      - "changelog"
      - "version-file"
  excludes:
    documents:
      - "third-party-docs/**"
      - "external-links-only.md"
    activities:
      - "code-comments"
      - "commit-messages"
  key_rules:
    - id: DM-R1
      summary: "Documentation must accurately reflect current implementation, processes, and policies."
      must_level: MUST
      when_applies:
        - "code changes merged to main"
        - "process/policy changes approved"
        - "framework updates released"
      enforcement:
        owner: ["epic-owners", "framework-owners", "story-owners"]
        mechanisms:
          - "story-completion-checklist"
          - "release-workflow-step: docs-validation"
          - "quarterly-documentation-review"
      validation_hints:
        - "check version numbers and last-updated fields"
        - "compare documented behavior vs code for changed modules"
        - "verify examples still work as documented"
    - id: DM-R2
      summary: "All documentation must be maintained proactively, not reactively."
      must_level: MUST
      when_applies:
        - "all documentation updates"
      enforcement:
        owner: ["documentation-owners"]
        mechanisms:
          - "regular-review-cadences"
          - "update-triggers"
      validation_hints:
        - "check last-updated date against review cadence"
        - "verify update triggers are documented"
    - id: DM-R3
      summary: "Related documentation must be consistent and non-contradictory."
      must_level: MUST
      when_applies:
        - "cross-referenced documentation updates"
        - "policy changes"
      enforcement:
        owner: ["architecture-team", "epic-owners"]
        mechanisms:
          - "cross-reference-validation"
          - "consistency-checks"
      validation_hints:
        - "check for conflicting information in related docs"
        - "verify terminology consistency"
        - "validate version synchronization"
    - id: DM-R4
      summary: "Documentation owners MUST ensure accuracy, currency, and quality."
      must_level: MUST
      when_applies:
        - "all documentation maintenance activities"
      enforcement:
        owner: ["epic-owners", "framework-owners", "story-owners"]
        mechanisms:
          - "ownership-model"
          - "review-processes"
      validation_hints:
        - "verify owner is assigned for each document"
        - "check owner responsibilities are met"
  decision_criteria:
    - id: DM-DC1
      question: "Does this change affect user-visible behavior, APIs, or processes?"
      yes_action: "Require documentation update under the relevant Epic/Story."
      no_action: "Record explicit 'no-doc-change-required' note in Story."
    - id: DM-DC2
      question: "Is this documentation outdated or inaccurate?"
      yes_action: "Update immediately or flag for next review cycle."
      no_action: "Verify last-updated date is within review cadence."
  triggers:
    - id: DM-T1
      event: "code-merged-to-main"
      required_checks:
        - "ensure_related_story_has_doc-update-or-exemption"
        - "verify_version_numbers_updated"
    - id: DM-T2
      event: "story-completed"
      required_checks:
        - "verify_documentation_updated"
        - "check_kanban_docs_synced"
    - id: DM-T3
      event: "policy-doc-updated"
      required_checks:
        - "re-run_doc-lifecycle_validation"
        - "check_related_docs_for_updates"
  integration_points:
    - id: DM-IP1
      component: "release-workflow"
      step: "docs-validation"
      behavior: "fail release if required docs not updated"
    - id: DM-IP2
      component: "doc-lifecycle-validator"
      behavior: "validate lifecycle metadata and maintenance cadence"
    - id: DM-IP3
      component: "kanban-docs-update"
      step: "step-7"
      behavior: "auto-update story/epic docs with version markers"
  related_policies:
    - "docs/architecture/standards-and-adrs/doc-lifecycle-policy.md"
    - "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
    - "packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
    - "packages/frameworks/kanban/policies/kanban-governance-policy.md"
---

# Documentation Maintenance Policy

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 1 - Documentation Maintenance Framework  
**Task:** E5:S01:T01 - Define documentation maintenance policies

---

## Executive Summary

This policy defines the framework for maintaining documentation accuracy, consistency, and currency across the ai-dev-kit repository. It establishes ownership, review cadences, update triggers, and quality standards to ensure all documentation remains useful and reliable.

**Key Principle:** Documentation is a living asset that must evolve with the codebase. All documentation must be maintained proactively, not reactively.

---

## Scope

### In Scope

**Documentation Types:**
- Knowledge Base (KB) documents (`docs/`)
- Framework documentation (`packages/frameworks/*/`)
- Architecture and design documents (ADRs, standards)
- Policy documents
- Guides and tutorials
- API documentation
- README files
- Changelogs and release notes
- Kanban documentation (Epics, Stories, Tasks)

**Documentation Locations:**
- `docs/` - Main knowledge base
- `packages/frameworks/*/` - Framework documentation
- **Project root:** Only standard entry points and config—`README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `INSTALL_IN_YOUR_PROJECT.md`, and config files (e.g. `rw-config.yaml`). Operational runbooks (e.g. build/upload) live in `docs/maintenance/`, not in root.

### Out of Scope

- Code comments (covered by code review processes)
- Commit messages (covered by Git workflow)
- External documentation (third-party docs)

---

## Documentation Ownership

### Ownership Model

**Primary Owners:**
- **Epic Owners:** Responsible for all documentation within their epic scope
- **Framework Owners:** Responsible for framework-specific documentation
- **Story Owners:** Responsible for documentation created during story execution

**Shared Ownership:**
- Cross-cutting documentation (policies, standards) owned by Architecture team
- Integration documentation owned by coordinating epics
- User-facing documentation owned by Epic 7 (Examples & Adoption)

### Ownership Responsibilities

**Documentation owners MUST:**
1. Ensure documentation accuracy and currency
2. Review documentation during story completion
3. Update documentation when code/processes change
4. Respond to documentation issues and feedback
5. Maintain documentation quality standards

---

## Documentation Maintenance Principles

### 1. Accuracy First

**Rule:** Documentation must accurately reflect current implementation, processes, and policies.

**Enforcement:**
- Documentation updates required when code/processes change
- Outdated documentation is a bug (tracked and fixed)
- Version numbers and dates must be current

### 2. Consistency Across Documentation

**Rule:** Related documentation must be consistent and non-contradictory.

**Enforcement:**
- Cross-reference validation
- Terminology consistency
- Process alignment across documents
- Version synchronization

### 3. Completeness

**Rule:** Documentation must be complete for its intended purpose.

**Enforcement:**
- Required sections must be present
- Examples must be current and working
- Links must be valid
- References must be accurate

### 4. Currency

**Rule:** Documentation must be kept current with codebase and processes.

**Enforcement:**
- Regular review cadences
- Update triggers for code/process changes
- Version tracking and metadata
- Last updated dates

### 5. Discoverability

**Rule:** Documentation must be easy to find and navigate.

**Enforcement:**
- Clear directory structure
- Consistent naming conventions
- Comprehensive indexes and navigation
- Search-friendly organization

---

## Documentation Update Triggers

### Automatic Update Triggers

**Code Changes:**
- New features added → Update feature documentation
- API changes → Update API documentation
- Process changes → Update process documentation
- Configuration changes → Update configuration guides

**Framework Changes:**
- Framework version updates → Update framework documentation
- New framework features → Update framework guides
- Breaking changes → Update migration guides

**Policy Changes:**
- Policy updates → Update all affected documentation
- Process changes → Update workflow documentation
- Standard changes → Update standards documentation

### Manual Update Triggers

**Regular Reviews:**
- Quarterly comprehensive reviews
- Monthly targeted reviews
- Weekly spot checks

**User Feedback:**
- Documentation issues reported
- Confusion or questions identified
- Improvement suggestions

**Quality Assurance:**
- Documentation health checks
- Link validation failures
- Consistency check failures

---

## Documentation Review Cadences

### Review Frequency

**Critical Documentation (Weekly):**
- Release Workflow documentation
- Versioning policies
- Core framework READMEs

**High-Priority Documentation (Monthly):**
- Framework guides and tutorials
- Architecture documents (ADRs)
- Policy documents
- Integration guides

**Standard Documentation (Quarterly):**
- General guides and tutorials
- Examples and case studies
- Historical documentation
- Archive documentation

**Low-Priority Documentation (Annually):**
- Legacy documentation
- Deprecated feature documentation
- Historical reference materials

### Review Process

**1. Preparation:**
- Identify documentation to review
- Gather related documentation
- Check for related code changes
- Review user feedback

**2. Review:**
- Verify accuracy against current implementation
- Check consistency with related documentation
- Validate links and references
- Assess completeness
- Evaluate clarity and usability

**3. Action:**
- Update outdated information
- Fix inconsistencies
- Add missing information
- Improve clarity
- Archive obsolete documentation

**4. Documentation:**
- Update last reviewed date
- Document changes made
- Note follow-up actions
- Update version if significant

---

## Documentation Quality Standards

### Content Quality

**Accuracy:**
- Information must be factually correct
- Examples must work as documented
- Processes must match actual workflows
- Version numbers must be current

**Completeness:**
- Required sections must be present
- Examples must be comprehensive
- Edge cases must be documented
- Troubleshooting must be included

**Clarity:**
- Language must be clear and concise
- Technical terms must be defined
- Examples must be relevant
- Structure must be logical

### Format Quality

**Structure:**
- Must follow templates where applicable
- Must have clear hierarchy
- Must have navigation aids
- Must have metadata (front-matter)

**Formatting:**
- Must use consistent markdown
- Must have proper headings
- Must have code blocks formatted
- Must have proper lists and tables

**Links:**
- All links must be valid
- Internal links must use relative paths
- External links must be verified
- Broken links must be fixed immediately

### Metadata Quality

**Required Metadata:**
- `lifecycle` - Document lifecycle classification
- `created_at` - Creation timestamp
- `last_updated` - Last update timestamp
- `version` - Document version (if applicable)

**Optional Metadata:**
- `ttl_days` - Time-to-live (for transient docs)
- `expires_at` - Expiration date
- `housekeeping_policy` - Cleanup policy
- `owner` - Documentation owner

---

## Documentation Update Procedures

### Standard Update Procedure

**1. Identify Need:**
- Code/process change detected
- Review cadence reached
- Issue reported
- Quality check failure

**2. Assess Impact:**
- Identify affected documentation
- Determine update scope
- Check related documentation
- Plan update sequence

**3. Update Documentation:**
- Make necessary changes
- Update version and dates
- Fix links and references
- Improve clarity if needed

**4. Validate:**
- Check accuracy
- Verify consistency
- Validate links
- Review formatting

**5. Commit:**
- Commit with descriptive message
- Reference related work (Epic/Story/Task)
- Update changelog if significant

### Emergency Update Procedure

**For Critical Issues:**
- Fix immediately
- Update affected documentation
- Notify stakeholders
- Document in changelog

**For Breaking Changes:**
- Update all affected documentation
- Create migration guides if needed
- Update version numbers
- Announce changes

---

## Documentation Maintenance Tools

### Validation Tools

**Link Validation:**
- Check all internal and external links
- Verify link targets exist
- Validate link formats

**Consistency Validation:**
- Cross-reference related documentation
- Check version synchronization
- Verify terminology consistency

**Format Validation:**
- Check markdown formatting
- Validate front-matter
- Verify template compliance

### Health Monitoring

**Documentation Health Metrics:**
- Last update date
- Link health
- Version currency
- Review status

**Health Dashboards:**
- Overall documentation health
- Category-specific health
- Framework documentation health
- Improvement opportunities

---

## Documentation Maintenance Workflow

### Regular Maintenance

**Weekly:**
- Review critical documentation
- Check for broken links
- Update version numbers
- Fix urgent issues

**Monthly:**
- Review high-priority documentation
- Run comprehensive link validation
- Check consistency across documentation
- Update review schedules

**Quarterly:**
- Comprehensive documentation review
- Health assessment
- Improvement planning
- Archive obsolete documentation

### Event-Driven Maintenance

**On Code Changes:**
- Update feature documentation
- Update API documentation
- Update process documentation
- Update examples

**On Framework Updates:**
- Update framework documentation
- Update integration guides
- Update migration guides
- Update version information

**On Policy Changes:**
- Update policy documentation
- Update affected guides
- Update standards documentation
- Announce changes

---

## Documentation Maintenance Metrics

### Key Metrics

**Currency:**
- Average days since last update
- Percentage of documentation updated in last quarter
- Documentation age distribution

**Quality:**
- Link health percentage
- Consistency score
- Completeness score
- User feedback score

**Coverage:**
- Documentation coverage by area
- Missing documentation gaps
- Example coverage
- Tutorial coverage

### Reporting

**Monthly Reports:**
- Documentation health summary
- Issues identified and resolved
- Update activity
- Improvement opportunities

**Quarterly Reports:**
- Comprehensive health assessment
- Trend analysis
- Improvement recommendations
- Resource requirements

---

## Enforcement and Compliance

### Compliance Checks

**Automated Checks:**
- Link validation
- Format validation
- Metadata validation
- Consistency checks

**Manual Reviews:**
- Quarterly comprehensive reviews
- Story completion reviews
- Framework release reviews
- Policy update reviews

### Non-Compliance Handling

**Minor Issues:**
- Automated notifications
- Self-service fixes
- Documentation reminders

**Major Issues:**
- Escalation to owners
- Required fixes
- Review process updates

**Critical Issues:**
- Immediate fixes required
- Process improvements
- Training if needed

---

## References

- **Document Lifecycle Policy:** `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md`
- **Epic 5:** `docs/project-management/kanban/epics/Epic-5/Epic-5.md`
- **Story 1:** `docs/project-management/kanban/epics/Epic-5/Story-001-documentation-maintenance-framework.md`
- **Framework Health Metrics:** `docs/architecture/standards-and-adrs/framework-health-metrics.md`

---

## Decision Record

**Decision:** Establish comprehensive documentation maintenance policy with ownership model, review cadences, update triggers, and quality standards.

**Rationale:**
- Ensures documentation remains accurate and useful
- Provides clear ownership and responsibilities
- Establishes systematic review and update processes
- Enables proactive maintenance rather than reactive fixes
- Supports documentation quality and consistency

