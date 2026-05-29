---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 002 – Documentation Maintenance Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-05  
**Last updated:** 2026-03-25 (v0.5.2.6+1 – E5:S02:T06 FR-063 intake + CMW)  
**Version:** v0.5.2.6+1  
**Code:** E5S02

**Note:** This story was renumbered from S01 to S02 as part of the repository story abstract space resolution (E9:S01:T08). S01 is now reserved for the FR Repo repository story.

---

## Task Checklist

- [ ] **E5:S02:T01 – Conduct comprehensive documentation hygiene analysis** - TODO (v0.5.2.1+2, migrated from v0.5.2.1+2 – Task planned)
- [x] **E5:S02:T02 – Define documentation maintenance policies** - COMPLETE ✅ (migrated from E5:S02:T02)
- [x] **E5:S02:T03 – Create documentation review cadences** - COMPLETE ✅ (migrated from E5:S02:T03)
- [x] **E5:S02:T04 – Establish documentation update triggers** - COMPLETE ✅ (migrated from E5:S02:T04)
- [ ] **E5:S02:T05 – Explore and evaluate KB platform/tooling options** - TODO (migrated from E5:S02:T05)
- [x] **E5:S02:T06 – CMW Epic 5 execution context (FR-063)** - ✅ COMPLETE (v0.5.2.6+1) (MEDIUM — intake: FR-063 + task + board + CMW archival on E5 branch; **FR-063 implementation** still open per FR checklist)
  - Task: [`T06-cmw-epic-5-execution-context-fr-063.md`](Story-002/T06-cmw-epic-5-execution-context-fr-063.md) | [FR-063](../../fr-br/FR-063-cmw-epic-5-execution-context.md)

---

## Overview

This story establishes a framework for maintaining documentation accuracy and consistency across the dev-kit. It defines policies, processes, and cadences for keeping documentation current.

---

## Goal

Establish a comprehensive framework for documentation maintenance that ensures all documentation remains accurate, up-to-date, and consistent.

---

## Tasks

### E5:S02:T01 – Conduct comprehensive documentation hygiene analysis

**Input:** Entire documentation corpus (`docs/`, `packages/frameworks/`, root docs)  
**Deliverable:** Documentation hygiene analysis report with categorized issues and recommendations  
**Dependencies:** None  
**Blocker:** None

**Problem Statement:**
Before establishing documentation maintenance policies, we need a comprehensive understanding of the current documentation state. This analysis will identify all documentation issues, inconsistencies, and maintenance needs across the entire dev-kit repository.

**Approach:**

1. **Inventory Documentation Corpus:**
   - Map all documentation files across `docs/`, `packages/frameworks/`, and root directories
   - Categorize by type (policies, guides, ADRs, templates, Kanban docs, changelogs)
   - Identify documentation owners and lifecycle metadata
   - Create documentation structure map

2. **Analyze Documentation Issues:**
   - **Broken Links:** Check all internal and external links for validity
   - **Outdated Information:** Identify references to deprecated features, old versions, outdated examples
   - **Inconsistencies:** Cross-reference related docs for conflicting information
   - **Orphaned Files:** Find documentation with no references or unclear purpose
   - **Version Mismatches:** Check version numbers, dates, and metadata consistency
   - **Missing Documentation:** Identify gaps where documentation should exist
   - **Format Inconsistencies:** Check adherence to templates and style guides
   - **Documentation Drift:** Compare actual code/implementation with documented behavior

3. **Categorize Issues by Severity:**
   - **Critical:** Issues that cause confusion, errors, or block understanding
   - **High:** Issues that significantly impact usability or accuracy
   - **Medium:** Issues that cause minor confusion or inconsistency
   - **Low:** Issues that are cosmetic or minor improvements

4. **Analyze Documentation Patterns:**
   - Identify common anti-patterns (e.g., copying docs instead of using templates)
   - Document recurring issues and their root causes
   - Analyze documentation update frequency and patterns
   - Identify documentation hotspots (files that change frequently)

5. **Create Hygiene Report:**
   - Executive summary with key findings
   - Detailed issue inventory with file locations
   - Categorized issues by type and severity
   - Root cause analysis for recurring issues
   - Recommendations prioritized by impact
   - Documentation health score/metrics

6. **Provide Actionable Recommendations:**
   - Immediate fixes (critical issues)
   - Short-term improvements (high priority)
   - Long-term enhancements (medium/low priority)
   - Process improvements to prevent future issues

