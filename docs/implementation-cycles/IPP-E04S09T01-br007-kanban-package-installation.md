---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S09:T01 — Planning: BR-007 Kanban package installation verification and closure (IPW)

**Host Task:** [`T01-br007-kanban-package-installation-verification.md`](../project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence/T01-br007-kanban-package-installation-verification.md) **(E04:S09:T01)**  
**Planning for:** [BR-007 — Multiple Bugs Kanban Package Installation](../project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md)  
**Status:** Approved (verification wave — 2026-06-05)

> **IPW:** Verification/closure wave. Story checklist marks **E04:S09:T01–T04** implementation COMPLETE (**v0.4.9.1+1**); BR-007 remains **PENDING** and `kboard.md` row is **TODO**. This IPP prescribes evidence gathering and four-surface reconciliation — not re-implementation unless verification exposes a gap.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | **Criterion 1:** `analyze_structure.py` imports `Tuple` from `typing` | BR-007 AC1; Story T01 |
| RF2 | **Criterion 2:** `semantic_matcher.py` handles optional regex groups without "no such group" error | BR-007 AC2; Story T02 |
| RF3 | **Criterion 3:** `migrate_structure.py` argparse accepts `canonical_adoption` mode | BR-007 AC3; Story T03 |
| RF4 | **Criterion 4:** Analysis recommendation logic considers detected structure (no false `fresh` when epics exist) | BR-007 AC4; Story T04 |
| RF5 | **Criterion 5:** Fixes verified against real-world Kanban structure scenario (UXR-004 context) | BR-007 AC5 |
| RF6 | **Criterion 6:** `canonical_adoption` installation path completes analysis step without blocking errors | BR-007 AC6 |
| RF7 | **FBU closure:** BR-007 → **FIXED**; acceptance criteria checked with evidence | BR-007; FR-092 |
| RF8 | **Four-surface reconciliation:** Task doc, BR-007, `kboard.md`, story checklist aligned on COMPLETE + version anchor | FR-092; ADR-018 |
| RF9 | **Conditional fix:** If verification reproduces `high_similarity_matches` NameError in `_generate_migration_plan` (line 342), apply minimal scoped fix | Code audit gap |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **No false claims:** Changelog uses "Attempted fix" / "Change implemented" until user confirms; BR-007 uses **FIXED** only after verification evidence | RW changelog policy |
| RNF2 | **FR-097 stamps:** `kboard.md` row stamp changes only with evidence manifest in RW Step 7 | FR-097 |
| RNF3 | **Lean board:** Prune terminal C-band row; append `intake-completed.md` on FBU closure | FR-109; ADR-018 |
| RNF4 | **BR-097 RW:** Prescribe **`RW E04:S09:T01 --art`** only (BUILD +1); no `--doc-policy-zero` | BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** Story T02–T04 implementation artifacts remain authoritative; this wave does not reopen BR-008/FR-010 scope (T05–T06).
- **In scope:** Static/runtime verification of BR-007 criteria; BR-007 doc update; kanban four-surface sync; optional one-line fix for `high_similarity_matches` if reproduced.
- **Out of scope:** Full UAT re-run on external dev-toolkit repo; new pytest suite (unless gap fix requires regression test); agentic_mapper enhancements; template two-phase migration (E04:S09:T07).

---

## 2. Specification

### 2.1 Goal

Close **BR-007** with documented verification evidence by confirming the four installation bugs (and umbrella criteria 5–6) are resolved in `packages/frameworks/kanban/scripts/`, then reconcile task doc, BR-007, `kboard.md`, and story checklist to a terminal **COMPLETE** state under release **`RW E04:S09:T01 --art`**.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Verification method |
| ----------- | ------------------- |
| RF1 | `grep 'from typing import.*Tuple' analyze_structure.py`; import module |
| RF2 | Run `load_canonical_epic_definitions(framework_path)` → expect ≥1 epic; inspect try/except on optional groups |
| RF3 | Inspect `migrate_structure.py` argparse `choices` includes `canonical_adoption` |
| RF4 | Inspect `_generate_migration_plan`: `structure_detected` guard before `fresh`; smoke with detected epics |
| RF5 | Cross-check story T01–T04 completion notes + UXR-004 reproduction steps |
| RF6 | Dry-run analysis path: canonical epics load + migration plan generated |
| RF7–RF8 | RW Step 7 four-surface report |
| RF9 | Trigger `_generate_migration_plan` with semantic matches; fix NameError if present |

