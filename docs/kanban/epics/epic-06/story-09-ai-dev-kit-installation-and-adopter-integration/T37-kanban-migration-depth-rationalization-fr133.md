---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T37 — Painless adopter kanban migration workflow (FR-133)

**Task ID:** E06:S09:T37  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-15  
**Last updated:** 2026-06-15 (v0.6.9.37+2 — FR-133 painless migration workflow)  
**Code:** E06S09T37  
**Version anchor:** v0.6.9.37+2

**North star:** Ship ADK with a **migration workflow as painless as possible** for mature-repo adopters.

**Upstream:** [FR-133](../../../fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md)  
**Related:** [FR-127](../../../fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [UXR-029](../../../fr-br/UXR-029-adk-install-path-experiment.md) · [E06:S09:T36](T36-adopter-path-selector-install-rc-uxr029.md) · [E06:S09:T31](T31-agentic-kanban-migration-agent-fr127.md) · [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)

**Evidence:** SBL attempt 10 — painless bar met (0 ad-hoc scripts, RC PASS, first RW); phase-2 compare shows L3 optimization is **optional**, not required to ship.

---

## Summary

Package the **default painless migration path** (Arm B: orchestrator → blind KMA → RC → RW at **L1**) for unknown mature repos, plus an abstract agent guide for optional L2/L3 rationalization. Adopter should not need maintainer knowledge or project-specific epic maps to complete migration.

---

## Input

- [FR-133](../../../fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md)
- **[IPP-E06S09T37](../../../../implementation-cycles/IPP-E06S09T37-kanban-migration-depth-rationalization-fr133.md)** — consolidated implementation plan (IPW 2026-06-15)
- SBL pain catalogue: invented phases, collisions, unclear done-state (attempts 06–09); painless bar (attempt 10)
- Existing surfaces: INSTALL Arm B ([T36](T36-adopter-path-selector-install-rc-uxr029.md)), KMA ([T31](T31-agentic-kanban-migration-agent-fr127.md))

## References

- [IPP-E06S09T37](../../../../implementation-cycles/IPP-E06S09T37-kanban-migration-depth-rationalization-fr133.md) — spec, tests, implementation plan (§1–§7)
- [FR-133](../../../fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md)
- [E06:S09:T36](T36-adopter-path-selector-install-rc-uxr029.md) · [E06:S09:T31](T31-agentic-kanban-migration-agent-fr127.md)
- [IPP-E06S09T31](../../../../implementation-cycles/IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md)
- [ADR-028](../../../../architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md) · [ADR-030](../../../../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md)
- [attempt-10 README](../../../../../../adk-install-into-sbl/attempt-10/README.md)

---

## Deliverable

| # | Artifact | Adopter pain addressed |
| - | -------- | ---------------------- |
| 1 | **INSTALL — “Migrate (default)”** subsection | One journey; no phase invention |
| 2 | **`KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md`** | Agent playbook; L1 default, L2/L3 opt-in |
| 3 | **KMA collision + megastory defaults** | Fewer §4-style operator tweaks |
| 4 | **`COMPREHENSION.md` depth template** | Clear “done”; not-performed list |
| 5 | **KMA / `kma.md` load order** | Agent finds painless path first |

**IPW may add:** orchestrator flags or KMA helpers if documentation alone does not meet FR-133-NF1.

---

## Scope

**In scope:**

- Adopter-simple INSTALL prose + framework depth guide
- Default L1 = migration-complete for shipping
- Collision and megastory kit guidance
- FR-079 depth field

**Out of scope (unless IPW elevates for painlessness):**

- Mandatory L3 rationalization for RC PASS
- SBL-specific routing tables in kit
- Maintainer reference trees in KMA context

---

## Acceptance criteria

- [x] **AC1:** Adopter can follow INSTALL + KMA only; no maintainer KB required (FR-133 AC1).
- [x] **AC2:** Default path documented end-to-end; depth appendix for agents (FR-133 AC2).
- [x] **AC3:** COMPREHENSION template ships with L1 default + not-performed list (FR-133 AC3).
- [x] **AC4:** Collision/megastory guidance reduces rework class from attempt 10 FB (FR-133 AC4).
- [x] **AC5:** Painlessness bar documented: 0 ad-hoc KMA scripts + RC PASS (FR-133 AC5).
- [x] **AC6:** Greenfield mirror sync per FR-110 when touching `packages/frameworks/`.

---

## Verification (V1–V12)

| ID | Result | Evidence |
| -- | ------ | -------- |
| V1 | PASS | INSTALL `### Migrate (default)` under Path 2 |
| V2 | PASS | `KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` L1/L2/L3 |
| V3 | PASS | Depth guide §2 — L2/L3 opt-in; RC orthogonal |
| V4 | PASS | `COMPREHENSION_TEMPLATE.md` depth + not-performed |
| V5 | PASS | Depth guide §4 + KMA Step 2 collision bullets |
| V6 | PASS | Depth guide §5 + execution guide megastory default |
| V7 | PASS | `kma.md` load order — depth guide first |
| V8 | PASS | Cross-links INSTALL ↔ depth ↔ LEGACY ↔ DUPLICATE ↔ kma |
| V9 | PASS | Painlessness bar in depth guide + INSTALL checklist |
| V10 | PASS | `sync_greenfield_install.py --check` (post-sync) |
| V11 | PASS | No SBL E/S reference tree in kit docs |
| V12 | PASS | `install-rc-checklist.yaml` unchanged (no L3 blocking rows) |

---

## RW trigger

```
RW E06:S09:T37
```

(After `IPW` → `IDW` per project gate.)
