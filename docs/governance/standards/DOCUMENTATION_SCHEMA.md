---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Documentation schema (adopter end-state)

**Version:** 1.0.0  
**Status:** Published (Phase 0 — [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) / [E06:S09:T36](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md))  
**Policy:** [ADR-024](../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) · [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) · [ADR-030](../../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md)

---

## Purpose

Define the **post-install documentation layout** adopters should converge on after RW + Kanban install — independent of whether the host chose **Path 1** (in-place), **Path 2** (shell + migration), or **Path 3** (strangler coexist). Agents and operators use this schema to answer: *where does new documentation go, and which surface is authoritative?*

This document satisfies **FB-ADK-canonical-maintainer-documentation-schema** from SBL attempt 09.

---

## Three surfaces (summary)

| Surface | Audience | Authority | Typical paths |
| ------- | -------- | --------- | ------------- |
| **Adopter-public** | External consumers, new contributors | Docusaurus allowlist (when portal enabled) | `docs/guides/**`, adopter `docs/documentation/**` |
| **Maintainer KB** | Maintainers, agents (internal) | **Git** (`docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`) | Investigations, runbooks, install diaries |
| **Workflow SoT** | Release, kanban, governance | **Git** (binding) | `docs/kanban/**`, `docs/governance/**`, binding ADRs, changelogs |

**Installer emission:** `rw-config.yaml` → `documentation_surfaces` (see [rw-config schema](../../../packages/frameworks/workflow-mgt/config/rw-config-schema.md)).

---

## Required top-level layout (full-stack profile)

After **Mode C** / Path 2 layered install, the host repo should contain:

```text
docs/
├── kanban/                    # Workflow SoT — single active root (ADR-018)
│   ├── kboard.md              # Sole active MoSCOW board
│   ├── epics/                 # Lowercase padded paths (UXR-014)
│   └── fr-br/                 # FR / BR / UXR intake
├── governance/                # Host policies + adopted ADK standards (optional mirror)
├── guides/                    # Adopter-public guides (portal allowlist when used)
├── changelog-and-release-notes/
│   └── changelog-archive/     # Detailed release archives (rw-config changelog_dir)
├── knowledge/                 # Maintainer KB (git-internal per ADR-026)
│   └── articles/              # Long-form synthesis, install diaries (mirrored)
└── journals/                  # Forensic / agent-run logs (TTL per rw-config)

.adk/
└── release-state.db           # When release_state_backend: sqlite (before first RW)

rw-config.yaml                 # Single path SoT for workflow scripts
```

**Not in schema (host-specific):** application source (`src/`, `app/`), product README, CI configs.

---

## Path-specific overlays

### Path 1 — Brownfield in-place (Arm A)

- Preserve host `docs/` where it does not conflict with `kanban_root`.
- **Do not** duplicate ai-dev-kit reference epics 1–23 as product backlog.
- Legacy PM may remain in place until KMA or incremental migration completes.

### Path 2 — Shell + selective migration (Arm B)

- Legacy PM/docs **archived** (e.g. `docs-pre-ai-dev-kit/`) — git history retained.
- **Single** active `kanban_root` after KMA; no dual-tree at Install RC.
- Maintainer install evidence: `adk-feedback/attempt-NN/` or host equivalent (thin pointers OK).

### Path 3 — Strangler coexist

- Declare canonical `kanban_root` in `rw-config.yaml` immediately.
- Legacy tree **read-only** + redirect stubs only; time-boxed eliminate phase documented in task doc.

---

## Documentation profiles (`rw-config.yaml`)

| Profile | `use_kanban` | Maintainer KB | Portal |
| ------- | ------------ | ------------- | ------ |
| **RW-only** | `false` | Optional `docs/knowledge/` | Optional |
| **RW + Kanban** | `true` | Recommended | Optional |
| **Full stack** | `true` | **Required** structure above | Recommended for OSS |

**Maintainer editor:** `maintainer_editor_profile: obsidian-personal|obsidian-team` scaffolds Obsidian vault hints — see `docs/maintainer/OBSIDIAN.md`.

---

## Install RC cross-check

The [Install RC checklist](../../../packages/frameworks/workflow-mgt/config/install-rc-checklist.yaml) includes:

- `documentation_surfaces` or this file linked from INSTALL / task doc
- No maintainer corpora published through Docusaurus without allowlist update
- Comprehension summary: state kanban root, docs authority, version truth, and **restore ≠ migrate**

**Validator:**

```bash
python packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py \
  --project-root . --profile arm-b --strict
```

---

## References

- [INSTALL_IN_YOUR_PROJECT.md](../../../INSTALL_IN_YOUR_PROJECT.md) — Adopter Path Selector
- [install-rc-checklist.md](install-rc-checklist.md)
- [release-state-sqlite-mode.md](../../../packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md)
- [adopter-public authoring](adopter-public-documentation-authoring.md)
