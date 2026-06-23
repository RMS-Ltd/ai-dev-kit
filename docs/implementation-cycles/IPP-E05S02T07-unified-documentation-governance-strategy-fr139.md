---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T12:45:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S02:T07 — Planning: Unified documentation governance strategy (IPW)

**Host Task:** [`T07-unified-documentation-governance-strategy-fr139.md`](../kanban/epics/epic-05/story-02-documentation-maintenance-framework/T07-unified-documentation-governance-strategy-fr139.md) **(E05:S02:T07)**  
**Planning for:** [FR-139](../kanban/fr-br/FR-139-unified-documentation-governance-strategy.md)  
**Status:** Approved

> **IPW:** MWF Leg 1 (`MWF E05:S02:T07 delivery`). §-prefixed section headings per operator preference (FR-139-F9).

---

## §1 — Requirements (ascertained baseline)

### §1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Publish `documentation-governance-strategy.md` with policy salience | FR-139-F1 |
| RF2 | Doc taxonomy: Policy, Standard, SOP, Template, Guide, ADR | FR-139-F2 |
| RF3 | Workflow ↔ artifact matrix (≥6 workflows) | FR-139-F3 |
| RF4 | Conflict-resolution ladder | FR-139-F4 |
| RF5 | Index only — link siblings, no rule duplication | FR-139-F5 |
| RF6 | Supersede banner on `ultimate-canonical-kb-structure.md` | FR-139-F6 |
| RF7 | Hub entry in `docs/governance/README.md` | FR-139-F7 |
| RF8 | One-line pointer in `AGENTS.md` | FR-139-F8 |
| RF9 | § section-heading convention documented | FR-139-F9 |
| RF10 | `PLAN_DOC_TEMPLATE.md` § headings | FR-139-F10 |

### §1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Strategy doc ≤ ~200 lines prose; tables encouraged | FR-139-NF1 |
| RNF2 | Package SoT vs book mirror per ADR-023 where cited | FR-139-NF2 |

### §1.3 Invariants and boundaries

- **In scope:** Strategy index, template heading alignment, legacy structure banner, hub links.
- **Out of scope:** Rewriting `documentation-maintenance-policy.md`, new validators, portal allowlist changes.

---

## §2 — Specification

### §2.1 Goal

Give maintainers and agents one **composition index** for documentation governance: what doc classes exist, where they live, which workflows require which artifacts, how conflicts resolve, and how numbered sections are headed (§).

### §2.2 ADR necessity (FR-100)

| Outcome | **EXEMPT** — composition doc; ADR-024/007/026 already cover surfaces and topology. |

### §2.3 Status transition intent

- **Step 1 (IDW):** `TODO → IN PROGRESS`
- **Final (post-RW):** `COMPLETE` + version anchor when §7 criteria met

---

## §3 — Test design

Doc-only task (`--skip-tests`). Verification via §7 manual/link checks.

| ID | Check |
| -- | ----- |
| T1 | Strategy file exists with policy salience + §2–§6 sections |
| T2 | Governance README links strategy |
| T3 | Legacy KB structure doc has supersession banner |
| T4 | `PLAN_DOC_TEMPLATE` uses `## §N —` headings |
| T5 | No dangling relative links from new strategy doc |

---

## §4 — Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Transition task `TODO → IN PROGRESS`; wire IPP bidirectionally |
| **2** | Create `docs/governance/standards/documentation-governance-strategy.md` |
| **3** | Banner `ultimate-canonical-kb-structure.md` |
| **4** | Update `docs/governance/README.md` |
| **5** | Update `PLAN_DOC_TEMPLATE.md` § headings; sync greenfield mirror |
| **6** | Add `AGENTS.md` pointer under governance track |
| **7** | Mark FR-139 checklist items addressed; reconcile task `COMPLETE` at RW |

---

## §5 — Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/governance/standards/documentation-governance-strategy.md` | CREATE |
| D-U1 | `docs/governance/README.md` | UPDATE — index D-C1 |
| D-U2 | `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md` | UPDATE — supersession banner |
| D-U3 | `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` | UPDATE — § headings |
| D-U4 | `AGENTS.md` | UPDATE — one-line loadFirst pointer |

---

## §6 — Documentation housing

| Doc ID | Publication | Lifecycle |
| ------ | ----------- | --------- |
| D-C1 | NOT_APPLICABLE (maintainer governance) | evergreen |
| D-U1–D-U4 | NOT_APPLICABLE | evergreen |

---

## §7 — Success criteria

- [x] FR-139 AC1–AC6 satisfied
- [x] IPP linked from task **Planning artifacts**
- [x] Greenfield mirror synced for `PLAN_DOC_TEMPLATE.md`
