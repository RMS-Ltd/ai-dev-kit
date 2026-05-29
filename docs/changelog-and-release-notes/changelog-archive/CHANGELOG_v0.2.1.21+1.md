# Changelog: v0.2.1.21+1

**Release Date:** 2026-05-17 16:15:00 UTC
**Version:** 0.2.1.21+1
**SemVer:** 0.4.788+1
**Epic:** E2 — Workflow Management Framework
**Story:** S01 — RW Agent Execution & Docs
**Task:** T21 — RW release artifact hygiene, changelog immutability, version-typo fix (BR-074)
**Branch:** dev
**Trigger:** RW E2:S01:T21 --art

---

## Summary

Fixes three deterministic integrity failures discovered during the `v0.6.6.63+2` release of E6:S06:T63 (RW Recovery Journal):

1. **Test artifacts committed to version control** — `test_rw_integration.py` simulation outputs were staged by `git add -A` and committed.
2. **Prior-build detailed changelog deleted** — `CHANGELOG_v0.6.6.63+1.md` was removed, breaking a link in `CHANGELOG_ARCHIVE.md`.
3. **Version typo in detailed changelog** — `CHANGELOG_v0.6.6.63+2.md` declared `Internal Version: 0.6.6.63+1` instead of `+2`.

All three defects are eliminated by hardening artifact boundaries (`.gitignore`), restoring deleted archival content, correcting the version typo, and adding deterministic guards to RW Step 3 agent instructions so same-task BUILD > 1 releases are safe by design. A new lightweight link-integrity validator is wired into RW Step 9.

---

## Changes

### Added

- **`.gitignore`** — Exclusions for runtime journal artifacts:
  - `docs/journals/rw-*.json`
  - `docs/journals/rw-*-recovery.json`
  - `docs/journals/rw-*-recovery.md`

- **`docs/journals/README.md`** — New "Committing Journals" subsection warning operators that runtime `rw-*` artifacts must never be committed, and that `.gitignore` exclusions are in place.

- **`packages/frameworks/workflow mgt/scripts/validation/validate_changelog_archive_links.py`** — New lightweight validator that parses `CHANGELOG_ARCHIVE.md` for relative markdown links, resolves each path (archive-parent relative, then project-root relative), and reports dangling links with line numbers. Exit 0 = all links resolve; exit 1 = dangling links found. Non-blocking by default; `--strict` for blocking behavior.

- **`docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+1.md`** — Restored from commit `27bbcd297` (deleted in `22e3e574c`).

### Updated

- **`docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+2.md`** — Line 4 corrected: `Internal Version: 0.6.6.63+1` → `0.6.6.63+2`.

- **`.claude/commands/rw.md`** — Step 3 hardened with two BR-074 guards: (a) never overwrite or delete an existing `CHANGELOG_v{version}.md` in `changelog-archive/`; (b) use the post-bump version for the `Internal Version` header. Step 9 validator list expanded to include `validate_changelog_archive_links.py` (non-blocking).

- **`.cursorrules`** — RW trigger section synchronized: Step 3 changelog immutability guard noted; Step 9 validator list expanded to include `validate_changelog_archive_links.py` (non-blocking, BR-074).

- **`packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`** — Portable excerpt synchronized with `.cursorrules` BR-074 updates (Step 3 guard, Step 9 validator).

- **`packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`** — Canonical step guide Step 3 EXECUTE and VALIDATE sections include BR-074 immutability guards; Step 10 EXECUTE includes `validate_changelog_archive_links.py` invocation.

- **`packages/frameworks/workflow mgt/docs/rw-trigger-dual-source-parity.md`** — Parity checklist updated with BR-074 item; delta log appended with 2026-05-17 parity pass entry.

- **`docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md`** — Status updated to IN PROGRESS; Fix Attempt 1 history added with full action list.

- **`docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074.md`** — Status updated to IN PROGRESS; all 8 ACs checked off; completion summary added.

### Removed

- **`docs/journals/rw-19d02eb7-b146-4153-893e-ec27c6d957a0-*.json`** — `git rm`-d three committed test/simulation artifacts.
- **`docs/journals/rw-19d02eb7-b146-4153-893e-ec27c6d957a0-recovery.json`**
- **`docs/journals/rw-19d02eb7-b146-4153-893e-ec27c6d957a0-recovery.md`**

---

## Acceptance Criteria

- [x] **AC1:** `.gitignore` excludes runtime journal artifacts (`rw-*.json`, `rw-*-recovery.json`, `rw-*-recovery.md`).
- [x] **AC2:** Test artifacts from commit `22e3e574c` removed from version control without touching operator docs.
- [x] **AC3:** `CHANGELOG_v0.6.6.63+1.md` restored from commit `27bbcd297`.
- [x] **AC4:** `CHANGELOG_v0.6.6.63+2.md` `Internal Version` field reads `0.6.6.63+2`.
- [x] **AC5:** RW Step 3 hardened with "never overwrite/delete existing archive changelog" guard across all governance docs.
- [x] **AC6:** RW Step 3 hardened with "use post-bump version for `Internal Version` header" guard across all governance docs.
- [x] **AC7:** `validate_changelog_archive_links.py` created and wired into RW Step 9 as non-blocking check.
- [x] **AC8:** `test_rw_integration.py` already uses `tmp_path` for journal output (test isolation verified).

---

## Related

- [BR-074](../../../../../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md) — Parent bug report
- [E6:S06:T63](../../../../Epic-6/Story-006-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038.md) — Release that exposed these defects
- [E2:S01:T18](../../../../Epic-2/Story-001-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md) — Coordinates with BR-070 stage-completeness guardrails
