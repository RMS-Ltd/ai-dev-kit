---
lifecycle: evergreen
created_at: 2026-06-08T18:00:00Z
housekeeping_policy: keep
notion_sot: true
---

# Ultimate Canonical Kanban Structure v3.2.0

**Purpose:** Definitive adopter-facing E/S/T specification for ADK framework implementations  
**Status:** DRAFT — epic catalog **v3.2.0** (E05 Project Architecture inserted 2026-06-08); package rewrite still gated on full operator sign-off  
**Version:** 3.2.0  
**Extends:** v3.1.0 / v2.0.0 (E06:S07:T06)

---

## Executive Summary

1. **E01 — Repository Infrastructure & Maintenance** — perpetual ops (*run the machine*)
2. **E02–E04** — Workflow, Versioning, Kanban (core)
3. **E04 stories** — FR · BR · UXR Implementation (not separate epics)
4. **E05 — Project Architecture** — ADRs, system design, structural decisions
5. **E06–E19** — Ancillary catalog (sequential adoption order)
6. **E10 — Code Quality** — Review & upkeep + Refactors (merges old E09/E10)
7. **E20** — reserved
7. **E24+** — project delivery

**Maintainer divergence:** ai-dev-kit may keep **E02:S16**; adopters use **E01:S01**.

---

## Design Principles (v3)

| # | Principle | Rationale |
|---|-----------|-----------|
| P1 | Low numbers = ops/framework; E24+ = delivery | PM elegance |
| P2 | Perpetual work → E01 Ongoing band only | FR-109 |
| P3 | Bootstrap (E02:S02) before E24+ | Finite gate |
| P4 | Intake (FR/BR/UXR) → E04 stories | No epic sprawl |
| P5 | E01 = repository machine ops; E05 = project design; E10 = code body | Semantic clarity |
| P6 | Single numbering authority | No 9/18 swap |
| P7 | `perpetual_task: true` discover-by-flag | RW/UKW portable |
| P8 | Epic & story titles use `&` (not `and`) when joining concepts | Shorter labels; board-friendly |
| P9 | Task titles may use `&` or `and` — readability wins | Tasks are often prose descriptions |

---

## Naming conventions (E/S/T titles)

| Level | Rule | Examples |
|-------|------|----------|
| **Epic** | `&` when joining concepts; never `and` | Repository Infrastructure & Maintenance · Testing & Quality Assurance |
| **Story** | `&` when joining concepts; never `and` | Workflow Definitions & Patterns · Board setup & governance · Review & upkeep |
| **Task** | `&` or `and` — whichever reads better | ✓ "Update RW and UKW wiring" · ✓ "Security scan & dependency hygiene" |

*File slugs* (e.g. `story-02-Translation-and-Localisation.md`) may keep hyphenated `and` for URL/path stability; **display titles** in docs, boards, and H1 headers use `&`.

---

## Epic Catalog (sequential)

### Core (E01–E04) — tiny tier always installed

| # | Epic | Notes |
|---|------|-------|
| **01** | **Repository Infrastructure & Maintenance** | Perpetual; IN PROGRESS forever |
| **02** | **Workflow Management** | **S01** Workflow Definitions & Patterns · **S02** Repository Bootstrap |
| **03** | **Numbering & Versioning** | **S01** Versioning Policy & Schema · schema, policy, automation |
| **04** | **Kanban** | Board, governance, intake |

#### E01:S01 — Perpetual Operations

| Task | Name | perpetual |
|------|------|:---------:|
| T01 | Workflow operations (CMW, PVW) | yes |
| T02 | Update Kanban Workflow (UKW) | yes |
| T03 | Documentation hygiene | yes |
| T04 | Infrastructure maintenance | yes |
| T05 | CI pipeline health (FR-112 class) | yes |
| T06 | Security scan hygiene | yes |

*No code-quality ownership here — that is E10.*

