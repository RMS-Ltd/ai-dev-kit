# Changelog: v0.2.1.24+3

**Release Date:** 2026-06-05 06:13:58 UTC  
**Version:** v0.2.1.24+3  
**Epic:** E2 (Workflow Management Framework)  
**Story:** S1 (RW Agent Execution and Docs)  
**Task:** T24 (RW BUILD increment and release-tag immutability — BR-097)  
**Build:** +3

---

## Summary

Change implemented: **task_touch SemVer collision guards** (BR-097 follow-on) — registry finalize at Step 2.5, Step 9 release contract validator, strategy-aware tag collision recovery, and `--art` cross-task BUILD resolution from git tags.

---

## Changes

### task_touch registry finalize (Step 2.5)

- **`finalize_rw_semver_registry.py`** — `finalize=True` on `semver-registry.yaml` before changelog/README SemVer writes
- **`validate_task_touch_release_contract.py`** — blocking Step 9 gate: registry row + staged `semver-registry.yaml`

### Tag collision recovery (strategy-aware)

- **`tag_collision_recovery.py`** — internal tag → BUILD+1; task_touch SemVer core → new PATCH via finalize + re-RW
- **`push_rw_release.py`** / **`validate_semver_tag_alignment.py`** — BR-097 recovery text; no force-push guidance

### `--art` cross-task BUILD resolution

- **`resolve_rw_build.py`** — when `--art` adopts E:S:T different from HEAD, next BUILD = max tagged BUILD + 1 (`art_tagged_follow_on`)

### Tests + doc parity

- `test_finalize_rw_semver_registry.py`, `test_tag_collision_recovery.py`, `test_validate_task_touch_release_contract.py`
- `.cursorrules`, `cursorrules-rw-trigger-section.md`, `.claude/commands/rw.md`, `release-workflow-agent-execution.md`, `rw-trigger-dual-source-parity.md`

---

## Related

- [BR-097](../../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [IPP-E02S01T24](../implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md)
- Prior: [CHANGELOG_v0.2.1.24+2.md](CHANGELOG_v0.2.1.24+2.md)
