# Changelog v0.2.16.4+12

**Release Date:** 2026-05-26 14:23:53 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 4  
**SemVer:** v0.4.804+12  
**Trigger:** `RW -k E2:S16:T04 --art` (kanban documentation setup)

---

## Summary

Kanban/FBU documentation release: **FR-098** reprioritized to **Must Have (M)** top on `kboard.md` and `fbuboard.md` (phases 2–5 scope); ECC adopter **cheatsheet** published and linked from install/spec paths.

---

## Change implemented

### MoSCOW reprioritization (FR-098)

- **kboard.md** — **E6:S09:T05** row added at top of Must Have (phases 2–5: installer, hooks, AgentShield, adopter docs).
- **fbuboard.md** — **FR-098** moved from Should Have to first Must Have row; priority elevated to MUST.

### Adopter documentation

- **ecc-adk-integration-cheatsheet.md** — new quick-start for optional ECC + ADK layering.
- **ecc-adk-harness-layer-integration-specification.md** — cheatsheet cross-link (§11).
- **INSTALL_IN_YOUR_PROJECT.md** — optional ECC harness step reference.

### SemVer registry

- `task_touch_counter` **804**; mapping `0.2.16.4+12` → `0.4.804+12`.

---

## Version

- **Internal:** `0.2.16.4+12`
- **SemVer:** `0.4.804+12`
- **Primary tag:** `v0.4.804`
- **Internal traceability tag:** `v0.2.16.4+12`

---

## References

- Perpetual UKW task: `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md`
- FR-098: `docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md`
