---
lifecycle: evergreen
created_at: 2026-06-12T20:30:00Z
housekeeping_policy: keep
---

# Kanban v3.5 catalog delta — bootstrap stories, perpetual tasks, obligatory docs

**Status:** IMPLEMENTED  
**Scope:** Packaged Small-tier fresh install (`kanban_v35_catalog.py`)

## Summary

v3.5 completes the Small-tier bootstrap gap identified in the v3.4 story review:

| Change | Detail |
| ------ | ------ |
| E01:S01 | Six **perpetual task docs** (T01–T06): CMW/PVW, UKW, docs hygiene, infra, CI health, security scans |
| E01:S03 | Four **finite task docs** (T01–T04): test runner, CI wiring, gates, conventions |
| E04:S01 | ADR scaffold + architecture layout (3 tasks) |
| E05:S01 | **Obligatory documentation scaffold** (5 tasks): README, CONTRIBUTING, LICENSE, **AGENTS.md (T04)**, docs tree (T05) |
| E06:S01 | CI/CD pipeline scaffold (3 tasks) |
| E07:S01 | Security baseline (3 tasks) |
| E08:S01 | **Code Quality Scaffold** — static analysis scaffold (CodeQL) |
| E08:S02 | Review & upkeep (3 tasks; was S01) |
| Installer | `migrate_structure._install_core_tasks()` copies `templates/tasks/` into story-named subdirs |
| Cleanup | Legacy v1 FR/BR stories under `templates/stories/epic-05|06` → `deprecated/` |

## Fresh-install story list (15)

- E01:S01–S03, E02:S01–S02, E03:S01–S04
- E04:S01, E05:S01, E06:S01, E07:S01, E08:S01–S02

## Fingerprint additions (v3.5)

- `story-01-perpetual-operations/T*.md` present
- `story-01-documentation-scaffold/T*.md` present
- E04/E06/E07/E08:S01 bootstrap stories present

## Naming SOP (scaffold vs bootstrap)

| Term | Use when |
|------|----------|
| **bootstrap** | Greenfield repo gate only (**E02:S02** Repository Bootstrap) and cold-start wiring (**E05:S01:T04** AGENTS.md bootstrap) |
| **scaffold** | Finite **E04–E08:S01** stories and task deliverables that lay down templates, workflows, and doc trees (reusable/extendable) |
| **infrastructure setup** | Finite **E01:S02–S03** — core machine prerequisites; neutral story titles; prose only (not scaffold slugs) |
| **baseline** | Policy + hygiene floor (**E07:S01** Security baseline) |

---

## Not in scope

- ai-dev-kit live `docs/kanban/` (maintainer dogfood)
- Brownfield migration (KMA)
