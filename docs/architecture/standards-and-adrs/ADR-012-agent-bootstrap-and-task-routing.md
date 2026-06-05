---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-012: Agent bootstrap and task routing

### Version 0.0.1

| Version | Change |
| ------- | ------ |
| 0.0.1 | Initial decision — layered agent onboarding, triage routing, lazy context loading. |

**Status:** Accepted  
**Date:** 2026-05-30  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E02:S16:T17](../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md)  
**Planning package:** [IPP-E2S16T17](../../implementation-cycles/IPP-E02S16T17-agent-bootstrap-and-task-routing-fr103.md)  
**Related:** [FR-103](../../project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing.md), `README.md`, `AGENTS.md`, `docs/project-agent-manifest.json`, `docs/project-agent-index.md`

---

## Context

This project is large enough that a cold-started AI agent cannot afford to read the full documentation tree, register, or codebase on every session. Undirected exploration is expensive, slow, and inconsistent. Operators start **new chats per task** to control token cost; each new chat loses implicit context unless the repo provides a **cheap, deterministic bootstrap path**.

We need:

1. A **short project intro** (always safe to read).
2. A **triage layer** that maps user intent → specific files to load next.
3. **Lazy depth** — standards and large artifacts load only when the task requires them.

---

## Decision

Adopt a **three-layer agent context model** with two repo entrypoints (human + machine) and explicit routing tables.

### Layer 1 — Intro (always load)

**File:** repo-root [`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md).

**Target size:** ≤ 150 lines. Sections: project summary, bootstrap steps, use-case table, binding-rule pointers, ascertainment rule, anti-patterns. **Must not** contain full workflow prose.

### Layer 2 — Triage (cold start, scan only)

| File | Role |
| ---- | ---- |
| [`docs/project-agent-manifest.json`](../../project-agent-manifest.json) | Machine-readable routing, protocol IDs, canon index, open work snapshot |
| [`docs/project-agent-index.md`](../../project-agent-index.md) | Human-readable mirror |

**Bootstrap behaviour (binding for agents):**

1. Read **`AGENTS.md` only** on cold start — it embeds the routing table (keywords + `loadFirst`), binding rules, and open-work snapshot.
2. Match keywords → load only listed `loadFirst` paths.
3. If no match: one clarifying question — do not explore the whole repo.
4. **`project-agent-manifest.json`** is a machine mirror for validators; do not require a second agent read at session start. Keep manifest in sync when editing `AGENTS.md` routing.

Schema: [`docs/project-agent-manifest.schema.json`](../../project-agent-manifest.schema.json).

### Layer 3 — Detail (lazy load)

Governance, registers, journals, and application source load **only after** triage identifies track + task.

### IDE integration

- Cursor / Claude: bootstrap pointers in [`.cursorrules`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules) and [`CLAUDE.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CLAUDE.md); full workflow SoT remains `.cursorrules` / slash commands.
- Skills: invoke-only (`.cursor/skills/`), not cold-load.
- Encouraged operator format: `Track: … | File: … | Task: …`

### Generated vs static manifest sections

| Section | Maintenance |
| ------- | ----------- |
| `introduction`, `protocol`, `taskRouting`, `tracks` | Static — PR review |
| `canon[]`, `openWork[]` | Curated v1; generator optional later |

### Routing coverage rule

Every recurring operator task type must gain a `taskRouting[]` row within one week of becoming routine.

---

## Alternatives considered

| Alternative | Why not |
| ----------- | ------- |
| Single mega `AGENTS.md` | Full token cost every chat |
| README only | No routing or protocol IDs |
| Full register every session | Does not scale |
| Semantic search only | Non-deterministic; misses binding rules |
| One eternal chat | History bloat |

---

## Consequences

### Positive

- Cold starts: **O(intro + manifest scan + 2–4 entry files)**
- Stable bootstrap across new chats
- Human/machine alignment (index + manifest)

### Negative

- Upfront authoring tax; drift if routes lag new workflows
- Intro + manifest must stay consistent

### Compliance checks

- [x] `AGENTS.md` ≤ 150 lines (E02:S16:T17)
- [x] Manifest validates; ≥5 `taskRouting[]` rows
- [x] `project-agent-index.md` documents read order
- [x] Workspace rules reference bootstrap
- [x] Anti-patterns explicit
- [x] Cold-start simulations in [`agent-cold-start-checklist.md`](../../guides/agent-cold-start-checklist.md)

---

## References

- [Michael Nygard — Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- [FR-022](../../project-management/kanban/fr-br/FR-022-policy-docs-machine-readable-salience.md) — `protocol[]` pointers complement policy salience work

---

*AI Dev Kit | ADR-012 Agent bootstrap and task routing | v0.0.1*
