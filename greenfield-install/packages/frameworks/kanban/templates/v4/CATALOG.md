# Kanban v4 catalogue (human-readable)

**Code SoT:** `packages/frameworks/kanban/scripts/kanban_v4_catalog.py`

See [13-v4-three-tier-catalogue.md](../../../../docs/knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md).

**Templates:** `templates/v4/tiers/{core|ancillary|domain}/epic-{nn}-{slug}/`

**Regenerate:**

```bash
python3 packages/frameworks/kanban/scripts/generate_v4_est_templates.py --overwrite
python3 packages/frameworks/kanban/scripts/validate_v4_template_completeness.py --strict
```
