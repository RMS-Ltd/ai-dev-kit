---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-103: Agent bootstrap and task routing (three-layer context model)

**Type:** Feature Request (FR)  
**ID:** FR-103  
**Submitted:** 2026-05-30  
**Submitted By:** User (ADR intake — `ADR-agent-bootstrap-and-task-routing.md`)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** IMPLEMENTED  
**Version:** v0.2.16.17+2 (SemVer v0.4.843+2)

**Implementing Task:** [E02:S16:T17](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md) (v0.2.16.17+2)

**Related:** [FR-041](./FR-041-windsurf-investigate-agents-skills-for-workflows.md), [FR-022](./FR-022-policy-docs-machine-readable-salience.md), [FR-028](./FR-028-cursor-ide-performance-considerations-awareness.md), [UXR-015](./UXR-015-workflow-initiation-cheatsheet.md), [BR-071](./BR-071-rw-trigger-routing-not-executing-from-chat-session.md), draft ADR at repo root [`ADR-agent-bootstrap-and-task-routing.md`](../../../../ADR-agent-bootstrap-and-task-routing.md)

---

## Summary

Implement a **three-layer agent context model** (intro → triage manifest → lazy detail) so cold-started agents bootstrap in **O(intro + manifest scan + few entry files)** instead of unbounded repo exploration, with deterministic keyword routing and explicit “do not load unless routed” guardrails.

---

## Problem Statement

The AI Dev Kit repository is large enough that cold-started agents cannot read the full documentation tree, kanban corpus, or codebase every session. Undirected exploration is:

- **Expensive** — growing chat history plus ad hoc file reads every turn.
- **Slow** — repeated grepping until conventions are found.
- **Inconsistent** — different sessions load different subsets and miss binding rules (RW/IPW/UKW gates, commit policy, kanban four-surface contract).

Operators also start **new chats per task** to control token cost; each new chat loses implicit context unless the repo provides a **cheap, deterministic bootstrap path**.

Today:

| Artifact | Gap |
| -------- | --- |
| Root `AGENTS.md` | Role-oriented agent definitions + IPW gate — **not** a ≤150-line intro with use-case routing table |
| `.cursorrules` / `CLAUDE.md` | Full workflow prose — correct as agent SoT but **too heavy** for cold-start scan |
| `docs/project-agent-manifest.json` | **Missing** — no machine-readable `taskRouting[]` / `protocol[]` |
| `docs/project-agent-index.md` | **Missing** — no human-readable bootstrap mirror |
| Cheatsheet ([UXR-015](./UXR-015-workflow-initiation-cheatsheet.md)) | Human-oriented workflow triggers — complementary, not a substitute for manifest routing |

---

## Proposed Solution

Adopt the architecture in draft ADR **`ADR-agent-bootstrap-and-task-routing.md`** (register as **ADR-012** under `docs/architecture/standards-and-adrs/` during implementation).

### Layer 1 — Intro (always load)

- Refactor or split root **`AGENTS.md`** to ≤ **150 lines**: project summary, numbered bootstrap steps, use-case/track table, 5–10 binding-rule pointers, ascertainment rule, anti-patterns (“do not read X unless routed”).
- Keep full workflow prose in `.cursorrules` / framework docs — **pointers only** in intro.

### Layer 2 — Triage (cold start, scan only)

- Add **`docs/project-agent-manifest.json`** validated against **`docs/project-agent-manifest.schema.json`**.
- Add **`docs/project-agent-index.md`** mirroring bootstrap order and regenerate commands.
- **Bootstrap contract (binding for agents):** read intro → load manifest → scan `protocol[]`, `taskRouting[]`, `openWork[]` → match keywords → load only `loadFirst[]` (+ one clarifying question if ambiguous).

**Minimum routes for ai-dev-kit (seed at implementation):**

| Intent | Example keywords | Typical `loadFirst` |
| ------ | ---------------- | ------------------- |
| Workflows (RW/UKW/IPW) | `RW`, `UKW`, `IPW`, `release`, `kanban` | `docs/guides/workflow-initiation-cheatsheet.md`, `.cursorrules` RW/UKW/IPW sections (pointers) |
| Kanban / intake | `FR`, `BR`, `UXR`, `intake`, `kboard` | `docs/project-management/kanban/kboard.md`, intake guide (pointers) |
| Governance / ADR | `ADR`, `governance`, `policy` | `docs/governance/` index + relevant standard |
| Framework / code | `package`, `validator`, `script`, `test` | Relevant path under `packages/frameworks/` |
| Implementation planning | `IPP`, `ICW`, `plan` | IPW command + `docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md` |

### Layer 3 — Detail (lazy load)

- Full governance, registers, journals, and application source load **only after** triage identifies track + task.

### IDE integration

- Ensure Cursor / Claude workspace rules **point** to slim `AGENTS.md` as bootstrap entry; skills remain invoke-only (not cold-load).
- Encourage operator first message: `Track: … | File: … | Task: …` to skip triage when known.

### Optional automation

- **`scripts/generate-project-agent-manifest.sh`** (or Python equivalent) to populate `canon[]` / `openWork[]` from kanban/FBU index when feasible; manual curation acceptable until register automation exists.

### Framework packaging (adopter surface)

