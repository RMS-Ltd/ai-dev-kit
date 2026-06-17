---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# KMA Methods — abstract playbook (attempt 11)

**Role:** Kit-consumable rules for Kanban Migration Assistant (KMA) **guided mode**.  
**Concrete target:** [TARGET-EST-TREE.md](TARGET-EST-TREE.md) (TSP freeze, Phase 1).  
**Worked example:** [attempt-10 blind pass](../../adk-feedback/attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md) + operator tweaks §4.

Attempt 10 KMA was **policy-only and blind**: it routed legacy stories via `DUPLICATE_EPIC_POLICY` but did not receive the operator tree, dedup rules, or UAT remap. Context-aware decisions lived in operator heads and tweak logs. This document extracts those decisions as **reusable methods** so ADK can approximate the TSP on future ingests.

---

## KMA modes

| Mode | Inputs | Output | When |
|------|--------|--------|------|
| **Blind** (kit today) | `legacy_root`, policy matrix | `migration-proposal.md` + routed stories | Greenfield install default |
| **Guided** (proposed) | Blind inputs + **TSP pack** (this folder) | Proposal **anchored** to `TARGET-EST-TREE` | Attempt 11 dry-run; mature adopters |
| **Score** (maintainer) | TSP vs KMA output tree | Structural diff + rubric score | Post-pass QA; ADK feedback |

**Rule:** Do not run blind KMA for attempt 11 reconcile. Use guided simulation or operator scripts until kit supports `target_est_tree`.

---

## Target Structure Pack (TSP) contract

| File | Method(s) |
|------|-----------|
| [TARGET-EST-TREE.md](TARGET-EST-TREE.md) | M03, M04, M08 — canonical inventory |
| [TARGET-EST-ALIASES.md](TARGET-EST-ALIASES.md) | M03 — duplicate rows & band mismatches |
| [BAND-PARITY.md](BAND-PARITY.md) | M08 — temp vs TSP vs folder counts |
| [LEGACY-EPIC-REMAP.yaml](LEGACY-EPIC-REMAP.yaml) | M01 — game epic → E30–E45 |
| [TARGET-FOLDER-MAP.yaml](TARGET-FOLDER-MAP.yaml) | M05 — folder ≡ epic |
| [TITLE-RESOLUTION-RULES.md](TITLE-RESOLUTION-RULES.md) | M04 — title enrichment |
| [SCORING-RUBRIC.yaml](SCORING-RUBRIC.yaml) | M08 — pass thresholds |

Builder: `tools/kanban/build_target_est_tree.py` (regenerate TSP from `temp/sbl-operator-kanban-est-tree-titled.md`).

---

## Abstract methods

### M01 — Concern routing (legacy → canonical band)

**Intent:** Route each legacy epic/story to the correct **concern band**, not the nearest v4 folder.

| Legacy class | Canonical home | Policy |
|--------------|----------------|--------|
| Game / 4X vertical | **E30–E45** | See [LEGACY-EPIC-REMAP.yaml](LEGACY-EPIC-REMAP.yaml) |
| Infra / ADK programme (E15, E17, E11) | **E01–E08 split** | `DUPLICATE_EPIC_POLICY` matrix — never dump all into E02 |
| UAT / playability (was under E08 band) | **E41** | Same S/T numbers; see M07 |
| Perpetual UKW / RW maintenance | **E02:S16** | [FR-088](../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) |

**Attempt-10 failure:** E15 stories routed entirely to E02.  
**Operator fix:** Split to E01/E02/E03/E05/E06/E33 per policy table ([FB §4 tweak 1](../../adk-feedback/attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md)).

**Kit guidance:** Apply game remap table **before** story copy; apply infra split **per story concern**, not per legacy epic file count.

---

### M02 — Core shell preservation (template wins)

**Intent:** Greenfield E01–E08 templates are authoritative shells; legacy merges must not overwrite template story filenames.

| Situation | Action |
|-----------|--------|
| Fresh `story-01-*.md` exists in E02/E03 | Import legacy as `story-NN-legacy-<slug>.md` |
| Legacy story same S as template | Keep template file; legacy → supplementary or legacy-prefixed file |
| Sign-off UXR-017 | Zero duplicate `story-01-*` basename collisions per epic folder |

**Attempt-10 failure:** Core story merge collided with template `story-01-*` in epic-02, epic-03 → BR-083 NOT READY.  
**Operator fix:** `story-NN-legacy-*` naming ([FB §4 tweak 2](../../adk-feedback/attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md)).

**Kit guidance:** Detect basename collision **before** copy; auto-suffix `-legacy` or prompt guided mode.

---

### M03 — Canonical ID vs display band (dedup)

**Intent:** Native `E:S:T` in the task token is **identity**. Section headers and `## E##` band lines are display-only and may be wrong.

| Rule | Detail |
|------|--------|
| Dedup key | One row per native `E:S:T` |
| Title on conflict | Longest **named** title wins; skip `(unresolved…)` unless no alternative |
| Grouping | Tasks appear under **native** epic/story from ID, not band header |
| Aliases | Log duplicates in [TARGET-EST-ALIASES.md](TARGET-EST-ALIASES.md); do not duplicate in canonical tree |
| Placement conflict | When same ID appears under two homes (e.g. E08 vs E41 UAT), **canonical home wins** (M07) |

**Attempt-10 failure:** 473 source lines treated as 473 tasks; inline tokens counted but not deduped.  
**Operator fix:** TSP builder dedupes to **377** unique IDs; 58 duplicate-ID variants documented.

