# FB-ADK — Guided KMA & Target Structure Pack (attempt 11)

**Kit pin:** `v0.4.1171` (unchanged from attempt 10)  
**Prior arm:** B blind KMA — [attempt 10](../attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md)  
**Intake:** [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) (successor to closed [#57](https://github.com/RMS-Ltd/ai-dev-kit/issues/57) attempt 10)

---

## 1. Problem statement

Attempt 10 KMA was **policy-only and blind**. The operator's optimized E/S/T tree existed only as a scoring reference ([attempt-09](../attempt-09/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md)) and in `temp/` — **not** as kit input. Context-aware decisions (dedup, UAT→E41, template collision avoidance, title resolution) required four manual tweak passes.

**Attempt 11 delivers** a **Target Structure Pack (TSP)** + **abstract KMA methods** so the kit can run **guided mode** and score structural proximity without adopter improvisation.

---

## 2. Deliverables (adopter reference implementation)

| Artifact | Path |
|----------|------|
| Canonical tree | [`docs/kanban/reference/TARGET-EST-TREE.md`](../../kanban/reference/TARGET-EST-TREE.md) |
| Methods playbook | [`docs/kanban/reference/KMA-METHODS.md`](../../kanban/reference/KMA-METHODS.md) |
| Scoring rubric | [`docs/kanban/reference/SCORING-RUBRIC.yaml`](../../kanban/reference/SCORING-RUBRIC.yaml) |
| Scorer tool | [`tools/kanban/score_kma_structure.py`](../../tools/kanban/score_kma_structure.py) |
| TSP builder | [`tools/kanban/build_target_est_tree.py`](../../tools/kanban/build_target_est_tree.py) |
| Three-way diff | [THREE-WAY-STRUCTURAL-DIFF.md](THREE-WAY-STRUCTURAL-DIFF.md) |
| Guided proposal (sim.) | [migration-proposal-guided.md](migration-proposal-guided.md) |

**Metrics (TSP freeze):** 377 unique `E:S:T` · 88.9% named · 19 epic bands · 0 filename collisions in repo.

---

## 3. Requested kit features

### 3.1 `kma_mode: guided`

| Mode | Input | Output |
|------|--------|--------|
| `blind` (today) | `legacy_root` + policy matrix | Proposal only |
| **`guided` (new)** | + TSP paths above | Proposal **anchored** to `TARGET-EST-TREE` |
| `score` | TSP vs output dir | JSON + markdown report |

### 3.2 Orchestrator wiring

```yaml
# Proposed rw-config / install orchestrator extension
kanban_migration:
  mode: guided
  target_est_tree: docs/kanban/reference/TARGET-EST-TREE.md
  target_folder_map: docs/kanban/reference/TARGET-FOLDER-MAP.yaml
  legacy_epic_remap: docs/kanban/reference/LEGACY-EPIC-REMAP.yaml
  methods_doc: docs/kanban/reference/KMA-METHODS.md
  pass_threshold: 0.85
  validator: tools/kanban/score_kma_structure.py
```

### 3.3 Method hooks (from M01–M08)

1. **Concern routing** — `LEGACY-EPIC-REMAP.yaml` + infra split table (not all E15→E02).
2. **Template collision** — auto `story-NN-legacy-*` when basename exists (UXR-017).
3. **Dedup** — one row per native `E:S:T`; aliases file separate.
4. **Title resolver** — ordered rules in `TITLE-RESOLUTION-RULES.md`.
5. **Folder map** — emit/consume `TARGET-FOLDER-MAP.yaml`.
6. **Lazy fan-out** — do not create 377 `T*.md` by default.
7. **UAT→E41** — section marker list configurable.
8. **Structural score** — invoke scorer post-pass; block sign-off if &lt; threshold.

---

## 4. Scoring evidence

| Run | Weighted | Notes |
|-----|----------:|-------|
| Repo `epics/` vs TSP | **73.2%** | Structural PASS; coverage gap expected |
| TSP self-test | **98.3%** | Parser/rubric sanity |
| Attempt 10 blind (est.) | **~62%** | Pre-tweak; collisions |

Repo structural checks **pass** (collisions, orphans, misfiles). Low score is **task token coverage** in active tree vs full TSP — acceptable under lazy fan-out (M06).

---

## 5. Comparison to attempt 10

| Item | Attempt 10 | Attempt 11 |
|------|------------|------------|
| KMA mode | Blind | **Guided (simulated)** |
| Target tree in kit | No | **TSP in repo** |
| Ad-hoc KMA scripts | 0 | 0 (builder/scorer are **post-KMA** tooling) |
| Operator tweaks | 4 manual | Encoded in METHODS |
| Structural score | Not run | **73% repo / 98% TSP** |
| Install RC | PASS | Not re-run (kanban-only sprint) |

---

## 6. Acceptance criteria for kit (proposed)

- [ ] Orchestrator accepts `target_est_tree` path and fails fast if missing in `guided` mode.
- [ ] Proposal template includes deduped unique task count (not source line count).
- [ ] Template collision detector integrated (M02).
- [ ] `validate_kma_structure` or kit wrapper calls rubric; JSON output stable for CI.
- [ ] Documentation: when to use blind vs guided vs score.

---

## 7. References

- Attempt 10 blind FB: [FB-ADK-KMA-KANBAN-MIGRATION.md](../attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md)
- Install paths (carry-forward): [FB-ADK-install-paths-industry-patterns.md](../attempt-09/FB-ADK-install-paths-industry-patterns.md)
- Operator temp source: `temp/sbl-operator-kanban-est-tree-titled.md` (not deleted; TSP is canonical)
