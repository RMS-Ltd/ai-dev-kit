---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 03: Production build corpus triage (FR-067)

**Task ID:** E5:S09:T03  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30 (v0.5.9.3+1 — FR-067 triage)  
**Version:** v0.5.9.3+1  
**Code:** E5S09T03

**Feature Request:** [FR-067 – Production build triage](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md)

---

## Summary

Implement **FR-067**: after FR-066, achieve **`npm run build` = 0** for the agreed publish scope by triaging MDX, links, and assets; document triage stats and exclude list updates.

---

## Input

- [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md)
- **E5:S09:T02** complete (docs path + scope)

---

## Deliverable

- Green Docusaurus production build for publish scope
- Explicit broken-link policy (throw vs warn + follow-up)
- Triage summary (counts, failure classes, excludes added)

---

## Acceptance Criteria

- Per FR-067 ACs.

---

## Specification (executable — FR-067)

| ID | Source | Statement |
|----|--------|-----------|
| **S1** | R01 / AC1 | `npm run build` in `portal/` exits **0** under Node ≥20 (`portal/package.json` `engines`). Verified with `PORTAL_BUILD_STRICT=1 pytest -m portal_build`. |
| **S2** | R02 / AC2 | Broken-link behavior is **explicit**: `onBrokenLinks` in `docusaurus.config.js` and/or Publish scope in `portal/README.md` documents throw vs warn + any follow-up. |
| **S3** | R03 / AC2 | Every Docusaurus `docs.exclude` glob is listed under **Excluded** in `portal/README.md` (no shadow excludes). |
| **S4** | R04 / AC3 | Triage note at `docs/maintenance/docusaurus-corpus-triage-fr-067.md` with date, failure classes, approximate counts, excludes added, pointer to FR-067. |
| **S5** | NF01 | Prefer surgical MDX/link fixes or targeted `exclude` over bulk rewrites. |
| **S6** | NF02 | Release/changelog language: no unverified “Fixed” claims for corpus triage. |

**Tests:** [`tests/test_portal_fr067_build_triage.py`](../../../../../../tests/test_portal_fr067_build_triage.py) (S2–S4); S1 via [`tests/test_portal_fr065_identity.py`](../../../../../../tests/test_portal_fr065_identity.py) `test_fr065_s9_portal_production_build` + `PORTAL_BUILD_STRICT=1`.

---

## Version Anchor

**Forensic marker:** `✅ COMPLETE (v0.5.9.3+1)` — FR-067 ACs met.

---

## Evidence

- **`npm run build`:** exit 0 (`portal/`); link check `warn` with documented follow-up in `portal/README.md`.
- **MDX / placeholders:** broad corpus fixes + [`scripts/escape_mdx_placeholders.py`](../../../../../../scripts/escape_mdx_placeholders.py) for repeatable `{token}` escapes outside fenced code.
- **Triage note:** [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md).
- **Tests:** [`tests/test_portal_fr067_build_triage.py`](../../../../../../tests/test_portal_fr067_build_triage.py); strict build gate `test_fr065_s9` + `PORTAL_BUILD_STRICT=1`.

---

## Dependencies

- **E5:S09:T02** (FR-066) complete.

## Related

- **FR-058** (MMW) for systematic markdown maintenance.
- **E5:S09:T08** — [Strict broken-link mode (`throw`) after link debt cleared](T08-docusaurus-strict-broken-links-post-fr067.md) (**FU-1** on [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md)); carries all deferred “warn → throw” intent.
