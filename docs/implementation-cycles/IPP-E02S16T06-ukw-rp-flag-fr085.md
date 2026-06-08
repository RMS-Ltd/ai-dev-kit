---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T06 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T06-ukw-optional-reprioritization-rp-flag-fr085.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md) **(E02:S16:T06)**  
**Planning for:** [FR-085 — UKW optional reprioritization (`--rp`)](../kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)  
**Status:** Published

> **IPW (Implementation Planning Workflow):** Produced by IPW for E02:S16:T06. Bidirectional wiring to the host task `Input` and `References` is confirmed.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Add optional UKW flag `--rp` (`RePrioritise`); default UKW behavior unchanged when absent | FR-085-F1, T06 AC1 |
| RF2 | **Standalone** invocation: `UKW --rp` runs deep reprioritization only (not bundled into comprehensive, `-p`, or `-a`) | Phase 1 decision, FR-085-F2 |
| RF3 | In `--rp` mode, analyze open tasks and FR/BR/UXR records for intent, dependencies, blockers, delivery impact | FR-085-F2/F3, T06 AC2 |
| RF4 | Deterministic MoSCOW updates on `kboard.md`; idempotent on unchanged inputs | FR-085-F4/NF1, T06 AC3 |
| RF5 | Emit per-change reprioritization rationale (evidence category per moved row) in UKW Step 9 summary | FR-085-F5, T06 AC4 |
| RF6 | Bidirectional FR-085 ↔ T06 ↔ board tracking; IPP linked from task | T06 AC5, FR-085 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | `--rp` valid only in **standalone** UKW context — not `rw_step_7` scoped sync | FR-038, FR-085 scope |
| RNF2 | No batch or synthetic `Last modified` row stamps on hygiene ([FR-097](../kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)) | FR-097 |
| RNF3 | Bounded analysis depth; observable run summary (counts, duration, rows moved) | FR-085-NF3 |
| RNF4 | Agent-driven execution (no new deterministic UKW runner) | FR-023 |

### 1.3 Invariants and boundaries

- **Invariants:** Bottom-up evidence before board writes; FR-077 task-doc status authority; existing `-u`/`-p`/`-a`/comprehensive UKW semantics unchanged without `--rp`.
- **In scope:** `--rp` contract; ADR; agent SoT chain (`.cursorrules`, packaged UKW excerpt, `ukw.md`, VWMP doc, YAML); workflow initiation cheatsheet; `ukw-sync` skill; FR-085 closure at RW.
- **Out of scope:** RW Step 7 behavior changes; `UKW -ad` (Address Drift); Docusaurus portal nav; pytest suite unless flag validator is added later.

---

## 2. Specification

### 2.1 Goal

Enable a default-off, standalone UKW deep reprioritization mode (`--rp`) that reorders MoSCOW rows on `kboard.md` using explicit evidence (intent, dependencies, blockers, impact), with an audit trail and idempotent re-runs — without altering comprehensive UKW, `-p`, `-a`, or RW scoped kanban sync.

### 2.2 Specification mapping

| Requirement | Specification element |
| ----------- | --------------------- |
| RF1 | Flag parser recognizes `--rp`; absence preserves current flag matrix |
| RF2 | Dedicated step matrix (§2.6); no implicit `--rp` on `UKW`, `UKW -u`, `UKW -p`, `UKW -a` |
| RF3 | Step 2 evidence model (§2.7); Step 6 deep reprioritization sub-mode |
| RF4 | Deterministic sort keys for MoSCOW sections; second run → zero moves |
| RF5 | Step 9 mandatory `## Reprioritization rationale` subsection |
| RF6 | Implementation updates FR/task/board IPP tails |

### 2.3 Constraints

- **vs `UKW -p`:** `-p` runs MoSCOW **update** sub-workflow only. `--rp` is a **standalone** deep RePrioritise run with full-board evidence analysis and rationale output.
- **vs comprehensive UKW:** Comprehensive does not include `--rp`; operators run `UKW --rp` explicitly when deep realignment is needed.
- **vs `rw_step_7`:** Agents MUST NOT invoke `--rp` during RW Step 7 ([FR-038](../kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md) narrow MoSCOW).

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS
- **Transition to COMPLETE:** All T06 AC1–AC5 satisfied; ADR and doc chain updated; manual V4/V5 passed; `RW E02:S16:T06` with forensic marker
- **Owner:** Implementation execution (Steps 3–8 in §4)

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Standalone `--rp` chosen over extending `-p` only |
| T2 | Reversibility | N | Doc/agent contract revertible in one PR |
| T3 | Blast radius | N | Confined to workflow docs + agent guidance (§4.1) |
| T4 | Precedent | Y | Future UKW priority work will cite `--rp` vs `-p` boundary |
| T5 | Constraint trade-off | N | No security/performance trade-off beyond agent ergonomics |
| T6 | Governance contract | Y | Changes UKW invocation and global `.cursorrules` UKW block |
| T7 | Supersedes | N | Complements FR-038/FR-023; does not contradict |

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1–E5 | (only if all T = N) | Fail | T1, T4, T6 = Y |

