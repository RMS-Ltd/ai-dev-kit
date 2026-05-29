---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-25T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S19:T05 - Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md) **(E4:S19:T05)**  
**Planning for:** [UXR-008 - Canonical Kanban filename normalization](../project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)  
**Status:** Draft

---

## 1. Specification

### 1.1 Goal

Normalize kanban and FR/BR/UXR related filenames under `docs/project-management/kanban/` to a concise canonical pattern family aligned with `kboard.md` and `fbuboard.md`, while keeping migration safety and reference integrity.

### 1.2 Functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| F1 | Define canonical filename policy for in-scope kanban and FR/BR/UXR supporting docs. | T05 AC1 |
| F2 | Produce complete old-name -> new-name mapping for targeted files. | T05 AC2 |
| F3 | Update all markdown links and documented references to canonical filenames. | T05 AC3 |
| F4 | Update script/config path assumptions that reference renamed files. | T05 AC4 |
| F5 | Provide backward-compatibility migration guidance for legacy names. | T05 AC5 |
| F6 | Maintain cross-wiring consistency across task/story/UXR/boards after migration. | T05 AC6 |

### 1.3 Non-functional requirements

| ID | Requirement |
| ---- | ---- |
| N1 | Determinism: same repo state should always generate same filename mapping. |
| N2 | Safety: no broken internal markdown links in `docs/project-management/kanban/`. |
| N3 | Traceability: migration mapping is documented and reviewable. |
| N4 | Incrementality: migration can be split into phases if blast radius is high. |

### 1.4 Out of scope

- Renaming task docs that are canonical by task ID pattern (`Txx-...md`) unless required by policy revision.
- Rewriting historical changelog archive filenames.
- Broad non-kanban documentation filename refactors outside `docs/project-management/kanban/`.

---

## 2. Test design

| ID | Area | What to verify |
| ---- | ---- | ---- |
| T1 | Mapping completeness | Every renamed file appears exactly once in migration mapping. |
| T2 | Link integrity | No broken markdown links across kanban and FR/BR/UXR docs post-migration. |
| T3 | Script compatibility | Workflow scripts referencing renamed files resolve canonical paths correctly. |
| T4 | Alias/migration safety | Legacy-name guidance (and any alias support) is documented and accurate. |
| T5 | Cross-wiring coherence | UXR/task/story/board references all point to `E4:S19:T05` and canonical filenames. |

### 2.1 Planned verification commands

- `python3 "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --dry-run --mode full`
- `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4`
- `rg "kanban-board\.md|fr-br-uxr-board\.md|fr-br-uxr-structure\.md|fbuboard\.md|kboard\.md" "docs/project-management/kanban"`

---

## 3. Implementation plan

### Phase 1 - Policy and inventory

1. Declare canonical filename policy and abbreviation vocabulary.
2. Inventory in-scope files and classify rename necessity.
3. Publish deterministic migration mapping table.

#### 3.1 Initial inventory seed (draft)

| Current path | Candidate canonical target | Notes |
| ---- | ---- | ---- |
| `docs/project-management/kanban/fr-br-uxr-structure.md` | `docs/project-management/kanban/fbu-structure.md` | Align collective naming with `fbuboard` shorthand. |
| `docs/project-management/kanban/fr-br-uxr-completed.md` | `docs/project-management/kanban/fbu-completed.md` | Keep completed ledger naming parallel to board shorthand. |
| `docs/project-management/kanban/fr-br-uxr-board.md` (legacy alias) | `docs/project-management/kanban/fbuboard.md` (already canonical) | Preserve as compatibility alias or redirect doc. |
| `docs/project-management/kanban/fr-br/` | `docs/project-management/kanban/fbu/` *(decision pending)* | High-blast-radius folder rename; evaluate separately before execution. |

### Phase 2 - Rename and reference migration

1. Apply file renames in controlled batches.
2. Update links/references in boards, story/task docs, and FR/BR/UXR docs.
3. Update scripts/config path references impacted by renamed files.

### Phase 3 - Validation and stabilization

1. Run workflow dry-runs and targeted tests.
2. Verify link integrity and reference coherence.
3. Publish migration guidance for legacy filename users.

---

## 4. Verification gates

- Canonical policy and mapping are published and linked from T05.
- In-scope renamed files and references are consistent.
- No broken internal links in kanban/FR-BR-UXR surfaces.
- RW/UKW path assumptions remain operational after rename.

---

## References

- [T05 host task](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
- [UXR-008](../project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [FR-086](../project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
