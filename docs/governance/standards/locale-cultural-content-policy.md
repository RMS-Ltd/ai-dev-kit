---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T20:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-cultural-content-policy
  type: standard
  domain:
    primary: localisation
    secondary: ["cultural-adaptation", "translation"]
  audience: ["agents", "developers", "translators", "maintainers"]
  applies_to:
    activities:
      - "translation"
      - "cultural-adaptation"
      - "locale-scaffolding"
---

# Locale cultural content policy

**Purpose:** Authoritative presentation and example policy for FR-006 locale content (E21:S04:T04).  
**Authority:** [E21:S04:T04](../../kanban/epics/epic-21/story-04-cultural-adaptation/T04-adapt-content-and-examples-for-cultural-context.md) · [IPP-E21S04T04](../../implementation-cycles/IPP-E21S04T04-cultural-content-adaptation.md)  
**Related:** [locale-cultural-requirements.md](locale-cultural-requirements.md) · [locale-loanword-glossary.md](locale-loanword-glossary.md) · [locale-directional-icon-audit.md](locale-directional-icon-audit.md)

---

## 1. Scope

Applies to:

- YAML key catalogs (`cli.yaml`, `errors.yaml`, `installer.yaml`)
- Kanban whole-file templates and setup docs under `packages/frameworks/*/locales/`
- Workflow scaffolds (`changelog_stub.md`, decline messages)

Does **not** apply to: Docusaurus portal UI (E21:S08:T04), runtime terminal-width code, or per-locale emoji rewrites in this task wave (policy only).

---

## 2. Imagery and iconography

### 2.1 Allowed status emoji (installer / CLI)

| Emoji | Semantic | RTL note |
| ----- | -------- | -------- |
| ✅ | Success / confirmed | Mirror placement via `format_cli_status_line` (T03) |
| ❌ | Error / rejection | Same |
| ⚠️ | Warning | Same |
| ℹ️ | Information | Same |
| 🔍 | Dry-run / preview | Same |

**Rules:**

- Do **not** add hand-gesture emoji (👍 👌 ✋) or region-specific symbols.
- Do **not** use colour-only emoji as the sole status indicator.
- Directional arrows in user-facing strings (→ ←) must be avoided in `ar`/`he` keys; use neutral words (*next*, *previous*) or rely on mirrored UI chrome (T03).
- Kanban state icons on boards remain Unicode workflow symbols per kanban governance; do not locale-swap emoji in this wave.

### 2.2 Translator guidance

When translating installer keys that embed leading emoji, **preserve** the emoji character; adjust only the message text. RTL runtime reorders prefix via `format_locale_line_for_direction`.

---

## 3. String-length and layout expansion

Installer wizard and validation strings in **German**, **French**, and **Japanese** routinely exceed English source length.

| Locale | Budget vs en-GB source | Notes |
| ------ | ---------------------- | ----- |
| `de` | **+30–40%** horizontal | Compound nouns; prefer breaking lines in YAML over truncation |
| `fr` | **+30–40%** horizontal | Vouvoiement adds tokens; narrow no-break space in numbers is formatting (T05) |
| `ja` | **+20–30%** vertical | Concise CJK but multi-line labels common; avoid cramming |

**Not in scope:** Dynamic terminal wrapping (future installer task). Translators should prefer shorter synonyms when over budget; flag keys that need maintainer review.

---

## 4. Examples and metaphors

### 4.1 Neutral vocabulary (dev-kit context)

Use locale-appropriate technical terms; avoid culture-specific idioms:

| Concept | Preferred neutral term | Avoid |
| ------- | ---------------------- | ----- |
| Version release | *release*, *build*, *tag* | Sports/holiday metaphors |
| Git branch | *branch*, *epic branch* | US-only hosting brand names as examples |
| Kanban | *Kanban board*, *task*, *story* | US agile slang without glossary entry |
| Workflow | *Release Workflow (RW)*, *workflow* | “Home run”, “touchdown”, etc. |
| Sample data | `Epic-04`, `Story-001`, `Project Alpha` | Real geopolitical names, tax systems |

### 4.2 English source authority

`en-GB` is the translation source; `en-US` differs only where spelling/register policy requires. Both must follow this policy before downstream translation (S05–S07).

### 4.3 Date and number examples in prose

- `en-GB` examples: `DD/MM/YYYY` or ISO `YYYY-MM-DD` in technical copy.
- `en-US` examples: may use US date order in locale-specific demo strings only (CLI language picker).
- Other locales: defer display formatting to [locale-formatting-conventions.md](locale-formatting-conventions.md).

---

## 5. Portuguese variants

Generic `pt` is **retired**. Supported tags:

| Tag | Default mapping | Formatting profile |
| --- | --------------- | ------------------ |
| `pt-BR` | Bare `pt` → `pt-BR` | BRL |
| `pt-PT` | `pt-PT` region | EUR |

See [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) integration row (E21:S04:T04).

---

## 6. Review ladder

1. Desk research ([locale-cultural-requirements.md](locale-cultural-requirements.md))
2. This policy + [glossary](locale-loanword-glossary.md)
3. Maintainer PR review
4. Native/pro review for P0/P1 tiers ([translation-workflow-and-review.md](translation-workflow-and-review.md))

---

## References

- [locale-loanword-glossary.md](locale-loanword-glossary.md)
- [locale-directional-icon-audit.md](locale-directional-icon-audit.md)
- [locale-rtl-conventions.md](locale-rtl-conventions.md)
