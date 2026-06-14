# Changelog — v0.6.9.35+2

**Release Date:** 2026-06-14 17:55:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 35  
**SemVer:** v0.4.1164+2  
**Task:** E06:S09:T35 — Agentic KMA migration UAT and benchmark

---

## Summary

Change implemented: agentic-first legacy kanban migration (KMA) adopter playbook, guardrails manifest, objective agentic vs automated benchmark tests, and `kma_ingest.py` inline task token fix in story bodies.

---

## Added

- **`ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md`** — adopter agent playbook (read → reason → propose → sign-off → synthesise).
- **`manifests/kma-agent-guardrails.yaml`** — invariants and optional helpers only.
- **Benchmark** — `test_kma_agentic_vs_automated.py`, `kma_migration_benchmark.py`, `benchmark-ground-truth.yaml`.
- **Fixture** — `migration-proposal-example.md` (unsigned UAT reference).

---

## Changed

- **`kma_ingest.py`** — scan story file bodies for inline `E:S:T` tokens.
- **`validate_migration_map.py`** — advisory lint docstring.
- **KMA docs** — INSTALL, `kma.md`, AGENTS.md, execution guide, SBL attempt 09 — agentic-first language.

---

## Related

- [FR-127](../../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- Prior: [CHANGELOG_v0.6.9.35+1.md](CHANGELOG_v0.6.9.35+1.md)
