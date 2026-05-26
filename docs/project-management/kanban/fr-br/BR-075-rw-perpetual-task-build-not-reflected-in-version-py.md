---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-075: RW perpetual-task releases may not persist BUILD increment in `version.py`

**Status:** OPEN  
**Priority:** LOW  
**Severity:** LOW — forensic drift risk between board/changelog version markers and `version.py` during perpetual-task RW (`RW`, `RW -k`, UKW/CMW follow-up).  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (**v0.2.1.22+1** — intake RW `-k` `--art`)  
**Version:** v0.2.1.22+1  
**Code:** BR-075  

**Implementing Task:** [E2:S01:T22](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075.md)

---

## Problem Statement

When Release Workflow (RW) targets a **perpetual maintenance** task (for example **E2:S16:T04** UKW/kanban lane, **E2:S16:T03** workflow maintenance, **E6:S06:T101** UKW wiring in other projects), operators expect each release to advance **`VERSION_BUILD`** in the configured **`version_file`** (`rw-config.yaml` → `src/ai_dev_kit/version.py` in this repo) while keeping **E/S/T** anchored on the perpetual task.

Observed failure mode (2026-05-26, `RW -k E2:S16:T04 --art`): kanban surfaces and release narrative advanced to **`v0.2.16.4+12`** while **`version.py` appeared unchanged** at **`+11`** during the run—suggesting Step 7 / `kanban_init` board updates ran **before** or **without** a reliable Step 2 version-file write. The eventual commit **`b56f521e0`** did include **`VERSION_BUILD = 12`**, so this may be **ordering/visibility** as well as **skip** risk; both undermine trust in perpetual-task RW.

Related hazard: agent guidance still references legacy **`src/fynd_deals/version.py`** in `.cursor/skills/version-bump/SKILL.md`, increasing wrong-file edits.

---

## Expected Behavior

For every RW (including **`RW -k`**) against a perpetual task:

1. **Step 2 (Bump Version)** MUST run **before any other release-scope file modifications** and MUST set `VERSION_BUILD := prior_build + 1` (same E/S/T) in `version_file`.
2. **`VERSION_STRING` / trailing `# Current:` comment** MUST match the bumped tuple.
3. Step 7 / `update_kanban_docs.py` MUST read the **post-Step-2** version from `version_file`, not invent a target version in isolation.
4. Step 9 validators MUST **fail closed** if staged `version_file` BUILD is unchanged vs pre-RW baseline for a same-task perpetual release (unless explicit doc-only zero-build policy applies per BR-067).

---

## Observed Behavior

- User invoked perpetual kanban RW: `RW -k E2:S16:T04 --art`.
- Board metadata and changelogs referenced **`v0.2.16.4+12`** while **`version.py` still showed `VERSION_BUILD = 11`** at inspection time during the session.
- Perpetual tasks are **never `[x] … COMPLETE`** on Story checklists; RW relies on **`version_task` hint** and **`--art`** (see `validate_version_bump.py` `find_completed_task`). That path does not currently **require** a persisted BUILD increment in `version_file` before kanban scripts run.

---

## Impact

- **Forensic drift:** tags, changelogs, and boards can claim build **N+1** while `version.py` still reads **N** until a late manual fix.
- **Validator blind spot:** `validate_version_bump.py` may pass after an agent writes `version.py`, but nothing blocks **kanban_init-first** agent ordering.
- **Perpetual-task confusion:** high BUILD numbers on T04/T101/T102 are normal; drift is harder to spot manually.

---

## Reproduction (suspected)

1. Start from perpetual anchor with `version.py` at `0.2.16.4+11` (E2:S16:T04).
2. Run `RW -k E2:S16:T04 --art` with an agent that prioritizes Step 7 / `update_kanban_docs.py --mode kanban_init` early.
3. Inspect `version_file` **before commit** — BUILD may still be **11** while `kboard.md` / `fbuboard.md` already show **+12**.
4. Optional: follow `.cursor/skills/version-bump/SKILL.md` literally → wrong `src/fynd_deals/version.py` path.

---

## Proposed Resolution

1. **Validator:** extend `validate_version_bump.py` (or add `validate_perpetual_rw_version_file.py`) to compare pre-RW vs staged `VERSION_BUILD` for perpetual tasks; exit non-zero if unchanged on same-task release.
2. **RW docs / `.cursorrules`:** explicit **Step 2-before-Step-7** invariant for `RW -k` on perpetual tasks; forbid board version bumps ahead of `version_file`.
3. **Script:** `update_kanban_docs.py` kanban_init MUST load version from `version_file` only (never accept agent-supplied version string that exceeds file).
4. **Skill fix:** point `version-bump` skill at `rw-config.yaml` `version_file` (not hardcoded fynd_deals path).
5. **Regression test:** perpetual T04 fixture — simulate kanban_init before version bump → validator fails.

---

## Related

- [BR-063](BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor.md) — task anchor vs requested id (`--art`)
- [BR-067](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) — doc-only BUILD policy
- [BR-061](BR-061-rw-explicit-task-id-requires-manual-version-alignment.md) — explicit task / version alignment
- Perpetual UKW task: [E2:S16:T04](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` — Step 2 UKW/CMW attribution

---

## Notes

- **2026-05-26 session:** final release **`v0.2.16.4+12`** commit did update `src/ai_dev_kit/version.py`; this BR tracks the **process gap** and **intermediate drift**, not necessarily a missed final commit.
