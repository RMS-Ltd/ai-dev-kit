---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T40 — Greenfield orchestrator Install RC gaps (BR-112)

**Task ID:** E06:S09:T40  
**Status:** IN PROGRESS  
**Priority:** CRITICAL  
**Created:** 2026-06-24  
**Last updated:** 2026-06-24 (RW v0.6.9.40+1 — attempted BR-112 fix)  
**Version:** v0.6.9.40+1  
**Code:** E06S09T40

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md)  
**Upstream:** [BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md)  
**Related:** [FR-135](../../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) · [E06:S09:T38](T38-guided-install-orchestrator-fr135.md) · [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

**Evidence:** [attempt-11 FB](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-greenfield-orchestrator-install-rc-gaps.md) · [install-rc-report-final.json](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/install-rc-report-final.json)

---

## Summary

Fix greenfield orchestrator false failure on Install RC: `validate_install_rc.py` path resolution in vendor tarball, venv-aware RC subprocess, scaffolding (`COMPREHENSION.md`, install input YAML), and pipeline ordering so Arm B + `--install-rc-strict` exits 0 without adopter vendor patches.

Unblocks [FR-135](FR-135-guided-install-orchestrator-zero-manual-steps.md) **AC2/AC3** on SBL replay.

---

## Input

- [BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) and SBL attempt 11 evidence ([FB](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-greenfield-orchestrator-install-rc-gaps.md), `install-rc-report-final.json`, `signoff-report.json`).
- Pin `v0.4.1171` greenfield tarball replay path from [attempt-11 preflight](../../../../../../adk-install-into-sbl/attempt-11-preflight-checklist.md).
- [FR-135](../../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) / [E06:S09:T38](T38-guided-install-orchestrator-fr135.md) orchestrator baseline.

**IPW planning artifact (when used):** [IPP-E06S09T40](../../../implementation-cycles/IPP-E06S09T40-greenfield-orchestrator-install-rc-gaps-br112.md)

---

## Deliverable

- `validate_install_rc.py` path resolution fix (`WORKFLOW_ROOT` / checklist from `--vendor-root`).
- `install_greenfield_path.py` RC terminal semantics, venv-aware subprocess, scaffolding order (`COMPREHENSION.md`, install input YAML).
- pytest + greenfield tarball fixture; SBL attempt 11 orchestrator replay exits 0 under `--install-rc-strict`.

---

## Scope

- `validate_install_rc.py` `WORKFLOW_ROOT` / checklist path from `--vendor-root`
- `install_greenfield_path.py` RC terminal step success semantics
- Install RC checklist rows vs adopter scaffolding
- pytest + greenfield tarball fixture

---

## Acceptance criteria

- [ ] **AC1:** Attempt 11 orchestrator command exits 0; Install RC strict PASS without vendor edits.
- [ ] **AC2:** [T38](T38-guided-install-orchestrator-fr135.md) AC2/AC3 satisfied on SBL attempt 11 evidence.
- [ ] **AC3:** FR-108 codes documented for any new failure classes.

---

## Associated BR

[BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md)
