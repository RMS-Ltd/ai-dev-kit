---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S01:T21 — RW Release Commits Test Artifacts, Deletes Prior-Build Changelog, Emits Version Typo (BR-074)

**Status:** COMPLETE ✅ COMPLETE (v0.2.1.21+1)
**Priority:** HIGH
**Last updated:** 2026-05-17
**Version:** v0.2.1.21+1
**Code:** E2S01T21

---

## Task ID

**Task ID:** E2:S01:T21

---

## Scope

Fix three deterministic integrity failures discovered during the `v0.6.6.63+2` release of E6:S06:T63:

1. **Test artifacts committed to version control.** `test_rw_integration.py` writes simulation journal artifacts to `docs/journals/` (the production docs tree). RW Step 8 (`git add -A`) stages and commits them, polluting the operator-facing documentation directory with files showing `"status": "failed"`.

2. **Prior-build detailed changelog deleted.** `CHANGELOG_v0.6.6.63+1.md` (created in the prior `--art` adoption release) was deleted by RW Step 3, leaving a dangling link in `CHANGELOG_ARCHIVE.md`.

3. **Version typo in detailed changelog.** `CHANGELOG_v0.6.6.63+2.md` declares `Internal Version: 0.6.6.63+1` instead of `+2`, indicating the changelog script reads the version file pre-bump rather than post-bump.

All three defects will recur on every same-task BUILD > 1 release until the underlying scripts and configuration are hardened.

---

## Input

- [BR-074](../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md) — Bug report with full forensic analysis.
- Commit `22e3e574c` — Release v0.6.6.63+2 (contains all three defects).
- Commit `27bbcd297` — Release v0.6.6.63+1 (contains the deleted changelog to restore).
- `rw-config.yaml` — Contains `changelog_archival.mode: latest_only` (applies to main `CHANGELOG.md`, not per-build archive files).
- `tests/journal/test_rw_integration.py` — Source of committed test artifacts.
- `.gitignore` — Missing exclusion rules for runtime journal artifacts.

---

## Deliverable

- `.gitignore` updated with `docs/journals/rw-*` exclusions.
- Committed test artifacts removed from version control (git-rm).
- `CHANGELOG_v0.6.6.63+1.md` restored from `27bbcd297`.
- `CHANGELOG_v0.6.6.63+2.md` corrected to `Internal Version: 0.6.6.63+2`.
- RW Step 3 / changelog generation script hardened against:
  - Deleting prior-build archive changelogs.
  - Using pre-bump version in detailed changelog headers.
- `CHANGELOG_ARCHIVE.md` link integrity validated as part of RW Step 9 or UKW validation.

---

## Acceptance Criteria

- [x] **AC1:** `.gitignore` excludes `docs/journals/rw-*.json`, `docs/journals/rw-*-recovery.json`, and `docs/journals/rw-*-recovery.md`.
- [x] **AC2:** Test artifacts from commit `22e3e574c` are `git rm`-d without touching operator docs (`README.md`, `JOURNAL_SCHEMA.md`, `RECOVERY_PROCEDURE.md`, `ROLLBACK_CONTRACT.md`).
- [x] **AC3:** `CHANGELOG_v0.6.6.63+1.md` is restored to `changelog-archive/` from commit `27bbcd297`.
- [x] **AC4:** `CHANGELOG_v0.6.6.63+2.md` `Internal Version` field reads `0.6.6.63+2`.
- [x] **AC5:** RW Step 3 hardened in `.claude/commands/rw.md`, `.cursorrules`, and `release-workflow-agent-execution.md` with explicit "never overwrite or delete existing `CHANGELOG_v{version}.md`" guard.
- [x] **AC6:** RW Step 3 hardened with explicit "use post-bump version for `Internal Version` header" guard across all three governance docs.
- [x] **AC7:** `validate_changelog_archive_links.py` created and wired into RW Step 9 as non-blocking check.
- [x] **AC8:** `test_rw_integration.py` already passes `journal_dir=tmp_path / "journals"` to `RWJournal` (defense-in-depth; `.gitignore` added as secondary guard).

---

## Approach

1. **Immediate fix (repo hygiene):**
   - Add `.gitignore` exclusions for runtime journal artifacts.
   - `git rm` the three committed artifact files.
   - Restore `CHANGELOG_v0.6.6.63+1.md` from `27bbcd297`.
   - Patch `CHANGELOG_v0.6.6.63+2.md` with correct internal version.

2. **Script hardening (RW Step 3):**
   - Audit `create_detailed_changelog.py` (or equivalent) to confirm it only creates files, never deletes existing archive entries.
   - Fix version variable binding so the post-bump version is used in the detailed changelog header.

