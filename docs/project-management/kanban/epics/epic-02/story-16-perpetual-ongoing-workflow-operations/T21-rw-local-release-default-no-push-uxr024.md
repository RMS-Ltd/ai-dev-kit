---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 21: RW local-release default — no push; operator batch push (UXR-024)

**Task ID:** E02:S16:T21  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (RW **v0.2.16.21+1** — UXR-024 documentation wave released locally)  
**Version Anchor:** v0.2.16.21+1

✅ COMPLETE (v0.2.16.21+1)  
**Code:** E02S16T21  

**Upstream:** [UXR-024 — RW local-release default; operator batch push](../../../fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)

---

## Input

- [UXR-024](../../../fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md) findings and recommendations (R1–R6).
- [FR-048](../../../fr-br/FR-048-rw-trigger-extensions-for-multiple-use-cases.md) — existing push-skip modes (`RW -d`).
- [BR-097](../../../fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) — tag immutability for batch push.
- [workflow-initiation-cheatsheet.md](../../../../../guides/workflow-initiation-cheatsheet.md) — RW §2 flag matrix.
- `packages/frameworks/workflow-mgt/canonical-rw-steps.yaml` — execution paths.

---

## Problem statement

Full RW pushes to GitHub on every completion. The maintainer runs RW frequently and prefers **local-complete releases** (commit + tag locally) with **batched manual push** covering many commits at once — reducing GitHub load and matching actual publication cadence.

---

## Deliverable

### Wave 1 — Documentation (shipped v0.2.16.21+1)

1. **UXR-024** intake + bidirectional task links.
2. **Agent SoT:** `.cursorrules`, `.claude/commands/rw.md`, `docs/guides/workflow-initiation-cheatsheet.md` — local-default; `--push` opt-in; operator batch push runbook.
3. **`canonical-rw-steps.yaml`** — `full_release` without 12/12.5; `full_release_push` for `RW --push`.
4. **Portable excerpt** + dual-source parity checklist + vwmp `release-workflow-agent-execution.md` push section.
5. **`greenfield-install/`** mirrors of packaged workflow-mgt RW surfaces.
6. **Git policy** reconciliation in `AGENTS.md`, kanban `AGENTS.md`, ADR agent-network-access Option 3.

### Wave 2 — Follow-on (optional)

1. Non-blocking validator advisory when local tags exceed remote.
2. Hardening tests for `--push` flag parsing in RW validators.

---

## Scope

**In scope:** RW default path, `--push` flag, operator batch push documentation, packaged parity.

**Out of scope:** `RW -d` behavior; BR-097 tag force recovery; CI workflow redesign.

---

## Acceptance criteria

- [x] **AC1:** UXR-024 + T21 filed; story checklist + kboard row wired.
- [x] **AC2:** Root + packaged RW docs describe local-default and `--push` opt-in.
- [x] **AC3:** Operator batch push runbook in cheatsheet + vwmp guide.
- [x] **AC4:** Agent runtime skips Step 12/12.5 without `--push` (demonstrated on v0.2.16.21+1 RW).
- [x] **AC5:** RW released via `RW E02:S16:T21 --art` (**v0.2.16.21+1**, local).

---

## Task checklist

- [x] UXR-024 intake
- [x] Documentation wave (SoT + packaged + greenfield-install)
- [x] RW release (local-complete)
- [ ] Optional: validator advisory for unpushed local tags (follow-on)
