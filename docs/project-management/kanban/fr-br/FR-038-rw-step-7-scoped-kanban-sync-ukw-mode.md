---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: RW Step 7 – Scoped Kanban Sync (UKW Mode)

**Type:** Feature Request (FR)  
**Submitted:** 2026-02-19  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IMPLEMENTED (documentation alignment — v0.5.1.38+1) — wired as Bucket-D1 predecessor of [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  
**Assigned Task:** E5:S01:T38  
**GitHub Issue:** [TBD]  

> **Predecessor of FR-092 (2026-04-27):** FR-038 documented RW Step 7 as a scoped UKW invocation. FR-092 absorbs and supersedes the contract evolution (Bucket A1-A5, Wave 2) by codifying RW Step 7 as **self-sufficient** scoped reconciliation with no UKW process dependency. FR-038 remains valid as historical predecessor; the contract gap (no explicit "self-sufficient" wording across `.cursorrules`/RW guide/policy) is owned by FR-092.

---

## Summary

Redefine **Release Workflow (RW) Step 7** from a mostly deterministic “Auto-update Kanban Docs” step into an explicitly **agentic, scoped Update Kanban Workflow (UKW) run**: a **Scoped Kanban Sync (UKW Mode)** that updates Task/Story/Epic docs, rewires links where necessary, and performs limited, context-aware prioritisation on the Kanban board for the active Task.

---

## Description

### What is the Feature?

Elevate RW Step 7 to an explicit, policy-backed **agentic Kanban sync** step that:

1. Treats Step 7 as a **scoped invocation of UKW** (for a single Epic/Story/Task), not just “run a script”.
2. Makes UKW **context-aware** (standalone vs RW-embedded) so it can safely operate in:
   - **RW-scoped mode:** Only the E/S/T touched by this release and any directly-related docs/board entries.
   - **Standalone mode:** Full-board maintenance runs triggered by UKW.
3. Clearly documents the **agentic responsibilities** of Step 7:
   - Interpreting recent work.
   - Updating/rewiring Task/Story/Epic docs.
   - Updating the Kanban board.
   - Performing **limited prioritisation** for new or newly-significant tasks, respecting Kanban governance.

### What Problem Does This Solve?

- **Current state:**
  - RW Step 7 is documented and implemented largely as a **deterministic doc update step**.
  - Some responsibilities (board updates, prioritisation, narrative synthesis) already need agentic intelligence, but this is not formalised.
  - UKW is the “big hammer” for Kanban alignment, but its relationship to RW is implicit rather than specified.

- **Gap:**
  - No clear **policy-level contract** that “RW Step 7 = UKW in scoped mode”.
  - UKW is not defined as **RW-aware**, so the interplay between RW runs and standalone UKW runs is left to convention.

- **Benefit:**
  - A single, canonical understanding that RW Step 7 **always uses the same Kanban engine (UKW)** in a scoped fashion.
  - UKW gains a formal **RW-embedded mode**, making it safer and more predictable when called per-release.


### What is the Use Case?

- **Primary:** On every RW run, the agent:
  - Uses Step 7 to run a **Scoped Kanban Sync (UKW Mode)** for the active task.
  - Ensures Task/Story/Epic docs and the Kanban board are aligned with the just-released work.
  - Applies **local prioritisation** when the release creates a new task or changes its urgency.

- **Secondary:** UKW runs in standalone mode to:
  - Perform **board-wide housekeeping and prioritisation** (existing `-u/-p/-a` flows).
  - Remain compatible with RW by being aware when it is called from within RW vs standalone.


---

## Requirements

### Functional Requirements

- [x] **FR-038:R01** – RW Step 7 name and documentation updated to **“Scoped Kanban Sync (UKW Mode)”** (or equivalent), explicitly describing it as a **scoped UKW invocation** for the current E/S/T.
- [x] **FR-038:R02** – UKW documentation updated to define an `invocation_context` (for example, `rw_step_7` vs `standalone`) with clear behavioural differences:
  - `rw_step_7`: scoped to a single E/S/T + directly related docs/board entries; conservative on reprioritisation.
  - `standalone`: full-board operations according to flags (`-u`, `-p`, `-a`, etc.).

- [x] **FR-038:R03** – RW Step 7 spec enumerates **agentic responsibilities**:
  - Task-level updates (status, version markers, narrative).
  - Story/Epic rewiring (overview updates, checklist consistency).
  - Kanban board updates for the active epic/story.
  - Limited prioritisation of **new or newly-significant tasks** following Kanban governance rules.

- [x] **FR-038:R04** – UKW spec documents how **prioritisation and MoSCOW** updates behave differently in RW-scoped mode vs standalone runs (e.g., RW-scoped mode does not re-shuffle the entire board).
- [x] **FR-038:R05** – RW and UKW reference each other so that the relationship “RW Step 7 = Scoped UKW” is discoverable from both sides.

### Non-Functional Requirements

- [x] **FR-038:NF01** – **Predictability:** RW Step 7 must remain predictable and auditable; any agentic decisions within Step 7 must be documented in Kanban/FR/Task docs.
- [x] **FR-038:NF02** – **Separation of concerns:** RW retains responsibility for atomic versioning/changelogs/CI; UKW remains the single Kanban intelligence engine.
- [x] **FR-038:NF03** – **Portability:** Wording remains framework-level and project-agnostic; adopting projects may customise how UKW interprets “scoped” without changing the core contract.

---

## Scope Analysis

**Problem Domain:** Release Workflow, Update Kanban Workflow, Kanban governance  
**Affected Areas:**
- RW agent execution guide (Step 7 specification and naming).
- UKW workflow documentation (invocation contexts and behaviour).
- Kanban governance policy (light references to RW/UKW responsibilities).

**Estimated Complexity:** Medium (policy and documentation alignment across RW, UKW, and Kanban governance).

---

## Acceptance Criteria

- [x] RW Step 7 documentation explicitly names the step as **Scoped Kanban Sync (UKW Mode)** (or equivalent) and describes it as a **scoped UKW run**.
- [x] UKW documentation defines and explains `invocation_context` options, including `rw_step_7` with well-scoped behaviour.
- [x] RW and UKW docs both reference each other as part of the Step 7/UKW relationship.
- [x] Kanban governance policy (or board guide) briefly notes that **per-release Kanban sync** is handled by RW Step 7 via UKW, and **board-wide** sync is handled by standalone UKW.
- [x] No breaking changes to existing RW/UKW scripts are introduced purely by the documentation alignment; implementation work can follow in a separate task.

---

## Dependencies

**Blocks:**
- Clear, unified understanding of RW Step 7 as an agentic Kanban sync step.
- Safe, scoped reuse of UKW from within RW.

**Blocked By:**
- None (this FR is documentation/specification first; implementation tasks can be created later).

**Related Work:**
- **FR-040:** RW Update Kanban Board on Task Completion.
- **FR-037:** Kanban Policy – Task Prioritisation and Queue/Stack.
- **UKW Workflow Docs:** Update Kanban Workflow specification.
- **RW Execution Guide:** Release Workflow agent execution documentation.

---

## Release History

- **v0.5.1.38+1 (E5:S01:T38):** Documentation alignment delivered — RW Step 7 named **Scoped Kanban Sync (UKW Mode)**; UKW `invocation_context` (`rw_step_7` vs `standalone`); cross-links; Kanban governance §1.1 and board guide note. YAML orchestrator / explicit workflow flags remain **out of scope** (optional follow-up under Epic 6 / workflow framework).