**Version:** `0.1.1.{TASK}+{BUILD}`

#### E04 — Kanban stories (intake epics retired)

| Story | Name | Was (v1 package) |
|-------|------|------------------|
| S01 | Board setup & governance | — |
| S02 | FR Implementation | ex-E05 |
| S03 | BR Implementation | ex-E06 |
| S04 | UXR Implementation | ex-E07 |

---

### Foundation (E05)

| # | Epic | Notes |
|---|------|-------|
| **05** | **Project Architecture** | ADRs, system design, technical architecture, structural decisions |

*Rule: E05 shapes the system; E10 improves the code body.*

---

### Engineering practice (E06–E10)

| # | Epic |
|---|------|
| **06** | Documentation |
| **07** | Process Automation & CI/CD |
| **08** | Testing & Quality Assurance |
| **09** | Security |
| **10** | **Code Quality** |

#### E10 — Code Quality (merges v1 E08 Codebase Maintenance + code-level refactors from E21)

| Story | Purpose |
|-------|---------|
| **S01 Review & upkeep** | Code review standards, IDE-flagged fixes, maintenance cadence, small fixes |
| **S02 Refactors** | Deliberate structural code improvement |

*Rule: E01 tends the pipeline; E10 tends and improves the code.*

---

### Platform (E11–E13)

| # | Epic |
|---|------|
| **11** | Data Management & Database |
| **12** | API & Backend Services |
| **13** | User Management & Authentication |

---

### Experience (E14–E16)

| # | Epic |
|---|------|
| **14** | Frontend & UI |
| **15** | Mobile Application |
| **16** | Internationalisation & Localisation |

*Example stories (E16):* S01 Internationalisation Infrastructure · S02 Translation & Localisation · S03 Cultural Adaptation

---

### Scale (E17–E19)

| # | Epic |
|---|------|
| **17** | Performance & Optimization |
| **18** | Analytics & Monitoring |
| **19** | Integration & Third-Party Services |

---

### Reserved

| # | Epic |
|---|------|
| **20** | *(reserved)* |

---

### Delivery (E24+)

Product, game, and domain epics from **E24** per ADR-006. Ex-packaged E01:S03 → **E24:S01**.

---

## Install tiers

| Tier | Epics |
|------|-------|
| Tiny | E01–E04 |
| Small | + E05–E09 (contextual) |
| Ambitious | + E10–E19 as needed |

---

## Board Topology (ADR-018)

| Surface | Role |
|---------|------|
| `kboard.md` | MoSCOW + **Ongoing** (E01:S01 only) |
| `kanban-completed.md` | Terminal tasks |
| `intake-completed.md` | Terminal FR/BR/UXR |

---

## v1 package → v3.2 remap (summary)

| v1 | v3.2 |
|----|------|
| E01 Project Core | E01 Repository infra (perpetual) + E02:S02 bootstrap + E24+ delivery |
| E05 FR | E04:S02 |
| E06 BR | E04:S03 |
| E07 UXR | E04:S04 |
| E08 Codebase Maintenance | E10:S01 |
| E09/E18 swap | **Eliminated** — single authority table above |
| E21 Architecture Refactoring | E05 (project architecture) + E10:S02 (code refactors) |
| E22 CI/CD | E07 |
| E23 CI/CD duplicate | E07 (consolidated) |
| v1 Documentation epic | E06 |

---

## Adopter vs Maintainer

| Concern | Adopter v3.2 | ai-dev-kit live |
|---------|--------------|-----------------|
| Perpetual | E01:S01 | E02:S16 |
| Intake | E04 stories | FR/BR under `docs/kanban/fr-br` |
| Project architecture | E05 | `docs/architecture/` (live dogfood) |
| Code quality | E10 | E07/E08 split (dogfood divergence) |

---

## References

- `08-executive-summary.md` · `07-package-migration-blueprint.md` · `04-pm-elegance-scorecard.md`
