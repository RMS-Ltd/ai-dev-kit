---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 08: Strict broken-link checking (post–FR-067 warn mode)

**Task ID:** E5:S09:T08  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Medium (depends on remaining link debt)  
**Created:** 2026-03-30  
**Last updated:** 2026-04-01 (**v0.5.9.8+2** — strict `throw` + corpus; **FR-067 FU-1**)  
**Code:** E5S09T08

**Origin:** Deferred outcome of [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) — see **Follow-up work** on that FR. **E5:S09:T03** shipped `onBrokenLinks: 'warn'` deliberately; this task is the **explicit** place that work “to be done later” is recorded (do not rely on chat memory).

---

## Purpose (why this exists)

- **FR-067** required a **green** `npm run build` first. Legacy `docs/` links often pointed at paths Docusaurus cannot resolve; **`warn`** was the agreed interim so the build completes while listing remediation targets.
- **End state:** `onBrokenLinks` and `onBrokenMarkdownLinks` return to **`'throw'`** so a broken link **fails the build** (same bar as strict local development when debt is cleared).
- **Corpus/link hygiene** is largely **systemic markdown maintenance** — coordinate with **[FR-058 – Markdown Maintenance Workflow](../../../fr-br/FR-058-markdown-maintenance-workflow.md)** so link fixes are not one-off portal tweaks only.

---

## Input

- [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) (follow-up table)
- [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md) — failure classes and current policy
- [FR-058](../../../fr-br/FR-058-markdown-maintenance-workflow.md) — bulk / repeatable markdown hygiene
- **E5:S09:T05** ([FR-069](../../../fr-br/FR-069-docusaurus-ci-build-gate.md)) — when CI exists, strict link mode should produce **red CI** on regressions

---

## Deliverable

- `portal/docusaurus.config.js`: `onBrokenLinks: 'throw'`, `onBrokenMarkdownLinks: 'throw'` (or project-equivalent strict settings).
- `portal/README.md`: policy updated; remove “interim warn” wording or reframe as complete.
- `tests/test_portal_fr067_build_triage.py` (or successor): expectations updated so S2 reflects **throw** where applicable.
- `npm run build` and `PORTAL_BUILD_STRICT=1` tests **green** with **zero** (or policy-defined baseline) broken-link warnings.

---

## Specification (executable — T08)

| ID | Source | Statement |
|----|--------|------------|
| **T08-S1** | Deliverable | In [`portal/docusaurus.config.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js), `onBrokenLinks` and `onBrokenMarkdownLinks` are both **`'throw'`**. |
| **T08-S2** | AC1 / README | [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) describes **strict** link policy (build fails on broken links); interim **warn** is not the active policy. |
| **T08-S3** | AC1 | `npm run build` in `portal/` exits **0** (no in-scope broken links under **throw**). |
| **T08-S4** | FR-067 S1 | `PORTAL_BUILD_STRICT=1` — [`tests/test_portal_fr065_identity.py`](../../../../../../tests/test_portal_fr065_identity.py) `test_fr065_s9_portal_production_build` passes. |
| **T08-S5** | Deliverable | [`tests/test_portal_fr067_build_triage.py`](../../../../../../tests/test_portal_fr067_build_triage.py) encodes **throw** for link policy (S2). |
| **T08-S6** | AC3 | [`docs/maintenance/docusaurus-corpus-triage-fr-067.md`](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md) **FU-1** closed with completion + forensic marker. |
| **T08-S7** | AC2 | [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md) **FU-1** row marked **done** (or superseded). |
| **T08-S8** | NF | Surgical link fixes / justified `docs.exclude` only; exclude globs documented in portal README (**FR-067 S3** parity). |

**Tests:** `test_fr067_s2_link_policy_explicit` (T08-S5); `test_fr065_s9_portal_production_build` + `PORTAL_BUILD_STRICT=1` (T08-S4). **Non-goals:** FU-2 (GitHub Releases); corpus churn beyond link/path work needed for strict build.

---

## Acceptance Criteria

1. Production build **fails** on broken links (throws), not only warns.
2. FR-067 follow-up row for strict links marked **done** (or superseded with pointer).
3. Triage note [`docusaurus-corpus-triage-fr-067.md`](../../../../../maintenance/docusaurus-corpus-triage-fr-067.md) updated with completion pointer and version/task forensic marker when released.

---

## Version Anchor

**RW -k (doc init):** Task and cross-links released at **`v0.5.9.8+1`** (SemVer **`v0.4.672+1`**).

**Implementation release:** **`v0.5.9.8+2`** (SemVer **`v0.4.692+2`**) — strict **`throw`**, corpus remediated, **FR-067 FU-1** / triage / tests / README aligned.

**Forensic marker:** `✅ COMPLETE (v0.5.9.8+2)`

---

## Related

- **E5:S09:T03** — completed warn-mode triage.
- **E5:S09:T05** — CI should run the same strict build.
- **E5:S09:T10** — optional **strict broken anchors** (`onBrokenAnchors`) — [T10](./T10-docusaurus-strict-broken-anchors-post-t08.md); **FR-067 FU-3**.
