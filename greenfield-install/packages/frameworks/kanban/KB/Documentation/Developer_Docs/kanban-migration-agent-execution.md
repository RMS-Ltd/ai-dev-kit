---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Migration Agent (KMA) — Agent Execution Guide

**Version:** 1.0.0  
**Last Updated:** 2026-06-12  
**Related:** [FR-127](../../../../../../docs/kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [ADR-028](../../../../../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md) · [E06:S09:T31](../../../../../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md)

---

## Overview

The **Kanban Migration Agent (KMA)** is an intelligent agent-driven workflow for migrating legacy kanban corpora into ADK v3.2 layout. It replaces the deprecated `detect→analyze→migrate` tool pipeline for brownfield/domain adopters.

**Trigger:** `KMA` or `/kma` (optional: legacy root path, target `kanban_root`).

**Evidence:** SBL attempt 06 — tool pipeline 0/80+ stories detected; agentic migration 72 stories into E01–E10 + E21–E28.

---

## Intelligence requirements

KMA is **not** a deterministic script. The agent MUST:

- Read full corpus content (not directory listing only)
- Propose **domain-aware** epic structure (canonical shell E01–E10 + domain epics E21+ when appropriate)
- Synthesise epic overviews from multiple legacy sources
- Identify keep / drop / merge rationale explicitly
- **Block file writes** until operator sign-off
- Preserve legacy tree (read-only ingest; writes to separate `kanban_root`)

---

## Five steps

### Step 1 — Ingest

1. Load `rw-config.yaml` when present; resolve `kanban_root` for target writes.
2. Recursively read **legacy kanban root** (read-only): epic docs, story files, inline `E:S:T` tokens, board/MoSCOW state if present.
3. Use `kma_ingest.py` for deterministic inventory counts when helpful:

   ```bash
   python packages/frameworks/kanban/scripts/kma_ingest.py --legacy-root PATH --json
   ```

4. Document ingest summary: epic count, story count, inline task token count, naming patterns observed.

### Step 2 — Propose

1. Draft `migration-proposal.md` from [MIGRATION_PROPOSAL_TEMPLATE.md](../../../templates/MIGRATION_PROPOSAL_TEMPLATE.md).
2. **🚨 v4 gate (FR-132 / Issue #51):** Emit [DUPLICATE_EPIC_POLICY.md](../../../guides/DUPLICATE_EPIC_POLICY.md) decision matrix mapping **before** epic map table — one home per concern; flag dual mappings.
3. Include:
   - Epic map table (legacy → target)
   - Keep / Drop / Merge sections with rationale
   - Domain rationale (why E21+ epics vs canonical-only)
   - Operator sign-off block (unchecked)
3. Present proposal to operator. **DO NOT** write migration files yet.

### Step 3 — Review (BLOCKING)

**🚨 MANDATORY GATE:** No file writes to `kanban_root` until operator explicitly confirms the proposal (or requests revisions and re-presents).

- Agent MUST state: "Awaiting operator sign-off before Step 4."
- **DO NOT** create epic directories, rename stories, or modify `kboard.md` before sign-off.
- Refinements via dialogue; update proposal artifact until approved.

### Step 4 — Execute

After sign-off only:

1. Write target tree under `kanban_root` per approved proposal.
2. Synthesise epic docs (tactical/strategic overviews — not verbatim copy).
3. Rename stories to v3.2 paths (`epic-{nn}/story-{nn}-*.md`).
4. Update cross-references and board skeleton as specified in proposal.
5. Legacy root remains untouched.

### Step 5 — Validate

Run post-migration checks:

```bash
python packages/frameworks/kanban/scripts/validate_installation.py --kanban-path docs/kanban
python packages/frameworks/kanban/scripts/validate_v4_template_completeness.py --strict
python packages/frameworks/kanban/scripts/validate_migration_map.py --proposal migration-proposal.md --strict
```

Spot-check links, epic/story counts vs proposal, and dual-tree integrity (legacy mtime unchanged).

---

## When to use KMA vs installer modes

| Scenario | Path |
| -------- | ---- |
| Legacy corpus (non-canonical naming, domain epics) | **KMA** |
| Empty Kanban root | `install_kanban_framework.py --mode fresh --catalog v4` |
| Existing ADK layout path refresh | `install_kanban_framework.py --mode update` |
| Deprecated migration modes | **Gated** — use KMA instead |

See [migration-tool-pipeline-deprecation.md](../../../guides/migration-tool-pipeline-deprecation.md) and [INSTALL_IN_YOUR_PROJECT.md](../../../../../../INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories).

---

## Reference fixture

`tests/fixtures/sbl-legacy-kanban-minimal/` — anonymized SBL-style corpus for replay tests. Full SBL corpus optional via `SBL_LEGACY_KANBAN_ROOT` env (integration tests).
