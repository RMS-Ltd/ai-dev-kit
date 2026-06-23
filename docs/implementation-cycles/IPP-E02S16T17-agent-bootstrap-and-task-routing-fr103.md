---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T17 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T17-agent-bootstrap-and-task-routing-fr103.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md) **(E02:S16:T17)**  
**Planning for:** [FR-103 — Agent bootstrap and task routing](../kanban/fbu/FR-103-agent-bootstrap-and-task-routing.md)  
**Status:** Published (implementation complete **v0.2.16.17+1**)

> **IPW:** Produced for E02:S16:T17. Bidirectional wiring to task `Input` / `References` confirmed.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | ADR-012 registered; root draft stubbed | FR-103, T17 AC1 |
| RF2 | Root `AGENTS.md` ≤150 lines with bootstrap sections | ADR-012, T17 AC2 |
| RF3 | `project-agent-manifest.json` + `.schema.json` | FR-103, T17 AC3 |
| RF4 | `project-agent-index.md` | T17 AC4 |
| RF5 | ≥5 `taskRouting[]` rows | FR-103 |
| RF6 | ≥6 `protocol[]` rows with valid `sourcePath` | FR-103 |
| RF7 | `tracks[]`; stub `canon[]` / `openWork[]` | FR-103 |
| RF8 | `CLAUDE.md` + `.cursorrules` bootstrap pointers | FR-103 RF8 |
| RF9 | IPW gate discoverable from root `AGENTS.md` | FR-083, FR-103 RF9 |
| RF10 | Three cold-start simulations ≤5 files each | T17 AC5 |

### 1.3 Invariants and boundaries

- **In scope:** Layer 1–3 docs, ADR-012, IDE pointers, cold-start checklist
- **Out of scope:** Full `.cursorrules` rewrite, kanban→manifest generator, framework adopter template (v1)

---

## 2. Specification

### 2.1 Goal

Deterministic cold-start path: slim `AGENTS.md` → scan manifest → load only `loadFirst[]` before deep reads.

### 2.5 ADR necessity decision

| ID | Y/N | Evidence |
| -- | --- | -------- |
| T1 | Y | Alternatives documented in ADR-012 |
| T2 | Y | Multi-file revert surface |
| T3 | Y | Adopter pattern |
| T4 | Y | Canonical bootstrap precedent |
| T5 | Y | Token vs binding-rule trade-off |
| T6 | N | RW/IPW/UKW steps unchanged |
| T7 | N | No supersession |

**Outcome:** `REQUIRED` — [ADR-012](../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)

### 2.4 Status transition intent

- **Current:** IN PROGRESS (implementation)
- **COMPLETE:** All T17 AC + V1–V8 after `RW E02:S16:T17`

---

## 3. Test design

**`--skip-tests`:** Doc/JSON only; V1–V8 structural verification.

| ID | Check | Covers |
| -- | ----- | ------ |
| V1 | `wc -l AGENTS.md` ≤ 150 | AC2 |
| V2 | JSON parse + schema validate manifest | AC3 |
| V3 | All manifest paths exist on disk | AC3 |
| V4 | Counts ≥5 routes, ≥6 protocols | AC3 |
| V5 | Index documents bootstrap + validate | AC4 |
| V6 | CLAUDE + cursorrules bootstrap pointers | RF8 |
| V7 | Cold-start tables in §7 | AC5 |
| V8 | ADR-012 in governance README; root stub | AC1 |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T17 `TODO → IN PROGRESS` |
| 2 | IPP + ADR-012 + manifest stack + index |
| 3 | Rewrite `AGENTS.md`; update kanban `AGENTS.md` |
| 4 | Update `CLAUDE.md`, `.cursorrules` preamble |
| 5 | V1–V8 evidence in §7 |
| 6 | `RW E02:S16:T17` |
| **7** | T17 → `COMPLETE` + four-surface sync |

### 4.1 Files

- CREATE: ADR-012, manifest, schema, index, [`agent-cold-start-checklist.md`](../guides/agent-cold-start-checklist.md)
- UPDATE: root/kanban AGENTS, CLAUDE, cursorrules, governance README, T17, FR-103 (RW)

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `docs/architecture/standards-and-adrs/ADR-012-*.md` | CREATE |
| D2–D4 | manifest.json, schema, index | CREATE |
| D5 | `AGENTS.md` | UPDATE |
| D6 | `docs/kanban/AGENTS.md` | UPDATE |
| D7 | `CLAUDE.md`, `.cursorrules` | UPDATE |
| D8 | `docs/governance/README.md` | UPDATE |

---

## 6. Documentation housing

| Path | Publication |
| ---- | ----------- |
| ADR-012 | PUBLISHED (governance index) |
| manifest + schema + index | NOT_APPLICABLE (agent contract) |
| `docs/guides/agent-cold-start-checklist.md` | PUBLISHED |

---

## 7. Success / verification criteria

### Cold-start simulations (V7)

| Prompt | Track | Files loaded (≤5) | `loadFirst` used |
| ------ | ----- | ----------------- | ---------------- |
| `RW E02:S16:T17` | workflows | AGENTS.md, manifest (scan), cheatsheet, `.claude/commands/rw.md`, task T17 | workflows |
| `File FR-103 intake` | kanban-intake | AGENTS.md, manifest, kboard.md, FR_BR_INTAKE_GUIDE.md, FR-103 | kanban-intake |
| `ADR governance policy` | governance | AGENTS.md, manifest, docs/governance/README.md, ADR-012 (if needed), dev-kit-versioning-policy | governance |

### Verification log (implementation)

| ID | Result | Notes |
| -- | ------ | ----- |
| V1 | PASS | `AGENTS.md` = 84 lines (≤150) |
| V2 | PASS | `json.tool` + jsonschema validate |
| V3 | PASS | `scripts/validate-project-agent-manifest-paths.py` |
| V4 | PASS | 6 taskRouting, 7 protocol |
| V5 | PASS | `docs/project-agent-index.md` |
| V6 | PASS | CLAUDE.md + `.cursorrules` bootstrap preamble |
| V7 | PASS | `docs/guides/agent-cold-start-checklist.md` |
| V8 | PASS | ADR-012 in governance README; root ADR stub |

---

## References

- [FR-103](../kanban/fbu/FR-103-agent-bootstrap-and-task-routing.md)
- [ADR-012](../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)
- [T17](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
