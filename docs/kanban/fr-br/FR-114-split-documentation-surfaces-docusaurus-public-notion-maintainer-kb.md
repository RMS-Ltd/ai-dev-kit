---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-06T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-114: Split documentation surfaces — Docusaurus (adopter-public) + Notion (maintainer KB)

**Type:** Feature Request (FR)  
**ID:** FR-114  
**Submitted:** 2026-06-06  
**Submitted By:** User (docs/KB architecture discussion)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IMPLEMENTED  
**Version:** v0.5.8.4+2 (closure reconciliation; implementing tasks T03 @ v0.5.8.3+3 · T15 @ v0.5.9.15+2 · T04 @ v0.5.8.4+2)

**Implementing Tasks:**

- [E05:S09:T15](../epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md) — Docusaurus adopter-public publish allowlist and portal rescope
- [E05:S08:T03](../epics/epic-05/story-08-knowledge-base/T03-big-bang-notion-migration-maintainer-kb-fr114.md) — Big-bang Notion migration of maintainer corpora
- [E05:S08:T04](../epics/epic-05/story-08-knowledge-base/T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md) — Agent Notion-first authoring, bootstrap routing, documentation-surface ADR

**Supersedes / absorbs:** [E05:S08:T01](../epics/epic-05/story-08-knowledge-base/T01-investigate-persistent-knowledge-base-concept-and-ramificati.md) investigation scope (decision record captured here; T01 cancelled in favour of FR-114 delivery tasks).

---

## Summary

Rescope Docusaurus to **adopter-public** content only; **big-bang migrate** maintainer/developer corpora to **Notion** (`rmearssolutions@gmail.com` workspace — **clean slate**, no legacy Notion carryover); keep **internal standards and CHANGELOG on GitHub**; from **RC ≥ 1**, publish **curated release notes** (not raw changelog) on Docusaurus for **significant public releases**; agents **default to Notion** for new maintainer documentation.

---

## Problem Statement

The Docusaurus portal currently compiles nearly all of `docs/` (Kanban, implementation cycles, knowledge analysis, maintenance triage, etc.) with **strict** `onBrokenLinks` / `onBrokenAnchors` (**FR-067**). High-churn maintainer edits routinely threaten **GitHub Actions** production builds (**BR-068**, corpus triage waves, Dependabot churn).

**Root cause:** wrong **audience assignment** — Docusaurus is excellent technology applied to the **wrong corpus**. Maintainer operational docs are not adopter-facing publish material.

---

## Decision Record (user-confirmed 2026-06-06)

| # | Decision |
|---|----------|
| 1 | **Internal standards** (maintainer ADRs, governance deep-corpus) → read on **GitHub**; not mirrored on Docusaurus |
| 2 | **CHANGELOG** → GitHub only during **RC = 0**; from **RC ≥ 1**, **significant public release notes** on Docusaurus (narrative milestones — not raw Keep-a-Changelog dump) |
| 3 | **Notion home** → `rmearssolutions@gmail.com` workspace (`notion_hub_url`, `notion_kb_url` in `rw-config.yaml`) |
| 4 | **Migration strategy** → **big-bang** (single cutover, not phased lazy migration) |
| 5 | **Agent authoring** → **Notion-first** via MCP for maintainer docs; git **stubs** only when workflow/validators require repo paths |
| 6 | **Notion bootstrap** → **delete legacy Notion KB content**; fresh hub + Engineering KB pages only (do not merge atop prior migration) |

---

## Three-Surface Model

| Surface | Audience | Content |
|---------|----------|---------|
| **Docusaurus** (GitHub Pages) | Adopters, public | `guides/`, adopter `documentation/`, install/consumption reference; RC+ significant release notes |
| **Notion** (private Engineering KB) | Maintainers, agents | Investigations, analysis, records, persistent KB, working drafts |
| **Git** (repo SoT) | Workflows, releases | Kanban, FR/BR, changelogs, frameworks, IPPs, binding ADRs + thin stubs linking to Notion |

---

## Requirements

### Functional Requirements

