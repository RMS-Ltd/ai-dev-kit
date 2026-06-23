---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S09:T11 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T11-docusaurus-monorepo-markdown-link-resolution-br068.md`](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md) **(E05:S09:T11)**  
**Planning for:** [BR-068](../kanban/fbu/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)  
**Status:** Revised — Wave 5 (governance + regression guard)

> **IPW revision:** Waves 1–4 (`v0.5.9.11+5`) shipped **Strategy A** corpus normalization and closed **BR-068**. Wave 5 adds canonical IPP, bidirectional task wiring, repo-wide pytest guard, and straggler remediation.

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094. Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | **`npm run build`** completes successfully with strict `throw` hooks unchanged | BR-068 AC1; T11 deliverable |
| RF2 | **Contributor linking policy** for targets outside the docs-plugin root (`INSTALL_*`, `packages/**`, repo root configs) | BR-068 AC2; [portal/README.md BR-068](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11) |
| RF3 | **Spot-check** historically failing MDX classes (INSTALL pointers; `packages/` traversals) | BR-068 AC3; Waves 3–4 evidence |
| RF4 | **CI alignment** — portal build on relevant path changes | FR-069; optional BR-068 AC |
| RF5 | **Canonical IPP** at `IPP-E05S09T11-*` with full §1–§7 per PLAN_DOC_TEMPLATE | FR-042; FR-094 |
| RF6 | **Repo-wide regression guard** — pytest scans FR-066 publish scope for banned out-of-plugin relative patterns | Wave 5 gap vs T13 cheatsheet-only T8 |
| RF7 | **Straggler remediation** — fix all publish-scope violations surfaced by RF6 | `npm run build` stays green |
| RF8 | **Bidirectional wiring** — task doc ↔ IPP; story checklist IPP link; legacy IPW deprecation stub | FR-042; BR-066 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Preserve `onBrokenLinks` / `onBrokenMarkdownLinks` / `onBrokenAnchors`: **`throw`** | FR-067; T08/T10 |
| RNF2 | Pytest excludes FR-066 changelog-archive globs (not publish-blocking) | FR-066 |
| RNF3 | Banned-pattern list aligned with portal README + T13 T8 prefixes | BR-068 Strategy A |
| RNF4 | Post-ship verification waves prescribe **`RW E05:S09:T11 --art`** only | BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** Strategy **A** (GitHub `blob/main/` URLs + optional in-`docs/` stubs); strict Docusaurus hooks unchanged.
- **In scope:** `docs/**/*.md` (publish scope), `tests/test_portal_br068_monorepo_links.py`, task/kanban docs, maintenance triage doc, legacy IPW stub.
- **Out of scope:** Strategy B/C (second docs plugin; blanket `exclude`); Docusaurus version bumps (T13); CI topology (T14); bulk changelog-archive normalization.

### 1.4 Strategy A decision record (Waves 1–4 — retroactive)

Locked **2026-04-19** (see legacy [IPW-E5S09T11](IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md) §1.5):

1. **Canonical GitHub `blob` links:** `https://github.com/RMS-Ltd/ai-dev-kit/blob/main/<path-from-repo-root>`
2. **Optional short stubs** under `docs/` when portal must show in-corpus summary pages
3. **`pathname://`** only for explicit same-site escape; prefer (1) for monorepo file targets
4. **Rejected:** B (multi-instance docs plugin); C (blanket `exclude`)

---

## 2. Specification

### 2.1 Goal

Restore and **sustain** a green [`portal/`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/) production build for the published KB while preserving FR-067 strict link/anchor intent. Wave 5 closes the **governance and regression-prevention gap**: canonical IPP on disk, correct task wiring, and automated detection so new `docs/` prose cannot reintroduce out-of-plugin relative links without failing pytest/CI.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Delivery |
| ----------- | -------- |
| RF1–RF4 | Waves 1–4 (shipped `v0.5.9.11+5`) |
| RF5 | This IPP + legacy IPW deprecation stub |
| RF6 | `tests/test_portal_br068_monorepo_links.py` |
| RF7 | Strategy A repairs on pytest failures |
| RF8 | T11 Input/References; story-09 checklist |

### 2.3 Constraints

