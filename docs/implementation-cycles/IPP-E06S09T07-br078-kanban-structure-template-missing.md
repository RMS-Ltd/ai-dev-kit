---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T07 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T07-kanban-fresh-install-structure-template-missing-br078.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T07-kanban-fresh-install-structure-template-missing-br078.md) **(E06:S09:T07)**  
**Planning for:** [BR-078](../kanban/fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) · [GitHub #10](https://github.com/RMS-Ltd/ai-dev-kit/issues/10)  
**Status:** Implemented (2026-06-03 — pending user verification / RW)

> **IPW:** Produced 2026-06-03 in plan mode. Wire task `Input` / `References` before implementation (`FR-042` / `FR-083`).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Ship or resolve `templates/KANBAN_STRUCTURE_TEMPLATE.md` so fresh install can copy `kanban-structure.md` | BR-078 AC, T07 AC |
| RF2 | Installer must not report **PARTIAL** when board + epics succeed and only structure template was missing | BR-078 Expected |
| RF3 | Log line must name resolved template path or explicit skip reason | T07 Deliverable |
| RF4 | Adopter/book docs describe SUCCESS vs PARTIAL for greenfield kanban step | BR-078 AC |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Backward compatible: brownfield/migration modes unchanged | install_kanban_framework.py |
| RNF2 | No new required CLI flags for greenfield | BR-080 related UX |
| RNF3 | Tests run in existing kanban/workflow pytest tree | ADK convention |

### 1.3 Invariants and boundaries

- **In scope:** `packages/frameworks/kanban/templates/`, `install_kanban_framework.py` structure-install block (~L175–220), adopter install docs.
- **Out of scope:** Epic 22/23 templates (**T08**), fresh validation order (**T09**), `utcnow()` (**T10**), RW installer (**T11/T12**).

---

## 2. Specification

### 2.1 Goal

Greenfield kanban installs copy a canonical **kanban structure** document from a template that actually exists in the package, so adopters get **SUCCESS** (or honestly scoped PARTIAL) without a false-alarm missing-file warning.

### 2.2 Constraints

- Prefer shipping `KANBAN_STRUCTURE_TEMPLATE.md` (or rename map to existing `kanban-structure` template if already present under another name).
- Final install status logic must treat structure doc as non-blocking only if policy explicitly documents that.

### 2.4 Status transition intent

- **Current:** `TODO`
- **IN PROGRESS:** First code/doc change outside planning artifacts.
- **COMPLETE:** RF1–RF4 verified; RW release with tests green.
- **Owner:** Implementation execution (§4 steps 1 and N).

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1–T7 | All | **N** | Single-script path fix; no cross-repo contract change |

**Outcome:** `EXEMPT` — localized installer/template packaging (E1–E5 pass).

---

## 3. Test design

| ID | Behavior | Expected check |
| -- | -------- | -------------- |
| T1 | Template file exists in package | `Path(templates_dir / "KANBAN_STRUCTURE_TEMPLATE.md").is_file()` |
| T2 | Fresh dry-run / tmp install | No "Structure template not found" when template shipped |
| T3 | Install status | `SUCCESS` or documented PARTIAL only when policy says so |
| T4 | Regression | Existing migration/update mode tests still pass |

**Test location:** `packages/frameworks/kanban/tests/` (new or extend `test_install_kanban_framework.py`).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **TODO → IN PROGRESS** on T07 task doc | Status + `Last updated` |
| 2 | Audit `templates/` for existing structure doc; add or symlink `KANBAN_STRUCTURE_TEMPLATE.md` | Template on disk |
| 3 | Fix `install_kanban_framework.py` path resolution if template name differs | Correct copy target |
| 4 | Adjust final status aggregation (no false PARTIAL) | CLI output |
| 5 | Add pytest T1–T4 | Green CI |
| 6 | Update `INSTALL_IN_YOUR_PROJECT.md` / kanban package README | Adopter doc |
| **N** | Reconcile status **COMPLETE** + `✅ COMPLETE (v…)` or **IN PROGRESS** / **BLOCKED** | Task doc + kboard via RW Step 7 |

### 4.1 Files to create or modify

- `packages/frameworks/kanban/templates/KANBAN_STRUCTURE_TEMPLATE.md` (or equivalent)
- `packages/frameworks/kanban/scripts/install_kanban_framework.py`
- `packages/frameworks/kanban/tests/test_install_structure_template.py` (new)
- Adopter install chapter referencing structure doc outcome

---

## 5. Documentation deliverables

| Doc ID | Path | Scope |
| ------ | ---- | ----- |
| D-U1 | `packages/frameworks/kanban/README.md` | Fresh install outcome |
| D-U2 | Book/adopter `INSTALL_IN_YOUR_PROJECT.md` (if kanban step cites PARTIAL) | Align with RF4 |

### 5.3 Non-changes

| Topic | Resolution |
| ----- | ---------- |
| RW workflow YAML | NONE — out of scope |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status |
| ------ | -------------- | ------------------ |
| IPP | `docs/implementation-cycles/IPP-E6S9T7-br078-kanban-structure-template-missing.md` | PUBLISHED |
| D-U1 | `packages/frameworks/kanban/README.md` | PUBLISHED on implementation |

---

## 7. Success / verification criteria

- [ ] Fresh install dry-run on empty tmp dir: no missing structure template warning
- [ ] BR-078 acceptance criteria satisfied
- [ ] `validate_ipw_publication_wiring.py --requested E06:S09:T07` passes after implementation RW

## References

- [BR-078](../kanban/fr-br/BR-078-kanban-fresh-install-structure-template-missing.md)
- [BR-080](../kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) (related dry-run)
