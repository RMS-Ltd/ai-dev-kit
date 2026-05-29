---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

---
title: Portfolio Kanban Alignment Playbook
doc_type: how-to
owner: PMO (Documentation Guild embedded)
last_reviewed: 2025-11-14
next_review: 2026-02-14
story_code: E19S8
---

# Portfolio Kanban Alignment Playbook

## Purpose
Operationalise Story E19S8 by giving PMO and Documentation Guild contributors a single reference for auditing, updating, and syncing the portfolio Kanban board (`docs/project-management/rituals/overview/kboard.md`) with Trello automation. Use this guide whenever the board structure changes or during quarterly governance reviews.

## Scope & Constraints
- Covers Confidentia’s markdown-first Kanban ritual plus the Trello mirror driven by `scripts/sync_epic19_to_trello.py`.
- Applies to *all* epics referenced on the board, regardless of owning epic number.
- Assumes the KB taxonomy described in `docs/Governance_and_Process/decision-records/kb-taxonomy-architecture.md`.
- Out of scope: delivery-specific task boards, engineering sprint boards, or ad-hoc Trello lists.
- **Dependencies:** Relies on Story E19S6 governance assets and the Epic 18 MCP/Trello automation channel remaining available.

## Prerequisites
- Latest `main` checkout with Poetry environment (or equivalent) available.
- Trello API keys configured for the MCP integration (see `scripts/sync_epic19_to_trello.py` docs).
- Access to Confidentia PMO review calendar for scheduling sign-off.
- Familiarity with `_index.md` conventions and metadata requirements.

## Workflow Overview
1. **Inventory & Audit (E19:S08:T01)**
   - Run `python scripts/portfolio_kanban_audit.py` once implemented, or manually diff `kboard.md` against the Trello board.
   - Capture gaps in the “Audit Log” table (see template below) and file follow-up tasks in Story E19S8.
2. **Schema Definition (E19:S08:T02)**
   - Update `kboard.md` headers with column descriptions, WIP limits, and tagging rules.
   - Document schema changes inside this playbook for future reviewers.
3. **Validation & Automation (E19:S08:T03)**
   - Extend `scripts/sync_epic19_to_trello.py` to parse the board into `.epic19_sync_summary.json`.
   - Add lint checks (`make docs-lint`) that ensure every Kanban entry resolves to a real epic file and matching metadata.
4. **Communication & Handover (E19:S08:T04)**
   - Draft changelog entries (`CHANGELOG.md`, `CHANGELOG_vX.Y.Z.md`) and prep `#docs-updates` snippets.
   - Trigger Trello sync and archive the JSON payload with the release artefacts.

## Task Input/Deliverable Relationship

Tasks form a **value chain** where work products flow from one task to another:

- **Input:** What artifacts, features, or outcomes a task requires (from other tasks, stories, epics, or external sources)
- **Deliverable:** What artifact, feature, or outcome a task produces

**How they work together:**
- Task A's **Deliverable** becomes Task B's **Input** when Task B consumes what Task A produces
- This creates clear traceability: you can follow work products through the story by matching Deliverables to Inputs
- When reviewing Kanban cards or story progress, check that:
  - Upstream tasks have completed their Deliverables before downstream tasks start
  - Downstream tasks list the correct Inputs that match upstream Deliverables
  - The value chain is complete (no missing links between tasks)

**Example:**
- **Task 1:** Input: None | Deliverable: API specification document
- **Task 2:** Input: API specification document (from Task 1) | Deliverable: Implemented API endpoints
- **Task 3:** Input: Implemented API endpoints (from Task 2) | Deliverable: API integration tests

This pattern ensures dependencies are explicit and work products are traceable through the story lifecycle.

**Blocker Field:**
Each task also includes a `**Blocker:**` field that identifies what specifically blocks the task (a subset of Dependencies that are blocking). Task-level blockers automatically aggregate up to inform story/epic-level "Blocked By" sections. This enables traceability: "Story X is blocked because Task Y is blocked by Z." When reviewing Kanban cards, check task-level blockers to understand why a story or epic is blocked.

## Detailed Procedure

### 1. Audit Checklist
| Step | Action | Owner | Evidence |
| --- | --- | --- | --- |
| 1.1 | Export current Trello column → card data (CSV or JSON) | PMO | Trello export attachment |
| 1.2 | Compare cards vs. `kboard.md` entries | Documentation Guild | Audit log entry |
| 1.3 | Validate each epic link resolves to `docs/project-management/epics/overview/...` | Documentation Guild | `make docs-lint` output |
| 1.4 | Record discrepancies (missing link, stale status, absent version) | PMO | Story E19S8 task notes |
| 1.5 | File follow-up subtasks in Story E19S8 | PMO | Markdown checklist updated |

Store the audit log near the bottom of `kboard.md` (new section) or attach a CSV under `docs/project-management/rituals/reference/` if large.

### 2. Schema Update Steps
1. Confirm column lineup (e.g., `Backlog`, `To Do`, `In Progress`, `Done`).
2. Define WIP limits and rationale; include inline callouts in `kboard.md`.
3. Standardise status badges and metadata snippet:
   ```
   [Epic N: Title](../epics/overview/Epic N/Epic-N.md) — **STATUS**: note (Version vX.Y.Z)
   ```
4. Require each epic entry to include:
   - Link to canonical epic file
   - Status keyword (TODO/IN PROGRESS/COMPLETE/PAUSED)
   - Optional highlight (e.g., “Awaiting gating dataset”)

### 3. Validation Hooks
- **Docs lint target:** run `make docs-lint` (wraps `python scripts/validate_kanban_board.py`) to ensure the Kanban board links/metadata stay aligned with canonical epics.
- **Lint rules:** fail CI if any board entry lacks a resolvable markdown file, metadata mismatch (status/version), or missing column definition.
- **JSON payload:** extend `scripts/sync_epic19_to_trello.py` to export:
  ```json
  {
    "kanban_board": {
      "columns": [...],
      "cards": [
        {"epic": "Epic 3", "status": "In Progress", "kb_path": "...", "version": "0.4.3.40"}
      ]
    }
  }
  ```

### 4. Communication Package
- Update `CHANGELOG.md` and detailed release file with Kanban changes.
- Prep `#docs-updates` message referencing this playbook, Story E19S8 progress, and Trello sync timestamp.
- Run `python scripts/sync_epic19_to_trello.py` and attach `.epic19_sync_summary.json` to the release PR.

## Deliverables Per Cycle
- Updated `kboard.md` with schema + WIP definitions.
- Audit log output stored in repo (`docs/project-management/rituals/reference/kanban-audit-YYYYMMDD.md` or CSV).
- Passing lint run showing board/story metadata parity.
- Trello sync confirmation plus JSON payload committed.

## Escalation
- **Missing epic metadata:** escalate to epic DRI and Document Guild lead.
- **Trello automation failure:** open issue with Epic 18 MCP integration owners.
- **Schema disputes:** convene PMO sync, capture decisions inside this playbook and story doc.

## References
- `docs/project-management/rituals/overview/kboard.md`
- `docs/project-management/stories/overview/Epic 19/Story-8-Portfolio-Kanban-Alignment.md`
- `scripts/sync_epic19_to_trello.py`
- `docs/Governance_and_Process/decision-records/kb-taxonomy-architecture.md`

---
_Authored for Story E19S8 (v0.4.3.40)._
