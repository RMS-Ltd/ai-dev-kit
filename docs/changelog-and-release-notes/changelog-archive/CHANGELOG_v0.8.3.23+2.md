# Changelog v0.8.3.23+2

**Release Date:** 2026-06-16 12:44:35 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 23  
**SemVer:** v0.4.1187+2

---

## Summary

Greenfield dual-tree sync autofix drift guard rails (BR-109) — automate Mode A/Mode B reconciliation for CodeQL/Copilot autofix PRs (atomic intake **E08:S03:T23**). SemVer adoption built for **v0.4.1187+2**.

---

## Change implemented

### Workflow scripts

- Added `--autofix-reconcile` to `scripts/sync_greenfield_install.py` to handle dual-tree drift deterministically (Mode A: source-only stale; Mode B: mirror-only stale with mirror->source copy), including actionable remediation guidance.
- Added GitHub Actions workflow `.github/workflows/greenfield-autofix-reconcile.yml` to run reconciliation on PRs matching the autofix-class conditions and to feed reconciliation inputs via PR diff SHAs.
- Updated `.github/workflows/greenfield-install.yml` drift check step naming to reflect the dual-tree guard + remediation guidance.

### Tests

- Extended `scripts/test_sync_greenfield_install.py` to cover Mode A and Mode B reconciliation (staleness then idempotency), plus workflow trigger marker existence and ambiguous dual-tree guidance.

### Intake / Kanban

- Updated `BR-109` remediation documentation to reflect the implemented dual-tree reconciliation behavior and to reference the new autofix workflow guidance.
- Extended `AGENTS.md` guidance for `P-GREENFIELD-SYNC` to include the autofix-as-hint operational workflow.

---

## Related

- [BR-109](../../../kanban/fr-br/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md)
- [FR-110](../../../kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [E08:S03:T23](../../../kanban/epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md)

