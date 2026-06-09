---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T07 — Ad-hoc Documentation Maintenance (Perpetual)

**Task ID:** E02:S16:T07
**Historical Anchor:** E02:S16:T07 (finite UKW extension → [E04:S14:T06](../../story-14-kanban-framework-maintenance/T06-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md); T07 ID reclaimed for this perpetual lane 2026-06-09)
**Status:** IN PROGRESS
**Priority:** MEDIUM
**Estimated Effort:** Small (per RW wave)
**Created:** 2026-06-09
**Last updated:** 2026-06-09 (v0.2.16.7+2 — T07 lane first RW; README/INSTALL integrity `--art`)
**Version Anchor:** v0.2.16.7+2
**Code:** E02S16T07
**Task Type:** Perpetual Maintenance

**Upstream:** [FR-088 — Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Problem statement

Documentation content drifts across the repository — install pins, integrity guidance, workflow tables, ADR copy-paste flows, guides, and cross-surface consistency — independently of release version banners and markdown lint passes. Ad-hoc content maintenance needs a dedicated perpetual attribution lane, distinct from `E02:S16:T03` (format/link lint) and RW Step 5 (README version line only).

---

## Scope

### In scope

- Ad-hoc **content** updates to documentation in git (any surface), including but not limited to:
  - Root [`README.md`](../../../../../../README.md) and [`INSTALL_IN_YOUR_PROJECT.md`](../../../../../../INSTALL_IN_YOUR_PROJECT.md)
  - [`scripts/sync_greenfield_install.py`](../../../../../../scripts/sync_greenfield_install.py) README template → `greenfield-install/README.md`
  - ADRs, guides, package READMEs, workflow agent-execution docs, kanban narrative where doc-only
  - Git stubs and adopter-public paths under `docs/` per [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md)
- Release pin alignment (SemVer core, tarball names, GHCR tags)
- SHA-256 / integrity verification steps and inline hash tables for downloadable assets ([FR-062-NF1](../../../fr-br/FR-062-github-release-installation-experience.md))
- Workflow trigger tables, quick-start accuracy, and cross-doc consistency
- Docs-only RW waves (`RW -d`) when no finite delivery task owns the change

### Out of scope

- README **version banner** on release (RW Step 5 + [`.cursor/skills/readme-update/`](../../../../../../.cursor/skills/readme-update/SKILL.md))
- Markdown formatting, link-depth lint, frontmatter hygiene (`E02:S16:T03`)
- Primary Notion maintainer corpora ([ADR-024](../../../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) — Notion MCP first; git stubs only when criteria met)
- Kanban synchronization (`E02:S16:T02`)
- Workflow / script behavior changes (`E02:S16:T01`, `E02:S16:T04`)
- Finite FR/BR/UXR delivery with dedicated tasks (prefer owning task; use T07 when no task exists or for cross-cutting doc-only hygiene)

---

## Examples (representative, not exhaustive)

- Refresh install pin across README / INSTALL / greenfield template after a release
- Add SHA-256 verify commands + inline hash table for downloadable assets
- Add **IDW** (or other new triggers) to README workflow table
- Correct stale cross-references or copy-paste examples in ADRs and guides
- Align portal-facing doc links after path moves (when doc-only, no E05 feature scope)

---

## Acceptance criteria

- [ ] **AC1:** Story 016 checklist and `kboard.md` Ongoing band list T07 as an active perpetual lane.
- [x] **AC2:** Scope boundaries with `E02:S16:T03` and RW Step 5 are documented and unambiguous.
- [ ] **AC3:** Each RW wave under T07 states which doc surfaces were touched and why.
- [x] **AC4:** Downloadable-asset docs reference matching `.sha256` sidecars (or GHCR digest pin guidance) where applicable ([FR-062-NF1](../../../fr-br/FR-062-github-release-installation-experience.md)).

---

## Progress

**2026-06-09 (v0.2.16.7+2):** First RW — lane filed; README SHA-256 integrity section, INSTALL verify flow, greenfield template, ADR-021 pins attributed (`--art` from prior doc wave). Kanban wired (story, kboard, T03/T04 boundaries).

---

## Related

- [E02:S16:T03 — Markdown Documentation Maintenance (Perpetual)](T03-markdown-documentation-maintenance-perpetual.md) — lint / link / format hygiene
- [E02:S16:T04 — Ad-hoc Repository Infrastructure Maintenance (Perpetual)](T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md) — repo plumbing
- [FR-062 — GitHub release installation experience](../../../fr-br/FR-062-github-release-installation-experience.md)
- [FR-110 — Lean adopter distribution footprint](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- Historical redirect: [T07 UKW extension stub](T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) → E04:S14:T06

---
