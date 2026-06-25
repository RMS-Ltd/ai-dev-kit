# E06:S09:T40 — Greenfield orchestrator Install RC gaps (BR-112)

**Task ID:** E06:S09:T40  
**Status:** COMPLETE  
**Priority:** CRITICAL  
**Created:** 2026-06-24  
**Last updated:** 2026-06-24 (RW v0.6.9.40+2 — BR-112 verified on SBL replay)  
**Version:** v0.6.9.40+2  
**Code:** E06S09T40

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md)  
**Upstream:** [BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md)  
**Related:** [FR-135](../../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) · [E06:S09:T38](T38-guided-install-orchestrator-fr135.md) · [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

**Evidence:** [VERIFICATION-BR112](../../../../../../adk-install-into-sbl/attempt-11/VERIFICATION-BR112.md) · [orchestrator transcript](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/20260624T200937Z-orchestrator-arm-b.txt) · [install-rc-report-br112.txt](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/install-rc-report-br112.txt) · [FB](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-greenfield-orchestrator-install-rc-gaps.md)

---

## Summary

Fixed greenfield orchestrator false failure on Install RC: `validate_install_rc.py` path resolution in vendor tarball, venv-aware RC subprocess, scaffolding (`COMPREHENSION.md`, install input YAML), and pipeline ordering so Arm B + `--install-rc-strict` exits 0 without adopter vendor patches.

Verified on fresh `pre-adk-install` replay @ pin `v0.4.1224` — orchestrator **EXIT=0**, Install RC strict **PASS**, sign-off **7 READY**.

Unblocks [FR-135](FR-135-guided-install-orchestrator-zero-manual-steps.md) **AC2/AC3** orchestrator path on SBL evidence.

---

## Input

- [BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) and SBL attempt 11 evidence.
- Pin `v0.4.1224` greenfield tarball replay — [VERIFICATION-BR112](../../../../../../adk-install-into-sbl/attempt-11/VERIFICATION-BR112.md).
- [FR-135](../../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) / [E06:S09:T38](T38-guided-install-orchestrator-fr135.md) orchestrator baseline.

**IPW planning artifact (when used):** [IPP-E06S09T40](../../../implementation-cycles/IPP-E06S09T40-greenfield-orchestrator-install-rc-gaps-br112.md)

---

## Deliverable

- `validate_install_rc.py` path resolution fix (`WORKFLOW_ROOT` / checklist from `--vendor-root`).
- `install_greenfield_path.py` RC terminal semantics, venv-aware subprocess, scaffolding order (`COMPREHENSION.md`, install input YAML).
- pytest + greenfield tarball fixture; SBL replay orchestrator exits 0 under `--install-rc-strict`.

---

## Scope

- `validate_install_rc.py` `WORKFLOW_ROOT` / checklist path from `--vendor-root`
- `install_greenfield_path.py` RC terminal step success semantics
- Install RC checklist rows vs adopter scaffolding
- pytest + greenfield tarball fixture

---

## Acceptance criteria

- [x] **AC1:** Attempt 11 orchestrator command exits 0; Install RC strict PASS without vendor edits. — [VERIFICATION-BR112](../../../../../../adk-install-into-sbl/attempt-11/VERIFICATION-BR112.md) @ `aa9ff624`, pin `v0.4.1224`.
- [x] **AC2:** [T38](T38-guided-install-orchestrator-fr135.md) AC2/AC3 satisfied on arm-b non-interactive replay (sqlite, sign-off 7 READY, no vendor patches).
- [x] **AC3:** FR-108 codes documented for failure classes (`ADK-I01.S03`, `ADK-I03.E90`, `ADK-I04.E01`) in [BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) / FB.

---

## Associated BR

[BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) — **FIXED** @ v0.6.9.40+2

---

## Version Anchor

✅ COMPLETE (**v0.6.9.40+2** — RW E06:S09:T40 — BR-112 verified on SBL replay)
