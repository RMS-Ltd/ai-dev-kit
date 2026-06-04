---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 2, Task 14: Dependency tracking in adopting projects (FR-003)

**Task ID:** E01:S02:T14  
**Status:** COMPLETE  
**Priority:** LOW  
**Created:** 2026-05-29  
**Last updated:** 2026-06-04 (✅ COMPLETE v0.1.2.14+1 — RW E01:S02:T14)  
**Code:** E01S02T14  
**Version Anchor:** v0.1.2.14+1

**Upstream:** [FR-003 — Dependency tracking in adopting projects](../../../fr-br/FR-003-dependency-tracking-in-adopting-projects.md)  
**Historical registry:** E05:S01:T03 (abstract FR registry slot)

Publication Status: NOT_APPLICABLE

---

## Scope

Adopter-facing documentation and copy-paste templates for host-project tracking of external README/doc/style upstreams (FR-003). Out of scope: ai-dev-kit framework package updates (CLI guides) and maintained upstream bots in this repo.

---

## Input

- [IPP-E01S02T14 — Adopter external dependency tracking](../../../../implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md)

---

## Deliverable

Document and provide copy-paste templates for **dependency tracking** patterns so adopting projects track external README/doc/style resources (Best-README-Template, Keep a Changelog, Shields.io) directly—not via ai-dev-kit as middleman.

**Shipped artifacts:**
- [`adopter-external-resource-dependency-tracking.md`](../../../../documentation/user-docs/adopter-external-resource-dependency-tracking.md)
- [`examples/adopter-upstream-register.md`](../../../../documentation/user-docs/examples/adopter-upstream-register.md)
- [`examples/adopter-upstream-check.yml`](../../../../documentation/user-docs/examples/adopter-upstream-check.yml)
- [`examples/adopter-upstream-check.sh`](../../../../documentation/user-docs/examples/adopter-upstream-check.sh)

---

## Acceptance criteria

- [x] **AC1:** Adopter-facing doc covers dependency tracking approach (canonical guide + INSTALL index).
- [x] **AC2:** **FR-003** **Implementing Task** → **E01:S02:T14** (bidirectional).
- [x] **AC3:** Linked from package architecture story checklist.
- [x] **Release:** Forensic version + four-surface board sync — **v0.1.2.14+1** (RW E01:S02:T14).

## Verification (IPP §7)

- [x] V1 — Links: guide, INSTALL, FR-003, task, IPP
- [x] V2 — Framework vs external dependency boundary in guide
- [x] V3 — Examples marked copy-to-host-repo
- [x] V5 — `adopter-upstream-check.sh --help` exits 0

---

## References

- [FR-003](../../../fr-br/FR-003-dependency-tracking-in-adopting-projects.md)
- [IPP-E01S02T14](../../../../implementation-cycles/IPP-E01S02T14-adopter-external-dependency-tracking.md)
- [FR-002 / T13](T13-readme-template-best-readme-fr002.md) (related README template — separate task)
