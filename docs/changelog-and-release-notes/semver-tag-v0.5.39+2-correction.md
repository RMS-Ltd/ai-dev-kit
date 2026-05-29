# SemVer Tag Correction: v0.5.39+2

**Date:** 2026-02-19  
**Purpose:** Restore 1:1 mapping between SemVer tags and release commits.

## Audit

- **Remote tag:** `v0.5.39+2`
- **Before correction:** Remote tag pointed to commit `168d97c3` (internal version `0.5.1.37+2` — E5:S01:T37, Kanban policy doc-init).
- **After correction:** Tag points to commit `4321f107` (internal version `0.5.1.39+2` — E5:S01:T39, Latest-only changelog policy and CMW mode).

## Reason

Under the registry-based mapping, both internal `0.5.1.37+2` and `0.5.1.39+2` convert to SemVer `0.5.39+2` (same Epic 5, Story 1 → PATCH 39; BUILD 2). The SemVer tag may only point to one commit. The canonical release for `v0.5.39+2` is defined as the E5:S01:T39 release (latest-only changelog policy). The tag was updated so that the Git layer satisfies the 1:1 rule: one SemVer tag → one commit (the canonical release for that SemVer).

## Action Taken

- `git push origin +v0.5.39+2` so that `refs/tags/v0.5.39+2` on the remote points to commit `4321f107`.
