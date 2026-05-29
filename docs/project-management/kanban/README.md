---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Directory

This directory contains **all Kanban-related documentation** for the `ai-dev-kit` repository, including task management and FR/BR/UXR prioritization systems.

## Structure

```text
kanban/
├── _index.md              # Kanban board view (obligatory)
├── README.md              # This file (obligatory)
├── kboard.md              # MoSCOW prioritized tasks (canonical)
├── kboard.md        # Legacy alias -> kboard.md
├── kanban-structure.md    # Epic/Story/Task structure
├── kanban-board-guide.md  # Rules and explanations
├── kanban-completed.md    # Historical record of completed tasks
├── fbuboard.md            # FR/BR/UXR MoSCOW prioritization board (canonical)
├── fbuboard.md     # Legacy alias -> fbuboard.md
├── fbu-structure.md       # Complete FR/BR/UXR listings by type
├── fbu-completed.md       # Historical record of completed FR/BR/UXRs
├── fr-br/                 # Individual FR/BR/UXR documents
│   ├── FR-XXX-*.md        # Feature Request documents
│   ├── BR-XXX-*.md        # Bug Report documents
│   └── UXR-XXX-*.md       # User Experience Research documents
└── epics/
    ├── Epic-1/            # Epic 1 directory (all files here)
    │   ├── Epic-1.md      # Epic 1 overview
    │   ├── Story-001-ai-dev-kit-kanban-and-versioning.md
    │   └── [other story files as needed]
    ├── Epic-2/            # Epic 2 directory
    │   ├── Epic-2.md
    │   └── Story-XXX-*.md
    └── ...
```

## Key Principles

- **Single location:** All Kanban docs (Epics, Stories, board views, FR/BR/UXRs) live under `kanban/`
- **Epic-centric:** Each Epic has its own directory containing all its files (Epic overview, Stories, Task docs)
- **Story directories:** Stories with associated files can have subdirectories (e.g., `Story-XXX/TXXX-*.md`)
- **Five-way split:** Board views are split into tasks, structure, guide, completed tasks, and FR/BR/UXR systems for clarity
- **Dual prioritization:** Both tasks and FR/BR/UXRs use MoSCOW prioritization for consistency
- **UXR ownership:** The UXR workflow owns Kanban template updates and documentation maintenance to keep terminology and formatting consistent across boards

## Files

### Core Kanban System

- **`_index.md`** – Quick board view (table format)
- **`kboard.md`** – MoSCOW prioritized tasks (canonical)
- **`kanban-structure.md`** – Epic/Story/Task structure  
- **`kanban-board-guide.md`** – Rules and explanations
- **`kanban-completed.md`** – Historical record of completed tasks

### FR/BR/UXR System Snapshot

- **`fbuboard.md`** – MoSCOW prioritized FR/BR/UXR items (canonical)
- **`fbu-structure.md`** – Complete FR/BR/UXR listings by type
- **`fbu-completed.md`** – Historical record of completed FR/BR/UXRs
- **`fr-br/FR-XXX-*.md`** – Individual Feature Request documents
- **`fr-br/BR-XXX-*.md`** – Individual Bug Report documents
- **`fr-br/UXR-XXX-*.md`** – Individual User Experience Research documents

### Epic Structure

- **`epics/Epic-X/Epic-X.md`** – Epic overview document
- **`epics/Epic-X/Story-XXX-*.md`** – Story documents and associated files

## FR/BR/UXR Prioritization Board

The **FR/BR/UXR Prioritization Board** provides centralized visibility and prioritization for all open Feature Requests, Bug Reports, and User Experience Research items. It mirrors the Kanban board's MoSCOW structure but focuses on intake and prioritization rather than task execution.

### Key Features

- **MoSCOW Prioritization:** Uses identical M/S/C/O/W structure as Kanban board
- **Mixed Prioritization:** All FRs, BRs, and UXRs are prioritized together without type segregation
- **Complete Integration:** Links to individual documents and implementing tasks
- **Historical Tracking:** Completed items move to `fbu-completed.md`

### Board Documents

1. **`fbuboard.md`** – Main prioritization board (MoSCOW structure)
2. **`fbu-structure.md`** – Complete listings by type (FR/BR/UXR)
3. **`fbu-completed.md`** – Historical record of completed items

### Usage

- **Stakeholders:** Review priorities and provide input on FR/BR/UXR documents
- **Developers:** Pick highest priority items and convert to tasks when appropriate
- **Product Management:** Adjust priorities and plan based on board content

## Workflow

### Task Management Workflow

1. **Create Epic:** Add `Epic-X/` directory under `epics/` with `Epic-X.md` inside
2. **Create Story:** Add `Story-XXX-*.md` under `epics/Epic-X/`
3. **Update Board views:** `_index.md` (quick view), `kboard.md` (tasks), `kanban-structure.md` (epics), `kanban-board-guide.md` (guide), `kanban-completed.md` (completed tasks)
4. **Track Progress:** Update Epic and Story docs as work progresses

### FR/BR/UXR Workflow (atomic intake — **KG-R2**)

1. **Create FR/BR/UXR:** Add document to `fr-br/` with prefix **FR-** / **BR-** / **UXR-**
2. **Same session — create task:** Add task doc under the **semantically appropriate** story; set **`Implementing Task:`** on the report and link back from the task (**no orphan reports**)
3. **Story checklist / boards:** Update story checklist row; add to `fbuboard.md` (MoSCOW) and `fbu-structure.md` as needed
4. **Templates/docs:** UXR/governance owns template and board formatting rules where applicable
5. **Track progress:** Status updates; move to `fbu-completed.md` when done
6. **Version:** Run **RW** / **RW -k** on the correct epic branch when releasing

See `docs/project-management/rituals/policy/kanban-governance-policy.md` § **1.2** and `packages/frameworks/kanban/policies/kanban-governance-policy.md` (**KG-R2**, **KG-R6**).

### Integration Points

- **Cross-references:** FR/BR/UXR documents link to implementing tasks
- **Priority alignment:** MoSCOW prioritization consistent across systems
- **Completion tracking:** Both systems track completed items separately
- **Documentation updates:** Board guide covers both systems

## Statistics (Current)

### Task System

- **Active Epics:** 8 (Epics 1, 2, 4, 5, 6, 7, 8, 10, 11, 21, 24)
- **Active Stories:** Multiple across epics
- **Active Tasks:** Varies by priority level

### FR/BR/UXR System

- **Total Items:** 70 FR/BR/UXR documents
- **Feature Requests:** 51 (1 completed: FR-051)
- **Bug Reports:** 15 (1 in progress: BR-037)
- **User Experience Research:** 4
- **MoSCOW Distribution:** M:2, S:6, C:62, W:0, O:0

## Governance

See `docs/project-management/rituals/policy/kanban-governance-policy.md` for full governance details covering both task management and FR/BR/UXR prioritization systems.

---

*This integrated system provides comprehensive project management with dual prioritization boards for both task execution and intake management.*
