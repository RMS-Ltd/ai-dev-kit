---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# CLI Accessibility Conventions

**Status:** Active  
**Version:** 1.0.0  
**Task:** E21:S08:T03  
**ADR:** [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md) Layer 1

---

## Purpose

Terminal output from `ai-dev-kit` must be usable with assistive technology and low cognitive load. Status must not rely on colour or emoji alone.

---

## Status helpers (`cli/utils.py`)

| Helper | Stream | Required label | Optional glyph (color on) |
| ------ | ------ | -------------- | ------------------------- |
| `print_error` | stderr | `Error:` | ❌ |
| `print_success` | stdout | `Success:` | ✅ |
| `print_warning` | stderr | `Warning:` | ⚠️ |
| `print_info` | stdout | `Info:` | ℹ️ |

All commands should use these helpers rather than raw `print()` for user-facing status.

---

## NO_COLOR and `--no-color`

- When environment variable `NO_COLOR` is set (any value), emoji and ANSI are suppressed per [no-color.org](https://no-color.org/).
- Root flag `--no-color` sets `NO_COLOR=1` before subcommand execution.

---

## Install errors (FR-108)

Use `emit_install_error` / `format_banner` from `adk_install_errors.py`. Do not wrap FR-108 banners with emoji helpers. Shape: `ERROR [ADK-…] {summary}`.

---

## List and status markers

Use ASCII prefixes in command output:

- Success step: `OK {message}`
- Failure step: `FAIL {message}`
- Bullet lists: `  - {item}` (not `•`, `✓`, or `✗`)

---

## Interactive prompts

Locale and setup prompts use numbered options with explicit defaults in text (see `prompt_language_choice` in `localisation_config.py`). Prefer `--non-interactive` or flags (`--locale`) for scripted use.

---

## Verification

- `tests/test_cli_accessibility.py` — Layer 1 regression suite
- Layer 1 exit criteria: ADR-025 §Layer 1 ship gate (L1-1–L1-8)

---

## References

- [ADR-025](../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md)
- [Baseline audit](../../knowledge/analysis/adk-accessibility-baseline-layer1-cli.md)
- [FR-108](../../project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission.md)
