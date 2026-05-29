---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: CMW — Require Epic 5 (Documentation) Execution Context

**Type:** Feature Request (FR)  
**Submitted:** 2026-03-25  
**Submitted By:** User  
**Priority:** MEDIUM  
**Severity:** N/A  
**Status:** ACTIVE (intake released v0.5.2.6+1; implementation ACs open)  

**Repository Pattern:** FR-063 = E5:S02:T06  
**Implementing Task:** [E5:S02:T06](../epics/Epic-5/Story-002/T06-cmw-epic-5-execution-context-fr-063.md)

---

## Summary

Update **Changelog Management Workflow (CMW)** documentation and implementation so that **standalone CMW** clearly **requires Epic 5 context**: work runs on the **Epic 5 documentation branch** with **`version.py` aligned to Epic 5**, matching **Release Workflow (RW) branch-safety expectations** when changelog maintenance is committed via RW.

---

## Problem Statement

**Current situation**

- CMW can be executed from any working tree; `cmw.py` does not validate branch or `VERSION_EPIC`.
- RW **Step 1** (`validate_branch_context.py --strict`) requires branch name and version epic to match.
- Changelog maintenance is **owned by the Documentation epic** (**Epic 5**); canonical branch is **`epic/5-documentation-management`** (see [`Epic-5.md`](../epics/Epic-5/Epic-5.md)).
- Running CMW on another epic branch (e.g. with `VERSION_EPIC = 7`) then attempting **RW** produces **branch mismatch** or forces manual version repair.

**Gap**

- Adopters and agents are not **required** or **clearly guided** to use **E5 branch + E5 version** before CMW mutates `CHANGELOG.md` / archives.
- **Perpetual CMW task** today is tracked as **E2:S16:T03**; doc-epic alignment for *where CMW should run* is not spelled out as a hard rule in CMW docs or scripts.

---

## Proposed Solution

### Documentation (must)

- **CMW workflow YAML** (`packages/frameworks/workflow mgt/workflows/changelog-management-workflow/`): state **Epic 5 execution context** for standalone CMW; reference `epic/5-documentation-management` and `validate_branch_context`.
- **CMW script README** (`packages/frameworks/workflow mgt/scripts/changelog/README.md`): prerequisite section — correct branch, `VERSION_EPIC` matches Epic 5 before run; link to dev-kit versioning / branch mapping.
- **`.cursor/skills/cmw-maintain/SKILL.md`**: explicit **ANALYZE** step — confirm branch is Epic 5 doc branch and version epic is 5 (or document exception below).
- **RW / package docs** (e.g. `release-workflow-agent-execution.md`, RW Step 9.5): clarify **RW-invoked CMW (Step 9.5)** inherits **the active RW epic branch** (no extra E5 requirement); **standalone CMW** requires **E5** context.

### Implementation (must)

- **`cmw.py` (or shared precondition helper):** before modifying `CHANGELOG.md`, run a **blocking check** for **standalone** invocation:
  - Current branch matches **Epic 5** doc branch pattern (configurable via `rw-config.yaml`, e.g. `cmw_required_epic: 5` / branch allowlist), **and**
  - `VERSION_EPIC` in version file **equals** configured epic **unless** invoked from RW Step 9.5 (see below).
- **Escape hatch for RW Step 9.5:** when CMW is triggered **from RW** on epic `N`, use **that** epic for validation (already satisfied by RW Step 1), not Epic 5 — document and implement via environment flag, CLI flag (`--rw-step-9-5`), or internal caller contract.

### Kanban / attribution (should)

- **Done:** [E5:S02:T06](../epics/Epic-5/Story-002/T06-cmw-epic-5-execution-context-fr-063.md) under **E5:S02 – Documentation Maintenance Framework** for implementation and RW on **`epic/5-documentation-management`**.
- Reconcile messaging with **E2:S16:T03** (perpetual CMW maintenance): either narrow T102 to **framework script behavior** and use **E5** for doc-maintenance **runs**, or document a single source of truth — **decision recorded in task + Epic 5/Epic 6 docs**.

---

## Requirements

### Functional

- [ ] **FR-063:R01** — CMW documentation states **Epic 5 branch + version alignment** as prerequisite for standalone CMW.
- [ ] **FR-063:R02** — Standalone `cmw.py` **fails fast** with clear message when branch/version epic does not match configured Epic 5 context.
- [ ] **FR-063:R03** — RW Step 9.5 invocation **does not** incorrectly require Epic 5 when RW is on another epic branch (flag or caller contract).
- [ ] **FR-063:R04** — `rw-config.yaml` (or `cmw-config.yaml`) supports **required epic / branch pattern** for standalone CMW (defaults sensible for ai-dev-kit).

### Non-functional

- [ ] **FR-063:NF01** — **Consistency** with `validate_branch_context.py` rules.
- [ ] **FR-063:NF02** — **Adopter-safe:** projects without Epic 5 can override/disable via config with documented semantics.

---

## Acceptance Criteria

- [ ] **AC1:** A developer reading only CMW docs knows to use **`epic/5-documentation-management`** (or their project’s Epic 5 doc branch) and **E5 `version.py`** before standalone CMW.
- [ ] **AC2:** Running `cmw.py` on `epic/7-*` with `VERSION_EPIC=7` **exits non-zero** (standalone), with actionable error text.
- [ ] **AC3:** RW Step 9.5 still runs CMW on the **current RW epic branch** without forcing checkout to Epic 5.
- [ ] **AC4:** Skill and packaged workflow YAML updated in lockstep with script behavior.

---

## Related Work

- [FR-027](FR-027-add-cmw-to-workflow-management-package-documentation.md) — CMW package documentation (COMPLETE).
- [FR-025](FR-025-changelog-management-and-archival-workflow.md) — Changelog management / archival workflow.
- **Epic 5:** [`Epic-5.md`](../epics/Epic-5/Epic-5.md) — branch `epic/5-documentation-management`.
- **Perpetual CMW task:** [E2:S16:T03](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) — reconcile with E5 execution rule.
- **Scripts:** `packages/frameworks/workflow mgt/scripts/changelog/cmw.py`, `cmw-config.yaml`.

---

## References

- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- `.cursorrules` — RW Step 1 branch safety
- `rw-config.yaml` — `changelog_archival.mode: latest_only`
