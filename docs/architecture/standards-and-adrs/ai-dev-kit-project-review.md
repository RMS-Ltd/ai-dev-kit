---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit Project Review (Repository Hygiene & Legacy Clean-Up)

**Status:** Review complete (planning phase only)  
**Scope:** Read-only survey of ai-dev-kit structure, identifying legacy/duplicated/confusing artefacts and proposing a follow-up clean-up plan.  
**Related:** FR-039 (AI Dev Kit Project Review and Legacy Clean-Up), E5:S01:T39.

---

## 1. Top-Level Inventory & Classification

Top-level entries (repo root):

- `packages/` – **Frameworks SoT**
  - `packages/frameworks/numbering & versioning` – Numbering & Versioning framework (canonical versioning docs).
  - `packages/frameworks/workflow mgt` – Workflow Management framework (RW/UKW/CMW, validators, scripts).
  - `packages/frameworks/kanban` – Kanban framework (governance, templates, examples).
  - Other framework packages (e.g. document lifecycle, debug path) – framework-specific SoT.
- `docs/` – **Dev-kit-local specialisation + book material**
  - `docs/architecture/standards-and-adrs/` – Dev-kit-local policies/ADRs and book-adjacent docs.
  - `docs/changelog-and-release-notes/` – Dev-kit’s own changelog archive (implementation of framework pattern).
  - `docs/project-management/kanban/` – Dev-kit’s Kanban instance (epics/stories/tasks/board).
  - Additional book/authoring files (e.g. “for-dummies-…” markdown) – **book project content**, not framework.
- `src/` – **Dev-kit-local code**
  - `src/fynd_deals/version.py` – Dev-kit version file (legacy path but now canonical for dev-kit).
- `scripts/` – **Scripts/misc tooling**
  - `scripts/documentation`, `scripts/frameworks`, `scan_tasks_for_moscow.py`, `validate_cli.py`, etc.
- Other:
  - `rw-config.yaml` – RW configuration (paths, schema).
  - `CHANGELOG.md` + `docs/changelog-and-release-notes/changelog-archive` – Dev-kit changelog system.

High-level classification:

- **Framework SoT:** `packages/frameworks/*`.
- **Dev-kit specialisation:** `docs/architecture/standards-and-adrs/*`, `docs/project-management/kanban/*`, `rw-config.yaml`, `src/fynd_deals/version.py`.
- **Book/authoring content:** `docs/documentation/*`, author checklists, outlines.
- **Potential legacy/overlap hotspots:** older copies of policies under `docs/architecture/standards-and-adrs`, older RW/UKW docs, scripts under `scripts/` that predate the framework versions.

---

## 2. Framework Package Sanity Pass (Conceptual)

### 2.1 Numbering & Versioning (`packages/frameworks/numbering & versioning`)

- **Canonical:**
  - `versioning-policy.md` – primary schema definition.
  - `versioning-strategy.md` – canonical strategy (ordering, timestamps, traceability).
  - `README.md` – package-level overview.
- **Observations:**
  - Dev-kit-local policy (`docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`) correctly positions itself as a **specialisation** of this framework.
  - There is some repeated explanation (e.g., dual-version model, SemVer mapping) now present in both framework and dev-kit docs by design.
- **Potential legacy:**
  - Any older references in dev-kit ADRs that predate the refined framework docs should be treated as **historic examples**, not canonical.

### 2.2 Workflow Management (`packages/frameworks/workflow mgt`)

- **Canonical:**
  - `KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` – RW agent execution guide.
  - `KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md` – UKW agent execution guide.
  - `scripts/validation/*` – branch context, changelog, semver validators.
  - `scripts/version/semver_converter.py` – SemVer mapping logic.
- **Potential legacy:**
  - Older “reference” RW docs (if any) outside the `KB/Documentation/Developer_Docs/vwmp` path should be treated as **background material** and cross-linked or archived to avoid confusion.

### 2.3 Kanban Framework (`packages/frameworks/kanban`)

- **Canonical:**
  - `policies/kanban-governance-policy.md` – framework-level governance.
  - `templates/*` – epic/story/task and board guide templates.
  - Example docs referenced from governance.
- **Potential legacy:**
  - Any older examples/templates that predate discrete Task docs, S00/S01 repository stories, or perpetual tasks may be considered **legacy examples** and either:
    - Wrapped in a “historic patterns” section, or
    - Archived into a clearly-marked “legacy” area if they are no longer recommended.

---

## 3. Dev-Kit vs Framework Duplication (High-Level)

### 3.1 Policy/Doc Duplication

- **Versioning:**
  - Framework: `packages/frameworks/numbering & versioning/versioning-policy.md`, `versioning-strategy.md`.
  - Dev-kit: `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`, `dev-kit-versioning-cookbook.md`, `dual-versioning-package-managers.md`.
  - **Pattern:** correct “SoT + specialisation” split, but overlapping explanations can be confusing if readers don’t see the relationship clearly.

- **RW workflow:**
  - Framework: RW agent execution guide under `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/`.
  - Dev-kit: `.cursorrules` and ADRs reference RW behaviour and constraints.
  - **Pattern:** dev-kit adds project-level rules (e.g. “RW only for commits/pushes”) on top of framework behaviour.

- **Kanban governance:**
  - Framework: `packages/frameworks/kanban/policies/kanban-governance-policy.md`.
  - Dev-kit: `docs/project-management/kanban/kboard.md` + any dev-kit-local governance ADRs.
  - **Pattern:** governance SoT in framework, dev-kit board/docs as an instance.

