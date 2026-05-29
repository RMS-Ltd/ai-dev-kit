# Detailed Changelog — v0.5.1.46+6

**Release Date:** 2026-04-13 16:51:32 UTC  
**Version:** `v0.5.1.46+6`  
**SemVer:** `v0.4.735+6`  
**Task Anchor:** `E5:S01:T46` (`--art` adoption)

---

## Summary

Change implemented: FR-046 dual-version mode now fails fast in branch context validation when `versioning_mode: dual` is paired with a non-`task_touch` `semver_mapping_strategy`; installer and example configs emit the aligned pair; regression tests cover dual, legacy, `semver_only`, and `kanban_only` combinations.

---

## Changed

- `validate_branch_context.py`: normalize `versioning_mode`, enforce dual ⇒ `task_touch` (FR-046), legacy compatibility warning when `versioning_mode` is omitted.
- `install_release_workflow.py`: new installs with dev-kit schema (modes B/C, and mode A when dev-kit schema is chosen) write `versioning_mode: dual` and `semver_mapping_strategy: task_touch`.
- `rw-config-schema.md`, `README-rw-installer.md`: documented modes and invariant.
- Example `rw-config-*.yaml` under workflow mgt `config/examples/`: explicit dual + task-touch keys.
- `test_validate_branch_context.py`: dual+registry failure, `semver_only` / `kanban_only` non-dual passes.
- Root `rw-config.yaml`: explicit `versioning_mode: dual` (already aligned with `task_touch`).

---

## Verification

- `python -m pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_branch_context.py" -q` → **7 passed**.
- `python "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E5:S01:T46" --art` → pass on `dev`.

---

## Traceability

- Epic: `5`
- Story: `1`
- Task: `46`
- FR: [FR-046](../../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
