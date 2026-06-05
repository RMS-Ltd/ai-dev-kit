---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T07:30:00Z
expires_at: null
housekeeping_policy: keep
---

# `rw_config_loader` entrypoint boundary (unified `rw-config.yaml` behavior)

This document defines the **entrypoint boundary** for loading `rw-config.yaml`
in workflow-mgt scripts/validators.

## Canonical module

All call sites should derive configuration from:

- `packages/frameworks/workflow-mgt/scripts/rw_config_loader.py`

## Canonical loader functions (return-shape contract)

### `load_rw_config(project_root: Path | None = None) -> dict | None`

- Loads `${project_root}/rw-config.yaml` (or `Path.cwd()/rw-config.yaml` when
  `project_root` is omitted).
- Returns:
  - `dict` when the YAML file exists and parses to a mapping
  - `None` when missing/unreadable/invalid-YAML

### `load_rw_config_from_path(config_path: Path | None = None) -> dict | None`

- Loads an explicit config file path.
- Returns:
  - `dict` on success (YAML mapping)
  - `None` on missing/unreadable/invalid-YAML

### `load_rw_config_or_empty(project_root: Path | None = None) -> dict`

- Same loading behavior as `load_rw_config`, but never returns `None`.
- Missing/unreadable/invalid config becomes `{}`.

### `require_rw_config(project_root: Path | None = None) -> dict`

- Like `load_rw_config_or_empty`, but raises when config is missing/unreadable.

## Parity guarantees (why this module exists)

The goal is that downstream scripts/validators consume **identical config-derived
inputs**, regardless of:
- current working directory,
- whether callers pass `--config` (explicit path) vs relying on defaults, or
- which legacy wrapper is still imported by a tool.

This project adds/maintains parity coverage via:
- `tests/test_rw_config_loader.py` (shared loader behavior + cwd/project-root stability)
- workflow-mgt script unit tests that cover the deterministic entrypoint behavior.

## Common `rw-config.yaml` keys (used across the toolchain)

The shared loader intentionally does not validate schema keys; individual tools
interpret the keys they need. Common keys include:
- `version_file`, `main_changelog`, `changelog_dir`, `readme_file`, `scripts_path`
- `use_kanban`, `kanban_root`, and doc-pattern keys such as `epic_doc_pattern`,
  `story_doc_pattern`, `task_doc_pattern`, plus `kanban_board`
- semver/versioning knobs such as `semver_mapping_strategy`, `versioning_mode`
- board stamp hygiene knobs under `board_stamp`

## Practical rules for adopters

- Do not re-implement YAML loading; import from `rw_config_loader.py`.
- Prefer `load_rw_config_from_path(...)` when you have an explicit config path.
- Prefer `load_rw_config(project_root=...)` when you already know the repo root.
- Keep return-shape expectations consistent:
  - use `load_rw_config_or_empty` for “optional config”
  - use `require_rw_config` for “config must exist” validators

