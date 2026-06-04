---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 16: RW install lowercase fresh kanban patterns & sign-off (BR-086)

**Task ID:** E06:S09:T16  
**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Created:** 2026-06-04  
**Last updated:** 2026-06-04 (implementation — kit tests green; pending adopter replay + RW)  
**Version:** v0.6.9.16+1  
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
- [x] `github-issue-install-signoff-contract.yaml` — BR-083 `*_contains_any` alternates; BR-086 entry
- [x] `install_github_issue_signoff.py` — `*_contains_any` check support
- [x] Tests — `test_install_release_workflow_patterns.py`, `test_install_release_workflow_rw_config.py` (20 passed locally)
- [x] `INSTALL_IN_YOUR_PROJECT.md` — lowercase book T03 post-kanban snippet
- [ ] Adopter replay + sign-off + `RW E06:S09:T16 --art` (uncommitted in working tree)

---

## Acceptance Criteria

- [ ] BR-086 AC satisfied on fresh lowercase kanban replay (ExpensesTracker or kit fixture)
- [ ] `install_github_issue_signoff.py` reports `[READY] BR-083` when epic pattern matches unpadded on-disk names
- [ ] GitHub #17 closed after verification comment
- [x] IPW package linked before implementation — [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md)

---

## Version Anchor

🔄 IN PROGRESS (v0.6.9.16+1 — kanban init **RW -k --art**)

---

## Planning

**IPP:** [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md) — **Approved** (2026-06-04)

**Implementation (2026-06-04):** Code complete per [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md) §4 — unpadded `epic-N` dirs detected by name (not glob); capital `Epic-*` path unchanged.

**Next:** ExpensesTracker or book dry-run on `main` → `install_github_issue_signoff.py` `[READY] BR-083` + `[READY] BR-086` → close #17 → **`RW E06:S09:T16 --art`**

## References

- [IPP-E06S09T16](../../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md)
- [BR-086](../../../fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)
- [GitHub #17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17)
