---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Kanban framework — UK/US locale content (FR-006 Phase 1)

Phase 1 MVP locale corpus for **en-GB** (default) and **en-US**. Selection is stored in project-root `ai-dev-kit-config.yaml` (see T01–T03).

## Layout

```text
locales/
  manifest.yaml       # Stable keys → relative paths per locale
  en-GB/
    templates/        # UK English variants
    docs/
  en-US/
    templates/        # US English variants
    docs/
```

Canonical templates under `packages/frameworks/kanban/templates/` remain the **compatibility fallback** until E21:S01:T06 wires generators to read this manifest.

## Manifest keys (Phase 1 seed)

| Key | File |
| --- | ---- |
| `fr` | `FR_TEMPLATE.md` |
| `br` | `BR_TEMPLATE.md` |
| `uxr` | `UXR_TEMPLATE.md` |
| `fb` | `FB_TEMPLATE.md` |
| `task` | `TASK_TEMPLATE.md` |
| `story` | `STORY_TEMPLATE.md` |
| `epic` | `EPIC_TEMPLATE.md` |
| `plan_doc` | `PLAN_DOC_TEMPLATE.md` |

## Handoffs

| Task | Responsibility |
| ---- | -------------- |
| E21:S01:T05 | `read_localisation_config()`, `resolve_locale_asset()` |
| E21:S01:T06 | Wire kanban/RW installers to manifest |
| E21:S01:T07 | End-to-end locale selection tests |

RW installer scaffolds live in `packages/frameworks/workflow-mgt/locales/`.

## References

- [FR-006](../../../../docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [IPP-E21S01T04](../../../../docs/implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md)
