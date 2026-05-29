---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-074: RW release commit includes test artifacts, deletes prior-build changelog, and emits version-typo in detailed changelog

**Status:** RESOLVED ✅
**Priority:** HIGH
**Severity:** HIGH
**Created:** 2026-05-17
**Last updated:** 2026-05-17
**Version:** v0.2.1.21+1
**Code:** BR-074

**Implementing Task:** [E2:S01:T21](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074.md)

---

## Problem Statement

The Release Workflow (RW) for `v0.6.6.63+2` (E6:S06:T63 — RW Recovery Journal implementation) produced multiple integrity failures across artifact management, changelog archival, and release documentation. These are deterministic issues that will recur on every same-task follow-up release (BUILD > 1) unless the root causes are addressed.

---

## Issue 1: Test / Simulation Artifacts Committed to Version Control

### Observed Behavior
Commit `22e3e574c` (Release v0.6.6.63+2) includes three files under `docs/journals/` that are **test/simulation artifacts**, not operator documentation:

- `rw-19d02eb7-b146-4153-893e-ec27c6d957a0-2026-05-17T15-34-57Z.json`
- `rw-19d02eb7-b146-4153-893e-ec27c6d957a0-recovery.json`
- `rw-19d02eb7-b146-4153-893e-ec27c6d957a0-recovery.md`

The JSON journal shows `"status": "failed"` at Step 3 with `version_after: null`. This is the output of `test_rw_integration.py::_simulate_failed_run()`, not a real RW execution. Including a "failed" run artifact in a successful release commit is confusing and pollutes the `docs/journals/` operator-facing documentation tree.

### Root Cause
`docs/journals/` has no `.gitignore` exclusion for runtime `rw-*` artifact files. The integration test writes to the production journal directory (`packages/frameworks/workflow mgt/scripts/journal/` defaults to `docs/journals/`) and the RW Step 8 `git add -A` stages everything.

---

## Issue 2: Prior-Build Changelog Deleted, Breaking Archive Link

### Observed Behavior
`CHANGELOG_v0.6.6.63+1.md` — created in commit `27bbcd297` (2026-04-21, RW --art adoption release for E6:S06:T63) — was **deleted** in commit `22e3e574c`. The `CHANGELOG_ARCHIVE.md` still references it:

```markdown
## [0.6.6.63+1] - 21-04-26
...
[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+1.md)
```

This link is now **broken** (404 equivalent in the repository).

### Root Cause
RW Step 3 (`update_changelog.py` / `create_detailed_changelog.py`) appears to treat same-task BUILD increments as overwrite candidates rather than preserving prior BUILD changelogs. The archival policy (`changelog_archival.mode: latest_only` in `rw-config.yaml`) applies to the **main** `CHANGELOG.md` (keep only latest entry at top), not to the per-build detailed changelogs in `changelog-archive/`.

---

## Issue 3: Detailed Changelog Version Typo

### Observed Behavior
`docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+2.md` line 4 states:

```
**Internal Version:** 0.6.6.63+1
```

This is incorrect. The release is `+2`, not `+1`.

### Root Cause
Likely a copy-paste or template variable error in the detailed changelog generation script. The script may be reading the version file **before** bumping, or using a stale variable during BUILD > 1 releases.

---

## Impact

1. **Repository hygiene**: Test artifacts with `"status": "failed"` are permanently in version control, misleading operators who browse `docs/journals/`.
2. **Broken archival links**: `CHANGELOG_ARCHIVE.md` references a non-existent file, degrading trust in the changelog audit trail.
3. **Version confusion**: The `+2` detailed changelog advertises itself as `+1`, creating ambiguity for future forensic analysis.
4. **Recurrence risk**: All three issues will repeat on every same-task BUILD > 1 release until the underlying scripts are hardened.

---

## Expected Behavior

1. Runtime journal artifacts (`rw-*.json`, `rw-*-recovery.*`) are **never** committed to version control.
2. Each `CHANGELOG_v{version}.md` in `changelog-archive/` is **immutable** once created; subsequent BUILDs create new files rather than deleting old ones.
3. The `Internal Version` line in detailed changelogs matches the actual release version.
4. `CHANGELOG_ARCHIVE.md` links resolve to existing files.

---

## Actual Behavior

1. Test artifacts from `test_rw_integration.py` were committed in `22e3e574c`.
2. `CHANGELOG_v0.6.6.63+1.md` was deleted, leaving a dangling link in `CHANGELOG_ARCHIVE.md`.
3. `CHANGELOG_v0.6.6.63+2.md` declares `Internal Version: 0.6.6.63+1`.
4. `.gitignore` has no rule for `docs/journals/rw-*`.

---

## Steps to Reproduce

1. Run `pytest tests/journal/test_rw_integration.py` (writes artifacts to `docs/journals/`).
2. Run `RW E6:S06:T63 --art` (or any same-task BUILD > 1 release).
3. Observe that `git add -A` stages test artifacts.
4. Observe that prior BUILD's `CHANGELOG_v*.md` is deleted rather than preserved.
5. Observe that the new detailed changelog's `Internal Version` may reflect the prior BUILD.

---

## Environment

