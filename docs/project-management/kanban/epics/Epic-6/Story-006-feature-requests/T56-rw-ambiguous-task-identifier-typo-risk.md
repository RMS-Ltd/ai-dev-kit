---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task T56 – RW Ambiguous Task Identifier Typo Risk (BR-056)

**Task ID:** E6:S06:T56
**Status:** ✅ COMPLETE (user verified live guard: story typo + epic mismatch abort before edits)
**Priority:** HIGH
**Estimated Effort:** Medium (1–2 days)
**Created:** 2026-03-18

**Associated BR:** [BR-056](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E6:S06:T56`

**Repository Pattern:** BR-056 = E6:S06:T56

---

## Scope

Address BR-056: RW accepts user-supplied task identifiers (e.g. `RW E7S5T1`) without validation or confirmation. A single-digit typo (e.g. `E7S5T1` instead of `E7S6T1`) causes wrong attribution. Implement context-aware validation to detect mismatch with current version and prompt for confirmation before proceeding.

---

## Input

- [BR-056](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)
- Current version from version.py (VERSION_EPIC, VERSION_STORY, VERSION_TASK)
- User-supplied task identifier when present in RW trigger (e.g. `RW E7S5T1`)

---

## Deliverable

- RW validates user-supplied task identifier against current version context
- When mismatch detected (requested E/S/T differs from current): prompt for confirmation or require explicit override
- .cursorrules updated with confirmation behavior
- Test case: `RW E7S5T1` when current is E7:S06:T01 → prompt shown

---

## Acceptance Criteria

- [x] RW detects mismatch (validator + `.cursorrules` Step 1b)
- [x] Confirmation / `--confirmed-override` path documented
- [x] `.cursorrules` + RW template + Step 1.5 execution guide
- [x] Automated scenarios: `run_validate_rw_task_intent_scenarios.sh`

**Verified (2026-03-25):** `RW E7S5T1` on `epic/7` with `version.py` at E7:S06:T17 — Step 1b abort (story mismatch). `RW E6S6T56` on `epic/7` — Step 1b abort (epic mismatch). `RW E6S6T56` on `epic/6` — proceeds after branch/version alignment.

---

## Version Anchor

**Forensic Marker:** ✅ COMPLETE (v0.6.6.56+4)

---

## References

- **BR-056:** [BR-056-rw-ambiguous-task-identifier-typo-risk.md](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)
- **Related:** FR-060 (RW task argument requirement), FR-048 (RW trigger extensions)
