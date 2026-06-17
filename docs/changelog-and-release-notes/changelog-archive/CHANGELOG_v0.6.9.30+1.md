# CHANGELOG v0.6.9.30+1 — BR-107 intake + kanban init (E06:S09:T30)

**Release Date:** 2026-06-10 18:58:25 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 30  
**SemVer (task_touch):** v0.4.1137+1

---

## Summary

**RW -k kanban init (`--art`):** Atomic intake for **BR-107** / triage **F21** — Kanban v3.2 install log epic path padding mismatch (SBL attempt 05). Task doc, BR wiring, story checklist, and board row established. Implementation gated on IPW.

**Note:** `--doc-policy-zero` was requested but resolver rejected (VERSION_BUILD=1; BR-097). Release uses normal first-build **`+1`** on adopted E06:S09:T30.

---

## Change implemented

### Intake (BR-107 / F21)

- New BR: [BR-107](../../kanban/fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) — install logs `epic-N` but disk has `epic-0N`.
- New task: [T30](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md) — status TODO.

### Kanban

- Story 9 checklist row for E06:S09:T30.
- `kboard.md` Could Have row for filed task.

---

## References

- [UXR-017](../../kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)
- SBL evidence: `adk-install-into-sbl/attempt-05/`