**Deliverables:**
- `docs/Analysis/documentation-hygiene-analysis-report.md` - Comprehensive analysis report
- `docs/Analysis/documentation-issues-inventory.md` - Detailed issue inventory
- `docs/Analysis/documentation-health-metrics.md` - Health metrics and scoring
- Recommendations document with prioritized action items

**Success Criteria:**
- All documentation files inventoried and categorized
- All broken links identified and documented
- All inconsistencies identified with root cause analysis
- All orphaned files identified with recommendations
- Health metrics calculated and baseline established
- Actionable recommendations provided with prioritization

**Related Work:**
- Epic 4: Kanban Framework (documentation consistency issues identified)
- Epic 2: Workflow Management Framework (RW documentation updates)
- Previous gap analyses and validation reports

---

### E5:S02:T02 – Define documentation maintenance policies

**Input:** Documentation hygiene analysis report (E5:S02:T01)  
**Deliverable:** Documentation maintenance policy document  
**Dependencies:** E5:S02:T01  
**Blocker:** None

**Status:** ✅ COMPLETE

**Approach:**
1. Review hygiene analysis findings and recommendations
2. Define documentation maintenance policies based on identified issues
3. Establish documentation ownership and responsibilities
4. Create documentation update procedures

**Deliverables:**
- Documentation maintenance policy: `docs/architecture/standards-and-adrs/documentation-maintenance-policy.md`
- Defines documentation ownership model (Epic owners, Framework owners, Story owners)
- Establishes 5 maintenance principles (Accuracy, Consistency, Completeness, Currency, Discoverability)
- Documents update triggers (automatic and manual)
- Defines review cadences (Weekly/Monthly/Quarterly/Annually)
- Establishes quality standards (Content, Format, Metadata)
- Documents update procedures (Standard and Emergency)
- Defines maintenance tools and workflows
- Establishes metrics and reporting
- Defines enforcement and compliance

---

### E5:S02:T03 – Create documentation review cadences

**Input:** Documentation maintenance policies  
**Deliverable:** Documentation review schedule and cadences  
**Dependencies:** E5:S02:T02  
**Blocker:** None

**Status:** ✅ COMPLETE

**Approach:**
1. Define review cadences for different documentation types
2. Create review checklists and procedures
3. Establish review assignment and tracking processes
4. Document review outcomes and follow-up actions

**Deliverables:**
- Documentation review cadences: `docs/architecture/standards-and-adrs/documentation-review-cadences.md`
- Defines 4 cadence categories (Critical: Weekly, High-Priority: Monthly, Standard: Quarterly, Low-Priority: Annual)
- Establishes review procedures (Pre-Review, Execution, Post-Review)
- Creates review checklists for each cadence category
- Defines review assignment and tracking processes
- Documents review outcomes and action items
- Establishes review workflows for each cadence
- Defines review metrics and reporting
- Integrates with Release Workflow, Kanban, and Framework Health Monitoring

---

### E5:S02:T04 – Establish documentation update triggers

**Input:** Documentation maintenance policies (E5:S02:T02)  
**Deliverable:** Documentation update trigger definitions document with procedures  
**Dependencies:** E5:S02:T02  
**Blocker:** None

**Problem Statement:**
Documentation often becomes outdated because there's no clear system for identifying when updates are needed. We need to establish explicit triggers that indicate when documentation must be updated, along with procedures for each trigger type.

**Approach:**

1. **Identify Documentation Update Events:**
   - **Code Changes:**
     - New features added
     - Features modified or deprecated
     - Bug fixes that change behavior
     - API changes (signatures, parameters, return values)
     - Configuration changes
     - Breaking changes
   
   - **Workflow Changes:**
     - Release Workflow (RW) execution (automatic Kanban updates)
     - New workflow steps added
     - Workflow steps modified
     - Validation rules changed
     - Branch policies updated
   
   - **Policy & Framework Changes:**
     - Versioning policy updates
     - Kanban governance policy changes
     - Framework package updates
     - Template changes
     - ADR (Architecture Decision Record) creation/modification
   
   - **Project Structure Changes:**
     - New Epics/Stories/Tasks created
     - Epic/Story/Task status changes (TODO → IN PROGRESS → COMPLETE)
     - File structure reorganization
     - New packages or modules added
     - Directory structure changes
   
   - **Documentation-Specific Events:**
     - Documentation gaps identified
     - User feedback on documentation clarity
     - Documentation errors reported
     - Cross-reference inconsistencies found
     - Template drift detected

