---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Two-digit default formatting for E/S/T identifiers

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-05-30  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** ACCEPTED  
**Last updated:** 2026-05-30 (E04:S19:T09 implementation — write-default rule shipped)  
**Code:** UXR-014  

**Implementing Task:** [E04:S19:T09](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T09-two-digit-est-identifier-default-formatting-uxr014.md)

**Related:** [UXR-005](UXR-005-kanban-board-formatting-and-governance.md) (board formatting), [UXR-011](UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md) (file naming hygiene), [UXR-010](UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) (`Exx:Sxx:Txx` row contract), [task-naming-migration-guide.md](../../architecture/standards-and-adrs/task-naming-migration-guide.md)

---

## Summary

Maintainers and agents should **always default to two-digit zero-padded Epic, Story, and Task components** in inline `E#:S#:T#` notation (e.g. `E02:S01:T04`, not `E02:S01:T04`). Single-digit unpadded forms reduce scan consistency, complicate regex/tooling, and contradict the canonical examples already present in templates and governance policy.

---

## Research Objective

**Primary question:** Should Epic, Story, and Task numeric components in human-facing and machine-parseable references use **mandatory two-digit zero padding** when values are less than 10?

**Secondary questions:**

1. Which surfaces currently mix padded and unpadded forms (`kboard.md`, task docs, agent rules, validators, commit messages)?
2. How does this relate to existing **Txx** file-naming policy (UXR-011) vs **inline** `E:S:T` display?
3. What parser/tolerance rules should remain for **legacy** references vs **new writes**?

---

## Methodology

**Research Method:** Heuristic audit of kanban boards, governance policy, templates, and validator regex patterns.  
**Participants:** User preference statement + maintainer documentation review.  
**Duration:** Single intake session (2026-05-30).  
**Artifacts reviewed:**

- `docs/kanban/kboard.md`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- `packages/frameworks/kanban/templates/*` (format callouts)
- `packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py` (E/S/T regex variants)

---

## Key Findings

### Finding 1: Policy intent exists but Epic/Story padding is implicit

- Governance and templates already describe **`Exx:Sxx:Txx`** with 2-digit task padding.
- Examples mix **`E01:S01:T01`** (Story/Task padded, Epic unpadded) and **`E02:S01:T01`** (all padded) across template files.
- **Task file naming** (Txx) was remediated under UXR-011; **inline notation** was not systematically normalized.

### Finding 2: Active boards show mixed inline forms (Severity: Medium)

| Pattern | Example | Issue |
| ------- | ------- | ----- |
| Unpadded epic | `E02:S16:T04` vs `E02:S16:T04` | Epic `<10` often drops leading zero |
| Unpadded story | `E02:S01:T09` (rare) vs `E02:S01:T09` | Story `<10` occasionally unpadded |
| Unpadded task | `E02:S16:T04` in board metadata | Task `<10` drops leading zero |
| Compact trigger tokens | `E02S16T04`, `RW E02S16T04` | RW/UKW parsers accept both; writers vary |

Concrete example: `kboard.md` metadata references **`E02:S16:T04`** (unpadded task) while MoSCOW rows use **`E02:S16:T04`** style elsewhere.

### Finding 3: Validators tolerate ambiguity — writers drift (Severity: Medium)

- `validate_version_bump.py` matches multiple E/S/T regex shapes (padded and unpadded).
- Tolerance aids backward compatibility but **does not nudge** agents or humans toward a single canonical display form.
- Agents copying from mixed corpus reproduce whichever variant appears first in context.

---

## User Pain Points

- **Scan friction:** `E02:S16:T04` and `E02:S16:T04` look like different anchors when skimming boards.
- **Copy-paste inconsistency:** Mixed forms propagate into new docs, FR/BR/UXR links, and RW trigger messages.
- **Tooling complexity:** Maintainers must maintain broader regex sets instead of one canonical shape.

---

## Recommendations

