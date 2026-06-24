---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 1, Task 14: Comprehensive repository file-level audit within audited directories

**Task ID:** E07:S01:T14  
**Status:** ✅ COMPLETE (v0.7.1.14+1)  
**Priority:** HIGH  
**Estimated Effort:** Very large (scoped file inventory + valuation matrix + maintainer sign-off)  
**Created:** 2026-06-23  
**Last updated:** 2026-06-24 (RW E07:S01:T14 --art @ v0.7.1.14+1)  
**Version Anchor:** v0.7.1.14+1  
**Code:** E07S01T14

Publication Status: NOT_APPLICABLE (investigation complete; maintainer sign-off §4 @ 2026-06-24)

---

## Scope

Deliver [UXR-034](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md): a **file-level repository audit** scoped to directories validated by [UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md) / [E07:S01:T13](T13-comprehensive-repository-directory-structure-audit-uxr033.md) — inventory every file within the audited directory structure, classify each by purpose vs legacy orphan, and recommend optimal placement — **without** performing file moves in this task.

**Problem:** [UXR-033](T13-comprehensive-repository-directory-structure-audit-uxr033.md) answers “what is this **folder** for?” but not “what is this **file** for, and does it still belong here?” Operators and agents need a per-file valuation matrix tied to directory audit outcomes before confident cleanup waves.

**Solution:** Mirror UXR-033 inventory-first pattern at file granularity — scope from T13 → per-directory file capture → per-file rubric → wave recommendations → sign-off → hand off execution to scoped follow-on tasks.

---

## Source FR/BR/UXR

