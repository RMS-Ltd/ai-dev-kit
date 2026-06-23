---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 12: Changelog Directory Consolidation (UXR-018)

**Task ID:** E05:S09:T12  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Small–Medium  
**Created:** 2026-06-04  
**Last updated:** 2026-06-04 (**RW** **v0.5.9.12+3** — coordinate remediation + E05:S01 CLOSED)  
**Version:** v0.5.9.12+3  
**Code:** E05S09T12  

**Placement (KG-R6):** Documentation pillar + Docusaurus portal IA (sidebar deduplication, canonical `docs/` publish scope). **Not** the E05:S01 FR historical registry.

---

## Associated UXR

- **UXR-018:** [Changelog directory consolidation](../../../fbu/UXR-018-changelog-directory-consolidation.md) — `docs/changelog/` vs `docs/changelog-and-release-notes/`

---

## Scope

Consolidate **legacy and stray changelog directory trees** into the **existing canonical pillar** `docs/changelog-and-release-notes/` without renaming the ~1,100-file `changelog-archive/` root (RNF3 / forensic retention).

**In scope:**

- Retire `docs/changelog/` after migrating its sole unique archive file (if not byte-duplicated in canonical tree).
- Remove `docs/knowledge/changelog-and-release-notes/` after hash verification against canonical archive.
- Repair **in-repo** inbound links that still reference `docs/changelog/`.
- Update portal/sidebar documentation to drop the “Changelog (legacy root)” extension once empty.
- Regression guard (pytest) against reintroduction of legacy paths.
- Update `docs/changelog-and-release-notes/README.md` with single-pillar guidance.

**Out of scope:**

- Bulk rename of `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md` paths.
- Changing `rw-config.yaml` `changelog_dir` (already correct).
- Rewriting historical changelog bodies for path strings unless link validation requires it.

---

## Input

- **IPP:** [`IPP-E5S9T12-changelog-directory-consolidation.md`](../../../../implementation-cycles/IPP-E05S09T12-changelog-directory-consolidation.md)
- **Manifest:** [`changelog-directory-consolidation-manifest.md`](../../../../maintenance/changelog-directory-consolidation-manifest.md)
- **UXR-018:** [`UXR-018-changelog-directory-consolidation.md`](../../../fbu/UXR-018-changelog-directory-consolidation.md)
- **Config SoT:** [`rw-config.yaml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/rw-config.yaml) → `changelog_dir`
- **Portal map:** [`portal/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md)
- **Related:** [FR-066](../../../fbu/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md), [FR-039](../../../fbu/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md) / [E05:S01:T39](../story-01-fr-repo/T39-ai-dev-kit-project-review-and-legacy-cleanup.md)

---

## Deliverable

1. **Consolidation manifest** — files moved, duplicates removed, links updated.
2. **Empty legacy directories removed** (`docs/changelog/`, knowledge mirror).
3. **Portal/README** no longer advertises legacy `docs/changelog/` pillar.
4. **Pytest guard** blocking legacy path recreation.
5. **FR-039 review checklist** item for changelog pillar (when applicable).

---

## Acceptance Criteria

- [x] **AC1:** UXR-018 ↔ **E05:S09:T12** bidirectional links present.
- [x] **AC2:** No files remain under `docs/changelog/` or `docs/knowledge/changelog-and-release-notes/`.
- [x] **AC3:** Active index links repaired (`CHANGELOG_ARCHIVE.md`, `GITHUB_RELEASE_v0.4.14.4+1.md`).
- [x] **AC4:** `rw-config.yaml` `changelog_dir` unchanged.
- [x] **AC5:** Portal sidebar/README updated; `npm run build` (FR-069).
- [x] **AC6:** IPP published and linked from this task.
- [x] **AC7:** Released via **RW E05:S09:T12** (**v0.5.9.12+2**).

---

## Implementation methodology (from UXR-018)

| Phase | Action |
| ----- | ------ |
| **0 — Inventory** | `find` + SHA256 compare legacy vs canonical vs knowledge mirror; `rg 'docs/changelog/'` for inbound refs. |
| **1 — Content merge** | Move unique legacy archive file into `changelog-archive/`; delete byte-identical knowledge copies. |
| **2 — Link repair** | Fix `CHANGELOG_ARCHIVE.md`, `GITHUB_RELEASE_v0.4.14.4+1.md`, and other active index links. |
| **3 — Portal** | Remove legacy pillar from `portal/README.md` / `portal/sidebars.js`; extend canonical README. |
| **4 — Guardrails** | `tests/test_changelog_directory_layout.py` |
| **5 — Release** | RW Step 7 four-surface reconciliation for UXR-018 + T12 (**v0.5.9.12+2**) |

---

## Version Anchor

**Forensic marker:** ✅ COMPLETE (**v0.5.9.12+3** — UXR-018; coordinate remediation **v0.5.9.12+2** implementation)

---

## Dependencies

- **Related:** E05:S09 (Docusaurus portal), FR-066 publish scope, E05:S01:T39 (FR-039 hygiene sibling)

---

## References

- [IPP-E5S9T12](../../../../implementation-cycles/IPP-E05S09T12-changelog-directory-consolidation.md)
- [Consolidation manifest](../../../../maintenance/changelog-directory-consolidation-manifest.md)
- [Story 9 — Docusaurus Documentation Portal](../story-09-docusaurus-documentation-portal.md)
- [Coordinate remediation](../../../../maintenance/coordinate-remediation-uxr018-e05s09t12.md)
- [Changelog management policy](../../../../architecture/standards-and-adrs/changelog-management-policy.md)