**Kit guidance:** Structural score uses **unique** `E:S:T` count, not source line count.

---

### M04 — Title enrichment

**Intent:** Maximise named task coverage without inventing scope.

See [TITLE-RESOLUTION-RULES.md](TITLE-RESOLUTION-RULES.md) for the ordered resolver.  
**TSP result:** 88.9% named (329/377); 41 unresolved marked explicitly.

**Kit guidance:** Run resolver **after** routing and dedup; emit unresolved with story context for operator review.

---

### M05 — Folder ≡ canonical epic

**Intent:** `epics/epic-NN/` folder number matches canonical epic ID; merged bands use supplementary docs, not duplicate folders.

| Pattern | Example |
|---------|---------|
| 1:1 folder | E33 → `epic-33/` |
| Merged band | E32 economy + legacy E33 economy → `epic-32/` + `epic-32-from-e33-economy.md` |
| Reserved / merged-away | E35 reserved; E38 merged into E36 UI band — see folder map `status` |
| Orphan forbidden | `epic-43/`, `epic-44/` → fold into E39 supplementary (Phase 3) |

**Attempt-10 failure:** Domain titles still showed legacy "Epic N:" headers.  
**Operator fix:** Renumber headers to E30+ ([FB §4 tweak 4](../../adk-feedback/attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md)).

**Kit guidance:** Emit [TARGET-FOLDER-MAP.yaml](TARGET-FOLDER-MAP.yaml) alongside tree; validate folder exists for every epic in tree.

---

### M06 — Lazy task fan-out

**Intent:** Route **stories** first; create `T*.md` task files only for active board rows and core CATL scaffold.

| Layer | Fan-out |
|-------|---------|
| TSP / est-tree | All unique `E:S:T` with titles |
| Epic/story bodies | Inline `#### E:S:T` or checklist for historical work |
| `epics/.../T*.md` | Active `kboard.md` rows + CATL only (~37 after attempt 10) |

**Attempt-10 failure:** Kit preserved 564 inline tokens but did not imply 564 task files.  
**Operator rule:** Do not fan-out entire legacy ingest in Phase 1–3.

**Kit guidance:** Proposal must state **fan-out policy** explicitly; default = lazy.

---

### M07 — Extension epic remap (UAT → E41)

**Intent:** Stories that are UAT/playability belong in extension epic **E41**, not E08 Code Quality.

| Signal | Action |
|--------|--------|
| Section header contains UAT markers (readiness, playability, HUD, galaxy navigation, …) | Place task under **E41:Sxx** (same story/task numbers) |
| ID still says `E08:S…` | Document in aliases; optional ID renumber is Phase 3+ |
| Collision with non-UAT E08 row | UAT placement wins for that `E:S:T` |

**TSP result:** E41 5S·26T; E08 retains code-quality scaffold only.

**Kit guidance:** Guided mode reads UAT marker list from TSP builder (`UAT_STORY_HEADER_MARKERS` in `build_target_est_tree.py`) or config YAML.

---

### M08 — Structural scoring

**Intent:** Quantify proximity to TSP for blind vs guided passes and ADK feedback.

Dimensions and weights: [SCORING-RUBRIC.yaml](SCORING-RUBRIC.yaml).  
Parity table: [BAND-PARITY.md](BAND-PARITY.md).

**Minimum guided pass:** weighted score ≥ **0.85** (see rubric).  
**Blind baseline (attempt 10):** estimated **0.55–0.65** on task/band dimensions pre-tweak.

**Kit guidance:** Ship `validate_kma_structure.py` (or equivalent) that reads TSP + output folder and emits score JSON.

---

## Method application order (guided KMA)

```text
1. Ingest legacy (epics, stories, inline E:S:T)
2. M01 — Route concerns (infra split + game remap + UAT → E41)
3. M02 — Merge into core shells (collision-safe naming)
4. M03 — Dedup tasks by native E:S:T
5. M04 — Resolve titles
6. M05 — Assign folders per TARGET-FOLDER-MAP
7. M06 — Fan-out task files (lazy only)
8. M08 — Score vs TSP; iterate until ≥ threshold or operator sign-off
```

---

## Attempt-10 failure → method map

| Failure | Method |
|---------|--------|
| E15 → all E02 | M01 |
| `story-01` filename collision | M02 |
| E31 body wrong (E05-only) | M01 + M05 |
| Legacy "Epic N:" headers in domain | M05 |
| 473 lines vs unique tasks | M03 |
| UAT under E08 | M07 |
| 564 inline tokens → task file expectation | M06 |
| No scoring vs operator tree | M08 |

---

## ADK feature asks (for FR / issue #57+)

1. **`target_est_tree` input** — path to TSP or JSON export for guided mode.
2. **`kma_mode: blind | guided | score`** in orchestrator / proposal template.
3. **Collision detector** — template vs legacy story basename (UXR-017 automation).
4. **Deduped task inventory** in proposal summary (unique `E:S:T`, not line count).
5. **Structural score report** — JSON + markdown from [SCORING-RUBRIC.yaml](SCORING-RUBRIC.yaml).

---

## Phase gates (attempt 11)

| Phase | Gate |
|-------|------|
| 1 TSP freeze | ✅ `TARGET-EST-TREE.md` — 377 tasks, band-complete |
| 2 Methods + rubric | This doc + `SCORING-RUBRIC.yaml` signed off |
| 3 Repo align | No orphan folders; `kanban-structure` ≡ TSP; optional validator PASS |
| 4 ADK package | Guided dry-run scored ≥ 0.85 |
| 5 SBL dev | `kboard` rows + lazy task files only |
