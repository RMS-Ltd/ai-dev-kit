# AI Dev Kit — Agent bootstrap (Layer 1)

**Repo:** AI Dev Kit (RMS-Ltd) — workflow frameworks, kanban, validators, release automation for agentic development. **Human overview:** [`README.md`](README.md). **Branch:** `dev` for integration; epic branches for delivery.

**Domain agent roles (UKW, intake, documentation coordination):** [`docs/project-management/kanban/AGENTS.md`](docs/project-management/kanban/AGENTS.md)

---

## Bootstrap steps (cold start)

1. Read this file (you are here).
2. Load and **scan** [`docs/project-agent-manifest.json`](docs/project-agent-manifest.json) — `protocol[]`, `taskRouting[]`, `openWork[]` only.
3. **State which track(s) apply** to the user message before opening Layer 3 docs.
4. Load only `loadFirst[]` for the matched `taskRouting` intent (see manifest).
5. Open task-specific docs (`E##:S##:T##`) when the user or `openWork[]` names them.

**Human mirror:** [`docs/project-agent-index.md`](docs/project-agent-index.md) · **Architecture:** [ADR-012](docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)

**Operator shortcut (skip keyword match):** `Track: workflows | File: docs/project-agent-manifest.json | Task: E02:S16:T17`

---

## Tracks (use cases)

| ID | When | First loads (after manifest scan) |
| -- | ---- | --------------------------------- |
| `workflows` | RW, UKW, IPW, CMW, PVW, release | [Cheatsheet](docs/guides/workflow-initiation-cheatsheet.md), `.claude/commands/*.md` |
| `kanban-intake` | FR, BR, UXR, boards, intake | [kboard.md](docs/project-management/kanban/kboard.md), [Intake guide](packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md) |
| `governance` | ADR, policy, standards | [Governance README](docs/governance/README.md) |
| `framework-code` | Packages, validators, scripts | [Workflow mgt README](packages/frameworks/workflow%20mgt/README.md) |
| `implementation-planning` | IPW, IPP, ICW | [ipw.md](.claude/commands/ipw.md), [IPP vs ICW](docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md) |
| `agent-bootstrap` | Manifest, routing, cold start | [project-agent-index.md](docs/project-agent-index.md) |

Full keyword lists: manifest `taskRouting[]`.

---

## Binding rules (pointers only)

| ID | Rule | Source |
| -- | ---- | ------ |
| P-IPW-GATE | No implementation until IPP/ICW linked + explicit user go-ahead | [FR-083](docs/project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md) |
| P-RW-GIT | Commit/push only via RW | `.cursorrules` (Git Workflow Restrictions) |
| P-RW-TASK-TOKEN | RW requires `E:S:T` in trigger | [FR-060](docs/project-management/kanban/fr-br/FR-060-rw-task-argument-requirement.md) |
| P-RW-STEP7 | RW Step 7 four-surface kanban reconciliation | [FR-092](docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md) |
| P-EST-PADDING | Two-digit E/S/T in new writes | [UXR-014](docs/project-management/kanban/fr-br/UXR-014-two-digit-est-identifier-default-formatting.md) |
| P-TRIGGER-ROUTING | `RW`/`UKW`/`IPW`/… at message start = workflow commands | [CLAUDE.md](CLAUDE.md) |
| P-INTAKE-ATOMIC | FR/BR/UXR intake needs task + links same session | [Intake guide](packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md) |

Machine-readable list: manifest `protocol[]`. **Workflow execution SoT:** `.cursorrules` and `.claude/commands/` (load when `workflows` track applies — not at cold start).

---

## Ascertainment rule

Before loading governance corpora, journals, frameworks in depth, or application code, output one line:

`Tracks: <id>[, …] — loading: <loadFirst paths>`

If no `taskRouting` keyword match, ask **one** clarifying question. Do not grep the whole repository.

---

## Anti-patterns (do not load unless routed)

- Full [`.cursorrules`](.cursorrules) ingest at cold start (scan manifest first).
- [`docs/changelog-and-release-notes/changelog-archive/`](docs/changelog-and-release-notes/changelog-archive/) and bulk [`CHANGELOG.md`](CHANGELOG.md) unless changelog track.
- [`docs/journals/`](docs/journals/) unless forensic recovery routed.
- Entire [`fbuboard.md`](docs/project-management/kanban/fbuboard.md) MoSCOW unless kanban-intake track.
- IDE plan folders outside repo (`~/.cursor/plans/`).

---

## IPW / implementation gate (summary)

Planning-only requests (FR, BR, UXR, task, spec, plan): produce artifacts and **stop**. Implementation requires: (1) task `E:S:T`, (2) linked IPP or ICW trio under `docs/implementation-cycles/`, (3) explicit user authorization (`implement`, `RW E:S:T`, etc.). **IPW:** `/ipw E:S:T` in plan mode — [`.claude/commands/ipw.md`](.claude/commands/ipw.md).

**Maintainer cheatsheet:** [`docs/guides/workflow-initiation-cheatsheet.md`](docs/guides/workflow-initiation-cheatsheet.md)

---

## RW agent (summary)

Release Workflow: version bump, changelog, kanban Step 7, commit, tag, push. Use RW skills under `.cursor/skills/`. **Trigger:** `RW E##:S##:T##` or `/rw`. Full steps: `.cursorrules` RW section + [release-workflow-agent-execution.md](packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md). **Extended role detail:** [kanban AGENTS.md](docs/project-management/kanban/AGENTS.md#documentation-agent---documentation-specialist).
