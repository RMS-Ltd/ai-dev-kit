---
lifecycle: evergreen
created_at: 2026-06-08T18:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# Anti-Pattern Catalog (2026 refresh)

Extends `meta-analysis-good-bad-practices.md` and `meta-analysis-patterns-anti-patterns.md`.

| Anti-pattern | Evidence | Frequency | v3 guard |
|--------------|----------|:---------:|----------|
| **Zombie story** — perpetual + finite mixed in one story, never completes | Starborn E15:S01 (RW infra); book case study E9:S04:T01 | 1/5 repos | Dedicated perpetual story only (FR-088); scatter policy |
| **Epic semantic drift** — filename ≠ header ≠ COMPREHENSIVE | Packaged epic 9/18 swap | Package | Single numbering authority; `--validate` gate |
| **Triple template corpus** | 1,047 files, 3 layouts | Package | One layout; generate nested from SoT |
| **Template mashup** — ai-dev-kit kanban + package templates confused | E06:S07:T06 problem statement | Historical | Adopter vs maintainer divergence doc |
| **Perpetual scatter** | CMW in E02:S01, UKW in E04:S03 | Package | E01:S01 packaged perpetual story |
| **Story/epic doc desync** | ADK `kanban-structure.md` stale vs epic-02.md | ADK live | Tier delegation + RW Step 7 reconciliation |
| **Packaged/live drift (FR-106)** | RW validators differ package vs root `.cursorrules` | ADK | Dual-source parity checklist |
| **Epic mashup** | Client projects copied ai-dev-kit E9 "Book" | 30% (2025) | E24+ for project-specific; installer validation |
| **Embedded tasks only** | Confidentia, fynd.deals, Starborn pre-migration | 3/5 repos | Support read-only; package teaches discrete files |
| **Non-numeric story dirs** | `story-Maintenance` in epic-04 tasks | Package | Enforce `story-NN` per kanban_paths.py |

## Good patterns to elevate (from cross-repo)

| Pattern | Origin | Package in v3 |
|---------|--------|---------------|
| Branch isolation + pre-commit validation | Confidentia | Workflow docs reference |
| Git commit only via RW | Starborn | Already in ADK policy |
| Epic 15/16 maintenance epics | fynd.deals E16, Confidentia E20 | Consolidate to E01 Repository Infrastructure |
| Kanban update workflow (6-task story) | fynd.deals E15:S02 | Template in E01:S01:T02 UKW lane |
| Queue/stack MoSCOW prioritisation | Starborn → FR-037 | Board guide template |
| S00 abstract intake registry | ADK E5/E6/E7 | Optional story pattern doc |
