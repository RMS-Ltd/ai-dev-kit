---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 1, Task 15: Repository information architecture steady-state governance (FR-140)

**Task ID:** E07:S01:T15  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Large (policy + manifest generator + gates + program wiring)  
**Created:** 2026-06-23  
**Last updated:** 2026-06-23 (v0.7.1.15+0 — RW -k kanban init)  
**Version Anchor:** v0.7.1.15+0  
**Code:** E07S01T15

Publication Status: NOT_APPLICABLE (IPP required before implementation — see Approach)

---

## Scope

Deliver [FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md): the **umbrella governance program** for ai-dev-kit repository information architecture — constitutional policy, machine-generated path manifest, tiered README contract, creation gates, drift detection, and aggregated coordination across cartography and cleanup tracks.

**Problem:** [E07:S01:T13](T13-comprehensive-repository-directory-structure-audit-uxr033.md) and [E07:S01:T14](T14-comprehensive-repository-file-level-audit-uxr034.md) supply investigation matrices but do not define **steady-state rules** that prevent re-bloat or give agents a durable SoT beyond one-off audits.

**Solution:** Layered IA model (policy → cartography → manifest → README tiers → gates) with explicit wiring to T13/T14 as cartography legs and deconfliction against [FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) execution waves.

---

## Source FR/BR/UXR

- **[FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md)** — requirements, aggregation map, T14 release gate
- **[UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)** / **[E07:S01:T13](T13-comprehensive-repository-directory-structure-audit-uxr033.md)** — directory cartography leg
- **[UXR-034](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)** / **[E07:S01:T14](T14-comprehensive-repository-file-level-audit-uxr034.md)** — file cartography leg
- **[FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** — cleanup program parent

---

## Input

- [`REPOSITORY-DIRECTORY-AUDIT.md`](../../../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) — T13 matrix @ v0.7.1.13+1 (SoT map §2.1, waves §3)
- Future [`REPOSITORY-FILE-AUDIT.md`](../../../../maintenance/REPOSITORY-FILE-AUDIT.md) — T14 deliverable (when available)
- [FR-140 aggregation map](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md#aggregated-program-map-explicit--implicit-ia-touchpoints)
- `docs/governance/README.md`, [FR-139](../../../fbu/FR-139-unified-documentation-governance-strategy.md), [ADR-026](../../../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- **IPP (planning):** TBD — run `IPW E07:S01:T15`

---

## Deliverable

| Phase | Output | Gate |
| ----- | ------ | ---- |
| **0 — IPW** | `IPP-E07S01T15-*.md` | Blocks implementation |
| **1 — Policy** | `docs/governance/standards/repository-information-architecture-policy.md` (or IPP-finalized path) | Blocks manifest spec |
| **2 — Manifest** | Generator script + schema + refresh docs; sample output | Blocks gates |
| **3 — Gates** | Creation/drift validator(s); CI/pre-commit integration per IPP | Blocks routing updates |
| **4 — Wiring** | Cross-links in T13, T14, FR-039, `AGENTS.md`, governance README; aggregation table live | Blocks closure |
| **5 — Hand-off** | Mover-wave checklist template linked from policy | Program operational |

---

## Acceptance Criteria

- [ ] **AC0:** IPP linked from this task before implementation.
- [ ] **AC1:** All FR-140 functional requirements F1–F10 addressed or explicitly deferred with rationale in IPP.
- [ ] **AC2:** T14 release gate (FR-140-F13) documented in policy and reflected in T14 dependencies (investigation may proceed; execution waves gated).
- [ ] **AC3:** Aggregation table maintained and matches FR-140 § program map at release time.
- [ ] **AC4:** Manifest generator is deterministic; documented exclusion rules align with T13 audit exclusions.
- [ ] **AC5:** FR-140 four-surface reconciliation on RW Step 7 when task ships.

---

## Approach

1. **`IPW E07:S01:T15`** — Policy outline, manifest schema, gate strictness, perpetual ownership (E02:S16:T04).
2. **Author policy** — Align purpose classes with T13/T14 rubrics; tiered README table; SoT vs mirror rules.
3. **Build manifest generator** — Tree walk + exclusions; JSON/YAML output for agents/validators.
4. **Add gates** — Top-level dir creation minimum; optional manifest drift check (FR-140-F4/F5).
5. **Wire program** — Update cartography tasks, FR-039, governance index; enable T14 `IPW` with FR-140 as program anchor.
6. **`IDW` / `RW`** — Per IPP when operator authorizes implementation.

**Parallel track:** Operator may run **`IPW E07:S01:T14`** once FR-140-F13 preconditions are met (T13 report published); T15 policy completion is not a blocker for T14 investigation.

---

## Dependencies

**Depends On:**

- [E07:S01:T13](T13-comprehensive-repository-directory-structure-audit-uxr033.md) — directory cartography evidence (minimum: published audit report)
- [FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md) — source requirements

**Blocks:**

- Steady-state enforcement (gates, manifest hygiene) after cartography sign-off
- Informed structural cleanup waves beyond raw T13/T14 matrices

**Coordinates With:**

- [E07:S01:T14](T14-comprehensive-repository-file-level-audit-uxr034.md) — file cartography leg (parallel-friendly per FR-140-F13)
- [E07:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md) — root hygiene subset
- [E04:S19:T14](../../epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T14-fr-br-directory-rename-to-fbu-uxr032.md) — path rename ripples
- [E02:S16:T04](../../epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md) — perpetual manifest hygiene

---

## Cross-Wiring

**Associated FR:**

- **[FR-140: Repository information architecture steady-state governance](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md)** — **Implements** — Program umbrella and steady-state deliverables.

**Related UXRs (cartography legs):**

- **[UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)** — **Governs / coordinates** — Directory leg under FR-140.
- **[UXR-034](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)** — **Governs / coordinates** — File leg under FR-140.

**Related FR (program map):**

- [FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), [FR-101](../../../fbu/FR-101-consolidate-governance-under-docs-governance.md), [FR-118](../../../fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md), [FR-110](../../../fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md), [FR-139](../../../fbu/FR-139-unified-documentation-governance-strategy.md) — see FR-140 aggregation table.

---

## Next Actions

- [ ] Run `IPW E07:S01:T15` in plan mode.
- [ ] Run `RW -k E07:S01:T15` when kanban init/version anchor needed.
- [x] Run `RW -k E07:S01:T15 --art --dpz` — kanban init @ v0.7.1.15+0
- [ ] After IPP approval: `IDW E07:S01:T15` when operator authorizes implementation.
- [ ] Notify T14 track: `IPW E07:S01:T14` unblocked per FR-140-F13.

---

## References

- [FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md)
- [REPOSITORY-DIRECTORY-AUDIT.md](../../../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md)
- [FR_BR_INTAKE_GUIDE.md](../../../../../packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md)
