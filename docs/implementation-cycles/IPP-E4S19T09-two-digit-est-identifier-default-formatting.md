---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S19:T09 — Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T09-two-digit-est-identifier-default-formatting-uxr014.md`](../project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T09-two-digit-est-identifier-default-formatting-uxr014.md) **(E04:S19:T09)**  
**Planning for:** [UXR-014 — Two-digit default formatting for E/S/T identifiers](../project-management/kanban/fr-br/UXR-014-two-digit-est-identifier-default-formatting.md)  
**Status:** Published

> **IPW (Implementation Planning Workflow):** Produced by IPW for E4:S19:T09. Bidirectional wiring to the host task `Input` and `References` is confirmed.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Inline notation write-default is `E\{NN\}:S\{NN\}:T\{NN\}` with zero-padding when component `<10` | UXR-014 R1, AC1 |
| RF2 | Values `≥10` use natural width; no truncation | UXR-014 Notes |
| RF3 | Perpetual tasks (`T101+`) use three-digit task display | UXR-014 Notes |
| RF4 | Compact trigger tokens (`E02S16T04`) follow same padding on write | UXR-014 Finding 2 |
| RF5 | `kanban-board-guide.md` documents write-default vs read-tolerance | UXR-014 R3, AC2 |
| RF6 | UKW, RW Step 7, intake agents emit padded form on new/edited references | UXR-014 R2, AC4 |
| RF7 | Full corpus normalization under `docs/project-management/kanban/` | User scope + AC3 |
| RF8 | Packaged framework templates aligned to padded examples | UXR-014 R4/R5 |
| RF9 | UXR-014 → `ACCEPTED` when AC1–AC4 satisfied | AC5 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Parsers continue accepting unpadded legacy input | UXR-014 R3 |
| RNF2 | Write path uses deterministic, idempotent formatter | UXR-014 |
| RNF3 | Normalization is mechanical; no semantic status changes | Task scope |
| RNF4 | FR-097 stamp rules preserved on hygiene-only passes | FR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** Write-default padded; read-tolerance for legacy; perpetual T101+ exception.
- **In scope:** Policy, guides, formatter, corpus sweep, agent rules, optional lint.
- **Out of scope:** Task file renames (UXR-011); blocking CI gate; version schema changes.

---

## 2. Specification

### 2.1 Goal

Establish and enforce two-digit zero-padded Epic, Story, and Task components as the canonical **write-default** for all inline `E#:S#:T#` notation across kanban documentation, boards, and agent guidance, while preserving parser read-tolerance for legacy unpadded forms.

### 2.2 Specification mapping

RF1–RF4 define the formatter contract. RF5–RF6 require policy and workflow surfacing. RF7–RF8 require corpus and template normalization. RF9 closes the UXR intake loop.

### 2.3 Constraints

- Do not mutate version strings (`v0.4.19.9+1`) or code-fenced blocks during normalization.
- `validate_version_bump.py` multi-pattern read tolerance unchanged.

### 2.4 Status transition intent

- **Current task status:** TODO → IN PROGRESS at implementation Step 1.
- **Transition trigger to COMPLETE:** All AC1–AC5 satisfied with test/lint evidence.
- **Atomic propagation:** Task doc and kboard row update in same session as status change.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | UXR-014 selected write-default + read-tolerance |
| T2 | Reversibility | N | Revertible doc/formatter PR |
| T3 | Blast radius | N | Kanban docs only; no adopter API |
| T4 | Precedent | N | Extends task-naming migration guide |
| T5 | Trade-off | N | No security/performance trade |
| T6 | Governance gate | N | Optional non-blocking lint only |
| T7 | Supersedes | N | Clarifies existing policy |

