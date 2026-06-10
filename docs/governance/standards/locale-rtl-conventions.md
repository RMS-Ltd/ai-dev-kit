---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T12:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-rtl-conventions
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "rtl", "cultural-adaptation"]
  audience: ["agents", "developers", "translators", "maintainers"]
  applies_to:
    activities:
      - "translation"
      - "cultural-adaptation"
      - "locale-scaffolding"
---

# Locale RTL conventions

## Purpose

Canonical right-to-left (RTL) layout rules for ai-dev-kit framework runtime and CLI/installer surfaces (E21:S04:T03).

**Authority:** [E21:S04:T03](../../kanban/epics/epic-21/story-04-cultural-adaptation/T03-implement-rtl-support-right-to-left-for-arabichebrew.md) · [IPP-E21S04T03](../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md)  
**Strategy:** [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) · **Research:** [locale-cultural-requirements.md](locale-cultural-requirements.md)

---

## RTL locale registry

| Language | Tag | Locale tree | Notes |
| -------- | --- | ----------- | ----- |
| Arabic | `ar` | `locales/ar/` (kanban + workflow-mgt) | FR-006 scaffold; linguistic delivery E21:S07:T01 |
| Hebrew | `he` | *(extension only)* | Registered in `RTL_LOCALES`; no on-disk tree in T03 |

**Source of truth:** `RTL_LOCALES` in [`localisation_config.py`](../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py). Optional `locale_metadata` in package `manifest.yaml` is documentary; **code registry wins on conflict**.

---

## Public API

| Function | Role |
| -------- | ---- |
| `is_rtl_locale(tag)` | True for `ar`, `he`, and region subtags (e.g. `ar-SA`) |
| `text_direction_for_locale(tag)` | Returns `"rtl"` or `"ltr"` (unknown → `ltr`) |
| `format_cli_status_line(locale, icon, message)` | Direction-aware status icon placement |
| `format_numbered_choice(locale, index, label)` | Direction-aware numbered menu lines |
| `format_locale_line_for_direction(locale, line)` | Reorders leading status emoji in resolved locale strings |

Exported via [`cli/localisation.py`](../../../cli/localisation.py) for adopters.

---

## CLI and installer conventions

1. **Status lines** — Use `format_cli_status_line` or `format_locale_line_for_direction` when printing installer keys that embed leading emoji (`✅`, `❌`, `⚠️`, `ℹ️`, `🔍`).
2. **Numbered choices** — Use `format_numbered_choice` for `[n]` menu patterns (see `prompt_language_choice`).
3. **Installer call sites** — `install_release_workflow.py` uses `_print_msg` for high-traffic status keys (`project_not_found`, `config_loaded`, `config_written`).
4. **Terminal limits** — Unicode bidi may reorder glyphs in some terminals; T03 is **best-effort**. Full layout QA: E21:S04:T06.
5. **Translated YAML** — Keep UTF-8; avoid hard-coded LTR-only assembly in new Python call sites. Emoji may remain in YAML values; runtime reordering handles display.

---

## RTL checklist

Use when implementing or reviewing RTL-facing work (from [locale-cultural-requirements.md](locale-cultural-requirements.md)):

1. **Mirror** — navigation, wizard steps, table alignment for web/UI surfaces (portal deferred).
2. **Digits** — Eastern Arabic digits optional; formatting owned by E21:S04:T05.
3. **Punctuation** — bidirectional text in translated strings; preserve `{{placeholders}}`.
4. **Icons** — directional chevrons and progress indicators; **completed audit:** [locale-directional-icon-audit.md](locale-directional-icon-audit.md) (E21:S04:T04); implementation hooks here.
5. **Registry** — call `is_rtl_locale` / `text_direction_for_locale` instead of hard-coding `ar`.

---

## Boundaries and handoffs

| Surface | Owner | T03 disposition |
| ------- | ----- | --------------- |
| Framework Python API | E21:S04:T03 | **Implemented** |
| RW installer / CLI | E21:S04:T03 | **Partial** (audited call sites) |
| Docusaurus portal | Deferred | ADR-024 — separate task if pursued |
| Arabic linguistic YAML | E21:S07:T01 | Out of scope for T03 |
| Content / imagery audit | E21:S04:T04 | Checklist only |
| Cultural E2E tests | E21:S04:T06 | Out of scope for T03 |
| Contributor guide (polished) | E21:S04:T07 | Pointer from this doc |

---

## References

- [FR-006](../../kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [locale-file-structure-conventions.md](locale-file-structure-conventions.md) — `locale_metadata`
- [translation-workflow-and-review.md](translation-workflow-and-review.md)
- [IPP-E21S04T03](../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md)
