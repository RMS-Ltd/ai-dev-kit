---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 1, Task 13: Comprehensive repository directory structure audit

**Task ID:** E07:S01:T13  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Large (inventory + valuation matrix + maintainer sign-off)  
**Created:** 2026-06-23  
**Last updated:** 2026-06-23 (v0.7.1.13+0 — RW -k kanban init)  
**Version Anchor:** v0.7.1.13+0  
**Code:** E07S01T13

Publication Status: NOT_APPLICABLE (IPP required before investigation execution — see Approach)

---

## Scope

Deliver [UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md): a **whole-repository directory structure audit** that produces a maintainer-approved valuation matrix for every audited directory — purpose vs legacy orphan, and optimal location vs suboptimal — **without** performing structural moves in this task.

**Problem:** Cleanup and rehousing work ([FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), [UXR-013](../../../fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md), FR-101, FR-118) proceeded domain-by-domain without a single repo-wide directory baseline. Operators and agents cannot quickly answer “what is this folder for, and should it live here?”

**Solution:** Mirror FR-101 / FR-118 inventory-first pattern — tree capture → per-directory rubric → wave recommendations → sign-off → hand off execution to scoped follow-on tasks.

---

## Source FR/BR/UXR

- **[UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)** — requirements, rubric, and acceptance direction
- **[FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** — broader project review (coordinates; does not duplicate file-level execution)
- **[UXR-013](../../../fbu/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)** — root-only hygiene ([E07:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md))
- **[UXR-011](../../../fbu/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)** — kanban naming hygiene

---

## Input

- Current repository tree (all top-level and nested directories per IPP exclusion rules)
- Prior inventories: [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md), [KANBAN-REHOUSING-INVENTORY.md](../../../../governance/KANBAN-REHOUSING-INVENTORY.md)
- `rw-config.yaml`, `AGENTS.md`, framework package README boundaries
- **IPP (planning):** TBD — run `IPW E07:S01:T13`

---

## Deliverable

| Phase | Output | Gate |
| ----- | ------ | ---- |
| **0 — IPW** | `IPP-E07S01T13-*.md` (investigation spec, rubric template, report path, exclusion list) | Blocks inventory |
| **1 — Tree capture** | Deterministic directory inventory (machine-assist + human review) | Blocks valuation |
| **2 — Valuation matrix** | Per-directory rows: purpose class, purpose statement, location verdict, evidence, ripple risk | Blocks recommendations |
| **3 — Wave plan** | Grouped recommendations: keep · relocate · consolidate · archive · remove | Blocks sign-off |
| **4 — Sign-off** | Maintainer approval on audit report | Blocks structural IDW on any mover task |

**Audit report housing (default proposal):** `docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md` or `docs/governance/REPOSITORY-DIRECTORY-AUDIT.md` — finalize in IPW.

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

- [ ] **AC0:** IPP linked from this task before investigation execution.
- [ ] **AC1:** Complete directory inventory captured with documented exclusion rules (vendor/generated trees).
- [ ] **AC2:** Every **non-excluded** directory has a valuation row with all rubric columns populated or explicitly marked `NEEDS_REVIEW`.
- [ ] **AC3:** Framework SoT vs dev-kit-local vs `greenfield-install/` mirror classification documented for relevant subtrees.
- [ ] **AC4:** Wave plan cross-references existing tasks (T10, T11, T12, UXR-032, FR-039) to avoid duplicate movers.
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

---

## Next Actions

- [ ] Run `IPW E07:S01:T13` in plan mode.
- [ ] Produce `IPP-E07S01T13-*.md` under `docs/implementation-cycles/`.
- [ ] Execute investigation phases 1–4 after IPP approval.
- [ ] Obtain maintainer sign-off on audit report.
- [x] Run `RW E07:S01:T13` / `RW -k E07:S01:T13 --art --dpz` — kanban init @ v0.7.1.13+0

---

## References

- [UXR-033](../../../fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)
- [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md)
- [KANBAN-REHOUSING-INVENTORY.md](../../../../governance/KANBAN-REHOUSING-INVENTORY.md)
- [ADR-026](../../../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
