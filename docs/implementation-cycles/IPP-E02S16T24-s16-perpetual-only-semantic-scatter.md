---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T24 — S16 perpetual-only consolidation (semantic scatter IPP)

**Host task:** [`T24-s16-perpetual-only-consolidation-semantic-scatter.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T24-s16-perpetual-only-consolidation-semantic-scatter.md)  
**Status:** Published — execution authorized 2026-06-08  
**Upstream:** FR-088, operator directive (single perpetual story, semantic scatter)

---

## 1. Goal

Make **E02:S16** a **perpetual-only** story with lanes **T01–T06**, evacuate all finite delivery tasks to semantic homes, absorb stray perpetuals (E07:S01:T05, E08:S03:T15/T16), and lock forward filing policy.

**Invariants:** No changelog tag rewrites; every moved task retains `Historical Anchor:` on redirect stub.

---

## 2. Perpetual renumber map (S16 internal)

| New ID | Prior anchor | Lane |
| ------ | ------------ | ---- |
| **E02:S16:T01** | E02:S16:T03 | Workflow maintenance umbrella |
| **E02:S16:T02** | E02:S16:T04 | UKW / kanban hygiene (**UKW wiring anchor**) |
| **E02:S16:T03** | E02:S16:T05 + E07:S01:T05 | Markdown documentation maintenance |
| **E02:S16:T04** | E02:S16:T10 | Repository infrastructure maintenance |
| **E02:S16:T05** | E08:S03:T15 | GitHub Actions CI health |
| **E02:S16:T06** | E08:S03:T16 | GitHub Security & Code Quality health |

**T14 (FR-043):** Finite UKW capability → **E04:S14:T11** (not a perpetual lane). Gap-discovery **operational** scope folded into **E02:S16:T02** deliverable text.

---

## 3. Finite semantic scatter map

| Prior ID | New ID | Destination story | Rationale |
| -------- | ------ | ----------------- | --------- |
| E02:S16:T01 | **E02:S15:T09** | IPW Governance | FR-088 policy establishment |
| E02:S16:T02 | **E02:S15:T10** | IPW Governance | Perpetual inventory / classification |
| E02:S16:T06 | **E04:S14:T05** | Kanban Framework Maintenance | UKW `--rp` (FR-085) |
| E02:S16:T07 | **E04:S14:T06** | Kanban Framework Maintenance | UKW FBU temporal (FR-050) |
| E02:S16:T08 | **E02:S03:T07** | Additional Workflows | `/ukw` slash (FR-093) |
| E02:S16:T09 | **E02:S15:T11** | IPW Governance | `/ipw` slash (FR-094) |
| E02:S16:T11 | **E02:S15:T12** | IPW Governance | IPW doc phases (FR-096) |
| E02:S16:T12 | **E02:S15:T13** | IPW Governance | IPW ADR gate (FR-100) |
| E02:S16:T13 | **E04:S14:T07** | Kanban Framework Maintenance | BR-059 MoSCOW coverage |
| E02:S16:T14 | **E04:S14:T11** | Kanban Framework Maintenance | FR-043 gap discovery (finite, TODO) |
| E02:S16:T15 | **E02:S01:T26** | RW Agent Execution | Workflow cheatsheet (UXR-015) |
| E02:S16:T16 | **E04:S14:T08** | Kanban Framework Maintenance | UKW `-c` archive (FR-102) |
| E02:S16:T17 | **E02:S01:T27** | RW Agent Execution | AGENTS bootstrap (FR-103) |
| E02:S16:T18 | **E04:S14:T09** | Kanban Framework Maintenance | Lean active board (FR-109) |
| E02:S16:T19 | **E02:S01:T28** | RW Agent Execution | RW `--dpz` (UXR-022) |
| E02:S16:T20 | **E04:S14:T10** | Kanban Framework Maintenance | kboard IPP segment (UXR-023) |
| E02:S16:T21 | **E02:S01:T29** | RW Agent Execution | RW local-release / no push (UXR-024) |
| E02:S16:T22 | **E02:S03:T08** | Additional Workflows | IDW (FR-118/119) |
| E02:S16:T23 | **E08:S03:T18** | Automation Scripts | CQG → IDW Phase 6b (ADR-022) |

---

## 4. ACTIVE_FIX surfaces (post-migration)

| Surface class | Action |
| ------------- | ------ |
| `docs/kanban/**` (non-archive) | Rewrite implementing-task links; story checklists |
| `kboard.md` O-band | Perpetual rows T01–T06 only |
| `AGENTS.md`, `rw-config.yaml` | Open-work / wiring |
| `packages/frameworks/**` ACTIVE KB | UKW anchor E02:S16:T02 |
| `validate_version_bump.py` | Reject perpetual outside S16; deprecate override loophole for new filings |
| Changelog archive | **DEFER** — redirect stubs preserve forensic IDs |

---

## 5. Policy lock (S16)

- **In scope:** Perpetual maintenance lanes only (`Task Type: Perpetual Maintenance`).
- **Out of scope:** Finite delivery, FR/BR/UXR implementation, IPP planning tasks.
- **Filing rule:** New perpetual tasks → E02:S16 next `Txx`; finite work → owning epic/story.

---

## 6. Verification

- [ ] S16 checklist = T01–T06 perpetual + T24 meta only
- [ ] kboard O-band = 6 perpetual rows under E02:S16
- [ ] `pytest packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py`
- [ ] No `Perpetual Override Rationale` on active perpetual lanes
- [ ] FR-112 / FR-058 implementing tasks → S16 T05/T06 / T03
