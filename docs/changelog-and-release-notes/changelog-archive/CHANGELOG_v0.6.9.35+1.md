# Changelog — v0.6.9.35+1

**Release Date:** 2026-06-14 17:26:33 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 35  
**SemVer:** v0.4.1163+1  
**Task:** E06:S09:T35 — Kanban v4 three-tier catalogue (FR-132)

---

## Summary

Change implemented: ship **Kanban v4** — explicit Core (E01–E08) / Ancillary (E11–E20) / Domain (E24+) catalogue, duplicate-epic policy, fully populated E/S templates, CATL bootstrap tasks, v4 fresh install default (`--catalog v4`), migration validators, and KMA playbook updates (FR-132 / FR-131).

---

## Added

- **`kanban_v4_catalog.py`** — unified `EpicRecord` / `StoryRecord`; E01–E24 placeholder; `assert_v4_fingerprint()`.
- **`templates/v4/tiers/**`** — abstract epic/story files per Template Content Contract (77 E/S files).
- **CATL** — `templates/v4/tasks/catl_manifest.yaml`; E02:S02 bootstrap tasks (7); `generate_task_templates.py --catl-manifest`.
- **Guides** — `DUPLICATE_EPIC_POLICY.md`, `TEMPLATE_CONTENT_CONTRACT.md`, `LEGACY_KANBAN_MIGRATION.md`, `KANBAN_V4_ADOPTION.md`, `V35_TO_V4_RENUMBER_MAP.md`.
- **Validators** — `validate_v4_template_completeness.py`, `validate_migration_map.py`; `generate_v4_est_templates.py`, `install_v4_catalog.py`.
- **FR intake** — [FR-132](../../kanban/fr-br/FR-132-kanban-v4-three-tier-catalogue.md), [FR-131](../../kanban/fr-br/FR-131-canonical-abstract-task-library-catl.md).
- **Analysis** — [13-v4-three-tier-catalogue.md](../../knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md); SBL attempt 09 replay plan.

---

## Changed

- **Installer** — `install_kanban_framework.py --catalog v4` (default); `migrate_structure.install_canonical_epics_only(..., catalog="v4")`.
- **KMA** — duplicate-epic matrix gate in migration agent execution guide.
- **Templates** — E02:S02 workflow tasks replaced with CATL bootstrap set; deprecation banners on v3 canonical stub docs.
- **Executive summary** — v4 section in kanban-v2 analysis corpus.

---

## Related

- [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)
- Predecessor: [E06:S09:T34](CHANGELOG_v0.6.9.34+1.md) (v3.5 Small tier)
- Parent program: E06:S09:T26 (Starborn Legacy ADK install)

---

## Verification

- `validate_v4_template_completeness.py --strict` on packaged templates
- FR-132-F6 (SBL attempt 09 operator replay) — pending operator
