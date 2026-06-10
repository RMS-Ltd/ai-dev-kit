---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-directional-icon-audit
  type: standard
  domain:
    primary: localisation
    secondary: ["rtl", "cultural-adaptation"]
  audience: ["maintainers", "translators", "agents"]
  applies_to:
    activities:
      - "cultural-adaptation"
      - "rtl"
---

# Directional icon audit (completed)

**Purpose:** E21:S04:T04 audit checklist for direction-sensitive presentation in CLI/installer strings. RTL **implementation** remains [E21:S04:T03](../../kanban/epics/epic-21/story-04-cultural-adaptation/T03-implement-rtl-support-right-to-left-for-arabichebrew.md) / [locale-rtl-conventions.md](locale-rtl-conventions.md).

**Status:** Completed @ E21:S04:T04 (desk audit + code cross-check).

---

## Audited surfaces

| Surface | Location | Finding | Action |
| ------- | -------- | ------- | ------ |
| Status line prefixes | `localisation_config._STATUS_LINE_PREFIXES` | ✅❌⚠️ℹ️🔍 — non-directional | Documented in [locale-cultural-content-policy.md](locale-cultural-content-policy.md) §2 |
| Installer wizard headers | `installer.wizard.*` keys | 📋📦📊📝 — non-directional | No change |
| Dry-run prefix | `installer.scaffold.*`, `installer.run.dry_run_*` | 🔍 only | No change |
| Chevron arrows in YAML | workflow-mgt `locales/*/keys/*.yaml` | **None found** in key values | Pass |
| Kanban templates | `kanban/locales/*/templates/*.md` | No LTR-only arrow UI patterns | Pass |
| Progress / step order | Installer wizard (sequential prompts) | Textual steps; no graphic progress bar in CLI | Defer graphic RTL to portal (ADR-024) |

---

## T03 hook verification

| API | Verified | Notes |
| --- | -------- | ----- |
| `format_cli_status_line(locale, icon, message)` | Yes | `tests/test_locale_rtl_support.py` |
| `format_locale_line_for_direction(locale, line)` | Yes | Reorders leading status emoji for `ar` |
| `is_rtl_locale` / `RTL_LOCALES` | Yes | `ar` registered; `he` API-only |

---

## RTL mirroring checklist (content author)

- [x] No raw `→` / `←` in installer key catalog
- [x] Status emoji use fixed semantic set (policy §2)
- [x] Translators instructed to preserve emoji, translate message only
- [ ] **T06:** Runtime screenshot / E2E render of `ar` installer sample lines with mirrored prefixes

---

## References

- [locale-cultural-content-policy.md](locale-cultural-content-policy.md)
- [locale-rtl-conventions.md](locale-rtl-conventions.md)
- [IPP-E21S04T04](../../implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md)
