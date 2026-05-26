# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog** ([`https://github.com/olivierlacan/keep-a-changelog`](https://github.com/olivierlacan/keep-a-changelog))  
and this project adheres to the **`RC.EPIC.STORY.TASK+BUILD`** versioning scheme described in the dev-kit versioning policy.

**Historical entries:** Per [`changelog-archival-policy`](docs/architecture/standards-and-adrs/changelog-archival-policy.md) (`changelog_archival.mode: latest_only` in `rw-config.yaml`), this file keeps only the latest release. Full history lives in [`CHANGELOG_ARCHIVE.md`](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md) and `CHANGELOG_v*.md` under `docs/changelog-and-release-notes/changelog-archive/`.

---

## [0.2.16.4+11] - 26-05-26

E2:S16:T04 (`--art`, UKW follow-up) — **Comprehensive kanban sync**: kboard/fbu headers, archived E6:S09:T04/T05, Story 009 T02/T03 drift fix; semver-registry aligned through patch **803**. SemVer **v0.4.803+11**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.4+11.md)

---

## [0.2.16.12+1] - 26-05-26

E2:S16:T12 (`RW -k`, `--art`) — **FR-100 intake**: IPW ADR necessity checklist and measurable decision gate; FR + task + story/board wiring (kanban documentation setup). SemVer **v0.4.798+1**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.12+1.md)

---

## [0.6.9.5+1] - 26-05-26

E6:S09:T05 (`--art`) — **FR-098 intermediate doc release**: SemVer strategy encoded (PATCH per ECC phase; MINOR at Epic 6 sign-off only). SemVer **v0.4.797+1** (PATCH +1; MINOR unchanged).

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.9.5+1.md)

---

## [0.1.4.3+1] - 26-05-26

E1:S04:T03 (`--art`) — **FR-099 Phase 2 book extraction genesis**: removed `docs/book-proj/` and Epic 24 from public-bound tree; ADR-006 Option C; E1:S04:T02 superseded; `book/epic-24` branch preserves manuscript work on private `RMS-Ltd/hf-ai-dev-kit`. SemVer **v0.4.796+1**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.4.3+1.md)

---

## [0.4.13.7+2] - 20-05-26

E4:S13:T07 — **MoSCOW COMPLETE transition with Set A icons**: `rewrite_todo_or_in_progress_to_complete_in_line()` + alternation grouping fix so `update_kanban_docs.update_moscow_task` matches ` - 🔄 IN PROGRESS ` rows; tests extended. SemVer **v0.4.796+2**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.13.7+2.md)

---

## [0.4.13.7+1] - 20-05-26

E4:S13:T07 — **MoSCOW state icons (UXR-012, `--art`)**: Set A emoji on all active board rows; `state_icons.py` + backfill + **`validate_kanban_state_icons.py`**; Release Readiness **Gate 9**; UKW/RW pipeline integration; operator KB `state-icons.md`. SemVer **v0.4.796+1**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.13.7+1.md)

---

## [0.2.15.8+2] - 20-05-26

E2:S15:T08 — **`RW --art` adoption (BUILD +2)**: Reconcile FR-097 / IPP AC checkboxes post primary FR-097 delivery (**v0.2.15.8+1**). SemVer **v0.4.796+2**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.15.8+2.md)

---

## [0.2.15.8+1] - 20-05-26

E2:S15:T08 — **Board Stamp Authority (FR-097, `--art`)**: Blocking `validate_board_stamp_diff.py`; automatic backfill of homogenized row stamps (71 rows); UKW/RW pipeline `non_substantive`; Gate 8 homogeneity; BR-069 / UXR-009 re-closed. SemVer **v0.4.796+1**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.15.8+1.md)

---

## [0.2.16.4+10] - 20-05-26

E2:S16:T04 — **UKW kanban sync (perpetual, `--art`)**: Post-T11 board reconciliation; **FR-096** → `fbu-completed`; pruned terminal **fbuboard** rows (BR-038, BR-069, UXR-009, UXR-011); Story-016 tactical overview; kboard/fbu headers **v0.2.16.4+10**.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.4+10.md)

---

## [0.2.16.11+1] - 20-05-26

