---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:03Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 14, Task 1: Enumerate supported installation paths for Workflow Management

**Task ID:** E02:S14:T01  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-06-05 (v0.2.14.1+1 — installation paths matrix enumerated)  
**Version:** v0.2.14.1+1  
**Code:** E02S14T01

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S14:T01`

---

## Scope

**In scope:**

- Enumerate every supported **workflow-mgt** installation path (acquisition, configuration, uninstall, optional adjuncts) in a canonical matrix companion artefact.
- Document the two-phase model: acquisition (files on disk) vs configuration (`rw-config.yaml`, `.cursorrules`, workflow patches).
- Cross-reference S13 `component-inventory-map.md` §5 install components.
- Flag known doc inconsistencies for T06 handoff — no doc fixes in T01.

**Out of scope:**

- Fresh-install execution (T02); migration validation (T03); post-install validator runs (T04); failure-mode authoring (T05); doc remediation (T06).

---

## Input

- [S13 component inventory §5](../story-13-workflow-management-package-implementation-review/component-inventory-map.md) — Config & Install baseline
- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) — greenfield/brownfield adopter SoT
- [`packages/frameworks/workflow-mgt/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/README.md) — package install modes A/B/C
- [`packages/frameworks/workflow-mgt/scripts/README-rw-installer.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/README-rw-installer.md) — installer CLI contract
- User-docs install guides under `docs/documentation/user-docs/`
- [IPP-E02S14T01](../../../../../implementation-cycles/IPP-E02S14T01-enumerate-workflow-mgt-installation-paths.md)

---

## Deliverable

1. **[`installation-paths-matrix.md`](installation-paths-matrix.md)** — canonical installation paths matrix (19 rows: 7 acquisition, 6 configuration, 1 uninstall, 5 optional)
2. This task doc — scope, AC, executive summary, bidirectional IPP links

---

## Executive summary

The Workflow Management package supports **19 distinct installation paths** across four phases. Acquisition methods (manual copy, submodule, release tarball, CLI, template clone, monorepo vendoring, copy-to-dependency migration, slug relocation) place files on disk but **do not** configure RW unless followed by `install_release_workflow.py` (modes A/B/C) or manual legacy edits. Seven doc inconsistencies are flagged for T06 (CLI availability, Python version, slug drift, acquisition-without-installer, stale quickstart, PACKAGE_INSTALLATION_GUIDE focus, manual step count).

**Primary input for T02:** `installation-paths-matrix.md` `Tested` column (all `TBD` pending fresh-install validation).

---

## Acceptance Criteria

- [x] Companion `installation-paths-matrix.md` exists with all canonical columns
- [x] ≥12 distinct path rows covering acquisition, configuration, uninstall, and optional adjuncts (19 rows)
- [x] Two-phase model (acquisition vs configuration) documented in companion intro
- [x] S13 §5 install components cross-referenced with status column
- [x] Known doc inconsistencies flagged with T06 handoff notes (no fixes in T01)
- [x] Task doc, IPP, and companion bidirectionally linked
- [x] V1–V7 verification checklist passed (see companion §Verification notes)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** [`story-14-workflow-management-package-installation-evaluation.md`](../story-14-workflow-management-package-installation-evaluation.md)

---

## References

- [IPP-E02S14T01 — Enumerate workflow-mgt installation paths](../../../../../implementation-cycles/IPP-E02S14T01-enumerate-workflow-mgt-installation-paths.md)
- [installation-paths-matrix.md](installation-paths-matrix.md)
- [Story 14](../story-14-workflow-management-package-installation-evaluation.md)
- [S13 component inventory §5](../story-13-workflow-management-package-implementation-review/component-inventory-map.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
