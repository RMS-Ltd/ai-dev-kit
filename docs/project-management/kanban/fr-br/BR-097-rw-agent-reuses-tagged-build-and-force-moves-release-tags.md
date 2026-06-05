---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-097: RW agents reuse tagged BUILD and force-move release tags instead of incrementing

**Code:** BR-097  
**Status:** RESOLVED  
**Priority:** HIGH  
**Severity:** HIGH — forensic corruption (version ↔ commit ↔ tag ↔ changelog divergence), wasted agent tokens, operator trust erosion. Guardrails that catch late do not prevent the failure mode.  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05  
**Version:** v0.2.1.24+1 (implemented — E02:S01:T24)

**Implementing Task:** [E02:S01:T24](../epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md)

**Trigger incident:** [E05:S09:T14](../epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md) Wave 2 — agent ran `RW E05:S09:T14 --art --doc-policy-zero` on already-tagged `v0.5.9.14+2`, then `git tag -f` when push failed. Corrective release: **v0.5.9.14+3** (`e31dd42`). Partial guard shipped in +3 (`validate_tagged_build_collision`); **agent contract and Step 2 determinism remain open**.

---

## Problem Statement

Release Workflow agents repeatedly treat **“docs-only / task already COMPLETE / verification wave”** as **“do not increment BUILD”**, reusing an internal version that **already has release tags**, then **force-moving tags** (`git tag -f`, `git push -f`) when tag push fails — instead of publishing a **new BUILD** (`HEAD_BUILD + 1`).

This violates the forensic contract: **one `RC.EPIC.STORY.TASK+BUILD` ↔ one commit ↔ one changelog archive ↔ one tag set**.

Catching the mistake at **Step 9** (after changelogs, kanban, and large doc trees are edited) wastes time and LLM tokens. **Prevention at decision time** is required.

---

## Expected Behavior

1. **Same E:S:T, new release** → `VERSION_BUILD = HEAD_BUILD + 1` (default; no agent discretion).
2. **`--doc-policy-zero`** only when **user typed it** in the RW trigger **and** no git tag exists for that BUILD.
3. **Tag push collision** → **RW ABORTED**; operator bumps BUILD and re-runs — **never** `git tag -f` / force-push release tags.
4. **IPW** never prescribes `--doc-policy-zero` for post-ship verification / FBU closure waves.
5. **Step 2** uses a deterministic resolver script before `version.py` is written.

---

## Observed Behavior (2026-06-05, E05:S09:T14)

| Commit | Claimed version | Content |
|--------|-----------------|---------|
| `0ebf2cf` | `v0.5.9.14+2` | Wave 1 functional (ADR-017 CI dedup) |
| `a3ee689` | `v0.5.9.14+2` **again** | Wave 2 FBU closure (wrong) |
| `e31dd42` | `v0.5.9.14+3` | Corrective release + partial validator guard |

Agent bypassed `semver_converter.create_rw_tags` collision raise with manual `git tag -f`.

---

## Prior remediation attempts (why they failed)

