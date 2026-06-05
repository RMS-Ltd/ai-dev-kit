# Changelog v0.4.19.12+1

**Release Date:** 2026-06-05 01:23:35 UTC  
**Epic:** 4 | **Story:** 19 | **Task:** 12  
**SemVer:** v0.4.899+1  
**Summary:** Single-board consolidation Wave 1 (UXR-020 R3)

---

## Summary

`RW E04:S19:T12 --art` — **ADR-018** establishes **`kboard.md` as the sole active MoSCOW board**. Added **Verification (V)** band for task-shipped / FBU-open rows; deprecated **`fbuboard.md`** to redirect stub. Policy and guide updates; IPP + UXR-020 intake wired.

---

## Changed

### Architecture

- **ADR-018** — Single kanban board consolidation; three-surface RW Step 7; V-band contract.

### Kanban boards

- **`kboard.md`** — Verification (V) band with 7 migrated rows; E04:S19:T12 on Should Have; ADR-018 header contract.
- **`fbuboard.md`** — Deprecated redirect stub (no active MoSCOW).

### Policy & guides

- `kanban-governance-policy.md` — Single active board table; RW three-surface outputs.
- `kanban-board-guide.md` — Five-way → four-way structure; fbuboard deprecated.
- `fbu-open-taskless-queue.md` — MoSCOW source → `kboard`.

### Planning artifacts

- `IPP-E04S19T12-single-board-consolidation-uxr020.md` — R3 implementation plan.
- `UXR-020` — Research + user R3 decision; Wave 1 closure.

---

## Deferred (IPP Waves 2–3)

- Validator / `update_kanban_docs.py` single-board enforcement
- UKW/RW agent guide full sweep
- Framework install templates

---

## Attempted Fixes

*(None — documentation and board contract change.)*

---

## Related

- [UXR-020](../../project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md)
- [IPP-E04S19T12](../../implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md)
- [ADR-018](../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)
