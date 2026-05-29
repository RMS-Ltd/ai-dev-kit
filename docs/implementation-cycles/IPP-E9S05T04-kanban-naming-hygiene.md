---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E9:S05:T04 — Planning: Kanban Naming Hygiene and Directory Systematic Cleanup (UXR-011)

**Host Task:** [`T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md`](../docs/project-management/kanban/epics/Epic-9/Story-005-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md) **(E9:S05:T04)**
**Planning for:** [UXR-011](../docs/project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)
**Status:** COMPLETE
**Completed:** 2026-05-18
**Version:** v0.9.5.4+1

> **IPW (Implementation Planning Workflow):** This plan follows the IPW template (FR-042). Bidirectional wiring between this plan doc and the host task is mandatory.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | All task files MUST use Txx (2-digit, zero-padded) naming. Txxx (3-digit) is deprecated. | UXR-011 Finding 1 / E2:S02:T007 |
| RF2 | Each story number within an epic MUST map to exactly one `Story-NNN-*.md` file. | UXR-011 Finding 2 |
| RF3 | Each task number within a story MUST map to exactly one task file. | UXR-011 Finding 3 |
| RF4 | Every story directory MUST have a matching `Story-NNN-*.md` file at the epic root. | UXR-011 Finding 4 |
| RF5 | Story filenames MUST use 3-digit zero-padding (`Story-004`, not `Story-04`). | UXR-011 Finding 5 |
| RF6 | All internal markdown links referencing renamed files MUST be updated. | UXR-011 AC7 |
| RF7 | Board docs (`kboard.md`, `fbuboard.md`) MUST reference correct post-cleanup filenames. | UXR-011 AC8 |
| RF8 | Kanban governance policy MUST codify the naming convention and prohibit duplicates. | UXR-011 AC9 |
| RF9 | A regression validator MUST exist that can be run post-cleanup to confirm zero defects. | UXR-011 AC10 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | File renames MUST use `git mv` to preserve git history. | Best practice |
| RNF2 | Changes MUST not break existing RW, UKW, or validator scripts. | Regression safety |
| RNF3 | Cleanup MUST be idempotent — running twice produces the same result. | Safety |
| RNF4 | The regression script MUST use only Python stdlib (no new pip deps). | UXR-011 constraint |

### 1.3 Invariants and boundaries

- **Invariants:** Epic directory structure (`Epic-X/Story-NNN-*.md` + `Epic-X/Story-NNN-slug/`) must remain valid.
- **In scope:** `docs/project-management/kanban/epics/` tree, board docs (`kboard.md`, `fbuboard.md`), governance policy, regression script.
- **Out of scope:** Cross-epic story name collisions (Epic-9 vs Epic-24 book stories) — these are semantically acceptable. Fixing pre-existing dangling links in `CHANGELOG_ARCHIVE.md` (12 links) — tracked separately.
- **Boundary:** Epic-owner input required for Epics 5, 6, 7 duplicate story reconciliation. Plan includes deferred decision points for these.

---

## 2. Specification

### 2.1 Goal

Bring the entire `docs/project-management/kanban/epics/` directory tree into compliance with the current canonical naming policy: all tasks use Txx (2-digit, zero-padded), all stories use Story-NNN (3-digit, zero-padded), no duplicate files per story/task number within an epic, no orphaned directories, and all internal references updated. A regression validator ensures the tree stays clean.

### 2.2 Specification mapping

- RF1 → Phase A: Txxx → Txx rename pass
- RF2 → Phase B: Duplicate story reconciliation per epic
- RF3 → Phase C: Duplicate task removal
- RF4 → Phase D: Orphaned directory resolution
- RF5 → Phase E: Story-04 → Story-004 rename
- RF6 → Phase F: Link update pass across all markdown files
- RF7 → Phase G: Board doc reference update
- RF8 → Phase H: Governance policy amendment
- RF9 → Phase I: Regression script creation

