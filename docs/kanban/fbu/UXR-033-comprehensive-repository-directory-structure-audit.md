---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Comprehensive repository directory structure audit

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-23  
**Submitted By:** User (operator)  
**Priority:** HIGH  
**Status:** ACCEPTED  
**Code:** UXR-033  
**Last updated:** 2026-06-23 (investigation report @ v0.7.1.13+1 pending RW)  
**Implementing Task:** [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md)

---

## Summary

Plan and execute a **whole-repository directory structure audit** that inventories every top-level and nested directory, classifies each by purpose vs legacy orphan status, and recommends whether its current location is optimal — producing a maintainer-approved valuation matrix before any structural moves.

---

## Research Objective

Answer three questions for the ai-dev-kit monorepo:

1. **What is the complete on-disk directory tree today?** (canonical inventory, not anecdotal)
2. **Does each directory still have a clear purpose, or is it a legacy/orphan artifact?**
3. **Is each directory in the optimal location** given framework SoT vs dev-kit specialisation, adopter install contracts, documentation surfaces (public portal vs maintainer KB), and prior rehousing work (FR-101, FR-118)?

This UXR is **investigation and planning only**. Execution of moves, merges, archives, or deletions remains gated behind IPW and explicit implementation authorization on follow-on tasks.

---

## Contextual relationship to UXR-034

| Layer | UXR | Scope | Task |
| ----- | --- | ----- | ---- |
| **Directory** | **UXR-033** (this) | Whole-repo **directory** tree — purpose, placement, wave plan | [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) |
| **File** | [UXR-034](UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md) | **Files within** directories classified as in-scope by UXR-033 | [E07:S01:T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) |

**Bidirectional awareness (mandatory for operators and agents):**

- **UXR-034 consumes** this UXR's audited directory list, purpose classes, and exclusions as scope authority for per-file valuation.
- **UXR-033 informs** UXR-034: directory orphans and suboptimal placements define file-investigation priorities; T13 wave plan should reference T14 for drill-down.
- **UXR-034 feeds back** this UXR: file-level rollups may refine directory purpose statements or ripple-risk before T13 sign-off.

---

## Methodology

**Research Method:** Repository information-architecture audit with maintainer valuation rubric  
**Participants:** Maintainer / primary operator  
**Duration:** Multi-phase (inventory → per-directory valuation → consolidation recommendations)  
**Tools/Platforms:** Filesystem tree capture, `rg`/grep for path references, `rw-config.yaml`, governance inventories, framework package boundaries, prior rehousing reports (`GOVERNANCE-REHOUSING-INVENTORY.md`, `KANBAN-REHOUSING-INVENTORY.md`)

**Research Details:**

1. **Tree capture** — Generate a deterministic directory inventory (depth-bounded; exclude `.git`, `node_modules`, `__pycache__`, and other generated/vendor trees per documented exclusions).
2. **Per-directory valuation** — For each directory row, record:
   - **Purpose class:** Framework SoT · Dev-kit specialisation · Operational/runtime · Generated/vendor · Legacy/transitional · Unknown/orphan
   - **Purpose statement:** One-line role (or “none identified”)
   - **Location verdict:** Optimal · Acceptable · Suboptimal (propose target path) · Candidate for archive/remove
   - **Evidence:** Pointers to owning policy, README, install script, or absence thereof
   - **Ripple risk:** Low / Medium / High (link and install touch count estimate)
3. **Cross-check** — Map findings to existing cleanup tracks so recommendations do not duplicate or conflict with in-flight work.
4. **Output** — Maintainer-facing audit report + phased recommendation waves (no file moves in this UXR scope).

---

## Key Findings

- **83 directory rows** (depth 0–2) captured in [REPOSITORY-DIRECTORY-AUDIT.md](../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) with full rubric columns.
- **Legacy shells:** `docs/project-management/` and `src/fynd_deals/` flagged **remove**; `adk-install-into-sbl/` overlaps `docs/adk-feedback/` — **consolidate/archive**.
- **SoT clarity:** `packages/frameworks/` canonical; `greenfield-install/` install mirror documented in §2.1.
- **Orphans:** `tests/tests/` nested duplicate; `packages/dist/` and `temp/` at root — **remove** candidates.
- Prior root-only ([UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)) and domain rehousing (FR-101/FR-118) now have a **single wave index** in audit §3.

---

## User Pain Points

- Difficulty knowing whether a directory is canonical, derivative, or abandoned when onboarding or routing agent work.
- Cleanup tasks ([FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)) lack a repo-wide baseline inventory to prioritize waves.
- Suboptimal paths persist because partial migrations addressed one subtree without holistic information-architecture review.

---

## Recommendations

