---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S03:T12 — Environment-aware workflow execution (FR-128)

**Task ID:** E02:S03:T12  
**Status:** ✅ COMPLETE (v0.2.3.12+1)  
**Priority:** HIGH  
**Created:** 2026-06-11  
**Last updated:** 2026-06-11 (v0.2.3.12+1 — FR-128 environment-aware workflow execution shipped)  
**Version Anchor:** v0.2.3.12+1
**Code:** E02S03T12

**Upstream:** [FR-128](../../../fr-br/FR-128-environment-aware-workflow-execution.md)

**Related:** [FR-094](../../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md) · [FR-119](../../../fr-br/FR-119-implementation-delivery-workflow-idw.md) · [FR-124](../../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md) · [BR-102](../../../fr-br/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md) · [T10](T10-workflow-encapsulation-integrity-mwf-fr126.md) · [T11](T11-mwf-subagent-leg-delegation-br102.md)

---

## Scope

Deliver **multi-runtime environment detection** and **environment-aware mode gates** for IPW, IDW, and MWF so workflows run correctly on Cursor, Claude Code, and OpenCode without hardcoded single-environment checks or manual `PLANNING_MODE` workarounds.

Wave 3 follow-on from [T10](T10-workflow-encapsulation-integrity-mwf-fr126.md) encapsulation matrix — closes the "sub-agent delegation for standalone IPW" gap using the BR-102 pattern already applied to MWF.

---

## Input

- [FR-128](../../../fr-br/FR-128-environment-aware-workflow-execution.md) — analysis, design, requirements, acceptance criteria
- [IPP-E02S03T12](../../../../implementation-cycles/IPP-E02S03T12-environment-aware-workflow-execution-fr128.md) — implementation plan (MWF Leg 1)
- [IPP-E02S03T10](../../../../implementation-cycles/IPP-E02S03T10-workflow-encapsulation-integrity-mwf-fr126.md) — encapsulation inventory / Wave 3 gaps
- Existing handlers: `packages/frameworks/workflow-mgt/scripts/icw/icw_handler.py`
- Command guides: `.claude/commands/{ipw,idw,mwf}.md`
- [workflow-registry.yaml](../../../../../packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml)

---

## Deliverable

1. **`workflow_env.py`** — shared `WorkflowEnvironment` probe (`detect`, `is_plan_session`, `can_spawn_subagent`, `WORKFLOW_ENV` override).
2. **Handler updates** — `icw_handler.py` (and IDW handler if present) use shared detection.
3. **Command guide updates** — environment-aware gate blocks in `ipw.md` (P0), `idw.md` / `mwf.md` (P1).
4. **Registry** — `mode_requirement` + `environment_compatibility` on affected workflows.
5. **Tests** — extended `test_plan_mode_detection.py` for multi-env scenarios (AC1–AC8).
6. **Trigger routing** — `CLAUDE.md` / `.cursorrules` IPW/IDW sections reference environment check (P1).

---

## Acceptance Criteria

- [ ] **AC1:** OpenCode `IPW E:S:T` delegates via sub-agent; returns `IPW COMPLETE` with valid IPP on host task.
- [ ] **AC2:** Claude Code outside `/plan` → `IPW BLOCKED: plan mode required. Type /plan, then /ipw again.`
- [ ] **AC3:** Cursor `CURSOR_MODE=agent` → `IPW BLOCKED: plan mode required. Switch to plan mode and retry.`
- [ ] **AC4:** Cursor `CURSOR_MODE=plan` → inline IPW (no sub-agent).
- [ ] **AC5:** OpenCode `IDW E:S:T` runs inline.
- [ ] **AC6:** Claude Code plan session `IDW` → `IDW BLOCKED: plan mode is active.`
- [ ] **AC7:** `WORKFLOW_ENV=opencode` forces OpenCode detection.
- [x] **AC8:** Existing plan-mode detection tests pass without regression.

---

## Approach

1. Implement `workflow_env.py` with probes and override semantics per FR-128 design §3.1.
2. Wire `icw_handler._detect_execution_mode()` to shared module.
3. Replace single-env plan gate in `ipw.md` with environment decision table; add OpenCode sub-agent delegation (Option A) with MWF fallback message (Option B).
4. Invert IDW gate per environment; align `mwf.md` with `workflow_env` references.
5. Extend `workflow-registry.yaml` with `mode_requirement` blocks.
6. Add pytest coverage for all AC scenarios; run greenfield sync if `packages/frameworks/**` changes.

---

## Dependencies

**Depends On:**
- [T11](T11-mwf-subagent-leg-delegation-br102.md) — BR-102 sub-agent pattern (shipped)

**Blocks:**
- Portable standalone IPW on OpenCode
- Environment-aware MWF leg gates ([FR-124](../../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md))

**Parallel Development Candidacy:** Safe — orthogonal to adopter install work (E06:S09).

---

## Associated Feature Requests

- [FR-128 — Environment-aware workflow execution](../../../fr-br/FR-128-environment-aware-workflow-execution.md) (primary)
