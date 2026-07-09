# Structure map — subject-A2-live

**Recon:** A2 recon-02 · **Date:** 2026-07-01

## Doc / PM surfaces

| Surface | Path | Notes |
| ------- | ---- | ----- |
| Doc site | `docs/` + `.vitepress/` | Multi-locale (en, es, fr, zh); not ADK maintainer KB |
| Root governance | `AGENTS.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `COLLABORATOR_GUIDE.md`, `ECOSYSTEM.md`, … | 14 root `.md` files |
| Examples | `examples/*/` | Per-feature demo folders |
| Library | `lib/` | Primary source |

## Absent (ADK-shaped)

- `docs/kanban/`, `rw-config.yaml`, `version.py`, epic/story task docs

## Detection stress

Structure heuristics may conflate:

1. `docs/` VitePress public site (high file count, assets)
2. Root governance markdown (lowercase PM signal)
3. `examples/` (tutorial noise)

**Hypothesis:** KMA ingest proposal quality degrades without doc-site exclusion rules.
