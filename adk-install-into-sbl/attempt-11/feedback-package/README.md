# Attempt 11 — TSP + guided KMA programme

**Status:** Phase A (programme prep) complete · Phase B (install execution) pending.

## Two tracks

| Track | Description | Branch |
|-------|-------------|--------|
| **A — Prep** | TSP, METHODS, rubric, feedback spec | Old `dev` (`a77fa4b4`) — local only |
| **B — Execution** | Arm B from `pre-adk-install` + guided KMA | **New** `dev` from `pre-adk-install` |

**Do not push prep `dev` for #85 evidence.** See [EXECUTION-CHECKLIST.md](EXECUTION-CHECKLIST.md).

**Intake:** [ai-dev-kit#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

---

## Deliverables

| Phase | Artifact | Path |
|-------|----------|------|
| 1 TSP freeze | Target Structure Pack | [`docs/kanban/reference/`](../../kanban/reference/) |
| 2 Methods | KMA playbook + rubric | [`KMA-METHODS.md`](../../kanban/reference/KMA-METHODS.md) |
| 3 Repo align | Ledgers, scorer | [`REPO-ALIGNMENT.md`](../../kanban/reference/REPO-ALIGNMENT.md) |
| 4 ADK package | Feedback spec | This folder |
| **B Install** | Guided KMA run | [EXECUTION-CHECKLIST.md](EXECUTION-CHECKLIST.md) |
| 5 SBL dev | Active board rows | `kboard.md` (post-install) |

## Key files

| File | Role |
|------|------|
| [EXECUTION-CHECKLIST.md](EXECUTION-CHECKLIST.md) | **Install run** — branch, carry TSP, gates |
| [SUBMISSION.md](SUBMISSION.md) | Programme summary |
| [FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) | Kit feature asks |
| [migration-proposal-guided.md](migration-proposal-guided.md) | Guided simulation |
| [feedback-payload.json](feedback-payload.json) | Intake payload (`draft`) |

## Commands (after TSP on execution branch)

```bash
python3 tools/kanban/build_target_est_tree.py
python3 tools/kanban/score_kma_structure.py
python3 tools/kanban/score_kma_structure.py --candidate-tsp
```

## After phase B

1. Push **new** `dev`.
2. Update `feedback-payload.json` + comment on [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85).
3. Set `package_status: final` after sign-off.
