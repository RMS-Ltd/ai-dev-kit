---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T14:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: locale-rollout-matrix
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "translation"]
  audience: ["agents", "developers", "translators"]
  applies_to:
    activities:
      - "translation"
      - "locale-scaffolding"
---

# Locale rollout matrix

**Purpose:** Priority tiers and per-locale ownership for FR-006 Phase 3 translation delivery.  
**Authority:** [E21:S03:T02](../../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T02-create-translation-files-for-major-languages.md) · [IPP-E21S03T02](../../implementation-cycles/IPP-E21S03T02-create-translation-files-major-languages.md)  
**Related:** [translatable-content-inventory.md](translatable-content-inventory.md) · [locale-file-structure-conventions.md](locale-file-structure-conventions.md)

---

## Scaffold status (T02)

All nine target locales have on-disk trees in **kanban** and **workflow-mgt**, registered in `manifest.yaml`. Content is **en-GB interim copy** (English placeholder) until per-language stories translate.

| Locale | Code | Owner story | Scaffold |
| ------ | ---- | ----------- | -------- |
| Spanish | `es` | E21:S05:T01 | Complete |
| French | `fr` | E21:S05:T02 | Complete |
| German | `de` | E21:S05:T03 | Complete |
| Portuguese | `pt` | E21:S05:T04 | Complete |
| Chinese Simplified | `zh-CN` | E21:S06:T01 | Complete |
| Chinese Traditional | `zh-TW` | E21:S06:T02 | Complete |
| Japanese | `ja` | E21:S06:T03 | Complete |
| Russian | `ru` | E21:S07:T01 | Complete |
| Arabic | `ar` | E21:S07:T02 | Complete |

**Scaffold tool:** `packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py`

---

## Priority tiers

| Tier | Content | Key prefixes / assets | Translation owner |
| ---- | ------- | --------------------- | ------------------- |
| **P0** | Language selection UX | `cli.prompt.*`, `cli.status.*` | S05–S07 per locale |
| **P1** | Installer wizard | `installer.wizard.*`, `installer.run.next_*`, `installer.deps.*` | S05–S07 |
| **P2** | Whole-file prose | Kanban `templates/*`, `docs/setup_index`; workflow `scaffolds/*` | S05–S07 |
| **P3** | Remaining keys | `installer.*` (remainder), `cli.init.*`, `errors.*` | S05–S07 |
| **Deferred** | Operator validators | `validator.*` (not extracted) | Future task |

---

## Review expectations

Per [translation-workflow-and-review.md](translation-workflow-and-review.md): **maintainer review** is required for all translation PRs; **native or professional review** is recommended for P0 and P1 tiers (not blocking).

## Completeness expectations

- **T02:** Structural completeness — all manifest paths exist; key parity with en-GB.
- **S05–S07:** Linguistic completeness per tier (P0 minimum for locale selection in installers).
- **T04:** Contributor workflow and review process — [translation-workflow-and-review.md](translation-workflow-and-review.md).
- **T06:** Completeness reporting via `report_locale_completeness.py` (registry scope + tier metrics). See [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md).

---

## Fallback

Until translated, locales resolve via [locale-fallback-conventions.md](locale-fallback-conventions.md): selected → `default_locale` → `en-GB` → `en-US`.

---

## References

- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
