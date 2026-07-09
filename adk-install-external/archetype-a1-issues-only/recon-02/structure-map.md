# Structure map — subject-A1-live

**Recon:** A1 recon-02 · **Date:** 2026-07-01

## Top-level inventory

| Path | Type | PM / doc relevance |
| ---- | ---- | ------------------ |
| `README.md` | doc | Primary project surface (~200 KB curated list) |
| `CONTRIBUTING.md` | doc | Contributor + issue workflow |
| `LICENSE` | legal | MIT |
| `scripts/` | code | Maintenance scripts + nested README |
| `.github/` | meta | Workflows (3), issue template, PR template |
| `docs/kanban/` | — | **Absent** |

## Adoption path signals

- **Brownfield indicators:** Mature repo, CI, CONTRIBUTING, issue templates
- **No kanban / no version file:** Arm B KMA has no legacy tree to migrate
- **Hypothesis:** Path selector should route to **path-1** or new **issues-only** sub-mode — not Arm B

## Stack

- Node/scripts (not Python workflow-kit primary)
- No `rw-config.yaml`, no `version.py`
