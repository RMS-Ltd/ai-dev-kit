# MoSCOW state icons (UXR-012 / E4:S13:T07)

## Purpose

Prefix every active MoSCOW row on `kboard.md` and `fbuboard.md` with a **canonical Set A (emoji)** icon immediately before the status word (e.g. `TODO`, `IN PROGRESS`, `RESOLVED`), while keeping the status text for grep and legacy validators.

## Source of truth

- **Python module:** `packages/frameworks/workflow mgt/scripts/kanban/state_icons.py` — primary/fallback tables, alias normalization, `inject_primary_icon_into_moscow_line`, `apply_icons_to_moscow_board_content`.
- **Research / policy:** `docs/project-management/kanban/fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md`, `kanban-board-guide.md`, `kanban-governance-policy.md`.

## Operator commands

```bash
# Backfill corpus (idempotent; preserves | Last modified stamps)
python "packages/frameworks/workflow mgt/scripts/kanban/backfill_board_state_icons.py" \
  --project-root . \
  --report-json docs/changelog-and-release-notes/changelog-archive/four-surface-reports/uxr012-icon-backfill-applied.json

# Validate (strict = exit 1 on any missing icon)
python "packages/frameworks/workflow mgt/scripts/validation/validate_kanban_state_icons.py" --project-root . --strict
```

## UKW / RW integration

- The canonical row pipeline (`ROW_TRANSFORM_CONTRACT_*`) includes a **`state_icons`** step after stamp/timestamp enforcement.
- **FR-097:** hygiene-only runs must not rewrite `Last modified`. Icon injection is stamp-neutral when only icons are missing.
- **Release readiness:** Gate 9 (`MoSCOW state icons`) runs in `validate_release_readiness.py` when gates 1–9 are selected (default includes Gate 9).

## Fallback (Set B)

Plain-text contexts (email, some terminals) may substitute **Set B** Unicode symbols per UXR-012. Repo board files remain **Set A only**.
