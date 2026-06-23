---
lifecycle: proposed
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# FR-131: Canonical Abstract Task Library (CATL)

**Type:** Feature Request (FR)  
**ID:** FR-131  
**Submitted:** 2026-06-14  
**Priority:** HIGH (Should Have)  
**Status:** IN PROGRESS (CATL shipped @ **v0.6.9.35+1** with E06:S09:T35 / FR-132)

**Implementing Task:** [E06:S09:T35](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T35-kanban-v4-three-tier-catalogue-fr132.md)

**Related:** [FR-010](FR-010-template-task-installation-two-phase-migration.md) · [FR-018](FR-018-abstract-space-zero-numbered-est-docs.md) · [FR-029](FR-029-procedural-task-template-generation-hybrid-strategy.md) · [FR-132](FR-132-kanban-v4-three-tier-catalogue.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

---

## Summary

Deliver a **Canonical Abstract Task Library (CATL)** — task archetype manifest, packaged bootstrap/perpetual slices, and installer/KMA consumption — linked to Kanban v4 epic/story templates.

---

## Deliverables (wave 1)

- [x] `templates/v4/tasks/catl_manifest.yaml`
- [x] Archetype stubs under `templates/v4/tasks/archetypes/`
- [x] E02:S02 seven-task bootstrap narrative (`templates/v4/tasks/core/` + `templates/tasks/epic-02/story-02/`)
- [ ] Full two-phase install (FR-010) wired to CATL manifest
- [ ] `generate_task_templates.py --catl-manifest` emission path

---

## Acceptance criteria

- CATL manifest lists all six archetypes with v4 homes
- Bootstrap gate tasks install on v4 fresh path
- Linked from FR-132 and v4 specification doc
