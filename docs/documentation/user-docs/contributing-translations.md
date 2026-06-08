---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Contributing translations

Thank you for helping translate AI Dev Kit framework content. This guide is a **quick start**; the canonical policy is [translation-workflow-and-review.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md).

---

## What you can translate

Framework locale content lives under:

- `packages/frameworks/kanban/locales/{lang}/`
- `packages/frameworks/workflow-mgt/locales/{lang}/`

Two artifact types:

1. **YAML keys** — short CLI, installer, and error strings (`keys/cli.yaml`, `keys/installer.yaml`, `keys/errors.yaml`)
2. **Markdown files** — kanban intake templates and setup scaffolds (`templates/`, `docs/`, `scaffolds/`)

Nine target locales are scaffolded (`es`, `fr`, `de`, `pt`, `zh-CN`, `zh-TW`, `ja`, `ru`, `ar`). Content currently uses **en-GB interim copy** until translated.

---

## Quick workflow

1. **Fork** the repository and create a branch.
2. **Pick a locale and tier** — see [locale-rollout-matrix.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/locale-rollout-matrix.md) (P0 = language selection prompts first).
3. **Edit locale files** — use `en-GB` as the reference; keep all YAML keys; do not remove `{{placeholders}}`.
4. **Run validation and tests:**

   ```bash
   python packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py --package all
   pytest -m fr006
   ```

5. **Open a pull request** with title `locale({lang}): <description>` and note the priority tier in the description.

Translation PRs do **not** need Release Workflow — a maintainer will review and merge.

---

## Review expectations

- **Required:** Maintainer review before merge.
- **Recommended:** Native or professional review for setup prompts and installer strings (P0/P1).

See the full [review checklist](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md#review-process) in the governance standard.

---

## Guidelines (summary)

| Do | Don't |
| -- | ----- |
| Preserve `{{placeholder}}` tokens | Translate file paths or code identifiers |
| Keep YAML key names identical to en-GB | Delete or rename keys |
| Use UTF-8 encoding | Mix en-GB and en-US spelling in one locale |
| Leave `E21:S03:T04`-style task tokens in English | Run RW for translation-only changes |

Full guidelines: [translation-workflow-and-review.md § Translation guidelines](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md#translation-guidelines).

---

## Package READMEs

- [Kanban locales README](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/locales/README.md)
- [Workflow-mgt locales README](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/locales/README.md)

---

## Maintainer tools

See [translation-management-tools.md](translation-management-tools.md) for `validate_locale_translations.py`, `sync_locale_keys.py`, and `scaffold_locale_trees.py`.

---

## References

- [translation-workflow-and-review.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translation-workflow-and-review.md) — canonical workflow
- [translatable-content-inventory.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/translatable-content-inventory.md) — what is translatable
- [locale-key-conventions.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/locale-key-conventions.md) — key naming rules
- [FR-006](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
