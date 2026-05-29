---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Standard Operating Procedure: Handling Mixed BR/FR Scope

**Version:** 1.0  
**Last Updated:** 2026-01-16  
**Framework:** Kanban Framework  
**Related:** `FR_BR_INTAKE_GUIDE.md`, `BR_TEMPLATE.md`, `FR_TEMPLATE.md`

---

## Overview

This SoP defines the standard procedure for handling documents or tickets that contain both Bug Report (BR) and Feature Request (FR) scope. It ensures clear separation of concerns, proper prioritization, and maintainable traceability.

**Key Principle:** When a document contains both bug and feature request content, **split them into separate documents** and link them for traceability.

---

## Definitions

### Bug Report (BR)
A **bug** is when software doesn't behave as intended, documented, or previously working. It represents:
- Unexpected behavior or malfunction
- Deviation from specification or requirements
- Regression from previously working state
- Violation of expected behavior

**Criteria:**
- Does it contradict a specification?
- Was it working previously?
- Is there an expectation that isn't being met?

### Feature Request (FR)
A **feature request** is a proposal for new functionality or a change to existing behavior. It represents:
- Desired new capability
- Improvement or enhancement
- Change to intended behavior (not a defect)
- Functionality that was never intended or supported

**Criteria:**
- Is it about adding new functionality?
- Is it about changing existing behavior in a way that wasn't previously defined?
- Was it a conscious design decision?

---

## When to Split Mixed-Scope Documents

### Split When:
- Document contains **both** bug description **and** feature/enhancement suggestions
- Document describes a bug **plus** recommendations for improvements
- Document mixes "what's broken" with "what should be added"
- Document has unclear scope that spans both bug fix and new functionality

