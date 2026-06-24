---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Comprehensive repository file-level audit within audited directories

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-23  
**Submitted By:** User (operator)  
**Priority:** HIGH  
**Status:** IMPLEMENTED  
**Code:** UXR-034  
**Last updated:** 2026-06-24 (v0.7.1.14+1 — RW E07:S01:T14 --art)  
**Implementing Task:** [E07:S01:T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md)

---

## Summary

Plan and execute a **file-level repository audit** scoped to directories validated by [UXR-033](UXR-033-comprehensive-repository-directory-structure-audit.md) — inventory every file within the audited directory structure, classify each by purpose vs legacy orphan status, and recommend whether its current path is optimal — producing a maintainer-approved per-file valuation matrix before any moves, merges, archives, or deletions.

---

## Research Objective

Answer three questions for files **inside** the UXR-033 audited directory tree:

1. **What is the complete file inventory within each audited directory?** (canonical listing, not anecdotal or root-only)
2. **Does each file still have a clear purpose, or is it a legacy/orphan artifact?**
3. **Is each file in the optimal location** given directory purpose (from UXR-033), framework SoT vs dev-kit specialisation, documentation surfaces, install mirrors, and cross-reference evidence?

This UXR is **investigation and planning only**. Execution of file moves, merges, archives, or deletions remains gated behind IPW and explicit implementation authorization on follow-on tasks.

---

## Contextual relationship to UXR-033

| Layer | UXR | Scope | Task |
| ----- | --- | ----- | ---- |
| **Directory** | [UXR-033](UXR-033-comprehensive-repository-directory-structure-audit.md) | Whole-repo **directory** tree — purpose, placement, wave plan | [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) |
| **File** | **UXR-034** (this) | **Files within** directories classified as in-scope by UXR-033 | [E07:S01:T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) |

**Bidirectional awareness (mandatory for operators and agents):**

- **UXR-034 consumes** UXR-033 outputs: audited directory list, per-directory purpose class, location verdict, and exclusion rules. File valuation must not contradict a directory marked `Archive/remove candidate` without explicit maintainer override.
- **UXR-033 informs** UXR-034: directory-level orphans and suboptimal placements surface file-level investigation priorities; T13 wave plan should reference T14 for file drill-down.
- **UXR-034 feeds back** UXR-033: aggregate file-level findings may refine directory purpose statements or ripple-risk estimates before T13 sign-off closes.

Neither UXR replaces the other. UXR-033 without UXR-034 leaves file-level legacy and misplacement unknown; UXR-034 without UXR-033 lacks a bounded, evidence-based directory scope.

