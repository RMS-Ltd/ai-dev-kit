---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: GitHub Release Installation Experience

**Type:** Feature Request (FR)  
**ID:** FR-062  
**Submitted:** 2026-03-18  
**Submitted By:** AI Assistant (per user directive)  
**Priority:** HIGH  
**Status:** PROPOSED

**Implementing Task:** [E5:S01:T62](../epics/Epic-5/Story-001-fr-repo/T62-github-release-installation-experience.md)

---

## Summary

Deliver a first-class installation experience for consumer projects (e.g., xoforge) that install AI Dev Kit frameworks **directly from GitHub Releases**. This includes publishing signed release artifacts for each framework, ensuring the `install_package_from_release.py` workflow succeeds end-to-end, documenting the GitHub install path, emitting a verifiable install receipt artifact, and validating the experience from a clean adopter repository.

---

## Problem Statement

- Customers expect the most common use case to be: clone their own repo → download packaged frameworks from GitHub Releases → run the standard installers.
- Today, release artifacts (e.g., `workflow-mgmt-v2.1.4.tar.gz`) are **missing** from GitHub, so the documented install command fails with 404 errors.
- Because artifacts are absent, we can’t validate the actual user experience (download, hash verification, logging, installer hand-off) from a consumer repo like xoforge.
- Documentation references a GitHub-release workflow that doesn’t exist yet, eroding trust and blocking external adopters from following the recommended path.

We need an FR that encapsulates the work to publish the artifacts, wire automation, update documentation, and verify the installation UX via GitHub.

---

## Goals / Responsibilities

1. **Publish Release Artifacts**  
   - Build framework tarballs + SHA256 files for every supported version (starting with `workflow-mgmt 2.1.4`, `kanban 2.1.0`).  
   - Upload to GitHub Releases using deterministic tag naming (`<framework>-v<version>`).  
   - Automate the packaging pipeline so future releases are push-button.

2. **Enable GitHub Installer Workflow**  
   - Ensure `install_package_from_release.py` gracefully handles GitHub releases (download, hash verify, verbose logging).  
   - Provide dry-run/verbose UX guidance for adopters.

3. **Documentation + Messaging**  
   - Update `INSTALL_IN_YOUR_PROJECT.md`, `framework-dependency-installation-guide.md`, and CLI references to highlight GitHub install as the default path.  
   - Include troubleshooting guidance when releases are unavailable.

4. **End-to-End Validation**  
   - Stand up a clean consumer repo (e.g., xoforge) and perform the full GitHub install flow.  
   - Capture install logs under `logs/ai-dev-kit/install/` to demonstrate FR-047 integration.  
   - Record findings, timing, and issues for regression tests.

5. **Install Receipt & Feedback Loop**  
   - Generate a structured “installation receipt” artifact per run (e.g., JSON under `logs/ai-dev-kit/install/receipt.json`) that records frameworks, versions, hashes, timestamps, validation outcomes, and a signed nonce.  
   - Define how consumer AI agents surface that receipt back to us (API, issue template, or workflow callback) so we can verify the install and gather telemetry.

---

## Functional Requirements

- **FR-062-F1:** Each framework version referenced in documentation must have matching release assets (`.tar.gz` + `.tar.gz.sha256`) under `https://github.com/earlution/ai-dev-kit/releases/tag/<framework>-v<version>`.
- **FR-062-F2:** `install_package_from_release.py <framework> <version> --repo earlution/ai-dev-kit` must download, verify, extract, and place the framework under the target install directory without manual intervention.
- **FR-062-F3:** The installer must emit clear progress + error messages (including guidance when an asset is missing).
- **FR-062-F4:** Documentation must provide copy-pastable commands for GitHub installs, explain prerequisites (git repo, Python), and link to troubleshooting steps.
- **FR-062-F5:** A validation report (or automated test) must demonstrate that a clean consumer project can install workflow-mgmt + kanban via GitHub releases, run the RW/Kanban installers, and produce install logs.
- **FR-062-F6:** Each install must emit a machine-readable receipt artifact that includes an install_run_id, frameworks/versions, hashes, timestamps, validation status, and a verifiable signature or hash; consumer AI agents must be able to transmit this receipt back to us for verification.

