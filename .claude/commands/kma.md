# Kanban Migration Agent (KMA) — Slash Command

**Invocation:** `/kma [legacy-root] [--kanban-path PATH]`  
**Plain-text alias:** `KMA` (case-insensitive)

---

## Purpose

Execute the Kanban Migration Agent workflow for brownfield legacy corpus migration. Replaces deprecated `detect→analyze→migrate` tool pipeline per [ADR-028](../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md).

---

## Execution

1. Load `rw-config.yaml` when present.
2. Follow [kanban-migration-agent-execution.md](../../packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md) — five steps: **Ingest → Propose → Review → Execute → Validate**.
3. Use [MIGRATION_PROPOSAL_TEMPLATE.md](../../packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md) for Step 2 artifact.
4. **Step 3 is BLOCKING** — DO NOT write migration files until operator sign-off.

---

## Intelligence

Agent-driven (not deterministic). Requires synthesis, domain-aware epic mapping, and operator review gate.

---

## Reference

- [FR-127](../../docs/kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- [migration-tool-pipeline-deprecation.md](../../packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md)
