---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 18: BR-087 framework slug install closure (wave 2)

**Task ID:** E06:S09:T18  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05  
**Version:** v0.6.9.18+2  
**Code:** E06S09T18

**Planning package:** [IPP-E6S9T18](../../../../implementation-cycles/IPP-E06S09T18-br087-framework-slug-install-closure.md)

**Upstream:** [BR-087](../../../fbu/BR-087-framework-install-directory-slug-mismatch.md)  
**Predecessor:** [E06:S09:T17](T17-framework-install-directory-slugs-br087.md) (**v0.6.9.17+1**)  
**Related:** [UXR-016](../../../fbu/UXR-016-install-setup-interactive-feedback-external-semver-version.md) · [FR-062](../../../fbu/FR-062-github-release-installation-experience.md) · [package-management-design.md](../../../../architecture/standards-and-adrs/package-management-design.md)

---

## Input

[BR-087](../../../fbu/BR-087-framework-install-directory-slug-mismatch.md) · [IPP-E6S9T18](../../../../implementation-cycles/IPP-E06S09T18-br087-framework-slug-install-closure.md) · [E06:S09:T17](T17-framework-install-directory-slugs-br087.md)

---

## Scope

Rename maintainer framework source directories to install slugs; wire install/update detection and UXR-016 warnings; republish checklist for release tarballs; adopter verification on Expenses Tracker.

---

## Problem

**T17** delivered slug-aware **release build**, **extract rename**, and **`relocate_legacy_framework_dirs.py`**, but adopters who **submodule/vendor-copy** still saw legacy names. Maintainer tree kept legacy directory names until this task.

---

## Goal

Close **BR-087** end-to-end for the **ai-dev-kit** repo: slug directories in source, install warnings, and republish guidance. **BR-087** remains OPEN until user confirms adopter replay.

---

## Deliverables

- [x] Update/install path runs or prompts slug relocation (Wave A.1)
- [x] Republish checklist — [br087-framework-release-republish-checklist.md](../../../../maintenance/br087-framework-release-republish-checklist.md) (Wave A.2; GitHub upload maintainer step)
- [x] Install feedback flags legacy framework paths (Wave A.3)
- [x] Install docs updated (Wave A.4)
- [x] Maintainer `packages/frameworks/` renamed to slugs (Wave B.5)
- [x] Reference sweep — active repo paths (exclude changelog-archive) (Wave B.6)
- [ ] Expenses Tracker adopter replay (BR-087 AC — pending user)
- [x] IPP linked — [IPP-E6S9T18](../../../../implementation-cycles/IPP-E06S09T18-br087-framework-slug-install-closure.md)

---

## Acceptance Criteria

- [x] `ls packages/frameworks/` on **ai-dev-kit** shows slug directory names only.
- [x] Install paths warn / relocate legacy layout (`ensure_frameworks_slug_layout`, session banner warning).
- [x] Tarball slug root verified via pytest (`test_create_tar_gz_uses_install_slug_not_source_dir_name`).
- [ ] **BR-087** RESOLVED after user verification.
- [x] **UXR-016** addendum A1/A2 implemented (legacy dir warning on install session).

---

## Version Anchor

✅ COMPLETE (**v0.6.9.18+2** — RW E06:S09:T18)
