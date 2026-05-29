---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E5:S09:T11 – Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T11-docusaurus-monorepo-markdown-link-resolution-br068.md`](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md) **(E5:S09:T11)**  
**Planning for:** [BR-068 – Docusaurus strict MDX / monorepo Markdown links](../project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)  
**Related:** [FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md); [Story 009 – Docusaurus Documentation Portal](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal.md) (T08/T10 strict mode)  
**Status:** Complete — **Waves 1–4 delivered** (2026-04-19); closing release **v0.5.9.11+5** (**RW** **`--art`**)

---

## 1. Specification

### 1.1 Goal

Restore a **green** [`portal/`](https://github.com/earlution/ai-dev-kit/blob/main/portal/) production build (`npm run build`) for the published KB while preserving **[FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)** intent: **strict** `onBrokenLinks`, `onBrokenMarkdownLinks`, and `onBrokenAnchors` in [`portal/docusaurus.config.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js) (**`throw`** on all three). Any relaxation of strictness must be **explicit**, **documented**, and **narrow**—not a silent downgrade of T08/T10.

### 1.2 Functional requirements (traceability to BR-068)

| ID | Requirement | Planning note |
|----|-------------|----------------|
| **F1** | **`npm run build`** completes successfully (or an **explicitly documented** publish subset via `exclude` / split site with the same bar for what ships). | Primary completion signal; matches BR-068 AC1. |
| **F2** | **Contributor linking policy** for targets **outside** the docs-plugin root (`../docs`): repo-root **`INSTALL_*`**, **`packages/frameworks/**`**, other monorepo paths. | Single canonical pattern (or small approved set) in [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) and/or [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../maintenance/docusaurus-corpus-triage-fr-067.md); matches BR-068 AC2. |
| **F3** | **Spot-check** pages that historically failed MDX: INSTALL pointers from user-docs; **`packages/`** traversals from Kanban/FR docs. | Named files or globs in §3 verification; matches BR-068 AC3. |
| **F4** | **CI alignment** (optional BR-068 AC): portal build runs on relevant path changes where a workflow exists. | Tie to [FR-069](../project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate.md) / actual workflows in repo. |

### 1.3 Non-functional requirements

| ID | Requirement | Planning note |
|----|-------------|----------------|
| **NF1** | **No silent regression** of internal `docs/` link discipline or anchor strictness vs FR-067. | Prefer corpus edits + documented external links over turning checks to `warn` without governance review. |
| **NF2** | **Maintainability:** Policy must remain operable as frameworks and Kanban docs evolve (avoid one-off hacks per file without a pattern). | §1.5 decisions should favor repeatable author rules. |
| **NF3** | **GitHub vs portal parity:** Explain when **GitHub-relative** Markdown is intentionally replaced or wrapped for MDX (author education in portal README). | Reduces repeated BR class. |

### 1.4 Out of scope

- Replacing Docusaurus or redefining the entire information architecture for the portal.
- **Bulk** rewrites of non-`docs/` repositories or consumer projects; this task focuses on **`docs/`** + **`portal/`** configuration and documented link contracts.
- Full **BR-066** historical IPW backfill (separate effort); only coordinate if filing or sidebar surfacing overlaps.

### 1.5 Decisions / alternatives (to lock before implementation)

**Status:** Rows below are **candidates**; implementation should **not** proceed on ad hoc mixing without updating this section.

| Strategy | Description | Trade-offs |
|----------|-------------|------------|
| **A – Corpus normalization** | Replace unresolved relatives with **`pathname://`**, stable **GitHub `https://github.com/.../blob/...`** URLs, or short **stub pages under `docs/`** that summarize and link outward. | Lowest config surface; many edits; must preserve readability and avoid duplicate maintenance for stubs. |
| **B – Boundary expansion** | Add a **second** `@docusaurus/plugin-content-docs` instance (multi-instance), or introduce **symlink / documented mirror** subtrees under `docs/` aligned with repo layout. | Fewer link transforms in prose; higher Docusaurus config complexity and ongoing sync expectations. |
| **C – Narrow `exclude`** | Extend [`exclude`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js) globs so problematic trees are not compiled—**only** if explicitly approved (content may disappear from portal). | Risk of hiding legitimate KB surface; use sparingly and document. |

**Decision record (locked — Wave 1):**

- **Decision date:** 2026-04-19
- **Primary strategy:** **A – Corpus normalization.** For any target **outside** the docs plugin root (`../docs` as configured in Docusaurus), **do not** use relative file paths that traverse out of `docs/` (MDX will not resolve them). Use:
  1. **Canonical GitHub `blob` links** to this repository, default branch **`main`**:  
     `https://github.com/earlution/ai-dev-kit/blob/main/<path-from-repo-root>`  
     Examples: `.../blob/main/INSTALL_IN_YOUR_PROJECT.md`, `.../blob/main/packages/frameworks/.../docs/foo.md`.  
     Path segments that contain spaces (e.g. `workflow mgt`) must be **URL-encoded** in the link target (e.g. `workflow%20mgt`).
  2. **Optional short stubs** under `docs/` (e.g. a one-paragraph “see also” that links to the GitHub file) only when the published site must present a first-class in-corpus page; avoid duplicating long content.
  3. **`pathname://`** only when a maintainer explicitly needs to escape the doc plugin for a same-site path; prefer (1) for monorepo file targets to keep behavior obvious in review.
