# Changelog v0.5.1.46+4

**Version:** 0.5.1.46+4  
**Release Date:** 2026-04-10 00:00:00 UTC  
**Epic:** Epic 5 — Documentation Management and Maintenance  
**Story:** Story 1 — FR Repo (PERPETUAL)  
**Task:** E5:S01:T46 — Release Workflow Uses SemVer Tag When task_touch Enabled  
**Build:** 4 (follow-up hardening + release)

---

## Summary

Change implemented: hardened RW Step 1c against IPW status drift (FR-077) and finalized FR-046/T46 SemVer tagging contract updates for `task_touch`, then released under canonical anchor `E5:S01:T46`.

---

## Changed

### Validation / Workflow Hardening

- Added task-scoped IPW drift checks (`--requested E:S:T`) in `validate_ipw_status_drift.py`.
- Integrated FR-077 pre-gate drift detection into `validate_rw_task_complete.py` so TODO plus implementation evidence fails with explicit remediation guidance.
- Expanded validator tests for requested-task drift and RW Step 1c drift-specific diagnostics.

### FR/Task and Docs

- Updated FR-077 and T17 evidence with follow-up hardening decisions.
- Updated RW execution guidance to reflect Step 1.4 releasability semantics and FR-077 pre-gate behavior.
- Completed T46 release preparation updates for FR-046 SemVer tagging behavior alignment.

---

## Notes

- This build addresses recurrent RW blockers caused by implemented-but-TODO task drift and improves operator-facing diagnostics at the mandatory gate.
