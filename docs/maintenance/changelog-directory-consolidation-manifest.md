---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Changelog directory consolidation manifest (UXR-018 / E05:S01:T76)

**Date:** 2026-06-04  
**IPP:** [IPP-E05S01T76-changelog-directory-consolidation.md](../implementation-cycles/IPP-E05S01T76-changelog-directory-consolidation.md)

## Summary

| Action | Count |
| ------ | ----- |
| Moved to canonical archive | 4 |
| Deleted (byte-identical mirror) | 7 |
| Deleted (canonical retained, mirror differed) | 1 |
| Directories removed | 2 |

## Legacy `docs/changelog/`

| Source | Action | Destination |
| ------ | ------ | ----------- |
| `archive/0.4.14.4+1_epic-renumbering.md` | `git mv` | `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.14.4+1.md` |
| `docs/changelog/` tree | removed | — |

**SHA256 (legacy file):** `1edf6a197dcecd45f213a4ed741ed2d009770dbc1b39c597c012e4c48dec3abe`

## Knowledge mirror `docs/knowledge/changelog-and-release-notes/changelog-archive/`

| File | Canonical | Action |
| ---- | --------- | ------ |
| `CHANGELOG_v0.4.11.7+0.md` | missing | **Moved** to canonical |
| `CHANGELOG_v0.4.11.7+2.md` | missing | **Moved** to canonical |
| `CHANGELOG_v0.5.7.1+1.md` | missing | **Moved** to canonical |
| `CHANGELOG_v0.4.11.7+1.md` | exists (larger) | **Deleted** mirror; kept canonical |
| `CHANGELOG_v0.6.6.6+14` … `+20` (7 files) | MATCH | **Deleted** mirror only |
| Entire `docs/knowledge/changelog-and-release-notes/` | — | **Removed** |

## Active link repairs

| File | Old | New |
| ---- | --- | --- |
| `CHANGELOG_ARCHIVE.md` | `docs/changelog/archive/0.4.14.4+1_epic-renumbering.md` | `CHANGELOG_v0.4.14.4+1.md` |
| `GITHUB_RELEASE_v0.4.14.4+1.md` | same | `CHANGELOG_v0.4.14.4+1.md` |

## Portal

- Removed `Changelog (legacy root)` from `portal/sidebars.js` and `portal/README.md`.
- Updated `docs/changelog-and-release-notes/README.md` single-pillar statement.

## Explicit non-changes

- `rw-config.yaml` `changelog_dir` unchanged.
- Bulk `CHANGELOG_v*.md` bodies not rewritten (RNF3).
- `packages/frameworks/numbering & versioning/integration/integration-examples-external-projects.md` adopter placeholders unchanged.