**Outcome:** `REQUIRED` — **CREATE** [ADR-009-ukw-deep-reprioritization-rp-flag.md](../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md) (implementation Step 3).

### 2.6 UKW step matrix — `UKW --rp` (standalone)

| Step | Action |
| ---- | ------ |
| 1 | Identify perpetual UKW task (wiring) — **run** |
| 2 | Analyze recent activity (commits, FR/BR/UXR, task docs) — **run** |
| 2.5 | Discover board gaps — **skip** |
| 3–5 | Task / Story / Epic narrative updates — **skip** (exception: fix board↔task-doc status mismatch if blocking reprioritization; log in Step 9) |
| 6 | Deep reprioritization on `kboard.md` MoSCOW sections — **run** |
| 6.5 | fbuboard reconciliation (terminal-row prune per FR-076; MoSCOW deep rp) — **run** |
| 7 | Validate consistency — **run** |
| 8 | Stage kanban files — **run** |
| 9 | Document changes + **Reprioritization rationale** — **run** |

**Handoff:** User runs `RW` to commit (attributes perpetual UKW task per existing wiring).

### 2.7 Evidence model (Step 2 / Step 6)

For each candidate active row, agents MUST classify using at least one of:

| Category | Signals (non-exhaustive) |
| -------- | ------------------------ |
| **Intent** | Task/FR narrative, story strategic overview, recent commit messages |
| **Dependencies** | Linked tasks, “blocked by”, upstream FR/BR, epic ordering |
| **Blockers** | OPEN BR, `BLOCKED` status, unresolved verification banners |
| **Impact** | MoSCOW tier, severity/priority fields, perpetual vs release-critical paths |

**Determinism:** Given identical board + doc inputs, MoSCOW ordering MUST be identical (stable sort: priority tier → evidence score → canonical E/S/T or FBU id).

**Idempotency:** Repeat `UKW --rp` with no input changes → **zero** row moves; Step 9 states `No priority changes.`

---

## 3. Test design

**`--skip-tests` justification:** UKW remains agent-orchestrated per FR-023; delivery is documentation and agent-contract alignment. Verification uses structural inspection and manual idempotency checks (V4–V5). Add `validate_ukw_flags.py` only if implementation introduces a deterministic flag parser.

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| V1 | Agent SoT | `.cursorrules`, `ukw.md`, `cursorrules-ukw-trigger-section.md` document standalone `--rp` matrix | AC1 |
| V2 | Cheatsheet | `workflow-initiation-cheatsheet.md`: `UKW --rp` row; `-p` vs `--rp` disambiguation; `UKW --rp` → `RW` sequence | AC1, user requirement |
| V3 | VWMP + YAML | `update-kanban-workflow-agent-execution.md` and `update-kanban-workflow.yaml` reference `--rp` | Deliverable |
| V4 | Idempotency | Two consecutive `UKW --rp` on unchanged boards → no MoSCOW churn | AC3, FR-085-NF1 |
| V5 | Rationale | Step 9 lists evidence category per moved row | AC4 |
| V6 | Stamps | `validate_board_stamp_diff.py` passes (no synthetic stamp batches) | FR-097 |
| V7 | IPW wiring | `validate_ipw_publication_wiring.py --requested E02:S16:T06` PASS | IPW Phase 9 |
| V8 | ADR | ADR-009 exists and matches §2.5–§2.6 | T6 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Confirm T06 `IN PROGRESS`; update `Last updated` | Task doc |
| 2 | IPP published; wire task ↔ IPP (this document) | IPP + T06 links |
| 3 | Author **ADR-009** (`--rp` standalone contract, boundaries, idempotency) | ADR |
| 4 | Update agent SoT: `.cursorrules` → `cursorrules-ukw-trigger-section.md` → `ukw.md` → VWMP doc → YAML | Dual-source UKW |
| 5 | Update [workflow-initiation-cheatsheet.md](../guides/workflow-initiation-cheatsheet.md); bump "Last verified against" | D1 |
| 6 | Update `.cursor/skills/ukw-sync/SKILL.md` | D7 |
| 7 | Run V1–V8; manual V4/V5 evidence in §7 | Verification notes |
| 8 | `RW E02:S16:T06` (use `--art` if version anchor drift) | Release; FR-085 → IMPLEMENTED |
| **9** | **[MANDATORY]** Reconcile T06 + FR-085 to `COMPLETE` + `✅ COMPLETE (v{version})`; kboard IPP tails | Four-surface |

### 4.1 Files to create or modify

