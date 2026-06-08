---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E01:S02:T14 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T14-dependency-tracking-adopters-fr003.md`](../kanban/epics/epic-01/story-02-package-and-repo-architecture/T14-dependency-tracking-adopters-fr003.md) **(E01:S02:T14)**  
**Planning for:** [FR-003](../kanban/fr-br/FR-003-dependency-tracking-in-adopting-projects.md)  
**Status:** Approved (2026-06-04)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Adopter-facing guide: who tracks Best-README-Template, Keep a Changelog, Shields.io | FR-003, T14 AC1 |
| RF2 | Separation: ai-dev-kit ships guidance/templates; host project owns upstream tracking | FR-003 |
| RF3 | Copy-paste register template + optional GitHub Action + shell check examples | FR-003, user scope |
| RF4 | Greenfield/brownfield notes (ADR-003) | FR-003, ADR-003 |
| RF5 | INSTALL + repo-structure entry points | Plan §4 |
| RF6 | FR-003 ↔ E01:S02:T14 bidirectional links; FR stale E07 narrative corrected | T14 AC2, RF7 |
| RF7 | Story E01:S02 checklist reflects T14 | T14 AC3 |
| RF8 | Cross-link FR-002/T13 README template when adopted (non-blocking) | Plan sequencing |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement |
| -- | ----------- |
| RNF1 | Clear, actionable prose; no new validators in ai-dev-kit |
| RNF2 | Align with copy-don't-reference (numbering-versioning README) |
| RNF3 | Examples are copy-to-host-repo only; ai-dev-kit does not run upstream bots |

### 1.3 Invariants and boundaries

- **Invariants:** Framework package updates remain documented under `framework-dependency-*` guides, not this guide.
- **In scope:** User-docs guide, `user-docs/examples/*`, INSTALL index, repo-structure, FR-003 hygiene, task/story wiring.
- **Out of scope:** E07:S04 maintenance-automation rewrite; E01:S02:T13 README template delivery; maintained automation in ai-dev-kit; RW commit (separate trigger).

---

## 2. Specification

### 2.1 Goal

Adopters have one canonical guide and optional copy-paste templates so **host projects** track external README/doc style resources directly—without ai-dev-kit acting as a middleman for Best-README, Keep a Changelog, or Shields.io updates.

### 2.2 Specification mapping

| RF | Design |
| -- | ------ |
| RF1–RF4 | `adopter-external-resource-dependency-tracking.md` + three `examples/` files |
| RF5 | INSTALL + repo-structure updates |
| RF6–RF7 | FR-003 + task + story checklist |
| RF8 | Subsection in guide linking FR-002/T13 |

### 2.3 Constraints

- Example workflows run in **adopter** repos only.
- Do not conflate with CLI/framework dependency tracking.

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS (implementation session).
- **Transition to IN PROGRESS:** First implementation change (this session).
- **Transition to COMPLETE:** All AC evidence in task doc; version marker via `RW E01:S02:T14`.
- **Atomic propagation:** Task doc + kboard via RW Step 7.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Documents existing copy-don't-reference stance |
| T2 | Reversibility | N | Doc-only revert |
| T3 | Blast radius | N | User-docs + FR only |
| T4 | Precedent | N | Extends ADR-003 adoption stance |
| T5 | Constraint trade-off | N | No new trade-off |
| T6 | Governance contract | N | No RW/IPW/UKW gate change |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | User-docs + examples + INSTALL |
| E2 | No new options | Y | ADR-003 + FR-003 |
| E3 | Reversible | Y | Standard PR revert |
| E4 | Spec elsewhere | Y | This IPP + task AC |
| E5 | Documented NONE | Y | §5.3 |

**§5.3 governing docs:** [ADR-003](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md); [`packages/frameworks/numbering-versioning/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/numbering-versioning/README.md); [FR-003](../kanban/fr-br/FR-003-dependency-tracking-in-adopting-projects.md).

---

## 3. Test design

**Verification mode:** `--skip-tests` — doc-only delivery; no production code in ai-dev-kit.

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Link integrity | Guide ↔ INSTALL ↔ FR-003 ↔ task resolve |
| V2 | Boundary clarity | Guide distinguishes framework deps vs external doc deps |
| V3 | Examples | Each file states copy-to-host-repo; templates self-contained |
| V4 | FR acceptance | Checklist in §7 maps to files |
| V5 | Shell example | `adopter-upstream-check.sh --help` exits 0 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Task **E01:S02:T14** → **IN PROGRESS**; update `Last updated` | Task doc |
| 2 | CREATE adopter guide | `docs/documentation/user-docs/adopter-external-resource-dependency-tracking.md` |
| 3 | CREATE examples (register, yml, sh) | `docs/documentation/user-docs/examples/adopter-upstream-*` |
| 4 | UPDATE INSTALL index | `INSTALL_IN_YOUR_PROJECT.md` |
| 5 | UPDATE repo-structure | `repo-structure-for-adopters.md` |
| 6 | UPDATE FR-003 | Stale E07 links; acceptance checkboxes |
| 7 | UPDATE post-template-setup guide | README step cross-link |
| 8 | UPDATE task doc | IPP link, AC evidence |
| **N** | Reconcile status **COMPLETE** after V1–V5; **RW E01:S02:T14** for version + boards | Task doc + RW |

### 4.1 Files to create or modify

- CREATE: `docs/documentation/user-docs/adopter-external-resource-dependency-tracking.md`
- CREATE: `docs/documentation/user-docs/examples/adopter-upstream-register.md`
- CREATE: `docs/documentation/user-docs/examples/adopter-upstream-check.yml`
- CREATE: `docs/documentation/user-docs/examples/adopter-upstream-check.sh`
- UPDATE: `INSTALL_IN_YOUR_PROJECT.md`, `repo-structure-for-adopters.md`, `FR-003`, `T14` task, `story-02-package-and-repo-architecture.md`, `framework-dependency-post-template-setup-guide.md`

### 4.2 Dependency order

1. Guide + examples → 2. INSTALL/repo-structure → 3. FR + task wiring.

### 4.3 Documentation implementation steps

1. Primary guide (D2) → 2. Examples (D3) → 3. Cross-links (D4–D8).

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | Add guide to Key Documents | RF5 |
| D-U2 | `repo-structure-for-adopters.md` | Optional DEPENDENCIES.md row | RF5 |
| D-U3 | `FR-003-dependency-tracking-in-adopting-projects.md` | Hygiene, AC, status | RF6 |
| D-U4 | T14 task doc | IPP, AC evidence, status | RF6–RF7 |
| D-U5 | `story-02-package-and-repo-architecture.md` | T14 checklist | RF7 |
| D-U6 | `framework-dependency-post-template-setup-guide.md` | README step pointer | RF1 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `adopter-external-resource-dependency-tracking.md` | Canonical policy guide |
| D-C2 | `examples/adopter-upstream-register.md` | Register table template |
| D-C3 | `examples/adopter-upstream-check.yml` | Optional GH Action template |
| D-C4 | `examples/adopter-upstream-check.sh` | Optional local check script |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| External vs framework deps | CREATE D-C1 |
| `packages/frameworks/README.md` | NONE — file does not exist; D-C1 satisfies AC1 |
| E07:S04 maintenance story | NONE content change — FR narrative only |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/documentation/user-docs/adopter-external-resource-dependency-tracking.md` | NOT_APPLICABLE | evergreen | INSTALL, FR-003, T14 |
| D-C2–D4 | `docs/documentation/user-docs/examples/adopter-upstream-*` | NOT_APPLICABLE | evergreen | D-C1 |
| D-U1–D-U6 | per §5.1 | NOT_APPLICABLE | evergreen | As updated |

---

## 7. Success / verification criteria

- [x] Adopter guide answers who tracks the standard trio upstream
- [x] Examples live under `user-docs/examples/` with copy-to-host banner
- [x] INSTALL lists the new guide
- [x] FR-003 and T14 bidirectionally linked; stale E07 README-story refs removed
- [x] Framework vs external dependency boundary stated in guide
- [x] §6 board rows synced (RW E01:S02:T14 Step 7)
- [x] Forensic `✅ COMPLETE (v0.1.2.14+1)` on task (RW E01:S02:T14)

---

## References

- [FR-003](../kanban/fr-br/FR-003-dependency-tracking-in-adopting-projects.md)
- [FR-002](../kanban/fr-br/FR-002-update-been-there-readme.md) (related README template)
- [ADR-003](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