- **[UXR-034](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)** — requirements, rubric, and acceptance direction
- **[UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)** — **paired directory audit** (scope authority; bidirectional contextual awareness)
- **[FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** — broader project review (coordinates; does not duplicate execution)
- **[FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md)** — **program umbrella** (steady-state IA governance; T14 cartography leg; [E07:S01:T15](T15-repository-information-architecture-steady-state-governance-fr140.md))
- **[UXR-013](../../../fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)** — root-only file hygiene ([E07:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md))

---

## Input

- **UXR-033 / T13 outputs:** audited directory list, per-directory purpose class, location verdict, exclusion rules, wave plan (minimum: phase 1–2 complete)
- Current repository file tree within in-scope directories
- Prior inventories: [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md), [KANBAN-REHOUSING-INVENTORY.md](../../../../governance/KANBAN-REHOUSING-INVENTORY.md)
- `rw-config.yaml`, `AGENTS.md`, framework package README boundaries
- **IPP (planning):** [`IPP-E07S01T14-comprehensive-repository-file-level-audit.md`](../../../../implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md) — IPW complete @ 2026-06-23

---

## Deliverable

| Phase | Output | Gate |
| ----- | ------ | ---- |
| **0 — IPW** | `IPP-E07S01T14-*.md` (investigation spec, rubric template, report path, scope import from T13) | ✅ Complete |
| **1 — Scope import** | In-scope directory list + exclusions imported from UXR-033 audit report | ✅ Complete — see [REPOSITORY-FILE-AUDIT.md](../../../../maintenance/REPOSITORY-FILE-AUDIT.md) §0 |
| **2 — File capture** | Per-directory deterministic file inventory (machine-assist + human review) | ✅ Complete — §1; governor + 4 sub-agents @ 2026-06-24 |
| **3 — Valuation matrix** | Per-file rows: purpose class, purpose statement, location verdict, evidence, reference touch, parent-directory alignment | ✅ Complete — 572 rows §2 |
| **4 — Wave plan** | Grouped file recommendations: keep · relocate · merge · archive · remove | ✅ Complete — §3 |
| **5 — Sign-off** | Maintainer approval on file audit report; rollup feedback to T13 where applicable | ✅ Complete — §4 @ 2026-06-24 |

**Audit report housing (IPP-finalized):** [`docs/maintenance/REPOSITORY-FILE-AUDIT.md`](../../../../maintenance/REPOSITORY-FILE-AUDIT.md) — see [IPP-E07S01T14](../../../../implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md) §6.

### Per-file valuation rubric (minimum columns)

| Column | Values / notes |
| ------ | -------------- |
| Path | Relative from repo root |
| Parent directory | Must exist in UXR-033 audited set |
| Purpose class | Framework SoT · Dev-kit specialisation · Operational · Generated/vendor · Legacy/transitional · Duplicate/mirror · Unknown/orphan |
| Purpose statement | One line; “none identified” if orphan |
| Location verdict | Optimal · Acceptable · Suboptimal (proposed path) · Archive/remove · Merge/consolidate candidate |
| Evidence | Policy, README, import/link graph, or gap note |
| Reference touch | Low / Medium / High |
| Parent-directory alignment | Consistent · Tension (conflicts with UXR-033 directory class) |
| Wave | Recommendation bucket + dependency notes |

---

## Acceptance Criteria

- [x] **AC0:** IPP linked from this task before investigation execution.
- [x] **AC1:** Scope imported from UXR-033 / T13 with documented exclusions; no file valuation outside audited directories without explicit maintainer exception.
- [x] **AC2:** Every **non-excluded** file in in-scope directories has a valuation row with all rubric columns populated or explicitly marked `NEEDS_REVIEW` / class summary per RNF6.
- [x] **AC3:** Duplicate/mirror files across `packages/` and `greenfield-install/` documented with SoT pointer per pair where applicable.
- [x] **AC4:** Wave plan cross-references T10, T13, UXR-032, FR-039 to avoid duplicate movers.
- [x] **AC5:** Maintainer sign-off recorded on file audit report before any structural implementation is authorized.
- [x] **AC6:** UXR-034 status reconciled; four-surface RW Step 7 on release.
- [x] **AC7:** Rollup summary fed back to UXR-033 / T13 (orphan counts, hotspot paths) where T13 sign-off is still open.

---

## Approach

1. **`IPW E07:S01:T14`** — Define scope import from T13, rubric, report location, completeness validation.
2. **Import scope** — Load audited directory list and exclusions from UXR-033 report; document any provisional scope if T13 incomplete.
3. **Capture files** — Script-assisted listing per directory; human normalization (symlinks, empty files, generated artifacts).
4. **Valuate each file** — Apply rubric; cite evidence; flag orphans, mirrors, and suboptimal placements; note parent-directory tension.
5. **Draft wave plan** — Prioritize by reference touch and strategic value; link execution to existing or new tasks.
6. **Maintainer review** — Sign-off gate; no `git mv` / deletes in this task.
7. **Feed back** — Update T13 / UXR-033 with file-level rollups where practical.

---

## Dependencies

**Depends On:**

- [UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md) / [E07:S01:T13](T13-comprehensive-repository-directory-structure-audit-uxr033.md) — directory audit baseline (authoritative scope) — **satisfied** @ [`REPOSITORY-DIRECTORY-AUDIT.md`](../../../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) v0.7.1.13+1
- [FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md) — program umbrella + **T14 release gate** (FR-140-F13): investigation may proceed; structural movers still gated
- IPW package for `E07:S01:T14` — **satisfied** @ [`IPP-E07S01T14`](../../../../implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md)

**Blocks:**

- Prioritized, evidence-based **file-level** repository reorganization within validated directories
- Informed execution on [FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) and directory wave follow-ons from T13

**Coordinates With:**

- [E07:S01:T13](T13-comprehensive-repository-directory-structure-audit-uxr033.md) — **paired directory layer** (bidirectional contextual awareness)
- [E07:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md) — root file hygiene (narrower; avoid duplicate root passes)
- [E04:S19:T14](../../epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T14-fr-br-directory-rename-to-fbu-uxr032.md) — `fbu/` → `fbu/` path rename

---

## Cross-Wiring

**Planning artifact:**

- **[IPP-E07S01T14: Comprehensive repository file-level audit](../../../../implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md)** — **Governs** — Investigation spec, rubric, report housing, capture waves.

**Associated UXR:**

- **[UXR-034: Comprehensive repository file-level audit within audited directories](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)** — **Informs** — Defines file investigation scope and rubric.
- **[UXR-033: Comprehensive repository directory structure audit](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)** — **Paired / scope authority** — Directory layer; T14 consumes T13 outputs and may feed back rollups.

**Related FR:**

- **[FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** — **Coordinates With** — Broader cleanup program; file audit feeds prioritization.
- **[FR-140](../../../fbu/FR-140-repository-information-architecture-steady-state-governance.md)** — **Governs** — Program umbrella; file cartography leg; aggregation map for deconflicted waves.

---

## Next Actions

- [x] Run `IPW E07:S01:T14` in plan mode — **complete** @ 2026-06-23 ([IPP-E07S01T14](../../../implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md)).
- [x] Produce `IPP-E07S01T14-*.md` under `docs/implementation-cycles/`.
- [x] Execute investigation phases 1–5 after **`IDW E07:S01:T14`** authorization — **complete** @ 2026-06-24 ([REPOSITORY-FILE-AUDIT.md](../../../../maintenance/REPOSITORY-FILE-AUDIT.md); sign-off §4 @ 2026-06-24).
- [x] Obtain maintainer sign-off on file audit report.
- [x] `RW E07:S01:T14 --art` — v0.7.1.14+1
- [x] Run `RW -k E07:S01:T14` / `RW E07:S01:T14 --art --dpz` — kanban init @ v0.7.1.14+0

---

## References

- [IPP-E07S01T14 — Planning package](../../../implementation-cycles/IPP-E07S01T14-comprehensive-repository-file-level-audit.md)
- [REPOSITORY-FILE-AUDIT.md](../../../../maintenance/REPOSITORY-FILE-AUDIT.md) — **primary investigation deliverable**
- [REPOSITORY-DIRECTORY-AUDIT.md](../../../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) — T13 scope authority
- [UXR-034](../../../fbu/UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md)
- [UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)
- [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md)
- [KANBAN-REHOUSING-INVENTORY.md](../../../../governance/KANBAN-REHOUSING-INVENTORY.md)
- [ADR-026](../../../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
