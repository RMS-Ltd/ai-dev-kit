---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T23:45:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-fallback-conventions
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "frameworks"]
  audience: ["agents", "developers"]
  applies_to:
    activities:
      - "locale-fallback"
      - "runtime-localisation"
---

# Locale fallback conventions

**Purpose:** Canonical locale fallback order for assets and translation keys (E21:S02:T07).

**Authority:** Implements [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) T07 handoff. **Planning:** [IPP-E21S02T07](../../implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md).

**Related:** [locale-key-conventions.md](locale-key-conventions.md) · [locale-file-structure-conventions.md](locale-file-structure-conventions.md) · [localisation_config.py](../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)

---

## 1. Fallback order (ADR-024)

```text
selected locale → default_locale → en-GB → en-US → canonical template (assets only)
```

| Step | Source |
| ---- | ------ |
| 1 | `resolve_language(project_root)` or explicit `language` override |
| 2 | `manifest.default_locale` (typically `en-GB`) |
| 3 | `DEFAULT_LANGUAGE` (`en-GB`) |
| 4 | `SECONDARY_ENGLISH_LOCALE` (`en-US`) |
| 5 | `fallback_path` argument (whole-file assets only) |

Chain entries are **deduplicated** and normalized via `map_to_supported_locale` (FR-006 registry tags such as `fr` and `es` are preserved, not collapsed early).

---

## 2. APIs

| Function | Role |
| -------- | ---- |
| `_language_fallback_chain(manifest, preferred)` | Internal ordered chain builder |
| `language_fallback_chain(locales_root, preferred)` | Public introspection for tests/diagnostics |
| `resolve_locale_asset(...)` | Walk chain; return first existing file; then `fallback_path` |
| `resolve_locale_key(...)` | Walk chain; return first matching key; else `KeyError` |

**Keys:** No canonical key store — chain ends at `en-US` with `KeyError` if the key is absent.

**Templates:** `resolve_kanban_intake_template` passes canonical `kanban/templates/*.md` as `fallback_path`.

---

## 3. Examples

```python
from pathlib import Path
from localisation_config import language_fallback_chain, workflow_locales_root

chain = language_fallback_chain(workflow_locales_root(), "fr")
# ["fr", "en-GB", "en-US"]
```

---

## 4. Tests

```bash
pytest tests/test_locale_fallback_chain.py
pytest tests/test_locale_key_resolution.py
pytest -m fr006
```

---

## References

- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [IPP-E21S02T07](../../implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md)
- [IPP-E21S02T06](../../implementation-cycles/IPP-E21S02T06-locale-key-system.md)
