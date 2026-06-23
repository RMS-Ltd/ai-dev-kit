# Attempt 11 — execution checklist (install run)

**Intake:** [ai-dev-kit#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**Arm:** B — greenfield shell + **guided KMA** (TSP as input)  
**Base branch:** `pre-adk-install` → **new** `dev` (do not continue attempt-10 `dev` lineage)

---

## Two phases (do not conflate)

| Phase | What | Branch | Status |
|-------|------|--------|--------|
| **A — Programme prep** | TSP, METHODS, rubric, scorer, feedback **spec** | Old `dev` (`a77fa4b4`) | ✅ Done locally — **not** execution evidence |
| **B — Install execution** | Full Arm B from `pre-adk-install` + guided KMA | **New** `dev` from `pre-adk-install` | ⏳ Pending |

**Do not push** prep-only `dev` for attempt 11 evidence. Issue #85 blob URLs are updated **after** phase B lands on the new `dev`.

---

## Phase B — branch setup

```bash
git fetch origin
git checkout pre-adk-install
git pull origin pre-adk-install   # if needed
git checkout -b dev                 # or dev-attempt-11 then rename
```

### Carry TSP pack onto new `dev` (pick one)

| Method | Command / action |
|--------|------------------|
| **Cherry-pick** (preferred) | `git cherry-pick 0d50aa3c^..a77fa4b4` (TSP + feedback docs) |
| **Minimal copy** | `docs/kanban/reference/`, `tools/kanban/build_target_est_tree.py`, `tools/kanban/score_kma_structure.py`, `docs/adk-feedback/attempt-11/`, `temp/sbl-operator-kanban-est-tree-titled.md` |
| **Regenerate TSP** | Copy `temp/` → `python3 tools/kanban/build_target_est_tree.py` |

Verify after carry:

```bash
test -f docs/kanban/reference/TARGET-EST-TREE.md
test -f docs/kanban/reference/KMA-METHODS.md
python3 tools/kanban/score_kma_structure.py --candidate-tsp
```

---

## Phase B — install sequence (layered)

Follow layered install sequence in [adopter-install-attempt-preflight.md](../../../docs/guides/adopter-install-attempt-preflight.md) and [attempt-10 README](../attempt-10/README.md) (PASS baseline). Attempt 11 **diff** at step 5:

| Step | Layer | Attempt 10 | Attempt 11 |
|------|-------|------------|------------|
| 0 | Vendor + venv | ✅ | Same |
| 1 | `rw-config.yaml` | ✅ | Same — `src/starborn_legacy/version.py` |
| 2 | SQLite SAA | ✅ | `.adk/release-state.db` before first RW |
| 3 | RW wiring | ✅ | mode C |
| 4 | Kanban skeleton | ✅ | Fresh E01–E08 |
| **5** | **KMA** | **Blind** (policy only) | **Guided** — anchor to TSP |
| 5b | Score | Not run | `score_kma_structure.py` ≥ 0.85 target |
| 6 | Sign-off | 7/0/1 | UXR-017 + structural score |
| 7 | First RW | E02:S02:T01 | Install completion task |

### Guided KMA inputs (operator / agent until kit supports `kma_mode: guided`)

| Input | Path |
|-------|------|
| Target tree | `docs/kanban/reference/TARGET-EST-TREE.md` |
| Folder map | `docs/kanban/reference/TARGET-FOLDER-MAP.yaml` |
| Legacy remap | `docs/kanban/reference/LEGACY-EPIC-REMAP.yaml` |
| Methods | `docs/kanban/reference/KMA-METHODS.md` (M01–M08 order) |
| Legacy ingest | `docs-pre-ai-dev-kit/project-management/kanban/` |

**Rules:** Apply [KMA-METHODS.md](../../kanban/reference/KMA-METHODS.md); **no** blind-only pass; **0** ad-hoc `scripts/*kma*.py`; lazy task fan-out (M06).

Simulated proposal (reference): [migration-proposal-guided.md](migration-proposal-guided.md).

---

## Phase B — gates

| Gate | Command / check | Pass |
|------|-----------------|------|
| Install RC strict | `validate_install_rc.py --strict` (arm-b) | |
| Installation | `validate_installation.py` | |
| Template completeness | `validate_v4_template_completeness.py` | |
| Story collisions | UXR-017 / BR-083 | 0 duplicate `story-01-*` per epic |
| Structural score | `python3 tools/kanban/score_kma_structure.py` | ≥ **0.85** (guided target) |
| Ad-hoc KMA scripts | `find . -name '*kma*' -path '*/scripts/*'` | **0** |
| SQLite before RW | `.adk/release-state.db` exists pre-RW | |

---

## Phase B — evidence & issue #85

After sign-off on **new** `dev`:

1. `git push -u origin dev`
2. Update `docs/adk-feedback/attempt-11/feedback-payload.json`:
   - `head_sha` → post-install commit
   - `install_run_id` → e.g. `20260618-attempt-11`
   - `package_status` → `final` (after adopter sign-off)
3. Refresh blob links in [SUBMISSION.md](SUBMISSION.md) or comment on [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)
4. Optional: `logs/attempt-11/` diary + transcripts (gitignored)

### Payload fields to replace (prep placeholders)

```json
"source": {
  "head_sha": "<post-install-sha>",
  "branch": "dev",
  "install_log_path": "logs/attempt-11"
}
```

---

## Phase C — after install (SBL dev)

Per [KMA-METHODS.md](../../kanban/reference/KMA-METHODS.md) M06:

- **Do not** fan-out all 377 `T*.md` files
- Use `kboard.md` for active rows only
- Structure SoT: `docs/kanban/reference/TARGET-EST-TREE.md`

---

## Related

| Doc | Role |
|-----|------|
| [SUBMISSION.md](SUBMISSION.md) | Programme summary (update after B) |
| [FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) | Kit feature asks |
| [attempt-10/SUBMISSION.md](../attempt-10/SUBMISSION.md) | Blind KMA baseline |
| [attempt-09 install paths](../attempt-09/FB-ADK-install-paths-industry-patterns.md) | PRIMARY carry-forward |
