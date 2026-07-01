---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T42 — SBL kanban TSP operator overlay freeze

**Task ID:** E06:S09:T42  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-30  
**Last updated:** 2026-07-01 (verification closure — UKW -c)  
**Version Anchor:** v0.6.9.42+1  
**Code:** E06S09T42

**Parent programme:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) · [E06:S09:T39](T39-guided-kma-target-structure-pack-fr136.md) (kit surfaces shipped)

**Governance anchor:** [E04:S09:T06](../../../epic-04/story-09-bug-fixes-and-agentic-intelligence.md) / [FR-010](../../../fbu/FR-010-implement-actual-agentic-intelligence-task-mapping.md)

**Related:** [FR-136](../../../fbu/FR-136-guided-kma-target-structure-pack.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) · [SBL TSP issue #3](https://github.com/RMS-Ltd/starborn-legacy/issues/3)

**Evidence:** [kanban-reference/](../../../../../../adk-install-into-sbl/kanban-reference/) · [PASS-3-REDISTRIBUTION.md](../../../../../../adk-install-into-sbl/kanban-reference/PASS-3-REDISTRIBUTION.md) · [OPTIMISED-SBL-KANBAN-STRUCTURE.md](../../../../../../adk-install-into-sbl/kanban-reference/OPTIMISED-SBL-KANBAN-STRUCTURE.md)

---

## Scope

Freeze the operator-maintained SBL Target Structure Pack in `adk-install-into-sbl/kanban-reference/`: pass 3 redistribution complete, optional follow-ups applied, historic bootstrap milestone retired, unsourced M04 context slots pruned, and canonical **342-task** tree published to SBL for operator sign-off. Maintainer overlay / reference-pack work — not kit code changes.

---

## Input

- [E06:S09:T39](T39-guided-kma-target-structure-pack-fr136.md) — kit guided KMA surfaces (shipped)
- [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) — SBL install programme parent
- [E04:S09:T06](../../../epic-04/story-09-bug-fixes-and-agentic-intelligence.md) / [FR-010](../../../fbu/FR-010-implement-actual-agentic-intelligence-task-mapping.md) — governance anchor
- Pass 3 redistribution artefacts and operator decisions (M04 prune, `E02:S02:T01` retire)

---

## Summary

Freeze the **operator-maintained SBL Target Structure Pack (TSP)** in `adk-install-into-sbl/kanban-reference/`: pass 3 redistribution complete, optional follow-ups applied, historic bootstrap milestone retired, **40** unsourced M04 context slots pruned, and canonical **342-task** tree published to SBL for operator sign-off.

Kit guided KMA surfaces remain [E06:S09:T39](T39-guided-kma-target-structure-pack-fr136.md).

---

## Deliverable

| # | Artifact | Status |
| - | -------- | ------ |
| 1 | `TARGET-EST-TREE.md` — 342 unique `E:S:T`, 100% named | ✅ |
| 2 | `tools/apply_pass3_redistribution.py` — reproducible generator | ✅ |
| 3 | Companion docs (aliases, parity, rubric, manifest, overlay) | ✅ |
| 4 | Retire `E02:S02:T01` bootstrap milestone from live TSP | ✅ |
| 5 | Prune 40 M04 pass-3 context slots; drop empty `E32:S06`/`S07` shells | ✅ |
| 6 | File SBL GitHub issue with full EST data for adopter sign-off | ✅ [#3](https://github.com/RMS-Ltd/starborn-legacy/issues/3) |

---

## Acceptance criteria

- [x] **AC1:** Live TSP has **342** unique tasks; **0** unresolved; **0** live M04 context slots.
- [x] **AC2:** `E01:S99` cleared; pass 3 manifest and aliases document all moves/prunes.
- [x] **AC3:** `E02:S02` story slot freed for workflow-management use (bootstrap row retired).
- [x] **AC4:** Regenerator script reproduces tree (`python3 tools/apply_pass3_redistribution.py`).
- [x] **AC5:** SBL operator issue opened with full EST tree and band parity ([#3](https://github.com/RMS-Ltd/starborn-legacy/issues/3)).
- [x] **AC6:** ADK maintainer release via RW documents overlay freeze (this task) @ **v0.6.9.42+1**.

---

## RW trigger

```
RW E06:S09:T42 --art
```

Use `--art` when releasing from `dev` or when `version.py` does not already anchor E06:S09:T42.

---

## Task checklist

- [x] Pass 3 redistribution + optional follow-ups
- [x] Retire `E02:S02:T01`; prune M04 context slots
- [x] Reconcile band parity / scoring rubric to 342 tasks
- [x] Open SBL EST sign-off issue
- [x] RW release (local-complete) @ **v0.6.9.42+1**

---

## Verification closure

**Verification closure (2026-07-01):** `apply_pass3_redistribution.py` reproduces tree; attempt 12 adopted issue #3 (**342** tasks) as TSP authority. SBL #3 sign-off accepted via attempt-12 install baseline. V-band row archived @ `UKW -c`.
