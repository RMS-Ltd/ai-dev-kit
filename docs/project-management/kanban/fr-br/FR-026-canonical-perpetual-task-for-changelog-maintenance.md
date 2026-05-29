---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T23:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Canonical Perpetual Task for Changelog Maintenance

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-21  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IMPLEMENTED (v0.6.6.13+2 - T13 implementation complete)

---

## Summary

Create a canonical perpetual task (similar to UKW's T08) for Changelog Maintenance Workflow (CMW) maintenance runs, and include it in the canonical framework task set for adoption across projects.

---

## Problem Statement

**Current Situation:**
- CMW (Changelog Management Workflow) is implemented and operational (T11 COMPLETE)
- CMW runs periodically (weekly via cron, or automatically via RW Step 9.5)
- CMW maintenance runs need proper version attribution
- No canonical perpetual task exists for CMW maintenance in the framework
- Each project would need to create their own perpetual task for CMW runs

**Issue:**
- CMW maintenance runs should be attributed to a dedicated perpetual task (not arbitrary feature tasks)
- BUILD number should represent CMW run count (semantic correctness)
- Without a canonical task, each project must create its own CMW perpetual task (inconsistency)
- No standard pattern for CMW maintenance versioning across projects

---

## Proposed Solution

### 1. Create Perpetual Task T12 (E6:S06:T12)

Create a perpetual maintenance task for CMW runs:
- **Task Type:** Perpetual Maintenance
- **Status:** IN PROGRESS (never changes to COMPLETE)
- **Build Warning Suppression:** Enabled
- **Version Pattern:** `v0.6.6.12+\{N\}` where N = CMW run number
- **RW Attribution:** All CMW-triggered RWs use T12

### 2. Include in Canonical Framework

Add T12 (CMW Maintenance) to the canonical framework task set:
- **Framework Documentation:** Update workflow framework docs to include CMW perpetual task pattern
- **Template:** Include CMW perpetual task in framework templates
- **Documentation:** Document the perpetual task pattern for CMW maintenance

### 3. RW Integration

Update RW to support CMW context detection:
- Detect when CMW triggers RW (manual "CMW" then "RW", or RW Step 9.5 triggered CMW)
- Auto-attribute release to T12 (similar to UKW's T08 attribution)
- Increment BUILD number (same task, increment BUILD)
- Suppress build number warnings (perpetual task flag)

---

## Acceptance Criteria

- [ ] Perpetual task T12 created for CMW maintenance
- [ ] Task document follows perpetual task pattern (similar to T08)
- [ ] RW logic updated to detect CMW context and auto-attribute to T12
- [ ] Documentation updated (RW guide, versioning policy, framework docs)
- [ ] Framework templates updated to include CMW perpetual task
- [ ] First CMW-triggered RW uses T12
- [ ] Pattern documented for adoption across projects

---

## Related Work

- **Task:** E6:S06:T11 - Changelog Management and Archival Workflow (implementation, COMPLETE)
- **Task:** E6:S06:T12 - Changelog Maintenance Workflow (CMW) - Perpetual Task (this task)
- **Task:** E6:S06:T08 - Update Kanban Workflow (UKW) - Perpetual Task (pattern reference)
- **Epic:** 6 - Framework Management and Maintenance
- **Story:** 6 - ADK Implementation Analysis and Package Management

---

## Priority Justification

**HIGH Priority** because:
- CMW is now operational and needs proper version attribution
- Without a canonical task, each project must create their own (inconsistency)
- Perpetual task pattern (T08) is proven and should be replicated for CMW
- Standardization across projects improves maintainability and clarity

---

## Implementation Considerations

- Follow the same pattern as T08 (UKW perpetual task)
- CMW is deterministic (unlike UKW which requires agentic intelligence)
- CMW can run automatically (cron, RW Step 9.5) or manually
- RW attribution logic should detect CMW context similar to UKW context detection
- Framework documentation should include CMW perpetual task in canonical task set

---

## References

- **CMW Workflow:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- **CMW Scripts:** `packages/frameworks/workflow mgt/scripts/changelog/`
- **UKW Perpetual Task:** `docs/project-management/kanban/epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T08-update-kanban-workflow-ukw.md`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

**Last Updated:** 2025-12-21  
**Status:** IMPLEMENTED (v0.6.6.13+2 - T13 implementation complete)

