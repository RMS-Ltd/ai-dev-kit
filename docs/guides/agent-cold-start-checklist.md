---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Agent cold-start checklist

Verification companion for [ADR-012](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md). Cold start is **one file**: [AGENTS.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md). Each simulation must load **≤5 files** before substantive work (manifest not required at cold start).

---

## Simulation 1 — Workflows

**Operator prompt:** `RW E02:S16:T17`

| Step | File | Purpose |
| ---- | ---- | ------- |
| 1 | `AGENTS.md` | Routing table + ascertainment (one-step bootstrap) |
| 2 | `docs/guides/workflow-initiation-cheatsheet.md` | `loadFirst` |
| 3 | `.claude/commands/rw.md` | `loadFirst` |
| 4 | Task doc (from prompt) | Target task context |

**Track stated:** `workflows`

---

## Simulation 2 — Kanban / intake

**Operator prompt:** `File FR-103 intake`

| Step | File | Purpose |
| ---- | ---- | ------- |
| 1 | `AGENTS.md` | Routing → `kanban-intake` |
| 2 | `docs/kanban/kboard.md` | `loadFirst` |
| 3 | `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md` | `loadFirst` |
| 4 | Named FBU doc (from prompt) | e.g. FR under intake |

**Track stated:** `kanban-intake`

---

## Simulation 3 — Governance

**Operator prompt:** `ADR governance policy`

| Step | File | Purpose |
| ---- | ---- | ------- |
| 1 | `AGENTS.md` | Routing → `governance` |
| 2 | `docs/governance/README.md` | `loadFirst` |
| 3 | `docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md` | If ADR-specific |
| 4 | `docs/governance/standards/dev-kit-versioning-policy.md` | If policy named |

**Track stated:** `governance`

---

## Pass criteria

- File count ≤ 5 per simulation before editing or running workflows.
- Ascertainment line names track ID before Layer 3 loads.
- No full `.cursorrules` or changelog archive in the first five files.
