# Changelog v0.2.1.22+1

**Release Date:** 2026-05-26 14:29:04 UTC  
**Epic:** 2 | **Story:** 1 | **Task:** 22  
**SemVer:** v0.4.805+1  
**Trigger:** `RW -k E2:S01:T22 --art` (kanban documentation setup)

---

## Summary

Intake release for **BR-075**: RW perpetual-task releases should persist **`VERSION_BUILD`** increments in `version_file` before kanban/changelog surfaces advance.

---

## Change implemented

### Governance intake (BR-075)

- **BR-075** filed — LOW severity drift risk when `RW` / `RW -k` on perpetual lanes (e.g. **E2:S16:T04**) updates boards before Step 2 writes `version.py`.
- **E2:S01:T22** task created under Story 001 with acceptance criteria (validator, docs, skill path, regression test).
- **Story 001** checklist updated with T22 row.

---

## Version

- **Internal:** `0.2.1.22+1`
- **SemVer:** `0.4.805+1`
- **Primary tag:** `v0.4.805`
- **Internal traceability tag:** `v0.2.1.22+1`

---

## References

- [BR-075](../../project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md)
- [E2:S01:T22](../../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075.md)