2. **Define Trigger Conditions:**
   - **Automatic Triggers (RW-integrated):**
     - RW Step 6: BR/FR documentation updates (when flaws are fixed)
     - RW Step 7: Kanban documentation updates (when tasks/stories complete)
     - Version bump triggers README and changelog updates
     - Git commit triggers documentation review checklist
   
   - **Manual Triggers (Developer-initiated):**
     - Code review identifies documentation gaps
     - User reports outdated documentation
     - Documentation hygiene analysis identifies issues
     - Framework updates require documentation sync
   
   - **Scheduled Triggers (Time-based):**
     - Weekly documentation review cadence
     - Monthly comprehensive documentation audit
     - Quarterly policy review and update
     - Pre-release documentation verification

3. **Create Update Notification and Tracking:**
   - **Notification System:**
     - RW automatically updates Kanban docs (Step 7)
     - Create documentation update tickets/tasks for manual triggers
     - Generate documentation change reports
     - Alert documentation owners when their docs need updates
   
   - **Tracking Mechanisms:**
     - Track documentation update requests in Kanban (FR/BR → Task flow)
     - Maintain documentation update log
     - Create documentation update checklist per trigger type
     - Track documentation update completion status

4. **Document Update Procedures for Each Trigger Type:**
   - **Automatic RW Triggers:**
     - Document RW Step 6 and Step 7 procedures

**Deliverables:**
- Documentation update triggers: `docs/architecture/standards-and-adrs/documentation-update-triggers.md`
- Defines automatic triggers (Code Changes, Framework Changes, Policy Changes)
- Defines manual triggers (Regular Reviews, User Feedback, Quality Assurance)
- Documents update procedures for each trigger type
- Establishes update trigger detection (Automated and Manual)
- Defines update workflows (Automatic and Manual)
- Integrates with Release Workflow, Kanban, and Framework Health Monitoring
- Establishes update trigger metrics and reporting
     - Define what gets updated automatically
     - Specify validation requirements
     - Document rollback procedures if auto-update fails
   
   - **Code Change Triggers:**
     - Procedure: Identify affected documentation → Update relevant sections → Verify accuracy → Commit with code changes
     - Checklist: API docs, README, examples, guides, changelog
     - Validation: Link checker, example code verification, cross-reference validation
   
   - **Policy Change Triggers:**
     - Procedure: Update policy doc → Identify all dependent docs → Update cross-references → Update examples → Verify consistency
     - Checklist: Policy doc, framework docs, integration guides, templates
     - Validation: Cross-reference validation, template compliance check
   
   - **Structure Change Triggers:**
     - Procedure: Update structure docs → Update path references → Update navigation → Verify all links
     - Checklist: README, navigation files, cross-references, relative paths
     - Validation: Link checker, path validator, structure consistency check
   
   - **Manual Review Triggers:**
     - Procedure: Create documentation task → Assign owner → Review and update → Validate → Mark complete
     - Checklist: Issue identification, update scope, review process, validation
     - Tracking: Kanban task tracking, completion verification


5. **Create Trigger Documentation:**
   - **Trigger Reference Guide:**
     - Comprehensive list of all trigger types
     - Trigger conditions and detection methods
     - Update procedures for each trigger
     - Examples and templates
   
   - **Integration with Existing Processes:**
     - How triggers integrate with RW
     - How triggers integrate with Kanban FR/BR flow
     - How triggers integrate with code review
     - How triggers integrate with scheduled reviews

**Deliverables:**
- `docs/architecture/standards-and-adrs/documentation-update-triggers.md` - Comprehensive trigger definitions
- Trigger procedures document with step-by-step guides
- Integration guide showing how triggers work with RW and Kanban
- Trigger tracking and notification system documentation

**Success Criteria:**
- All documentation update events identified and categorized
- Clear trigger conditions defined for each event type
- Update procedures documented for all trigger types
- Notification and tracking mechanisms established
- Integration with RW and Kanban documented
- Trigger reference guide complete and accessible

**Related Work:**
- E5:S02:T02 - Documentation maintenance policies (provides policy foundation)
- E5:S02:T03 - Documentation review cadences (scheduled triggers)
- Epic 2: Release Workflow (automatic triggers in RW Steps 6-7)
- Epic 4: Kanban Framework (FR/BR → Task flow for documentation issues)

