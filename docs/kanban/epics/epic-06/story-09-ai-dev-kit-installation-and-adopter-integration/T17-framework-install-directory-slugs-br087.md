---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 17: Framework install directory slugs (BR-087)

**Task ID:** E06:S09:T17  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-04  
**Last updated:** 2026-06-04  
**Version:** v0.6.9.17+1  
**Code:** E06S09T17

**Upstream:** [BR-087](../../../fbu/BR-087-framework-install-directory-slug-mismatch.md)  
**Follow-up:** [E06:S09:T18](T18-br087-framework-slug-install-closure.md) — wave 2 closure (verification failed 2026-06-05)

---

## Input

- [BR-087](../../../fbu/BR-087-framework-install-directory-slug-mismatch.md) — Expenses Tracker adopter report: `packages/frameworks/` still has space/`&` directory names after kit update
- [package-management-design.md](../../../../architecture/standards-and-adrs/package-management-design.md) — hyphenated `{framework-name}/` convention

---

## Scope

1. Slug-normalized archive roots in `build_package.py`.
2. Extract-time rename in `install_package_from_release.py`.
3. `relocate_legacy_framework_dirs.py` for submodule/vendor migrations.
4. Pytest coverage in `tests/test_framework_install_slug.py`.

---

## Deliverables

- [x] `framework_install_slug.py`
- [x] Build + install script updates
- [x] Migration helper script
- [x] Tests green in ai-dev-kit CI
- [ ] Adopter verification (Expenses Tracker) — deferred to adopter replay (BR-087 AC)
- [ ] Republish affected GitHub release tarballs (maintainer) — deferred (BR-087 AC)

---

## Acceptance Criteria

- [x] Release archives place framework files under `\{slug\}/` (e.g. `workflow-mgt/README.md`)
- [x] `install_package_from_release.py` leaves framework under `install_dir/\{slug\}/`
- [x] Regression tests in `tests/test_framework_install_slug.py` pass
- [ ] Adopter verification on Expenses Tracker (BR-087 — **failed** 2026-06-05; legacy `packages/frameworks/` names persist — [UXR-016 addendum](../../../fbu/UXR-016-install-setup-interactive-feedback-external-semver-version.md#addendum--framework-directories-still-use-legacy-names-2026-06-05))
- [ ] Republished GitHub release tarballs with slug roots (maintainer follow-up)

**Version anchor:** v0.6.9.17+1 (RW E06:S09:T17)
