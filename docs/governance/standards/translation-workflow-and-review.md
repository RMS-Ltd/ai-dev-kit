---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T20:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: translation-workflow-and-review
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "translation", "contributors"]
  audience: ["translators", "developers", "agents", "maintainers"]
  applies_to:
    activities:
      - "translation"
      - "locale-contribution"
      - "pull-request-review"
---

# Translation workflow and review

**Purpose:** Canonical contributor workflow, review process, and translation guidelines for FR-006 Phase 3 locale content.  
**Authority:** [E21:S03:T04](../../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T04-create-translation-workflow-and-review-process.md) · [IPP-E21S03T04](../../implementation-cycles/IPP-E21S03T04-translation-workflow-review.md)  
**Strategy:** [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) (C1 hybrid — PR-based workflow)  
**Related:** [translatable-content-inventory.md](translatable-content-inventory.md) · [locale-rollout-matrix.md](locale-rollout-matrix.md) · [locale-key-conventions.md](locale-key-conventions.md)

---

## Purpose and audience

This standard defines how **contributors** submit locale improvements and how **maintainers** review them. It applies to:

- Human translators and community contributors
- Maintainers reviewing translation pull requests
- Agents implementing locale changes under Epic 21

**Contributor quick-start:** [contributing-translations.md](../../documentation/user-docs/contributing-translations.md)

---

## Artifact types

Per [translatable-content-inventory.md](translatable-content-inventory.md), framework locale content uses two mechanisms:

| Tier | Mechanism | Contributor edits |
| ---- | --------- | ----------------- |
| **runtime_user** | YAML keys under `locales/{lang}/keys/` | `cli.yaml`, `errors.yaml`, `installer.yaml` |
| **whole_file** | Manifest-indirected markdown/txt | `templates/`, `docs/`, `scaffolds/` |

**Source of truth for keys:** `en-GB` (canonical). `en-US` maintains key parity with en-GB; other locales scaffold from en-GB interim copy until linguistically translated.

**Packages with locale trees:**

- `packages/frameworks/kanban/locales/`
- `packages/frameworks/workflow-mgt/locales/`

When either package changes, sync `greenfield-install/packages/frameworks/{kanban,workflow-mgt}/locales/` in the same change set (or run the project greenfield sync script if structure changes).

---

## Contributor workflow

### 1. Prepare

1. Fork or branch from the active epic branch (e.g. `epic/21-internationalisation-localisation`) or `dev`.
2. Identify target locale and priority tier from [locale-rollout-matrix.md](locale-rollout-matrix.md).
3. Read [locale-key-conventions.md](locale-key-conventions.md) for key naming and [locale-file-structure-conventions.md](locale-file-structure-conventions.md) for on-disk layout.

### 2. Edit locale files

**YAML keys:**

- Edit files under `locales/{lang}/keys/` only — do not rename keys or delete keys without maintainer agreement.
- Preserve `_meta.domain` blocks.
- Keep identical key sets across locales for each domain (parity with en-GB).

**Whole-file markdown:**

- Edit the locale-specific file path registered in `manifest.yaml`.
- Preserve `{{placeholder}}` tokens and Kanban template frontmatter structure.
- Do not translate content inside code fences when the fenced block is executable or path literals.

### 3. Verify locally

```bash
python packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py --package all
pytest -m fr006
```

Run structural validation and the full `fr006` regression bundle before opening a PR. Use `--strict` on the validator when you want key parity to block locally. Translation-only PRs do **not** require Release Workflow (RW).

### 4. Open a pull request

- **Title:** `locale({lang}): <short description>` — e.g. `locale(es): translate P0 cli prompts`
- **Description:** List packages touched, priority tier (P0–P3), and whether changes are interim scaffold updates or linguistic translation.
- **Scope:** Prefer one locale per PR when possible; split key vs whole-file work if the diff is large.

### 5. Greenfield sync

If locale **structure** (new files, manifest keys) changes, include `greenfield-install/` mirrors or note that maintainers must run greenfield sync before merge.

---

## Review process

**Model:** Lightweight maintainer review (E21:S03:T04 policy).

| Gate | Requirement |
| ---- | ----------- |
| **Required** | At least one maintainer approval before merge |
| **Recommended** | Native or professional review for **P0** and **P1** content ([locale-rollout-matrix.md](locale-rollout-matrix.md)) — not blocking until tooling/process matures |

### Maintainer review checklist