### Keep Combined When:
- Document is clearly **only** a bug (even if fix requires new functionality)
- Document is clearly **only** a feature request (even if it addresses a perceived gap)
- Enhancement is **directly required** to fix the bug (then it's part of the bug fix)

---

## SoP Procedure: Handling Mixed-Scope Documents

### Step 1: Initial Classification & Triage

**Action:** Review the document and classify each component:

1. **Identify Bug Components:**
   - Unexpected behavior
   - Deviation from specification
   - Regression
   - Steps to reproduce
   - Expected vs actual behavior

2. **Identify Feature Request Components:**
   - New functionality requests
   - Enhancement suggestions
   - Improvement recommendations
   - Desired behavior changes

3. **Decision Point:**
   - If **only bugs** → Keep as BR
   - If **only features** → Keep as FR
   - If **both present** → Proceed to Step 2 (Split)

### Step 2: Split into Separate Documents

**Action:** Create separate BR and FR documents:

1. **Create Bug Report (BR):**
   - Focus on the bug/issue description
   - Include: steps to reproduce, expected vs actual behavior, impact
   - Remove feature request content
   - Reference the related FR in "Related Work" section

2. **Create Feature Request (FR):**
   - Focus on the enhancement/improvement
   - Include: use cases, value proposition, acceptance criteria
   - Remove bug description content
   - Reference the related BR in "Related Work" section

3. **Maintain Traceability:**
   - Link BR → FR in "Related Work" section
   - Link FR → BR in "Related Work" section
   - Use clear language: "This FR addresses enhancements identified during BR-XXX triage"

### Step 3: Update Original Document (if exists)

**Action:** If splitting from an existing document:

1. **Update Original:**
   - If original was BR → Keep BR content, remove FR content, add link to new FR
   - If original was FR → Keep FR content, remove BR content, add link to new BR
   - Add note: "Split per SoP: BR content → BR-XXX, FR content → FR-XXX"

2. **Archive or Update Status:**
   - Mark original as "SPLIT" or "SUPERSEDED"
   - Or update original to focus on one scope (BR or FR) and reference the split document

### Step 4: Independent Prioritization

**Action:** Prioritize BR and FR separately:

1. **Bug Report Prioritization:**
   - Criteria: Severity, user impact, workaround availability, technical debt, risk
   - Process: Triage → Assignment → Fix → Verification
   - Ownership: QA/Engineering

2. **Feature Request Prioritization:**
   - Criteria: Value, ROI, alignment with roadmap, effort, strategic importance
   - Process: Backlog grooming → Specification → Planning → Implementation
   - Ownership: Product/UX

3. **Independent Tracks:**
   - Bugs may be reprioritized dynamically (urgent fixes)
   - Features follow formal backlog grooming process
   - Don't let feature content delay urgent bug fixes

### Step 5: Documentation & Communication

**Action:** Ensure clear documentation:

1. **Update Related Work Sections:**
   - BR document: Link to related FR
   - FR document: Link to related BR
   - Use format: "Related FR: FR-XXX - [Title]" or "Related BR: BR-XXX - [Title]"

2. **Maintain Context:**
   - Explain relationship: "This FR was identified during triage of BR-XXX"
   - Or: "This BR revealed the need for enhancement documented in FR-XXX"

3. **Update Intake Status:**
   - Mark both documents as "ACCEPTED" if appropriate
   - Or mark appropriately based on prioritization

---

## Why Split Mixed-Scope Documents?

### Benefits:

1. **Clarity & Traceability:**
   - Easier to track bug fixes vs roadmap features
   - Clear ownership and responsibility
   - Better reporting and metrics

2. **Prioritization Efficiency:**
   - Bugs often have higher urgency
   - Mixed tickets can delay urgent bug fixes
   - Features require different evaluation criteria

3. **Specialization of Roles:**
   - QA/Engineering handles bugs
   - Product/UX handles features
   - Clear separation aligns responsibilities

4. **Reporting & Metrics:**
   - Accurate bug fix rates
   - Clear backlog size tracking
   - Better user satisfaction metrics

5. **Prevents Feature Creep:**
   - Bug fixes stay focused on fixing bugs
   - Features are evaluated on their own merit
   - Avoids scope expansion during bug fixes

---

## Examples

### Example 1: BR-033 and FR-034

**Original Situation:**
- Document contained: Epic ordering bug + missing priorities bug + granular control enhancements

**Split Result:**
- **BR-033:** [UKW Board Disorganization](../../project-management/kanban/fr-br/BR-033-ukw-board-disorganization.md) (original mixed-scope document was titled "UKW Disorganization and Priority Assignment")
  - Focus: Epic ordering bug (Issue 1)
  - Focus: Missing priority assignment bug (Issue 2)
  - Related: [FR-034](../../project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags.md) (enhancements for Issue 3)

- **FR-034:** [UKW Granular Control and Use Case Flags](../../project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags.md)
  - Focus: Use case flags (`-u`, `-p`, `-a`)
  - Focus: Syntax parser for flexible task targeting
  - Focus: Modular workflow execution
  - Related: [BR-033](../../project-management/kanban/fr-br/BR-033-ukw-board-disorganization.md) (identified during bug triage)

### Example 2: BR-006 and FR-007

**Original Situation:**
- Document identified migration support gap (bug) and proposed migration utilities (feature)

**Split Result:**
- **BR-006:** Missing Migration Support for Pre-Existing Kanban Structures
  - Focus: Migration gap issue
  - Related: FR-007

- **FR-007:** Migration Utilities and Installation Modes
  - Focus: Migration tooling and utilities
  - Related: BR-006

---

## Decision Tree

```
Document Submitted
    ↓
Does it contain BOTH bug AND feature content?
    ├─ NO → Classify as BR or FR, proceed normally
    └─ YES → Split into separate documents
            ↓
        Create BR document (bug content)
        Create FR document (feature content)
            ↓
        Link BR → FR in "Related Work"
        Link FR → BR in "Related Work"
            ↓
        Prioritize BR independently (bug criteria)
        Prioritize FR independently (feature criteria)
            ↓
        Assign BR to QA/Engineering
        Assign FR to Product/UX
```

---

## Roles & Responsibilities

### Triage Owner
- **Responsibility:** Initial classification and split decision
- **Action:** Review document, identify mixed scope, execute split procedure

### QA/Engineering
- **Responsibility:** Bug Report ownership
- **Action:** Fix bugs, verify fixes, update BR status

### Product/UX
- **Responsibility:** Feature Request ownership
- **Action:** Specify features, prioritize in backlog, plan implementation

### Project Manager
- **Responsibility:** Ensure proper linking and traceability
- **Action:** Verify related work sections, maintain documentation

---

## Review & Maintenance

### Periodic Review
- Review older mixed tickets to ensure proper classification
- Some FRs may retroactively reveal bugs (or vice versa)
- Update links if relationships change

### SoP Updates
- Review definitions if product/spec changes
- Update decision criteria based on team feedback
- Document exceptions and learnings

---

## References

- **FR/BR Intake Guide:** `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`
- **BR Template:** `packages/frameworks/kanban/templates/BR_TEMPLATE.md`
- **FR Template:** `packages/frameworks/kanban/templates/FR_TEMPLATE.md`
- **Example:** BR-033 and FR-034 (UKW disorganization and granular control)
  - **BR-033:** [`docs/project-management/kanban/fr-br/BR-033-ukw-board-disorganization.md`](../../project-management/kanban/fr-br/BR-033-ukw-board-disorganization.md) (original mixed-scope document was titled "UKW Disorganization and Priority Assignment")
  - **FR-034:** [`docs/project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags.md`](../../project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags.md)
- **Example:** BR-006 and FR-007 (Migration support and utilities)

---

## Notes

**Industry Best Practices:**
- Based on guidance from software development best practices
- Aligns with Agile/Scrum separation of bug fixes and features
- Supports clear ownership and accountability
- Enables accurate metrics and reporting

**Framework Integration:**
- Works with existing FR/BR intake workflow
- Maintains Kanban traceability requirements
- Supports bidirectional linking principle
- Compatible with versioning and release workflows

---

_This SoP is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

