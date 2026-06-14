# Kanban Migration Agent (KMA) — Slash Command

**Invocation:** `/kma [legacy-root] [--kanban-path PATH]`  
**Plain-text alias:** `KMA` (case-insensitive)

---

## Purpose

Execute the Kanban Migration Agent workflow for brownfield legacy corpus migration. Replaces deprecated `detect→analyze→migrate` tool pipeline per [ADR-028](../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md).

---

## Execution

1. Load `rw-config.yaml` when present.
2. Follow [kanban-migration-agent-execution.md](../../packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md) — agentic loop: **Read → Reason → Propose → Sign-off → Synthesise** (ingest → propose → review → execute → validate).
3. Read [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](../../packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md) and [kma-agent-guardrails.yaml](../../packages/frameworks/kanban/manifests/kma-agent-guardrails.yaml) (`mode: agentic_intelligence_required`).
4. Use [MIGRATION_PROPOSAL_TEMPLATE.md](../../packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md) for Step 2 artifact; `validate_migration_map.py` is **advisory only**.
5. **Step 3 is BLOCKING** — DO NOT write migration files until operator sign-off.

---

## Intelligence

Agent-driven (not deterministic). Requires synthesis, domain-aware epic mapping, and operator review gate.

---

## Reference

- [FR-127](../../docs/kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](../../packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md)
- [migration-tool-pipeline-deprecation.md](../../packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md)
- Benchmark: `pytest tests/kanban/test_kma_agentic_vs_automated.py`