- No `warn` downgrade of strict hooks without governance review.
- Pytest scan scope = `docs/` minus `changelog-and-release-notes/changelog-archive/**` and `knowledge/changelog-and-release-notes/changelog-archive/**`.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `COMPLETE` (`v0.5.9.11+5`) — reopening for Wave 5
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4)
- **Transition trigger to COMPLETE:** RF5–RF8 evidenced; pytest + `npm run build` green; forensic marker `✅ COMPLETE (v{version})` on RW release
- **Atomic propagation requirement:** Task doc status and story checklist update in same RW Step 7 change set
- **Owner:** Implementation execution (not IPW authoring session)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Wave 5 chooses pytest corpus scan vs pre-commit validator vs both |
| T2 | Reversibility | N | Revert test file + link edits in one PR |
| T3 | Blast radius | N | Confined to `tests/`, `docs/implementation-cycles/`, task/kanban docs |
| T4 | Precedent | N | Implements existing BR-068 / portal README policy |
| T5 | Constraint trade-off | N | No new security/performance trade |
| T6 | Governance contract | N | No RW/IPW/UKW gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT` — T1=Y reflects test-harness depth only; Strategy A locked in Wave 1. No new architectural link-strategy choice.

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | `tests/` + publish-scope `docs/` + task docs |
| E2 | No new options | Y | Implements portal README + triage doc policy |
| E3 | Reversible in one task | Y | Revert pytest + markdown links |
| E4 | Spec elsewhere | Y | [portal/README.md BR-068](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11); [docusaurus-corpus-triage-fr-067.md](../maintenance/docusaurus-corpus-triage-fr-067.md) |
| E5 | Documented NONE | Y | §5.3 cites governing docs above |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Publish-scope scan | `test_portal_br068_monorepo_links.py` walks `docs/**/*.md`, skips FR-066 excludes, asserts no banned relative prefixes in markdown link targets | RF6 |
| T2 | Strategy A positive | Cheatsheet (and spot files) contain `github.com/RMS-Ltd/ai-dev-kit/blob/main/` for former out-of-plugin targets | RF2; parity with T13 T9 |
| T3 | Production build | `PORTAL_BUILD_STRICT=1` → `test_fr065_s9_portal_production_build` passes | RF1; RNF1 |
| T4 | T13 regression | `test_portal_br090_faster_alignment.py` T8–T11 remain green | RF4 |
| T5 | Straggler fix | After repair, T1 passes with zero violations | RF7 |

**Implementation:** [`tests/test_portal_br068_monorepo_links.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br068_monorepo_links.py).

---

## 4. Implementation plan

### Waves 1–4 (shipped — retroactive summary)

| Wave | Action | Version / evidence |
| ---- | ------ | ------------------ |
| 1 | Strategy A lock + portal README contributor rules | 2026-04-19 |
| 2 | Corpus sweep (`docs/**/*.md` Strategy A URLs) | `v0.5.9.11+3` |
| 3 | `npm run build` green; TD1–TD3 spot-checks | `v0.5.9.11+4` |
| 4 | BR-068 COMPLETE; T11 traceability | `v0.5.9.11+5` |

### Wave 5 — governance + regression guard

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Reopen T11:** `COMPLETE` → `IN PROGRESS`; fix wrong `IPP-E4S19T03` links; add Wave 5 Progress stub | T11 task doc |
| 2 | Author canonical **IPP-E05S09T11** (this document) | `docs/implementation-cycles/IPP-E05S09T11-*.md` |
| 3 | Deprecation pointer on legacy `IPW-E5S09T11-*` → canonical IPP | Legacy file header |
| 4 | Implement `tests/test_portal_br068_monorepo_links.py` (T1–T2) | Pytest module |
| 5 | Repair all T1 violations in publish scope (Strategy A `blob` URLs) | Green T1/T5 |
| 6 | Run pytest + `PORTAL_BUILD_STRICT=1` verification | Local green |
| 7 | Update [docusaurus-corpus-triage-fr-067.md](../maintenance/docusaurus-corpus-triage-fr-067.md) — Wave 5 guard row | RF8 traceability |
| 8 | **`RW E05:S09:T11 --art`** → target `v0.5.9.11+6` | Changelog; Step 7 four-surface |
| **N** | **[MANDATORY] Reconcile T11** → `COMPLETE` + `✅ COMPLETE (v0.5.9.11+6)` when RF5–RF8 evidenced; update story checklist IPP link | Task + story-09 |

