# Kanban Migration Proposal — Guided mode (attempt 11 simulation)

**Project:** starborn_legacy  
**Legacy root:** `docs-pre-ai-dev-kit/project-management/kanban/` (read-only)  
**Target root:** `docs/kanban/`  
**Prepared:** 2026-06-17  
**Mode:** **Guided** — TSP-anchored (simulated; kit does not yet implement `guided`)

**TSP inputs:**

| File | Role |
|------|------|
| `docs/kanban/reference/TARGET-EST-TREE.md` | Canonical 377-task tree |
| `docs/kanban/reference/LEGACY-EPIC-REMAP.yaml` | Game epic → E30–E45 |
| `docs/kanban/reference/TARGET-FOLDER-MAP.yaml` | Folder layout |
| `docs/kanban/reference/KMA-METHODS.md` | M01–M08 application order |

---

## Delta vs attempt 10 blind proposal

| Step | Blind 10 | Guided 11 (simulated) |
|------|----------|------------------------|
| Epic map | Policy matrix only | Policy + **LEGACY-EPIC-REMAP.yaml** |
| E15 infra split | Mostly → E02 | **E01/E02/E03/E05/E06/E33** per story concern |
| UAT content | Under E08/E07 | **E41** (M07); same S/T numbers |
| Story import | `story-01-*` collision | **`story-NN-legacy-*`** (M02) |
| Task inventory | 564 inline tokens | **377 deduped** canonical IDs |
| Fan-out | Implicit | **Lazy** — 37 CATL task files only (M06) |
| Validation | `validate_installation` | + **`score_kma_structure.py`** ≥ 0.85 target |

---

## Simulated ingest summary (post-guided)

| Metric | Blind 10 | Guided 11 (target) |
|--------|----------|---------------------|
| Epics (domain+ops) | 22 | **19** (TSP bands) |
| Unique `E:S:T` | 564 tokens (unduped) | **377** |
| Story filename collisions | Yes (fixed manually) | **0** |
| Weighted structural score | ~62% est. | **≥85%** when kit consumes TSP |

---

## Epic map (guided — from TSP + remap)

Game epics use [`LEGACY-EPIC-REMAP.yaml`](../../kanban/reference/LEGACY-EPIC-REMAP.yaml). Infra epics use `DUPLICATE_EPIC_POLICY` per [`KMA-METHODS.md`](../../kanban/reference/KMA-METHODS.md) M01.

| Legacy game | Canonical | Folder |
|-------------|-----------|--------|
| E01 Galaxy | E30 | `epic-30/` |
| E02 Ships | E31 | `epic-31/` |
| E07 Colonies | E33 | `epic-33/` |
| E09 Ship design | E34 | `epic-34/` |
| E10 UAT | E41 | `epic-41/` |
| E13/E14 Sensors/Diplomacy | E36 | `epic-36/` |
| … | … | See remap YAML |

---

## Sign-off implications

| Check | Guided simulation |
|-------|-------------------|
| UXR-017 collisions | **PASS** (M02) |
| BR-083 duplicate stories | **PASS** |
| Structural score | **73%** current repo · **98%** TSP parse · **≥85%** when kit writes tree |
| `validate_installation.py` | Not re-run this sprint |

---

## Kit implementation notes

1. Load TSP at proposal start; diff legacy ingest tokens against TSP sets.
2. Emit `TARGET-EST-ALIASES.md` equivalent for unresolved band mismatches.
3. Run `score_kma_structure.py` before adopter sign-off.
4. Do **not** overwrite greenfield E01–E08 templates — merge with M02.

**This document is adopter-authored simulation** for FR-079 / [issue #85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) — not kit-generated output.
