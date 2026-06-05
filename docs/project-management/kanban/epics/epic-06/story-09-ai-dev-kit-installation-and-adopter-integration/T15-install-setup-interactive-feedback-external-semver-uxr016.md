---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 15: Install/setup interactive feedback external SemVer (UXR-016)

**Task ID:** E06:S09:T15  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-04  
**Last updated:** 2026-06-03 (v0.6.9.15+2 — UXR-016 reclassification docs; implementation v0.6.9.15+1)  
**Code:** E06S09T15

**Version Anchor:** v0.6.9.15+2

**Upstream:** [UXR-016](../../../fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md)

---

## Task ID

**Full Task ID:** `E06:S09:T15`

---

## Scope

Implement [UXR-016](../../../fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md): all install and setup **interactive user-facing feedback** must display the **external SemVer** of AI Dev Kit in use (the same outward-facing version shown in README and GitHub releases).

Covers CLI install/setup commands, framework installers, and greenfield orchestration entry points—not RW/UKW runtime workflows.

---

## Input

- [UXR-016](../../../fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md) research findings, recommendations, and acceptance criteria
- Existing version sources: `src/fynd_deals/version.py`, `cli/__init__.py`, `semver_converter.py`
- Install event contract from FR-078 (align displayed SemVer with logged fields)
- **IPW planning artifact:** [IPP-E6S9T15-install-setup-interactive-feedback-external-semver.md](../../../../../implementation-cycles/IPP-E06S09T15-install-setup-interactive-feedback-external-semver.md)

---

## Deliverable

- Shared helper or contract for resolving and formatting external SemVer for install/setup UX
- Updated interactive output across install entry points (banners, prompts, warnings, summaries)
- Tests asserting SemVer presence in output for pinned fixture versions
- Brief documentation note in install guides describing the version display contract

---

## Acceptance Criteria

- [x] **AC1:** Every documented install entry point prints external SemVer at session start (UXR-016 AC1).
- [x] **AC2:** Automated test coverage per major entry point (UXR-016 AC2).
- [x] **AC3:** RW installer interactive sections show SemVer on headers and completion (UXR-016 AC3).
- [x] **AC4:** Kanban installer interactive path shows SemVer on equivalent banners (UXR-016 AC4).
- [x] **AC5:** Explicit fallback when SemVer cannot be resolved (UXR-016 AC5).
- [x] **AC6:** Displayed SemVer matches install event / feedback payload for the same run (UXR-016 AC6).

---

## Approach

1. Add or reuse a small **install UX version resolver** (internal → SemVer via `semver_converter`, with CLI/package/release fallbacks).
2. Inject **session banner** at top of each install entry point before first prompt.
3. Prefix **section headers** and **error/warning** templates with compact SemVer label.
4. Wire the same resolved SemVer into install event context where FR-078 payloads are emitted.
5. Add snapshot or stdout assertion tests; update install docs with one paragraph on the contract.

---

## Dependencies

**Depends On:**

- None blocking (FR-078/FR-079 complete; complements existing telemetry)

**Blocks:**

- Clearer adopter support for install/setup issues tied to release tags

**Parallel Development Candidacy:** Safe — orthogonal to open BR installer fixes (T10–T14)

---

## Related Work

**Related BR/FR/UXR Links:**

- [UXR-016: Install/setup interactive feedback external SemVer](../../../fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md) — **Implements** — primary UXR source (reclassified from deleted FR-108)
- [FR-080: Greenfield installation process](../../../fr-br/FR-080-greenfield-installation-process.md) — **Related To** — greenfield entry points in scope
- [FR-078: Install event contract logging](../../../fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md) — **Complements** — align human-visible and logged SemVer
- [FR-079: Install feedback submission](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) — **Complements** — feedback UX should match install banners

**Related Stories:**

- [Story 009 — AI Dev Kit installation and adopter integration](../story-09-ai-dev-kit-installation-and-adopter-integration.md)

---

## Version Anchor

**Version:** v0.6.9.15+2 — ✅ COMPLETE (implementation v0.6.9.15+1; reclassification docs v0.6.9.15+2)

---

## References

- [UXR-016](../../../fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md)
- [IPP-E6S9T15 — Install/setup external SemVer display](../../../../../implementation-cycles/IPP-E06S09T15-install-setup-interactive-feedback-external-semver.md)
- [dev-kit-versioning-policy.md](../../../../../governance/standards/dev-kit-versioning-policy.md)
- [`semver_converter.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/version/semver_converter.py)
- [`install_release_workflow.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py)
- [`install_kanban_framework.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py)
