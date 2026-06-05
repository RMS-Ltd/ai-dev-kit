---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: kboard IPP segment regression

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-05  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** RESOLVED (**v0.2.16.20+3** doc link hygiene)  
**Code:** UXR-023  
**Intake release:** v0.2.16.20+1 (SemVer: v0.4.977+1)  

**Implementing Task:** [E02:S16:T20](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T20-restore-kboard-ipp-segment-uxr023.md)

**Related:** [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) (original IPP segment contract — RESOLVED), [FR-090](FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md) (canonical row transform), [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) (four-surface reconciliation), [KANBAN_BOARD_TEMPLATE](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md) (Verification band example includes `—No IPP—`)

---

## Summary

Active `kboard.md` MoSCOW rows no longer include the pipe-delimited **IPP** segment that [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) established. Rows jump from FBU/task links directly to `Last modified:` without `—IPP—` (linked) or `—No IPP—` (plain fallback). Operators lose at-a-glance planning-traceability on the sole active board ([ADR-018](../../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)).

---

## Research Objective

**Primary question:** Why did the UXR-010 IPP segment disappear from live `kboard.md` rows, and what contract + workflow hardening restores it durably?

**Secondary questions:**

1. Which workflow path last wrote rows without IPP (UKW, RW Step 7, manual intake, lean-board prune)?
2. Do row-transform scripts / validators still encode the UXR-010 segment contract?
3. Should regression be blocked by an existing validator (e.g. board row grammar) or a new Gate?

---

## Methodology

**Research Method:** Maintainer spot-check of live `kboard.md` against UXR-010 acceptance criteria and `KANBAN_BOARD_TEMPLATE.md` Verification-band example.  
**Participants:** User (maintainer) + agent-assisted corpus comparison.  
**Duration:** Single intake session (2026-06-05).  
**Artifacts reviewed:**

- Live [`kboard.md`](../kboard.md) — all active bands (V, C, O)
- [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) + [IPP-E4S19T04](../../../implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md)
- [`packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md)
- Historical four-surface evidence ([`fr092-wave4-corpus-sweep-evidence.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/four-surface-reports/fr092-wave4-corpus-sweep-evidence.md)) showing IPP segments were present post–FR-092 Wave 4

---

## Key Findings

### Finding 1: Live board rows omit IPP segment entirely (Severity: High)

**Observed (2026-06-05):** Representative active rows end with FBU/task links then `Last modified:` — no `—IPP—` or `—No IPP—` token.

| Band | Example row tail (abbrev.) | IPP present? |
| ---- | -------------------------- | ------------ |
| V | `… \| [Task](…) \| [BR-099](…) \| Last modified: …` | No |
| C | `… \| [Task](…) \| [UXR-022](…) \| Last modified: …` | No |
| O | `… \| [Task](…) \| [Story](…) \| Last modified: …` | No |

**Expected (UXR-010):** `… \| [Task](…) \| [FBU](…) \| —No IPP— \| Last modified: …` or `… \| [—IPP—](ipp-path) \| Last modified: …`

### Finding 2: Contract still documented; live corpus drifted (Severity: Medium)

- UXR-010 status is **RESOLVED**; template and historical sweep evidence show IPP segments were applied.
- Regression is **corpus drift**, not an explicit contract repeal — operators reasonably expect UXR-010 behavior to persist.

### Finding 3: Root cause likely workflow emission gap (Severity: Medium — confirm in implementation)

Hypothesis (to verify in T20): recent UKW / RW Step 7 / intake row writes used a simplified tail format (task + FBU + stamp only) and no validator blocks missing IPP on `kboard.md`.

---

## Recommendations

| ID | Recommendation | Priority |
| -- | -------------- | -------- |
| R1 | **Corpus restore:** Re-attach IPP segment to every active `kboard.md` row per UXR-010 (`—IPP—` link when task doc lists IPP; else `—No IPP—`). | HIGH |
| R2 | **Workflow hardening:** Ensure UKW Step 6 and RW Step 7 row emission includes IPP segment (reuse FR-090 transform / UXR-010 resolver if present). | HIGH |
| R3 | **Validator:** Extend or add strict check on `kboard.md` rows — missing IPP segment is blocking (align with UXR-010 AC). | HIGH |
| R4 | **Template parity:** Confirm `KANBAN_BOARD_TEMPLATE.md`, `kanban-board-guide.md`, and intake skill examples show IPP segment in all wired row examples. | MEDIUM |
| R5 | **Intake default:** New intake board rows MUST include IPP segment at filing time (`—No IPP—` until IPW produces IPP). | MEDIUM |

---

## Acceptance Criteria (UXR-023)

- [x] Every active `kboard.md` MoSCOW row includes IPP segment after FBU/task links and before `Last modified:`.
- [x] Rows with linked planning artifact use `—IPP—` link token; rows without use exact plain token `—No IPP—`.
- [x] UKW and RW Step 7 re-emit IPP segment on row create/update (no manual-only dependency).
- [x] Validator fails `--strict` when any active row lacks IPP segment.
- [x] UXR-023 ↔ T20 bidirectional links; story checklist and board row wired.

---

## References

- [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)
- [E04:S19:T04](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md)
- [kboard.md](../kboard.md)
- [FR-090](FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)