- [x] **R1 — Canonical display rule:** Define normative inline form **`E\{NN\}:S\{NN\}:T\{NN\}`** where each `\{NN\}` is **two digits, zero-padded** when the numeric value is `<10`. Values `≥10` use natural width (no truncation): `E12:S16:T57`.
- [x] **R2 — Write path default:** UKW, RW Step 7, intake agents, and board row templates **emit padded form by default** on all new/edited references.
- [x] **R3 — Read path tolerance:** Parsers and validators **continue accepting** unpadded legacy input; optional `--strict-est-format` (or lint) for CI/hygiene passes.
- [x] **R4 — Corpus normalization:** Scheduled hygiene pass on `kboard.md`, active task/story docs, and packaged templates (coordinate with UXR-005 spacing work where practical).
- [x] **R5 — Agent/rule surfacing:** Update `.cursorrules`, intake skill examples, and kanban-board-guide with explicit **“default to 02 not 2”** guidance.

**Priority order:**

1. R1 + R2 (policy + write defaults)  
2. R5 (agent visibility — prevents new drift)  
3. R4 (board/doc backfill)  
4. R3 (optional strict lint)

---

## Affected Areas

**Affected components:**

- [x] Documentation (`kboard.md`, kanban guides, templates)
- [x] User flows (intake, UKW, RW Step 7 board reconciliation)
- [x] Features (validators, board row grammar)
- [ ] UI components

**Specific surfaces:**

- MoSCOW row task tokens (`**E02:S16:T04**`)
- FBU `Implementing Task:` fields and fbuboard task link segments
- Story task checklists
- RW/UKW/IPW trigger examples in agent rules
- Packaged kanban framework templates under `packages/frameworks/kanban/`

---

## Acceptance criteria (implementation — E04:S19:T09)

- [x] **AC1:** Kanban governance policy states **two-digit default for E, S, and T** in inline notation, with examples for values `<10`.
- [x] **AC2:** `kanban-board-guide.md` (or equivalent) documents write-default vs read-tolerance.
- [x] **AC3:** Active `kboard.md` rows normalize Epic/Story/Task segments to two-digit form where numeric component `<10`.
- [x] **AC4:** Intake/UKW/RW agent guidance updated to **default padded output** (unpadded accepted on parse only).
- [x] **AC5:** UXR-014 ↔ E04:S19:T09 bidirectional links and story checklist entry present.

---

## Dependencies

**Blocks:**

- Optional strict EST-format validator lint (future FR if needed)

**Blocked by:**

- None (intake-only; may coordinate with UXR-005 template maintenance)

**Related work:**

- UXR-011 (file Txx naming — complementary, not duplicate)
- UXR-010 (`Exx:Sxx:Txx` row token contract)
- FR-072 Approach D doc sweep (optional batch normalization window)

---

## Intake Decision

**Intake status:** INTAKE  
**Intake date:** 2026-05-30  
**Intake by:** Agent (atomic intake)

**Decision flow results:**

- [x] Story match found: Epic 4, Story 19 → Task 09 (abstract kanban/FBU governance)

**Assigned to:**

- Epic: 4 — Kanban Framework  
- Story: 19 — FR/BR/UXR abstract governance and intake  
- Task: 09 — Two-digit E/S/T identifier default formatting (UXR-014)  
- Version: _pending RW_

**Kanban links:**

- Epic: [`epic-04.md`](../epics/epic-04/epic-04.md)
- Story: [`story-19-fr-br-uxr-abstract-governance-and-intake.md`](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md)
- Task: [`T09-two-digit-est-identifier-default-formatting-uxr014.md`](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T09-two-digit-est-identifier-default-formatting-uxr014.md)

---

## Notes

Perpetual tasks (**T101+**) retain three-digit task numbers; this UXR applies to **regular** task range **T01–T99** and to **Epic/Story** display components in inline notation. Epic numbers **≥10** (e.g. `E21`) do not require artificial padding beyond two digits.

---

## References

- [Kanban governance policy](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md)
- [Task naming migration guide](../../architecture/standards-and-adrs/task-naming-migration-guide.md)
- [Bidirectional wiring principle](../../governance/principles/bidirectional-wiring-principle.md)
