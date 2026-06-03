---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-02T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T13 — Planning: BR-059 UKW MoSCOW full story task coverage (IPW)

**Host Task:** [`T13-br059-ukw-moscow-full-story-task-coverage.md`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md) **(E02:S16:T13)**  
**Planning for:** [BR-059 — UKW MoSCOW incomplete story task coverage](../project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)  
**Historical anchor:** [E06:S07:T109](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md) (SUPERSEDED, `v0.6.7.109+1`)  
**Status:** Approved for implementation

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | For each story marked **IN PROGRESS** (or with multiple open checklist tasks), UKW Step 6 must ensure **every** non-complete task from the story checklist appears on `kboard.md` in **M/S/C/O** or in **Won't Have** with explicit deferral rationale | BR-059, T13 AC1–AC2 |
| RF2 | UKW Step 9 summary must **fail loud** when story↔board coverage is incomplete (story id, open count, board count, missing `E:S:T` list) | BR-059, T13 |
| RF3 | Agent procedure: diff story checklist ↔ `kboard.md` during Step 6 Part B; add missing rows in stable task order | T13 scope §2 |
| RF4 | Lightweight script/validator: compare open checklist tasks vs board rows per story (± Won't Have deferrals) | T13 scope §3, AC2 |
| RF5 | BR-059 Resolution section links to shipped guidance when AC1–AC3 satisfied | T13 AC1 |
| RF6 | Perpetual UKW doc references BR-059 rule (AC3) | T13 AC3 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Dual-source parity: `.cursorrules` UKW excerpt and `cursorrules-ukw-trigger-section.md` stay aligned | FR-060 dual-source checklist |
| RNF2 | Validator is advisory (non-blocking RW); exit code 0/1 for UKW/CI hooks | IPP scope |
| RNF3 | FR-097: do not batch-update row `Last modified` on hygiene-only board edits | FR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** Story task checklist is SoT for which tasks exist; `kboard.md` MoSCOW must reflect all open work or explicit Won't deferral.
- **In scope:** UKW agent docs, optional `validate_story_moscow_coverage.py`, T13/BR-059/Story-016 wiring, dry-run evidence.
- **Out of scope:** `fbuboard.md` FBU rows; `--rp` reprioritization; reactivating **E06:S07:T109** for RW; blocking RW on this validator.

---

## 2. Specification

### 2.1 Goal

Prevent UKW from treating a single “lead” task per story as sufficient MoSCOW coverage when the story checklist still lists multiple open tasks, restoring trust that the board is a complete view of active work.

### 2.2 Specification mapping

| RF | Design element |
| -- | -------------- |
| RF1 | New **Step 6 Part B.1 — Story checklist enumeration (BR-059)** in UKW guides: mandatory pass over **IN PROGRESS** stories before MoSCOW classification |
| RF2 | Step 9 template requires `## Story MoSCOW coverage` section when gaps detected |
| RF3 | Procedure: parse checklist → compare to kboard M/S/C/O/W → add rows or document Won't |
| RF4 | `validate_story_moscow_coverage.py --story E10:S01` (and `--story-doc path`) |
| RF5–RF6 | Kanban doc updates on closeout |

### 2.3 Status transition intent

- **Step 1:** `E02:S16:T13` **TODO → IN PROGRESS** before implementation edits.
- **Final step:** **COMPLETE** when AC1–AC3 evidenced; **BR-059** may remain **OPEN** if only process/validator shipped (corpus of historical gaps not claimed closed).

### 2.4 ADR necessity decision (FR-100)

| Trigger | Y/N | Evidence |
| ------- | --- | -------- |
| T1 Cross-repo contract | N | ai-dev-kit only |
| T2 Irreversible data/API | N | Docs + advisory script |
| T3 Security/compliance | N | — |
| T4 Multi-team fork | N | — |
| T5 Permanent workflow gate | N | Advisory only |
| T6 Replace existing ADR | N | — |
| T7 External publish boundary | N | — |

**Exemption (E1–E5):** All pass — behavior covered by kanban governance + UKW execution guides.

**Outcome: EXEMPT** — no new ADR. Governed by [kanban-governance-policy.md](../../packages/frameworks/kanban/policies/kanban-governance-policy.md), [update-kanban-workflow-agent-execution.md](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md), [FR-023](../../docs/project-management/kanban/fr-br/FR-023-update-kanban-workflow-ukw.md).

---

## 3. Test design

| ID | Test | Maps to |
| -- | ---- | ------- |
| T1 | `extract_open_tasks_from_story` ignores COMPLETE checklist lines | RF4 |
| T2 | `extract_board_tasks` finds tokens in M/S/C/O/W sections | RF4 |
| T3 | Fixture: 3 open checklist tasks, 1 board row → 2 missing | RF4, AC2 pattern |
| T4 | Won't Have row counts as covered for that `E:S:T` | RF1 |
| T5 | CLI `--story E10:S01` on repo returns non-zero (6 missing) | RF4, dry-run |

**Dry-run evidence (AC2):** `validate_story_moscow_coverage.py --story E10:S01` → 6 open checklist tasks, 0 on `kboard.md` (2026-06-02). Historical **E05:S09** example documented in BR-059 (manual board fix 2026-03-30; story now all COMPLETE).

---

## 4. Implementation plan

1. **TODO → IN PROGRESS** on T13; update `Last updated`.
2. Add BR-059 **Step 6 Part B.1** to `.cursorrules`, `cursorrules-ukw-trigger-section.md`, `update-kanban-workflow-agent-execution.md`, `ukw/AGENTS.md`.
3. Implement `validate_story_moscow_coverage.py` + pytest.
4. Run dry-run on **E10:S01**; record output in T13 verification + BR-059 Resolution.
5. Update **E02:S16:T04** perpetual doc with BR-059 cross-reference (AC3).
6. Wire T13 ↔ IPP ↔ BR-059; update T109 traceability link.
7. Mark T13 AC1–AC3 complete; status **COMPLETE** with evidence (BR-059 stays OPEN until product closure).

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D1 | `docs/implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md` | CREATE | This IPP |
| D2 | `.cursorrules` UKW Step 6 | UPDATE | Part B.1 BR-059 |
| D3 | `packages/frameworks/workflow mgt/cursorrules-ukw-trigger-section.md` | UPDATE | Parity with D2 |
| D4 | `update-kanban-workflow-agent-execution.md` Step 6 | UPDATE | Part B.1 |
| D5 | `packages/frameworks/workflow mgt/agents/ukw/AGENTS.md` | UPDATE | Step 6 Part B |
| D6 | `validate_story_moscow_coverage.py` + tests | CREATE | RF4 |
| D7 | T13, BR-059, Story-016, T04, T109 | UPDATE | Wiring + evidence |
| D8 | `docs/guides/workflow-initiation-cheatsheet.md` | UPDATE | One-line validator hint |
| D9 | New ADR | NONE | EXEMPT §2.4 |

---

## 6. Documentation housing

| Deliverable | Target | Publication |
| ----------- | ------ | ----------- |
| IPP | `docs/implementation-cycles/` | PUBLISHED (autogen sidebar) |
| UKW KB | `packages/frameworks/workflow mgt/KB/...` | PUBLISHED via repo |
| Validator | `packages/frameworks/workflow mgt/scripts/kanban/` | Package framework |
| T13 | Kanban task doc | `NOT_APPLICABLE` (IPP linked) |

---

## 7. Success / verification criteria

- [ ] AC1: UKW guides contain explicit all-open-tasks-or-Won't rule; BR-059 Resolution links guides.
- [ ] AC2: Dry-run log for **E10:S01** (or E5:S09 narrative + script) in T13 verification.
- [ ] AC3: **E02:S16:T04** references BR-059 enumeration rule.
- [ ] `pytest` passes for `test_validate_story_moscow_coverage.py`.
- [ ] `validate_ipw_publication_wiring.py --requested E02:S16:T13` → PASS (NOT_APPLICABLE).

---

## References

- [BR-059](../project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)
- [T13 host task](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md)
- [E04:S19:T03 investigation report](./E04S19T03-e6s07-default-housing-investigation-report.md)
- [BR-042](../project-management/kanban/fr-br/BR-042-ukw-agent-board-cleanup-failure.md) (opposite failure mode)
