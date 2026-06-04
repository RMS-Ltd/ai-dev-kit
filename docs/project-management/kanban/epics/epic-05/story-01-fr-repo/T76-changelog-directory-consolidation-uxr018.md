---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 76: Changelog Directory Consolidation (UXR-018)

**Task ID:** E05:S01:T76  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Small–Medium  
**Created:** 2026-06-04  
**Last updated:** 2026-06-04 (**RW** **v0.5.1.76+2** — UXR-018 consolidation complete)  
**Version:** v0.5.1.76+2  
**Code:** E05S01T76  

**Placement note:** Story 1 is a **historical FR registry** under FR-072 Approach D; this task is filed here per **maintainer-directed intake** (same pattern as recent E05:S01 anchors). Delivery semantics: documentation / legacy hygiene.

---

## Associated UXR

- **UXR-018:** [Changelog directory consolidation](../../../fr-br/UXR-018-changelog-directory-consolidation.md) — `docs/changelog/` vs `docs/changelog-and-release-notes/`

---

## Scope

Consolidate **legacy and stray changelog directory trees** into the **existing canonical pillar** `docs/changelog-and-release-notes/` without renaming the ~1,100-file `changelog-archive/` root (RNF3 / forensic retention).

**In scope:**

- Retire `docs/changelog/` after migrating its sole unique archive file (if not byte-duplicated in canonical tree).
- Remove `docs/knowledge/changelog-and-release-notes/` after hash verification against canonical archive.
- Repair **in-repo** inbound links that still reference `docs/changelog/`.
- Update portal/sidebar documentation to drop the “Changelog (legacy root)” extension once empty.
- Optional regression guard (pytest or validator) against reintroduction of legacy paths.
- Update `docs/changelog-and-release-notes/README.md` with single-pillar guidance.

**Out of scope:**

- Bulk rename of `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md` paths.
- Changing `rw-config.yaml` `changelog_dir` (already correct).
- Rewriting historical changelog bodies for path strings unless link validation requires it.

---

## Input

- **IPP:** [`IPP-E05S01T76-changelog-directory-consolidation.md`](../../../../implementation-cycles/IPP-E05S01T76-changelog-directory-consolidation.md)
- **Manifest:** [`changelog-directory-consolidation-manifest.md`](../../../../maintenance/changelog-directory-consolidation-manifest.md)
- **UXR-018:** [`UXR-018-changelog-directory-consolidation.md`](../../../fr-br/UXR-018-changelog-directory-consolidation.md)
- **Config SoT:** [`rw-config.yaml`](../../../../../../rw-config.yaml) → `changelog_dir`
- **Legacy file:** `docs/changelog/archive/0.4.14.4+1_epic-renumbering.md`
- **Stale link sources:** `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md`, `GITHUB_RELEASE_v0.4.14.4+1.md`
- **Portal map:** [`portal/README.md`](../../../../../../portal/README.md)
- **Related hygiene:** [E05:S01:T39](T39-ai-dev-kit-project-review-and-legacy-cleanup.md) / [FR-039](../../../fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)

---

## Deliverable

1. **Consolidation manifest** (in task doc or short `docs/maintenance/` note): files moved, deleted as duplicate, links updated.
2. **Empty legacy directories removed** (`docs/changelog/`, knowledge mirror).
3. **Portal/README** no longer advertises legacy `docs/changelog/` pillar.
4. **Optional:** `tests/` or validation script blocking legacy path recreation.
5. **FR-039 review checklist** item added or ticked for changelog pillar (if report exists when implemented).

---

## Acceptance Criteria

- [x] **AC1:** UXR-018 ↔ E05:S01:T76 bidirectional links present (intake complete).
- [x] **AC2:** No files remain under `docs/changelog/` or `docs/knowledge/changelog-and-release-notes/` (manifest + pytest).
- [x] **AC3:** Active index links repaired (`CHANGELOG_ARCHIVE.md`, `GITHUB_RELEASE_v0.4.14.4+1.md`).
- [x] **AC4:** `rw-config.yaml` `changelog_dir` unchanged (`tests/test_changelog_directory_layout.py`).
- [x] **AC5:** Portal sidebar/README updated; `npm run build` (FR-069).
- [x] **AC6:** IPP published and linked from this task.
- [x] **AC7:** Released via **RW E05:S01:T76** (**v0.5.1.76+2**).

---

## Implementation methodology (from UXR-018)

Execute in order; do not skip inventory.

| Phase | Action |
| ----- | ------ |
| **0 — Inventory** | `find` + SHA256 compare legacy vs canonical vs knowledge mirror; `rg 'docs/changelog/'` for inbound refs. |
| **1 — Content merge** | Move unique legacy archive file into `changelog-archive/`; delete byte-identical knowledge copies. |
| **2 — Link repair** | Fix `CHANGELOG_ARCHIVE.md`, `GITHUB_RELEASE_v0.4.14.4+1.md`, and any other active index links. |
| **3 — Portal** | Remove legacy pillar row from `portal/README.md` / sidebar config; extend canonical README. |
| **4 — Guardrails** | Add validator or pytest preventing `docs/changelog/` recreation. |
| **5 — Release** | RW with Step 7 four-surface reconciliation for UXR-018 + T76. |

---

## Version Anchor

**Forensic marker:** ✅ COMPLETE (**v0.5.1.76+2** — UXR-018 changelog directory consolidation)

---

## Dependencies

- **Blocked by:** IPW / IPP (FR-083 global implementation gate) — **cleared** for this slice.
- **Related:** E05:S01:T39 (FR-039), E07:S01:T10 (UXR-013), FR-066 (Docusaurus paths), IPP E7:S01:T11 RNF3.

---

## References

- [IPP-E05S01T76](../../../../implementation-cycles/IPP-E05S01T76-changelog-directory-consolidation.md)
- [Consolidation manifest](../../../../maintenance/changelog-directory-consolidation-manifest.md)
- [Story 1 — FR Repo](../story-01-fr-repo.md)
- [Changelog management policy](../../../../../architecture/standards-and-adrs/changelog-management-policy.md)
