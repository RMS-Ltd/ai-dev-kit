# Changelog v0.2.16.21+1

**Release Date:** 2026-06-05 15:22:51 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 21  
**SemVer:** v0.4.978+1

---

## Summary

E02:S16:T21 (UXR-024) — Change implemented: RW **local-default** policy — default full `RW` completes locally (commit + tag) without push; **`--push`** opt-in for Step 12 + 12.5; operator batch-push runbook in cheatsheet §2. Packaged + `greenfield-install/` mirrors aligned.

---

## Added

- [UXR-024](../../../project-management/kanban/fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md) — RW local-release default research + recommendations
- [T21](../../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T21-rw-local-release-default-no-push-uxr024.md) — implementing task
- `canonical-rw-steps.yaml` v2.1.0 — `full_release` local-only; `full_release_push` for `--push`

---

## Changed

- `.cursorrules`, `.claude/commands/rw.md`, [workflow-initiation-cheatsheet.md](../../../guides/workflow-initiation-cheatsheet.md) — local-default RW; `--push` flag; batch push runbook
- `AGENTS.md`, kanban `AGENTS.md`, [agent-network-access ADR](../../../architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md)
- Packaged workflow-mgt: portable excerpt, vwmp guides, skills, `agents/rw/AGENTS.md`, dual-source parity checklist
- `greenfield-install/` workflow-mgt mirrors synced

---

## Notes

- This release completed **locally** per UXR-024 (`RW COMPLETE (local)` — no `--push` in trigger)
- BR-097 tag immutability unchanged for operator batch push
