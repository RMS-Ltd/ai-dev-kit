---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T13:30:00Z
expires_at: null
housekeeping_policy: keep
---

# GitHub Submission Guide for FR, BR, UXR, and UAT Reports

**Purpose:** This guide explains how to submit Feature Requests (FR), Bug Reports (BR), User Experience Research (UXR) reports, or User Acceptance Testing (UAT) reports via GitHub Issues.

**Audience:** External contributors, users, automated systems, UX researchers, and projects conducting UAT

---

## Overview

You can submit Bug Reports, Feature Requests, UX Research findings, or User Acceptance Testing (UAT) reports directly through GitHub Issues. These submissions are automatically converted to Kanban documents and processed through our intake workflow.

**⚠️ Note on UAT Reports:** UAT reports require **empirical evidence** (test results, screenshots, logs). We do not accept opinion-based feedback without test evidence.

**Benefits:**
- ✅ No repository access required
- ✅ Familiar GitHub interface
- ✅ Automatic conversion to Kanban documents
- ✅ Automatic task creation and tracking
- ✅ Bidirectional linking between GitHub and Kanban

---

## How to Submit

### Bug Reports

1. **Go to Issues:** Navigate to the repository's Issues page
2. **New Issue:** Click "New Issue"
3. **Select Template:** Choose "Bug Report" template
4. **Fill Out Form:** Complete all required fields:
   - Summary (one sentence description)
   - Description (detailed bug information)
   - Priority (CRITICAL/HIGH/MEDIUM/LOW)
   - Severity (CRITICAL/HIGH/MEDIUM/LOW)
   - Steps to Reproduce
   - Environment details
   - User Impact
5. **Submit:** Click "Submit new issue"

**What Happens Next:**
- Issue is automatically converted to a BR document
- BR document is created in `docs/project-management/kanban/fr-br/`
- Issue is commented with document link
- BR is processed through intake workflow
- Kanban task is created and linked back to the issue

### Feature Requests

1. **Go to Issues:** Navigate to the repository's Issues page
2. **New Issue:** Click "New Issue"
3. **Select Template:** Choose "Feature Request" template
4. **Fill Out Form:** Complete all required fields:
   - Summary (one sentence description)
   - Description (detailed feature information)
   - Priority (HIGH/MEDIUM/LOW)
   - Functional Requirements
   - Use Cases
   - Acceptance Criteria
5. **Submit:** Click "Submit new issue"

**What Happens Next:**
- Issue is automatically converted to an FR document
- FR document is created in `docs/project-management/kanban/fr-br/`
- Issue is commented with document link
- FR is processed through intake workflow
- Kanban task is created and linked back to the issue

### User Experience Research (UXR)

1. **Go to Issues:** Navigate to the repository's Issues page
2. **New Issue:** Click "New Issue"
3. **Select Template:** Choose "User Experience Research (UXR)" template
4. **Fill Out Form:** Complete all required fields:
   - Summary (one sentence summary)
   - Research Objective
   - Key Findings
   - Recommendations
   - Priority (HIGH/MEDIUM/LOW)
5. **Submit:** Click "Submit new issue"

**What Happens Next:**
- Issue is automatically converted to a UXR document
- UXR document is created in `docs/project-management/kanban/fr-br/`
- Issue is commented with document link
- UXR is processed through intake workflow
- Kanban task is created and linked back to the issue

---

## Issue Templates

### Bug Report Template

The Bug Report template includes:
- Summary (required)
- Description (required)
- Priority dropdown (required)
- Severity dropdown (required)
- Affected Component
- Affected Areas checkboxes
- Steps to Reproduce (required)
- Environment details
- User Impact dropdown (required)
- Workaround
- Additional Context

### Feature Request Template

The Feature Request template includes:
- Summary (required)
- Description (required)
- Priority dropdown (required)
- Functional Requirements
- Non-Functional Requirements
- Affected Areas checkboxes
- Estimated Complexity dropdown
- Use Cases
- Acceptance Criteria
- Additional Context

### UXR Template

The UXR template includes:
- Summary (required)
- Research Objective (required)
- Methodology
- Key Findings (required)
- User Pain Points
- Recommendations (required)
- Affected Areas
- Priority dropdown (required)
- Supporting Evidence
- Next Steps
- Additional Context

---

## Automated Processing

### Conversion Process

**Status (2026-03-30):** The GitHub Actions workflow that converted issues to `fr-br` documents is **disabled**. It was defined in [`.github/workflows/fr-br-intake.yml.DISABLED`](../../../.github/workflows/fr-br-intake.yml.DISABLED) because GitHub continued to **schedule runs on every push** even though the workflow declared `on: issues` only (see [BR-053](../../../docs/project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug.md), [E2:S11:T12](../../../docs/project-management/kanban/epics/Epic-2/Story-011-intake-workflow-automation/T12-github-actions-workflow-bug-resolution.md)). **Use manual intake:** the [intake-process](../../../.cursor/skills/intake-process/SKILL.md) skill / maintainer process until the workflow is re-enabled after a verified GitHub-side fix.

