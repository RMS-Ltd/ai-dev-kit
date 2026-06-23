---
lifecycle: evergreen
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# Legacy kanban migration to v4

**Use with:** KMA (Kanban Migration Agent) · [KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md](KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md) (L1 default) · [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md) · [FR-127](../../../docs/kanban/fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)

**Mode:** Agentic intelligence required — read → reason → propose → sign-off → synthesise. Scripts are advisory helpers only.

## Paths

| From | To v4 | Mechanism |
|------|-------|-----------|
| v3.5 fresh E01–E08 | v4 Core (same numbers) | `install_kanban_framework.py --mode fresh --catalog v4` |
| Legacy `KB/` / product E1+ | v4 full tree | **KMA** + DUPLICATE_EPIC_POLICY matrix |
| Confidentia-style E15 GDPR | **E15 COMPLY** | Ancillary opt-in |
| fynd scraper/proxy epics | **E24+** domain pack | Not new ancillary epic |

## KMA step 2 checklist

1. Confirm **L1 default** (preserve megastories) — [KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md](KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md).
2. Inventory legacy epics (titles + concerns).
3. Run [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md) matrix — one home each.
4. **Collision scan:** fresh Core `story-{nn}-*.md` vs legacy targets → `story-{nn}-legacy-{slug}.md` if needed (depth guide §4).
5. Map vertical product work → **E24+**; cross-adopter capabilities → **E11–E20**.
6. Present `migration-proposal.md` — **no writes** until sign-off.

## Example rows (Confidentia / fynd)

| Legacy | v4 target |
|--------|-----------|
| Confidentia E15 UK GDPR | **E15 COMPLY** |
| Confidentia E12 RBAC | **E14:S04** |
| Confidentia E6/E16–E18 APIs | **E17 VENDOR** (+ domain names E24+) |
| fynd E4 KMS | **E05:S02** |
| fynd E1–E2 scraper | **E24+** domain |
| Perpetual hygiene epic | **E01:S01** |

## Validation

```bash
# Advisory — dual-mapping lint on proposal (not a migration engine)
python3 packages/frameworks/kanban/scripts/validate_migration_map.py --proposal migration-proposal.md --strict
python3 packages/frameworks/kanban/scripts/validate_v4_template_completeness.py --strict
pytest tests/kanban/test_kma_agentic_vs_automated.py -v
```

**Benchmark fixture:** `tests/fixtures/sbl-legacy-kanban-minimal/` · ground truth `benchmark-ground-truth.yaml` · example proposal `migration-proposal-example.md`

## Renumber map

See [V35_TO_V4_RENUMBER_MAP.md](V35_TO_V4_RENUMBER_MAP.md).
