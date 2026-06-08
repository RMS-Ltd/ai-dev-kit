---
lifecycle: evergreen
created_at: 2026-06-08T18:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# PM Elegance Scorecard

**Criteria (1–5):** 1=poor · 3=adequate · 5=excellent

## Corpus scores

| Criterion | Packaged (B) | ADK live (C) | Confidentia | fynd.deals | Starborn |
|-----------|:------------:|:------------:|:-----------:|:----------:|:--------:|
| 1. Cognitive load day 1 | 2 | 2 | 3 | 3 | 3 |
| 2. Board calmness | 2 | **5** | 3 | 3 | 2 |
| 3. Naming poetry | 2 | 3 | 3 | 4 | 4 |
| 4. Numbering predictability | 2 | 2 | 4 | 4 | 4 |
| 5. Completion semantics | 2 | **5** | 3 | 4 | 2 |
| 6. Traceability beauty | 4 | **5** | 4 | 4 | 3 |
| 7. Scalability grace | 3 | 3 | 3 | 3 | 3 |
| **Total /35** | **17** | **25** | **23** | **25** | **21** |

## Scenario comparison (proposed v3 shapes)

| Criterion | A: E1 infra + E1:S01 perpetual + E2:S02 bootstrap | B: Status quo packaged | C: ADK live E02:S16 |
|-----------|:---------------------------------------------------:|:----------------------:|:-------------------:|
| 1. Cognitive load | **5** — "ops=E1, bootstrap=E2, product=E24+" | 2 — E01 does triple duty | 2 — maintainer knowledge required |
| 2. Board calmness | **5** — E1 Ongoing band only | 2 | **5** |
| 3. Naming poetry | **5** — "Repository Infrastructure & Maintenance" | 2 — "Project Core" | 3 |
| 4. Numbering predictability | **5** — low=ops, high=delivery | 2 — 9/18 swap breaks trust | 3 |
| 5. Completion semantics | **5** — E1 never "completes" | 2 | **5** |
| 6. Traceability beauty | 4 | 4 | **5** |
| 7. Scalability grace | **5** — tiny installs E1–E4 only | 3 | 3 |
| **Total /35** | **34** | **17** | **26** |

## Recommendation

**Adopt Scenario A for packaged v3.** Keep **E02:S16** as documented **maintainer-instance** pattern (ai-dev-kit dogfood) — not copied blindly by adopters.

### Trade-offs documented

| Topic | Scenario A choice | Trade-off |
|-------|-------------------|-----------|
| UKW wiring | Discover `perpetual_task` in E01:S01 | RW/UKW docs must list E01:S01:T02 as default adopter anchor |
| Version schema | Perpetual `0.1.1.T+B`, bootstrap `0.2.2.T+B` | Clear separation; installer must document ordering |
| Epic 1 never complete | PM clarity | Epic header stays IN PROGRESS — intentional |
| v2.0.0 remap | Supersedes Pre-Design/Design phase model | Simpler mental model beats academic phasing |

## Operator sign-off

Scenario **A** recommended pending operator confirmation before package rewrite (Phase 5 gate 6).
