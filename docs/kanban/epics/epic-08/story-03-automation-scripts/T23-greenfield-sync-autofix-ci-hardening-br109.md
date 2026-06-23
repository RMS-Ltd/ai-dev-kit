---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-16T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 23: Greenfield sync autofix CI hardening (BR-109)

**Task ID:** E08:S03:T23  
**Status:** ✅ COMPLETE (v0.8.3.23+3)  
**Version Anchor:** v0.8.3.23+3  
**Priority:** HIGH  
**Created:** 2026-06-16  
**Last updated:** 2026-06-17 (RW Step 7: BR-110 forensic closure @ v0.8.3.23+3)  
**Code:** E08S03T23  

**Upstream:** [BR-109 — Greenfield dual-tree sync drift on autofix PRs](../../../fbu/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md) · [BR-110 — RW -k `--art --dpz` doc-init guard](../../../fbu/BR-110-rw-k-dpz-rejection-doc-init-build-zero-guard-mismatch.md)  
**Related:** [FR-110](../../../fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [E06:S09:T21](../../epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md) · [E06:S09:T38](../../epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) (BR-110 code @ v0.6.9.38+0) · [E02:S16:T05](../../epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) · [FR-112](../../../fbu/FR-112-perpetual-github-ci-and-security-health-lanes.md)

---

## Scope

Harden CI and GitHub Actions so **CodeQL/Copilot autofix** pull requests no longer repeatedly fail `greenfield-install` drift checks due to **single-tree edits**. Implement automated reconciliation or actionable guards per [BR-109](../../../fbu/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md).

---

## Problem

Autofix PRs (#60, #61, #62, #68) edited either `packages/frameworks/**` (mirror stale) or `greenfield-install/packages/frameworks/**` (source stale), triggering:

```
DRIFT: greenfield-install/packages/frameworks: N changed file(s)
```

Manual `python scripts/sync_greenfield_install.py` on each PR is reactive and does not prevent recurrence.

---

## Input

- [BR-109](../../../fbu/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md) (evidence: PRs #60–#62, #68)
- [FR-110](../../../fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) dual-tree contract
- [`scripts/sync_greenfield_install.py`](../../../../../scripts/sync_greenfield_install.py) and [`greenfield-install-manifest.yaml`](../../../../../scripts/greenfield-install-manifest.yaml)
- [`.github/workflows/greenfield-install.yml`](../../../../../.github/workflows/greenfield-install.yml)
- [IPP-E08S03T23-greenfield-sync-autofix-ci-hardening-br109](../../../../implementation-cycles/IPP-E08S03T23-greenfield-sync-autofix-ci-hardening-br109.md) (plan doc: spec + tests + executor steps)
- **IPW** package (required before implementation per FR-083)

---

## Deliverable

- Autofix PR GitHub Actions workflow (or extension) with dual-tree drift reconciliation
- Improved `greenfield-install` CI failure messaging (FR-110 / maintainer sync guidance)
- Maintainer documentation note on autofix-as-hint workflow
- Verification evidence (workflow test or dry-run) for Mode A and Mode B reconciliation

---

## Acceptance Criteria

- [ ] **AC1:** Autofix-class PRs auto-reconcile dual-tree drift **or** fail with explicit dual-tree guidance (no ambiguous generic drift-only message).
- [ ] **AC2:** Source tree `packages/frameworks/**` remains authoritative; mirror-only framework logic edits are corrected toward source.
- [ ] **AC3:** `validate_actions_ci_parity` / local parity passes for new workflow when `actions_ci_parity` applies.
- [ ] **AC4:** [BR-109](../../../fbu/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md) AC1–AC5 satisfied and status updated on closure.

---

## Implementation Notes

- Prefer workflow trigger on `pull_request` with branch/name heuristics (`finding-autofix`, Copilot autofix) to avoid running sync on every PR.
- Reuse `scripts/sync_greenfield_install.py` and manifest — do not duplicate mirror logic.
- Coordinate with [E06:S09:T21](../../epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md) for FR-110 policy alignment.
- **IPW required** before implementation ([FR-083](../../../fbu/FR-083-global-ipw-gated-implementation-contract.md)).

---

## BR-110 forensic closure (v0.8.3.23+3)

[BR-110](../../../fbu/BR-110-rw-k-dpz-rejection-doc-init-build-zero-guard-mismatch.md) was filed on this task. The `art_doc_policy_zero` resolver fix landed in **v0.6.9.38+0** (E06:S09:T38 kanban-init wave). Release **v0.8.3.23+3** provides a dedicated **E08:S03:T23** commit/tag for traceability cleanliness without re-shipping that code.

---

## Evidence
- Pytest run: `scripts/test_sync_greenfield_install.py` (Mode A/Mode B + idempotency + ambiguous-dual-tree guidance + remediation workflow-marker existence) — 9 passing assertions.
- Reconciliation invariant: the Mode A/Mode B reconcile path executes the existing `sync_greenfield_install.py --check` guard after applying repairs.
- CI/autofix wiring: new workflow `.github/workflows/greenfield-autofix-reconcile.yml` plus hardened dual-tree drift messaging surfaced by `sync_greenfield_install.py --check`.

---

## References

- [BR-109](../../../fbu/BR-109-greenfield-autofix-dual-tree-sync-drift-recurring-ci-failures.md)
- [IPP-E08S03T23-greenfield-sync-autofix-ci-hardening-br109](../../../../implementation-cycles/IPP-E08S03T23-greenfield-sync-autofix-ci-hardening-br109.md)
- [`.github/workflows/greenfield-install.yml`](../../../../../.github/workflows/greenfield-install.yml)
- [`scripts/sync_greenfield_install.py`](../../../../../scripts/sync_greenfield_install.py)