### 2.3 Constraints

- No new pip dependencies.
- All renames via `git mv` to preserve history.
- Duplicate story reconciliation in Epics 5, 6, 7 requires human judgment (registry vs functional stories). Plan includes a decision table.
- Epic-9 is canonical for E/S/T review per user directive.

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS (set during RW v0.9.5.4+1)
- **Transition trigger to COMPLETE:** All 10 ACs satisfied with evidence (inventory list, zero Txxx, zero duplicates, zero orphans, validated links, updated boards, updated policy, regression script green).
- **Atomic propagation:** Task doc, story checklist, epic checklist, and board rows update in same commit.
- **Owner:** Implementation execution step.

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Naming regression script | Run `validate_kanban_naming.py`; expect exit 0 with "0 Txxx, 0 duplicate stories, 0 duplicate tasks, 0 orphaned dirs" |
| T2 | Txxx → Txx rename integrity | For each renamed file, `git log --follow` shows continuous history; no `T[0-9]{3}-` files remain |
| T3 | Duplicate story reconciliation | `find kanban/epics/Epic-5 -maxdepth 1 -name "Story-001-*.md" | wc -l` → 1 (same for Epic-6, 7, 9) |
| T4 | Duplicate task removal | `find kanban/epics/Epic-2/Story-002-pdca* -maxdepth 1 -name "T0[0-9]-*" | wc -l` → 2 (only T07, T08) |
| T5 | Orphaned directory cleanup | `[ -d "kanban/epics/Epic-5/Story-002" ]` → false OR `[ -f "kanban/epics/Epic-5/Story-002.md" ]` → true |
| T6 | Zero-padding fix | `[ -f "kanban/epics/Epic-7/Story-004-readme-template-based-on-best-readme-template.md" ]` → true |
| T7 | Link validation | `validate_changelog_archive_links.py` (existing) and grep for old filenames across all markdown → 0 matches |
| T8 | Board doc consistency | `kboard.md` and `fbuboard.md` contain zero references to old filenames |
| T9 | Governance policy rule | `kanban-governance-policy.md` contains explicit "Txx (2-digit) required; Txxx deprecated; Story-NNN (3-digit) required" language |
| T10 | Idempotency | Run regression script twice; second run produces identical output (no false positives) |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E9:S05:T04 status to IN PROGRESS** in task doc (already done at v0.9.5.4+1). | Task doc status = IN PROGRESS |
| A1 | Create `scripts/cleanup/generate_kanban_naming_inventory.py` — scans `kanban/epics/`, produces JSON inventory of all Txxx files, duplicate stories, duplicate tasks, orphaned dirs, zero-padding issues. | Inventory JSON + human-readable report |
| A2 | Human review of inventory for Epics 5, 6, 7 duplicate stories — decide canonical file per story number. Decision table: registry story (fr-repo/br-repo) vs functional story. | Decision log |
| B1 | **Phase A:** Rename all Txxx → Txx using `git mv` batch script driven by inventory. T001→T01, T010→T10, etc. | Zero Txxx files remain |
| C1 | **Phase B:** Merge/delete duplicate story files per decisions from A2. Use `git mv` to rename canonical files if needed. Update epic story checklists. | One file per story number per epic |
| C2 | **Phase C:** Remove duplicate task files (Epic-2/Story-002: delete T007, T008, T08-deliverable; keep T07, T08). `git rm` the duplicates. | One file per task number per story |
| D1 | **Phase D:** Resolve `Epic-5/Story-002/` — either create `Story-002.md` or remove directory per A2 decision. | Zero orphaned dirs |
| E1 | **Phase E:** Rename `Epic-7/Story-04-*` → `Epic-7/Story-004-*`. | Story-004 files exist |
| F1 | **Phase F:** Run `sed`/`python` across all markdown in `kanban/` to update internal links referencing old filenames. | Zero old-filename references |
| G1 | **Phase G:** Update `kboard.md` and `fbuboard.md` row references to new filenames. | Boards reference correct files |
| H1 | **Phase H:** Amend `kanban-governance-policy.md` with explicit naming convention rule (Txx required, Txxx deprecated, Story-NNN required, no duplicate numbers within epic). | Policy updated |
| I1 | **Phase I:** Create `packages/frameworks/workflow mgt/scripts/validation/validate_kanban_naming.py` — exits 0 on clean tree, exits 1 with report on violations. Wired into governance as post-cleanup check. | Regression script |
| I2 | Run regression script; verify all 10 ACs pass. | AC sign-off |
| **N** | **[MANDATORY] Reconcile E9:S05:T04 status** to COMPLETE with forensic marker `✅ COMPLETE (v0.9.5.4+X)` if all ACs satisfied; remain IN PROGRESS if ongoing; BLOCKED if epic-owner decisions pending. Update task doc, story checklist, epic checklist, boards atomically. | Status reflects actual state |

