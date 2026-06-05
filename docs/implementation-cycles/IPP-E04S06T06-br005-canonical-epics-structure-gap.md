---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S06:T06 — Planning: BR-005 canonical epics structure gap verification (IPW)

**Host Task:** [`T06-br005-canonical-epics-structure-gap.md`](../project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system/T06-br005-canonical-epics-structure-gap.md) **(E04:S06:T06)**  
**Planning for:** [BR-005](../project-management/kanban/fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md)  
**Status:** Approved

> **IPW revision:** Post-ship verification wave. Fix 1 delivered at **v0.4.6.6+1**; story checklist COMPLETE but `kboard.md` C-band row drifted TODO. This wave verifies evidence, closes BR-005 Fix 1, and reconciles kanban four-surface consistency.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `CANONICAL_EPICS.md` includes Epic 7 (UXR) with complete description | BR-005 Fix 1 Criterion 1 |
| RF2 | Codebase Maintenance renumbered from Epic 7 → Epic 8 | BR-005 Fix 1 Criterion 2 |
| RF3 | Ancillary epics 9–21 documented with descriptions | BR-005 Fix 1 Criterion 3 |
| RF4 | Core epics (1–8) vs ancillary (9–21) clearly distinguished | BR-005 Fix 1 Criterion 4 |
| RF5 | Epic descriptions include purpose, scope, characteristics, stories, integration | BR-005 Fix 1 Criterion 5 |
| RF6 | `CANONICAL_EPICS.md` references `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` | BR-005 Fix 1 Criterion 6 |
| RF7 | Discrete task doc created and wired to IPP | FR-016, FR-042 |
| RF8 | Kanban four-surface reconciliation: task doc, BR-005, `kboard.md`, `kanban-completed.md` | FR-092, FR-077 |
| RF9 | BR-005 Fix 1 status → FIXED with verification evidence; Fix 2–4 DEFER documented | BR-005 |
| RF10 | Release via `RW E04:S06:T06 --art` (BUILD +1 on adopted anchor) | BR-097 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Changelog language: verification wave — no false "Fixed" claims for unverified code | RW policy |
| RNF2 | Board stamp evidence on kboard row changes only with manifest | FR-097 |
| RNF3 | `--skip-tests`: doc/config verification only — structural inspection | IPW Phase 3 |

### 1.3 Invariants and boundaries

- **Invariants:** Fix 1 delivery at v0.4.6.6+1 is authoritative; this wave does not re-edit `CANONICAL_EPICS.md` unless verification fails.
- **In scope:** Verification matrix V1–V6, task doc creation, kanban/FBU reconciliation, RW closure.
- **Out of scope:** BR-005 Fix 2–4 (epic template files batch, installation script, README updates) — deferred.

---

## 2. Specification

### 2.1 Goal

Confirm BR-005 Fix 1 (CANONICAL_EPICS.md gap closure) is satisfied with documentary evidence, create the missing discrete task doc, reconcile kanban drift (story COMPLETE vs kboard TODO), and close BR-005 Fix 1 via RW Step 7 four-surface reconciliation.

### 2.2 Specification mapping

Historical implementation (v0.4.6.6+1) addressed the UAT finding root cause: agents reading `CANONICAL_EPICS.md` encountered only 7 epics. Verification re-reads the file against RF1–RF6. Kanban reconciliation propagates COMPLETE status atomically across task doc, story checklist, kboard (prune C-band row), and kanban-completed ledger.

### 2.3 Constraints

- RW prescription: `RW E04:S06:T06 --art` only — no `--doc-policy-zero`.
- Fix 2–4 criteria remain open in BR-005; closure banner must note partial scope.
- No force-moving release tags (BR-097).

### 2.4 Status transition intent

- **Current task status:** COMPLETE (story-006 checklist, v0.4.6.6+1 delivery).
- **Wave Step 1:** Create discrete task doc; confirm COMPLETE with forensic marker.
- **FBU status:** BR-005 ACCEPTED → Fix 1 FIXED (Fix 2–4 DEFER).
- **kboard row:** Prune C-band TODO row in same session as FBU closure (FR-077).
- **Owner:** RW Step 7 on closure build.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single verification path — no design choice |
| T2 | Reversibility | N | Doc/kanban edits revertible in one PR |
| T3 | Blast radius | N | Confined to kanban + BR doc surfaces |
| T4 | Precedent | N | Standard FBU closure pattern |
| T5 | Constraint trade-off | N | No new trade-offs |
| T6 | Governance contract | N | No RW/IPW/validator changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** **EXEMPT** — verification and kanban hygiene only.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | §4.1 file list only |
| E2 | No new options | Y | Implements BR-005 + story-006 delivery |
| E3 | Reversible in one task | Y | Normal git revert |
| E4 | Spec elsewhere | Y | BR-005 Fix 1 criteria + task AC |
| E5 | Documented NONE | Y | §5.3 cites BR-005 and story-006 |

---

## 3. Test design

