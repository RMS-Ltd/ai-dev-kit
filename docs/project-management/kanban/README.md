---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Directory

This directory contains **all Kanban-related documentation** for the `ai-dev-kit` repository, including task management and FR/BR/UXR intake surfaces.

## Structure

```text
kanban/
├── _index.md                    # Kanban board view (obligatory)
├── README.md                    # This file (obligatory)
├── kboard.md                    # MoSCOW prioritized tasks (sole active board; ADR-018)
├── kanban-structure.md          # Epic/Story/Task structure
├── kanban-board-guide.md        # Rules and explanations
├── kanban-completed.md          # Historical record of completed tasks
├── kanban-board.md              # Legacy alias → kboard.md (read-tolerance stub)
├── fbuboard.md                  # Deprecated redirect stub (no active MoSCOW)
├── fbu-structure.md             # Complete FR/BR/UXR listings by type
├── fbu-completed.md             # Historical record of completed FR/BR/UXRs
├── fbu-open-taskless-queue.md   # Open ∧ taskless intake working queue
├── fr-br/                       # Individual FR/BR/UXR documents
│   ├── FR-XXX-*.md              # Feature Request documents
│   ├── BR-XXX-*.md              # Bug Report documents
│   └── UXR-XXX-*.md             # User Experience Research documents
└── epics/
    ├── epic-01/                 # Epic 1 directory (all files here)
    │   ├── epic-01.md           # Epic 1 overview
    │   ├── story-01-ai-dev-kit-kanban-and-versioning.md
    │   └── [other story files as needed]
    ├── epic-02/                 # Epic 2 directory
    │   ├── epic-02.md
    │   └── Story-XXX-*.md
    └── ...
```

**Removed legacy aliases (E04:S19:T12, ADR-018):** `fr-br-uxr-board.md`, `fr-br-uxr-structure.md`, and `fr-br-uxr-open-taskless-queue.md` are no longer retained at kanban root. Use `kboard.md`, `fbu-structure.md`, and `fbu-open-taskless-queue.md` respectively.

## Key Principles

- **Single location:** All Kanban docs (Epics, Stories, board views, FR/BR/UXRs) live under `kanban/`
- **Epic-centric:** Each Epic has its own directory containing all its files (Epic overview, Stories, Task docs)
- **Story directories:** Stories with associated files can have subdirectories (e.g., `Story-XXX/TXXX-*.md`)
- **Board split:** Active MoSCOW on `kboard.md`; structure, guide, and completed ledgers are separate non-MoSCOW surfaces
- **Single active MoSCOW (ADR-018):** `kboard.md` owns all task and wired FBU prioritization (including **Verification (V)** band); `fbuboard.md` is a redirect stub only
- **UXR ownership:** The UXR workflow owns Kanban template updates and documentation maintenance to keep terminology and formatting consistent across boards ([kanban-board-guide.md](kanban-board-guide.md) § Formatting Governance / **E07:S01:T09** / UXR-005)

## Files

### Core Kanban System

- **`_index.md`** – Quick board view (table format)
- **`kboard.md`** – MoSCOW prioritized tasks (sole active board; includes **Verification (V)** band)
- **`kanban-structure.md`** – Epic/Story/Task structure  
- **`kanban-board-guide.md`** – Rules and explanations
- **`kanban-completed.md`** – Historical record of completed tasks
- **`kanban-board.md`** – Legacy alias stub → `kboard.md` (read tolerance for downstream repos)

### FR/BR/UXR System Snapshot

- **`fbuboard.md`** – Deprecated redirect stub (no active MoSCOW; see [ADR-018](../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md))
- **`fbu-structure.md`** – Complete FR/BR/UXR listings by type
- **`fbu-completed.md`** – Historical record of completed FR/BR/UXRs
- **`fbu-open-taskless-queue.md`** – Working queue for open FBUs without implementing tasks
- **`fr-br/FR-XXX-*.md`** – Individual Feature Request documents
- **`fr-br/BR-XXX-*.md`** – Individual Bug Report documents
- **`fr-br/UXR-XXX-*.md`** – Individual User Experience Research documents

### Epic Structure

- **`epics/Epic-X/Epic-X.md`** – Epic overview document
- **`epics/Epic-X/Story-XXX-*.md`** – Story documents and associated files

## FR/BR/UXR surfaces (non-MoSCOW)

FR/BR/UXR **prioritization** for live work lives on **`kboard.md`** (M/S/V/C/O/W bands). Supporting surfaces provide inventory, intake queue, and completion history:

| Surface | Role |
| ------- | ---- |
| `kboard.md` | Sole active MoSCOW board (tasks + wired FBUs + verification lane) |
| `fbu-structure.md` | Full FR/BR/UXR inventory by type |
| `fbu-open-taskless-queue.md` | Open ∧ taskless intake working queue |
| `fbu-completed.md` | Terminal FBU ledger |
| `fr-br/*.md` | Individual report documents (SoT for each FBU) |

## Workflow

### Task Management Workflow

1. **Create Epic:** Add `Epic-X/` directory under `epics/` with `Epic-X.md` inside
2. **Create Story:** Add `Story-XXX-*.md` under `epics/Epic-X/`
3. **Update Board views:** `_index.md` (quick view), `kboard.md` (tasks), `kanban-structure.md` (epics), `kanban-board-guide.md` (guide), `kanban-completed.md` (completed tasks)
4. **Track Progress:** Update Epic and Story docs as work progresses

### FR/BR/UXR Workflow (atomic intake — **KG-R2**)

1. **Create FR/BR/UXR:** Add document to `fr-br/` with prefix **FR-** / **BR-** / **UXR-**
2. **Same session — create task:** Add task doc under the **semantically appropriate** story; set **`Implementing Task:`** on the report and link back from the task (**no orphan reports**)
3. **Story checklist / boards:** Update story checklist row; add to `kboard.md` (MoSCOW) and `fbu-structure.md` as needed; taskless open items → `fbu-open-taskless-queue.md`
4. **Templates/docs:** UXR/governance owns template and board formatting rules where applicable
5. **Track progress:** Status updates; move to `fbu-completed.md` when done
6. **Version:** Run **RW** / **RW -k** on the correct epic branch when releasing

See `docs/project-management/rituals/policy/kanban-governance-policy.md` § **1.2** and `packages/frameworks/kanban/policies/kanban-governance-policy.md` (**KG-R2**, **KG-R6**).

### Integration Points

- **Cross-references:** FR/BR/UXR documents link to implementing tasks
- **Priority alignment:** MoSCOW prioritization on `kboard.md` covers both tasks and wired FBUs
- **Completion tracking:** `kanban-completed.md` and `fbu-completed.md` track terminal items separately
- **Documentation updates:** Board guide covers task and FBU row contracts on the single active board

## Governance

See `docs/project-management/rituals/policy/kanban-governance-policy.md` for full governance details covering task management and FR/BR/UXR intake.

---

*Single active MoSCOW board (`kboard.md`) plus FBU inventory, intake queue, and completion ledgers — see [ADR-018](../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md).*
