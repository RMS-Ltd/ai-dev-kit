---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-121: Git-internal maintainer KB — reverse Notion migration (OSS documentation surfaces)

**Type:** Feature Request (FR)  
**ID:** FR-121  
**Submitted:** 2026-06-09  
**Submitted By:** User (docs/KB architecture discussion)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** ACCEPTED (intake versioned)  
**Version:** v0.5.8.5+1 (E05:S08:T05 RW `-k` kanban init @ 2026-06-09)

**Implementing Tasks:**

- [E05:S08:T05](../epics/epic-05/story-08-knowledge-base/T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) — Reverse Notion migration: restore full markdown at repo paths (wave 1)
- [E05:S08:T06](../epics/epic-05/story-08-knowledge-base/T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) — ADR-026 + agent git-maintainer authoring bootstrap (wave 2)
- [E05:S08:T07](../epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md) — Optional Obsidian editor profiles at greenfield install (wave 3)

**Supersedes (partial):** Maintainer **SoT** and **Notion-first authoring** from [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) / [ADR-024](../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md). **Retains:** Docusaurus adopter-public allowlist ([E05:S09:T15](../epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)), maintainer-tree **exclude** from portal CI ([BR-068](BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md)).

**Related:** [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) · [ADR-024](../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) · [ADR-017](../../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md) · [FR-103](FR-103-agent-bootstrap-and-task-routing.md) · [FR-080](FR-080-greenfield-installation-process.md) · [`fr114-notion-migration-manifest.json`](../../knowledge/fr114-notion-migration-manifest.json)

---

## Summary

Restore **git** as the authoritative surface for maintainer KB corpora (`docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`, related trees), reversing the Notion SoT introduced by FR-114 so open-source contributors and agents without Notion access have full KB visibility. Keep Docusaurus scoped to adopter-public content only. Replace Notion-first agent policy with git-path authoring. Offer **optional** Obsidian editor profiles at install (personal or team UX on top of git — not a second SoT).

---

## Problem Statement

[FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) correctly decoupled maintainer doc churn from Docusaurus CI via publish allowlists and exclude globs. It assigned maintainer corpora SoT to **private Notion**, with git **stubs** (`notion_sot: true`) pointing off-repo.

That creates an **open-source mismatch**:

| Stakeholder | Impact |
| ----------- | ------ |
| Contributors / fork adopters | Cannot read investigations, runbooks, or analysis linked from stubs |
| Agents without Notion MCP | Second-class maintainer KB access; bootstrap routes to unavailable surface |
| Forensic traceability | PRs and task docs reference content that does not resolve in-repo |
| Project ethos | "Open code, closed operations knowledge" conflicts with ADK as an adoptable framework |

**Operator decisions (2026-06-09):**

| # | Decision |
|---|----------|
| 1 | Maintainer KB is **public-in-repo** (OSS stance) |
| 2 | **No** residual private tier — full reverse migration; Notion not required for ADK maintainer SoT |
| 3 | Obsidian is **editor profile only** (optional UX); at the moment personal use; team scaffold deferrable to install choice |
| 4 | Agents author maintainer docs at **repo paths** (replace `P-NOTION-FIRST`) |

The Docusaurus CI win from FR-114 does **not** require Notion — exclude globs and path-filtered CI are sufficient.

---

## Target Model (two publish surfaces, one git authority)

| Surface | Audience | Content | Publish |
| ------- | -------- | ------- | ------- |
| **Git** (repo SoT) | Maintainers, contributors, agents | Maintainer KB, kanban, FR/BR, IPP, binding ADRs, adopter source docs | GitHub render; not all trees on Docusaurus |
| **Docusaurus** | Adopters, public | Allowlisted `docs/guides/`, adopter `docs/documentation/`; RC ≥ 1 curated release notes | GitHub Pages |

**Obsidian** (optional): human editor profile on the git vault — `none` \| `obsidian-personal` \| `obsidian-team`. Never authoritative; never replaces git SoT.

