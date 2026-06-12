---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S15:T14 — Kanban stamp immutability ADR-029 framework defaults (FR-130)

**Task ID:** E02:S15:T14  
**Status:** COMPLETE  
**Priority:** HIGH (**Should Have**)  
**Created:** 2026-06-12  
**Last updated:** 2026-06-12 (v0.2.15.14+1 — MWF delivery)  
**Version anchor:** v0.2.15.14+1  
**Code:** E02S15T14

**Upstream:** [FR-130 — Kanban stamp immutability ADR-029 framework defaults](../../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)

**Architectural anchor:** [ADR-029](../../../../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md) (**Accepted** 2026-06-12)

**Predecessor:** [E02:S15:T08](T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md) / [FR-097](../../../fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)

**Origin context:** [E06:S09:T26](../../epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) (SBL ADK install program)

**Planning:** [IPP-E02S15T14](../../../../implementation-cycles/IPP-E02S15T14-kanban-stamp-immutability-adr029-fr130.md)

---

## Scope

Implement ADR-029 compliance: flip framework stamp defaults to `non_substantive`, wire RW/UKW/migration call sites explicitly, extend tests, and update governance + workflow docs so stamp immutability is enforced at the architectural layer — not by operator memory.

---

## Input

- [FR-130](../../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)
- [ADR-029](../../../../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md) — compliance checklist
- SBL draft ADR (origin) — homogenized stamps during install meta-work

---

## Deliverable

| # | Deliverable |
| - | ----------- |
| 1 | Default `evidence_mode` → `non_substantive` on `enforce_moscow_row_timestamps_with_stats` and `apply_canonical_row_transform_pipeline` |
| 2 | Audit + fix RW Step 7, UKW, and fbuboard cleanup call sites — explicit `work_authoritative` only with evidence manifest |
| 3 | Migration / KMA / install paths: no `now()` row stamps |
| 4 | Optional CLI `--stamp-substantive` on stamp-normalization entrypoints |
| 5 | `test_stamp_evidence_gate.py` default-mode regression coverage |
| 6 | `kanban-governance-policy.md` + workflow agent guides cross-link ADR-029 |
| 7 | Greenfield install mirror sync (`sync_greenfield_install.py`) |
| 8 | ADR-029 compliance table → all items **Done** |

---

## Acceptance criteria

- [x] **AC1:** Default-args unit tests — no stamp append on hygiene fixture ([FR-130-F1–F3](../../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)).
- [x] **AC2:** RW Step 7 report shows `non_substantive` unless release-complete manifest ([FR-130-F4](../../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)).
- [x] **AC3:** UKW dry-run on homogenized fixture — `validate_board_stamp_diff.py` green ([FR-130-F4](../../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)).
- [x] **AC4:** Migration/KMA fixture replay — zero synthetic `now()` stamps ([FR-130-F6](../../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)).
- [x] **AC5:** Policy + ADR compliance checklist complete ([FR-130-F7](../../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)).
- [x] **AC6:** Validator blocking confirmed on all board-touching workflows ([FR-130 AC6](../../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)).

---

## Approach (high level)

1. **IPW** — produce `IPP-E02S15T14-*.md`; link from this task.
2. Flip Python defaults; grep audit all `enforce_moscow_row_timestamps*` / `apply_canonical_row_transform_pipeline` callers.
3. Update RW/UKW execution docs and `.cursorrules` / command files for default `non_substantive`.
4. Extend tests; run Actions CI parity path on touched scripts.
5. **IDW** → **RW E02:S15:T14** to release.

---

## References

- [IPP-E02S15T08](../../../../implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery.md) (predecessor)
- [validate_board_stamp_diff.py](../../../../../packages/frameworks/workflow-mgt/scripts/validation/validate_board_stamp_diff.py)
- [kanban-governance-policy.md](../../../../../packages/frameworks/kanban/policies/kanban-governance-policy.md)
