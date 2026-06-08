---
lifecycle: evergreen
created_at: 2026-06-08T18:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# Cross-Repo Pattern Matrix (2026 refresh)

**Corpora:** Packaged templates · ADK live · Confidentia · fynd.deals · Starborn Legacy (git)  
**Convergence score:** 0–5 (5 = all repos align)

| Pattern | Packaged | ADK live | Confidentia | fynd.deals | Starborn | Score | v3 recommendation |
|---------|:--------:|:--------:|:-----------:|:----------:|:--------:|:-----:|-------------------|
| 3-tier Epic→Story→Task | Yes | Yes | Yes | Yes | Yes | **5** | **Canonical** — discrete task docs for adopters |
| Framework epics 1–4 core | Yes | Yes | No | No | No | **2** | **Canonical for package** — optional for mature projects |
| Perpetual task home | Scattered | E02:S16 | E20 maint | E16:S06 | E15 infra | **1** | **Canonical: E01:S01** (package); E02:S16 (ADK maintainer) |
| Finite bootstrap gate | E01:S01 | E01 genesis | N/A | Delivery epics | E15:S01 zombie | **2** | **Canonical: E02:S02** completes before delivery |
| S00 abstract registry | No | E5/E6/E7 | No | No | No | **1** | **Optional** — document for intake registries |
| S16+ perpetual story | No | E02:S16 | No | No | No | **1** | **Package E01:S01**; maintainer may keep E02:S16 |
| Discrete task files | Yes | Yes (749+) | Rare (30) | Embedded | Embedded | **3** | **Canonical** for ADK adopters |
| Board+guide split | Template | kboard+guide | Board+guide | Kanban Board.md | KANBAN_GOVERNANCE | **4** | **Canonical** (FR-036 / ADR-018) |
| Lean active board | N/A | Yes (FR-109) | Partial | Partial | Partial | **3** | **Canonical** — Ongoing band for perpetuals |
| Forensic markers | Template | 94% sample | High | High (E15:S02) | High | **5** | **Canonical** |
| Epic mashup avoided | Risk (9/18) | Yes | Yes | Yes | Yes | **4** | Fix package numbering |
| Project epics from E24+ | Documented | ADR-006 | N/A | E1+ delivery | E01+ game | **4** | **Canonical E24+** for product work |

## 2026 delta vs v2.0.0 meta-analysis

| Change | Impact on v3 |
|--------|--------------|
| FR-088 E02:S16 perpetual consolidation | Proves dedicated perpetual story works; package should use E01:S01 |
| ADR-018 single `kboard.md` | Board topology spec must reference kboard not dual MoSCOW files |
| FR-109 lean boards | PM elegance criterion; Ongoing band mandatory |
| ADK E5–E11 semantic remap | Maintainer divergence policy required (package ≠ live instance) |
| Epic 9/18 swap unfixed in package | Blocks v3 until coordinated renumber pass |

## Top convergent patterns (adopt in v3)

1. Discrete task documents with `Exx:Sxx:Txx` tokens (UXR-014 padding)
2. Forensic version markers on completed finite work
3. Perpetual tasks: `perpetual_task: true`, IN PROGRESS forever, BUILD = run count
4. Board calmness: live MoSCOW + Ongoing + completed ledgers
5. No framework epics in product numbering — project delivery from E24+

## Top divergent patterns (support, don't mandate)

1. KB path variants (`docs/kanban` vs `knowledge/.../Kanban` vs `epics/overview/`)
2. Epic directory casing (`epic-NN` vs `Epic NN` vs `Epic-NN`)
3. Tasks embedded in stories (pre-ADK projects)
4. Maintainer epic semantics (ADK live E5≠packaged E5)
