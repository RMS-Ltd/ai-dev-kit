---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-087: Framework packages install with legacy directory names (spaces, `&`)

**Bug ID:** BR-087  
**Priority:** HIGH  
**Severity:** MEDIUM (shell/CI friction; wrong paths in `rw-config.yaml` / docs)  
**Status:** OPEN (fix attempted **v0.6.9.17+1** — pending adopter verification)  
**Implementing Task:** [E06:S09:T17](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087.md) (**v0.6.9.17+1**)  
**Created:** 2026-06-04  
**Last Updated:** 2026-06-04  
**Source:** Expenses Tracker adopter update — `packages/frameworks/` still shows `workflow mgt`, `numbering & versioning`, `tooling & automation` after pulling latest AI Dev Kit

---

## Summary

Consumer projects expect **hyphenated install slugs** (`workflow-mgt`, `numbering-versioning`, `tooling-automation`) per [package-management-design.md](../../architecture/standards-and-adrs/package-management-design.md). After updating AI Dev Kit, adopters still see **maintainer source tree names** (spaces and `&`) under `packages/frameworks/`, breaking copy-paste commands, quoting in shells, and alignment with `install_package_from_release.py` verification paths.

---

## Root cause

1. **Release tarballs** — `build_package.py` archived files under `framework_dir.name` (e.g. `workflow mgt/`) while release assets and installer CLI use slugs (`workflow-mgt-v2.1.3.tar.gz`).
2. **Extract step** — `install_package_from_release.py` extracted archives as-is and verified `install_dir/workflow-mgt`, which did not exist when the archive root was `workflow mgt/`.
3. **Submodule / vendor copy** — Copying `vendor/ai-dev-kit/packages/frameworks/*` preserves maintainer directory names; no relocation step ran.

---

## Steps to reproduce

1. In a consumer repo (e.g. Expenses Tracker), update AI Dev Kit (submodule or release install).
2. List `packages/frameworks/`.
3. Observe directories with spaces and `&` instead of hyphenated slugs.

## Expected

```
packages/frameworks/
├── workflow-mgt/
├── numbering-versioning/
├── tooling-automation/
├── kanban/
...
```

## Actual

```
packages/frameworks/
├── workflow mgt/
├── numbering & versioning/
├── tooling & automation/
...
```

---

## Fix (attempted 2026-06-04)

| Area | Change |
|------|--------|
| `framework_install_slug.py` | Canonical slug mapping + relocate helper |
| `build_package.py` | Archive root uses install slug, not source dir name |
| `install_package_from_release.py` | Rename legacy archive root → slug on extract |
| `relocate_legacy_framework_dirs.py` | One-shot migration for submodule/vendor trees |

**Adopter migration (existing trees):**

```bash
python "packages/frameworks/workflow mgt/scripts/relocate_legacy_framework_dirs.py" \
  --frameworks-root packages/frameworks
```

Then update `rw-config.yaml` `scripts_path` and any docs to use `packages/frameworks/workflow-mgt/scripts/...`.

**Note:** Maintainer repo `ai-dev-kit` source tree may keep legacy names until a separate rename epic; release assets and consumer installs target slug names.

---

## Acceptance criteria

- [x] New release archives place framework files under `{slug}/` (e.g. `workflow-mgt/README.md`).
- [x] `install_package_from_release.py` leaves framework under `install_dir/{slug}/`.
- [x] Regression tests for slug normalization, archive layout, and extract rename.
- [ ] Expenses Tracker (or other adopter) confirms clean install / migration without space paths.
- [ ] Rebuilt GitHub release assets published with slug roots (maintainer release step).

---

## Related

- [FR-062](FR-062-github-release-installation-experience.md) — GitHub release install path  
- [package-management-design.md](../../architecture/standards-and-adrs/package-management-design.md) — `{framework-name}/` convention  
- [INSTALL_IN_YOUR_PROJECT.md](../../../../INSTALL_IN_YOUR_PROJECT.md) — submodule copy path (still documents legacy paths until doc sweep)
