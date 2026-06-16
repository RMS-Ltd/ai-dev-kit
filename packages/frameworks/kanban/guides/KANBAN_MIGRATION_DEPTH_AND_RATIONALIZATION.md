---
lifecycle: evergreen
created_at: 2026-06-15T20:00:00Z
housekeeping_policy: keep
---

# Kanban migration depth and rationalization

**Audience:** Adopter operators and IDE agents (brownfield Arm B)  
**North star:** Migration is **as painless as possible** — one kit-owned path, clear “done,” optional optimization later.  
**Policy:** [FR-133](../../../docs/kanban/fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [ADR-028](../../../docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md) · [ADR-030](../../../docs/architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md)

**Related:** [INSTALL Path 2 — Migrate (default)](../../../../INSTALL_IN_YOUR_PROJECT.md#migrate-default) · [LEGACY_KANBAN_MIGRATION.md](LEGACY_KANBAN_MIGRATION.md) · [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md) · [kanban-migration-agent-execution.md](../KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md)

---

## 1. Default journey (L1 — ship here)

**Default depth = L1.** When you complete Arm B with blind kit KMA and Install RC strict PASS, you have **migrated enough to ship** — no mandatory megastory split, task fan-out, or maintainer reference tree.

| Step | Action | Kit surface |
| ---- | ------ | ----------- |
| 0 | Vendor + venv | `install_greenfield_path.py` |
| 1 | `rw-config` skeleton | INSTALL layered sequence |
| 2 | SQLite allocator | `import_legacy.py` or empty `.adk/release-state.db` |
| 3 | RW installer scaffold | `install_release_workflow.py` |
| 3.5 | Documentation schema profile | `DOCUMENTATION_SCHEMA.md` |
| 3c | UKW / cursorrules wiring | INSTALL |
| 4 | Kanban fresh Core | `install_kanban_framework.py --mode fresh --catalog v4` |
| 5 | **KMA** — kit first pass on **archived legacy only** | `/kma` · [kma.md](../../../../.claude/commands/kma.md) |
| 6 | Sign-off + Install RC | [install-rc-checklist.md](../../../docs/governance/standards/install-rc-checklist.md) |
| 7 | First domain RW | `RW E…:S…:T…` |

**Painlessness bar (evidence: SBL attempt 10):**

- **0** ad-hoc `scripts/*kma*` or invented phase scripts
- Orchestrator + kit KMA + validators only
- Install RC `arm-b` strict PASS
- `COMPREHENSION.md` at repo root (from [COMPREHENSION_TEMPLATE.md](../../workflow-mgt/templates/COMPREHENSION_TEMPLATE.md))

**You are done when:** RC PASS + comprehension doc + zero ad-hoc migration scripts. L2/L3 are **not** required.

---

## 2. Migration depth model

| Depth | Name | Entry | Exit (done) | RC blocking? |
| ----- | ---- | ----- | ----------- | ------------ |
| **L1** | Route & preserve | Arm B install + archived legacy | KMA sign-off + synthesise at L1; RC PASS; first RW | **Default ship bar** |
| **L2** | Hygiene | After L1 ship; operator opts in | Collision renames, board stubs, validator fixes; separate sign-off | No |
| **L3** | Rationalize | After L1 (or L2); operator opts in | Megastory split, task fan-out, structural scorecard; separate sign-off | No |

**Invariant:** Install RC semantics are **orthogonal** to depth. Do not add L3-only rows to `install-rc-checklist.yaml` blocking set.

### L1 — Route & preserve (default)

- Emit [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md) matrix before epic map (KMA Step 2).
- Route concerns to Core E01–E10, Ancillary E11–E20, Domain **E24+** per ingest — no project-specific routing tables in kit.
- **Preserve** megastories: inline `E:S:T` tokens and multi-task story bodies stay unless operator signs L3 proposal.
- Forensic tokens in legacy bodies may differ from fresh Core numbering — **valid at L1**.
- Blind KMA: no pre-authored target E/S tree; no held-out reference tree in agent context for first pass.

### L2 — Hygiene (opt-in)

Second signed-off pass after ship. Typical work:

- Filename collision resolution (`story-{nn}-legacy-{slug}.md` pattern — see §4)
- Board redirect stubs, active-row hygiene
- Validator fixes that do not change migration semantics

Use [MIGRATION_RATIONALIZATION_TEMPLATE.md](../templates/MIGRATION_RATIONALIZATION_TEMPLATE.md) for proposal artifact.

### L3 — Rationalize (opt-in)

Second signed-off pass when structural optimization is desired:

- Megastory → per-task fan-out
- E/S/T renumbering aligned to v4 catalog
- Structural scorecard vs internal quality bar

**Never** required for Install RC PASS or first RW.

---

## 3. Epic bands (parameterized)

Filled from ingest + DUPLICATE_EPIC_POLICY — not from exemplar-project maps:

| Band | Range | Examples |
| ---- | ----- | -------- |
| **Core** | E01–E10 | Repo hygiene, workflows, intake, ADR, CI |
| **Ancillary** | E11–E20 | DATA, API, UI, AUTH, COMPLY, VENDOR, … |
| **Domain** | E24+ | Vertical product work (game loop, scrapers, features) |
| **Reserved** | E21–E23 | Canonical framework slots — do not claim for product |

See [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md) decision matrix for concern → home mapping.

---

## 4. Collision playbook

**Problem class:** Fresh v4 Core install creates `story-{nn}-{slug}.md` under an epic; KMA synthesise targets the same path from legacy import → filename/sign-off failure.

**Default L1 resolution:**

1. Detect collision **before** write (proposal Step 2).
2. Prefer **`story-{nn}-legacy-{slug}.md`** (or archive-suffixed slug) for legacy-import targets when Core template already occupies `story-{nn}-*.md`.
3. Document collision rows in `migration-proposal.md`; operator sign-off required.
4. Cross-link [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md) — one concern, one home; collision is a **filename** issue, not dual-mapping.

**Do not:** invent ad-hoc rename scripts; use KMA propose → sign-off → synthesise.

---

## 5. Megastory policy

| Depth | Megastory / inline tasks |
| ----- | ------------------------ |
| **L1 (default)** | **Preserve** — legacy inline task bullets and multi-task story bodies remain |
| **L3 (opt-in)** | Split to per-task docs when operator signs rationalization proposal |

KMA Step 2 default: state **“preserve megastories at L1”** in proposal unless operator explicitly requests L3.

**Install path:** no forced task fan-out on first pass.

---

## 6. Agent appendix

**Load order (agents):**

1. This guide (depth + painless bar)
2. [INSTALL — Migrate (default)](../../../../INSTALL_IN_YOUR_PROJECT.md#migrate-default)
3. [ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md](ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md)
4. [kanban-migration-agent-execution.md](../KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md)
5. Policies: DUPLICATE_EPIC, LEGACY_KANBAN_MIGRATION

**Blind first pass rules:**

- Read legacy root read-only
- Propose before write (Step 3 blocking gate)
- No maintainer KB or reference E/S trees in context
- `validate_migration_map.py` advisory only

**COMPREHENSION:** Copy [COMPREHENSION_TEMPLATE.md](../../workflow-mgt/templates/COMPREHENSION_TEMPLATE.md) to repo root; set `depth_achieved: L1` unless L2/L3 second pass completed.

**L2/L3 second pass:** Draft from [MIGRATION_RATIONALIZATION_TEMPLATE.md](../templates/MIGRATION_RATIONALIZATION_TEMPLATE.md); separate operator sign-off; update COMPREHENSION `not_performed` → performed list.

---

## 7. Cross-links

| Doc | Role |
| --- | ---- |
| [INSTALL_IN_YOUR_PROJECT.md](../../../../INSTALL_IN_YOUR_PROJECT.md) | Adopter-simple Path 2 entry |
| [LEGACY_KANBAN_MIGRATION.md](LEGACY_KANBAN_MIGRATION.md) | Legacy topology playbook |
| [DUPLICATE_EPIC_POLICY.md](DUPLICATE_EPIC_POLICY.md) | One home per concern |
| [migration-tool-pipeline-deprecation.md](migration-tool-pipeline-deprecation.md) | KMA replaces tool pipeline |
| [install-rc-checklist.md](../../../docs/governance/standards/install-rc-checklist.md) | RC PASS criteria |
