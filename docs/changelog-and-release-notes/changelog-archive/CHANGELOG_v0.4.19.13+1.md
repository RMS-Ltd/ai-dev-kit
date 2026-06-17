# CHANGELOG v0.4.19.13+1 — kboard v3.2 packaged template (E04:S19:T13 / UXR-028)

**Release Date:** 2026-06-11 10:31:16 UTC  
**Epic:** 4 | **Story:** 19 | **Task:** 13  
**SemVer (task_touch):** v0.4.1143+1

---

## Summary

**E04:S19:T13** ships **KANBAN_BOARD_TEMPLATE.md v2.2.0** aligned with Starborn Legacy attempt 06 validated layout ([UXR-028](../../kanban/fr-br/UXR-028-kboard-v3dot2-packaged-template-alignment.md)). Fresh installs and greenfield tarball now emit lean-board shape: single-line pipe rows, Verification band, split Ongoing (canonical + domain), no epic rollup footer.

---

## Change implemented

### Packaged template v2.2.0

- `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md` — generalised from SBL `kboard-template-v3dot2.md`
- `greenfield-install/` mirror synced ([FR-110](../../kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md))

### Intake

- [UXR-028](../../kanban/fr-br/UXR-028-kboard-v3dot2-packaged-template-alignment.md) filed from SBL attempt 06 FR-079 package
- [FR-127-NF2](../../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) kboard template leg satisfied via UXR-028

---

## Deferred (not blocking)

- AC3 — fresh install automated spot-check
- AC4 — optional `KANBAN_BOARD_POPULATED_EXAMPLE.md` in templates package

---

## References

- SBL evidence: `adk-install-into-sbl/attempt-06/feedback-package/kboard-template-v3dot2.md`
- [attempt-06 maintainer index](../../../adk-install-into-sbl/attempt-06/README.md)
