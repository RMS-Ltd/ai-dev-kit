---
lifecycle: evergreen
created_at: 2026-06-08T18:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# v3.2 Package Migration Blueprint (post-ratification only)

**Do not execute until Phase 5 operator sign-off.**

## Naming conventions (package rewrite)

| Level | Rule |
|-------|------|
| Epic title | `&` when joining concepts |
| Story title | `&` when joining concepts (e.g. Workflow Definitions & Patterns, Translation & Localisation) |
| Task title | `&` or `and` — readability wins |
| File slug | Hyphenated `and` in paths OK; H1/display title uses `&` |

## Epic remap table (v1 packaged → v3.2)

| v1 | v1 name | v3.2 | v3.2 name |
|----|---------|------|-----------|
| E01 | Project Core | **E01** | Repository Infrastructure & Maintenance |
| E01:S01 | Project Foundation | **E02:S02** | Repository Bootstrap |
| E01:S03 | Initial Feature Set | **E24:S01** | First delivery |
| E02 | Workflow Management | **E02** | Workflow Management |
| E03–E04 | Versioning, Kanban | E03–E04 | Unchanged |
| E05 FR | FR Implementation | **E04:S02** | story under Kanban |
| E06 BR | BR Implementation | **E04:S03** | story under Kanban |
| E07 UXR | UXR | **E04:S04** | story under Kanban |
| E08 | Codebase Maintenance | **E10:S01** | Code Quality — Review & upkeep |
| E09 Documentation* | *(swap mess)* | **E06** | Documentation |
| E21 Architecture Refactoring | | **E05** (project) + **E10:S02** (code refactors) |
| E22/E23 CI/CD | | **E07** | Process Automation & CI/CD |
| E10–E20 ancillary | | **E08–E19** | Renumber per v3.2 sequential table |
| — | — | **E20** | reserved |

\*Single authority — no 9/18 swap in v3.2.

## Perpetual relocation

| v1 location | v3 location |
|-------------|-------------|
| E02:S01:T05 CMW pattern | E01:S01:T01 (workflow umbrella) |
| E04:S03 UKW RW pattern | E01:S01:T02 UKW hygiene |
| (new) | E01:S01:T03 docs · T04 infra · T05 CI · T06 security scan hygiene (not code quality) |

## File touch list (waves)

### Wave 1 — Numbering authority (blocking)

- `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- `CANONICAL_EPICS.md`
- `epics/epic-09-*`, `epics/Epic-18-*` + all `stories/epic-09`, `stories/epic-18`, `tasks/epic-09`, `tasks/epic-18`
- Run `generate_task_templates.py --validate`

### Wave 2 — Layout collapse

- Delete or generate-from-SoT: nested `epic-NN/` (457 files)
- Sync `greenfield-install/` mirror
- Remove `Epic-NN/` legacy in greenfield

### Wave 3 — v3 semantics

- New `stories/epic-01/story-01-Perpetual-Operations.md`
- New tasks `tasks/epic-01/story-01/T01–T06-*.md`
- Rewrite `stories/epic-02/story-01-*` → **Workflow Definitions & Patterns**; `story-02-*` → **Repository Bootstrap**
- Rename v1 story display titles: `… and …` → `… & …` (e.g. FR Intake & Processing Workflow, Translation & Localisation)
- Update `epics/epic-01-Infrastructure-and-Maintenance.md`
- Update `CONTEXTUALIZATION_GUIDE.md` examples
- `install_kanban_framework.py` tier bundles

### Wave 4 — Governance

- `kanban-governance-policy.md` — adopter E01:S01 vs maintainer E02:S16
- `KANBAN_BOARD_TEMPLATE.md` — Ongoing band
- FR for any policy changes

## Adopter vs maintainer divergence (explicit)

| Surface | Adopter package | ai-dev-kit maintainer |
|---------|-----------------|----------------------|
| Perpetual home | E01:S01 | E02:S16 |
| Epic 5 semantics | Project Architecture | `docs/architecture/` (live dogfood) |
| Epic 6 semantics | Documentation | Documentation Management (live) |
| Epic 10 semantics | Code Quality | Split across E07/E08 (live dogfood) |
| Epic count | 1–23 template + E24+ | 12 live epics |

Document in package README — prevents FR-106-class confusion.