### 2.3 Constraints

- Implementation already shipped in story checklist; default path is verify-only.
- Any code fix limited to RF9 gap; separate BUILD only if fix lands.
- BR-007 Fix Attempt History must record verification wave date and evidence.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO (task doc); story checklist shows T01 COMPLETE (implementation) — reconcile to verification COMPLETE on this host task doc.
- **Transition trigger to IN PROGRESS:** First non-planning verification action (IPP §4 Step 1).
- **Transition trigger to COMPLETE:** All AC1–AC6 satisfied; forensic marker `✅ COMPLETE (v{version})`; BR-007 **FIXED**.
- **Atomic propagation requirement:** Task doc, BR-007, `kboard.md` prune/ledger, story T01 link update in same RW Step 7 session.
- **Owner:** Implementation execution (this IPW session produces plan only).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | No architectural fork — verify existing bug fixes |
| T2 | Reversibility | N | Doc/kanban closure; optional one-line code fix is trivially revertible |
| T3 | Blast radius | N | Confined to kanban scripts + BR-007 surfaces |
| T4 | Precedent | N | Does not establish new canonical pattern |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | No ADR/policy contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | §4.1 files only |
| E2 | No new options | Y | Verifies BR-007 + story T01–T04 delivery |
| E3 | Reversible in one task | Y | Revert is normal PR |
| E4 | Spec elsewhere | Y | BR-007 AC + UXR-004 are authoritative spec |
| E5 | Documented NONE | Y | §5.3 cites BR-007; no new ADR |

---

## 3. Test design

Verification is **manual + static inspection** (no dedicated pytest suite today). `--skip-tests` justification: verification wave confirms already-shipped script fixes; executable contract gaps are tracked under separate intake if needed.

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Tuple import (RF1) | `from typing import ... Tuple` in `analyze_structure.py`; no NameError on import |
| V2 | Semantic matcher (RF2) | `load_canonical_epic_definitions(Path('packages/frameworks/kanban'))` returns ≥1 epic |
| V3 | Migrate mode (RF3) | `'canonical_adoption' in migrate_structure argparse choices` |
| V4 | Recommendation logic (RF4) | `structure_detected = len(self.epic_mappings) > 0` before `fresh` branch; no false fresh when mappings exist |
| V5 | Migration plan smoke (RF6/RF9) | `_generate_migration_plan` completes when `has_semantic_matches` true — no `NameError: high_similarity_matches` |
| V6 | BR-007 doc | All six acceptance criteria checked; status **FIXED** |
| V7 | Kanban surfaces (RF8) | Task COMPLETE; kboard row pruned; `intake-completed.md` entry |

**Verification commands:**

