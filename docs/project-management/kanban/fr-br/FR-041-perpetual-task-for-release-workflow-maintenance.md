---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Perpetual Task for Release Workflow Maintenance

**Type:** Feature Request (FR)  
**Submitted:** 2026-02-22  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** N/A  
**Status:** IMPLEMENTED ✅ (E2:S16:T03 v0.6.7.103+1)

---

## Summary

Create a canonical perpetual task for Release Workflow (RW) and workflow framework maintenance work, analogous to T101 (UKW) and T102 (CMW). Include this task in the packaged Kanban framework so adopting projects receive it.

---

## Problem Statement

**Current Situation:**
- UKW has perpetual task T101 (E2:S16:T03) – UKW-triggered RWs attribute there
- CMW has perpetual task T102 (E2:S16:T03) – CMW-triggered RWs attribute there
- **No perpetual task exists for RW/workflow framework maintenance**

**Issue:**
- RW maintenance work (Step 7 fixes, validator updates, doc corrections, framework hardening) is either:
  - Attributed to arbitrary feature tasks (wrong semantics), or
  - Requires creating one-off tasks for each fix (overhead)

- BUILD number semantics break when RW maintenance is attributed to feature tasks
- Projects adopting the framework have no standard pattern for workflow maintenance attribution

---

## Proposed Solution

### 1. Create Perpetual Task for RW/Workflow Maintenance

Create a perpetual maintenance task (e.g., T103 in E6:S07, or in Epic 2) for RW and workflow framework maintenance:

- **Task Type:** Perpetual Maintenance
- **Status:** IN PROGRESS (never changes to COMPLETE)
- **Build Warning Suppression:** Enabled
- **Version Pattern:** `v0.\{EPIC\}.\{STORY\}.\{TASK\}+\{N\}` where N = RW maintenance release count
- **Attribution:** RW maintenance releases (framework fixes, Step 7 improvements, validator updates, doc corrections) attribute here when not tied to a specific feature task

### 2. Include in Packaged Kanban Framework

Add this perpetual task to the packaged Kanban framework:

- **Framework Templates:** Include perpetual RW maintenance task template in `packages/frameworks/kanban/templates/`
- **Documentation:** Document the pattern in framework docs and versioning policy
- **Task Document:** Template follows same structure as T101 (UKW) and T102 (CMW)

### 3. ai-dev-kit Implementation

- Create the perpetual task in ai-dev-kit (source repo)
- Wire RW logic if context detection is needed (e.g., "RW maintenance" vs "task completion" – or rely on manual attribution when appropriate)

---

## Use Cases

1. **RW Step 7 MoSCOW Fix:** Fix completed-task removal from MoSCOW section → attribute to perpetual RW maintenance task
2. **Validator Update:** Fix or extend `validate_version_bump.py` → attribute to perpetual task
3. **Workflow Doc Correction:** Update RW execution guide, cursor rules → attribute to perpetual task
4. **Framework Hardening:** Non-feature framework improvements → attribute to perpetual task

---

## Acceptance Criteria

- [x] Perpetual task created for RW/workflow maintenance (ai-dev-kit) ✅
- [x] Task document follows perpetual task pattern (T101, T102) ✅
- [x] Packaged Kanban framework includes template for this perpetual task ✅ (T06)
- [x] Framework documentation updated with RW maintenance perpetual task pattern ✅
- [ ] Pattern documented for adoption across projects

---

## Related Work

- **E2:S16:T03** – Release Workflow Maintenance Perpetual Task (this task)
- **E2:S16:T03** – UKW Perpetual Task (pattern reference)
- **E2:S16:T03** – CMW Perpetual Task (pattern reference)
- **FR-026** – Canonical Perpetual Task for Changelog Maintenance (similar pattern)
- **Epic 2** – Workflow Management Framework (RW package owner)
- **Epic 6** – Framework Management and Maintenance (UKW/CMW perpetual tasks)
- **FR-067 [FU-2](./FR-067-docusaurus-production-build-corpus-triage.md)** – Docusaurus/corpus work is still released via **RW**; **GitHub Releases** for SemVer tags (**Step 12.5**, `create_github_release.py`) are traced to **E2:S16:T03** (this FR), not as a standalone portal task.

---

## References

- **UKW Perpetual Task:** `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`
- **CMW Perpetual Task:** `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`
- **Kanban Templates:** `packages/frameworks/kanban/templates/`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
