---
lifecycle: evergreen
created_at: 2026-06-07T12:00:00Z
housekeeping_policy: keep
---

# Knowledge Base (maintainer)

Maintainer KB artifacts for **FR-114** Notion migration (**E05:S08:T03**).

## Canonical manifest

[`fr114-notion-migration-manifest.json`](fr114-notion-migration-manifest.json) — source path → Notion URL → stub status.

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

## Stub format (interim until T04 ADR)

Migrated git files use `notion_sot: true` frontmatter and a single Notion SoT link. IPP/ICW and binding ADRs remain full text in git.
