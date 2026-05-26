---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 4, Task 7: FR-099 Phase 4 — Rewire & verify

**Task ID:** E1:S04:T07  
**FR-099 phase:** **4**  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (v0.1.4.7+1 – Kanban documentation setup)
**Code:** E1S04T07

**Upstream:** [FR-099 — Spin off book epic to a private repository](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)  
**Planning package:** [IPP-E1S04-fr099-book-private-public-migration.md](../../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md) — **§4.5 Phase 4**  
**Depends on:** [E1:S04:T06 — Phase 3 public rebirth](T06-fr099-phase3-public-ai-dev-kit-rebirth.md)  
**Migration ADR:** [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

---

## Input

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [E1:S04:T06 — Phase 3](T06-fr099-phase3-public-ai-dev-kit-rebirth.md) (must be COMPLETE)
- New public `earlution/ai-dev-kit` remote URLs

## Deliverable

Rewired remotes, badges, install docs, CI; install smoke test with no Epic-24 contamination.

## Summary

**Phase 4:** Rewire remotes, badges, install docs, CI, and submodule URLs to the **new public** `earlution/ai-dev-kit`. Run install smoke test (no Epic-24 contamination). Capture evidence for [IPP Wave E](../../../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md) if applicable.

---

## Deliverables

1. Bulk URL / remote updates (`earlution/` → new public repo where required).
2. README badges, `INSTALL_IN_YOUR_PROJECT.md`, CI, GitHub Pages base URL aligned.
3. Greenfield/brownfield install smoke test (FR-080 / FR-082 coordination).
4. FR-099 closure evidence pack (optional UXR/FR from Wave E).

---

## Acceptance criteria (phase scope)

- [ ] **AC6:** Install smoke test passes without Epic-24 contamination on public repo.
- [ ] **AC7:** Remotes, badges, install URLs point at new public `earlution/ai-dev-kit`.

---

## FR-099 requirement mapping

| Requirement | Status |
|-------------|--------|
| FR-099-F6 | 📋 TODO |
| FR-099-NF2 | 📋 Verify post-rewire |

---

## Version Anchor

**Release marker (TODO):** `v0.1.4.7+1` — Kanban documentation setup (`RW -k`, `--art`). **Forensic on COMPLETE:** `✅ COMPLETE (v0.1.4.7+N)`.

## IPW gate

**Blocked until:** [E1:S04:T06](T06-fr099-phase3-public-ai-dev-kit-rebirth.md) COMPLETE + explicit execution authorization (`implement` or `RW E1:S04:T07`). IPP: [IPP-E1S04-fr099-book-private-public-migration.md](../../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md).

---

## References

- [IPP-E1S04-fr099-book-private-public-migration.md](../../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)
- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md)
- [FR-082](../../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md)
