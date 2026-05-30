---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Agent cold-start checklist

Verification companion for [ADR-012](../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) and [E02:S16:T17](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md). Each simulation must load **≤5 files** before substantive work.

---

## Simulation 1 — Workflows

**Operator prompt:** `RW E02:S16:T17`

| Step | File | Purpose |
| ---- | ---- | ------- |
| 1 | `AGENTS.md` | Layer 1 intro + ascertainment |
| 2 | `docs/project-agent-manifest.json` | Scan routing → `workflows` |
| 3 | `docs/guides/workflow-initiation-cheatsheet.md` | `loadFirst` |
| 4 | `.claude/commands/rw.md` | `loadFirst` |
| 5 | Task T17 doc (from prompt) | Target task context |

**Track stated:** `workflows`

---

## Simulation 2 — Kanban / intake

**Operator prompt:** `File FR-103 intake`

| Step | File | Purpose |
| ---- | ---- | ------- |
| 1 | `AGENTS.md` | Intro |
| 2 | `docs/project-agent-manifest.json` | Scan → `kanban-intake` |
| 3 | `docs/project-management/kanban/kboard.md` | `loadFirst` |
| 4 | `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md` | `loadFirst` |
| 5 | `docs/project-management/kanban/fr-br/FR-103-agent-bootstrap-and-task-routing.md` | Named FBU |

**Track stated:** `kanban-intake`

---

## Simulation 3 — Governance

**Operator prompt:** `ADR governance policy`

| Step | File | Purpose |
| ---- | ---- | ------- |
| 1 | `AGENTS.md` | Intro |
| 2 | `docs/project-agent-manifest.json` | Scan → `governance` |
| 3 | `docs/governance/README.md` | `loadFirst` |
| 4 | `docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md` | If ADR-specific |
| 5 | `docs/governance/standards/dev-kit-versioning-policy.md` | If policy named |

**Track stated:** `governance`

---

## Pass criteria

- File count ≤ 5 per simulation before editing or running workflows.
- Ascertainment line names track ID before Layer 3 loads.
- No full `.cursorrules` or changelog archive in the first five files.