---

## Non-Functional Requirements

- **FR-062-NF1:** Release artifacts must be signed/hashed with SHA256 to prevent tampering; hashes must be published alongside tarballs.  
- **FR-062-NF2:** Packaging + publishing should be automated (CI/CD or script) to reduce human error and ensure repeatability.  
- **FR-062-NF3:** Download + install logs must integrate with FR-047 (install logging) so consumer projects have a forensic trail.  
- **FR-062-NF4:** Documentation updates must follow Documentation Agent standards (consistent formatting, cross-references, version accuracy).  
- **FR-062-NF5:** Receipt artifacts must be tamper-evident (signed or hashed) and safe to share externally without leaking secrets; verification endpoints must rate-limit and authenticate submissions.

---

## Scope Analysis

**Problem Domain:** Framework distribution + consumer installation UX  
**Affected Areas:**

- Release packaging scripts / CI  
- CLI installer (`install_package_from_release.py`)  
- Documentation (installation guides, README quick answers)  
- Validation scripts / smoke tests  
- Release workflow governance

**Estimated Complexity:** Medium (requires coordination between release tooling, documentation, and validation).

---

## Use Cases

### Primary Use Case – New Consumer Project (xoforge)

1. Developer clones xoforge repo.  
2. Runs GitHub install commands for workflow-mgmt + kanban using the release script.  
3. Installers fetch tarballs, verify hashes, extract frameworks.  
4. Developer runs `install_release_workflow.py` and `install_kanban_framework.py` locally.  
5. RW works on an epic branch; Kanban epics are contextualized; install logs captured for both CLI + frameworks.

### Secondary Use Cases

- CI automation installs frameworks from GitHub as part of nightly builds.  
- Support reproduces customer issues by replaying the exact release artifact.  
- Documentation references a reliable, externally consumable install path.

---

## Acceptance Criteria

1. **AC-1:** GitHub Releases contain downloadable artifacts + hashes for each framework version advertised.  
2. **AC-2:** Running the documented install command in a clean consumer repo succeeds without manual tweaks.  
3. **AC-3:** `INSTALL_IN_YOUR_PROJECT.md` and the installation guide prominently document the GitHub method, including troubleshooting + verification steps.  
4. **AC-4:** Install logs under `logs/ai-dev-kit/install/` show the full GitHub install flow (download → verify → extract → installer hand-off).  
5. **AC-5:** Validation evidence (write-up or automated test) lives beside the FR proving the workflow was executed in xoforge (or equivalent) and is repeatable.  
6. **AC-6:** Release workflow checklist references this FR to ensure future framework versions publish release assets before documentation is updated.  
7. **AC-7:** Installation receipts are generated, signed, and successfully ingested through the defined feedback channel during validation runs.

---

## Dependencies & References

- **FR-047:** Install logging for framework dependencies (log integration).  
- **FR-030:** ai-dev-kit CLI tool (overall dependency management).  
- **Release Workflow:** Ensures artifact publishing is part of the release checklist.  
- **Documentation Agent:** Required for installation guide updates.

---

## Risks / Open Questions

- Need to define authoritative version matrix (which versions receive release assets).  
- Decide on storage/quota limits for Release artifacts (size per framework).  
- Ensure hash/publishing automation is secure (no leaking of credentials).

---

## Next Steps

1. Approve FR-062 under Epic 6 (CLI / Framework distribution) or Epic 5 (documentation) depending on ownership.  
2. Create implementation tasks: packaging automation, CLI validation, doc updates, UX validation run.  
3. Schedule a GitHub-release verification run (xoforge) once artifacts are published.
