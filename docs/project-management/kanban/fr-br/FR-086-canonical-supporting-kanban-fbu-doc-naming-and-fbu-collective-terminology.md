---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T16:35:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-086: Canonical supporting Kanban/FBU doc naming and `FBU` collective terminology

**Type:** Feature Request (FR)  
**ID:** FR-086  
**Submitted:** 2026-04-20  
**Submitted By:** User feedback / terminology and naming standardization  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** OPEN

**Implementing Task:** [E4:S19:T06](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md)
**IPP:** [`IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md`](../../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)
**Historical implementing tasks:** [E4:S19:T02](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md)

---

## Summary

Extend the prior canonical `kboard.md` / `fbuboard.md` naming pattern to supporting Kanban and FBU documentation, and standardize collective references to FR/BR/UXR as `FBU` across docs.

**Caveat (required):** Individual issue documents must keep their native prefixes and identities (`FR-`, `BR-`, `UXR-`). `FBU` is only a collective shorthand term.

---

## Problem Statement

Canonical shorthand naming currently covers only primary boards, while supporting docs still use mixed long-form names and inconsistent collective wording (`FR/BR/UXR`, `FR-BR-UXR`, etc.). This increases typing and cognitive overhead and weakens naming consistency.

---

## Requirements

### Functional Requirements

- [ ] **FR-086-F1:** Define canonical shorthand naming pattern for supporting Kanban/FBU docs, including alias/back-compat policy.
- [ ] **FR-086-F2:** Apply `FBU` as the canonical collective term in docs where FR/BR/UXR are referenced as a group.
- [ ] **FR-086-F3:** Update cross-references and navigation links to canonical filenames while preserving compatibility aliases where required.
- [ ] **FR-086-F4:** Keep individual issue doc naming unchanged (`FR-*.md`, `BR-*.md`, `UXR-*.md`).
- [ ] **FR-086-F5:** Provide migration mapping and validation checks to prevent broken links and naming drift.

### Non-Functional Requirements

- [ ] **FR-086-NF1:** Terminology updates must be deterministic and repository-wide for targeted docs.
- [ ] **FR-086-NF2:** Changes must remain human-readable and maintain historical traceability.
- [ ] **FR-086-NF3:** Compatibility aliases must prevent installer/adopter breakage during migration window.

---

## Acceptance Criteria

- [ ] Canonical naming map for supporting Kanban/FBU docs is documented and applied.
- [ ] Collective references use `FBU` consistently in updated documentation scope.
- [ ] No individual FR/BR/UXR issue file is renamed away from its native prefix.
- [ ] Link validation passes for renamed/aliased docs.
- [ ] Boards/story/task/FR are fully cross-wired for traceability.

---

## Scope Analysis

**Problem Domain:** Documentation naming governance and terminology consistency  
**Affected Areas:**

- [x] Kanban/FBU documentation filenames and aliases
- [x] Cross-doc terminology (`FR/BR/UXR` collective references)
- [x] Navigation links and supporting docs
- [ ] Runtime workflow logic (out of scope for intake)

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Related

- [UXR-008](./UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [FR-051](./FR-051-fr-br-uxr-prioritization-board.md)
- [FR-085](./FR-085-ukw-optional-reprioritization-rp-flag.md)
