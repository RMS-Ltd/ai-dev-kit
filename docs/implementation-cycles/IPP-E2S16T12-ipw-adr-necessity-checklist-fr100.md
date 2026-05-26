---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T18:45:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S16:T12 — Planning: IPW ADR necessity checklist (FR-100)

**Host Task:** [T12-ipw-adr-necessity-checklist-fr100.md](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T12-ipw-adr-necessity-checklist-fr100.md) (E2:S16:T12)  
**Status:** Planning complete — implementation executed per §4  
**Planning doc created:** 2026-05-26

**FR:** [FR-100](../project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md)

---

## 1. Requirements (ascertained baseline)

| ID | Requirement | Source |
|----|-------------|--------|
| RF1 | Publish evergreen policy with T1–T7, E1–E5, artifact ladder, REQUIRED/EXEMPT | FR-100 AC1 |
| RF2 | IPW Phase 5.0 after Phase 4, before Phase 5 | FR-100 AC2 |
| RF3 | IPP template §2.5 + §5 linkage | FR-100 AC3 |
| RF4 | Phase 9 validation in `ipw.md` + KB guide | FR-100 AC4 |
| RF5 | FR-042 step table alignment (step 4.5 / Phase 5.0) | FR-100 AC5 |
| RF6 | Cross-links in specification policy, dev-kit-ipw-ipp, code-review checklist | FR-100 |
| RF7 | IPP ↔ task wiring; release via RW E2:S16:T12 | FR-100 AC6–AC7 |

| ID | Non-functional | Source |
|----|----------------|--------|
| RNF1 | Doc-only; no runtime code | Task scope |
| RNF2 | Backward compatible: legacy IPPs without §2.5 remain valid; new IPW runs use §2.5 | FR-100 |
| RNF3 | One authoritative doc per topic — link, do not duplicate criteria | Governance |
| RNF4 | Optional validator script out of scope | FR-100 |

**Invariants:** FR-096 Phases 5–6 intact; FR-077 status steps first/last in §4.

---

## 2. Specification

### 2.1 Goal

Every IPW run records a **measurable ADR necessity decision** before documentation inventory; Phase 9 audits REQUIRED vs EXEMPT with evidence in the IPP.

### 2.2 Formal behavior

Phase 5.0 scores [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md): any T1–T7 Y → REQUIRED (§5 ADR row); all N + E1–E5 pass → EXEMPT (§5.3 cite).

### 2.3 Constraints

Insert as Phase 5.0; do not renumber Phases 7–9. Policy path: `docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md`.

### 2.4 Status transition intent

- **TODO → IN PROGRESS:** First implementation edit (§4 Step 1).
- **→ COMPLETE:** All ACs + manual T1–T7; forensic version on RW E2:S16:T12.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single hybrid model per FR-100 |
| T2 | Reversibility | N | Doc-only; file rollback |
| T3 | Blast radius | Y | Multiple framework + architecture paths |
| T4 | Precedent | Y | All future IPW runs cite checklist |
| T5 | Constraint trade-off | N | Criteria prescribed by FR-100 |
| T6 | Governance contract | Y | Changes IPW / FR-042 / gates |
| T7 | Supersedes | N | No contradiction with existing ADR |

**Outcome:** **EXEMPT** — T3/T4/T6 satisfied by **policy** as architectural standard (not separate ADR-007). §5.3 cites `ipw-adr-necessity-checklist.md`.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | §4.1 file list |
| E2 | No new options | Y | FR-100 prescribes model |
| E3 | Reversible in one task | Y | Doc revert |
| E4 | Spec elsewhere | Y | IPP §2 + policy |
| E5 | Documented NONE | Y | §5.3 below |

---

## 3. Test design

Doc/governance verification only (no pytest).

| ID | Behavior | Check |
|----|----------|-------|
| T1 | Policy completeness | T1–T7, E1–E5, ladder, outcomes in policy file |
| T2 | IPW Phase 5.0 | `ipw.md` gate before Phase 5; Phase 9 ADR bullets |
| T3 | IPP template | `PLAN_DOC_TEMPLATE.md` §2.5 |
| T4 | FR-042 parity | Step 4.5 / Phase 5.0 in step table |
| T5 | Cross-links | specification policy, dev-kit-ipw-ipp, code-review |
| T6 | Wiring | Task Input/References ↔ this IPP |
| T7 | Agent stub | `agents/ipw/AGENTS.md` Phase 5.0 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
|------|--------|-------------|
| **1** | Task TODO → IN PROGRESS | Task doc |
| 2 | Create policy SoT | `ipw-adr-necessity-checklist.md` |
| 3 | §2.5 in `PLAN_DOC_TEMPLATE.md` | Template |
| 4 | Phase 5.0 + Phase 9 in `ipw.md` | Slash command |
| 5 | KB guide update | `implementation-planning-workflow-agent-execution.md` |
| 6 | FR-042 step table | FR-042 |
| 7 | Cross-link policies | specification + dev-kit-ipw-ipp |
| 8 | Code-review pointer | `code-review-checklist-templates.md` |
| 9 | Agent stub | `agents/ipw/AGENTS.md` |
| 10 | IPP + task wiring | This file |
| 11 | Manual T1–T7 pass | §7 |
| **N** | Status → COMPLETE + RW | Task + release |

---

## 5. Documentation deliverables

### 5.1 UPDATE

| Doc ID | Path |
|--------|------|
| D-U1 | `.claude/commands/ipw.md` |
| D-U2 | `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` |
| D-U3 | `implementation-planning-workflow-agent-execution.md` |
| D-U4 | `FR-042-implementation-planning-workflow-ipw.md` |
| D-U5 | `specification-and-planning-artifacts-policy.md` |
| D-U6 | `dev-kit-ipw-ipp-vs-icw-artifacts.md` |
| D-U7 | `code-review-checklist-templates.md` |
| D-U8 | `agents/ipw/AGENTS.md` |

### 5.2 CREATE

| Doc ID | Path |
|--------|------|
| D-C1 | `ipw-adr-necessity-checklist.md` |
| D-C2 | This IPP |

### 5.3 Gaps / NONE

| Topic | Resolution |
|-------|------------|
| New ADR for FR-100 | **NONE** — policy is authoritative (§2.5 EXEMPT) |
| Validator script | **NONE** — deferred per FR-100 |
| User docs / portal | **NONE** |
| README | **NONE** |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
|--------|----------------|-------------|-----------|
| D-C1 | `docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/implementation-cycles/IPP-E2S16T12-ipw-adr-necessity-checklist-fr100.md` | NOT_APPLICABLE | evergreen |
| D-U1–U8 | (paths in §5.1) | NOT_APPLICABLE | evergreen |

---

## 7. Success / verification criteria

- [x] AC1–AC4: policy, ipw, template, KB guide, FR-042, cross-links, agent stub
- [x] Phase 5.0 ordered before Phase 5 in `ipw.md`
- [x] §2.5 in template; this IPP includes scored matrix (EXEMPT)
- [ ] AC5: FR-100 → RESOLVED on implementing RW
- [x] §5 UPDATE/CREATE complete; §6 paths exist
- [x] Task ↔ IPP bidirectional links