**`--skip-tests` justification:** Doc/config-only verification wave — no executable code changes. Verification is structural inspection of `CANONICAL_EPICS.md` content and kanban surface consistency. pytest not applicable.

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Epic 7 UXR section exists | Grep + manual read of `CANONICAL_EPICS.md` |
| V2 | Epic 8 Codebase Maintenance | Section present; not misnumbered as Epic 7 |
| V3 | Ancillary epics 9–21 | Overview list + detailed sections present |
| V4 | Core vs ancillary distinction | Lines 19–58 document both groups |
| V5 | Comprehensive structure link | Prominent reference at document top |
| V6 | Kanban consistency | Task COMPLETE ↔ story checklist ↔ kboard pruned ↔ kanban-completed |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Create discrete task doc; status COMPLETE with forensic marker `✅ COMPLETE (v0.4.6.6+1)`** | `T06-br005-canonical-epics-structure-gap.md` |
| 2 | Run V1–V5 verification matrix; record evidence in task doc §Verification Evidence | Evidence table |
| 3 | Update BR-005: Fix 1 FIXED banner; Fix 2–4 DEFER note; verification status | BR-005 doc |
| 4 | RW Step 7: prune `kboard.md` C-band row; correct `kanban-completed.md` entry; update `intake-structure.md` | Kanban four-surface |
| 5 | Update story-006 task doc link to discrete T06 file | story-006 |
| 6 | **`RW E04:S06:T06 --art`** — version, changelog, commit, tag, push | Release v0.4.6.6+1 |
| **N** | **[MANDATORY] Reconcile task status COMPLETE; BR-005 Fix 1 FIXED; kboard row pruned; all ACs satisfied** | Four-surface consistency |

### 4.1 Files to create or modify

- `docs/project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system/T06-br005-canonical-epics-structure-gap.md` (CREATE)
- `docs/implementation-cycles/IPP-E04S06T06-br005-canonical-epics-structure-gap.md` (CREATE)
- `docs/project-management/kanban/fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md` (UPDATE)
- `docs/project-management/kanban/kboard.md` (UPDATE — prune row)
- `docs/project-management/kanban/kanban-completed.md` (UPDATE — correct entry)
- `docs/project-management/kanban/intake-structure.md` (UPDATE — BR-005 status)

### 4.2 Dependency order

1. Task doc + IPP (bidirectional wiring).
2. V1–V5 evidence before BR-005 status change.
3. Kanban reconciliation before RW commit.
4. RW `--art` last.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/project-management/kanban/fr-br/BR-005-*.md` | Fix 1 FIXED banner; Fix 2–4 DEFER | RF9 |
| D-U2 | `docs/project-management/kanban/kboard.md` | Prune E04:S06:T06 C-band row | RF8 |
| D-U3 | `docs/project-management/kanban/kanban-completed.md` | Correct T06 entry (v0.4.6.6+1) | RF8 |
| D-U4 | `docs/project-management/kanban/intake-structure.md` | BR-005 Fix 1 FIXED | RF9 |
| D-U5 | `docs/project-management/kanban/epics/epic-04/story-06-*.md` | Link discrete T06 task doc | RF7 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S06T06-br005-canonical-epics-structure-gap.md` | IPW planning package | RF7 |
| D-C2 | `.../T06-br005-canonical-epics-structure-gap.md` | Discrete task doc | RF7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| BR-005 Fix 2–4 (templates, installer, README) | **DEFER** — out of T06 scope; criteria remain open in BR-005 |
| ADR for epic numbering | **NONE** — governed by existing `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` and BR-005 |
| Docusaurus publication | **NONE** — IPP NOT_APPLICABLE per FR-042 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S06T06-br005-canonical-epics-structure-gap.md` | NOT_APPLICABLE | evergreen | T06 task doc Input/References |
| D-C2 | `.../T06-br005-canonical-epics-structure-gap.md` | NOT_APPLICABLE | evergreen | story-006 checklist, BR-005 |
| D-U1 | `docs/project-management/kanban/fr-br/BR-005-*.md` | NOT_APPLICABLE | evergreen | kboard (pruned), intake-structure |
| D-U2–D-U4 | kanban surfaces | NOT_APPLICABLE | evergreen | RW Step 7 |

---

## 7. Success / verification criteria

- [x] V1–V6 verification matrix PASS with evidence paths
- [x] Discrete task doc exists with bidirectional IPP links
- [x] BR-005 Fix 1 FIXED; Fix 2–4 DEFER documented
- [x] `kboard.md` C-band row pruned; `kanban-completed.md` corrected
- [x] RW `E04:S06:T06 --art` completes with validators green
- [x] All §5 UPDATE/CREATE items implemented

---

## References

- [BR-005](../project-management/kanban/fr-br/BR-005-kanban-framework-epic-structure-gap-uat-finding.md)
- [story-006](../project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system.md)
- [T06 task doc](../project-management/kanban/epics/epic-04/story-06-comprehensive-canonical-est-template-system/T06-br005-canonical-epics-structure-gap.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-092](../project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
