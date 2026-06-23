---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-16T12:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-110: RW -k `--art --dpz` doc-init guard rejects on non-zero HEAD BUILD

**Type:** Bug Report (BR)  
**Bug ID:** BR-110  
**Task ID:** E08:S03:T23  
**Priority:** HIGH  
**Severity:** MEDIUM-HIGH (breaks documented `--dpz` “BUILD+0 doc-init” workflow; forces unintended +1 versions)  
**Status:** RESOLVED (implementation v0.6.9.38+0 — `art_doc_policy_zero` in `resolve_rw_build.py`; forensic closure v0.8.3.23+3 on filed task E08:S03:T23)

**Implementing Task:** [E08:S03:T23](../epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md)  
**Trigger Command (reported):** `RW -k 8.3.23 --art --dpz`

---

## Summary

`RW -k ... --art --dpz` is intended to allow a documentation/kanban-doc **doc-init** release with **BUILD = +0**.

In this case, `--dpz` (alias of `--doc-policy-zero`) is rejected by the RW Step 2 resolver because the repository’s **current** `version.py` reports **`VERSION_BUILD >= 1`**. The resolver then proceeds with the normal `--art` “first build” path (**BUILD +1**).

---

## Observed Behavior (evidence)

From the current repo state:

1. `src/ai_dev_kit/version.py` currently has:
   - `VERSION_EPIC = 8`
   - `VERSION_STORY = 3`
   - `VERSION_TASK = 23`
   - `VERSION_BUILD = 1`

2. `resolve_rw_build.py` stderr for the requested case:
   - `--doc-policy-zero is only valid for BUILD=0 (doc-init). Current VERSION_BUILD=1 ... See BR-097.`
   - `Tagged BUILD reuse blocked: git tag v0.8.3.23+1 exists ... See BR-097 / BR-067.`

3. Tag inventory for the anchor:
   - `git tag -l "v0.8.3.23+*"` → only `v0.8.3.23+1`
   - no `v0.8.3.23+0` tag is present.

4. Net effect: `--dpz` cannot be used to force BUILD+0 for the requested doc-init release; the resolver falls back to **BUILD +1**.

### Provenance timeline for `v0.8.3.23+1`

- The `v0.8.3.23+1` tag is an **annotated tag** created at `2026-06-16 13:04:40 +0100` (tagger: `Ruari`).
- It points to commit `98a1c5fbbf9f9cbd13c8fe7317c23145867bf2bc` on `dev` (`origin/dev`), with message:
  - `Release v0.4.1186+1: BR-109 intake — greenfield autofix dual-tree sync drift`
  - `Internal: v0.8.3.23+1`
  - `Epic: 8 | Story: 3 | Task: 23`
- That tagged commit includes first-intake artifacts for this anchor:
  - adds `docs/kanban/fbu/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md`
  - adds `docs/kanban/epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md`
  - updates `src/ai_dev_kit/version.py` to the same anchor (`E08:S03:T23`) with `VERSION_BUILD=1`
  - adds `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.23+1.md`

Interpretation: the initial BR-109/T23 intake release for this anchor was emitted as `+1` at commit-time. Subsequent attempts to use `--dpz` for `E08:S03:T23` are then blocked by BR-097/BR-067 guardrails (existing BUILD>=1/tagged same-task follow-on).

---

## Expected Behavior

When a maintainer explicitly types `--dpz` for `RW -k` to initiate **kanban documentation setup** (docs-only, before planning/implementation), the doc-init intent should allow **BUILD+0** for the *requested* `E:S:T` release boundary, rather than being blocked by the repository’s current `VERSION_BUILD` for the active HEAD anchor.

Concretely: the doc-init decision for `--dpz` should be based on whether the requested anchor’s **BUILD=0** is eligible/unoccupied (e.g. no occupied `v{rc}.{epic}.{story}.{task}+0` tag), not on whether the current `version.py` HEAD happens to be at BUILD>=1.

---

## Root Cause (code-level)

In `packages/frameworks/workflow-mgt/scripts/version/resolve_rw_build.py`, `doc_policy_zero` is blocked via a guard that checks `file_build >= 1` (where `file_build` is read from the current `version.py`), before anchoring logic and before considering the requested doc-init eligibility/tag occupancy for `E08:S03:T23`.

This same “BUILD must be 0” framing is also enforced in `packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py` when `doc_policy_zero` is set.

---

## Proposed Remediation (for implementing task)

Either:

1. Narrow the guard so `--dpz` is blocked only for the same-task follow-on case where the requested anchor’s BUILD+0 would violate the “no reuse / no backwards versioning” policy (BR-097), while still allowing doc-init BUILD+0 for `RW -k` on an unoccupied `...+0` boundary.

2. Or update resolver/validators so doc-init eligibility for `--dpz` is computed relative to the requested anchor (`--requested`) instead of using the repository HEAD’s `VERSION_BUILD` as a hard gate.

Regression tests should cover:
- `RW -k` + `--art` + `--dpz` when current HEAD is at `VERSION_BUILD >= 1` but the requested anchor’s `...+0` is untagged.
- Ensuring existing BR-097 constraints remain intact for follow-on waves with tagged/reused BUILDs.

---

## References

- `packages/frameworks/workflow-mgt/scripts/version/resolve_rw_build.py` (Step 2 BUILD resolver)
- `packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py` (doc-policy-zero validation)
- [BR-067](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)
- [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [UXR-022](UXR-022-rw-doc-policy-zero-short-flag-dpz.md)

