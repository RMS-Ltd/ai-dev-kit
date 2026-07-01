---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T44 — Planning: TSP workflow story parity (FR-143)

**Host Task:** [T44](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T44-tsp-workflow-story-parity-fr143.md) **(E06:S09:T44)**  
**Planning for:** [FR-143](../kanban/fbu/FR-143-tsp-workflow-story-parity-guided-kma-preflight.md)  
**Status:** Published (MWF Leg 1 — IPW)

---

## 1. Requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | TSP pack includes E02 workflow story map derived from registry | FR-143-F1 |
| RF2 | Guided KMA preflight: registry count vs E02 story headings | FR-143-F2 |
| RF3 | Reference `E02-WORKFLOW-STORY-MAP.md` template in framework TSP | FR-143-F3 |
| RF4 | Rubric dimension: workflow story parity | FR-143-F4 |
| RF5 | Document bootstrap vs UKW slot (S02 vs S15) | FR-143-F5 |
| RF6 | Advisory in blind KMA; blocking in guided mode | FR-143-NF1 |
| RF7 | Greenfield mirror sync when touching `packages/frameworks/` | FR-143-NF2 |

---

## 2. Specification

### 2.1 Core module

`packages/frameworks/kanban/scripts/kma_workflow_story_parity.py`:

- Load `workflow-registry.yaml` → registry workflow keys + abbreviations.
- Parse `TARGET-EST-TREE.md` → unique E02 story numbers (headings + tokens).
- Optional `E02-WORKFLOW-STORY-MAP.md` → story↔workflow mapping for rubric.
- Emit structured report: `registry_count`, `e02_story_count`, `parity_score`, `severity`, `messages`.

### 2.2 Preflight CLI

`packages/frameworks/kanban/scripts/validation/validate_kma_workflow_story_parity.py`:

- `--tsp`, `--registry`, optional `--story-map`, `--mode guided|blind|score`.
- `--strict` → exit 1 when `registry_count > e02_story_count` in guided/score modes.
- Integrate into KMA Step 1 guided fail-fast (documented in execution guide).

### 2.3 Templates & docs

- `reference/templates/E02-WORKFLOW-STORY-MAP.template.md` (F3, F5).
- Update `reference/README.md` companion table + amendment hook (F1 header field).
- `MIGRATION_PROPOSAL_TEMPLATE.md` checklist row for workflow story coverage.

### 2.4 Scoring

- Add `workflow_story_parity` dimension to `SCORING-RUBRIC.template.yaml` and `score_kma_structure.py`.
- Rebalance weights (sum 1.0); update minimal fixture rubric + tests.

---

## 3. Test design

| Test | Intent |
| ---- | ------ |
| `test_kma_workflow_story_parity.py` | K-01 collapsed TSP (1 E02 story) vs 13-workflow registry → fail/warn |
| Expanded TSP + story map → pass |
| `test_score_kma_structure.py` | 7 dimensions present; weights sum 1.0 |
| CLI `--strict` exit codes |

Fixture: `tests/fixtures/kma-workflow-story-parity-k01/` (attempt 12 K-01 scenario).

---

## 4. Implementation plan

1. Transition T44 `TODO → IN PROGRESS`.
2. Add `kma_workflow_story_parity.py` + validation CLI.
3. Add E02-WORKFLOW-STORY-MAP template; update reference README + migration proposal template.
4. Extend scorer rubric + dimension; update KMA execution guide Step 1.
5. Add pytest fixture + tests; run `pytest tests/kanban/`.
6. `sync_greenfield_install.py` for framework paths.
7. Reconcile task/FR/kanban status → `COMPLETE`; chain `RW E06:S09:T44 --art`.

---

## 5. Documentation deliverables

| Path | Action |
| ---- | ------ |
| `packages/frameworks/kanban/scripts/kma_workflow_story_parity.py` | ADD |
| `packages/frameworks/kanban/scripts/validation/validate_kma_workflow_story_parity.py` | ADD |
| `packages/frameworks/kanban/reference/templates/E02-WORKFLOW-STORY-MAP.template.md` | ADD |
| `packages/frameworks/kanban/reference/README.md` | UPDATE |
| `packages/frameworks/kanban/reference/templates/SCORING-RUBRIC.template.yaml` | UPDATE |
| `packages/frameworks/kanban/scripts/score_kma_structure.py` | UPDATE |
| `packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md` | UPDATE |
| `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md` | UPDATE |
| `tests/fixtures/kma-workflow-story-parity-k01/` | ADD |
| `tests/kanban/test_kma_workflow_story_parity.py` | ADD |

---

## 6. Verification

- [x] `pytest tests/kanban/test_kma_workflow_story_parity.py tests/kanban/test_score_kma_structure.py`
- [x] Guided preflight fails on K-01 collapsed fixture with `--strict`
- [x] Expanded story map passes preflight
- [x] RW anchors E06:S09:T44
- [x] Operator verification closure 2026-07-01 (`UKW -c`)

---

## 7. Status reconciliation

Final step: set T44 + FR-143 to actual state after implementation and RW.
