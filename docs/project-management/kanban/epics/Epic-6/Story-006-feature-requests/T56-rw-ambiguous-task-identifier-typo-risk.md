---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task T56 – RW Ambiguous Task Identifier Typo Risk (BR-056)

**Task ID:** E06:S06:T56
**Status:** ✅ COMPLETE (user verified live guard: story typo + epic mismatch abort before edits)
**Priority:** HIGH
**Estimated Effort:** Medium (1–2 days)
**Created:** 2026-03-18

**Associated BR:** [BR-056](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E06:S06:T56`

**Repository Pattern:** BR-056 = E06:S06:T56

---

## Scope

Address BR-056: RW accepts user-supplied task identifiers (e.g. `RW E07S05T01`) without validation or confirmation. A single-digit typo (e.g. `E07S05T01` instead of `E07S06T01`) causes wrong attribution. Implement context-aware validation to detect mismatch with current version and prompt for confirmation before proceeding.

---

## Input

- [BR-056](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)
- Current version from version.py (VERSION_EPIC, VERSION_STORY, VERSION_TASK)
- User-supplied task identifier when present in RW trigger (e.g. `RW E07S05T01`)

---

## Deliverable

- RW validates user-supplied task identifier against current version context
- When mismatch detected (requested E/S/T differs from current): prompt for confirmation or require explicit override
- .cursorrules updated with confirmation behavior
- Test case: `RW E07S05T01` when current is E07:S06:T01 → prompt shown

---

## Acceptance Criteria

- [x] RW detects mismatch (validator + `.cursorrules` Step 1b)
- [x] Confirmation / `--confirmed-override` path documented
- [x] `.cursorrules` + RW template + Step 1.5 execution guide
- [x] Automated scenarios: `run_validate_rw_task_intent_scenarios.sh`

**Verified (2026-03-25):** `RW E07S05T01` on `epic/7` with `version.py` at E07:S06:T17 — Step 1b abort (story mismatch). `RW E06S06T56` on `epic/7` — Step 1b abort (epic mismatch). `RW E06S06T56` on `epic/6` — proceeds after branch/version alignment.

---

## Version Anchor

**Forensic Marker:** ✅ COMPLETE (v0.6.6.56+4)

---

## References

- **BR-056:** [BR-056-rw-ambiguous-task-identifier-typo-risk.md](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)
- **Related:** FR-060 (RW task argument requirement), FR-048 (RW trigger extensions)
