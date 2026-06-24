---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-140: Repository information architecture steady-state governance

**Type:** Feature Request (FR)  
**ID:** FR-140  
**Submitted:** 2026-06-23  
**Submitted By:** Operator (post UXR-033 / UXR-034 intake)  
**Priority:** HIGH  
**Status:** IMPLEMENTED  
**Last updated:** 2026-06-24 (E07:S01:T15 delivery — policy + manifest + gates)

**Implementing Task:** [E07:S01:T15](../epics/epic-07/story-01-codebase-maintenance-tasks/T15-repository-information-architecture-steady-state-governance-fr140.md)

**Governs (cartography legs — investigation, not duplicate scope):**

- [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) · [UXR-033](UXR-033-comprehensive-repository-directory-structure-audit.md) — **directory** valuation matrix
- [E07:S01:T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) · [UXR-034](UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md) — **file** valuation within T13 scope

**Parent / umbrella coordination:** [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) (project review & legacy clean-up program)

---

## Summary

Establish a **durable repository information-architecture (IA) governance program** for ai-dev-kit: constitutional policy, machine-generated path manifest, tiered README contract, creation gates, and drift detection — so operators and agents always know what each directory and file is for, while **T13** (directory cartography) and **T14** (file cartography) supply evidence-backed valuation matrices without duplicating each other or ad-hoc cleanup tracks.

---

## Problem Statement

Domain-by-domain rehousing ([FR-101](FR-101-consolidate-governance-under-docs-governance.md), [FR-118](FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md)) and root hygiene ([UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)) reduced drift but did not produce a **single, enforceable steady-state model** for the whole tree.

[UXR-033](UXR-033-comprehensive-repository-directory-structure-audit.md) / [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) delivered an 83-row directory matrix ([`REPOSITORY-DIRECTORY-AUDIT.md`](../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) @ v0.7.1.13+1). [UXR-034](UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md) / [E07:S01:T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) is ready to run but lacked a **program-level FR** that:

1. Positions directory + file audits as **cartography legs** under one governance umbrella (wider than either task alone).
2. Defines **post-audit steady state** (manifest, gates, agent routing) so new dirs/files do not re-bloat the tree.
3. **Aggregates** related cleanup / IA work so waves do not conflict or duplicate movers.

Without FR-140, T14 operators lack a canonical policy anchor for file investigation scope, hand-off to execution waves, and long-term hygiene ownership.

---

## Layered model (target architecture)

| Layer | Role | Primary artifact | Update cadence |
| ----- | ---- | ---------------- | -------------- |
| **L0 — Constitutional policy** | What may exist where; tier rules; SoT vs mirror vs generated | `docs/governance/standards/repository-information-architecture-policy.md` (proposed) | Rare — ADR-level changes |
| **L1 — Cartography (investigation)** | Evidence-backed valuation matrices | `REPOSITORY-DIRECTORY-AUDIT.md` (T13), `REPOSITORY-FILE-AUDIT.md` (T14) | Per audit wave; sign-off gated |
| **L2 — Machine manifest** | Generated inventory for agents/CI (not hand-maintained per-file registers) | `docs/maintenance/repository-path-manifest.json` (or successor) + generator script | On demand + CI drift check |
| **L3 — Tiered READMEs** | Human orientation at boundary dirs only | README / AGENTS.md pointers per tier table in policy | When boundary purpose changes |
| **L4 — Creation gates** | Block unclassified new top-level dirs / policy violations | Validator(s) in pre-commit / Actions CI parity | Per PR |

**Explicit non-goal:** Manual PDR-style register on every file change — manifest is **generated**; policy is **constitutional**; READMEs are **tiered**, not universal.

---

## Aggregated program map (explicit + implicit IA touchpoints)

Work items that **overlap** repository IA, cleanup, or path semantics. FR-140 **coordinates**; it does not subsume completed delivery or replace investigation-only UXRs.

