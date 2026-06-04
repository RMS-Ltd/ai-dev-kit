---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 16: RW install lowercase fresh kanban patterns & sign-off (BR-086)

**Task ID:** E06:S09:T16  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-04  
**Last updated:** 2026-06-04 23:09:08 UTC (✅ COMPLETE — **v0.6.9.16+3** RW `--art`; [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17) closed; UKW `-c` archived)  
**Completed:** 2026-06-04  
**Version:** v0.6.9.16+3  
**Code:** E06S09T16

**Upstream:** [BR-086](../../../fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)  
**Related:** [BR-083](../../../fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) · [BR-084](../../../fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md) · [BR-085](../../../fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md) · [UXR-017](../../../fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md) · [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15) · [#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16) · [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17)

---

## Input

- [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md) — IPW planning package (2026-06-04)
- [BR-086](../../../fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)
- GitHub issue [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17) (2026-06-04 book dry-run on `main`)
- Follow-up comments on [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15) / [#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16) (lowercase path regression)
- `install_release_workflow.py` — mode C prompts, `strict_zero_match`, `generate_rw_config_yaml`
- `github-issue-install-signoff-contract.yaml` — BR-083 `epic-{epic:02d}` check vs unpadded on-disk names

---

## Scope

1. **Layout detection (lowercase fresh):** Pre-fill `epics/epic-{epic}/epic-{epic}.md` when globs confirm; stop defaulting padded `{epic:02d}` when unpadded files exist.
2. **Forward-looking story pattern:** Allow persisting `story-{story:03d}-*.md` (or book-equivalent) with epic-only tree; align Enter-default with documented T03 Step 4.1 target.
3. **Task pattern generation:** Emit lowercase `t{task:02d}` path without erroneous `*/` + capital `T` glob.
4. **Sign-off contract:** Align BR-083 checks with on-disk unpadded `epic-N` or single padding policy doc (coordinate **E04:S19:T11** / UXR-017).
5. **Adopter UX:** Prompt hints for `:02d` vs `:03d` (or canonical policy pointer).

**Out of scope:** Re-opening capital-case verification for #15/#16 (already **RESOLVED** on `Epic-*` path).

---

## Deliverables

- [x] `install_release_workflow.py` — filesystem unpadded epic detection; book `03d`/`t{task}` defaults; forward-looking story accept; padding hints
- [x] `kanban_paths.py` — `BOOK_STORY_PATTERN` / `BOOK_TASK_PATTERN` in fresh pattern tuples
- [x] `github-issue-install-signoff-contract.yaml` — BR-083 `*_contains_any` alternates; BR-086 entry; BR-084 accepts `t{task` or `T{task`
- [x] `install_github_issue_signoff.py` — `*_contains_any` check support
- [x] Tests — `test_install_release_workflow_patterns.py`, `test_install_release_workflow_rw_config.py` (20 passed locally)
- [x] `INSTALL_IN_YOUR_PROJECT.md` — lowercase book T03 post-kanban snippet
- [x] Kit sign-off contract + tests shipped (**v0.6.9.16+2**)
- [x] Adopter replay on updated submodule + close GitHub #17 — **#17 CLOSED** 2026-06-04

---

## Acceptance Criteria

- [x] BR-086 AC satisfied on fresh lowercase kanban replay (ExpensesTracker @ `v0.4.885+2` / sign-off cluster)
- [x] `install_github_issue_signoff.py` reports `[READY] BR-084` for book `t{task:02d}` pattern (contract `task_doc_pattern_contains_any`)
- [x] `install_github_issue_signoff.py` reports `[READY] BR-083` when epic pattern matches unpadded on-disk names — verified via #17 close
- [x] GitHub #17 closed after verification comment (**2026-06-04**)
- [x] IPW package linked before implementation — [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md)

---

## Version Anchor

✅ COMPLETE (v0.6.9.16+3 — #17 closed; UKW `-c` archived 2026-06-04)

---

## Planning

**IPP:** [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md) — **Approved** (2026-06-04)

**Implementation (2026-06-04):** Code complete per [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md) §4 — unpadded `epic-N` dirs detected by name (not glob); capital `Epic-*` path unchanged.

**Sign-off follow-up (2026-06-04, #17 comment):** BR-084 accepts lowercase `t{task}`; BR-086 epic check accepts `02d` or unpadded — unblocks book T03 `ADK-I04.E01` false positive (kit tests: `test_signoff_br084_*`, `test_book_t03_contract_*`).

**Next:** ~~ExpensesTracker replay~~ → done; ~~`RW E06:S09:T16 --art`~~ → **v0.6.9.16+3**

## References

- [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md)
- [BR-086](../../../fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)
- [GitHub #17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17)
