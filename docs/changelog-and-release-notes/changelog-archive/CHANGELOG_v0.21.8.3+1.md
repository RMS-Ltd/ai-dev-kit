# Changelog v0.21.8.3+1

**Release Date:** 2026-06-07 19:14:19 UTC  
**Epic:** 21 | **Story:** 08 | **Task:** 03  
**SemVer:** v0.4.1084+1

---

## Summary

E21:S08:T03 — Layer 1 CLI accessibility: text-first `print_*` helpers, `NO_COLOR` / `--no-color`, stderr warnings, ASCII status markers.

---

## Added

- [cli-accessibility-conventions.md](../../governance/standards/cli-accessibility-conventions.md) — Layer 1 CLI accessibility standard (ADR-025 L1-8)
- `tests/test_cli_accessibility.py` — A1–A8 coverage for `print_*`, `NO_COLOR`, `--no-color`, FR-108 banner preservation
- [IPP-E21S08T03](../../implementation-cycles/IPP-E21S08T03-cli-terminal-accessibility.md) — implementation planning package
- Global `--no-color` flag on root CLI parser (`cli/main.py`)

---

## Changed

- `cli/utils.py` — `color_enabled()`, `_format_status()`; mandatory text labels; emoji/ANSI only when color enabled; `print_warning` → stderr
- `cli/commands/migrate.py`, `cli/commands/remove.py`, `cli/exceptions.py` — Unicode glyphs replaced with ASCII markers (`OK`/`FAIL`/`-`)
- [framework-dependency-cli-reference.md](../../documentation/user-docs/framework-dependency-cli-reference.md) — Accessibility section (`NO_COLOR`, `--no-color`, text labels)
- `cli/README.md` — `--no-color` note
- Story 08, Epic 21, FR-115, kboard — T03 COMPLETE; Layers 2–5 remain DEFERRED

---

## Preserved

- `packages/frameworks/workflow-mgt/scripts/adk_install_errors.py` — FR-108 `ERROR [ADK-…]` banners unchanged (ADR-025 L1-6)

---

## References

- [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md)
- [adk-accessibility-baseline-layer1-cli.md](../../knowledge/analysis/adk-accessibility-baseline-layer1-cli.md)
- [FR-115](../../project-management/kanban/fr-br/FR-115-accessibility-standards-compatibility.md)
