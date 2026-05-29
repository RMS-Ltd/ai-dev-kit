---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Post-Implementation Review (PIR) Reports

**Purpose:** Central repository for all Post-Implementation Review reports for completed Epics and Stories.

**Audience:** Project maintainers, reviewers, and anyone conducting or referencing PIR reports

---

## Overview

This directory contains Post-Implementation Review (PIR) reports for completed Epics and Stories. PIR reports capture lessons learned, identify improvements, and ensure quality standards are met through systematic review of completed work.

---

## Directory Structure

```
docs/Reviews/pir/
├── README.md                          # This file
├── Epic-{N}/                          # Epic-level PIR reports
│   ├── PIR-Epic-{N}-v{version}.md    # Individual Epic PIR reports
│   └── ...
└── Story-{N}/                          # Story-level PIR reports
    ├── PIR-Story-{N}-v{version}.md    # Individual Story PIR reports
    └── ...
```

---

## PIR Report Naming Convention

**Epic PIR Reports:**
- Format: `PIR-Epic-\{N\}-v{version}.md`
- Example: `PIR-Epic-2-v0.2.11.9+3.md`

**Story PIR Reports:**
- Format: `PIR-Story-\{N\}-v{version}.md`
- Example: `PIR-Story-001-v0.2.1.6+4.md`

**Version Format:**
- Uses project versioning schema: `RC.EPIC.STORY.TASK+BUILD`
- Example: `v0.2.11.9+3`

---

## PIR Workflow

### When PIR Reports Are Created

1. **Epic-Level PIR:**
   - **Trigger:** Auto-triggered when Epic is marked COMPLETE
   - **Frequency:** Always (every Epic receives a PIR)
   - **Location:** `docs/Reviews/pir/Epic-\{N\}/`

2. **Story-Level PIR:**
   - **Trigger:** Auto-triggered when Story is marked COMPLETE (only for significant Stories)
   - **Frequency:** Selective (only significant Stories)
   - **Location:** `docs/Reviews/pir/Story-\{N\}/`

### PIR Report Contents

Each PIR report includes:
- Executive summary
- Goals assessment
- Work items review (Stories for Epic, Tasks for Story)
- Technical assessment
- Lessons learned (what went well, what could be improved)
- Patterns and anti-patterns identified
- Follow-up actions
- Knowledge capture
- Metrics

---

## Using PIR Reports

### Finding PIR Reports

1. **By Epic/Story:**
   - Navigate to `Epic-\{N\}/` or `Story-\{N\}/` directory
   - Find PIR report by version number

2. **By Version:**
   - PIR reports are named with version numbers
   - Search by version in file names

3. **By Date:**
   - Check `created_at` in frontmatter
   - Sort by modification date

### Creating PIR Reports

1. **Use Templates:**
   - Epic PIR: `docs/documentation/templates/epic-pir-template.md`
   - Story PIR: `docs/documentation/templates/story-pir-template.md`

2. **Follow Workflow:**
   - See [PIR Workflow Reference (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/pir-workflow-reference.md)
   - See [PIR Workflow Planning (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Analysis/PIR-workflow-planning.md)

3. **Link to Work Items:**
   - Link PIR report to Epic/Story document (bidirectional)
   - Reference version numbers
   - Create follow-up Kanban tasks from findings

---

## Related Documentation

- [PIR Workflow Planning (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Analysis/PIR-workflow-planning.md) - Complete planning document
- [PIR Workflow Reference (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/pir-workflow-reference.md) - Workflow reference (when available)
- [Epic PIR template](../../../documentation/templates/epic-pir-template.md) · [Story PIR template](../../../documentation/templates/story-pir-template.md)
- [Release Workflow (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md) - RW integration

---

_This directory is part of the Knowledge Base. See `docs/README.md` for complete KB structure._
