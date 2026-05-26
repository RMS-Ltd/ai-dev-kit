---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T18:30:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: ipw-adr-necessity-checklist
  type: standard
  domain:
    primary: documentation
    secondary: ["planning", "ipw", "architecture"]
  audience: ["agents", "developers", "story-owners"]
  applies_to:
    activities:
      - "ipw"
      - "task-planning"
---

# IPW ADR necessity checklist

**Purpose:** Measurable criteria for deciding whether an **Architecture Decision Record (ADR)** is **required**, **exempt** (with evidence), or **already covered** by an existing ADR/policy during **IPW Phase 5.0**.

**Authority:** This document is the **single source of truth** for trigger and exemption rules. Other docs (`.claude/commands/ipw.md`, IPP §2.5, code-review checklists) **link here** — do not duplicate full criteria tables elsewhere.

**Related:** [FR-100](../../project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md), [FR-042](../../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md), [specification-and-planning-artifacts-policy.md](specification-and-planning-artifacts-policy.md)

---

## Default rule

**No new ADR** until the checklist is scored. Record the outcome in the IPP as **§2.5 ADR decision** before Phase 5 documentation inventory.

---

## Artifact type ladder

| Outcome | Canonical home | When to use |
| ------- | ---------------- | ----------- |
| Task-scoped behavior | IPP §2 Specification + task acceptance criteria | One task, one delivery slice |
| Repeatable multi-task rule | Policy or update to existing policy | Applies across tasks/epics without choosing between irreversible options |
| Choice among options with lasting cost | **ADR** (new or update existing) | Any positive trigger (T1–T7) below is **Y** |

---

## Positive triggers (T1–T7)

**If any trigger is Y → outcome `REQUIRED`.** IPP §5 must include an ADR row (`CREATE` or `UPDATE`) before Phase 5 completes.

| ID | Trigger | Measurable test (answer Y or N) |
| -- | ------- | ------------------------------- |
| **T1** | **Alternatives** | ≥2 viable approaches exist; this task selects one |
| **T2** | **Reversibility** | Undoing the choice touches multiple modules, packages, adopters, or data/API contracts |
| **T3** | **Blast radius** | Impact extends beyond the §4.1 file list (framework package, multi-epic, adopter integration surface) |
| **T4** | **Precedent** | Future work will cite this choice as canonical “how we do X here” |
| **T5** | **Constraint trade-off** | Explicit trade among security, performance, operability, agent ergonomics, or versioning semantics |
| **T6** | **Governance contract** | Changes RW, IPW, UKW, validators, or global implementation gates |
| **T7** | **Supersedes** | Narrows or contradicts an existing ADR/policy without a supersession note |

---

## Exemption rules (E1–E5)

**Use only when every T1–T7 is N.** All five exemptions must pass → outcome `EXEMPT`.

| ID | Exemption rule | Measurable test (must pass) |
| -- | -------------- | --------------------------- |
| **E1** | **Single locus** | Decision confined to files listed in IPP §4.1 |
| **E2** | **No new options** | Implements existing ADR, policy, FR, or IPP §2 only |
| **E3** | **Reversible in one task** | Rollback is a normal revert/PR without migration or adopter notice |
| **E4** | **Spec elsewhere** | IPP §2 + task AC (or one policy section) is the authoritative spec |
| **E5** | **Documented NONE** | IPP §5.3 cites governing doc; §2.5 records `ADR decision: EXEMPT` |

If any exemption fails while all triggers are N → re-score triggers or widen scope; do not mark EXEMPT without justification.

---

## Outcomes

| Outcome | IPP requirements |
| ------- | ---------------- |
| **REQUIRED** | §2.5 matrix shows ≥1 Y; §5 includes ADR `CREATE` or `UPDATE` with path under `docs/architecture/standards-and-adrs/` |
| **EXEMPT** | All T1–T7 = N; all E1–E5 pass; §2.5 states EXEMPT; §5.3 cites policy/ADR/IPP section that governs the decision |
| **Already covered** | No new ADR; §5 ADR row is `UPDATE` to existing ADR or `NONE` with link to existing ADR-00N |

---

## Phase 9 consistency (IPW validation)

- If any T1–T7 is **Y** in §2.5, §5 must list an ADR deliverable (not silent NONE).
- If outcome is **EXEMPT**, §5.3 must cite the governing document; §2.5 must show E1–E5 pass.
- “ADR if needed” without a scored matrix is **not** acceptable for new IPW runs.

---

## References

- [ADR-004](ADR-004-ipp-state-transition-contract.md)
- [FR-100](../../project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md)
- `.claude/commands/ipw.md` — Phase 5.0 operational gate
