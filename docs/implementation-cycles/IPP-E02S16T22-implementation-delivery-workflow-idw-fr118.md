---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T22 — Planning: IDW workflow (FR-118)

**Host Task:** [`T22-implementation-delivery-workflow-idw-fr118.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T22-implementation-delivery-workflow-idw-fr118.md) **(E02:S16:T22)**  
**Planning for:** [FR-119 — Implementation Delivery Workflow (IDW)](../kanban/fbu/FR-119-implementation-delivery-workflow-idw.md)  
**Status:** Published

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | IDW command `.claude/commands/idw.md` | FR-118-F1 |
| RF2 | KB agent execution guide | FR-118-F2 |
| RF3 | Workflow registry + package | FR-118-F3 |
| RF4 | CLAUDE.md, .cursorrules, AGENTS.md, manifest routing | FR-118-F4 |
| RF5 | Cheatsheet §4b, sequences, `--rw` flag | FR-118-F5 |
| RF6 | IDW invocation = FR-083 authorization | FR-118-F6 |
| RF7 | `--rw` / `--push` / `--art` chain rules | FR-118-F7 |

**Out of scope:** Changing IPW plan-mode contract; auto-chaining from IPW; greenfield-install mirror (follow-on).

---

## 2. Specification

### 2.1 Goal

Name and wire **IDW** as the implementation workflow between IPW and RW, with opt-in **`--rw`** lowercase chain.

### 2.4 Status transition intent

- Step 1: `TODO → IN PROGRESS` at IDW start
- Final: reconcile to `COMPLETE` when AC1–AC5 satisfied

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — extends existing workflow trigger pattern (FR-094, FR-093); no new architectural policy class.

---

## 3. Test design

**`--skip-tests` justification:** Documentation and workflow routing only; verification is structural (file existence, link resolution, grep for triggers).

| ID | Check | Covers |
| -- | ----- | ------ |
| V1 | `.claude/commands/idw.md` exists | AC1 |
| V2 | `idw.md` mentions `--rw` lowercase | AC2 |
| V3 | `CLAUDE.md` IDW trigger section | AC4 |
| V4 | `.cursorrules` IDW trigger section | AC4 |
| V5 | Cheatsheet §4b IDW section | AC4 |
| V6 | `workflow-registry.yaml` lists IDW | AC3 |
| V7 | Host task ↔ IPP links | AC5 |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **[MANDATORY]** `TODO → IN PROGRESS`; update task `Last updated` |
| 2 | Author `idw.md`, KB guide, workflow package |
| 3 | Update routing: CLAUDE.md, .cursorrules, AGENTS.md, manifest |
| 4 | Update cheatsheet, IPW/SoP integration refs |
| 5 | File FR-118; wire task ↔ FR ↔ IPP; story checklist + kboard |
| 6 | Run V1–V7 verification |
| 7 | `RW E02:S16:T22 --art` (or `IDW … --rw`) |
| **8** | **[MANDATORY]** Reconcile status `COMPLETE` + forensic marker |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `.claude/commands/idw.md` | CREATE |
| D-C2 | `packages/.../implementation-delivery-workflow-agent-execution.md` | CREATE |
| D-C3 | `workflows/implementation-delivery-workflow/*` | CREATE |
| D-U1 | `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, manifest | UPDATE |
| D-U2 | `docs/guides/workflow-initiation-cheatsheet.md` | UPDATE |
| D-U3 | IPW guide, implementation-cycle-sop, registry | UPDATE |

---

## 6. Documentation housing

All paths per §5; PUBLISHED under repo canonical locations.

---

## 7. Success / verification criteria

- [x] V1–V7 pass (2026-06-08)
- [x] FR-118 AC1–AC5 satisfied (v0.2.16.22+1)
- [x] RW release on E02:S16:T22

---

## References

- [FR-118](../kanban/fbu/FR-119-implementation-delivery-workflow-idw.md)
- [FR-083](../kanban/fbu/FR-083-global-ipw-gated-implementation-contract.md)
