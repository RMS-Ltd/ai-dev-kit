---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 15: Install/setup interactive feedback external SemVer (FR-108)

**Task ID:** E06:S09:T15  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-04  
**Code:** E06S09T15

**Upstream:** [FR-108](../../../fr-br/FR-108-install-setup-interactive-feedback-external-semver-version.md)

---

## Task ID

**Full Task ID:** `E06:S09:T15`

---

## Scope

Implement [FR-108](../../../fr-br/FR-108-install-setup-interactive-feedback-external-semver-version.md): all install and setup **interactive user-facing feedback** must display the **external SemVer** of AI Dev Kit in use (the same outward-facing version shown in README and GitHub releases).

Covers CLI install/setup commands, framework installers, and greenfield orchestration entry points—not RW/UKW runtime workflows.

---

## Input

- [FR-108](../../../fr-br/FR-108-install-setup-interactive-feedback-external-semver-version.md) requirements and acceptance criteria
- Existing version sources: `src/fynd_deals/version.py`, `cli/__init__.py`, `semver_converter.py`
- Install event contract from FR-078 (align displayed SemVer with logged fields)

---

## Deliverable

- Shared helper or contract for resolving and formatting external SemVer for install/setup UX
- Updated interactive output across install entry points (banners, prompts, warnings, summaries)
- Tests asserting SemVer presence in output for pinned fixture versions
- Brief documentation note in install guides describing the version display contract

---

## Acceptance Criteria

- [ ] **AC1:** Every documented install entry point prints external SemVer at session start (FR-108 AC1).
- [ ] **AC2:** Automated test coverage per major entry point (FR-108 AC2).
- [ ] **AC3:** RW installer interactive sections show SemVer on headers and completion (FR-108 AC3).
- [ ] **AC4:** Kanban installer interactive path shows SemVer on equivalent banners (FR-108 AC4).
- [ ] **AC5:** Explicit fallback when SemVer cannot be resolved (FR-108 AC5).
- [ ] **AC6:** Displayed SemVer matches install event / feedback payload for the same run (FR-108 AC6).

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

**Related BR/FR Links:**

- [FR-108: Install/setup interactive feedback external SemVer](../../../fr-br/FR-108-install-setup-interactive-feedback-external-semver-version.md) — **Implements** — primary requirement source
- [FR-080: Greenfield installation process](../../../fr-br/FR-080-greenfield-installation-process.md) — **Related To** — greenfield entry points in scope
- [FR-078: Install event contract logging](../../../fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md) — **Complements** — align human-visible and logged SemVer
- [FR-079: Install feedback submission](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) — **Complements** — feedback UX should match install banners

**Related Stories:**

- [Story 009 — AI Dev Kit installation and adopter integration](../Story-009-ai-dev-kit-installation-and-adopter-integration.md)

---

## Version Anchor

**Version:** *(pending RW)*

---

## References

- [dev-kit-versioning-policy.md](../../../../../governance/standards/dev-kit-versioning-policy.md)
- [`semver_converter.py`](../../../../../../packages/frameworks/workflow%20mgt/scripts/version/semver_converter.py)
- [`install_release_workflow.py`](../../../../../../packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py)
- [`install_kanban_framework.py`](../../../../../../packages/frameworks/kanban/scripts/install_kanban_framework.py)
