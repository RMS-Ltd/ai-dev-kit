---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T19:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-detection-conventions
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "frameworks"]
  audience: ["agents", "developers"]
  applies_to:
    activities:
      - "locale-detection"
      - "runtime-localisation"
---

# Locale detection conventions

**Purpose:** Canonical rules for detecting and resolving the effective project locale at runtime (E21:S02:T03).

**Authority:** Implements [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) T03 handoff. **Planning:** [IPP-E21S02T03](../../implementation-cycles/IPP-E21S02T03-locale-detection.md).

**Related:** [locale-file-structure-conventions.md](locale-file-structure-conventions.md) · [localisation_config.py](../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)

---

## 1. Detection precedence (`resolve_language`)

| Priority | Source | Notes |
| -------- | ------ | ----- |
| 1 | `override` parameter | Explicit caller override |
| 2 | `ai-dev-kit-config.yaml` | Only when file exists with valid `localisation.language` |
| 3 | `ADK_LOCALE` env var | Project-level env override |
| 4 | System locale | `LC_ALL`, then `LANG`, then `locale.getlocale()` |
| 5 | `accept_language` parameter | HTTP `Accept-Language` string (portal callers) |
| 6 | `default_locale` | `en-GB` (`DEFAULT_LANGUAGE`) |

`read_localisation_config()` remains **config-only** and returns `en-GB` when the file is missing. Use `resolve_language()` for the full precedence chain.

---

## 2. Environment variables

| Variable | Role |
| -------- | ---- |
| `ADK_LOCALE` | Primary env override (BCP 47 tag, e.g. `en-US`) |
| `ADK_ACCEPT_LANGUAGE` | Test/dev hook for `detect_browser_locale()` when no header is passed |

Standard POSIX `LANG` / `LC_ALL` are read by `detect_system_locale()` only (not duplicated in `ADK_LOCALE`).

---

## 3. Browser / Accept-Language

**Browser locale** means RFC 7231 `Accept-Language` parsing — not a CLI stdin probe.

- `parse_accept_language(header)` — parse and sort by `q` weight
- `detect_browser_locale(accept_language)` — pick best registry match from header

Portal and HTTP integrations pass the header to `resolve_language(..., accept_language=...)`.

---

## 4. Tag normalization and mapping

`parse_locale_tag(raw)` normalizes:

- Underscores → hyphens (`en_GB` → `en-GB`)
- Encoding suffix stripped (`en_GB.UTF-8` → `en-GB`)
- Region subtags uppercased (`en-us` → `en-US`)

`map_to_supported_locale(tag)` maps to the nearest entry in `FR006_SUPPORTED_LOCALES` (manifest `supported_locales` registry):

1. Exact match
2. Language-only match (e.g. `en` → `en-GB`; `zh` → `zh-CN`)
3. Fallback → `en-GB`

Detection may return FR-006 registry codes beyond `en-GB` / `en-US`. Asset resolution for non-English locales requires on-disk trees (S03+).

---

## 5. Task boundaries

| Task | Scope |
| ---- | ----- |
| **E21:S02:T03** | Detection APIs + `resolve_language` precedence (this doc) |
| **E21:S02:T04** | CLI `--locale`, config rewrite, installer `--force` re-prompt — [locale-switching-conventions.md](locale-switching-conventions.md) |
| **E21:S02:T06** | `resolve_locale_key()` for YAML key catalogs |
| **E21:S02:T07** | Asset fallback chain extensions |

---

## 6. Tests

```bash
pytest tests/test_locale_detection.py
pytest tests/test_localisation_config_read_resolve.py
pytest -m fr006
```

---

## References

- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [IPP-E21S02T03](../../implementation-cycles/IPP-E21S02T03-locale-detection.md)
- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