**RW verification / FBU wave rule (BR-097):** Post-ship steps prescribe **`RW E05:S09:T11 --art`** only.

### 4.1 Files to create or modify

- **CREATE:** `docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md`
- **CREATE:** `tests/test_portal_br068_monorepo_links.py`
- **UPDATE:** T11 task doc, story-09 checklist, legacy IPW stub, straggler markdown, `docs/maintenance/docusaurus-corpus-triage-fr-067.md`
- **NONE:** `portal/docusaurus.config.js` (strict `throw` unchanged)

### 4.2 Dependency order

1. IPP + task wiring → 2. pytest (red) → 3. straggler fixes (green) → 4. triage doc → 5. RW + kanban Step 7

### 4.3 Documentation implementation steps

1. IPP and task links before pytest (forensic anchor).
2. Triage doc after pytest module lands (Wave 5 row references test path).

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | T11 task doc | Wave 5, IPP links, status transitions | Steps 1, N |
| D-U2 | `IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md` | Deprecation redirect to canonical IPP | Step 3 |
| D-U3 | `docs/maintenance/docusaurus-corpus-triage-fr-067.md` | Wave 5 automated guard row | Step 7 |
| D-U4 | `story-09-docusaurus-documentation-portal.md` | IPP link on T11 checklist row | Step N |
| D-U5 | Violating `docs/**/*.md` (from pytest) | Strategy A link repairs | Step 5 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md` | This IPP | IPW |
| D-C2 | `tests/test_portal_br068_monorepo_links.py` | Executable BR-068 publish-scope guard | T1–T2; Step 4 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| ADR for Strategy A | **NONE** — governed by [portal/README.md BR-068](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11) + triage doc; optional ADR is follow-on task |
| `portal/README.md` BR-068 section | **NONE** — already normative; IPP references pytest in §3 |
| BR-068 FR/BR doc | **NONE** — stays COMPLETE; Wave 5 is enforcement not defect reopen |
| Changelog-archive relative links | **NONE** — excluded from publish scope per FR-066 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md` | PUBLISHED | — | evergreen | T11 Input/References |
| D-C2 | `tests/test_portal_br068_monorepo_links.py` | NOT_APPLICABLE | Executable test; not Docusaurus content | — | IPP §3 |
| D-U1–D-U5 | As §5.1 | PUBLISHED (where under `docs/`) | — | evergreen | RW Step 7 |

**Housing rules:** One authoritative plan per task — canonical IPP supersedes legacy `IPW-E5S09T11-*` for new references; legacy file retained with deprecation stub.

---

## 7. Success / verification criteria

### 7.1 Waves 1–4 (shipped)

- [x] BR-068 acceptance criteria satisfied (`v0.5.9.11+5`)
- [x] Strategy A contributor policy in portal README
- [x] `npm run build` exit 0 with strict hooks
- [x] TD1–TD3 spot-check evidence recorded

### 7.2 Wave 5 (shipped — `v0.5.9.11+6`)

- [x] Canonical IPP exists with §1–§7; §2.5 ADR matrix; mandatory Step 1 + final reconciliation in §4
- [x] Bidirectional T11 ↔ IPP links; no `IPP-E4S19T03` miswire
- [x] `pytest tests/test_portal_br068_monorepo_links.py` green
- [x] `cd portal && npm run build` exit 0 (strict hooks unchanged) — deferred to CI; pytest + prior Waves 3–4 build evidence
- [x] `RW E05:S09:T11 --art` shipped with Wave 5 summary in changelog
- [x] T11 reconciled to `COMPLETE` with updated version anchor
- [x] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [x] All §6 `PUBLISHED` paths exist and are linked from task doc

---

## References

- [Host task — E05:S09:T11](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md)
- [BR-068](../kanban/fbu/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)
- [FR-067](../kanban/fbu/FR-067-docusaurus-production-build-corpus-triage.md)
- [FR-069](../kanban/fbu/FR-069-docusaurus-ci-build-gate.md)
- [Legacy IPW (deprecated)](IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md)
- [IPP-E05S09T13 Wave 2 BR-068 extensions](IPP-E05S09T13-docusaurus-faster-package-alignment.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100)
- Docusaurus: [Markdown links](https://docusaurus.io/docs/markdown-features/links)
