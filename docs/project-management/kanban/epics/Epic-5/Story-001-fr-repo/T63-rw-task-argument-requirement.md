---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-17T11:56:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 63: RW Task Argument Requirement

**Task ID:** E5:S01:T63
**Status:** COMPLETE
**Priority:** HIGH
**Estimated Effort:** Medium
**Created:** 2026-03-17
**Completed:** 2026-03-25
**Last updated:** 2026-03-25 (v0.5.1.63+1 — FR-060 strict RW task token + validate_rw_task_complete + docs)
**Version:** v0.5.1.63+1
**Code:** E5S01T63

**Repository Pattern:** FR-060 = E5:S01:T63 (abstract space: v0.5.1.63+0)

---

## Scope

Enhance Release Workflow (RW) to **require** an explicit task identifier in the **same user message** as the RW trigger (Option A — strict). No inference from Story checklist or repository state for whether to proceed. This complements **Step 1.5 / `validate_rw_task_intent.py`**, which catches **typos and wrong-story ids** once a token is present.

**Problem Statement:**
- RW previously allowed proceeding without a parseable task token (`validate_rw_task_intent` with no `--requested` exits 0).
- That leaves room for wrong attribution before version bump.
- Explicit tokens plus intent guard closes the loop.

**Solution:**
- Agent **must** parse `E<Epic>:S<Story>:T<Task>` or `E<Epic>S<Story>T<Task>` from the user message for **`RW`**, **`RW -d`**, and **`RW -k`**.
- If absent → **RW ABORTED** with examples (`RW E7:S01:T10`, `RW E7S01T10`).
- Run **`validate_rw_task_complete.py`** (task doc exists; COMPLETE or perpetual) then existing **`validate_rw_task_intent.py --requested`** (`--mode rw-k` for `RW -k`).

---

## Input

- **FR-060:** [`FR-060-rw-task-argument-requirement.md`](../../../fr-br/FR-060-rw-task-argument-requirement.md)
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **RW execution:** [.cursorrules (source)](https://github.com/earlution/ai-dev-kit/blob/main/.cursorrules), [release-workflow-agent-execution.md (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
- **Validators:** `validate_rw_task_intent.py`, `validate_rw_task_complete.py`

---

## Deliverable

1. **Mandatory task token** in `.cursorrules` and packaged RW trigger section (strict abort if missing).
2. **`validate_rw_task_complete.py`** — resolves task doc under `kanban_root`; in `full` mode requires COMPLETE (or perpetual maintenance); `rw-k` skips COMPLETE check.
3. **Documentation** — agent execution guide, RW reference, README examples using `RW <task_id>`.
4. **Tests** for the new validator.

---

## Acceptance Criteria

- [x] **Criterion 1:** RW accepts explicit task arguments (e.g., `RW E7:S01:T10`, `RW E7S01T10`, `RW -d E7S01T10`, `RW -k E6S6T56`).
- [x] **Criterion 2:** If no parseable task token in the user message → **RW ABORTED** (no Step 2); message includes usage examples.
- [x] **Criterion 3:** After token present, `validate_rw_task_complete.py` passes for `full` RW / `RW -d` (or `rw-k` mode as defined).
- [x] **Criterion 4:** Step 1.5 intent guard runs with `--requested` (and `--mode rw-k` for `RW -k`).
- [x] **Criterion 5:** Version bump / Step 2 still follows project schema; agent uses the **declared** task as the release attribution target (existing Story read rules apply).
- [x] **Criterion 6:** Clear errors for invalid or missing task arguments.
- [x] **Criterion 7:** Documentation updated (agent execution, reference, README).
- [x] **Criterion 8:** Perpetual maintenance tasks pass COMPLETE check via perpetual markers (not raw `Status: COMPLETE`).

---

## Approach

1. Add `validate_rw_task_complete.py` and tests.
2. Update `.cursorrules` and `cursorrules-rw-trigger-section.md` (mandatory token + validator order).
3. Update `release-workflow-agent-execution.md`, `release-workflow-reference.md`, framework README.
4. Renumber kanban (this doc as T63); FR-060 assigned task; board + story checklist.

---

## Related Work

- **FR-060:** RW Task Argument Requirement (this task)
- **BR-056 / E6:S06:T56:** RW Task Intent Guard (`validate_rw_task_intent.py`)
- **E5:S01:T48:** ICW task identifier (prior art for argparse / validation)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.5.1.63+1)`)

---

_This Task is part of Epic 5: Documentation Management and Maintenance, Story 1: FR Repo (PERPETUAL). See [`Story-001-fr-repo.md`](../Story-001-fr-repo.md) for story-level context._
