---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Translation management tools

Maintainer-facing CLI tools for FR-006 locale corpus hygiene (E21:S03:T05). Contributors should also run validation before opening translation PRs — see [contributing-translations.md](contributing-translations.md).

**Canonical workflow policy:** [translation-workflow-and-review.md](../../governance/standards/translation-workflow-and-review.md)

---

## Tool suite

| Tool | Purpose |
| ---- | ------- |
| [`validate_locale_translations.py`](../../../packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py) | Structural validation (YAML, manifest paths, key parity, placeholders) |
| [`sync_locale_keys.py`](../../../packages/frameworks/workflow-mgt/scripts/sync_locale_keys.py) | Add missing keys from en-GB into a target locale (incremental) |
| [`scaffold_locale_trees.py`](../../../packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py) | Bootstrap or rebuild full locale trees from en-GB |

All commands assume repository root as the working directory.

---

## validate_locale_translations.py

```bash
python packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py --package all
```

| Flag | Effect |
| ---- | ------ |
| `--package kanban\|workflow-mgt\|all` | Scope packages (default `all`) |
| `--locale CODE` | Repeatable; default all on-disk locales in manifest |
| `--strict` | Exit 1 on key parity or placeholder mismatches |
| `--verbose` | List interim-copy advisories (identical to en-GB on scaffold locales) |

**Default exit code:** `0` unless hard structural errors (YAML parse failure, missing manifest asset path).

**Strict mode:** Use in CI or pre-merge checks when you want key parity enforced.

---

## sync_locale_keys.py

```bash
python packages/frameworks/workflow-mgt/scripts/sync_locale_keys.py --target es --package all
```

| Flag | Effect |
| ---- | ------ |
| `--target CODE` | **Required** — locale to update |
| `--package kanban\|workflow-mgt\|all` | Scope packages (default `all`) |
| `--dry-run` | Report keys that would be added without writing files |

Copies **missing** keys from en-GB with en-GB string values. Does **not** overwrite existing target translations. Updates `_meta.locale` when keys are added.

Use after en-GB key catalogs grow (new installer/CLI strings). For new locale trees, use `scaffold_locale_trees.py` instead.

---

## scaffold_locale_trees.py

```bash
python packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py --package all [--dry-run]
```

Copies entire en-GB locale trees to target locales and registers manifest blocks. **Destructive** for existing target trees — prefer `sync_locale_keys.py` for incremental key updates.

---

## Recommended maintainer workflow

1. After adding en-GB keys: `sync_locale_keys.py --target <code> --dry-run`, then apply.
2. Before merge: `validate_locale_translations.py --package all` (add `--strict` when enforcing parity).
3. Regression: `pytest -m fr006`.

Completeness percentages and registry `linguistic_status` automation are owned by **E21:S03:T06**, not these tools.

---

## References

- [translation-workflow-and-review.md](../../governance/standards/translation-workflow-and-review.md)
- [contributing-translations.md](contributing-translations.md)
- [IPP-E21S03T05](../../implementation-cycles/IPP-E21S03T05-translation-management-tools.md)
- [ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
