---
lifecycle: proposed
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# FR-132: Kanban v4 three-tier catalogue

**Type:** Feature Request (FR)  
**ID:** FR-132  
**Submitted:** 2026-06-14  
**Priority:** HIGH (Must Have)  
**Status:** IN PROGRESS (catalogue shipped @ **v0.6.9.35+1**; FR-132-F6 SBL replay pending operator)

**Implementing Task:** [E06:S09:T35](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T35-kanban-v4-three-tier-catalogue-fr132.md)

**Related:** [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) · [FR-127](FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [FR-131](FR-131-canonical-abstract-task-library-catl.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

---

## Summary

Ship **Kanban v4** — explicit Core / Ancillary / Domain catalogue, duplicate-epic policy, fully populated E/S templates, v4 fresh install, and KMA migration playbook.

---

## Requirements

- [x] **FR-132-F1:** `kanban_v4_catalog.py` unified `EpicRecord` for E01–E24 placeholder
- [x] **FR-132-F2:** `templates/v4/tiers/**` — all catalogue epics/stories per Template Content Contract
- [x] **FR-132-F3:** `DUPLICATE_EPIC_POLICY.md` + `LEGACY_KANBAN_MIGRATION.md`
- [x] **FR-132-F4:** `install_kanban_framework.py --catalog v4` (default)
- [x] **FR-132-F5:** `validate_v4_template_completeness.py` + `validate_migration_map.py`
- [ ] **FR-132-F6:** SBL attempt 09 replay verification (operator) — see [T36](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) / [UXR-029](UXR-029-adk-install-path-experiment.md)

---

## Acceptance criteria

- Validator passes on packaged v4 templates
- Agent resolves `SEC` → E07 and `COMPLY` → E15 without ambiguity
- KMA Step 2 requires duplicate-epic matrix before writes

**Specification:** [13-v4-three-tier-catalogue.md](../../knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md)
