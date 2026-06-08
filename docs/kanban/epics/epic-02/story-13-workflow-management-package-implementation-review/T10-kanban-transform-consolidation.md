---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T10 – Kanban Transform Consolidation

**Task ID:** E02:S13:T10  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 07:32 UTC (status reconciled to COMPLETE after implementation + validation)  
**Version:** v0.2.13.10+1  
**Code:** E02S13T10

---

## Scope

Resolve **GAP-WFMGT-INTG-001** — kanban update path fragmentation across RW Step 7 agent guidance, UKW Step 6, and `update_kanban_docs.py` (`apply_canonical_row_transform_pipeline` and related paths). Reduce drift risk by consolidating shared transform logic and documenting a single entrypoint contract.

Also resolve **GAP-WFMGT-INTG-002 (M1)** — `rw-config.yaml` loader fragmentation via a unified shared `rw_config_loader` module and migration of call sites/validators onto the shared loader behavior.

**In scope:**

- Shared kanban row-transform module or documented single pipeline
- Boundary doc: when to use `update_kanban_docs.py` vs agent-only Step 7 vs UKW
- Alignment with FR-092 four-surface contract
- Shared `rw_config_loader` entrypoint: path-resolution stability + return-shape parity for adopters

**Out of scope:**

- FR-050 workflows directory work (see [E02:S13:T09](T09-fr050-workflows-directory-reorganization.md))
- Changing RW/UKW gate validators (FR-097/092 layering remains)

---

## Input

- [E02:S13:T05 gap log](T05-create-gap-log-and-risk-assessment.md) — Gap 2 (GAP-WFMGT-INTG-001)
- [E07:S07:T01 report §5 H3](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [E02:S13:T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md) — remediation package R2
- [integration-alignment-report.md](integration-alignment-report.md)
- [IPP-E02S13T10 plan](../../../../implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md)

---

## Deliverable

- Consolidated kanban transform approach (shared module and/or unified entrypoint documentation)
- Drift risk reduced between RW Step 7, UKW, and `update_kanban_docs.py`
- IPP required before code changes (FR-083)

---

## Acceptance Criteria

- [x] Shared transform logic documented or extracted to single module
- [x] Boundary doc published under workflow-mgt KB (when to use script vs agent paths)
- [x] FR-092 four-surface contract preserved across all three paths
- [x] No regression in `validate_board_stamp_diff.py` / Step 7 validators
- [x] `rw_config_loader` consolidation completed (validators/scripts call the shared loader; parity tests added/passing)
- [x] IPP linked before implementation (FR-083)

---

## Version Anchor

✅ COMPLETE (v0.2.13.10+1)

---

## Dependencies

- **Blocked by:** IPP for this task (see linked IPP plan)
- **Feeds:** E02:S13:T06 Criterion 6 (HIGH gap filed)

---

## References

- [T06 RC sign-off](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T05 gap log — Gap 2](T05-create-gap-log-and-risk-assessment.md)
- [FR-092](../../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [IPP-E02S13T10 plan](../../../../implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md)
- [ADR-020: Kanban transform entrypoint + `rw_config_loader` unification](../../../../architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md)
- [KB: Kanban transform entrypoint boundary](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/kanban-transform-entrypoint-boundary.md)
- [KB: `rw_config_loader` entrypoint boundary](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-config-loader-entrypoint-boundary.md)
