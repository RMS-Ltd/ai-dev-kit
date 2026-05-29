---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 65: Align Workflow Mgt README With Registry Workflow Count

**Task ID:** E5:S01:T65  
**Status:** COMPLETE (2026-03-30 — workflow mgt README aligned to **11** + registry SoT)  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-03-25  
**Last updated:** 2026-03-30 — released v0.5.1.65+2 (README + kanban closure)  
**Version:** v0.5.1.65+2  
**Version Anchor:** v0.5.1.65+2  
**Code:** E5S01T65

**Repository Pattern:** Internal scaffold (no FR yet). Complements **E5:S01:T56** / **FR-056** (broader standardization).

---

## Scope

Remove **stale “12 workflows”** claims in [`workflow mgt/README.md` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/README.md) wherever they conflict with the **canonical machine list**: [`workflow-registry.yaml` (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/workflows/workflow-registry.yaml) (**11** `workflows:` keys as of 2026-03). Align intro, purpose, feature bullets, and overview tables with **11** or with explicit wording (“11 YAML-defined workflows” + optional note on methodology/docs beyond YAML).

---

## Input

- Root [README.md (repository)](https://github.com/earlution/ai-dev-kit/blob/main/README.md) Workflows section (already aligned to 11 + registry link).
- [T64-readme-workflow-section.md](T64-readme-workflow-section.md) / FR-061 closure notes.
- [T56-standardize-packaged-workflow-documentation-and-instructions.md](T56-standardize-packaged-workflow-documentation-and-instructions.md) (avoid duplicating full FR-056 scope).

---

## Deliverable

- Updated **workflow mgt** package README: consistent count, single SoT pointer to `workflow-registry.yaml`.
- Optional one-line **CHANGELOG** or package version bump if you release the framework artifact (separate decision).

---

## Acceptance Criteria

- [x] No remaining **“12 comprehensive / standardized workflows”** (or equivalent) where it implies YAML registry count ≠ 11 without explanation.
- [x] README states **11** registry entries **or** defines an unambiguous alternate count with cited source (not invented).
- [x] Link or path reference to `workflow-registry.yaml` appears in the opening or overview.

---

## Related Work

- **E5:S01:T56** / **FR-056** — full packaged workflow doc standardization.
- **E5:S01:T64** / **FR-061** — root README Workflows section.

---

_Story:_ [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
