---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: RW local-release default — no push; operator batch push

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-05  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IMPLEMENTED (doc policy — verify operator batch-push workflow)  
**Code:** UXR-024  
**Version:** v0.8.3.15+4 (R7 Step 9.7 cross-ref)  

**Implementing Task:** [E02:S16:T21](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T21-rw-local-release-default-no-push-uxr024.md)

**Related:** [FR-048](FR-048-rw-trigger-extensions-for-multiple-use-cases.md) (`RW -d` skips push — mode-specific only), [agent-network-access ADR](../../architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md) (previously rejected skip-push), [BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) (tag immutability; batch push must not force-move tags), [workflow-initiation-cheatsheet](../../guides/workflow-initiation-cheatsheet.md)

---

## Summary

Release Workflow runs **frequently** during active development. Pushing to GitHub on **every** RW completion creates unnecessary remote load and operator friction. The maintainer prefers **local-complete RW** (version, changelog, kanban, commit, tag) with **deferred push**: the operator batches many local releases into **one manual push session** when ready.

---

## Research Objective

**Primary question:** How should RW default behavior change so agents stop pushing on every run while preserving forensic traceability (local commits + tags) and safe remote publication?

**Secondary questions:**

1. What opt-in flag restores immediate push when needed (`--push`)?
2. How does git policy reconcile “RW-only commits” with “operator batch push”?
3. Should `RW -k` follow the same local-default rule as full `RW`?
4. What operator runbook covers branch + per-release tag pushes (never `--tags`)?

---

## Methodology

**Research Method:** Maintainer workflow observation — high-frequency RW usage vs low-frequency remote publication needs.  
**Participants:** User (maintainer).  
**Duration:** Single intake session (2026-06-05).  
**Artifacts reviewed:**

- Live `.cursorrules` / `.claude/commands/rw.md` — Step 12 mandatory push
- [FR-048](FR-048-rw-trigger-extensions-for-multiple-use-cases.md) — push skip only on `RW -d` / partial `RW -k`
- [agent-network-access-and-git-push-limitations.md](../../architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md) — Option 3 “Skip push in RW” previously rejected
- `push_rw_release.py` — release-scoped tag push helper

---

## Key Findings

### Finding 1: Push-per-RW is disproportionate to publication cadence (Severity: High)

**Observed:** Each full `RW` triggers Step 12 (branch + tags) and often Step 12.5 (GitHub Release API). Active sessions may run RW **many times** before the operator wants remote visibility.

**Impact:**

- Unnecessary GitHub server / API load
- Slower RW completion (network dependency)
- Operator prefers one push covering **N** local commits/tags

### Finding 2: Local-complete RW already satisfies forensic needs (Severity: Medium)

Steps 1–11 produce version anchors, changelogs, kanban reconciliation, **local commit**, and **local annotated tags**. Remote push is a **publication** step, not a versioning step.

### Finding 3: Prior ADR rejection is superseded by operator policy (Severity: Low)

[agent-network-access ADR](../../architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md) rejected “skip push” to avoid incomplete automation. UXR-024 reframes: **local-complete is the default success state**; push is **operator-scheduled** or **`--push` opt-in**.

---

## Recommendations

| ID | Recommendation | Rationale |
| -- | -------------- | --------- |
| R1 | **Default full `RW`** skips Step **12** (push) and **12.5** (GitHub Release); completes through Step **11** + **13** | Matches high-frequency local release cadence |
| R2 | Add **`--push`** RW trigger flag — when **user types it**, run Step 12 + 12.5 as today | Explicit opt-in for immediate remote publication |
| R3 | **Operator batch push runbook** — push branch once, then `refs/tags/v{release}` per local release (or `push_rw_release.py` per tag); **never** `git push --tags` | BR-097 tag safety; covers many commits |
| R4 | **Git policy:** commits + local tags via RW only; **push** via operator batch **or** `RW --push` | Replaces “push only via RW” for every run |
| R5 | **`RW -k`** follows same local-default (no push unless `--push`) | Consistent kanban-init cadence |
| R6 | Agent completion message states **“RW COMPLETE (local)”** vs **“RW COMPLETE (pushed)”** | Clear operator handoff |
| R7 | **RW Step 9.7** blocking **Actions CI parity gate** before commit; **`--strict --all`** before any push (Step 12 or operator batch) | Prevents shipping commits that fail GitHub Actions on `dev`/`main` (E08:S03:T15; complements R1 no-push default) |

---

## Proposed cheatsheet updates

| Location | Change |
| -------- | ------ |
| §2 RW matrix | `RW E:S:T` → local commit + tag; **no push** by default |
| §2 RW matrix | Add `… --push` → includes Step 12 + 12.5 |
| §2 Handoff row | Commits/tags via RW; push via batch operator runbook or `RW --push` |
| New §2 subsection | **Operator batch push** — branch push + per-tag `refs/tags/…` |

---

## Acceptance Criteria (verification)

- [x] **AC1:** UXR-024 filed with implementing task **E02:S16:T21** and bidirectional links.
- [x] **AC2:** Agent SoT (`.cursorrules`, `rw.md`, cheatsheet, portable excerpt, `canonical-rw-steps.yaml`) documents local-default + `--push` opt-in.
- [x] **AC3:** Packaged + `greenfield-install/` mirrors aligned.
- [x] **AC4:** Operator batch push runbook present in cheatsheet and vwmp guide.
- [x] **AC5:** Agents skip Step 12/12.5 unless `--push` in user message (shipped **v0.2.16.21+1**).
- [ ] **AC6:** RW Step **9.7** `validate_actions_ci_parity.py` blocking before commit; `--strict --all` before push/batch push (wired 2026-06-08; implementation via E08:S03:T15).

---

## Out of Scope

- Changing `RW -d` (already no tag/push).
- Force-push recovery (still forbidden per BR-097).
- CI triggers on push (unchanged — fewer pushes may delay CI until batch push).
