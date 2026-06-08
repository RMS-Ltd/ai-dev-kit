---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:55:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-117: MIT LICENSE file and repository legal metadata

**Type:** Feature Request (FR)  
**ID:** FR-117  
**Submitted:** 2026-06-07  
**Submitted By:** Maintainer (open-source licensing gap)  
**Priority:** HIGH (Must Have — legal clarity for adopters)  
**Status:** COMPLETE (**v0.1.6.2+1** — **E01:S06:T02**)

**Implementing Task:** [E01:S06:T02](../epics/epic-01/story-06-repository-ci-cd-setup/T02-mit-license-file-and-repository-legal-metadata-fr117.md)

---

## Summary

Add a canonical root **`LICENSE`** file (MIT) so the public repository’s legal terms match the README badge and adopters can vendor, fork, and redistribute AI Dev Kit with clear permission.

---

## Problem Statement

AI Dev Kit is **open source** and marketed to adopters who submodule, vendor, or copy `greenfield-install/`. The README already displays an **MIT** license badge and states SPDX `MIT`, but **no `LICENSE` file exists** at the repository root.

Without a license file:

- Default copyright law applies (**all rights reserved**) — contradicting README and adoption docs.
- Corporate adopters cannot rely on SPDX/GitHub license detection.
- Framework package READMEs that say `license: "See source project"` have no authoritative file to point at.

This is a **repository hygiene / legal-metadata** gap, not a product feature change.

---

## Goals

1. **Root `LICENSE`** — Standard MIT text; copyright holder **RMS-Ltd** (2025–2026).
2. **README alignment** — License section links to `LICENSE` (not badge-only).
3. **CONTRIBUTING alignment** — Contributors agree contributions are MIT-licensed.
4. **GitHub detection** — `LICENSE` at root enables automatic license badge on the public repo.

---

## Requirements

### Functional Requirements

- [x] **FR-117-F1:** `LICENSE` at repository root with MIT terms and RMS-Ltd copyright.
- [x] **FR-117-F2:** `README.md` License section references [`LICENSE`](../../../LICENSE).
- [x] **FR-117-F3:** `CONTRIBUTING.md` includes contribution licensing clause pointing to `LICENSE`.

### Non-Functional Requirements

- [ ] **FR-117-NF1:** No change to framework runtime behaviour or install paths.
- [ ] **FR-117-NF2:** SPDX identifier remains `MIT` (consistent with README badge).

---

## Acceptance Criteria

- [x] `LICENSE` exists at repo root; `head LICENSE` shows MIT + copyright line.
- [x] README License section links to `LICENSE`.
- [x] CONTRIBUTING.md states contributions are MIT-licensed.
- [x] RW release records version anchor on **E01:S06:T02** (**v0.1.6.2+1**).

---

## Scope Analysis

**Problem Domain:** Repository legal metadata / open-source distribution  
**Affected Areas:**

- [x] Documentation (`README.md`, `CONTRIBUTING.md`)
- [x] Repository root (`LICENSE`)

**Estimated Complexity:** Simple (< 1 day)

---

## Dependencies

**Blocks:** None  

**Blocked By:** None  

**Related Work:**

- [E01:S06:T01](../epics/epic-01/story-06-repository-ci-cd-setup/T01-setup-byob-badges-for-private-repository.md) — README license badge (static MIT)
- [FR-064](FR-064-shields-branch-private-repo-badges.md) — static badge strategy

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-07  
**Intake By:** Maintainer agent (atomic intake)

**Decision Flow Results:**

- [x] Story Match Found: Epic 1, Story 6 (Repository CI/CD Setup) → Task T02

**Assigned To:**

- Epic: E01 — AI Dev Kit Core
- Story: E01:S06 — Repository CI/CD Setup
- Task: E01:S06:T02 — MIT LICENSE file and repository legal metadata
- Version: `v0.1.6.2+1` (target; via RW)

---

## Notes

Implementation completed in the same session as intake (no IPP required — docs-only legal file). Release via **`RW E01:S06:T02 --art`** on `dev` (or `epic/1-ai-dev-kit-core` when aligned).

---

## References

- [Choose a License — MIT](https://choosealicense.com/licenses/mit/)
- [SPDX MIT](https://spdx.org/licenses/MIT.html)
- Root [`LICENSE`](../../../LICENSE)
- [`README.md`](../../../README.md) License section
