---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# BR-037 – Kanban Install Consumer Board Contamination

## Summary

**Problem:** Early versions of the Kanban framework installer allowed consumer projects to accidentally import `ai-dev-kit`’s own Kanban backlog (epics/stories/tasks) instead of a clean, project-agnostic template tree. This led to **contaminated consumer boards** where:

- `AI Dev Kit – Kanban Board` appeared as the board title.
- Dev-kit specific epics (e.g., **Epic 24: Book Related Work**) and BR/FR repositories showed up in consumer projects.
- Consumer tasks and dev-kit’s internal backlog were mixed in the same tree, making forensic tracking and project management unreliable.

BR-037 tracks both **prevention** (fresh installs) and **remediation** (clean-up for already‑contaminated boards).

## Context and Impact

- Affected consumer projects (e.g. `xoforge`) ended up with:
  - Dev-kit epics and stories mixed into their own Kanban trees.
  - Dev-kit FR/BR repo documents under `docs/project-management/kanban/fr-br/`.
  - Confusing status signals on boards and stories, breaking the Epic/Story/Task coordination model.

- This violated the design goal that **framework templates** must be clearly separated from **consumer project content**.
- It also undermined the forensic guarantees of the Kanban + RW stack (version markers, BR/FR traceability, etc.).

## Expected Behaviour (Post-Fix)

After the full BR-037 resolution:

1. **Fresh installs** of the Kanban framework:
   - Produce a **clean, project-agnostic** Kanban tree rooted at `docs/project-management/kanban/`.
   - Never claim the board title `AI Dev Kit – Kanban Board` in consumer projects.
   - Install only the canonical epic skeleton and guidance, not dev-kit’s live backlog.
   - Emit structured install logs (via FR-047) with `[KANBAN_*]` markers for validation.

2. **Detection and remediation** for existing projects:
   - A **contamination detector** can scan a consumer Kanban tree and classify each file as:
     - `template` – expected consumer template/structure.
     - `devkit_reference` – legitimate reference material (when present in dev-kit itself).
     - `contaminated` – dev-kit backlog artefacts that must not live in consumer boards.
     - `unknown` – files that don’t match any known rule.
   - A **remediation tool** can:
     - Run in **dry-run** mode to show exactly what would be archived or deleted.
     - Run in **archive** mode to move contaminated files into a `.contaminated/` subtree, preserving structure.
     - Optionally run in **delete** mode for irreversible clean-up once archived copies are confirmed safe to remove.

3. **Validators**:
   - The Kanban installation validator fails when contamination is detected and points to the remediation tool as the recovery path.

## Current Behaviour (Fixed)

As of the remediation work for **E6:S01:T37**:

- **Fresh installs**:
  - The installer’s `--mode fresh` path now generates a clean consumer tree and has tests asserting:
    - No Epic 24 contamination in the consumer epics directory.
    - Consumer boards do **not** advertise `AI Dev Kit – Kanban Board` as the title.
  - Install runs are logged via FR-047, including Kanban-specific markers (`[KANBAN_FRESH_INSTALL]`, etc.).


- **Contamination detection**:
  - A dedicated contamination detector walks `docs/project-management/kanban/` and:
    - Flags dev-kit boards and BR/FR repo docs that appear in consumer trees.
    - Flags non-canonical epics (e.g. dev-kit project epics copied into consumers).
    - Produces a machine-readable classification (`template`, `devkit_reference`, `contaminated`, `unknown`) along with reasons.


- **Remediation tooling**:
  - A remediation script:
    - Runs a detector scan and prints a CSV-style summary of all findings.
    - Supports a **dry-run** mode that only prints planned actions (archive/delete) with no filesystem changes.
    - In **archive** mode, moves contaminated files under `.contaminated/` beneath the Kanban root.
    - In **delete** mode, removes contaminated files outright.
    - Is tested for **idempotency**: running it multiple times on the same tree is a no-op after the first clean-up.


- **Validator integration**:
  - The Kanban installation validator invokes the detector and:
    - Fails validation if any `contaminated` files are found.
    - Emits an explicit message instructing users to run the remediation tool to clean up their Kanban tree.


## Symptoms & Diagnosis

**Historical symptoms:**

- Board titled `AI Dev Kit – Kanban Board` in a consumer repository.
- Presence of dev-kit specific epics (e.g., `Epic-24/Epic-24.md – Book Related Work`) in a consumer project.
- Dev-kit FR/BR repo structure (`docs/project-management/kanban/fr-br/FR-0xx-*.md`) inside consumer trees.
- Kanban install logs (before FR-047) lacking enough detail to reconstruct what happened.

**Post-fix diagnosis path:**

1. **Check install logs** (FR-047) under `logs/ai-dev-kit/install/` for Kanban runs and markers.
2. **Run the contamination detector** over `docs/project-management/kanban/`.
3. **Review findings** by classification and reason to understand the scope of contamination.
4. **Run remediation** in dry-run mode first, then archive/delete as appropriate.

## Proposed Fixes (Implemented)

### F1 – Fix fresh Kanban installs (PREVENTION)

- Introduce a **fresh install** path that:
  - Creates only the canonical consumer epics and board skeleton.
  - Avoids copying dev-kit’s live backlog or project-specific epics.
  - Asserts via tests that canonical invariants hold (no Epic 24 in consumer epics, board title not `AI Dev Kit – Kanban Board`).

- Integrate with FR-047 logging to make fresh install behaviour observable.

**Status:** Implemented and covered by tests.

### F2 – Contamination detector (DETECTION)

- Implement a detector that:
  - Walks the Kanban tree and classifies each file with a clear reason.
  - Encodes rules for:
    - Dev-kit board titles.
    - Dev-kit FR/BR repo docs leaking into consumer trees.
    - Non-canonical epic numbers/content copied from dev-kit.
  - Exposes a simple API for use by validators and tooling.


**Status:** Implemented, with unit tests for classification rules.

### F3 – Remediation engine (CLEAN-UP)

- Implement a remediation tool that:
  - Uses the detector to find contaminated files.
  - Supports **dry-run**, **archive**, and **delete** workflows.
  - Preserves structure when archiving, under `.contaminated/`.
  - Is explicitly tested for idempotency.


**Status:** Implemented with both unit and end-to-end tests.

### F4 – Validator integration and docs

- Wire the detector into the Kanban installation validator so that:
  - Validation fails when contamination is present.
  - The validator output clearly points to the remediation command as the next step.

- Update:
  - Task document `E6:S01:T37` with the final remediation design and acceptance criteria.
  - Kanban board and guide with a short pointer to the detection/remediation tools and their relationship to install logs (FR-047).


**Status:** Implemented in code; docs and Kanban entries updated as part of this BR.

## Non-Functional Requirements

- **Safety-first operation**:
  - Default to **dry-run** for remediation; require an explicit flag to mutate files.
  - Archive before delete to allow manual inspection/recovery where needed.

- **Idempotency**:
  - Multiple remediation runs should be safe and converge quickly (no repeated archives or inconsistent states).

- **Forensic traceability**:
  - Detection and remediation should integrate with install logging (FR-047) to support end-to-end troubleshooting of installs.

- **Consumer focus**:
  - Tooling should be safe to run in real consumer projects and never introduce new dev-kit artefacts.


## Status

- **Status:** CHANGE IMPLEMENTED – AWAITING VERIFICATION  
- **Primary Task:** E6:S01:T37 – Kanban Install Consumer Board Contamination (detector + remediation implemented, pending release RW and consumer verification)  

