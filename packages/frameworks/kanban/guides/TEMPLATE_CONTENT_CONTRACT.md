---
lifecycle: evergreen
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# Kanban v4 Template Content Contract

**Applies to:** `packages/frameworks/kanban/templates/v4/tiers/**`  
**Catalogue SoT:** `packages/frameworks/kanban/scripts/kanban_v4_catalog.py`  
**Validator:** `packages/frameworks/kanban/scripts/validate_v4_template_completeness.py`

## Scope

| Surface | Required | Task docs |
|---------|----------|-----------|
| Epic (`epic-{nn}.md`) | Full abstract narrative | Never in epic file |
| Story (`stories/story-{ss}-*.md`) | Full narrative + checklist | Titles only unless CATL/bootstrap |
| Task (`T{nn}-*.md`) | CATL/bootstrap only | See `tasks/archetypes/` and `tasks/core/` |

## File layout

```
templates/v4/tiers/{tier}/epic-{nn}-{catalog_slug}/
  epic-{nn}.md
  stories/story-{ss}-{story-slug}.md
```

## Epic sections (required)

Purpose · Scope · Excludes / wrong homes · Overview · Stories (brief summary + link) · Dependencies · References

Frontmatter: `tier`, `display_title`, `catalog_slug`, `short_tag`, `concerns`, `excludes`, `adoption_order`, `catalog_version: v4`

## Story sections (required)

Overview · Goals · Acceptance criteria · Out of scope · Dependencies · References

## Placeholders

See [PLACEHOLDER_REGISTRY.md](../templates/v4/abstracts/PLACEHOLDER_REGISTRY.md). Every epic **Purpose** and story **Overview** must include `{PROJECT_NAME}`.

## Gold references

- Epic: `tiers/core/epic-07-security/epic-07.md`
- Story: `tiers/ancillary/epic-15-compliance-and-privacy/stories/story-02-product-privacy-controls.md`

## Generation

```bash
python3 packages/frameworks/kanban/scripts/generate_v4_est_templates.py --overwrite
python3 packages/frameworks/kanban/scripts/validate_v4_template_completeness.py --strict
```
