---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-110: Lean adopter distribution footprint and vendor bundle

**Type:** Feature Request (FR)  
**ID:** FR-110  
**Submitted:** 2026-06-05  
**Submitted By:** User (greenfield vendor install design session)  
**Priority:** MEDIUM (Should Have — MoSCOW **S**)  
**Status:** ACCEPTED

**Implementing Tasks:** [E06:S09:T21](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md) (lean tree + sync) · [E06:S09:T22](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T22-package-documentation-greenfield-install-alignment-fr110.md) (package README alignment)

---

## Summary

Maintain a first-class **`greenfield-install/`** directory in ai-dev-kit that contains **only** what adopters need. Clients vendor or copy **that tree** — not the full maintainer repository — for a smaller footprint and a simple update story (`git pull` / submodule bump on `greenfield-install/`).

---

## Problem Statement

Greenfield adoption commonly vendors the full `RMS-Ltd/ai-dev-kit` repository (submodule, subtree, or checkout) so the host project can pull upstream fixes. That model is sound for **updateability**, but the **payload is not lean**:

| Layer | Approx. size (ai-dev-kit `dev`, 2026-06-05) | Adopter need |
| ----- | -------------------------------------------- | ------------ |
| **Git-tracked working tree** | **~27 MiB** (4,804 files) | Partial — runtime + install docs only |
| **Git object store (pack)** | **~106 MiB** | History for `git pull` / submodule bump |
| **Heuristic lean runtime subset** | **~9 MiB** | Frameworks, user docs, CLI/install entrypoints |
| **Non-lean remainder (tracked)** | **~18 MiB (~67%)** | Mostly maintainer corpus |
| **Local dev checkout (misleading)** | **~2 GiB** if `portal/node_modules` present | **Not in git** — adopters do not receive this |

A submodule of the **full repo** therefore ships substantial content adopters will **never execute**:

- `docs/project-management/` — ai-dev-kit's own kanban (~4.5 MiB tracked)
- `docs/changelog-and-release-notes/` — maintainer release archive (~4.5 MiB)
- `docs/knowledge/`, `docs/implementation-cycles/` — maintainer research and IPPs (~4.5 MiB combined)
- `portal/` — Docusaurus site sources and lockfile (~1 MiB tracked; site is published separately)
- `packages/dist/` — framework slug release archives (~1.3 MiB; useful for tarball path, not for submodule vendoring)
- `tests/`, maintainer scripts, book/maintenance trees

Adopters need **`packages/frameworks/*`**, **adopter-facing user docs**, **install orchestration** (`INSTALL_IN_YOUR_PROJECT.md`, `.claude/commands/`, CLI), and **minimal bootstrap** (`AGENTS.md` excerpt or adopter-specific bootstrap). They do **not** need the maintainer kanban board, changelog archive, or docs portal build tree.

[FR-062](FR-062-github-release-installation-experience.md) addressed **per-framework GitHub release tarballs**; [FR-080](FR-080-greenfield-installation-process.md) / [FR-082](FR-082-installation-distribution-canonical-repo-alignment.md) addressed **canonical coordinates and greenfield orchestration**. Neither defines a **single lean vendor tree** or documents **expected disk budget** for `vendor/ai-dev-kit/`.

**Preferred solution (user direction, 2026-06-05):** a repo-root **`greenfield-install/`** directory — curated, versioned, and documented as **the** adopter install surface. No separate export pipeline required for the happy path; adopters point `vendor/` at this subtree.

---

## Goals

1. **Create and maintain** `greenfield-install/` as the canonical lean adopter tree (~≤10 MiB target).
2. **Sync discipline** — maintainer script or RW step copies/validates frameworks, user docs, and install entrypoints from live sources into `greenfield-install/` (no silent drift).
3. **Document** the simple adopter path: submodule sparse-checkout, copy, or `vendor/ai-dev-kit/greenfield-install/` as install root.
4. **Validate** `greenfield-install/` runs greenfield orchestrator + RW/Kanban installers and `pip install -e` where documented.

---

## Requirements

### Functional Requirements

- [x] **FR-110-F1:** Add repo-root **`greenfield-install/`** containing frameworks, adopter user docs, install orchestration, CLI/bootstrap, and a **`README.md`** (“install this directory”). — **v0.6.9.21+4**
- [x] **FR-110-F2:** Provide **`sync_greenfield_install.py`** (or equivalent) that refreshes `greenfield-install/` from canonical sources and fails on unexpected drift in CI. — **v0.6.9.21+4**
- [x] **FR-110-F3:** Document **disk budget** (MiB) and **update procedure** in `INSTALL_IN_YOUR_PROJECT.md` — adopters vendor/copy `greenfield-install/` only. — **v0.6.9.21+3** docs + **+4** tree
- [x] **FR-110-F4:** CI smoke test: greenfield dry-run from `greenfield-install/` root passes. — **v0.6.9.21+4**
- [x] **FR-110-F5 (optional):** Publish `greenfield-install/` as a GitHub Release tarball for non-git adopters (extends FR-062). **UX extension:** [UXR-021](UXR-021-greenfield-install-github-packages-delivery-channel.md) / [E06:S09:T23](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T23-greenfield-install-github-packages-delivery-uxr021.md) — dual-publish tarball + `ghcr.io` container from same validated tree. — **v0.6.9.23+2**

### Non-Functional Requirements