```bash
python -c "
from pathlib import Path
import sys
sys.path.insert(0, 'packages/frameworks/kanban/scripts')
from semantic_matcher import load_canonical_epic_definitions
n = len(load_canonical_epic_definitions(Path('packages/frameworks/kanban')))
assert n > 0, 'expected canonical epics'
print('V2 PASS:', n, 'epics')
"

grep -E 'from typing import.*Tuple' packages/frameworks/kanban/scripts/analyze_structure.py
grep -E "canonical_adoption" packages/frameworks/kanban/scripts/migrate_structure.py | head -3
```

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E04:S09:T01` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Run V1–V5 verification checklist; record results in task **Completion Summary** | Evidence notes |
| 3 | **Conditional:** If V5 fails (`high_similarity_matches` NameError), replace line 342 rationale with `len(self.semantic_matches)` or call `_generate_recommendation_rationale` | Minimal diff in `analyze_structure.py` |
| 4 | Update BR-007: check acceptance criteria 1–6; add Fix Attempt History entry; status → **FIXED** | BR-007 terminal |
| 5 | Update story checklist T01 entry to link discrete task doc + verification COMPLETE marker | Story doc |
| 6 | RW Step 7: prune `kboard.md` E04:S09:T01 C-band row; append `intake-completed.md` | Four-surface report |
| 7 | **`RW E04:S09:T01 --art`** — version adopt `0.4.9.1+{N}`; BUILD +1 | Tagged release |
| **N** | **[MANDATORY] Reconcile task `E04:S09:T01` status** to actual state: if V1–V7 pass → **COMPLETE** + `✅ COMPLETE (v{version})`; if blocked → **BLOCKED** + reason. Update `Last updated`. | Task doc reflects evidence |

**RW verification / FBU wave rule (BR-097):** Step 7 prescribes **`RW E04:S09:T01 --art`** only. Do **not** prescribe `--doc-policy-zero`.

### 4.1 Files to create or modify

| File | Action |
| ---- | ------ |
| `docs/project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence/T01-br007-kanban-package-installation-verification.md` | UPDATE (status, completion) |
| `docs/implementation-cycles/IPP-E04S09T01-br007-kanban-package-installation.md` | CREATE (this IPP) |
| `docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md` | UPDATE (status, AC, fix history) |
| `docs/project-management/kanban/kboard.md` | UPDATE (prune row) |
| `docs/project-management/kanban/intake-completed.md` | UPDATE (ledger) |
| `docs/project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md` | UPDATE (T01 task doc link) |
| `packages/frameworks/kanban/scripts/analyze_structure.py` | UPDATE (only if V5 gap reproduced) |

### 4.2 Dependency order

1. Verification evidence (Steps 2–3)
2. BR-007 + task doc updates (Steps 4–5)
3. RW Step 7 kanban (Step 6)
4. RW release (Step 7)
5. Status reconciliation (Step N)

### 4.3 Documentation implementation steps

1. BR-007 fix history before status **FIXED**
2. Task completion summary before COMPLETE marker
3. `intake-completed.md` before kboard prune

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md` | AC checkboxes; Fix Attempt History; Status **FIXED**; link task doc | RF7; Step 4 |
| D-U2 | `docs/project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence/T01-br007-kanban-package-installation-verification.md` | Status; completion summary; version anchor | Steps 1, N |
| D-U3 | `docs/project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md` | T01 checklist → discrete task doc link | Step 5 |
| D-U4 | `docs/project-management/kanban/kboard.md` | Prune E04:S09:T01 C-band row | Step 6 |
| D-U5 | `docs/project-management/kanban/intake-completed.md` | BR-007 closure ledger entry | Step 6 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S09T01-br007-kanban-package-installation.md` | This IPP | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| ADR for installation modes | **NONE** — EXEMPT §2.5; behavior specified in BR-007 + framework README |
| New pytest suite for install path | **NONE** — out of scope; optional follow-on intake |
| Framework README update | **NONE** — scripts README already documents `canonical_adoption` |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | ---------------------- | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S09T01-br007-kanban-package-installation.md` | NOT_APPLICABLE | Planning artifact | evergreen | T01 Input/References |
| D-U1 | `docs/project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md` | NOT_APPLICABLE | Kanban FBU corpus | evergreen | T01 Cross-Wiring |
| D-U2 | `docs/project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence/T01-br007-kanban-package-installation-verification.md` | NOT_APPLICABLE | Task doc | evergreen | IPP Host Task |
| D-U3–D-U5 | kanban board / ledger / story | NOT_APPLICABLE | Project management | evergreen | RW Step 7 |

---

## 7. Success / verification criteria

- [ ] IPP §1–§7 complete; bidirectional T01 ↔ IPP links
- [ ] V1–V5 verification PASS (or RF9 gap fixed with evidence)
- [ ] BR-007 criteria 1–6 checked; status **FIXED**
- [ ] `kboard.md` E04:S09:T01 row pruned; `intake-completed.md` ledger entry
- [ ] **`RW E04:S09:T01 --art`** completes with four-surface report
- [ ] Task doc **COMPLETE** + `✅ COMPLETE (v{version})`
- [ ] All §5 UPDATE items implemented

---

## References

- [T01 — BR-007 verification and closure](../project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence/T01-br007-kanban-package-installation-verification.md)
- [BR-007](../project-management/kanban/fr-br/BR-007-multiple-bugs-kanban-package-installation.md)
- [UXR-004](../project-management/kanban/fr-br/UXR-004-kanban-package-installation-uat.md)
- [Story 9](../project-management/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-092](../project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
