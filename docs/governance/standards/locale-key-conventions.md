---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T23:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-key-conventions
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "frameworks", "cli"]
  audience: ["agents", "developers", "translators"]
  applies_to:
    activities:
      - "locale-key-resolution"
      - "runtime-localisation"
---

# Locale key conventions

**Purpose:** Canonical rules for YAML translation key lookup (E21:S02:T06).

**Authority:** Implements [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) T06 handoff. **Planning:** [IPP-E21S02T06](../../implementation-cycles/IPP-E21S02T06-locale-key-system.md).

**Related:** [locale-file-structure-conventions.md](locale-file-structure-conventions.md) · [localisation_config.py](../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)

---

## 1. Key naming

| Rule | Detail |
| ---- | ------ |
| Format | `domain.section.name` (minimum three dot-separated segments) |
| Domain file | One YAML file per domain: `keys/cli.yaml`, `keys/errors.yaml` |
| Prefix | Every key in `cli.yaml` must start with `cli.` |
| Values | UTF-8 strings; `{{placeholder}}` for substitution |

File layout and manifest registration: [locale-file-structure-conventions.md](locale-file-structure-conventions.md) §4.

---

## 2. Resolution API

```python
resolve_locale_key(
    project_root,
    key,
    *,
    package="workflow-mgt",  # or "kanban"
    substitutions=None,
    language=None,
    frameworks_root=None,
) -> str
```

| Step | Behaviour |
| ---- | --------- |
| 1 | Parse `domain` from first segment of `key` |
| 2 | Load manifest; resolve `language` via `resolve_language(project_root)` unless overridden |
| 3 | Walk `_language_fallback_chain` (preferred → `default_locale` → `en-GB` → `en-US`) |
| 4 | For each language: manifest `keys.{domain}` → load `keys/{domain}.yaml` (cached) |
| 5 | Return value with substitutions applied |
| 6 | If not found → `KeyError` listing `languages_tried` |

**Cache:** Parsed catalogs keyed by `(absolute_path, mtime)` in `_KEY_CATALOG_CACHE`.

---

## 3. Packages

| `package` | Locales root |
| --------- | ------------ |
| `workflow-mgt` (default) | `packages/frameworks/workflow-mgt/locales/` |
| `kanban` | `packages/frameworks/kanban/locales/` |

---

## 4. Errors

| Exception | Cause |
| --------- | ----- |
| `ValueError` | Malformed key shape or unknown `package` |
| `KeyError` | Key absent across fallback chain |
| `FileNotFoundError` | Missing manifest |
| `ValueError` | Invalid catalog YAML (missing `keys` map or domain prefix mismatch) |

---

## 5. Usage

```python
from localisation_config import resolve_locale_key
from pathlib import Path

text = resolve_locale_key(Path("."), "cli.prompt.language_choice")
path_msg = resolve_locale_key(
    Path("."),
    "cli.config.using_existing",
    substitutions={"path": "/project/ai-dev-kit-config.yaml"},
)
```

CLI re-export: `cli/localisation.py`.

---

## 6. Tests

```bash
pytest tests/test_locale_key_resolution.py
pytest -m fr006
```

---

## References

- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [IPP-E21S02T06](../../implementation-cycles/IPP-E21S02T06-locale-key-system.md)
- [IPP-E21S02T02](../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md)
