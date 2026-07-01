# Changelog — v0.6.9.44+1

**Release Date:** 2026-07-01 15:33:22 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 44  
**SemVer:** v0.4.1243+1  
**Task:** E06:S09:T44 — TSP workflow story parity (FR-143 / K-01)

---

## Summary

E06:S09:T44 — **Change implemented:** Guided KMA workflow story parity preflight (FR-143) — registry vs E02 TSP story shells, `E02-WORKFLOW-STORY-MAP` template, rubric dimension, K-01 pytest fixture.

---

## Changed

- [kma_workflow_story_parity.py](../../../packages/frameworks/kanban/scripts/kma_workflow_story_parity.py) — parity check module
- [validate_kma_workflow_story_parity.py](../../../packages/frameworks/kanban/scripts/validation/validate_kma_workflow_story_parity.py) — guided preflight CLI (`--strict`)
- [E02-WORKFLOW-STORY-MAP.template.md](../../../packages/frameworks/kanban/reference/templates/E02-WORKFLOW-STORY-MAP.template.md) — TSP companion + bootstrap/UKW slot docs
- [SCORING-RUBRIC.template.yaml](../../../packages/frameworks/kanban/reference/templates/SCORING-RUBRIC.template.yaml) — `workflow_story_parity` dimension
- [score_kma_structure.py](../../../packages/frameworks/kanban/scripts/score_kma_structure.py) — rubric integration
- [reference/README.md](../../../packages/frameworks/kanban/reference/README.md) — amendment hook + preflight command
- [kanban-migration-agent-execution.md](../../../packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md) — Step 1b preflight
- [test_kma_workflow_story_parity.py](../../../tests/kanban/test_kma_workflow_story_parity.py) — K-01 regression fixture
- [IPP-E06S09T44](../../../implementation-cycles/IPP-E06S09T44-tsp-workflow-story-parity-fr143.md) — planning package

---

## References

- [FR-143](../../kanban/fbu/FR-143-tsp-workflow-story-parity-guided-kma-preflight.md)
- [FB-ADK-K01](../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K01-issue3-e02-workflow-story-collapse.md)
- [T43](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T43-starborn-legacy-attempt-12-intake-programme-wind-down.md)
