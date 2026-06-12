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
**Related:** [FR-127](../../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [ADR-003](ADR-003-greenfield-vs-brownfield-adoption.md) · [E06:S09:T31](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md)

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

## Supersedes

Supersedes kanban README § Migration Support instructions that recommend the `detect→analyze→migrate` tool pipeline for brownfield repos.
