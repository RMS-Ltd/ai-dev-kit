---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T44 — TSP workflow story parity (FR-143 / K-01)

**Task ID:** E06:S09:T44  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-07-01  
**Last updated:** 2026-07-01 (v0.6.9.44+1 — RW FR-143 @ **v0.6.9.44+1**)  
**Version:** v0.6.9.44+1  
**Version Anchor:** v0.6.9.44+1

**Planning:** [IPP-E06S09T44](../../../implementation-cycles/IPP-E06S09T44-tsp-workflow-story-parity-fr143.md)  
**Code:** E06S09T44

**Parent intake:** [E06:S09:T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) · [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88)

**Upstream:** [FR-143](../../../fbu/FR-143-tsp-workflow-story-parity-guided-kma-preflight.md) · [FR-136](../../../fbu/FR-136-guided-kma-target-structure-pack.md)

**Evidence:** [FB-ADK-K01](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K01-issue3-e02-workflow-story-collapse.md)

---

## Summary

Implement **FR-143**: guided KMA preflight and TSP pack templates so operator sign-off trees include **one E02 story per workflow-registry entry**, preventing RW-only E02 collapse (SBL attempt 12 / K-01).

---

## Scope

Ship framework TSP companions and deterministic preflight so guided KMA warns or blocks when `workflow-registry.yaml` has more workflows than E02 story shells in the operator TSP — addressing SBL attempt 12 K-01 without requiring manual operator archaeology.

---

## Input

- [E06:S09:T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) routing K-01 → FR-143
- [FB-ADK-K01](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K01-issue3-e02-workflow-story-collapse.md) evidence
- [FR-136](../../../fbu/FR-136-guided-kma-target-structure-pack.md) TSP / scorer baseline
- [IPP-E06S09T44](../../../implementation-cycles/IPP-E06S09T44-tsp-workflow-story-parity-fr143.md)

---

## Deliverable

| # | Artifact |
|---|----------|
| 1 | `E02-WORKFLOW-STORY-MAP.template.md` + reference README amendment hook |
| 2 | `kma_workflow_story_parity.py` + `validate_kma_workflow_story_parity.py` |
| 3 | `workflow_story_parity` rubric dimension in scorer |
| 4 | K-01 pytest fixture under `tests/fixtures/kma-workflow-story-parity-k01/` |
| 5 | KMA execution guide Step 1b preflight documentation |

---

## Deliverables (checklist)

| # | Deliverable |
|---|-------------|
| 1 | `E02-WORKFLOW-STORY-MAP.md` reference in framework TSP template |
| 2 | Guided KMA preflight: registry count vs E02 story headings |
| 3 | Rubric dimension: workflow story parity |
| 4 | TSP / issue template amendment hook documentation |
| 5 | pytest fixture from attempt 12 K-01 scenario |

---

## Acceptance Criteria

- [x] **AC1:** Preflight warns/fails when `workflow-registry.yaml` count > E02 stories in TSP.
- [x] **AC2:** Framework reference TSP includes workflow story map pattern.
- [x] **AC3:** FR-143 requirements F1–F5 addressed or explicitly deferred with issue link.
- [x] **AC4:** RW release anchors E06:S09:T44.

---

## RW trigger

```
RW E06:S09:T44 --art
```
