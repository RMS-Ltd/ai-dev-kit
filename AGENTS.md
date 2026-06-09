# AI Dev Kit — Agent bootstrap (Layer 1)

**Repo:** AI Dev Kit (RMS-Ltd) — workflow frameworks, kanban, validators, release automation for agentic development. **Human overview:** [`README.md`](README.md). **Branch:** `dev` for integration; epic branches for delivery.

**Domain agent roles (UKW, intake, documentation):** [`docs/kanban/AGENTS.md`](docs/kanban/AGENTS.md)

---

## Cold start (one step)

**Read this file only** through the ascertainment rule below. It contains the routing table, binding rules, and open-work snapshot that tools also mirror in [`docs/project-agent-manifest.json`](docs/project-agent-manifest.json) — **do not open the manifest on cold start** unless you are editing routes or running validators.

Then:

1. Match the user message to **Keywords** in the routing table (or use the operator shortcut).
2. **State which track(s) apply** before opening any other repo file.
3. Load **only** the listed `loadFirst` paths (+ task doc if `E##:S##:T##` is named).
4. Lazy-load everything else (full `.cursorrules`, archives, journals) only when the task requires it.

**Operator shortcut (skip keyword match):** `Track: workflows | Task: E02:S16:T13 | File: …`

**Architecture / maintainer detail:** [ADR-012](docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) · [project-agent-index.md](docs/project-agent-index.md) (validate/sync commands only)

---

## Task routing (authoritative)

| Track | Keywords (match any) | loadFirst |
| ----- | -------------------- | --------- |
| `workflows` | RW, UKW, IPW, IDW, CMW, PVW, release, changelog, kanban sync, workflow | `docs/guides/workflow-initiation-cheatsheet.md`, `.claude/commands/rw.md` (terminal allowlist: `docs/developer-tools/ide-whitelist-guide.md`) |
| `kanban-intake` | FR, BR, UXR, intake, kboard, fbuboard, MoSCOW, task doc | `docs/kanban/kboard.md`, `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md` |
| `governance` | ADR, governance, policy, standard, versioning | `docs/governance/README.md` |
| `framework-code` | package, validator, script, pytest, framework, workflow mgt | `packages/frameworks/workflow-mgt/README.md` |
| `implementation-planning` | IPP, ICW, IPW, plan mode, implementation plan, specification | `.claude/commands/ipw.md`, `docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md` |
| `adopter-docs` | user-docs, adopter-public, portal link, Docusaurus publish, contributing guide | `docs/governance/standards/adopter-public-documentation-authoring.md`, `portal/README.md` |
| `maintainer-kb` | maintainer KB, knowledge base, investigation, analysis, records, maintainer doc, Engineering KB, git maintainer | `docs/knowledge/README.md`, `docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md`, `rw-config.yaml` |
| `agent-bootstrap` | bootstrap, routing, cold start, AGENTS | `docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md` |

When editing this table, update `docs/project-agent-manifest.json` `taskRouting[]` in the same change set.

---

## Open work (snapshot)

| Task | Summary | Task doc |
| ---- | ------- | -------- |
| E02:S16:T06 | FR-112 — GitHub Security & Code Quality perpetual hygiene (Wave 3e @ v0.8.3.16+9; dashboard re-verify pending) | `docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md` |

Refresh from `kboard.md` when running UKW or RW Step 7; mirror into manifest `openWork[]` if changed.

---

## Binding rules (pointers only)

| ID | Rule | Source |
| -- | ---- | ------ |
| P-IPW-GATE | No implementation until IPP/ICW linked + explicit go-ahead (`IDW E:S:T` or `implement`) | [FR-083](docs/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md) |
| P-RW-GIT | Commit/tag via RW; **never push by default**; Step 9.7 CI parity before commit; `--all` before push/batch | [UXR-024](docs/kanban/fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md) · [E08:S03:T15](docs/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md) · `.cursorrules` |
| P-RW-TASK-TOKEN | RW requires `E:S:T` in trigger | [FR-060](docs/kanban/fr-br/FR-060-rw-task-argument-requirement.md) |
| P-RW-STEP7 | RW Step 7 four-surface kanban reconciliation | [FR-092](docs/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md) |
| P-EST-PADDING | Two-digit E/S/T in new writes | [UXR-014](docs/kanban/fr-br/UXR-014-two-digit-est-identifier-default-formatting.md) |
| P-TRIGGER-ROUTING | `RW`/`UKW`/`IPW`/`IDW`/… at message start = workflow commands | [CLAUDE.md](CLAUDE.md) |
| P-INTAKE-ATOMIC | FR/BR/UXR intake needs task + links same session | [Intake guide](packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md) |
| P-RW-BUILD | Same E:S:T → BUILD+1 default; no `git tag -f` on release tags; `--dpz` (alias: `--doc-policy-zero`) only if user-triggered + untagged | [BR-097](docs/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) |
| P-GIT-MAINTAINER | New maintainer docs → repo paths (`docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`); Notion optional archive only | [ADR-026](docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) |
| P-PORTAL-LINKS | Edits under `docs/guides/**` or `docs/documentation/**` → GitHub blob URLs for excluded trees; run portal pytest before commit | [adopter-public-documentation-authoring.md](docs/governance/standards/adopter-public-documentation-authoring.md) · [BR-068](docs/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md) |
| P-GREENFIELD-SYNC | Edits under `packages/frameworks/**` → `sync_greenfield_install.py` + commit mirror in same change set | [FR-110](docs/kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) |

**Workflow execution SoT:** `.cursorrules` and `.claude/commands/` — load when `workflows` track applies, not at cold start.

---

## Ascertainment rule

Before loading governance corpora, journals, frameworks in depth, or application code, output one line:

`Tracks: <id>[, …] — loading: <loadFirst paths>`

If no keyword match, ask **one** clarifying question. Do not grep the whole repository.

---

## Anti-patterns (do not load unless routed)

- Full [`.cursorrules`](.cursorrules) ingest at cold start.
- [`docs/project-agent-manifest.json`](docs/project-agent-manifest.json) at cold start (routing is in this file).
- Changelog archive tree unless changelog/release work.
- [`docs/journals/`](docs/journals/) unless forensic recovery.
- Entire [`kboard.md`](docs/kanban/kboard.md) MoSCOW unless kanban-intake track.
- Routing maintainer KB work to Notion MCP when git paths suffice — author in-repo per [ADR-026](docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md).
- Publishing maintainer corpora on Docusaurus — allowlist is adopter-public only ([FR-114](docs/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)).
- IDE plan folders outside repo (`~/.cursor/plans/`).

---

## IPW / implementation gate (summary)

Planning-only (FR, BR, UXR, task, spec, plan): produce artifacts and **stop**. Implementation requires: (1) task `E:S:T`, (2) linked IPP or ICW under `docs/implementation-cycles/`, (3) explicit authorization (`IDW E:S:T`, `implement`, or post-impl `RW E:S:T`). **IPW:** `/ipw E:S:T` in plan mode — [`.claude/commands/ipw.md`](.claude/commands/ipw.md). **IDW:** `/idw E:S:T [--rw]` in implementation mode — [`.claude/commands/idw.md`](.claude/commands/idw.md).

**Cheatsheet:** [`docs/guides/workflow-initiation-cheatsheet.md`](docs/guides/workflow-initiation-cheatsheet.md)

---

## RW agent (summary)

RW: version, changelog, kanban Step 7, commit, tag, push — **`RW E##:S##:T##`** or `/rw`. Details: `.cursorrules` + [release-workflow-agent-execution.md](packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md). Role detail: [kanban AGENTS.md](docs/kanban/AGENTS.md).