E2:S16:T11 — **IPW Phases 5–6 (FR-096, `--art`)**: Mandatory documentation update/create and housing phases after impl planning; IPP **§5–§7**; ten-phase `/ipw`; aligned **FR-042**, template, execution guide, **AGENTS.md**, **`.cursorrules`**, artifact policy. New **FR-096** + task doc.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.11+1.md)

---

## [0.2.16.3+6] - 20-05-26

E2:S16:T03 — **IPP vs ICW governance alignment (docs-only, `--art`)**: Added [`dev-kit-ipw-ipp-vs-icw-artifacts.md`](docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md). Updated **AGENTS.md** Global Implementation Gate, **specification-and-planning-artifacts-policy**, **FR-042** §8, **`.cursorrules`**, framework **`agents/ipw/AGENTS.md`**, **IPP-E2S16T03** / **T03** references, **Story-016** metadata, **kboard** (header + **E2:S16:T03** perpetual row), **README** SemVer, **`semver-registry.yaml`** `task_touch_counter` 791→792.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.3+6.md)

---

## [0.2.16.3+5] - 20-05-26

E2:S16:T03 — **IPW E2:S16:T03 AC closure: Wave 2/3 verification evidence, test fixture fixes, legacy draft archive**: Fixed four test fixture bugs in `test_validate_version_bump.py` (canonical Task ID assertion, `T101`/`T103` mock filename alignment for `locate_task_doc`, `--art` story path). Updated T03 task doc with Verification Evidence section and AC1–AC5 closure markers (AC4 PARTIAL, blocked on T02 inventory). Added deprecation banner to legacy `IPW-E6S07T103`. Updated Story-016 checklist and `kboard.md`. Created `IPP-E2S16T03` implementation plan. All 14 perpetual guardrail tests pass; validator `--strict --art` exits 0. Adopted via `--art` from T10.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.3+5.md)

---

## [0.2.16.10+2] - 19-05-26

E2:S16:T10 — **SemVer registry sync and BUILD increment**: Synchronized `semver-registry.yaml` with mapping history from v0.2.16.10+1 release. Updated `task_touch_counter` 788→789. No code changes — pure registry bookkeeping.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.10+2.md)

---

## [0.2.16.10+1] - 19-05-26

E2:S16:T10 — **FR-095 implementation: auto-detect GitHub remote in `create_github_release.py`**. Replaced hardcoded `--repo` default `earlution/ai-dev-kit` with dynamic detection from `git remote get-url origin`. Supports HTTPS and SSH remote URL formats; silent fallback to hardcoded default if detection fails. `--repo` CLI argument still overrides. Also added `AI_DEV_KIT_PAT` env-var fallback. FR-095 status updated to COMPLETE.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.10+1.md)

---

## [0.2.16.10+0] - 19-05-26

E2:S16:T10 — **Ad-hoc Repository Infrastructure Maintenance (perpetual) — Inaugural release**: Created perpetual task T10 for ad-hoc repo tooling patches. Added `AI_DEV_KIT_PAT` env-var fallback to `create_github_release.py`. Wired T10 into Story 016 and `kboard.md`. `--art` adoption from T04; BUILD reset to 0.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.10+0.md)

---

## [0.2.16.4+9] - 19-05-26

E2:S16:T04 — **UKW comprehensive kanban reconciliation (perpetual)**: Closed BR-069 and UXR-009 via FR-092 v0.2.15.7+9 meta-program delivery (Wave 4-8 corpus sweep + forensic stamp gate). Archived E9:S05:T04 from active board. Marked E6:S07:T115 COMPLETE via meta-program absorption. Updated board metadata and E2:S16:T04 perpetual row. BUILD-only increment (UKW context). BUILD 9.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.4+9.md)

---

## [0.2.15.7+9] - 19-05-26

E2:S15:T07 — **`--art` adoption: Canonical version anchor reset to FR-092 meta**: Reset release anchor from perpetual task E2:S16:T04 to E2:S15:T07 (Canonical RW/UKW kanban consistency program). BUILD 9. No code changes — pure bookkeeping alignment.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.15.7+9.md)

---

## [0.2.16.4+8] - 18-05-26

