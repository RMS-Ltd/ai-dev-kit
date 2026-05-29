---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Story 001 – Set Up Kanban and Versioning for AI Dev Kit

**Status:** COMPLETE  
**Owner:** RMS  
**Repo:** `ai-dev-kit`  
**Version:** (TBD – dev-kit schema to be defined for this repo)  

---

## 1. Story Overview

This story creates a **local Kanban structure** and **versioning entry point** for the `ai-dev-kit` repo itself, separate from any application project (like fynd.deals or Confidentia).

Goals:

- Provide a simple, repo-local Kanban structure under `docs/project-management/kanban/`.
- Avoid importing external Kanban structures (e.g., `knowledge/fynd_deals/Kanban`).
- Prepare ground for a **dev-kit-specific versioning strategy** that does not claim to be working on any external Epic (such as Epic 9).

---

## 2. Kanban Structure for This Repo

**Target structure:**

```text
docs/
  project-management/
    kanban/
      _index.md                  # Kanban board for this repo
      stories/
        Story-001-ai-dev-kit-kanban-and-versioning.md
        Story-XXX-...            # Future stories
```

This structure is:

- **Local:** It belongs only to `ai-dev-kit`.
- **Epic-centric:** Stories live in `kanban/epics/Epic-X/stories/` with simple numeric IDs.
- **Flexible:** You can introduce epics or other groupings later without changing the base layout.

---

## 3. Tasks

### Task 1 – Create Kanban Board File

- [x] Create `docs/project-management/kanban/_index.md` with:
  - A short description of the board.
  - A minimal stories table.
  - A reference to this story file.


### Task 2 – Create Story 001 File

- [x] Create `docs/project-management/kanban/Story-001-ai-dev-kit-kanban-and-versioning.md` (this file).
- [x] Include:
  - Status, Owner, Repo, and placeholder Version.
  - Overview of the Kanban and versioning goals.
  - Task list (this section).


### Task 3 – Decide Versioning Approach for This Repo ✅ COMPLETE

- [x] Decide whether this repo:
  - ✅ Uses the same `RC.EPIC.STORY.TASK+BUILD` schema as the Numbering & Versioning package, **but with its own epic range** (Epic 1-4+)

- [x] Document the decision in a local versioning policy under:
  - ✅ `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (created and active)

- [x] Align `src/fynd_deals/version.py` (or a renamed version file) with the chosen schema.
  - ✅ `src/fynd_deals/version.py` aligned with RC.EPIC.STORY.TASK+BUILD schema


**Status:** ✅ **COMPLETE** - Versioning approach decided and documented. Dev-kit uses `RC.EPIC.STORY.TASK+BUILD` with Epic 1-4+ range (no legacy range). Policy documented in `dev-kit-versioning-policy.md`. Version file aligned.

### Task 4 – Align RW with Dev-Kit Versioning ✅ COMPLETE

- [x] Update `release-workflow-agent-execution.md` to:
  - ✅ Clarify that examples using `0.9.21.3+2` are **Confidentia/fynd.deals examples**, not dev-kit releases (completed in E2:S01:T02)
  - ✅ Add a short note about how RW should be interpreted when running directly in the `ai-dev-kit` repo (completed in E2:S01:T02)

- [x] Ensure `.cursorrules` (when added for this repo) uses the correct dev-kit version schema.
  - ✅ `.cursorrules` RW trigger section aligned with dev-kit policy (completed in E2:S01:T03)


**Status:** ✅ **COMPLETE** - RW docs updated to distinguish dev-kit vs external examples. All examples tagged with `[Example: Confidentia/fynd.deals]` or `[Example: ai-dev-kit]` labels. Cursorrules section aligned with dev-kit versioning policy.

---

## 4. Notes & Open Questions

- **Epic mapping:**  
  For this repo, we haven’t yet defined any canonical **Epic IDs**. Until that’s done, we should avoid publishing tags that encode an Epic number (e.g., `0.9.21.3+2`) as if it were authoritative for this repo.


- **Scope separation:**  
  This repo models **portable frameworks** (workflow mgt, numbering & versioning, etc.). Its versioning should reflect **framework/package evolution**, not application-level epics from other projects.


When these questions are resolved and the tasks above are completed, this story can be marked as **Done** and new stories can reference the resulting policies and structures.


