---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T17:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Canonical Stories for Kanban Framework

**Purpose:** This document lists reusable, canonical story patterns that can be adopted across projects using the Kanban framework. These stories represent common organizational patterns that appear in many projects.

**Usage:** When creating a new Epic, consider whether any of these canonical stories apply. These stories can be copied and adapted to your project's specific needs.

---

## Canonical Stories

### Bug Reports

**Story Pattern:** Bug Reports  
**Purpose:** Systematically track, prioritize, and resolve bugs in the system, framework, or project.  
**Typical Epic:** Framework Management, Quality Assurance, Maintenance  
**Status:** Canonical (reusable across projects)

**Description:**
This story tracks all bug reports and bug fixes related to the system, framework, or project. Bugs are converted into tasks following the FR/BR → Task → Story → Epic flow defined in the Kanban governance policy.

**Key Characteristics:**
- Tracks bug reports and bug fixes
- Converts Bug Reports (BR) into Tasks
- Follows FR/BR intake process
- Maintains bug fix history and impact analysis
- Links to related Feature Requests when bugs require feature work

**Template Reference:**
- `BR_TEMPLATE.md` - Bug Report template
- `FR_BR_INTAKE_GUIDE.md` - Intake process guide

**Example Location:**
- `docs/project-management/kanban/epics/Epic-6/Story-004-bug-reports.md`

---

### Feature Requests

**Story Pattern:** Feature Requests  
**Purpose:** Systematically track, prioritize, and implement feature requests for the system, framework, or project.  
**Typical Epic:** Framework Management, Product Development, Enhancement  
**Status:** Canonical (reusable across projects)

**Description:**
This story tracks all feature requests and feature implementations related to the system, framework, or project. Feature Requests (FR) are converted into tasks following the FR/BR → Task → Story → Epic flow defined in the Kanban governance policy.

**Key Characteristics:**
- Tracks feature requests and feature implementations
- Converts Feature Requests (FR) into Tasks
- Follows FR/BR intake process
- Maintains feature request history and impact analysis
- Links to related Bug Reports when features address bug-related needs

**Template Reference:**
- `FR_TEMPLATE.md` - Feature Request template
- `FR_BR_INTAKE_GUIDE.md` - Intake process guide

**Example Location:**
- `docs/project-management/kanban/epics/Epic-6/Story-005-feature-requests.md`

---

### Framework Maintenance

**Story Pattern:** Framework Maintenance  
**Purpose:** Track ongoing maintenance and updates to framework packages, ensuring frameworks remain current, well-maintained, and properly integrated.  
**Typical Epic:** Framework Management, Kanban Framework, Workflow Management  
**Status:** Canonical (reusable across projects)

**Description:**
This story tracks ongoing maintenance tasks for framework packages, including framework updates, bug fixes, documentation improvements, and integration with other frameworks. Maintenance tasks address issues discovered in framework usage, update documentation, and implement framework improvements as needed.

**Key Characteristics:**
- Tracks framework maintenance and updates
- Addresses framework bug fixes and improvements
- Updates framework documentation
- Ensures framework integration with other ADK frameworks
- Keeps frameworks current and well-maintained

**Typical Tasks:**
- **T01:** Update packaged workflows to handle new patterns (e.g., UKW context, perpetual tasks)
- **T02:** Framework bug fixes and improvements
- **T03:** Documentation updates and improvements
- **T04:** Framework integration improvements
- **T05:** Framework version updates

**Template Reference:**
- Framework maintenance follows standard task creation patterns
- Use framework-specific templates for workflow updates

**Example Location:**
- `docs/project-management/kanban/epics/Epic-4/Story-014-kanban-framework-maintenance.md`

---

## How to Use Canonical Stories

1. **Identify Need:** Determine if your Epic needs a Bug Reports or Feature Requests story
2. **Copy Pattern:** Use the canonical story as a template for your project-specific story
3. **Customize:** Adapt the story to your project's specific context, terminology, and requirements
4. **Link Templates:** Ensure your story references the appropriate FR/BR templates
5. **Follow Intake Process:** Use the FR/BR intake guides to convert requests into tasks

---

## Adding New Canonical Stories

When a story pattern proves reusable across multiple projects, it should be added to this document:

1. **Identify Pattern:** Story appears in multiple projects or epics
2. **Document Pattern:** Create entry in this document with:
   - Story Pattern name
   - Purpose
   - Typical Epic context
   - Key characteristics
   - Template references
   - Example locations
3. **Update Framework:** Add to Kanban framework documentation
4. **Share Pattern:** Make available to other projects

---

**Last Updated:** 2025-12-07  
**Version:** 1.0  
**Maintained By:** Kanban Framework Team

