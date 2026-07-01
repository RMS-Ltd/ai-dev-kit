---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# {PROJECT} — E02 workflow story map (TSP companion)

**Role:** Maps each registered workflow to an **E02 story shell** for guided KMA and operator sign-off.

**Amendment hook (FR-143-F1):** When this file extends an issue-body TSP locally, set in `TARGET-EST-TREE.md` frontmatter or header:

```text
amended: E02-WORKFLOW-STORY-MAP.md
```

**Evidence:** [FR-143](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-143-tsp-workflow-story-parity-guided-kma-preflight.md) · SBL attempt 12 K-01

---

## Bootstrap vs UKW slot (FR-143-F5)

| v4 greenfield CATL | Workflow-heavy adopter | Resolution |
| ---------------- | ---------------------- | ---------- |
| E02:S01 Workflow Definitions & Patterns | E02:S01 Release Workflow (RW) | S01 = RW |
| E02:S02 Repository Bootstrap | E02:S02 Update Kanban (UKW) | Move bootstrap gate to **S15**; rewrite CATL dependency lines at KMA synthesise |

Greenfield install ships abstract S01/S02 placeholders. Adopters with a full `workflow-registry.yaml` should fan out **S01–S14** (one story per registry workflow) plus **S15** (bootstrap) and **S16** (perpetual ongoing ops).

---

## Story map

Derive rows from [`workflow-registry.yaml`](../../workflow-mgt/workflows/workflow-registry.yaml) — **≥1 E02 story per registry workflow**.

| Story | Workflow |
| ----- | -------- |
| S01 | Release Workflow (RW) |
| S02 | Update Kanban (UKW) |
| S03 | Meta-Workflow (MWF) |
| S04 | Changelog Management (CMW) |
| S05 | Post-Implementation Review (PIR) |
| S06 | Package Version (PVW) |
| S07 | Implementation Planning (IPW) |
| S08 | Implementation Delivery (IDW) |
| S09 | Intake (INTAKE) |
| S10 | Migration (MIGRATION) |
| S11 | Refactor (REFACTOR) |
| S12 | Testing (TESTING) |
| S13 | Registry & encapsulation (flat YAML deprecation lane) |
| S14 | Framework Health Monitoring (FHM) |
| S15 | Repository bootstrap (v4 CATL gate — not a registry workflow) |
| S16 | Perpetual ongoing workflow operations |

**Lazy fan-out:** Story shells are L1 placeholders; dedicated `T*.md` files only for in-flight work (see KMA depth policy).

---

## Operator checklist

- [ ] `TARGET-EST-TREE.md` E02 band lists ≥ registry workflow count story headings
- [ ] This map present in TSP pack or linked via `amended:` hook
- [ ] Bootstrap gate documented at S15 when UKW occupies S02
- [ ] Guided KMA preflight passes: `validate_kma_workflow_story_parity.py --strict`