E2:S16:T04 — **Kanban board synchronization and hygiene (perpetual)**: Aligned four FBU item statuses on `fbuboard.md` with their implementing task states on `kboard.md` — FR-087, FR-081, FR-082, FR-011 all updated from `OPEN`/`TODO` to `IN PROGRESS`. Committed previously uncommitted `semver-registry.yaml` update from v0.9.5.4+2 finalize. (BUILD set to +8 after discovering pre-existing tags through +7.)

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.4+8.md)

---

## [0.9.5.4+2] - 18-05-26

E9:S05:T04 — **UXR-011 Kanban naming hygiene and directory systematic cleanup (completed)**: Committed all 105 file changes prepared in v0.9.5.4+1. Renamed 51 Txxx → Txx files using `git mv`, deleted 18 duplicate/orphaned files using `git rm`, updated 34+ markdown files with corrected internal links, amended kanban governance policy with explicit Txx/Story-NNN naming convention, and created regression validator (`validate_kanban_naming.py`). Zero defects post-cleanup; all 10 acceptance criteria satisfied.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.9.5.4+2.md)

---

## [0.9.5.4+1] - 18-05-26

E9:S05:T04 — **UXR-011 Kanban naming hygiene and directory systematic cleanup**: Filed comprehensive UXR documenting systematic naming inconsistencies across `docs/project-management/kanban/` — 51 stale Txxx (3-digit) task files mixed among 185 Txx (2-digit), duplicate story files under same epic, duplicate task files with identical content, orphaned directories, and missing zero-padding. Created implementing task E9:S05:T04 under Epic-9 (canonical for E/S/T review). Updated fbuboard, kboard, Epic-9, and Story-005 with bidirectional wiring.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.9.5.4+1.md)

---

## [0.2.1.21+1] - 17-05-26

E2:S01:T21 — **RW release artifact hygiene, changelog immutability, version-typo fix (BR-074)**: Fixed three deterministic integrity failures from the `v0.6.6.63+2` release — test artifacts committed to `docs/journals/`, prior-build changelog `CHANGELOG_v0.6.6.63+1.md` deleted, and version typo (`+1` instead of `+2`) in `CHANGELOG_v0.6.6.63+2.md`. Added `.gitignore` exclusions for runtime journal artifacts, restored deleted changelog, corrected typo. Hardened RW Step 3 with immutability guards (never overwrite/delete existing archive changelogs; use post-bump version in header) across `.claude/commands/rw.md`, `.cursorrules`, and canonical step guide. Created `validate_changelog_archive_links.py` and wired it into RW Step 9 as non-blocking check. Updated dual-source parity docs.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.1.21+1.md)

---

## [0.6.6.63+2] - 17-05-26

E6:S06:T63 — **RW Recovery Journal and Rollback Contract (BR-038)**: Implemented deterministic per-run journaling (`RWJournal`), structured recovery reporting (`RecoveryReport` → Markdown + JSON), and rollback/compensation contract (`RollbackContract`) with safety guardrails. Added operator-facing documentation (`docs/journals/` README, schema reference, recovery procedure, rollback contract). Comprehensive test coverage: 28 journal tests (all passing) + 25 regression tests (all passing). Fixed pre-existing `test_integration.py` `MockBackend` initialization bug. BR-038 R4/R5/R6 marked resolved.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+2.md)

---

## [0.6.1.38+3] - 17-05-26

E6:S01:T38 — **BR-072 REOPENED — UKW inline task drift**: E2:S07:T01 and E2:S07:T05 found showing as TODO on kboard despite COMPLETE inline status in story doc. Root cause: UKW Step 3 only processes standalone task documents, leaving embedded inline tasks invisible to board sync. BR-072 reopened with AC7 added. Kboard and fbuboard updated.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.1.38+3.md)

---

## [0.2.16.4+7] - 16-05-26

E2:S16:T04 — **UKW stale-task purge**: Archived 7 completed tasks from `kboard.md` MoSCOW sections to `kanban-completed.md`: E4:S07:T01 (v0.4.7.1+1), E4:S07:T02 (v0.4.7.2+1), E4:S09:T01, E4:S09:T05, E4:S09:T06, E4:S10:T01 (v0.4.10.1+0), E5:S01:T56 (v0.5.1.56+1). All verified COMPLETE in story docs. Active kboard rows reduced from 29 to 22. Epic-4 last updated synchronized.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.4+7.md)

