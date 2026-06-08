---
lifecycle: evergreen
created_at: 2026-06-07T12:00:00Z
housekeeping_policy: keep
---

# Knowledge Base (maintainer)

Maintainer KB artifacts for **FR-114** Notion migration (**E05:S08:T03**) and Notion-first authoring (**E05:S08:T04**).

## Canonical manifest

[`fr114-notion-migration-manifest.json`](fr114-notion-migration-manifest.json) — source path → Notion URL → stub status.

## Notion-first authoring

**Default:** create and edit maintainer documentation in **Notion** (Engineering KB). See [ADR-024](../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) and the **`maintainer-kb`** track in [`AGENTS.md`](../../AGENTS.md).

## Git stub format

Canonical contract: [ADR-024 §5](../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md#5-canonical-git-stub-template). Apply via [`scripts/apply_notion_stubs.py`](../../scripts/apply_notion_stubs.py).

Required frontmatter: `lifecycle`, `created_at`, `housekeeping_policy`, `notion_sot: true`.

## Deprecated

[`kb-migration-map.json`](kb-migration-map.json) — superseded T02 map (do not use).

## Index

- [`KB-INDEX.md`](KB-INDEX.md) — human-readable inventory (`scripts/kb_index.py`)
- [`KB-INDEX.json`](KB-INDEX.json) — machine-readable

## Notion (FR-114 bootstrap)

| Surface | URL |
| ------- | --- |
| Hub | `rw-config.yaml` → `notion_hub_url` |
| Engineering KB | `rw-config.yaml` → `notion_kb_url` |

IA areas under Engineering KB: **Decisions**, **Reference**, **Investigations**, **Records**.

## Scripts

| Script | Purpose |
| ------ | ------- |
| `scripts/notion_migration_manifest.py` | Generate/update manifest |
| `scripts/notion_import_fr114_batch.py` | Prepare Notion import batches |
| `scripts/record_notion_import_results.py` | Record Notion page URLs |
| `scripts/apply_notion_stubs.py` | Apply git stubs from manifest |
| `scripts/kb_index.py` | Regenerate KB index |
