---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-100: IPW ADR necessity checklist and measurable decision gate

**Type:** Feature Request (FR)  
**ID:** FR-100  
**Submitted:** 2026-05-26  
**Submitted By:** User (planning session — IPW documentation and architecture capture)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** ACCEPTED (intake v0.2.16.12+1 — RW -k)

**Implementing Task:** [E2:S16:T12](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T12-ipw-adr-necessity-checklist-fr100.md) (v0.2.16.12+1)

**Related:** [FR-042](./FR-042-implementation-planning-workflow-ipw.md), [FR-096](./FR-096-ipw-documentation-phases-update-create-and-housing.md), [FR-094](./FR-094-ipw-slash-command-and-task-state-transition-mandate.md), [ADR-004](../../../architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md) (example of IPW-adjacent decision warranting ADR)

---

## Summary

Add a **measurable, hybrid ADR decision gate** to IPW so every planning run explicitly decides whether an Architecture Decision Record is **required**, **exempt** (with evidence), or **already covered** by an existing ADR/policy—instead of vague “ADR if needed” guidance.

---

## Problem Statement

FR-096 operationalized IPW **documentation inventory and housing** (Phases 5–6, IPP §5–§6). Phase 5 can list `CREATE` rows for ADRs, but there is **no binary, auditable criteria** for when an ADR is mandatory vs when IPP §2 specification alone is sufficient.

**Failure modes observed in practice:**

- Cross-cutting workflow decisions (e.g. IPP state transitions) ship as IPP/policy only until retroactively elevated to ADR-004.
- Agents and reviewers use subjective “ADR if needed” (see `code-review-checklist-templates.md`) with no Phase 9 validation hook.
- Exemption-only mental models encourage skipping ADRs for decisions that set precedent or affect multiple surfaces.

---

## Proposed Solution

### Decision model (hybrid — primary positive triggers, narrow exemption)

**Default:** No new ADR until the checklist is scored.

**Primary gate — positive triggers (any YES → ADR required in §5 as CREATE or UPDATE):**

| ID | Trigger | Measurable test |
| -- | ------- | ---------------- |
| T1 | **Alternatives** | ≥2 viable approaches; task selects one |
| T2 | **Reversibility** | Undo touches multiple modules, packages, adopters, or data/API contracts |
| T3 | **Blast radius** | Beyond single task file list in §4.1 (framework package, multi-epic, adopter surface) |
| T4 | **Precedent** | Future work will cite this as canonical “how we do X” |
| T5 | **Constraint trade-off** | Explicit trade among security, performance, operability, agent ergonomics, versioning |
| T6 | **Governance contract** | Changes RW, IPW, UKW, validators, or global implementation gates |
| T7 | **Supersedes** | Narrows or contradicts existing ADR/policy without supersession note |

**Secondary gate — exemption (all positive triggers NO **and** all pass):**

| ID | Exemption rule | Measurable test |
| -- | -------------- | ---------------- |
| E1 | **Single locus** | Decision confined to §4.1 file list |
| E2 | **No new options** | Implements existing ADR/policy/FR/IPP §2 only |
| E3 | **Reversible in one task** | Rollback = normal revert without migration/adopter notice |
| E4 | **Spec elsewhere** | IPP §2 + task AC (or one policy section) is authoritative |
| E5 | **Documented NONE** | §5.3 cites governing doc; `ADR decision: EXEMPT` recorded |

### Artifact type ladder (decision aid — include in policy doc)

| Outcome | Home |
| ------- | ---- |
| Task-scoped behavior | IPP §2 + task AC |
| Repeatable multi-task rule | Policy update or new policy |
| Choice among options with lasting cost | ADR (new or update) |

### IPW integration

- New **Phase 5.0 — ADR necessity decision** (after Phase 4, before or merged with Phase 5 documentation inventory).
- Persist scores in IPP **§2.5 ADR decision** (or dedicated subsection) and mirror outcome in **§5** (ADR row mandatory when REQUIRED).
- Phase 9 validation: if any T1–T7 is YES, §5 must include ADR CREATE/UPDATE; if EXEMPT, §5.3 + exemption checklist present.

### Deliverables (implementation — owned by E2:S16:T12)

| Artifact | Action |
| -------- | ------ |
| `docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md` | CREATE — canonical measurable criteria |
| `.claude/commands/ipw.md` | UPDATE — Phase 5.0 + gates |
| `implementation-planning-workflow-agent-execution.md` | UPDATE — phase table + ADR section |
| `PLAN_DOC_TEMPLATE.md` | UPDATE — §2.5 + §5 cross-reference |
| `FR-042-implementation-planning-workflow-ipw.md` | UPDATE — formal step |
| `specification-and-planning-artifacts-policy.md` | UPDATE — ADR gate reference |
| `code-review-checklist-templates.md` | UPDATE — replace “ADR if needed” with checklist link |

Optional (non-blocking): lightweight validator script or IPW Phase 9 checklist extension in a follow-on task.

---

## Acceptance Criteria

- [ ] **AC1:** Evergreen policy `ipw-adr-necessity-checklist.md` documents T1–T7, E1–E5, artifact ladder, and REQUIRED vs EXEMPT outcomes.
- [ ] **AC2:** `/ipw` defines Phase 5.0 (or equivalent) with mandatory gate before Phase 5 documentation inventory completes.
- [ ] **AC3:** `PLAN_DOC_TEMPLATE.md` includes ADR decision section wired to §5 ADR deliverable rows.
- [ ] **AC4:** Phase 9 validation bullets cover trigger/evidence consistency.
- [ ] **AC5:** FR-042 step table aligned with operational IPW phases.
- [ ] **AC6:** FR-100 ↔ E2:S16:T12 bidirectionally linked; story checklist updated.
- [ ] **AC7:** Delivered via RW with version forensic marker on task (when implementation completes).

---

## Dependencies

**Blocked By:** [FR-096](./FR-096-ipw-documentation-phases-update-create-and-housing.md) (COMPLETE — Phases 5–6 baseline)  
**Blocks:** None  
**Related:** [FR-042](./FR-042-implementation-planning-workflow-ipw.md), [ADR-004](../../../architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md)

---

## References

- [FR-042](./FR-042-implementation-planning-workflow-ipw.md)
- [FR-096](./FR-096-ipw-documentation-phases-update-create-and-housing.md)
- [specification-and-planning-artifacts-policy.md](../../../architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md)
- `.claude/commands/ipw.md`
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
