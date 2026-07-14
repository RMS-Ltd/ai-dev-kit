---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-14T13:20:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-146: Publish Main Workflow (PMW) — move project README stamping off RW

**Type:** Feature Request (FR)  
**ID:** FR-146  
**Submitted:** 2026-07-14  
**Submitted By:** Operator (dev→main publish efficiency)  
**Priority:** HIGH  
**Severity:** MEDIUM (wasted RW work + adopter-facing SemVer lag mismatch on intermediate `dev` builds)  
**Status:** ACCEPTED  
**Version:** v0.2.3.15+0 (SemVer v0.4.1253) — kanban-init

**Implementing Task:** [E02:S03:T15](../epics/epic-02/story-03-additional-workflows-and-examples/T15-publish-main-workflow-pmw-fr146.md)

**Related:** [FR-122](FR-122-release-workflow-architectural-contract-release-transaction.md) (RW coherence / README gates) · [UXR-024](UXR-024-rw-local-release-default-no-push-batch-operator-push.md) (local RW vs publish) · [ADR-031](../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) (external SemVer display) · [FR-119](FR-119-implementation-delivery-workflow-idw.md) / [FR-124](FR-124-meta-workflow-orchestration-composite-workflow-chains.md) (sibling named workflows) · [UXR-015](UXR-015-workflow-initiation-cheatsheet.md) · [FR-145](FR-145-canonical-workflow-synthetic-examples-corpus.md) (add PMW exemplar after ship)

---

## Summary

Introduce **Publish Main Workflow (PMW)** as the canonical workflow for **adopter-facing project README version disclosure** when promoting `dev` work to `main`. Relieve **RW** of mandatory project README SemVer / badge / latest-release updates on every `dev` release build.

---

## Problem Statement

In this repo’s operating model:

1. **RW runs on `dev`** (and epic branches) for every forensic release transaction — version bump, changelogs, kanban, commit, local tag.
2. **Adopter-visible “shipping”** typically happens only when **`dev` is merged into `main` and `main` is pushed**.
3. **RW Step 5** nonetheless updates the project README (SemVer text, badge, latest-release callout) on **every** intermediate BUILD.

Consequences:

- README churn on builds that never become the public face of the repo.
- FR-122-style **release coherence** treats README ↔ `version.py` as an RW success invariant even when README is not yet the publish surface.
- Operator mental model splits “released on `dev`” vs “published on `main`,” but workflows do not.

---

## Proposed Solution

### PMW — Publish Main Workflow

New first-class agent workflow (parallel to RW / UKW / IDW / MWF):

| Item | Decision |
| ---- | -------- |
| **Name** | **Publish Main Workflow** |
| **Acronym / trigger** | **`PMW`** / `pmw` (plain text + `.claude/commands/pmw.md`) |
| **Role** | **Adopter disclosure** at the `main` publish boundary |
| **Does not** | Bump SemVer / allocate PATCH / rewrite changelogs / run RW Step 7 kanban |

**v1 core responsibilities:**

1. Confirm publish intent on **`main`** (after merge from `dev`, or an explicit documented merge mode — IPW chooses exact gates).
2. Resolve **published SemVer** (and optional Internal line) from the **tip commit being published** — **no new version allocation**.
3. Update **project README** surfaces (version text, badge, latest-release callout) per [ADR-031](../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) (**SemVer core** on public lines).
4. Run **publish coherence** validation (README ↔ tip SemVer / registry mapping for that commit).
5. **Push `main` only with `--push`** (mirror [UXR-024](UXR-024-rw-local-release-default-no-push-batch-operator-push.md)); default local-complete stamp + validate.

**Optional later waves (out of v1 mandatory scope unless IPW promotes):** GitHub Release body sync (today’s RW Step 12.5), portal “current version” callouts, INSTALL headline version — only if they are truly `main`-disclosure surfaces.

### RW change

- RW Step 5 project README update becomes **skipped or config-gated** when `readme_update_owner: publish` (or equivalent) in `rw-config.yaml`.
- RW **release_coherence** / FR-122 README invariants move to **PMW publish coherence** (or become RW-optional when owner is `publish`).
- Default for ai-dev-kit (dev/main layout): README owner = **PMW**. Adopters without that layout keep **`rw`** (backward compatible).

### Non-goals (v1)

- Replacing RW as the version / changelog / tag authority.
- Allocating a new SemVer at publish time.
- Moving kanban reconciliation or changelog archival into PMW.
- Requiring PMW on every epic-branch RW (only `main` publish path).

---

## Requirements

### Functional Requirements

