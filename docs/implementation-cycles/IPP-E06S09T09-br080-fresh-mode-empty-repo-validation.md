---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T09 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T09-kanban-fresh-mode-validation-br080.md`](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T09-kanban-fresh-mode-validation-br080.md) **(E06:S09:T09)**  
**Planning for:** [BR-080](../project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) · [GitHub #12](https://github.com/RMS-Ltd/ai-dev-kit/issues/12)  
**Status:** Approved (planning complete — **HIGH** greenfield blocker; await implementation authorization)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `--mode fresh` on empty repo succeeds **without** `--force` | BR-080 AC |
| RF2 | If validation retained, order is: create skeleton → validate (not validate-then-abort) | BR-080 Expected |
| RF3 | CLI prints first-run guidance when abort would have happened (if any path still blocks) | BR-080 AC |
| RF4 | `INSTALL_IN_YOUR_PROJECT.md` greenfield path updated; book Step 1 can drop `--force` | BR-080 AC |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Migration/update/hybrid modes keep strict validation |
| RNF2 | Error messages actionable (what dir, what flag, what mode) |

### 1.3 Boundaries

- **In scope:** Pre-install validation gate in `install_kanban_framework.py` (~L427–470), mode `fresh`.
- **Out of scope:** RW PyYAML (**T11**), structure template (**T07**).

---

## 2. Specification

### 2.1 Goal

First-time adopters run `install_kanban_framework.py --mode fresh` on an empty tree without learning the undocumented `--force` escape hatch.

### 2.5 ADR necessity decision

| T3 | Blast radius | **Y** | Changes greenfield install contract for all adopters |
| T6 | Governance contract | **N** | Does not alter RW steps |

**Outcome:** `EXEMPT` with **documented contract change** in §5 (no standalone ADR — behavior specified in installer doc + BR closure note). If product owner wants ADR, escalate before implementation.

---

## 3. Test design

| ID | Behavior | Expected check |
| -- | -------- | -------------- |
| T1 | Empty tmp project, `--mode fresh` (no `--force`) | Exit 0 or guided success |
| T2 | Empty tmp, `--mode migration` | Still fails without epics (regression) |
| T3 | Partial tree | Behavior unchanged vs baseline |
| T4 | CLI stderr | No raw "Required directory missing: epics" without hint on fresh |

**Test file:** `packages/frameworks/kanban/tests/test_install_fresh_validation.py`.

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T09 **TODO → IN PROGRESS** |
| 2 | Identify validation function(s) requiring `epics/`; branch on `args.mode == "fresh"` |
| 3 | Option A: skip epics-dir check for fresh; Option B: mkdir skeleton before validate — **pick one in implementation** (prefer skeleton create) |
| 4 | Add tests T1–T4 |
| 5 | Update adopter docs + book packet cross-link |
| 6 | Replay ExpensesTracker T03 Step 1 without `--force` |
| **N** | Status reconcile + RW |

### 4.1 Files

- `packages/frameworks/kanban/scripts/install_kanban_framework.py`
- `packages/frameworks/kanban/tests/test_install_fresh_validation.py`
- `docs/documentation/user-docs/` or `INSTALL_IN_YOUR_PROJECT.md` (locate canonical greenfield doc)

---

## 5. Documentation deliverables

| Doc ID | Path | Scope |
| ------ | ---- | ----- |
| D-U1 | Greenfield install guide | Remove `--force` as required for Step 1 |
| D-U2 | `docs/guides/workflow-initiation-cheatsheet.md` | Only if kanban install cited |

---

## 6. Documentation housing

| Doc ID | Status |
| ------ | ------ |
| IPP | PUBLISHED (this file) |

---

## 7. Success / verification criteria

- [ ] BR-080 AC verified on empty-repo fixture
- [ ] Book dry-run Step 1 command list updated

## References

- [BR-080](../project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md)
- [BR-078](../project-management/kanban/fr-br/BR-078-kanban-fresh-install-structure-template-missing.md)
