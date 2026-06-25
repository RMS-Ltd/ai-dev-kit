---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T41 — External adopter archetype corpus (FR-142)

**Task ID:** E06:S09:T41  
**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Created:** 2026-06-24  
**Last updated:** 2026-06-25 (MWF repeat — forensic report fix @ **v0.6.9.41+3**; Wave 3 BLOCKED G1)  
**Version:** v0.6.9.41+3  
**Version Anchor:** v0.6.9.41+3  
**Code:** E06S09T41

**Parent programme:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) (Phase 5 extension) · [E06:S09:T36](T36-adopter-path-selector-install-rc-uxr029.md)

**Upstream:** [FR-142](../../../fbu/FR-142-external-adopter-archetype-corpus-install-validation.md)

**Related:** [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) · [FR-079](../../../fbu/FR-079-install-feedback-submission-path-and-governance.md) · [FR-133](../../../fbu/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [adopter-install-attempt-preflight](../../../../guides/adopter-install-attempt-preflight.md) · [external-adopter-diversity-matrix](../../../../knowledge/analysis/projects/external-adopter-diversity-matrix.md) · [adk-install-external](../../../../adk-install-external/README.md) · [IPP-E06S09T41](../../../implementation-cycles/IPP-E06S09T41-external-adopter-archetype-corpus-fr142.md)

---

## Summary

Design and execute **Phase 5** of the adopter install programme: a maintainer-owned **external adopter archetype corpus** that stress-tests ADK install beyond operator-owned repositories (SBL, fynd.deals, Confidentia). Deliver diversity matrix, recon-first protocol, maintainer attempt indexes, selective full installs, and anonymized fixtures — gated after UXR-029 Phase 4 synthesis.

---

## Programme gates

| Gate | Status | Notes |
| ---- | ------ | ----- |
| **G1** UXR-029 Phase 4 / AC6 | **OPEN** | fynd.deals or Confidentia Arm A not complete |
| **G2** Recon before install | **SATISFIED** | Three recon reports with pre-score JSON |
| **G3** Ethics doc published | **SATISFIED** | [adk-install-external/README.md](../../../../adk-install-external/README.md) |

**Waiver:** None — full installs remain blocked until G1 closes.

---

## Input

- Operator strategy discussion (2026-06-24): homogeneity of owned repos vs Expenses Tracker precedent (BR-087, UXR-016, UXR-017).
- [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) three-repo design and phase sequencing.
- [FR-142](../../../fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) requirements and proposed archetypes A1–A5.

**IPW planning artifact:** [IPP-E06S09T41](../../../implementation-cycles/IPP-E06S09T41-external-adopter-archetype-corpus-fr142.md)

---

## Deliverables

| # | Deliverable | Status |
|---|-------------|--------|
| 1 | Adopter **diversity matrix** + archetype selection criteria (maintainer KB) | ✅ [matrix](../../../../knowledge/analysis/projects/external-adopter-diversity-matrix.md) |
| 2 | **Phase 5** sequencing doc + preflight guide § extension | ✅ preflight §8 + matrix |
| 3 | Maintainer index root (`adk-install-external/`) + recon template | ✅ [index](../../../../adk-install-external/README.md) · [protocol](../../../../adk-install-external/RECON-PROTOCOL.md) |
| 4 | **≥3** archetype recon reports (Install RC pre-score) | ✅ A1/A2/A5 synthetic recon-01 (live subject pending) |
| 5 | **≥1** full install attempt with synthesis / FR-079-style package | ⏸ BLOCKED (G1) |
| 6 | **≥1** anonymized fixture tree + CI hook | ✅ three fixtures + [pytest](../../../../tests/fixtures/adopter-corpora/test_archetype_fixture_smoke.py) |
| 7 | UXR-029 Phase 5 cross-link + coverage synthesis note | ✅ [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) coverage table |

---

## Scope

**In scope:**

- Archetypes A1–A5 (v1 executes A1, A2, A5 per IPP)
- Local clone recon; optional full install in maintainer worktree (post-G1)
- Fixture extraction (anonymized, size-bounded)
- Install RC / path selector / KMA gap intake back to kit

**Out of scope:**

- Third-party repo commits or public install PRs
- Replacing fynd.deals / Confidentia Arm A attempts
- Automated GitHub trawl crawler

---

## Sequencing (recommended)

```text
Phase 0–1  ✅ SBL Arm B (T26 closed)
Phase 2–3  → fynd.deals + Confidentia Arm A (UXR-029 AC6)
Phase 4      → Programme synthesis (path selector at RC)
Phase 5      → THIS TASK — external archetype corpus (FR-142)
```

Early **recon-only** work on 1–2 archetypes may run in parallel with Phase 2–3 if capacity allows; **full installs** wait until Phase 4 gate unless operator waives.

---

## Acceptance criteria (task)

- [ ] **AC1:** FR-142 AC1–AC5 satisfied or explicitly deferred with operator sign-off in task doc. *(AC3 full install deferred — G1)*
- [x] **AC2:** No third-party repo modified; ethics constraints documented in attempt README.
- [ ] **AC3:** Findings wired to FR/BR/UXR or Install RC row proposals when gaps confirmed. *(provisional intake in A1 recon)*

---

## Task Checklist

- [x] Transition TODO → IN PROGRESS when IDW execution starts (IPP Step 1)
- [x] Publish diversity matrix + Phase 5 sequencing
- [x] Create maintainer index + recon template
- [x] Complete ≥3 recon reports (synthetic; live subject upgrade pending)
- [ ] Execute ≥1 full install attempt (novel gap class) — **BLOCKED G1**
- [x] Land ≥1 anonymized fixture + test hook
- [x] Update UXR-029 Phase 5 pointer + coverage synthesis
- [ ] Reconcile status to COMPLETE / BLOCKED per actual state — **IN PROGRESS** (G1 blocks COMPLETE)

---

## Evidence links

| Artifact | Path |
| -------- | ---- |
| Diversity matrix | `docs/knowledge/analysis/projects/external-adopter-diversity-matrix.md` |
| Programme index | `adk-install-external/README.md` |
| Recon A1 | `adk-install-external/archetype-a1-issues-only/recon-01/` |
| Recon A2 | `adk-install-external/archetype-a2-docs-sprawl/recon-01/` |
| Recon A5 | `adk-install-external/archetype-a5-minimal-nonempty/recon-01/` |
| Pytest | `tests/fixtures/adopter-corpora/test_archetype_fixture_smoke.py` |
