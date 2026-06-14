---
lifecycle: timeboxed
created_at: 2026-06-14T12:00:00Z
ttl_days: 90
housekeeping_policy: archive
---

# SBL attempt 09 — Kanban v4 replay plan

**Program:** [E06:S09:T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)  
**Drivers:** [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) · [FR-132](../../../kanban/fr-br/FR-132-kanban-v4-three-tier-catalogue.md)

## Objectives

1. **Greenfield v4** — `install_kanban_framework.py --mode fresh --catalog v4` on empty kanban root
2. **KMA dry-run** — legacy `KB/PM_and_Portfolio/` ingest + DUPLICATE_EPIC_POLICY matrix + proposal (no writes until sign-off)
3. **Validators** — `validate_v4_template_completeness.py --strict`

## Steps (operator)

```bash
# 1. Package validators
python3 packages/frameworks/kanban/scripts/validate_v4_template_completeness.py --strict

# 2. Fresh install (fixture or SBL branch)
python3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode fresh --catalog v4 --kanban-path /tmp/kanban-v4-test

# 3. KMA
# KMA /path/to/legacy/kanban  — Step 2 must include DUPLICATE_EPIC_POLICY matrix

# 4. Migration map (after proposal drafted)
python3 packages/frameworks/kanban/scripts/validate_migration_map.py --proposal migration-proposal.md --strict
```

## Success

- No duplicate Security/Testing/CI epics in proposal
- Confidentia E15 → **E15 COMPLY**; scraper work → **E24+**
- Fresh E01–E08 match v4 template depth (Purpose + `{PROJECT_NAME}`)
- KMA benchmark passes: `pytest tests/kanban/test_kma_agentic_vs_automated.py` (automated pipeline ~0 story recall vs agentic 1.0 on minimal fixture; SBL attempt 06 evidence **0 vs 72** on full corpus)

## Benchmark reference

| Corpus | Automated detect→analyze | Agentic KMA |
| ------ | ------------------------ | ----------- |
| `tests/fixtures/sbl-legacy-kanban-minimal/` | ~0 story recall | 1.0 (8/8 stories) |
| SBL full (`KB/PM_and_Portfolio`) | 0 detected | 72 migrated |

Ground truth: `tests/fixtures/sbl-legacy-kanban-minimal/benchmark-ground-truth.yaml`  
Playbook: [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](../../../packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md)
