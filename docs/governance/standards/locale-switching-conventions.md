---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-switching-conventions
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "frameworks", "cli"]
  audience: ["agents", "developers"]
  applies_to:
    activities:
      - "locale-switching"
      - "runtime-localisation"
---

# Locale switching conventions

**Purpose:** Canonical rules for user-initiated locale switches (E21:S02:T04).

**Authority:** Implements [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) T04 handoff. **Planning:** [IPP-E21S02T04](../../implementation-cycles/IPP-E21S02T04-locale-switching.md).

**Related:** [locale-detection-conventions.md](locale-detection-conventions.md) · [localisation_config.py](../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)

---

## 1. Switch API

| Function | Role |
| -------- | ---- |
| `locale_payload_from_tag(tag)` | Map tag → `{language, variant}` for YAML write |
| `switch_locale(project_root, tag, *, interactive=False)` | Rewrite `ai-dev-kit-config.yaml`; return `{previous, current, path}` |
| `ensure_localisation_config(..., force=True)` | Installer/init overwrite path |

After switch, `resolve_language()` reads the new config on the next call (no in-process cache).

---

## 2. CLI surfaces

| Surface | Usage |
| ------- | ----- |
| `adk config locale show` | Print current locale |
| `adk config locale set <tag>` | Switch to FR-006 registry tag |
| `adk config locale set --interactive` | UK/US numbered prompt |
| `adk init --locale <tag>` | Set locale at project init (canonical) |
| `adk init --language en-GB\|en-US` | Backward-compatible alias |
| `install_release_workflow.py --locale <tag>` | RW installer switch at setup |
| `install_release_workflow.py --force` | Overwrite existing config; re-prompt when no tag |

**Precedence:** When both `--locale` and `--language` are passed, `--locale` wins.

---

## 3. Config file

Written to project-root `ai-dev-kit-config.yaml`:

```yaml
localisation:
  language: en-US
  variant: US
```

Non-English registry tags use `variant: <language>` until S03+ provides dedicated variant labels.

`read_localisation_config()` round-trips all `FR006_SUPPORTED_LOCALES` tags.

---

## 4. Content reload

Switching updates persisted config only. Content generators (`resolve_locale_asset`, `render_locale_text`, `resolve_kanban_intake_template`) pick up the new locale on subsequent calls via `resolve_language(project_root)`.

Non-English tags persist in config but asset resolution falls back to on-disk locales (en-GB/en-US) until S03+.

---

## 5. Task boundaries

| Task | Scope |
| ---- | ----- |
| **E21:S02:T03** | Detection precedence (read path) |
| **E21:S02:T04** | Switching (write path) — this doc |
| **E21:S02:T06** | `resolve_locale_key()` — [locale-key-conventions.md](locale-key-conventions.md) |

---

## 6. Tests

```bash
pytest tests/test_locale_switching.py
pytest tests/test_commands.py -k locale
pytest -m fr006
```

---

## References

- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [IPP-E21S02T04](../../implementation-cycles/IPP-E21S02T04-locale-switching.md)
- [locale-formatting-conventions.md](locale-formatting-conventions.md) (E21:S02:T05)
