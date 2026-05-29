---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-056: RW Accepts Ambiguous Task Identifier Without Validation (Typo Risk)

**Bug ID:** BR-056
**Task ID:** E6:S06:T56
**Priority:** HIGH
**Severity:** MEDIUM (wrong attribution, requires manual rollback)
**Status:** VERIFIED_FIXED
**Created:** 2026-03-18
**Classification:** Bug + UX gap

---

## Bug Summary

**RW executes with user-supplied task identifiers (e.g. `RW E7S5T1`) without validating or confirming them.** A single-digit typo (e.g. `E7S5T1` instead of `E7S6T1`) causes attribution to the wrong task (E7:S05:T01 instead of E7:S06:T01), producing an incorrect version bump, changelog, kanban update, and commit. RW should have detected the mismatch or prompted for confirmation.

---

## Problem Description

### Observed Behavior
- User typed `RW E7S5T1` (intended: `RW E7S6T1` – Story 6, Task 1)
- RW executed without validation or confirmation
- RW attributed release to E7:S05:T01 (UXR-001) instead of E7:S06:T01 (Windsurf artifact cleanup)
- Version bumped to 0.7.5.1+1; Story 5 updated; wrong changelog entry
- Required manual `git reset --hard HEAD~1` to rollback

### Risk
- **Single-digit typos** (S5 vs S6, T1 vs T2) are easy to make and hard to spot
- **No context check:** Current version was 0.7.6.1+1 (Story 6); user intent was likely Story 6. RW did not flag that the requested task (E7:S05:T01) differed from current version context (E7:S06:T01)
- **Silent wrong attribution:** Commits and changelog are polluted; rollback loses other work if not caught immediately

### Root Cause
- No validation of user-supplied task identifiers against current version/branch context
- No confirmation step when identifier differs from "most likely" (e.g. current story)
- Short formats (`E7S5T1`) are ambiguous – S5 vs S6 is one character

---

## Proposed Solutions

### Option A: Context-Aware Validation (Bug Fix)
- When user supplies `RW E7S5T1` (or similar), parse to E7:S05:T01
- Compare to current `VERSION_EPIC.STORY.TASK` from version.py
- If mismatch (e.g. requested S05, current S06): **warn and ask for confirmation** before proceeding
- Example: "You requested E7:S05:T01. Current version is E7:S06:T01. Did you mean E7:S06:T01? (yes/no)"

### Option B: Canonical Format Enforcement (UX)
- Require explicit format: `RW E7:S06:T01` (with colons) to reduce parsing ambiguity
- Reject or prompt on shorthand that could parse multiple ways

### Option C: Pre-Commit Summary (UX)
- Before Step 10 (commit), display: "About to commit as E7:S05:T01. Confirm? (yes/no)"
- Gives user one last chance to catch typo

### Recommendation
Implement **Option A** as primary fix; consider **Option C** as defense-in-depth.

---

## Acceptance Criteria

- [x] RW detects when user-supplied task identifier differs from current version's Epic/Story/Task (`validate_rw_task_intent.py`; story/epic mismatch blocks)
- [x] RW prompts for confirmation path: agent **RW ABORTED** on validator exit 1; resume with `--confirmed-override` after explicit user confirm (`.cursorrules` Step 1b)
- [x] Documentation updated: `.cursorrules`, packaged RW trigger template, `release-workflow-agent-execution.md` Step 1.5
- [x] Regression scenarios: `run_validate_rw_task_intent_scenarios.sh` (story typo, new-task T999 vs T998, `RW -k` exemption)

**User verification (2026-03-25):** On `epic/7-codebase-maintenance`, `RW E7S5T1` with `version.py` at E7:S06:T17 — Step 1b abort (story mismatch / BR-056). On same branch, `RW E6S6T56` — Step 1b abort (epic mismatch). Guard behaves as designed.

---

### Fixed (verified)

- **BR-056:** RW task-intent validation blocks wrong story and wrong epic before Step 2 file edits; `RW -k` and `--confirmed-override` paths documented.

### Attempted resolution (implementation complete; verify manually)

- **Script:** `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py` — compares parsed `--requested` id to `version.py`; `--mode rw-k`; `--confirmed-override`.
- **Rules:** `.cursorrules` Step 1b; exception to continuous execution when guard fails.
- **Template:** `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` (adopters).
- **Guide:** Step 1.5 in `release-workflow-agent-execution.md`.
- **UKW parser fix:** removed duplicate empty `normalize_task_id` stub in `ukw_syntax_parser.py` (blocked imports).

---

## References

- **Incident:** 2026-03-18 – User typo `E7S5T1` for `E7S6T1`; rollback via `git reset --hard HEAD~1`
- **Related:** FR-060 (RW task argument requirement), FR-048 (RW trigger extensions)
