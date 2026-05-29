---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 10: Strict broken-anchor checking (post–E5:S09:T08)

**Task ID:** E5:S09:T10  
**Status:** ✅ COMPLETE  
**Priority:** LOW  
**Estimated Effort:** Medium (corpus sweep; anchor slug alignment across MDX)  
**Created:** 2026-04-01  
**Last updated:** 2026-04-01 — **`v0.5.9.10+2`** implementation (**RW E5:S09:T10**); **FR-067 FU-3** closed  
**Code:** E5S09T10  
**Version anchor:** ✅ COMPLETE (v0.5.9.10+2)

---

## Task ID

**Full Task ID:** `E5:S09:T10`

---

## Scope

- Align published docs with **zero false `#heading` / cross-doc anchor** references (or justified exceptions).
- Make **CI / `npm run build`** fail when a new broken anchor is introduced (**strict** mode), mirroring T08 for hrefs.

**Origin:** **[E5:S09:T08](./T08-docusaurus-strict-broken-links-post-fr067.md)** enabled **`onBrokenLinks` / `onBrokenMarkdownLinks` → `throw`**. Docusaurus still **warned** on **broken in-page anchors** (`#fragment`) until **`onBrokenAnchors`** was set to **`throw`** (**FR-067 FU-3**).

---

## Input

- [T08 – Strict broken links](./T08-docusaurus-strict-broken-links-post-fr067.md) (completed)
- [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) — **FU-3**
- [docs/maintenance/docusaurus-corpus-triage-fr-067.md](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md)
- Docusaurus: [`onBrokenAnchors`](https://docusaurus.io/docs/docusaurus-core#onBrokenAnchors)

---

## Inventory (resolved for **`v0.5.9.10+2`**)

Build verification: `cd portal && npm run build` exits **0** with `onBrokenAnchors: 'throw'`.

| Area | Change |
|------|--------|
| `workflow-flaws-reference-guide` | Explicit `{#wf-00x-…}` IDs on **WF-001…WF-004** section headings |
| Framework dependency guides | Stable IDs for template/selective/monorepo/migration/gradual sections; **Uninstall Issues** in troubleshooting; **`## Uninstalling frameworks`** anchor in installation guide |
| `building-persistent-knowledge` | SoP heading as `##` + `{#standard-operating-procedure-sop-…}` |
| UC-D-* / **BR-002** → Story-001 | `{#e2s01t06--fix-changelog-validator-ordering-bug--reopened}` on T06 heading |
| `kanban-completed` → Epic stories | Explicit task heading IDs on E4/E8/E10/E11 story docs |
| This task doc | Replaced invalid relative link to `tests/` (out of publish tree) with repo-path text |

---

## Deliverable

1. **`portal/docusaurus.config.js`:** `onBrokenAnchors: 'throw'` after corpus is clean.
2. **Corpus:** Headings / links updated so anchors resolve (Docusaurus slug rules; explicit `{#ids}` where needed).
3. **`portal/README.md`:** Anchor policy documented next to link policy.
4. **Tests:** `tests/test_portal_fr067_build_triage.py` — `test_fr067_s5_anchor_policy_strict`.
5. **Traceability:** **FR-067 FU-3** closed with **`v0.5.9.10+2`**; maintenance triage, Story/Epic/kanban updated.

---

## Acceptance Criteria

- [x] `npm run build` exits **0** with **`onBrokenAnchors: 'throw'`**.
- [x] **FR-067 FU-3** marked done with pointer to this task and release version.
- [x] Maintenance triage / portal README updated for anchor policy.

---

## Related

- **E5:S09:T08** — strict **link** checking.
- **FR-058** — markdown hygiene workflow.
