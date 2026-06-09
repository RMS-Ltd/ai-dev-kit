---
lifecycle: evergreen
created_at: 2026-06-07T12:00:00Z
housekeeping_policy: keep
---

# Knowledge Base (maintainer)

Maintainer KB for **ai-dev-kit**. **Git is the authoritative source** for all content under `docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`, and related maintainer trees ([FR-121](../kanban/fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) wave 1 @ E05:S08:T05).

## Canonical manifests

| Manifest | Purpose |
| -------- | ------- |
| [`fr121-reverse-migration-manifest.json`](fr121-reverse-migration-manifest.json) | FR-121 reverse migration evidence (git restore status per path) |
| [`fr114-notion-migration-manifest.json`](fr114-notion-migration-manifest.json) | Historical FR-114 forward migration inventory (`reverse_migration_complete: true`) |

## Git authoring (default)

Create and edit maintainer documentation at **repo paths** under `docs/knowledge/`, `docs/maintenance/`, and `docs/analysis/`. Agent bootstrap rewire to git-first authoring is **E05:S08:T06** (ADR-026).

Docusaurus publishes only adopter-public allowlisted paths; maintainer trees remain excluded from portal CI ([FR-114](../kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)).

## Notion (optional archive)

Notion Engineering KB is **no longer SoT** for ADK maintainer content. URLs in `rw-config.yaml` may remain as optional archive references until decommission.

| Surface | URL |
| ------- | --- |
| AI Dev Kit (RMS teamspace entry) | `rw-config.yaml` → `notion_hub_url` |
| AI Dev Kit maintainer KB (archive) | `rw-config.yaml` → `notion_kb_url` |

## Deprecated

| Artifact | Status |
| -------- | ------ |
| [`kb-migration-map.json`](kb-migration-map.json) | Superseded T02 map — do not use |
| `scripts/apply_notion_stubs.py` | Deprecated FR-114 forward stub tool — use `reverse_notion_migration_fr121.py` for restore |

## Index

- [`KB-INDEX.md`](KB-INDEX.md) — human-readable inventory (`scripts/kb_index.py`)
- [`KB-INDEX.json`](KB-INDEX.json) — machine-readable

## Scripts

| Script | Purpose |
| ------ | ------- |
| `scripts/reverse_notion_migration_fr121.py` | Restore full markdown from pre-stub git commit (FR-121) |
| `scripts/notion_migration_manifest.py` | Generate/update FR-114 manifest (historical) |
| `scripts/kb_index.py` | Regenerate KB index |
