---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Target Structure Pack (TSP) — Framework Reference Contract

**Purpose:** Generic contract for KMA **guided** and **score** modes (FR-136 / E06:S09:T39).

Adopters supply a Target Structure Pack when running guided KMA. The kit ships **templates only** — project-specific routing tables and worked exemplars stay in the adopter repo.

---

## KMA modes

| Mode | `kma_mode` | TSP required | File writes |
| ---- | ---------- | ------------ | ----------- |
| **blind** | `blind` | No | After sign-off (default FR-127) |
| **guided** | `guided` | Yes (`target_est_tree`) | After sign-off; proposal anchored to TSP |
| **score** | `score` | Yes | **None** — scorer only (`score_only` internally) |

Guided mode **fails fast** when `target_est_tree` is missing or unreadable.

---

## TSP companion files

| File | Role | Template |
| ---- | ---- | -------- |
| `TARGET-EST-TREE.md` | Canonical unique `E:S:T` inventory | [TARGET-EST-TREE.template.md](templates/TARGET-EST-TREE.template.md) |
| `TARGET-EST-ALIASES.md` | Legacy token aliases → canonical | [TARGET-EST-ALIASES.template.md](templates/TARGET-EST-ALIASES.template.md) |
| `BAND-PARITY.md` | Per-epic story/task band notes | [BAND-PARITY.template.md](templates/BAND-PARITY.template.md) |
| `TITLE-RESOLUTION-RULES.md` | Named vs unresolved title policy | [TITLE-RESOLUTION-RULES.template.md](templates/TITLE-RESOLUTION-RULES.template.md) |
| `LEGACY-EPIC-REMAP.yaml` | Legacy epic → target epic map (M01) | [LEGACY-EPIC-REMAP.template.yaml](templates/LEGACY-EPIC-REMAP.template.yaml) |
| `TARGET-FOLDER-MAP.yaml` | Epic folder layout (M05) | [TARGET-FOLDER-MAP.template.yaml](templates/TARGET-FOLDER-MAP.template.yaml) |
| `SCORING-RUBRIC.yaml` | Structural scorer weights (M08) | [SCORING-RUBRIC.template.yaml](templates/SCORING-RUBRIC.template.yaml) |

Optional: `KMA-METHODS.md` — method playbook (M01–M08). See SBL exemplar below.

---

## Kit scripts (advisory)

```bash
# M08 structural score (no file writes in score mode)
python3 packages/frameworks/kanban/scripts/score_kma_structure.py \
  --tsp path/to/TARGET-EST-TREE.md \
  --kanban-root docs/kanban \
  --mode score_only --stdout-json

# M02 collision detector
python3 packages/frameworks/kanban/scripts/kma_collision_detect.py \
  --kanban-root docs/kanban --json

# M03 dedup inventory
python3 packages/frameworks/kanban/scripts/kma_ingest.py \
  --legacy-root path/to/legacy --dedup --json

# Optional TSP builder from operator est-tree source
python3 packages/frameworks/kanban/scripts/build_target_est_tree.py \
  --source temp/operator-est-tree.md --output docs/kanban/reference/TARGET-EST-TREE.md
```

Pass threshold for guided mode: **≥ 0.85** weighted total (see rubric `thresholds.guided_pass`).

---

## SBL worked exemplar (not vendored)

Maintainer experiment corpus — **do not copy into framework defaults**:

| Artifact | Path |
| -------- | ---- |
| Full TSP (377 tasks) | [`adk-install-into-sbl/kanban-reference/TARGET-EST-TREE.md`](../../../../adk-install-into-sbl/kanban-reference/TARGET-EST-TREE.md) |
| Scoring rubric | [`adk-install-into-sbl/kanban-reference/SCORING-RUBRIC.yaml`](../../../../adk-install-into-sbl/kanban-reference/SCORING-RUBRIC.yaml) |
| KMA methods M01–M08 | [`adk-install-into-sbl/kanban-reference/KMA-METHODS.md`](../../../../adk-install-into-sbl/kanban-reference/KMA-METHODS.md) |
| Attempt 11 feedback | [`adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md`](../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) |

Integration test: set `KMA_SBL_TSP_ROOT` to `adk-install-into-sbl/kanban-reference/` for optional `@pytest.mark.integration` scorer self-test.

---

## When to use blind vs guided vs score

| Scenario | Mode |
| -------- | ---- |
| Unknown mature brownfield; no operator tree | **blind** |
| Operator-optimized target tree available (SBL attempt 11+) | **guided** |
| Maintainer diff / CI gate before sign-off | **score** |

See [kanban-migration-agent-execution.md](../KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md) and [ADR-028](../../../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md) § Guided mode.
