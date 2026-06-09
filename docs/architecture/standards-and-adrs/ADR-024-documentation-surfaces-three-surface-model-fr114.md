---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-024: Documentation surfaces — three-surface model (FR-114)

> **Partially superseded:** Maintainer / Notion SoT and **P-NOTION-FIRST** superseded by [ADR-026 — Git-internal maintainer KB](ADR-026-git-internal-maintainer-kb-fr121.md) ([FR-121](../../kanban/fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md), [E05:S08:T06](../../kanban/epics/epic-05/story-08-knowledge-base/T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)). **Retained:** Docusaurus adopter-public allowlist, binding ADR policy, RC ≥ 1 release notes, historical git-stub template (deprecated post FR-121 wave 1).

### Version 0.0.2

| Version | Change |
| ------- | ------ |
| 0.0.2 | Partial supersession banner — maintainer SoT → ADR-026 / FR-121. |
| 0.0.1 | Initial decision — Docusaurus (adopter-public), Notion (maintainer KB), git (workflow SoT). |

**Status:** Accepted  
**Date:** 2026-06-07  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E05:S08:T04](../../kanban/epics/epic-05/story-08-knowledge-base/T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)  
**Planning package:** [IPP-E05S08T04](../../implementation-cycles/IPP-E05S08T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)  
**Related:** [FR-114](../../kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md), [ADR-012](ADR-012-agent-bootstrap-and-task-routing.md), [ADR-017](ADR-017-docusaurus-ci-build-deploy-topology.md), [E05:S08:T03](../../kanban/epics/epic-05/story-08-knowledge-base/T03-big-bang-notion-migration-maintainer-kb-fr114.md), [E05:S09:T15](../../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)

---

## Context

Maintainer operational documentation (investigations, analysis, records, maintenance runbooks) was incorrectly coupled to the Docusaurus production build, causing CI fragility ([FR-114](../../kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md), **BR-068**). T03 migrated maintainer corpora to Notion; T15 rescoped Docusaurus to an adopter-public allowlist. Agents still lacked a **binding policy** for where new maintainer docs are authored and which surface is authoritative per doc type.

Alternatives considered:

| Option | Pros | Cons |
| ------ | ---- | ---- |
| **Three surfaces (chosen)** | Clear audience assignment; stable CI; Notion for high-churn maintainer work | Requires Notion MCP for authoring |
| Git-only maintainer docs | Single repo navigation | Perpetuates Docusaurus/CI coupling |
| Docusaurus for all docs | One public site | Wrong audience; build breaks on maintainer edits |

---

## Decision

Adopt a **three-surface documentation model**. Each doc type has exactly one authoritative surface unless a git stub is required for link/validator continuity.

### 1. Three surfaces

| Surface | Audience | Primary content |
| ------- | -------- | --------------- |
| **Docusaurus** (GitHub Pages) | Adopters, public | `docs/guides/**`, adopter `docs/documentation/**`, install/consumption reference; RC ≥ 1 significant release notes ([E05:S09:T15](../../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)) |
| **Notion** (Engineering KB) | Maintainers, agents | Investigations, analysis, records, persistent KB, working drafts, non-binding architecture reference |
| **Git** (repo SoT) | Workflows, releases | Kanban, FR/BR/UXR, changelogs, frameworks, IPP/ICW, **binding ADRs**, thin stubs linking to Notion |

Notion URLs: `rw-config.yaml` → `notion_hub_url`, `notion_kb_url`.

### 2. SoT matrix (by doc type)