### 3.2 Scripts

- There is an expected overlap between:
  - `packages/frameworks/workflow mgt/scripts/*` – framework-level scripts (validators, converters, kanban update).
  - `scripts/*` – dev-kit project-level scripts (document installers, package build/publish, utility scanners).
- **Potential legacy/fat:**
  - Older one-off scripts under `scripts/` that replicate behaviour now encapsulated in the framework scripts.
  - These should be explicitly tagged as “legacy/one-shot” in the clean-up phase or removed if truly obsolete.

---

## 4. Kanban & Workflow Documentation Review (High-Level)

### 4.1 Kanban (`docs/project-management/kanban`)

- **Current state:**
  - `kboard.md` implemented with MoSCOW sections and explicit board/guide split via `kanban-board-guide.md`.
  - Epic/Story/Task docs under `epics/Epic-N/...` using discrete task docs for newer work (e.g. FR Repo in Epic 5).
- **Legacy risks:**
  - Older epics/stories may still:
    - Use embedded tasks instead of discrete Task docs.
    - Lack version anchors or abstract spaces.
  - Any earlier versions of the board/guide (if present) should be marked as **historic**.

### 4.2 RW/UKW/CMW Docs

- **Canonical RW/UKW docs** live under workflow mgt’s `KB/Documentation/Developer_Docs/vwmp/`.
- Dev-kit’s `.cursorrules` and local ADRs correctly reference those, but:
  - Any old RW how-to documents elsewhere should be:
    - Linked to the canonical guides, or
    - Archived as historical design notes.

---

## 5. Versioning & Changelog Hygiene (High-Level)

- **Version file & config:**
  - `src/fynd_deals/version.py` – single source for internal version (`RC.EPIC.STORY.TASK+BUILD`).
  - `rw-config.yaml` – correctly points to version file, changelog locations, and Kanban root.
  - `semver-registry.yaml` – registry for SemVer mapping (registry-based mode).
- **Changelog:**
  - `CHANGELOG.md` + `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md` implement the two-layer pattern and respect immutability of `Release Date`.
- **Legacy risk:**
  - Any early changelog files or alternative logs (if present) that predate this pattern should be clearly marked as legacy and excluded from new releases.

---

## 6. Scripts & Miscellaneous Fat (High-Level)

- **Core tooling:**
  - Workflow validators and version converters under `packages/frameworks/workflow mgt/scripts`.
  - RW/UKW integration scripts (e.g. `update_kanban_docs.py`).
- **Project utilities:**
  - Scripts in `scripts/documentation` and `scripts/frameworks` for building/uploading packages, installing frameworks into adopters, etc.
  - These are useful but should be clearly documented as project utilities rather than framework core.
- **Potential legacy/experimental:**
  - Standalone helpers like `scan_tasks_for_moscow.py`, `validate_cli.py`:
    - Useful, but may be better grouped under an `internal-tools/` or `examples/` area, or flagged as experimental.

---

## 7. Proposed Clean-Up Checklist (For Follow-Up Implementation Task)

The following items are **not executed yet**; they define the next task’s scope.

1. **Clarify SoT vs specialisation in docs:**
   - In dev-kit-local policies under `docs/architecture/standards-and-adrs/`, add brief “Based on framework X” notes where missing and link directly to the corresponding framework files.
   - Where dev-kit docs fully duplicate framework content, collapse them into:
     - A short “dev-kit application” section, plus
     - Pointers back to framework docs for full detail.

2. **Mark legacy/historic docs:**
   - Identify older RW/UKW/CMW guides outside `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/` and:
     - Add a “Historic / superseded by …” banner, or
     - Move them into a `legacy/` or `archive/` subfolder with a README explaining their status.
   - Do the same for any early Kanban board/guide variants or outdated governance texts.

3. **Align Kanban docs to discrete Task doc pattern:**
   - For older epics/stories still using embedded tasks:
     - Create discrete Task docs using the current templates.
     - Update checklists to reference these docs.
   - Ensure each Task has a version anchor and forensic marker where practical.

4. **Normalize versioning/changelog references:**
   - Ensure all documentation that discusses versioning points to:
     - Framework versioning policy/strategy as SoT.
     - Dev-kit versioning policy as “application of framework”.
   - Mark any ad-hoc or partial changelog files as historical and stop adding new entries to them.

5. **Rationalise scripts:**
   - Tag or move:
     - Core RW/UKW scripts under the workflow mgt package (no change).
     - Dev-kit-specific scripts to a clearly-named `scripts/internal/` or similar.
     - Legacy/one-shot scripts into a `scripts/legacy/` folder (or remove after confirming no longer used).

6. **Prepare adopter-facing documentation:**
   - Create or update a concise “Repo Structure for Adopters” doc explaining:
     - Where frameworks live.
     - Which dev-kit docs are examples vs canonical policies.
     - Which scripts adopters are expected to use or copy.

7. **Define implementation task:**
   - Create a new implementation Task and FR (under appropriate epic/story) to execute this clean-up checklist, referencing:
     - FR-039.
     - This review document.

---

## 8. Status & Next Steps

- **This review:** complete at a high level; it intentionally favours structure and clarity over exhaustive enumeration of every file.
- **Next:** create an implementation-focused FR/Task that executes the clean-up checklist above (moving/removing/tagging files and updating docs to reflect SoT vs specialisation explicitly).

