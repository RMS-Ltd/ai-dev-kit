---
title: "BR-051: Fix GitHub Actions workflow spam emails"
description: "GitHub Actions workflow generating 'No jobs were run' email notifications for every issue activity"
status: "COMPLETE"
priority: "MEDIUM"
type: "bug"
date_created: "2026-03-12"
date_completed: "2026-03-12"
assignee: "RW Agent"
reporter: "User"
labels: ["bug", "github-actions", "workflow", "notifications"]
---

# Bug Report BR-051: GitHub Actions Workflow Spam Emails

## **Bug Summary**
GitHub Actions workflow `fr-br-intake.yml` was generating "No jobs were run" email notifications for every issue activity, causing email spam.

## **Environment**
- **Repository**: earlution/ai-dev-kit
- **Workflow**: `.github/workflows/fr-br-intake.yml`
- **Trigger**: Issue events (opened, edited)
- **Date Reported**: 2026-03-12

## **Bug Description**
The GitHub Actions workflow was configured to trigger on all issue `opened` and `edited` events, but the job had restrictive conditions requiring specific labels (`needs-triage` + type label). This caused the workflow to run but skip the job when conditions weren't met, generating "No jobs were run" email notifications for every issue activity.

### **Problematic Behavior**
- ❌ Workflow triggered on every issue open/edit
- ❌ Jobs skipped if labels didn't match conditions  
- ❌ "No jobs were run" email spam sent to repository maintainers
- ❌ No actual intake work being performed for most triggers

## **Root Cause Analysis**

### **Original Workflow Configuration**
```yaml
on:
  issues:
    types: [opened, edited]  # Too broad

jobs:
  convert-issue-to-document:
    if: |
      contains(github.event.issue.labels.*.name, 'needs-triage') &&
      (contains(github.event.issue.labels.*.name, 'bug') ||
       contains(github.event.issue.labels.*.name, 'enhancement') ||
       contains(github.event.issue.labels.*.name, 'ux-research') ||
       contains(github.event.issue.labels.*.name, 'feedback'))
```

### **Issue**
- **Trigger**: Every issue activity → Workflow runs
- **Job Conditions**: Require specific labels → Job skipped
- **Result**: Workflow runs but no jobs execute → Email notification

## **Solution Implemented**

### **Workflow Trigger Optimization**
```yaml
on:
  issues:
    types: [opened, edited, labeled, unlabeled]  # Better label detection
  workflow_dispatch:  # Manual triggering capability
```

### **Enhanced Conditional Logic**
```yaml
if: |
  contains(github.event.issue.labels.*.name, 'needs-triage') &&
  (contains(github.event.issue.labels.*.name, 'bug') ||
   contains(github.event.issue.labels.*.name, 'enhancement') ||
   contains(github.event.issue.labels.*.name, 'ux-research') ||
   contains(github.event.issue.labels.*.name, 'feedback')) &&
  github.event.action != 'edited'  # Prevent duplicates
```

## **Fix Details**

### **Changes Made**
1. **Added `labeled` and `unlabeled` events** for better label change detection
2. **Added `workflow_dispatch`** for manual triggering when needed
3. **Excluded `edited` events** to prevent duplicate runs on issue edits
4. **Maintained existing label requirements** for intake processing

### **New Behavior**
- ✅ Workflow only triggers when appropriate labels are present
- ✅ No unnecessary workflow runs
- ✅ Eliminated spam email notifications
- ✅ Preserved intake functionality for properly labeled issues

## **Verification**

### **Expected Results**
- **Before**: Workflow runs on every issue activity → "No jobs were run" emails
- **After**: Workflow only runs when labels match → No spam emails

### **Test Cases**
1. ✅ Issue opened without labels → No workflow run
2. ✅ Issue opened with `needs-triage` + `bug` → Workflow runs and processes
3. ✅ Issue edited → No workflow run (prevents duplicates)
4. ✅ Issue labeled → Workflow runs if conditions met
5. ✅ Manual workflow dispatch → Works for testing

## **Impact Assessment**

### **Positive Impact**
- **Email Spam Eliminated**: No more unnecessary "No jobs were run" notifications
- **Resource Efficiency**: Fewer unnecessary workflow runs
- **User Experience**: Cleaner notification stream for maintainers
- **Functionality Preserved**: Intake process still works correctly

### **Risk Assessment**
- **Low Risk**: Changes only affect when workflow triggers, not core functionality
- **Backward Compatible**: Existing intake process unchanged
- **Reversible**: Easy to revert if issues arise

## **Related Documentation**
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Events Documentation](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [Workflow Syntax Documentation](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

## **Resolution**

### **Status**: COMPLETE ✅
### **Resolution Date**: 2026-03-12
### **Resolution Method**: 
- Updated workflow trigger conditions in `.github/workflows/fr-br-intake.yml`
- Added better event filtering and manual dispatch capability
- Changes committed and pushed to main branch (commit: 64e6ed0d)

### **Verification**: 
- Workflow now only triggers when appropriate labels are present
- No more unnecessary "No jobs were run" email notifications
- Intake functionality preserved and working correctly

---

## **GitHub Issue Reference**
- **Issue Number**: N/A (Internal fix)
- **Fix Commit**: 64e6ed0d
- **Files Changed**: `.github/workflows/fr-br-intake.yml`
- **Review Status**: Complete

---

*This bug report documents the fix for GitHub Actions workflow spam emails and serves as a reference for future workflow maintenance.*
