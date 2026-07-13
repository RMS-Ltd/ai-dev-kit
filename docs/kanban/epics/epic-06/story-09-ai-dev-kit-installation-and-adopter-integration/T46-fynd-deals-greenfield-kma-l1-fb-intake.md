---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-13T15:19:33Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T46 — fynd.deals greenfield + KMA L1 FB intake (#90)

**Task ID:** E06:S09:T46  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-07-13  
**Last updated:** 2026-07-13 (RW -k — kanban documentation setup)  
**Version:** v0.6.9.46+0  
**Version Anchor:** v0.6.9.46+0  
**Code:** E06S09T46

**Intake:** [GitHub #90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90) · [FB-ADK-FYND-GREENFIELD-KMA-L1](../../../fbu/FB-ADK-FYND-GREENFIELD-KMA-L1.md)

**Primary defect:** [BR-115](../../../fbu/BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md) — empty `packages/frameworks/` blocks vendor fallthrough

**Related:** [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) · [FR-079](../../../fbu/FR-079-install-feedback-submission-path-and-governance.md) · [FR-110](../../../fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [FR-135](../../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) · [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) · [E06:S09:T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) (prior FR-079 intake pattern)

**Adopter evidence (fynd.deals repo):** `adk-install/feedback-package/FB-ADK-FYND-GREENFIELD-KMA-L1.md` · `adk-install/DIARY.md` · Install RC / sign-off JSON under `logs/ai-dev-kit/install/`

---

## Summary

**Maintainer intake task** for the fynd.deals **FR-079 / UAT** feedback package on ADK **v0.4.1247** (Arm B: legacy archived → greenfield ADK + KMA L1). Accept Install RC PASS / KMA L1 outcome with caveats, triage F1–F5 into kit delivery lanes, implement **BR-115** (empty `packages/` vendor fallthrough), and close [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90) when intake + BR-115 AC are met.

---

## Scope

### In scope

- Record fynd.deals greenfield + KMA L1 UAT outcome in programme lineage (UXR-029 Arm B evidence note)
- Triage FB findings F1–F5 — wire each to BR/FR or explicit deferral with rationale
- Implement **BR-115** (AC1–AC4): detect placeholder `packages/frameworks/`, warn, fall through to vendor; add regression test + docs
- Re-exercise / document regression scope for BR-082 / BR-083 / BR-086 on the **greenfield orchestrator** path (file follow-on tasks only if still open after triage)
- Clarify lean RW workflow YAML PARTIAL vs SUCCESS when vendor `scripts_path` is intentional (FR-110)
- Close GitHub [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90) when AC met

### Out of scope

- fynd.deals adopter bootstrap (LICENSE, ADR, tests, security, quality) — not install defects
- UXR-029 Phase 4 / G1 synthesis (owned by T36)
- Replacing SBL programme artefacts

---

## Input

- [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90) UAT body
- [FB-ADK-FYND-GREENFIELD-KMA-L1](../../../fbu/FB-ADK-FYND-GREENFIELD-KMA-L1.md)
- Adopter pack paths listed in FB Supporting Evidence
- Prior intake pattern: [T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md)

---

## Deliverable

| # | Artifact |
|---|----------|
| 1 | Maintainer FB + BR-115 intake (this change set) |
| 2 | BR-115 fix: empty/placeholder `packages/` → vendor fallthrough + warn |
| 3 | Regression test(s) for empty-`packages/` + vendor present |
| 4 | Triage matrix F2–F5 (attach / reopen / new FBU / defer) |
| 5 | Docs: Install RC / greenfield guidance for placeholder trap + lean RW YAML semantics |
| 6 | Close #90 when AC met |

---

## Acceptance Criteria

- [x] **AC1:** FB + BR-115 bidirectionally wired; story checklist + `kboard.md` row present
- [ ] **AC2:** BR-115 AC1–AC4 implemented and covered by automated test
- [ ] **AC3:** F2–F5 triage table completed (route or defer with rationale)
- [ ] **AC4:** Lean RW YAML PARTIAL semantics documented or fixed (SUCCESS + guidance when vendor path intentional)
- [ ] **AC5:** [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90) closed with intake summary link
- [ ] **AC6:** RW release anchors E06:S09:T46

---

## Feedback triage (F1–F5)

| ID | Severity | Topic | Routing |
|----|----------|-------|---------|
| **F1** | HIGH | Empty `packages/frameworks/` precedes vendor | **[BR-115](../../../fbu/BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md)** — this task |
| **F2** | MEDIUM | PyYAML missing before orchestrator | [BR-082](../../../fbu/BR-082-rw-install-missing-pyyaml-preflight.md) — verify greenfield Phase 0 coverage |
| **F3** | MEDIUM | Unpadded `story_doc_pattern` from RW install | [BR-083](../../../fbu/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) / [BR-086](../../../fbu/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) — regression check |
| **F4** | LOW–MEDIUM | Bare `python` in sign-off | BR-082 family |
| **F5** | LOW–MEDIUM | Lean RW workflow YAML PARTIAL | FR-110 semantics (this task AC4) |

---

## Approach

1. Complete intake surfaces (done at file time): FB, BR-115, checklist, kboard
2. Locate package-resolution / orchestrator path precedence; implement placeholder detection + vendor fallthrough
3. Add fixture test: empty `packages/frameworks/` + vendor present → no hard-stop
4. Triage F2–F5; open child tasks only if regression needs separate delivery
5. Update lean-install docs / Install RC messaging for PARTIAL vs SUCCESS
6. `RW E06:S09:T46 --art` when AC2–AC4 green; close #90

---

## Dependencies

**Depends On:**
- fynd.deals FB pack / [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90) (received)
- Greenfield orchestrator / lean vendor path (FR-135 / FR-110)

**Blocks:**
- Cleaner Arm B adopter first-pass on prep repos with empty `packages/`

**Related Tasks:**
- **Follows** [T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) — same FR-079 intake pattern for adopter FB packs
- **Informs** [T36](T36-adopter-path-selector-install-rc-uxr029.md) / [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) — fynd Arm B evidence
- **Coordinates With** [T41](T41-external-adopter-archetype-corpus-fr142.md) — external install diversity (named RMS adopter, not Phase 5 anonymized)

**Parallel Development Candidacy:** Safe for BR-115 implementation vs T41 recon (different surfaces)

---

## Cross-Wiring

**Associated FB/BR:**
- [FB-ADK-FYND-GREENFIELD-KMA-L1](../../../fbu/FB-ADK-FYND-GREENFIELD-KMA-L1.md) — host UAT pack
- [BR-115](../../../fbu/BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md) — primary defect

---

## RW trigger

```
RW E06:S09:T46 --art
```

(After implementation; intake-only may use `RW -k E06:S09:T46 --art` if operator versions docs before code.)
