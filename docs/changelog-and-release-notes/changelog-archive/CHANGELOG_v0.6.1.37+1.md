---
title: "Changelog: v0.6.1.37+1"
---

# Changelog: v0.6.1.37+1

**Release Date:** 2026-03-05 00:00:00 UTC
**Epic:** Epic 6 – Framework Management
**Story:** Story 1 – BR Repo (PERPETUAL)
**Task:** Task 37 – Kanban Install Consumer Board Contamination
**Type:** 🐞 Bug Behaviour / 🧰 Framework Hardening / 📚 Documentation

---

## Summary

E6:S01:T37+1 – BR-037: implement Kanban contamination **detection and remediation** tooling so consumer projects can both avoid copying `ai-dev-kit`’s own Kanban backlog on fresh installs and safely clean up already‑contaminated boards.

This release **implements** the detector + remediation path and wires it into validation and docs; it does **not** yet claim that all real‑world contaminated boards have been fully cleaned. Follow-up RWs will upgrade BR-037 from “change implemented” to “fixed” once consumer verification is complete.

---

## Changes

### Fresh Install Invariants (Prevention)

- Tightened expectations for `install_kanban_framework.py --mode fresh`:
  - Ensures a **clean, project-agnostic** Kanban skeleton under `docs/project-management/kanban/`.
  - Avoids copying `ai-dev-kit`’s own backlog (including Epic 24 and BR/FR repos) into consumer trees.
  - Enforces (via tests) that consumer boards do **not** claim the title `AI Dev Kit – Kanban Board`.
- Extended integration with FR-047 install logging:
  - Fresh installs emit `[KANBAN_*]` markers to per-run install logs, making post‑install validation observable.

### Contamination Detector (Detection)

- Added a Kanban contamination detector that walks `docs/project-management/kanban/` and classifies each `.md` file as:
  - `template` – expected consumer templates and skeleton epics.
  - `devkit_reference` – dev-kit reference material (in the dev-kit repo itself).
  - `contaminated` – dev-kit backlog artefacts that should not exist in consumer projects (e.g., dev-kit board title, FR/BR repo docs, non‑canonical epics).
  - `unknown` – files outside current rule coverage.
- Implemented explicit rules for:
  - Boards titled `AI Dev Kit – Kanban Board` in consumer contexts.
  - Dev-kit FR/BR repo documents leaking into consumer `fr-br/` trees.
  - Dev-kit repository stories and specific epics known to be framework-internal.
- Added unit tests to verify classification for:
  - Clean consumer boards.
  - Dev-kit board copies.
  - FR/BR repo documents and non‑canonical epics (e.g., Epic 6) appearing in consumer trees.

### Remediation Engine (Clean-up)

- Implemented a remediation script for contaminated Kanban trees:
  - Uses the detector to identify `contaminated` files and prints a CSV‑style summary.
  - **Dry-run (default):**
    - Performs no filesystem changes.
    - Prints planned actions (archive/delete) for each contaminated file.
  - **Archive mode (`--no-dry-run`):**
    - Moves contaminated files under `.contaminated/` beneath the Kanban root, preserving relative paths for inspection.
  - **Delete mode (`--no-dry-run --delete`):**
    - Deletes contaminated files outright, intended for use only after archives have been reviewed or in disposable test repos.
- Added tests to confirm:
  - Dry-run safety (no changes on disk).
  - Archive mode behaviour, including path preservation.
  - Delete mode behaviour.
  - **Idempotency:** running remediation multiple times converges quickly and does not re‑archive or error on already‑clean trees.

### Validator Integration

- Extended the Kanban installation validator to:
  - Invoke the contamination detector on the target Kanban tree.
  - Fail validation when any `contaminated` findings are present.
  - Emit a clear message instructing users to run the remediation script (with a recommended dry-run first).
- This ties BR-037 remediation into the normal **“validate install → remediate → re‑validate”** loop for consumer projects.

### Documentation Updates

- **BR-037:** Added a detailed description of:
  - The original contamination problem and its impact.
  - Fresh install invariants for clean consumer boards.
  - The contamination detector + remediation workflow.
  - Validator integration and operational playbook for consumers.
- **Task E6:S01:T37:** Documented:
  - Goals, scope, and specification for prevention/detection/remediation.
  - Acceptance criteria across fresh installs, detector coverage, remediation behaviour, and validator integration.
  - Status as **CHANGE IMPLEMENTED – AWAITING VERIFICATION** (no “Fixed” claim yet).
- **Kanban board**:
  - Updated the E6:S01:T37 entry to reflect that contamination tooling exists and is critical, while remaining IN PROGRESS until consumer verification.
- **Kanban board guide**:
  - Linked install logs (FR-047) to the new contamination detection/remediation tools.
  - Described the recommended path when a consumer board appears contaminated with dev-kit artefacts.

---

## Verification

- `pytest tests/kanban/test_install_kanban_logging.py -q` – validates fresh install logging and invariants (including board title checks).
- `pytest tests/kanban/test_contamination_detector.py -q` – verifies classification rules for clean vs contaminated structures.
- `pytest tests/kanban/test_remediate_contamination.py -q` – validates remediation behaviour (dry-run, archive, delete).
- `pytest tests/kanban/test_remediate_e2e.py -q` – confirms end‑to‑end remediation idempotency and archive layout for contaminated trees.

---

## Related Work

- **BR-037:** Kanban Install Consumer Board Contamination.
- **FR-047:** Install Logging for Framework Dependencies (per-run logging and install history support that underpin BR-037 diagnosis).
- **E6:S01:T36:** RW Step 7 Board Update Bugs.
- **Future RW(s):** To be used to mark BR-037 as fully **Fixed** once the contamination tooling has been exercised in one or more real consumer repositories.