**Program umbrella:** [FR-140](FR-140-repository-information-architecture-steady-state-governance.md) governs **steady-state repository IA** (policy, manifest, gates). UXR-033 and UXR-034 are **cartography legs** under that program — see [E07:S01:T15](../epics/epic-07/story-01-codebase-maintenance-tasks/T15-repository-information-architecture-steady-state-governance-fr140.md). T14 investigation is **unblocked** when T13 audit report is published ([FR-140-F13](FR-140-repository-information-architecture-steady-state-governance.md#t14-release-gate-unblocks-file-cartography)).

---

## Methodology

**Research Method:** Repository file information-architecture audit with maintainer valuation rubric (directory-scoped)  
**Participants:** Maintainer / primary operator  
**Duration:** Multi-phase (scope from UXR-033 → per-directory file inventory → per-file valuation → consolidation recommendations)  
**Tools/Platforms:** Filesystem file listing, `rg`/grep for reference and import touch counts, UXR-033 audit report, `rw-config.yaml`, governance inventories, framework README boundaries

**Research Details:**

1. **Scope gate** — Import audited directory list and exclusion rules from [E07:S01:T13](T13-comprehensive-repository-directory-structure-audit-uxr033.md) / UXR-033 report. Only directories with purpose class other than `Generated/vendor` (unless explicitly flagged for spot-check) enter file inventory.
2. **Per-directory file capture** — Deterministic file inventory per in-scope directory (respect UXR-033 exclusions: `.git`, `node_modules`, `__pycache__`, build artifacts, etc.).
3. **Per-file valuation** — For each file row, record:
   - **Purpose class:** Framework SoT · Dev-kit specialisation · Operational/runtime · Generated/vendor · Legacy/transitional · Duplicate/mirror · Unknown/orphan
   - **Purpose statement:** One-line role (or “none identified”)
   - **Location verdict:** Optimal · Acceptable · Suboptimal (propose target path) · Candidate for archive/remove · Merge/consolidate candidate
   - **Evidence:** Owning policy, README, import graph, single reference, or absence thereof
   - **Reference touch count:** Low / Medium / High (link, import, config, CI estimate)
   - **Parent directory alignment:** Consistent · Tension (file purpose conflicts with UXR-033 directory class)
4. **Cross-check** — Map findings to [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md) / [E07:S01:T10](../epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) (root-only), [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), and UXR-033 wave plan to avoid duplicate or conflicting movers.
5. **Output** — Maintainer-facing file audit report + phased recommendation waves (no file moves in this UXR scope).

---

## Key Findings

**Investigation execution @ 2026-06-24** — [`REPOSITORY-FILE-AUDIT.md`](../../maintenance/REPOSITORY-FILE-AUDIT.md) (572 valuation rows).

- **572 valuation rows** across T13-scoped directories: 88 packages/frameworks + 75 scripts/src + 389 docs + 20 root configs.
- **44 RNF6 class-summary patterns** cover homogeneous corpora (~2240 changelog archive entries, ~1213 kanban docs, ~1172 kanban templates) without per-file row explosion.
- **42 parent-directory tension rows** — chiefly `scripts/` vs `packages/frameworks/workflow-mgt/scripts/` boundary, `docs/project-management/` vestigial shell, `docs/release-notes/` vs `changelog-and-release-notes/` overlap, `docs/governance/kanban/` dual policy locus.
- **37 archive wave** file candidates (Notion migration cluster + `scripts/notion_push_payloads/`) align with T13 directory archive waves — no contradictory movers.
- **Mirror pairs 6/6 in sync** — `packages/frameworks/` ↔ `greenfield-install/packages/frameworks/` (0 content deltas excluding caches).
- **Root relocate candidate:** `INSTALL_IN_YOUR_PROJECT.md` — valued here; execution deferred to T10/UXR-013.
- Maintainer sign-off **recorded** 2026-06-24 on audit report §4 (paired with T13 directory audit).

---

## User Pain Points

- Knowing a directory is “Framework SoT” does not answer whether every file inside still belongs or is a stale copy.
- Cleanup waves ([FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)) risk deleting or moving files without reference evidence when only directory-level review exists.
- Agents routing to “load first” paths cannot distinguish active canonical files from legacy orphans sharing the same folder.

---

## Recommendations

- [x] **R1:** Publish `REPOSITORY-FILE-AUDIT.md` (or equivalent under `docs/governance/` / `docs/maintenance/`) with per-directory file inventories and valuation columns, cross-linked to UXR-033 directory audit sections.
- [x] **R2:** Adopt a standard **per-file valuation rubric** (purpose class, location verdict, evidence, reference touch, parent-directory alignment) reusable for future hygiene UKW runs.
- [x] **R3:** Group files into **waves**: keep-as-is · relocate · merge/consolidate · archive · remove — with explicit dependencies on UXR-033 directory waves and FR-101/FR-118 outcomes.
- [x] **R4:** Flag **duplicate/mirror** files across `packages/` and `greenfield-install/` with explicit SoT pointer per file pair.
- [x] **R5:** Feed wave-1 execution candidates into existing tasks ([E07:S01:T10](../epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md) for root; [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) for broader cleanup) rather than opening parallel uncoordinated movers.
- [x] **R6:** Update UXR-033 / T13 audit report with file-level rollup summaries (orphan counts, suboptimal placement hotspots) before T13 maintainer sign-off where practical.

**Priority Order:**

1. R1 + R2 (scoped inventory + rubric — blocks confident recommendations)
2. R3 + R4 (wave grouping + mirror/SoT map)
3. R5 + R6 (handoff to execution tasks and directory-audit feedback)

---

## Affected Areas

**Affected Components:**

- [x] Documentation
- [x] User Flows (onboarding, agent cold-start routing)
- [x] Features (install, RW, framework packaging)
- [ ] UI Components
- [x] Other: Repository file information architecture, maintainer KB clarity, install mirror integrity

**Specific Areas:**

| Area | Audit focus |
| ---- | ----------- |
| All in-scope directories from UXR-033 | Per-file inventory and valuation |
| `packages/frameworks/` | SoT files vs stale duplicates |
| `docs/` | Governance, kanban, knowledge, maintenance, changelogs |
| `greenfield-install/` | Mirror files vs canonical source |
| `portal/`, `src/`, `scripts/`, `tests/` | Application and automation file placement |
| Repository root | Coordinates with UXR-013 / T10 (root file hygiene) — avoid duplicate root-only passes |

---

## Supporting Evidence

**Research Artifacts:**

- [UXR-033](UXR-033-comprehensive-repository-directory-structure-audit.md) — **parent directory audit** (scope authority)
- [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) — directory investigation task
- [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) — project review / legacy clean-up
- [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md) — root-only file scope
- [GOVERNANCE-REHOUSING-INVENTORY.md](../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) · [KANBAN-REHOUSING-INVENTORY.md](../../governance/KANBAN-REHOUSING-INVENTORY.md) — prior file-move precedents
- [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) — maintainer KB git paths
- [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) — public vs maintainer doc surfaces

---

## Next Steps

- [x] Atomic intake: UXR-034 + E07:S01:T14 + story checklist wiring
- [x] **RW -k** kanban init @ v0.7.1.14+0 (`--art --dpz`)
- [x] **IPW** on E07:S01:T14 — complete @ 2026-06-23 ([IPP-E07S01T14](../../implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md); T13 baseline @ [`REPOSITORY-DIRECTORY-AUDIT.md`](../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md))
- [x] Execute file inventory and valuation within audited directories — **IDW @ 2026-06-24** → [`REPOSITORY-FILE-AUDIT.md`](../../maintenance/REPOSITORY-FILE-AUDIT.md)
- [x] Maintainer sign-off on file audit report — **2026-06-24** (§4)
- [x] **RW** release on epic-7 branch when investigation artifacts are versioned — **v0.7.1.14+1**

---

## Dependencies

**Blocks:**

- Confident, prioritized **file-level** repository reorganization and legacy burn-down within validated directories
- Coherent handoff from directory waves (UXR-033) to file execution waves

**Blocked By:**

- [UXR-033](UXR-033-comprehensive-repository-directory-structure-audit.md) / [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) — **directory audit baseline** (audited dir struct, exclusions, purpose classes) required before file valuation is authoritative; IPW on T14 may proceed earlier with provisional scope if documented

**Related Work:**

- [UXR-033](UXR-033-comprehensive-repository-directory-structure-audit.md) · [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) — **paired directory layer**
- [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) · [E07:S01:T10](../epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md)
- [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)
- [UXR-032](UXR-032-fr-br-directory-rename-to-fbu.md) — intake path rename (coordinate ripple section)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-23  
**Intake By:** Agent (atomic intake session)  
**Version:** v0.7.1.14+0 (RW -k kanban init)

**Decision Flow Results:**

- [x] Story Match Found: Epic 7, Story 1 → Task T14

**Assigned To:**

- Epic: 7 — Codebase Maintenance and Review
- Story: 1 — Codebase Maintenance Tasks
- Task: T14 — Comprehensive repository file-level audit (UXR-034)
- Version: v0.7.1.14+0 (RW -k kanban init)

**Kanban Links:**

- Epic: [`docs/kanban/epics/epic-07/epic-07.md`](../epics/epic-07/epic-07.md)
- Story: [`docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks.md`](../epics/epic-07/story-01-codebase-maintenance-tasks.md)
- Task: [`docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md`](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md)

---

## Notes

Scope is deliberately **file-level within UXR-033 audited directories**. Repository-root file hygiene remains with [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md) / [E07:S01:T10](../epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md). Whole-repo **directory** valuation remains with UXR-033 / T13. This UXR produces the per-file matrix and wave plan those tasks and [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) should consume — not replace.

---

## References

- [UXR-033](UXR-033-comprehensive-repository-directory-structure-audit.md)
- [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)
- [packages/frameworks/kanban/policies/kanban-governance-policy.md](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md)
- [docs/governance/standards/specification-and-planning-artifacts-policy.md](../../governance/standards/specification-and-planning-artifacts-policy.md)
