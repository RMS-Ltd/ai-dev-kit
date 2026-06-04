---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 20: Install/setup error code registry (FR-108)

**Task ID:** E06:S09:T20  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-04  
**Last updated:** 2026-06-04  
**Code:** E06S09T20

**Planning package:** [IPP-E06S09T20](../../../implementation-cycles/IPP-E06S09T20-install-setup-error-code-registry-fr108.md)

**Upstream:** [FR-108](../../../fr-br/FR-108-install-setup-error-code-registry-and-emission.md)

**Related:** [FR-078](../../../fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md) · [FR-079](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) · [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) · [UXR-016](../../../fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md) · [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)

---

## Summary

Implement a hierarchical **`ADK-*` install/setup error code registry**, emit codes from greenfield installers and orchestrators, extend install telemetry and feedback schemas, and publish troubleshooting documentation linkable from the book and alpha feedback channels.

---

## Input

- [IPP-E06S09T20](../../../implementation-cycles/IPP-E06S09T20-install-setup-error-code-registry-fr108.md)
- [FR-108](../../../fr-br/FR-108-install-setup-error-code-registry-and-emission.md) — requirements and taxonomy
- [ADR-016](../../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md)
- Alpha failure corpus: BR-082, BR-083, BR-086, BR-088 (seed sub-codes)
- Existing installers: `install_greenfield_path.py`, `install_release_workflow.py`, `install_kanban_framework.py`, `install_github_issue_signoff.py`, CLI install path

---

## Scope

### In scope

1. **Registry** — `install-error-codes.yaml` (or equivalent) with `registry_version`, processes `I01`–`I03`, seed sub-codes for known alpha failures.
2. **Emission** — shared helper to print `ADK-…` + human line; wire into greenfield install failure paths.
3. **Telemetry** — `adk_error_code` + `error_registry_version` on FR-078 install events and FR-079 feedback payloads.
4. **Docs** — extend troubleshooting guide + `INSTALL_IN_YOUR_PROJECT.md` “report this code” guidance; stable doc anchors for book appendix.
5. **Tests** — registry completeness; emitters only use registered codes.

### Out of scope (v1)

- `ADK-R*` RW runtime codes
- `adk doctor --explain` CLI (optional follow-up)
- Retroactive reassignment of closed BR titles (link only in registry `see_also`)

---

## Deliverables

- [x] Machine-readable error code registry (versioned)
- [x] Emitter helper module + integration in greenfield install scripts
- [x] Install event / feedback schema updates + tests
- [x] Adopter-facing troubleshooting section (generated or hand-maintained from registry)
- [x] GitHub issue / feedback template field for `ADK-*` code

---

## Acceptance Criteria

- [x] **AC1:** Registry includes `I01` (greenfield orchestrator), `I02` (kanban install), `I03` (RW install) with at least seed sub-codes documented in FR-108.
- [x] **AC2:** Failure paths in tests emit registered codes (fixture-driven per installer).
- [x] **AC3:** Install JSON failure events include `adk_error_code` and registry version.
- [x] **AC4:** Troubleshooting doc lists seed codes with remediation steps and BR cross-links.
- [x] **AC5:** FR-108 bidirectional links verified; FR status updated on RW delivery.

---

## Implementation gate

Per [FR-083](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md):

1. Run **IPW** for E06:S09:T20 → linked **IPP** under `docs/implementation-cycles/`.
2. Obtain explicit user authorization (`implement` or `RW E06:S09:T20`) before code changes.

---

## Associated Feature Request

**FR-108:** [Install/setup error code registry and emission contract](../../../fr-br/FR-108-install-setup-error-code-registry-and-emission.md)

---

## References

- [IPP-E06S09T20](../../../implementation-cycles/IPP-E06S09T20-install-setup-error-code-registry-fr108.md)
- [ADR-016](../../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md)

---

## Version Anchor

✅ COMPLETE (**v0.6.9.20+1** — RW E06:S09:T20)
