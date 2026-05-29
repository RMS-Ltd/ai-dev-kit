---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T11:29:20Z
expires_at: null
housekeeping_policy: keep
---

# Release v0.5.1.67+2

**Release Date:** 2026-03-30 11:29:20 UTC  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 1 - FR Repo (PERPETUAL)  
**Task:** Task 67 - Adopter Install Docs — RW Task Token (FR-060)  
**Build:** 2 (Build 1 was RW -k kanban marker)

---

## Summary

E5:S01:T67 — Adopter-facing documentation now requires **`RW` plus a parseable `E…S…T…` in the same message** (**FR-060**): [INSTALL_IN_YOUR_PROJECT.md](../../../INSTALL_IN_YOUR_PROJECT.md); [framework-dependency-installation-guide.md](../../../docs/documentation/user-docs/framework-dependency-installation-guide.md) (both RW post-install blocks + Next steps); user-docs sweep (usage, integration, update, FAQ, troubleshooting, rollout checklist, post-template setup); [workflow mgt README](../../../packages/frameworks/workflow%20mgt/README.md) quickstart/checklist; installer/vwmp adjacency ([rw-installer-quickstart-guide.md](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/rw-installer-quickstart-guide.md), [README-rw-installer.md](../../../packages/frameworks/workflow%20mgt/scripts/README-rw-installer.md), [portable-workflow-implementation-guide.md](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/portable-workflow-implementation-guide.md), [implementation-cycle-sop.md](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md)); [PACKAGE_INSTALLATION_GUIDE.md](../../../packages/frameworks/workflow%20mgt/docs/PACKAGE_INSTALLATION_GUIDE.md) cross-reference; [T004-consumption-patterns.md](../../../docs/project-management/kanban/epics/Epic-1/Story-002-package-and-repo-architecture/T004-consumption-patterns.md). Kanban: T67 **COMPLETE**, Story/Epic, board, `kanban-completed.md`.

---

## Changes

### Documentation

- Mandatory RW task token examples (`RW E5S01T67`, `RW E5:S01:T67`) and links to [release-workflow-agent-execution.md](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md); `rw-config.yaml` / `use_kanban` validator note where applicable.
- Repo grep: no remaining bare-`Type "RW"` install/adopter patterns in scoped `.md` files.

### Kanban

- T67 COMPLETE; Story checklist; Epic S01 line; MoSCOW board; forensic markers.

---

## Related

- **FR-060**; **E5:S01:T63**.
