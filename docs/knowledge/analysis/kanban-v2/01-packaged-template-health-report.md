---
lifecycle: evergreen
created_at: 2026-06-08T18:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# Packaged Template Health Report (2026-06-08)

## Executive summary

The packaged kanban template corpus is **functionally rich but structurally debt-laden**. Semantic SoT (`COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`) validates (378/378 tasks on disk), but **three on-disk layouts**, **epic 9/18 numbering swap**, and **scattered perpetual patterns** block a clean adopter experience.

## File inventory

| Layout | Count | Role |
|--------|------:|------|
| Total `.md` under `templates/` | 1,047 | Includes duplicates |
| Flat `epics/` | 21 | Primary epic templates (E1–E21) |
| Flat `stories/` | 64 | Story templates |
| Flat `tasks/` | 478 | Task templates |
| Nested `epic-NN/` | 457 | Legacy duplicate tree |
| Greenfield mirror | 1,046 | Near-duplicate; retains `Epic-NN/` legacy |

## Debt register (severity order)

### P0 — Numbering authority failure (Epic 9/18 swap)

- `epics/epic-09-User-Management.md` header says **Epic 18**
- `epics/Epic-18-Documentation.md` header says **Epic 9**
- Story paths under `stories/epic-09/` and `stories/epic-18/` both claim Epic 9 in headers
- **Impact:** Adopters contextualising by filename get wrong semantics

### P0 — Triple corpus duplication

Flat + nested + greenfield `Epic-NN/` trees duplicate ~457 files with different slug casing (`T01-Foo.md` vs `T01-foo.md`).

### P1 — Perpetual task scatter

No packaged E01:S01 or E02:S16 perpetual story. Patterns live in:

- `tasks/epic-02/story-01/T05-CMW-Perpetual-Task-Pattern.md`
- `tasks/epic-04/story-03/T01-Update-Packaged-Rw-...`
- `tasks/epic-04/story-Maintenance/T01-...` (non-numeric story dir)

References ai-dev-kit-specific IDs (e.g. E06:S06:T08) — not portable.

### P1 — Fresh-install contract mismatch

`migrate_structure._install_canonical_epics` installs **12 epics only**: `[1,2,3,4,5,6,7,8,10,18,22,23]` — no stories/tasks.  
`KANBAN_STRUCTURE_TEMPLATE.md` implies fuller structure — documentation drift.

### P2 — CANONICAL_EPICS.md vs COMPREHENSIVE vs filenames

Three semantic numbering schemes for epics 11–21 (BR-005 partially addressed in docs only).

### P2 — Contextualized examples wrong labels

Tiny/small/ambitious examples reference "Epic 5: Documentation" — not canonical E5=FR.

### P3 — Tier delegation violations

`DELEGATION_COMPLIANCE_AUDIT.md` tracks epic-level story detail duplication.

## Validation gate

`generate_task_templates.py --validate`: **PASS** (378/378 coverage, 376 canonical paths, 2 legacy).

## Recommendations for v3 package

1. Single on-disk layout: flat `epics|stories|tasks` per `kanban_paths.py`
2. One numbering authority: fix 9/18 in COMPREHENSIVE first, regenerate tasks
3. Package **E01:S01 Perpetual Operations** story + T01–T06 task templates
4. Move bootstrap tasks to **E02:S02 Repository Bootstrap**
5. Tiered install bundles: tiny / small / ambitious per CONTEXTUALIZATION_GUIDE
