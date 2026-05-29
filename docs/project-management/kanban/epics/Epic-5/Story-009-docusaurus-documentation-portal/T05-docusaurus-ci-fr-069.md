---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 05: Docusaurus CI build gate (FR-069)

**Task ID:** E5:S09:T05  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Small  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30 (v0.5.9.5+1 — FR-069 CI workflow, contract tests, README; AC3 green on `main` after push)  
**Code:** E5S09T05

**Feature Request:** [FR-069 – CI build gate](../../../fr-br/FR-069-docusaurus-ci-build-gate.md)

---

## Summary

Implement **FR-069**: GitHub Actions workflow running `npm ci` and `npm run build` in `portal/` on appropriate triggers (e.g. changes to `portal/` or `docs/`).

---

## Input

- [FR-069](../../../fr-br/FR-069-docusaurus-ci-build-gate.md)
- Green `portal` build (**E5:S09:T03**)

---

## Deliverable

- `.github/workflows/` workflow file (clear job name)
- `portal/README.md` mentions CI
- Green validation on default branch after FR-067

---

## Acceptance Criteria

- Per FR-069 ACs.

---

## Specification (executable — FR-069)

**Workflow file:** [`.github/workflows/docusaurus-build.yml`](../../../../../../.github/workflows/docusaurus-build.yml)  
**Push policy:** `push` is limited to **`main`**; `pull_request` uses path filters for all PR base branches (standard).

| ID | Source | Statement |
|----|--------|------------|
| **S1** | R01 / AC1 | Workflow file exists at `.github/workflows/docusaurus-build.yml`, parses as YAML, has `name`, `on`, `jobs`. (Workflow uses quoted `"on":` so PyYAML does not treat `on` as boolean.) |
| **S2** | R01 | `on.pull_request` and `on.push` each define `paths` including `portal/**` and `docs/**` (workflow self-path optional but present for edit→verify). |
| **S3** | R03 | Workflow `name` contains “Docusaurus”; primary job id is `build`. |
| **S4** | engines | `actions/setup-node@v4` with `node-version` **20** (or `20.x`). |
| **S5** | Build | `defaults.run.working-directory: portal` (or equivalent); steps run `npm ci` then `npm run build`. |
| **S6** | NF01 | `setup-node` uses `cache: npm` and `cache-dependency-path: portal/package-lock.json`. |
| **S7** | NF02 | `portal/README.md` links to this workflow path. |
| **S8** | R02 / AC2–3 | Failed `npm run build` fails the job; green `main` after merge is observational (AC3). |

**Tests:** [`tests/test_portal_fr069_ci.py`](../../../../../../tests/test_portal_fr069_ci.py)

---

## Version Anchor

**Forensic marker:** `✅ COMPLETE (v0.5.9.5+1)` — **RW E5:S09:T05**.

---

## Evidence

- [`.github/workflows/docusaurus-build.yml`](../../../../../../.github/workflows/docusaurus-build.yml) — `npm ci` / `npm run build` in `portal/`, path filters, Node 20, npm cache.
- [`tests/test_portal_fr069_ci.py`](../../../../../../tests/test_portal_fr069_ci.py) — S1–S7 contract tests (`"on"` key quoted for PyYAML-safe parsing).
- [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) — CI (FR-069) pointer.
- **AC3:** Green **Docusaurus site build** on `main` after this release push (verify in GitHub Actions).
- **AC2:** Optional — intentional break on a throwaway branch to prove job failure.

---

## Dependencies

- **E5:S09:T03** recommended so default-branch build is meaningful.
