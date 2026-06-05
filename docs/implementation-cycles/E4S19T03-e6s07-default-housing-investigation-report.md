---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S19:T03 — `E6:S07` default-housing investigation report (FR-087)

**Host task:** [E4:S19:T03](../project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md)  
**Planning contract:** [IPP-E4S19T3-e6s07-default-housing-drift-investigation.md](IPP-E4S19T03-e6s07-default-housing-drift-investigation.md)  
**Upstream FR:** [FR-087](../project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)  
**Report date:** 2026-05-29  
**Waves covered:** Wave 2 (forensic execution) + Wave 3 (disposition recommendation; guardrail **filing** deferred to follow-on tasks)

---

## Executive summary

`E6:S07` began as an **ai-dev-kit CLI tool** delivery story, then absorbed the **ADK implementation analysis and package management** charter via Epic 6 story renumbering (`E6:S06` → `E6:S07`). It subsequently accumulated **workflow, kanban, UKW, RW, and governance** work that belongs under **Epic 2 (workflows)**, **Epic 4 (abstract governance)**, or **Epic 2 Story 016 (perpetual operations)**.

**Codification:** No hard-coded validator or `.cursorrules` routing sends new tasks to `E6:S07`. Placement bias is **permissive default** (“framework bugs → Epic 6 story” in the intake guide) plus **operator habit** on `epic/6-framework-management`.

**Active drift metric:** `drift_ratio = 2/3 ≈ 0.67` (two `out-of-scope` / three active tasks). This exceeds the IPP heuristic threshold (`≥ 0.5`) for **`split/re-house`**.

**Recommendation:** **`split/re-house`** — narrow `S07` to ADK analysis, package management, install/adoption hardening, and related delivery; migrate remaining active mis-housed tasks; schedule retrospective re-housing of completed out-of-scope tasks in priority order; then **`keep-open-narrowed`** with explicit In/Out of Scope on the story doc and guardrails from IPP §2.8.

---

## 1. Charter origin (RF1 / AC1)

### 1.1 Independent primary sources

| Source | Evidence | Charter stated |
| ------ | -------- | -------------- |
| Story 007 (current) | `story-07-adk-implementation-analysis-and-package-management.md:150-203` — Overview, Goal, Success Criteria | Comprehensive ADK implementation analysis across projects; package management investigation; feedback mechanisms; ADK hardening before continued development |
| Changelog genesis (CLI) | `CHANGELOG_v0.6.7.0+1.md:14-27` — Story created for **ai-dev-kit CLI tool**, FR-030, 14-task CLI breakdown | CLI tool implementation (Phases 1–4: foundation, backends, advanced features, PyPI) |
| Renumbering / abstract space | `CHANGELOG_v0.9.1.8+10.md` (cited in E9:S01:T08); story header `story-007…md:19` | Story renumbered from S06→S07 as part of repository story abstract space resolution |

**Synthesis (commentary on primary evidence):** The **current** charter (analysis + package management + hardening) is authoritative in the live story document. The **earliest** release anchor (`v0.6.7.0+1`) documents a **different** charter (CLI tool). The two charters were **merged into one story number** during Epic 6 renumbering, which is the root structural reason `S07` reads as two stories in one container.

### 1.2 Expansion inflection points

| Date (approx.) | Inflection | Primary evidence | Placement rationale recorded? |
| ------------- | ---------- | ---------------- | ----------------------------- |
| 2025-12-22 | Story created as **CLI tool** (`E6:S07`, FR-030) | `CHANGELOG_v0.6.7.0+1.md` | Yes — FR-030 / CLI delivery |
| 2026-01 (E9:S01:T08) | **S06 analysis story → S07**; CLI tool shifted to S08 per changelog note | `CHANGELOG_v0.9.1.8+10.md`; `story-007…md:19` | Yes — abstract space / renumbering policy |
| 2026-03 | Workflow governance cluster (`T18`, `T106`, `T107`) filed under S07 | Task docs; `CHANGELOG_v0.5.1.46+2.md` (T106 next release note) | Weak — “framework” / tooling adjacency |
| 2026-03-31 | **BR-059** → `E6:S07:T109` (UKW MoSCOW coverage) | `CHANGELOG_v0.6.7.109+1.md`; `CHANGELOG_v0.5.1.74+3.md` | Partial — BR on epic/6 branch |
| 2026-04 | UKW / board / stamp cluster (`T108`–`T115`, `T114`) | `CHANGELOG_v0.6.7.108+1.md` through `CHANGELOG_v0.6.7.115+1.md` | Often cites E2:S16:T03 “coordinates” but task **housing** stayed S07 |
| 2026-04-20 | **FR-087** filed; governance investigation → E4:S19:T03 | `FR-087-e6s07-default-housing-root-cause-and-closure-decision.md` | Yes — explicit meta-governance |
| 2026-04-26+ | Re-housing precedents: `T116`→`E2:S16:T06`, `T117`→`E2:S15:T04` / `E4:S19:T05` | `CHANGELOG_v0.2.16.6+1.md`; `CHANGELOG_v0.4.19.5+1.md` | Yes — explicit re-housing protocol |

