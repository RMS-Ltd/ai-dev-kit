# CHANGELOG v0.6.9.28+1 — BR-105 intake + kanban init (E06:S09:T28)

**Release Date:** 2026-06-10 18:56:09 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 28  
**SemVer (task_touch):** v0.4.1135+1

---

## Summary

**RW -k kanban init (`--art`):** Atomic intake for **BR-105** / triage **F18** — v3.2 fresh install sign-off story padding mismatch (SBL attempt 05). Task doc, BR wiring, story checklist, and board row established. Implementation gated on IPW.

**Note:** `--doc-policy-zero` was requested but resolver rejected (VERSION_BUILD=1; BR-097). Release uses normal first-build **`+1`** on adopted E06:S09:T28 (same precedent as E06:S09:T24+1).

---

## Change implemented

### Intake (BR-105 / F18)

- New BR: [BR-105](../../kanban/fr-br/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md) — BR-086 NOT READY on v3.2 SBL fresh install (`{story:03d}`/`t{task}` vs `{story:02d}`/`T{task}`).
- New task: [T28](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T28-v32-fresh-install-signoff-story-padding-br105.md) — status TODO.

### SBL attempt 05 maintainer analysis (FR-079 path references)

- [T26](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) — attempt 05 log + intake; SBL-owned FB paths.
- [Triage matrix](../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) — attempt 05 addendum; F17 RESOLVED; F18/F19/F21 disposition.
- [adk-install-into-sbl/README.md](../../../../adk-install-into-sbl/README.md) — FR-079 artifact ownership index.

### Kanban

- Story 9 checklist row for E06:S09:T28.
- `kboard.md` Could Have row for filed task.

---

## References

- [BR-086](../../kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)
- [E06:S09:T26](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)
- SBL evidence: `adk-install-into-sbl/attempt-05/`
