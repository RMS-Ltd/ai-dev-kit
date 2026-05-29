---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T21:35:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: kboard/fbuboard IPP column after FBU and task links

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-04-20  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** RESOLVED  
**Code:** UXR-010  
**Resolved in:** v0.4.19.4+5 (SemVer: v0.4.777)  
**Last updated:** 2026-05-14  
**Implementing Task:** E4:S19:T04  
**Repository Task:** [E4:S19:T04](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md)
**IPP:** [IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md](../../../implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md)

---

## Summary

On `kboard.md` and `fbuboard.md`, after the FBU link and task link sequence, rows should include a pipe-delimited `IPP` segment with strict token forms:

- FBU token text: `BR/BR/UXR-xxx` (link)
- Task token text: `Exx:Sxx:Txx` (link)
- IPP token text: `—IPP—` (link) or `—No IPP—` (plain non-link text)

---

## Research Question

How should board row formatting and governance rules expose planning-traceability consistently by adding an `IPP` slot with deterministic fallback text when no planning artifact exists?

---

## Findings So Far

1. Current board rows link FBU and task references but do not consistently expose planning artifact presence/absence.
2. Operators need at-a-glance traceability to determine whether planning artifacts exist before implementation/release actions.
3. A deterministic fallback token is required to avoid ambiguity and ad-hoc formatting.

---

## Scope

- Define board row format contract for `kboard.md` and `fbuboard.md` with explicit `IPP` segment.
- Define exact fallback token and rendering rules when planning artifacts are missing (`—No IPP—`).
- Define link ordering conventions so `IPP` placement is stable after FBU and task links.
- Define validation expectations for row compliance.
- Define strict token text forms for FBU/task/IPP segments.

---

## Acceptance Criteria

- [x] Board row contract specifies `IPP` placement after FBU + task links for both boards.
- [x] Missing-planning behavior is standardized as `—No IPP—` (exact token).
- [x] FBU segment renders as link token `BR/BR/UXR-xxx`.
- [x] Task segment renders as link token `Exx:Sxx:Txx`.
- [x] IPP segment renders as link token `—IPP—` when present and plain text `—No IPP—` when absent.
- [x] Existing rows can be normalized without breaking links or semantic meaning.
- [x] Governance docs and/or workflow scripts identify authoritative formatting behavior.
- [x] UXR-010 and implementing task are wired bidirectionally and visible in active boards/story checklist.

---

## References

- [kboard](../kboard.md)
- [fbuboard](../fbuboard.md)
- [Story 019](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [Implementing task E4:S19:T04](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md)
- [IPP-E4S19T04](../../../implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md)
