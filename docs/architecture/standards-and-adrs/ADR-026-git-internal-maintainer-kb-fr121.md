---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-026: Git-internal maintainer KB — two publish surfaces (FR-121)

### Version 0.0.1

| Version | Change |
| ------- | ------ |
| 0.0.1 | Initial decision — git maintainer SoT + Docusaurus adopter-public; supersedes ADR-024 maintainer/Notion policy. |

**Status:** Accepted  
**Date:** 2026-06-09  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E05:S08:T06](../../kanban/epics/epic-05/story-08-knowledge-base/T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)  
**Planning package:** [IPP-E05S08T06](../../implementation-cycles/IPP-E05S08T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)  
**Related:** [FR-121](../../kanban/fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md), [ADR-024](ADR-024-documentation-surfaces-three-surface-model-fr114.md) (partial supersession), [ADR-012](ADR-012-agent-bootstrap-and-task-routing.md), [E05:S08:T05](../../kanban/epics/epic-05/story-08-knowledge-base/T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md), [E05:S08:T07](../../kanban/epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)

---

## Context

[FR-114](../../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) correctly separated Docusaurus (adopter-public) from maintainer corpora and migrated maintainer content to Notion ([E05:S08:T03](../../kanban/epics/epic-05/story-08-knowledge-base/T03-big-bang-notion-migration-maintainer-kb-fr114.md)). [ADR-024](ADR-024-documentation-surfaces-three-surface-model-fr114.md) bound **Notion-first** maintainer authoring ([E05:S08:T04](../../kanban/epics/epic-05/story-08-knowledge-base/T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)).

[FR-121](../../kanban/fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) reverses maintainer SoT to **git** for the public OSS repository: wave 1 restored full markdown from pre-stub commits ([E05:S08:T05](../../kanban/epics/epic-05/story-08-knowledge-base/T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) @ v0.5.8.5+2). Wave 2 (this ADR) publishes the binding policy and rewrites agent bootstrap.

Alternatives considered:

| Option | Pros | Cons |
| ------ | ---- | ---- |
| **Two publish surfaces (chosen)** | OSS contributors edit in-repo; Docusaurus CI stable; no Notion MCP required | No private maintainer tier in public repo |
| Retain Notion SoT | Private maintainer workspace | Blocks OSS contribution; dual navigation |
| Docusaurus for maintainer docs | Single public site | Wrong audience; CI coupling |

---

## Decision

Adopt a **two publish-surface documentation model** for ai-dev-kit. Maintainer corpora are authoritative in **git**. Docusaurus publishes only adopter-public allowlisted paths. Notion and Obsidian are optional, never SoT.

### 1. Two publish surfaces

| Surface | Audience | Primary content |
| ------- | -------- | --------------- |
| **Git** (repo SoT) | Maintainers, agents, OSS contributors | Maintainer KB (`docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`), kanban, FR/BR/UXR, changelogs, frameworks, IPP/ICW, **binding ADRs**, adopter source docs |
| **Docusaurus** (GitHub Pages) | Adopters, public | `docs/guides/**`, adopter `docs/documentation/**`, install/consumption reference; RC ≥ 1 significant release notes ([E05:S09:T15](../../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)) |

**Optional (not SoT):**

| Tool | Role |
| ---- | ---- |
| **Notion** | Archive / enterprise external KB (`rw-config.yaml` URLs) |
| **Obsidian** | Editor UX on git vault only — install profiles in [E05:S08:T07](../../kanban/epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md) |

Configuration: `rw-config.yaml` → `documentation_surfaces`, `maintainer_editor_profile`.

### 2. SoT matrix (by doc type)

