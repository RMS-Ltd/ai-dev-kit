---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E5:S01:T62 – GitHub Release Installation Experience

**Status:** TODO  
**Priority:** HIGH  
**Version Anchor:** v0.5.1.62+0 (abstract space)  
**Feature Request:** [FR-062 – GitHub Release Installation Experience](../../../fr-br/FR-062-github-release-installation-experience.md)

---

## Summary

Implement the GitHub-release installation workflow for AI Dev Kit frameworks so consumer projects (e.g., xoforge) can install via published release artifacts, capture install receipts, and feed verification data back to AI Dev Kit maintainers.

---

## Scope & Deliverables

1. **Release Packaging & Publishing**  
   - Produce `.tar.gz` + `.sha256` artifacts for workflow-mgmt 2.1.4, kanban 2.1.0 (plus any additional frameworks referenced in docs).  
   - Automate the build/publish pipeline (script or CI job) and document operator steps.

2. **Installer Enhancements**  
   - Ensure `packages/frameworks/workflow mgt/scripts/install_package_from_release.py` handles GitHub releases (download, hash verify, extraction, helpful errors).  
   - Add dry-run/verbose guidance and integrate install receipt generation hooks.

3. **Installation Receipt Artifact**  
   - Emit machine-readable receipt per install run (e.g., JSON) containing install_run_id, frameworks/versions, hashes, timestamps, validation status, and signed nonce.  
   - Define verification flow: how client AI agents submit the receipt (API, issue template, workflow callback) and how we validate authenticity.

4. **Documentation Updates**  
   - Update `INSTALL_IN_YOUR_PROJECT.md`, `framework-dependency-installation-guide.md`, and CLI references to position GitHub installs as primary method with troubleshooting + verification steps.  
   - Document the receipt artifact schema and reporting expectations.

5. **Validation Run (xoforge or equivalent)**  
   - Stand up clean consumer repo, execute GitHub install flow, run RW + Kanban installers, capture install logs + receipts, and submit feedback through defined channel.  
   - Publish validation notes (timings, issues, screenshots/log excerpts) for regression testing.

---

## Acceptance Criteria

- GitHub release artifacts exist (with hashes) for all documented framework versions.  
- `install_package_from_release.py` successfully installs workflow-mgmt + kanban via GitHub in a clean repo without manual intervention.  
- Install receipt artifacts are generated, signed/hardened, and submission workflow is documented + validated.  
- Documentation highlights GitHub install path, includes copy-paste commands, troubleshooting, and receipt guidance.  
- Validation evidence stored alongside this task demonstrates end-to-end success (including receipt ingestion).

---

## Wiring

- **Epic / Story:** Epic 5 → Story 1 (FR Repo)  
- **Task Code:** E5:S01:T62  
- **Feature Request:** FR-062  
- **Cross-links:** Add this task to Story checklist; reference FR-062 and upcoming implementation stories (release tooling, docs, validation).

---

## Next Steps

1. Intake owner assigns responsible agent(s) for packaging, installer, docs, and validation streams.  
2. Kick off packaging automation (script/CI) and publish initial artifacts.  
3. Implement receipt artifact + reporting flow.  
4. Update documentation + run validation install in xoforge.  
5. File follow-up implementation tasks under relevant epics (CLI, documentation, release operations) referencing this repository task.
