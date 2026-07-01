# FB-ADK — Issue #3 E02 workflow story collapse (attempt 12)

**Kit pin:** `v0.4.1237`  
**Adopter:** starborn_legacy · attempt 12 · guided KMA  
**Session:** `20260630-attempt-12-kma`  
**Severity:** **major** (TSP / sign-off gap — operator amendment required)  
**Cross-ref:** INSTALL-ISSUES-REPORT **K-01**

---

## 1. Problem statement

[GitHub issue #3](https://github.com/RMS-Ltd/starborn-legacy/issues/3) (pass 3 overlay, v2026-06-25) — the operator sign-off TSP — lists **E02 as 1 story · 1 task**:

```text
## E02 — Workflow Management (1S · 1T)
### E2:S01 – Release Workflow Rw [E02:S01]
- E02:S01:T06 — Create version renumbering strategy document
```

The adopter repo ships **13 encapsulated workflows** in [`workflows/workflow-registry.yaml`](../../../workflows/workflow-registry.yaml) (RW, UKW, CMW, PIR, INTAKE, MIGRATION, REFACTOR, TESTING, PVW, FHM, IPW, IDW, MWF). Multiple in-repo artefacts already anchor finite workflow work to **E02 story slots beyond S01**:

| Token | Evidence |
| ----- | -------- |
| `E02:S03` MWF | `workflows/meta-workflow/README.md` |
| `E02:S13` registry / flat YAML | `workflows/MIGRATION_GUIDE.md`, workflow README deprecation notes |
| `E02:S16` perpetual | `docs/kanban/kboard.md`, `.cursorrules` Step 9.7, FR-088 |

**Gap:** Sign-off TSP does not provide **one E02 story per registered workflow**. An operator adopting issue #3 literally would have no kanban home for UKW, CMW, IPW, IDW, PIR, etc. except misrouting to E01 perpetual lanes or leaving workflow dev untracked.

---

## 2. What the adopter did (workaround)

Operator amended the local TSP after issue #3 adoption:

| Artifact | Role |
| -------- | ---- |
| [`docs/kanban/reference/E02-WORKFLOW-STORY-MAP.md`](../../../docs/kanban/reference/E02-WORKFLOW-STORY-MAP.md) | Canonical story index (16 stories: S01–S14 workflows + S15 bootstrap + S16 perpetual) |
| [`docs/kanban/reference/TARGET-EST-TREE.md`](../../../docs/kanban/reference/TARGET-EST-TREE.md) § E02 | TSP body updated (16S · 1T) |
| [`docs/kanban/epics/epic-02/epic-02.md`](../../../docs/kanban/epics/epic-02/epic-02.md) | Story checklist expanded |

**Amendment date:** 2026-06-30  
**Task count unchanged:** still **342** unique `E:S:T` rows (E02 story shells are L1 lazy fan-out; only `E02:S01:T06` is a live task token).

### v4 template vs adopter map conflict

| v4 greenfield CATL | Issue #3 pass 3 | Adopter amendment |
| ------------------ | --------------- | ----------------- |
| E02:S01 Workflow Definitions & Patterns | E02:S01 Release Workflow only | S01 = RW |
| E02:S02 Repository Bootstrap | *(retired bootstrap milestone)* | S02 = UKW; bootstrap → **S15** |

Core epic templates still cite **E02:S02** as bootstrap gate (v4 CATL). Amendment moves bootstrap to **S15** — dependency lines need rewrite at KMA Step 4 synthesise.

---

## 3. How this surfaced in attempt 12

1. Agent loaded issue #3 as canonical TSP during guided KMA Step 2.
2. Operator review: E02 band obviously incomplete vs `workflow-registry.yaml` and `kboard.md` Ongoing section.
3. Operator requested: *"We need E2 stories for each of our workflows, not just the RW."*
4. No kit tool flagged the mismatch before operator review.

**Related prior gap (attempt 11):** 377-task TSP also had polluted E02:S01/S02 with legacy **game navigation** tokens (`E02:S01:T01` coordinate conversion, etc.) — pass 3 pruned those to E30 but **did not** restore workflow story coverage.

---

## 4. Impact

| Area | Impact |
| ---- | ------ |
| **RW / UKW / MWF triggers** | Example tokens in READMEs (`MWF E02:S03:T09`, `IDW E02:S16:T15`) lack matching story shells in issue #3 |
| **KMA synthesise** | Step 4 cannot create per-workflow story folders from issue #3 body alone |
| **Structural score** | Pre-synth score (51.59%) does not measure E02 story completeness |
| **Operator sign-off** | Issue #3 checkbox "reviewed entire tree" is **misleading** for workflow management without amendment appendix |
| **Bootstrap gate** | S02 slot ambiguity (UKW vs Repository Bootstrap) blocks clean v4 CATL alignment |

---

## 5. Requested kit / programme fixes

### 5.1 TSP / sign-off pack

- [ ] **Issue template or pass-N overlay** must include **E02 workflow story map** derived from `workflow-registry.yaml` (or CATL workflow story table), not RW-only collapse.
- [ ] Publish **amendment hook** in TSP header when operator extends issue body locally (`amended: E02-WORKFLOW-STORY-MAP.md`).
- [ ] Pass-3 changelog should note E02 game-token purge **and** expected workflow story floor (≥ registry count).

### 5.2 Guided KMA

- [ ] **Preflight:** compare `workflow-registry.yaml` keys to E02 story headings in `TARGET-EST-TREE.md`; warn if `registry_count > e02_story_count`.
- [ ] Ship reference [`E02-WORKFLOW-STORY-MAP.md`](../../../docs/kanban/reference/E02-WORKFLOW-STORY-MAP.md) pattern in TSP pack template.
- [ ] `migration-proposal.md` template: checklist row for workflow story coverage.

### 5.3 v4 greenfield scaffold

- [ ] Document that **S01/S02 abstract shells** are install-time placeholders; adopters with full workflow registry need **S01–S14 + S16** fan-out (bootstrap may occupy high slot e.g. S15).
- [ ] Optional: greenfield `--catalog v4 --workflow-stories` expands epic-02 checklist from registry at install.

### 5.4 Scoring

- [ ] Rubric dimension: **workflow story parity** (% registry workflows with matching E02:Sxx shell in TSP).

---

## 6. Adopter reference (post-amendment)

**Story map:** [`docs/kanban/reference/E02-WORKFLOW-STORY-MAP.md`](../../../docs/kanban/reference/E02-WORKFLOW-STORY-MAP.md)

| Story | Workflow |
| ----- | -------- |
| S01 | Release (RW) |
| S02 | Update Kanban (UKW) |
| S03 | Meta (MWF) |
| S04 | Changelog (CMW) |
| S05 | Post-Implementation Review (PIR) |
| S06 | Package Version (PVW) |
| S07 | Implementation Planning (IPW) |
| S08 | Implementation Delivery (IDW) |
| S09 | Intake |
| S10 | Migration |
| S11 | Refactor |
| S12 | Testing |
| S13 | Registry & encapsulation |
| S14 | Framework Health (FHM) |
| S15 | Repository bootstrap (gate) |
| S16 | Perpetual ongoing ops |

---

## 7. Acceptance criteria (kit)

- [ ] Fresh guided KMA on a workflow-heavy adopter **fails preflight or emits major warning** when TSP E02 stories < registry workflow count.
- [ ] Operator sign-off artefact (issue body or TSP pack) includes **≥1 E02 story per registry workflow** without manual archaeology.
- [ ] Documented resolution for **bootstrap vs UKW** slot (CATL S02 vs workflow S02).

---

## 8. Evidence paths

| Artifact | Location |
| -------- | -------- |
| Issue #3 body (RW-only E02) | https://github.com/RMS-Ltd/starborn-legacy/issues/3 |
| Workflow registry | `workflows/workflow-registry.yaml` |
| Operator amendment | `docs/kanban/reference/E02-WORKFLOW-STORY-MAP.md` |
| KMA programme report | `docs/kanban/KMA-ATTEMPT-12.md` §5 |
| This FB | `logs/attempt-12/feedback-package/FB-ADK-issue3-e02-workflow-story-collapse.md` |
