# Detailed Changelog — v0.2.13.8+2

**Release Date:** 2026-06-03 20:45:00 UTC  
**Internal Version:** v0.2.13.8+2  
**SemVer:** v0.4.861+2  
**Epic:** 2 | **Story:** 13 | **Task:** 8

---

## Summary

**E02:S13:T08** / **FR-106**: Sync packaged workflow artefacts with live ai-dev-kit RW/UKW agent spec — Step 9 FR-097/FR-092 validators, `canonical-rw-steps.yaml` v2.0.0, release-workflow YAML/registry, dual-source parity pass.

---

## Change implemented

- Updated `cursorrules-rw-trigger-section.md` and `.claude/commands/rw.md` Step 9 validator set (8 scripts including `validate_board_stamp_diff.py`, `validate_kanban_state_icons.py`, `validate_release_readiness.py`).
- Refreshed `canonical-rw-steps.yaml` to 12-step agent model + 9.5/9.6/12.5/13.
- Aligned `workflows/release-workflow/release-workflow.yaml` and `workflow-registry.yaml`; deprecated flat `workflows/release-workflow.yaml`.
- Extended `rw-trigger-dual-source-parity.md` checklist and T08 delta log.
- UKW excerpt: Step 1 wiring, 2.5, FR-097 stamp rules; vwmp tracker callout for numbering authority.
- Fixed `validate_canonical_steps.py` YAML step-id matching.

---

## Attempted resolution (FR-106)

Packaged adopters copying `packages/frameworks/workflow mgt/` now receive RW/UKW docs aligned with root `.cursorrules`. **Pending user verification** on adopter replay.

---

## Kanban

- **E02:S13:T08** → COMPLETE (**v0.2.13.8+2**)
- **FR-106** — fix attempted, pending verification
