---
lifecycle: proposed
ttl_days: null
created_at: 2026-07-01T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-143: TSP workflow story parity — guided KMA preflight

**Type:** Feature Request (FR)  
**ID:** FR-143  
**Submitted:** 2026-07-01  
**Submitted By:** Maintainer (SBL attempt 12 intake / [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88))  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IMPLEMENTED

**Implementing Task:** [E06:S09:T44](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T44-tsp-workflow-story-parity-fr143.md) @ **v0.6.9.44+1**

**Related:** [FR-136](FR-136-guided-kma-target-structure-pack.md) · [FR-079](FR-079-install-feedback-submission-path-and-governance.md) · [E06:S09:T43](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) · [E06:S09:T42](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T42-sbl-kanban-tsp-operator-overlay-freeze.md) · [SBL #3](https://github.com/RMS-Ltd/starborn-legacy/issues/3)

**Evidence:** [FB-ADK-K01](../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K01-issue3-e02-workflow-story-collapse.md) · [attempt-12 SUBMISSION](../../../adk-install-into-sbl/attempt-12/feedback-package/SUBMISSION.md)

---

## Summary

Operator sign-off TSP packs (e.g. SBL issue #3) can collapse **E02** to a single RW story while adopters ship **13+ workflows** in `workflow-registry.yaml`. Guided KMA must **preflight** registry count vs E02 story shells and ship a reference **workflow story map** in the TSP pack template.

---

## Problem statement

Attempt 12 adopted issue #3 as canonical TSP. E02 listed **1 story · 1 task** (RW only) while `workflow-registry.yaml` registers RW, UKW, CMW, IPW, IDW, MWF, and others. Operator had to amend locally (`E02-WORKFLOW-STORY-MAP.md`) before KMA could proceed. Kit did not warn before operator review.

---

## Requirements

### Functional

- [x] **FR-143-F1:** TSP pack / issue template includes **E02 workflow story map** derived from `workflow-registry.yaml` (≥1 story per registered workflow).
- [x] **FR-143-F2:** Guided KMA preflight compares registry workflow count to E02 story headings in `TARGET-EST-TREE.md`; **major warning or fail** when `registry_count > e02_story_count`.
- [x] **FR-143-F3:** Ship reference `E02-WORKFLOW-STORY-MAP.md` pattern in framework TSP template (`packages/frameworks/kanban/reference/`).
- [x] **FR-143-F4:** Scoring rubric dimension: **workflow story parity** (% registry workflows with matching E02:Sxx shell).
- [x] **FR-143-F5:** Document bootstrap vs UKW slot resolution (v4 CATL S02 vs workflow S02; bootstrap may occupy S15).

### Non-functional

- [x] **FR-143-NF1:** Preflight is advisory in blind KMA; blocking in guided mode when TSP is authority.
- [x] **FR-143-NF2:** Greenfield mirror sync per FR-110 when touching `packages/frameworks/`.

---

## Acceptance criteria

- [x] **AC1:** Fresh guided KMA on workflow-heavy adopter emits preflight warning when TSP E02 stories < registry count.
- [x] **AC2:** Operator sign-off artefact includes ≥1 E02 story per registry workflow without manual archaeology.
- [x] **AC3:** SBL attempt 12 K-01 cross-linked; regression fixture in pytest.

---

## Out of scope (v1)

- Mandatory full E02 story fan-out at greenfield install (optional `--workflow-stories` expander is follow-on)
- Rewriting v4 CATL bootstrap gate semantics in installer (document + TSP only)
