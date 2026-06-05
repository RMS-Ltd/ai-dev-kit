---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Epic X: [Title]

**Status:** [TODO/IN PROGRESS/COMPLETE]
**Priority:** [HIGH/MEDIUM/LOW]
**Estimated Effort:** [X-Y hours]
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (vX.Y.Z.T+B – [summary])
**Branch:** `epic/X-slug`
**Version Schema:** `0.X.S.T+B`
**Production URL:** [Optional]

---

## Story Checklist

- [ ] **EXX:S01 – [Story Title]** - [Status]
- [ ] **EXX:S02 – [Story Title]** - [Status]
- [ ] **EXX:S03 – [Story Title]** - [Status]

> **CRITICAL:** This Story Checklist is the **SINGLE SOURCE OF TRUTH** for story status and version markers.  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.1.3+1)`)  
> **Release Workflow Requirement:** When Release Workflow (RW) Step 4 updates this Epic document, it MUST update **ALL sections**:
> - Epic header `Last updated` field
> - Story Checklist (status and version markers)
> - Detailed story sections (Status, Last updated, task checkboxes)
> - Any other references to the story/task being released
> 
> **Consistency Check:** After each RW, verify that Epic header, Story Checklist, and detailed sections all match.

---

## Overview

[One paragraph. The epic's purpose, scope, and motivation.]

---

## Goals

1. Goal headline with brief description
2. Goal headline with brief description
3. Goal headline with brief description

---

## Stories

> **CRITICAL: Tier Delegation Principle**
> 
> **Epic documents MUST delegate Story detail to Story documents.** This Epic template should NOT duplicate Story-level information (Status, Priority, Goals, Tasks, Acceptance Criteria, etc.). Instead, Epic documents should:
> - Reference stories via Story Checklist (above)
> - Provide brief story summaries or links to Story documents
> - Delegate all detailed Story information to Story documents
> 
> **What belongs in Epic:**
> - ✅ Story Checklist (references only, with status/version markers)
> - ✅ Brief story summaries (1-2 sentences per story)
> - ✅ Links to Story documents
> - ✅ Epic-level dependencies and coordination
> 
> **What does NOT belong in Epic:**
> - ❌ Detailed story descriptions
> - ❌ Story-level goals, tasks, acceptance criteria
> - ❌ Task-level details
> - ❌ Story implementation details

### Story Y: [Story Title]

**Brief Summary:** [One sentence description of what this story accomplishes]

**Story Document:** [`Story-YYY-story-title.md`](Story-YYY-story-title.md) or [`epics/Epic-X/Story-YYY-story-title.md`](epics/Epic-X/Story-YYY-story-title.md)

> **Note:** For detailed Story information (Status, Priority, Goals, Tasks, Acceptance Criteria, Dependencies, etc.), see the Story document linked above. This Epic document only provides a high-level reference.

---

## Dependencies

**Blocks:**
- [What this epic blocks]

**Blocked By:**
- [What blocks this epic]

**Coordinates With:**
- [Epic/Story coordination points]

---

## Risks & Mitigations

- Risk description — mitigation
- Risk description — mitigation

---

## References

- [Related docs, specs, diagrams]

---

## Maintenance Cadence

_For maintenance epics only._

- **Weekly:** [schedule items]
- **Monthly:** [schedule items]
- **Quarterly:** [schedule items]
- **As Needed:** [schedule items]
