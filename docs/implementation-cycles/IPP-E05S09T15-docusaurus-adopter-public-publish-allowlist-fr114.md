---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S09:T15 — Planning: Docusaurus adopter-public publish allowlist (FR-114)

**Host Task:** [`T15-docusaurus-adopter-public-publish-allowlist-fr114.md`](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md) **(E05:S09:T15)**  
**Planning for:** [FR-114](../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) (F1, F2, F6, NF1)  
**Status:** Approved — shipped **v0.5.9.15+1**; Wave 2 ADR-024 + IPP completion **v0.5.9.15+2**

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094. Bidirectional wiring to host task **Input** and **References** is mandatory.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Final include/exclude allowlist in `portal/README.md` | T15 D1; FR-114-F1/F2 |
| RF2 | `docusaurus.config.js` `exclude` globs enforce allowlist | T15 D2 |
| RF3 | `sidebars.js` adopter-facing categories only | T15 AC2 |
| RF4 | `npm run build` green on allowlisted corpus | T15 AC1 |
| RF5 | Narrow CI path filters in `docusaurus-build.yml` | T15 D3; FR-114-NF1 |
| RF6 | RC ≥ 1 release notes policy + scaffold (both locations documented) | T15 D4; FR-114-F6 |
| RF7 | Allowlisted corpus: excluded-tree links → GitHub blob URLs | BR-068; RF4 |
| RF8 | `docs/documentation/**` audit at implementation (criteria below) | User IPW decision |
| RF9 | `tests/test_portal_fr114_allowlist.py` + shared `tests/portal_allowlist.py` | T15 D5 |
| RF10 | Bidirectional IPP ↔ task wiring | FR-042 |

**RF8 audit criteria (implementation):**

- **Include** if primary audience is adopters/installers/consumers.
- **Exclude** if maintainer/engineering analysis or internal templates.
- **Shipped decision:** full `documentation/**` retained (engineering-and-platform included); follow-on may narrow.

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Preserve `onBrokenLinks` / `onBrokenMarkdownLinks` / `onBrokenAnchors`: `throw` | FR-067 |
| RNF2 | Allowlisted content remains public on GitHub Pages | FR-114-NF2 |
| RNF3 | Post-ship verification: `RW E05:S09:T15 --art` only | BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** `docs.path: '../docs'`; strict link/anchor gates unchanged.
- **In scope:** Portal config, sidebar, README, CI paths, tests, link remediation, ADR-024, release-notes policy.
- **Out of scope:** Notion migration (E05:S08:T03), three-surface ADR (E05:S08:T04), raw CHANGELOG on portal.

---

## 2. Specification

### 2.1 Goal

Rescope Docusaurus from compiling nearly all maintainer `docs/` to publishing **adopter-public** content only, reducing CI churn while preserving strict build gates on the smaller corpus.

### 2.2 Specification mapping

| Requirement | Delivery |
| ----------- | -------- |
| RF1–RF2 | ADR-024 + `portal/README.md` + `docusaurus.config.js` exclude globs |
| RF3 | `sidebars.js` — Guides, Documentation, IDE whitelist doc |
| RF4 | Link remediation + green `npm run build` |
| RF5 | CI explicit allowlist paths (not `docs/**`) |
| RF6 | `portal/blog/RELEASE-NOTES-POLICY.md` + `docs/release-notes/README.md` (alternative) |
| RF7 | BR-068 Strategy A blob URLs in allowlisted markdown |

### 2.3 Constraints

- Inverse allowlist via `exclude` (no staging mirror).
- Internal ADRs/FRs linked via GitHub blob URLs from published pages.

### 2.4 Status transition intent (mandatory)

- **Shipped:** TODO → IN PROGRESS (Step 1) → **COMPLETE** (`v0.5.9.15+1`)
- **Wave 2:** ADR-024 + IPP completion → `RW E05:S09:T15 --art` (`v0.5.9.15+2`)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | Exclude-only vs staging mirror vs multi-plugin |
| T2 | Reversibility | N | Revert restores FR-066 layout in one PR |
| T3 | Blast radius | **Y** | CI, tests, adopter IA, link remediation |
| T4 | Precedent | **Y** | Canonical adopter publish model |
| T5 | Constraint trade-off | **Y** | CI stability vs publish breadth |
| T6 | Governance | N | Does not alter RW/IPW/UKW |
| T7 | Supersedes | **Y** | Narrows FR-066 publish breadth |

**Outcome:** `REQUIRED`

§5 includes ADR **CREATE** at [`ADR-024-docusaurus-adopter-public-publish-allowlist-fr114.md`](../architecture/standards-and-adrs/ADR-024-docusaurus-adopter-public-publish-allowlist-fr114.md). (ADR-019 is reserved for RW build increment policy.) Broader three-surface ADR remains **E05:S08:T04**.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1–E5 | — | — | Not applicable (REQUIRED) |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Config exclude globs | Match `tests/portal_allowlist.CONFIG_EXCLUDE_GLOBS` | RF2 |
| T2 | Sidebar IA | dirNames ⊆ `{guides, documentation}` + ide-whitelist doc | RF3 |
| T3 | README allowlist | FR-114 section; both release-note locations | RF1, RF6 |
| T4 | CI paths | Explicit allowlist; no bare `docs/**` | RF5 |
| T5 | Banned relative links | None in allowlisted corpus | RF7 |
| T6 | Release notes alt | `docs/release-notes/README.md` documents blog alternative | RF6 |
| T7 | Homepage JSX | No `/docs/architecture/` etc. | RF4 |
| T8 | Green build | `npm run build` in `portal/` | RF4 |
| T9 | BR-068 regression | Publish-scope scan uses shared allowlist | RF7 |

