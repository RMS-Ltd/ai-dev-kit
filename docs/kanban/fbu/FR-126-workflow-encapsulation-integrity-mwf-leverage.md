---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-126: Workflow encapsulation integrity audit for MWF leverage

**Type:** Feature Request (FR)  
**ID:** FR-126  
**Submitted:** 2026-06-10  
**Submitted By:** User — workflow composition / MWF follow-on  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** IMPLEMENTED (T10 COMPLETE — pending operator verification)

**Implementing Task:** [E02:S03:T10](../epics/epic-02/story-03-additional-workflows-and-examples/T10-workflow-encapsulation-integrity-mwf-fr126.md)

**Depends on:** [FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) (MWF v1 `delivery` shipped @ v0.2.3.9+3) · [BR-102](BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md) (MWF sub-agent delegation — blocks reliable full-pipeline invoke)

---

## Summary

Systematically **review every registered atomic workflow** for **encapsulation integrity** — clear delegation boundaries, terminal states, mode gates, and flag surfaces — so workflows can be composed at **100% MWF compatibility** and future composite recipes (`ukw,rw`, `cmw,rw`, …) can delegate without reimplementing steps inline.

---

## Problem Statement

[FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) introduced **MWF** as a meta-orchestrator that **delegates** to encapsulated atomic workflows. v1 `delivery` composes **IPW → IDW `--rw`**, which itself embeds a **two-leg** IDW→RW chain. That pattern works only when each leg exposes a **stable orchestration contract**.

Today the workflow corpus is **uneven**:

| Surface | Count / state |
| ------- | ------------- |
| Registry atomic workflows (`workflow-registry.yaml`) | **13** under `workflows:` |
| Claude Code command guides (`.claude/commands/*.md`) | **5** — `ipw`, `idw`, `rw`, `ukw`, `mwf` |
| KB vwmp agent execution guides | Partial — strong for RW/IPW/IDW/MWF/UKW; thinner for CMW, PVW, PIR, INTAKE, examples |
| Inline trigger specs in `.cursorrules` | Large RW/UKW/IPW/IDW/MWF blocks — risk of drift from command guides |
| Composite recipes in registry | **1** — `mwf.delivery` only |

**Gaps that block “100% MWF leverage”:**

1. **No canonical encapsulation contract** documented for what “MWF-delegatable” means (terminal tokens, abort propagation, mode requirements, flag forwarding rules, forbidden inline reimplementation).
2. **Eight registry workflows** lack slash-command entry points (CMW, PVW, PIR, INTAKE, MIGRATION, REFACTOR, TESTING, FHM) — orchestrator cannot delegate uniformly.
3. **Dual-source drift** — RW/UKW logic lives in both `.cursorrules` and `.claude/commands/*.md` (and portable excerpts); MWF must know the **single delegation target** per leg.
4. **Embedded chains** — `IDW --rw` is intentional but undocumented as a **sub-orchestrator** boundary; MWF Leg 2 must treat IDW as black box through `IDW COMPLETE` / `MWF ABORTED (leg: RW)`.
5. **Future recipes** ([FR-124-NF4](FR-124-meta-workflow-orchestration-composite-workflow-chains.md)) — `ukw,rw`, `cmw,rw`, `ukw,cmw,rw` require UKW/CMW/RW each to expose the same contract IPW/IDW already partially have.
6. **Example / template workflows** (REFACTOR, MIGRATION, TESTING) — YAML packages exist but no agent routing or completion semantics for composition.

Without a systematic audit and remediation program, MWF cannot safely grow beyond v1 `delivery` without reintroducing the anti-pattern FR-124 rejected (chain flags on every workflow entry point).

---

## Requirements

### Functional

- [ ] **FR-126-F1:** Publish **`workflow-encapsulation-contract.md`** (vwmp) defining MWF-delegatable workflow properties:
  - parseable trigger + host context (where applicable)
  - explicit **terminal states** (`{ABBR} COMPLETE`, `{ABBR} ABORTED`, `{ABBR} CHAIN PAUSED` where relevant)
  - **mode gate** declaration (plan / implementation / either)
  - **abort propagation** — parent orchestrator must not commit/tag on child abort
  - **delegation SoT** — command guide path (preferred) or KB agent-execution guide
  - **forbidden:** parent inlines child step lists; parent adds chain flags that duplicate MWF recipes
