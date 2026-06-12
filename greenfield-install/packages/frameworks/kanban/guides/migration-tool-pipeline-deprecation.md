---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Migration Tool Pipeline Deprecation Plan

**Status:** Active (FR-127 / ADR-028)  
**Canonical replacement:** [Kanban Migration Agent (KMA)](../KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md)

---

## Summary

The `detect→analyze→migrate` tool pipeline is **deprecated** for brownfield legacy migration. Use **KMA** (`KMA` / `/kma`) instead. The installer gates migration-related modes with exit code **2** and stderr pointers to this guide and INSTALL.

---

## Gated installer modes

| Mode | Status | Replacement |
| ---- | ------ | ----------- |
| `migration` | **Gated** (exit 2) | KMA |
| `hybrid` | **Gated** (exit 2) | KMA |
| `canonical_adoption` | **Gated** (exit 2) | KMA |
| `auto` (resolves to migration) | **Gated** (exit 2) | KMA |
| `fresh` | **Retained** | Automated canonical templates |
| `update` | **Retained** | Path refresh on existing ADK layout |

---

## Deprecated scripts

| Script | Status | Notes |
| ------ | ------ | ----- |
| `detect_existing_structure.py` | DEPRECATED | Misses non-canonical story naming |
| `analyze_structure.py` | DEPRECATED | Framework semantic match poor for domain projects |
| `migrate_structure.py` (migration modes) | DEPRECATED | No content synthesis |
| `semantic_matcher.py` | DEPRECATED | Used only by analyze pipeline |
| `migration_plan_presenter.py` | DEPRECATED | Superseded by KMA proposal artifact |

Scripts remain in-tree for one adoption cycle with module docstring banners. **Removal deferred** until post-adoption window (target: after two minor framework releases).

---

## Dual-tree contract

- Legacy kanban root: **read-only** during KMA ingest
- Target writes: ADK `kanban_root` only
- See [ADR-028](../../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md) and [FR-081](../../../docs/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Adopter pointer

Brownfield INSTALL section: [INSTALL_IN_YOUR_PROJECT.md](../../../INSTALL_IN_YOUR_PROJECT.md#agentic-legacy-migration-kma)
