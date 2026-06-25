---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T16 — SemVer public surface BUILD leak fix (BR-111)

**Task ID:** E03:S02:T16  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-24  
**Last updated:** 2026-06-25 (✅ COMPLETE v0.3.2.16+1)  
**Code:** E03S02T16  
**Version Anchor:** v0.3.2.16+1

**Upstream:** [BR-111](../../../fbu/BR-111-semver-public-surface-build-metadata-leak.md)  
**Related:** [UXR-031](../../../fbu/UXR-031-semver-plusbuild-redundancy-in-task-touch.md) · [E03:S02:T15](T15-semver-external-build-metadata-redundancy-uxr031.md) · [ADR-031](../../../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

**Input:** [IPP-E03S02T16-semver-public-surface-build-leak-br111.md](../../../../implementation-cycles/IPP-E03S02T16-semver-public-surface-build-leak-br111.md)

**References:** [IPP-E03S02T16-semver-public-surface-build-leak-br111.md](../../../../implementation-cycles/IPP-E03S02T16-semver-public-surface-build-leak-br111.md)

**Evidence:** [attempt-11 FB](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-dual-semver-build-leaks-into-public-semver-surface.md)

---

## Summary

Close the implementation gap between **ADR-031 Option A** (core-only external SemVer) and adopter-visible behaviour: README/CHANGELOG/RW summaries must not show `+BUILD`; coherence validation must enforce core, not `semver_full`.

---

## Deliverable

- Coherence validator rejects `+BUILD` on public SemVer lines; compares against `semver_core`.
- `finalize_rw_semver_registry` JSON emits `semver_core` / `semver_display`.
- SBL attempt-11 regression pytest coverage.
- [IPP-E03S02T16](../../../../implementation-cycles/IPP-E03S02T16-semver-public-surface-build-leak-br111.md)

---

## Scope

- `external_display_semver()` usage on README, CHANGELOG, RW templates
- `validate_release_coherence.py` compares core SemVer
- SAA export fields: distinguish `semver_core` vs `semver_full` for display vs trace

**Out of scope:** Changing internal `VERSION_BUILD` allocation semantics.

---

## Acceptance criteria

- [x] **AC1:** SBL attempt 11 replay class: public surfaces show `0.0.5` not `0.0.5+2` when tag is `v0.0.5`.
- [x] **AC2:** Coherence gate passes core-only README/CHANGELOG on task_touch adopters.
- [x] **AC3:** pytest regression from attempt 11 fixture paths.

---

## Associated BR

[BR-111](../../../fbu/BR-111-semver-public-surface-build-metadata-leak.md)
