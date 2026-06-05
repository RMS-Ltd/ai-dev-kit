# CHANGELOG v0.6.9.24+1 — FR-111 intake + kanban init (E06:S09:T24)

**Release Date:** 2026-06-05 14:47:27 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 24  
**SemVer (task_touch):** v0.4.971+1

---

## Summary

**RW -k kanban init (`--art`):** Atomic intake for **FR-111** — acquisition-layer ADK error codes and install error documentation hygiene. Task doc, FR wiring, story checklist, and board row established. Implementation gated on IPW.

**Note:** `--doc-policy-zero` was not applied — resolver rejected (VERSION_BUILD=1; BR-097). Release uses normal first-build **`+1`** on adopted E06:S09:T24.

---

## Change implemented

### Intake (FR-111)

- New FR: [FR-111](../../project-management/kanban/fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md) — extends FR-108 registry with I05 (acquisition) and I06 (CLI); doc hygiene requirements.
- New task: [T24](../../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T24-acquisition-layer-adk-error-codes-fr111.md) — status TODO; IPW gate before implementation.

### Kanban

- Story 9 checklist row for E06:S09:T24.
- `kboard.md` Could Have row for filed task.

---

## References

- [FR-108](../../project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission.md)
- [FR-110](../../project-management/kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [ADR-016](../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md)