| ID | Work | Collision class addressed | Why it failed for this behaviour |
|----|------|---------------------------|--------------------------------|
| [FR-045](../fr-br/FR-045-adr-002-task-touch-derived-mapping.md) / [FR-046](../fr-br/FR-046-rw-semver-tag-task-touch-mode.md) / [E03:S02:T12](../epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | Task-touch SemVer mapping | **Registry PATCH** collisions (same SemVer for different internal keys) | Does not govern **internal BUILD reuse** or agent tag force-move. Different failure class. |
| [BR-061](../fr-br/BR-061-semver-task-touch-counter-increments-too-often.md) | Counter/finalize hygiene | SemVer counter drift | Fixed mapping/finalize semantics; not agent Step 2 BUILD decision. |
| [BR-073](../fr-br/BR-073-semver-task-touch-collision-retrospective-fix.md) / [E02:S01:T20](../epics/epic-02/story-01-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073.md) | Registry retrospective patch | Historical duplicate SemVer rows | One-time data fix; no RW agent behaviour change. |
| [semver-tag-collision-incident-2026-03-07](../../architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md) | Incident log + task-touch adoption | Registry mode mapping | Documented **PATCH** collision root cause; predates forensic BUILD reuse class. |
| [BR-067](../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) / [E02:S16:T03](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | `--doc-policy-zero` for doc-init +0 | Opposite problem (wanted +0, got +1) | Gave agents a flag misread as **“docs-only → don’t bump BUILD.”** `policy_zero_ok` wired only for **BUILD=0**; BUILD≥1 ignores flag but agents still pass it. Precedent [`CHANGELOG_v0.2.16.3+3.md`](../../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.3+3.md) was case-by-case prose, not enforced until +3. |
| [BR-075](../fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md) / [E02:S01:T22](../epics/epic-02/story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075.md) | Perpetual BUILD increment in `version.py` | Perpetual task BUILD drift | **`validate_perpetual_build_increment` only runs for perpetual tasks.** Normal delivery tasks (e.g. E05:S09:T14) had no hard same-task increment enforcement. |
| [BR-010](../fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md) | Doc-init detection | Incorrect BUILD=0 when task doc exists | Opposite failure mode; does not block BUILD reuse when BUILD≥1. |
| [BR-074](../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md) / [E02:S01:T21](../epics/epic-02/story-01-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074.md) | Changelog archive immutability | Overwritten `CHANGELOG_v*.md` on BUILD>1 | Fixed archive delete/typo symptoms; did not fix **BUILD increment decision** or tag immutability. |
| `semver_converter.create_rw_tags` | RW Step 11 collision raise | SemVer tag exists at boundary | Agent **bypassed** with manual `git tag -f`. No RW prohibition on force-tag recovery. |
| [E05:S09:T14 +3](../../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.9.14+3.md) | `validate_tagged_build_collision` | Tagged BUILD reuse at Step 9 | **Too late** (post kanban/changelog edits). Does not block `git tag -f`. Does not fix IPW/agent contract. |
| [FR-094](../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md) / [E02:S16:T09](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md) | IPW state transitions | IPP quality | No rule forbidding `--doc-policy-zero` in verification-wave RW steps; IPP prescribed bad command. |
| Versioning policy force-tag guidance | `dev-kit-versioning-policy.md` | Tag/commit alignment | Suggests force-pushing tags to “correct” commit — **reinforces overwrite** instead of new BUILD. |

---

## Acceptance Criteria

- [x] **AC1 — Agent FORBIDDEN contract** in `.cursorrules`, `.claude/commands/rw.md`, `AGENTS.md`: no BUILD reuse when tag exists; no `git tag -f` on release tags; `--doc-policy-zero` only if user typed it. **Evidence:** v0.2.1.24+1 — §C.2 FORBIDDEN blocks; `P-RW-BUILD` in AGENTS.md.
- [x] **AC2 — Step 2 deterministic resolver** (`resolve_rw_build.py` or equivalent): same E:S:T + tagged HEAD BUILD → next BUILD = HEAD+1 before any file edits. **Evidence:** `resolve_rw_build.py`; `test_resolve_rw_build.py` T1–T3.
- [x] **AC3 — IPW template** (`.claude/commands/ipw.md` / `PLAN_DOC_TEMPLATE.md`): verification/FBU waves prescribe `RW E:S:T --art` only; never `--doc-policy-zero` post-ship. **Evidence:** ipw.md RW prescription rules; PLAN_DOC_TEMPLATE §4 note.
- [x] **AC4 — Tag immutability gate** in RW Step 11/12: block session that used `git tag -f` or `-f` push on `v*` release tags. **Evidence:** `validate_release_tag_immutability.py` Step 9; Step 11 FORBIDDEN in rw.md.
- [x] **AC5 — Recovery procedure** (`docs/journals/RECOVERY_PROCEDURE.md`): tag collision → bump BUILD, re-RW; never force-tag. **Evidence:** RECOVERY_PROCEDURE §4.3; dev-kit-versioning-policy §1:1.
- [x] **AC6 — Regression tests** for resolver + tag-immutability validator + agent doc parity check. **Evidence:** 10 pytest cases green; `rw-trigger-dual-source-parity.md` BR-097 checklist row.
- [x] **AC7 — De-emphasize or narrow** `--doc-policy-zero` in RW agent docs to doc-init (`RW -k` / BUILD=0) contexts. **Evidence:** cheatsheet row; `validate_version_bump.py` BUILD≥1 rejection; resolver BUILD≥1 block.

---

## Related

- [BR-067](BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) · [BR-075](BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md) · [BR-074](BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md)
- [E05:S09:T14 +3 changelog](../../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.9.14+3.md) — partial guard + forensic remediation
- [workflow-initiation-cheatsheet.md](../../guides/workflow-initiation-cheatsheet.md)
