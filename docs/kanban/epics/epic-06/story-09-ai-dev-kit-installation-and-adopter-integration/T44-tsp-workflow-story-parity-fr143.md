---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T44 — TSP workflow story parity (FR-143 / K-01)

**Task ID:** E06:S09:T44  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-07-01  
**Last updated:** 2026-07-01  
**Code:** E06S09T44

**Parent intake:** [E06:S09:T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) · [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88)

**Upstream:** [FR-143](../../../fbu/FR-143-tsp-workflow-story-parity-guided-kma-preflight.md) · [FR-136](../../../fbu/FR-136-guided-kma-target-structure-pack.md)

**Evidence:** [FB-ADK-K01](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K01-issue3-e02-workflow-story-collapse.md)

---

## Summary

Implement **FR-143**: guided KMA preflight and TSP pack templates so operator sign-off trees include **one E02 story per workflow-registry entry**, preventing RW-only E02 collapse (SBL attempt 12 / K-01).

---

## Deliverables

| # | Deliverable |
|---|-------------|
| 1 | `E02-WORKFLOW-STORY-MAP.md` reference in framework TSP template |
| 2 | Guided KMA preflight: registry count vs E02 story headings |
| 3 | Rubric dimension: workflow story parity |
| 4 | TSP / issue template amendment hook documentation |
| 5 | pytest fixture from attempt 12 K-01 scenario |

---

## Acceptance criteria

- [ ] **AC1:** Preflight warns/fails when `workflow-registry.yaml` count > E02 stories in TSP.
- [ ] **AC2:** Framework reference TSP includes workflow story map pattern.
- [ ] **AC3:** FR-143 requirements F1–F5 addressed or explicitly deferred with issue link.
- [ ] **AC4:** RW release anchors E06:S09:T44.

---

## RW trigger

```
RW E06:S09:T44 --art
```