### 4.1 Files to create or modify

**Create:**
- `scripts/cleanup/generate_kanban_naming_inventory.py` — inventory generator
- `packages/frameworks/workflow mgt/scripts/validation/validate_kanban_naming.py` — regression validator

**Modify (renames + content updates):**
- 51 Txxx files → Txx (via `git mv`)
- 14 duplicate story files → merged/renamed/deleted (Epics 5, 6, 7, 9)
- 3 duplicate task files → deleted (Epic-2/Story-002)
- `Epic-7/Story-04-*` → `Epic-7/Story-004-*`
- `Epic-5/Story-002/` → resolved (create .md or remove)
- `kanban-governance-policy.md` — new naming rule
- `kboard.md`, `fbuboard.md` — reference updates
- All epic/story docs with outdated links

### 4.2 Dependency order

1. A1 (inventory) → A2 (decisions) → parallel B1/C1/C2/D1/E1 → F1 (links) → G1 (boards) → H1 (policy) → I1 (regression) → I2 (verify) → N (status reconciliation)

---

## 5. Success / verification criteria

- [x] Inventory exists listing all 51 Txxx files with before/after names
- [x] `find kanban/epics -name 'T[0-9][0-9][0-9]-*' | wc -l` → 0
- [x] `find kanban/epics/Epic-5 -maxdepth 1 -name 'Story-001-*' | wc -l` → 1 (same for all duplicate story numbers)
- [x] `find kanban/epics/Epic-2/Story-002* -maxdepth 1 -name 'T0[0-9]-*' | wc -l` → 2 (T07, T08 only)
- [x] `test -d kanban/epics/Epic-5/Story-002 && test -f kanban/epics/Epic-5/Story-002.md` (or directory removed)
- [x] `test -f kanban/epics/Epic-7/Story-004-readme-template-based-on-best-readme-template.md`
- [x] `grep -r "T[0-9][0-9][0-9]-" kanban/ --include="*.md" | wc -l` → 0 (excluding historical references in changelog-archive)
- [x] `validate_kanban_naming.py` exits 0
- [x] `kanban-governance-policy.md` contains explicit Txx/Story-NNN naming convention
- [x] All board references updated

---

## References

- [E9:S05:T04 Host Task](../docs/project-management/kanban/epics/Epic-9/Story-005-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md)
- [UXR-011](../docs/project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)
- [E2:S02:T007](../docs/project-management/kanban/epics/Epic-2/Story-002-pdca-integration-into-release-workflow/T007-implement-task-naming-change.md)
- [E2:S02:T008](../docs/project-management/kanban/epics/Epic-2/Story-002-pdca-integration-into-release-workflow/T008-update-kanban-docs-to-txx-standard.md)
- [kanban-governance-policy](../packages/frameworks/kanban/policies/kanban-governance-policy.md)
- [FR-042](../docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