**Optional enterprise escape hatch (non-default):** `documentation_surfaces.external_kb.provider: notion` for adopters who accept private KB — documented as non-OSS; not used by ai-dev-kit after migration.

---

## Requirements

### Functional Requirements

- [ ] **FR-121-F1:** Export Notion pages listed in [`fr114-notion-migration-manifest.json`](../../knowledge/fr114-notion-migration-manifest.json) and restore **full markdown** at original `source_path` values; remove `notion_sot: true` stub indirection.
- [ ] **FR-121-F2:** Publish **ADR-026** superseding ADR-024 maintainer/Notion SoT rules; retain Docusaurus allowlist and git workflow SoT matrix from ADR-024 where still valid.
- [ ] **FR-121-F3:** Replace **`P-NOTION-FIRST`** with **`P-GIT-MAINTAINER`** in `AGENTS.md`, `docs/project-agent-manifest.json`, and related bootstrap docs — `maintainer-kb` track loads repo paths, not Notion MCP.
- [ ] **FR-121-F4:** Add `documentation_surfaces` and `maintainer_editor_profile` keys to `rw-config.yaml` schema (documented); default `maintainer_kb.sot: git`.
- [ ] **FR-121-F5:** Greenfield / RW installer optional prompt for Obsidian profiles (`none` default; `obsidian-personal`; `obsidian-team` scaffolds template only).
- [ ] **FR-121-F6:** Update `docs/knowledge/README.md`, migration manifest (reverse pass or successor manifest), and deprecate Notion-first scripts policy where superseded.
- [ ] **FR-121-F7:** Cross-link FR-114 and ADR-024 with partial-supersession banners; no silent contradiction in agent routing.

### Non-Functional Requirements

- [ ] **FR-121-NF1:** Docusaurus production build remains green when maintainer trees change (exclude globs unchanged).
- [ ] **FR-121-NF2:** Restored markdown passes project lifecycle frontmatter conventions where applicable.
- [ ] **FR-121-NF3:** Contributor without Obsidian or Notion can read and PR-edit full maintainer KB.
- [ ] **FR-121-NF4:** Team Obsidian profile commits only stable `.obsidian/` config; workspace state gitignored.

---

## Scope Analysis

**Problem Domain:** Documentation surfaces / maintainer KB / OSS alignment  
**Affected Areas:**

- [x] Documentation
- [x] Agent bootstrap (`AGENTS.md`, manifest)
- [x] Greenfield install / `rw-config.yaml`
- [ ] Backend/API
- [ ] Frontend/UI (Docusaurus config — verify only)

**Out of scope (this FR):**

- Re-publishing maintainer corpora on Docusaurus
- Deleting operator Notion workspace (archive/read-only acceptable post-migration)
- Mandatory Obsidian for all maintainers

---

## Delivery Waves

| Wave | Task | Focus |
| ---- | ---- | ----- |
| 1 | E05:S08:T05 | Reverse migration: Notion → git full text |
| 2 | E05:S08:T06 | ADR-026, agent bootstrap, `rw-config` schema docs |
| 3 | E05:S08:T07 | Optional Obsidian install profiles (adopter choice) |

**Suggested sequence:** IPW per wave → IDW → RW. T06 may start after T05 manifest-complete subset if IPW scopes dependency.

---

## Acceptance Criteria (program)

- [ ] Zero `notion_sot: true` stubs remain as SoT for migrated entries (full text in git or explicit exclusion list with rationale).
- [ ] `AGENTS.md` / manifest: no Notion-first default for maintainer doc creation.
- [ ] ADR-026 accepted; ADR-024 annotated as partially superseded.
- [ ] Docusaurus `npm run build` green after representative maintainer-tree edits.
- [ ] Install docs describe `maintainer_editor_profile` options; default path requires neither Notion nor Obsidian.

---

## References

- Discussion: documentation model OSS alignment (2026-06-09)
- Reverse migration inventory: [`docs/knowledge/fr114-notion-migration-manifest.json`](../../knowledge/fr114-notion-migration-manifest.json) (`entry_count`: 218)
- Prior decision: [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
