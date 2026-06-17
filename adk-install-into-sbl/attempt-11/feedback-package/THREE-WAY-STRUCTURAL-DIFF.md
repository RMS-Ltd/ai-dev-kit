# Three-way structural diff — temp vs TSP vs repo

**Attempt:** 11 · **HEAD:** `0d50aa3c` (post-TSP commit)  
**Purpose:** Phase 4 guided KMA baseline — quantify gaps before kit `target_est_tree` input exists.

---

## Task inventory (`E:S:T` unique IDs)

| Source | Path | Unique tasks | Notes |
|--------|------|-------------:|-------|
| Operator temp | `temp/sbl-operator-kanban-est-tree-titled.md` | **366** | 473 source lines; pre-dedup |
| TSP (canonical) | `docs/kanban/reference/TARGET-EST-TREE.md` | **377** | Deduped + E36 body inject + UAT→E41 |
| Active repo | `docs/kanban/epics/` | **384** | Inline tokens in epic/story bodies |
| Pass-1 archive | `docs/kanban/archive/legacy-kma-ingest/` | **327** | Superseded blind KMA stories |

### Set relationships

| Comparison | Count | Interpretation |
|------------|------:|----------------|
| temp ∩ TSP | 366 | All temp native IDs retained in TSP |
| TSP − temp | 11 | E36:S06:T01–T11 injected from epic body |
| TSP ∩ repo | 193 | ~51% TSP tasks tokenized in active epics |
| TSP − repo | 184 | In TSP only (mostly mega-story / temp band) |
| repo − TSP | 191 | Legacy IDs in bodies not in deduped TSP |

---

## Epic band parity (stories · tasks)

See [`BAND-PARITY.md`](../../kanban/reference/BAND-PARITY.md). Highlights:

| Epic | Temp | TSP | Repo folder | Gap |
|------|------|-----|-------------|-----|
| E08 | 7S·30T | 0S·0T | 2 story files | UAT → E41 |
| E41 | 0S·0T | 5S·26T | 10 story files | Remap + S06–S10 files beyond TSP |
| E34 | 8S·49T | 14S·115T | 5 story files | Native-ID fan-out vs temp band headers |
| E36 | 5S·0T | 10S·11T | 0 story files | Shells + body inject |
| E39 | 14S·78T | 1S·1T | 7 story files | TSP aggressive dedup |

---

## Structural score (rubrics)

| Candidate | Weighted | Pass (≥85%)? | Command |
|-----------|----------:|:------------:|---------|
| Active `epics/` | **73.2%** | No | `score_kma_structure.py` |
| + legacy archive | **73.2%** | No | `--include-archive` |
| TSP self-test | **98.3%** | Yes | `--candidate-tsp` |
| Attempt 10 blind (est.) | **~62%** | No | [attempt-10 FB](../attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md) |

**Interpretation:** Filesystem structure is sound (collisions 100%, orphans 100%). Task coverage and band parity need guided routing or lazy fan-out — not another blind pass.

---

## Attempt 10 blind vs guided (projected)

| Dimension | Blind 10 | Guided + TSP (projected) |
|-----------|----------|---------------------------|
| `DUPLICATE_EPIC_POLICY` only | ✅ | ✅ + remap YAML |
| Template collision (UXR-017) | ❌ → fixed manually | ✅ M02 auto-suffix |
| Deduped task tree | ❌ | ✅ M03 |
| UAT → E41 | ❌ | ✅ M07 |
| Scoring vs target | Not run | ✅ M08 |

---

## Kit input contract (proposed)

```yaml
kma_mode: guided
target_est_tree: docs/kanban/reference/TARGET-EST-TREE.md
target_folder_map: docs/kanban/reference/TARGET-FOLDER-MAP.yaml
legacy_epic_remap: docs/kanban/reference/LEGACY-EPIC-REMAP.yaml
methods: docs/kanban/reference/KMA-METHODS.md
score_rubric: docs/kanban/reference/SCORING-RUBRIC.yaml
```
