---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 11: Monorepo cross-root Markdown link resolution (**BR-068**)

**Task ID:** E5:S09:T11  
**Status:** COMPLETE (**v0.5.9.11+5** — **RW** **`--art`** Waves **3–4**)  
**Priority:** HIGH  
**Estimated Effort:** Medium–Large (policy + corpus and/or plugin boundary changes)  
**Created:** 2026-04-19  
**Last updated:** 2026-04-19 (**v0.5.9.11+5** — **RW** **`--art`** Wave 4 **BR-068** closure + traceability; prior **v0.5.9.11+4** Wave 3)  
**Code:** E5S09T11  
**Version anchor:** v0.5.9.11+5 (**BR-068** **`COMPLETE`**; IPW §4 satisfied)  

**Origin:** **[BR-068](../../../fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)** — strict MDX resolution (`onBrokenMarkdownLinks: 'throw'`) fails on relative links from `docs/` to repository paths outside the `@docusaurus/plugin-content-docs` root (`../docs`), including **`INSTALL_IN_YOUR_PROJECT.md`** (repo root) and **`packages/frameworks/...`**.

---

## Progress

- **2026-04-19 — Wave 1 (policy lock):** **[IPW §1.5](../../../../../implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md)** locked **Strategy A** (GitHub blob URLs + optional stubs; rejects B/C as blanket approaches). Contributor rules landed in **[portal/README.md](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11)** and **[docusaurus-corpus-triage-fr-067.md](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md)** (**Failure classes** row).
- **2026-04-19 — Wave 2 (corpus):** BR-068 sweep — repaired Kanban/Epic/story/task relatives, **`fr-br`** / ICW / IPW targets, ADR traversal into **`project-management`**, MDX-safe placeholders (**`specification-and-planning-artifacts-policy`**), Strategy A URLs for paths outside the docs plugin (`docs/` tree, **`.cursorrules`**, **`user-docs`** tree). Verification: **`cd portal && npm run build`** exit **0**.

- **2026-04-19 — Wave 3 (verification — TD1–TD3):** **TD1:** `cd portal && npm run build` → **SUCCESS** (strict **`onBrokenLinks`** / **`onBrokenMarkdownLinks`** / **`onBrokenAnchors`** unchanged). **TD2:** Spot-checked Strategy A targets vs BR-068 failure classes — **`INSTALL_IN_YOUR_PROJECT.md`** (**`docs/documentation/user-docs/install-receipt-reference.md`**, **`ADR-003`**), **`packages/frameworks/**`** (**`docs/implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md`**, Kanban tasks already on GitHub **`blob`** URLs). **TD3:** No intentional internal corpus relaxations; regression covered by successive green strict builds since Wave 2.

- **2026-04-19 — Wave 4 (traceability):** **[BR-068](../../../fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)** **`Status: COMPLETE`** + **Resolution** + acceptance criteria checked; **[IPW](../../../../../implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md)** §4 success criteria satisfied; **`fr-br-uxr-board`** hygiene (row retired to **`fr-br-uxr-completed`**).

---

## Purpose (why this exists)

- **[E5:S09:T08](./T08-docusaurus-strict-broken-links-post-fr067.md)** and **[E5:S09:T10](./T10-docusaurus-strict-broken-anchors-post-t08.md)** correctly enforced **throw** semantics for links and anchors **within** the docs plugin corpus.
- A **remaining class** of failures is **not** “wrong path in GitHub view” but **paths that leave the docs plugin filesystem root** — Docusaurus MDX cannot resolve them as internal doc links.
- Without a **documented linking policy** (stubs, mirrors, `pathname://`, GitHub URLs, narrow `exclude`, additional `plugin-content-docs` instances, etc.), **`cd portal && npm run build`** stays red and the **publish pipeline is blocked**.

---

## Input

- **[IPW – spec, tests, implementation plan](../../../../../implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md)** (**E5:S09:T11** / **BR-068**)
- [BR-068](../../../fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)
- [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) — strict mode intent; T08/T10 follow-ups
- [`portal/docusaurus.config.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js)
- [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md) — failure classes (update when policy is chosen)

---

## Deliverable

- **`npm run build`** (from `portal/`) exits **0** with strict hooks unchanged **or** an explicit, documented adjustment to strictness tied to an approved strategy.
- **Contributor-facing rule** for links to repo root `INSTALL_*`, `packages/**`, and similar — recorded in `portal/README.md` and/or maintenance doc.
- PR-sized verification: representative pages that previously failed MDX (INSTALL pointers; framework paths from Kanban/FR docs) behave per policy.

---

## Acceptance Criteria

- [x] BR-068 acceptance criteria satisfied (cross-check list in report).
- [x] No unexplained regression in **internal** link/anchor strictness vs FR-067 policy (document any intentional relaxation).

---

## References

- [IPW-E5S09T11](../../../../../implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md)
- Docusaurus: [Markdown links](https://docusaurus.io/docs/markdown-features/links), [Multiple docs plugins](https://docusaurus.io/docs/docs-multi-instance/) (if considering split roots)
