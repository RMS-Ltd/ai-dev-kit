---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T08 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T08-kanban-fresh-install-epic-22-23-templates-br079.md`](../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T08-kanban-fresh-install-epic-22-23-templates-br079.md) **(E06:S09:T08)**  
**Planning for:** [BR-079](../project-management/kanban/fr-br/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md) · [GitHub #11](https://github.com/RMS-Ltd/ai-dev-kit/issues/11)  
**Status:** Approved (planning complete — await explicit implementation authorization)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Epic 22 and 23 install from canonical templates like other framework epics | BR-079 |
| RF2 | If templates intentionally omitted, installer skips with explicit opt-in flag or doc | BR-079 AC |
| RF3 | Logs distinguish **template missing** vs **installed from template** | BR-079 AC |
| RF4 | No silent `template not found` placeholder bodies in default fresh path | BR-079 Actual |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Template pack size stays reasonable for submodule adopters |
| RNF2 | Epic range 22–23 documented in kanban governance (project-specific range) |

### 1.3 Boundaries

- **In scope:** `packages/frameworks/kanban/templates/epics/` (or installer epic loop), `install_kanban_framework.py` epic creation.
- **Out of scope:** Structure template (**T07**), validation order (**T09**).

---

## 2. Specification

### 2.1 Goal

Fresh installs produce real Epic 22/23 starter docs (or a deliberate, documented skip), eliminating confusing placeholder-only epic files.

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — packaging + installer loop only (no new governance contract).

---

## 3. Test design

| ID | Behavior | Expected check |
| -- | -------- | -------------- |
| T1 | Templates `Epic-22*.md` / `Epic-23*.md` exist or skip path documented | File glob / policy test |
| T2 | Fresh install to tmpdir | Epic files do not contain `template not found` placeholder |
| T3 | Log output | Success lines for E22/E23 or explicit SKIP with reason |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T08 **TODO → IN PROGRESS** |
| 2 | Inventory existing epic templates 1–21; draft/copy Epic 22 & 23 from canonical pattern |
| 3 | Wire installer epic list to include 22–23 when templates present |
| 4 | Add pytest + update template manifest if any |
| 5 | Document project-specific epic range in install README |
| **N** | Status reconcile + RW Step 7 |

### 4.1 Files

- `packages/frameworks/kanban/templates/epics/Epic-22/` (new)
- `packages/frameworks/kanban/templates/epics/Epic-23/` (new)
- `packages/frameworks/kanban/scripts/install_kanban_framework.py`

---

## 5–6. Documentation

| Doc | Path | Status |
| --- | ---- | ------ |
| D-U1 | `packages/frameworks/kanban/README.md` | UPDATE |
| D-U2 | `docs/governance/standards/` or kanban governance epic-range note | UPDATE if needed |

---

## 7. Success / verification criteria

- [ ] BR-079 AC met on book dry-run replay
- [ ] No placeholder-only Epic 22/23 in default fresh install

## References

- [BR-079](../project-management/kanban/fr-br/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md)