| ID | Task(s) | Relationship to FR-140 | Status (2026-06-23) |
| -- | ------- | ------------------------ | ------------------- |
| **FR-140** | **E07:S01:T15** | **Umbrella — steady-state governance (this FR)** | IMPLEMENTED |
| **UXR-033** | **E07:S01:T13** | **Cartography leg A — directories** | COMPLETE (sign-off 2026-06-24) |
| **UXR-034** | **E07:S01:T14** | **Cartography leg B — files within T13 scope** | COMPLETE (v0.7.1.14+1) |
| **FR-039** | E07:S01:T10 | Parent cleanup program; consumes T13/T14 wave plans | IN PROGRESS |
| **UXR-013** | E07:S01:T10 | Root-only file hygiene (narrower than T14) | TODO |
| **FR-101** | E07:S01:T11 | Governance tree rehousing — precedent inventory pattern | COMPLETE |
| **FR-118** | E07:S01:T12 | Kanban path promotion — precedent inventory pattern | COMPLETE |
| **UXR-011** | E09:S05:T04 | Kanban epic/story directory naming hygiene | COMPLETE |
| **UXR-032** | E04:S19:T14 | `fr-br/` → `fbu/` path rename — ripple on audit paths | TODO |
| **UXR-025** | (install diary) | `adk-install-into-sbl/` vs `docs/adk-feedback/` overlap (T13 R2) | OPEN context |
| **FR-110** | (distribution) | `greenfield-install/` mirror SoT contract | IN PROGRESS / related |
| **BR-109** | E08:S03:T23 | Dual-tree `greenfield-install/` sync drift | Related |
| **FR-114** | E05:S08+ | Public vs maintainer doc surfaces — placement rules | COMPLETE / ongoing |
| **ADR-026** | E05:S08:T06 | Maintainer KB git paths — `docs/knowledge/`, `docs/maintenance/` | COMPLETE |
| **FR-139** | E05:S02:T07 | Documentation taxonomy — complements IA policy | COMPLETE |
| **FR-103** | E05:S08:T04 | `AGENTS.md` bootstrap routing — agent awareness surface | COMPLETE |
| **E02:S16:T04** | Perpetual | Repo infrastructure maintenance — proposed home for manifest hygiene cycles | PERPETUAL |
| **UXR-033 R6** | (follow-on) | Optional CI validator for new top-level directories | Deferred — absorbed into FR-140 L4 |

**Wave deconfliction rule (FR-140-F12):** Structural movers (`git mv`, deletes, archive) require **both** applicable cartography sign-off **and** explicit IPW/IDW on a scoped execution task — never inferred from audit reports alone.

---

## T14 release gate (unblocks file cartography)

**FR-140-F13 — T14 may proceed when:**

1. [E07:S01:T13](T13-comprehensive-repository-directory-structure-audit-uxr033.md) has published [`docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md`](../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) with **scope + directory valuation matrix** (phases 1–2 equivalent) — **satisfied @ v0.7.1.13+1**.
2. Operator runs **`IPW E07:S01:T14`** (plan mode) and links `IPP-E07S01T14-*.md` from T14 — **still required** (T14 AC0).
3. **Not required before T14 investigation:** T13 maintainer sign-off (AC5), T15 policy publication, or machine manifest — those gate **execution waves**, not file inventory/valuation.

**FR-140-F14 — T13 completion** remains open until directory audit sign-off; T14 rollups may feed back per T14 AC7 while T13 sign-off is pending.

---

## Requirements

### Functional

