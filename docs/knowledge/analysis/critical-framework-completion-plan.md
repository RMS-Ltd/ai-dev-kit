---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Critical Framework Completion Plan

**Purpose:** Detailed execution plan for completing ONLY the critical framework work required before comprehensive project analysis  
**Status:** Plan Defined  
**Version:** 1.0.0  
**Last Updated:** 2025-12-16

---

## 🎯 Objective

Complete the **critical framework work** that directly impacts canonical structure analysis, ensuring frameworks are in a stable, complete state before beginning comprehensive project analysis.

**Success Criteria:**
- ✅ E4:S06 template system complete (core to canonical structures)
- ✅ E5:S01-S02 documentation framework complete (one of 10 analysis dimensions)
- ✅ Core frameworks stable and ready for pattern extraction

---

## 📋 Work Breakdown

### Phase 1: E4:S06 – Canonical Template System (CRITICAL)

**Why Critical:** Template system directly informs canonical structures. Analysis needs complete templates to identify patterns.

**Remaining Tasks:** 5 tasks (T03, T04, T05, T07, T08)

---

#### E4:S06:T03 – Create story template files for each typical story

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E4:S06:T01, E4:S06:T02 (✅ Complete)  
**Estimated Effort:** Medium-Large (~50+ story templates)

**Input:**
- `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Story definitions
- `STORY_TEMPLATE.md` - Base story template structure
- Epic templates from T01-T02 (for consistency)

**Deliverable:**
- Story template files for each typical story per epic
- Organized in `templates/stories/` directory structure:
  - `templates/stories/Epic-1/Story-1-Project-Foundation.md`
  - `templates/stories/Epic-1/Story-2-Core-Infrastructure.md`
  - `templates/stories/Epic-1/Story-3-Initial-Features.md`
  - ... (for all epics and their typical stories)
- Each story template includes:
  - Purpose and goal
  - Typical tasks list
  - Key deliverables
  - Integration points
  - Placeholders for contextualization (`\{PROJECT_NAME\}`, `\{DOMAIN\}`, etc.)

**Approach:**
1. Extract story definitions from `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
2. Use `STORY_TEMPLATE.md` as base structure
3. Create directory structure: `templates/stories/Epic-X/`
4. Populate with canonical story content
5. Add placeholders for contextualization
6. Include typical tasks references

**Acceptance Criteria:**
- [ ] Story templates created for all typical stories (~50+ stories)
- [ ] Templates organized by epic in directory structure
- [ ] Templates use placeholders for contextualization
- [ ] Templates reference typical tasks
- [ ] Templates follow consistent structure

**Files to Create:**
- `packages/frameworks/kanban/templates/stories/Epic-1/Story-1-Project-Foundation.md`
- `packages/frameworks/kanban/templates/stories/Epic-1/Story-2-Core-Infrastructure.md`
- ... (all typical stories for Epics 1-21)

---

#### E4:S06:T04 – Create task template files for each typical task

**Status:** TODO  
**Priority:** MEDIUM  
**Dependencies:** E4:S06:T03  
**Estimated Effort:** Large (~300+ task templates)

