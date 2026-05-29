# Changelog: v0.6.7.103+5

**Release Date:** 2026-03-07 00:00:00 UTC  
**Epic:** Epic 6 (Framework Management and Maintenance)  
**Story:** Story 7 (ADK Implementation Analysis and Package Management)  
**Task:** Task 103 (Release Workflow Maintenance - Perpetual Task)  
**Build:** 5

---

## Summary

E2:S16:T03: Doc-init validator update to allow required version file changes during BUILD=0 runs.

---

## Changes

### Doc-init Validation

- Doc-init build validation (`BUILD=0`) now tolerates the configured version file (`rw-config.yaml: version_file` or default `src/fynd_deals/version.py`) as an allowed non-documentation change.
- This unblocks minimal-step doc-init task commits that require updating the internal version coordinate to `+0`.

---

## Related

- **Validator:** `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- **Perpetual Task:** [T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md](../../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
