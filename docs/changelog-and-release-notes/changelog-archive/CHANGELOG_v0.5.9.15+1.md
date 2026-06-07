# Changelog v0.5.9.15+1

**Release Date:** 2026-06-07 10:07:12 UTC

**Epic:** 5 | **Story:** 9 | **Task:** 15

---

## Summary

E05:S09:T15 — **Change implemented:** FR-114 Docusaurus adopter-public publish allowlist — rescope portal from full `docs/` to explicit include/exclude; trim sidebars; narrow CI path filters; BR-068 link remediation in allowlisted corpus; RC release-notes scaffold; FR-114 contract tests. SemVer **v0.4.1021+1**.

---

## Changed

### Portal allowlist (FR-114 F1/F2)

- `portal/docusaurus.config.js` — expanded `exclude` globs for maintainer corpora (`project-management`, `implementation-cycles`, `architecture`, `knowledge`, etc.) plus `book-project/**`, agent index files; single-file include for `ide-whitelist-guide.md`.
- `portal/sidebars.js` — adopter-facing categories only (Guides, Documentation, Developer tools whitelist guide).
- `portal/README.md` — FR-114 allowlist tables, GitHub blob linking policy, CI path rationale, RC release-notes policy.

### Homepage & navigation (FR-068 successor)

- `portal/src/pages/index.js`, `portal/src/components/HomepageFeatures/index.js` — removed in-portal links to excluded trees; governance/versioning via GitHub URLs.

### CI (FR-114 NF1)

- `.github/workflows/docusaurus-build.yml` — narrowed `paths` to allowlisted `docs/guides/**`, `docs/documentation/**`, `ide-whitelist-guide.md`, `portal/**`.

### Allowlisted corpus link hygiene (BR-068 Strategy A)

- Remediated relative cross-tree links in `docs/guides/**`, `docs/documentation/**`, `docs/developer-tools/ide-whitelist-guide.md` → `https://github.com/RMS-Ltd/ai-dev-kit/blob/main/...`.

### RC release notes scaffold (FR-114 F6)

- `portal/blog/RELEASE-NOTES-POLICY.md` — policy stub for post-RC ≥ 1 milestones.

### Tests

- Added `tests/test_portal_fr114_allowlist.py`; updated `test_portal_fr066_docs_path.py`, `test_portal_fr068_navigation.py`, `test_portal_fr069_ci.py`, `test_portal_br068_monorepo_links.py`.

### Planning

- `docs/implementation-cycles/IPP-E05S09T15-docusaurus-adopter-public-publish-allowlist-fr114.md` — consolidated IPP.

---

## Verification

- `npm run build` in `portal/` — green (strict `onBrokenLinks` / `onBrokenMarkdownLinks` / `onBrokenAnchors` unchanged).
- `pytest tests/test_portal_fr114_allowlist.py tests/test_portal_fr066_docs_path.py tests/test_portal_fr068_navigation.py tests/test_portal_fr069_ci.py` — passed.
