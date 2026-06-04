---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-086: RW Mode C — Lowercase Fresh Kanban Patterns, Forward-Looking Story 03d, Sign-Off Mismatch

**Bug ID:** BR-086  
**Priority:** MEDIUM  
**Severity:** MEDIUM (wrong persisted `rw-config.yaml` on lowercase fresh kanban; sign-off false negatives)  
**Status:** OPEN  
**GitHub Issue:** [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17)  
**Related:** [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15) / [BR-083](BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) (capital-case path **RESOLVED** **v0.6.9.14+2**; lowercase regression) · [#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16) / [BR-084](BR-084-rw-install-mode-c-missing-task-doc-pattern.md) (`task_doc_pattern` emitted; story/task padding still wrong) · [BR-085](BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md) · [UXR-017](UXR-017-kanban-epic-story-path-lowercase-naming.md) / **E04:S19:T11**  
**Implementing Task:** [E06:S09:T16](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T16-rw-install-lowercase-fresh-kanban-patterns-br086.md)  
**Planning:** [IPP-E06S09T16](../../implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md)
**Created:** 2026-06-04  
**Last updated:** 2026-06-04 (fix implemented in kit — pending adopter verification)  
**Version:** v0.6.9.16+1  
**Source:** ai-dev-kit-book setup-spine T03 dry-run (reader `expenses-tracker`); ADK submodule **`main`**; kanban `install_kanban_framework.py --mode fresh` → `install_release_workflow.py --mode c`

---

## Summary

On **lowercase** fresh kanban (`epics/epic-1/epic-1.md`, unpadded epic segments), RW mode C pre-fills padded `{epic:02d}` defaults, **blocks** forward-looking `story-{story:03d}-*.md`, then persists mismatched `02d` story/task patterns (capital `T`, erroneous `*/` glob). Install sign-off marks **BR-083 NOT READY** when the only epic pattern that matches on-disk files uses unpadded `{epic}`.

**Attempted fix (E06:S09:T16, 2026-06-04):** Installer detects lowercase unpadded epic dirs by filesystem name; pre-fills book-aligned epic/story/task patterns; accepts forward-looking `story:03d` on epic-only trees; BR-083 sign-off uses `*_contains_any` alternates. Awaiting adopter replay on `main` before RESOLVED.

---

## On disk after fresh kanban (current installer)

```text
docs/project-management/kanban/
  kboard.md
  epics/epic-1/epic-1.md
  …
  epics/epic-18/epic-18.md
```

(No `story-*.md` files yet — epics only.)

---

## Observed (2026-06-04 book dry-run)

| Step | Behaviour |
|------|-----------|
| Epic prompt | User `epics/epic-{epic}/epic-{epic}.md` → **12 matches** |
| Story prompt | User `epics/epic-{epic}/story-{story:03d}-*.md` → **❌ Cannot persist zero-match pattern** |
| Enter on default | Accepts `story-{story:02d}-*.md` (“no matching files yet”) |
| Generated YAML | Mixed unpadded epic + `02d` story/task; `T{task:02d}` + `*/` glob |

```yaml
epic_doc_pattern: epics/epic-{epic}/epic-{epic}.md
story_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*.md
task_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*/T{task:02d}-*.md
```

**Sign-off:** `[NOT READY] BR-083` (expects `epic-{epic:02d}`); `[READY] BR-084` (`task_doc_pattern` present).

---

## Problems

1. **Forward-looking story pattern blocked** — Book/adopter convention `story-{story:03d}-*.md` refused when only epic files exist; Enter silently saves different `02d` pattern.
2. **Epic padding mismatch** — On-disk `epic-1`, `epic-18`; installer defaults/sign-off expect `{epic:02d}`; matching pattern uses unpadded `{epic}`.
3. **Task pattern wrong for lowercase adopters** — Persisted `…-*/T{task:02d}-*.md` vs book target `…/story-{story:03d}/t{task:02d}-*.md`.
4. **`:02d` vs `:03d` unexplained** at prompt — drives manual T03 Step 4.1 edits.

---

## Expected

After fresh **lowercase** kanban + RW mode C:

- Pre-fill epic pattern that **matches** existing files (`epics/epic-{epic}/epic-{epic}.md` when glob confirms).
- Allow persisting **intended** `story_doc_pattern` (e.g. `{story:03d}`) with no story files yet — or Enter writes the **same** pattern docs recommend.
- `task_doc_pattern`: lowercase `t{task:02d}`, path layout aligned with book T03 Step 4.1.
- `github-issue-install-signoff-contract.yaml` **BR-083** checks accept unpadded on-disk `epic-N` **or** document single padding policy (UXR-017 / ADR-015).
- Installer hints explain `{story:03d}` vs `{story:02d}` (or one canonical policy).

---

## Workaround (book packet T03 Step 4.1)

```yaml
epic_doc_pattern: epics/epic-{epic}/epic-{epic}.md
story_doc_pattern: epics/epic-{epic}/story-{story:03d}-*.md
task_doc_pattern: epics/epic-{epic}/story-{story:03d}/t{task:02d}-*.md
```

---

## Acceptance Criteria

- [ ] Fresh lowercase kanban → RW mode C → epic pattern matches without manual edit
- [ ] User can persist `story-{story:03d}-*.md` (or documented equivalent) before any story file exists
- [ ] Generated `task_doc_pattern` uses lowercase task prefix and matches documented adopter layout
- [ ] Sign-off / BR-083 does not fail when epic pattern matches on-disk unpadded `epic-N` names
- [ ] Installer output explains `{story:03d}` vs `{story:02d}` (or one canonical padding policy)
- [ ] GitHub #17 closed after adopter replay on `main`

---

## Follow-up to #15 / #16 (2026-06-04)

GitHub **#15** and **#16** remain **closed** after ExpensesTracker **capital-case** verification (**v0.6.9.14+2**). Book dry-run on **`main`** with **lowercase** fresh install shows residual gaps — tracked here, not by reopening #15/#16.
