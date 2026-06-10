---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T03 — Ad-hoc Documentation Maintenance (Perpetual)

**Task ID:** E02:S16:T03
**Historical Anchor:** E02:S16:T05, E07:S01:T05, E02:S16:T07 (perpetual doc lane merged into T03 per [FR-125](../../../fr-br/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md), 2026-06-10)
**Status:** IN PROGRESS
**Priority:** HIGH
**Estimated Effort:** Medium (per RW wave)
**Created:** 2026-04-22
**Last updated:** 2026-06-10 (v0.2.16.3+7 — FR-125 released; T07 merged into T03)
**Version Anchor:** v0.2.16.3+7
**Code:** E02S16T03
**Task Type:** Perpetual Maintenance

**Upstream:** [FR-125 — Consolidate T03/T07 doc lanes](../../../fr-br/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md) · [FR-058 — Markdown maintenance (historical)](../../../fr-br/FR-058-markdown-maintenance-workflow.md) · [FR-088 — Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Problem statement

Documentation drifts across the repository — install pins, integrity guidance, workflow tables, ADR copy, guides, markdown lint, link depth, and cross-surface consistency — independently of release version banners and kanban synchronization. A **single** perpetual attribution lane is required so operators do not split work across markdown-only vs content-only tasks.

---

## Deliverable

- Canonical perpetual anchor for **all** ad-hoc documentation maintenance in git (format + content).
- Explicit routing boundaries vs RW Step 5, kanban sync, workflow behavior, and repo infrastructure lanes.
- Cross-linked story/task wiring for consistent RW attribution.

---

## Scope

### In scope

- Ad-hoc **content** and **format** updates to documentation in git (any surface), including but not limited to:
  - Root [`README.md`](../../../../../../README.md) and [`INSTALL_IN_YOUR_PROJECT.md`](../../../../../../INSTALL_IN_YOUR_PROJECT.md)
  - [`scripts/sync_greenfield_install.py`](../../../../../../scripts/sync_greenfield_install.py) README template → `greenfield-install/README.md`
  - ADRs, guides, package READMEs, workflow agent-execution docs, kanban narrative where doc-only
  - Git stubs and adopter-public paths under `docs/` per [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md)
- Markdown formatting and lint hygiene; wording clarity; structure consistency; section normalization
- Internal link hygiene and metadata/frontmatter cleanup (all doc formats, not `.md`-only)
- Release pin alignment (SemVer core, tarball names, GHCR tags)
- SHA-256 / integrity verification steps and inline hash tables for downloadable assets ([FR-062-NF1](../../../fr-br/FR-062-github-release-installation-experience.md))
- Workflow trigger tables, quick-start accuracy, and cross-doc consistency
- Docs-only RW waves (`RW -d`) when no finite delivery task owns the change

### Out of scope

- README **version banner** on release (RW Step 5 + [`.cursor/skills/readme-update/`](../../../../../../.cursor/skills/readme-update/SKILL.md))
- Primary Notion maintainer corpora ([ADR-024](../../../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) — Notion MCP first; git stubs only when criteria met)
- Kanban synchronization (`E02:S16:T02`)
- Workflow / script behavior changes (`E02:S16:T01`, `E02:S16:T04`)
- Repository infrastructure plumbing (`E02:S16:T04`)
- Finite FR/BR/UXR delivery with dedicated tasks (prefer owning task; use T03 when no task exists or for cross-cutting doc-only hygiene)

---

## Examples (representative, not exhaustive)

- Refresh install pin across README / INSTALL / greenfield template after a release
- Add SHA-256 verify commands + inline hash table for downloadable assets
- Add **IDW** (or other new triggers) to README workflow table
- Correct stale cross-references or copy-paste examples in ADRs and guides
- Wave 2 link-depth hygiene across kanban task docs and FR/BR surfaces
- Align portal-facing doc links after path moves (when doc-only, no E05 feature scope)

---

## Acceptance criteria

- [x] **AC1:** Task naming and scope communicate unified ad-hoc documentation maintenance (not markdown-only).
- [x] **AC2:** Story 016 checklist and `kboard.md` Ongoing band list T03 as the sole doc-maintenance perpetual lane.
- [x] **AC3:** Scope boundaries with `E02:S16:T01`, `E02:S16:T02`, `E02:S16:T04`, and RW Step 5 are documented and unambiguous.
- [ ] **AC4:** Each RW wave under T03 states which doc surfaces were touched and why.
- [x] **AC5:** T07 perpetual lane superseded; redirect stub points here ([FR-125](../../../fr-br/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md)).

---

## Progress

**Wave 2 (2026-06-05, prior T03):** Corrected relative markdown link depth across kanban task docs, implementation-cycle IPPs, ADR-020 related-links, and FR/BR surfaces. Verification: `pytest tests/test_portal_br068_monorepo_links.py` — 2 passed.

**2026-06-09 (v0.2.16.7+2, prior T07):** Lane filed; README SHA-256 integrity section, INSTALL verify flow, greenfield template, ADR-021 pins attributed (`--art`).

**2026-06-10 (v0.2.16.3+7):** Merged E02:S16:T07 into E02:S16:T03; adopted T07 display name; removed markdown-only restriction; released via RW `--art`.

---

## References

- [FR-125 — Consolidate T03/T07](../../../fr-br/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md)
- [FR-058 — Markdown maintenance (historical)](../../../fr-br/FR-058-markdown-maintenance-workflow.md)
- [FR-062 — GitHub release installation experience](../../../fr-br/FR-062-github-release-installation-experience.md)
- [E02:S16:T01 — Workflow maintenance (Perpetual)](T01-workflow-maintenance-perpetual.md)
- [E02:S16:T02 — Ad-hoc Kanban synchronization and hygiene (Perpetual)](T02-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
- [E02:S16:T04 — Ad-hoc Repository Infrastructure Maintenance (Perpetual)](T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md)
- [SUPERSEDED — E02:S16:T07 perpetual lane](T07-ad-hoc-documentation-maintenance-perpetual.md)
- [Canonical policy IPP: perpetual ongoing tasks story](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)

---
