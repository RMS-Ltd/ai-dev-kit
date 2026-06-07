---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Release Metadata Ingest Guide

**FR-115 / FR-116** — async ingest read model for changelog and semver-registry corpora.

---

## Overview

| Layer | Artifact | Role |
| ----- | -------- | ---- |
| SoT (git) | `CHANGELOG.md`, archive `CHANGELOG_v*.md`, `semver-registry.yaml` | RW writes; validators block here |
| Read model | `.data/adk-release-metadata.sqlite` (gitignored) | Query + audit; regenerable |

---

## Configuration (`rw-config.yaml`)

```yaml
release_metadata_store:
  path: .data/adk-release-metadata.sqlite
  gitignore: true

ingest:
  enabled: true
  semver_registry_file: semver-registry.yaml
  incremental: true
```

`main_changelog` and `changelog_dir` are used when ingest paths are omitted.

---

## Commands

```bash
# Full rebuild (after clone or format change)
python packages/frameworks/workflow-mgt/scripts/release_metadata/ingest_release_metadata.py --full

# Incremental (default; skips when manifest unchanged)
python packages/frameworks/workflow-mgt/scripts/release_metadata/ingest_release_metadata.py

# Query
python -m release_metadata.query --version 0.2.1.24+3
python -m release_metadata.query --est E02:S01:T25 --json

# Audit (advisory; --strict for CI)
python -m release_metadata.audit_semver
python -m release_metadata.audit_semver --strict
```

Run from project root with `rw-config.yaml` present.

---

## CI

`.github/workflows/release-metadata-ingest.yml` — daily schedule + `workflow_dispatch`; uploads 7-day SQLite artifact.

Optional RW Step 9 advisory: `validate_ingest_freshness.py` (non-blocking by default).

---

## Adopters

- **Optional:** cron/GHA ingest is not required for RW to function.
- **Fallback:** markdown/YAML only; delete `.data/` and re-ingest when enabling read model.

---

## References

- [ADR-025](../../../docs/architecture/standards-and-adrs/ADR-025-release-metadata-async-ingest-read-model.md)
- [IPP-E02S01T25](../../../docs/implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md)
