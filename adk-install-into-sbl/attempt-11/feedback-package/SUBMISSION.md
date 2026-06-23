# Starborn Legacy — ADK attempt 11 (guided KMA / TSP programme)

**Session:** `20260617-attempt-11`  
**SBL repo:** [RMS-Ltd/starborn_legacy](https://github.com/RMS-Ltd/starborn_legacy)  
**Intake issue:** [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) (attempt 11 — [#57](https://github.com/RMS-Ltd/ai-dev-kit/issues/57) was attempt 10, closed)  
**ADK pin:** `v0.4.1171` (unchanged)  
**Package status:** **`draft`**

---

## Programme prep vs install execution

| Track | Branch | HEAD (local) | Status |
|-------|--------|--------------|--------|
| **A — Programme prep** | Old `dev` lineage | `a77fa4b4` | ✅ TSP + METHODS + feedback spec |
| **B — Install execution** | **New** `dev` from `pre-adk-install` | *(pending)* | ⏳ Arm B + guided KMA |

**Prep commits are not attempt 11 execution evidence.** Do not push prep-only `dev` for #85. Evidence URLs and `feedback-payload.json` `head_sha` are set **after** phase B.

**Execution guide:** [EXECUTION-CHECKLIST.md](EXECUTION-CHECKLIST.md)

---

## Phase A deliverables (complete)

| Phase | Deliverable | Status |
|-------|-------------|--------|
| 1 | Target Structure Pack (`docs/kanban/reference/`) | ✅ |
| 2 | `KMA-METHODS.md` + `SCORING-RUBRIC.yaml` | ✅ |
| 3 | Repo minimal align + scorer | ✅ |
| 4 | ADK feedback package (this folder) | ✅ draft |

---

## Phase B deliverables (pending)

| Gate | Status |
|------|--------|
| Branch from `pre-adk-install` | ⏳ |
| Carry TSP pack | ⏳ |
| Greenfield install + **guided** KMA | ⏳ |
| Install RC strict | ⏳ |
| Sign-off contract | ⏳ |
| Structural score ≥ 0.85 | ⏳ |
| Push new `dev` + update #85 | ⏳ |
| `package_status: final` | ⏳ |

---

## Primary feedback item

| ID | Evidence |
|----|----------|
| **Guided KMA + TSP** | [FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) |
| Guided proposal (sim.) | [migration-proposal-guided.md](migration-proposal-guided.md) |
| Three-way diff | [THREE-WAY-STRUCTURAL-DIFF.md](THREE-WAY-STRUCTURAL-DIFF.md) |

**Structured index:** [feedback-payload.json](feedback-payload.json)

---

## Scoring summary (prep baseline on old `dev`)

| Candidate | Weighted | Pass ≥85%? |
|-----------|----------:|:----------:|
| `docs/kanban/epics/` vs TSP | 73.2% | No |
| TSP self-test | 98.3% | Yes |
| Attempt 10 blind (est.) | ~62% | No |

Re-run on **new** `dev` after guided KMA: `python3 tools/kanban/score_kma_structure.py`

---

## Carry-forward

| ID | Evidence |
|----|----------|
| Blind KMA gaps | [../attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md](../attempt-10/FB-ADK-KMA-KANBAN-MIGRATION.md) |
| Install paths PRIMARY | [../attempt-09/FB-ADK-install-paths-industry-patterns.md](../attempt-09/FB-ADK-install-paths-industry-patterns.md) |

---

## Submission checklist

| Step | Status |
|------|--------|
| TSP + METHODS (prep) | ✅ |
| FB documents | ✅ |
| Issue #85 opened | ✅ |
| Install execution (phase B) | ⏳ |
| Payload `package_status: final` | ⏳ after phase B |