---

## 2. Current usage shape (RF1 / §2.3.4)

**Task document count:** **22** files under `story-07-adk-implementation-analysis-and-package-management/` (IPP baseline recorded 23; **T116** doc removed after re-housing to `E2:S16:T06`; **T117** removed after re-housing).

| Metric | Value |
| ------ | ----- |
| COMPLETE | 17 |
| SUPERSEDED | 2 (`T106`, `T108`) |
| TODO (active) | 3 (`T18`, `T107`, `T109`) |
| FBU-linked (sample) | Majority of T10x–T115 tasks reference FR/BR/UXR upstream |
| Perpetual / CMW tasks historically in S07 | `T11`, `T13`, `T14`, `T16` (CMW lane; perpetual ownership now canonical under E6:S06 / E2:S16 per later governance) |

**Shape note:** Task IDs **jump** from T18 to T104+, indicating **epic/story numbering used as intake convenience** rather than sequential story scope — a catch-all signal.

---

## 3. Codification inventory (RF2 / AC2)

Inspection used IPP §2.4 patterns on 2026-05-29.

| Category | Instance cited | Classification | Notes |
| -------- | -------------- | -------------- | ----- |
| Workflow validators | `test_validate_rw_task_intent.py:95-133` — fixture layout under `story-07-adk-…` | **Operator habit / test fixture only** | Uses S07 paths as **test data**, not production routing |
| Workflow validators | `test_validate_version_bump.py` — story-007 perpetual fixtures | Same | Test scaffolding |
| Intake/IPW YAML | `rg` over `packages/frameworks/workflow-mgt/workflows/` — **no matches** for S07/E6:S07 | **No codification** | — |
| `.cursorrules` | `rg` — **no matches** for S07 / default housing | **No codification** | Positive routing table absent |
| Intake skill | `.cursor/skills/intake-process/SKILL.md:14-33` — “delivery story”, “framework → e.g. E6” | **Permissive default** | Does not name S07; Epic 6 is broad |
| Kanban templates | `rg` over `packages/frameworks/kanban/templates/` — **no S07 matches** | **No codification** | — |
| Kanban governance policy | `kanban-governance-policy.md:545` — example `E20:S07:T10` only | **No codification** | Numeric example, not routing |
| Intake guide | `FR_BR_INTAKE_GUIDE.md:27` — “framework bugs → Epic 6 story” | **Permissive default** | Does not distinguish S07 vs other E6 stories |
| Intake agent guide | `FR_BR_INTAKE_AGENT_GUIDE.md` — **no S07 matches** | **No codification** | — |
| Story 007 charter | `story-07-adk-implementation-analysis-and-package-management.md` | **Permissive default** | Broad Epic 6 home; checklist still lists heterogeneous work |
| Prior IPPs | `IPP-E2S16T1`, `IPP-E4S19T3`, `IPW-E6S7T112`, etc. | **Operator habit** | Documents defer routing to FR-087 / T03; does not hard-code S07 |

**Conclusion:** Drift is driven primarily by **permissive Epic 6 placement** and **habit on `epic/6-framework-management`**, not validator hard-coding. Guardrails should target **intake language**, **story-level In/Out of Scope**, and optional **placement validator** (IPP §2.8).

---

## 4. Semantic-fit triage (RF3 / AC3)

Charter reference: Story 007 Goal at `story-07-adk-implementation-analysis-and-package-management.md:190-203`.