When automation is restored, submitting an issue using one of our templates should:

1. **GitHub Action Triggers:** The `fr-br-intake.yml` workflow runs on issue `opened` / `edited` (and only those events, once the platform bug is resolved)
2. **Issue Type Detection:** The workflow detects the issue type based on labels:
   - `bug` → Bug Report (BR)
   - `enhancement` → Feature Request (FR)
   - `ux-research` → User Experience Research (UXR)
   - `feedback` or `uat` → User Acceptance Testing Report (FB)
3. **Document Creation:** A new document is created in `docs/project-management/kanban/fr-br/`
4. **Template Population:** The document is populated with issue data
5. **GitHub Link:** The document includes a link back to the GitHub Issue
6. **Issue Comment:** A comment is added to the issue with the document link

### Intake Workflow

After conversion, the document goes through our standard intake workflow:

1. **Review:** The document is reviewed by maintainers
2. **Intake Decision:** Decision is made (ACCEPTED/REJECTED/DEFERRED)
3. **Epic/Story Assignment:** Document is assigned to an Epic and Story
4. **Task Creation:** A Kanban task is created
5. **Status Sync:** Status updates are synced between GitHub and Kanban

---

## Best Practices

### For Bug Reports

- **Be Specific:** Provide clear steps to reproduce
- **Include Environment:** Specify version, OS, browser, etc.
- **Add Screenshots:** Visual evidence helps understand the issue
- **Check Existing Issues:** Search for similar bugs before submitting

### For Feature Requests

- **Describe the Problem:** Explain what problem this solves
- **Provide Use Cases:** Describe who would benefit and how
- **Be Realistic:** Consider implementation complexity
- **Check Roadmap:** See if similar features are planned

### For UX Research

- **Clear Objectives:** State what you were trying to learn
- **Supporting Evidence:** Include links to recordings, transcripts, or data
- **Actionable Recommendations:** Provide specific, actionable recommendations
- **Context:** Include relevant context about participants and methodology

---

## Status Updates

Status updates are synced between GitHub Issues and Kanban documents:

- **GitHub → Kanban:** Issue labels and status updates are reflected in Kanban
- **Kanban → GitHub:** Task completion and status updates are reflected in GitHub Issues

---

## Troubleshooting

### Issue Not Converted

If your issue isn't automatically converted:

1. **Check Labels:** Ensure the issue has the correct label (`bug`, `enhancement`, or `ux-research`)
2. **Check Template:** Make sure you used the correct template
3. **Check Workflow:** Verify the GitHub Action ran (check Actions tab)
4. **Manual Creation:** If needed, maintainers can manually create the document

### Document Not Found

If you can't find your document:

1. **Check Path:** Documents are in `docs/project-management/kanban/fr-br/`
2. **Check Naming:** Documents follow the pattern `{TYPE}-{NUMBER}-{slug}.md`
3. **Check Issue Comment:** The issue comment includes the document path

---

## Examples

### Example Bug Report Submission

**GitHub Issue:** [#123](https://github.com/example/repo/issues/123)  
**Title:** "[Bug] Release Workflow fails on update branches"  
**Labels:** `bug`, `needs-triage`  
**Result:** Automatically converted to `BR-123-release-workflow-fails-on-update-branches.md`

### Example Feature Request Submission

**GitHub Issue:** [#124](https://github.com/example/repo/issues/124)  
**Title:** "[Feature] GitHub submission for FR, BR, and UXR"  
**Labels:** `enhancement`, `needs-triage`  
**Result:** Automatically converted to `FR-124-github-submission-for-fr-br-and-uxr.md`

### Example UXR Submission

**GitHub Issue:** [#125](https://github.com/example/repo/issues/125)  
**Title:** "[UXR] User onboarding flow usability study"  
**Labels:** `ux-research`, `needs-triage`  
**Result:** Automatically converted to `UXR-125-user-onboarding-flow-usability-study.md`

---

## References

- **FR Template:** `packages/frameworks/kanban/templates/FR_TEMPLATE.md`
- **BR Template:** `packages/frameworks/kanban/templates/BR_TEMPLATE.md`
- **UXR Template:** `packages/frameworks/kanban/templates/UXR_TEMPLATE.md`
- **Intake Workflow:** `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`
- **GitHub Issue Forms:** [GitHub Documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-github-forms)

---

**Last Updated:** 2025-12-09  
**Version:** 1.0.0  
**Maintained By:** Kanban Framework Team

---

_This guide is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

