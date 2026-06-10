---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T22:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-formatting-conventions
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "frameworks"]
  audience: ["agents", "developers"]
  applies_to:
    activities:
      - "locale-formatting"
      - "runtime-localisation"
---

# Locale formatting conventions

**Purpose:** Canonical rules for locale-aware date, time, and number formatting (E21:S02:T05).

**Authority:** Implements [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) T05 handoff. **Planning:** [IPP-E21S02T05](../../implementation-cycles/IPP-E21S02T05-locale-formatting.md).

**Related:** [locale-detection-conventions.md](locale-detection-conventions.md) · [locale-switching-conventions.md](locale-switching-conventions.md) · [locale_formatting.py](../../../packages/frameworks/workflow-mgt/scripts/locale_formatting.py)

---

## 1. Module and dependency

| Item | Rule |
| ---- | ---- |
| Module | `packages/frameworks/workflow-mgt/scripts/locale_formatting.py` |
| Primary engine | [Babel](https://babel.pocoo.org/) (`babel.dates`, `babel.numbers`) when installed |
| Dev-kit install | `Babel>=2.12` in `requirements.txt` and `setup.py` |
| RW installer | **Not** in `INSTALLER_DEPENDENCIES` (pyyaml-only minimal adopters remain valid) |
| Optional adopters | `pip install Babel` for locale-accurate formatting |

---

## 2. Public API

| Function | Role |
| -------- | ---- |
| `is_babel_available()` | Introspection for tests and diagnostics |
| `to_babel_locale(tag)` | `en-GB` → `en_GB` via `map_to_supported_locale` |
| `get_locale_format_profile(tag)` | Per-locale defaults (`currency`, `date_style`, `time_style`) |
| `format_date(value, locale_tag, *, style='medium')` | Date or datetime input |
| `format_time(value, locale_tag, *, style='short')` | Time or datetime input |
| `format_datetime(value, locale_tag, *, style='medium')` | Combined |
| `format_decimal(value, locale_tag, *, pattern=None)` | Locale decimal |
| `format_number(value, locale_tag)` | Grouped number |
| `format_currency(value, locale_tag, currency=None)` | Uses profile default currency when omitted |
| `format_for_project(project_root, kind, value, **kwargs)` | Resolves locale via `resolve_language()` |

`kind` for `format_for_project`: `date`, `time`, `datetime`, `decimal`, `number`, `currency`.

---

## 3. Per-locale configuration

`LOCALE_FORMAT_PROFILES` in `locale_formatting.py` holds defaults for all `FR006_SUPPORTED_LOCALES`:

| Tag | Default currency |
| --- | ---------------- |
| en-GB | GBP |
| en-US | USD |
| es, fr, de, pt | EUR |
| zh-CN | CNY |
| zh-TW | TWD |
| ja | JPY |
| ru | RUB |
| ar | SAR |

Manifest v2 is **not** extended for formatting profiles (T06 owns keys/manifest).

---

## 4. Stdlib fallback (Babel absent)

When `import babel` fails, formatters **must not raise**; they return stable locale-agnostic strings:

| Kind | Fallback |
| ---- | -------- |
| date | `strftime` per style (`medium` → `%d %b %Y`) |
| time | `strftime` per style (`short` → `%H:%M`) |
| datetime | `strftime` (`medium` → `%Y-%m-%d %H:%M`) |
| number / decimal | US-like grouping (`1,234.56`) |
| currency | `{currency} {amount}` using profile default |

---

## 5. Usage

```python
from locale_formatting import format_date, format_for_project
from datetime import date
from pathlib import Path

# Explicit locale
print(format_date(date.today(), "de"))

# Project config locale
print(format_for_project(Path("."), "currency", 42.50))
```

CLI re-exports: `cli/localisation.py`.

---

## 6. Tests

```bash
pytest tests/test_locale_formatting.py tests/test_locale_cultural_formatting.py
pytest -m fr006
```

---

## 7. Per-locale smoke examples

**Fixture:** `2026-06-07`, `14:30`, amount `1234.56` — see [`tests/fixtures/locale_formatting_smoke.yaml`](../../tests/fixtures/locale_formatting_smoke.yaml).

| Locale | Date | Time | Number | Currency |
| ------ | ---- | ---- | ------ | -------- |
| `es` | 7 jun 2026 | 14:30 | 1.234,56 | 1.234,56 € |
| `fr` | 7 juin 2026 | 14:30 | 1 234,56 | 1 234,56 € |
| `de` | 07.06.2026 | 14:30 | 1.234,56 | 1.234,56 € |
| `pt-BR` | 7 de jun. de 2026 | 14:30 | 1.234,56 | R$ 1.234,56 |
| `pt-PT` | 07/06/2026 | 14:30 | 1 234,56 | 1 234,56 € |
| `zh-CN` | 2026年6月7日 | 14:30 | 1,234.56 | ¥1,234.56 |
| `zh-TW` | 2026年6月7日 | 下午2:30 | 1,234.56 | $1,234.56 |
| `ja` | 2026/06/07 | 14:30 | 1,234.56 | ￥1,235 |
| `ru` | 7 июн. 2026 г. | 14:30 | 1 234,56 | 1 234,56 ₽ |
| `ar` | 07/06/2026 | 2:30 م | 1,234.56 | 1,234.56 ر.س. |
| `en-GB` | 7 Jun 2026 | 14:30 | 1,234.56 | £1,234.56 |
| `en-US` | Jun 7, 2026 | 2:30 PM | 1,234.56 | $1,234.56 |

**Validation:** E21:S04:T05 — [`IPP-E21S04T05`](../../implementation-cycles/IPP-E21S04T05-cultural-formatting-validation.md).

---

## References

- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [IPP-E21S02T05](../../implementation-cycles/IPP-E21S02T05-locale-formatting.md)
- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
