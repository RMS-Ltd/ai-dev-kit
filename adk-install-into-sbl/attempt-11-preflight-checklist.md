---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# SBL Attempt 11 — Preflight Checklist

> **Status: Complete** — Phase B install + bootstrap done; FR-079 **final**; maintainer intake accepted 2026-06-24. Intake: [ai-dev-kit #85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85).

**Purpose:** Maintainer and adopter preflight before **Phase B** — greenfield Arm B install from `pre-adk-install` with **guided KMA** (not a blind re-run). This is a **kanban structural programme** follow-on to attempt 10 ([#57](https://github.com/RMS-Ltd/ai-dev-kit/issues/57)); **do not** re-run install RC as the primary deliverable unless executing full Phase B.

**Program task:** [E06:S09:T26](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)  
**Kit follow-on:** [FR-135](../docs/kanban/fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) · [E06:S09:T38](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) — target: replace manual §2–§4 with guided orchestrator  
**Triage matrix:** [starborn-legacy-install-triage-matrix.md](../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)  
**Execution guide:** [attempt-11/feedback-package/EXECUTION-CHECKLIST.md](attempt-11/feedback-package/EXECUTION-CHECKLIST.md)

**ADK artifact root:** [attempt-11/](attempt-11/) · [kanban-reference/](kanban-reference/)

---

## 0. Two tracks (do not conflate)

| Track | What | Evidence branch | Status |
|-------|------|-----------------|--------|
| **A — Programme prep** | TSP, KMA-METHODS, rubric, feedback spec | Old local `dev` @ `a77fa4b4` | ✅ Complete — **not** install evidence |
| **B — Install execution** | Arm B from `pre-adk-install` + guided KMA | **New** `dev` from `pre-adk-install` | ✅ Done (`eb5f3f52`; merged to `main`) |

**Do not push** prep-only `dev` for #85. Remote SBL currently has `pre-adk-install` only (no `dev`).

---

## 1. Pin & environment

- [ ] **ADK pin:** `v0.4.1171` (unchanged from attempt 10)
- [ ] **SBL base:** `pre-adk-install` @ remote (`aa9ff624` or later)
- [ ] Vendor tarball SHA-256 verified (same as attempt 10 preflight)
- [ ] Disk space OK; clean working tree before vendor/submodule steps
- [ ] Create `logs/attempt-11/` (gitignored) with `session.log` + timestamped transcripts

---

## 2. Branch setup (Phase B)

```bash
git fetch origin
git checkout pre-adk-install
git pull origin pre-adk-install
git checkout -B dev    # new execution lineage — not attempt-10 dev
```

- [ ] Confirm **no** attempt-10 install state on branch (fresh from `pre-adk-install`)
- [ ] Record `install_run_id` (e.g. `20260618-attempt-11`) in session log

---

## 3. Carry Target Structure Pack (required before guided KMA)

Pick **one** method ([EXECUTION-CHECKLIST](attempt-11/feedback-package/EXECUTION-CHECKLIST.md)):

| Method | Action |
|--------|--------|
| **Cherry-pick** (preferred) | `git cherry-pick 0d50aa3c^..a77fa4b4` from local prep `dev` |
| **Minimal copy** | Copy from ADK mirror: `docs/kanban/reference/`, `tools/kanban/*.py`, `docs/adk-feedback/attempt-11/`, [`attempt-10/operator-rework-archive/OPERATOR-REWORKED-EST-TREE.md`](attempt-10/operator-rework-archive/OPERATOR-REWORKED-EST-TREE.md) |

### TSP pack completeness (verify all exist on execution branch)

| File | ADK mirror | Required for guided KMA |
|------|------------|-------------------------|
| `TARGET-EST-TREE.md` | ✅ [kanban-reference/](kanban-reference/TARGET-EST-TREE.md) | Yes |
| `KMA-METHODS.md` | ✅ | Yes |
| `SCORING-RUBRIC.yaml` | ✅ | Yes |
| `LEGACY-EPIC-REMAP.yaml` | ⚠️ carry from prep | Yes |
| `TARGET-FOLDER-MAP.yaml` | ⚠️ carry from prep | Yes |
| `TARGET-EST-ALIASES.md` | ⚠️ carry from prep | Recommended |
| `BAND-PARITY.md` | ⚠️ carry from prep | Recommended |
| `TITLE-RESOLUTION-RULES.md` | ⚠️ carry from prep | Recommended |
| `REPO-ALIGNMENT.md` | ⚠️ carry from prep | Optional |
| `tools/kanban/build_target_est_tree.py` | ⚠️ carry from prep | Regenerate TSP |
| `tools/kanban/score_kma_structure.py` | ⚠️ carry from prep | Gate |

```bash
test -f docs/kanban/reference/TARGET-EST-TREE.md
test -f docs/kanban/reference/KMA-METHODS.md
test -f docs/kanban/reference/LEGACY-EPIC-REMAP.yaml
test -f docs/kanban/reference/TARGET-FOLDER-MAP.yaml
python3 tools/kanban/score_kma_structure.py --candidate-tsp
```

---

## 4. Install sequence (layered — same as attempt 10 except KMA step)

Reference: [adopter-install-attempt-preflight.md](../docs/guides/adopter-install-attempt-preflight.md) · [attempt-10 README](attempt-10/README.md) (PASS baseline)

| Step | Layer | Attempt 11 note |
|------|-------|-----------------|
| 0 | Vendor + venv | Same as attempt 10 |
| 1 | `rw-config.yaml` | `src/starborn_legacy/version.py` |
| 2 | SQLite SAA | `.adk/release-state.db` **before** first RW |
| 3 | RW wiring | mode C |
| 4 | Kanban skeleton | Fresh E01–E08 v4 catalog |
| **5** | **KMA** | **Guided** — anchor to TSP; apply M01–M08 in order |
| 5b | Structural score | `score_kma_structure.py` — target **≥ 0.85** |
| 6 | Sign-off | UXR-017 + structural score |
| 7 | First domain RW | Install completion task (e.g. E02:S02:T01) |

### Guided KMA rules (until kit ships `kma_mode: guided`)

- [ ] Load TSP pack paths from [KMA-METHODS.md](kanban-reference/KMA-METHODS.md)
- [ ] Legacy ingest: `docs-pre-ai-dev-kit/project-management/kanban/`
- [ ] **No** blind-only KMA pass
- [ ] **0** ad-hoc `scripts/*kma*.py` (post-KMA builder/scorer only)
- [ ] Lazy task fan-out (M06) — do **not** create 377 `T*.md` files
- [ ] Simulated reference: [migration-proposal-guided.md](attempt-11/feedback-package/migration-proposal-guided.md)

---

## 5. Orchestrator invocation (when running full Phase B)

```bash
python packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py \
  --project-root /path/to/starborn-legacy \
  --vendor-root /path/to/vendor/ai-dev-kit \
  --non-interactive \
  --adoption-path arm-b \
  --init-sqlite \
  --catalog v4 \
  --run-install-rc \
  --install-rc-strict
```

**Attempt 11 delta:** After orchestrator KMA step, run guided reconciliation per TSP (operator/agent until kit supports `kanban_migration.mode: guided`).

---

## 6. Pass criteria (Phase B gates)

| Check | Attempt 10 | Attempt 11 target |
|-------|------------|-------------------|
| Install RC strict (`arm-b`) | PASS | **PASS** (if full install run) |
| `validate_installation.py` | PASS | **PASS** |
| Blind KMA | PASS | **N/A** — use **guided** |
| Ad-hoc KMA scripts | 0 | **0** |
| UXR-017 story collisions | Fixed manually | **0** (M02 auto `story-NN-legacy-*`) |
| Structural score vs TSP | Not run | **≥ 0.85** weighted |
| TSP self-test | — | **≥ 0.95** |
| SQLite before RW | PASS | **PASS** |
| `package_status` | `final` | `final` after adopter sign-off |

```bash
python3 tools/kanban/score_kma_structure.py
python3 packages/frameworks/workflow-mgt/scripts/validation/validate_install_rc.py \
  --project-root . --profile arm-b --strict
find . -name '*kma*' -path '*/scripts/*' | wc -l   # expect 0
```

---

## 7. Evidence & intake (#85)

After Phase B sign-off on **new** `dev`:

- [ ] `git push -u origin dev`
- [ ] Update [feedback-payload.json](attempt-11/feedback-package/feedback-payload.json):
  - `source.head_sha` → post-install commit
  - `branching.execution_head_sha` → same
  - `install_run_id` → execution run id
  - `package_status` → `final` (after adopter sign-off)
- [ ] Refresh [SUBMISSION.md](attempt-11/feedback-package/SUBMISSION.md) outcome table
- [ ] Comment on [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) with HEAD SHA + score + RC summary
- [ ] Optional: attach `install-rc-report-final.json`, `signoff-report.json` to feedback package mirror on ADK

---

## 8. Maintainer mirror (ADK)

After adopter push, refresh ADK mirrors if needed:

| Surface | Path |
|---------|------|
| Feedback package | [attempt-11/feedback-package/](attempt-11/feedback-package/) |
| Kanban reference | [kanban-reference/](kanban-reference/) |
| Thin pointer | [docs/adk-feedback/attempt-11/README.md](../docs/adk-feedback/attempt-11/README.md) |
| Triage addendum | [starborn-legacy-install-triage-matrix.md](../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) |

**Kit routing (post-triage):** Primary FB [FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](attempt-11/feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) — `kma_mode: guided`, `target_est_tree`, structural scorer integration.

---

## 9. Carry-forward (unchanged)

| ID | Role |
|----|------|
| [FB-ADK-install-paths-industry-patterns](attempt-09/feedback-package/FB-ADK-install-paths-industry-patterns.md) | PRIMARY install path |
| [FB-ADK-KMA-KANBAN-MIGRATION](attempt-10/feedback-package/FB-ADK-KMA-KANBAN-MIGRATION.md) | Blind KMA gaps superseded by guided spec |
