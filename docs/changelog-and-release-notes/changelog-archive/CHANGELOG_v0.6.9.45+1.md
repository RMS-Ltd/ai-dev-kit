# Changelog — v0.6.9.45+1

**Release Date:** 2026-07-01 15:42:19 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 45  
**SemVer:** v0.4.1244+1  
**Task:** E06:S09:T45 — Board timestamp carry-forward (FR-144 / K-02)

---

## Summary

E06:S09:T45 — **Change implemented:** FR-144 board timestamp carry-forward — legacy index builder, restoration helper, UKW/KMA gates, flat-date validator, K-02 pytest fixture.

---

## Changed

- [timestamp_index.py](../../../packages/frameworks/workflow-mgt/scripts/kanban/timestamp_index.py) — legacy corpus harvest
- [restore_board_timestamps.py](../../../packages/frameworks/workflow-mgt/scripts/kanban/restore_board_timestamps.py) — index/report/apply-board
- [validate_flat_date_board.py](../../../packages/frameworks/workflow-mgt/scripts/validation/validate_flat_date_board.py) — post-UKW gate
- [kma_ingest.py](../../../packages/frameworks/kanban/scripts/kma_ingest.py) — `--timestamp-index-out`
- [discover_board_gaps.py](../../../packages/frameworks/workflow-mgt/scripts/kanban/discover_board_gaps.py) — Part (c) homogeneity advisory
- [SEMANTIC-LINEAGE-BOOTSTRAP.template.yaml](../../../packages/frameworks/kanban/reference/templates/SEMANTIC-LINEAGE-BOOTSTRAP.template.yaml)
- UKW + KMA execution guides — FR-144 carry-forward gates
- [test_timestamp_carry_forward_fr144.py](../../../tests/kanban/test_timestamp_carry_forward_fr144.py)

---

## References

- [FR-144](../../kanban/fbu/FR-144-board-timestamp-carry-forward-ukw-kma.md)
- [FB-ADK-K02](../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K02-board-timestamp-loss.md)