| Task | Status | Bucket | Rationale (one line) | Better home (if out/borderline) |
| ---- | ------ | ------ | -------------------- | -------------------------------- |
| T04 | COMPLETE | in-scope | Package management implementation plan | — |
| T06 | COMPLETE | in-scope | Cross-project meta-analysis | — |
| T07 | COMPLETE | in-scope | Framework hardening from analysis | — |
| T09 | COMPLETE | in-scope | Package management prioritization | — |
| T11 | COMPLETE | borderline | CMW workflow — ADK-derived but perpetual workflow ops | E6:S06 / E2:S16 |
| T13 | COMPLETE | borderline | CMW perpetual pattern | E6:S06:T102 / E2:S16 |
| T14 | COMPLETE | borderline | CMW package docs | E6 workflow package story |
| T15 | COMPLETE | borderline | IDE performance awareness for adopters | E6 or docs; acceptable ADK adoption |
| T16 | COMPLETE | out-of-scope | CMW ordering hardening — workflow maintenance | E2:S16 / E6:S06 |
| T18 | TODO | out-of-scope | Tool-agnostic RW step tracking — workflow governance | E2:S01 or E2:S16 |
| T104 | COMPLETE | borderline | Release automation audit — ADK release tooling | E2:S01 |
| T105 | COMPLETE | borderline | Release runbook | E2:S01 |
| T106 | SUPERSEDED | out-of-scope | Windsurf migration — workflow IDE portability | E2 (superseded) |
| T107 | TODO | borderline | IDE command whitelist — agent tooling friction | E6 delivery or E2 |
| T108 | SUPERSEDED | out-of-scope | UKW FR/BR/UXR temporal extension | E2:S16:T07 (successor) |
| T109 | TODO | out-of-scope | UKW MoSCOW full story coverage (BR-059) | E2:S16 |
| T110 | COMPLETE | out-of-scope | UKW fbuboard scope (FR-076) | E2:S16 |
| T111 | COMPLETE | in-scope | Install event-contract logging | — |
| T112 | COMPLETE | in-scope | Install feedback submission governance | — |
| T113 | COMPLETE | out-of-scope | RW Step 12.5 GitHub release parser | E2:S01 |
| T114 | COMPLETE | out-of-scope | Board filename migration (UXR-008) | E4:S19 (T06 absorbed follow-on) |
| T115 | COMPLETE | out-of-scope | Stamp forensic guardrails — FR-092 program | E2:S15:T07 / FR-092 |

### 4.1 Drift quantification

Per IPP §2.5 (`active` = non-COMPLETE, non-SUPERSEDED):

| Active task | Bucket |
| ----------- | ------ |
| T18 | out-of-scope |
| T109 | out-of-scope |
| T107 | borderline (excluded from ratio) |

**`drift_ratio = 2 / 3 ≈ 0.67`** → strong signal for **`split/re-house`** (IPP §2.5).

**Historical drift (all 22 docs):** 8/22 ≈ 0.36 out-of-scope if counting COMPLETE out-of-scope tasks — shows **accumulated** mis-housing even when active queue is small.

---

## 5. Disposition recommendation (RF4 / AC4)

### 5.1 Selected option: **`split/re-house`**, then **`keep-open-narrowed`**

| Criterion (IPP §2.6) | Evidence |
| -------------------- | -------- |
| `drift_ratio ≥ 0.5` | 0.67 on active tasks (§4.1) |
| Codification | Permissive Epic 6 default, not hard-coded (§3) — supports split over blunt `close` |
| Coherent out-of-scope clusters | UKW/RW/kanban (E2), FBU naming (E4), CMW perpetual (E6:S06/E2:S16) |

**Not `close`:** Story Goal still has open ADK/package/install work (`T107` borderline, install follow-through). **`T112`** COMPLETE but charter items in Goal still show ⏳ for package/feedback in header success criteria.

**Not `keep-open-narrowed` alone:** Without migrating active out-of-scope tasks, recurrence risk remains high (§2.6 risk profile).

### 5.2 Transition plan (Wave 4 outline)

1. **Freeze** new task creation under `E6:S07` except items matching restated In Scope (below).
2. **Migrate active tasks (immediate):**
   - `E6:S07:T109` → `E2:S16:T{new}` (BR-059 UKW MoSCOW) — apply IPP §2.7.
   - `E6:S07:T18` → `E2:S01:T{new}` or `E2:S16` (workflow step tracking).
   - `E6:S07:T107` → resolve: mark COMPLETE if work done (story checklist already ✅) or move to E2/E6 tooling story.
