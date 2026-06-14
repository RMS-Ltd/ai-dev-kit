---
lifecycle: evergreen
created_at: 2026-06-08T18:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# Kanban v3 Analysis — Executive Summary

**Date:** 2026-06-08  
**Extends:** Ultimate Canonical Kanban Structure v2.0.0 (E06:S07:T06)  
**Recommendation:** **Scenario A** — E01 Repository Infrastructure & Maintenance · E01:S01 Perpetual Ops · E02:S02 Repository Bootstrap · E24+ delivery  
**Epic catalog:** **v3.2.0** (E05 Project Architecture; E10 Code Quality; FR/BR/UXR → E04 stories; E20 reserved)

## Problem

Packaged ADK kanban templates carry **structural debt** (triple layout, epic 9/18 swap, scattered perpetual patterns) while v2.0.0 reorganised semantics into Pre-Design/Design phases that **diverge from installer reality**. ADK live dogfoods E02:S16 perpetual consolidation — elegant for maintainers, opaque for adopters.

## v4 decision (2026-06-14)

**Kanban v4** introduces an explicit **Core (E01–E10) / Ancillary (E11–E23) / Domain (E24+)** catalogue with mutual-exclusivity policy ([Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51)). SoT: [13-v4-three-tier-catalogue.md](13-v4-three-tier-catalogue.md) · `kanban_v4_catalog.py`. Fresh install default: **`--catalog v4`**.

---

## Method

Cross-repo corpus analysis (packaged templates, ADK live, Confidentia, fynd.deals, Starborn) via `kanban_corpus_extractor.py`; PM elegance scorecard; comparison of Scenarios A/B/C.

## Findings

| Metric | Result |
|--------|--------|
| Packaged template health | 378/378 validate; P0 debt on 9/18 swap + triple corpus |
| PM elegance (Scenario A) | **34/35** vs 17/35 status quo, 26/35 ADK live |
| Convergent patterns | Discrete task docs, forensic markers, lean boards, E24+ delivery |
| Divergent (documented) | Maintainer E02:S16 vs adopter E01:S01; KB path variants |

## Decision (ratified 2026-06-08)

**Adopt Scenario A + v3.2 epic catalog** for packaged templates. Semantic highlights:

- **E01** = run the repository machine (perpetual; T06 = security scan hygiene only)
- **E05** = project architecture (ADRs, system design, structural decisions)
- **E10** = tend and improve the code (S01 Review & upkeep · S02 Refactors)
- **E04** absorbs FR/BR/UXR as stories (v1 E05–E07 retired as epics)
- v1 standalone E10 eliminated; platform/experience/scale → E11–E19 sequential

**Package rewrite still gated** on full operator sign-off (Phase 5 / migration blueprint waves).

## Deliverables

| Artifact | Location |
|----------|----------|
| v3 specification | Notion Ultimate Canonical + `09-ultimate-canonical-kanban-structure-v3.md` |
| Corpus fingerprints | `corpus-fingerprints.json` |
| Health / matrix / scorecard | `01`–`04` in this folder |
| Day-in-the-life | `05-day-in-the-life-narratives.md` |
| Validation gates | `06-validation-gates-report.md` |
| Migration blueprint | `07-package-migration-blueprint.md` (post-ratification) |

## Next steps

1. ~~Operator confirms Scenario A~~ ✓
2. ~~Ratify v3.2 epic catalog in Notion~~ ✓ (E05 Project Architecture inserted)
3. Execute migration blueprint waves 1–4 via IDW (after full sign-off)
4. Repatriate git stub pointer only (ADR-024) — stub updated to v3.2.0
