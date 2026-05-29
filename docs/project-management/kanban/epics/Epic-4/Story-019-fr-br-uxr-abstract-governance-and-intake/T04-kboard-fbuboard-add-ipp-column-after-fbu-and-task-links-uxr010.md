---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T21:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 4: kboard/fbuboard add `IPP` column after FBU and task links (UXR-010)

**Task ID:** E4:S19:T04  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-05-14  
**Code:** E4S19T04

**Upstream:** [UXR-010 - kboard/fbuboard add `IPP` column after FBU and task links](../../../fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)
**IPP:** [IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md](../../../../../implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md)

---

## Input

- [UXR-010](../../../fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) requirements.
- Current row formats in `kboard.md` and `fbuboard.md`.
- Existing planning artifact naming/placement conventions (`IPP-*` / legacy `IPW-*` where applicable).
- [IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md](../../../../../implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md)

---

## Problem statement

Board rows currently do not consistently expose planning artifact presence after FBU/task references. This reduces traceability and forces manual navigation to determine whether planning prerequisites exist.

---

## Deliverable

- Deterministic board row contract for `kboard.md` and `fbuboard.md`:
  - FBU link segment token: `BR/BR/UXR-xxx`
  - Task link segment token: `Exx:Sxx:Txx`
  - `IPP` segment token: `—IPP—` (link) or fallback `—No IPP—` (plain text)
- Compatibility handling for mixed legacy `IPW` and current `IPP` artifact naming where needed.
- Validation/update guidance to keep rows compliant over time.

---

## Scope

1. Define exact row-link ordering with `IPP` placement.
2. Define fallback behavior/token for no planning artifact (`—No IPP—`).
3. Specify token text contract for linked and non-linked segments (`BR/BR/UXR-xxx`, `Exx:Sxx:Txx`, `—IPP—` / `—No IPP—`).
4. Specify governance and automation touchpoints that must enforce the format.

---

## Acceptance criteria

- [x] **AC1:** `kboard.md` and `fbuboard.md` row format includes an `IPP` segment after FBU/task links.
- [x] **AC2:** Missing planning artifact renders as exact token `—No IPP—`.
- [x] **AC3:** FBU and task segments use exact linked token forms `BR/BR/UXR-xxx` and `Exx:Sxx:Txx`.
- [x] **AC4:** IPP present segment uses exact linked token form `—IPP—`.
- [x] **AC5:** Existing rows can be normalized without broken links.
- [x] **AC6:** Governance/workflow documentation identifies enforcement behavior.
- [x] **AC7:** UXR-010 and E4:S19:T04 are wired in Story 019 and active boards.

**✅ COMPLETE (v0.4.19.4+5)**

---

## References

- [UXR-010](../../../fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)
- [Story 019](../Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [kboard](../../../kboard.md)
- [fbuboard](../../../fbuboard.md)
- [IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md](../../../../../implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md)