| Doc type | Authoritative surface | Git role |
| -------- | -------------------- | -------- |
| Adopter guides / user docs | Docusaurus (allowlisted paths) | Source in `docs/guides/`, `docs/documentation/` |
| Maintainer investigation / analysis / records | **Notion** | Optional stub if linked from allowlisted corpus |
| Kanban, FR/BR/UXR, task docs | **Git** | Full text |
| IPP / ICW planning packages | **Git** | Full text ([FR-083](../../kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md)) |
| Binding ADRs (workflow/kanban/release) | **Git** | Full text — never stubbed |
| Non-binding architecture reference | **Notion** | Stub in `docs/architecture/` when pre-existing path required |
| CHANGELOG (RC = 0) | **Git** | GitHub only |
| Significant release notes (RC ≥ 1) | **Docusaurus** | Curated posts under `portal/blog/` or `docs/release-notes/` — not raw CHANGELOG |

**Logical pillars ≠ single publish tree:** KB pillars (Decisions, Reference, Investigations, Records) live in Notion IA; Docusaurus and git each carry only the subset required for their audience ([ultimate-canonical-kb-structure](ultimate-canonical-kb-structure.md) Notion page).

### 3. Agent authoring (Notion-first)

When the **`maintainer-kb`** track matches ([`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md)):

1. **Default:** create and edit maintainer documentation in **Notion** via MCP (`notion_kb_url`).
2. **Do not** create new full-text maintainer corpora under `docs/knowledge/`, `docs/analysis/`, `docs/maintenance/`, or `docs/journals/`.
3. **Git stub** only when one of the git-stub criteria below applies.

Binding rule: **P-NOTION-FIRST** (manifest `protocol[]`).

### 4. Git-stub criteria

Create or retain a git markdown stub when the path is required for:

- Pre-commit / CI validators referencing repo paths
- RW / UKW / IPW workflow anchors
- Adopter-facing links from allowlisted Docusaurus corpus
- README or cheatsheet deep links that must resolve in-repo
- Binding ADRs (full text, not stubs)

Migration manifest: [`docs/knowledge/fr114-notion-migration-manifest.json`](../../knowledge/fr114-notion-migration-manifest.json). Apply stubs via [`scripts/apply_notion_stubs.py`](../../../scripts/apply_notion_stubs.py).

### 5. Canonical git stub template

```markdown
---
lifecycle: evergreen
created_at: {ISO8601}
housekeeping_policy: keep
notion_sot: true
---

# {Title}

**SoT:** Notion Engineering KB — [{Title}]({notion_page_url})

> Migrated from `docs/{relative_path}` per [FR-114]({fr114_link}). Full content lives in Notion.
```

Required frontmatter keys: `lifecycle`, `created_at`, `housekeeping_policy`, `notion_sot: true`.

### 6. Bootstrap integration

- Cold start: [`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md) **`maintainer-kb`** track → load `rw-config.yaml`, this ADR, [`docs/knowledge/README.md`](../../knowledge/README.md).
- Machine mirror: `docs/project-agent-manifest.json` → `taskRouting[]`, `documentationSurfaces`, `canon[]` entry `C-ADR-024`.
- Extends [ADR-012](ADR-012-agent-bootstrap-and-task-routing.md) Layer 2 triage; does not replace workflow SoT in `.cursorrules`.

### 7. Release notes (RC ≥ 1)

From RC ≥ 1, publish **curated significant release notes** on Docusaurus only — not raw `CHANGELOG.md`. Policy and scaffold: [E05:S09:T15](../../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md), `portal/README.md`.

---

## Consequences

### Positive

- Maintainer doc churn no longer gates Docusaurus CI.
- Agents have deterministic Notion-first routing for KB work.
- Per-doc-type SoT is auditable.

### Negative

- Notion MCP required for maintainer authoring sessions.
- Dual navigation (Notion + git stubs) until operators learn routing table.

### Neutral

- Partially supersedes publish-scope assumptions in [FR-066](../../kanban/fr-br/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md) for maintainer trees.

---

## Compliance

- New maintainer docs: Notion-first unless git-stub criteria apply.
- Binding ADRs: full text in git; listed in migration manifest `binding_adrs_retained`.
- Docusaurus: allowlist only ([ADR-017](ADR-017-docusaurus-ci-build-deploy-topology.md), T15).
