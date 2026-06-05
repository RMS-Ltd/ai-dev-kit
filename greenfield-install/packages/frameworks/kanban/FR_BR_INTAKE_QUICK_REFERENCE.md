---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# FR/BR Intake Quick Reference

**Version:** 1.0  
**Last Updated:** 2025-12-02  
**Framework:** Kanban Framework

---

## Decision Flow

```
FR/BR → Search Story
    ├─ Match → Create Task (RC.E.S.T+1)
    └─ No Match → Search Epic
            ├─ Match → Create Story, Task (RC.E.S.1+1)
            └─ No Match → Create Epic, Story, Task (RC.E.1.1+1)
```

---

## Version Format

**Schema:** `RC.EPIC.STORY.TASK+BUILD`

**Example:** `0.3.2.4+1`
- `0` = Development (RC)
- `3` = Epic 3
- `2` = Story 2
- `4` = Task 4
- `+1` = Build 1

---

## Templates

- **FR:** `packages/frameworks/kanban/templates/FR_TEMPLATE.md`
- **BR:** `packages/frameworks/kanban/templates/BR_TEMPLATE.md`
- **Epic:** `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
- **Story:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

## File Locations

- **FR/BR:** `docs/project-management/kanban/fr-br/FR-XXX-[title].md` or `BR-XXX-[title].md`
- **Epic:** `docs/project-management/kanban/epics/Epic-X.md`
- **Story:** `docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-[title].md`
- **Board:** `docs/project-management/kanban/kboard.md`

---

## Story Match Criteria

**ALL must be true:**
1. Scope aligns with FR/BR requirements
2. Problem domain matches
3. Status is NOT COMPLETE or DEFERRED
4. Epic aligns with FR/BR's problem domain

---

## Epic Match Criteria

**ALL must be true:**
1. Problem domain matches
2. Status is NOT COMPLETE or DEFERRED
3. Scope is broad enough to encompass FR/BR

---

## Epic Creation Rule

**CRITICAL:** Epics must be **broad and abstract** in concept, not specific features.

✅ **Good:** "User Management", "Data Processing", "UI Components"  
❌ **Bad:** "Add user profile picture upload", "Fix login bug"

---

## Validation Checklist

- [ ] FR/BR document created
- [ ] Task/Story/Epic created using templates
- [ ] Version assigned (`RC.EPIC.STORY.TASK+BUILD`)
- [ ] Version file updated
- [ ] Kanban board updated
- [ ] Documents linked (FR/BR → Task → Story → Epic)
- [ ] Status fields synchronized

---

## Guides

- **Agent Guide:** `FR_BR_INTAKE_AGENT_GUIDE.md` (for AI assistants)
- **User Guide:** `FR_BR_INTAKE_USER_GUIDE.md` (for human users)
- **Comprehensive Guide:** `FR_BR_INTAKE_GUIDE.md` (detailed reference with examples)

---

_This quick reference is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

