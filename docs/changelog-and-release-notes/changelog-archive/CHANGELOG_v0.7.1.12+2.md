# Changelog v0.7.1.12+2

**Release Date:** 2026-06-08 12:54:03 UTC  
**Epic:** 7 | **Story:** 1 | **Task:** 12  
**SemVer:** v0.4.11+2

---

## Summary

E07:S01:T12 — **Change implemented:** FR-118 Kanban path promotion — `git mv` to `docs/kanban/`, `rw-config` rewire, rituals removal, bulk active-surface migration (`apply_kanban_root_migration_fr118.py`), greenfield sync, ADR-007 update, adopter migration docs. FR-118 → IMPLEMENTED.

---

## Changes

### Kanban topology (FR-118)

- Promoted book Kanban tree: `docs/project-management/kanban/` → **`docs/kanban/`** (`git mv`, history preserved).
- Updated `rw-config.yaml`: `kanban_root: docs/kanban`, `fr_br_root: docs/kanban/fr-br`.
- Deleted vestigial `docs/project-management/rituals/` after framework KB link sweep to `docs/governance/kanban/`.
- Added `docs/project-management/README.md` redirect stub.

### Tooling and framework

- **CREATE:** `apply_kanban_root_migration_fr118.py` — active-surface path rewriter (~5,166 replacements).
- Framework installer default `--kanban-path`: `docs/kanban`.
- `sync_greenfield_install.py` run; `kb_stub_sweep.py` paths updated.

### Planning and governance

- **CREATE:** `IPP-E07S01T12-kanban-path-promotion-fr118.md`, `KANBAN-REHOUSING-INVENTORY.md`.
- **UPDATE:** ADR-007 (book Kanban layer), `docs/governance/README.md`, `INSTALL_IN_YOUR_PROJECT.md` migration section.

### Kanban (Step 7)

- E07:S01:T12 → **COMPLETE**; FR-118 → **IMPLEMENTED**; kboard row updated.

---

## Verification

- `validate_branch_context.py --strict` — pass
- `apply_kanban_root_migration_fr118.py --dry-run` — active surfaces clean (migration script literals exempt)
- Changelog archive paths exempt per FR-118-F7
