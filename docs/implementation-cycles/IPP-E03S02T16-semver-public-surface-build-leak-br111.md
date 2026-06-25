---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-25T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T16 — Planning: SemVer public surface BUILD leak fix (BR-111) (IPW)

**Host Task:** [`T16-semver-public-surface-build-leak-br111.md`](../kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T16-semver-public-surface-build-leak-br111.md) **(E03:S02:T16)**  
**Planning for:** [BR-111](../kanban/fbu/BR-111-semver-public-surface-build-metadata-leak.md)  
**Status:** Complete

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Public README/CHANGELOG/RW summaries show SemVer **core only** (`MAJOR.MINOR.PATCH`) in task_touch mode. | BR-111, ADR-031, AC1 |
| RF2 | `validate_release_coherence.py` compares against `semver_core`; **rejects** `+BUILD` on public SemVer lines. | BR-111 AC2 |
| RF3 | `finalize_rw_semver_registry.py` JSON emits `semver_core` and `semver_display` distinct from trace-only `semver_full`. | BR-111 P1 |
| RF4 | Regression test from SBL attempt 11 (`0.2.16.2+2` → public `0.0.5`, tag `v0.0.5`). | AC3 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Do not change internal `VERSION_BUILD` allocation semantics. | Task out-of-scope |
| RNF2 | Greenfield mirror stays in sync with `packages/frameworks/**` changes. | P-GREENFIELD-SYNC |

### 1.3 Invariants

- Internal version remains `RC.EPIC.STORY.TASK+BUILD`.
- `semver_full` retains `+BUILD` in SAA/allocator trace only.
- Primary git tag uses core only (unchanged).

---

## 2. Specification

### 2.1 Goal

Close the implementation gap between ADR-031 Option A and adopter-visible behaviour so public surfaces never leak `+BUILD`, coherence enforcement matches core-only policy, and RW finalize JSON steers agents to `semver_display`.

### 2.2 Out of scope

- Changing SAA BUILD allocation algorithm.
- Retagging historic releases.

### 2.3 Constraints

- task_touch mode only for coherence BUILD-rejection (registry mode unchanged).
- Use existing `external_display_semver()` / `semver_display` from `get_rw_tag_info`.

### 2.4 Status transition intent

- **TODO → IN PROGRESS:** IDW Step 1 (first implementation edit).
- **→ COMPLETE:** All AC satisfied + `RW E03:S02:T16 --art`.

### 2.5 ADR necessity decision

| Trigger | Y/N | Evidence |
| ------- | --- | -------- |
| T1 New architectural pattern | N | ADR-031 already governs |
| T2–T7 | N | Implementation of existing ADR |

**Outcome:** EXEMPT — governed by [ADR-031](../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md).

---

## 3. Test Design

| TC | Requirement | Test |
| -- | ----------- | ---- |
| TC1 | RF1/RF2 | `test_attempt11_core_only_coherence_passes` — README/CHANGELOG `0.0.5`, DB `semver_core=0.0.5`, `semver_full=0.0.5+2` |
| TC2 | RF2 | `test_readme_build_suffix_fails` — README `0.0.5+2` must fail coherence |
| TC3 | RF3 | `test_finalize_emits_semver_display` — JSON includes `semver_core`, `semver_display` |
| TC4 | RF1 | `test_subject_uses_semver_core_without_build` (existing) |

---

## 4. Implementation Plan

1. Transition task `E03:S02:T16` status from `TODO` to `IN PROGRESS`.
2. Add `_public_semver_must_be_core_only` guard to `validate_release_coherence.py` and `validate_rw_split_brain_streak.py`.
3. Extend `finalize_rw_semver_registry.py` payload with `semver_core` and `semver_display`.
4. Add attempt-11 regression tests in `test_validate_release_coherence.py` and finalize tests.
5. Update `.cursor/skills/readme-update/SKILL.md` for ADR-031 core-only SemVer.
6. Run pytest for touched workflow-mgt scripts.
7. `python scripts/sync_greenfield_install.py` + stage mirror.
8. Reconcile task status to `COMPLETE` with forensic marker after RW.

**RW prescription:** `RW E03:S02:T16 --art` (BUILD +1).

---

## 5. Documentation Deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D1 | `.cursor/skills/readme-update/SKILL.md` | UPDATE | ADR-031 core-only external SemVer |
| D2 | `docs/kanban/fbu/BR-111-*.md` | UPDATE | Status on RW Step 7 |
| D3 | Task doc T16 | UPDATE | IPP link, status, AC checkboxes |

---

## 6. Documentation Housing

| Doc ID | Target | Publication |
| ------ | ------ | ----------- |
| D1 | `.cursor/skills/readme-update/SKILL.md` | NOT_APPLICABLE (IDE skill) |
| D2 | `docs/kanban/fbu/` | NOT_APPLICABLE (maintainer kanban) |
| IPP | `docs/implementation-cycles/` | NOT_APPLICABLE |

Greenfield sync: `python scripts/sync_greenfield_install.py` in same commit.

---

## 7. Success / Verification Criteria

- [ ] AC1: attempt-11 fixture coherence passes with core-only README/CHANGELOG.
- [ ] AC2: coherence fails when `+BUILD` present on public SemVer lines.
- [ ] AC3: pytest regression tests pass.
- [ ] `pytest packages/frameworks/workflow-mgt/scripts/validation/test_validate_release_coherence.py` passes.
- [ ] Greenfield mirror synced.

---

## References

- [BR-111](../kanban/fbu/BR-111-semver-public-surface-build-metadata-leak.md)
- [ADR-031](../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md)
- SBL attempt 11 FB: `adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-dual-semver-build-leaks-into-public-semver-surface.md`
