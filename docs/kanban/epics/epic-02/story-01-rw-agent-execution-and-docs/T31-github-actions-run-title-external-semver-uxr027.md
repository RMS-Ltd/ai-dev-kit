---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T31 — GitHub Actions run title external SemVer (UXR-027)

**Task ID:** E02:S01:T31  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Small  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10  
**Version Anchor:** v0.2.1.31+1  
**Code:** E02S01T31  

**Upstream:** [UXR-027 — GitHub Actions run titles show external SemVer](../../../fbu/UXR-027-github-actions-run-title-external-semver.md)

---

## Input

- [UXR-027](../../../fbu/UXR-027-github-actions-run-title-external-semver.md) findings and recommendations (R1–R4)
- [IPP-E02S01T31](../../../../implementation-cycles/IPP-E02S01T31-github-actions-run-title-external-semver.md)
- [UXR-016](../../../fbu/UXR-016-install-setup-interactive-feedback-external-semver-version.md) — precedent for outward SemVer
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`

---

## Problem statement

RW release commits use internal version in the subject line. GitHub Actions displays that subject as the workflow run title, so the Actions list shows `Release v0.6.9.27+2: …` instead of outward SemVer (`Release v0.4.1133+2: …` in task_touch mode).

---

## Deliverable

1. **RW Step 10:** Commit subject `Release v{semver}: {summary}`; body includes `Internal: v{internal}` (or equivalent) plus existing E/S/T footer.
2. **Docs parity:** `.cursorrules`, `cursorrules-rw-trigger-section.md`, `.claude/commands/rw.md`, `release-workflow-agent-execution.md`, commit-message guidelines.
3. **Verification:** Push or inspect a release commit; confirm Actions run title matches SemVer; internal version recoverable from body/tags/changelog.

**Optional (R3):** Shared `run-name: ${{ github.event.head_commit.message }}` on push workflows — only if needed for consistency on non-RW commits.

---

## Acceptance criteria

- [x] **AC1:** Post-RW release push, workflow run title prefix uses external SemVer.
- [x] **AC2:** Internal version present in commit body / tags / changelog archive.
- [x] **AC3:** Portable RW docs and dual-source parity updated.
- [x] **AC4:** No regression in version bump, tag authority, or release coherence validators.

---

## Associated FR/BR/UXR

- [UXR-027 — GitHub Actions run title external SemVer](../../../fbu/UXR-027-github-actions-run-title-external-semver.md) — **Implements**
- [UXR-016 — Install/setup external SemVer](../../../fbu/UXR-016-install-setup-interactive-feedback-external-semver-version.md) — precedent

---

## Planning

**IPP:** [IPP-E02S01T31 — GitHub Actions run title external SemVer](../../../../implementation-cycles/IPP-E02S01T31-github-actions-run-title-external-semver.md)

---

## References

- [UXR-027](../../../fbu/UXR-027-github-actions-run-title-external-semver.md)
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`
- [E02:S16:T05 — GitHub Actions CI health (Perpetual)](../story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md)
