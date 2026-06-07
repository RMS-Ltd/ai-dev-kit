# Changelog v0.5.8.3+3

**Release Date:** 2026-06-07 10:31:54 UTC

**Epic:** 5 | **Story:** 8 | **Task:** 3

---

## Summary

E05:S08:T03 — **Change implemented:** FR-114 big-bang Notion migration of maintainer KB — fresh Engineering KB on `rmearssolutions@gmail.com`, `rw-config.yaml` hub/KB URLs, `fr114-notion-migration-manifest.json` (218 entries), git stubs for migrated corpora, IPP/ICW and binding ADRs retained in git, deprecated `kb-migration-map.json`, KB-INDEX regen, migration tooling + manifest tests; portal MDX fix. SemVer **v0.4.1032+3**.

---

## Changed

### Notion clean slate (FR-114 F3 / RF1–RF2)

- Fresh **AI Dev Kit Hub** + **Engineering KB** under `rmearssolutions@gmail.com` with IA areas (Decisions, Reference, Investigations, Records).
- `rw-config.yaml` — `notion_hub_url`, `notion_kb_url` updated to FR-114 bootstrap pages.

### Migration manifest & tooling (RF3, RF10)

- `docs/knowledge/fr114-notion-migration-manifest.json` — 218 `source_path → notion_url → stub_applied` entries; binding ADR exclusions; IPP/ICW exclusions.
- `scripts/notion_migration_manifest.py`, `scripts/apply_notion_stubs.py`, and batch import helpers.
- `docs/knowledge/kb-migration-map.json` — deprecated (superseded banner).
- `docs/knowledge/README.md` — operator guide.

### Git stubs (FR-114 NF3 / RF6–RF8)

- Stubbed migrated trees: `knowledge/`, `analysis/`, `maintenance/`, `journals/`, non-binding `architecture/`, non-IPP/ICW `implementation-cycles/`.
- Retained full text: Kanban, IPP/ICW, binding ADRs, governance, adopter-public allowlist corpus.

### Index & tests

- `docs/knowledge/KB-INDEX.md` + `.json` regenerated via `scripts/kb_index.py` (`import yaml` fix).
- `tests/test_notion_migration_fr114_manifest.py` — manifest schema, exclusion, stub frontmatter checks.

### Portal regression guard

- `portal/blog/RELEASE-NOTES-POLICY.md` — MDX-safe truncate marker (`{/* truncate */}`).

### Planning artifact

- `docs/implementation-cycles/IPP-E05S08T03-big-bang-notion-migration-maintainer-kb-fr114.md` — linked from T03 task doc.

---

## Notes

- **27** manifest entries have live Notion pages (records pilot); remaining entries use deterministic synthetic URLs pending chunked MCP import (operator follow-up).
- Three-surface ADR and `AGENTS.md` Notion-first routing remain **E05:S08:T04** scope.
- **BUILD +3** — remote already held tagged `+1` (intake) and `+2` (policy); implementation ships on `+3` per BR-097 tag immutability.
