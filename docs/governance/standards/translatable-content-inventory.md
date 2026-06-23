---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T12:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: translatable-content-inventory
  type: standard
  domain:
    primary: localisation
    secondary: ["i18n", "translation", "frameworks"]
  audience: ["agents", "developers", "translators"]
  applies_to:
    activities:
      - "translation"
      - "locale-extraction"
---

# Translatable content inventory

**Purpose:** Canonical catalog of all translatable framework content for Epic 21 Phase 3 (FR-006).  
**Authority:** [E21:S03:T01](../../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T01-identify-and-extract-all-translatable-content.md) · [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) C1 hybrid  
**Machine-readable companion:** [translatable-content-registry.yaml](translatable-content-registry.yaml) (T06 completeness input)

---

## Extraction tiers

| Tier | Mechanism | T01 status | Consumer tasks |
| ---- | --------- | ---------- | -------------- |
| **runtime_user** | YAML keys under `locales/{lang}/keys/` | Extracted (en-GB + en-US) | T03 wiring, T02 translation |
| **whole_file** | Manifest-indirected markdown/txt | Documented (not key-split) | T02 copy trees + translate |
| **operator_validator** | Proposed `validator.*` keys | Inventory only (Option B) | Future task |

---

## Workflow-mgt key catalogs (extracted)

Package root: `packages/frameworks/workflow-mgt/locales/`

| Domain | File | Keys (per locale) | Primary source |
| ------ | ---- | ----------------- | -------------- |
| `cli` | `keys/cli.yaml` | 25 | `cli/commands/init.py`, `cli/utils.py`, `localisation_config.py` |
| `errors` | `keys/errors.yaml` | 6 | `localisation_config.py`, installer errors |
| `installer` | `keys/installer.yaml` | 93 | `install_release_workflow.py` |

**Total workflow-mgt keys:** 124 per locale (en-GB, en-US parity required).

### Installer key namespaces

| Prefix | Coverage |
| ------ | -------- |
| `installer.deps.*` | Dependency preflight messages |
| `installer.prompt.*` | Required-field prompts |
| `installer.validation.*` | Kanban pattern validation UX |
| `installer.scaffold.*` | version.py / CHANGELOG scaffold |
| `installer.wizard.*` | Interactive rw-config collection |
| `installer.run.*` | Install run output and next steps |

### CLI key namespaces

| Prefix | Coverage |
| ------ | -------- |
| `cli.prompt.*` | Language selection (S02 seed) |
| `cli.config.*` | Locale persistence messages |
| `cli.status.*` | Error/Success/Warning/Info labels |
| `cli.init.*` | `ai-dev-kit init` messages |

---

## Kanban key catalogs (seed — unchanged in T01)

Package root: `packages/frameworks/kanban/locales/`

| Domain | File | Keys (per locale) |
| ------ | ---- | ----------------- |
| `cli` | `keys/cli.yaml` | 7 |
| `errors` | `keys/errors.yaml` | 3 |

---

## Whole-file translatable assets (documented, not key-extracted)

Per ADR-024: prose stays in locale trees; translators work on files directly.

### Kanban (`packages/frameworks/kanban/locales/`)

| Manifest category | Keys | Locales | Type |
| ----------------- | ---- | ------- | ---- |
| `templates` | fr, br, uxr, fb, task, story, epic, plan_doc | en-GB, en-US | markdown |
| `docs` | setup_index | en-GB, en-US | markdown |

### Workflow-mgt (`packages/frameworks/workflow-mgt/locales/`)

| Manifest category | Keys | Locales | Type |
| ----------------- | ---- | ------- | ---- |
| `scaffolds` | changelog_stub, version_scaffold_decline, changelog_scaffold_decline | en-GB, en-US | md/txt |

---

## Deferred: operator validator surfaces

**Decision:** Option B — inventory only; extraction deferred.

| Surface | Path | Est. messages | Proposed domain |
| ------- | ---- | ------------- | --------------- |
| RW validators | `packages/frameworks/workflow-mgt/scripts/validation/*.py` | ~250 `print()` calls | `validator.*` |

High-traffic scripts (for future priority subset): `validate_branch_context.py`, `validate_rw_task_intent.py`, `validate_rw_task_complete.py`, `validate_version_bump.py`.

**Rationale:** Validators run in CI/agent context without locale plumbing; bulk extraction belongs in a follow-on task with shared `emit_validation_message()` helper (T03 prerequisite).

---

## Out of scope (not framework-runtime)

- Repo governance docs (`docs/governance/`, changelogs, README)
- Test assertion strings (English for determinism)
- Portal / Docusaurus content (ADR-024 deferred)

---

## Scaffold locales (E21:S03:T02)

Nine FR-006 target locales have on-disk trees (en-GB interim copy). See [locale-rollout-matrix.md](locale-rollout-matrix.md) for priority tiers and S05–S07 ownership.

| Code | Kanban files | Workflow-mgt files | Linguistic translation |
| ---- | ------------ | ------------------ | ---------------------- |
| `es`, `fr`, `de`, `pt` | 11 each | 6 each | E21:S05 |
| `zh-CN`, `zh-TW`, `ja` | 11 each | 6 each | E21:S06 |
| `ru`, `ar` | 11 each | 6 each | E21:S07 |

**Tool:** `packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py`

---

## Handoffs

| Task | Uses this inventory for |
| ---- | ----------------------- |
| **E21:S03:T02** | Complete — scaffold trees + rollout matrix |
| **E21:S03:T03** | Complete — `locale_message()` wired at installer + CLI call sites |
| **E21:S03:T04** | Contributor workflow, review process, guidelines — [translation-workflow-and-review.md](translation-workflow-and-review.md) |
| **E21:S03:T05** | Management tools — [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md) (`validate_locale_translations.py`, `sync_locale_keys.py`) |
| **E21:S03:T06** | Completeness % via `report_locale_completeness.py` (reads this registry + on-disk corpus) |
| **E21:S04:T01** | Cultural requirements research — [locale-cultural-requirements.md](locale-cultural-requirements.md) |

---

## References

- [translation-workflow-and-review.md](translation-workflow-and-review.md)
- [locale-key-conventions.md](locale-key-conventions.md)
- [locale-file-structure-conventions.md](locale-file-structure-conventions.md)
- [IPP-E21S03T01](../../implementation-cycles/IPP-E21S03T01-identify-extract-translatable-content.md)
- [FR-006](../../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md)
