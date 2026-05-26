# Changelog v0.1.4.7+2

**Release Date:** 2026-05-26 16:48:10 UTC  
**Epic | Story | Task:** E1:S04:T07 (`RW`, `--art`)  
**SemVer:** v0.4.813+2  

## Summary

**FR-099 Phase 4 — Rewire & verify:** Adopter-facing URLs and install defaults point at public [`earlution/ai-dev-kit`](https://github.com/earlution/ai-dev-kit); **FR-099** marked **IMPLEMENTED**. Maintainer private repo remains [`RMS-Ltd/hf-ai-dev-kit`](https://github.com/RMS-Ltd/hf-ai-dev-kit).

## Changes

### Rewire (AC7)

- **`rw-config.yaml`:** `canonical_public_repo` / `maintainer_private_repo` URLs.
- **`install_package_from_release.py`:** Default `--repo earlution/ai-dev-kit`.
- **`PACKAGE_INSTALLATION_GUIDE.md`**, **`upload_to_github_release.py`:** Release examples aligned.
- **`INSTALL_IN_YOUR_PROJECT.md`**, **`README.md`**, **`CONTRIBUTING.md`**, **`repo-structure-for-adopters.md`:** Canonical repository roles.

### Verification (AC6)

- **`scripts/fr099_install_smoke_test.sh`:** Public clone smoke (no `book-proj` / `Epic-24` dirs).
- **`scripts/fr099_sync_public_from_private.sh`:** Falls back to Phase 3 bootstrap replay when histories diverge.
- **`docs/maintenance/fr099-phase4-rewire-and-verify.md`:** Phase 4 runbook.

### Governance

- **FR-099** IMPLEMENTED; **ADR-006** Phases 1–4 complete; **IPP-E1S04** closed; **T07** archived; **FR-099** removed from active `fbuboard`.
