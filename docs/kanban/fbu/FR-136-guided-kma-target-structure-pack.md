---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-17T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-136: Guided KMA — Target Structure Pack consumption and structural scoring

**Type:** Feature Request (FR)  
**ID:** FR-136  
**Submitted:** 2026-06-17  
**Submitted By:** Maintainer (SBL attempt 11 TSP programme / #85)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IMPLEMENTED @ v0.6.9.39+1

**North star:** KMA **guided mode** produces a candidate kanban structure within measurable proximity of an operator-optimized target tree — without ad-hoc migration scripts or manual tweak passes.

**Implementing Task:** [E06:S09:T39](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T39-guided-kma-target-structure-pack-fr136.md)

**Related:** [FR-127](FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [FR-133](FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [FR-135](FR-135-guided-install-orchestrator-zero-manual-steps.md) (orchestrator handoff only — guided KMA is separate) · [E06:S09:T31](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md) · [E06:S09:T38](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) · [attempt-11 FB](../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md)

**Evidence:** SBL attempt 10 blind KMA ~62% structural score vs operator TSP; attempt 11 guided replay **93.99%** @ pin `v0.4.1171` (377 tasks); operator overlay freeze **342** named tasks @ **v0.6.9.42+1** ([E06:S09:T42](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T42-sbl-kanban-tsp-operator-overlay-freeze.md), [SBL #3](https://github.com/RMS-Ltd/starborn-legacy/issues/3)); [KMA-METHODS](../../../adk-install-into-sbl/kanban-reference/KMA-METHODS.md) M01–M08

---

## Summary

Extend the Kanban Migration Agent with **`kma_mode: guided`** — consume a **Target Structure Pack (TSP)** as `target_est_tree` input, apply abstract methods M01–M08, and emit a **structural score** against [SCORING-RUBRIC.yaml](../../../adk-install-into-sbl/kanban-reference/SCORING-RUBRIC.yaml) (pass threshold ≥0.85).

Blind KMA (FR-127) remains the default for unknown mature repos. Guided mode is for adopters/maintainers who supply (or ship) a reference tree — exemplar: Starborn Legacy operator-optimized E/S/T inventory.

---

## Problem Statement

Attempt 10 blind KMA routed stories via policy matrix only. Operator decisions (dedup, UAT→E41, template collision avoidance, infra epic split) required **four manual tweak passes**. The optimized tree lived in maintainer `temp/` — not kit input.

Attempt 11 encoded those decisions as TSP + KMA-METHODS but **kit does not yet consume them**. Structural proximity cannot be validated or improved in automation.

---

## Requirements

### Functional

- [x] **FR-136-F1:** Support `kma_mode: blind | guided | score` in KMA guardrails, `kma.md`, and execution guide.
- [x] **FR-136-F2:** Guided mode accepts `target_est_tree` path (+ optional companion YAML/MD per TSP contract).
- [x] **FR-136-F3:** Proposal template reports **deduped unique `E:S:T` count** (not raw source line count).
- [x] **FR-136-F4:** Deterministic helpers: story basename collision detector (M02), dedup inventory (M03), structural scorer (M08).
- [x] **FR-136-F5:** Ship framework reference TSP templates under `packages/frameworks/kanban/reference/` (generic contract; SBL exemplar in `adk-install-into-sbl/kanban-reference/`).
- [x] **FR-136-F6:** `score_only` mode: diff candidate tree vs TSP; JSON + markdown report; no file writes.
- [x] **FR-136-F7:** Guided proposal anchored to TSP epic map; explicit lazy fan-out policy (M06).

### Non-functional

- [x] **FR-136-NF1:** Agent remains agentic for synthesis (M01 routing judgement, epic overviews); helpers are advisory/invariant only.
- [x] **FR-136-NF2:** Sign-off gate unchanged (Step 3 blocking) — guided does not auto-write.
- [x] **FR-136-NF3:** Greenfield mirror sync per FR-110 when touching `packages/frameworks/`.
- [x] **FR-136-NF4:** Tests: TSP self-test ≥98%; SBL fixture guided replay targets ≥0.85 weighted score.

---

## Acceptance criteria

- [x] **AC1:** `KMA` / `kma.md` documents blind vs guided vs score; guided loads TSP pack paths.
- [x] **AC2:** `score_kma_structure.py` (or kit wrapper) implements rubric dimensions; stable JSON output.
- [x] **AC3:** TSP companion pack shipped in framework (`LEGACY-EPIC-REMAP.yaml`, `TARGET-FOLDER-MAP.yaml`, title rules, aliases template).
- [x] **AC4:** Collision detector integrated in proposal step (UXR-017 automation class).
- [x] **AC5:** pytest coverage for scorer + guided fixture replay.
- [x] **AC6:** Attempt 11 feedback package cross-linked; SBL exemplar scores ≥0.85 when guided simulation criteria met.

---

## Out of scope (v1)

- In-process KMA execution inside install orchestrator (FR-135 T38 — handoff/menu only)
- Mandatory L3 rationalization or full `T*.md` fan-out for all TSP tasks
- Project-specific routing tables baked into kit defaults (adopter supplies TSP)
