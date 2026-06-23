---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S04:T02 — Planning: Supersede UI/UX task; merge scope into T04 (IPW)

**Host Task:** [`T02-adapt-uiux-for-different-cultures-examples-imagery.md`](../kanban/epics/epic-21/story-04-cultural-adaptation/T02-adapt-uiux-for-different-cultures-examples-imagery.md) **(E21:S04:T02)**  
**Planning for:** [FR-006 Phase 2](../kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [E21:S04](../kanban/epics/epic-21/story-04-cultural-adaptation.md) · [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md)  
**Status:** Complete — released `v0.21.4.2+1` (`RW E21:S04:T02 --art`)  
**Branch:** `dev`

**Scope:** Docs-only governance — supersede E21:S04:T02 and merge T01 handoffs (imagery, layout expansion guidance, directional-icon audit checklist) into **E21:S04:T04**. No runtime code, translation YAML, or installer changes.

**Operator decision (IPW 2026-06-09):** ai-dev-kit has no separate graphical UI layer; cultural presentation lives in locale YAML strings, CLI/installer text, and kanban state emoji. A dedicated “UI/UX adaptation” task duplicates T04 content work without a distinct delivery surface.

**T02 vs T04 boundary after merge:** T04 owns textual content adaptation **and** documented imagery/iconography policy, string-length guidance for `de`/`fr`/`ja`, and directional-icon audit checklist. RTL layout **implementation** remains **T03**.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Document supersede rationale and forensic traceability (T02 task doc retained) | Operator decision; FR-016 task docs |
| RF2 | Retarget T01 cultural matrix handoffs from T02 → T04 (and T03 where RTL implementation applies) | [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md) |
| RF3 | Expand T04 scope/AC to absorb merged items without implementing T04 deliverables in this task | Task merge plan |
| RF4 | Kanban four-surface consistency on release (task, story, kboard, cultural doc) | FR-092; RW Step 7 |
| RF5 | Update structural pytest contract so recommendations no longer require active T02 owner | `tests/test_locale_cultural_requirements.py` |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Maintainer governance only — not adopter-public (FR-114) | ADR-024 |
| RNF2 | No `packages/frameworks/**` edits — no greenfield sync | P-GREENFIELD-SYNC N/A |
| RNF3 | Precedent: E04:S19:T02 superseded by T06 meta-task | Kanban governance |

### 1.3 Invariants and boundaries

- **In scope:** IPP, T02 supersede stub, T04 scope expansion (docs), cultural requirements retarget, story checklist, kboard row, test update, RW release.
- **Out of scope:** T04 implementation (separate IPW/IDW), RTL code (T03), formatting code (T05), per-locale emoji rewrites, installer terminal-width code, Docusaurus portal (E21:S08:T04).

---

## 2. Specification

### 2.1 Goal

Close E21:S04:T02 as **SUPERSEDED** with scope absorbed by E21:S04:T04, preserving T01 research lineage and eliminating a duplicate task with no distinct delivery surface.

### 2.2 Absorbed scope (T02 → T04)

| Item | Disposition |
| ---- | ----------- |
| Imagery/iconography policy for CLI/installer locale keys | T04 deliverable (documented constraints) |
| 30–40% horizontal expansion guidance for `de`, `fr`, `ja` installer strings | T04 deliverable (translator-facing notes) |
| Directional-icon audit checklist | T04 deliverable (audit doc); mirroring implementation → T03 |
| RTL layout shell | Stays **T03** (unchanged) |

### 2.3 ADR necessity decision

| Outcome | `ALREADY_COVERED` — ADR-024; kanban task supersede only |

### 2.4 Status transition intent

- **T02:** `TODO` → `IN PROGRESS` (Step 1) → `SUPERSEDED` @ `v0.21.4.2+1`
- **T04:** remains `TODO` (scope expanded only)

---

## 3. Test design

| ID | Behavior | Expected check |
| -- | -------- | -------------- |
| C4 | Recommendations map to downstream tasks | `E21:S04:T02` absent from recommendations; T03–T06 present |
| C6 | Rollout matrix back-link | `locale-cultural-requirements.md` linked |
| C7 | Handoffs section | T04 row includes absorbed imagery scope; no active T02 handoff row |
| C7-reg | Regression | `pytest -m fr006` green |

**Module:** `tests/test_locale_cultural_requirements.py`

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition T02 `TODO → IN PROGRESS`** | Task doc status |
| 2 | Create this IPP; wire bidirectional links on T02 and T04 | IPP + task links |
| 3 | Supersede T02 task doc (title prefix, rationale, links to T04) | T02 SUPERSEDED |
| 4 | Expand T04 scope, deliverable, AC, planning links | T04 updated |
| 5 | Retarget `locale-cultural-requirements.md` (dimension catalog, matrix refs, recommendations, handoffs) | Cultural doc |
| 6 | Update story checklist T02 → SUPERSEDED | Story doc |
| 7 | Update `kboard.md` T02 row → Won't Have / SUPERSEDED | Board |
| 8 | Update `tests/test_locale_cultural_requirements.py` | C4/C7 |
| 9 | `pytest tests/test_locale_cultural_requirements.py -m fr006 -q` | Green |
| 10 | `RW E21:S04:T02 --art` on `dev` @ `v0.21.4.2+1` | Release |
| **N** | **[MANDATORY] Reconcile T02 status to `SUPERSEDED`**; kboard stamp | Task + board |

### 4.1 Files to modify

| Path | Action |
| ---- | ------ |
| `docs/implementation-cycles/IPP-E21S04T02-supersede-merge-into-t04.md` | CREATE (this file) |
| `docs/kanban/epics/epic-21/story-04-cultural-adaptation/T02-*.md` | UPDATE — supersede |
| `docs/kanban/epics/epic-21/story-04-cultural-adaptation/T04-*.md` | UPDATE — absorbed scope |
| `docs/governance/standards/locale-cultural-requirements.md` | UPDATE — retarget T02 → T04 |
| `docs/kanban/epics/epic-21/story-04-cultural-adaptation.md` | UPDATE — checklist |
| `docs/kanban/kboard.md` | UPDATE — T02 row |
| `tests/test_locale_cultural_requirements.py` | UPDATE — downstream tasks |

---

## 5. Documentation deliverables

### 5.1 Updates

| Doc | Change |
| --- | ------ |
| T02 task doc | SUPERSEDED stub with IPP + T04 links |
| T04 task doc | Expanded scope from merged T02 |
| locale-cultural-requirements.md | Owner retarget; handoffs footnote |
| Story 04 | T02 checklist SUPERSEDED |
| kboard.md | T02 terminal row |

### 5.2 Non-changes

| Topic | Resolution |
| ----- | ---------- |
| T04 implementation content | Deferred — `IPW E21:S04:T04` |
| packages/frameworks | NONE |
| Portal / Docusaurus | NONE |

---

## 6. Documentation housing

| Path | Publication | Lifecycle |
| ---- | ----------- | --------- |
| This IPP | NOT_APPLICABLE (planning) | evergreen |
| locale-cultural-requirements.md | NOT_APPLICABLE (maintainer) | evergreen |

---

## 7. Success / verification criteria

- [ ] T02 status `SUPERSEDED` with link to T04 and this IPP
- [ ] T04 documents absorbed scope in scope/deliverable/AC
- [ ] `locale-cultural-requirements.md` has zero active T02 owner in recommendations/handoffs
- [ ] Story checklist: T02 SUPERSEDED (merged into T04)
- [ ] `pytest -m fr006` green
- [ ] `RW E21:S04:T02 --art` @ `v0.21.4.2+1` on `dev`
- [ ] Portal: N/A
- [ ] Greenfield: N/A

---

## References

- [T02 task doc](../kanban/epics/epic-21/story-04-cultural-adaptation/T02-adapt-uiux-for-different-cultures-examples-imagery.md) (superseded)
- [T04 task doc](../kanban/epics/epic-21/story-04-cultural-adaptation/T04-adapt-content-and-examples-for-cultural-context.md) (canonical owner)
- [IPP-E21S04T01](IPP-E21S04T01-research-cultural-requirements-target-locales.md)
- [locale-cultural-requirements.md](../governance/standards/locale-cultural-requirements.md)
- [E04:S19:T02 supersede precedent](../kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md)