- [ ] **FR-146-F1:** Canonical trigger **`PMW`** + `.claude/commands/pmw.md` (self-contained agent guide).
- [ ] **FR-146-F2:** KB agent execution guide under workflow-mgt vwmp (`publish-main-workflow-agent-execution.md` or equivalent).
- [ ] **FR-146-F3:** Workflow registry + cheatsheet + `CLAUDE.md` / `.cursorrules` / `AGENTS.md` / `project-agent-manifest.json` routing for `PMW` / `pmw`.
- [ ] **FR-146-F4:** PMW updates project README SemVer surfaces from tip (ADR-031 core display); no version bump / allocator write.
- [ ] **FR-146-F5:** `rw-config.yaml` (or equivalent) **`readme_update_owner: rw | publish`**; ai-dev-kit default **`publish`**; when `publish`, RW skips mandatory Step 5 README mutation.
- [ ] **FR-146-F6:** Split coherence: RW no longer **blocks** on README SemVer match when owner is `publish`; PMW runs blocking publish-coherence validator before optional push.
- [ ] **FR-146-F7:** `--push` opt-in for pushing `main` (default local-complete); document operator sequence: merge `dev`→`main` → `PMW` → `PMW --push`.
- [ ] **FR-146-F8:** Greenfield / FR-110 mirror when packaged workflow-mgt paths change.
- [ ] **FR-146-F9:** Document intentional README lag on `dev` when owner is `publish` (README may trail `version.py` until next PMW).

### Non-Functional Requirements

- [ ] **FR-146-NF1:** PMW must not invent SemVer; stamp only what tip already carries.
- [ ] **FR-146-NF2:** Adopter portability — projects that still want README-on-RW keep `readme_update_owner: rw`.
- [ ] **FR-146-NF3:** Encapsulation — PMW does not embed RW; RW does not call PMW by default.
- [ ] **FR-146-NF4:** Amend FR-122 README coherence language so F2/F10/F-class README claims match the configured owner (cross-doc consistency).

---

## Scope Analysis

**Problem Domain:** Workflow Management — release vs publish surfaces  
**Affected Areas:**
- [x] Documentation (README, cheatsheet, agent guides, FR-122 contract text)
- [x] Testing (publish-coherence validators / RW Step 5 skip paths)
- [x] Other: workflow commands, `rw-config.yaml`, routing tables
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema (allocator unchanged)

**Estimated Complexity:**
- [x] Medium (1 week) — new workflow + RW gate split + config; low risk if defaults are explicit

---

## Use Cases

**Primary:** Operator completes several RW runs on `dev`, merges `dev`→`main`, runs `PMW` to stamp README to tip SemVer, then `PMW --push` to publish `main`.

**Additional:**
- Adopter with single-branch / non–dev-main layout keeps `readme_update_owner: rw` (no behaviour change).
- Local PMW without `--push` for preview of README stamp before push.

---

## Acceptance Criteria

- [ ] **AC1:** `PMW` / `/pmw` documented and routed; execution guide exists; cheatsheet § for PMW.
- [ ] **AC2:** With `readme_update_owner: publish`, full RW on `dev` does **not** mutate project README version surfaces; validators do not require README↔`version.py` match for RW success.
- [ ] **AC3:** PMW on `main` tip updates README SemVer (core) to match tip; publish-coherence validator passes; no new SemVer allocated.
- [ ] **AC4:** `PMW` without `--push` does not push; with `--push` pushes `main` only after coherence pass (documented).
- [ ] **AC5:** FR-146 ↔ E02:S03:T15 bidirectional; IPP after IPW; `kboard` row until ship; FR-122 / RW guide wording updated for owner split.

---

## Dependencies

**Blocks:**
- Cleaner `dev` RW diffs; honest adopter README at `main` publish

**Blocked By:**
- None for intake; implementation should align with current ADR-031 display helpers and RW Step 5 skill

**Related Work:**
- FR-122 — revise README-in-RW coherence when owner is PMW
- UXR-024 — push policy pattern to copy
- FR-145 — add PMW synthetic exemplar once shipped
- E02:S01:T30 — historical RW contract delivery (informational amend, not reopen)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-07-14  
**Intake By:** Agent (intake-process)

**Decision Flow Results:**
- [x] Story Match Found: Epic 2, Story 03 (Additional Workflows & Examples) → Task T15

**Assigned To:**
- Epic: Epic 2 — Workflow Management Framework
- Story: Story 03 — Additional Workflows & Examples
- Task: E02:S03:T15 — Publish Main Workflow (PMW) / FR-146
- Version: `0.2.3.15+0` (SemVer v0.4.1253)

**Kanban Links:**
- Epic: [`docs/kanban/epics/epic-02/epic-02.md`](../epics/epic-02/epic-02.md)
- Story: [`docs/kanban/epics/epic-02/story-03-additional-workflows-and-examples.md`](../epics/epic-02/story-03-additional-workflows-and-examples.md)
- Task: [`T15-publish-main-workflow-pmw-fr146.md`](../epics/epic-02/story-03-additional-workflows-and-examples/T15-publish-main-workflow-pmw-fr146.md)

---

## Notes

- Preferred operator sequence for ai-dev-kit: **`RW*` on `dev` → merge to `main` → `PMW` → `PMW --push`**.
- IPW should decide whether merge `dev`→`main` is **inside** PMW or a documented precondition (lean preference: precondition + PMW on `main`, to avoid dangerous auto-merge).
- Skill `.cursor/skills/readme-update` should be retargeted as **PMW primary consumer** (RW optional when owner=`rw`).

---

## References

- [Release workflow agent execution — Step 5](../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
- [Workflow initiation cheatsheet](../../guides/workflow-initiation-cheatsheet.md)
- [readme-update skill](../../../.cursor/skills/readme-update/SKILL.md)