- [ ] YAML parses; UTF-8 encoding; no accidental key deletion
- [ ] Key parity with en-GB maintained for edited domains
- [ ] `{{…}}` placeholders and `_meta` blocks intact
- [ ] Task/epic identifiers (`E21:S03:T01`), version strings, and file paths left untranslated
- [ ] `pytest -m fr006` green in CI
- [ ] Greenfield mirrors updated when structure changed
- [ ] PR description states tier and linguistic vs interim status

### Native / professional review (recommended)

For P0 (language selection UX) and P1 (installer wizard) strings, request review from a native speaker or professional translator when available. Record review acknowledgment in the PR thread (e.g. “Reviewed by native es speaker”).

---

## Translation guidelines

### General

- **Tone:** Clear, imperative for CLI/installer strings; instructional for templates.
- **Consistency:** Use the same term for the same concept within a locale file.
- **en-GB vs en-US:** UK and US English are separate locale trees — do not merge spelling variants across `en-GB` and `en-US`.

### Do not translate

- Epic/story/task tokens: `E21:S03:T04`, `FR-006`, `RW`, `IPW`, `UKW`
- Version strings: `v0.21.3.4+1`, SemVer tags
- File paths, Python identifiers, pytest markers (`fr006`)
- Git branch names, config keys (`localisation.language`)
- Placeholder names inside `{{double_braces}}`

### Placeholders and substitutions

Per [locale-key-conventions.md](locale-key-conventions.md): runtime substitution uses `substitutions` dict keys matching `{{name}}` in the source string. Translators may reorder placeholders but must preserve every `{{…}}` token.

### Technical terms

Prefer established translations in the target language's technical community. When no standard exists, keep the English term and add a brief parenthetical on first use in whole-file docs.

### RTL and extended locales

Arabic (`ar`) scaffold exists; full RTL layout is owned by E21:S07. Contributors should use UTF-8 and avoid hard-coded left-to-right assumptions in translated prose.

---

## Completeness states

| State | Meaning | Registry field |
| ----- | ------- | -------------- |
| **Structural complete** | All manifest paths exist; key parity with en-GB | `scaffold_status: complete` (T02) |
| **Linguistic pending** | en-GB interim copy on disk; fallback resolves at runtime | `linguistic_status: pending` |
| **Linguistic complete** | Priority-tier content translated and reviewed | `linguistic_status: complete` (updated in S05–S07 or T06) |

Run `report_locale_completeness.py` to measure structural and linguistic completeness per locale and tier. Contributors note linguistic progress in PR descriptions; maintainers may use `--update-registry` (with `--registry-threshold`) to set `linguistic_status: complete` in [translatable-content-registry.yaml](translatable-content-registry.yaml) when thresholds are met. Guide: [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md).

---

## Management tools (E21:S03:T05)

Maintainer and contributor structural tooling (script-first; no `adk locale` subcommands in T05):

| Tool | Role |
| ---- | ---- |
| `validate_locale_translations.py` | YAML parse, manifest paths, en-GB key parity, `{{placeholder}}` checks |
| `sync_locale_keys.py` | Incremental missing-key sync from en-GB |
| `scaffold_locale_trees.py` | Full locale tree bootstrap (T02) |
| `report_locale_completeness.py` | Completeness metrics and missing-translation alerts (T06) |

**Guide:** [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md)

---

## Workflow integration

| Workflow | Translation PR interaction |
| -------- | -------------------------- |
| **RW (Release Workflow)** | Not required for translation-only PRs. RW is for versioned releases on the epic branch. |
| **IPW / implementation** | Locale **process** changes use IPW on the host task; linguistic content uses this workflow only. |
| **CI** | `pytest -m fr006` is the mandatory regression gate; `validate_locale_translations.py --strict` recommended when CI locale checks are added. |
| **Greenfield sync** | Required when locale tree structure changes. |
| **Management tools** | `validate_locale_translations.py` + `sync_locale_keys.py` — see [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md) |

---

## Out of scope

- Web/dashboard completeness UI — optional follow-on (CLI report is canonical in T06)
- Linguistic delivery per locale — E21:S05–S07
- Validator `operator_validator` tier (~250 messages) — deferred per inventory Option B
- Portal / Docusaurus i18n — ADR-024 deferred
- Repo governance docs (`docs/governance/`, changelogs, root README)

---

## References

- [contributing-translations.md](../../documentation/user-docs/contributing-translations.md)
- [translatable-content-registry.yaml](translatable-content-registry.yaml)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [IPP-E21S03T04](../../implementation-cycles/IPP-E21S03T04-translation-workflow-review.md)
