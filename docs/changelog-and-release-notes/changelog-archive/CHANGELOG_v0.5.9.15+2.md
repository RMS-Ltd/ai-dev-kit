# Changelog v0.5.9.15+2

**Release Date:** 2026-06-07 12:30:00 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 15  
**SemVer:** v0.4.1033+2

---

## Summary

Wave 2 IPW completion for FR-114 Docusaurus adopter-public allowlist: ADR-024, expanded IPP, FR-066 supersession banner, shared `tests/portal_allowlist.py`, and dual release-notes location documentation.

---

## Changes

### Added

- **ADR-024** — Docusaurus adopter-public publish allowlist decision record ([`ADR-024-docusaurus-adopter-public-publish-allowlist-fr114.md`](../../architecture/standards-and-adrs/ADR-024-docusaurus-adopter-public-publish-allowlist-fr114.md))
- **`docs/release-notes/README.md`** — alternative RC ≥ 1 release notes location (policy stub)
- **`tests/portal_allowlist.py`** — shared allowlist constants for portal pytest modules
- **`test_fr114_t6`** — verifies release-notes alternative documentation

### Updated

- **IPP-E05S09T15** — full §1–§7 per IPW plan; Wave 2 ledger
- **FR-066** — partial supersession banner pointing to FR-114 / ADR-024
- **`portal/README.md`** — documents both `portal/blog/` and `docs/release-notes/` for RC release notes
- **T15 task doc** — ADR-024 reference links
- **`tests/test_portal_fr114_allowlist.py`**, **`tests/test_portal_br068_monorepo_links.py`** — import shared allowlist module

---

## Verification

- `pytest tests/test_portal_fr114_allowlist.py tests/test_portal_br068_monorepo_links.py tests/test_portal_fr066_docs_path.py tests/test_portal_fr069_ci.py tests/test_portal_fr068_navigation.py` — 32 passed
- `npm run build` in `portal/` — green

---

## References

- [IPP-E05S09T15](../../implementation-cycles/IPP-E05S09T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
- [FR-114](../../project-management/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