- Provide portable templates under workflow-management or kanban framework package so adopters can copy manifest schema + ADR pattern (align with [FR-081](./FR-081-brownfield-modular-adopter-integration.md) distribution story).

---

## Requirements

### Functional

- [ ] Register ADR as **ADR-012**; supersede placeholder numbering in draft file.
- [ ] Slim bootstrap **`AGENTS.md`** (≤150 lines) with use-case table and anti-patterns.
- [ ] **`project-agent-manifest.json`** + **schema** + **`project-agent-index.md`**.
- [ ] **`taskRouting[]`** with ≥ **5** rows covering workflows, kanban/intake, governance, framework code, IPW/planning.
- [ ] **`protocol[]`** entries for non-negotiables (IPW gate, RW-only commit, FR-060 task token, four-surface RW Step 7, padded E/S/T) with `sourcePath` pointers.
- [ ] Wire `.cursorrules` / `CLAUDE.md` to reference bootstrap path without duplicating full manifest.
- [ ] Document regenerate/validate commands in index (JSON schema validation in CI or pre-commit **recommended**, not blocking for v1 unless low cost).

### Non-functional

- [ ] Cold-start simulation: three prompts (workflows, intake, governance) each resolve to correct `loadFirst[]` with **≤5** files before substantive work.
- [ ] Manifest `schemaVersion` semver; idempotent manual edits for static sections.

---

## Scope Analysis

**Problem Domain:** Agent ergonomics, documentation topology, IDE bootstrap  
**Affected Areas:**

- [x] Documentation (`AGENTS.md`, `docs/project-agent-*`, ADR register)
- [x] Tooling (optional manifest generator script)
- [x] Framework templates (adopter copy)
- [ ] Application runtime code (out of scope unless validator added)
- [x] Testing (simulated cold-start checklist in task AC)

**Estimated Complexity:** Medium (1 week) — refactor `AGENTS.md` without losing IPW/RW pointers is the main risk.

---

## Acceptance Criteria

- [ ] **AC1:** ADR-012 published; draft root ADR relocated or redirected with stable link.
- [ ] **AC2:** `AGENTS.md` ≤150 lines; passes compliance checklist in ADR “Consequences” section.
- [ ] **AC3:** Manifest validates against schema; ≥5 `taskRouting[]` rows; ≥6 `protocol[]` rows with real `sourcePath` values.
- [ ] **AC4:** `docs/project-agent-index.md` documents read order, manifest fields, and validate/regenerate commands.
- [ ] **AC5:** Workspace bootstrap references documented (Cursor `.cursorrules`, `CLAUDE.md`).
- [ ] **AC6:** Three documented cold-start simulations (workflows / intake / governance) with file-read counts ≤5 pre-work.
- [x] **AC7:** FR-103 ↔ E02:S16:T17 bidirectional links; story checklist + **fbuboard** / **kboard** rows present.

---

## Dependencies

**Blocked By:** None (intake complete).

**Blocks:** Deeper automation of `openWork[]` / `canon[]` from kanban (may follow under FR-019 or UKW tooling).

**Related Work:**

- [FR-041](./FR-041-windsurf-investigate-agents-skills-for-workflows.md) — skills vs bootstrap layering
- [FR-022](./FR-022-policy-docs-machine-readable-salience.md) — overlaps `protocol[]`; coordinate to avoid duplicate SoT
- [UXR-015](./UXR-015-workflow-initiation-cheatsheet.md) — linked from workflow `taskRouting` row

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-05-30  
**Intake By:** Agent (atomic intake)  
**Implemented:** 2026-05-30 — **v0.2.16.17+1**

**Decision Flow Results:**

- [x] Story Match Found: Epic 2, Story 016 (perpetual workflow operations) → Task **T17**

**Assigned To:**

- Epic: Epic 2 — Workflow Management Framework
- Story: Story 016 — Perpetual Ongoing Workflow Operations
- Task: E02:S16:T17 — Agent bootstrap and task routing (FR-103)
- Version: **v0.2.16.17+2**

**Kanban Links:**

- Epic: [`docs/project-management/kanban/epics/epic-02/epic-02.md`](../epics/epic-02/epic-02.md)
- Story: [`story-16-perpetual-ongoing-workflow-operations.md`](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md)
- Task: [`T17-agent-bootstrap-and-task-routing-fr103.md`](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md)

---

## Notes

- Source decision doc: [`ADR-agent-bootstrap-and-task-routing.md`](../../../../ADR-agent-bootstrap-and-task-routing.md) (repo root; v0.0.1 Proposed).
- Implementation should run **IPW** on **E02:S16:T17** before code/docs execution (global gate).
- Splitting `AGENTS.md` may require moving current role definitions to `docs/project-management/kanban/AGENTS.md` (already exists) or a dedicated `docs/agents/` index — IPP should decide housing.

---

## References

- [`ADR-agent-bootstrap-and-task-routing.md`](../../../../ADR-agent-bootstrap-and-task-routing.md)
- [`AGENTS.md`](../../../../AGENTS.md)
- [`docs/guides/workflow-initiation-cheatsheet.md`](../../../guides/workflow-initiation-cheatsheet.md)
- [Kanban governance policy](../../../../packages/frameworks/kanban/policies/kanban-governance-policy.md)
