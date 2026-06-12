# Changelog v0.6.9.31+1

**Release Date:** 2026-06-12 08:05:06 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 31  
**SemVer:** v0.4.1150+1  
**Task:** [E06:S09:T31](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md)  
**FR:** [FR-127](../../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)

---

## Summary

Change implemented: Kanban Migration Agent (KMA) replaces the deprecated `detect→analyze→migrate` tool pipeline for brownfield legacy kanban migration (FR-127 / F22).

---

## Changes

### Change implemented

- **KMA workflow:** Agent execution guide (ingest → propose → operator review → execute → validate), `.claude/commands/kma.md`, proposal template.
- **ADR-028:** Architectural decision — agentic KMA canonical for brownfield; dual-tree preserved.
- **Deprecation:** Installer gates `migration` / `hybrid` / `canonical_adoption` (exit 2); script module banners; deprecation guide.
- **INSTALL / README:** Agentic legacy migration (KMA) brownfield section; tool pipeline pointers removed.
- **Tests:** SBL minimal fixture + `test_kma_migration_deprecation.py`, `test_kma_sbl_fixture_replay.py`.
- **`kma_ingest.py`:** Deterministic read-only legacy corpus inventory helper.
- **Greenfield:** Synced `greenfield-install/` mirror.

---

## Verification

- `pytest tests/kanban/test_kma_migration_deprecation.py tests/kanban/test_kma_sbl_fixture_replay.py tests/test_install_brownfield_docs.py` — PASS (11 passed, 1 skipped).
- Operator SBL full-corpus replay optional via `SBL_LEGACY_KANBAN_ROOT` integration test.
