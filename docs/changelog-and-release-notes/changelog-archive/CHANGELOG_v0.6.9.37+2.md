# Changelog — v0.6.9.37+2

**Release Date:** 2026-06-15 17:43:58 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 37  
**SemVer:** v0.4.1173+2  
**Task:** E06:S09:T37 — Painless adopter kanban migration workflow (FR-133)

---

## Summary

Change implemented: **FR-133** painless Arm B migration workflow — L1 default depth model, INSTALL `Migrate (default)`, depth guide, COMPREHENSION template, KMA collision/megastory defaults, and `kma.md` load order.

---

## Added

- `packages/frameworks/kanban/guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` — L1/L2/L3 depth model + agent appendix
- `packages/frameworks/workflow-mgt/templates/COMPREHENSION_TEMPLATE.md` — depth achieved + not-performed list
- `packages/frameworks/kanban/templates/MIGRATION_RATIONALIZATION_TEMPLATE.md` — opt-in L2/L3 second pass
- [IPP-E06S09T37](docs/implementation-cycles/IPP-E06S09T37-kanban-migration-depth-rationalization-fr133.md) — implementation plan (IPW)

---

## Changed

- `INSTALL_IN_YOUR_PROJECT.md` — `### Migrate (default)` under Path 2 Arm B
- KMA execution guide, adopter playbook, `LEGACY_KANBAN_MIGRATION.md`, `DUPLICATE_EPIC_POLICY.md` — collision + megastory L1 defaults
- `.claude/commands/kma.md` — painless-path load order
- `install_greenfield_path.py` — COMPREHENSION template + depth guide hints
- Greenfield mirror sync (FR-110)

---

## Related

- [FR-133](docs/kanban/fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [FR-127](docs/kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- MWF `delivery` pipeline: IPW → IDW → RW
