---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T13:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 1, Task 12: Promote Kanban to `docs/kanban/` and retire `project-management/` (FR-118)

**Task ID:** E07:S01:T12  
**Status:** ✅ COMPLETE (v0.7.1.12+2)  
**Priority:** HIGH  
**Estimated Effort:** Large (multi-wave; inventory + IPW + phased execution)  
**Created:** 2026-06-08  
**Last updated:** 2026-06-08 (v0.7.1.12+2 — FR-118 complete)  
**Version Anchor:** v0.7.1.12+2  
**Code:** E07S01T12

Publication Status: NOT_APPLICABLE (IPP required before implementation — see Approach)

---

## Task ID

**Full Task ID:** `E07:S01:T12`

---

## Scope

Deliver [FR-118](../../../fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md): inventory-first promotion of the book-repo Kanban tree from `docs/kanban/` to **`docs/kanban/`**, deletion of vestigial `docs/project-management/rituals/`, and repository-wide path rewire before RC.

**Problem:** `project-management/` is an empty shell around `kanban/` after FR-101; `rituals/` is stub-only. Legacy paths propagate through `rw-config`, framework installer defaults, agent bootstrap, validators, and ~100+ script/doc touchpoints.

**Solution:** Mirror [E07:S01:T11](T11-consolidate-governance-under-docs-governance-fr101.md) / [FR-101](../../../fbu/FR-101-consolidate-governance-under-docs-governance.md) — inventory → IPW → phased `git mv` + link sweeps → verification gates.

---

## Source FR/BR/UXR

- **[FR-118](../../../fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md)** — requirements and acceptance criteria
- **[UXR-013](../../../fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)** — legacy structural rationalization (related)
- **[FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** — project review / clean-up (related; T10)

---

## Input

- **IPP (planning):** [IPP-E07S01T12-kanban-path-promotion-fr118.md](../../../../implementation-cycles/IPP-E07S01T12-kanban-path-promotion-fr118.md)
- **Phase 0 inventory:** [KANBAN-REHOUSING-INVENTORY.md](../../../../governance/KANBAN-REHOUSING-INVENTORY.md) (signed off 2026-06-08)
- **[GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md)** — inventory methodology (FR-101 precedent)
- **[apply_e6s07_path_migration_3b.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/apply_e6s07_path_migration_3b.py)** — scripted path migration precedent

---

## Deliverable

| Wave | Output | Gate |
| ---- | ------ | ---- |
| **0 — Inventory** | `KANBAN-REHOUSING-INVENTORY.md` + maintainer sign-off | **Blocks all moves** |
| **1 — IPW** | `IPP-E07S01T12-*.md` (spec, test design, implementation plan with wave boundaries) | **Blocks implementation** |
| **A — Rituals** | Delete `rituals/`; active-surface link sweep (framework KB, `AGENTS.md`, `kb_stub_sweep.py`, governance refs) | RW wave A |
| **B — Move tree** | `git mv` → `docs/kanban/`; retire `project-management/` | RW wave B |
| **C — Runtime** | `rw-config.yaml`, agent manifest, `.cursorrules` / `.claude/commands`, pre-commit | RW wave C |
| **D — Framework** | Installer default, workflow YAMLs, example configs, `sync_greenfield_install.py` | RW wave D (+ PVW if package bump) |
| **E — Verify** | `validate_actions_ci_parity`, install tests, Docusaurus, `rg` hygiene script or checklist | Blocking before close |
| **F — Adopters** | `INSTALL_IN_YOUR_PROJECT.md` migration section; optional migration helper | RW wave F or doc-only |

---

## Acceptance Criteria

- [x] **AC0:** Kanban rehousing inventory complete and **maintainer-approved** before any `git mv`.
- [x] **AC1:** [FR-118](../../../fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md) FR-118-F1..F8 satisfied.
- [x] **AC2:** IPP linked from this task before implementation (`IPP-E07S01T12-*.md`).
- [x] **AC3:** `kanban_root: docs/kanban` in `rw-config.yaml`; RW Step 7 four-surface reconciliation passes on final wave.
- [x] **AC4:** Active-surface `rg` for `project-management/kanban` returns clean (changelog archive exempt per FR-118-F7).
- [x] **AC5:** CI parity green on `dev` after final wave.

---

## Approach (safe execution order)

1. **Inventory (Wave 0)** — Classify every reference: scripts, YAML, markdown, tests, CI, portal. Tag MOVE / REWRITE / STUB / OUT. Estimate blast radius per wave.
2. **Maintainer sign-off** — No execution without explicit approval on inventory table (same as FR-101 AC0).
3. **`IPW E07:S01:T12`** — Produce IPP with:
   - Wave boundaries and rollback per wave
   - Test design: install fresh, RW smoke, UKW smoke, link validators
   - Explicit **forbidden**: single-commit full rewire
4. **Wave A (low risk)** — Rituals deletion + link sweep; RW; verify parity.
5. **Wave B (core move)** — `git mv` kanban tree; update `rw-config`; immediate validator run.
6. **Waves C–D** — Agents, framework, greenfield; may span multiple RW builds.
7. **Wave E** — Full verification matrix from IPP.
8. **Wave F** — Adopter docs; close FR-118 IMPLEMENTED via **RW E07:S01:T12**.

**Rollback (per wave):** `git revert` of wave commit; restore `rw-config` paths; do not force-move release tags (BR-097).

---

## Dependencies

**Depends On:**

- [FR-101](../../../fbu/FR-101-consolidate-governance-under-docs-governance.md) / [T11](T11-consolidate-governance-under-docs-governance-fr101.md) — governance already under `docs/governance/` (rituals stubs are safe to remove after sweep)

**Blocks / enables:**

- Cleaner RC docs layout; reduces agent cold-start path confusion ([FR-103](../../../fbu/FR-103-agent-bootstrap-and-task-routing.md) routing table paths)
- Framework adopter default path alignment (coordinate with E04/E06 if package version bump required)

---

## Checklist (execution — do not start until IPW complete)

- [x] Wave 0: Inventory drafted
- [x] Wave 0: Maintainer sign-off
- [x] Wave 1: IPP filed and linked
- [x] Wave A: Rituals removed
- [x] Wave B: `docs/kanban/` live
- [x] Waves C–D: Config + framework rewired
- [x] Wave E: Verification green
- [x] Wave F: Adopter migration docs
- [x] FR-118 closure + task COMPLETE

---

## References

- [FR-118](../../../fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md)
- [T11 — FR-101 governance consolidation](T11-consolidate-governance-under-docs-governance-fr101.md)
- [IPP-E07S01T12 — kanban path promotion](../../../../implementation-cycles/IPP-E07S01T12-kanban-path-promotion-fr118.md)
- [IPP-E7S01T11 — governance IPP](../../../../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md) (methodology reference)
- [KANBAN-REHOUSING-INVENTORY.md](../../../../governance/KANBAN-REHOUSING-INVENTORY.md)
- [ADR-007](../../../../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md)
