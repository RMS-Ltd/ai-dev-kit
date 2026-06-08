---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T24 — RW BUILD increment enforcement and release-tag immutability (BR-097)

**Task ID:** E02:S01:T24  
**Status:** ✅ COMPLETE (v0.2.1.24+3)  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (RW **v0.2.1.24+3** — task_touch registry finalize + release contract + `--art` cross-task BUILD)  
**Version Anchor:** v0.2.1.24+3  
**Code:** E02S01T24

Publication Status: NOT_APPLICABLE

---

## Scope

Stop RW agents from **reusing tagged BUILD numbers** and **force-moving release tags** when a follow-on release is needed. Prior guardrails (BR-067, BR-075, task-touch, changelog immutability) addressed **adjacent** collision classes or symptoms but **did not prevent** the agent decision chain that caused [E05:S09:T14](../../epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md) forensic damage (2026-06-05).

**Goal:** Prevent at **Step 2 decision time**, not Step 9 recovery.

---

## Input

- [BR-097](../../../fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) — problem statement, prior-work failure analysis, acceptance criteria
- [IPP-E2S1T24](../../../../implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md) — IPW implementation plan (Sections 1–7)
- [CHANGELOG_v0.5.9.14+3](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.9.14%2B3.md) — partial `validate_tagged_build_collision` (Step 9 only)
- `.cursorrules` · `.claude/commands/rw.md` · `.claude/commands/ipw.md` · `AGENTS.md`
- `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py`
- `docs/journals/RECOVERY_PROCEDURE.md` · `docs/journals/ROLLBACK_CONTRACT.md`

---

## Prior work inventory — why each failed

### A. SemVer registry / task-touch (different collision class)

| Artifact | Intent | Gap |
|----------|--------|-----|
| [FR-045](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](../../../fr-br/FR-046-rw-semver-tag-task-touch-mode.md) · [E03:S02:T12](../../epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | Injective SemVer per internal release (PATCH collisions) | Fixes **mapping** when different internal keys collided on same SemVer. Does not stop agents from publishing **two commits** under **one internal BUILD**. |
| [BR-061](../../../fr-br/BR-061-semver-task-touch-counter-increments-too-often.md) | Counter/finalize discipline | Implementation hygiene; not RW Step 2 agent behaviour. |
| [BR-073](../../../fr-br/BR-073-semver-task-touch-collision-retrospective-fix.md) · [E02:S01:T20](T20-semver-task-touch-collision-retrospective-fix-br073.md) | Registry data repair | Retrospective; no forward agent contract. |
| [semver-tag-collision-incident-2026-03-07](../../../../architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md) | Document registry-mode root cause | Predates forensic BUILD-reuse class. |

### B. BUILD policy and validators (wrong scope or too late)

| Artifact | Intent | Gap |
|----------|--------|-----|
| [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) · [E02:S16:T03](../story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | Allow BUILD +0 for doc-init / explicit policy | Agents misread as **“docs-only wave → don’t bump.”** `policy_zero_ok` only applies when **BUILD=0** in validator; BUILD≥1 path unaffected but agents still pass flag. Precedent in `CHANGELOG_v0.2.16.3+3` was prose-only until +3 guard. |
| [BR-075](../../../fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md) · [E02:S01:T22](T22-rw-perpetual-task-version-py-build-increment-br075.md) | Perpetual same-task BUILD must increment | **`validate_perpetual_build_increment` skips non-perpetual tasks.** E05:S09:T14 is a normal delivery task. |
| [BR-010](../../../fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md) | Block incorrect BUILD=0 | Opposite failure mode (BUILD=0 vs BUILD=1). |
| `validate_tagged_build_collision` (+3) | Block tagged BUILD reuse | Runs at **Step 9** — after expensive agent edits. Does not block `git tag -f`. |

### C. Changelog / tag boundary (symptoms, bypassable)

| Artifact | Intent | Gap |
|----------|--------|-----|
| [BR-074](../../../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md) · [E02:S01:T21](T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074.md) | Immutable per-BUILD archive changelogs | Fixed delete/typo; agent still chose wrong BUILD first. |
| `semver_converter.create_rw_tags` | Fail on SemVer collision at tag create | Agent used **manual `git tag -f`** to bypass. |
| Versioning policy force-tag note | Align tag to commit | Encourages **overwrite** instead of **new BUILD**. |

### D. Planning layer (prescribed bad RW)

| Artifact | Intent | Gap |
|----------|--------|-----|
| [FR-094](../../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md) · [E02:S16:T09](../story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md) | IPP quality / state transitions | [IPP-E5S9T14](../../../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md) §8.5 prescribed `RW … --doc-policy-zero` for Wave 2 — baked in the failure. |

---

## Deliverable

1. **Agent FORBIDDEN contract** — RW/IPW/AGENTS: BUILD+1 default; no tag `-f`; `--doc-policy-zero` only if user-triggered and untagged.
2. **`resolve_rw_build.py`** (or integrate into Step 2) — deterministic next BUILD before `version.py` write.
3. **Tag immutability validator** — RW Step 11/12 blocks force-tag recovery paths.
4. **IPW template update** — verification/FBU waves: `RW E:S:T --art` only.
5. **Recovery doc** — single path: bump BUILD, re-RW; never force-tag.
6. **Tests + doc parity** — regression suite; dual-source RW trigger parity checklist.
7. **`push_rw_release.py`** (v0.2.1.24+2) — Step 12 pushes release-scoped tags only; **`git push --tags` forbidden** (stale local SemVer tag false failures).
8. **task_touch collision guards** (v0.2.1.24+3) — `finalize_rw_semver_registry.py`, `validate_task_touch_release_contract.py`, `tag_collision_recovery.py`; `resolve_rw_build.py` `--art` cross-task tagged follow-on.

---

## Acceptance Criteria

Mirror [BR-097 AC1–AC7](../../../fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md#acceptance-criteria).

---

## Out of scope

- Rewriting historical tags (`v0.5.9.14+2` → `0ebf2cf`) — separate operator decision.
- Registry/task-touch mapping changes (E03:S02:T12 complete).
- Perpetual-task ordering (BR-075 closed).

---

## Related

- [IPP-E2S1T24](../../../../implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md)
- [ADR-019](../../../../architecture/standards-and-adrs/ADR-019-rw-build-increment-and-tag-immutability.md)
- [BR-097](../../../fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [E05:S09:T14](../../epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md) — trigger incident
- [Story 001 – RW Agent Execution & Docs](../story-01-rw-agent-execution-and-docs.md)
