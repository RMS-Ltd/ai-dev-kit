---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus Production Build — Corpus Triage

**Type:** Feature Request (FR)  
**ID:** FR-067  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** HIGH  
**Status:** ACCEPTED  
**Assigned Task:** E5:S09:T03 — [`T03-docusaurus-build-triage-fr-067.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067.md)

---

## Summary

After **FR-066** points the site at repo `docs/`, make **`npm run build`** succeed for the **agreed publish scope**, by triaging **MDX compilation errors**, **broken links** (per `onBrokenLinks` policy), and any **asset path** issues—with minimal content churn outside fixes required for the build.

---

## Problem Statement

Repo `docs/` has hundreds of markdown files, mixed frontmatter, and links that assume GitHub or editor contexts. A strict `onBrokenLinks: 'throw'` gate blocks the first green build until link hygiene catches up; triage may use `warn` with an explicit policy (see portal README) while remediating.

---

## Scope (Atomic)

**In scope**

- Iterative fixes or **narrowing FR-066 exclude list** (with scope doc updated) until `npm run build` exits **0**.
- Document **temporary** relaxations (e.g. `onBrokenLinks: 'warn'` during migration) **only** if justified with a time-boxed follow-up; prefer fixing links or excluding problematic subtrees per publish policy.
- Coordinate with **FR-058** / MMW where fixes are systemic markdown hygiene.

**Out of scope**

- Perfect editorial quality of all docs.
- Sidebar UX (FR-068).
- CI automation (FR-069).

---

## Functional Requirements

- [x] **FR-067:R01** – `npm run build` in `portal/` passes on CI-representative Node version (≥20 per `package.json` engines).
- [x] **FR-067:R02** – Broken link policy is **explicit** in config and portal README (`warn` + target `throw`; see triage note).
- [x] **FR-067:R03** – Excludes unchanged from FR-066; documented in README (no additional subtrees excluded for links).
- [x] **FR-067:R04** – Triage note: [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../../../maintenance/docusaurus-corpus-triage-fr-067.md); tests: `tests/test_portal_fr067_build_triage.py`.

---

## Non-Functional Requirements

- [x] **FR-067:NF01** – Prefer **surgical** edits (escape MDX, fix links, frontmatter) over bulk rewrites. *(Applied: targeted MDX escapes, placeholder script, limited prose edits.)*
- [x] **FR-067:NF02** – No false “Fixed” claims in changelogs; use project release language rules.

---

## Acceptance Criteria

- [x] AC1: Clean production build for the defined publish scope (`npm run build` exit 0).
- [x] AC2: Publish scope doc matches actual includes/excludes (FR-066 globs + README).
- [x] AC3: Triage summary exists for future maintenance.

---

## Dependencies / Ordering

- **FR-066** must be complete (docs path + scope defined).

## Related FRs

- **FR-058** – Markdown Maintenance Workflow.
- **FR-068** – Sidebar / landing (may start after AC1).

---

## Follow-up work (explicit tracking — do not rely on memory)

Anything “to be done later” from FR-067 must have an **FR and/or Kanban task** below so maintainers are not expected to recall chat context.

| ID | Outcome | Purpose | Tracked as |
|----|---------|---------|------------|
| **FU-1** | ~~Restore **strict** broken-link checking (`onBrokenLinks` / `onBrokenMarkdownLinks` → **`throw`**)~~ **DONE** | Shipped with **E5:S09:T08** after corpus link remediation; build fails on broken in-scope links. Ongoing hygiene: [FR-058](./FR-058-markdown-maintenance-workflow.md). | **Task (complete):** [E5:S09:T08](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md). |
| **FU-2** | **GitHub Release** page for published **SemVer** tags | Tags reach GitHub on push; the **Releases** UI entry is created/updated only when RW **Step 12.5** runs (token present). Same version stream as all RW releases—not a portal-only concern. | **Task (SoT):** [E2:S16:T03](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md). **FR:** [FR-041](./FR-041-perpetual-task-for-release-workflow-maintenance.md). **Mechanism:** [RW Step 12.5](https://github.com/earlution/ai-dev-kit/blob/main/.cursorrules); [`create_github_release.py` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/create_github_release.py). |
| **FU-3** | ~~**Strict broken-anchor checking** (`onBrokenAnchors` → **`throw`**)~~ **DONE** | Shipped with **E5:S09:T10** at **`v0.5.9.10+2`**: corpus anchor/heading alignment, `onBrokenAnchors: 'throw'`, README + pytest; CI **`npm run build`** fails on bad `#fragment` links. | **Task (complete):** [E5:S09:T10](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08.md). |

**Docs that echo this table:** [docusaurus corpus triage note](../../../maintenance/docusaurus-corpus-triage-fr-067.md) (Deferred outcomes — **FU-1** / **FU-2** / ~~**FU-3**~~), [portal README (repository root)](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) (**FU-1** / strict links / **FU-3** anchors); **FU-2** (GitHub Releases) → [E2:S16:T03](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) / [FR-041](./FR-041-perpetual-task-for-release-workflow-maintenance.md).

---

## References

- `portal/docusaurus.config.js` (`onBrokenLinks`, MDX options)
- `docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md`