---

## [0.2.15.1+2] - 16-05-26

E2:S15:T01 — **FR-042 IPW Step 5 Documentation Deliverables**: Added "Identify Required Documentation" as Step 5 in the IPW sequence. Documentation scope (user docs, API docs, runbooks, Docusaurus, READMEs) is now derived from requirements, spec, tests, and planned implementation before the plan doc is written. Plan doc template updated to include documentation deliverables in the Implementation Plan section.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.15.1+2.md)

---

## [0.5.1.56+1] - 15-05-26

E5:S01:T56 — **FR-056 Standardize Packaged Workflow Documentation and Instructions**: Fixed `validate-workflow-docs.py` section-extraction bug (plain-text headings falsely reported missing, invisible U+FE0F character from gear emoji). Created `release-workflow/README.md` from canonical template (17 steps, triggers `RW`/`RW -k`/`RW -d`). Repaired 18+ broken internal links across 9 workflow READMEs. Brought `implementation-cycle-workflow/README.md` into full template compliance. All 11 packaged workflow READMEs now pass structural validation with 0 errors and 0 warnings. Updated FR-056, task doc, and kboard to reflect 11-workflow reality.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.1.56+1.md)

---

## [0.5.1.35+1] - 15-05-26

E5:S01:T35 — **FR-035 task template cross-wiring section**: Enhanced `TASK_TEMPLATE.md` with explicit `## Cross-Wiring` section (bidirectional wiring callout, 6 relationship types with definitions, context guidance, Dependencies vs Cross-Wiring distinction table, 3 examples). Enhanced `## Related Work` section with bidirectional wiring reminder and SoP references. All 10 ACs closed. Structural validation (8 checks) passed. IPW plan created and bidirectionally wired to task doc (FR-042).

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.1.35+1.md)

---

## [0.2.16.4+6] - 15-05-26

E2:S16:T04 — **UKW comprehensive kanban reconciliation**: Updated Epic-5 and Epic-2 last-modified dates. Synchronized Story-001-fr-repo (E5:S01) checklist — T35 ✅ COMPLETE, T56 ✅ COMPLETE. Synchronized Story-001-rw-agent-execution-and-docs (E2:S01) checklist — T18 ✅ COMPLETE, T20 ✅ COMPLETE. fbuboard Step 6.5 reconciliation pruned 4 terminal-status rows: FR-088 (CLOSED), FR-035 (COMPLETE), FR-056 (COMPLETE), FR-073 (CLOSED). Board Last Updated → 2026-05-15. (SemVer patch incremented to 784 to resolve BR-073 tag collision with E5:S01:T56.)

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.4+6.md)

---

## [0.2.6.1+2] - 15-05-26

E2:S06:T01 — **FR-008 Package Uninstall Capabilities (Re-implementation)**: Fixed broken CLI `remove` command (`select_backend` parameter mismatch, backend instantiation bug causing `TypeError`). Added `uninstall` alias to `cli/main.py`. Implemented `_check_dependencies()` (reverse-dependency validation) and `_create_backup()` (timestamped backup with framework files + config copy). Added 27 tests across `tests/cli/test_remove_command.py` (10 tests), `tests/test_backends.py` (4 new remove tests), and `tests/test_uninstall_package.py` (3 tests). All FR-008 AC-1..AC-5 and NFR-1..NFR-5 verified. Kanban board, story doc, and FR-008 checkboxes reconciled.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.6.1+2.md)

---

## [0.2.1.20+1] - 15-05-26

E2:S01:T20 — **BR-073 SemVer task-touch collision retrospective fix**: Patched `semver-registry.yaml` to add retroactive mappings for `0.24.1.6+1` → `0.4.778+1` (first claimant) and `0.2.1.18+1` → `0.4.779+1` (corrected). Incremented `task_touch_counter` from 777 to 779. Filed BR-073 with root cause (`finalize=True` bypassed during manual tag creation), impact analysis, reproduction steps, and 6 ACs (AC1–AC3 closed; AC4–AC6 deferred for follow-up). Created and completed E2:S01:T20 task document with forensic marker. Updated README version line. Updated `kanban-completed.md` and `kboard.md` with T20 archive entry.

[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.1.20+1.md)

---
