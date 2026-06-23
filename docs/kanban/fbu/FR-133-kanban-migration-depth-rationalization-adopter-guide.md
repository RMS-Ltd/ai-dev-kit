---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-15T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-133: Painless adopter kanban migration workflow (depth model + rationalization)

**Type:** Feature Request (FR)  
**ID:** FR-133  
**Submitted:** 2026-06-15  
**Submitted By:** Maintainer (SBL attempt 10 phase-2 structural analysis)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IMPLEMENTED

**North star:** Ship ADK so **mature-repo migration is as painless as possible** — minimal decisions, no ad-hoc scripts, clear “done,” optional optimization later.

**Implementing Task:** [E06:S09:T37](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md)

**Related:** [FR-127](FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [FR-081](FR-081-brownfield-modular-adopter-integration.md) · [FR-080](FR-080-greenfield-installation-process.md) · [FR-135](FR-135-guided-install-orchestrator-zero-manual-steps.md) (runtime orchestrator — **OPEN**, implements painless journey in code) · [UXR-029](UXR-029-adk-install-path-experiment.md) · [ADR-030](../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) · [E06:S09:T36](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) · [E06:S09:T38](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) · [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)

**Evidence (maintainer — no adopter secrets required):** SBL attempt 10 blind KMA vs attempt 09 optimized reference tree; Install RC PASS with low E:S:T token overlap; [attempt-10 maintainer index](../../../adk-install-into-sbl/attempt-10/README.md)

---

## Summary

Deliver a **kit-owned, low-friction migration workflow** for mature adopters (especially Arm B): one documented path from legacy archive → valid v4 kanban → Install RC PASS → first RW, with **optional** deeper rationalization when the adopter needs it.

The **migration depth model** (L1/L2/L3) is the internal mechanism; the **adopter outcome** is: *“I followed the kit; migration worked; I know when I’m done; I wasn’t forced to become a kanban architect.”*

---

## Problem Statement

**Adopter pain today (evidence: SBL attempts 06–10):**

| Pain | Symptom |
| ---- | ------- |
| Unclear “done” | Install RC PASS feels like full migration; optimized tree needs extra undocumented work |
| Invented phases | Manual 4-step sequences, operator tweaks, ad-hoc scripts before kit KMA was owned |
| Collisions | Fresh Core templates vs legacy imports → filename/sign-off failures |
| Megastory confusion | Legacy inline tasks preserved vs task fan-out — no kit default |
| Cognitive load | Adopter/agent must understand DUPLICATE_EPIC_POLICY, KMA, RC, RW, and rationalization as separate crafts |

Attempt 10 proved the **painless core** is achievable: orchestrator + blind KMA + **0** ad-hoc scripts + RC PASS + SQLite + first RW. Remaining pain is **expectation mismatch** (thinking L3 is required) and **residual friction** (collisions, bootstrap checklist, sign-off env).

FR-127 shipped agentic KMA but not a **single adopter journey** that says: *default here, optional there, stop when RC passes.*

---

## Adopter experience goals (product)

1. **Default path is enough** — Arm B adopters reach Install RC PASS and first domain RW at **L1** without mandatory megastory dismantling or task fan-out.
2. **Kit owns the sequence** — path selector → orchestrator → KMA → RC; no parallel playbook hunting.
3. **Clear completion signal** — `COMPREHENSION.md` + install summary state what ran, what was **not** run, and that L1 is valid.
4. **Optimization is opt-in** — L2/L3 rationalization is a **second signed-off pass**, not a hidden requirement.
5. **Project-agnostic** — no exemplar-project epic maps in kit; ingest + policy drive proposals.
6. **Agent-ready** — one abstract guide an adopter agent can follow in an unknown repo.

---

## Requirements

### Functional — painless default path

- [x] **FR-133-F1:** Document **one Arm B migration journey** (install → archive → KMA → RC → RW) as the primary adopter surface in INSTALL + KMA guide.
- [x] **FR-133-F2:** **Default depth = L1** (route & preserve): legacy stories routed, forensic tokens OK, RC PASS = migration-complete for shipping.
- [x] **FR-133-F3:** **Opt-in L2/L3** with separate sign-off; never block Install RC or first RW on rationalization.
- [x] **FR-133-F4:** Adopter-facing **“you are done”** checklist (RC PASS + comprehension + zero ad-hoc migration scripts).
- [x] **FR-133-F5:** **Collision playbook** — template Core vs legacy import naming (`story-*-legacy-*` pattern class); linked from KMA guide so agents don’t improvise.
- [x] **FR-133-F6:** **Megastory policy** — default preserve at L1; when/how to split at L3; no forced fan-out on install path.

### Functional — depth model & agent guide

- [x] **FR-133-F7:** Define L1/L2/L3 with entry/exit criteria (internal + agent appendix).
- [x] **FR-133-F8:** Publish abstract playbook `packages/frameworks/kanban/guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` (no project-specific routing tables).
- [x] **FR-133-F9:** Parameterized epic band model (Core / Domain / Reserved) — filled from ingest + policy.
- [x] **FR-133-F10:** Cross-link INSTALL, KMA execution, `LEGACY_KANBAN_MIGRATION.md`, `DUPLICATE_EPIC_POLICY.md`.
- [x] **FR-133-F11:** Optional templates: `migration-rationalization.md`, structural scorecard; FR-079 depth field.

### Non-functional

- [x] **FR-133-NF1:** **Painlessness metric:** adopter completes Arm B without custom `scripts/*kma*` or invented phase scripts (SBL attempt 10 bar).
- [x] **FR-133-NF2:** Guide usable with **zero** prior knowledge of any single adopter project.
- [x] **FR-133-NF3:** Do not weaken Install RC; depth model orthogonal to RC PASS.
- [x] **FR-133-NF4:** Progressive disclosure — adopter INSTALL prose stays simple; depth detail in framework guide.

### Future (evaluate in IPW if needed for painlessness)

- Orchestrator step for optional `--migration-depth L2|L3` rationalization pass.
- Advisory `validate_migration_depth.py`.
- Automated collision rename helpers in KMA synthesise.

---

## Acceptance criteria

- [x] **AC1:** INSTALL presents **one default Arm B migration path**; adopter not required to read maintainer KB to migrate.
- [x] **AC2:** Framework guide published; KMA agent load path includes painless-default + depth appendix.
- [x] **AC3:** `COMPREHENSION.md` / install receipt template includes **depth achieved (L1 default)** and explicit **not performed** list.
- [x] **AC4:** Collision + megastory sections prevent common SBL-class rework (abstract examples only).
- [x] **AC5:** Documented bar matches attempt 10: **0** ad-hoc KMA scripts, RC strict PASS sufficient for “migration shipped.”
- [x] **AC6:** L2/L3 documented as opt-in; FR-127 / UXR-029 / #52 programme consistent.

---

## Scope analysis

**Problem domain:** Adopter migration UX, KMA workflow packaging, agent documentation  
**Product outcome:** Painless mature-repo migration as a shippable ADK capability  
**Affected areas:**

- [x] `packages/frameworks/kanban/guides/`
- [x] INSTALL / Arm B layered sequence (adopter-simple layer)
- [x] KMA execution guide + `.claude/commands/kma.md`
- [ ] Orchestrator / KMA automation (IPW triage — only if docs alone insufficient)

**Estimated complexity:** Medium (1–2 weeks) — primarily documentation + INSTALL UX; optional tooling if IPW finds doc-only insufficient for painlessness.

---

## Release trace

- **v0.6.9.37+2** (SemVer **v0.4.1173+2**, E06:S09:T37, `MWF delivery`) — FR-133 implementation: depth guide, INSTALL Migrate (default), COMPREHENSION template, KMA defaults
- **v0.6.9.37+1** (SemVer **v0.4.1172+1**, E06:S09:T37, `RW -k --art`) — Kanban init; FR-133 + T37 intake filed
