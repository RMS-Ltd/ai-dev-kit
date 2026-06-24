---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T16 — SemVer public surface BUILD leak fix (BR-111)

**Task ID:** E03:S02:T16  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-24  
**Last updated:** 2026-06-24 (intake — SBL attempt 11 / #85)  
**Code:** E03S02T16

**Upstream:** [BR-111](../../../fbu/BR-111-semver-public-surface-build-metadata-leak.md)  
**Related:** [UXR-031](../../../fbu/UXR-031-semver-plusbuild-redundancy-in-task-touch.md) · [E03:S02:T15](T15-semver-external-build-metadata-redundancy-uxr031.md) · [ADR-031](../../../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

**Evidence:** [attempt-11 FB](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-dual-semver-build-leaks-into-public-semver-surface.md)

---

## Summary

Close the implementation gap between **ADR-031 Option A** (core-only external SemVer) and adopter-visible behaviour: README/CHANGELOG/RW summaries must not show `+BUILD`; coherence validation must enforce core, not `semver_full`.

---

## Scope

- `external_display_semver()` usage on README, CHANGELOG, RW templates
- `validate_release_coherence.py` compares core SemVer
- SAA export fields: distinguish `semver_core` vs `semver_full` for display vs trace

**Out of scope:** Changing internal `VERSION_BUILD` allocation semantics.

---

## Acceptance criteria

- [ ] **AC1:** SBL attempt 11 replay class: public surfaces show `0.0.5` not `0.0.5+2` when tag is `v0.0.5`.
- [ ] **AC2:** Coherence gate passes core-only README/CHANGELOG on task_touch adopters.
- [ ] **AC3:** pytest regression from attempt 11 fixture paths.

---

## Associated BR

[BR-111](../../../fbu/BR-111-semver-public-surface-build-metadata-leak.md)
