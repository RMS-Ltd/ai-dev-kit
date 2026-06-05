# Changelog — v0.2.16.4+29

**Release Date:** 2026-06-05 01:19:46 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 4  
**SemVer:** v0.4.898+29  
**Summary:** UKW board hygiene — revert erroneous mirror; prune RESOLVED FBUs; wiring contract

---

## Summary

Change implemented: **E02:S16:T04** (perpetual UKW/kanban hygiene) — comprehensive UKW reconciliation after prior fbuboard→kboard sync error: reverted archived COMPLETE tasks incorrectly re-added to `kboard.md` M/S bands; pruned **RESOLVED** stale rows (**BR-078**, **BR-079**, **BR-080**, **BR-087**) from active `fbuboard.md` with `fbu-completed.md` ledger entries; wired **E02:S16:T05** Ongoing lane; fixed **E02:S01:T17** task-doc status drift; clarified bidirectional wiring contract (task COMPLETE + FBU OPEN = fbuboard-only).

---

## Changed

- **kboard.md** — M/S bands restored to lean state; wiring note cites task docs + `kanban-completed.md` as SoT
- **fbuboard.md** — pruned terminal RESOLVED FBUs; retained verification-pending fbuboard-only rows
- **fbu-completed.md** — ledger entries for pruned BR-078/079/080/087
- **T04** / **Story 016** / **Epic 02** — UKW forensic markers
- **AGENTS.md** / **project-agent-manifest.json** — open-work snapshot refresh

---

## RW Step 7 — four-surface reconciliation

| Surface | Action |
| ------- | ------ |
| Task **E02:S16:T04** | Version anchor **v0.2.16.4+29**; perpetual IN PROGRESS |
| Story **E02:S16** | Tactical overview + UKW hygiene notation **v0.2.16.4+29** |
| Epic **E02** | Story 16 T04 release marker **v0.2.16.4+29** |
| `kboard.md` / `fbuboard.md` | Board metadata **v0.2.16.4+29**; lean active contract |
