# Kanban Migration Proposal — Starborn Legacy (attempt 10 blind KMA)

**Project:** starborn_legacy  
**Legacy root:** `docs-pre-ai-dev-kit/project-management/kanban/` (read-only)  
**Target root:** `docs/kanban/`  
**Prepared:** 2026-06-15  
**Session:** `20260615-attempt-10`  
**Mode:** Arm B blind kit first pass — **no** pre-authored TARGET-ES tree; policy-only mapping

---

## Ingest summary

| Metric | Count |
| ------ | ----- |
| Epics detected | 19 |
| Stories detected | 68 |
| Inline task tokens | 564 |
| Board files | (legacy board not active — fresh `docs/kanban/kboard.md` from greenfield) |

**Naming patterns:** `epic-{nn}/epic-{nn}.md`, `story-{nn}-e{epic}-s{n}.md`, inline `E:S:T`

Source: `kma_ingest.py --legacy-root docs-pre-ai-dev-kit/project-management/kanban --json`

---

## DUPLICATE_EPIC_POLICY matrix (before epic map)

| Legacy concern | v4 home | Handling |
|----------------|---------|----------|
| Repo hygiene, UKW, perpetual ops | **E01:S01** | Fresh core shell E01 — legacy E15:S01,S02 absorbed as stories |
| Workflow / ADK install programme | **E02** | E15:S05,S09,S13 → E02 stories |
| FR / BR / UXR intake | **E03:S02–S04** | Legacy E17 FR stories → E03; E15:S04,S10,S11 → E03 |
| ADR / architecture | **E04** | E15:S03 artifacts → E04 stories |
| Docs / maintainer KB | **E05** | Legacy E11 + E03 doc stories → E05 |
| CI / pipeline | **E06** | E15:S09,S12 → E06 |
| Test harness / UAT discipline | **E07** | Legacy E03 test stories + E10 → E07 |
| Security baseline | **E08** | Fresh shell; E15 security stories if any → E08 |
| **Game / 4X vertical** | **E30+ DOMAIN** | E01–E02,E04–E10,E12–E14,E16,E18–E19 |
| GBP / rulesets | **E43 DOMAIN** | Legacy E19 |
| Backlog / future | **E45 DOMAIN** | Legacy E16 |

**Dual-mapping flags:** None — game epics do not duplicate Core E01–E08 shells.

---

## Epic map

| Legacy | Title | Target | Action |
|--------|-------|--------|--------|
| E01 | Galaxy Navigation | **E30** | merge → domain |
| E02 | Ship Interaction | **E31** | merge |
| E03 | Testing & Documentation | **E07** + **E05** | split stories |
| E04 | Waypoints | **E32** | merge |
| E05 | Multiple Ships | **E31** | merge into E31 |
| E06 | Resources | **E33** | merge |
| E07 | Colonies | **E34** | merge |
| E08 | Research | **E35** | merge |
| E09 | Ship Design | **E36** | merge |
| E10 | UAT | **E40** | merge |
| E11 | Knowledge & Docs | **E05** | merge stories |
| E12 | Game Init | **E39** | merge |
| E13 | Sensors / FoW | **E37** | merge |
| E14 | Alliances | **E38** | merge |
| E15 | Infrastructure & Tooling | **E01–E06** | split per policy rows |
| E16 | Backlog | **E45** | merge |
| E17 | FR Implementation | **E03** | merge stories |
| E18 | Narrative | **E44** | merge |
| E19 | GBP | **E43** | merge |

**Fresh core E01–E08** from greenfield install **retained** — domain band E30–E45 added alongside.

---

## Keep

- All 68 legacy stories (content preserved under target homes)
- Inline `E:S:T` tokens in story bodies (forensic traceability)
- `docs-pre-ai-dev-kit/` archive (read-only, untouched)

## Drop

- None — no zombie epics identified at ingest

## Merge

- E05 → E31 (ships)
- E11 → E05 (documentation)
- E17 → E03 (intake)

---

## Domain rationale

Starborn Legacy is a **vertical 4X game**. Core E01–E08 provide repo/engineering scaffold from ADK v4 fresh install. All gameplay epics (navigation, economy, colonies, narrative, etc.) belong in **DOMAIN E30+** per DUPLICATE_EPIC_POLICY — not in Core slots that would duplicate repo concerns.

---

## Operator sign-off

- [x] I have reviewed this proposal and authorize migration file writes (Step 4).

**Signed off by:** operator (`proceed` — attempt 10 blind kit first pass)  
**Date:** 2026-06-15

---

## Execution record

| Pass | Date | Agent action | Result |
|------|------|--------------|--------|
| 1 | 2026-06-15 | Mechanical `cp` (invalid KMA) | Collisions E02/E03; E15 undifferentiated |
| 2 | 2026-06-15 | **Agentic synthesise** — E15 routed per policy; E17/E11 renamed; E31 merged E02+E05; domain titles fixed; `kboard.md` updated | `validate_installation` PASS; UXR-017 READY; RC 9/11 |

