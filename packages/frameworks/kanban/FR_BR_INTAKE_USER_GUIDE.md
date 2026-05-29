---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# FR/BR Intake Workflow Guide for Users

**Version:** 1.0  
**Last Updated:** 2025-12-02  
**Framework:** Kanban Framework  
**Audience:** Human Users  
**Related:** `FR_BR_INTAKE_GUIDE.md`, `T002-decision-flow-design.md`

---

## Welcome! 👋

This guide helps you convert Feature Requests (FRs) and Bug Reports (BRs) into organized Kanban work items. Whether you're submitting a new feature idea or reporting a bug, this guide will walk you through the process step by step.

---

## What You'll Learn

- How to create a Feature Request or Bug Report
- How your FR/BR gets converted into a work item
- What happens after you submit your request
- How to track the progress of your request

---

## The Big Picture

When you submit a Feature Request or Bug Report, it goes through a simple process:

1. **You create the request** using a template
2. **The system finds the right place** for your work (existing work item or creates a new one)
3. **A Task is created** and assigned a version number
4. **Work begins** on your request

That's it! The system handles the organization automatically.

---

## Step 1: Create Your Request

### For Feature Requests

**What is a Feature Request?**
A Feature Request is a suggestion for new functionality or improvements to existing features.

**How to create one:**
1. Copy the Feature Request template: `packages/frameworks/kanban/templates/FR_TEMPLATE.md`
2. Create a new file: `docs/project-management/kanban/fr-br/FR-XXX-[your-title].md`
3. Fill in the template with:
   - **Summary:** One sentence describing your feature
   - **Description:** Detailed explanation of what you want
   - **Problem Domain:** What area does this affect? (e.g., User Authentication, UI Components)
   - **Use Cases:** Who would use this and how?
   - **Acceptance Criteria:** What needs to be true for this to be "done"?

**Example Summary:**
> "Add dark mode toggle to settings page"

**Example Description:**
> "Users should be able to switch between light and dark themes. The toggle should be in the settings page and persist across sessions."

### For Bug Reports

**What is a Bug Report?**
A Bug Report describes a problem or unexpected behavior in the system.

**How to create one:**
1. Copy the Bug Report template: `packages/frameworks/kanban/templates/BR_TEMPLATE.md`
2. Create a new file: `docs/project-management/kanban/fr-br/BR-XXX-[your-title].md`
3. Fill in the template with:
   - **Summary:** One sentence describing the bug
   - **Description:** What's wrong? What should happen vs. what actually happens?
   - **Affected Component:** What part of the system is affected?
   - **Steps to Reproduce:** How can someone else see this bug?
   - **Impact:** How serious is this? (Critical, High, Medium, Low)

**Example Summary:**
> "Dark mode toggle not persisting across page refreshes"

**Example Description:**
> "When I enable dark mode and refresh the page, it switches back to light mode. The setting should be saved and persist across sessions."

---

## Step 2: What Happens Next?

After you create your FR/BR, the system automatically:

1. **Searches for existing work** that matches your request
2. **Finds the right place** for your work (or creates a new one)
3. **Creates a Task** and assigns it a version number
4. **Links everything together** so you can track progress

### The Decision Process

The system follows a simple decision tree:

```
Your FR/BR
    ↓
Does it fit an existing Story?
    ├─ YES → Task added to that Story
    └─ NO → Does it fit an existing Epic?
            ├─ YES → New Story created, Task added
            └─ NO → New Epic created, Story created, Task added
```

**Don't worry about the details!** The system handles all of this automatically. You just need to provide a clear description of what you want.

---

## Step 3: Tracking Your Request

### Where to Look

Once your FR/BR is processed, you can find it in:

- **Your FR/BR document:** The original file you created
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **Epic/Story documents:** Linked from your FR/BR document

### What You'll See

Your FR/BR document will be updated with:

- **Intake Status:** ACCEPTED (when processed)
- **Assigned To:** Epic, Story, and Task numbers
- **Version:** A version number like `0.3.2.4+1`
- **Kanban Links:** Direct links to the Epic, Story, and Task

### Understanding Version Numbers

Version numbers look like this: `0.3.2.4+1`

- **0** = Development (not yet released)
- **3** = Epic number
- **2** = Story number within Epic
- **4** = Task number within Story
- **+1** = Build number (increments as work progresses)

You don't need to understand the details—just know that each Task gets a unique version number for tracking.

---

## Common Scenarios

### Scenario 1: Simple Feature Request

**You want:** "Add a dark mode toggle"

**What happens:**
- System searches for existing "UI Theme" or "Styling" work
- Finds existing Story: "UI Theme & Styling"
- Creates Task 4 under that Story
- Assigns version: `0.3.2.4+1`

**Result:** Your feature is now tracked as Task 4 in the UI Theme Story.

---

### Scenario 2: New Feature Area

**You want:** "Add real-time collaboration features"

**What happens:**
- System searches for existing collaboration work
- Doesn't find any matching Epic
- Creates new Epic 8: "Real-Time Collaboration" (canonical epics are 1-7, so new epics start at 8)
- Creates Story 1: "Real-Time Collaboration Foundation"
- Creates Task 1: Your feature request
- Assigns version: `0.7.1.1+1`

**Result:** A new Epic is created for this feature area, and your request is the first Task.

---

### Scenario 3: Bug Report

**You report:** "Profile picture upload fails for files larger than 5MB"