- [x] **R1:** Publish `REPOSITORY-DIRECTORY-AUDIT.md` with full directory inventory and valuation columns.
- [x] **R2:** Adopt standard **per-directory valuation rubric** (purpose class, location verdict, evidence, ripple risk).
- [x] **R3:** Group directories into **waves**: keep · relocate · consolidate · archive · remove — with explicit dependencies on FR-101/FR-118/UXR-032 outcomes.
- [x] **R4:** Identify **framework SoT vs dev-kit-local vs install-mirror** boundaries for `packages/` and `greenfield-install/` subtrees.
- [x] **R5:** Feed wave-1 execution candidates into existing tasks (T10, FR-039, etc.).
- [ ] **R6:** Add validator or CI advisory for new top-level directories — deferred follow-on.
- [ ] **R7:** Hand off in-scope directories to [UXR-034](UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md) / [E07:S01:T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) for per-file valuation; incorporate T14 rollups before T13 sign-off where practical.

**Priority Order:**

1. R1 + R2 (inventory + rubric — blocks confident recommendations)
2. R3 + R4 (wave grouping + SoT boundary map)
3. R5 + R6 (handoff to execution tasks and optional drift guard)

---

## Affected Areas

**Affected Components:**

- [x] Documentation
- [x] User Flows (onboarding, agent cold-start routing)
- [x] Features (install, RW, framework packaging)
- [ ] UI Components
- [x] Other: Repository information architecture, adopter reference clarity

**Specific Areas:**

| Area | Audit focus |
| ---- | ----------- |
| Repository root | Entrypoints, config, legacy shells |
| `packages/frameworks/` | Framework SoT packages and KB trees |
| `docs/` | Governance, kanban, knowledge, maintenance, changelogs, journals |
| `greenfield-install/` | Install mirror vs canonical source drift |
| `portal/` | Public adopter documentation surface |
| `src/`, `scripts/`, `tests/` | Application and automation layout |
| `.github/`, `.cursor/`, `.claude/` | Tooling and agent bootstrap paths |

---

## Supporting Evidence

**Research Artifacts:**

- [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) — project review / legacy clean-up (broader; lacks per-directory matrix)
- [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md) — root-only scope
- [UXR-011](UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md) — kanban naming hygiene
- [FR-101](FR-101-consolidate-governance-under-docs-governance.md) / [GOVERNANCE-REHOUSING-INVENTORY.md](../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) — governance rehousing precedent
- [FR-118](FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md) / [KANBAN-REHOUSING-INVENTORY.md](../../governance/KANBAN-REHOUSING-INVENTORY.md) — kanban path promotion precedent
- [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) — maintainer KB git paths
- [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) — public vs maintainer doc surfaces

---

## Next Steps

- [x] Atomic intake: UXR-033 + E07:S01:T13 + story checklist wiring
- [x] **RW -k** kanban init @ v0.7.1.13+0 (`--art --dpz`)
- [ ] **IPW** on E07:S01:T13 — investigation plan, rubric template, report housing, exclusion rules
- [ ] Execute directory inventory and valuation (investigation phase on task)
- [ ] Maintainer sign-off on audit report before any structural IDW waves
- [ ] **RW** release on epic-7 branch when intake artifacts are versioned

---

## Dependencies

**Blocks:**

- Confident, prioritized repository reorganization and legacy burn-down
- Coherent handoff from “review” ([FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)) to scoped execution waves

**Blocked By:**

- None for investigation start; structural moves blocked until audit sign-off + IPW on execution tasks

**Related Work:**

- [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) · [E07:S01:T10](../epics/epic-07/story-01-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md)
- [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)
- [UXR-011](UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)
- [UXR-032](UXR-032-fr-br-directory-rename-to-fbu.md) — intake path rename (coordinate ripple section)
- [UXR-034](UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md) · [E07:S01:T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) — **paired file-level audit** (consumes T13 scope; may feed back rollups)
- [E07:S01:T11](../epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md) · [E07:S01:T12](../epics/epic-07/story-01-codebase-maintenance-tasks/T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-23  
**Intake By:** Agent (atomic intake session)  
**Version:** v0.7.1.13+0 (RW -k kanban init)

**Decision Flow Results:**

- [x] Story Match Found: Epic 7, Story 1 → Task T13

**Assigned To:**

- Epic: 7 — Codebase Maintenance and Review
- Story: 1 — Codebase Maintenance Tasks
- Task: T13 — Comprehensive repository directory structure audit (UXR-033)
- Version: `0.7.1.13+0` (RW -k kanban init)

**Kanban Links:**

- Epic: [`docs/kanban/epics/epic-07/epic-07.md`](../epics/epic-07/epic-07.md)
- Story: [`docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks.md`](../epics/epic-07/story-01-codebase-maintenance-tasks.md)
- Task: [`docs/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md`](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md)

---

## Notes

Scope is deliberately **whole-repo** and **directory-level**. File-level root hygiene remains with UXR-013 / E07:S01:T10. **File-level audit within audited directories** is [UXR-034](UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md) / [E07:S01:T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) — paired layer with bidirectional contextual awareness (T13 scope authority; T14 file drill-down and rollup feedback). This UXR produces the directory valuation matrix and wave plan that UXR-034, T10, and FR-039 should consume — not replace.

---

## References

- [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)
- [packages/frameworks/kanban/policies/kanban-governance-policy.md](../../../packages/frameworks/kanban/policies/kanban-governance-policy.md)
- [docs/governance/standards/specification-and-planning-artifacts-policy.md](../../governance/standards/specification-and-planning-artifacts-policy.md)
