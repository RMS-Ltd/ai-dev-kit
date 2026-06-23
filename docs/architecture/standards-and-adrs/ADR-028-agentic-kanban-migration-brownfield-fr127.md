---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-028: Agentic Kanban Migration (KMA) Replaces Tool Pipeline for Brownfield

**Status:** Accepted  
**Date:** 2026-06-12  
**Related:** [FR-127](../../kanban/fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [ADR-003](ADR-003-greenfield-vs-brownfield-adoption.md) · [E06:S09:T31](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md)

---

## Context

Brownfield adopters often have domain-specific kanban corpora that do not match ADK canonical naming (`Story-<N>-*.md`, separate task files, framework-aligned epic semantics). The legacy installer pipeline (`detect_existing_structure.py` → `analyze_structure.py` → `migrate_structure.py`) assumes canonical patterns and semantic similarity to framework epics.

Starborn Legacy attempt 06 demonstrated the gap: the tool pipeline detected **0/80+** stories while an agentic workflow migrated **72 stories** into E01–E10 + E21–E28 with operator review. Fixing individual detector bugs (e.g. BR-108 zero-padding) does not address the core limitation: **content synthesis**, **domain-aware epic mapping**, and **non-canonical naming** require agent intelligence.

---

## Decision

### 1. Kanban Migration Agent (KMA) is the canonical brownfield migration path

Adopters with legacy kanban corpora SHALL use the **KMA** workflow (ingest → propose → review → execute → validate) documented in:

`packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md`

Trigger: `/kma` or plain-text `KMA` (see `.claude/commands/kma.md`).

### 2. Operator review gate is mandatory

No migration file writes occur until the operator explicitly signs off on a `migration-proposal.md` artifact (Step 3 BLOCKING). Refinements happen via dialogue before execution.

### 3. Dual-tree preservation (FR-081)

KMA ingests the legacy corpus **read-only**. Target writes go to the ADK `kanban_root` (typically `docs/kanban/`). The legacy tree remains intact as archive/reference.

### 4. Installer migration modes are gated

`install_kanban_framework.py` modes `migration`, `hybrid`, `canonical_adoption`, and `auto` (when resolving to migration) exit with code **2** and stderr pointing to KMA + INSTALL brownfield guidance.

**Retained automated paths:**

| Mode | Purpose |
| ---- | ------- |
| `fresh` | Empty Kanban root — canonical epic templates + consumer board skeleton |
| `update` | Path refresh / structure updates on existing ADK layout |

### 5. Tool pipeline scripts are deprecated, not removed (v1)

`detect_existing_structure.py`, `analyze_structure.py`, `migrate_structure.py`, `semantic_matcher.py`, and `migration_plan_presenter.py` receive `DEPRECATED` module docstrings. Removal deferred to a post-adoption window documented in `packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md`.

---

## Consequences

### Positive

- Brownfield adopters get a path that handles domain epics (E21+), synthesis, and non-canonical naming.
- Operator sovereignty preserved per ADR-003 / FR-081.
- `--mode fresh` remains a reliable automated greenfield path.

### Negative / follow-up

- Migration requires an IDE agent session (not a single CLI command).
- BR-108 tool fixes (E06:S09:T32) remain useful for any legacy tooling but are not the brownfield migration path.
- Script file removal is a separate future task after adoption window.

---

## Guided mode and Target Structure Pack (TSP) — FR-136 / E06:S09:T39

### 6. KMA supports blind, guided, and score modes

| Mode | Purpose |
| ---- | ------- |
| `blind` | Default — policy-only KMA without operator target tree (FR-127) |
| `guided` | Consumes **Target Structure Pack** (`target_est_tree` + optional companion YAML/MD) as structural anchor |
| `score` | Maintainer diff only — structural scorer emits JSON/markdown; **no file writes** |

**TSP contract:** Generic templates under `packages/frameworks/kanban/reference/`. Worked SBL exemplar remains in `adk-install-into-sbl/kanban-reference/` (not vendored into framework defaults).

**Guided invariants:**

- `target_est_tree` MUST be present and readable — **fail fast** when `kma_mode: guided` and TSP is missing.
- Step 3 operator sign-off gate **unchanged** — guided mode does not auto-write migration files.
- Deterministic helpers (M02 collision, M03 dedup, M08 scorer) are **advisory**; agent remains responsible for synthesis (M01, M04–M06).
- Pass threshold for guided structural score: **≥ 0.85** weighted (see `SCORING-RUBRIC.yaml`).

**Related:** [FR-136](../../kanban/fbu/FR-136-guided-kma-target-structure-pack.md) · [TSP reference README](../../packages/frameworks/kanban/reference/README.md) · [E06:S09:T39](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T39-guided-kma-target-structure-pack-fr136.md)

---

## Supersedes

Supersedes kanban README § Migration Support instructions that recommend the `detect→analyze→migrate` tool pipeline for brownfield repos.