- **Rejected (for this workstream):** **B – Boundary expansion** (second docs plugin or mirrored trees) — higher ongoing config and sync cost; **revisit only** if (1)+(2) cannot meet maintainability after Wave 2 corpus pass. **C – Narrow `exclude`** as a **blanket** fix for link errors — **rejected**; it hides KB from the portal. Existing **FR-066** archive excludes remain unchanged; any new `exclude` glob needs its own FR/task and must be called out in [portal README](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md).
- **BR-066 overlap:** **None** for Wave 1. If an IPW or planning artifact must be a first-class portal page, use **stubs** in (2) or coordinate **BR-066** filing separately—do not conflate with link-repair sweeps.
- **Normative contributor copy:** [portal/README.md — BR-068 monorepo links](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11) (same policy in prose).

---

## 2. Test design

| ID | Focus | Acceptance / method |
|----|--------|---------------------|
| **TD1** | Portal production build | `cd portal && npm run build` exits **0** with current strict flags in `docusaurus.config.js`. |
| **TD2** | BR-068 failure classes | After fix, spot-check Markdown that targeted **`../../../INSTALL_IN_YOUR_PROJECT.md`** and **`../../../../packages/frameworks/...`** patterns per §1.5 policy (render or link without MDX resolve error). |
| **TD3** | Regression (internal corpus) | Sample cross-doc links and anchors in `docs/` still satisfy **T08/T10** intent (no new broken internal links introduced by bulk replace). |
| **TD4** | CI path triggers | If portal CI exists, confirm **or** document gap: changes under `portal/` and ingested `docs/` paths trigger build ([FR-069](../project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate.md)). |

---

## 3. Implementation plan

Execution order should follow **policy lock → corpus/config → verification → traceability**.

### Wave 1 — Policy lock

| Step | Action | Deliverable |
|------|--------|-------------|
| 1.1 | Complete **§1.5** decision rows (primary strategy + documented rejects). | **Done (2026-04-19):** §1.5 decision record + rejects **A / B / C** (see above). |
| 1.2 | Draft **contributor rules** in [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md): how to link INSTALL, `packages/`, repo root from `docs/`. | **Done (2026-04-19):** section **Monorepo links outside `docs/` (BR-068 / E5:S09:T11)** with examples and anti-patterns. |

### Wave 2 — Config and corpus

| Step | Action | Deliverable |
|------|--------|-------------|
| 2.1 | Apply chosen strategy: edit `docs/**/*.md` link targets and/or [`portal/docusaurus.config.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js) / [`portal/sidebars.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/sidebars.js) (if multi-instance or routing changes). | Incremental commits per area (e.g. user-docs, kanban, architecture) optional. |
| 2.2 | Update [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../maintenance/docusaurus-corpus-triage-fr-067.md) with **failure class → resolution** mapping for BR-068. | Keeps FR-067 maintenance story coherent. |

### Wave 3 — Verification

| Step | Action | Deliverable |
|------|--------|-------------|
| 3.1 | Full **`npm run build`**; fix stragglers until green. | **Done (2026-04-19):** **`cd portal && npm run build`** exit **0** (strict hooks); noted in **T11** Progress + **`CHANGELOG_v0.5.9.11+4`**. |
| 3.2 | Run **TD2–TD3** spot-checks; document any justified exception (single location, not silent). | **Done (2026-04-19):** Spot-check evidence under **T11** + **`docusaurus-corpus-triage-fr-067.md`** §Wave 3; no exceptions required. |

### Wave 4 — Traceability and release

| Step | Action | Deliverable |
|------|--------|-------------|
| 4.1 | Check **BR-068** acceptance criteria; update **[BR-068](../project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)** status/history when defect is remediated. | **Done (2026-04-19):** **BR-068** **`Status: COMPLETE`** + **Resolution** + AC checked; **`v0.5.9.11+5`**. |
| 4.2 | Update **host task** [T11](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md) Progress + Acceptance Criteria; optional **RW** when implementation slice is ready ([FR-070](../project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting.md) depends on green build). | **Done:** **T11** **`COMPLETE`** + AC checked + **`CHANGELOG_v0.5.9.11+5`**. |

**Files likely touched (living list):**

- [`portal/docusaurus.config.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js)
- [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md)
- [`portal/sidebars.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/sidebars.js)
- [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../maintenance/docusaurus-corpus-triage-fr-067.md)
- Selected Markdown under [`docs/` (repo tree)](https://github.com/earlution/ai-dev-kit/tree/main/docs) (Kanban, user-docs, ADRs—per scan results)
- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) — **only if** §1.5 policy requires coordinated root-doc wording or reciprocal links from stubs

---

## 4. Success / verification criteria

- [x] **BR-068** acceptance criteria satisfied (cross-check [BR-068 § Acceptance Criteria](../project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)).
- [x] **T11** acceptance criteria satisfied ([task doc](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md)): no unexplained regression vs FR-067 strict intent.
- [x] **TD1–TD3** executed or explicitly deferred with rationale in task Progress.
- [x] **Bidirectional wiring:** this IPW ↔ **E5:S09:T11** remain linked ([FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md) host linkage).

---

## References

- [Host task – E5:S09:T11](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md)
- [BR-068](../project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)
- [FR-067](../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md)
- [FR-070](../project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting.md)
- [E5:S09:T08](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md), [E5:S09:T10](../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08.md)
- Docusaurus: [Markdown links](https://docusaurus.io/docs/markdown-features/links), [Multiple docs plugin instances](https://docusaurus.io/docs/docs-multi-instance/)
