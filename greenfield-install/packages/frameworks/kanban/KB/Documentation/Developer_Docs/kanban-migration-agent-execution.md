---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Migration Agent (KMA) — Agent Execution Guide

**Version:** 1.1.0  
**Last Updated:** 2026-06-17  
**Related:** [FR-127](../../../../../../docs/kanban/fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [FR-136](../../../../../../docs/kanban/fbu/FR-136-guided-kma-target-structure-pack.md) · [ADR-028](../../../../../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md) · [E06:S09:T31](../../../../../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md) · [E06:S09:T39](../../../../../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T39-guided-kma-target-structure-pack-fr136.md)

---

## Overview

The **Kanban Migration Agent (KMA)** is an intelligent agent-driven workflow for migrating legacy kanban corpora into ADK v3.2/v4 layout. It replaces the deprecated `detect→analyze→migrate` tool pipeline for brownfield/domain adopters.

**Trigger:** `KMA` or `/kma` (optional: legacy root path, target `kanban_root`).

**Adopter playbook:** [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](../../../guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md)  
**Guardrails:** [kma-agent-guardrails.yaml](../../../manifests/kma-agent-guardrails.yaml) (`mode: agentic_intelligence_required`)

**Evidence:** SBL attempt 06 — tool pipeline **0** stories detected; agentic migration **72** stories into E01–E10 + E21–E28. Fixture benchmark: `pytest tests/kanban/test_kma_agentic_vs_automated.py`.

---

## Intelligence requirements

KMA is **not** a deterministic script. The agent MUST follow **read → reason → propose → sign-off → synthesise**:

- **Read** full corpus content (not directory listing only)
- **Reason** with DUPLICATE_EPIC_POLICY before epic map
- **Propose** domain-aware epic structure (canonical shell E01–E10 + domain epics E24+ when appropriate)
- **Sign-off** — block file writes until operator confirms
- **Synthesise** epic overviews from multiple legacy sources; identify keep / drop / merge rationale explicitly
- Preserve legacy tree (read-only ingest; writes to separate `kanban_root`)

Optional helpers (`kma_ingest.py`, `validate_migration_map.py`, `score_kma_structure.py`, `kma_collision_detect.py`) are **advisory only**.

---

## KMA modes (FR-136)

| Mode | `kma_mode` | TSP required | Writes |
| ---- | ---------- | ------------ | ------ |
| Blind | `blind` | No | After sign-off (default) |
| Guided | `guided` | Yes — `target_est_tree` | After sign-off; proposal anchored to TSP |
| Score | `score` | Yes | **None** — scorer only |

Load [TSP reference pack](../../../reference/README.md) when running guided or score mode.

**Guided fail-fast:** If `kma_mode: guided` and `target_est_tree` is missing or unreadable, abort before Step 2 — do not proceed to propose.

---

## Five steps

### Step 1 — Ingest

1. Load `rw-config.yaml` when present; resolve `kanban_root` for target writes.
2. Load `kma-agent-guardrails.yaml` — if `kma_mode: guided`, validate `target_est_tree` exists (**fail fast** if missing).
3. Recursively read **legacy kanban root** (read-only): epic docs, story files, inline `E:S:T` tokens, board/MoSCOW state if present.
4. Use `kma_ingest.py` for deterministic inventory counts when helpful:

   ```bash
   python3 packages/frameworks/kanban/scripts/kma_ingest.py --legacy-root PATH --dedup --json
   ```

5. Document ingest summary: epic count, story count, **deduped unique** inline task token count, naming patterns observed.

### Step 2 — Propose

1. Draft `migration-proposal.md` from [MIGRATION_PROPOSAL_TEMPLATE.md](../../../templates/MIGRATION_PROPOSAL_TEMPLATE.md).
2. **🚨 v4 gate (FR-132 / Issue #51):** Emit [DUPLICATE_EPIC_POLICY.md](../../../guides/DUPLICATE_EPIC_POLICY.md) decision matrix mapping **before** epic map table — one home per concern; flag dual mappings.
3. **Default depth L1 (FR-133):** State **preserve megastories** and inline task tokens unless operator explicitly requests L3 rationalization. See [KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md](../../../guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md) §5.
4. **Collision check (FR-133 / M02):** Run collision detector; include table in proposal:

   ```bash
   python3 packages/frameworks/kanban/scripts/kma_collision_detect.py --kanban-root PATH --json
   ```

5. **Guided mode:** Populate **Guided mode** section in proposal — TSP paths, deduped unique count, collision table, lazy fan-out policy, TSP anchor epic map.
6. Include:
   - Epic map table (legacy → target)
   - Keep / Drop / Merge sections with rationale
   - Domain rationale (why E21+ epics vs canonical-only)
   - Operator sign-off block (unchecked)
6. Present proposal to operator. **DO NOT** write migration files yet.

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
python3 packages/frameworks/kanban/scripts/validate_installation.py --kanban-path docs/kanban
python3 packages/frameworks/kanban/scripts/validate_v4_template_completeness.py --strict
python3 packages/frameworks/kanban/scripts/validate_migration_map.py --proposal migration-proposal.md --strict  # advisory
```

**Guided / score structural check (M08):**

```bash
python3 packages/frameworks/kanban/scripts/score_kma_structure.py \
  --tsp path/to/TARGET-EST-TREE.md \
  --kanban-root docs/kanban \
  --mode score_only --json score.json --markdown structural-score.md
```

Pass threshold: **≥ 0.85** weighted (`guided_pass` in rubric). Score mode performs **no file writes** beyond report outputs.

Spot-check links, epic/story counts vs proposal, and dual-tree integrity (legacy mtime unchanged).

**Benchmark regression (fixture):**

```bash
pytest tests/kanban/test_kma_agentic_vs_automated.py -v
```

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

`tests/fixtures/sbl-legacy-kanban-minimal/` — anonymized SBL-style corpus for replay tests (3 epics, 8 stories, 9 inline tasks).

- Ground truth: `benchmark-ground-truth.yaml`
- Example proposal (unsigned E24 merge): `migration-proposal-example.md`
- Benchmark module: `tests/kanban/kma_migration_benchmark.py`
- Regression: `tests/kanban/test_kma_agentic_vs_automated.py` (automated ~0 vs agentic 1.0)

Full SBL corpus optional via `SBL_LEGACY_KANBAN_ROOT` env (integration tests).
