---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S09:T13 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T13-docusaurus-faster-package-alignment-br090.md`](../project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090.md) **(E05:S09:T13)**  
**Planning for:** [BR-090](../project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)  
**Status:** Revised — Wave 2 (build closure)

> **IPW revision:** Wave 1 (`v0.5.9.13+1`) shipped `@docusaurus/faster@3.10.1` and aligned pins. Wave 2 closes **BR-090** via full build triage, BR-068 Strategy A link remediation, pytest T8–T11, and CI verification.

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-083. Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Add `@docusaurus/faster` to `portal/package.json` dependencies, version **3.10.1** | T13 AC; BR-090 |
| RF2 | Pin `@docusaurus/core`, `@docusaurus/preset-classic`, `@docusaurus/module-type-aliases`, `@docusaurus/types` consistently at **3.10.1** | T13 AC; BR-090 |
| RF3 | Regenerate `portal/package-lock.json` so `npm ci` resolves 3.10.1 + faster | T13 deliverable |
| RF4 | `cd portal && npm ci && npm run build` exits 0 locally | T13 AC |
| RF5 | **Docusaurus site build** workflow green on qualifying `main` push / PR | T13 AC; FR-069 |
| RF6 | Deploy job in merged workflow green after build (replaces stale BR-090 reference to deleted `docusaurus-deploy.yml`) | BR-090 AC (update wording) |
| RF7 | Update `portal/README.md` if install/build requirements change | T13 AC |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Executable pytest contract (repo IC pattern; mirror `test_portal_br093_ci_deduplication.py`) | Project convention |
| RNF2 | Dependabot Docusaurus group (`@docusaurus/*` in `.github/dependabot.yml`) must cover `@docusaurus/faster` without config change | FR-105 |
| RNF3 | Do **not** remove `future.v4: true` as primary fix | BR-090 maintainer decision |
| RNF4 | Preserve strict link/anchor checking (`onBrokenLinks/MarkdownLinks/Anchors: 'throw'`) | FR-067 |

### 1.3 Invariants and boundaries

- **Invariants:** `future.v4: true` in `portal/docusaurus.config.js`; FR-069 CI build contract unchanged; strict corpus link checking preserved.
- **In scope:** `portal/package.json`, `portal/package-lock.json`, `portal/README.md`, new pytest module, BR-090 status/AC wording, task doc wiring, RW release.
- **Out of scope:** CI topology changes (T14 / ADR-017 — **COMPLETE**); removing `future.v4`; Docusaurus corpus link fixes; changing `--no-minify` unless build fails without it; upgrading beyond 3.10.1.

---

## 2. Specification

### 2.1 Goal

Restore a green production Docusaurus build on CI and locally by satisfying Docusaurus 3.10's Faster dependency contract while keeping the v4 future-flag migration path (`future.v4: true`).

### 2.2 Specification mapping from ascertained requirements

| Requirement | Delivery |
| ----------- | -------- |
| RF1–RF3 | Bump all `@docusaurus/*` to 3.10.1; add `@docusaurus/faster@3.10.1`; regenerate lockfile |
| RF4 | Local `npm ci && npm run build` exit 0 |
| RF5–RF6 | CI build + deploy jobs green via existing [`docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml) |
| RF7 | `portal/README.md` documents faster requirement and Docusaurus 3.10.x |
| RNF1 | `tests/test_portal_br090_faster_alignment.py` |
| RNF3 | `future.v4: true` unchanged in config |

### 2.3 Constraints

- Pin `@docusaurus/faster` at **3.10.1** (same minor as core packages).
- Keep existing `docusaurus build --no-minify` script unless 3.10 build fails without it.
- BR-090 deploy AC must reference merged workflow deploy job, not deleted `docusaurus-deploy.yml`.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** All T13 acceptance criteria satisfied with pytest green + post-merge Actions smoke evidence; forensic marker `✅ COMPLETE (v{version})` on RW release.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same RW Step 7 change set.
- **Owner:** Implementation execution (not this IPW planning session).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-090 intake fixed preferred fix; alternative (remove `future.v4`) explicitly out of scope |
| T2 | Reversibility | N | Revert package.json + lockfile in one PR |
| T3 | Blast radius | N | Confined to `portal/` + tests + maintainer docs |
| T4 | Precedent | N | Implements upstream Docusaurus documented requirement, not a new repo pattern |
| T5 | Constraint trade-off | N | No new security/performance/operability trade at architecture level |
| T6 | Governance contract | N | No RW/IPW/UKW/validator gate changes |
| T7 | Supersedes | N | No ADR/policy contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Decision confined to `portal/` + tests + README |
| E2 | No new options | Y | Implements BR-090 §Proposed fix only |
| E3 | Reversible in one task | Y | Revert package manifest + lockfile |
| E4 | Spec elsewhere | Y | BR-090 + task AC + Docusaurus 3.10 release notes |
| E5 | Documented NONE | Y | §5.3 cites BR-090 maintainer decision |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Faster dependency | `portal/package.json` `dependencies` includes `@docusaurus/faster` at **3.10.1** | RF1 |
| T2 | Version homogeneity | All `@docusaurus/*` in `dependencies` + `devDependencies` share **3.10.1** | RF2 |
| T3 | Lockfile alignment | Lockfile root `dependencies` versions match package.json pins | RF3 |
| T4 | v4 flag preserved | `docusaurus.config.js` contains `future.v4: true` | RNF3 |
| T5 | CI contract unchanged | Existing `test_portal_fr069_ci.py` still passes | RF5 |
| T6 | README maintainer note | `portal/README.md` documents `@docusaurus/faster` requirement when `future.v4` is enabled | RF7 |
| T7 | Optional integration | `test_portal_fr065_identity.py::test_fr065_s9_portal_production_build` with `PORTAL_BUILD_STRICT=1` (manual/CI optional) | RF4 |

**Implementation:** [`tests/test_portal_br090_faster_alignment.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br090_faster_alignment.py).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E05:S09:T13` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Edit [`portal/package.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package.json): bump `@docusaurus/*` to **3.10.1**; add `@docusaurus/faster` | Updated manifest |
| 3 | Run `cd portal && npm install` to regenerate [`portal/package-lock.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package-lock.json) | Consistent lockfile |
| 4 | Verify `npm ci && npm run build` locally | Build exit 0 |
| 5 | Add [`tests/test_portal_br090_faster_alignment.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br090_faster_alignment.py) (T1–T6) | Pytest green |
| 6 | Update [`portal/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md) — faster + 3.10.x install/build notes | RF7 |
| 7 | Update [BR-090](../project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) deploy AC wording | BR hygiene |
| 8 | Release via **`RW E05:S09:T13`** (version bump, changelog, Step 7 four-surface kanban) | Tagged release |
| **N** | **[MANDATORY] Reconcile task `E05:S09:T13` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc + kboard + fbuboard |

### 4.1 Files to create or modify

- UPDATE: [`portal/package.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package.json)
- UPDATE: [`portal/package-lock.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package-lock.json)
- UPDATE: [`portal/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md)
- CREATE: [`tests/test_portal_br090_faster_alignment.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br090_faster_alignment.py)
- CREATE: [`docs/implementation-cycles/IPP-E5S9T13-docusaurus-faster-package-alignment.md`](IPP-E05S09T13-docusaurus-faster-package-alignment.md)
- UPDATE: Host task T13 — IPP links; status transitions
- UPDATE (RW Step 7): story checklist, `kboard.md`, BR-090

### 4.2 Dependency order

1. package.json pins → 2. lockfile regen → 3. local build verify → 4. pytest → 5. README → 6. RW + kanban Step 7

### 4.3 Documentation implementation steps

1. README after lockfile/build verified (accurate install instructions).
2. BR-090 AC update before RW Step 7 (deploy workflow reference).

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `portal/package.json` | Docusaurus 3.10.1 + faster dep | RF1–RF2; Step 2 |
| D-U2 | `portal/package-lock.json` | Regenerated lock | RF3; Step 3 |
| D-U3 | `portal/README.md` | Install/build + faster note; version references | RF7; Step 6 |
| D-U4 | `docs/project-management/kanban/fr-br/BR-090-*.md` | Deploy AC wording; status on verification | Step 7 |
| D-U5 | Host task T13 | Status transitions; IPP links; completion marker on RW | Steps 1, N |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E5S9T13-docusaurus-faster-package-alignment.md` | This IPP | IPW |
| D-C2 | `tests/test_portal_br090_faster_alignment.py` | Executable BR-090 contract | T1–T6; Step 5 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| ADR for faster dependency | NONE — §2.5 EXEMPT; BR-090 §Proposed fix + Docusaurus 3.10 docs govern |
| `.github/dependabot.yml` | NONE — `@docusaurus/*` group already covers faster |
| `.github/workflows/docusaurus-build.yml` | NONE — no workflow change required |
| BR-090 deploy workflow reference | UPDATE D-U4 — reference merged `docusaurus-build.yml` deploy job |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E5S9T13-docusaurus-faster-package-alignment.md` | NOT_APPLICABLE | Planning artifact; not Docusaurus user doc | evergreen | T13 Input/References |
| D-U3 | `portal/README.md` | NOT_APPLICABLE | Repo-local maintainer doc | evergreen | Already linked from docs pillar |
| D-C2 | `tests/test_portal_br090_faster_alignment.py` | NOT_APPLICABLE | Executable spec, not published doc | evergreen | IPP §3; BR-090 |

**Housing rules:** One authoritative doc per topic; IPP lives under `docs/implementation-cycles/`.

---

## 7. Success / verification criteria

### 7.1 Wave 1 (shipped — v0.5.9.13+1)

- [x] IPP written with all §1–§7 sections; bidirectional task ↔ IPP links
- [x] `@docusaurus/faster@3.10.1` in package.json + lockfile
- [x] All `@docusaurus/*` portal deps at **3.10.1**
- [x] `pytest tests/test_portal_br090_faster_alignment.py` T1–T6 green
- [x] `future.v4: true` unchanged
- [x] BR-090 deploy AC references merged workflow
- [ ] `npm ci && npm run build` green locally — **deferred to Wave 2** (MDX/link failures)
- [ ] Post-merge: GitHub Actions **Docusaurus site build** green on `main` — **deferred to Wave 2**

### 7.2 Wave 2 (build closure — target v0.5.9.13+2)

- [x] Full build triage manifest recorded ([docusaurus-corpus-triage-fr-067.md](../maintenance/docusaurus-corpus-triage-fr-067.md))
- [x] `npm run build` exit 0 locally after BR-068 Strategy A repairs
- [x] `PORTAL_BUILD_STRICT=1` production build pytest green (T10)
- [x] Pytest T1–T11 green
- [x] Post-merge Actions **Docusaurus site build** + **deploy** green on `main` — **26992999149**
- [x] BR-090 → **FIXED**; V-band pruned; T13 `✅ COMPLETE (v0.5.9.13+3)`

---

## 8. Wave 2 — MDX link remediation + CI verification (BR-090 build closure)

### 8.1 Requirements (Wave 2)

| ID | Requirement | Source |
|----|-------------|--------|
| RF8 | `cd portal && npm run build` exits **0** locally after link repairs | BR-090 AC; T13 AC |
| RF9 | **Docusaurus site build** green on `main` post-merge | BR-090 AC; FR-069 |
| RF10 | **deploy** job succeeds after green build | BR-090 AC (ADR-017) |
| RF11 | Apply **BR-068 Strategy A** (GitHub `blob/main/` URLs) for all out-of-`docs/` relative targets in publish scope | T11; portal README |
| RF12 | Record triage manifest (files + link classes) in maintenance doc | FR-067 triage pattern |

| ID | Non-functional | Source |
|----|----------------|--------|
| RNF5 | Preserve `onBrokenLinks/MarkdownLinks/Anchors: 'throw'` — no config downgrade | FR-067; RNF4 |
| RNF6 | Executable pytest guards for known out-of-plugin patterns | extends RNF1 |
| RNF7 | `@docusaurus/faster` + 3.10.1 pins unchanged | Wave 1 deliverable |

**Out of scope:** Docusaurus version bumps; removing `future.v4`; CI topology (T14); implementing `UKW -ad`.

### 8.2 Specification (Wave 2)

| Requirement | Delivery |
| ----------- | -------- |
| RF8–RF10 | Full corpus link/anchor triage; `npm run build` green; CI smoke on `main` |
| RF11 | GitHub `blob/main/` URLs for `.claude/`, `.cursor/`, `.cursorrules`, `packages/`, `scripts/`, `src/`, `tests/` targets |
| RF12 | Wave 2 row in [docusaurus-corpus-triage-fr-067.md](../maintenance/docusaurus-corpus-triage-fr-067.md) |
| RNF6 | `tests/test_portal_br090_faster_alignment.py` T8–T11 |

**Cross-note:** UXR-015 RNF2 satisfied for GitHub browsing; Docusaurus publish scope required Strategy A — document in BR-090 resolution.

### 8.3 Test design (Wave 2)

| ID | Behavior | Check | Covers |
|----|----------|-------|--------|
| T8 | Out-of-plugin relative ban | `docs/guides/workflow-initiation-cheatsheet.md` — no `](../../.claude/`, `](../../.cursorrules`, `](../../CLAUDE.md`, `](../../rw-config`, `](../../.cursor/` markdown targets | RF11 |
| T9 | Strategy A presence | Cheatsheet deep-link table uses `github.com/RMS-Ltd/ai-dev-kit/blob/main/` for agent/command targets | RF11 |
| T10 | Production build gate | `test_fr065_s9_portal_production_build` with `PORTAL_BUILD_STRICT=1` exits 0 | RF8; BR-090 AC |
| T11 | Wave 1 regression | T1–T6 still pass | RNF7 |

### 8.4 Implementation plan (Wave 2)

| Step | Action | Deliverable |
|------|--------|-------------|
| **1** | Reopen T13: `COMPLETE` → `IN PROGRESS`; uncheck CI AC; link IPP §8 | T13 task doc |
| 2 | Extend IPP with §8 Wave 2 | This document |
| 3 | Run full build triage; write manifest | Triage doc / evidence |
| 4 | Repair failing links (Strategy A) + anchor hygiene | `docs/**/*.md` |
| 5 | Add pytest T8–T11 | `tests/test_portal_br090_faster_alignment.py` |
| 6 | Verify: `pytest` + `PORTAL_BUILD_STRICT=1` | Local green |
| 7 | **`RW E05:S09:T13 --art`** → **v0.5.9.13+2** | Changelog; Step 7 four-surface |
| 8 | Post-merge: Actions build + deploy green on `main` | BR-090 evidence |
| **N** | Reconcile T13 → `COMPLETE` + `✅ COMPLETE (v0.5.9.13+2)` when RF8–RF10 evidenced | Task, kboard, BR-090 |

### 8.5 Documentation deliverables (Wave 2)

| Doc | Action |
|-----|--------|
| IPP-E05S09T13 | UPDATE — §8 Wave 2 |
| T13 task doc | UPDATE — status, AC, IPP §8 link |
| BR-090 | UPDATE — resolution + Actions run IDs |
| docusaurus-corpus-triage-fr-067.md | UPDATE — Wave 2 failure-class row |
| workflow-initiation-cheatsheet.md | UPDATE — primary link repairs |
| tests/test_portal_br090_faster_alignment.py | UPDATE — T8–T11 |
| portal/docusaurus.config.js | NONE — strict throw preserved |

### 8.6 ADR decision (Wave 2)

**Outcome: EXEMPT** — implements existing BR-068 policy; reversible corpus edits only.

### 8.7 Success criteria (Wave 2)

- [x] IPP §8 Wave 2 written; task ↔ IPP bidirectional links current
- [x] Full build triage manifest recorded
- [x] `npm run build` exit 0 locally
- [x] `PORTAL_BUILD_STRICT=1` production build pytest green
- [x] Pytest T1–T11 green
- [x] Post-merge Actions run green on `main` (build + deploy) — **26992999149**
- [x] BR-090 → **FIXED**; intake-completed ledger updated
- [x] T13 forensic marker `✅ COMPLETE (v0.5.9.13+3)`
- [x] `future.v4: true` and `@docusaurus/faster@3.10.1` unchanged

---

## References

- [T13 — Docusaurus `@docusaurus/faster` + package.json 3.10.1 alignment (BR-090)](../project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090.md)
- [BR-090 — Docusaurus 3.10 build fails: missing `@docusaurus/faster` and lockfile drift](../project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)
- [FR-069 — Docusaurus CI build gate](../project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate.md)
- [FR-070 — Docusaurus deployment and hosting](../project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting.md)
- [ADR-017 — Docusaurus CI build/deploy topology](../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100)
- [Docusaurus 3.10 release notes](https://docusaurus.io/blog/releases/3.10)
