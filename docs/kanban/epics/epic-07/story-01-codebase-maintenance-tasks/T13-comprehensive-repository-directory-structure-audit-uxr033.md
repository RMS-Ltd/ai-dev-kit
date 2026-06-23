---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 1, Task 13: Comprehensive repository directory structure audit

**Task ID:** E07:S01:T13  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large (inventory + valuation matrix + maintainer sign-off)  
**Created:** 2026-06-23  
**Last updated:** 2026-06-23 (investigation deliverable — sign-off pending)  
**Version Anchor:** v0.7.1.13+1  
**Code:** E07S01T13

Publication Status: NOT_APPLICABLE (investigation report delivered; maintainer sign-off pending per audit §4)

---

## Scope

Deliver [UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md): a **whole-repository directory structure audit** that produces a maintainer-approved valuation matrix for every audited directory — purpose vs legacy orphan, and optimal location vs suboptimal — **without** performing structural moves in this task.

**Problem:** Cleanup and rehousing work ([FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), [UXR-013](../../../fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md), FR-101, FR-118) proceeded domain-by-domain without a single repo-wide directory baseline. Operators and agents cannot quickly answer “what is this folder for, and should it live here?”

**Solution:** Mirror FR-101 / FR-118 inventory-first pattern — tree capture → per-directory rubric → wave recommendations → sign-off → hand off execution to scoped follow-on tasks.

---

## Source FR/BR/UXR

