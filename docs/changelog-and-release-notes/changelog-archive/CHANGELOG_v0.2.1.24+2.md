# Changelog: v0.2.1.24+2

**Release Date:** 2026-06-05 20:00:00 UTC  
**Version:** v0.2.1.24+2  
**Epic:** E2 (Workflow Management Framework)  
**Story:** S1 (RW Agent Execution and Docs)  
**Task:** T24 (RW BUILD increment and release-tag immutability — BR-097)  
**Build:** +2

---

## Summary

Change implemented: **`push_rw_release.py`** for RW Step 12 — push branch and release-scoped tags only. Forbids `git push origin {branch} --tags`, which bulk-pushed stale local SemVer tags and caused false push failures.

---

## Changes

### Step 12 scoped push (BR-097 follow-on)

- **`push_rw_release.py`** — push branch + primary/internal release tags only; skip tags already on remote at same commit; BR-097 message on collision
- **`test_push_rw_release.py`** — task-touch vs registry tag list tests
- **RW docs:** `.cursorrules`, `.claude/commands/rw.md`, `cursorrules-rw-trigger-section.md`, workflow cheatsheet — `--tags` forbidden; script documented

---

## Related

- [BR-097](../../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [IPP-E02S01T24](../implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md)
- Prior: [CHANGELOG_v0.2.1.24+1.md](CHANGELOG_v0.2.1.24+1.md)
