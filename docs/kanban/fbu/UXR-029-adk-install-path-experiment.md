---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: ADK install path experiment (brownfield vs shell + migration)

**Type:** User Experience Research (UXR)  
**ID:** UXR-029  
**Submitted:** 2026-06-15  
**Submitted By:** Starborn Legacy (FR-079 attempt 09)  
**Priority:** HIGH (Must Have — MoSCOW **M**)  
**Status:** IN PROGRESS (kit Phase 0 @ v0.6.9.36+3 — AC5/AC7 satisfied @ attempt 10)  
**Implementing Task:** [E06:S09:T36](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md)

**Related:** [Issue #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) · [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) · [UXR-025](UXR-025-starborn-legacy-greenfield-install-diary.md) · [FR-080](FR-080-greenfield-installation-process.md) · [FR-081](FR-081-brownfield-modular-adopter-integration.md) · [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · [ADR-030](../../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

**Primary evidence:** [greenfield-brownfield-selective-adoption-sbl-attempt-09.md](../../knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md)

---

## Summary

Formalise a **three-path adoption experiment** for mature repositories: **Arm A** (brownfield in-place), **Arm B** (greenfield shell + selective migration / KMA), and **Path 3** (strangler coexist sub-mode). Measure effectiveness by **Install RC checklist** pass rate — not product delivery velocity. Starborn attempt 09 provides Arm B evidence; fynd.deals and Confidentia are Arm A controls.

---

## Research objective

**Primary question:**

> When facing mature adopter repositories, which is more effective: brownfield ADK install (in place), or greenfield ADK shell followed by migration of established content (KMA)?

**Secondary questions:**

1. Does path choice matter less than **kit completeness** (orchestrator, sqlite, docs schema, kit-owned KMA)?
2. What decision criteria predict Arm A vs Arm B vs strangler coexist?
3. How should ADK document the **third path** without mislabelling it as empty-repo greenfield?

---

## Hypotheses

| ID | Statement | Measurement | Attempt 09 | Attempt 10 |
|----|-----------|-------------|------------|------------|
| **H0 (Arm A)** | Brownfield in-place → faster install-complete, less dual-tree confusion | Install RC % READY; time to first RW | **Not tested** | **Not tested** |
| **H1 (Arm B)** | Shell + migration → cleaner ADK shape, fewer validator failures | `validate_v4_template_completeness --strict`; RC % | **Partial** — kanban PASS; RC ~50% | **Supported** — RC strict **PASS**; 0 ad-hoc KMA |
| **H-null** | Path choice matters less than kit completeness | RC FAIL rows attributable to orchestration vs path | **Strong support** | **Confirmed** — Phase 0 kit fixes closed RC gap |

---

## Methodology

**Design:** Three-repo programme with shared Install RC checklist.

| Repo | Arm | Role |
|------|-----|------|
| starborn_legacy | B | Primary messy-mature + git exemplar |
| fynd.deals | A | Brownfield control |
| Confidentia | A | Brownfield control (governance-heavy) |

**Programme sequencing:**

```text
Phase 0 — Kit fixes (path-agnostic)
Phase 1 — SBL attempt 10 (Arm B validation)
Phase 2 — Brownfield recon (fynd.deals, Confidentia)
Phase 3 — Brownfield full attempts (Arm A)
Phase 4 — Synthesis → Adopter Path Selector at RC
Phase 5 — External adopter archetype corpus ([FR-142](FR-142-external-adopter-archetype-corpus-install-validation.md) / [E06:S09:T41](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md))
```

**Artifacts:** FR-079 feedback packages per attempt; scorecard JSON; maintainer indexes under `adk-install-into-sbl/`; Phase 5 external recon under `adk-install-external/` (planned — [FR-142](FR-142-external-adopter-archetype-corpus-install-validation.md)).

---

## Key findings (attempt 09 — Arm B)

| Finding | Implication |
|---------|-------------|
| KMA PASS with 6 ad-hoc scripts | Kit must orchestrate migration (0 scripts at RC) |
| Sign-off 7 READY while RC ~50% FAIL | Sign-off contract ≠ install-complete |
| Legacy YAML after 4 RWs | SQLite before first RW is cross-cutting |
| “Restore ≠ migrate” incident | Comprehension test required in completion summary |
| Operator tree before KMA | Agent cannot infer duplicate-epic policy alone |

---

## Acceptance criteria

- [x] **AC1:** [ADR-030](../../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) accepted — three-path model supplements ADR-003.
- [x] **AC2:** INSTALL publishes **Adopter Path Selector** with Paths 1–3 + cross-cutting requirements.
- [x] **AC3:** Install RC checklist includes Arm B rows (archive, KMA gate, sqlite, comprehension test).
- [x] **AC4:** Layered orchestrator sequence documented and wired (Phase 0 — sqlite, adoption-path, RC gate).
- [x] **AC5:** SBL attempt 10 replay on Arm B with **0** ad-hoc KMA scripts. ✅ @ `v0.4.1171` — [attempt-10 index](../../../adk-install-into-sbl/attempt-10/README.md).
- [ ] **AC6:** At least one Arm A attempt (fynd.deals or Confidentia) with scorecard comparison.

---

## Out of scope

- Replacing FR-080 greenfield happy path for true empty/template repos.
- Mandating Arm B for all brownfield repos (host sovereignty per ADR-003).

---

## Deliverables (via T36)

1. Adopter Path Selector in `INSTALL_IN_YOUR_PROJECT.md`
2. Install RC checklist extension
3. Layered install sequence (orchestrator spec)
4. Maintainer KB article (mirrored — see Primary evidence link)
