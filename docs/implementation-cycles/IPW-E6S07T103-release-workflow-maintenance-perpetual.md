---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

> **DEPRECATED — This document is a historical artifact.**
>
> The canonical perpetual task for workflow maintenance is now **E2:S16:T03**.
> All active planning and work for perpetual workflow maintenance should reference:
> - [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
> - [`IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md`](IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
>
> This draft is retained for historical traceability only. Do not extend or update.

# E2:S16:T03 - Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) **(E2:S16:T03)**  
**Planning for:** [FR-088 – Dedicated story for perpetual ongoing tasks](../kanban/fbu/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) (supersedes FR-041); current policy thread [BR-067](../kanban/fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) (doc-init **+0** vs default **+1**)  
**Status:** Deprecated (superseded by E2:S16:T03; canonical policy in IPP-E2S16T1)

---

## 1. Specification

### 1.1 Goal

Provide a **durable, rolling** implementation-planning package for **perpetual** Release Workflow (RW) and workflow-framework maintenance anchored on **E2:S16:T03**. Unlike a finite task IPW, this document does not “close” with a single ship: it defines **maintenance domains**, **verification expectations**, and a **phased backlog** that future RW maintenance releases can extend.

### 1.2 Functional requirements

- **F1:** Maintain clear attribution rules so RW/framework changes land under **T103** when they are not owned by a feature task ([FR-041](../kanban/fbu/FR-041-perpetual-task-for-release-workflow-maintenance.md)).
- **F2:** Keep **validators** and **RW Step 9** guidance aligned with [dev-kit versioning policy](../architecture/standards-and-adrs/dev-kit-versioning-policy.md): doc-init **+0**, functional **+1+**, and explicit **`--doc-policy-zero`** when policy requires **+0** on an **existing** E/S/T anchor ([BR-067](../kanban/fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).
- **F3:** Preserve **traceability** from Kanban → validators → `.cursorrules` → packaged workflow docs for adopters.
- **F4:** Record **consumer-facing** expectations where T103 is the anchor (e.g. **RW Step 12.5** / GitHub Releases per **FR-067 FU-2** as described in the host task).

### 1.3 Non-functional requirements

- **N1:** Changes remain **reviewable** (tests + CLI validators); avoid silent behavior shifts in `validate_version_bump` / `validate_branch_context`.
- **N2:** **No regression** against [BR-010](../kanban/fbu/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md) (batch story/task creation must not get incorrect **+0**).

### 1.4 Out of scope

- Feature work that belongs to a **dedicated** E/S/T (attribute there, not T103).
- Declaring T103 **COMPLETE** (perpetual task).
- Replacing **RW** or **UKW** with this IPW.

### 1.5 Constraints and notes

- Primary scripts: [`validate_version_bump.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py), [`validate_branch_context.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py), [`semver_converter.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/version/semver_converter.py); RW execution: [`.cursorrules`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules), [`release-workflow-agent-execution.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md).
- **Perpetual** **T103** is represented in tests (e.g. `test_validate_version_bump_passes_for_t103`).

---

## 2. Test design

| ID | Area | What to verify |
|----|------|----------------|
| T1 | `validate_version_bump` | **Perpetual T103** path still passes; **`--doc-policy-zero`** + **`--requested`/`--art`** + docs-only change set. |
| T2 | `validate_version_bump` | **Task ID alignment** under **`--art`** (mismatch → `TASK ID MISMATCH`). |
| T3 | `validate_version_bump` | **Doc-init** file scan: `packages/frameworks/**` and **`.cursorrules`** treated as allowed “doc” context for **+0** (no false failures for policy text). |
| T4 | `validate_branch_context` | Same **BUILD +0** docs-only rules consistent with version bump for staged/unstaged git changes. |
| T5 | RW Step 9 (manual / CI) | Commands documented in **`.cursorrules`**: `--requested`, `--art`, and when to add **`--doc-policy-zero`**. |
| T6 | Regression | Re-run or extend tests that cover **BR-010**-class batch / first-time doc creation so **+0** / **+1** remains correct. |

**Test module (unit):** [`test_validate_version_bump.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py)

---

## 3. Implementation plan (rolling backlog)

### Wave A — Close BR-067 documentation and policy clarity

| Step | Action | Primary deliverable / path |
|------|--------|----------------------------|
| A1 | Publish a **small policy table** in [BR-067](../kanban/fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) or [versioning policy](../architecture/standards-and-adrs/dev-kit-versioning-policy.md): when **+0** vs **+1** vs **`--doc-policy-zero`**. | BR-067 AC1 |
| A2 | Update **RW agent docs** (`release-workflow-agent-execution.md`, `.cursorrules`) so **RW -d** vs functional **+1** release paths are explicit. | BR-067 AC3 |
| A3 | Add **BR-010** regression checklist to BR-067 verification or test doc. | BR-067 AC4 |

### Wave B — Adoption patterns

| Step | Action | Primary deliverable / path |
|------|--------|----------------------------|
| B1 | Short “when to use **`--doc-policy-zero`**” in [implementation-cycle-sop.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md) or RW KB, linked from T103. | Adopter clarity |
| B2 | Refresh [FR-041](../kanban/fbu/FR-041-perpetual-task-for-release-workflow-maintenance.md) related work if T103 backlog items close. | Traceability |

### Wave C — Governance sync (optional)

| Step | Action | Primary deliverable / path |
|------|--------|----------------------------|
| C1 | Align **release-workflow.yaml** validator list comments with `.cursorrules` if drift appears. | `packages/frameworks/workflow-mgt/workflows/release-workflow/release-workflow.yaml` |
| C2 | Bump **semver-registry** / tag strategy only via normal **RW** (out of scope for this IPW doc alone). | Process |

---

## 4. Success / verification criteria

- [ ] [BR-067](../kanban/fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) acceptance criteria satisfied (policy table, RW docs, BR-010 regression).
- [ ] **`pytest`** `packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py` passes after substantive validator edits.
- [x] Bidirectional links: this IPW ↔ [T03 host task](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) remain valid (relative paths).
- [ ] No contradictory guidance between **versioning policy**, **validators**, and **RW** docs for **+0** / **+1**.

---

## References

- [Host task E2:S16:T03](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- [FR-088 – Dedicated story for perpetual ongoing tasks](../kanban/fbu/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) (supersedes FR-041)
- [BR-067 – BUILD +0 vs +1](../kanban/fbu/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)
- [BR-010 – inverse doc-init bug](../kanban/fbu/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md)