**What happens:**
- System searches for existing "User Profile" work
- Finds Epic 2: "User Management"
- Creates Story 3: "User Profile Management" (if it doesn't exist)
- Creates Task 1: Fix profile picture upload
- Assigns version: `0.2.3.1+1`

**Result:** Your bug is tracked as a Task, and the fix will be verified through testing before being marked as "Fixed".

---

## Tips for Success

### Writing Good Feature Requests

✅ **Do:**
- Be specific about what you want
- Explain why you want it (the problem it solves)
- Provide use cases (who would use this and how)
- Include acceptance criteria (what "done" looks like)

❌ **Don't:**
- Be vague ("make it better")
- Skip the problem description
- Forget to mention who would benefit

### Writing Good Bug Reports

✅ **Do:**
- Provide clear steps to reproduce
- Describe what should happen vs. what actually happens
- Include environment details (browser, OS, version)
- Mention if there's a workaround

❌ **Don't:**
- Say "it's broken" without details
- Skip reproduction steps
- Forget to mention severity/impact

---

## Creating Task Documents

**🚨 IMPORTANT: 3-Tier Structure Requirement**

All work MUST follow the explicit **3-tier structure**: Epic → Story → Task. Every task MUST have a discrete Task document.

### What is a Task Document?

A Task document is the explicit documentation for a single task. It contains all the details needed to complete the task, including scope, acceptance criteria, input, and deliverables.

### When Do I Create a Task Document?

**You create a Task document when:**
- A Task is created in a Story
- You're starting work on a Task
- You need to document Task details explicitly

**Task documents are MANDATORY** - Release Workflow requires them before versioning.

### How to Create a Task Document

**Step 1: Choose Format**

You can create Task documents in two formats:

**Format 1: Separate Task File (Recommended for complex tasks)**
- Create a new file: `Task-{task}-{description}.md` in the Story directory
- Example: `docs/project-management/kanban/epics/Epic-4/Story-11/Task-001-update-kanban-policy.md`

**Format 2: Delimited Section (Recommended for simple tasks)**
- Add a section to the Story file with Task ID header
- Format: `### E{epic}:S{story}:T{task} – Task Name`
- Example: `### E4:S11:T01 – Update Kanban Governance Policy`

**Step 2: Use the Template**

1. Copy the Task template: `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
2. Fill in required fields:
   - **Task ID:** `E{epic}:S{story}:T{task}` (e.g., `E4:S11:T01`)
   - **Scope:** Clear description of what the task accomplishes
   - **Acceptance Criteria:** Measurable criteria for completion
   - **Input:** What is required to start this task
   - **Deliverable:** What is produced by this task
   - **Status:** TODO, IN PROGRESS, or COMPLETE

**Step 3: Link from Story**

Update the Story Task Checklist to reference the Task document:

**For Separate Files:**
```markdown
- [ ] **E4:S11:T01 – Update Kanban Governance Policy** - TODO
  - Task Doc: [`Task-001-update-kanban-policy.md`](Task-001-update-kanban-policy.md)
```

**For Delimited Sections:**
```markdown
- [ ] **E4:S11:T01 – Update Kanban Governance Policy** - TODO
  - Task Doc: See section below
```

### Required Fields

Every Task document MUST include:
- ✅ Task ID (`E{epic}:S{story}:T{task}`)
- ✅ Scope
- ✅ Acceptance Criteria
- ✅ Status
- ✅ Input
- ✅ Deliverable

**See:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` for complete template.

### Examples

**Example: Separate Task File**
- File: `Task-001-update-kanban-policy.md`
- Contains: Full task documentation with all required fields
- Referenced in: Story Task Checklist

**Example: Delimited Section**
- Location: Within Story file
- Header: `### E4:S11:T01 – Update Kanban Governance Policy`
- Contains: Full task documentation with all required fields
- Referenced in: Story Task Checklist

---

## Troubleshooting

### "I can't find my request"

**Check:**
1. Your FR/BR document (should have "Intake Status: ACCEPTED")
2. Kanban Board (`docs/project-management/kanban/kboard.md`)
3. The Epic/Story links in your FR/BR document

### "My request seems to be in the wrong place"

**What to do:**
- Check the "Intake Decision" section in your FR/BR document
- Verify the Epic/Story links
- If it's truly wrong, create a new FR/BR with clarification

### "I don't understand the version number"

**Don't worry!** Version numbers are for tracking and organization. You don't need to understand them to use the system. Just know that each Task gets a unique number.

---

## Quick Reference

### Template Locations
- **Feature Request:** `packages/frameworks/kanban/templates/FR_TEMPLATE.md`
- **Bug Report:** `packages/frameworks/kanban/templates/BR_TEMPLATE.md`

### Where to Create Your Request
- **Location:** `docs/project-management/kanban/fr-br/FR-XXX-[title].md` or `BR-XXX-[title].md`
- **Naming:** Use descriptive titles (e.g., `FR-001-dark-mode-toggle.md`)

### Key Documents
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **Comprehensive Guide:** `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md` (for detailed reference)

---

## Need Help?

If you're stuck or have questions:

1. **Check the comprehensive guide:** `FR_BR_INTAKE_GUIDE.md` (has detailed examples)
2. **Look at existing FRs/BRs:** See how others have structured their requests
3. **Review the templates:** They include helpful instructions and examples

---

## What Happens After Intake?

Once your FR/BR is processed:

1. **Work begins** on the Task
2. **Progress is tracked** in the Kanban board
3. **When complete**, the work is released with a version number
4. **For bug fixes**, the fix is verified through testing before being marked as "Fixed"

You can track all of this through the Kanban board and the links in your FR/BR document.

---

## Summary

The intake process is simple:

1. **Create your request** using a template
2. **Fill in the details** (summary, description, acceptance criteria)
3. **Submit it** (the system handles the rest)
4. **Track progress** through the Kanban board

The system automatically organizes your request into the right Epic, Story, and Task, so you don't need to worry about the organizational details. Just focus on describing what you want clearly!

---

_This guide is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

