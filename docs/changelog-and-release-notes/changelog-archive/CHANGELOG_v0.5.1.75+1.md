# Changelog v0.5.1.75+1

**Release Date:** 2026-04-01 15:46:20 UTC  
**Epic:** 5 | **Story:** 1 | **Task:** 75  
**Task doc:** [T75-icw-durable-planning-artifacts-documentation-system.md](../../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T75-icw-durable-planning-artifacts-documentation-system.md)  
**FR:** [FR-075](../../project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system.md)

## Summary

**E5:S01:T75 / FR-075:** **ICW** is explicitly responsible for persisting specification, test design, and implementation plan outputs under **`docs/implementation-cycles/`** (repo SoT), with bidirectional links from **Kanban tasks**. Adds **`specification-and-planning-artifacts-policy.md`**, **`docs/implementation-cycles/README.md`**, updates **ICW framework README**, **ICW guide**, **`icw-workflow.yaml`** comment, **`.cursorrules`** ICW steps; **FR-075** + **Story-001** checklist + **fr-br-uxr-board** traceability.

## Change implemented

- Policy and index paths per **FR-075:R01–R02**; framework and YAML per **R03–R05**; **`.cursorrules`** per **R06**.

## Verification

- `python "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py"` after task doc **Version anchor** set.