**Outcome:** `EXEMPT` — governing docs: kanban governance policy §Task Numbering + task-naming migration guide.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | Formatter + kanban doc tree |
| E2 | No new options | Y | Implements UXR-014 |
| E3 | Reversible | Y | Normal revert |
| E4 | Spec elsewhere | Y | IPP §2 + task AC |
| E5 | Documented NONE | Y | §5.3 |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Unit | `format_est_reference(2,1,4)` → `E02:S01:T04`; perpetual `(2,16,101)` → `E02:S16:T101` | RF1–RF3 |
| T2 | Unit | Compact `format_est_compact(2,16,4)` → `E02S16T04` | RF4 |
| T3 | Unit | Normalizer: `E2:S16:T4` → `E02:S16:T04`; idempotent on already padded | RF7 |
| T4 | Integration | `update_kanban_docs` uses padded task tokens | RF6 |
| T5 | Lint | Optional validator reports unpadded tokens; non-blocking | RNF1 |
| T6 | Structural | Post-sweep: no unpadded `<10` colon tokens in kanban tree | RF7 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** `TODO → IN PROGRESS`; update `Last updated` | Task doc |
| 2 | Add `est_format.py` + unit tests | T1–T3 green |
| 3 | Update kanban-governance-policy §Task Numbering | AC1 |
| 4 | Update kanban-board-guide E/S/T section | AC2 |
| 5 | Update task-naming-migration-guide examples | RF8 |
| 6 | Update `.cursorrules`, intake skill, workflow KB | AC4 |
| 7 | Wire formatter into `update_kanban_docs.py` | RF6 |
| 8 | Full corpus sweep `docs/project-management/kanban/**` | AC3 |
| 9 | Template sweep `packages/frameworks/kanban/templates/**` | RF8 |
| 10 | Add `validate_est_inline_format.py` (non-blocking) | UXR-014 R3 |
| 11 | UXR-014 → ACCEPTED; verify AC1–AC5 | RF9 |
| 12 | Run tests + validators | Evidence |
| **13** | **[MANDATORY]** Reconcile status → `COMPLETE` + `✅ COMPLETE (v{version})` if ACs met; `RW E4:S19:T09` | Closure |

### 4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/kanban/est_format.py`
- `packages/frameworks/workflow-mgt/scripts/kanban/test_est_format.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_est_inline_format.py`
- `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- `docs/project-management/kanban/kanban-board-guide.md`
- `docs/architecture/standards-and-adrs/task-naming-migration-guide.md`
- `.cursorrules`, `.cursor/skills/intake-process/SKILL.md`
- `docs/project-management/kanban/**` (corpus sweep)
- `packages/frameworks/kanban/templates/**`

### 4.2 Dependency order

1. Formatter before corpus sweep and script wiring.
2. Policy/guides before agent rules.
3. Acceptance and RW last.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `packages/frameworks/kanban/policies/kanban-governance-policy.md` | E/S/T write-default | RF1, AC1 |
| D-U2 | `docs/project-management/kanban/kanban-board-guide.md` | Notation section | AC2 |
| D-U3 | `docs/architecture/standards-and-adrs/task-naming-migration-guide.md` | Padded examples | RF8 |
| D-U4 | `.cursorrules` | Trigger examples | AC4 |
| D-U5 | `.cursor/skills/intake-process/SKILL.md` | Format examples | AC4 |
| D-U6 | `update_kanban_docs.py` | Formatter integration | RF6 |
| D-U7 | `docs/project-management/kanban/**` | Corpus normalization | AC3 |
| D-U8 | `packages/frameworks/kanban/templates/**` | Example callouts | RF8 |
| D-U9 | UXR-014 + T09 task docs | ACCEPTED + IPP link | RF9 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E4S19T9-*.md` | This IPP |
| D-C2 | `scripts/kanban/est_format.py` | Shared formatter |
| D-C3 | `validation/validate_est_inline_format.py` | Optional lint |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Blocking CI strict EST gate | NONE — follow-on FR per UXR-014 R3 |
| Task file renames | NONE — UXR-011 scope |
| Rituals policy duplicate | UPDATE if still authoritative; else NONE with pointer |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E4S19T9-two-digit-est-identifier-default-formatting.md` | NOT_APPLICABLE | evergreen | T09 Input/References |
| D-U1–D-U3 | Policy + architecture standards | PUBLISHED | evergreen | Task References |
| D-C2–D-C3 | Workflow scripts | NOT_APPLICABLE | evergreen | IPP §4 |

---

## 7. Success / verification criteria

- [ ] AC1: Governance policy states two-digit default for E, S, T with `<10` examples.
- [ ] AC2: Board guide documents write-default vs read-tolerance.
- [ ] AC3: Kanban corpus uses padded E/S/T for components `<10`.
- [ ] AC4: Agent/workflow guidance defaults to padded output.
- [ ] AC5: UXR-014 ACCEPTED; bidirectional links intact.
- [ ] `test_est_format.py` passes.
- [ ] Optional lint runs without blocking RW.

---

## References

- [Host task E4:S19:T09](../project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T09-two-digit-est-identifier-default-formatting-uxr014.md)
- [UXR-014](../project-management/kanban/fr-br/UXR-014-two-digit-est-identifier-default-formatting.md)
- [task-naming-migration-guide.md](../architecture/standards-and-adrs/task-naming-migration-guide.md)
- [kanban-governance-policy.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md)
