# Changelog v0.5.1.37+3

**Release Date:** 2026-02-12 14:00:00 UTC  
**Epic:** Epic 5 - Documentation Management and Maintenance (FR Repo)  
**Story:** Story 1 - FR Repo (PERPETUAL)  
**Task:** Task 37 - Kanban Policy Task Prioritisation and Queue/Stack  
**Build:** 3

---

## Summary

Aligned ai-dev-kit policies with patterns hardened in Starborn Legacy: added a **policy comparison proposal**, **Implementation Cycle (spec + TDD)** as an adoptable pattern with framework SoP, **changelog language** (no false “Fixed” until verified), **IDE pre-commit** step (Step 9.6), **top-of-file git reminder**, and **perpetual-task document update** requirement in Kanban Governance.

---

## Changes

### Policy Comparison and Proposal

- **`docs/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal.md`** (new)
  - Compares Starborn Legacy (versioning, Kanban governance, release workflow, implementation cycle) with ai-dev-kit.
  - Recommendations: changelog language, implementation cycle, IDE step, git reminder, perpetual-task doc updates.
  - References all touched files and follow-up options.

### .cursorrules

- **Changelog language — no false claims:** Short reminder: do not use “Fixed”/“Resolved”/“Completed” until user has verified; use “Attempted fix”/“Attempted resolution”; use `### Attempted Fixes` for unverified, `### Fixed` only after verification.
- **Implementation Cycle (adoptable pattern):** New section with 5 steps (Requirement doc → Task creation → Spec & Test Creation **blocking** → Implementation → RW); Step 3 blocking when pattern is adopted; reference to framework SoP.
- **Top-of-file git reminder:** “Commit and push only via RW”; do not run `git commit` or `git push` outside RW.
- **Step 9.6 — Check IDE-Flagged Problems:** Recommended, non-blocking step before commit: fix IDE/linter errors and warnings where practical; re-stage.
- **TODO list:** Mention optional Step 9.5 CMW and recommended Step 9.6 in step list.

### Framework: Implementation Cycle SoP

- **`packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md`** (new)
  - Framework-agnostic SoP for adopters: Step 1 Requirement doc, Step 2 Task creation, Step 3 Spec & tests (blocking), Step 4 Red-Green-Refactor, Step 5 RW.
  - Pre-implementation checklist, exceptions (retroactive tests, non-code work), integration with Kanban and RW.

### Kanban Governance Policy

- **Perpetual tasks:** Requirement that for each run of a perpetual task, the **task document** is updated with what changed, why, and the release version (forensic traceability).
- **Task-Level Requirements:** New item 5 — “Implementation Cycle (adoptable)” with references to .cursorrules and implementation-cycle-sop.md.

---

## References

- **Proposal:** `docs/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal.md`
- **Implementation Cycle SoP:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md`
- **Kanban Governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Task:** E5:S01:T37 – Kanban Policy Task Prioritisation and Queue/Stack (FR-037)