- [x] **FR-114-F1:** Define explicit **Docusaurus allowlist** (adopter-public paths) and update `portal/docusaurus.config.js`, `sidebars.js`, `portal/README.md`. ✅ **v0.5.9.15+1** (E05:S09:T15)
- [x] **FR-114-F2:** **Exclude** from Docusaurus publish: `project-management/`, `implementation-cycles/`, `maintenance/`, `analysis/`, `knowledge/` (maintainer corpora), `journals/`, changelog archive bulk; internal `architecture/` ADRs (GitHub links from guides suffice). ✅ **v0.5.9.15+1** (E05:S09:T15)
- [x] **FR-114-F3:** **Big-bang migrate** maintainer corpora to a **fresh** Notion Engineering KB (`rmearssolutions@gmail.com`); wipe legacy Notion pages first; migration manifest (source path → Notion URL → optional git stub). ✅ **v0.5.8.3+3** (E05:S08:T03)
- [x] **FR-114-F4:** Update **agent bootstrap** (`AGENTS.md`, `docs/project-agent-manifest.json`) with Notion KB routes; default maintainer doc creation → Notion MCP. ✅ **v0.5.8.4+2** (E05:S08:T04)
- [x] **FR-114-F5:** Publish **ADR** documenting three-surface model and SoT rules per doc type. ✅ **v0.5.8.4+2** (E05:S08:T04)
- [x] **FR-114-F6:** Define **RC ≥ 1 significant release notes** policy and Docusaurus location (`portal/blog/` or `docs/release-notes/`); no raw `CHANGELOG.md` on portal. ✅ **v0.5.9.15+1** (E05:S09:T15)

### Non-Functional Requirements

- [x] **FR-114-NF1:** Docusaurus CI build no longer triggered by edits to excluded maintainer-only `docs/` trees (narrow path filters where practical). ✅ **v0.5.9.15+1** (E05:S09:T15)
- [x] **FR-114-NF2:** Adopter-facing content remains **fully public** on Docusaurus. ✅ **v0.5.9.15+1** (E05:S09:T15 allowlist; `npm run build` green @ 2026-06-07)
- [x] **FR-114-NF3:** Git stubs prevent broken README/guide links post-migration. ✅ **v0.5.8.3+3** (E05:S08:T03)

---

## Docusaurus Allowlist (starter — finalize in T15)

**Include:**

- `docs/guides/**`
- `docs/documentation/**` (adopter user + reference subset)
- `docs/documentation/docusaurus-portal-index.md`
- RC ≥ 1: `docs/release-notes/**` or `portal/blog/` release-note posts (significant milestones only)

**Exclude (publish off):**

- `docs/project-management/**`
- `docs/implementation-cycles/**`
- `docs/maintenance/**`
- `docs/analysis/**`
- `docs/knowledge/**`
- `docs/journals/**`
- `docs/architecture/**` (internal; link from guides to GitHub blob)
- `docs/changelog-and-release-notes/**` (RC=0; GitHub only)
- `docs/developer-tools/**` (maintainer; unless promoted adopter-facing pages identified in T15)

---

## Acceptance Criteria

- [x] Green `npm run build` on **allowlisted** corpus only. ✅ **v0.5.9.15+1** (verified 2026-06-07)
- [x] Maintainer corpora present in Notion with manifest; git stubs where links required. ✅ **v0.5.8.3+3** (218 manifest entries)
- [x] `AGENTS.md` routes maintainer doc work to `notion_kb_url`. ✅ **v0.5.8.4+2**
- [x] ADR published; `ultimate-canonical-kb-structure.md` updated (logical pillars ≠ single publish tree). ✅ **v0.5.8.4+2** ([ADR-024](../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md))
- [x] E05:S08:T01 marked superseded; FR-114 tasks on story checklists and `kboard.md`. ✅ **v0.5.8.4+2**

---

## References

- [portal/README.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md) — current FR-066 publish scope
- [E05:S08:T02](../epics/epic-05/story-08-knowledge-base/T02-notion-hub-and-kb-index.md) — Notion hub + KB index
- [FR-066](FR-066-docusaurus-canonical-docs-path-and-publish-scope.md) — prior publish scope (to be superseded in part)
- [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — lean adopter tree alignment
- [ultimate-canonical-kb-structure.md](../../architecture/standards-and-adrs/ultimate-canonical-kb-structure.md)