**Input:**
- `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Task definitions
- Story templates from T03 (for consistency)
- Task template structure (if exists, or create from story templates)

**Deliverable:**
- Task template files for each typical task per story
- Organized in `templates/tasks/` directory structure:
  - `templates/tasks/Epic-1/Story-1/T01-Project-Structure.md`
  - `templates/tasks/Epic-1/Story-1/T02-Version-Control.md`
  - ... (for all stories and their typical tasks)
- Each task template includes:
  - Input and deliverable
  - Approach/methodology
  - Acceptance criteria
  - Dependencies
  - Placeholders for contextualization

**Approach:**
1. Extract task definitions from comprehensive structure
2. Create task template structure (or use existing)
3. Create directory structure: `templates/tasks/Epic-X/Story-Y/`
4. Populate with canonical task content
5. Add placeholders for contextualization
6. Include dependencies and integration points

**Acceptance Criteria:**
- [ ] Task templates created for all typical tasks (~300+ tasks)
- [ ] Templates organized by epic/story in directory structure
- [ ] Templates use placeholders for contextualization
- [ ] Templates include acceptance criteria
- [ ] Templates follow consistent structure

**Note:** This is a large task. Consider creating templates for high-priority epics first (Epics 1-8), then expanding to project-specific epics (9-21).

**Files to Create:**
- `packages/frameworks/kanban/templates/tasks/Epic-1/Story-1/T01-Project-Structure.md`
- `packages/frameworks/kanban/templates/tasks/Epic-1/Story-1/T02-Version-Control.md`
- ... (all typical tasks for all stories)

---

#### E4:S06:T05 – Create contextualization guide and examples

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E4:S06:T01, E4:S06:T02 (✅ Complete)  
**Estimated Effort:** Medium

**Input:**
- Epic templates from T01 and T02
- Story templates from T03 (when complete)
- Task templates from T04 (when complete)
- Comprehensive structure document

**Deliverable:**
- `templates/CONTEXTUALIZATION_GUIDE.md` - Complete contextualization guide
- Examples directory with contextualized templates:
  - `examples/contextualized/tiny-project/` - Epics 1-7 only
  - `examples/contextualized/small-project/` - Epics 1-7 + 2-3 project epics
  - `examples/contextualized/ambitious-project/` - Full structure
- Guide includes:
  - Placeholder replacement instructions
  - Customization guidelines
  - Scalability guidance
  - Examples for different project types

**Approach:**
1. Document placeholder system (`\{PROJECT_NAME\}`, `\{DOMAIN\}`, etc.)
2. Create step-by-step contextualization process
3. Create example contextualized templates for different project types
4. Document customization best practices
5. Add troubleshooting section

**Acceptance Criteria:**
- [ ] Contextualization guide created
- [ ] At least 3 example projects (tiny, small, ambitious)
- [ ] Guide includes placeholder replacement instructions
- [ ] Guide includes customization guidelines
- [ ] Guide includes scalability guidance

**Files to Create:**
- `packages/frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md`
- `packages/frameworks/kanban/templates/examples/contextualized/tiny-project/Epic-1-\{PROJECT_NAME\}-Core.md`
- `packages/frameworks/kanban/templates/examples/contextualized/small-project/...`
- `packages/frameworks/kanban/templates/examples/contextualized/ambitious-project/...`

---

#### E4:S06:T07 – Integrate with template setup guide and installation workflow

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E4:S06:T01-T06 (T06 ✅ Complete)  
**Estimated Effort:** Medium

**Input:**
- Template files from T01-T04
- Contextualization guide from T05
- `framework-dependency-post-template-setup-guide.md` - Template setup guide
- BR-004 fix (✅ Complete)
- BR-009 (✅ Complete)

**Deliverable:**
- Updated template setup guide that:
  - References canonical epic templates
  - Provides step-by-step contextualization process
  - Includes examples for different project types
  - Integrates with Kanban installer (when created)
- Installation workflow integration:
  - Kanban installer uses canonical templates
  - Installation process contextualizes templates
  - Clear separation from project-specific content

**Approach:**
1. Update template setup guide Step 4 (Kanban Board customization)
2. Replace manual epic cleanup with template-based approach
3. Add contextualization instructions
4. Integrate with Kanban installer (when available)
5. Document installation workflow

**Acceptance Criteria:**
- [ ] Template setup guide updated
- [ ] Manual epic cleanup replaced with template approach
- [ ] Contextualization instructions included
- [ ] Integration with installer documented (when available)
- [ ] Installation workflow documented

**Files to Update:**
- `packages/frameworks/kanban/docs/framework-dependency-post-template-setup-guide.md`
- Installer documentation (if exists)

---

#### E4:S06:T08 – Validate structure with test projects (tiny, small, ambitious)

**Status:** TODO  
**Priority:** MEDIUM  
**Dependencies:** E4:S06:T01-T07  
**Estimated Effort:** Medium

**Input:**
- All template files from T01-T04
- Contextualization guide from T05
- Updated documentation from T06-T07

**Deliverable:**
- Validation report with:
  - Test results for tiny project (Epics 1-7 only)
  - Test results for small project (Epics 1-7 + 2-3 project epics)
  - Test results for ambitious project (full structure)
  - Feedback and improvements identified
  - Recommendations for refinement

**Approach:**
1. Create test project scenarios
2. Contextualize templates for each scenario
3. Validate template completeness
4. Test contextualization process
5. Gather feedback
6. Document findings and recommendations

**Acceptance Criteria:**
- [ ] Tested with tiny project scenario
- [ ] Tested with small project scenario
- [ ] Tested with ambitious project scenario
- [ ] Validation report created
- [ ] Improvements identified and documented

**Files to Create:**
- `docs/Analysis/template-system-validation-report.md`

---

### Phase 2: E5:S01 – Documentation Maintenance Framework

**Why Critical:** Documentation patterns are one of the 10 analysis dimensions. Need complete framework to analyze documentation patterns accurately.

**Remaining Tasks:** 2 tasks (T01, T05)

---

#### E5:S01:T01 – Conduct comprehensive documentation hygiene analysis

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** None  
**Estimated Effort:** Large

**Input:** Entire documentation corpus (`docs/`, `packages/frameworks/`, root docs)

**Deliverable:** Documentation hygiene analysis report with categorized issues and recommendations

**Approach:**
1. **Inventory Documentation Corpus:**
   - Map all documentation files across `docs/`, `packages/frameworks/`, and root directories
   - Categorize by type (policies, guides, ADRs, templates, Kanban docs, changelogs)
   - Identify documentation owners and lifecycle metadata
   - Create documentation structure map

2. **Analyze Documentation Issues:**
   - Broken links (internal and external)
   - Outdated information
   - Inconsistencies (cross-reference related docs)
   - Orphaned files
   - Version mismatches
   - Missing documentation
   - Format inconsistencies
   - Documentation drift (code vs. documented behavior)

3. **Categorize Issues by Severity:**
   - Critical, High, Medium, Low

4. **Analyze Documentation Patterns:**
   - Identify common anti-patterns
   - Document recurring issues and root causes
   - Analyze documentation update frequency
   - Identify documentation hotspots

5. **Create Hygiene Report:**
   - Executive summary
   - Detailed issue inventory
   - Categorized issues by type and severity
   - Root cause analysis
   - Prioritized recommendations
   - Documentation health score/metrics

**Deliverables:**
- `docs/Analysis/documentation-hygiene-analysis-report.md` - Comprehensive analysis report
- `docs/Analysis/documentation-issues-inventory.md` - Detailed issue inventory
- `docs/Analysis/documentation-health-metrics.md` - Health metrics and scoring
- Recommendations document with prioritized action items

**Acceptance Criteria:**
- [ ] All documentation files inventoried and categorized
- [ ] All broken links identified and documented
- [ ] All inconsistencies identified with root cause analysis
- [ ] All orphaned files identified with recommendations
- [ ] Health metrics calculated and baseline established
- [ ] Actionable recommendations provided with prioritization

---

#### E5:S01:T05 – Explore and evaluate KB platform/tooling options

**Status:** TODO  
**Priority:** MEDIUM  
**Dependencies:** None  
**Estimated Effort:** Medium-Large

**Input:** Current KB structure (Git-based Markdown), framework user requirements, book reader requirements

**Deliverable:** KB platform/tooling evaluation report with recommendations

**Approach:**
1. **Define Evaluation Criteria:**
   - Ease of setup
   - Technical fluency requirements
   - Maintenance overhead
   - Ringfencing/public exposure
   - Remote team support
   - Integration with existing tools
   - Cost and licensing
   - Search and discoverability
   - Markdown support
   - Agent/AI compatibility
   - Versioning and history
   - Export and portability
   - Performance and scalability
   - Security and compliance

2. **Identify KB Platform/Tooling Options:**
   - Git-Based (Current)
   - Static Site Generators (MkDocs, Docusaurus, GitBook, VuePress, Jekyll)
   - Documentation Platforms (Read the Docs, GitBook hosted, Notion, Confluence)
   - Wiki Platforms (MediaWiki, BookStack, TiddlyWiki, Obsidian Publish)
   - Hybrid Solutions

3. **Evaluate Each Option Against Criteria:**
   - Create evaluation matrix
   - Weight criteria based on priority
   - Identify top 3-5 options
   - Document pros/cons
   - Identify deal-breakers

4. **Consider Use Case Scenarios:**
   - Framework User (Technical)
   - Book Reader (Less Technical)
   - Public-Facing Content
   - Remote Team Collaboration

5. **Create Recommendation Framework:**
   - Primary recommendation
   - Alternative options
   - Hybrid approach

6. **Document Evaluation Results:**
   - Executive summary
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

**Acceptance Criteria:**
- [ ] All major KB platform/tooling options identified and evaluated
- [ ] Evaluation criteria comprehensively defined
- [ ] Each option scored against all criteria
- [ ] Top 3-5 options identified for detailed evaluation
- [ ] Use case scenarios analyzed for each option
- [ ] Clear recommendations provided with rationale
- [ ] Implementation considerations documented
- [ ] Migration path identified (if applicable)

---

### Phase 3: E5:S02 – Documentation Quality Assurance

**Why Critical:** Quality assurance patterns inform canonical structures. Completes documentation framework.

**Remaining Tasks:** 1 task (T03)

---

#### E5:S02:T03 – Build documentation health dashboards

**Status:** TODO  
**Priority:** MEDIUM  
**Dependencies:** E5:S02:T01, E5:S02:T02 (✅ Complete)  
**Estimated Effort:** Medium

**Input:** Documentation validators and review workflows

**Deliverable:** Documentation health monitoring dashboard

**Approach:**
1. Define documentation health metrics
2. Create health monitoring tools
3. Build dashboard for health visualization
4. Document health monitoring procedures

**Deliverables:**
- Documentation health dashboard (script or tool)
- Health metrics definitions
- Dashboard visualization (if applicable)
- Health monitoring procedures documentation

**Acceptance Criteria:**
- [ ] Documentation health metrics defined
- [ ] Health monitoring tools created
- [ ] Dashboard built (or script that generates health report)
- [ ] Health monitoring procedures documented

**Files to Create:**
- `scripts/documentation/documentation-health-dashboard.py` (or similar)
- `docs/architecture/standards-and-adrs/documentation-health-monitoring.md`

---

## 📅 Execution Sequence

### Recommended Order

**Week 1-2: E4:S06 Template System (Core)**
1. **E4:S06:T03** - Create story templates (~50+ templates)
2. **E4:S06:T04** - Create task templates (~300+ templates, prioritize Epics 1-8 first)
3. **E4:S06:T05** - Create contextualization guide and examples

**Week 2-3: E4:S06 Integration & Validation**
4. **E4:S06:T07** - Integrate with template setup guide
5. **E4:S06:T08** - Validate structure with test projects

**Week 3-4: E5:S01 Documentation Framework**
6. **E5:S01:T01** - Conduct documentation hygiene analysis (large effort)
7. **E5:S01:T05** - Evaluate KB platform/tooling options (can run in parallel with T01)

**Week 4: E5:S02 Quality Assurance**
8. **E5:S02:T03** - Build documentation health dashboards

**Total Estimated Time:** 3-4 weeks of focused work

---

## 🎯 Success Criteria

**Analysis can begin when:**
- ✅ E4:S06 template system complete (all 5 tasks done)
- ✅ E5:S01 documentation framework complete (T01, T05 done)
- ✅ E5:S02 quality assurance complete (T03 done)
- ✅ Core frameworks in stable, complete state
- ✅ No blocking structural work remaining

---

## 📝 Notes

### E4:S06:T04 Task Template Strategy

Given the large scope (~300+ task templates), consider:
- **Phase 1:** Create templates for core epics (Epics 1-8) first
- **Phase 2:** Expand to project-specific epics (Epics 9-21) after core is validated
- **Alternative:** Create templates for high-priority stories first, then expand

### E5:S01:T01 Documentation Hygiene Analysis

This is a large effort. Consider:
- **Automation:** Use existing validators (`validate-documentation-links.py`, `validate-documentation-consistency.py`)
- **Incremental:** Start with critical documentation areas first
- **Parallel:** Can run alongside E5:S01:T05 (KB platform evaluation)

### Optional: E2:S05 PIR Workflow

**Status:** Not blocking for analysis, but completes Epic 2

**Remaining Tasks:** 14 tasks (T02-T15, T01 ✅ Complete)

**Decision:** Can defer until after analysis, or complete in parallel if time permits.

---

## 🔗 Related Work

- **Comprehensive Project Analysis:** `docs/Analysis/comprehensive-project-analysis-framework.md`
- **Pre-Analysis Strategy:** `docs/Analysis/pre-analysis-completion-strategy.md`
- **Outstanding Work Summary:** `docs/Analysis/outstanding-work-summary.md`

---

**Last Updated:** 2025-12-16  
**Version:** 1.0.0  
**Status:** Plan Defined