- **[UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)** — requirements, rubric, and acceptance direction
- **[FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md)** — program umbrella (steady-state IA governance; [E07:S01:T15](T15-repository-information-architecture-steady-state-governance-fr140.md))
- **[FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** — broader project review (coordinates; does not duplicate file-level execution)
- **[UXR-013](../../../fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)** — root-only hygiene ([E07:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md))
- **[UXR-011](../../../fbu/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)** — kanban naming hygiene

---

## Input

- Current repository tree (all top-level and nested directories per IPP exclusion rules)
- Prior inventories: [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md), [KANBAN-REHOUSING-INVENTORY.md](../../../../governance/KANBAN-REHOUSING-INVENTORY.md)
- `rw-config.yaml`, `AGENTS.md`, framework package README boundaries
- **IPP (planning):** [IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md](../../../../implementation-cycles/IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md)

---

## Deliverable

| Phase | Output | Gate |
| ----- | ------ | ---- |
| **0 — IPW** | `IPP-E07S01T13-*.md` (investigation spec, rubric template, report path, exclusion list) | ✅ Complete |
| **1 — Tree capture** | Deterministic directory inventory (machine-assist + human review) | ✅ Complete — see [REPOSITORY-DIRECTORY-AUDIT.md](../../../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) §1 |
| **2 — Valuation matrix** | Per-directory rows: purpose class, purpose statement, location verdict, evidence, ripple risk | ✅ Complete — 83 depth-0..2 rows §2 |
| **3 — Wave plan** | Grouped recommendations: keep · relocate · consolidate · archive · remove | ✅ Complete — §3 |
| **4 — Sign-off** | Maintainer approval on audit report | ⏳ Pending — §4 checkbox |

**Audit report housing (IPP-finalized):** [`docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md`](../../../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) — see [IPP-E07S01T13](../../../../implementation-cycles/IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md) §6.

### Per-directory valuation rubric (minimum columns)

| Column | Values / notes |
| ------ | -------------- |
| Path | Relative from repo root |
| Purpose class | Framework SoT · Dev-kit specialisation · Operational · Generated/vendor · Legacy/transitional · Unknown/orphan |
| Purpose statement | One line; “none identified” if orphan |
| Location verdict | Optimal · Acceptable · Suboptimal (proposed path) · Archive/remove candidate |
| Evidence | Policy, README, install script, or gap note |
| Ripple risk | Low / Medium / High |
| Wave | Recommendation bucket + dependency notes |

---

## Acceptance Criteria

- [x] **AC0:** IPP linked from this task before investigation execution.
- [x] **AC1:** Complete directory inventory captured with documented exclusion rules (vendor/generated trees).
- [x] **AC2:** Every **non-excluded** directory at depth ≤2 has a valuation row with all rubric columns or `NEEDS_REVIEW`.
- [x] **AC3:** Framework SoT vs dev-kit-local vs `greenfield-install/` mirror classification documented for relevant subtrees.
- [x] **AC4:** Wave plan cross-references existing tasks (T10, T11, T12, UXR-032, FR-039, T14) to avoid duplicate movers.
- [ ] **AC5:** Maintainer sign-off recorded on audit report before any structural implementation is authorized.
- [ ] **AC6:** UXR-033 status reconciled; four-surface RW Step 7 on release.

---

## Approach

1. **`IPW E07:S01:T13`** — Define investigation boundaries, rubric, report location, and validation of completeness.
2. **Capture tree** — Script-assisted listing; human normalization of edge cases (symlinks, empty dirs).
3. **Valuate each directory** — Apply rubric; cite evidence; flag orphans and suboptimal placements.
4. **Draft wave plan** — Prioritize by ripple risk and strategic value; link execution to existing or new tasks.
5. **Maintainer review** — Sign-off gate; no `git mv` / deletes in this task.
6. **Hand off** — Update FR-039 / T10 scopes with pointers to audit sections as needed.

---

## Dependencies

**Depends On:**

- UXR-033 intake ([UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md))
- IPW package for `E07:S01:T13`

**Blocks:**

- Prioritized, evidence-based repository reorganization waves
- [E07:S01:T14](T14-comprehensive-repository-file-level-audit-uxr034.md) / [UXR-034](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md) — file-level drill-down within audited directories
- Informed execution on [E07:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md) and [FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)

**Coordinates With:**

- [E07:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md) — root file hygiene (narrower)
- [E07:S01:T11](T11-consolidate-governance-under-docs-governance-fr101.md) — governance rehousing (complete)
- [E07:S01:T12](T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md) — kanban promotion (complete)
- [E04:S19:T14](../../epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T14-fr-br-directory-rename-to-fbu-uxr032.md) — `fbu/` → `fbu/` path rename

---

## Cross-Wiring

**Associated UXR:**

- **[UXR-033: Comprehensive repository directory structure audit](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)** — **Informs** — Defines investigation scope and rubric.
- **[UXR-034: Comprehensive repository file-level audit within audited directories](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)** / **[E07:S01:T14](T14-comprehensive-repository-file-level-audit-uxr034.md)** — **Paired file layer** — Consumes T13 audited directory scope; may feed back file-level rollups before T13 sign-off.

**Related FR:**

- **[FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** — **Coordinates With** — Broader cleanup program; audit feeds prioritization.
- **[FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md)** / **[E07:S01:T15](T15-repository-information-architecture-steady-state-governance-fr140.md)** — **Governs** — Program umbrella for steady-state IA; this task is **cartography leg A** (directories).

---

## Next Actions

- [x] Run `IPW E07:S01:T13` in plan mode.
- [x] Produce `IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md` under `docs/implementation-cycles/`.
- [x] Execute investigation phases 1–3 — [REPOSITORY-DIRECTORY-AUDIT.md](../../../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) published.
- [ ] Obtain maintainer sign-off on audit report (§4).
- [x] Run `RW E07:S01:T13` / `RW -k E07:S01:T13 --art --dpz` — kanban init @ v0.7.1.13+0

---

## References

- [IPP-E07S01T13 — Investigation plan](../../../../implementation-cycles/IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md)
- [REPOSITORY-DIRECTORY-AUDIT.md](../../../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md)
- [UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)
- [E07:S01:T14 — Paired file-level audit](T14-comprehensive-repository-file-level-audit-uxr034.md) / [UXR-034](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)
- [FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md) / [E07:S01:T15](T15-repository-information-architecture-steady-state-governance-fr140.md)
- [UXR-013](../../../fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md) / [E07:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md)
- [UXR-032](../../../fbu/UXR-032-fr-br-directory-rename-to-fbu.md)
- [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) (FR-101 precedent)
- [KANBAN-REHOUSING-INVENTORY.md](../../../../governance/KANBAN-REHOUSING-INVENTORY.md) (FR-118 precedent)
- [ADR-026](../../../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