- [ ] **FR-126-F2:** **Inventory matrix** — all `workflow-registry.yaml` entries × contract fields × command guide × KB guide × `.cursorrules` / `CLAUDE.md` routing × known chain flags.
- [ ] **FR-126-F3:** **Gap remediation plan** — prioritized waves per workflow (P0: RW, UKW, CMW, PVW — operators chain these with RW today; P1: IPW/IDW hardening; P2: PIR, INTAKE; P3: example workflows).
- [ ] **FR-126-F4:** For P0 workflows missing command guides, add `.claude/commands/{abbr}.md` **or** document explicit “delegate to KB guide only” exception with routing updates.
- [ ] **FR-126-F5:** **MWF registry extension spec** — schema for new `composite_workflows` recipes referencing atomic legs by abbreviation + flag forwarding table (design only in this FR; implementation may be follow-on tasks).
- [ ] **FR-126-F6:** **Dual-source parity checklist** — extend or cross-link `rw-trigger-dual-source-parity.md` pattern for UKW/CMW/PVW where `.cursorrules` and command guides must stay aligned for MWF delegation.
- [ ] **FR-126-F7:** Validator or lint (aspirational) — `validate_workflow_encapsulation.py` checks registry entries declare `guide:` / `terminal_states:` / `triggers:` (non-blocking advisory in v1).

### Non-functional

- [ ] **FR-126-NF1:** **IDW `--rw` retained** — audit documents it as an allowed **two-leg sub-orchestrator**, not a violation; MWF delegates to IDW, not RW directly, in `delivery`.
- [ ] **FR-126-NF2:** **No `IPW --rw`** — audit confirms no reintroduction; full pipeline remains MWF-only.
- [ ] **FR-126-NF3:** **Greenfield sync** — contract doc and new command guides mirrored per [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md).
- [ ] **FR-126-NF4:** Changes are **additive** where possible — do not break existing standalone triggers (`RW`, `UKW`, `CMW`, …).

---

## Scope Analysis

**Problem Domain:** Workflow Management Framework — orchestration & agent routing  
**Affected Areas:**

- [x] Documentation (KB vwmp, cheatsheet, command guides)
- [x] Framework packages (`workflow-registry.yaml`, workflow YAML packages)
- [x] Agent routing (`CLAUDE.md`, `.cursorrules`, `AGENTS.md`, manifest)
- [ ] Application code (optional validator script)
- [ ] Testing (contract conformance tests — aspirational)

**Estimated Complexity:** Complex (multi-workflow audit + phased remediation)

---

## Acceptance Criteria

- [ ] **AC1:** Encapsulation contract doc published; FR-126 ↔ T10 ↔ (future IPP) bidirectionally linked.
- [ ] **AC2:** Inventory matrix covers all **13** atomic registry workflows + MWF composite entry; gaps classified (delegatable / partial / not-ready).
- [ ] **AC3:** Remediation plan approved with at least **P0 wave** scoped to concrete file paths and owners.
- [ ] **AC4:** MWF `delivery` recipe verified against contract — no undocumented inline RW steps in `mwf.md`.
- [ ] **AC5:** Cheatsheet §MWF / §7 updated to reference encapsulation contract and “future recipes blocked until leg passes audit.”

---

## Out of scope (this FR)

- Implementing all remediation waves (may spawn child tasks per workflow).
- Replacing `IDW --rw` with MWF-only RW delegation (architectural decision deferred).
- Deterministic `workflow_orchestrator.py` runtime — remains agent-driven per FR-124.

---

## Dependencies

**Blocked By:** None (FR-124 v1 shipped)

**Related Work:**

- [FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) — MWF orchestrator
- [FR-049](FR-049-canonical-rw-step-list-single-source-of-truth.md) — RW step SoT pattern
- [FR-122](FR-122-release-workflow-architectural-contract-release-transaction.md) — RW release transaction contract
- [FR-119](FR-119-implementation-delivery-workflow-idw.md) — IDW `--rw` chain
- [FR-042](FR-042-implementation-planning-workflow-ipw.md) — IPW
- [FR-023](FR-023-update-kanban-workflow-ukw.md) — UKW
- [FR-025](FR-025-changelog-management-and-archival-workflow.md) — CMW
- [FR-050](FR-050-workflows-directory-structure-reorganization.md) — registry / orchestrator direction

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-10  
**Intake By:** Agent (user FR request)

**Assigned To:**

- Epic: Epic 2 — Workflow Management Framework
- Story: Story 003 — Additional Workflows & Examples (MWF follow-on)
- Task: T10 — Workflow encapsulation integrity audit (FR-126)

**Kanban Links:**

- Story: [`story-03-additional-workflows-and-examples.md`](../epics/epic-02/story-03-additional-workflows-and-examples.md)
- Task: [`T10-workflow-encapsulation-integrity-mwf-fr126.md`](../epics/epic-02/story-03-additional-workflows-and-examples/T10-workflow-encapsulation-integrity-mwf-fr126.md)

---

## References

- [Meta-workflow agent execution guide](../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md)
- [Workflow registry](../../packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml)
- [Workflow initiation cheatsheet §4c / §7](../../guides/workflow-initiation-cheatsheet.md)
