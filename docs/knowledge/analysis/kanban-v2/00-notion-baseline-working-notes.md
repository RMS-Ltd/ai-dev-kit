---
lifecycle: evergreen
created_at: 2026-06-08T18:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# Kanban v2 Analysis — Notion Baseline Working Notes

**Analysis date:** 2026-06-08  
**Extends:** Ultimate Canonical Kanban Structure v2.0.0 (E06:S07:T06, Dec 2025)  
**Notion parent:** Engineering KB → AI Dev Kit → 3.1.2 Architecture & Design

## Sources recovered

| Source | Notion page ID | Recovery method |
|--------|----------------|-----------------|
| Ultimate Canonical Kanban v2.0.0 | `30db6f89-62c1-81eb-8e20-fb0374c2753d` | Git pre-FR-114 (`6b563cdf^`) — Notion page is stub only |
| Meta-Analysis Kanban Structure | `30db6f89-62c1-815a-8fcf-e3e0833bfde1` | Git pre-FR-114 |
| Task-Level Kanban Structure Analysis | `30db6f89-62c1-81fa-9a97-d774672cdbf1` | Git pre-FR-114 |
| Confidentia ADK Analysis | `30db6f89-62c1-81c8-a37b-fcaa0a0217df` | Full content in Notion |
| Fynd Deals ADK Analysis | `30db6f89-62c1-8104-a9d4-dfbae073fd83` | Full content in Notion |
| Starborn Legacy ADK Analysis | `30db6f89-62c1-811d-868c-f548ef976206` | Full content in Notion |
| E06:S07:T06 task doc | `30db6f89-62c1-8161-b590-efa9966ab204` | Full content in Notion |

## v2.0.0 baseline summary (pre-2026 delta)

The Dec 2025 ultimate spec reorganised epics into **Pre-Design (E1)**, **Design (E2–E8)**, **Ancillary (E9+)** — collapsing workflow+versioning into E1 and separating Kanban to E2. This diverged from packaged templates (E1=Project Core, E2=Workflow, E3=Versioning, E4=Kanban).

**2026 ADK live state** further diverged: E5=Docs, E6=Framework Mgmt, E7=Codebase, E8=Tooling, E9=RC Readiness — maintainer instance, not adopter package.

## Operator hypotheses under test (Scenario A)

- **E1** = Repository Infrastructure & Maintenance (perpetual epic)
- **E1:S01** = Perpetual Operations (UKW, CMW, CI, security, docs hygiene)
- **E2:S02** = Repository Bootstrap (finite init, ex-packaged E01:S01)
- **E24+** = First delivery epic (ex-packaged E01:S03)

## Corpus fingerprints

Machine-readable inventory: [`corpus-fingerprints.json`](corpus-fingerprints.json)  
Extractor: [`packages/frameworks/kanban/scripts/analysis/kanban_corpus_extractor.py`](../../../packages/frameworks/kanban/scripts/analysis/kanban_corpus_extractor.py)
