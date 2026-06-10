---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 27: Kanban v3.2 package rewrite for installer (F9/F17)

**Task ID:** E06:S09:T27  
**Status:** COMPLETE  
**Priority:** CRITICAL  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10 (v0.6.9.27+2 — RW E06:S09:T27; fingerprint validator path fix)  
**Version:** v0.6.9.27+2  
**Version Anchor:** v0.6.9.27+2  
**Code:** E06S09T27

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) — Attempt 05 gate  
**Planning package:** [IPP-E06S09T27](../../../../implementation-cycles/IPP-E06S09T27-kanban-v32-package-rewrite-installer-f9-f17.md)

**Related:** [F9/F17 triage](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) · [07-package-migration-blueprint](../../../../knowledge/analysis/kanban-v2/07-package-migration-blueprint.md) · [09-ultimate-canonical v3.2](../../../../knowledge/analysis/kanban-v2/09-ultimate-canonical-kanban-structure-v3.md) · [T26 Attempt 05 gate](T26-starborn-legacy-adk-install-program.md#attempt-05-gate--install-latest-framework-operator-intent)

---

## Scope

Ship **Kanban v3.2.0** packaged templates into the greenfield installer so `--mode fresh` no longer deploys the v1 catalog (`Epic 5: FR Implementation`). Unblocks Starborn Legacy **attempt 05** and all adopters expecting the ratified framework.

---

## Input

- [F9/F17 triage](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) — four failed v1 installs (attempts 1–4)
- [07-package-migration-blueprint](../../../../knowledge/analysis/kanban-v2/07-package-migration-blueprint.md) — operator sign-off lifted via [T26 Attempt 05 gate](T26-starborn-legacy-adk-install-program.md)
- [IPP-E06S09T27](../../../../implementation-cycles/IPP-E06S09T27-kanban-v32-package-rewrite-installer-f9-f17.md)

---

## Problem statement

| Issue | Detail |
|-------|--------|
| F9/F17 | `migrate_structure._install_canonical_epics()` installs v1 epic list; `templates/epics/epic-05-FR-Implementation.md` wins template resolution |
| Attempts 1–4 | Four independent proofs on `v0.4.1063` → `v0.4.1131` |
| Analysis vs installer | v3.2 ratified in [08-executive-summary](../../../../knowledge/analysis/kanban-v2/08-executive-summary.md); blueprint Waves 1–4 never executed |

---

## Deliverable

1. **v3.2 fresh-install catalog** — epic list E01–E10 (Small tier); FR/BR/UXR as **E04:S02–S04** stories, not standalone epics.
2. **Template pack** — `templates/epics/` primary files remapped to v3.2 semantics (E05 Project Architecture, etc.).
3. **Installer** — `kanban_v32_catalog.py` SoT; `install_canonical_epics_only` installs core stories for E04.
4. **Fingerprint validator** — fail sign-off / CI if v1 catalog detected post-fresh.
5. **Greenfield mirror** — `sync_greenfield_install.py` after `packages/frameworks/` changes.
6. **INSTALL** — document v3.2 fresh-install contract; authorize attempt 05 on new ADK pin.

---

## Acceptance criteria

- [x] **AC1:** `--mode fresh` installs epics **1–10** per v3.2 Small tier; **not** v1 list `[1–8, 10, 18, 22, 23]`.
- [x] **AC2:** On-disk fingerprint PASS — `epic-05` title is **Project Architecture**, not FR Implementation; **E04:S02** story exists for FR intake.
- [x] **AC3:** `validate_kanban_v32_fingerprint.py --strict` passes on clean fresh-install output (`tests/kanban/test_kanban_v32_fresh_install.py`).
- [x] **AC4:** `greenfield-install/` mirror synced; new ADK release cut via RW @ **v0.6.9.27+1** / SemVer **v0.4.1132+1**.
- [x] **AC5:** [T26](T26-starborn-legacy-adk-install-program.md) attempt 05 authorized — adopter pin **`v0.4.1132`** (not `v0.4.1131`).

---

## Out of scope (follow-on tasks)

- Full blueprint Wave 2 layout collapse (457 nested `epic-NN/` files) — incremental
- F10 orchestrator `--skip-kanban`; F18–F20 RW installer UX (separate releases)
- SBL migration test execution (adopter attempt 05)