**Shared module:** [`tests/portal_allowlist.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/portal_allowlist.py)

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E05:S09:T15 `TODO → IN PROGRESS`** | Task doc |
| 2 | RF7 audit on `docs/documentation/**` | Audit table in ADR-024 |
| 3 | CREATE ADR-024 | ADR file |
| 4 | Expand `docusaurus.config.js` exclude globs | Config |
| 5 | Rewrite `sidebars.js` | Sidebar |
| 6 | Link remediation (blob URLs) | Allowlisted markdown |
| 7 | UPDATE `portal/README.md` | Allowlist + CI + release notes |
| 8 | UPDATE `docusaurus-portal-index.md` | Entry copy |
| 9 | Narrow `docusaurus-build.yml` paths | CI YAML |
| 10 | CREATE `portal/blog/RELEASE-NOTES-POLICY.md` + `docs/release-notes/README.md` | Scaffold |
| 11 | CREATE `tests/portal_allowlist.py`; UPDATE portal pytest suite | Tests green |
| 12 | UPDATE FR-066 supersession banner | FR doc |
| 13 | `npm run build` | Build green |
| 14 | **`RW E05:S09:T15 --art`** | `v0.5.9.15+1` (Wave 1) |
| 15 | Wave 2: ADR-024 + IPP completion + shared test module | `v0.5.9.15+2` |
| **N** | **[MANDATORY] Reconcile status → COMPLETE** with forensic marker | Task doc + kboard |

**RW verification rule (BR-097):** Post-ship FBU waves use **`RW E05:S09:T15 --art`** only — no `--doc-policy-zero`.

### 4.1 Files to create or modify

See §5. Wave 1 shipped in `590acb81`; Wave 2 adds ADR-024, `docs/release-notes/README.md`, `tests/portal_allowlist.py`, FR-066 banner, expanded IPP.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `portal/README.md` | FR-114 allowlist; both release-note locations | RF1, RF6 |
| D-U2 | `portal/docusaurus.config.js` | Exclude globs | RF2 |
| D-U3 | `portal/sidebars.js` | Adopter IA | RF3 |
| D-U4 | `.github/workflows/docusaurus-build.yml` | CI paths | RF5 |
| D-U5 | Allowlisted `docs/guides/**`, `docs/documentation/**` | Link remediation | RF7 |
| D-U6 | `docs/kanban/fbu/FR-066-*.md` | Supersession banner | T7 |
| D-U7 | T15 task doc | IPP links; status | RF10 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S09T15-*.md` | This IPP | IPW |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-024-*.md` | Allowlist ADR (§2.5 REQUIRED) | Step 3 |
| D-C3 | `portal/blog/RELEASE-NOTES-POLICY.md` | RC scaffold policy | RF6 |
| D-C4 | `docs/release-notes/README.md` | Alternative location policy | RF6 |
| D-C5 | `tests/portal_allowlist.py` | Shared test constants | RF9 |
| D-C6 | `tests/test_portal_fr114_allowlist.py` | Executable contract | RF9 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Three-surface ADR | NONE — E05:S08:T04 (FR-114-F5) |
| `ultimate-canonical-kb-structure.md` publish tree | NONE — deferred to T04 |
| Notion migration | Out of scope — E05:S08:T03 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle | Inbound links |
| ------ | -------------- | ----------- | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S09T15-*.md` | NOT_APPLICABLE | evergreen | T15 Input/References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-024-*.md` | NOT_APPLICABLE (excluded corpus) | evergreen | FR-114, T15, portal README |
| D-C3 | `portal/blog/RELEASE-NOTES-POLICY.md` | PUBLISHED (blog) | evergreen | portal README |
| D-C4 | `docs/release-notes/README.md` | NOT_APPLICABLE (git policy stub; excluded from portal build) | evergreen | ADR-024, portal README |
| D-U1 | `portal/README.md` | PUBLISHED (meta) | evergreen | ADR-024, IPP |

---

## 7. Success / verification criteria

### Wave 1 (v0.5.9.15+1)

- [x] `npm run build` passes on allowlisted corpus
- [x] Sidebar adopter-public only
- [x] README documents allowlist + blob linking policy
- [x] CI narrowed path filters
- [x] `portal/blog/RELEASE-NOTES-POLICY.md` scaffold
- [x] IPP wired to task doc
- [x] `RW E05:S09:T15 --art` complete

### Wave 2 (ADR-024 + IPP completion)

- [x] ADR-024 published
- [x] FR-066 supersession banner
- [x] `docs/release-notes/README.md` (alternative documented)
- [x] `tests/portal_allowlist.py` shared module
- [x] Full IPP §1–§7 per plan
- [x] `RW E05:S09:T15 --art` (`v0.5.9.15+2`)

---

## References

- [FR-114](../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [T15 task doc](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-docusaurus-adopter-public-publish-allowlist-fr114.md)
- [FR-066](../kanban/fbu/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md)
- [portal/README.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md)
- [tests/portal_allowlist.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/portal_allowlist.py)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
