---
lifecycle: evergreen
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: keep
---

# Legacy kanban migration (v4 playbook)

**Use with:** KMA (Kanban Migration Agent) · [FR-127](../../../docs/kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)

## Paths

| From | To v4 | Mechanism |
|------|-------|-----------|
| v3.5 fresh E01–E08 | v4 Core (same numbers) | `install_kanban_framework.py --mode fresh --catalog v4` |
| Legacy `KB/` / product E1+ | v4 full tree | **KMA** + DUPLICATE_EPIC_POLICY matrix |
| Confidentia-style E15 GDPR | **E15 COMPLY** | Ancillary opt-in |
| fynd scraper/proxy epics | **E24+** domain pack | Not new ancillary epic |

## KMA step 2 checklist

1. Inventory legacy epics (titles + concerns).
2. Run [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md) matrix — one home each.
3. Map vertical product work → **E24+**; cross-adopter capabilities → **E11–E20**.
4. Present `migration-proposal.md` — **no writes** until sign-off.

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
python3 packages/frameworks/kanban/scripts/validate_migration_map.py --proposal migration-proposal.md --strict
python3 packages/frameworks/kanban/scripts/validate_v4_template_completeness.py --strict
```

## Renumber map

See [V35_TO_V4_RENUMBER_MAP.md](V35_TO_V4_RENUMBER_MAP.md).
