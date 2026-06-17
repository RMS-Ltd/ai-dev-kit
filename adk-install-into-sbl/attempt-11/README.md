# Starborn Legacy — ADK install attempt 11 (maintainer index)

**Session:** guided KMA / Target Structure Pack (TSP)  
**ADK pin:** `v0.4.1171`  
**Arm:** **B** follow-on — guided KMA (not full install re-run)  
**GitHub:** [ai-dev-kit #85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

**Context:** SBL reverts `dev` to `pre-adk-install`; attempt 11 artifacts are **mirrored on ADK** under this tree (not on SBL `dev`).

---

## Outcome (Track A — local, pre-revert)

| Deliverable | Status |
|-------------|--------|
| Target E/S/T tree (TSP) | [kanban-reference/TARGET-EST-TREE.md](../kanban-reference/TARGET-EST-TREE.md) |
| KMA methods | [kanban-reference/KMA-METHODS.md](../kanban-reference/KMA-METHODS.md) |
| Scoring rubric | [kanban-reference/SCORING-RUBRIC.yaml](../kanban-reference/SCORING-RUBRIC.yaml) |
| Operator reference tree (attempt 09) | [attempt-09/feedback-package/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md](../attempt-09/feedback-package/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md) |
| Three-way structural diff | [feedback-package/THREE-WAY-STRUCTURAL-DIFF.md](feedback-package/THREE-WAY-STRUCTURAL-DIFF.md) |
| Guided migration proposal | [feedback-package/migration-proposal-guided.md](feedback-package/migration-proposal-guided.md) |

**Track B (install execution):** pending — new `dev` from `pre-adk-install` → guided KMA replay.

**Preflight:** [attempt-11-preflight-checklist.md](../attempt-11-preflight-checklist.md)

---

## Maintainer prep status (2026-06-17)

| Item | Status |
|------|--------|
| Issue [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) opened | ✅ |
| ADK feedback package mirror (draft) | ✅ |
| TSP core mirror (`TARGET-EST-TREE`, `KMA-METHODS`, rubric) | ✅ |
| TSP companion files (remap YAML, folder map, aliases, tools) | ⚠️ On local prep `dev` only — carry at Phase B |
| SBL remote `dev` branch | ❌ Not pushed (by design until Phase B) |
| Phase B install execution | ⏳ Pending adopter |

---

## Canonical feedback package (FR-079 mirror)

| Artifact | Path |
| -------- | ---- |
| Cover | [feedback-package/SUBMISSION.md](feedback-package/SUBMISSION.md) |
| Payload | [feedback-package/feedback-payload.json](feedback-package/feedback-payload.json) |
| FB report | [feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md) |
| Migration proposal | [feedback-package/migration-proposal-guided.md](feedback-package/migration-proposal-guided.md) |
| Structural diff | [feedback-package/THREE-WAY-STRUCTURAL-DIFF.md](feedback-package/THREE-WAY-STRUCTURAL-DIFF.md) |
| Execution checklist | [feedback-package/EXECUTION-CHECKLIST.md](feedback-package/EXECUTION-CHECKLIST.md) |

**Thin pointer:** [docs/adk-feedback/attempt-11/README.md](../../docs/adk-feedback/attempt-11/README.md)

---

## References

- [attempt-10 README](../attempt-10/README.md) — Install RC PASS baseline
- [attempt-09 README](../attempt-09/README.md) — operator freeze / Arm B
- [adk-install-into-sbl README](../README.md)