3. **Test isolation:**
   - Update `test_rw_integration.py` to pass a temporary `journal_dir` to `RWJournal(...)` rather than relying on the default `docs/journals/`.

4. **Validation automation:**
   - Add a lightweight link-integrity validator (can be a small Python script) that checks all `CHANGELOG_ARCHIVE.md` relative links resolve to actual files.
   - Wire it into RW Step 9 or UKW Step 7 as a non-blocking warning.

---

## Dependencies

**Depends On:**
- None (self-contained fix).

**Blocks:**
- Future same-task BUILD > 1 releases (prevents recurrence of all three defects).

**Blocked By:**
- None.

**Parallel Development Candidacy:** Safe — all changes are localized to `.gitignore`, artifact removal, changelog restoration/correction, test isolation, and script hardening.

---

## Cross-Wiring

**Related Tasks:**

- **[E6:S06:T63: RW Recovery Journal and Rollback Contract](../Epic-6/Story-006-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038.md)** — **Relationship Type:** Informs — **Context:** T63's integration test produced the committed artifacts; T63's RW run exposed the changelog and version-typo defects.
- **[E2:S01:T18: RW Step 8 Stage Completeness Guardrails](../Epic-2/Story-001-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md)** — **Relationship Type:** Coordinates With — **Context:** T18 added stage-file completeness guardrails; BR-074 extends that work by identifying artifact-boundary gaps in what `git add -A` stages.

**Related BR/FR Documents:**

- **[BR-074: RW release commits test artifacts and changelog integrity failures](../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md)** — **Relationship Type:** Informs — **Context:** BR-074 is the originating bug report with full forensic analysis.

---

## Related Work

**Related BR/FR Links:**
- [BR-074: RW release commits test artifacts and changelog integrity failures](../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md) — *Bidirectional: BR-074 links back to this task in its Implementing Task section.*

**Related Tasks:**
- [E6:S06:T63: RW Recovery Journal and Rollback Contract](../Epic-6/Story-006-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038.md) — *Bidirectional: T63's task doc references BR-038 which spawned the recovery-journal scope where these defects surfaced.*

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

**Target Version:** `v0.2.1.21+X` (where X = BUILD on this task)

---

## Notes

- The `CHANGELOG_ARCHIVE.md` link to `CHANGELOG_v0.6.6.63+1.md` is currently broken (404 in the repo). Restoring the file satisfies AC3 and partially satisfies AC7.
- The version typo (`0.6.6.63+1` in the `+2` changelog) may affect other same-task BUILD > 1 releases if the same script logic was reused elsewhere. A quick audit of other `CHANGELOG_v*.md` files in `changelog-archive/` is recommended.
- `.gitignore` changes should be committed via RW (not direct `git commit`) per project policy, but since this is a BR fix, any RW-authorized commit is acceptable.

---

## Completion Summary

Phase A (repo hygiene): `.gitignore` exclusions added; test artifacts `git rm`-d; +1 changelog restored from `27bbcd297`; +2 changelog version typo patched.

Phase B (governance docs): Step 3 immutability guards and post-bump version requirement added to `.claude/commands/rw.md`, `.cursorrules`, `cursorrules-rw-trigger-section.md`, and `release-workflow-agent-execution.md`. Step 9/10 validator invocation updated to include `validate_changelog_archive_links.py`. Dual-source parity checklist and delta log updated.

Phase C (validation automation): `validate_changelog_archive_links.py` created with dual-resolution logic (archive-parent relative, then project-root relative). Exits 0 on success, 1 with line-numbered dangling link report when `--strict`.

---

## References

- [BR-074](../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md)
- Commit `22e3e574c` — Release v0.6.6.63+2 (defective commit)
- Commit `27bbcd297` — Release v0.6.6.63+1 (source of deleted changelog)
- `docs/journals/` — Operator documentation tree polluted by test artifacts
- `tests/journal/test_rw_integration.py` — Source of artifacts
- `.gitignore` — Missing exclusion rules
- `CHANGELOG_ARCHIVE.md` — Broken link to +1 changelog
- `CHANGELOG_v0.6.6.63+2.md` — Version typo

---

## Next Actions

- [ ] Create IPW plan if implementation complexity warrants formal planning.
- [ ] Add `.gitignore` exclusions.
- [ ] Remove committed artifacts.
- [ ] Restore deleted +1 changelog.
- [ ] Patch +2 changelog version typo.
- [ ] Harden RW Step 3 changelog script.
- [ ] Isolate test journal directory.
- [ ] Add link-integrity validator.
