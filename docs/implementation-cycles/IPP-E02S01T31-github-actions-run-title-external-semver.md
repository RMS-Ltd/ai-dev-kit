---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T31 — Planning: GitHub Actions run title external SemVer (IPW)

**Host Task:** [`T31-github-actions-run-title-external-semver-uxr027.md`](../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T31-github-actions-run-title-external-semver-uxr027.md) **(E02:S01:T31)**  
**Planning for:** [UXR-027](../kanban/fr-br/UXR-027-github-actions-run-title-external-semver.md)  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | RW Step 10 commit **subject** uses external SemVer: `Release v{semver}: {summary}` | UXR-027-R1 |
| RF2 | Commit **body** retains `Internal: v{internal}` + E/S/T footer | UXR-027-R1, AC2 |
| RF3 | Portable RW docs and dual-source parity updated | UXR-027-R2, AC3 |
| RF4 | Deterministic helper for agents/scripts to build commit message | Implementation quality |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | SemVer resolution via existing `semver_converter` (post-finalize lookup) | UXR-027 |
| RNF2 | Non-release commits unaffected | AC4 |
| RNF3 | Greenfield mirror synced (FR-110) | Framework edit policy |

### 1.3 Invariants and boundaries

- **In scope:** RW Step 10 template, commit-message guidelines, `release-workflow.yaml`, helper script + tests, portable excerpt, `.cursorrules`, `rw.md`
- **Out of scope:** Per-workflow `run-name` (R3 deferred), historical commit rewrite, GitHub Release UI

---

## 2. Specification

### 2.1 Goal

GitHub Actions push-triggered workflow run titles show external SemVer (matching README/GitHub Release) because RW release commit subjects use SemVer; internal version remains in commit body and existing forensic surfaces.

### 2.2 Commit message contract

**Subject:**
```text
Release v{semver}: {summary}
```

**Body:**
```text
Internal: v{internal}

Epic: {epic} | Story: {story} | Task: {task}
```

### 2.3 ADR necessity decision

**Outcome:** `EXEMPT` — extends UXR-016 outward-SemVer pattern to RW commit UX; no policy trade-off.

---

## 3. Test design

| ID | Behavior | Expected check |
| -- | -------- | -------------- |
| T1 | `build_rw_commit_message.py` unit | Subject uses SemVer; body contains `Internal:` |
| T2 | CLI `--json` output | Parseable subject/body fields |
| T3 | Structural doc parity | Step 10 in `.cursorrules` matches portable excerpt + `rw.md` |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| 1 | Transition **E02:S01:T31** `TODO` → `IN PROGRESS`; update `Last updated` |
| 2 | Add `packages/frameworks/workflow-mgt/scripts/version/build_rw_commit_message.py` |
| 3 | Add `packages/frameworks/workflow-mgt/scripts/test_build_rw_commit_message.py` |
| 4 | Update Step 10 commit template: `.cursorrules`, `cursorrules-rw-trigger-section.md`, `.claude/commands/rw.md` |
| 5 | Update `commit-message-language-guidelines.md`, `release-workflow-reference.md`, `release-workflow.yaml` |
| 6 | Update `canonical-rw-steps.yaml` step_10 description |
| 7 | Run `sync_greenfield_install.py`; mirror to `greenfield-install/` |
| 8 | Run pytest for new tests |
| 9 | Reconcile task status → `COMPLETE` with version anchor after RW |
| 10 | `RW E02:S01:T31` local-complete |

---

## 5. Documentation deliverables

| Doc | Change |
| --- | ------ |
| RW portable excerpt | Step 10 SemVer subject + internal body |
| `rw.md` | Step 10 example + helper script invocation |
| Commit-message guidelines | SemVer subject / internal body pattern |
| UXR-027 | Status → ACCEPTED; wire IPP |

---

## 6. Documentation housing

All under existing framework and kanban paths; no new ADR.

---

## 7. Success / verification criteria

- [ ] AC1: Helper emits `Release v{semver}:` subject for fixture internal version
- [ ] AC2: Body contains `Internal: v{internal}`
- [ ] AC3: Dual-source parity on Step 10 across `.cursorrules`, portable excerpt, `rw.md`
- [ ] AC4: Pytest green for new tests
- [ ] AC5: RW release commit subject uses SemVer (this release evidences AC1)

**Post-ship:** `RW E02:S01:T31 --art` only if follow-on wave needed.