- **Branch:** `dev`
- **Commit:** `22e3e574c` (Release v0.6.6.63+2)
- **Prior commit:** `27bbcd297` (Release v0.6.6.63+1)
- **Affected files:**
  - `docs/journals/rw-*` (test artifacts)
  - `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+1.md` (deleted)
  - `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+2.md` (version typo)
  - `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md` (broken link)
  - `.gitignore` (missing rule)

---

## Acceptance Criteria (Fix Requirements)

- [ ] **AC1:** `.gitignore` updated to exclude `docs/journals/rw-*.json`, `docs/journals/rw-*-recovery.json`, and `docs/journals/rw-*-recovery.md`.
- [ ] **AC2:** Test artifact files from `22e3e574c` are removed from version control (git-rm) without deleting the operator docs (`README.md`, `JOURNAL_SCHEMA.md`, `RECOVERY_PROCEDURE.md`, `ROLLBACK_CONTRACT.md`).
- [ ] **AC3:** `CHANGELOG_v0.6.6.63+1.md` is restored from commit `27bbcd297` to `changelog-archive/`.
- [ ] **AC4:** `CHANGELOG_v0.6.6.63+2.md` is corrected to read `Internal Version: 0.6.6.63+2`.
- [ ] **AC5:** RW Step 3 / changelog generation script is hardened so that:
  - Prior BUILD changelogs are never deleted.
  - The `Internal Version` field uses the post-bump version, not the pre-bump version.
- [ ] **AC6:** `CHANGELOG_ARCHIVE.md` link integrity is validated (no dangling links) as part of RW Step 9 or UKW validation.

**Verification Method:**
- [ ] Test suite execution
- [ ] Manual inspection of commit contents
- [ ] Link validation script

---

## Fix Attempt History

### Fix Attempt 1: E2:S01:T21 implementation (2026-05-17)

**Status:** In progress.

**Actions taken:**
1. Added `.gitignore` exclusions for `docs/journals/rw-*.json`, `docs/journals/rw-*-recovery.json`, `docs/journals/rw-*-recovery.md`.
2. `git rm`-d three committed test artifact files from `docs/journals/`.
3. Restored `CHANGELOG_v0.6.6.63+1.md` from commit `27bbcd297`.
4. Patched `CHANGELOG_v0.6.6.63+2.md` line 4: `Internal Version: 0.6.6.63+1` → `0.6.6.63+2`.
5. Added `docs/journals/README.md` subsection warning operators not to commit runtime `rw-*` artifacts.
6. Created `validate_changelog_archive_links.py` — parses `CHANGELOG_ARCHIVE.md` for relative markdown links, validates resolution with dual-resolution logic (archive-parent relative, then project-root relative), reports dangling links with line numbers. Non-blocking by default; `--strict` for blocking.
7. Hardened RW Step 3 in `.claude/commands/rw.md`, `.cursorrules`, `cursorrules-rw-trigger-section.md`, and `release-workflow-agent-execution.md` with two explicit guards: (a) never overwrite/delete existing `CHANGELOG_v{version}.md`; (b) use post-bump version for `Internal Version` header.
8. Hardened RW Step 9/10 validator lists across all four governance docs to include `validate_changelog_archive_links.py`.
9. Updated `rw-trigger-dual-source-parity.md` checklist and delta log for BR-074 parity pass.

**Remaining work:**
- RW release commit for E2:S01:T21 to persist all changes.

---

## Dependencies

**Blocks:**
- Future same-task BUILD > 1 releases (risk of recurring artifact pollution and changelog deletion).

**Blocked By:**
- None

**Related Work:**
- [E6:S06:T63](../epics/Epic-6/Story-006-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038.md) — The release that exposed these issues.
- [BR-038](BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md) — Parent BR where recovery journal scope was defined.
- [FR-042](FR-042-implementation-planning-workflow-ipw.md) — IPW process that planned T63.

---

## Notes

This BR bundles three distinct surface symptoms that share a common theme: **RW BUILD > 1 releases lack hardening around artifact boundaries and changelog immutability**. The fix may be delivered as a single task or split into sub-tasks depending on implementation complexity.

The test artifact in question (`rw-19d02eb7...`) is from `tests/journal/test_rw_integration.py::_simulate_failed_run()`, which calls `RWJournal(task_id="E6:S06:T63")` and writes to the default `JOURNAL_DIR` (`docs/journals/`). The test should either:
- Use a temporary directory for journal output, or
- The directory should be gitignored.

Both mitigations (test isolation + gitignore) are recommended for defense in depth.

---

## References

- Commit `22e3e574c` — Release v0.6.6.63+2 (contains test artifacts, deletes +1 changelog)
- Commit `27bbcd297` — Release v0.6.6.63+1 (contains the deleted changelog)
- [CHANGELOG_ARCHIVE.md](../changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md) — Contains broken link to +1 changelog
- [CHANGELOG_v0.6.6.63+2.md](../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+2.md) — Contains version typo
- `tests/journal/test_rw_integration.py` — Source of committed test artifacts
- `.gitignore` — Missing journal artifact exclusion

---

_This bug report is part of the AI Dev Kit Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
