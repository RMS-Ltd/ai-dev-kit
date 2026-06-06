# Changelog v0.8.3.17+1

**Release Date:** 2026-06-06 13:50:20 UTC  
**Epic | Story | Task:** E08:S03:T17 (`RW -k --art`)  
**SemVer (task_touch):** v0.4.1000+1  

## Summary

**Change implemented:** Kanban documentation setup for **FR-113** — local **Code Quality Gate (CQG)** intake. Hybrid trigger policy adopted (**6 h** monitor with HEAD skip / **12 h** staleness cap + RW Step 9 advisory gate). Architectural harmonization requirement: CQG as ADK-native subsystem (`tooling-automation` engine + `workflow-mgt` validator + `rw-config` schema).

## Kanban / intake

- **FR-113** — ACCEPTED; implementing task **E08:S03:T17** wired bidirectionally
- **E08:S03:T17** — Kanban init @ `v0.8.3.17+1`; status **TODO** (awaiting IPW)
- **kboard.md** — T17 row on Should Have (S) band
- **Story 003** — checklist row for T17

## Scope note

Release-scoped to FR-113 / T17 kanban intake documentation only. Unrelated working-tree changes (e.g. T12 maintainability waves) remain unstaged.

## References

- [FR-113](../project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg.md)
- [T17](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)
- [GitHub Code Quality — Metrics and ratings](https://docs.github.com/en/code-security/code-quality/reference/metrics-and-ratings)
