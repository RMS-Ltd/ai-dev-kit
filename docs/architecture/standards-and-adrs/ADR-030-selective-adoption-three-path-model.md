---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-030: Selective Adoption — Three-Path Model for Mature Repositories

**Status:** Accepted  
**Date:** 2026-06-15  
**Related:** [ADR-003](ADR-003-greenfield-vs-brownfield-adoption.md) · [ADR-028](ADR-028-agentic-kanban-migration-brownfield-fr127.md) · [UXR-029](../../kanban/fbu/UXR-029-adk-install-path-experiment.md) · [E06:S09:T36](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) · [Issue #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)

**Evidence:** [greenfield-brownfield-selective-adoption-sbl-attempt-09.md](../../knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md) (SBL FR-079 attempt 09)

---

## Context

[ADR-003](ADR-003-greenfield-vs-brownfield-adoption.md) establishes a **binary** policy stance: opinionated greenfield happy path vs respectful brownfield modular integration. Starborn Legacy install attempts 07–09 showed that **mature git-versioned repos with PM/kanban drift** often fit neither label:

- **Attempt 08 (in-place brownfield + agent KMA):** abandoned — duplicate epic policy gaps, agent slot-filling ([#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)).
- **Attempt 09 (shell + selective migration):** KMA succeeded; Install RC failed on orchestration (sqlite, docs schema, UKW) ([#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)).

Industry practice (SAP SDT / “Bluefield”, Terraform import, Angular new-project-and-port, Fowler Strangler Fig) treats **fresh platform shell + selective carry-over** as a first-class path — not as “greenfield on an empty repo.”

---

## Decision

### 1. Three adoption paths for mature repositories

| Path | Name | When | ADK procedure (summary) |
|------|------|------|-------------------------|
| **1** | Brownfield in-place (Arm A) | Topology already aligned; continuity-critical; manageable debt | Installers in place; `import_legacy.py`; incremental fixes |
| **2** | Shell + selective migration (Arm B) | PM/kanban drift; validator failures in-place; full git history | Archive legacy → lean vendor → layered orchestrator → KMA → single canonical root → RW |
| **3** | Strangler coexist (sub-mode) | Cannot wipe PM yet | Declare canonical root; read-only archive; time-boxed dual-tree; **eliminate** mandatory |

**True greenfield** (empty or template repo, FR-080) remains a **fourth entry** — not a substitute for Path 2 on messy mature repos.

### 2. Default guidance for messy mature + git

When legacy PM/kanban topology conflicts with ADK v4 validators and duplicate-epic policy, **default to Path 2** — not in-place agent mapping on a live dual tree (attempt 08 anti-pattern).

Path 1 remains **mandatory programme coverage** on structurally aligned controls (fynd.deals, Confidentia) to prevent over-fitting to Starborn.

### 3. Cross-cutting requirements (all paths)

- **SQLite release-state** before first RW (`.adk/release-state.db` via `import_legacy.py` when migrating from YAML).
- **ADK-owned documentation end-schema** (maintainer vs adopter-public profiles).
- **Install RC checklist** as install-complete gate — sign-off contract alone is insufficient.
- **Kit-owned KMA** — zero ad-hoc migration scripts at RC.
- **Comprehension test** — install completion summary states kanban root, docs authority, version truth, and explicit **not performed** steps (“restore ≠ migrate”).

### 4. Layered orchestrator (Path 2 target sequence)

Monolithic `install_release_workflow.py --mode c` is not sufficient for Path 2. Target ordering:

```text
0 vendor + venv
1 rw-config skeleton
2 sqlite (import_legacy or init empty SAA DB)
3 RW installer scaffold
3½ documentation schema profile
3c UKW / cursorrules wiring
4 kanban fresh (v4)
5 KMA (proposal sign-off gate)
6 sign-off / Install RC
7 first RW
```

Implementation tracked under [E06:S09:T36](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) Phase 0.

### 5. KMA remains canonical for legacy corpus migration

Path 2 and Path 3 use [ADR-028](ADR-028-agentic-kanban-migration-brownfield-fr127.md) KMA — not installer `migration` / `hybrid` modes. Path 1 may use KMA when kanban corpus exists but topology is otherwise brownfield-compatible.

---

## Consequences

### Positive

- Adopters and agents get explicit vocabulary: **shell + selective migration** vs mislabelled “greenfield.”
- Install programme can measure paths with shared Install RC checklist ([UXR-029](../../kanban/fbu/UXR-029-adk-install-path-experiment.md)).
- Reduces repeat of attempt 08 (in-place agent mapping without policy).

### Negative / follow-up

- INSTALL, orchestrator, and RC checklist must stay aligned — ADR-030 is policy only until T36 AC5–AC7 complete.
- ADR-003 binary table in older docs should cross-link here; do not delete ADR-003 (host sovereignty unchanged).

---

## Related

- [INSTALL_IN_YOUR_PROJECT.md — Adopter Path Selector](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#adopter-path-selector-mature-repositories)
- [FR-080](../../kanban/fbu/FR-080-greenfield-installation-process.md) · [FR-081](../../kanban/fbu/FR-081-brownfield-modular-adopter-integration.md)
- [LEGACY_KANBAN_MIGRATION.md](../../../packages/frameworks/kanban/guides/LEGACY_KANBAN_MIGRATION.md)
- [adk-install-into-sbl/attempt-09/README.md](../../../adk-install-into-sbl/attempt-09/README.md)
