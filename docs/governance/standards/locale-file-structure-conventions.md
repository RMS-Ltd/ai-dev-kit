---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-file-structure-conventions
  type: standard
  domain:
    primary: documentation
    secondary: ["localisation", "i18n", "frameworks"]
  audience: ["agents", "developers", "translators"]
  applies_to:
    activities:
      - "locale-scaffolding"
      - "translation"
---

# Locale file structure conventions

**Purpose:** Canonical on-disk layout and naming rules for ai-dev-kit package locale trees (ADR-024 C1 hybrid).

**Authority:** Implements [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) §T02 handoff. **Planning:** [IPP-E21S02T02](../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md).

**Related:** [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md) Phase 2 · [localisation_config.py](../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)

---

## 1. Package roots

Each framework package that ships localised content maintains:

```text
packages/frameworks/{package}/locales/
  manifest.yaml
  README.md
  {locale}/
    ...
```

**Packages (Phase 2):** `kanban`, `workflow-mgt`. Additional packages follow the same contract when they add `locales/`.

---

## 2. Locale directory layout

### 2.1 Per-locale tree (`{locale}/`)

| Subdirectory | Kanban | Workflow-mgt | Content type |
| ------------ | ------ | ------------ | -------------- |
| `templates/` | Yes | No | Whole-file markdown intake templates |
| `docs/` | Yes | No | Locale-specific documentation fragments |
| `scaffolds/` | No | Yes | RW installer scaffold fragments |
| `keys/` | Yes | Yes | YAML key catalogs for short strings |

**Physical locale dirs (T02):** `en-GB`, `en-US` only. Additional FR-006 codes appear in manifest `supported_locales` until S03+ stories add on-disk trees.

### 2.2 Locale codes (BCP 47)

Use tags from FR-006 Phase 2 registry:

`en-GB`, `en-US`, `es`, `fr`, `de`, `zh-CN`, `zh-TW`, `ja`, `pt`, `ru`, `ar`

Hyphenated region subtags (`zh-CN`, `zh-TW`) are directory names as shown.

---

## 3. Manifest schema (v2)

```yaml
version: 2
default_locale: en-GB
framework: kanban | workflow-mgt
supported_locales:
  - en-GB
  - en-US
  - es
  # ... full FR-006 list (registry; dirs may be deferred)
locales:
  {locale}:
    templates:   # kanban only
      {stable_key}: templates/{FILE}.md
    docs:        # kanban only
      {stable_key}: docs/{file}.md
    scaffolds:   # workflow-mgt only
      {stable_key}: scaffolds/{file}
    keys:
      cli: keys/cli.yaml
      errors: keys/errors.yaml
```

**Rules:**

- `version: 2` is additive; Phase 1 category paths are unchanged.
- `supported_locales` lists all planned locales; only locales with on-disk `locales/{code}/` dirs are resolvable.
- Stable keys (`fr`, `cli`, …) are lowercase snake or short tokens; never locale-specific.
- Paths are relative to `locales/{locale}/`.

---

## 4. Key catalog files (`keys/*.yaml`)

### 4.1 Filename convention

One file per **domain**: `cli.yaml`, `errors.yaml`, `installer.yaml`, etc.

### 4.2 Key naming (`domain.section.key`)

Flat dotted keys under the top-level `keys:` map:

```yaml
_meta:
  domain: cli
  locale: en-GB
keys:
  cli.prompt.language_choice: "Select your preferred English variant:"
  cli.prompt.invalid_choice: "Invalid choice. Enter 1 or 2."
```

- Full key **must** start with the file domain prefix (`cli.` in `cli.yaml`).
- Values are UTF-8 strings; use `{{placeholder}}` for substitution (same as template fragments).
- `_meta` is optional documentation; not used by resolver until T06.

### 4.3 Lookup API

`resolve_locale_key(project_root, key, *, package="workflow-mgt", ...)` — **E21:S02:T06** (implemented). T02 establishes files and manifest `keys` category entries.

**Resolution policy:** [locale-key-conventions.md](locale-key-conventions.md)

---

## 5. Whole-file assets (unchanged from Phase 1)

Markdown templates and scaffolds remain **whole files**, not extracted keys. UK/US variants stay in `en-GB/` and `en-US/` trees. Canonical fallbacks under `packages/frameworks/kanban/templates/` remain when locale file is missing.

---

## 6. Adding a new locale (S03+)

1. Add code to `supported_locales` if not already listed.
2. Create `locales/{code}/` with required category subdirs for that package.
3. Add manifest `locales.{code}` block mirroring `en-GB` key structure.
4. Seed `keys/` files (may copy en-GB as translation source).
5. Run `sync_greenfield_install.py` and locale tests.

---

## 7. Greenfield mirror

After any canonical `locales/` change, run:

```bash
python scripts/sync_greenfield_install.py
python scripts/sync_greenfield_install.py --check
```

---

## References

- [translatable-content-inventory.md](translatable-content-inventory.md) — canonical content catalog (E21:S03:T01)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [IPP-E21S02T02](../../implementation-cycles/IPP-E21S02T02-locale-file-structure.md)
- [kanban/locales/README.md](../../../packages/frameworks/kanban/locales/README.md)
- [workflow-mgt/locales/README.md](../../../packages/frameworks/workflow-mgt/locales/README.md)