---

### E5:S02:T05 – Explore and evaluate KB platform/tooling options

**Input:** Current KB structure (Git-based Markdown), framework user requirements, book reader requirements  
**Deliverable:** KB platform/tooling evaluation report with recommendations  
**Dependencies:** None  
**Blocker:** None

**Problem Statement:**
The current KB is Git-based (Markdown files in `docs/` directory), which works well for development teams but may not be optimal for all use cases. As KB management becomes a framework package, we need to evaluate whether the current approach is sufficient or if alternative platforms/tools would better serve:
- Framework users with varying technical fluency
- Book readers who may be less technical
- Public-facing content (feature requests, bug reports)
- Remote teams requiring collaboration features
- Integration with existing dev-kit workflows

**Approach:**

1. **Define Evaluation Criteria:**
   - **Ease of Setup:**
     - Installation/configuration complexity
     - Time to first value
     - Infrastructure requirements (self-hosted vs. SaaS)
     - Initial learning curve
   
   - **Technical Fluency Requirements:**
     - Skill level needed for setup (beginner, intermediate, advanced)
     - Skill level needed for daily use
     - Learning curve for book readers/framework users
     - Documentation quality and accessibility
   
   - **Maintenance Overhead:**
     - Ongoing operational requirements
     - Update frequency and complexity
     - Backup/disaster recovery needs
     - Scaling considerations
     - Long-term sustainability
   
   - **Ringfencing/Public Exposure:**
     - Ability to expose specific sections publicly (feature requests, bug reports)
     - Access control granularity (per-section, per-user, per-role)
     - Public/private content separation
     - Integration with GitHub/GitLab issues
     - Public API access
   
   - **Remote Team Support:**
     - Collaboration features (real-time editing, comments, discussions)
     - Notification systems
     - Multi-user concurrent editing
     - Version conflict resolution
     - Activity feeds and change tracking
   
   - **Integration with Existing Tools:**
     - Git/GitHub integration (read/write access)
     - CI/CD compatibility
     - Release Workflow (RW) integration
     - Kanban framework integration
     - Version control compatibility
     - API access for automation
   
   - **Cost and Licensing:**
     - Open source vs. commercial
     - Self-hosted vs. SaaS
     - Pricing model (per user, per project, one-time, subscription)
     - Long-term sustainability and vendor lock-in risk
     - Community support vs. commercial support
   
   - **Search and Discoverability:**
     - Full-text search capabilities
     - Tagging/categorization systems
     - Navigation structure flexibility
     - Content organization patterns
     - Search performance with large KBs
   
   - **Markdown Support:**
     - Native Markdown support (syntax, extensions)
     - Frontmatter/metadata support
     - Template support
     - Migration path from current Git-based structure
     - Markdown rendering quality
   
   - **Agent/AI Compatibility:**
     - API access for automation
     - Structured data formats (JSON, YAML)
     - Agent-friendly editing capabilities
     - Programmatic updates and bulk operations
     - Structured content for AI consumption
   
   - **Versioning and History:**
     - Change tracking and audit trails
     - Version control integration (Git)
     - Rollback capabilities
     - Diff/comparison tools
     - Version history retention
   
   - **Export and Portability:**
     - Data export formats (Markdown, HTML, PDF, JSON)
     - Migration paths to/from other platforms
     - Vendor lock-in risk assessment
     - Backup/restore capabilities
     - Data ownership and portability
   
   - **Performance and Scalability:**
     - Response times for large KBs
     - Large document handling
     - Concurrent user support
     - Storage limits and costs
     - Caching and CDN support
   
   - **Security and Compliance:**
     - Access controls (authentication, authorization)
     - Data encryption (at rest, in transit)
     - Compliance certifications (SOC2, GDPR, etc.)
     - Audit logging
     - SSO integration

2. **Identify KB Platform/Tooling Options:**
   - **Git-Based (Current):**
     - Markdown files in Git repository
     - GitHub/GitLab native rendering
     - Pros: Version control, no additional infrastructure, developer-friendly
     - Cons: Limited collaboration, no public ringfencing, technical barrier
   
   - **Static Site Generators:**
     - MkDocs, Docusaurus, GitBook, VuePress, Jekyll
     - Pros: Markdown-based, version controlled, fast, free hosting options
     - Cons: Requires build process, limited collaboration, technical setup
   
   - **Documentation Platforms:**
     - Read the Docs, GitBook (hosted), Notion, Confluence
     - Pros: Easy setup, collaboration features, public/private separation
     - Cons: Cost, vendor lock-in, migration complexity
   
   - **Wiki Platforms:**
     - MediaWiki, BookStack, TiddlyWiki, Obsidian Publish
     - Pros: Rich features, collaboration, search
     - Cons: Setup complexity, maintenance overhead, migration from Markdown
   
   - **Hybrid Solutions:**
     - Git-based with enhanced UI (Gitiles, Gollum)
     - Markdown with collaboration layer (HackMD, StackEdit)
     - Custom solutions built on existing frameworks

