---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 25: Starborn Legacy greenfield install diary — triage & upstream reaction

**Task ID:** E06:S09:T25  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-09  
**Last updated:** 2026-06-09 (v0.6.9.25+3 — RW E06:S09:T25 --art; attempt 2 + F9)  
**Version:** v0.6.9.25+3  
**Version Anchor:** v0.6.9.25+3  
**Code:** E06S09T25

**Upstream:** [UXR-025](../../../fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md)  
**Source diary:** [starborn-legacy-greenfield-install-diary.md](../../../../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md)  
**Planning package:** [IPP-E06S09T25](../../../../implementation-cycles/IPP-E06S09T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)

**Related:** [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) · [FR-081](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md) · [FR-108](../../../fr-br/FR-108-install-setup-error-code-registry-and-emission.md) · [FR-079](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) · [E06:S09:T01](T01-greenfield-installation-process-fr080.md) · [E06:S09:T23](T23-greenfield-install-github-packages-delivery-uxr021.md)

---

## Summary

Triage the **Starborn Legacy** greenfield install diary (`v0.4.1063` tarball) and drive maintainer **upstream reaction**: triage matrix, doc updates, and filed or implemented fixes for orchestrator non-interactive failure (`ADK-I01.S01`) and vendor-root / `packages` path gap.

---

## Input

- [UXR-025](../../../fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md)
- [starborn-legacy-greenfield-install-diary.md](../../../../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md) — canonical maintainer copy
- ADK release pin `v0.4.1063`; error code `ADK-I01.S01` from orchestrator run
- Positive signals: tarball acquisition, Kanban fresh sign-off ALL READY

---

## Deliverables

1. **Triage matrix** — disposition per UXR-025 finding (F1–F8): fix / doc / defer / adopter decision.
2. **Upstream reactions** for **F4** (orchestrator non-interactive RW prompt) and **F5** (`--vendor-root` vs `packages/` subprocess paths) — implement or file child BR/tasks with links.
3. **Install docs** — update `INSTALL_IN_YOUR_PROJECT.md` and/or `greenfield-install/README.md` for tarball-on-low-disk and `packages` symlink contract when frameworks stay under `vendor/`.
4. **Scope-closure note** — document adopter decision to retain legacy E/S/T kanban (FR-081 brownfield deferral); not a greenfield defect.
5. Optional: prepare FR-079 feedback payload template from diary session metadata for future client installs.

---

## Acceptance Criteria

- [x] **AC1:** Triage matrix committed under `docs/knowledge/analysis/projects/` (or linked IPP) and referenced from UXR-025.
- [x] **AC2:** F4 and F5 each have a tracked outcome (merged fix, open BR, or explicit defer with rationale).
- [x] **AC3:** Install docs mention tarball preference when disk-constrained; document `packages` → `vendor/.../packages` symlink when using vendor-only layout.
- [x] **AC4:** UXR-025 status advanced toward RESOLVED when AC1–AC3 satisfied.
- [x] **AC5:** No false claim that SBL adopted ADK template kanban — diary Phase 8 scope closure preserved.

---

## Suggested execution order

1. IPW (if installer code changes required for F4/F5).
2. Doc-only wave if triage concludes docs sufficient for F1/F2/F6.
3. RW on `E06:S09:T25` when deliverables ship.

---

## Post-closure addendum — attempt 2 + F9 (2026-06-09)

**Not in original T25 scope** (task COMPLETE @ v0.6.9.25+2). Recorded for attempt 3 / future install work.

| Item | Detail |
|------|--------|
| Attempt 2 diary | [adk-install-into-sbl/attempt-02](../../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) |
| UXR-025 F4/F5 | Verified on `main` @ `97ff2834`; attempt 2 orchestrator exit 0 |
| Adopter intent | **Failed** — Kanban `--mode fresh` still ran despite legacy E/S/T scope |
| **F9** | [Triage matrix F9](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) — attempts 1 **and** 2 install **v1** packaged epic catalog (`migrate_structure._install_canonical_epics`), not [Kanban v3.2](../../../../knowledge/analysis/kanban-v2/08-executive-summary.md); sign-off ALL READY ≠ catalog generation |
| Suggested follow-on | INSTALL doc warning; defer package rewrite per [migration blueprint](../../../../knowledge/analysis/kanban-v2/07-package-migration-blueprint.md); orchestrator `--kanban-mode skip` or RW-only greenfield profile |
| Successor task | **E06:S09:T26** — [Starborn Legacy ADK install program](T26-starborn-legacy-adk-install-program.md) @ **v0.6.9.26+1** |

### Attempt 03 intake (T26 scope — 2026-06-09)

| Item | Detail |
|------|--------|
| FB package | [starborn-legacy-adk-feedback-attempt03](../../../../../../starborn-legacy-adk-feedback-attempt03/SUBMISSION.md) — FR-079 **accepted** |
| **F9** | Upgraded **DEFER → BLOCKER** ([F17](../../../../../../starborn-legacy-adk-feedback-attempt03/triage-matrix-attempt03.md) — third v1 catalog proof @ `v0.4.13` / `0.4.1098+1`) |
| Triage | [F10–F17](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) merged |

---

## Associated User Experience Research

**UXR-025:** [Starborn Legacy greenfield install diary](../../../fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md)
