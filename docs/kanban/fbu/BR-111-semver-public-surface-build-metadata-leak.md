---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-111: SemVer public surface leaks internal BUILD metadata

**Bug ID:** BR-111  
**Priority:** HIGH  
**Severity:** HIGH (adopter-facing version confusion; coherence gate enforces wrong shape)  
**Status:** OPEN  
**Source:** SBL install attempt 11 — [FB mirror](../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-dual-semver-build-leaks-into-public-semver-surface.md)  
**Related:** [UXR-031](UXR-031-semver-plusbuild-redundancy-in-task-touch.md) · [ADR-031](../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) · [E03:S02:T15](../epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md) · [FR-122](FR-122-release-workflow-architectural-contract-release-transaction.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**Implementing Task:** [E03:S02:T16](../epics/epic-03/story-02-versioning-cookbook-and-examples/T16-semver-public-surface-build-leak-br111.md)  
**SBL evidence:** `adk-install-into-sbl/attempt-11/feedback-package/` · pin `v0.4.1171`

---

## Summary

In **task_touch** mode, adopters see **public SemVer** with `+BUILD` on README, CHANGELOG, and RW completion summaries (`0.0.5+2`) while the **primary git tag** correctly omits BUILD (`v0.0.5`). [UXR-031](UXR-031-semver-plusbuild-redundancy-in-task-touch.md) / [ADR-031](../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) chose **Option A** (core-only external display @ **v0.3.2.15+2**), but SBL attempt 11 proves the adopter path on pin **`v0.4.1171`** still writes and validates `semver_full` on public surfaces.

---

## Observed (attempt 11)

| Surface | Value | Expected (Option A) |
|---------|-------|---------------------|
| Primary SemVer tag | `v0.0.5` | ✅ |
| README `Version (SemVer)` | `0.0.5+2` | `0.0.5` |
| CHANGELOG SemVer line | `0.0.5+2` | `0.0.5` |
| RW agent summary | `SemVer 0.0.5+2` | `0.0.5` |
| SAA `semver_full` | `0.0.5+2` | trace-only; not README/CHANGELOG SoT |

`validate_release_coherence.py` compares README/CHANGELOG to **`semver_full`**, blocking adopters who correctly omit `+BUILD`.

---

## Root cause (kit-side)

1. SQLite SAA allocation copies internal `VERSION_BUILD` into `semver_full`.
2. RW / agent paths echo `semver_full` on public surfaces instead of `semver_core` / `external_display_semver()`.
3. Coherence validator enforces the leak.

---

## Expected

- Public SemVer display = **core only** (`MAJOR.MINOR.PATCH`) per ADR-031 Option A.
- Internal `RC.EPIC.STORY.TASK+BUILD` and internal trace tag remain authoritative for forensic BUILD.
- Coherence gate compares README/CHANGELOG to **core**, not `semver_full`.

---

## Acceptance criteria

- [ ] SBL-style RW on task_touch: README + CHANGELOG show core SemVer only (no `+BUILD`).
- [ ] `validate_release_coherence.py` passes when public surfaces use core; fails when `+BUILD` present.
- [ ] RW agent execution docs instruct core-only public SemVer.
- [ ] Regression test from attempt 11 fixture (`0.2.16.2+2` → public `0.0.5`, tag `v0.0.5`).