| Doc type | Authoritative surface | Notes |
| -------- | -------------------- | ----- |
| Maintainer investigation / analysis / records | **Git** | `docs/knowledge/`, `docs/maintenance/`, `docs/analysis/` |
| Adopter guides / user docs | **Docusaurus** (allowlisted paths) | Source in `docs/guides/`, `docs/documentation/` |
| Kanban, FR/BR/UXR, task docs | **Git** | Full text |
| IPP / ICW planning packages | **Git** | Full text ([FR-083](../../kanban/fbu/FR-083-global-ipw-gated-implementation-contract.md)) |
| Binding ADRs (workflow/kanban/release) | **Git** | Full text — never stubbed |
| Non-binding architecture reference | **Git** | Full text in OSS repo |
| CHANGELOG (RC = 0) | **Git** | GitHub only |
| Significant release notes (RC ≥ 1) | **Docusaurus** | Curated posts — not raw CHANGELOG |

Historical FR-114 git stubs (`notion_sot: true`) are **deprecated** after [E05:S08:T05](../../kanban/epics/epic-05/story-08-knowledge-base/T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) restore. Do not create new stubs.

### 3. Agent authoring (git-maintainer)

When the **`maintainer-kb`** track matches ([`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md)):

1. **Default:** create and edit maintainer documentation at **repo paths** under `docs/knowledge/`, `docs/maintenance/`, and `docs/analysis/`.
2. **Do not** require Notion MCP for maintainer KB work in the public OSS repository.
3. **Do not** publish maintainer corpora on Docusaurus (allowlist unchanged).

Binding rule: **P-GIT-MAINTAINER** (manifest `protocol[]`).

### 4. Docusaurus (unchanged from FR-114)

Adopter-public allowlist only. Exclude maintainer trees from portal CI. Policy detail: [ADR-024](ADR-024-documentation-surfaces-three-surface-model-fr114.md) §§1, 6–7 (retained sections), [E05:S09:T15](../../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md).

### 5. Obsidian (editor profile only)

Obsidian may improve maintainer editing UX as a **local editor** on the git vault. It is never authoritative. Greenfield / RW install sets `maintainer_editor_profile` (`none` default; `obsidian-personal`; `obsidian-team`). Operator guide: [`docs/maintainer/OBSIDIAN.md`](../../maintainer/OBSIDIAN.md). Implemented in [E05:S08:T07](../../kanban/epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md).

### 6. Notion (optional archive)

`notion_hub_url` and `notion_kb_url` in `rw-config.yaml` may remain as optional archive pointers. Notion is not cold-start SoT. Enterprise adopters may configure `documentation_surfaces.external_kb.provider: notion` — not used by ai-dev-kit OSS.

### 7. Bootstrap integration

- Cold start: [`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md) **`maintainer-kb`** track → load [`docs/knowledge/README.md`](../../knowledge/README.md), this ADR, `rw-config.yaml`.
- Machine mirror: `docs/project-agent-manifest.json` → `taskRouting[]`, `documentationSurfaces`, `canon[]` entry `C-ADR-026`.
- Extends [ADR-012](ADR-012-agent-bootstrap-and-task-routing.md) Layer 2 triage.

### 8. `rw-config.yaml` schema

```yaml
documentation_surfaces:
  maintainer_kb:
    sot: git  # git | external (non-default)
  adopter_public:
    sot: docusaurus
    allowlist_ref: portal/docusaurus.config.js
  external_kb:
    provider: none  # none | notion
maintainer_editor_profile: none  # none | obsidian-personal | obsidian-team
```

---

## Consequences

### Positive

- OSS contributors edit maintainer docs without Notion access.
- Single navigation path for maintainer corpora in the public repo.
- Docusaurus CI remains decoupled from maintainer churn.

### Negative

- No private maintainer tier in the public repository (enterprise escape hatch via `external_kb` config only).

### Neutral

- Partially supersedes [ADR-024](ADR-024-documentation-surfaces-three-surface-model-fr114.md) maintainer/Notion sections and **P-NOTION-FIRST**.
- Partially supersedes [FR-114](../../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) maintainer SoT (Docusaurus split retained).

---

## Compliance

- New maintainer docs: **git paths** by default; Notion only when operator explicitly routes to external KB.
- Binding ADRs: full text in git.
- Docusaurus: allowlist only ([ADR-017](ADR-017-docusaurus-ci-build-deploy-topology.md), T15).
