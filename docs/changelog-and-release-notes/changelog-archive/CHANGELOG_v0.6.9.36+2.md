# Changelog — v0.6.9.36+2

**Release Date:** 2026-06-15 12:57:59 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 36  
**SemVer:** v0.4.1167+2  
**Task:** E06:S09:T36 — Adopter Path Selector + Install RC (UXR-029)

---

## Summary

Change implemented: Document **blind KMA evaluation** protocol for SBL attempt 10 per [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) — kit-owned KMA first pass without operator or held-out reference tree; post-KMA scoring and minimal operator tweaks on SBL side only.

---

## Changed

- **`adk-install-into-sbl/attempt-10/README.md`** — three-phase programme (kit KMA → score vs held-out reference → operator tweaks §4); guardrails against mirroring `KMA-REFERENCE-EST-TREE` into kit agent context; removed attempt-09 “operator tree before KMA” precondition.
- **`docs/guides/adopter-install-attempt-preflight.md`** — Arm B checklist aligned to blind KMA + post-KMA scoring.

---

## Related

- [KMA-REFERENCE-EST-TREE-ATTEMPT-09.md](../../../../adk-install-into-sbl/attempt-09/feedback-package/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md) (ADK mirror; SBL pre-revert)
- [UXR-029](../../kanban/fr-br/UXR-029-adk-install-path-experiment.md)
- [E06:S09:T36](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md)
