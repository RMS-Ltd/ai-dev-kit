# Kanban Migration Agent (KMA) — Slash Command

**Invocation:** `/kma [legacy-root] [--kanban-path PATH] [--mode blind|guided|score] [--tsp PATH]`  
**Plain-text alias:** `KMA` (case-insensitive)

---

## Purpose

Execute the Kanban Migration Agent workflow for brownfield legacy corpus migration. Replaces deprecated `detect→analyze→migrate` tool pipeline per [ADR-028](../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md).

**Modes (FR-136):** `blind` (default) · `guided` (TSP anchor) · `score` (structural diff only, no writes)

---

## Execution

**Load first (painless default path):**

1. [KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md](../../packages/frameworks/kanban/guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md) — L1 default, depth model, collision + megastory
2. [INSTALL — Migrate (default)](../../INSTALL_IN_YOUR_PROJECT.md#migrate-default) — adopter journey
3. [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](../../packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md)
4. [kanban-migration-agent-execution.md](../../packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md)
5. [kma-agent-guardrails.yaml](../../packages/frameworks/kanban/manifests/kma-agent-guardrails.yaml) (`mode: agentic_intelligence_required`)

**Guided / score mode — also load:**

6. [TSP reference README](../../packages/frameworks/kanban/reference/README.md) — contract, companion files, scorer CLI
7. Adopter `target_est_tree` (`TARGET-EST-TREE.md`) and optional companion YAML/MD

Then follow the agentic loop: **Read → Reason → Propose → Sign-off → Synthesise** (ingest → propose → review → execute → validate).

- Use [MIGRATION_PROPOSAL_TEMPLATE.md](../../packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md) for Step 2 artifact; `validate_migration_map.py` is **advisory only**.
- **Guided:** validate `target_est_tree` on Step 1 — **fail fast** if missing or unreadable.
- **Score:** run `score_kma_structure.py` only — **no migration file writes**.
- **Step 3 is BLOCKING** — DO NOT write migration files until operator sign-off.

---

## Mode matrix

| Mode | TSP | Writes | Scorer |
| ---- | --- | ------ | ------ |
| `blind` | No | After sign-off | Optional baseline |
| `guided` | Required | After sign-off | Required ≥ 0.85 before sign-off recommended |
| `score` | Required | **Forbidden** | Required (output JSON/MD only) |

```bash
# Score-only (no kanban writes)
python3 packages/frameworks/kanban/scripts/score_kma_structure.py \
  --tsp path/to/TARGET-EST-TREE.md --kanban-root docs/kanban --stdout-json
```

---

## Intelligence

Agent-driven (not deterministic). Requires synthesis, domain-aware epic mapping, and operator review gate.

---

## Reference

- [FR-127](../../docs/kanban/fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- [FR-136](../../docs/kanban/fbu/FR-136-guided-kma-target-structure-pack.md) — guided KMA + TSP
- [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](../../packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md)
- [migration-tool-pipeline-deprecation.md](../../packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md)
- SBL exemplar: `adk-install-into-sbl/kanban-reference/` (worked TSP — not vendored)
- Benchmark: `pytest tests/kanban/test_kma_agentic_vs_automated.py`
