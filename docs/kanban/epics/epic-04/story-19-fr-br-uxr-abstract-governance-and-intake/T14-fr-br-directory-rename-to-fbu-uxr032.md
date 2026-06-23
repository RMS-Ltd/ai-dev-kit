---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S19:T14 — Rename intake directory `fr-br/` → `fbu/` (UXR-032)

**Task ID:** E04:S19:T14  
**Status:** COMPLETE @ v0.4.19.14+1  
**Version:** v0.4.19.14+1 (SemVer v0.4.1211+1)  
**Priority:** MEDIUM  
**Estimated Effort:** Large (cross-cutting migration; small directory, wide link surface)  
**Created:** 2026-06-23  
**Last updated:** 2026-06-23 (v0.4.19.14+1)
**Code:** E04S19T14

**Upstream:** [UXR-032](../../../fbu/UXR-032-fr-br-directory-rename-to-fbu.md)  
**Planning package:** [IPP-E04S19T14](../../../../implementation-cycles/IPP-E04S19T14-fr-br-directory-rename-to-fbu.md)  
**Related:** [FR-086](../../../fbu/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md) · [UXR-008](../../../fbu/UXR-008-kboard-fbuboard-default-naming-adoption.md) · [E04:S19:T06](T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) · [E04:S19:T11](T11-kanban-epic-story-path-lowercase-naming-uxr017.md)

---

## Version Anchor

v0.4.19.14+1 (SemVer v0.4.1211+1)

---

## Input

- [UXR-032](../../../fbu/UXR-032-fr-br-directory-rename-to-fbu.md) findings R1–R6 and ripple inventory
- Operator proposal: align installed package layout with **FBU** terminology
- FR-086 boundary: individual `FR-` / `BR-` / `UXR-` filenames unchanged

---

## Scope

Rename `docs/kanban/fr-br/` → `docs/kanban/fbu/` in the ai-dev-kit corpus **and** packaged framework install output, including config key migration (`fr_br_root` → `fbu_root`) with phased read-compat.

**In scope:**

- Physical directory move (~254 intake markdown files)
- `rw-config.yaml` + schema + install detection (`install_release_workflow.py`)
- Framework scripts, workflow YAML, skills, templates, governance docs (active tree)
- `greenfield-install/` mirror via `sync_greenfield_install.py`
- Corpus link sweep (`fr-br/` → `fbu/` in relative paths)
- Adopter migration note (brownfield compat)

**Out of scope:**

- Renaming individual `FR-*.md` / `BR-*.md` / `UXR-*.md` files
- Rewriting immutable changelog archive bodies (historical strings may remain)
- Renaming skill/guide **titles** that still say "FR/BR" when referring to the intake *process* (optional follow-up)

---

## Deliverable

1. Canonical directory `docs/kanban/fbu/` with all intake reports relocated.
2. `fbu_root` config key in schema, live `rw-config.yaml`, and install emit path.
3. Framework + greenfield defaults updated; `fr_br_root` read-compat for transition window.
4. Active-doc link sweep; validator or CI guard against new `docs/kanban/fr-br` writes (phased).
5. Adopter-facing migration note under `docs/architecture/standards-and-adrs/fbu-directory-migration-guide.md`.

---

## Acceptance criteria

- [x] **AC1:** `docs/kanban/fbu/` exists; `docs/kanban/fr-br/` absent (or documented symlink-only compat stub if explicitly chosen in IPP).
- [x] **AC2:** `rw-config.yaml` uses `fbu_root: docs/kanban/fbu`; installers detect and emit canonical key on fresh install.
- [x] **AC3:** `packages/frameworks/**` and `greenfield-install/**` aligned; greenfield sync run in same change set.
- [x] **AC4:** Active relative links resolve (`fbu/` not `fr-br/` in kanban tree, epics, task docs, skills, AGENTS routing).
- [x] **AC5:** Read-compat: tools accepting legacy `fr_br_root` / `fr-br` path during transition (documented sunset).
- [x] **AC6:** No individual intake file renamed away from `FR-` / `BR-` / `UXR-` prefix pattern.
- [x] **AC7:** UXR-032 status reconciled; four-surface RW Step 7 on release.

---

## Implementation notes (for IPW)

- Follow UXR-017 migration pattern: policy → framework → corpus → greenfield → compat → guard.
- Grep hotspots: `fr_br_root`, `fr-br/`, `detect_fbu_root`, intake workflow YAML, `update_kanban_docs.py`, archive_completed, stamp authority tests.
- Coordinate with [FR-118](../../../fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md) if config phase lands concurrently.

---

## References

- [IPP-E04S19T14](../../../../implementation-cycles/IPP-E04S19T14-fr-br-directory-rename-to-fbu.md)
- [UXR-032](../../../fbu/UXR-032-fr-br-directory-rename-to-fbu.md)