3. **Retrospective migration (batched):** Completed out-of-scope tasks `T110`, `T113`, `T114`, `T115`, `T16` — lower urgency; use §2.7 with `Historical Anchor:` only where traceability requires.
4. **Restate charter** on `story-07-adk-implementation-analysis-and-package-management.md`:
   - **In scope:** ADK cross-project analysis, package management design/implementation, install telemetry/feedback, framework hardening derived from analysis.
   - **Out of scope:** UKW/CMW/RW perpetual ops, kboard governance meta-work, IPW publication contract, abstract FBU policy (→ E2:S16, E2:S15, E4:S19).
5. **Final state:** `keep-open-narrowed` with guardrails (§6).

### 5.3 Compatibility

- Preserve `T101+` and historical version tags (RNF2).
- Re-housing protocol validated by `BR-069` → `E2:S15:T04`, `FR-085` → `E2:S16:T06`, `T117` → `E4:S19:T05` (AC6).

---

## 6. Guardrail follow-on tasks (RF5 / AC5)

Candidates from IPP §2.8 — **proposed filing** (not created in this wave):

| Proposed task | Owner story | Surface | Disposition link |
| ------------- | ----------- | ------- | ---------------- |
| Placement validator: reject new `E6:S07:T*` without override | E2:S16 or E6 | `validate_*.py` | split/re-house |
| `.cursorrules` positive routing table (anti-S07 default) | E2 | `.cursorrules` | keep-open-narrowed |
| Intake skill + guide: name S07 out-of-scope examples | E4:S19 or E2:S16 | `intake-process/SKILL.md`, `FR_BR_INTAKE_GUIDE.md` | keep-open-narrowed |
| Task template: `Default Housing Override Rationale:` | E4:S19 | kanban templates | keep-open-narrowed |
| Story 007 In/Out of Scope enumeration | E6:S07 | story doc | keep-open-narrowed |
| `Historical Anchor:` policy in kanban governance | E4:S19 | `kanban-governance-policy.md` | all options |

---

## 7. Re-housing protocol (RF6 / AC6)

Protocol codified in IPP §2.7. **Executed precedents** (cite only):

- `BR-069`: `E6:S07:T117` → `E2:S15:T04` (`CHANGELOG_v0.4.19.5+1.md`)
- `FR-085`: `E6:S07:T116` → `E2:S16:T06` (`CHANGELOG_v0.2.16.6+1.md`)

No additional re-housing executed in this wave; Wave 4 owns migrations in §5.2.

---

## 8. Wave 4 execution log (2026-05-29)

| Step | Action | Status |
| ---- | ------ | ------ |
| 4.1 | Re-house `E6:S07:T109` → `E2:S16:T13` (BR-059) | ✅ Done — superseded source doc; BR-059 + Story 016 + fbuboard/kboard rewired |
| 4.1 | Re-house `E6:S07:T18` → `E2:S01:T23` (workflow step tracking) | ✅ Done — superseded source doc; Story 001 checklist + kboard |
| 4.2 | Restate `S07` In/Out of Scope + intake freeze note | ✅ Done — `story-07-adk-implementation-analysis-and-package-management.md` |
| 4.2 | Correct T107 story checklist (was mislabeled COMPLETE / wrong scope title) | ✅ Done — TODO, IDE whitelist |
| 4.3 | Retrospective migration of completed out-of-scope tasks | ⏸ Deferred (T110, T113, T114, T115 batch — lower urgency) |
| Guardrail filing (§6) | Intake guide / `.cursorrules` / validator | ⏸ Deferred — follow-on tasks not yet filed |

---

## 9. Traceability

| Artifact | Update |
| -------- | ------ |
| E4:S19:T03 task doc | Link this report; AC1–AC5 checklist |
| FR-087 | Link report; F5 partial until guardrails implemented |
| IPP-E4S19T3 | Wave 4 log in §8 |

---

## 9. References

- [IPP-E4S19T3](IPP-E4S19T03-e6s07-default-housing-drift-investigation.md)
- [Story 007](../project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management.md)
- [FR-087](../project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)
- [IPP-E2S16T1](IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md) (delegated perpetual scope)
