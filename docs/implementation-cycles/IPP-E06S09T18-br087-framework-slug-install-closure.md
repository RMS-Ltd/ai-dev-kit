---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T18 — Planning: BR-087 framework slug install closure (wave 2)

**Host Task:** [`T18-br087-framework-slug-install-closure.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure.md) **(E06:S09:T18)**  
**Planning for:** [BR-087](../kanban/fr-br/BR-087-framework-install-directory-slug-mismatch.md) · [UXR-016 addendum](../kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md)  
**Predecessor:** [T17](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087.md) (**v0.6.9.17+1**)  
**Status:** Approved (2026-06-05 — implementation authorized)

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Fresh **ai-dev-kit** checkout: slug-only top-level `packages/frameworks/` dirs | T18 AC |
| RF2 | Install/update paths auto-relocate or warn with migration command | T18 Wave A, UXR-016 A1/A2 |
| RF3 | GitHub release tarballs use `\{slug\}/` archive roots; republish checklist done | BR-087 AC |
| RF4 | Install docs normative on slugs; legacy names migration-only | T18 |
| RF5 | BR-087 RESOLVED only after user adopter verification | Project rules |
| RF6 | T17 slug mapping, extract rename, tests preserved | Regression |
| RNF1 | Reference sweep excludes `changelog-archive/` | Blast radius |
| RNF2 | RW E06:S09:T18 with Step 7 four-surface | FR-092 |

**Out of scope:** SemVer registry; Epic 5 FR-repo; UXR-017 kanban paths.

---

## 2. Specification

### Wave B — Maintainer rename (first)

`git mv`: `workflow mgt` → `workflow-mgt`, `numbering & versioning` → `numbering-versioning`, `tooling & automation` → `tooling-automation`.

Mechanical path update (active repo only): `rw-config.yaml`, CI, `build_packages.py`, tests, hooks, CLI, INSTALL guides, `.cursorrules`, `CLAUDE.md`.

### Wave A — Install automation

- `detect_legacy_framework_dir_names()` in `framework_install_slug.py`
- Hook: `install_package_from_release.py`, `cli/commands/install.py`, `install_ux_version.py` warnings
- Docs: slug normative paths

### Wave C — Release assets

- `build_packages.py` / `build_all_packages.sh`
- Maintainer republish + `tar -tzf` verify `\{slug\}/` root

### Status transitions (FR-094)

- Step 1: T18 **TODO → IN PROGRESS**
- Final: **COMPLETE** when RF1–RF4 evidenced; BR stays OPEN until user verifies RF5

---

## 2.5 ADR necessity

**Outcome:** `EXEMPT` — [package-management-design.md](../architecture/standards-and-adrs/package-management-design.md) already defines slug contract.

---

## 3. Test design

| Test | Covers |
|------|--------|
| `test_framework_install_slug.py` path update | RF6 |
| `test_detect_legacy_framework_dirs_*` | RF2 |
| `test_install_session_banner_warns_on_legacy_layout` | UXR-016 A2 |
| CI pytest script under `workflow-mgt/` | RNF1 |

---

## 4. Implementation plan (ordered)

1. Confirm T18 IN PROGRESS; link this IPP.
2. Wave B: git mv + reference sweep.
3. Wave A: detector + install hooks + UX warning + docs.
4. Wave C: build packages + republish checklist artifact.
5. Pytest green.
6. RW **E06:S09:T18 --art**.
7. Reconcile T18 COMPLETE; BR-087 fix attempted, OPEN pending user.

---

## 5. Documentation deliverables

| Doc | Action |
|-----|--------|
| IPP-E6S9T18 | This file |
| T18, BR-087, UXR-016, INSTALL, packages/README | Updated on RW |

---

## 7. Success / verification

- `ls packages/frameworks/` → slug names only.
- `pytest tests/test_framework_install_slug.py` pass.
- Sample tarball root `workflow-mgt/`.
- Adopter replay documented; user sign-off for BR RESOLVED.
