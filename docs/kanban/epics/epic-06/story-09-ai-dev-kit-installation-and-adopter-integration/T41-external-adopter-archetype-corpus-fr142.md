---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T41 — External adopter archetype corpus (FR-142)

**Task ID:** E06:S09:T41  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-24  
**Last updated:** 2026-06-24 (intake — FR-142 filed)  
**Code:** E06S09T41

**Parent programme:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) (Phase 5 extension) · [E06:S09:T36](T36-adopter-path-selector-install-rc-uxr029.md)

**Upstream:** [FR-142](../../../fbu/FR-142-external-adopter-archetype-corpus-install-validation.md)

**Related:** [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) · [FR-079](../../../fbu/FR-079-install-feedback-submission-path-and-governance.md) · [FR-133](../../../fbu/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [adopter-install-attempt-preflight](../../../../guides/adopter-install-attempt-preflight.md) · [starborn-legacy-install-triage-matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)

---

## Summary

Design and execute **Phase 5** of the adopter install programme: a maintainer-owned **external adopter archetype corpus** that stress-tests ADK install beyond operator-owned repositories (SBL, fynd.deals, Confidentia). Deliver diversity matrix, recon-first protocol, maintainer attempt indexes, selective full installs, and anonymized fixtures — gated after UXR-029 Phase 4 synthesis.

---

## Input

- Operator strategy discussion (2026-06-24): homogeneity of owned repos vs Expenses Tracker precedent (BR-087, UXR-016, UXR-017).
- [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) three-repo design and phase sequencing.
- [FR-142](../../../fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) requirements and proposed archetypes A1–A5.

---

## Deliverables

| # | Deliverable | Status |
|---|-------------|--------|
| 1 | Adopter **diversity matrix** + archetype selection criteria (maintainer KB) | 📋 TODO |
| 2 | **Phase 5** sequencing doc + preflight guide § extension | 📋 TODO |
| 3 | Maintainer index root (`adk-install-external/` or policy-approved path) + recon report template | 📋 TODO |
| 4 | **≥3** archetype recon reports (Install RC pre-score) | 📋 TODO |
| 5 | **≥1** full install attempt with synthesis / FR-079-style package | 📋 TODO |
| 6 | **≥1** anonymized fixture tree + CI hook | 📋 TODO |
| 7 | UXR-029 Phase 5 cross-link + coverage synthesis note | 📋 TODO |

---

## Scope

**In scope:**

- Archetypes A1–A5 (or IPW-refined subset) per FR-142
- Local clone recon; optional full install in maintainer worktree
- Fixture extraction (anonymized, size-bounded)
- Install RC / path selector / KMA gap intake back to kit

**Out of scope:**

- Third-party repo commits or public install PRs
- Replacing fynd.deals / Confidentia Arm A attempts
- Automated GitHub trawl crawler
- IPW/implementation until operator authorizes (`IPW E06:S09:T41` / `IDW`)

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

- [ ] **AC1:** FR-142 AC1–AC5 satisfied or explicitly deferred with operator sign-off in task doc.
- [ ] **AC2:** No third-party repo modified; ethics constraints documented in attempt README.
- [ ] **AC3:** Findings wired to FR/BR/UXR or Install RC row proposals when gaps confirmed.

---

## Task Checklist

- [ ] Transition TODO → IN PROGRESS when IPW/execution authorized
- [ ] Publish diversity matrix + Phase 5 sequencing
- [ ] Create maintainer index + recon template
- [ ] Complete ≥3 recon reports
- [ ] Execute ≥1 full install attempt (novel gap class)
- [ ] Land ≥1 anonymized fixture + test hook
- [ ] Update UXR-029 Phase 5 pointer
- [ ] Reconcile status to COMPLETE / BLOCKED per actual state
