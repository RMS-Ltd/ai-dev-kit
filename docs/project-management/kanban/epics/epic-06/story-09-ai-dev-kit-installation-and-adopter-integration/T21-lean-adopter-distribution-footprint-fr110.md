---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 21: Lean adopter distribution footprint (FR-110)

**Task ID:** E06:S09:T21  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05  
**Version:** v0.6.9.21+2  
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

## Deliverables

- [ ] `greenfield-install/` initial population + adopter README
- [ ] `sync_greenfield_install.py` + mapping manifest
- [ ] CI: sync drift check + install dry-run smoke
- [ ] `INSTALL_IN_YOUR_PROJECT.md` lean vendor section
- [ ] Footprint MiB report (checked in or linked from task)

---

## Acceptance Criteria

- [ ] **AC1:** `greenfield-install/` tracked size ≤50% of full repo (~≤14 MiB).
- [ ] **AC2:** Sync script is idempotent; CI fails when sources change without re-sync.
- [ ] **AC3:** Greenfield dry-run passes from `greenfield-install/` cwd.
- [ ] **AC4:** Install docs show submodule-sparse, copy, and update (tag bump) flows.
- [ ] **AC5:** No maintainer corpus under `greenfield-install/`.

---

## Task checklist

- [ ] Phase 0: Path audit — confirm installer/validator imports from lean root
- [ ] Phase 1: Scaffold `greenfield-install/` + sync script + initial sync
- [ ] Phase 2: Docs (`README`, `INSTALL_IN_YOUR_PROJECT.md` lean section)
- [ ] Phase 3: CI smoke + drift guard
- [ ] Phase 4: Optional release tarball; status reconciliation

---

## References

- [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)
