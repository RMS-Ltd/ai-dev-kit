---
lifecycle: transient
created_at: 2026-06-14T12:00:00Z
housekeeping_policy: delete
---

# Kanban Migration Proposal (example — unsigned)

**Project:** SBL Minimal Fixture (anonymized)  
**Legacy root:** `tests/fixtures/sbl-legacy-kanban-minimal` (read-only)  
**Target root:** `docs/kanban`  
**Prepared:** 2026-06-14  
**Agent session:** benchmark-example (not signed off)

> **Status:** Example only — operator sign-off **not** granted. Do not execute Step 4 from this artifact.

---

## Ingest summary

| Metric | Count |
| ------ | ----- |
| Epics detected | 3 |
| Stories detected | 8 |
| Inline task tokens | 9 |
| Board files | 0 |

**Naming patterns observed:** `Epic-{nn}.md` at legacy root; `E{n}-S{m}.md` in `stories/`; inline `E:S:T` tokens in story bodies.

---

## DUPLICATE_EPIC_POLICY matrix (pre-map)

| Legacy concern | v4 home | Notes |
| -------------- | ------- | ----- |
| Core game loop mechanics | **E24 DOMAIN** | Vertical product — not E01 REPO |
| Colony / population systems | **E24 DOMAIN** | Game domain feature |
| Space exploration / sensors | **E24 DOMAIN** | Game domain feature |
| Repo CI / security / intake | *(none in fixture)* | N/A for this corpus |

---

## Epic map

| Legacy | v4 target | Action | Rationale |
| ------ | --------- | ------ | --------- |
| E01 — Core Game Loop | E24 — Core Game Loop | merge | Vertical game mechanics → DOMAIN pack |
| E02 — Colony Systems | E24 — Colony Systems | merge | Absorb into E24; synthesise overview from E01+E02 |
| E03 — Space Exploration | E24 — Space Exploration | merge | Exploration vertical; keep as E24 story group |

**Legend:** keep · merge · drop · rename

---

## Keep

- All 8 legacy stories — content retained under E24 domain paths after rename.
- All 9 inline task tokens — preserved in migrated story bodies until task files filed.

---

## Drop

- *(none)* — fixture has no zombie or duplicate epics.

---

## Merge

- E01 + E02 + E03 → **E24 DOMAIN** — single domain epic shell for game-vertical work; stories become `epic-24/story-{nn}-*.md` with synthesised E24 epic overview combining loop, colony, and exploration themes.

---

## Domain rationale

This fixture represents a **game-vertical** adopter (Starborn Legacy pattern). Canonical Core E01–E08 cover repo/workflow/intake scaffolds — not game mechanics. Per [DUPLICATE_EPIC_POLICY.md](../../../packages/frameworks/kanban/guides/DUPLICATE_EPIC_POLICY.md), vertical product work maps to **E24+ DOMAIN**, not duplicate Engineering epics.

---

## Execution plan (post sign-off)

1. Create `epics/epic-24/` under target `kanban_root`
2. Synthesise E24 epic overview from E01–E03 legacy sources
3. Migrate 8 stories to `epic-24/story-{nn}-*.md` paths
4. Seed `kboard.md` skeleton with E24 in-flight rows
5. Run `validate_installation.py` and `validate_v4_template_completeness.py --strict`

---

## Operator sign-off

- [ ] I have reviewed this proposal and authorize migration file writes (Step 4).

**Signed off by:** _______________  
**Date:** _______________