- [x] **FR-140-F1:** Publish **repository IA policy** under `docs/governance/standards/` defining: purpose classes (aligned with T13/T14 rubrics), SoT vs dev-kit specialisation vs install mirror vs generated/vendor, documentation surface placement (cross-link [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md), [FR-139](FR-139-unified-documentation-governance-strategy.md)), and tiered README expectations.
- [x] **FR-140-F2:** Define **cartography program** section wiring **T13** + **T14** as mandatory evidence legs before structural cleanup waves; cross-link audit report paths.
- [x] **FR-140-F3:** Specify **machine-generated path manifest** format, generator script location, and refresh procedure (input: git tree + policy exclusions; output: JSON or YAML for agents/validators).
- [x] **FR-140-F4:** Define **creation gates** — minimum: new top-level directory requires policy class + README tier; optional CI validator (successor to UXR-033 R6).
- [x] **FR-140-F5:** Define **drift detection** — manifest diff in CI or pre-commit advisory/blocking mode per IPW decision.
- [x] **FR-140-F6:** Update **`AGENTS.md`** / maintainer routing with one-line pointer to IA policy + manifest (no cold-start bloat).
- [x] **FR-140-F7:** Program **aggregation table** (this FR §Aggregated program map) maintained in policy doc or linked maintenance README; update when new IA-touching FBUs file.
- [x] **FR-140-F8:** Hand-off contract from T13/T14 wave plans to **FR-039** / scoped mover tasks — checklist template in policy or `docs/maintenance/`.
- [x] **FR-140-F9:** Reconcile with [`REPOSITORY-DIRECTORY-AUDIT.md`](../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) §2.1 SoT map and wave plan §3 — policy must not contradict signed cartography without maintainer override record.
- [x] **FR-140-F10:** Document **perpetual hygiene** ownership — default: [E02:S16:T04](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md) for manifest regen cycles; UKW/RW Step 7 when board-visible program status changes.

### Non-functional

- [ ] **FR-140-NF1:** Policy doc index-like where possible; substantive rules link to ADRs/standards siblings ([FR-139](FR-139-unified-documentation-governance-strategy.md) pattern).
- [ ] **FR-140-NF2:** Generator + validator live under `scripts/` or `packages/frameworks/workflow-mgt/scripts/validation/` per framework-code conventions.
- [ ] **FR-140-NF3:** Greenfield mirror paths respect [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) / [P-GREENFIELD-SYNC](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md) — manifest excludes or tags mirror rows explicitly.

---

## Acceptance criteria

- [ ] **AC1:** IA policy doc exists, linked from `docs/governance/README.md`, and references T13/T14 cartography legs + aggregation table.
- [ ] **AC2:** Manifest generator produces deterministic output from repo tree; sample manifest committed or documented as generated artifact policy.
- [ ] **AC3:** At least one creation/drift gate documented with enforcement level (advisory vs blocking) and CI/pre-commit hook path if blocking.
- [ ] **AC4:** T14 task doc + UXR-034 reference FR-140; T13 task doc + UXR-033 reference FR-140 as program umbrella.
- [ ] **AC5:** FR-039 updated to list FR-140 as coordination surface for repo-wide IA (not duplicate T13/T14).
- [ ] **AC6:** Operator can run `IPW E07:S01:T14` with FR-140 + T13 audit report as authoritative inputs (gate FR-140-F13).

---

## Out of scope (this FR)

- Executing directory/file moves, archives, or deletes (scoped IDW tasks per wave plan).
- Re-running full T13/T14 inventories (cartography legs own that evidence).
- Replacing [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) — FR-140 **governs IA steady state**; FR-039 **owns cleanup program execution** consuming cartography outputs.

---

## References

- [`docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md`](../../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) — T13 deliverable @ v0.7.1.13+1
- [`docs/governance/GOVERNANCE-REHOUSING-INVENTORY.md`](../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) · [`docs/governance/KANBAN-REHOUSING-INVENTORY.md`](../../governance/KANBAN-REHOUSING-INVENTORY.md)
- [IPP-E07S01T13](../../implementation-cycles/IPP-E07S01T13-comprehensive-repository-directory-structure-audit.md)
- [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) · [ADR-012](../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)

---

## Intake notes

- Filed **2026-06-23** after operator confirmed IA steady-state scope exceeds T13+T14 and T14 needs program governance to run cleanly.
- **Next:** `IPW E07:S01:T15` for policy + manifest design; **`IPW E07:S01:T14`** unblocked per FR-140-F13 once operator authorizes.
