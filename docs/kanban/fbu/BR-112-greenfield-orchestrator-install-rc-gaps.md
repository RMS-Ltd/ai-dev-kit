---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-112: Greenfield orchestrator Install RC path bugs and false failure exit

**Bug ID:** BR-112  
**Priority:** CRITICAL  
**Severity:** CRITICAL (orchestrator reports failure when install largely succeeded; blocks FR-135 / FR-080 AC)  
**Status:** OPEN  
**Kanban init:** v0.6.9.40+0 (RW -k E06:S09:T40 — `--art --dpz`)  
**Source:** SBL install attempt 11 — [FB mirror](../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-greenfield-orchestrator-install-rc-gaps.md)  
**Related:** [FR-135](FR-135-guided-install-orchestrator-zero-manual-steps.md) · [FR-080](FR-080-greenfield-installation-process.md) · [E06:S09:T38](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) · [UXR-029](UXR-029-adk-install-path-experiment.md) · [FR-108](FR-108-install-setup-error-code-registry-and-emission.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**Implementing Task:** [E06:S09:T40](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T40-greenfield-orchestrator-install-rc-gaps-br112.md)  
**SBL evidence:** `adk-install-into-sbl/attempt-11/feedback-package/` · pin `v0.4.1171` · codes `ADK-I01.S03`, `ADK-I03.E90`, `ADK-I04.E01`

---

## Summary

`install_greenfield_path.py` with Arm B + `--run-install-rc --install-rc-strict` **exited 1** on pin **`v0.4.1171`** even though kanban fresh, SQLite init, and post-kanban sign-off largely succeeded. Terminal Install RC **crashed** in `validate_install_rc.py` due to wrong `WORKFLOW_ROOT` (`scripts/` instead of `workflow-mgt/`). Adopter recovery (config, comprehension scaffold, local vendor path fixes) was required for Install RC strict **PASS** — same class as attempt 10 manual tail.

---

## Observed

| Step | Result |
|------|--------|
| RW mode C | PARTIAL — `ADK-I03.E90` workflow file not found |
| Sign-off (pre-kanban) | NOT READY — UXR-017 before kanban step |
| Kanban fresh v4 | SUCCESS |
| Sign-off (post-kanban) | 7 READY |
| SQLite init | SUCCESS |
| Install RC (orchestrator) | **CRASH** — `FileNotFoundError` for `scripts/config/install-rc-checklist.yaml` |
| Orchestrator exit | **1** — "Install RC FAILED" |

Post-recovery: Install RC strict **PASS** (10/11 blocking, 1 skip).

---

## Root cause (kit-side)

1. `validate_install_rc.py`: `WORKFLOW_ROOT = SCRIPT_DIR.parent` resolves to `scripts/` not package root.
2. Orchestrator does not scaffold `COMPREHENSION.md` / forward install input YAML before RC.
3. RC subprocess may invoke bare `python` instead of venv interpreter.
4. Pipeline order: sign-off before kanban produces false NOT READY noise.

---

## Expected

- Orchestrator Arm B + strict RC exits **0** when all blocking rows pass without adopter vendor patches.
- `validate_install_rc.py` resolves checklist path from vendor root / package layout correctly in greenfield tarball.
- FR-135 AC2/AC3 satisfied: ≤5 choice prompts; sqlite + UKW wired without hand edit.

---

## Acceptance criteria

- [ ] Greenfield tarball replay: orchestrator command from attempt 11 FB exits 0; Install RC strict PASS.
- [ ] No adopter edits under `vendor/ai-dev-kit/` required for RC path resolution.
- [ ] pytest covers `WORKFLOW_ROOT` / checklist path from adopter `vendor-root`.
- [ ] [T38](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) AC2/AC3 closable on SBL replay evidence.