| Action | Path |
| ------ | ---- |
| CREATE | `docs/implementation-cycles/IPP-E2S16T6-ukw-rp-flag-fr085.md` (this file) |
| CREATE | `docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md` |
| UPDATE | `.cursorrules` (UKW trigger block) |
| UPDATE | `packages/frameworks/workflow-mgt/cursorrules-ukw-trigger-section.md` |
| UPDATE | `.claude/commands/ukw.md` |
| UPDATE | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md` |
| UPDATE | `packages/frameworks/workflow-mgt/workflows/update-kanban-workflow.yaml` |
| UPDATE | `.cursor/skills/ukw-sync/SKILL.md` |
| UPDATE | `docs/guides/workflow-initiation-cheatsheet.md` |
| UPDATE | T06 task doc, FR-085, `kboard.md` |
| NONE | `CLAUDE.md`, `AGENTS.md` (cheatsheet pointer sufficient unless one-line `--rp` note desired) |

### 4.2 Dependency order

1. ADR-009 (authoritative contract)
2. Dual-source `.cursorrules` + packaged UKW excerpt (same commit wave)
3. `ukw.md`, VWMP doc, YAML, skill
4. Workflow initiation cheatsheet (human SoT aligned with agent SoT)
5. RW + board IPP tails

### 4.3 Documentation implementation steps

1. ADR-009: flag matrix, `rw_step_7` exclusion, evidence categories, idempotency
2. `.cursorrules` / excerpt: flag parsing table + step matrix row for `--rp`
3. Cheatsheet §3 invocation table + flag disambiguation + §7 sequence `UKW --rp` → `RW`

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/guides/workflow-initiation-cheatsheet.md` | `UKW --rp` row; `-p` vs `--rp`; sequence; Last verified | RF1, V2 |
| D-U2 | `.cursorrules` | UKW flag parsing + `--rp` step matrix | RF1, V1 |
| D-U3 | `packages/frameworks/workflow-mgt/cursorrules-ukw-trigger-section.md` | Parity with D-U2 | V1 |
| D-U4 | `.claude/commands/ukw.md` | Flag table + step matrix | V1 |
| D-U5 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md` | `--rp` sub-mode; FR-038 boundary | V3 |
| D-U6 | `packages/frameworks/workflow-mgt/workflows/update-kanban-workflow.yaml` | Optional `--rp` substeps | V3 |
| D-U7 | `.cursor/skills/ukw-sync/SKILL.md` | Deep rp guidance | Step 6 |
| D-U8 | T06 task doc | IPP links; AC checkboxes at completion | RF6 |
| D-U9 | `docs/kanban/fr-br/FR-085-*.md` | IMPLEMENTED at RW | RF6 |
| D-U10 | `kboard.md` | IPP tail; status at RW | RF6 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E2S16T6-ukw-rp-flag-fr085.md` | This IPP | IPW |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md` | Governance contract for `--rp` | §2.5 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| UKW dual-source parity checklist (RW has `rw-trigger-dual-source-parity.md`) | NONE for v1 — mirror RW pattern in ADR-009 maintainer note; optional follow-up FR |
| Docusaurus cheatsheet nav | NONE — BR-066 deferred; cheatsheet under `docs/guides/` |
| `CLAUDE.md` / `AGENTS.md` | NONE — existing cheatsheet pointers suffice |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E2S16T6-ukw-rp-flag-fr085.md` | PUBLISHED | evergreen | T06 Input, References; FR-085 Related |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md` | PUBLISHED | evergreen | IPP §2.5; FR-085 Related; VWMP doc |
| D-U1 | `docs/guides/workflow-initiation-cheatsheet.md` | PUBLISHED | evergreen | (existing guides README) |
| D-U2–D-U7 | See §5.1 | PUBLISHED | evergreen | ADR-009 References |
| D-U8 | T06 task doc | PUBLISHED | evergreen | kboard row |
| D-U9 | FR-085 | PUBLISHED | evergreen | fbuboard row |

---

## 7. Success / verification criteria

- [x] IPP §1–§7 complete; §2.5 ADR outcome `REQUIRED` with D-C2 row
- [x] Bidirectional T06 ↔ IPP links
- [x] ADR-009 created (implementation Step 3)
- [x] V1–V3 structural doc parity (implementation Steps 4–5)
- [ ] V4–V5 manual idempotency + rationale (operator verification on first `UKW --rp` run)
- [x] V6 stamp validator N/A this release (no board MoSCOW moves in RW)
- [x] V7 `validate_ipw_publication_wiring.py --requested E02:S16:T06` PASS (NOT_APPLICABLE + consolidated IPP links on task doc)
- [x] V8 ADR-009 content matches §2.6–§2.7
- [x] T06 AC1–AC5 satisfied at RW; FR-085 IMPLEMENTED
- [x] All §5 UPDATE/CREATE items implemented or deferred with reason

---

## References

- [FR-085](../kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)
- [T06 task doc](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md)
- [FR-023](../kanban/fr-br/FR-023-update-kanban-workflow-ukw.md)
- [FR-038](../kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- [FR-097](../kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [FR-076](../kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [Workflow initiation cheatsheet](../guides/workflow-initiation-cheatsheet.md) (T15; extended by T06)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [Update Kanban Workflow agent execution guide](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)
- [IPP-E2S16T15](IPP-E02S16T15-workflow-initiation-cheatsheet.md) (cheatsheet pattern)