- [x] **FR-110-NF1:** `greenfield-install/` tracked size **~11 MiB** (framework packages only + README); well under 50% of full repo tree. — **~8 MiB measured** (**v0.6.9.21+4**)
- [x] **FR-110-NF2:** Update path = submodule bump or copy refresh — no adopter fork required.
- [x] **FR-110-NF3:** Maintainer cost = one sync script + CI guard; adopters see one obvious directory name.

### Out of scope (v1)

- Shrinking **git history** (shallow clone guidance may be documented separately; not a custom orphan repo).
- Removing maintainer paths from the **main** `dev` branch working tree.
- Republishing the Docusaurus site from the lean bundle.

---

## Scope Analysis

**Problem Domain:** Framework distribution and adopter integration  
**Affected Areas:**

- [x] Documentation (`INSTALL_IN_YOUR_PROJECT.md`, user-docs)
- [x] Packaging / release (`packages/dist`, GitHub releases)
- [x] CLI / install scripts
- [ ] Kanban framework runtime (consumes copied templates only)
- [ ] Workflow-mgt validators (must remain path-complete in lean tree)

**Estimated Complexity:** **Medium (1 week)** — curated directory, sync script, docs, CI smoke.

---

## Delivery model: `greenfield-install/` (preferred)

**Lean scope (user direction, 2026-06-05):** adopters need **`packages/frameworks/`** and the scripts that ship **inside** those packages — not the maintainer repo’s top-level `scripts/`, `cli/`, `portal/`, or kanban corpus.

```
ai-dev-kit/                          # maintainer repo (full corpus)
├── scripts/                         # maintainer-only (Notion, KB, fr099 sync) — EXCLUDE
├── docs/project-management/         # maintainer-only — EXCLUDE
├── portal/                          # maintainer-only — EXCLUDE
├── packages/frameworks/             # source of truth (synced →)
│   ├── workflow-mgt/scripts/        # RW install, validators, greenfield orchestrator
│   └── kanban/scripts/              # Kanban install
└── greenfield-install/              # ← adopters install THIS (~11 MiB)
    ├── README.md                    # entry + link to published install docs
    └── packages/frameworks/       # full framework packages (scripts included)
```

**Optional add-ons** (document separately; not required for script-driven greenfield path):

- `INSTALL_IN_YOUR_PROJECT.md` — or link to [published install guide](https://rms-ltd.github.io/ai-dev-kit/)
- `.claude/commands/` — thin RW/UKW/IPW trigger files
- `cli/`, `src/`, `setup.py` — only when adopters want `pip install -e` / `adk` CLI

**Adopter flows (document all):**

| Flow | Command sketch |
| ---- | -------------- |
| **Submodule (sparse)** | `git submodule add … vendor/ai-dev-kit` then sparse-checkout `greenfield-install/` only |
| **Copy** | `cp -a vendor/ai-dev-kit/greenfield-install/. vendor/adk/` |
| **Release tarball (optional)** | Download `greenfield-install-v{semver}.tar.gz` from GitHub Releases |

**Maintainer flow:** RW or dedicated script runs `sync_greenfield_install.py` before release; CI asserts tree matches manifest and passes install dry-run.

**Deferred alternatives:** standalone manifest+export without a checked-in dir; `adk-lean` branch — only if `greenfield-install/` proves insufficient.

---

## Acceptance Criteria

- [ ] **AC1:** `greenfield-install/` exists with measured MiB budget documented.
- [ ] **AC2:** Sync script refreshes tree from canonical sources; CI fails on drift.
- [ ] **AC3:** `INSTALL_IN_YOUR_PROJECT.md` documents **install `greenfield-install/`** as the default lean vendor path.
- [ ] **AC4:** `install_greenfield_path.py --dry-run` succeeds with cwd = `greenfield-install/`.
- [ ] **AC5:** No maintainer-only paths (`docs/project-management/`, `portal/`, changelog archive) under `greenfield-install/`.

---

## Dependencies

**Related Work:**

- [FR-062](FR-062-github-release-installation-experience.md) — per-framework release tarballs
- [FR-080](FR-080-greenfield-installation-process.md) — greenfield orchestrator
- [FR-081](FR-081-brownfield-modular-adopter-integration.md) — brownfield modular adoption
- [FR-082](FR-082-installation-distribution-canonical-repo-alignment.md) — canonical repo coordinates
- [FR-099](FR-099-spin-off-book-epic-to-private-repository.md) — book split clarifies what stays public
- [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) — adoption policy anchor
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)

**Blocked By:** None (investigation may proceed immediately).

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Intake By:** Agent (atomic intake)

**Assigned To:**

- Epic: E06 — Framework Management
- Story: E06:S09 — AI Dev Kit installation and adopter integration
- Task: E06:S09:T21 — Lean adopter distribution footprint (FR-110)

---

## Notes

Footprint figures in this FR were measured from the ai-dev-kit maintainer repo on 2026-06-05:

- `git count-objects` pack ~106 MiB; tracked working tree ~26.7 MiB across 4,804 files.
- Heuristic lean subset (frameworks + user-docs + install entrypoints): ~8.9 MiB tracked.
- Local ~2 GiB working trees are dominated by **untracked** `portal/node_modules` — not part of submodule adoption.

The worth/complexity tradeoff is intentional: a **named directory adopters can point at** beats abstract manifests — `greenfield-install/` is discoverable, grep-friendly, and submodule-sparse-checkout friendly. Maintainer discipline is a sync script + CI guard, not a separate distribution pipeline.

---

## References

- [INSTALL_IN_YOUR_PROJECT.md — submodule path](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
- [framework-dependency-installation-guide.md](../../documentation/user-docs/framework-dependency-installation-guide.md)
