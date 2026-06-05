---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 21: Lean adopter distribution footprint (FR-110)

**Task ID:** E06:S09:T21  
**Status:** ✅ COMPLETE (v0.6.9.21+4)  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.6.9.21+4)  
**Version:** v0.6.9.21+4  
**Code:** E06S09T21

**Upstream:** [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)

**Related:** [FR-062](../../../fr-br/FR-062-github-release-installation-experience.md) · [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) · [FR-082](../../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md) · [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)

---

## Summary

Create and maintain repo-root **`greenfield-install/`** as the canonical lean adopter tree. Clients vendor or copy **that directory** — not the full ai-dev-kit repository. Deliver sync tooling, install docs, and CI smoke from the lean root.

---

## Input

- [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — `greenfield-install/` delivery model (user direction 2026-06-05)
- Footprint baseline: full tracked tree ~27 MiB; lean subset ~9 MiB; ~67% maintainer-only
- Greenfield orchestrator: `install_greenfield_path.py` (FR-080)

---

## Scope

### In scope

1. **`greenfield-install/` directory** — curated tree with adopter `README.md`, frameworks, user docs, install entrypoints, CLI/bootstrap.
2. **`sync_greenfield_install.py`** — copies/validates from canonical repo paths; idempotent; suitable for RW pre-release or maintainer manual run.
3. **Sync manifest** — machine-readable list of source → dest mappings (lives beside sync script; CI drift guard).
4. **Documentation** — `INSTALL_IN_YOUR_PROJECT.md` + `greenfield-install/README.md`: sparse submodule, copy, and optional release tarball paths.
5. **CI smoke** — `install_greenfield_path.py --dry-run` from `greenfield-install/` root.
6. **Optional:** GitHub Release tarball of `greenfield-install/` (FR-062 extension).

### Out of scope (v1)

- Removing maintainer paths from repo root
- Brownfield-only lean tree (may share same dir if audit confirms)
- Git history shrinking

---

## Proposed `greenfield-install/` layout (minimal)

```
greenfield-install/
├── README.md                         # "Vendor this tree"; greenfield install commands
└── packages/frameworks/              # Full framework packages (~11 MiB)
    ├── workflow-mgt/scripts/         # install_release_workflow.py, install_greenfield_path.py, validators
    ├── kanban/scripts/               # install_kanban_framework.py
    └── …                             # kanban, numbering-versioning, doc-lifecycle, etc.
```

**Core principle:** scripts live **inside** `packages/frameworks/` — adopters do **not** need repo-root `scripts/` (maintainer Notion/KB/fr099 tooling).

**Explicitly excluded from v1 lean tree:**

- Repo-root `scripts/`, `cli/`, `src/`, `tests/`
- `docs/project-management/`, `docs/changelog-and-release-notes/`, `portal/`, `packages/dist/`
- In-tree user docs (link to published site instead)

**Optional add-ons** (Phase 2+ if audit demands):

- `INSTALL_IN_YOUR_PROJECT.md` excerpt or symlink
- `.claude/commands/` trigger stubs
- `setup.py` + `cli/` for `pip install -e` / `adk` CLI path

Phase 0 must validate installer path assumptions (e.g. `install_greenfield_path.py` relative paths) and adjust layout or sync rewrite rules accordingly.

---

## Deliverable

- `greenfield-install/` initial population + adopter README + `FOOTPRINT.md`
- `scripts/sync_greenfield_install.py` + `scripts/greenfield-install-manifest.yaml`
- CI: `.github/workflows/greenfield-install.yml` (drift check + dry-run smoke + pytest)
- `INSTALL_IN_YOUR_PROJECT.md` lean vendor section (sparse/copy/update flows)
- Footprint MiB report in `greenfield-install/FOOTPRINT.md`

---

## Acceptance Criteria

- [x] **AC1:** `greenfield-install/` tracked size ≤50% of full repo (~≤14 MiB) — **~10 MiB** measured.
- [x] **AC2:** Sync script is idempotent; CI fails when sources change without re-sync (`--check`).
- [x] **AC3:** Greenfield dry-run passes from `greenfield-install/` cwd.
- [x] **AC4:** Install docs show submodule-sparse, copy, and update (tag bump) flows.
- [x] **AC5:** No maintainer corpus under `greenfield-install/` (framework packages only).

---

## Task checklist

- [x] Phase 0: Path audit — `install_greenfield_path.py` resolves `packages/frameworks/...` from lean root
- [x] Phase 1: Scaffold `greenfield-install/` + sync script + initial sync (1500 files)
- [x] Phase 2: Docs (`README`, `INSTALL_IN_YOUR_PROJECT.md` lean section) — **v0.6.9.21+3** + post-sync update
- [x] Phase 3: CI smoke + drift guard — `greenfield-install.yml` + `scripts/test_sync_greenfield_install.py`
- [x] Phase 4: RW release + status reconciliation — **v0.6.9.21+4** (optional FR-062 tarball deferred)

---

## Implementation evidence

- Sync: [`scripts/sync_greenfield_install.py`](../../../../../scripts/sync_greenfield_install.py) · [`scripts/greenfield-install-manifest.yaml`](../../../../../scripts/greenfield-install-manifest.yaml)
- Lean tree: [`greenfield-install/`](../../../../../greenfield-install/) · [`FOOTPRINT.md`](../../../../../greenfield-install/FOOTPRINT.md)
- CI: [`.github/workflows/greenfield-install.yml`](../../../../../.github/workflows/greenfield-install.yml)
- Tests: [`scripts/test_sync_greenfield_install.py`](../../../../../scripts/test_sync_greenfield_install.py)

---

## References

- [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)
- [E06:S09:T22](T22-package-documentation-greenfield-install-alignment-fr110.md) (package README alignment)