3. **Evaluate Each Option Against Criteria:**
   - Create evaluation matrix scoring each option on all criteria
   - Weight criteria based on priority (e.g., ease of setup may be higher priority for book readers)
   - Identify top 3-5 options for detailed evaluation
   - Document pros/cons for each option
   - Identify deal-breakers and must-haves

4. **Consider Use Case Scenarios:**
   - **Scenario 1: Framework User (Technical)**
     - Needs: Easy setup, Git integration, Markdown support
     - Priority: Technical fluency, integration, maintenance
   
   - **Scenario 2: Book Reader (Less Technical)**
     - Needs: Easy setup, intuitive UI, minimal technical knowledge
     - Priority: Ease of setup, technical fluency, discoverability
   
   - **Scenario 3: Public-Facing Content**
     - Needs: Ringfencing, public access, GitHub integration
     - Priority: Public exposure, integration, security
   
   - **Scenario 4: Remote Team Collaboration**
     - Needs: Real-time editing, notifications, discussions
     - Priority: Remote support, collaboration, integration

5. **Create Recommendation Framework:**
   - **Recommended for Framework Package:**
     - Primary recommendation with rationale
     - Implementation considerations
     - Migration path from current structure
   
   - **Alternative Options:**
     - Secondary recommendations for specific use cases
     - When to choose alternatives
   
   - **Hybrid Approach:**
     - Combining multiple tools for different needs
     - Integration patterns
     - Complexity vs. benefit analysis

6. **Document Evaluation Results:**
   - Executive summary with key findings
   - Detailed evaluation matrix
   - Use case scenario analysis
   - Recommendations with rationale
   - Implementation roadmap (if applicable)
   - Migration considerations

**Deliverables:**
- `docs/Analysis/kb-platform-tooling-evaluation-report.md` - Comprehensive evaluation report
- `docs/Analysis/kb-platform-evaluation-matrix.md` - Detailed comparison matrix
- `docs/Analysis/kb-platform-recommendations.md` - Recommendations with rationale
- `docs/architecture/standards-and-adrs/kb-platform-selection-criteria.md` - Selection criteria document
- Use case scenario analysis documents

**Success Criteria:**
- All major KB platform/tooling options identified and evaluated
- Evaluation criteria comprehensively defined
- Each option scored against all criteria
- Top 3-5 options identified for detailed evaluation
- Use case scenarios analyzed for each option
- Clear recommendations provided with rationale
- Implementation considerations documented
- Migration path identified (if applicable)

**Related Work:**
- E5:S02:T01 - Documentation hygiene analysis (may inform requirements)
- Epic 1: Story 3 - Core KB Structure (current structure baseline)
- Epic 6: Framework Management (KB as framework package)
- Epic 9: Book Content Development (book reader requirements)

---

### E5:S02:T06 – CMW Epic 5 execution context (FR-063)

**Input:** [FR-063](../../fr-br/FR-063-cmw-epic-5-execution-context.md); `cmw.py`; `validate_branch_context.py`; Epic 5 branch `epic/5-documentation-management`  
**Deliverable:** Per FR-063: docs + standalone CMW precondition + RW Step 9.5 escape hatch + config  
**Dependencies:** None  
**Blocker:** None

Discrete task doc: [`Story-002/T06-cmw-epic-5-execution-context-fr-063.md`](Story-002/T06-cmw-epic-5-execution-context-fr-063.md)

---

## Dependencies

**Blocks:**
- E5:S02 (Documentation Quality Assurance)
- E5:S03 (Documentation Automation)

**Blocked By:**
- None

**Coordinates With:**
- Epic 6 (Framework Management)
- Epic 7 (Examples & Adoption)

---

## References

- `docs/project-management/kanban/epics/Epic-5/Epic-5.md`
- `docs/project-management/rituals/policy/kanban-governance-policy.md`

